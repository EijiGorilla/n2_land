"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[8103],{8103:(e,l,t)=>{t.d(l,{previewSymbol2D:()=>E});var n=t(51995),i=t(86950),o=t(10064),a=t(82272),s=t(17842),u=t(79563),c=t(37817),d=t(69157),r=t(81283);const h="picture-fill",m="picture-marker",v="simple-fill",p="simple-line",f="simple-marker",y="text",w="Aa",g=c.b_.size,b=c.b_.maxSize,k=c.b_.maxOutlineSize,x=c.b_.lineWidth,z=225,L=document.createElement("canvas");function M(e,l){const t=L.getContext("2d"),n=[];return l&&(l.weight&&n.push(l.weight),l.size&&n.push(l.size+"px"),l.family&&n.push(l.family)),t.font=n.join(" "),t.measureText(e).width}const F=7.2/2.54,C=72/2.54;function S(e){if(0===e.length)return 0;if(e.length>2){const l=(0,s.Wz)(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*l;case"in":return 72*t*l;case"pc":return 12*t*l;case"mm":return t*F*l;case"cm":return t*C*l}}return parseFloat(e)}function Z(e){const l=null===e||void 0===e?void 0:e.size;return{width:null!=l&&"object"==typeof l&&"width"in l?(0,s.F2)(l.width):null,height:null!=l&&"object"==typeof l&&"height"in l?(0,s.F2)(l.height):null}}function _(e,l){return e>l?"dark":"light"}async function E(e,l){var t;const{shapeDescriptor:n,size:i,renderOptions:z}=function(e,l){var t,n;const i="number"==typeof(null===l||void 0===l?void 0:l.size)?null===l||void 0===l?void 0:l.size:null,o=null!=i?(0,s.F2)(i):null,a=null!=(null===l||void 0===l?void 0:l.maxSize)?(0,s.F2)(l.maxSize):null,d=null!=(null===l||void 0===l?void 0:l.rotation)?l.rotation:"angle"in e?e.angle:null,r=(0,u._M)(e);let z=(0,u.mx)(e);"dark"!==j(e,245)||(null===l||void 0===l?void 0:l.ignoreWhiteSymbols)||(z={width:.75,...z,color:"#bdc3c7"});const L={shape:null,fill:r,stroke:z,offset:[0,0]};(null===(t=z)||void 0===t?void 0:t.width)&&(z.width=Math.min(z.width,k));const F=(null===(n=z)||void 0===n?void 0:n.width)||0;let C=null!=(null===l||void 0===l?void 0:l.size)&&(null==(null===l||void 0===l?void 0:l.scale)||(null===l||void 0===l?void 0:l.scale)),_=0,E=0,D=!1;switch(e.type){case f:{const t=e.style,{width:n,height:i}=Z(l),u=n===i&&null!=n?n:null!=o?o:Math.min((0,s.F2)(e.size),a||b);switch(_=u,E=u,t){case"circle":L.shape={type:"circle",cx:0,cy:0,r:.5*u},C||(_+=F,E+=F);break;case"cross":L.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[_,.5*E]},{command:"M",values:[.5*_,0]},{command:"L",values:[.5*_,E]}]};break;case"diamond":L.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[.5*_,0]},{command:"L",values:[_,.5*E]},{command:"L",values:[.5*_,E]},{command:"Z",values:[]}]},C||(_+=F,E+=F);break;case"square":L.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]},C||(_+=F,E+=F),d&&(D=!0);break;case"triangle":L.shape={type:"path",path:[{command:"M",values:[.5*_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]},C||(_+=F,E+=F),d&&(D=!0);break;case"x":L.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,E]},{command:"M",values:[_,0]},{command:"L",values:[0,E]}]},d&&(D=!0);break;case"path":L.shape={type:"path",path:e.path||""},C||(_+=F,E+=F),d&&(D=!0),C=!0}break}case p:{var O;const{width:e,height:t}=Z(l),n=null!=t?t:null!=o?o:F,i=null!=e?e:x;z&&(z.width=n),_=i,E=n;const a=(null===L||void 0===L||null===(O=L.stroke)||void 0===O?void 0:O.cap)||"butt",s="round"===a;C=!0,L.stroke&&(L.stroke.cap="butt"===a?"square":a),L.shape={type:"path",path:[{command:"M",values:[s?n/2:0,E/2]},{command:"L",values:[s?_-n/2:_,E/2]}]};break}case h:case v:{var q;const e="object"==typeof(null===l||void 0===l?void 0:l.symbolConfig)&&!(null===l||void 0===l||null===(q=l.symbolConfig)||void 0===q||!q.isSquareFill),{width:t,height:n}=Z(l);_=!e&&t!==n||null==t?null!=o?o:g:t,E=!e&&t!==n||null==n?_:n,C||(_+=F,E+=F),C=!0,L.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.JZ.fill[0];break}case m:{const t=Math.min((0,s.F2)(e.width),a||b),n=Math.min((0,s.F2)(e.height),a||b),{width:i,height:u}=Z(l),c=i===u&&null!=i?i:null!=o?o:Math.max(t,n),r=t/n;_=r<=1?Math.ceil(c*r):c,E=r<=1?c:Math.ceil(c/r),L.shape={type:"image",x:-Math.round(_/2),y:-Math.round(E/2),width:_,height:E,src:e.url||""},d&&(D=!0);break}case y:{const t=e,n=(null===l||void 0===l?void 0:l.overrideText)||t.text||w,i=t.font,{width:u,height:c}=Z(l),d=null!=c?c:null!=o?o:Math.min((0,s.F2)(i.size),a||b),r=M(n,{weight:i.weight,size:d,family:i.family}),h=/[\uE600-\uE6FF]/.test(n);_=null!==u&&void 0!==u?u:h?d:r,E=d;let m=.25*S((i?d:0).toString());h&&(m+=5),L.shape={type:"text",text:n,x:t.xoffset||0,y:t.yoffset||m,align:"middle",alignBaseline:t.verticalAlignment,decoration:i&&i.decoration,rotated:t.rotated,kerning:t.kerning},L.font=i&&{size:d,style:i.style,decoration:i.decoration,weight:i.weight,family:i.family};break}}return{shapeDescriptor:L,size:[_,E],renderOptions:{node:null===l||void 0===l?void 0:l.node,scale:C,opacity:null===l||void 0===l?void 0:l.opacity,rotation:d,useRotationSize:D,effectView:null===l||void 0===l?void 0:l.effectView,ariaLabel:null===l||void 0===l?void 0:l.ariaLabel}}}(e,l);if(!n.shape)throw new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,l){const t=l.fill,n=e.color;if("pattern"===(null===t||void 0===t?void 0:t.type)&&n&&e.type!==h){const e=await(0,u.Od)(t.src,n.toCss(!0));t.src=e,l.fill=t}}(e,n),await async function(e,l,t,n){var i,o,s;if(!("font"in e)||!e.font||"text"!==l.shape.type)return;try{await(0,a.mx)(e.font)}catch{}const{width:u}=Z(n),c=/[\uE600-\uE6FF]/.test(l.shape.text);null!=u||c||(t[0]=M(l.shape.text,{weight:null===(i=l.font)||void 0===i?void 0:i.weight,size:null===(o=l.font)||void 0===o?void 0:o.size,family:null===(s=l.font)||void 0===s?void 0:s.family}))}(e,n,i,l);const L=[[n]];if("object"==typeof(null===l||void 0===l?void 0:l.symbolConfig)&&null!==l&&void 0!==l&&null!==(t=l.symbolConfig)&&void 0!==t&&t.applyColorModulation){const e=.6*i[0];L.unshift([{...n,offset:[-e,0],fill:(0,c.dc)(n.fill,-.3)}]),L.push([{...n,offset:[e,0],fill:(0,c.dc)(n.fill,.3)}]),i[0]+=2*e,z.scale=!1}return"text"===e.type&&function(e,l,t,n,i){var o;if(null!=e.haloColor&&null!=e.haloSize){var a;null!==(a=i.masking)&&void 0!==a||(i.masking=t.map((()=>[])));const o=(0,s.F2)(e.haloSize);n[0]+=o,n[1]+=o,t.unshift([{...l,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*r.c9,height:n[1]+2*r.c9},fill:[255,255,255],stroke:null},{...l,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*r.c9,n[1]+=2*r.c9,t.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.F2)(e.borderLineSize)}}]),null===(o=i.masking)||void 0===o||o.unshift([]))}(e,n,L,i,z),(0,d.wh)(L,i,z)}function j(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z;const t=(0,u._M)(e),o=(0,u.mx)(e),a=!t||"type"in t?null:new n.Z(t),s=null!==o&&void 0!==o&&o.color?new n.Z(null===o||void 0===o?void 0:o.color):null,c=a?_((0,i.EX)(a),l):null,d=s?_((0,i.EX)(s),l):null;return d?c?c===d?c:l>=z?"light":"dark":d:c}}}]);
//# sourceMappingURL=8103.4907b3ec.chunk.js.map