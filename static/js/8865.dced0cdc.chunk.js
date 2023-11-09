/*! For license information please see 8865.dced0cdc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[8865],{8865:(i,t,e)=>{e.r(t),e.d(t,{CalciteAccordionItem:()=>E,defineCustomElement:()=>S});var c=e(51554),n=e(19432),o=e(92358),a=e(64044),r=e(57601);const s="actions-start",d="actions-end",l="header",h="header-content",p="actions-start",m="actions-end",u="header-text",g="heading",v="description",x="expand-icon",f="content",b="icon--start",y="icon--end",k="header-container",I="section",w="section-toggle",A=(0,c.GH)(class extends c.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=(0,c.yM)(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=(0,c.yM)(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){(0,n.c)(this)}disconnectedCallback(){(0,n.d)(this)}renderActionsStart(){const{el:i}=this;return(0,o.g)(i,s)?(0,c.h)("div",{class:p},(0,c.h)("slot",{name:s})):null}renderActionsEnd(){const{el:i}=this;return(0,o.g)(i,d)?(0,c.h)("div",{class:m},(0,c.h)("slot",{name:d})):null}render(){const{iconFlipRtl:i}=this,t=(0,o.b)(this.el),e=this.iconStart?(0,c.h)("calcite-icon",{class:b,flipRtl:"both"===i||"start"===i,icon:this.iconStart,key:"icon-start",scale:(0,a.g)(this.scale)}):null,n=this.iconEnd?(0,c.h)("calcite-icon",{class:y,flipRtl:"both"===i||"end"===i,icon:this.iconEnd,key:"icon-end",scale:(0,a.g)(this.scale)}):null,{description:r}=this;return(0,c.h)(c.AA,null,(0,c.h)("div",{class:{["icon-position--".concat(this.iconPosition)]:!0,["icon-type--".concat(this.iconType)]:!0}},(0,c.h)("div",{class:{[l]:!0,[o.C.rtl]:"rtl"===t}},this.renderActionsStart(),(0,c.h)("div",{"aria-controls":I,"aria-expanded":(0,o.t)(this.expanded),class:h,id:w,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},(0,c.h)("div",{class:k},e,(0,c.h)("div",{class:u},(0,c.h)("span",{class:g},this.heading),r?(0,c.h)("span",{class:v},r):null),n),(0,c.h)("calcite-icon",{class:x,icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:(0,a.g)(this.scale)})),this.renderActionsEnd()),(0,c.h)("section",{"aria-labelledby":w,class:f,id:I},(0,c.h)("slot",null))))}keyDownHandler(i){if(i.target===this.el)switch(i.key){case" ":case"Enter":this.emitRequestedItem(),i.preventDefault()}}updateActiveItemOnChange(i){const[t]=i.composedPath(),e=(0,o.c)(this.el,"calcite-accordion");t===e&&(this.determineActiveItem(e.selectionMode,i.detail.requestedAccordionItem),i.stopPropagation())}accordionItemSyncHandler(i){const[t]=i.composedPath(),e=this.el;if(e.parentElement===t)return;const c=(0,o.c)(e,"calcite-accordion");t===c&&(e.iconPosition=c.iconPosition,e.iconType=c.iconType,e.scale=c.scale,i.stopPropagation())}determineActiveItem(i,t){switch(i){case"multiple":this.el===t&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===t&&!this.expanded;break;case"single-persist":this.expanded=this.el===t}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return".icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function C(){if("undefined"===typeof customElements)return;["calcite-accordion-item","calcite-icon"].forEach((i=>{switch(i){case"calcite-accordion-item":customElements.get(i)||customElements.define(i,A);break;case"calcite-icon":customElements.get(i)||(0,r.d)()}}))}C();const E=A,S=C}}]);
//# sourceMappingURL=8865.dced0cdc.chunk.js.map