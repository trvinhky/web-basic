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
  $(".header-count").text(localProduct.length > 0 ? localProduct.length : 0);
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
    location.href = `search.html?key=${value}`;
  }
});

$(".header-center__group > button").click(function () {
  const value = $(this).prev().val();
  if (searchCount > 0) {
    location.href = `search.html?key=${value}`;
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

// search page
// get key of search
const queryStr = location.search;
const urlParams = new URLSearchParams(queryStr);
const keyParams = urlParams.get("key");

document.title = `Kết quả tìm kiếm cho "${keyParams}"`;
$(".key-search").text(keyParams);

// add event click navbar tablet, mobile of product
$(".product-open").click(() => {
  $(".list-product").addClass("active");
  $(".list-product__overlay").addClass("active");
});

// add event click overlay
$(".list-product__overlay").click(() => {
  $(".list-product").removeClass("active");
  $(".list-product__overlay").removeClass("active");
});

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
function handleAddLiked(event, code, _this) {
  event.stopPropagation();
  setLocalItems("likes", code, code);
  handleViewCount(".count-like", "likes");
  $(_this).addClass("active");
}

// remove array likes in local
function removeLocalLike(code) {
  const likes = JSON.parse(localStorage.getItem("likes"));
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

// handle event click when liked
function handleRemoveLike(event, code, _this) {
  event.stopPropagation();
  removeLocalLike(code);
  handleViewCount(".count-like", "likes");
  $(_this).removeClass("active");
}

// create card product
function createCartProduct(data) {
  const div = document.createElement("div");
  div.className = "col-lg-3 col-md-4 col-6 p-2";

  const cart = document.createElement("div");
  cart.className = "d-flex flex-column shop-box";

  const top = document.createElement("div");
  top.className = "position-relative shop-box__img";

  const groupImg = document.createElement("a");
  groupImg.classList.add("shop-img");
  groupImg.href = `../chitietsp/chitiet.html?code=${data.code}`;

  const imgTop = document.createElement("img");
  imgTop.src = data.image;
  imgTop.setAttribute("alt", data.name);
  groupImg.appendChild(imgTop);

  const imgBottom = document.createElement("img");
  imgBottom.classList.add("position-absolute");
  imgBottom.src = "../../assets/images/product/Classico1.png";
  imgBottom.setAttribute("alt", "Classico1");
  groupImg.appendChild(imgBottom);
  top.appendChild(groupImg);

  const btnLike = document.createElement("button");
  btnLike.className =
    "position-absolute d-flex align-items-center justify-content-center shop-box__icon";
  btnLike.setAttribute("title", "Thêm yêu thích");
  btnLike.setAttribute("data-code", data.code);
  btnLike.innerHTML = '<i class="fa-solid fa-heart"></i>';
  btnLike.onclick = function (e) {
    const idx = $(this).attr("class").indexOf("active");
    const code = $(this).attr("data-code");
    if (idx !== -1) {
      handleRemoveLike(e, code, this);
    } else {
      handleAddLiked(e, code, this);
    }
  };
  top.appendChild(btnLike);
  cart.appendChild(top);

  const bottom = document.createElement("div");
  bottom.className = "d-flex flex-column align-items-center shop-text";

  const title = document.createElement("a");
  title.href = `../chitietsp/chitiet.html?code=${data.code}`;
  title.classList.add("shop-text__title");
  title.innerText = data.name;
  bottom.appendChild(title);

  const price = document.createElement("span");
  price.classList.add("shop-text__price");
  price.innerHTML = `${convertPrice(
    data.discount > 0 ? 500000 : data.price
  )}<span>đ</span>`;
  bottom.appendChild(price);

  const btnAdd = document.createElement("button");
  btnAdd.className = "text-uppercase shop-text__btn";
  btnAdd.innerText = "Thêm Vào Giỏ";
  btnAdd.setAttribute("data-code", data.code);
  btnAdd.onclick = function (event) {
    console.log(1);
    event.stopPropagation();
    const code = $(this).attr("data-code");
    const item = [code, 1];
    setLocalItems("carts", item, code);
    handleViewCount(".header-count", "carts");
    initCartProduct();
    $(this).addClass("d-none");
    $(this).next().removeClass("d-none");
    $(this).next().addClass("d-flex");
  };
  bottom.appendChild(btnAdd);

  const link = document.createElement("button");
  link.className =
    "product-btn d-none align-items-center justify-content-center text-nowrap text-uppercase product-btn--link";
  link.href = "#";
  link.innerHTML = 'Xem giỏ hàng <i class="fa-solid fa-arrow-right-long"></i>';
  bottom.appendChild(link);
  cart.appendChild(bottom);
  div.appendChild(cart);

  return div;
}

let dataOfProduct = [];

// init View
function initViewProductSearch() {
  const valueSS = keyParams.toLowerCase();
  const dataObj = Object.entries(objProduct);
  dataObj.forEach((item) => {
    const nameSS = item[1].name.toLowerCase();
    if (nameSS.startsWith(valueSS)) {
      const convertData = {
        ...item[1],
        code: item[0],
      };
      dataOfProduct.push(convertData);
    }
  });
  renderProduct(dataOfProduct);
}

// fill price
function handleFillProductPrice(value) {
  dataOfProduct = [];
  const dataObj = Object.entries(objProduct);
  const temp = dataObj.filter((item) => {
    let price = item[1].discount > 0 ? 500000 : item[1].price;
    return price <= value;
  });
  temp.forEach((item) => {
    const convertData = {
      ...item[1],
      code: item[0],
    };
    dataOfProduct.push(convertData);
  });
  renderProduct(dataOfProduct);
}

// add event fill
$(".select-input__fill").click(() => {
  const value = $("#vol").val() * 1000;
  handleFillProductPrice(value);
});

// add event change input fill
$("#vol").on("change", function () {
  $(this).attr("title", $(this).val() * 1000);
});

// render Product
function renderProduct(data) {
  $(".render-product").html("");
  if (data.length > 0) {
    data.forEach((item) => {
      const child = createCartProduct(item);
      $(".render-product").append(child);
    });
  } else {
    $(".render-product").text("Rất tiếc! Không có sản phẩm phù hợp :((");
  }
  const likes = JSON.parse(localStorage.getItem("likes"));
  renderViewHeart(likes);
}

// handle sort
function handleChangeSort() {
  const data = dataOfProduct.map((item) => ({
    ...item,
    date: new Date(item.date).getTime(),
  }));
  const valueInput = $(this).val();
  let result = [];
  switch (valueInput) {
    case "popularity":
      result = data.sort((a, b) => a.likeCount - b.likeCount);
      break;
    case "rating":
      result = data.sort((a, b) => a.vote - b.vote);
      break;
    case "date":
      result = data.sort((a, b) => a.date - b.date);
      break;
    case "price":
      result = data.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = data.sort((a, b) => b.price - a.price);
      break;
    default:
      result = data;
      break;
  }

  renderProduct(result);
}

// handle event change input select
$("#orderby").change(handleChangeSort);

// handle go to blog page
$(".box-link").click(function (e) {
  e.preventDefault();
  const id = $(this).attr("data-id");
  location.href = `../chitietblog/chitietblog.html?id=${id}`;
});

// handle go to product detail
$(".nav-item5__link").click(function (e) {
  e.preventDefault();
  const code = $(this).attr("data-code");
  if (code) {
    location.href = `../chitietsp/chitiet.html?code=${code}`;
  }
});

initViewProductSearch();
