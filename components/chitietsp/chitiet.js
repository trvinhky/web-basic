const objProduct = {
  sp001: {
    name: "Classico",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Classico.png",
    gender: 1,
    date: "2013-09-04",
    vote: 107,
    likeCount: 50,
  },
  sp002: {
    name: "Classico 1",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Classico1.png",
    gender: 2,
    date: "2014-03-05",
    vote: 70,
    likeCount: 49,
  },
  sp003: {
    name: "Classico 2",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Classico2.png",
    gender: 1,
    date: "2015-03-26",
    vote: 55,
    likeCount: 53,
  },
  sp004: {
    name: "Classico 3",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Classico3.png",
    gender: 2,
    date: "2020-11-20",
    vote: 85,
    likeCount: 70,
  },
  sp005: {
    name: "Classico 4",
    price: 700000,
    discount: 0.29,
    image: "../../assets/images/product/Classico4.png",
    gender: 2,
    date: "2021-02-14",
    vote: 113,
    likeCount: 79,
  },
  sp006: {
    name: "Simple 1",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple1.jpg",
    gender: 2,
    date: "2019-04-02",
    vote: 50,
    likeCount: 47,
  },
  sp007: {
    name: "Simple 2",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple2.jpg",
    gender: 2,
    date: "2019-04-20",
    vote: 107,
    likeCount: 83,
  },
  sp008: {
    name: "Simple 3",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple3.jpg",
    gender: 2,
    date: "2020-02-09",
    vote: 102,
    likeCount: 90,
  },
  sp009: {
    name: "Simple 4",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple4.jpg",
    gender: 0,
    date: "2020-02-10",
    vote: 76,
    likeCount: 63,
  },
  sp010: {
    name: "Simple 5",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple5.jpg",
    gender: 2,
    date: "2020-03-26",
    vote: 65,
    likeCount: 51,
  },
  sp011: {
    name: "Simple 6",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple6.jpg",
    gender: 0,
    date: "2020-03-30",
    vote: 49,
    likeCount: 53,
  },
  sp012: {
    name: "Simple 7",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple7.jpg",
    gender: 1,
    date: "2020-09-01",
    vote: 109,
    likeCount: 101,
  },
  sp013: {
    name: "Simple 8",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple8.jpg",
    gender: 0,
    date: "2021-01-01",
    vote: 140,
    likeCount: 111,
  },
  sp014: {
    name: "Simple 9",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple9.jpg",
    gender: 1,
    date: "2021-04-17",
    vote: 153,
    likeCount: 149,
  },
  sp015: {
    name: "Simple 10",
    price: 700000,
    discount: 0,
    image: "../../assets/images/product/Simple10.jpg",
    gender: 0,
    date: "2022-03-30",
    vote: 170,
    likeCount: 90,
  },
};

const listImgClassico = [
  "../../assets/images/product/Classico.png",
  "../../assets/images/product/Classico1.png",
  "../../assets/images/product/Classico2.png",
  "../../assets/images/product/Classico3.png",
];

const listImgSimple = [
  "../../assets/images/product/Simple1.jpg",
  "../../assets/images/product/Simple2.jpg",
  "../../assets/images/product/Simple3.jpg",
  "../../assets/images/product/Simple4.jpg",
];
// header - footer
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
  link.href = `../chitietsp/chitiet.html?code=${data.code}`;
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
    location.href = `../timkiem/search.html?key=${value}`;
  }
});

$(".header-center__group > button").click(function () {
  const value = $(this).prev().val();
  if (searchCount > 0) {
    location.href = `../timkiem/search.html?key=${value}`;
  }
});

// handle event scroll window for navabar
$(window).on("scroll", () => {
  if ($(window).scrollTop() > 100) {
    $(".header-bottom").addClass("scroll");
  } else {
    $(".header-bottom").removeClass("scroll");
  }
});

// detail product page
// get code of product
const queryStr = location.search;
const urlParams = new URLSearchParams(queryStr);
const codeParams = urlParams.get("code");

if (!codeParams) {
  location.href = "../../index.html";
}

