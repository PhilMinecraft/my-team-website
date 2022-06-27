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
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Are you tired finding a good dress for your style? Are you spending time and money but it's still not worth. Don't make an effort now just to dress an unperfect look, here's what you need!"
  },
  "en-us": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Are you tired finding a good dress for your style? Are you spending time and money but it's still not worth. Don't make an effort now just to dress an unperfect look, here's what you need!"
  },
  "es-es": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "¿Estás cansada de encontrar un buen vestido para tu estilo? ¿Está gastando tiempo y dinero, pero todavía no vale la pena. No te esfuerces ahora solo por vestir un look imperfecto, ¡esto es lo que necesitas!"
  },
  "fil-ph": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Pagod ka na sa kakahanap ng magandang dress para sa style mo? Nagse-spend ka ba ng oras at pera pero hindi padin worth it? 'Wag ka na gumawa ng effort para lang makapag-dress ng pangit na look, ito ang need mo!"
  },
  "hi-in": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "क्या आप अपनी शैली के लिए एक अच्छी पोशाक पाकर थक गए हैं? क्या आप समय और पैसा खर्च कर रहे हैं लेकिन यह अभी भी इसके लायक नहीं है। केवल एक अपूर्ण रूप को तैयार करने के लिए प्रयास न करें, यहां आपको क्या चाहिए!"
  },
  "id-id": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Apakah Anda lelah mencari gaun yang bagus untuk gaya Anda? Apakah Anda menghabiskan waktu dan uang tetapi masih tidak layak. Jangan berusaha sekarang hanya untuk mendandani tampilan yang tidak sempurna, inilah yang Anda butuhkan!"
  },
  "ja-jp": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "あなたはあなたのスタイルに合ったドレスを見つけるのに疲れていますか？ あなたは時間とお金を費やしていますが、それでも価値はありません。 不完全な外観を整えるためだけに今は努力しないでください。必要なものは次のとおりです。"
  },
  "km-kh": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "តើ​អ្នក​ធុញ​ទ្រាន់​ក្នុង​ការ​ស្វែង​រក​ម៉ូដ​សម្លៀក​បំពាក់​ល្អ​សម្រាប់​ស្ទីល​របស់​អ្នក​មែនទេ? តើ​អ្នក​ចំណាយ​ពេល​វេលា​និង​លុយ​កាក់ ប៉ុន្តែ​វា​នៅ​តែ​មិន​មាន​តម្លៃ។ កុំ​ខំ​ប្រឹង​ឥឡូវ​នេះ គ្រាន់​តែ​ស្លៀកពាក់​ឱ្យ​មើល​ទៅ​មិន​ល្អ​នោះ នេះ​ជា​អ្វី​ដែល​អ្នក​ត្រូវ​ការ!"
  },
  "ko-kr": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "내 스타일에 맞는 드레스를 찾는 데 지치셨나요? 시간과 돈을 쓰고 있지만 여전히 가치가 없습니다. 지금 당장은 완벽하지 않은 룩을 연출하려고 애쓰지 마세요. 여기 당신에게 필요한 것이 있습니다!"
  },
  "ms-my": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Adakah anda penat mencari pakaian yang sesuai untuk gaya anda? Adakah anda menghabiskan masa dan wang tetapi masih tidak berbaloi. Jangan berusaha sekarang hanya untuk berpakaian rupa yang tidak sempurna, inilah yang anda perlukan!"
  },
  "my-mm": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "မင်းရဲ့စတိုင်နဲ့လိုက်ဖက်တဲ့ ၀တ်စုံကောင်းကောင်းရှာရတာ ပင်ပန်းနေပြီလား? သင်အချိန်နှင့်ငွေကိုဖြုန်းသော်လည်းမတန်သေးပါ။ မပြည့်စုံတဲ့အသွင်အပြင်ကို ၀တ်ဆင်ဖို့ အခုပဲ အားစိုက်မနေပါနဲ့၊ ဒါက မင်းလိုအပ်တဲ့အရာပါ။"
  },
  "pt-pt": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Está cansada de encontrar um bom vestido para o seu estilo? Você está gastando tempo e dinheiro, mas ainda não vale a pena. Não faça um esforço agora apenas para vestir um look imperfeito, aqui está o que você precisa!"
  },
  "ru-ru": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Вы устали искать хорошее платье для вашего стиля? Вы тратите время и деньги, но это все еще не стоит. Не пытайтесь сейчас просто одеться неидеально, вот то, что вам нужно!"
  },
  "vi-vn": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "Bạn có mệt mỏi khi tìm một chiếc váy đẹp cho phong cách của mình? Bạn có đang tiêu tốn thời gian và tiền bạc nhưng vẫn không đáng là bao. Đừng nỗ lực bây giờ chỉ để ăn mặc một vẻ ngoài không hoàn hảo, đây là những gì bạn cần!"
  },
  "zh-cn": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "您是否厌倦了为自己的风格寻找一件好衣服？ 您是否花费时间和金钱，但仍然不值得。 现在不要为了打扮不完美而努力，这就是你需要的！"
  },
  "zh-tw": {
    "pt": "Instagram-a World",
    "pa": "RareFrostbites Team",
    "pd": "您是否厌倦了为自己的风格寻找一件好衣服？ 您是否花费时间和金钱，但仍然不值得。 现在不要为了打扮不完美而努力，这就是你需要的！"
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