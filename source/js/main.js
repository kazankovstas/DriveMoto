$(function () {
  // --------------------------------------------------------------------------- Слайдер-баннер
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

  // ------------------------------------------------------------------------------ Табы поиска
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $(".tab").removeClass("tab--active");
    $(".tabs__content").removeClass("tabs__content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs__content--active");
  });

  $(".product-item__icon").on("click", function () {
    $(".product-item__icon").toggleClass("product-item__icon--active");
  });
});

{
  // ------------------------------------------------------------------------------- Меню-бургер
  const openMenu = document.querySelector(".main-nav__toggle");
  const menu = document.querySelector(".menu-mobile");

  openMenu.addEventListener("click", function () {
    openMenu.classList.toggle("main-nav__toggle_active");
    openMenu.classList.contains("main-nav__toggle_active")
      ? menu.classList.add("menu-mobile_active")
      : menu.classList.remove("menu-mobile_active");
  });
}

// ------------------------------------------------------------------------ Дроп-меню Футер-Информация
{
  const openMenuInfo = document.querySelector(".info__drop-down");
  const menuInfo = document.querySelector(".info__list");
  const iconInfo = document.querySelector(".info__icon");

  openMenuInfo.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuInfo.classList.toggle("info__drop-down_active");
    iconInfo.classList.toggle("info__icon_active");
    openMenuInfo.classList.contains("info__drop-down_active")
      ? menuInfo.classList.add("info__list_active")
      : menuInfo.classList.remove("info__list_active");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Футер-Интернет магазин
{
  const openMenuStore = document.querySelector(".store__drop-down");
  const menuStore = document.querySelector(".store__list");
  const iconStore = document.querySelector(".store__icon");

  openMenuStore.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuStore.classList.toggle("store__drop-down_active");
    iconStore.classList.toggle("store__icon_active");
    openMenuStore.classList.contains("store__drop-down_active")
      ? menuStore.classList.add("store__list_active")
      : menuStore.classList.remove("store__list_active");
  });
}

// // -------------------------------------------------------------------------- Кнопка добавить в избранное
// {
//   {
//     const btnLike = document.querySelector(".product-item__favorite");
//     const btnLikeIcon = document.querySelector(".product-item__icon");

//     btnLike.addEventListener("click", function () {
//       btnLikeIcon.classList.contains("product-item__icon--active")
//         ? btnLikeIcon.classList.remove("product-item__icon--active")
//         : btnLikeIcon.classList.add("product-item__icon--active");
//     });
//   }
// }
