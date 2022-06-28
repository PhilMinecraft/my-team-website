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
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "en-us": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "es-es": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "fil-ph": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Masiyahan sa iyong pagsasanay, maraming mga hadlang ang naghihintay para sa iyo! Sumali sa aming kampanya nang sama-sama!"
  },
  "hi-in": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "अपने प्रशिक्षण का आनंद लें, कई बाधाएं आपकी प्रतीक्षा कर रही हैं! एक साथ हमारे अभियान में शामिल हों!"
  },
  "id-id": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "ja-jp": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "あなたのトレーニングを楽しんでください、多くの障害があなたを待っています！一緒にキャンペーンに参加しましょう！"
  },
  "km-kh": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "ko-kr": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "훈련을 즐기십시오. 많은 장애물이 당신을 기다리고 있습니다! 함께 캠페인에 참여하세요!"
  },
  "ms-my": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "my-mm": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "pt-pt": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Aproveite seu treinamento, muitos obstáculos estão esperando por você! Junte-se à nossa campanha!"
  },
  "ru-ru": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "vi-vn": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "zh-cn": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "享受你的训练，许多障碍等着你！一起加入我们的活动！"
  },
  "zh-tw": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
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