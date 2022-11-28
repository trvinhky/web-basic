// create product pay
function createProductPay(data) {
  const tr = document.createElement("tr");
  tr.classList.add("order-item");

  const th = document.createElement("th");
  th.className = "text-uppercase order-name";
  th.innerHTML = `${data.name} <strong>x${data.count}</strong>`;
  tr.appendChild(th);

  const td = document.createElement("td");
  td.className = "text-uppercase text-right order-total";
  const price = data.discount > 0 ? 500000 : data.price;
  td.innerHTML = `<span> ${convertPrice(price)} ₫ </span>`;
  tr.appendChild(td);

  return tr;
}

// init view pay
function initViewPay() {
  const dataLocal = JSON.parse(localStorage.getItem("carts"));
  let total = 0;
  $(".pay-product").html("");
  for (let i = 0; i < dataLocal.length; ++i) {
    const key = dataLocal[i][0];
    const convertData = {
      ...objProduct[key],
      count: dataLocal[i][1],
    };
    total += convertData.price * convertData.count;
    const tr = createProductPay(convertData);
    $(".pay-product").append(tr);
  }
  $(".order-name-foot span").text(`${convertPrice(total)} ₫`);
  $(".order-sum span").text(`${convertPrice(total)} ₫`);
}

initViewPay();
