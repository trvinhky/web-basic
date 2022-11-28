$(window).ready(() => {
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

  let user = [];
  const data = {};
  let pValue = "";
  const handleValidate = (value, type) => {
    switch (type) {
      case "password":
      case "text":
        if (pValue) return value ? value === pValue : false;
        else {
          const passwordReg = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
          if (value && passwordReg.test(value)) {
            pValue = value;
            data.password = value;
            return true;
          } else return false;
        }
      case "email":
        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (value && emailReg.test(value)) {
          data.email = value;
          return true;
        } else return false;
      default:
        throw new Error(value, type);
    }
  };

  const checkEmail = (value) => {
    const isCheckUser = JSON.parse(localStorage.getItem("listUsers"));
    if (!isCheckUser) return true;
    for (let data of isCheckUser) {
      if (data.email === value) {
        return false;
      }
    }
    return true;
  };

  $("form").submit(function (e) {
    e.preventDefault();
    let isCheck = true;
    const listInput = $(this)[0];
    const len = listInput.length - 3; // -button -checkbox

    for (let i = 0; i <= len; ++i) {
      const idError = listInput[i].getAttribute("aria-describedby");
      if (listInput[i].type === "email" && !checkEmail(listInput[i].value)) {
        $(`#${idError}`).removeClass("d-none");
        $(`#${idError}`).text("Email đã tồn tại. Vui lòng nhập email khác!");
        listInput[i].value = "";
        listInput[i].focus();
        isCheck = false;
        break;
      } else if (!handleValidate(listInput[i].value, listInput[i].type)) {
        $(`#${idError}`).removeClass("d-none");
        if (listInput[i].type === "email") {
          $(`#${idError}`).text("Vui lòng nhập đúng email.");
        }
        listInput[i].focus();
        isCheck = false;
        break;
      } else {
        $(`#${idError}`).addClass("d-none");
      }
    }

    if (isCheck) {
      const isCheckUser = JSON.parse(localStorage.getItem("listUsers"));
      if (isCheckUser) {
        user = [...isCheckUser, data];
      } else {
        user.push(data);
      }
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("listUsers", JSON.stringify(user));
      const isToLogin = confirm(
        "Đăng ký thành công bạn có muốn đăng nhập ngay bây giờ không"
      );
      if (isToLogin) this.submit();
    }
  });
});
