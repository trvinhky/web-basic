// get key of search
const queryStr = location.search;
const urlParams = new URLSearchParams(queryStr);
const keyParams = urlParams.get("key");

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
    if (nameSS.indexOf(valueSS) !== -1) {
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
