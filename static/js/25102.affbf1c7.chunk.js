/*! For license information please see 25102.affbf1c7.chunk.js.LICENSE.txt */
(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[25102,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},22077:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CalciteNavigationUser:()=>m,defineCustomElement:()=>f});var i=a(33850),n=a(33150),s=a(19074),o=a(36177);const r="text-container",l="full-name",c="username",u="button",d=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=void 0,this.fullName=void 0,this.label=void 0,this.textDisabled=!1,this.thumbnail=void 0,this.userId=void 0,this.username=void 0}async setFocus(){await(0,n.c)(this),this.el.focus()}componentWillLoad(){(0,n.a)(this)}componentDidLoad(){(0,n.s)(this)}render(){return(0,i.h)(i.AA,null,(0,i.h)("button",{"aria-label":this.label,class:u},(0,i.h)("calcite-avatar",{"full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&(0,i.h)("div",{class:r},this.fullName&&(0,i.h)("span",{class:l,key:l},this.fullName),this.username&&(0,i.h)("span",{class:c,key:c},this.username))))}static get delegatesFocus(){return!0}get el(){return this}static get style(){return":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-ui-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1);--calcite-ui-icon-color:var(--calcite-ui-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.username{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-navigation-user",{active:[516],fullName:[1,"full-name"],label:[1],textDisabled:[516,"text-disabled"],thumbnail:[1],userId:[1,"user-id"],username:[1],setFocus:[64]}]);function h(){if("undefined"===typeof customElements)return;["calcite-navigation-user","calcite-avatar","calcite-icon"].forEach((e=>{switch(e){case"calcite-navigation-user":customElements.get(e)||customElements.define(e,d);break;case"calcite-avatar":customElements.get(e)||(0,s.d)();break;case"calcite-icon":customElements.get(e)||(0,o.d)()}}))}h();const m=d,f=h},33150:(e,t,a)=>{"use strict";a.d(t,{a:()=>o,b:()=>l,c:()=>c,s:()=>r});var i=a(33850);const n=new WeakMap,s=new WeakMap;function o(e){s.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function l(e){return s.get(e)}async function c(e){if(await l(e),i.Z5.isBrowser)return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=25102.affbf1c7.chunk.js.map