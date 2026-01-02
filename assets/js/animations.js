/**
 * Animations Module
 * Handles scroll-triggered animations, counter animations, and skill bar animations
 */

class Animations {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.counters = document.querySelectorAll('.achievement-number[data-count]');
    this.skillBars = document.querySelectorAll('.skill-fill[data-level]');
    this.countersAnimated = false;

    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
    this.setupSkillBarAnimations();
  }

  /**
   * Setup Intersection Observer for scroll animations
   */
  setupScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    this.animatedElements.forEach(element => observer.observe(element));
  }

  /**
   * Setup counter animations for achievement numbers
   */
  setupCounterAnimations() {
    if (this.counters.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.countersAnimated) {
          this.countersAnimated = true;
          this.animateCounters();
          observer.disconnect();
        }
      });
    }, observerOptions);

    // Observe the achievements grid container
    const achievementsSection = document.querySelector('.achievements-grid');
    if (achievementsSection) {
      observer.observe(achievementsSection);
    }
  }

  /**
   * Animate counter numbers with easing
   */
  animateCounters() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const start = 0;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(start + (target - start) * easeProgress);

        counter.textContent = this.formatNumber(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = this.formatNumber(target);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }

  /**
   * Format numbers with commas for readability
   */
  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K+';
    }
    return num.toLocaleString();
  }

  /**
   * Setup skill bar animations
   */
  setupSkillBarAnimations() {
    if (this.skillBars.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-fill[data-level]');

          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              const level = bar.getAttribute('data-level');
              bar.style.width = `${level}%`;
            }, index * 100); // Stagger effect
          });

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each skill category
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => observer.observe(category));
  }

  /**
   * Reset animations (useful for testing)
   */
  reset() {
    this.animatedElements.forEach(element => {
      element.classList.remove('animated');
    });

    this.counters.forEach(counter => {
      counter.textContent = '0';
    });

    this.skillBars.forEach(bar => {
      bar.style.width = '0%';
    });

    this.countersAnimated = false;

    // Reinitialize
    this.init();
  }
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Animations;
}
