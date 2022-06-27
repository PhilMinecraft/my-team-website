function PackLanguage() {
  // Packs
  var initLang = languagePack[LanguageChecker()];
  for (var lang of Object.keys(initLang)) {
    if ($("[data-" + lang + "]")) {
      $("[data-" + lang + "]").html(initLang[lang]);
    }
  }
  
  // Pack info assets
  var initLang = packinfo[LanguageChecker()];
  for (var lang of Object.keys(initLang)) {
    if ($("[data-" + lang + "]")) {
      $("[data-" + lang + "]").html(initLang[lang]);
    }
  }
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

let timeoutcopylink;
let copylink = (copy) => {
  $("#alert-dl").hide();
  clearTimeout(timeoutcopylink);
  document.getElementById(copy).select();
  document.execCommand("copy");
  document.getElementById("alert-cl").style.display = "flex";
  timeoutcopylink = setTimeout(hidecopylink, 3000);
};
function hidecopylink() {
  $("#alert-cl").hide();
};

let timeoutdownloadpack;
let downloadpack = () => {
  $("#b").hide();
  document.getElementById("b-blocked").style.display = "flex";
  $("#alert-cl").hide();
  clearTimeout(timeoutdownloadpack);
  document.getElementById("alert-dl").style.display = "flex";
  timeoutdownloadpack = setTimeout(hidedownloadpack, 3000);
};
function hidedownloadpack() {
  $("#alert-dl").hide();
};


function readMorePD() {
  document.getElementById("button-d").onclick = readLessPD;
  document.getElementById("pi-d").style.whiteSpace = "normal";
  document.getElementById("show-d").innerHTML = '-';
}
function readLessPD() {
  document.getElementById("button-d").onclick = readMorePD;
  document.getElementById("pi-d").style.whiteSpace = "nowrap";
  document.getElementById("show-d").innerHTML = '+';
}


function readMoreCHLGS() {
  document.getElementById("button-chlgs").onclick = readLessCHLGS;
  document.getElementById("pi-chlgs-unread").style.whiteSpace = "normal";
  document.getElementById("pi-chlgs-unread").id = "pi-chlgs-read";
  $("#pi-cr").hide()
  document.getElementById("show-chlgs").innerHTML = '-';
}
function readLessCHLGS() {
  document.getElementById("button-chlgs").onclick = readMoreCHLGS;
  document.getElementById("pi-chlgs-read").style.whiteSpace = "nowrap";
  document.getElementById("pi-chlgs-read").id = "pi-chlgs-unread";
  document.getElementById("pi-cr").style.display = "flex";
  document.getElementById("show-chlgs").innerHTML = '+';
}