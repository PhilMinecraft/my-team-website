function HomepageLanguage() {
  // Homepage
  var initLang = RFBStore_filters[LanguageChecker()];
  for (var lang of Object.keys(initLang)) {
    if ($("[data-" + lang + "]")) {
      $("[data-" + lang + "]").html(initLang[lang]);
    }
  }
}

const RFBStore_filters = {
    "en-gb": {
        "rfbstore-filter-maps": "Maps",
        "rfbstore-filter-texture_packs": "Texture Packs",
        "rfbstore-filter-skin_packs": "Skin Packs",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "en-us": {
        "rfbstore-filter-maps": "Maps",
        "rfbstore-filter-texture_packs": "Texture Packs",
        "rfbstore-filter-skin_packs": "Skin Packs",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "es-es": {
        "rfbstore-filter-maps": "Mapas",
        "rfbstore-filter-texture_packs": "Paquetes de Texturas",
        "rfbstore-filter-skin_packs": "Packs de Skins",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "fil-ph": {
        "rfbstore-filter-maps": "Mga Map",
        "rfbstore-filter-texture_packs": "Mga Texture Pack",
        "rfbstore-filter-skin_packs": "Mga Skin Pack",
        "rfbstore-filter-mash-up_packs": "Mga Mash-up Pack"
      },
      "hi-in": {
        "rfbstore-filter-maps": "नक्शे",
        "rfbstore-filter-texture_packs": "बनावट पैक",
        "rfbstore-filter-skin_packs": "त्वचा पैक",
        "rfbstore-filter-mash-up_packs": "मैश-अप पैक"
      },
      "id-id": {
        "rfbstore-filter-maps": "Peta",
        "rfbstore-filter-texture_packs": "Paket Tekstur",
        "rfbstore-filter-skin_packs": "Paket Kulit",
        "rfbstore-filter-mash-up_packs": "Paket Mash-up"
      },
      "ja-jp": {
        "rfbstore-filter-maps": "マップ",
        "rfbstore-filter-texture_packs": "テクスチャパック",
        "rfbstore-filter-skin_packs": "スキンパック",
        "rfbstore-filter-mash-up_packs": "マッシュアップパック"
      },
      "km-kh": {
        "rfbstore-filter-maps": "ផែនទី",
        "rfbstore-filter-texture_packs": "កញ្ចប់ វាយនភាព",
        "rfbstore-filter-skin_packs": "១. ខ្ចប់ស្បែក",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "ko-kr": {
        "rfbstore-filter-maps": "지도",
        "rfbstore-filter-texture_packs": "텍스처 팩",
        "rfbstore-filter-skin_packs": "스킨 팩",
        "rfbstore-filter-mash-up_packs": "매시업 팩"
      },
      "ms-my": {
        "rfbstore-filter-maps": "Peta",
        "rfbstore-filter-texture_packs": "Pek Tekstur",
        "rfbstore-filter-skin_packs": "Pek Kulit",
        "rfbstore-filter-mash-up_packs": "Pek Mash-up"
      },
      "my-mm": {
        "rfbstore-filter-maps": "မြေပုံများ",
        "rfbstore-filter-texture_packs": "Texture Packs",
        "rfbstore-filter-skin_packs": "အရေပြားပက်ခ်",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "pt-pt": {
        "rfbstore-filter-maps": "Mapas",
        "rfbstore-filter-texture_packs": "Pacotes de Textura",
        "rfbstore-filter-skin_packs": "Pacotes de Pele",
        "rfbstore-filter-mash-up_packs": "Mash-up Packs"
      },
      "ru-ru": {
        "rfbstore-filter-maps": "Карты",
        "rfbstore-filter-texture_packs": "Текстурные Пакеты",
        "rfbstore-filter-skin_packs": "Скин-паки",
        "rfbstore-filter-mash-up_packs": "Гибридные Упаковки"
      },
      "vi-vn": {
        "rfbstore-filter-maps": "Bản đồ",
        "rfbstore-filter-texture_packs": "Gói Kết cấu",
        "rfbstore-filter-skin_packs": "Gói Da",
        "rfbstore-filter-mash-up_packs": "Gói Mash-up"
      },
      "zh-cn": {
        "rfbstore-filter-maps": "地图",
        "rfbstore-filter-texture_packs": "纹理包",
        "rfbstore-filter-skin_packs": "皮肤包",
        "rfbstore-filter-mash-up_packs": "混搭包"
      },
      "zh-tw": {
        "rfbstore-filter-maps": "地图",
        "rfbstore-filter-texture_packs": "纹理包",
        "rfbstore-filter-skin_packs": "皮肤包",
        "rfbstore-filter-mash-up_packs": "混搭包"
      }
}