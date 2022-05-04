window.onscroll = function () {
  headerScroll();
};

function headerScroll() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").className = "header_scroll";
  } else {
    document.getElementById("header").className = "header";
  }
}


function openLanguage() {
  document.getElementById("current").onclick = closeLanguage;
  document.getElementById("selection").style.display = "flex";
  document.getElementById("language").style.display = "block";
}
function closeLanguage() {
  document.getElementById("current").onclick = openLanguage;
  document.getElementById("selection").style.display = "none";
  document.getElementById("language").style.display = "none";
}

setTimeout(function () {
  $(".current>img")
    .attr(
      "src",
      `https://flagcdn.com/${
        gq("lang").split("-")[1] ||
        localStorage.getItem("language").split("-")[1] ||
        "us"
      }.svg`
    )
    .attr("alt", gq("lang") || "en-us");
  $(".current>h6").text(
    (
      gq("lang").split("-")[1] ||
      localStorage.getItem("language").split("-")[1] ||
      "US"
    ).toUpperCase()
  );
}, 500);