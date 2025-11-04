/**
 * Modal dialog functionality
 * Handles opening, closing, and accessibility for modal dialogs
 */
(function () {
  'use strict';

  function initializeModals() {
    // Find all modals on the page
    const modals = document.querySelectorAll('[data-modal]');

    modals.forEach(function (modal) {
      const modalId = modal.id;
      const closeBtn = modal.querySelector('[data-modal-close]');
      
      // Find all triggers for this modal (buttons with data-modal-trigger="modal-id")
      const triggers = document.querySelectorAll('[data-modal-trigger="' + modalId + '"]');

      // Open modal when trigger clicked
      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          modal.showModal();
          // Focus close button for accessibility
          if (closeBtn) {
            closeBtn.focus();
          }
        });
      });

      // Close modal when close button clicked
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
      }

      // Close modal when clicking outside (on backdrop)
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.close();
        }
      });

      // Return focus to trigger when modal closes
      modal.addEventListener('close', function () {
        // Find the trigger that was last clicked
        triggers.forEach(function (trigger) {
          if (document.activeElement === modal || !document.contains(document.activeElement)) {
            trigger.focus();
          }
        });
      });

      // ESC key already handled by native dialog element
    });
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModals);
  } else {
    initializeModals();
  }

  // Reinitialize for dynamically added modals (for AJAX content)
  document.addEventListener('reinitializeModals', initializeModals);
})();