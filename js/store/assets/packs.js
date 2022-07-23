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



let timeoutcopylink;
let copylink = (copy) => {
  $("#alert-dl").hide();
  $("#alert-cec").hide();
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
  $("#alert-cec").hide();
  clearTimeout(timeoutdownloadpack);
  document.getElementById("alert-dl").style.display = "flex";
  timeoutdownloadpack = setTimeout(hidedownloadpack, 3000);
};
function hidedownloadpack() {
  $("#alert-dl").hide();
};

let timeoutcopyembedcode;
let copyembedcode = (copy) => {
  $("#alert-cl").hide();
  $("#alert-dl").hide();
  clearTimeout(timeoutcopyembedcode);
  document.getElementById(copy).select();
  document.execCommand("copy");
  document.getElementById("alert-cec").style.display = "flex";
  timeoutcopyembedcode = setTimeout(hidecopyembedcode, 3000);
};
function hidecopyembedcode() {
  $("#alert-cec").hide();
};



function openECPload() {
  setTimeout(contentLoadembed_p, 100);
  document.getElementById("openECP").onclick = openECP;
  openECP();
}

function openECP() {
  document.getElementById("ecp").style.display = "flex";
}

function closeECP() {
  document.getElementById("ecp").style.display = "none";
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
  document.getElementById("chlgs-chlgs-unread").style.whiteSpace = "normal";
  document.getElementById("chlgs-chlgs-unread").id = "chlgs-chlgs-read";
  $("#chlgs-cr").hide()
  document.getElementById("show-chlgs").innerHTML = '-';
}
function readLessCHLGS() {
  document.getElementById("button-chlgs").onclick = readMoreCHLGS;
  document.getElementById("chlgs-chlgs-read").style.whiteSpace = "nowrap";
  document.getElementById("chlgs-chlgs-read").id = "chlgs-chlgs-unread";
  document.getElementById("chlgs-cr").style.display = "flex";
  document.getElementById("show-chlgs").innerHTML = '+';
}