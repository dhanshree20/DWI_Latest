// Hero Section
  const texts = [
    { label: "Web Development", image: "Services_Images/Web_development_1.jpg" },
    { label: "App Development", image: "Services_Images/App_Development_1.jpg" },
    { label: "UI UX Design", image: "Services_Images/UI_UX_4.jpg" },
    { label: "MVP to Product", image: "Services_Images/mvp_to_product.jpg" },
    { label: "AI & Machine Learning", image: "Services_Images/AI_ML_1.jpg" },
    { label: "Hardware & IoT Development", image: "Services_Images/IOT_1.jpg" },
    { label: "ERP & CRM Systems", image: "Services_Images/ERP_CRM_2.jpg" },
    { label: "Resource-Outsource", image: "Services_Images/Resource_outsource_1.jpg" },
    { label: "Custom Software Development", image: "Services_Images/Custom_SD_1.jpg" },
  ];

  const textElement = document.getElementById("animated-text");
  const imageElement = document.getElementById("changing-image");

  let index = 0;

  setInterval(() => {
    // Remove animation class
    textElement.classList.remove("animate-up");
    imageElement.style.opacity = 0;

    // Wait a short time before changing content
    setTimeout(() => {
      // Update text
      textElement.textContent = texts[index].label;
      // Update image
      imageElement.src = texts[index].image;

      // Re-apply animation
      textElement.classList.add("animate-up");
      imageElement.style.opacity = 1;

      // Update index
      index = (index + 1) % texts.length;
    }, 300); // Delay for image fade-out
  }, 2500); // Total interval




// Project Section

// Run GSAP animations only for desktop
if (window.innerWidth > 1024) {
  gsap.registerPlugin(ScrollTrigger);

  // Image fade-in on scroll
  gsap.utils.toArray(".team-photo").forEach(photo => {
    gsap.from(photo, {
      scrollTrigger: {
        trigger: photo,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Text color change animation
  document.querySelector(".heading-text h1").style.color = "whitesmoke";
  document.querySelector(".heading-text h1 span").style.color = "whitesmoke";

  gsap.to(".heading-text h1", {
    scrollTrigger: {
      trigger: ".heading-text h1",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    },
    color: "black",
    duration: 1
  });

  gsap.to(".heading-text h1 span", {
    scrollTrigger: {
      trigger: ".heading-text h1",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true
    },
    color: "rgb(68, 68, 68)",
    duration: 1
  });
}

// Client Section

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".clients-slider");
  const logosHTML = slider.innerHTML;

  // Duplicate logos for seamless loop
  slider.innerHTML += logosHTML;

  function initScroll() {
    let totalWidth = 0;
    slider.querySelectorAll("img").forEach(img => {
      totalWidth += img.offsetWidth + parseInt(getComputedStyle(slider).gap || 0);
    });

    if (totalWidth === 0) return;

    let duration = window.innerWidth < 768 ? 20 : 40;

    gsap.killTweensOf(slider);
    gsap.set(slider, { x: 0 });
    gsap.to(slider, {
      x: -totalWidth / 2,
      duration: duration,
      ease: "linear",
      repeat: -1
    });
  }

  function checkImagesLoaded() {
    const images = slider.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) initScroll();
        });
      }
    });

    if (loadedCount === images.length) initScroll();
    setTimeout(initScroll, 1000);
  }

  window.addEventListener("resize", () => {
    setTimeout(initScroll, 300);
  });

  checkImagesLoaded();

  // Popup Logic
  const viewAllBtn = document.getElementById("viewAllBtn");
  const popup = document.getElementById("clientsPopup");
  const closePopup = document.getElementById("closePopup");

  viewAllBtn.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});




// service Section


gsap.registerPlugin(ScrollTrigger);

// Heading color animation
document.querySelector(".service-text h1").style.color = "whitesmoke";
document.querySelector(".service-text h1 span").style.color = "whitesmoke";

gsap.to(".service-text h1", {
  scrollTrigger: {
    trigger: ".service-text h1",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  },
  color: "black"
});

gsap.to(".service-text h1 span", {
  scrollTrigger: {
    trigger: ".service-text h1",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  },
  color: "rgb(68, 68, 68)"
});

// Card stacking scroll-up effect
gsap.utils.toArray(".service-card-software").forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: true
  });
});




// Career Section

if (window.innerWidth > 1024) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".left-img", {
    scrollTrigger: {
      trigger: ".scroll-transition",
      start: "top top",
      end: "center center",
      scrub: true,
    },
    width: "50%",
    height: "50%",
    position: "relative",
    ease: "power2.out"
  });

  gsap.to(".career-right-content", {
    scrollTrigger: {
      trigger: ".scroll-transition",
      start: "top+=200 top",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
}


// About Section


  gsap.registerPlugin(ScrollTrigger);

  // From Left bubbles
  gsap.from(".from-left", {
    scrollTrigger: {
      trigger: ".global-reach",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Center content
  gsap.from(".center-content", {
    scrollTrigger: {
      trigger: ".center-content",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // From Right bubbles
  gsap.from(".from-right", {
    scrollTrigger: {
      trigger: ".global-reach",
      start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });


  // Slogan Section
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.2,
  });

  document.querySelectorAll('.slogan-line').forEach(line => {
    observer.observe(line);
  });
