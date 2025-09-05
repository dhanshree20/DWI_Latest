// Services Section

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.client-button[data-target]');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Optional: briefly highlight the image after scroll
          targetElement.classList.add('highlight');
          setTimeout(() => {
            targetElement.classList.remove('highlight');
          }, 1500);
        }
      });
    });
  });

