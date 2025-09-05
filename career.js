
  const openings = {
    "Technology & Engineering": 3,
    "Design & Brand Marketing": 2,
    "AI & Machine Learning": 1,
    "Sales": 1,
  };

  document.querySelectorAll(".career-card").forEach(card => {
    const title = card.querySelector("h3").textContent.trim();
    const count = openings[title];
    if (count) {
      card.querySelector(".count").textContent = count;
    }
  });





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