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
  if (localProduct)
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
  price.innerText = `${product.price}??`;
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
  total = `${convertPrice(total)}??`;
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
    old.innerText = `${convertPrice(data.price)}??`;
    group.appendChild(old);
  }

  const price = data.discount > 0 ? 500000 : data.price;
  const priceNew = document.createElement("span");
  priceNew.classList.add("new");
  priceNew.innerText = `${convertPrice(price)}??`;
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
  span.innerText = "Kh??ng c?? s???n ph???m n??o.";
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

function toggleClassScroll(pos, className) {
  if (pos > 100) {
    $(className).addClass("scroll");
  } else {
    $(className).removeClass("scroll");
  }
}

// handle event scroll window for navabar
$(window).on("scroll", () => {
  const pos = $(window).scrollTop();
  if ($(window).width() < 820) {
    toggleClassScroll(pos, ".header-center__box");
  } else {
    toggleClassScroll(pos, ".header-bottom");
  }
});

// like page
// delete like
function handleDeleteLike(code) {
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

// set item local item
function setLocalItemsCarts(code) {
  const item = [code, 1];
  const listCur = JSON.parse(localStorage.getItem("carts"));
  if (listCur) {
    let isIn = false;
    for (let i = 0; i < listCur.length; ++i) {
      if (listCur[i][0] === code) {
        isIn = true;
        break;
      }
    }
    if (!isIn) {
      const localItem = [...listCur, item];
      localStorage.setItem("carts", JSON.stringify(localItem));
    }
  } else {
    localStorage.setItem("carts", JSON.stringify([item]));
  }
}

// create tr
function createTrTable(data) {
  const tr = document.createElement("tr");

  const col1 = document.createElement("td");

  const remove = document.createElement("span");
  remove.classList.add("whish-list__remove");
  remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  remove.onclick = () => {
    handleDeleteLike(data.code);
    initViewWhish();
  };
  col1.appendChild(remove);
  tr.appendChild(col1);

  const col2 = document.createElement("td");
  col2.setAttribute("scope", "row");
  col2.classList.add("whish-list__img");

  const link = document.createElement("a");
  link.href = `../chitietsp/chitiet.html?code=${data.code}`;

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.name;
  link.appendChild(img);
  col2.appendChild(link);
  tr.appendChild(col2);

  const col3 = document.createElement("td");
  col3.classList.add("whish-list__text");

  const title = document.createElement("a");
  title.href = `../chitietsp/chitiet.html?code=${data.code}`;

  const h3 = document.createElement("h3");
  h3.innerText = data.name;
  title.appendChild(h3);
  col3.appendChild(title);

  const p = document.createElement("p");
  p.classList.add("whish-list__price");

  if (data.discount !== 0) {
    const old = document.createElement("span");
    old.classList.add("old");
    old.innerText = `${convertPrice(data.price)}??`;
    p.appendChild(old);
  }

  const price = document.createElement("span");
  price.innerText = `${convertPrice(data.discount ? 500000 : data.price)}??`;
  p.appendChild(price);
  col3.appendChild(p);
  tr.appendChild(col3);

  const col4 = document.createElement("td");
  col4.classList.add("whish-list__store");
  col4.innerText = "C??n h??ng";
  tr.appendChild(col4);

  const col5 = document.createElement("td");
  col5.classList.add("whish-list__add");
  // if count of product = 0 -> add class empty

  const btn = document.createElement("button");
  btn.innerText = "Add to cart";
  btn.onclick = () => {
    setLocalItemsCarts(data.code);
    handleDeleteLike(data.code);
    initViewWhish();
  };
  col5.appendChild(btn);
  tr.appendChild(col5);

  return tr;
}

// create li of list
function createLiOfList(data) {
  const li = document.createElement("li");
  li.classList.add("whish-list__item");

  // if count of product = 0 -> appendChild
  // <span class="whish-item__empty"> H???t h??ng </span>

  const link = document.createElement("a");
  link.href = `../chitietsp/chitiet.html?code=${data.code}`;
  link.classList.add("whish-item__content");

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.name;
  link.appendChild(img);

  const group = document.createElement("div");
  group.classList.add("whish-item__text");

  const h3 = document.createElement("h3");
  h3.innerText = data.name;
  group.appendChild(h3);

  const p = document.createElement("p");
  p.classList.add("whish-list__price");

  if (data.discount !== 0) {
    const old = document.createElement("span");
    old.classList.add("old");
    old.innerText = `${convertPrice(data.price)}??`;
    p.appendChild(old);
  }

  const price = document.createElement("span");
  price.innerText = `${convertPrice(data.discount ? 500000 : data.price)}??`;
  p.appendChild(price);
  group.appendChild(p);

  const col = document.createElement("td");
  col.classList.add("whish-list__add");

  const btn = document.createElement("button");
  btn.innerText = "Add to cart";
  btn.onclick = (e) => {
    e.stopPropagation();
    setLocalItemsCarts(data.code);
    handleDeleteLike(data.code);
    initViewWhish();
  };
  col.appendChild(btn);
  group.appendChild(col);
  link.appendChild(group);
  li.appendChild(link);

  const remove = document.createElement("span");
  remove.classList.add("whish-list__remove");
  remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  remove.onclick = (e) => {
    e.stopPropagation();
    handleDeleteLike(data.code);
    initViewWhish();
  };
  li.appendChild(remove);

  return li;
}

// set number of heart in header
function handleViewCount(sel, name) {
  const localArr = JSON.parse(localStorage.getItem(name));
  if (localArr) $(sel).text(localArr.length);
}

// init view like page
function initViewWhish() {
  const localLike = JSON.parse(localStorage.getItem("likes"));
  if (localLike) {
    const len = localLike.length;
    handleViewCount(".count-like", "likes");
    handleViewCount(".header-count", "carts");
    initCartProduct();
    $(".whish-content").html("");
    $(".whish-list__like").html("");
    if (len > 0) {
      for (let i = 0; i < len; ++i) {
        const item = localLike[i];
        const convertData = {
          ...objProduct[item],
          code: item,
        };
        const tr = createTrTable(convertData);
        const li = createLiOfList(convertData);
        $(".whish-content").append(tr);
        $(".whish-list__like").append(li);
      }
    }
  }
}

initViewWhish();

$(document).ready(() => {
  $(".loading-overlay").addClass("d-none");
});
