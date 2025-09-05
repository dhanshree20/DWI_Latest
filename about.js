const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const symbol = header.querySelector('.symbol');

    const isOpen = content.classList.contains('open');

    // Close all others
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

    // Toggle current
    if (!isOpen) {
      content.classList.add('open');
      header.classList.add('active');
    }
  });
});



// About Hero Section

const imageArray = [
  "Images/open_mic_1.JPG",
  "Images/anniversary_1.JPG",
  "Images/cricket_2.JPG",
  "Images/Welcome_kit_1.jpeg",
  "Images/anniversary_2.JPG"
];

const textArray = [
  "An evening of creativity, expression, and talent — our Open Mic event gave a platform for voices to be heard and stories to be shared.",
  "Celebrating years of innovation, teamwork, and growth — here’s to the journey we’ve shared and the milestones yet to come!",
  "Our Cricket Event was a thrilling display of teamwork, energy — bringing the entire DW Innovation family together on and off the field.",
  "A token of appreciation and a gesture of warmth — our Welcome Kit is crafted to make every new team member feel valued from day one.",
  "A milestone of growth, teamwork, and shared dreams — our Anniversary Celebration was a tribute to the journey we’ve built together."
];

let currentSlide = 0;
const sliderImage = document.getElementById("slider-image");
const sliderText = document.getElementById("slider-text");
const dotsContainer = document.getElementById("carousel-dots");

// Dots generate karna
imageArray.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll("#carousel-dots span");

function showSlide(index) {
  sliderImage.style.opacity = 0;
  sliderText.style.opacity = 0;

  setTimeout(() => {
    sliderImage.src = imageArray[index];
    sliderText.innerText = textArray[index];
    sliderImage.style.opacity = 1;
    sliderText.style.opacity = 1;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }, 500);
}

// Auto change every 5 sec
setInterval(() => {
  currentSlide = (currentSlide + 1) % imageArray.length;
  showSlide(currentSlide);
}, 5000);

// First slide load
showSlide(currentSlide);
