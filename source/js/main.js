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

    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs__content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs__content--active");

    $(".product-slider").slick("setPosition");
  });

  $(".product-item__icon").on("click", function () {
    $(".product-item__icon").toggleClass("product-item__icon--active");
  });

  $(".product-slider").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-btn product-slider__btn product-slider__btn_left"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-left-black"></use></svg></button>',
    nextArrow:
      '<button class="slick-btn product-slider__btn product-slider__btn_right"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-right-black"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // $(".form__drop-down").on("click", function () {
  //   $(this).toggleClass("form__drop-down_active");
  //   $(this).next(".form__content").slideToggle();
  // });
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

// -------------------------------------------------------------------------- Дроп-меню Форма-Наличие
{
  const openMenuAvailable = document.querySelector(".available__drop-down");
  const menuAvailable = document.querySelector(".available__list");
  const iconAvailable = document.querySelector(".available__icon");

  openMenuAvailable.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuAvailable.classList.toggle("available__drop-down_hide");
    iconAvailable.classList.toggle("available__icon_hide");
    openMenuAvailable.classList.contains("available__drop-down_hide")
      ? menuAvailable.classList.add("available__list_hide")
      : menuAvailable.classList.remove("available__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Новинки
{
  const openMenuNews = document.querySelector(".news__drop-down");
  const menuNews = document.querySelector(".news__list");
  const iconNews = document.querySelector(".news__icon");

  openMenuNews.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuNews.classList.toggle("news__drop-down_hide");
    iconNews.classList.toggle("news__icon_hide");
    openMenuNews.classList.contains("news__drop-down_hide")
      ? menuNews.classList.add("news__list_hide")
      : menuNews.classList.remove("news__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Цена
{
  const openMenuPrice = document.querySelector(".price__drop-down");
  const menuPrice = document.querySelector(".price__list");
  const iconPrice = document.querySelector(".price__icon");

  openMenuPrice.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuPrice.classList.toggle("price__drop-down_hide");
    iconPrice.classList.toggle("price__icon_hide");
    openMenuPrice.classList.contains("price__drop-down_hide")
      ? menuPrice.classList.add("price__list_hide")
      : menuPrice.classList.remove("price__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Бренд
{
  const openMenuBrand = document.querySelector(".brand__drop-down");
  const menuBrand = document.querySelector(".brand__list");
  const iconBrand = document.querySelector(".brand__icon");

  openMenuBrand.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuBrand.classList.toggle("brand__drop-down_hide");
    iconBrand.classList.toggle("brand__icon_hide");
    openMenuBrand.classList.contains("brand__drop-down_hide")
      ? menuBrand.classList.add("brand__list_hide")
      : menuBrand.classList.remove("brand__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Модели
{
  const openMenuModels = document.querySelector(".models__drop-down");
  const menuModels = document.querySelector(".models__list");
  const iconModels = document.querySelector(".models__icon");

  openMenuModels.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuModels.classList.toggle("models__drop-down_hide");
    iconModels.classList.toggle("models__icon_hide");
    openMenuModels.classList.contains("models__drop-down_hide")
      ? menuModels.classList.add("models__list_hide")
      : menuModels.classList.remove("models__list_hide");
  });
}

{
  const modelsMore = document.querySelector(".models-more");
  const modelList = document.querySelector(".model__list_hide");

  modelsMore.addEventListener("click", function (evt) {
    evt.preventDefault();
    modelsMore.innerHTML =
      modelsMore.innerHTML === "Показать еще"
        ? (modelsMore.innerHTML = "Скрыть")
        : (modelsMore.innerHTML = "Показать еще");
    modelList.classList.toggle("model__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Скидки
{
  const openMenuSales = document.querySelector(".sales__drop-down");
  const menuSales = document.querySelector(".sales__list");
  const iconSales = document.querySelector(".sales__icon");

  openMenuSales.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuSales.classList.toggle("sales__drop-down_hide");
    iconSales.classList.toggle("sales__icon_hide");
    openMenuSales.classList.contains("sales__drop-down_hide")
      ? menuSales.classList.add("sales__list_hide")
      : menuSales.classList.remove("sales__list_hide");
  });
}

// -------------------------------------------------------------------------- Дроп-меню Форма-Страны
{
  const openMenuCountries = document.querySelector(".countries__drop-down");
  const menuCountries = document.querySelector(".countries__list");
  const iconCountries = document.querySelector(".countries__icon");

  openMenuCountries.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMenuCountries.classList.toggle("countries__drop-down_hide");
    iconCountries.classList.toggle("countries__icon_hide");
    openMenuCountries.classList.contains("countries__drop-down_hide")
      ? menuCountries.classList.add("countries__list_hide")
      : menuCountries.classList.remove("countries__list_hide");
  });
}

// --------------------------------------------------- Focus на кнопкe в форме Акции
{
  $(window).keyup(function (e) {
    var target = $(".checkbox-btn input:focus-visible");
    if (e.keyCode == 9 && $(target).length) {
      $(target).parent().addClass("focused");
    }
  });

  $(".checkbox-btn input").focusout(function () {
    $(this).parent().removeClass("focused");
  });
}

{
  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog-gridbtn--active");
    $(".catalog__filter-btnline").removeClass("catalog-gridbtn--active");
    $(".catalog__inner-item").removeClass("catalog__inner-item--column");
    $(".catalog-item").removeClass("catalog-item--column");
    $(".catalog-item__top").removeClass("catalog-item__top--column");
  });

  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog-gridbtn--active");
    $(".catalog__filter-btngrid").removeClass("catalog-gridbtn--active");
    $(".catalog__inner-item").addClass("catalog__inner-item--column");
    $(".catalog-item").addClass("catalog-item--column");
    $(".catalog-item__top").addClass("catalog-item__top--column");
  });
}
