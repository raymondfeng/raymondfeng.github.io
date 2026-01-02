/**
 * Navigation Module
 * Handles smooth scrolling, scroll spy, sticky header, and mobile menu
 */

class Navigation {
  constructor() {
    this.nav = document.getElementById('mainNav');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.menuToggle = document.getElementById('menuToggle');
    this.navMenu = document.getElementById('navMenu');
    this.lastScrollTop = 0;
    this.scrollThreshold = 100;

    this.init();
  }

  init() {
    this.setupSmoothScroll();
    this.setupScrollSpy();
    this.setupStickyHeader();
    this.setupMobileMenu();
    this.setupExpandToggles();
  }

  /**
   * Setup smooth scrolling for navigation links
   */
  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Close mobile menu if open
          if (window.innerWidth < 768) {
            this.closeMobileMenu();
          }

          // Calculate offset for fixed header
          const navHeight = this.nav.offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      });
    });

    // Handle hash on page load
    if (window.location.hash) {
      setTimeout(() => {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
          const navHeight = this.nav.offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  /**
   * Setup scroll spy to highlight active section in navigation
   */
  setupScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  /**
   * Set active link in navigation
   */
  setActiveLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Setup sticky header with show/hide on scroll
   */
  setupStickyHeader() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /**
   * Handle scroll behavior for sticky header
   */
  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide/show header based on scroll direction
    if (scrollTop > this.lastScrollTop && scrollTop > this.scrollThreshold) {
      // Scrolling down
      this.nav.classList.add('hidden');
    } else {
      // Scrolling up
      this.nav.classList.remove('hidden');
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  /**
   * Setup mobile menu toggle
   */
  setupMobileMenu() {
    if (this.menuToggle && this.navMenu) {
      this.menuToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.nav.contains(e.target) && this.navMenu.classList.contains('active')) {
          this.closeMobileMenu();
        }
      });

      // Close menu when clicking nav links
      this.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 768) {
            this.closeMobileMenu();
          }
        });
      });

      // Close menu on window resize if mobile menu is open
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
          this.closeMobileMenu();
        }
      });
    }
  }

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
    this.menuToggle.classList.toggle('active');
    document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Setup expand/collapse toggles for experience items
   */
  setupExpandToggles() {
    const toggleButtons = document.querySelectorAll('.expand-toggle');

    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const content = button.nextElementSibling;
        const isExpanded = content.classList.contains('expanded');

        if (isExpanded) {
          content.classList.remove('expanded');
          button.textContent = 'Read More';
        } else {
          content.classList.add('expanded');
          button.textContent = 'Show Less';
        }
      });
    });
  }
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
