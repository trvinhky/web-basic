// delete like
function handleDeleteLike(code) {
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
    old.innerText = `${convertPrice(data.price)}đ`;
    p.appendChild(old);
  }

  const price = document.createElement("span");
  price.innerText = `${convertPrice(data.discount ? 500000 : data.price)}đ`;
  p.appendChild(price);
  col3.appendChild(p);
  tr.appendChild(col3);

  const col4 = document.createElement("td");
  col4.classList.add("whish-list__store");
  col4.innerText = "Còn hàng";
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
  // <span class="whish-item__empty"> Hết hàng </span>

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
    old.innerText = `${convertPrice(data.price)}đ`;
    p.appendChild(old);
  }

  const price = document.createElement("span");
  price.innerText = `${convertPrice(data.discount ? 500000 : data.price)}đ`;
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
  $(sel).text(localArr.length);
}

// init view like page
function initViewWhish() {
  const localLike = JSON.parse(localStorage.getItem("likes"));
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

initViewWhish();
