$(function () {
  $(".banner__slider-list").slick({
    dots: true,
    prevArrow:
      '<button class="slick-btn banner-btn banner-btn__left"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-left"></use></svg></button>',
    nextArrow:
      '<button class="slick-btn banner-btn banner-btn__right"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-right"></use></svg></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

{
  const openMenu = document.querySelector(".main-nav__toggle");
  const menu = document.querySelector(".menu-mobile");

  openMenu.addEventListener("click", function () {
    openMenu.classList.toggle("main-nav__toggle_active");
    openMenu.classList.contains("main-nav__toggle_active")
      ? menu.classList.add("menu-mobile_active")
      : menu.classList.remove("menu-mobile_active");
  });
}

{
  document.querySelector("slick-list").tabIndex = -1;
}
