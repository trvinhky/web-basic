$(window).ready(() => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

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

  $(".account .nav-item").click(function () {
    $(".account .nav-item").removeClass("active");
    $(".in4-content__item").removeClass("active");
    const index = $(this).attr("data-index");
    const contentCur = $(".in4-content__item")[+index];
    $(this).addClass("active");
    $(contentCur).addClass("active");
  });
});
