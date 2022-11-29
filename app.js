const objProduct = {
  sp001: {
    name: "Classico",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Classico.png",
    gender: 1,
    date: "2013-09-04",
    vote: 107,
    likeCount: 50,
  },
  sp002: {
    name: "Classico 1",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Classico1.png",
    gender: 2,
    date: "2014-03-05",
    vote: 70,
    likeCount: 49,
  },
  sp003: {
    name: "Classico 2",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Classico2.png",
    gender: 1,
    date: "2015-03-26",
    vote: 55,
    likeCount: 53,
  },
  sp004: {
    name: "Classico 3",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Classico3.png",
    gender: 2,
    date: "2020-11-20",
    vote: 85,
    likeCount: 70,
  },
  sp005: {
    name: "Classico 4",
    price: 700000,
    discount: 0.29,
    image: "assets/images/product/Classico4.png",
    gender: 2,
    date: "2021-02-14",
    vote: 113,
    likeCount: 79,
  },
  sp006: {
    name: "Simple 1",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple1.jpg",
    gender: 2,
    date: "2019-04-02",
    vote: 50,
    likeCount: 47,
  },
  sp007: {
    name: "Simple 2",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple2.jpg",
    gender: 2,
    date: "2019-04-20",
    vote: 107,
    likeCount: 83,
  },
  sp008: {
    name: "Simple 3",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple3.jpg",
    gender: 2,
    date: "2020-02-09",
    vote: 102,
    likeCount: 90,
  },
  sp009: {
    name: "Simple 4",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple4.jpg",
    gender: 0,
    date: "2020-02-10",
    vote: 76,
    likeCount: 63,
  },
  sp010: {
    name: "Simple 5",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple5.jpg",
    gender: 2,
    date: "2020-03-26",
    vote: 65,
    likeCount: 51,
  },
  sp011: {
    name: "Simple 6",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple6.jpg",
    gender: 0,
    date: "2020-03-30",
    vote: 49,
    likeCount: 53,
  },
  sp012: {
    name: "Simple 7",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple7.jpg",
    gender: 1,
    date: "2020-09-01",
    vote: 109,
    likeCount: 101,
  },
  sp013: {
    name: "Simple 8",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple8.jpg",
    gender: 0,
    date: "2021-01-01",
    vote: 140,
    likeCount: 111,
  },
  sp014: {
    name: "Simple 9",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple9.jpg",
    gender: 1,
    date: "2021-04-17",
    vote: 153,
    likeCount: 149,
  },
  sp015: {
    name: "Simple 10",
    price: 700000,
    discount: 0,
    image: "assets/images/product/Simple10.jpg",
    gender: 0,
    date: "2022-03-30",
    vote: 170,
    likeCount: 90,
  },
};

// header-footer
const convertArr = Object.values($(".header-center__item"));
const listChoose = convertArr.slice(0, convertArr.length - 2);

// set class for list choose user
const setClassForList = (min, max) => {
  listChoose.forEach((item, i) => {
    if (i >= min && i <= max) {
      $(item).removeClass("d-inline-block");
      $(item).addClass("d-none");
    } else {
      $(item).removeClass("d-none");
      $(item).addClass("d-inline-block");
    }
  });
};

//render view for choose user
const renderView = () => {
  const user = localStorage.getItem("user");
  if (user) {
    setClassForList(0, 1);
  } else {
    setClassForList(2, 3);
  }
};

renderView();

// set init number of heart and cart
function handleInitCount() {
  const localProduct = JSON.parse(localStorage.getItem("carts"));
  const localLike = JSON.parse(localStorage.getItem("likes"));
  if (localLike) {
    $(".count-like").removeClass("d-none");
    $(".count-like").addClass("d-flex");
    $(".count-like").text(localLike.length);
  }
  if (localProduct) {
    $(".header-count").text(localProduct.length > 0 ? localProduct.length : 0);
  }
}

handleInitCount();

// handle user logout
$("#header-logout").click(() => {
  localStorage.removeItem("user");
  renderView();
});

// handle click button show navbar tablet, mobile
$(".header-nav__list").click(() => {
  $(".tablet-overlay").addClass("active");
  $(".tablet-nav").addClass("active");
});

