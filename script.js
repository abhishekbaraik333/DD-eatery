const swiper = new Swiper(".heroSwiper", {
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const logo = document.querySelector(".logo");

function updateLogoSize() {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    logo.style.width = scrollY > 50 ? "100px" : "120px";
  } else {
    logo.style.width = scrollY > 50 ? "120px" : "180px";
  }
}

// Initial setup
updateLogoSize();

// Update on scroll and resize
window.addEventListener("scroll", updateLogoSize);
window.addEventListener("resize", updateLogoSize);



const items = [
    " Chocolate cake ",
    "Hot dog w/ fries",
    "Pork chop (smothered) ",
    "Chitterlings   ",
    "Baby back Ribs "
  ];

  let index = 0;
  const currentLine = document.querySelector(".entree-line.current");
  const nextLine = document.querySelector(".entree-line.next");

  function cycleText() {
    // Slide both up
    currentLine.style.top = "-100%";
    currentLine.style.opacity = 0;

    nextLine.style.top = "0%";
    nextLine.style.opacity = 1;

    // After animation, swap content & reset classes
    setTimeout(() => {
      // Update current index
      index = (index + 1) % items.length;
      const nextIndex = (index + 1) % items.length;

      // Swap roles
      currentLine.textContent = items[index];
      nextLine.textContent = items[nextIndex];

      // Reset styles instantly for next cycle
      currentLine.style.transition = "none";
      currentLine.style.top = "0%";
      currentLine.style.opacity = 1;

      nextLine.style.transition = "none";
      nextLine.style.top = "100%";
      nextLine.style.opacity = 0.3;

      // Trigger reflow to re-enable transition
      void currentLine.offsetWidth;
      void nextLine.offsetWidth;

      currentLine.style.transition = "all 0.6s ease";
      nextLine.style.transition = "all 0.6s ease";
    }, 600);
  }

  setInterval(cycleText, 3000); // change every 3s

const items2 = [
    " Collard Greens ",
    "Potato Salad",
    "Spaghetti",
    "Pound Cake",
    "Peach Cobbler "
  ];

  let index2 = 0;
  const currentLine2 = document.querySelector(".entree-line2.current2");
  const nextLine2 = document.querySelector(".entree-line2.next2");

  function cycleText2() {
    // Slide both up
    currentLine2.style.top = "-100%";
    currentLine2.style.opacity = 0;

    nextLine2.style.top = "0%";
    nextLine2.style.opacity = 1;

    // After animation, swap content & reset classes
    setTimeout(() => {
      // Update current index
      index2 = (index2 + 1) % items2.length;
      const nextIndex = (index2 + 1) % items2.length;

      // Swap roles
      currentLine2.textContent = items2[index2];
      nextLine2.textContent = items2[nextIndex];

      // Reset styles instantly for next cycle
      currentLine2.style.transition = "none";
      currentLine2.style.top = "0%";
      currentLine2.style.opacity = 1;

      nextLine2.style.transition = "none";
      nextLine2.style.top = "100%";
      nextLine2.style.opacity = 0.3;

      // Trigger reflow to re-enable transition
      void currentLine2.offsetWidth;
      void nextLine2.offsetWidth;

      currentLine2.style.transition = "all 0.6s ease";
      nextLine2.style.transition = "all 0.6s ease";
    }, 600);
  }

  setInterval(cycleText2, 3000); // change every 3s