(()=>{"use strict";var e={341:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([e.id,"body {\r\n  background: lightyellow;\r\n  font: 30px Arial, sans-serif;\r\n}\r\n.sus {\r\ncolor: #000080;\r\nmargin-left: 500px;\r\n}",""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],l=0;l<e.length;l++){var a=e[l],c=n.base?a[0]+n.base:a[0],u=i[c]||0,g="".concat(c," ").concat(u);i[c]=u+1;var b=r(g),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==b)t[b].references++,t[b].updater(d);else{var h=o(d,n);n.byIndex=l,t.splice(l,0,{identifier:g,updater:h,references:1})}s.push(g)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=r(i[s]);t[l].references--}for(var a=n(e,o),c=0;c<i.length;c++){var u=r(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e=0)=>t=>`[${t+e}m`,t=(e=0)=>t=>`[${38+e};5;${t}m`,n=(e=0)=>(t,r,n)=>`[${38+e};2;${t};${r};${n}m`,o=function(){const r=new Map,o={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};o.color.gray=o.color.blackBright,o.bgColor.bgGray=o.bgColor.bgBlackBright,o.color.grey=o.color.blackBright,o.bgColor.bgGrey=o.bgColor.bgBlackBright;for(const[e,t]of Object.entries(o)){for(const[e,n]of Object.entries(t))o[e]={open:`[${n[0]}m`,close:`[${n[1]}m`},t[e]=o[e],r.set(n[0],n[1]);Object.defineProperty(o,e,{value:t,enumerable:!1})}return Object.defineProperty(o,"codes",{value:r,enumerable:!1}),o.color.close="[39m",o.bgColor.close="[49m",o.color.ansi=e(),o.color.ansi256=t(),o.color.ansi16m=n(),o.bgColor.ansi=e(10),o.bgColor.ansi256=t(10),o.bgColor.ansi16m=n(10),Object.defineProperties(o,{rgbToAnsi256:{value:(e,t,r)=>e===t&&t===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(r/255*5),enumerable:!1},hexToRgb:{value:e=>{const t=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(e.toString(16));if(!t)return[0,0,0];let{colorString:r}=t.groups;3===r.length&&(r=[...r].map((e=>e+e)).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},enumerable:!1},hexToAnsi256:{value:e=>o.rgbToAnsi256(...o.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value:e=>{if(e<8)return 30+e;if(e<16)return e-8+90;let t,r,n;if(e>=232)t=(10*(e-232)+8)/255,r=t,n=t;else{const o=(e-=16)%36;t=Math.floor(e/36)/5,r=Math.floor(o/6)/5,n=o%6/5}const o=2*Math.max(t,r,n);if(0===o)return 30;let i=30+(Math.round(n)<<2|Math.round(r)<<1|Math.round(t));return 2===o&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(e,t,r)=>o.ansi256ToAnsi(o.rgbToAnsi256(e,t,r)),enumerable:!1},hexToAnsi:{value:e=>o.ansi256ToAnsi(o.hexToAnsi256(e)),enumerable:!1}}),o}(),i=o,s=!!/\b(Chrome|Chromium)\//.test(navigator.userAgent)&&{level:1,hasBasic:!0,has256:!1,has16m:!1},l={stdout:s,stderr:s};function a(e,t,r){let n=e.indexOf(t);if(-1===n)return e;const o=t.length;let i=0,s="";do{s+=e.substr(i,n-i)+t+r,i=n+o,n=e.indexOf(t,i)}while(-1!==n);return s+=e.slice(i),s}const{stdout:c,stderr:u}=l,g=Symbol("GENERATOR"),b=Symbol("STYLER"),d=Symbol("IS_EMPTY"),h=["ansi","ansi","ansi256","ansi16m"],f=Object.create(null);function p(e){return(e=>{const t=(...e)=>e.join(" ");return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const r=c?c.level:0;e.level=void 0===t.level?r:t.level})(t,e),Object.setPrototypeOf(t,p.prototype),t})(e)}Object.setPrototypeOf(p.prototype,Function.prototype);for(const[e,t]of Object.entries(i))f[e]={get(){const r=B(this,x(t.open,t.close,this[b]),this[d]);return Object.defineProperty(this,e,{value:r}),r}};f.visible={get(){const e=B(this,this[b],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const v=(e,t,r,...n)=>"rgb"===e?"ansi16m"===t?i[r].ansi16m(...n):"ansi256"===t?i[r].ansi256(i.rgbToAnsi256(...n)):i[r].ansi(i.rgbToAnsi(...n)):"hex"===e?v("rgb",t,r,...i.hexToRgb(...n)):i[r][e](...n),m=["rgb","hex","ansi256"];for(const e of m)f[e]={get(){const{level:t}=this;return function(...r){const n=x(v(e,h[t],"color",...r),i.color.close,this[b]);return B(this,n,this[d])}}},f["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const{level:t}=this;return function(...r){const n=x(v(e,h[t],"bgColor",...r),i.bgColor.close,this[b]);return B(this,n,this[d])}}};const y=Object.defineProperties((()=>{}),{...f,level:{enumerable:!0,get(){return this[g].level},set(e){this[g].level=e}}}),x=(e,t,r)=>{let n,o;return void 0===r?(n=e,o=t):(n=r.openAll+e,o=t+r.closeAll),{open:e,close:t,openAll:n,closeAll:o,parent:r}},B=(e,t,r)=>{const n=(...e)=>T(n,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(n,y),n[g]=e,n[b]=t,n[d]=r,n},T=(e,t)=>{if(e.level<=0||!t)return e[d]?"":t;let r=e[b];if(void 0===r)return t;const{openAll:n,closeAll:o}=r;if(t.includes(""))for(;void 0!==r;)t=a(t,r.close,r.open),r=r.parent;const i=t.indexOf("\n");return-1!==i&&(t=function(e,t,r,n){let o=0,i="";do{const s="\r"===e[n-1];i+=e.substr(o,(s?n-1:n)-o)+t+(s?"\r\n":"\n")+r,o=n+1,n=e.indexOf("\n",o)}while(-1!==n);return i+=e.slice(o),i}(t,o,n,i)),n+t+o};Object.defineProperties(p.prototype,f);const A=p(),O=(p({level:u?u.level:0}),A);var C=r(379),M=r.n(C),j=r(795),w=r.n(j),P=r(569),S=r.n(P),k=r(565),E=r.n(k),R=r(216),I=r.n(R),$=r(589),N=r.n($),G=r(341),Z={};Z.styleTagTransform=N(),Z.setAttributes=E(),Z.insert=S().bind(null,"head"),Z.domAPI=w(),Z.insertStyleElement=I(),M()(G.Z,Z),G.Z&&G.Z.locals&&G.Z.locals;const L=console.log;L(O.rgb(255,255,255).bgWhite.bold("ЭТО")),L(O.rgb(255,255,255).bgBlue.bold("ПРОСТО")),L(O.rgb(255,255,255).bgRed.bold("ТЕСТ"))})()})();