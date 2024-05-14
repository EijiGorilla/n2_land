/*! For license information please see 6670.dd426b55.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[6670],{6670:(e,t,i)=>{i.r(t),i.d(t,{CalciteModal:()=>q,defineCustomElement:()=>Z});var a=i(33850),n=i(38244),o=i(66151),s=i(63233),r=i(33150),l=i(46609),c=i(78995),d=i(1314),h=i(30769),m=i(9339),p=i(36177),u=i(66530),v=i(37065);const f="modal",g="title",b="header",x="footer",k="scrim",y="back",z="close",w="secondary",C="primary",E="container",_="container--open",O="content",M="content--no-footer",L="content-bottom",S="content-top",B="slotted-in-shell",D="modal--opening-idle",T="modal--opening-active",F="modal--closing-idle",H="modal--closing-active",P="x",I="content",W="content-bottom",V="content-top",j="header",A="back",R="secondary",N="primary",G=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteModalBeforeClose=(0,a.yM)(this,"calciteModalBeforeClose",6),this.calciteModalClose=(0,a.yM)(this,"calciteModalClose",6),this.calciteModalBeforeOpen=(0,a.yM)(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=(0,a.yM)(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=(0,l.c)("mutation",(()=>this.handleMutationObserver())),this.cssVarObserver=(0,l.c)("mutation",(()=>{this.updateSizeCssVars()})),this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}this.opened=!1,this.removeOverflowHiddenClass()},this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!(0,o.g)(this.el,[A,N,R])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,o.e)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,o.e)(e)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.escapeDisabled=!1,this.scale="m",this.width="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}onMessagesChange(){}async componentWillLoad(){await(0,h.s)(this),(0,r.a)(this),this.open&&requestAnimationFrame((()=>this.openModal()))}componentDidLoad(){(0,r.s)(this)}connectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),null===(t=this.cssVarObserver)||void 0===t||t.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),(0,n.c)(this),(0,d.c)(this),(0,h.c)(this),(0,s.c)(this)}disconnectedCallback(){var e,t;this.removeOverflowHiddenClass(),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.cssVarObserver)||void 0===t||t.disconnect(),(0,n.d)(this),(0,s.d)(this),(0,d.d)(this),(0,h.d)(this),this.slottedInShell=!1}render(){return(0,a.h)(a.AA,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},(0,a.h)("div",{class:{[E]:!0,[_]:this.opened,[B]:this.slottedInShell}},(0,a.h)("calcite-scrim",{class:k,onClick:this.handleOutsideClose}),this.renderStyle(),(0,a.h)("div",{class:{[f]:!0},ref:this.setTransitionEl},(0,a.h)("div",{class:b},this.renderCloseButton(),(0,a.h)("header",{class:g},(0,a.h)("slot",{name:b}))),this.renderContentTop(),(0,a.h)("div",{class:{[O]:!0,[M]:!this.hasFooter},ref:e=>this.modalContent=e},(0,a.h)("slot",{name:I})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?(0,a.h)("div",{class:x,key:"footer"},(0,a.h)("span",{class:y},(0,a.h)("slot",{name:A})),(0,a.h)("span",{class:w},(0,a.h)("slot",{name:R})),(0,a.h)("span",{class:C},(0,a.h)("slot",{name:N}))):null}renderContentTop(){return(0,a.h)("div",{class:S,hidden:!this.hasContentTop},(0,a.h)("slot",{name:V,onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return(0,a.h)("div",{class:L,hidden:!this.hasContentBottom},(0,a.h)("slot",{name:W,onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:(0,a.h)("button",{"aria-label":this.messages.close,class:z,key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:e=>this.closeButtonEl=e},(0,a.h)("calcite-icon",{icon:P,scale:(0,m.g)(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return(0,a.h)("style",null,".".concat(E," {\n              ").concat(this.docked&&this.cssWidth?"align-items: center !important;":"","\n            }\n            .").concat(f," {\n              block-size: ").concat(this.cssHeight?this.cssHeight:"auto"," !important;\n              ").concat(this.cssWidth?"inline-size: ".concat(this.cssWidth," !important;"):"","\n              ").concat(this.cssWidth?"max-inline-size: ".concat(this.cssWidth," !important;"):"","\n              ").concat(this.docked?"border-radius: var(--calcite-border-radius) !important;":"","\n            }\n            @media screen and (max-width: ").concat(this.cssWidth,") {\n              .").concat(E," {\n                ").concat(this.docked?"align-items: flex-end !important;":"","\n              }\n              .").concat(f," {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ").concat(this.docked?"":"block-size: 100% !important;","\n                ").concat(this.docked?"":"border-radius: 0 !important;","\n                ").concat(this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":"","\n              }\n            }\n          "))}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,r.c)(this),(0,o.f)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}async scrollContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:t,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=t))}onBeforeOpen(){this.transitionEl.classList.add(T),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(D,T),this.calciteModalOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.transitionEl.classList.add(H),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove(F,H),this.calciteModalClose.emit(),(0,s.d)(this)}toggleModal(e){this.ignoreOpenChange||(e?this.openModal():this.closeModal())}handleOpenedChange(e){var t,i;((0,c.o)(this),e)?null===(t=this.transitionEl)||void 0===t||t.classList.add(D):null===(i=this.transitionEl)||void 0===i||i.classList.add(F)}openModal(){this.el.addEventListener("calciteModalOpen",this.openEnd),this.opened=!0;const e=(0,o.g)(this.el,j),t=(0,o.g)(this.el,I);this.titleId=(0,o.m)(e),this.contentId=(0,o.m)(t),this.slottedInShell||(this.initialOverflowCSS=document.documentElement.style.overflow,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-app-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-app-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-app-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-app-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width=s][docked]) .container{align-items:flex-end}}:host([width=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width=m][docked]) .container{align-items:flex-end}}:host([width=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind=info]) .modal{border-color:var(--calcite-ui-info)}:host([kind=success]) .modal{border-color:var(--calcite-ui-success)}:host([kind=warning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-modal",{open:[1540],opened:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],width:[513],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],hasContentTop:[32],hasContentBottom:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],scrollContent:[64]},[[8,"keydown","handleEscape"]]]);function U(){if("undefined"===typeof customElements)return;["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,G);break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-scrim":customElements.get(e)||(0,v.d)()}}))}U();const q=G,Z=U},9339:(e,t,i)=>{function a(e){return"l"===e?"m":"s"}i.d(t,{g:()=>a})},38244:(e,t,i)=>{i.d(t,{c:()=>l,d:()=>c});var a=i(33850),n=i(46609);const o=new Set;let s;const r={childList:!0};function l(e){s||(s=(0,n.c)("mutation",d)),s.observe(e.el,r)}function c(e){o.delete(e.el),d(s.takeRecords()),s.disconnect();for(const[t]of o.entries())s.observe(t,r)}function d(e){e.forEach((e=>{let{target:t}=e;(0,a.xE)(t)}))}},36177:(e,t,i)=>{i.d(t,{I:()=>h,d:()=>m});var a=i(33850),n=i(66151),o=i(46609);const s="flip-rtl",r={},l={},c={s:16,m:24,l:32};async function d(e){let{icon:t,scale:i}=e;const n=c[i],o=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?"i".concat(e):e}(t),s="F"===o.charAt(o.length-1),d=s?o.substring(0,o.length-1):o,h="".concat(d).concat(n).concat(s?"F":"");if(r[h])return r[h];l[h]||(l[h]=fetch((0,a.K3)("./assets/icon/".concat(h,".json"))).then((e=>e.json())).catch((()=>(console.error('"'.concat(h,'" is not a valid calcite-ui-icon name')),""))));const m=await l[h];return r[h]=m,m}const h=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:i,scale:o,textLabel:r}=this,l=(0,n.b)(e),d=c[o],h=!!r,m=[].concat(i||"");return(0,a.h)(a.AA,{"aria-hidden":(0,n.t)(!h),"aria-label":h?r:null,role:h?"img":null},(0,a.h)("svg",{"aria-hidden":"true",class:{[s]:"rtl"===l&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(d," ").concat(d),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((e=>"string"===typeof e?(0,a.h)("path",{d:e}):(0,a.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!a.Z5.isBrowser||!e||!i)return;const n=await d({icon:e,scale:t});e===this.icon&&(this.pathData=n)}waitUntilVisible(e){this.intersectionObserver=(0,o.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function m(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,h)}))}m()},33150:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>l,c:()=>c,s:()=>r});var a=i(33850);const n=new WeakMap,o=new WeakMap;function s(e){o.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function l(e){return o.get(e)}async function c(e){if(await l(e),a.Z5.isBrowser)return(0,a.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},66530:(e,t,i)=>{i.d(t,{L:()=>o,d:()=>s});var a=i(33850),n=i(54964);const o=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:i,scale:o,text:s,type:r,value:l}=this,c=e.id||(0,n.g)(),d=t?this.getInlineSize(o):this.getSize(o),h=.45*d,m="0 0 ".concat(d," ").concat(d),p="determinate"===r,u=2*h*Math.PI,v=l/100*u,f=u-v,g=Math.floor(l),b={"aria-valuenow":g,"aria-valuemin":0,"aria-valuemax":100,complete:100===g},x={r:h,cx:d/2,cy:d/2},k={"stroke-dasharray":"".concat(v," ").concat(f)};return(0,a.h)(a.AA,{"aria-label":i,id:c,role:"progressbar",...p?b:{}},(0,a.h)("div",{class:"loader__svgs"},(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:m},(0,a.h)("circle",{...x})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:m},(0,a.h)("circle",{...x})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:m,...p?{style:k}:{}},(0,a.h)("circle",{...x}))),s&&(0,a.h)("div",{class:"loader__text"},s),p&&(0,a.h)("div",{class:"loader__percentage"},l))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function s(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,o)}))}s()},78995:(e,t,i)=>{i.d(t,{o:()=>s});var a=i(33850);function n(e){return"opened"in e?e.opened:e.open}function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(t?e[e.transitionProp]:n(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:n(e))?e.onOpen():e.onClose()}function s(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,a.wj)((()=>{if(e.transitionEl){var i;const{transitionDuration:a,transitionProperty:s}=getComputedStyle(e.transitionEl),r=a.split(","),l=null!==(i=r[s.split(",").indexOf(e.openTransitionProp)])&&void 0!==i?i:r[0];if("0s"===l)return void o(e,t);const c=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",d),e.transitionEl.removeEventListener("transitionend",h),e.transitionEl.removeEventListener("transitioncancel",h),o(e,t)}),1e3*parseFloat(l));function d(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&(clearTimeout(c),e.transitionEl.removeEventListener("transitionstart",d),(t?e[e.transitionProp]:n(e))?e.onBeforeOpen():e.onBeforeClose())}function h(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&((t?e[e.transitionProp]:n(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",h),e.transitionEl.removeEventListener("transitioncancel",h))}e.transitionEl.addEventListener("transitionstart",d),e.transitionEl.addEventListener("transitionend",h),e.transitionEl.addEventListener("transitioncancel",h)}}))}},37065:(e,t,i)=>{i.d(t,{S:()=>p,d:()=>u});var a=i(33850),n=i(1314),o=i(30769),s=i(46609),r=i(66151),l=i(66530);const c="scrim",d="content",h=72,m=480,p=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,s.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,r.w)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,n.c)(this),(0,o.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){var e;(0,n.d)(this),(0,o.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{class:c},t?(0,a.h)("calcite-loader",{label:i.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,a.h)("div",{class:d,hidden:!e},(0,a.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=m?"l":"m"}handleResize(){var e;const{loaderEl:t,el:i}=this;t&&(this.loaderScale=this.getScale(null!==(e=Math.min(i.clientHeight,i.clientWidth))&&void 0!==e?e:0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]}]);function u(){if("undefined"===typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,p);break;case"calcite-loader":customElements.get(e)||(0,l.d)()}}))}u()},30769:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>m,s:()=>l,u:()=>d});var a=i(33850),n=i(1314);const o={};function s(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await c(e,e.effectiveLocale),r(e)}async function c(e,t){if(!a.Z5.isBrowser)return{};const{el:i}=e,r=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i="".concat(t,"_").concat(e);return o[i]||(o[i]=fetch((0,a.K3)("./assets/".concat(t,"/t9n/messages_").concat(e,".json"))).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),o[i]}((0,n.g)(t,"t9n"),r)}async function d(e,t){e.defaultMessages=await c(e,t),r(e)}function h(e){e.onMessagesChange=p}function m(e){e.onMessagesChange=void 0}function p(){r(this)}}}]);
//# sourceMappingURL=6670.dd426b55.chunk.js.map