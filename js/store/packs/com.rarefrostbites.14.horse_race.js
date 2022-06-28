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
    "pd": "अपने दोस्तों के साथ एक चरम खेल का अनुभव करें, बाधाओं के साथ बर्फीले और खतरनाक रेस ट्रैक में दौड़ें। अपनी खेल भावना दिखाओ!"
  },
  "id-id": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "ja-jp": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "友達とエクストリームスポーツを体験し、ハードルのある氷で危険なレーストラックでレースをしましょう。あなたのスポーツマンシップを見せてください！"
  },
  "km-kh": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
  },
  "ko-kr": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "친구와 함께 익스트림 스포츠를 경험하고 장애물이 있는 빙판길과 위험한 경마장에서 경주하십시오. 당신의 스포츠맨십을 보여주세요!"
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
    "pd": "Experimente um esporte radical com seus amigos, corra em uma pista de corrida gelada e perigosa com obstáculos. Mostre seu espírito esportivo!"
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
    "pd": "与您的朋友一起体验极限运动，在冰冷而危险的障碍赛道上比赛。展现你的体育精神！"
  },
  "zh-tw": {
    "pt": "Horse Race: Ice Edition",
    "pa": "RareFrostbites Team",
    "pd": "Experience an extreme sport with your friends, race in an icy and dangerous race track with hurdles. Show your sportsmanship!"
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