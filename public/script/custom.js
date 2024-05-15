var image = document.querySelectorAll(".we-are-masters");
var winScroll = 0;
var posNeg = 0;
var isScrolling;

// change speed (high < 8 < low)
var speed = 8;

image.forEach((elm) => {
  window.addEventListener("scroll", function () {
    winScroll = window.scrollY;

    elm.style.transition = "none";
    elm.style.transform = `translateY(${0 + winScroll / speed}px)`;

    if (posNeg < winScroll) {
      console.log("+++++");
      setTimeout(() => {
        elm.style.transition = "500ms ease-in-out";
        elm.style.transform = `translateY(${0 + winScroll / (speed - 1)}px)`;
      }, 66);
    } else {
      console.log("----");
      setTimeout(() => {
        elm.style.transition = "500ms ease-in-out";
        elm.style.transform = `translateY(${0 + winScroll / (speed + 1)}px)`;
      }, 66);
    }

    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      posNeg = winScroll;
    }, 66);
  });
});


