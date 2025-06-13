window.addEventListener("load", () => {
  onScroll();

  document.querySelectorAll("pre").forEach(block => {
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.innerText = "Copy";
    block.appendChild(button);

    button.addEventListener("click", () => {
      const code = block.querySelector("code");
      if (!code) return;
      navigator.clipboard.writeText(code.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      });
    });
  });

  const swiperContainer = document.querySelector(".swiper-container");
  if (swiperContainer && typeof Swiper !== "undefined") {
    const swiper = new Swiper(swiperContainer, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});