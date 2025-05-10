class ChatWidget {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.messages = [];
        this.isMaximized = false;
        this.isMinimized = false;
        this.initializeWidget();
        this.setupEventListeners();
        this.loadChatHistory();
        this.showWelcomeMessage();
    }

    initializeWidget() {
        const widget = document.createElement('div');
        widget.className = 'chat-widget';
        widget.innerHTML = `
            <div class="chat-header">
                <h3>AI Assistant</h3>
                <div class="chat-controls">
                    <button class="maximize-button" title="Maximize">□</button>
                    <button class="chat-toggle" title="Minimize">−</button>
                </div>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <input type="text" placeholder="Ask about ${this.getPageContext()}..." />
                <button class="send-button">
                    <span>Send</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
                    </svg>
                </button>
            </div>
            <div class="typing-indicator" style="display: none;">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        document.body.appendChild(widget);
        this.widget = widget;
        this.messagesContainer = widget.querySelector('.chat-messages');
        this.input = widget.querySelector('input');
        this.sendButton = widget.querySelector('.send-button');
        this.toggleButton = widget.querySelector('.chat-toggle');
        this.maximizeButton = widget.querySelector('.maximize-button');
    }

    setupEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.sendMessage());

        // Send message on Enter key
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Toggle chat widget
        this.toggleButton.addEventListener('click', () => {
            this.toggleMinimize();
        });

        // Maximize/Restore chat widget
        this.maximizeButton.addEventListener('click', () => {
            this.toggleMaximize();
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (this.isMaximized) {
                this.updateMaximizedSize();
            }
        });

        // Focus input when clicking anywhere in the chat widget
        this.widget.addEventListener('click', () => {
            if (!this.isMinimized) {
                this.input.focus();
            }
        });

        // Handle input focus
        this.input.addEventListener('focus', () => {
            this.widget.classList.add('focused');
        });

        this.input.addEventListener('blur', () => {
            this.widget.classList.remove('focused');
        });
    }

    toggleMinimize() {
        this.isMinimized = !this.isMinimized;
        const messages = this.widget.querySelector('.chat-messages');
        const input = this.widget.querySelector('.chat-input');
        const typingIndicator = this.widget.querySelector('.typing-indicator');
        
        if (this.isMinimized) {
            messages.style.display = 'none';
            input.style.display = 'none';
            typingIndicator.style.display = 'none';
            this.toggleButton.textContent = '+';
            this.widget.classList.add('minimized');
        } else {
            messages.style.display = 'flex';
            input.style.display = 'flex';
            this.toggleButton.textContent = '−';
            this.widget.classList.remove('minimized');
            this.input.focus();
        }
    }

    toggleMaximize() {
        this.isMaximized = !this.isMaximized;
        this.widget.classList.toggle('maximized');
        this.maximizeButton.textContent = this.isMaximized ? '❐' : '□';
        
        if (this.isMaximized) {
            this.updateMaximizedSize();
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        } else {
            this.widget.style.width = '';
            this.widget.style.height = '';
            this.widget.style.top = '';
            this.widget.style.left = '';
        }
    }

    updateMaximizedSize() {
        const navHeight = document.querySelector('nav').offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        this.widget.style.width = `${windowWidth * 0.8}px`;
        this.widget.style.height = `${windowHeight - navHeight - 40}px`;
        this.widget.style.top = `${navHeight + 20}px`;
        this.widget.style.left = `${(windowWidth - (windowWidth * 0.8)) / 2}px`;
    }

    showWelcomeMessage() {
        const welcomeMessage = `👋 Hi! I'm your AI assistant. I can help you learn about ${this.getPageContext()}. 
        
Here are some things you can ask me:
• Explain the key concepts
• Show code examples
• Provide best practices
• Answer specific questions

Feel free to ask anything!`;
        
        this.addMessage('assistant', welcomeMessage);
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Clear input and focus
        this.input.value = '';
        this.input.focus();

        // Add user message
        this.addMessage('user', message);

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const response = await this.getAIResponse(message);
            this.hideTypingIndicator();
            this.addMessage('assistant', response);
        } catch (error) {
            console.error('Error getting AI response:', error);
            this.hideTypingIndicator();
            this.addMessage('assistant', 'Sorry, I encountered an error. Please try again.');
        }
    }

    async getAIResponse(message) {
        const prompt = this.constructPrompt(message);
        
        try {
            const response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'qwen3:1.7b',
                    prompt: prompt,
                    stream: false
                })
            });

            if (!response.ok) {
                throw new Error('Failed to get response from Ollama');
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    constructPrompt(message) {
        const context = this.getPageContext();
        return `You are an AI assistant helping with a tutorial about ${context}. 
                Current page: ${this.currentPage}
                User question: ${message}
                Please provide a helpful response that is relevant to the current page content.
                Format your response with rich text using these rules:
                - Use **bold** for important terms
                - Use *italic* for emphasis
                - Use bullet points for lists
                - Use > for quotes or important notes
                - Use \`code\` for technical terms
                - Use --- for section breaks
                - Keep responses concise and engaging
                - Include examples when relevant
                - Use emojis sparingly for emphasis`;
    }

    getPageContext() {
        switch (this.currentPage) {
            case 'index.html':
                return 'AI data flow overview';
            case 'data-sources.html':
                return 'data sources and collection';
            case 'data-engineering.html':
                return 'data engineering and ETL processes';
            case 'ai-components.html':
                return 'AI components and technologies';
            case 'ai-applications.html':
                return 'AI applications and use cases';
            case 'architecture-flow.html':
                return 'system architecture and data flow';
            default:
                return 'AI data flow';
        }
    }

    addMessage(role, content) {
        const message = { role, content, timestamp: new Date().toISOString() };
        this.messages.push(message);
        this.renderMessage(message);
        this.saveChatHistory();
        
        // Scroll to bottom with smooth animation
        this.messagesContainer.scrollTo({
            top: this.messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }

    renderMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.role}-message`;
        
        // Format the content with rich text
        const formattedContent = this.formatMessage(message.content);
        
        messageElement.innerHTML = `
            <div class="message-content">${formattedContent}</div>
            <div class="message-timestamp">${new Date(message.timestamp).toLocaleTimeString()}</div>
        `;
        
        this.messagesContainer.appendChild(messageElement);
    }

    formatMessage(content) {
        // Convert URLs to clickable links
        let formatted = content.replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank" class="message-link">$1</a>'
        );

        // Format bold text
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Format italic text
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Format code blocks
        formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');

        // Format quotes
        formatted = formatted.replace(/^>\s*(.*?)$/gm, '<blockquote>$1</blockquote>');

        // Format bullet points
        formatted = formatted.replace(/^[-*]\s*(.*?)$/gm, '<li>$1</li>');
        formatted = formatted.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');

        // Format section breaks
        formatted = formatted.replace(/---/g, '<hr class="message-divider">');

        // Convert line breaks to <br>
        formatted = formatted.replace(/\n/g, '<br>');

        return formatted;
    }

    showTypingIndicator() {
        const indicator = this.widget.querySelector('.typing-indicator');
        indicator.style.display = 'flex';
    }

    hideTypingIndicator() {
        const indicator = this.widget.querySelector('.typing-indicator');
        indicator.style.display = 'none';
    }

    saveChatHistory() {
        const history = {
            page: this.currentPage,
            messages: this.messages
        };
        localStorage.setItem(`chat_history_${this.currentPage}`, JSON.stringify(history));
    }

    loadChatHistory() {
        const saved = localStorage.getItem(`chat_history_${this.currentPage}`);
        if (saved) {
            const history = JSON.parse(saved);
            this.messages = history.messages;
            this.messages.forEach(message => this.renderMessage(message));
        }
    }
}

// Initialize chat widget when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
}); 