parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"],"./../images/mobi/Rectangle_mobi.jpg":[["Rectangle_mobi.fecb40eb.jpg","c65L"],"c65L"],"./../images/tab/Rectangle_tab.jpg":[["Rectangle_tab.9d0f39f3.jpg","MNXf"],"MNXf"],"./../images/Rectangle.jpg":[["Rectangle.91231833.jpg","f6hD"],"f6hD"],"./../images/mobi/Rectangle_watched_mobi.jpg":[["Rectangle_watched_mobi.8560a2b2.jpg","dcYM"],"dcYM"],"./../images/tab/Rectangle_watched_tab.jpg":[["Rectangle_watched_tab.5fb91397.jpg","Larm"],"Larm"],"./../images/Rectangle_watched.jpg":[["Rectangle_watched.13ca91fd.jpg","DRYM"],"DRYM"]}],"TOx8":[function(require,module,exports) {

},{}],"DrXm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;const e=document.querySelector("#header-myLibrary"),r=document.querySelector("#header-home"),t=document.querySelector(".header-container"),o=document.querySelector(".header");function c(){o.classList.toggle("header--bg-color"),r.classList.toggle("current-link"),e.classList.toggle("current-link"),t.classList.toggle("header-container--library")}
},{}],"jDTP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=t(require("./changeHeaderStyles"));function t(e){return e&&e.__esModule?e:{default:e}}async function a(t){if(t.preventDefault(),t.currentTarget.className.includes("current-link"))return;const a=document.querySelector(".btn-wrapper"),r=document.querySelector("#search-form");a.classList.add("animate__animated","animate__slideOutDown"),setTimeout(()=>{a.remove(),r.style.display="block",(0,e.default)(),r.classList.add("animate__animated","animate__slideInDown")},300)}
},{"./changeHeaderStyles":"DrXm"}],"PXc6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=t(require("./onHomeClick"));function t(e){return e&&e.__esModule?e:{default:e}}const r=document.querySelector("#header-home");function u(t){t.preventDefault(),r.className.includes("current-link")||(0,e.default)(t)}
},{"./onHomeClick":"jDTP"}],"zOZx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;const t=document.querySelector(".header-container");function e(){t.insertAdjacentHTML("beforeend",'\n          <div class="btn-wrapper animate__animated animate__slideInDown">\n              <button type="button" class="header-btn btn btn--current">Watched</button>\n              <button type="button" class="btn">Watchlist</button>\n          </div>\n          ')}
},{}],"r4uv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=a(require("./addBtnMarkup")),t=a(require("./changeHeaderStyles"));function a(e){return e&&e.__esModule?e:{default:e}}function r(a){if(a.preventDefault(),a.currentTarget.className.includes("current-link"))return;const r=document.querySelector("#search-form");r.classList.add("animate__animated","animate__slideOutDown"),setTimeout(()=>{r.style.display="none",(0,t.default)(),(0,e.default)(),r.classList.remove("animate__animated","animate__slideOutDown")},300)}
},{"./addBtnMarkup":"zOZx","./changeHeaderStyles":"DrXm"}],"Dzan":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;let e="";function t(t){t.preventDefault(),e=t.target.elements.searchQuery.value.trim()}
},{}],"cGsR":[function(require,module,exports) {
"use strict";require("animate.css");var e=n(require("./header/onHomeClick")),r=n(require("./header/onLogoClick")),t=n(require("./header/onMyLibraryClick")),d=n(require("./header/onSearchFormSubmit"));function n(e){return e&&e.__esModule?e:{default:e}}const o=document.querySelector("#header-myLibrary"),u=document.querySelector("#header-home"),a=document.querySelector("#search-form"),c=document.querySelector(".header-container"),i=document.querySelector(".header-logo"),l=document.querySelector("#search-form");l.addEventListener("submit",d.default),o.addEventListener("click",t.default),u.addEventListener("click",e.default),i.addEventListener("click",r.default),o.addEventListener("mousedown",e=>e.preventDefault()),u.addEventListener("mousedown",e=>e.preventDefault()),i.addEventListener("mousedown",e=>e.preventDefault());
},{"animate.css":"TOx8","./header/onHomeClick":"jDTP","./header/onLogoClick":"PXc6","./header/onMyLibraryClick":"r4uv","./header/onSearchFormSubmit":"Dzan"}],"jPMh":[function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==typeof exports?exports.Pagination=n():(e.tui=e.tui||{},e.tui.Pagination=n())}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,r,o=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),r=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,s=n;n>=0&&s<r;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){"use strict";var i=n(29),s=n(30),r=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=r(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),r=n(0),o=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},p=s({init:function(t,e){this._options=r({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>s&&(e=Math.max(s-r+1,1),n=s)):(e=(o-1)*r+1,n=o*r,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(p),t.exports=p},function(t,e,n){"use strict";var i=n(0),s=n(14),r=n(4),o=n(16),a=n(2),u=n(5),c=n(3),p=/\s+/g;function l(){this.events=null,this.contexts=null}l.mixin=function(t){i(t.prototype,l.prototype)},l.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},l.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},l.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},l.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},l.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},l.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},l.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},l.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(p),c(t,function(t){i._bindEvent(t,e,n)})):o(t)&&(n=e,c(t,function(t,e){i.on(e,t,n)}))},l.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void c(t,function(t,e){i.once(e,t,n)});this.on(t,function s(){e.apply(n,arguments),i.off(t,s,n)},n)},l.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},l.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},l.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},l.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,r=e===i.context,o=s&&r;return o&&n._forgetContext(i.context),o}},l.prototype._offByEventName=function(t,e){var n=this,i=u(e),s=n._matchHandler(e);t=t.split(p),c(t,function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},l.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},l.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,function(t,e){i.off(e,t)}):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},l.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},l.prototype.fire=function(t){this.invoke.apply(this,arguments)},l.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},l.prototype.hasListener=function(t){return this.getListenerLength(t)>0},l.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=l},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),r=n(21),o=n(22),a=n(24),u=n(25),c=n(0),p=n(4),l=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],_=["prev","next"],d=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(p(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!l(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(g,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(_,function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==s||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",function(e){var n,i,s=r(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)},this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=d},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),r=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=r(t,e),a=!1;s(o,function(t){return t.handler!==n||(a=!0,!1)}),a||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,r){i(e)?s(e.split(/\s+/g),function(e){o(t,e,n,r)}):s(e,function(e,i){o(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),r=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];a?i(n,function(e){t.classList.add(e)}):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){s(t,u)<0&&u.push(t)}),o(t,u))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),r=n(2),o=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,p=/\[\s?|\s?\]/,l=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,_=/^-?\d+\.?\d*$/,d=2,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,o=0;return s(e,function(t,s){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,s)),o=s+1)}),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,o="";return s(i.exps,function(t,e){return(r=b(t,n))&&(o=P(i.sourcesInsideIf[e],n)),!r}),o},each:function(t,e,n){var i=b(t,n),o=r(i)?"@index":"@key",u={},c="";return s(i,function(t,i){u[o]=i,u["@this"]=t,a(n,u),c+=P(e.slice(),n)}),c},with:function(t,e,n){var s=i("as",t),r=t[s+1],o=b(t.slice(0,s),n),u={};return u[r]=o,P(e,a(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return s.push(t.slice(r)),s};function x(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):c.test(t)?i=x((n=t.split(p))[0],e)[x(n[1],e)]:l.test(t)?i=x((n=t.split(f))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,s,r,a,u=v[t],c=1,p=0+d,l=e[p];c&&o(l);)0===l.indexOf(t)?c+=1:0===l.indexOf("/"+t)&&(c-=1,i=p),l=e[p+=d];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(s=0,r=i,(a=e.splice(s+1,r-s)).pop(),a),n),e}function b(t,e){var n=x(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,function(t){i.push(x(t,n))}),t.apply(null,i)}(n,t.slice(1),e):n}function P(t,e){for(var n,i,s,r=1,a=t[r];o(a);)i=(n=a.split(" "))[0],v[i]?(s=y(i,t.splice(r,t.length-r),e),t=t.concat(s)):t[r]=b(n,e),a=t[r+=d];return t.join("")}t.exports=function(t,e){return P(m(t,u),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>r}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout(function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,function(t,e){s+="&"+e+"="+t}),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])});
},{}],"o8lo":[function(require,module,exports) {
"use strict";var t=e(require("tui-pagination"));function e(t){return t&&t.__esModule?t:{default:t}}require("tui-pagination/dist/tui-pagination.css");const a={totalItems:10,itemsPerPage:1,visiblePages:7,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}" ><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=new t.default("pagination",a);
},{"tui-pagination":"jPMh","tui-pagination/dist/tui-pagination.css":"TOx8"}],"zpwY":[function(require,module,exports) {
function e(e,n=700){const o=document.scrollingElement||document.documentElement,t=o.scrollTop,c=e-t,l=+new Date,s=function(){const r=+new Date-l;var d,i,a;o.scrollTop=parseInt((d=r,i=t,a=c,(d/=n/2)<1?a/2*d*d+i:-a/2*(--d*(d-2)-1)+i)),r<n?requestAnimationFrame(s):o.scrollTop=e};s()}document.addEventListener("DOMContentLoaded",function(){let n=document.querySelector("#toTop");window.addEventListener("scroll",function(){scrollY>100?n.classList.add("show"):n.classList.remove("show")}),n.onclick=function(n){n.preventDefault(),e(0,400)}});
},{}],"RSqK":[function(require,module,exports) {
const e=document.querySelector("[data-modal]"),d=document.querySelector(".modal__close-button"),n=document.querySelector(".card-set");function o(d){d.target.classList.contains("description_films")&&(document.body.style.overflow="hidden",e.classList.remove("modal-window--hidden"),window.addEventListener("keydown",c),e.addEventListener("click",i))}function t(){e.classList.add("modal-window--hidden"),s()}function i(d){d.target.classList.contains("backdrop")&&e.classList.add("modal-window--hidden"),s()}function c(d){"Escape"===d.code&&(e.classList.add("modal-window--hidden"),s(),window.removeEventListener("keydown",c))}function s(){document.body.style.overflow=""}d.addEventListener("click",t),n.addEventListener("click",o);
},{}],"SNkP":[function(require,module,exports) {
const e=document.querySelector('a[data-action="open-modal"]'),t=document.querySelector("[data-modal-backdrop]"),o=document.querySelector(".cross"),c=e.addEventListener("click",n),d=o.addEventListener("click",n);function n(e){e.preventDefault(),document.querySelector("#toTop").classList.toggle("show"),t.classList.toggle("is-hidden")}
},{}],"LS1I":[function(require,module,exports) {
const e={openModalBtn:document.querySelector("[modal-profile-open]"),closeModalBtn:document.querySelector("[modal-profile-close]"),modal:document.querySelector("[modal-profile-data]")};function o(o){o.preventDefault(),e.modal.classList.toggle("profile-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/header"),require("./js/pagination"),require("./js/to_top"),require("./js/modal"),require("./js/team-modal/team-modal"),require("./js/modal-profile");
},{"./sass/main.scss":"clu1","./js/header":"cGsR","./js/pagination":"o8lo","./js/to_top":"zpwY","./js/modal":"RSqK","./js/team-modal/team-modal":"SNkP","./js/modal-profile":"LS1I"}]},{},["Focm"], null)
//# sourceMappingURL=/projectJs/src.af89c2cf.js.map