/**
 * AI Data Flow Architecture Interactive Components
 * This script handles the interactive behavior of the architecture diagram
 */

// Component data for detail panel
const componentData = {
    // Data Sources
    'text-data': {
        title: 'Text Data',
        icon: 'T',
        description: 'Text data encompasses all written or typed content that can be analyzed by AI systems. This includes documents, articles, emails, chat logs, social media posts, and other textual information.',
        features: ['Natural Language Processing', 'Sentiment Analysis', 'Text Classification', 'Information Extraction'],
        link: 'data-sources.html#text-data',
        color: '#2196f3'
    },
    'relational-data': {
        title: 'Relational Data',
        icon: 'DB',
        description: 'Structured data organized in tables with relationships between them. Typically stored in relational database management systems (RDBMS) with defined schemas and SQL query capabilities.',
        features: ['SQL', 'ACID Transactions', 'Referential Integrity', 'Normalized Structure'],
        link: 'data-sources.html#relational-data',
        color: '#2196f3'
    },
    'visual-data': {
        title: 'Visual Data',
        icon: 'V',
        description: 'Images and other visual content that can be processed by computer vision algorithms. This includes photographs, diagrams, charts, and other graphical representations.',
        features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Scene Understanding'],
        link: 'data-sources.html#visual-data',
        color: '#2196f3'
    },
    'video-data': {
        title: 'Video Data',
        icon: '🎬',
        description: 'Time-series visual information that requires processing both spatial and temporal dimensions. Video data adds the complexity of analyzing how visual information changes over time.',
        features: ['Action Recognition', 'Video Segmentation', 'Motion Analysis', 'Temporal Pattern Detection'],
        link: 'data-sources.html#video-data',
        color: '#2196f3'
    },
    'audio-data': {
        title: 'Audio Data',
        icon: '🔊',
        description: 'Sound recordings that can be analyzed for speech, music, environmental sounds, and other acoustic information. Audio processing is key for speech recognition and sound analysis.',
        features: ['Speech Recognition', 'Speaker Identification', 'Sound Classification', 'Audio Fingerprinting'],
        link: 'data-sources.html#audio-data',
        color: '#2196f3'
    },
    'non-relational-data': {
        title: 'Non-Relational Data',
        icon: 'NoS',
        description: 'Data that doesn\'t fit into the traditional table structure of relational databases. This includes document stores, key-value pairs, graph databases, and other NoSQL formats.',
        features: ['Schema Flexibility', 'Horizontal Scalability', 'Document-Oriented Storage', 'Graph Relationships'],
        link: 'data-sources.html#non-relational-data',
        color: '#2196f3'
    },
    'meta-data': {
        title: 'Meta Data',
        icon: 'M',
        description: 'Data about data - including information about when data was created, who created it, what format it\'s in, and other contextual information that helps organize and understand primary data.',
        features: ['Data Cataloging', 'Lineage Tracking', 'Data Discovery', 'Context Enrichment'],
        link: 'data-sources.html#meta-data',
        color: '#2196f3'
    },
    
    // Data Engineering
    'data-engineers': {
        title: 'Data Engineers',
        icon: 'DE',
        description: 'Professionals who design, build, and maintain the systems that collect, store, and process data. They create the pipelines that transform raw data into formats suitable for analysis and AI applications.',
        features: ['REST APIs', 'ETL Processing', 'SQL & NoSQL', 'Python/Scala', 'Cloud Infrastructure'],
        link: 'data-engineering.html#data-engineers',
        color: '#ff7043'
    },
    'data-pipeline': {
        title: 'Data Pipeline',
        icon: 'DP',
        description: 'The orchestrated flow of data from source systems through various processing stages to its final destination. Pipelines automate the movement and transformation of data throughout the organization.',
        features: ['Data Extraction', 'Data Transformation', 'Data Loading', 'Error Handling', 'Monitoring'],
        link: 'data-engineering.html#data-pipeline',
        color: '#ff7043'
    },
    'data-lake': {
        title: 'Data Lake',
        icon: 'DL',
        description: 'A centralized repository that allows you to store all your structured and unstructured data at any scale. Unlike data warehouses, data lakes store data in its native format until it\'s needed.',
        features: ['Raw Data Storage', 'Schema-on-Read', 'Support for All Data Types', 'Scalability', 'Cost-Effective Storage'],
        link: 'data-engineering.html#data-lake',
        color: '#ff7043'
    },
    'data-medallion': {
        title: 'Data Medallion Architecture',
        icon: 'DM',
        description: 'A data design pattern that organizes data in progressively more refined tiers: Bronze (raw data), Silver (validated and cleaned data), and Gold (business-level, aggregated data).',
        features: ['Bronze Tier', 'Silver Tier', 'Gold Tier', 'Progressive Refinement', 'Data Quality Layers'],
        link: 'data-engineering.html#data-medallion',
        color: '#ff7043'
    },
    'data-modeling': {
        title: 'Data Modeling',
        icon: 'DM',
        description: 'The process of creating a conceptual representation of data objects, their relationships, and the rules that govern them. This includes designing schemas, defining relationships, and optimizing for performance.',
        features: ['Schema Design', 'Data Segregation', 'Query Optimization', 'Data Governance', 'Storage Management'],
        link: 'data-engineering.html#data-modeling',
        color: '#ff7043'
    },
    'data-ops': {
        title: 'Data Ops',
        icon: 'DO',
        description: 'The application of DevOps principles to data management, focusing on automation, monitoring, and continuous delivery of data services. DataOps aims to improve the quality and reduce the cycle time of data analytics.',
        features: ['Pipeline Monitoring', 'Data Infrastructure', 'Automation', 'Continuous Integration', 'Incident Response'],
        link: 'data-engineering.html#data-ops',
        color: '#ff7043'
    },
    
    // AI Components
    'neural-networks': {
        title: 'Neural Networks',
        icon: 'NN',
        description: 'Computing systems inspired by the biological neural networks in animal brains. They form the foundation of many modern AI systems and consist of interconnected nodes (neurons) organized in layers.',
        features: ['Layered Architecture', 'Backpropagation', 'Activation Functions', 'Weight Optimization'],
        link: 'ai-components.html#neural-networks',
        color: '#5e35b1'
    },
    'data-science': {
        title: 'Data Science',
        icon: 'DS',
        description: 'The interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
        features: ['Statistical Analysis', 'Data Visualization', 'Exploratory Analysis', 'Hypothesis Testing'],
        link: 'ai-components.html#data-science',
        color: '#5e35b1'
    },
    'deep-learning': {
        title: 'Deep Learning',
        icon: 'DL',
        description: 'A subset of machine learning that uses neural networks with multiple layers (deep neural networks) to analyze various factors with a structure similar to the human brain.',
        features: ['Feature Learning', 'Hierarchical Representations', 'Complex Pattern Recognition', 'End-to-End Learning'],
        link: 'ai-components.html#deep-learning',
        color: '#5e35b1'
    },
    'machine-learning': {
        title: 'Machine Learning',
        icon: 'ML',
        description: 'The study of computer algorithms that improve automatically through experience and by the use of data. ML algorithms build a model based on sample data to make predictions or decisions without being explicitly programmed.',
        features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Feature Engineering'],
        link: 'ai-components.html#machine-learning',
        color: '#5e35b1'
    },
    'agi-learning': {
        title: 'AGI Learning',
        icon: 'AGI',
        description: 'Artificial General Intelligence (AGI) learning refers to the development of AI systems with generalized cognitive abilities comparable to human intelligence across multiple domains.',
        features: ['Cross-Domain Learning', 'Abstract Reasoning', 'Adaptation', 'Self-Improvement'],
        link: 'ai-components.html#agi-learning',
        color: '#5e35b1'
    },
    'gen-ai': {
        title: 'Generative AI',
        icon: 'GEN',
        description: 'AI systems capable of creating new content, rather than just analyzing or classifying existing data. This includes language models, image generators, and other creative AI applications.',
        features: ['Text Generation', 'Image Synthesis', 'RAG Systems', 'Knowledge Bases', 'Agent Capabilities'],
        link: 'ai-components.html#gen-ai',
        color: '#5e35b1'
    },
    
    // AI Applications
    'chat-apps': {
        title: 'Chat Applications',
        icon: 'CA',
        description: 'Conversational interfaces that leverage AI language models to engage in dialogue with users. These applications can answer questions, provide assistance, and simulate human-like conversation.',
        features: ['Natural Dialogue', 'Context Retention', 'Knowledge Retrieval', 'Personalization'],
        link: 'ai-applications.html#chat-apps',
        color: '#00897b'
    },
    'headless-apps': {
        title: 'Headless Applications',
        icon: 'HA',
        description: 'AI systems that operate without direct user interfaces, integrating into existing systems and workflows to provide AI capabilities behind the scenes.',
        features: ['API-First Design', 'System Integration', 'Background Processing', 'Service Architecture'],
        link: 'ai-applications.html#headless-apps',
        color: '#00897b'
    },
    'llm-apps': {
        title: 'LLM Applications',
        icon: 'LLM',
        description: 'Applications that leverage Large Language Models to process, generate, and manipulate text for various purposes such as content creation, summarization, and translation.',
        features: ['Content Generation', 'Summarization', 'Translation', 'Code Generation'],
        link: 'ai-applications.html#llm-apps',
        color: '#00897b'
    },
    'recommendation-apps': {
        title: 'Recommendation Applications',
        icon: 'RA',
        description: 'Systems that analyze user preferences and behavior to suggest relevant products, content, or actions. These applications improve user experience through personalization.',
        features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-Time Recommendations'],
        link: 'ai-applications.html#recommendation-apps',
        color: '#00897b'
    },
    'operator-apps': {
        title: 'Operator Applications',
        icon: 'OA',
        description: 'Specialized AI applications that perform specific tasks or functions within larger systems, often handling routine operations automatically and with minimal human intervention.',
        features: ['Task Automation', 'System Integration', 'Rule-Based Operations', 'Monitoring & Alerts'],
        link: 'ai-applications.html#operator-apps',
        color: '#00897b'
    },
    'automation-tools': {
        title: 'Automation Tools',
        icon: 'AT',
        description: 'Tools like RPA (Robotic Process Automation), BPA (Business Process Automation), and visualization dashboards that leverage AI to automate workflows and provide insights.',
        features: ['Process Automation', 'Data Visualization', 'Workflow Management', 'Decision Support'],
        link: 'ai-applications.html#automation-tools',
        color: '#00897b'
    },
    
    // ETL Process
    'extract-process': {
        title: 'Extract Process',
        icon: 'E',
        description: 'The first phase of the ETL process, where data is collected from various source systems. This can involve querying databases, accessing APIs, or reading files from different locations.',
        features: ['Data Collection', 'Source System Integration', 'Query Optimization', 'Data Discovery'],
        link: 'data-engineering.html#extract',
        color: '#1e88e5'
    },
    'transform-process': {
        title: 'Transform Process',
        icon: 'T',
        description: 'The middle phase of ETL where raw data is cleaned, validated, and converted into a format suitable for analysis and AI processing. This is often the most complex and resource-intensive part of ETL.',
        features: ['Data Cleaning', 'Validation', 'Normalization', 'Enrichment', 'Aggregation'],
        link: 'data-engineering.html#transform',
        color: '#7b1fa2'
    },
    'load-process': {
        title: 'Load Process',
        icon: 'L',
        description: 'The final phase of ETL where transformed data is loaded into target systems such as data warehouses, data lakes, or specific applications for consumption by business users and AI systems.',
        features: ['Data Storage', 'Indexing', 'Partitioning', 'Compression', 'Access Control'],
        link: 'data-engineering.html#load',
        color: '#43a047'
    }
};

