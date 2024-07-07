document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const cancelButton = document.getElementById("mobile-menu-cancel-button");

  const toggleDropdown = (event) => {
    event.preventDefault();
    const dropdownMenu = event.target.nextElementSibling;

    if (dropdownMenu) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.add("hidden");
        }
      });

      dropdownMenu.classList.toggle("hidden");
    } else {
      console.error("Dropdown menu not found.");
    }
  };

  const hideAllDropdowns = () => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.add("hidden");
    });
  };

  document.addEventListener("click", (event) => {
    const isDropdownToggle = event.target.matches(".dropdown-toggle");
    if (isDropdownToggle) {
      toggleDropdown(event);
    } else {
      hideAllDropdowns();
    }
  });

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("translate-x-full");
    cancelButton.classList.remove("hidden");
  });

  cancelButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("translate-x-full");
    cancelButton.classList.add("hidden");
  });

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: () => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const animateInElement = activeSlide.querySelector(".animated-text");
        if (animateInElement) {
          animateInElement.classList.add("animate-in");
        } else {
          console.error("Animate-in element not found in active slide.");
        }
      },
    },
  });
});
