$((function(){$(".banner__slider-list").slick({dots:!0,prevArrow:'<button class="slick-btn banner-btn banner-btn__left"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-left"></use></svg></button>',nextArrow:'<button class="slick-btn banner-btn banner-btn__right"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-right"></use></svg></button>',responsive:[{breakpoint:600,settings:{arrows:!1}}]}),$(".tab").on("click",(function(e){e.preventDefault(),$($(this).siblings()).removeClass("tab--active"),$($(this).parent().siblings().find("div")).removeClass("tabs__content--active"),$(this).addClass("tab--active"),$($(this).attr("href")).addClass("tabs__content--active"),$(".product-slider").slick("setPosition")})),$(".product-item__icon").on("click",(function(){$(".product-item__icon").toggleClass("product-item__icon--active")})),$(".product-slider").slick({arrows:!0,slidesToShow:4,slidesToScroll:1,prevArrow:'<button class="slick-btn product-slider__btn product-slider__btn_left"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-left-black"></use></svg></button>',nextArrow:'<button class="slick-btn product-slider__btn product-slider__btn_right"><svg width="16" height="29"><use xlink:href="img/sprite.svg#big-arrow-right-black"></use></svg></button>',responsive:[{breakpoint:1301,settings:{arrows:!1,dots:!0}},{breakpoint:1201,settings:{slidesToShow:3,arrows:!1,dots:!0}},{breakpoint:980,settings:{slidesToShow:2,arrows:!1,dots:!0}},{breakpoint:640,settings:{slidesToShow:1,arrows:!1,dots:!0}}]})}));{const e=document.querySelector(".main-nav__toggle"),t=document.querySelector(".menu-mobile");e.addEventListener("click",(function(){e.classList.toggle("main-nav__toggle_active"),e.classList.contains("main-nav__toggle_active")?t.classList.add("menu-mobile_active"):t.classList.remove("menu-mobile_active")}))}{const e=document.querySelector(".info__drop-down"),t=document.querySelector(".info__list"),s=document.querySelector(".info__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("info__drop-down_active"),s.classList.toggle("info__icon_active"),e.classList.contains("info__drop-down_active")?t.classList.add("info__list_active"):t.classList.remove("info__list_active")}))}{const e=document.querySelector(".store__drop-down"),t=document.querySelector(".store__list"),s=document.querySelector(".store__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("store__drop-down_active"),s.classList.toggle("store__icon_active"),e.classList.contains("store__drop-down_active")?t.classList.add("store__list_active"):t.classList.remove("store__list_active")}))}{const e=document.querySelector(".available__drop-down"),t=document.querySelector(".available__list"),s=document.querySelector(".available__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("available__drop-down_hide"),s.classList.toggle("available__icon_hide"),e.classList.contains("available__drop-down_hide")?t.classList.add("available__list_hide"):t.classList.remove("available__list_hide")}))}{const e=document.querySelector(".news__drop-down"),t=document.querySelector(".news__list"),s=document.querySelector(".news__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("news__drop-down_hide"),s.classList.toggle("news__icon_hide"),e.classList.contains("news__drop-down_hide")?t.classList.add("news__list_hide"):t.classList.remove("news__list_hide")}))}{const e=document.querySelector(".price__drop-down"),t=document.querySelector(".price__list"),s=document.querySelector(".price__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("price__drop-down_hide"),s.classList.toggle("price__icon_hide"),e.classList.contains("price__drop-down_hide")?t.classList.add("price__list_hide"):t.classList.remove("price__list_hide")}))}{const e=document.querySelector(".brand__drop-down"),t=document.querySelector(".brand__list"),s=document.querySelector(".brand__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("brand__drop-down_hide"),s.classList.toggle("brand__icon_hide"),e.classList.contains("brand__drop-down_hide")?t.classList.add("brand__list_hide"):t.classList.remove("brand__list_hide")}))}{const e=document.querySelector(".models__drop-down"),t=document.querySelector(".models__list"),s=document.querySelector(".models__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("models__drop-down_hide"),s.classList.toggle("models__icon_hide"),e.classList.contains("models__drop-down_hide")?t.classList.add("models__list_hide"):t.classList.remove("models__list_hide")}))}{const e=document.querySelector(".models-more"),t=document.querySelector(".model__list_hide");e.addEventListener("click",(function(s){s.preventDefault(),e.innerHTML="Показать еще"===e.innerHTML?e.innerHTML="Скрыть":e.innerHTML="Показать еще",t.classList.toggle("model__list_hide")}))}{const e=document.querySelector(".sales__drop-down"),t=document.querySelector(".sales__list"),s=document.querySelector(".sales__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("sales__drop-down_hide"),s.classList.toggle("sales__icon_hide"),e.classList.contains("sales__drop-down_hide")?t.classList.add("sales__list_hide"):t.classList.remove("sales__list_hide")}))}{const e=document.querySelector(".countries__drop-down"),t=document.querySelector(".countries__list"),s=document.querySelector(".countries__icon");e.addEventListener("click",(function(i){i.preventDefault(),e.classList.toggle("countries__drop-down_hide"),s.classList.toggle("countries__icon_hide"),e.classList.contains("countries__drop-down_hide")?t.classList.add("countries__list_hide"):t.classList.remove("countries__list_hide")}))}$(window).keyup((function(e){var t=$(".checkbox-btn input:focus-visible");9==e.keyCode&&$(t).length&&$(t).parent().addClass("focused")})),$(".checkbox-btn input").focusout((function(){$(this).parent().removeClass("focused")}));