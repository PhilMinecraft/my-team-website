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
    "pd": "शांति प्राप्त करें, मंदिर के नीचे चाय का कप पिएं, आसमान को देखें, सूरज आप पर बह रहा है। अपने आप को चीनी साहसिक में शामिल करें।"
  },
  "id-id": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "ja-jp": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "平和を手に入れ、寺院の下でお茶を飲み、空を見て、太陽があなたに流れています。中国の冒険に身を任せてください。"
  },
  "km-kh": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
  },
  "ko-kr": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "평화를 얻고, 성전 아래에서 차를 마시고, 하늘을보고, 태양이 당신 위에 흐르고 있습니다. 중국 모험에 몸을 맡기십시오."
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
    "pd": "Fique em paz, beba uma xícara de chá sob o Templo, veja os céus, o sol está fluindo sobre você. Vista-se para uma aventura chinesa."
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
    "pd": "安静下来，在圣殿下喝杯茶，看看天空，太阳照在你身上。让自己打扮成中国冒险。"
  },
  "zh-tw": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": "Get peace, drink cup of tea under the Temple, see the skies, the sun is flowing on you. Costumize yourself into Chinese adventure."
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