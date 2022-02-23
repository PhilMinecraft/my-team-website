window.onscroll = function () {
  headerScroll();
};

function headerScroll() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").className = "header_shadow";
  } else {
    document.getElementById("header").className = "header";
  }
}
