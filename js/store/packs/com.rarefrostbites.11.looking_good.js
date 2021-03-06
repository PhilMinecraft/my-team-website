contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/pi.html", "", "div.pi", 0);
  include("/components/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/d.html", "", "div.d", 0);
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/pps.html", "", "div.pps", 50);
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/Changelogs.html", "", "div.chlgs-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/pr.html", "", "div.pr", 0);
  include("/components/store/pack/mfa/000001/5.html", "", "div.mfa", 60);
  setTimeout(contentLoadlanguage, 200);
}

function contentLoadlanguage() {
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}

function contentLoadembed_p() {
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/iframeembed.html", "", "div.iframe", 0);
  include("/components/store/pack/contents/com.rarefrostbites.11.looking_good/embedcode.html", "", "div.btn", 0);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Want to be cool? A Skin Pack with copyright free! Be cool, don't hesitate!"
  },
  "en-us": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Want to be cool? A Skin Pack with copyright free! Be cool, don't hesitate!"
  },
  "es-es": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "¿Quieres ser genial? ¡Un Skin Pack sin derechos de autor! ¡Sé genial, no lo dudes!"
  },
  "fil-ph": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Gusto mo bang maging cool? Isang Skin Pack na walang copyright! Be cool, 'wag mag-hesitate!"
  },
  "hi-in": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "मस्त रहना चाहते हैं? कॉपीराइट के साथ एक स्किन पैक! मस्त रहो, संकोच मत करो!"
  },
  "id-id": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Ingin menjadi keren? Paket Kulit dengan bebas hak cipta! Tenang, jangan ragu!"
  },
  "ja-jp": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "かっこよくなりたいですか？ 著作権フリーのスキンパック！ かっこよく、躊躇しないでください！"
  },
  "km-kh": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "ចង់ត្រជាក់? កញ្ចប់ស្បែកដែលមានការរក្សាសិទ្ធិដោយឥតគិតថ្លៃ! ឡូយ កុំស្ទាក់ស្ទើរ!"
  },
  "ko-kr": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "멋지고 싶어? 저작권이 없는 스킨 팩! 침착해, 망설이지 마!"
  },
  "ms-my": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Nak jadi cool? Pek Kulit tanpa hak cipta! Jadilah keren, jangan teragak-agak!"
  },
  "my-mm": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "အေးအေးဆေးဆေး ဖြစ်ချင်သလား။ မူပိုင်ခွင့် အခမဲ့ပါရှိသော Skin Pack စိတ်အေးအေးထားပါ၊ တုံ့ဆိုင်းမနေပါနဲ့။"
  },
  "pt-pt": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Quer ser legal? Um Pacote de Skins sem direitos autorais! Seja legal, não hesite!"
  },
  "ru-ru": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Хотите быть крутым? Пакет Скинов без авторских прав! Будь крут, не стесняйся!"
  },
  "vi-vn": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "Muốn trở nên mát mẻ? Một Skin Pack miễn phí bản quyền! Hãy thật ngầu, đừng ngần ngại!"
  },
  "zh-cn": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "想要酷吗？ 一个无版权的皮肤包！ 冷静点，不要犹豫！"
  },
  "zh-tw": {
    "pt": "Looking Good",
    "pa": "RareFrostbites Team",
    "pd": "想要酷吗？ 一个无版权的皮肤包！ 冷静点，不要犹豫！"
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0031\u002e\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u005f\u0067\u006f\u006f\u0064\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u004c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0047\u006f\u006f\u0064\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0031\u002e\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u005f\u0067\u006f\u006f\u0064\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u004c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0047\u006f\u006f\u0064\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0031\u002e\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u005f\u0067\u006f\u006f\u0064\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u004c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0047\u006f\u006f\u0064\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0031\u002e\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u005f\u0067\u006f\u006f\u0064\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u004c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0047\u006f\u006f\u0064\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0031\u002e\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u005f\u0067\u006f\u006f\u0064\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u004c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0047\u006f\u006f\u0064\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}