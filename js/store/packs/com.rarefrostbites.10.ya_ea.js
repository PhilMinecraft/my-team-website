contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/pi.html", "", "div.pi", 0);
  include("/components/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/d.html", "", "div.d", 0);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/pps.html", "", "div.pps", 50);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/Changelogs.html", "", "div.chlgs-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/About Pack.html", "", "div.ab-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/pr.html", "", "div.pr", 0);
  include("/components/store/pack/mfa/000001/c.html", "", "div.mfa", 60);
  setTimeout(contentLoadlanguage, 200);
}

function contentLoadlanguage() {
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}

function contentLoadembed_p() {
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/iframeembed.html", "", "div.iframe", 0);
  include("/components/store/pack/contents/com.rarefrostbites.10.ya_ea/embedcode.html", "", "div.btn", 0);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "en-us": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "es-es": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "fil-ph": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Kumuha ng kapayapaan, uminom ng tasa ng tsaa sa ilalim ng Templo, tingnan ang kalangitan, ang araw ay dumadaloy sa iyo. I-costumize ang iyong sarili sa pakikipagsapalaran ng Tsino."
  },
  "hi-in": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "??????????????? ????????????????????? ????????????, ??????????????? ?????? ???????????? ????????? ?????? ?????? ????????????, ??????????????? ?????? ???????????????, ???????????? ?????? ?????? ?????? ????????? ????????? ???????????? ?????? ?????? ???????????? ?????????????????? ????????? ??????????????? ???????????????"
  },
  "id-id": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "ja-jp": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
  },
  "km-kh": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "ko-kr": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "????????? ??????, ?????? ???????????? ?????? ?????????, ???????????????, ????????? ?????? ?????? ????????? ????????????. ?????? ????????? ?????? ???????????????."
  },
  "ms-my": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "my-mm": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "pt-pt": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Fique em paz, beba uma x??cara de ch?? sob o Templo, veja os c??us, o sol est?? fluindo sobre voc??. Vista-se para uma aventura chinesa."
  },
  "ru-ru": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "vi-vn": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "zh-cn": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????"
  },
  "zh-tw": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0030\u002e\u0079\u0061\u005f\u0065\u0061\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0059\u0061\u0020\u0045\u0061\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0030\u002e\u0079\u0061\u005f\u0065\u0061\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0059\u0061\u0020\u0045\u0061\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0030\u002e\u0079\u0061\u005f\u0065\u0061\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0059\u0061\u0020\u0045\u0061\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0030\u002e\u0079\u0061\u005f\u0065\u0061\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0059\u0061\u0020\u0045\u0061\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0030\u002e\u0079\u0061\u005f\u0065\u0061\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0059\u0061\u0020\u0045\u0061\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}