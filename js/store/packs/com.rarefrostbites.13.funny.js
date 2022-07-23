contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/pi.html", "", "div.pi", 0);
  include("/components/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/d.html", "", "div.d", 0);
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/pps.html", "", "div.pps", 50);
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.13.funny/Changelogs.html", "", "div.chlgs-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/pr.html", "", "div.pr", 0);
  include("/components/store/pack/mfa/000001/3.html", "", "div.mfa", 60);
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}

function contentLoadembed_p() {
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/iframeembed.html", "", "div.iframe", 0);
  include("/components/store/pack/contents/com.rarefrostbites.13.funny/embedcode.html", "", "div.btn", 0);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "If you're looking for an outfit to prank someone, this skin pack could probably scare them. Prank your friends and others, make funny moments."
  },
  "en-us": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "If you're looking for an outfit to prank someone, this skin pack could probably scare them. Prank your friends and others, make funny moments."
  },
  "es-es": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Si estás buscando un atuendo para hacerle una broma a alguien, este paquete de aspectos probablemente podría asustarlo. Bromea con tus amigos y otros, crea momentos divertidos."
  },
  "fil-ph": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Kung naghahanap ka ng outfit para i-prank sa someone, itong skin pack na'to ay pwedeng pangtakot sa kanila. I-prank ang iyong mga friend at mga iba, gumawa ng mga funny moment."
  },
  "hi-in": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "अगर आप किसी को प्रैंक करने के लिए आउटफिट ढूंढ रहे हैं, तो यह स्किन पैक शायद उन्हें डरा सकता है। अपने दोस्तों और अन्य लोगों के साथ मज़ाक करें, मज़ेदार पल बनाएँ।"
  },
  "id-id": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Jika Anda mencari pakaian untuk mengerjai seseorang, paket kulit ini mungkin bisa menakuti mereka. Prank teman Anda dan orang lain, buat momen lucu."
  },
  "ja-jp": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "あなたが誰かをいたずらするための服を探しているなら、このスキンパックはおそらく彼らを怖がらせる可能性があります。 友達や他の人をいたずらして、面白い瞬間を作りましょう。"
  },
  "km-kh": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "ប្រសិនបើអ្នកកំពុងស្វែងរកសម្លៀកបំពាក់ដើម្បីលេងសើចនរណាម្នាក់ កញ្ចប់ស្បែកនេះប្រហែលជាធ្វើឱ្យពួកគេភ័យខ្លាច។ លេងសើចជាមួយមិត្តភ័ក្តិរបស់អ្នក និងអ្នកដទៃ បង្កើតពេលវេលាគួរឱ្យអស់សំណើច។"
  },
  "ko-kr": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "누군가에게 장난을 칠 의상을 찾고 있다면 이 스킨 팩이 그들을 놀라게 할 수 있습니다. 친구와 다른 사람들에게 장난을 치고 재미있는 순간을 만드십시오."
  },
  "ms-my": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Jika anda sedang mencari pakaian untuk mengejek seseorang, pek kulit ini mungkin menakutkan mereka. Prank rakan anda dan orang lain, buat detik lucu."
  },
  "my-mm": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "အကယ်၍ သင်သည် တစ်စုံတစ်ဦးအား နောက်ပြောင်ရန် ၀တ်စားဆင်ယင်ရန် ရှာဖွေနေပါက၊ ဤ skin pack သည် သူတို့ကို ကြောက်လန့်စေနိုင်သည်။ သင့်သူငယ်ချင်းများနှင့် အခြားသူများကို နောက်ပြောင်ခြင်း၊ ရယ်စရာအချိန်များကို ဖန်တီးပါ။"
  },
  "pt-pt": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Se você está procurando uma roupa para pregar peças em alguém, este pacote de skins provavelmente pode assustá-los. Prank seus amigos e outros, faça momentos engraçados."
  },
  "ru-ru": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Если вы ищете наряд, чтобы разыграть кого-то, этот набор скинов, вероятно, может их напугать. Разыгрывайте своих друзей и других, делайте забавные моменты."
  },
  "vi-vn": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "Nếu bạn đang tìm kiếm một bộ trang phục để chơi khăm ai đó, gói skin này có thể khiến họ sợ hãi. Chơi khăm bạn bè của bạn và những người khác, tạo ra những khoảnh khắc hài hước."
  },
  "zh-cn": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "如果您正在寻找一件恶作剧的服装，这个皮肤包可能会吓到他们。 恶作剧你的朋友和其他人，制造有趣的时刻。"
  },
  "zh-tw": {
    "pt": "Funny Bundles",
    "pa": "RareFrostbites Team",
    "pd": "如果您正在寻找一件恶作剧的服装，这个皮肤包可能会吓到他们。 恶作剧你的朋友和其他人，制造有趣的时刻。"
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0033\u002e\u0066\u0075\u006e\u006e\u0079\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0046\u0075\u006e\u006e\u0079\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0033\u002e\u0066\u0075\u006e\u006e\u0079\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0046\u0075\u006e\u006e\u0079\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0033\u002e\u0066\u0075\u006e\u006e\u0079\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0046\u0075\u006e\u006e\u0079\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0033\u002e\u0066\u0075\u006e\u006e\u0079\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0046\u0075\u006e\u006e\u0079\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0033\u002e\u0066\u0075\u006e\u006e\u0079\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0046\u0075\u006e\u006e\u0079\u0020\u0042\u0075\u006e\u0064\u006c\u0065\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}