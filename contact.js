// Scroll + Page load animation
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.left-illustration, .right-content').forEach((el) => {
      observer.observe(el);
    });

    // Trigger animation immediately on page load if already in viewport
    window.addEventListener('load', () => {
      document.querySelectorAll('.left-illustration, .right-content').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('animate');
        }
      });
    });