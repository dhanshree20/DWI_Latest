gsap.registerPlugin(ScrollTrigger);

// ✅ Fade animation for team-photo (same for all devices)
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

// ✅ Only run text color scroll animation if desktop (width > 1024px)
if (window.innerWidth > 1024) {
  // Initial white text
  document.querySelector(".heading-text h1").style.color = "whitesmoke";
  document.querySelector(".heading-text h1 span").style.color = "whitesmoke";

  // Animate h1 color
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

  // Animate span color
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
} else {
  // ✅ Mobile view — fixed colors
  document.querySelector(".heading-text h1").style.color = "black";
  document.querySelector(".heading-text h1 span").style.color = "gray";
}