// add first element img of product
function addSrcForImgs(sel) {
  $(sel[0]).attr("src", objProduct[codeParams].image);
  $(sel[0]).attr("alt", objProduct[codeParams].name);
  const indexCur = codeParams.slice(2) - 1;
  for (let i = 1; i < sel.length; ++i) {
    if (indexCur < 5) {
      $(sel[i]).attr("src", listImgSimple[i - 1]);
    } else {
      $(sel[i]).attr("src", listImgClassico[i - 1]);
    }
  }
}

// check like local
function checkLocalHeart(code) {
  const likes = JSON.parse(localStorage.getItem("likes"));
  if (!likes) return false;
  return likes.indexOf(code) !== -1 ? true : false;
}

// render View button heart
function renderViewHeart(data) {
  const len = data.length;
  const lenCur = $(".shop-box__icon").length;
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < lenCur; ++j) {
      const item = $(".shop-box__icon")[j];
      if (data[i] === $(item).attr("data-code")) {
        $(item).addClass("active");
      }
    }
  }
}

// init view start
function initView() {
  const likes = JSON.parse(localStorage.getItem("likes"));
  addSrcForImgs($(".box-slide img"));
  addSrcForImgs($(".box-foot__imghide"));
  document.title = objProduct[codeParams].name;
  $(".title .h1").text(objProduct[codeParams].name);
  $(".evaluate-h3 span").text(objProduct[codeParams].name);
  if (objProduct[codeParams].discount !== 0) {
    $(".price-old").removeClass("d-none");
    $(".price-old").text(`${convertPrice(500000)}₫`);
  }
  $(".price-new").text(`${convertPrice(objProduct[codeParams].price)}₫`);
  if (likes && likes.indexOf(codeParams) !== -1) {
    $(".btn-like").addClass("active");
    $(".load-like").addClass("active");
  }
  if (checkLocalHeart(codeParams)) {
    $(".load-like").addClass("active");
    $(".btn-like").addClass("active");
  }
  if (likes) {
    renderViewHeart(likes);
  }
  const gender = objProduct[codeParams].gender;
  if (gender === 0) {
    $(".breadcrumb-item--link a").text("Đồng hồ nữ");
    $(".breadcrumb-item--link a").attr("href", "../sanpham/donghonu.html");
  } else if (gender === 1) {
    $(".breadcrumb-item--link a").text("Đồng hồ nam");
    $(".breadcrumb-item--link a").attr("href", "../sanpham/donghonam.html");
  } else {
    $(".breadcrumb-item--link a").text("Popular");
    $(".breadcrumb-item--link a").attr("href", "../sanpham/dongho.html");
  }
  $(".item-gender").text(gender === 0 ? "Woman" : "Man");
}

initView();

// handle event click button add count of product
$(".option .btn-add").click(() => {
  let localProduct = JSON.parse(localStorage.getItem("carts"));
  if (localProduct) {
    const index = localProduct.findIndex((item) => item[0] === codeParams);
    const value = +$(".quantity-text").val();
    const lenList = localProduct.length;
    const item = [codeParams, value];
    let result = [];
    if (value > 0) {
      if (index !== -1) {
        if (index === 0) {
          localProduct.shift();
          result = [item, ...localProduct];
        } else if (index === lenList - 1) {
          localProduct.pop();
          result = [...localProduct, item];
        } else {
          const arr1 = localProduct.slice(0, index);
          const arr2 = localProduct.slice(index + 1);
          result = [...arr1, item, ...arr2];
        }
      } else {
        result = [...localProduct, item];
      }
      localStorage.setItem("carts", JSON.stringify(result));
      handleViewCount(".header-count", "carts");
      initCartProduct();
    }
  }
  $(".quantity-text").val(1);
});

// handle click button register
$(".btn-add--aff").click(() => {
  location.href = "../affilicate/AFFILICATE.html";
});

// handle click card of product
function handleGoToProductDetail(e, _this) {
  e.preventDefault();
  const code = $(_this).attr("data-code");
  location.href = `chitiet.html?code=${code}`;
}

