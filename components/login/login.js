$(document).ready(() => {
  // toggle type password
  $(".form-input i").click(function () {
    if ($(this).prev().attr("type") === "password") {
      $(this).prev().attr("type", "text");
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
    } else {
      $(this).prev().attr("type", "password");
      $(this).addClass("fa-eye-slash");
      $(this).removeClass("fa-eye");
    }
  });

  let userObj = { email: "", password: "" };
  const data = JSON.parse(localStorage.getItem("listUsers"));
  const checkUser = (value, type) => {
    if (data) {
      for (let item of data) {
        if (item[type] === value) {
          userObj[type] = value;
          return true;
        }
      }
      return false;
    }
    return false;
  };

  let isCheck = false;
  const listInput = $("form")[0];
  const len = listInput.length - 3; // -button -checkbox
  const initValue = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    for (let i = 0; i <= len; ++i) {
      listInput[i].value = user[listInput[i].type];
    }
  };

  initValue();

  $("form").submit(function (e) {
    e.preventDefault();
    if (!data) {
      const isToRegister = confirm(
        "Bạn chưa đăng ký tài khoản, bạn có muốn đăng ký ngay bây giờ không?"
      );
      if (isToRegister) location.href = "dangky.html";
    } else {
      for (let i = 0; i <= len; ++i) {
        const idError = listInput[i].getAttribute("aria-describedby");
        if (!checkUser(listInput[i].value, listInput[i].type)) {
          $(`#${idError}`).removeClass("d-none");
          listInput[i].focus();
          isCheck = false;
          break;
        } else {
          $(`#${idError}`).addClass("d-none");
          isCheck = true;
        }
      }
      if (isCheck) {
        const currenUser = localStorage.getItem("user");
        if (!currenUser) {
          localStorage.setItem("user", JSON.stringify(userObj));
        }
        $(this).submit();
      }
    }
  });

  $(".loading-overlay").addClass("d-none");
});
