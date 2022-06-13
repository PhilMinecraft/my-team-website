"use strict";

const languagePack = {
  "en-gb": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "en-us": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "es-es": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "fil-ph": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "hi-in": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "id-id": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "ja-jp": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "km-kh": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "ko-kr": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "ms-my": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "my-mm": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "pt-pt": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "ru-ru": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "vi-vn": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "zh-cn": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
  },
  "zh-tw": {
    "pt": "Ya Ea",
    "pa": "RareFrostbites Team",
    "pd": ""
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


function readMore() {
  document.getElementById("button").onclick = readLess;
  document.getElementById("pi-d").style.whiteSpace = "normal";
  document.getElementById("show").innerHTML = '-';
}
function readLess() {
  document.getElementById("button").onclick = readMore;
  document.getElementById("pi-d").style.whiteSpace = "nowrap";
  document.getElementById("show").innerHTML = '+';
}