"use strict";
//  Qky was here 20/02/22
// License DEEZ

function gq(n, u = window.location.href) {
  n = n.replace(/[\[\]]/g, "\\$&");
  var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
    res = r.exec(u);
  if (!res) return "";
  if (!res[2]) return "";
  return decodeURIComponent(res[2].replace(/\+/g, " "));
}

function LanguageChecker() {
  if (
    !Object.keys(languageContent)
      .map(x => x.toLowerCase())
      .includes(gq("lang").toLowerCase() || localStorage["getItem"]("language"))
  ) {
    console.warn("We can't find your language.");
    return "en-us";
  }
  if (gq("lang") || localStorage["getItem"]("language")) {
    if (gq("lang")) localStorage["setItem"]("language", gq("lang"));
    return localStorage["getItem"]("language");
  }
  if (!navigator.language) {
    console.log(
      "This browser doesn't support Language system. Using default en-us"
    );
    return "en-us";
  }
  return navigator.language.toLowerCase();
}

function initializeLanguage() {
  var initLang = languageContent[LanguageChecker()];
  for (var lang of Object.keys(initLang)) {
    if ($("[data-" + lang + "]")) {
      $("[data-" + lang + "]").html(initLang[lang]);
    }
  }
  
  var initLang = languagePack[LanguageChecker()];
  for (var lang of Object.keys(initLang)) {
    if ($("[data-" + lang + "]")) {
      $("[data-" + lang + "]").html(initLang[lang]);
    }
  }
}