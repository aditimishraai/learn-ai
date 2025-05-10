/**
 * AI Data Flow Tutorial - Main JavaScript
 * Contains general website functionality not specific to the architecture visualization
 */

/**
 * Initializes code highlighting for code blocks
 */
function initCodeHighlighting() {
    // If highlight.js is available
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
}

/**
 * Handles the navigation active state
 */
function setActiveNavLink() {
    // Get current page path
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Set active class for the current page link
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        
        // Compare href with current page
        if (href === filename || 
            (filename === '' && href === 'index.html') || 
            (filename === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Handles mobile navigation menu
 */
function setupMobileNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            mobileMenuButton.setAttribute('aria-expanded', 
                mobileMenuButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.remove('open');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Setup image lazy loading for performance
 */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Initialize the search functionality if available
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', event => {
            const searchTerm = event.target.value.toLowerCase().trim();
            
            if (searchTerm.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            // Simple search implementation - in a real site, this would be more sophisticated
            const resultsHtml = [];
            
            // Search through component data if available
            if (typeof componentData !== 'undefined') {
                for (const [id, component] of Object.entries(componentData)) {
                    if (component.title.toLowerCase().includes(searchTerm) || 
                        component.description.toLowerCase().includes(searchTerm)) {
                        resultsHtml.push(`
                            <li>
                                <a href="${component.link}">
                                    <span class="result-title">${component.title}</span>
                                    <span class="result-desc">${component.description.substring(0, 100)}...</span>
                                </a>
                            </li>
                        `);
                    }
                }
            }
            
            // Display results
            if (resultsHtml.length > 0) {
                searchResults.innerHTML = `<ul>${resultsHtml.join('')}</ul>`;
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<p>No results found</p>';
                searchResults.style.display = 'block';
            }
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', event => {
            if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

/**
 * Track outbound links for analytics (if analytics is implemented)
 */
function trackOutboundLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // If analytics is implemented, track outbound link
            if (typeof gtag !== 'undefined') {
                const href = this.getAttribute('href');
                // Example Google Analytics tracking
                gtag('event', 'click', {
                    'event_category': 'outbound',
                    'event_label': href
                });
            }
        });
    });
}

/**
 * Initialize all features on document load
 */
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupMobileNavigation();
    setupLazyLoading();
    initCodeHighlighting();
    initSearch();
    trackOutboundLinks();
});

/**
 * Handle loading events
 */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});