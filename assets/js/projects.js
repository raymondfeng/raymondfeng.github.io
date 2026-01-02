/**
 * Projects Module
 * Handles project filtering and display
 */

class Projects {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.projectCards = document.querySelectorAll('.project-card');
    this.currentFilter = 'all';

    this.init();
  }

  init() {
    this.setupFilters();
    this.showAllProjects(); // Show all projects initially
  }

  /**
   * Setup filter button click handlers
   */
  setupFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterProjects(filter);
        this.setActiveButton(e.target);
      });
    });
  }

  /**
   * Filter projects based on category
   */
  filterProjects(category) {
    this.currentFilter = category;

    this.projectCards.forEach(card => {
      const categories = card.getAttribute('data-category');

      if (!categories) {
        // If no category attribute, show it for 'all' filter only
        if (category === 'all') {
          this.showCard(card);
        } else {
          this.hideCard(card);
        }
        return;
      }

      const categoryArray = categories.split(',').map(cat => cat.trim());

      if (category === 'all') {
        this.showCard(card);
      } else if (categoryArray.includes(category)) {
        this.showCard(card);
      } else {
        this.hideCard(card);
      }
    });
  }

  /**
   * Show a project card with animation
   */
  showCard(card) {
    // Remove hidden class first if it exists
    card.style.display = 'block';

    // Use setTimeout to allow display change to take effect
    setTimeout(() => {
      card.classList.add('visible');
    }, 10);
  }

  /**
   * Hide a project card with animation
   */
  hideCard(card) {
    card.classList.remove('visible');

    // Wait for transition to complete before hiding
    setTimeout(() => {
      if (!card.classList.contains('visible')) {
        card.style.display = 'none';
      }
    }, 300);
  }

  /**
   * Show all projects
   */
  showAllProjects() {
    this.projectCards.forEach(card => {
      this.showCard(card);
    });
  }

  /**
   * Set active state on filter button
   */
  setActiveButton(activeButton) {
    this.filterButtons.forEach(button => {
      button.classList.remove('active');
    });
    activeButton.classList.add('active');
  }

  /**
   * Get current filter
   */
  getCurrentFilter() {
    return this.currentFilter;
  }

  /**
   * Reset filters to show all
   */
  reset() {
    this.filterProjects('all');
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
      this.setActiveButton(allButton);
    }
  }
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Projects;
}
