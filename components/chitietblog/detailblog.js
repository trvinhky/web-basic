// get code of product
const queryStr = location.search;
const urlParams = new URLSearchParams(queryStr);
const idParams = urlParams.get("id");

// create content
function createContentBlog(data) {
  const group = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.className = "px-4 blog-detail__title";
  h1.innerText = data.title[0];
  group.appendChild(h1);

  const small = document.createElement("small");
  small.className = "d-inline-block w-100 mx-4 my-2 blog-detail__small";
  group.appendChild(small);

  const bigImg = document.createElement("div");
  bigImg.className = "position-relative blog-detail__img my-4";

  const date = document.createElement("span");
  date.className =
    "d-flex flex-column align-items-center justify-content-center position-absolute blog-detail__date";
  date.innerHTML = "<small>05</small><small>Th7</small>";
  bigImg.appendChild(date);

  const imgMain = document.createElement("img");
  imgMain.src = data.image;
  imgMain.alt = data.id;
  bigImg.appendChild(imgMain);
  group.appendChild(bigImg);

  if (data.title.length > 1) {
    const h2 = document.createElement("h2");
    h2.className = "px-4 pb-3 blog-detail__sup";
    h2.innerText = data.title[1];
    group.appendChild(h2);
  }

  if (data.content.length > 0) {
    data.content.forEach((item) => {
      if (item.startsWith("../../")) {
        const imgContent = document.createElement("div");
        imgContent.className = "mx-4 my-2 blog-detail__img--mini";

        const imgChild = document.createElement("img");
        imgChild.src = item;
        imgContent.appendChild(imgChild);
        group.appendChild(imgContent);
      } else {
        const contentMain = document.createElement("p");
        contentMain.className = "px-4 blog-detail__text";
        contentMain.innerText = item;
        group.appendChild(contentMain);
      }
    });
  }

  if (data.other.length > 0) {
    data.other.forEach((item) => {
      const titleMini = document.createElement("h4");
      titleMini.className = "px-4 blog-detail__mini";
      titleMini.innerText = item.title;
      group.appendChild(titleMini);

      const imgMini = document.createElement("div");
      imgMini.className = "mx-4 my-2 blog-detail__img--mini";

      const imgMiniChild = document.createElement("img");
      imgMiniChild.src = item.image;
      imgMini.appendChild(imgMiniChild);
      group.appendChild(imgMini);

      if (item.content.length > 0) {
        item.content.forEach((text) => {
          const contentMini = document.createElement("p");
          contentMini.className = "px-4 blog-detail__text";
          contentMini.innerText = text;
          group.appendChild(contentMini);
        });
      }
    });
  }

  return group;
}

if (!idParams) {
  location.href = "../../index.html";
}

const listId = listBlogs.map((item) => item.id);

// init view blog page
function initViewDetailBlog() {
  let idxCurr = 0;
  for (let i = 0; i < listId.length; ++i) {
    if (listId[i] === idParams) {
      idxCurr = i;
      break;
    }
  }
  const div = createContentBlog(listBlogs[idxCurr]);
  $(".blog-right__top--content").html("");
  $(".blog-right__top--content").append(div);

  if (idxCurr === 0) {
    $(".blog-detail__other--link.left").addClass("d-none");
    $(".blog-detail__other--link.right span").text(
      listBlogs[idxCurr + 1].title[0]
    );
    $(".blog-detail__other--link.right").attr(
      "href",
      `chitietblog.html?id=${listId[idxCurr + 1]}`
    );
  } else if (idxCurr === listId.length - 1) {
    $(".blog-detail__other--link.right").addClass("d-none");
    $(".blog-detail__other--link.left span").text(
      listBlogs[idxCurr - 1].title[0]
    );
    $(".blog-detail__other--link.left").attr(
      "href",
      `chitietblog.html?id=${listId[idxCurr - 1]}`
    );
  } else {
    $(".blog-detail__other--link.right span").text(
      listBlogs[idxCurr + 1].title[0]
    );
    $(".blog-detail__other--link.right").attr(
      "href",
      `chitietblog.html?id=${listId[idxCurr + 1]}`
    );
    $(".blog-detail__other--link.left span").text(
      listBlogs[idxCurr - 1].title[0]
    );
    $(".blog-detail__other--link.left").attr(
      "href",
      `chitietblog.html?id=${listId[idxCurr - 1]}`
    );
  }
}

// add event click item left
$(".box-link").click(function (e) {
  e.preventDefault();
  const id = $(this).attr("data-id");
  location.href = `chitietblog.html?id=${id}`;
});

initViewDetailBlog();
