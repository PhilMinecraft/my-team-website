contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.8.1st_century/pi.html", "", "div.pi", 0);
  include("/embeds/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/embeds/store/pack/contents/com.rarefrostbites.8.1st_century/d.html", "", "div.d", 0);
  include("/embeds/store/pack/contents/com.rarefrostbites.8.1st_century/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.8.1st_century/pps.html", "", "div.pps", 0);
  include("/components/store/pack/contents/com.rarefrostbites.8.1st_century/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.8.1st_century/Changelogs.html", "", "div.chlgs-b1", 0);
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "en-us": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "es-es": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "fil-ph": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "I-troll ang iyong mga kaibigan sa isang madilim at nakakatakot na lugar. Ihanda ang iyong ulo'y maputol, at sumigaw!"
  },
  "hi-in": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "अपने दोस्तों को एक अंधेरी और डरावनी जगह पर ट्रोल करें।  अपना सिर काटो, और चिल्लाओ!"
  },
  "id-id": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "ja-jp": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "暗くて怖い場所に友達を荒らします。 頭を切り落として叫びなさい！"
  },
  "km-kh": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "ko-kr": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "친구들을 어둡고 무서운 곳으로 트롤하십시오.  머리를 자르고 소리 치세요!"
  },
  "ms-my": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "my-mm": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "pt-pt": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll seus amigos em um lugar escuro e assustador.  Corte sua cabeça e grite!"
  },
  "ru-ru": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "vi-vn": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  },
  "zh-cn": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "将您的朋友拖到一个黑暗而恐怖的地方。 砍下头，大喊！"
  },
  "zh-tw": {
    "pt": "1st Century",
    "pa": "RareFrostbites Team",
    "pd": "Troll your friends into a dark and scary place.  Get your head cut off, and shout!"
  }
}