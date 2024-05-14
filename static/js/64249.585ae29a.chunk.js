/*! For license information please see 64249.585ae29a.chunk.js.LICENSE.txt */
(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[64249,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},57737:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteLabel:()=>a,defineCustomElement:()=>i});var l=n(15906);const a=l.L,i=l.d},15906:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,d:()=>o});var l=n(33850),a=n(4593);const i="container",s=(0,l.GH)(class extends l.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=(0,l.yM)(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}connectedCallback(){document.dispatchEvent(new CustomEvent(a.l))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(a.a))}render(){return(0,l.h)(l.AA,{onClick:this.labelClickHandler},(0,l.h)("div",{class:i},(0,l.h)("slot",null)))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]}]);function o(){if("undefined"===typeof customElements)return;["calcite-label"].forEach((e=>{if("calcite-label"===e)customElements.get(e)||customElements.define(e,s)}))}o()},4593:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,c:()=>m,d:()=>v,g:()=>g,l:()=>i});var l=n(66151);const a="calciteInternalLabelClick",i="calciteInternalLabelConnected",s="calciteInternalLabelDisconnected",o="calcite-label",c=new WeakMap,r=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakSet,b=e=>{const{id:t}=e,n=t&&(0,l.q)(e,{selector:"".concat(o,'[for="').concat(t,'"]')});if(n)return n;const a=(0,l.c)(e,o);return!a||function(e,t){let n;const l="custom-element-ancestor-check",a=l=>{l.stopImmediatePropagation();const a=l.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(l,a,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,a);const i=n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return i.length>0}(a,e)?null:a};function m(e){const t=b(e.el);if(r.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=y.bind(e);if(t){e.labelEl=t;const l=c.get(t)||[];l.push(e),c.set(t,l.sort(f)),r.has(e.labelEl)||(r.set(e.labelEl,p),e.labelEl.addEventListener(a,p)),h.delete(e),document.removeEventListener(i,d.get(e)),u.set(e,n),document.addEventListener(s,n)}else h.has(e)||(n(),document.removeEventListener(s,u.get(e)))}function v(e){if(h.delete(e),document.removeEventListener(i,d.get(e)),document.removeEventListener(s,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(a,r.get(e.labelEl)),r.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(f)),e.labelEl=null}function f(e,t){return(0,l.y)(e.el,t.el)?-1:1}function g(e){var t;return e.label||(null===(t=e.labelEl)||void 0===t||null===(t=t.textContent)||void 0===t?void 0:t.trim())||""}function p(e){const t=e.detail.sourceEvent.target,n=c.get(this),l=n.find((e=>e.el===t));if(n.includes(l))return;const a=n[0];a.disabled||a.onLabelClick(e)}function E(){h.has(this)&&m(this)}function y(){h.add(this);const e=d.get(this)||E.bind(this);d.set(this,e),document.addEventListener(i,e)}}}]);
//# sourceMappingURL=64249.585ae29a.chunk.js.map