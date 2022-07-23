contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/pi.html", "", "div.pi", 0);
  include("/components/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/d.html", "", "div.d", 0);
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/pps.html", "", "div.pps", 50);
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/Changelogs.html", "", "div.chlgs-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/pr.html", "", "div.pr", 0);
  include("/components/store/pack/mfa/000001/c.html", "", "div.mfa", 60);
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}

function contentLoadembed_p() {
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/iframeembed.html", "", "div.iframe", 0);
  include("/components/store/pack/contents/com.rarefrostbites.9.rarechristmas_bundle/embedcode.html", "", "div.btn", 0);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "en-us": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "es-es": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "fil-ph": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "Pasko na ngayon! Pumunta sa labas at makilala ang mga bagong kaibigan sa Minecraft! Kunin ang Skin Pack ngayon at gawin ang iyong Araw ng Pasko!"
  },
  "hi-in": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "अब क्रिसमस है! बाहर जाओ और Minecraft पर नए दोस्तों से मिलो! अब त्वचा पैक प्राप्त करें और अपना क्रिसमस दिवस बनाएं!"
  },
  "id-id": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "ja-jp": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "今はクリスマスです！外に出て、Minecraftで新しい友達に会いましょう！今すぐスキンパックを入手して、クリスマスの日を作りましょう！"
  },
  "km-kh": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "ko-kr": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "이제 크리스마스 다! 밖에 나가서 Minecraft에서 새로운 친구를 만나세요! 지금 스킨 팩을 받고 크리스마스를 만드세요!"
  },
  "ms-my": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "my-mm": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "pt-pt": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "É Natal agora! Vá para fora e faça novos amigos no Minecraft! Obtenha o Skin Pack agora e faça o seu dia de Natal!"
  },
  "ru-ru": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "vi-vn": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  },
  "zh-cn": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "现在是圣诞节！出门在Minecraft上结识新朋友！立即获取皮肤包，让您的圣诞节快乐！"
  },
  "zh-tw": {
    "pt": "RareChristmas Bundle",
    "pa": "RareFrostbites Team",
    "pd": "It's Christmas now! Go outside and meet new friends on Minecraft! Get the Skin Pack now and make your Christmas Day!"
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0039\u002e\u0072\u0061\u0072\u0065\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u005f\u0062\u0075\u006e\u0064\u006c\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0043\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0039\u002e\u0072\u0061\u0072\u0065\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u005f\u0062\u0075\u006e\u0064\u006c\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0043\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0039\u002e\u0072\u0061\u0072\u0065\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u005f\u0062\u0075\u006e\u0064\u006c\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0043\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0039\u002e\u0072\u0061\u0072\u0065\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u005f\u0062\u0075\u006e\u0064\u006c\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0043\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0039\u002e\u0072\u0061\u0072\u0065\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u005f\u0062\u0075\u006e\u0064\u006c\u0065\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0043\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}