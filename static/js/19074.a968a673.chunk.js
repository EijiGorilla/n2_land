/*! For license information please see 19074.a968a673.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[19074],{19074:(t,e,n)=>{n.d(e,{A:()=>o,d:()=>l});var i=n(33850),s=n(66151),r=n(30516),a=n(36177);function c(t){return function(t){let{r:e,g:n,b:i}=t;e/=255,n/=255,i/=255;const s=Math.max(e,n,i),r=Math.min(e,n,i),a=s-r;if(s===r)return 0;let c=(s+r)/2;switch(s){case e:c=(n-i)/a+(n<i?6:0);break;case n:c=(i-e)/a+2;break;case i:c=(e-n)/a+4}return Math.round(60*c)}((0,r.g)(t))}const o=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scale="m",this.thumbnail=void 0,this.fullName=void 0,this.username=void 0,this.userId=void 0,this.label=void 0,this.thumbnailFailedToLoad=!1}render(){return this.determineContent()}determineContent(){if(this.thumbnail&&!this.thumbnailFailedToLoad)return(0,i.h)("img",{alt:this.label||"",class:"thumbnail",onError:()=>this.thumbnailFailedToLoad=!0,src:this.thumbnail});const t=this.generateInitials(),e=this.generateFillColor();return(0,i.h)("span",{"aria-label":this.label||this.fullName,class:"background",role:"figure",style:{backgroundColor:e}},t?(0,i.h)("span",{"aria-hidden":"true",class:"initials"},t):(0,i.h)("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))}generateFillColor(){const{userId:t,username:e,fullName:n,el:i}=this,a=(0,s.r)(i),o=t&&"#".concat(t.substr(t.length-6)),l=e||n||"",h=o&&(0,r.i)(o)?o:function(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);let n="#";for(let i=0;i<3;i++)n+=("00"+(e>>8*i&255).toString(16)).substr(-2);return n}(l);if(!t&&!l||!(0,r.i)(h))return"var(--calcite-ui-foreground-2)";const u=c(h),d="dark"===a?20:90;return"hsl(".concat(u,", 60%, ").concat(d,"%)")}generateInitials(){const{fullName:t,username:e}=this;return t?t.trim().split(" ").map((t=>t.substring(0,1))).join(""):!!e&&e.substring(0,2)}get el(){return this}static get style(){return":host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-avatar",{scale:[513],thumbnail:[513],fullName:[513,"full-name"],username:[513],userId:[513,"user-id"],label:[1],thumbnailFailedToLoad:[32]}]);function l(){if("undefined"===typeof customElements)return;["calcite-avatar","calcite-icon"].forEach((t=>{switch(t){case"calcite-avatar":customElements.get(t)||customElements.define(t,o);break;case"calcite-icon":customElements.get(t)||(0,a.d)()}}))}l()},36177:(t,e,n)=>{n.d(e,{I:()=>u,d:()=>d});var i=n(33850),s=n(66151),r=n(46609);const a="flip-rtl",c={},o={},l={s:16,m:24,l:32};async function h(t){let{icon:e,scale:n}=t;const s=l[n],r=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const e=/[a-z]/i;t=n.map(((t,n)=>t.replace(e,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()})))).join("")}return e?"i".concat(t):t}(e),a="F"===r.charAt(r.length-1),h=a?r.substring(0,r.length-1):r,u="".concat(h).concat(s).concat(a?"F":"");if(c[u])return c[u];o[u]||(o[u]=fetch((0,i.K3)("./assets/icon/".concat(u,".json"))).then((t=>t.json())).catch((()=>(console.error('"'.concat(u,'" is not a valid calcite-ui-icon name')),""))));const d=await o[u];return c[u]=d,d}const u=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:n,scale:r,textLabel:c}=this,o=(0,s.b)(t),h=l[r],u=!!c,d=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,s.t)(!u),"aria-label":u?c:null,role:u?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[a]:"rtl"===o&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(h," ").concat(h),width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((t=>"string"===typeof t?(0,i.h)("path",{d:t}):(0,i.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!i.Z5.isBrowser||!t||!n)return;const s=await h({icon:t,scale:e});t===this.icon&&(this.pathData=s)}waitUntilVisible(t){this.intersectionObserver=(0,r.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,u)}))}d()},46609:(t,e,n)=>{n.d(e,{c:()=>s});var i=n(33850);function s(t,e,n){if(!i.Z5.isBrowser)return;const s=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new s(e,n)}},30516:(t,e,n)=>{n.d(e,{C:()=>H,a:()=>k,b:()=>o,c:()=>y,d:()=>m,e:()=>S,f:()=>z,g:()=>A,h:()=>p,i:()=>h,j:()=>f,k:()=>i,n:()=>b,o:()=>l,p:()=>C,r:()=>g,t:()=>L});const i=/^[0-9A-F]$/i,s=/^#[0-9A-F]{3}$/i,r=/^#[0-9A-F]{6}$/i,a=/^#[0-9A-F]{4}$/i,c=/^#[0-9A-F]{8}$/i,o=t=>Number((100*t).toFixed()),l=t=>Number((t/100).toFixed(2));function h(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return d(t,e)||f(t,e)}function u(t,e,n){return!!t&&(t.length===e&&n.test(t))}function d(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u(t,e?5:4,e?a:s)}function f(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u(t,e?9:7,e?c:r)}function b(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((t=t.toLowerCase()).startsWith("#")||(t="#".concat(t)),d(t,e))return g(A(t,e));if(e&&n&&h(t,!1)){const e=d(t,!1);return g(A("".concat(t).concat(e?"f":"ff"),!0))}return t}function p(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.hexa():t.hex()}function g(t){const{r:e,g:n,b:i}=t,s=v(e),r=v(n),a=v(i),c="a"in t?v(255*t.a):"";return"#".concat(s).concat(r).concat(a).concat(c).toLowerCase()}function v(t){return t.toString(16).padStart(2,"0")}function m(t){var e;const n={...t,a:null!==(e=t.alpha)&&void 0!==e?e:1};return delete n.alpha,n}function S(t){var e;const n={...t,alpha:null!==(e=t.a)&&void 0!==e?e:1};return delete n.a,n}function A(t){let e,n,i,s;if(!h(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return null;if(3===(t=t.replace("#","")).length||4===t.length){const[r,a,c,o]=t.split("");e=parseInt("".concat(r).concat(r),16),n=parseInt("".concat(a).concat(a),16),i=parseInt("".concat(c).concat(c),16),s=parseInt("".concat(o).concat(o),16)/255}else e=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16),s=parseInt(t.slice(6,8),16)/255;return isNaN(s)?{r:e,g:n,b:i}:{r:e,g:n,b:i,a:s}}const H={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},x={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function C(t){if("string"===typeof t){if(t.startsWith("#")){const{length:e}=t;if(4===e||7===e)return H.HEX;if(5===e||9===e)return H.HEXA}if(t.startsWith("rgba("))return H.RGBA_CSS;if(t.startsWith("rgb("))return H.RGB_CSS;if(t.startsWith("hsl("))return H.HSL_CSS;if(t.startsWith("hsla("))return H.HSLA_CSS}if("object"===typeof t){if(w(t,"r","g","b"))return w(t,"a")?x.RGBA:x.RGB;if(w(t,"h","s","l"))return w(t,"a")?x.HSLA:x.HSL;if(w(t,"h","s","v"))return w(t,"a")?x.HSVA:x.HSV}return null}function w(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.every((e=>e&&t&&"".concat(e)in t))}function y(t,e){return(null===t||void 0===t?void 0:t.rgb().array().toString())===(null===e||void 0===e?void 0:e.rgb().array().toString())}function k(t){return t===H.HEXA||t===H.RGBA_CSS||t===H.HSLA_CSS||t===x.RGBA||t===x.HSLA||t===x.HSVA}function z(t){return t===H.HEX?H.HEXA:t===H.RGB_CSS?H.RGBA_CSS:t===H.HSL_CSS?H.HSLA_CSS:t===x.RGB?x.RGBA:t===x.HSL?x.HSLA:t===x.HSV?x.HSVA:t}function L(t){return t===H.HEXA?H.HEX:t===H.RGBA_CSS?H.RGB_CSS:t===H.HSLA_CSS?H.HSL_CSS:t===x.RGBA?x.RGB:t===x.HSLA?x.HSL:t===x.HSVA?x.HSV:t}}}]);
//# sourceMappingURL=19074.a968a673.chunk.js.map