$(".shop-img").click(function (e) {
  handleGoToProductDetail(e, this);
});
$(".shop-text__title").click(function (e) {
  handleGoToProductDetail(e, this);
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
function handleAddLiked(event, code, _this) {
  event.stopPropagation();
  setLocalItems("likes", code, code);
  handleViewCount(".count-like", "likes");
  $(_this).addClass("active");
}

// remove array likes in local
function removeLocalLike(code) {
  const likes = JSON.parse(localStorage.getItem("likes"));
  if (likes) {
    const len = likes.length;
    const idx = likes.indexOf(code);
    let results = [];
    if (idx !== -1) {
      if (idx === 0) {
        results = likes.shift() && likes;
      } else if (idx === len - 1) {
        results = likes.pop() && likes;
      } else {
        results = [...likes.slice(0, idx), ...likes.slice(idx + 1)];
      }
      localStorage.setItem("likes", JSON.stringify(results));
    }
  }
}

// handle event click when liked
function handleRemoveLike(event, code, _this) {
  event.stopPropagation();
  removeLocalLike(code);
  handleViewCount(".count-like", "likes");
  $(_this).removeClass("active");
}

// add event like
$(".btn-like").click(function (e) {
  const idx = $(this).attr("class").indexOf("active");
  if (idx !== -1) {
    handleRemoveLike(e, codeParams, this);
    $(".load-like").removeClass("active");
  } else {
    handleAddLiked(e, codeParams, this);
    $(".load-like").addClass("active");
  }
});

$(".load-like").click(function (e) {
  const idx = $(this).attr("class").indexOf("active");
  if (idx !== -1) {
    handleRemoveLike(e, codeParams, this);
    $(".btn-like").removeClass("active");
  } else {
    handleAddLiked(e, codeParams, this);
    $(".btn-like").addClass("active");
  }
});

$(".shop-box__icon").click(function (e) {
  const idx = $(this).attr("class").indexOf("active");
  const code = $(this).attr("data-code");
  if (idx !== -1) {
    handleRemoveLike(e, code, this);
  } else {
    handleAddLiked(e, code, this);
  }
});

// add event click button add cart
$(".shop-text__btn").click(function (event) {
  event.stopPropagation();
  const code = $(this).attr("data-code");
  const item = [code, 1];
  setLocalItems("carts", item, code);
  handleViewCount(".header-count", "carts");
  initCartProduct();
  $(this).addClass("d-none");
  $(this).next().removeClass("d-none");
  $(this).next().addClass("d-flex");
});

// handle when click star
$(".star a").click(function (e) {
  e.preventDefault();
  $(".star a").removeClass("active");
  $(this).addClass("active");
});

// slide show big image
let $carousel = $(".box-head").flickity({
  pageDots: false,
  draggable: true,
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  fullscreen: true,
  lazyLoad: 1,
});

// customizing btn next and prev
$(".btn-prev__show").on("click", function () {
  $carousel.flickity("previous", true);
});

$(".btn-next__show").on("click", function () {
  $carousel.flickity("next", true);
});

// slide show mini image
let $carouselMini = $(".box-foot").flickity({
  pageDots: false,
  draggable: true,
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  asNavFor: ".box-head",
});

// value of input number
let valueInput = $(".quantity-text").val();

// add event click for button - , +
$(".quantity-plus:first-child").click((e) => {
  e.preventDefault();
  if (+$(".quantity-text").val() > 0) {
    $(".quantity-text").val(--valueInput);
  }
});

$(".quantity-plus:last-child").click((e) => {
  e.preventDefault();
  $(".quantity-text").val(++valueInput);
});

// add event click button about and comment
$(".product-footer__all .nav-link").click(function (e) {
  e.preventDefault();
  $(".product-footer__all .nav-link").removeClass("active");
  $(this).addClass("active");
  if ($(this).attr("data-index") === "0") {
    $(".content-p").css("display", "block");
    $(".evaluate").css("display", "none");
  } else {
    $(".content-p").css("display", "none");
    $(".evaluate").css("display", "block");
  }
});

// slide show other product
let boxAll = $(".box-all .carousel").flickity({
  pageDots: false,
  draggable: true,
  contain: true,
  freeScroll: true,
});
