!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).littlefoot={})}(this,(function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)};function n(t,e){t.classList.add(e)}function r(t,e){t.classList.remove(e)}function i(t,e){return t.classList.contains(e)}"function"==typeof SuppressedError&&SuppressedError;var o,u={};function c(){if(o)return u;return o=1,Object.defineProperty(u,"__esModule",{value:!0}),u.getStyle=function(t,e){var n,r=((null===(n=t.ownerDocument)||void 0===n?void 0:n.defaultView)||window).getComputedStyle(t);return r.getPropertyValue(e)||r[e]},u}var a,l=c(),s={};function f(){if(a)return s;a=1,Object.defineProperty(s,"__esModule",{value:!0}),s.pixels=function t(u,c){var a,l,s=null!==(l=null===(a=null==c?void 0:c.ownerDocument)||void 0===a?void 0:a.defaultView)&&void 0!==l?l:window,f=s.document.documentElement||s.document.body,d=function(t){var e,n=t||"0",r=Number.parseFloat(n),i=n.match(/[\d-.]+(\w+)$/),o=null!==(e=null==i?void 0:i[1])&&void 0!==e?e:"";return[r,o.toLowerCase()]}(u),v=d[0];switch(d[1]){case"rem":return v*t(o(window.document.documentElement));case"em":return v*t(o(c),null==c?void 0:c.parentElement);case"in":return v*e;case"q":return v*e/n/4;case"mm":return v*e/n;case"cm":return v*e*10/n;case"pt":return v*e/r;case"pc":return v*e/i;case"vh":return(v*s.innerHeight||f.clientWidth)/100;case"vw":return(v*s.innerWidth||f.clientHeight)/100;case"vmin":return v*Math.min(s.innerWidth||f.clientWidth,s.innerHeight||f.clientHeight)/100;case"vmax":return v*Math.max(s.innerWidth||f.clientWidth,s.innerHeight||f.clientHeight)/100;default:return v}};var t=c(),e=96,n=25.4,r=72,i=6;function o(e){return e?(0,t.getStyle)(e,"fontSize")||o(e.parentElement):(0,t.getStyle)(window.document.documentElement,"fontSize")}return s}var d=f(),v="littlefoot__tooltip";function m(t){var e=Number.parseFloat(l.getStyle(t,"marginLeft")),n=t.offsetWidth-e;return(t.getBoundingClientRect().left+n/2)/window.innerWidth}function p(t,e,i){var o=function(t,e){var n=Number.parseInt(l.getStyle(e,"marginTop"),10),r=2*n+e.offsetHeight,i=t.getBoundingClientRect().top+t.offsetHeight/2,o=window.innerHeight-i;return o>=r||o>=i?["below",o-n-15]:["above",i-n-15]}(e,t),u=o[0],c=o[1];if(i!==u){r(t,"is-"+i),n(t,"is-"+u);var a=100*m(e)+"%",s="above"===u?"100%":"0";t.style.transformOrigin=a+" "+s}return[u,c]}var h="is-active",g="is-changing",y="is-scrollable";function b(t){var e=t.id,o=t.button,u=t.content,c=t.host,a=t.popover,s=t.wrapper,f=0,b="above",w=function(){return document.body.contains(a)};return{id:e,activate:function(t){var e;o.setAttribute("aria-expanded","true"),n(o,g),n(o,h),o.insertAdjacentElement("afterend",a),a.style.maxWidth=document.body.clientWidth+"px",e=u,f=Math.round(d.pixels(l.getStyle(e,"maxHeight"),e)),null==t||t(a,o)},dismiss:function(t){o.setAttribute("aria-expanded","false"),n(o,g),r(o,h),r(a,h),null==t||t(a,o)},isActive:function(){return i(o,h)},isReady:function(){return!i(o,g)},ready:function(){n(a,h),r(o,g)},remove:function(){a.remove(),r(o,g)},reposition:function(){if(w()){var t=p(a,o,b),e=t[0],i=t[1];b=e,u.style.maxHeight=Math.min(f,i)+"px",a.offsetHeight<u.scrollHeight?(n(a,y),u.setAttribute("tabindex","0")):(r(a,y),u.removeAttribute("tabindex"))}},resize:function(){w()&&(a.style.left=function(t,e){var n=t.offsetWidth;return-m(e)*n+Number.parseInt(l.getStyle(e,"marginLeft"),10)+e.offsetWidth/2}(u,o)+"px",s.style.maxWidth=u.offsetWidth+"px",function(t,e){var n=t.querySelector("."+v);n&&(n.style.left=100*m(e)+"%")}(a,o))},destroy:function(){return c.remove()}}}var w,E={};function S(){if(w)return E;return w=1,Object.defineProperty(E,"__esModule",{value:!0}),E.throttle=function(t,e){void 0===e&&(e=0);var n,r=0;return Object.assign((function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var u=Math.max(0,r+e-Date.now());u?(clearTimeout(n),n=setTimeout((function(){r=Date.now(),t.apply(void 0,i)}),u)):(r=Date.now(),t.apply(void 0,i))}),{cancel:function(){r=0,clearTimeout(n)}})},E}var x=S(),D="is-fully-scrolled",H=function(t){return function(e){var i=e.currentTarget,o=-e.deltaY;o>0&&r(t,D),i&&o<=0&&o<i.clientHeight+i.scrollTop-i.scrollHeight&&n(t,D)}};var A="littlefoot__content",T="littlefoot__wrapper",_="littlefoot--print",M=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.forEach((function(t){return n(t,_)}))};function O(t,e){return Array.from(t.querySelectorAll(e))}function W(t,e){return t.querySelector("."+e)||t.firstElementChild||t}function L(t){var e=document.createElement("div");e.innerHTML=t;var n=e.firstElementChild;return n.remove(),n}function C(t){return void 0!==t}function P(t){var e=t.parentElement,n=O(e,":scope > :not(."+_+")"),r=n.filter((function(t){return"HR"===t.tagName}));n.length===r.length&&(M.apply(void 0,r.concat(e)),P(e))}function j(t,e){var n=t.parentElement;t.remove(),n&&n!==e&&!n.innerHTML.replace(/(\[\]|&nbsp;|\s)/g,"")&&j(n,e)}function R(t,e){var n=t[0],r=t[1],i=t[2],o=L(i.outerHTML);O(o,'[href$="#'+n+'"]').forEach((function(t){return j(t,o)}));var u=o.innerHTML.trim();return[r,i,{id:String(e+1),number:e+1,reference:"lf-"+n,content:u.startsWith("<")?u:"<p>"+u+"</p>"}]}function z(t){return function(e){return t.replace(/<%=?\s*(\w+?)\s*%>/g,(function(t,n){var r;return String(null!==(r=e[n])&&void 0!==r?r:"")}))}}function k(t,e){var n=z(t),r=z(e);return function(t){var e=t[0],i=t[1],o=i.id,u=L('<span class="littlefoot">'+n(i)+"</span>"),c=u.firstElementChild;c.setAttribute("aria-expanded","false"),c.dataset.footnoteButton="",c.dataset.footnoteId=o;var a=L(r(i));a.dataset.footnotePopover="",a.dataset.footnoteId=o;var l=W(a,T),s=W(a,A);return function(t,e){t.addEventListener("wheel",x.throttle(H(e),16))}(s,a),e.insertAdjacentElement("beforebegin",u),{id:o,button:c,host:u,popover:a,content:s,wrapper:l}}}function I(t){var n,i,o,u=t.allowDuplicates,c=t.anchorParentSelector,a=t.anchorPattern,l=t.buttonTemplate,s=t.contentTemplate,f=t.footnoteSelector,d=t.numberResetSelector,v=t.scope,m=function(t,e,n){return O(t,n+' a[href*="#"]').filter((function(t){return(t.href+t.rel).match(e)}))}(document,a,v).map(function(t,e,n,r){var i=[];return function(o){var u,c=o.href.split("#")[1];if(c){var a=null===(u=O(t,"#"+window.CSS.escape(c)).find((function(t){return e||!i.includes(t)})))||void 0===u?void 0:u.closest(r);if(a){i.push(a);var l=o.closest(n)||o;return[l.id||o.id,l,a]}}}}(document,u,c,f)).filter(C).map(R).map(d?(n=d,i=0,o=null,function(t){var r=t[0],u=t[1],c=t[2],a=r.closest(n);return i=o===a?i+1:1,o=a,[r,u,e(e({},c),{number:i})]}):function(t){return t}).map((function(t){var e=t[0],n=t[1],r=t[2];return M(e,n),P(n),[e,r]})).map(k(l,s)).map(b);return{footnotes:m,unmount:function(){m.forEach((function(t){return t.destroy()})),O(document,"."+_).forEach((function(t){return r(t,_)}))}}}var N="[data-footnote-id]",q=function(t,e){return t.target.closest(e)},F=function(t){return null==t?void 0:t.dataset.footnoteId},B=function(t){return function(e){e.preventDefault();var n=q(e,N),r=F(n);r&&t(r)}},V=document.addEventListener,U=window.addEventListener,Y=function(t,e,n,r){return V(t,(function(t){var r=t.target;(null==r?void 0:r.closest(e))&&n.call(r,t)}),r)};var $={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,dismissOnDocumentTouch:!0,footnoteSelector:"div",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:'<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="'.concat(T,'"><div class="').concat(A,'"><% content %></div></div><div class="').concat(v,'"></div></aside>'),buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'};function G(t){void 0===t&&(t={});var n=e(e({},$),t),r=function(t,e){var n,r=t.footnotes,i=t.unmount,o=function(t){return function(n){n.isReady()&&(n.dismiss(e.dismissCallback),setTimeout(n.remove,t))}},u=function(t){return function(n){e.allowMultiple||r.filter((function(t){return t.id!==n.id})).forEach(o(e.dismissDelay)),n.isReady()&&(n.activate(e.activateCallback),n.reposition(),n.resize(),setTimeout(n.ready,t))}},c=function(t){return function(e){var n=r.find((function(t){return t.id===e}));n&&t(n)}},a=function(){return r.forEach(o(e.dismissDelay))};return{activate:function(t,e){return c(u(e))(t)},dismiss:function(t,e){return c(o(e))(t)},dismissAll:a,touchOutside:function(){e.dismissOnDocumentTouch&&a()},repositionAll:function(){return r.forEach((function(t){return t.reposition()}))},resizeAll:function(){return r.forEach((function(t){return t.resize()}))},toggle:c((function(t){return t.isActive()?o(e.dismissDelay)(t):u(e.activateDelay)(t)})),hover:c((function(t){n=t.id,e.activateOnHover&&!t.isActive()&&u(e.hoverDelay)(t)})),unhover:c((function(t){t.id===n&&(n=null),e.dismissOnUnhover&&setTimeout((function(){return r.filter((function(t){return t.id!==n})).forEach(o(e.dismissDelay))}),e.hoverDelay)})),unmount:i}}(I(n),n),i=function(t){var e=function(e){var n=q(e,"[data-footnote-button]"),r=F(n);r?(e.preventDefault(),t.toggle(r)):q(e,"[data-footnote-popover]")||t.touchOutside()},n=x.throttle(t.repositionAll,16),r=x.throttle(t.resizeAll,16),i=B(t.hover),o=B(t.unhover),u=new AbortController,c={signal:u.signal};return V("touchend",e,c),V("click",e,c),V("keyup",(function(e){27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||t.dismissAll()}),c),V("gestureend",n,c),U("scroll",n,c),U("resize",r,c),Y("mouseover",N,i,c),Y("mouseout",N,o,c),function(){u.abort()}}(r);return{activate:function(t,e){void 0===e&&(e=n.activateDelay),r.activate(t,e)},dismiss:function(t,e){void 0===e&&(e=n.dismissDelay),void 0===t?r.dismissAll():r.dismiss(t,e)},unmount:function(){i(),r.unmount()},getSetting:function(t){return n[t]},updateSetting:function(t,e){n[t]=e}}}t.default=G,t.littlefoot=G,Object.defineProperty(t,"__esModule",{value:!0})}));