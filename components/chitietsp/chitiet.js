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
  if (likes.indexOf(codeParams) !== -1) {
    $(".btn-like").addClass("active");
    $(".load-like").addClass("active");
  }
  if (checkLocalHeart(codeParams)) {
    $(".load-like").addClass("active");
    $(".btn-like").addClass("active");
  }
  renderViewHeart(likes);
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
