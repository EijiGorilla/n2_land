/*! For license information please see 95557.ab73505e.chunk.js.LICENSE.txt */
(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[95557,25572,45286,57148,66324,25708,45966],{25572:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=25572,t.exports=e},36754:(t,e,r)=>{"use strict";r.r(e),r.d(e,{CalciteTabs:()=>i,defineCustomElement:()=>o});var s=r(30533);const i=s.T,o=s.d},46609:(t,e,r)=>{"use strict";r.d(e,{c:()=>i});var s=r(33850);function i(t,e,r){if(!s.Z5.isBrowser)return;const i=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new i(e,r)}},30533:(t,e,r)=>{"use strict";r.d(e,{T:()=>a,d:()=>n});var s=r(33850),i=r(46609);const o="title-group",a=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=(0,i.c)("mutation",(t=>{for(const e of t){const t=e.target;"CALCITE-TAB-NAV"!==t.nodeName&&"CALCITE-TAB-TITLE"!==t.nodeName&&"CALCITE-TAB"!==t.nodeName||this.updateItems()}})),this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}handleInheritableProps(){this.updateItems()}connectedCallback(){this.mutationObserver.observe(this.el,{childList:!0}),this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}render(){return(0,s.h)(s.HY,null,(0,s.h)("slot",{name:o}),(0,s.h)("section",null,(0,s.h)("slot",null)))}calciteInternalTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter((e=>e!==t.detail)),this.registryHandler(),t.stopPropagation()}calciteInternalTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter((e=>e!==t.detail)),this.registryHandler(),t.stopPropagation()}updateItems(){const{position:t,scale:e}=this,r=this.el.querySelector("calcite-tab-nav");r&&(r.position=t,r.scale=e),Array.from(this.el.querySelectorAll("calcite-tab")).forEach((t=>{t.parentElement===this.el&&(t.scale=e)})),Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((r=>{r.position=t,r.scale=e}))}async registryHandler(){let t,e;if(this.tabs.some((t=>t.tab))||this.titles.some((t=>t.tab)))t=this.tabs.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id)),e=this.titles.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id));else{const r=await Promise.all(this.tabs.map((t=>t.getTabIndex()))),s=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=r.reduce(((t,e,r)=>(t[e]=this.tabs[r].id,t)),[]),e=s.reduce(((t,e,r)=>(t[e]=this.titles[r].id,t)),[])}this.tabs.forEach((r=>r.updateAriaInfo(t,e))),this.titles.forEach((r=>r.updateAriaInfo(t,e)))}get el(){return this}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"]}}static get style(){return":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tabs",{layout:[513],position:[513],scale:[513],bordered:[4],titles:[32],tabs:[32]},[[0,"calciteInternalTabTitleRegister","calciteInternalTabTitleRegister"],[16,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteInternalTabRegister","calciteInternalTabRegister"],[16,"calciteTabUnregister","calciteTabUnregister"]]]);function n(){if("undefined"===typeof customElements)return;["calcite-tabs"].forEach((t=>{if("calcite-tabs"===t)customElements.get(t)||customElements.define(t,a)}))}n()}}]);
//# sourceMappingURL=95557.ab73505e.chunk.js.map