contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.14.horse_race/pi.html", "", "div.pi", 0);
  include("/embeds/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/embeds/store/pack/contents/com.rarefrostbites.14.horse_race/d.html", "", "div.d", 0);
  include("/embeds/store/pack/contents/com.rarefrostbites.14.horse_race/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.14.horse_race/pps.html", "", "div.pps", 0);
  include("/components/store/pack/contents/com.rarefrostbites.14.horse_race/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.14.horse_race/Changelogs.html", "", "div.chlgs-b1", 0);
  setTimeout(contentLoadlanguage, 200);
}

function contentLoadlanguage() {
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "en-us": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "es-es": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "fil-ph": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Iparanas ang isang matinding isport kasama ang iyong mga kaibigan, karera sa isang nagyeyelo at mapanganib na track ng lahi na may mga hadlang. Ipakita ang iyong pagiging sportsmanship!"
  },
  "hi-in": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "???????????? ????????????????????? ?????? ????????? ?????? ????????? ????????? ?????? ??????????????? ????????????, ?????????????????? ?????? ????????? ????????????????????? ?????? ?????????????????? ????????? ??????????????? ????????? ????????????????????? ???????????? ????????? ??????????????? ???????????????!"
  },
  "id-id": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "ja-jp": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
  },
  "km-kh": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "ko-kr": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "????????? ?????? ???????????? ???????????? ???????????? ???????????? ?????? ???????????? ????????? ??????????????? ??????????????????. ????????? ?????????????????? ???????????????!"
  },
  "ms-my": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "my-mm": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "pt-pt": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experimente um esporte radical com seus amigos, corra em uma pista de corrida gelada e perigosa com obst??culos. Mostre seu esp??rito esportivo!"
  },
  "ru-ru": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "vi-vn": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "zh-cn": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
  },
  "zh-tw": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0034\u002e\u0068\u006f\u0072\u0073\u0065\u005f\u0072\u0061\u0063\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0048\u006f\u0072\u0073\u0065\u0020\u0052\u0061\u0063\u0065\u003a\u0020\u0049\u0063\u0065\u0020\u0045\u0064\u0069\u0074\u0069\u006f\u006e\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0034\u002e\u0068\u006f\u0072\u0073\u0065\u005f\u0072\u0061\u0063\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0048\u006f\u0072\u0073\u0065\u0020\u0052\u0061\u0063\u0065\u003a\u0020\u0049\u0063\u0065\u0020\u0045\u0064\u0069\u0074\u0069\u006f\u006e\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0034\u002e\u0068\u006f\u0072\u0073\u0065\u005f\u0072\u0061\u0063\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0048\u006f\u0072\u0073\u0065\u0020\u0052\u0061\u0063\u0065\u003a\u0020\u0049\u0063\u0065\u0020\u0045\u0064\u0069\u0074\u0069\u006f\u006e\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0034\u002e\u0068\u006f\u0072\u0073\u0065\u005f\u0072\u0061\u0063\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0048\u006f\u0072\u0073\u0065\u0020\u0052\u0061\u0063\u0065\u003a\u0020\u0049\u0063\u0065\u0020\u0045\u0064\u0069\u0074\u0069\u006f\u006e\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0034\u002e\u0068\u006f\u0072\u0073\u0065\u005f\u0072\u0061\u0063\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0048\u006f\u0072\u0073\u0065\u0020\u0052\u0061\u0063\u0065\u003a\u0020\u0049\u0063\u0065\u0020\u0045\u0064\u0069\u0074\u0069\u006f\u006e\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}