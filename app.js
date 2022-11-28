$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// slide show product in body
$(".body_body .carousel").flickity({
  draggable: true,
  cellAlign: "left",
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
});

// set animation for shide home when load page
$(".slider-main").on("ready.flickity", function () {
  setActiveSlide();
});

// slide show banner top
$(".slider-main").flickity({
  draggable: true,
  pageDots: false,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  wrapAround: true,
});

// customizing button prev, next of slide show product
const $carousel = $(".body_body .carousel").flickity();

$(".home-btn__prev").on("click", function () {
  $carousel.flickity("previous", true);
});

$(".home-btn__next").on("click", function () {
  $carousel.flickity("next", true);
});

const active = {
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
};

// set css animation for banner
function addAnimationForBanner(selector, len) {
  for (let i = 0; i < len; ++i) {
    $(selector[i]).css({
      ...active,
      "transition-delay": `${i / len}s`,
    });
  }
}

// set css animation for product
function addAnimationForProduct(selector, name) {
  $(selector).css("animation", `${name} 1.6s ease`);
}

// get position of elements
const positionP1 = $(".body_box--first").position().top;
const positionP2 = $(".product-animation--first").position().top;
const positionP3 = $(".body_body-group").position().top;
const positionP4 = $(".product-animation--last").position().top;
const positionP5 = $(".group-banner").position().top;
let contentCount = 0;

// set css animation of element banner top
function setActiveSlide(index = 0) {
  $(".slider-text").css("animation", "none");
  addAnimationForProduct($(".slider-text")[index], "rightTo");
}

$(".slider-main").on("change.flickity", function (e, i) {
  setActiveSlide(i);
});

// handle view for element
function handleRenderView(positionCurrent) {
  if (positionCurrent >= positionP1 && contentCount < 1) {
    ++contentCount;
    addAnimationForBanner($(".body_box"), 2);
  }
  if (positionCurrent >= positionP2 && contentCount < 2) {
    ++contentCount;
    addAnimationForProduct(".product-animation--first", "rightToLeft");
  }
  if (positionCurrent >= positionP3 && contentCount < 3) {
    ++contentCount;
    addAnimationForBanner($(".body_box--last"), $(".body_box--last").length);
  }
  if (positionCurrent >= positionP4 && contentCount < 4) {
    ++contentCount;
    addAnimationForProduct(".product-animation--last", "rightToLeft");
  }

  if (positionCurrent >= positionP5 && contentCount < 5) {
    ++contentCount;
    addAnimationForBanner(
      $(".panner_container"),
      $(".panner_container").length
    );
  }
}

// set class for button add cart and like of product
function setClassForTagProduct(localName, selector, className) {
  const listCur = JSON.parse(localStorage.getItem(localName));
  if (listCur) {
    for (let i = 0; i < listCur.length; ++i) {
      for (let j = 0; j < selector.length; ++j) {
        if (listCur[i][0] === $(selector[j]).attr("data-code")) {
          $(selector[j]).addClass(className);
          $(selector[j]).next().removeClass(className);
        } else if (listCur[i] === $(selector[j]).attr("data-code")) {
          $(selector[j]).addClass(className);
        }
      }
    }
  }
}

// init view button add, like of product
function productView() {
  setClassForTagProduct("carts", $(".product button.product-btn"), "add");
  setClassForTagProduct("likes", $(".product .product_icon"), "active");
}

productView();

// handle event click card product
$(".product").click(function () {
  const code = $(this).attr("data-code");
  location.href = `./components/chitietsp/chitiet.html?code=${code}`;
});

// set item local item
function setLocalItems(localName, item, code) {
  const listCur = JSON.parse(localStorage.getItem(localName));
  if (listCur) {
    let isIn = false;
    for (let i = 0; i < listCur.length; ++i) {
      if (typeof item === "string") {
        if (listCur[i] === code) {
          isIn = true;
          break;
        }
      } else {
        if (listCur[i][0] === code) {
          isIn = true;
          break;
        }
      }
    }
    if (!isIn) {
      const localItem = [...listCur, item];
      localStorage.setItem(localName, JSON.stringify(localItem));
    }
  } else {
    localStorage.setItem(localName, JSON.stringify([item]));
  }
}

// set number of heart in header
function handleViewCount(sel, name) {
  const localArr = JSON.parse(localStorage.getItem(name));
  $(sel).text(localArr.length);
}

// handle event click button heart
$(".product .product_icon").click(function (event) {
  event.stopPropagation();
  const code = $(this).attr("data-code");
  setLocalItems("likes", code, code);
  handleViewCount(".count-like", "likes");
  $(this).addClass("active");
});

// add event click button add cart
$(".product .product-btn").click(function (event) {
  event.stopPropagation();
  const code = $(this).attr("data-code");
  const item = [code, 1];
  setLocalItems("carts", item, code);
  handleViewCount(".header-count", "carts");
  initCartProduct();
  $(this).addClass("add");
  $(this).next().removeClass("add");
});

// handle event click card blog
$(".panner_container").click(function () {
  const id = $(this).attr("data-id");
  location.href = `components/chitietblog/chitietblog.html?id=${id}`;
});

// render view when load page
$(document).ready(() => {
  let positionCurrent = $(window).scrollTop() + $(window).height();
  handleRenderView(positionCurrent);
});

// render view when scroll page
$(window).on("scroll", () => {
  let positionCurrent = $(window).scrollTop() + $(window).height();
  handleRenderView(positionCurrent);
  if (positionCurrent >= $(document).height() - 50) {
    $(".header-bottom").removeClass("scroll");
    $(window).off("scroll");
  }
});
