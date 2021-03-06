// <!-- -*- coding: utf-8 -*- -->
// Copyright (C) 2014-2015 by Henry Kroll, thenerdshow

/* Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

var isSet = function (e) {
  return typeof e !== "undefined";
};
var forAll = function (obj, cb) {
  return typeof cb === "function"
    ? obj.forAll(cb)
    : typeof obj === "object"
    ? function (e) {
        obj.forAll(e);
      }
    : undefined;
};
Object.prototype.forAll = function (cb) {
  var self = this,
    key,
    keys = Object.keys(self),
    len = keys.length;
  if (keys.forEach)
    keys.forEach(function (key) {
      cb(self[key], key);
    });
  else for (var i = len; i--; ) cb(self[keys[i]], keys[i]);
};
Array.prototype.uniq = function () {
  obj = {};
  out = [];
  this.forAll(function (e) {
    obj[e] = 0;
  });
  return Object.keys(obj);
};
if (!isSet(Object.jq)) {
  Object.prototype.jq = function (query) {
    return typeof query == "string" ? this.querySelector(query) : undefined;
  };
  var jq = function (obj, query) {
    var res;
    return isSet(query) && (res = obj.jq(query))
      ? res
      : typeof obj == "string"
      ? document.querySelector(obj)
      : undefined;
  };
}
if (!isSet(Object.jqa)) {
  Object.prototype.jqa = function (query) {
    return typeof query == "string" ? this.querySelectorAll(query) : undefined;
  };
  var jqa = function (obj, query) {
    var res;
    return isSet(query) && (res = obj.jqa(query))
      ? res
      : typeof obj == "string"
      ? document.querySelectorAll(obj)
      : undefined;
  };
}
var jEvent = function (ele, e, func, useCapture) {
  if (arguments.length == 4) {
    if (ele.removeEventListener) ele.removeEventListener(e, func, useCapture);
    else if (ele.detachEvent) ele.detachEvent("on" + e, func, useCapture);
    else ele["on" + e] = "";
  } else {
    if (ele.addEventListener) ele.addEventListener(e, func);
    else if (ele.attachEvent) ele.document.attachEvent("on" + e, func);
    else ele["on" + e] = ele["e" + e + func];
  }
};

var insertHTML = function (ele, html) {
  ele.insertAdjacentHTML("beforebegin", html);
};
var XHR = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = function () {
    return this.readyState == 4 &&
      (this.status == 0 ||
        (this.status >= 200 && this.status < 300) ||
        this.status == 304 ||
        this.status == 1223)
      ? callback(request)
      : null;
  };
  request.send(null);
};
var include = function (url, cssElements, cssDest, disableScripts) {
  var appendScripts = function (cssDest, source) {
    if (!isSet(disableScripts) || !disableScripts) {
      forAll(source)(function (tag) {
        var el = document.createElement("script");
        el.innerHTML = tag.innerHTML;
        forAll(tag.attributes)(function (att) {
          el.setAttribute(att.name, att.value);
        });
        cssDest.appendChild(el);
        tag.parentNode && tag.parentNode.removeChild(tag);
      });
    }
  };
  var doInclude = function (req) {
    var _doc = document.implementation.createHTMLDocument("_doc");
    _doc.documentElement.innerHTML = req.responseText;

    if (!isSet(cssElements) || cssElements == "")
      var content = _doc.jqa("body > *");
    else content = _doc.jqa(cssElements);

    var scripts = jqa("script");
    var myScript = scripts[scripts.length - 1];
    var headScripts = _doc.jqa("head > script");
    appendScripts(jq("head"), headScripts);
    var bodyScripts = _doc.jqa("body > script");

    if (isSet(cssDest)) {
      var destElements = jqa(cssDest);

      if (isSet(destElements)) {
        forAll(destElements)(function (destNode) {
          forAll(content)(function (node) {
            var clonedNode = node.cloneNode();
            clonedNode.innerHTML = node.innerHTML;
            if (clonedNode.tagName == "SCRIPT") {
              appendScripts(destNode, [clonedNode]);
            } else destNode.appendChild(clonedNode);
            clonedNode = null;
          });
        });
      } else
        console.error(
          "include(url,cssElements,cssDest): dest " + dest + " not found!"
        );
    } else {
      forAll(content)(function (node) {
        myScript.parentNode.insertBefore(node, myScript);
      });
      appendScripts(myScript.parentNode, bodyScripts);
    }
    ret = null;
    _doc = null;
  };
  XHR(url, doInclude);
};
