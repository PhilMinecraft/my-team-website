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
  $("*[data-cr-date]").text(DtUv29x0() - 1 + " - " + DtUv29x0());
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

// const current = $("#current").click(() => {
//   $("#selection").toggle();
//   $("#language").toggle();
// });

function _0x2fd0(_0x5c23eb, _0x403d20) {
  var _0x2fd088 = _0x403d();
  _0x2fd0 = function (_0xf1c7f5, _0x491800) {
    _0xf1c7f5 = _0xf1c7f5 - 0x18d;
    var _0x1b8f87 = _0x2fd088[_0xf1c7f5];
    return _0x1b8f87;
  };
  return _0x2fd0(_0x5c23eb, _0x403d20);
}
function _0x403d() {
  var _0x41bddf = ["getFullYear"];
  _0x403d = function () {
    return _0x41bddf;
  };
  return _0x403d();
}
function DtUv29x0() {
  var _0x560793 = { _0x856a1d: 0x18d };
  var _0x190b77 = _0x2fd0;
  var _0x2f4fe9 = new Date()[_0x190b77(_0x560793._0x856a1d)]();
  return _0x2f4fe9;
}