/**
 * Function to populate and show detail panel
 * @param {string} componentId - The ID of the component to display
 */
function showDetailPanel(componentId) {
    const component = componentData[componentId];
    if (!component) return;
    
    const detailPanel = document.getElementById('detailPanel');
    const detailIcon = document.getElementById('detailIcon');
    const detailTitle = document.getElementById('detailTitle');
    const detailDescription = document.getElementById('detailDescription');
    const detailFeatures = document.getElementById('detailFeatures');
    const learnMoreLink = document.getElementById('learnMoreLink');
    
    // Clear previous active state
    document.querySelectorAll('.arch-box.active, .etl-step.active').forEach(box => {
        box.classList.remove('active');
    });
    
    // Set active state on clicked component
    const activeElement = document.querySelector(`[data-target="${componentId}"]`);
    if (activeElement) {
        activeElement.classList.add('active');
    }
    
    // Update detail panel content
    detailIcon.textContent = component.icon;
    detailIcon.style.backgroundColor = component.color;
    detailTitle.textContent = component.title;
    detailDescription.textContent = component.description;
    
    // Update features
    detailFeatures.innerHTML = '';
    component.features.forEach(feature => {
        const featureTag = document.createElement('span');
        featureTag.className = 'feature-tag';
        featureTag.textContent = feature;
        detailFeatures.appendChild(featureTag);
    });
    
    // Update learn more link if it exists
    if (learnMoreLink) {
        learnMoreLink.textContent = `Learn More About ${component.title}`;
        learnMoreLink.href = component.link;
    }
    
    // Show the panel
    detailPanel.classList.add('open');
}

/**
 * Initialize the architecture interaction
 */
function initArchitecture() {
    // Add click event listeners to all architecture boxes
    document.querySelectorAll('.arch-box, .etl-step').forEach(box => {
        box.addEventListener('click', () => {
            const componentId = box.getAttribute('data-target');
            showDetailPanel(componentId);
        });
    });

    // Highlight a random component on page load for visual interest
    const allComponents = document.querySelectorAll('.arch-box');
    if (allComponents.length > 0) {
        const randomComponent = allComponents[Math.floor(Math.random() * allComponents.length)];
        randomComponent.classList.add('pulse');
        
        // After a few seconds, show the detail panel for this component
        setTimeout(() => {
            const componentId = randomComponent.getAttribute('data-target');
            showDetailPanel(componentId);
            randomComponent.classList.remove('pulse');
        }, 1500);
    }
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.toggle('open');
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('open');
                    }
                }
            }
        });
    });
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * Document ready function
 */
document.addEventListener('DOMContentLoaded', function() {
    initArchitecture();
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
});