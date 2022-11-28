$(".blogs-box__link").click(function (e) {
  const id = $(this).attr("data-id");
  e.preventDefault();
  location.href = `../chitietblog/chitietblog.html?id=${id}`;
});
