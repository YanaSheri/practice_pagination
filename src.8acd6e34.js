parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e={menuList:document.querySelector(".menu__list"),markupMain:document.querySelector(".markup__main"),pagination:document.querySelector(".pagination")},t="https://rickandmortyapi.com/api";function n(n){let i="",a=1;null!==n.prev&&(i+=`<a href="${n.prev}">&lArr;</a>`,a=parseInt(n.prev.split("=")[1])+1),console.log(a);for(let e=1;e<=n.pages;e++)i+=`<a class="${a===e?"active":""}" href="${t}/character?page=${e}">${e}</a>`;null!==n.next&&(i+=`<a href="${n.next}">&rArr;</a>`),e.pagination.innerHTML=i}function i(e){return fetch(e).then(e=>e.json())}function a(t){"A"===t.target.nodeName&&(t.preventDefault(),i(t.target.href).then(t=>{n(t.info);const i=t.results.map(e=>`<li class="main-item"><img src="${e.image}">\n      <ul class="item-list">\n<li class="item-text">Name: ${e.name}</li>\n<li class="item-text">Gender: ${e.gender}</li>\n<li class="item-text">Adress: ${e.origin.name}</li>\n<li class="item-text">Species: ${e.species}</li>\n<li class="item-text">Status: ${e.status}</li>\n</ul>\n      </li>`).join("");e.markupMain.innerHTML=i}))}i(t).then(t=>{const n=Object.entries(t).map(([e,t])=>`<li><a href="${t}">${e}</a></li>`).join("");e.menuList.innerHTML=n}),document.addEventListener("click",a);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/practice_pagination/src.8acd6e34.js.map