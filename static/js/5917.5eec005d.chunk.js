/*! For license information please see 5917.5eec005d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[5917],{25917:(e,t,i)=>{i.r(t),i.d(t,{CalciteChipGroup:()=>h,defineCustomElement:()=>r});var s=i(51554),l=i(92358),c=i(13160),a=i(72021),o=i(47242);const n=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipGroupSelect=(0,s.yM)(this,"calciteChipGroupSelect",6),this.mutationObserver=(0,a.c)("mutation",(()=>this.updateItems())),this.items=[],this.updateItems=e=>{var t;const i=e?e.target:this.slotRefEl;this.items=null===i||void 0===i?void 0:i.assignedElements({flatten:!0}).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-chip"))),null===(t=this.items)||void 0===t||t.forEach((e=>{e.interactive=!0,e.scale=this.scale,e.selectionMode=this.selectionMode})),this.setSelectedItems(!1)},this.setSelectedItems=(e,t)=>{var i,s;t&&(null===(s=this.items)||void 0===s||s.forEach((e=>{const i=t===e;switch(this.selectionMode){case"multiple":i&&(e.selected=!e.selected);break;case"single":e.selected=!!i&&!e.selected;break;case"single-persist":e.selected=!!i}})));this.selectedItems=null===(i=this.items)||void 0===i?void 0:i.filter((e=>e.selected)),e&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}connectedCallback(){var e;(0,c.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}componentDidRender(){(0,c.d)(this),(0,c.u)(this)}componentDidLoad(){(0,o.s)(this)}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}async componentWillLoad(){(0,o.a)(this)}calciteInternalChipKeyEventListener(e){if(e.composedPath().includes(this.el)){var t;const i=null===(t=this.items)||void 0===t?void 0:t.filter((e=>!e.disabled));switch(e.detail.key){case"ArrowRight":(0,l.i)(i,e.detail.target,"next");break;case"ArrowLeft":(0,l.i)(i,e.detail.target,"previous");break;case"Home":(0,l.i)(i,e.detail.target,"first");break;case"End":(0,l.i)(i,e.detail.target,"last")}}}calciteChipCloseListener(e){var t,i;const s=e.target;var c,a;null!==(t=this.items)&&void 0!==t&&t.includes(s)&&((null===(c=this.items)||void 0===c?void 0:c.indexOf(s))>0?(0,l.i)(this.items,s,"previous"):0===(null===(a=this.items)||void 0===a?void 0:a.indexOf(s))?(0,l.i)(this.items,s,"next"):(0,l.i)(this.items,s,"first"));this.items=null===(i=this.items)||void 0===i?void 0:i.filter((e=>e!==s))}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target)}async setFocus(){var e;if(await(0,o.c)(this),!this.disabled)return null===(e=this.selectedItems[0]||this.items[0])||void 0===e?void 0:e.setFocus()}render(){const e="none"===this.selectionMode||"multiple"===this.selectionMode?"group":"radiogroup";return(0,s.h)("div",{"aria-disabled":(0,l.t)(this.disabled),"aria-label":this.label,class:"container",role:e},(0,s.h)("slot",{onSlotchange:this.updateItems,ref:e=>this.slotRefEl=e}))}get el(){return this}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-chip-group",{disabled:[516],label:[1],scale:[513],selectionMode:[513,"selection-mode"],selectedItems:[1040],setFocus:[64]},[[0,"calciteInternalChipKeyEvent","calciteInternalChipKeyEventListener"],[0,"calciteChipClose","calciteChipCloseListener"],[0,"calciteChipSelect","calciteChipSelectListener"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-chip-group"].forEach((e=>{if("calcite-chip-group"===e)customElements.get(e)||customElements.define(e,n)}))}d();const h=n,r=d}}]);
//# sourceMappingURL=5917.5eec005d.chunk.js.map