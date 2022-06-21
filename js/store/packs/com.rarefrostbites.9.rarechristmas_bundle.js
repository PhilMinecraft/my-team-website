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

let timeout;
let copy = (copy) => {
  clearTimeout(timeout);
  document.getElementById(copy).select();
  document.execCommand("copy");
  document.getElementById("alert-cl").style.display = "flex";
  timeout = setTimeout(hideAlert, 1500);
};
function hideAlert() {
  $("#alert-cl").hide()
}


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