window.onload = function () {
  if (document.body.scrollTop > 0) {
    window.scrollTo(0, 300);
    document.body.scrollTop = 0;
  }
  window.scrollTo(0, 300);
  document.body.scrollTop = 0;
};

$(window).scroll(() => {
  let a = $("html,body").scrollTop();
  if (a > 199 && a < 610) {
    document.getElementById("right_img_big_cake1").style.backgroundImage =
      "url(./images/icon/cake1.png)";
  } else if (a >= 610 && a < 1149) {
    document.getElementById("right_img_big_cake1").style.backgroundImage =
      "url(./images/icon/cake2.png)";
  } else if (a >= 1150) {
    document.getElementById("right_img_big_cake1").style.backgroundImage =
      "url(./images/icon/Frame88.png)";
  }
});
$(window).scroll(() => {
  let lineImg = document.getElementById("lineImg");
  let a = $("html,body").scrollTop();
  if (a > 199 && a < 2066.666748046875) {
    lineImg.setAttribute("src", "./images/icon/line.png");
  } else if (a >= 2066.666748046875 && a < 4369) {
    lineImg.removeAttribute("src", "./images/icon/line.png");
    lineImg.setAttribute("src", "./images/icon/line2.png");
  } else if (a >= 4370) {
    lineImg.removeAttribute("src", "./images/icon/line2.png");
    lineImg.setAttribute("src", "./images/icon/line3.png");
  } else {
    lineImg.removeAttribute("src", "./images/icon/line.png");
  }
});
