/*! For license information please see 44890.3076a2aa.chunk.js.LICENSE.txt */
(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[44890,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},93758:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteColorPickerHexInput:()=>o,defineCustomElement:()=>a});var i=n(12490);const o=i.e,a=i.d},12490:(e,t,n)=>{"use strict";n.d(t,{C:()=>d,D:()=>p,H:()=>v,O:()=>g,R:()=>m,S:()=>C,a:()=>x,b:()=>b,c:()=>f,d:()=>L,e:()=>k});var i=n(33850),o=n(30516),a=n(56118),s=n(66151),l=n(33150),r=n(36177),c=n(13185),u=n(54989),h=n(52203);const d={channel:"channel",channels:"channels",colorField:"color-field",colorFieldScope:"scope--color-field",colorMode:"color-mode",colorModeContainer:"color-mode-container",container:"container",control:"control",controlAndScope:"control-and-scope",controlSection:"control-section",deleteColor:"delete-color",header:"header",hexAndChannelsGroup:"hex-and-channels-group",hexOptions:"color-hex-options",hueScope:"scope--hue",hueSlider:"hue-slider",opacityScope:"scope--opacity",opacitySlider:"opacity-slider",preview:"preview",previewAndSliders:"preview-and-sliders",saveColor:"save-color",savedColor:"saved-color",savedColors:"saved-colors",savedColorsButtons:"saved-colors-buttons",savedColorsSection:"saved-colors-section",scope:"scope",section:"section",slider:"slider",sliders:"sliders",splitSection:"section--split"},p=(0,a.c)("#007AC2"),f="calcite-color-",m={r:255,g:255,b:255},v={h:360,s:100,v:100},b=v.h-1,g={min:0,max:100},x={s:{slider:{height:12,width:104},colorField:{height:80,width:160},thumb:{radius:10}},m:{slider:{height:12,width:204},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:12,width:384},colorField:{height:200,width:464},thumb:{radius:10}}},C=1,E="container",w="hex-input",y="opacity-input",I=(0,a.c)(),k=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=(0,i.yM)(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,n="#".concat(t),{allowEmpty:i,internalColor:a}=this,s=i&&!t,l=(0,o.j)(n);this.onHexInputChange(),s||(0,o.i)(n)&&l||(e.value=i&&!a?"":this.formatHexForInternalInput((0,o.r)(a.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:n,internalColor:i}=this;n&&!t||(e.value=n&&!i?"":this.formatOpacityForInternalInput(i))},this.onHexInputChange=()=>{let e=this.hexInputNode.value;if(e){const t=(0,o.n)(e,!1);if((0,o.i)(t)&&this.alphaChannel&&this.internalColor){const n=(0,o.n)(this.internalColor.hexa(),!0).slice(-2);e="".concat(t+n)}}this.internalSetValue(e,this.value)},this.onOpacityInputChange=()=>{const e=this.opacityInputNode;let t;if(e.value){var n;const i=(0,o.o)(Number(e.value));t=null===(n=this.internalColor)||void 0===n?void 0:n.alpha(i).hexa()}else t=e.value;this.internalSetValue(t,this.value)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:n,metaKey:i,shiftKey:a}=e,{alphaChannel:s,hexInputNode:l,internalColor:r,value:c}=this,{key:u}=e,h=e.composedPath();if("Tab"===u||"Enter"===u)return h.includes(l)?this.onHexInputChange():this.onOpacityInputChange(),void("Enter"===u&&e.preventDefault());const d="ArrowDown"===u||"ArrowUp"===u,p=this.value;if(d){if(!c)return this.internalSetValue(this.previousNonNullValue,p),void e.preventDefault();const t="ArrowUp"===u?1:-1,n=a?10:1;return this.internalSetValue((0,o.h)(this.nudgeRGBChannels(r,n*t,h.includes(l)?"rgb":"a"),s),p),void e.preventDefault()}const f=t||n||i,m=1===u.length,v=o.k.test(u);!m||f||v||e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");(0,o.i)(t)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=(0,o.n)((0,o.h)(I,this.alphaChannel),this.alphaChannel,!0),this.internalColor=I}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:n}=this;if(n){const e=(0,o.n)(n,t);(0,o.i)(e,t)&&this.internalSetValue(e,e,!1)}else e&&this.internalSetValue(null,null,!1)}componentWillLoad(){(0,l.a)(this)}componentDidLoad(){(0,l.s)(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:n,messages:o,scale:a,value:s}=this,l=this.formatHexForInternalInput(s),r=this.formatOpacityForInternalInput(n),c="l"===a?"m":"s";return(0,i.h)("div",{class:E},(0,i.h)("calcite-input-text",{class:w,label:(null===o||void 0===o?void 0:o.hex)||t,maxLength:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInternalInputTextBlur:this.onHexInputBlur,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",scale:c,value:l,ref:this.storeHexInputRef}),e?(0,i.h)("calcite-input-number",{class:y,key:"opacity-input",label:null===o||void 0===o?void 0:o.opacity,max:g.max,maxLength:3,min:g.min,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.onOpacityInputChange,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onKeyDown:this.onInputKeyDown,scale:c,suffixText:"%",value:r,ref:this.storeOpacityInputRef}):null)}async setFocus(){return await(0,l.c)(this),(0,s.k)(this.hexInputNode)}internalSetValue(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){const{alphaChannel:t}=this,i=(0,o.n)(e,t,t);if((0,o.i)(i,t)){const{internalColor:e}=this,s=(0,a.c)(i),l=(0,o.n)((0,o.h)(s,t),t),r=!e||l!==(0,o.n)((0,o.h)(e,t),t);return this.internalColor=s,this.previousNonNullValue=l,this.value=l,void(r&&n&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void(n&&this.calciteColorPickerHexInputChange.emit());this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?"".concat((0,o.b)(e.alpha())):""}nudgeRGBChannels(e,t,n){let i;const s=e.array(),l=s.slice(0,3);if("rgb"===n){i=[...l.map((e=>e+t)),this.alphaChannel?s[3]:void 0]}else{const n=(0,o.o)((0,o.b)(e.alpha())+t);i=[...l,n]}return(0,a.c)(i)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]}]);function L(){if("undefined"===typeof customElements)return;["calcite-color-picker-hex-input","calcite-icon","calcite-input-number","calcite-input-text","calcite-progress"].forEach((e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,k);break;case"calcite-icon":customElements.get(e)||(0,r.d)();break;case"calcite-input-number":customElements.get(e)||(0,c.d)();break;case"calcite-input-text":customElements.get(e)||(0,u.d)();break;case"calcite-progress":customElements.get(e)||(0,h.d)()}}))}L()},9339:(e,t,n)=>{"use strict";function i(e){return"l"===e?"m":"s"}n.d(t,{g:()=>i})},81054:(e,t,n)=>{"use strict";n.d(t,{H:()=>x,a:()=>m,c:()=>h,d:()=>f,f:()=>d,r:()=>u,s:()=>c});var i=n(66151),o=n(33850);const a="hidden-form-input";function s(e){return"checked"in e}const l=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function u(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function h(e){const{el:t,value:n}=e,o=d(e);if(!o||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let o=!1;return e.addEventListener(n,(e=>{o=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),o}(o,t))return;e.formEl=o,e.defaultValue=n,s(e)&&(e.defaultChecked=e.checked);const a=(e.onFormReset||p).bind(e);o.addEventListener("reset",a),l.set(e.el,a),r.add(t)}function d(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function p(){s(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function f(e){const{el:t,formEl:n}=e;if(!n)return;const i=l.get(t);n.removeEventListener("reset",i),l.delete(t),e.formEl=null,r.delete(t)}function m(e,t){e.defaultValue=t}const v=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",v);function g(e,t,n){var i;const{defaultValue:o,disabled:a,form:l,name:r,required:c}=e;t.defaultValue=o,t.disabled=a,t.name=r,t.required=c,t.tabIndex=-1,l?t.setAttribute("form",l):t.removeAttribute("form"),s(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",null===(i=e.syncHiddenFormInput)||void 0===i||i.call(e,t)}const x=e=>{let{component:t}=e;return function(e){const{el:t,formEl:n,name:i,value:o}=e,{ownerDocument:s}=t,l=t.querySelectorAll('input[slot="'.concat(a,'"]'));if(!n||!i)return void l.forEach((e=>{b(e),e.remove()}));const r=Array.isArray(o)?o:[o],c=[],u=new Set;let h;l.forEach((t=>{const n=r.find((e=>e==t.value));null!=n?(u.add(n),g(e,t,n)):c.push(t)})),r.forEach((t=>{if(u.has(t))return;let n=c.pop();n||(n=s.createElement("input"),n.slot=a),h||(h=s.createDocumentFragment()),h.append(n),n.addEventListener("change",v),g(e,n,t)})),h&&t.append(h),c.forEach((e=>{b(e),e.remove()}))}(t),(0,o.h)("slot",{name:a})}},36177:(e,t,n)=>{"use strict";n.d(t,{I:()=>h,d:()=>d});var i=n(33850),o=n(66151),a=n(46609);const s="flip-rtl",l={},r={},c={s:16,m:24,l:32};async function u(e){let{icon:t,scale:n}=e;const o=c[n],a=function(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const t=/[a-z]/i;e=n.map(((e,n)=>e.replace(t,(function(e,t){return 0===n&&0===t?e:e.toUpperCase()})))).join("")}return t?"i".concat(e):e}(t),s="F"===a.charAt(a.length-1),u=s?a.substring(0,a.length-1):a,h="".concat(u).concat(o).concat(s?"F":"");if(l[h])return l[h];r[h]||(r[h]=fetch((0,i.K3)("./assets/icon/".concat(h,".json"))).then((e=>e.json())).catch((()=>(console.error('"'.concat(h,'" is not a valid calcite-ui-icon name')),""))));const d=await r[h];return l[h]=d,d}const h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:n,scale:a,textLabel:l}=this,r=(0,o.b)(e),u=c[a],h=!!l,d=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,o.t)(!h),"aria-label":h?l:null,role:h?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[s]:"rtl"===r&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(u," ").concat(u),width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((e=>"string"===typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:n}=this;if(!i.Z5.isBrowser||!e||!n)return;const o=await u({icon:e,scale:t});e===this.icon&&(this.pathData=o)}waitUntilVisible(e){this.intersectionObserver=(0,a.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,h)}))}d()},94002:(e,t,n)=>{"use strict";n.d(t,{c:()=>v,d:()=>b,g:()=>o,u:()=>d});var i=n(33850);function o(){if(!i.Z5.isBrowser)return"";const e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((e=>{let{brand:t,version:n}=e;return"".concat(t,"/").concat(n)})).join(" "):navigator.userAgent}const a=/firefox/i.test(o()),s=a?new WeakMap:null;function l(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(a&&!s.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const c=["mousedown","mouseup","click"];function u(e){if(a&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void p(e);m(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function p(e){e.el.click=l,function(e){if(!e)return;e.addEventListener("pointerdown",r,h),c.forEach((t=>e.addEventListener(t,u,h)))}(a?f(e):e.el)}function f(e){return s.get(e.el)}function m(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",r,h),c.forEach((t=>e.removeEventListener(t,u,h)))}(a?f(e):e.el)}function v(e){if(!e.disabled||!a)return;const t=e.el.parentElement||e.el;s.set(e.el,t),p(e)}function b(e){a&&(s.delete(e.el),m(e))}},4593:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,c:()=>f,d:()=>m,g:()=>b,l:()=>a});var i=n(66151);const o="calciteInternalLabelClick",a="calciteInternalLabelConnected",s="calciteInternalLabelDisconnected",l="calcite-label",r=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakSet,p=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:"".concat(l,'[for="').concat(t,'"]')});if(n)return n;const o=(0,i.c)(e,l);return!o||function(e,t){let n;const i="custom-element-ancestor-check",o=i=>{i.stopImmediatePropagation();const o=i.composedPath();n=o.slice(o.indexOf(t),o.indexOf(e))};e.addEventListener(i,o,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,o);const a=n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return a.length>0}(o,e)?null:o};function f(e){const t=p(e.el);if(c.has(t)&&t===e.labelEl||!t&&d.has(e))return;const n=C.bind(e);if(t){e.labelEl=t;const i=r.get(t)||[];i.push(e),r.set(t,i.sort(v)),c.has(e.labelEl)||(c.set(e.labelEl,g),e.labelEl.addEventListener(o,g)),d.delete(e),document.removeEventListener(a,u.get(e)),h.set(e,n),document.addEventListener(s,n)}else d.has(e)||(n(),document.removeEventListener(s,h.get(e)))}function m(e){if(d.delete(e),document.removeEventListener(a,u.get(e)),document.removeEventListener(s,h.get(e)),u.delete(e),h.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(o,c.get(e.labelEl)),c.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(v)),e.labelEl=null}function v(e,t){return(0,i.y)(e.el,t.el)?-1:1}function b(e){var t;return e.label||(null===(t=e.labelEl)||void 0===t||null===(t=t.textContent)||void 0===t?void 0:t.trim())||""}function g(e){const t=e.detail.sourceEvent.target,n=r.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const o=n[0];o.disabled||o.onLabelClick(e)}function x(){d.has(this)&&f(this)}function C(){d.add(this);const e=u.get(this)||x.bind(this);u.set(this,e),document.addEventListener(a,e)}},33150:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>r,c:()=>c,s:()=>l});var i=n(33850);const o=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>o.set(e,t))))}function l(e){o.get(e)()}function r(e){return a.get(e)}async function c(e){if(await r(e),i.Z5.isBrowser)return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},30769:(e,t,n)=>{"use strict";n.d(t,{c:()=>h,d:()=>d,s:()=>r,u:()=>u});var i=n(33850),o=n(1314);const a={};function s(){throw new Error("could not fetch component message bundle")}function l(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await c(e,e.effectiveLocale),l(e)}async function c(e,t){if(!i.Z5.isBrowser)return{};const{el:n}=e,l=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n="".concat(t,"_").concat(e);return a[n]||(a[n]=fetch((0,i.K3)("./assets/".concat(t,"/t9n/messages_").concat(e,".json"))).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),a[n]}((0,o.g)(t,"t9n"),l)}async function u(e,t){e.defaultMessages=await c(e,t),l(e)}function h(e){e.onMessagesChange=p}function d(e){e.onMessagesChange=void 0}function p(){l(this)}}}]);
//# sourceMappingURL=44890.3076a2aa.chunk.js.map