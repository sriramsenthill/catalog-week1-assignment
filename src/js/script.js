document.addEventListener('DOMContentLoaded', () => {

  const navEl = document.querySelector(".navigation");
  const hamburgerToggleEl = document.querySelector(".navigation__toggle-menu");

  hamburgerToggleEl.addEventListener("click", () => {
    navEl.classList.toggle("navigation--toggle-active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const nextButton = document.querySelector('.team__slider-button');


  let currentScroll = 0;


  const cardWidth = document.querySelector('.team__member-card')?.offsetWidth || 0;

  nextButton.addEventListener('click', () => {

    const nextScroll = currentScroll + cardWidth;


    sliderWrapper.scrollTo({
      left: nextScroll,
      behavior: 'smooth'
    });


    currentScroll = nextScroll;


    if (currentScroll >= sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {
      currentScroll = 0;
      sliderWrapper.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slider-wrapper-review');
  const nextButton = document.querySelector('.review__slider-btns button[aria-label="Slide forward"]');
  const prevButton = document.querySelector('.review__slider-btns button[aria-label="Slide back"]');


  let currentScroll = 0;


  const cardWidth = document.querySelector('.review__card')?.offsetWidth || 0;

  if (cardWidth === 0) {
    console.error("Card width is zero. Check if cards are rendered correctly.");
    return;
  }

  nextButton.addEventListener('click', () => {


    const nextScroll = currentScroll + cardWidth;

    if (nextScroll >= sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {
      currentScroll = 0;
      sliderWrapper.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
      });
    } else {
      sliderWrapper.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
      currentScroll = nextScroll;
    }
  });

  prevButton.addEventListener('click', () => {
    console.log("Previous button clicked!");

    const prevScroll = currentScroll - cardWidth;

    if (prevScroll < 0) {
      currentScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
      sliderWrapper.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
      });
    } else {
      sliderWrapper.scrollTo({
        left: prevScroll,
        behavior: 'smooth'
      });
      currentScroll = prevScroll;
    }
  });
});


