const animateHead = {
  opacity: "1",
  transform: "translate3d(0, 0, 0)",
};

function renderIntroduceP1() {
  $(".picture").css(animateHead);
  $(".introduce").css(animateHead);
}

function renderIntroduceP2() {
  const group = $(".group");
  const lenGroup = group.length - 1;
  for (let i = 0; i <= lenGroup; ++i) {
    $(group[i]).css({
      ...animateHead,
      "transition-delay": `${i / lenGroup}s`,
    });
  }
}

function renderIntroduceP3() {
  const listNumber = [1280, 8, 3898, 25];
  function handleLoadNumber(selector, number) {
    const speed = 200;
    const step = number / speed;
    let from = 0;
    const render = setInterval(() => {
      from += step;
      if (from > number) {
        clearInterval(render);
        $(selector).text(number);
      } else $(selector).text(Math.ceil(from));
    }, 1);
  }
  const numberRander = $(".big-num");
  const lenNumber = numberRander.length - 1;
  for (let i = 0; i <= lenNumber; ++i) {
    handleLoadNumber(numberRander[i], listNumber[i]);
  }
}

function renderIntroduceP4() {
  const avatar = $(".avatar");
  const lenAvatar = avatar.length - 1;
  for (let i = 0; i <= lenAvatar; ++i) {
    $(avatar[i]).css({
      ...animateHead,
      "transition-delay": `${i / lenAvatar}s`,
    });
  }
}

const positionP1 = $(".introduce-p1").position().top;
const positionP2 = $(".introduce-p2").position().top;
const positionP3 = $(".introduce-p3").position().top;
const positionP4 = $(".introduce-p4").position().top;
let contentCount = 0;

function handleRenderView(positionCurrent) {
  if (positionCurrent >= positionP1 && contentCount < 1) {
    ++contentCount;
    renderIntroduceP1();
  }
  if (positionCurrent >= positionP2 && contentCount < 2) {
    ++contentCount;
    renderIntroduceP2();
  }
  if (positionCurrent >= positionP3 && contentCount < 3) {
    ++contentCount;
    renderIntroduceP3();
  }
  if (positionCurrent >= positionP4 && contentCount < 4) {
    ++contentCount;
    renderIntroduceP4();
  }
}

$(document).ready(() => {
  let positionCurrent = $(window).scrollTop() + $(window).height();
  handleRenderView(positionCurrent);
});

$(window).on("scroll", () => {
  let positionCurrent = $(window).scrollTop() + $(window).height();
  handleRenderView(positionCurrent);
  if (positionCurrent >= $(document).height() - 50) {
    $(window).off("scroll");
  }
});
