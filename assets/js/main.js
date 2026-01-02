/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */

(function() {
  'use strict';

  // Store module instances
  let navigation, animations, projects;

  /**
   * Initialize all modules
   */
  function init() {
    try {
      // Initialize Navigation module
      if (typeof Navigation !== 'undefined') {
        navigation = new Navigation();
        console.log('Navigation module initialized');
      }

      // Initialize Animations module
      if (typeof Animations !== 'undefined') {
        animations = new Animations();
        console.log('Animations module initialized');
      }

      // Initialize Projects module
      if (typeof Projects !== 'undefined') {
        projects = new Projects();
        console.log('Projects module initialized');
      }

      // Add loading complete class to body
      document.body.classList.add('loaded');

      console.log('All modules initialized successfully');
    } catch (error) {
      console.error('Error initializing modules:', error);
    }
  }

  /**
   * Handle page load events
   */
  function handlePageLoad() {
    // Remove any loading indicators if present
    const loader = document.querySelector('.page-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }

    // Trigger initial animations if needed
    if (animations && typeof animations.init === 'function') {
      // Animations are already initialized, but we can trigger specific ones here
    }
  }

  /**
   * Handle window resize with debouncing
   */
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      console.log('Window resized');
      // Add any resize-specific logic here if needed
    }, 250);
  }

  /**
   * Setup global event listeners
   */
  function setupGlobalListeners() {
    // Window resize handler
    window.addEventListener('resize', handleResize);

    // Page visibility change handler
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('Page hidden');
      } else {
        console.log('Page visible');
      }
    });

    // Handle online/offline status
    window.addEventListener('online', () => {
      console.log('Connection restored');
    });

    window.addEventListener('offline', () => {
      console.log('Connection lost');
    });
  }

  /**
   * Expose modules globally for debugging (development only)
   */
  function exposeModules() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.appModules = {
        navigation,
        animations,
        projects
      };
      console.log('Modules exposed to window.appModules for debugging');
    }
  }

  /**
   * Main initialization sequence
   */
  function bootstrap() {
    // Initialize modules
    init();

    // Setup global listeners
    setupGlobalListeners();

    // Handle page load completion
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    // Expose modules for debugging
    exposeModules();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    // DOM already loaded
    bootstrap();
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (event) => {
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection && navigation) {
        const navHeight = document.getElementById('mainNav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });

})();