// handle click button hide navbar tablet, mobile
$(".tablet-overlay").click(() => {
  $(".tablet-overlay").removeClass("active");
  $(".tablet-nav").removeClass("active");
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// set active item of navbar
function initActiveNav() {
  $(".header-bottom .nav-link").removeClass("active");
  const key = +$("body").attr("data-key");
  const selectedCur = $(".header-bottom .nav-link")[key];
  $(selectedCur).addClass("active");
}

initActiveNav();

// handle set class active item nav when click
$(".header-bottom .nav-link").click(function () {
  $(".header-bottom .nav-link").removeClass("active");
  $(this).addClass("active");
});

// remove product in cart
function handleRemoveProduct(code) {
  let data = JSON.parse(localStorage.getItem("carts"));
  let index = 0;
  let result = [];
  if (data) {
    for (let i = 0; i < data.length; ++i) {
      if (data[i][0] === code) {
        index = i;
        break;
      }
    }
    if (index === 0) {
      data.shift();
      result = data;
    } else if (index === data.length - 1) {
      data.pop();
      result = data;
    } else {
      const arr1 = data.slice(0, index);
      const arr2 = data.slice(index + 1);
      result = [...arr1, ...arr2];
    }
  }
  localStorage.setItem("carts", JSON.stringify(result));
  initCartProduct();
}

// create product in cart
function createProductCart(product) {
  const li = document.createElement("li");
  li.className =
    "position-relative d-flex justify-content-between header-cart__item";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  li.appendChild(img);

  const group = document.createElement("div");
  group.classList.add("header-cart__group");

  const top = document.createElement("div");
  top.className = "d-flex align-items-center header-cart__top";

  const a = document.createElement("a");
  a.href = `../../components/chitietsp/chitiet.html?code=${product.code}`;
  a.className = "d-inline-block text-left header-cart__link";

  const h4 = document.createElement("h4");
  h4.classList.add("limit-text-2");
  h4.innerText = product.name;
  a.appendChild(h4);
  top.appendChild(a);

  const i = document.createElement("i");
  i.className = "fa-regular fa-circle-xmark header-cart__close text-danger";
  i.onclick = () => handleRemoveProduct(product.code);
  top.appendChild(i);
  group.appendChild(top);

  const bottom = document.createElement("div");
  bottom.classList.add("header-cart__bottom");

  const price = document.createElement("span");
  price.classList.add("price");
  price.innerText = `${product.price}đ`;
  bottom.appendChild(price);

  const count = document.createElement("span");
  count.classList.add("count");
  count.innerText = ` x ${product.count}`;
  bottom.appendChild(count);
  group.appendChild(bottom);
  li.appendChild(group);

  return li;
}

// convert number to price vnd
const convertPrice = (price) => {
  const result = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return result.slice(0, result.length - 2);
};

// render cart
function renderCart(data) {
  $(".header-cart__list").html("");
  let total = 0;
  data.forEach((item) => {
    const priceCur =
      objProduct[item[0]].discount > 0 ? 500000 : objProduct[item[0]].price;
    total += priceCur;
    const dataCur = {
      ...objProduct[item[0]],
      code: item[0],
      count: item[1],
      price: convertPrice(priceCur),
    };
    const li = createProductCart(dataCur);
    $(".header-cart__list").append(li);
  });
  total = `${convertPrice(total)}đ`;
  $(".header-cart__total span").text(total);
}

// init cart
function initCartProduct() {
  const data = JSON.parse(localStorage.getItem("carts"));
  if (data) {
    $(".header-center__show .header-list__empty").removeClass("d-inline-block");
    $(".header-center__show .header-list__empty").addClass("d-none");
    $(".header-cart__box").removeClass("d-none");
    $(".header-cart__box").addClass("d-block");
    renderCart(data);
  }
}

initCartProduct();

// get key search
function getKeySearchData(keySearch, name) {
  let temp = name.substr(0, keySearch.length);
  const strReplace = `<strong>${temp}</strong>`;
  return name.replace(temp, strReplace);
}

// create product search
function createProductSearch(data, keySearch) {
  const li = document.createElement("li");
  li.classList.add("header-list__item");

  const link = document.createElement("a");
  link.href = `components/chitietsp/chitiet.html?code=${data.code}`;
  link.className = "d-flex align-items-start header-list__link";

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.name;
  link.appendChild(img);

  const group = document.createElement("div");
  group.classList.add("header-list__text");

  const h4 = document.createElement("h4");
  h4.classList.add("limit-text-2");
  h4.innerHTML = getKeySearchData(keySearch, data.name);
  group.appendChild(h4);

  if (data.discount > 0) {
    const old = document.createElement("span");
    old.classList.add("old");
    old.innerText = `${convertPrice(data.price)}đ`;
    group.appendChild(old);
  }

  const price = data.discount > 0 ? 500000 : data.price;
  const priceNew = document.createElement("span");
  priceNew.classList.add("new");
  priceNew.innerText = `${convertPrice(price)}đ`;
  group.appendChild(priceNew);
  link.appendChild(group);
  li.appendChild(link);

  return li;
}

// create Empty search
function createEmptySearch() {
  const li = document.createElement("li");
  li.classList.add("header-list__item");

  const span = document.createElement("span");
  span.className = "d-inline-block text-center w-100 header-list__empty";
  span.innerText = "Không có sản phẩm nào.";
  li.appendChild(span);

  return li;
}

// add event on change for input search
let searchCount = 0;

$(".search").on("keyup", function (e) {
  const arrObj = Object.entries(objProduct);
  const value = $(this).val();
  $(".header-list__search").removeClass("d-none");
  $(".header-list__search").html("");
  if (value) {
    const valueSS = value.toLowerCase();
    arrObj.forEach((item) => {
      const nameSS = item[1].name.toLowerCase();
      if (nameSS.startsWith(valueSS)) {
        const convertData = {
          ...item[1],
          code: item[0],
        };
        ++searchCount;
        const li = createProductSearch(convertData, valueSS);
        $(".header-list__search").append(li);
      }
    });
    if (searchCount < 1) {
      const li = createEmptySearch();
      $(".header-list__search").append(li);
    }
  } else {
    const li = createEmptySearch();
    $(".header-list__search").append(li);
  }
  if (e.keyCode === 13 && searchCount > 0) {
    location.href = `components/timkiem/search.html?key=${value}`;
  }
});

$(".header-center__group > button").click(function () {
  const value = $(this).prev().val();
  if (searchCount > 0) {
    location.href = `components/timkiem/search.html?key=${value}`;
  }
});

// home page
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
  if (localArr) {
    $(sel).text(localArr.length);
  }
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
  if ($(window).scrollTop() > 100) {
    $(".header-bottom").addClass("scroll");
  } else {
    $(".header-bottom").removeClass("scroll");
  }
  let positionCurrent = $(window).scrollTop() + $(window).height();
  handleRenderView(positionCurrent);
  if (
    positionCurrent >= $(document).height() - 50 &&
    $(".header-bottom").attr("class").indexOf("scroll") !== -1
  ) {
    $(".header-bottom").removeClass("scroll");
  }
});
