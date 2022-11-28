$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".seen").click(() => (location.href = "../sanpham/dongho.html"));
$(".pay").click(() => (location.href = "../thanhtoan/thanhtoan.html"));

// create product cart page
function createProductCart(data) {
  const tr = document.createElement("tr");
  tr.classList.add("table_body");

  const col1 = document.createElement("td");
  col1.classList.add("sanpham");

  const remove = document.createElement("span");
  remove.className = "d-flex align-items-center justify-content-center remove";
  remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  remove.onclick = function () {
    handleRemoveProduct(data.code);
    initViewCartPage();
  };
  col1.appendChild(remove);

  const groupImg = document.createElement("div");
  groupImg.classList.add("img");

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.name;
  groupImg.appendChild(img);
  col1.appendChild(groupImg);

  const title = document.createElement("div");
  title.classList.add("name");
  title.innerText = data.name;
  col1.appendChild(title);
  tr.appendChild(col1);

  const col2 = document.createElement("td");
  col2.classList.add("price");
  const price = data.discount > 0 ? 500000 : data.price;
  col2.innerHTML = `<span> ${convertPrice(price)}đ</span>`;
  tr.appendChild(col2);

  const col3 = document.createElement("td");

  const groupInput = document.createElement("div");
  groupInput.className = "d-flex quantity";

  const btnFirst = document.createElement("button");
  btnFirst.className = "text-center quantity-plus";
  btnFirst.innerText = "-";
  groupInput.appendChild(btnFirst);

  const input = document.createElement("input");
  input.type = "number";
  input.className = "text-center quantity-text";
  input.setAttribute("value", data.count);
  input.setAttribute("min", "1");
  input.setAttribute("max", "999");
  input.setAttribute("title", "SL");
  groupInput.appendChild(input);

  const btnLast = document.createElement("button");
  btnLast.className = "text-center quantity-plus";
  btnLast.innerText = "+";
  groupInput.appendChild(btnLast);
  col3.appendChild(groupInput);
  tr.appendChild(col3);

  const col4 = document.createElement("td");
  col4.classList.add("price_total");
  const sum = price * data.count;
  col4.innerText = `${convertPrice(sum)}đ`;
  tr.appendChild(col4);

  return tr;
}

// init view cart page
function initViewCartPage() {
  const dataLocal = JSON.parse(localStorage.getItem("carts"));
  let total = 0;
  $(".product-cart").html("");
  for (let i = 0; i < dataLocal.length; ++i) {
    const key = dataLocal[i][0];
    const convertData = {
      ...objProduct[key],
      count: dataLocal[i][1],
    };
    total += convertData.price * convertData.count;
    const tr = createProductCart(convertData);
    $(".product-cart").append(tr);
  }
  $(".total-sup").text(`${convertPrice(total)} ₫`);
  $(".total-last").text(`${convertPrice(total)} ₫`);
}

// update count product
$(".update").click(() => {
  const dataLocal = JSON.parse(localStorage.getItem("carts"));
  let result = [];
  for (let i = 0; i < $(".quantity-text").length; ++i) {
    const item = $(".quantity-text")[i];
    if ($(item).val()) {
      const itemTemp = [dataLocal[i][0], $(item).val()];
      result.push(itemTemp);
    }
  }
  localStorage.setItem("carts", JSON.stringify(result));
  initViewCartPage();
});

initViewCartPage();
