"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[8035],{77372:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(27366),i=(r(59486),r(11582)),o=r(17768),s=r(46784),a=r(92026),c=r(49861),l=r(89125),d=(r(84936),r(93169),r(69912)),u=r(25243),g=r(96866),p=r(848);let h=class extends((0,i.J)(s.wq)){constructor(e){super(e),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(e){return this.heading===e.heading&&this.tilt===e.tilt&&(0,a._W)(this.position,e.position)&&this.width===e.width&&this.height===e.height}};(0,n._)([(0,c.Cb)({readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),(0,n._)([(0,c.Cb)({type:p.Z}),(0,g.B)()],h.prototype,"position",void 0),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],h.prototype,"heading",void 0),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],h.prototype,"tilt",void 0),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],h.prototype,"width",void 0),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],h.prototype,"height",void 0),h=(0,n._)([(0,d.j)("esri.analysis.SlicePlane")],h);const m=h},11316:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>g});var n,i,o=r(30168),s=r(41012),a=r(95276),c=r(58406),l=r(98634),d=r(64201),u=r(4760);function g(e){const t=new d.kG,{vertex:r,fragment:g,attributes:p,varyings:h}=t;return(0,s.Sv)(r,e),p.add(u.T.POSITION,"vec3"),p.add(u.T.UV0,"vec2"),h.add("vUV","vec2"),r.code.add((0,l.H)(n||(n=(0,o.Z)(["void main(void) {\nvUV = uv0;\ngl_Position = proj * view * vec4(position, 1.0);\n}"])))),g.uniforms.add(new a.N("backgroundColor",(e=>e.backgroundColor)),new a.N("gridColor",(e=>e.gridColor)),new c.p("gridWidth",(e=>e.gridWidth))),g.code.add((0,l.H)(i||(i=(0,o.Z)(["void main() {\nconst float LINE_WIDTH = 1.0;\nvec2 uvScaled = vUV * gridWidth;\nvec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\nvec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\ngrid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\ngrid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\nfloat gridFade = max(grid.x, grid.y);\nfloat gridAlpha = gridColor.a * gridFade;\nfragColor =\nvec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\nvec4(gridColor.rgb, 1.0) * gridAlpha;\n}"])))),t}const p=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},96866:(e,t,r)=>{r.d(t,{B:()=>p});var n=r(10064),i=r(9997),o=r(80292),s=r(35995),a=r(71907),c=r(33397),l=r(25265),d=r(49861),u=r(22892),g=r(53283);function p(e){var t;const r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,n)=>{const i=function(e,t,r){var n;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){const n=(0,c.Oe)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,g.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer(t,i,a,c){if(null===c||void 0===c||!c.resources)return"string"==typeof t?void(i[a]=(0,g.t)(t,c)):void(i[a]=t.write({},c));const d=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),p=(0,g.t)(d,{...c,verifyItemRelativeUrls:null!==c&&void 0!==c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},g.M.NO),b=n.type!==String&&(!(0,o.l)(this)||(null===c||void 0===c?void 0:c.origin)&&this.originIdOf(r)>(0,l.M9)(c.origin)),v={object:this,propertyName:r,value:t,targetUrl:p,dest:i,targetPropertyName:a,context:c,params:e};null!==c&&void 0!==c&&c.portalItem&&p&&!(0,s.YP)(p)?b&&null!==e&&void 0!==e&&e.contentAddressed?h(v):b?function(e){var t;const{context:r,targetUrl:n,params:i,value:o,dest:a,targetPropertyName:c}=e;if(!r.portalItem)return;const l=r.portalItem.resourceFromPath(n),d=f(o,n,r),g=(0,u.B)(d),p=(0,s.Ml)(l.path),b=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;g===p?(r.resources&&m({...e,resource:l,content:d,compress:b,updates:r.resources.toUpdate}),a[c]=n):h(e)}(v):function(e){let{context:t,targetUrl:r,dest:n,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[i]=r)}(v):null!==c&&void 0!==c&&c.portalItem&&(null==p||null!=(0,g.i)(p)||(0,s.jc)(p)||b)?h(v):i[a]=p}}}}(e,t,r);switch(null!==(n=null===e||void 0===e?void 0:e.type)&&void 0!==n?n:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=g.b;return{read:e,write:t}}}}(e,t,n);for(const e of r){const r=(0,d.CJ)(t,e,n);for(const e in i)r[e]=i[e]}}}function h(e){var t,r,o,c;const{targetUrl:l,params:d,value:p,context:h,dest:b,targetPropertyName:v}=e;if(!h.portalItem)return;const M=(0,g.p)(l),I=f(p,l,h);if(null!==d&&void 0!==d&&d.contentAddressed&&"json"!==I.type)return void(null===(t=h.messages)||void 0===t||t.push(new n.Z("persistable:contentAddressingUnsupported",'Property "'.concat(v,'" is trying to serializing a resource with content of type ').concat(I.type," with content addressing. Content addressing is only supported for json resources."),{content:I})));const y=null!==d&&void 0!==d&&d.contentAddressed&&"json"===I.type?(0,i.F)(I.jsonString):null!==(r=null===M||void 0===M?void 0:M.filename)&&void 0!==r?r:(0,a.DO)(),w=(0,s.v_)(null!==(o=null===d||void 0===d?void 0:d.prefix)&&void 0!==o?o:null===M||void 0===M?void 0:M.prefix,y),C="".concat(w,".").concat((0,u.B)(I));if(null!==d&&void 0!==d&&d.contentAddressed&&h.resources&&"json"===I.type){var N;const e=null!==(N=h.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===C})))&&void 0!==N?N:h.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===C}));if(e)return void(b[v]=e.resource.itemRelativeUrl)}const T=h.portalItem.resourceFromPath(C);(0,s.jc)(l)&&h.resources&&h.resources.pendingOperations.push((0,s.gi)(l).then((e=>{T.path="".concat(w,".").concat((0,u.B)({type:"blob",blob:e})),b[v]=T.itemRelativeUrl})).catch((()=>{})));const A=null!==(c=null===d||void 0===d?void 0:d.compress)&&void 0!==c&&c;h.resources&&m({...e,resource:T,content:I,compress:A,updates:h.resources.toAdd}),b[v]=T.itemRelativeUrl}function m(e){let{object:t,propertyName:r,updates:n,resource:i,content:o,compress:s}=e;n.push({resource:i,content:o,compress:s,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function f(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},80292:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>n})},22892:(e,t,r)=>{r.d(t,{B:()=>i});var n=r(35995);function i(e){return o[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,n.Ml)(e);return c[t]||s}(e.url)}(e)]||a}const o={},s="text/plain",a=o[s],c={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in c)o[c[l]]=l},12350:(e,t,r)=>{r.d(t,{o:()=>m});var n=r(51995),i=r(94172),o=r(12400),s=r(3319),a=r(38978),c=r(35284),l=r(83639),d=r(40508),u=r(70619),g=r(56529),p=r(58901),h=r(99034);class m extends c.Z{constructor(e,t){const r=(0,a.J0)(t),o=r?s.QG:s.cf,c=o*s.Mr,d=s.cf,u={renderOccluded:g.yD.OccludeAndTransparent,isDecoration:!0},h=new p.U({...u,width:o}),m=new p.U({...u,width:c}),b=new p.U({...u,width:d});super({view:e,...l.X9,...f({isCorner:r,unfocusedMaterial:h,focusedMaterial:m,outlineMaterial:b})}),this._themeHandle=(0,i.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=n.Z.toUnitRGBA(e);h.setParameters({color:t}),m.setParameters({color:t}),b.setParameters({color:t})}),i.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}function f(e){let{isCorner:t,unfocusedMaterial:r,focusedMaterial:n,outlineMaterial:i}=e;const c=t?[(0,o.al)(1,0,0),(0,o.al)(0,0,0),(0,o.al)(0,1,0)]:[(0,o.al)(1,0,0),(0,o.al)(-1,0,0)];return{renderObjects:[new d.r((0,u.rh)(r,c),h.Q9.Unfocused|a.Sc),new d.r((0,u.rh)(n,c),h.Q9.Focused|a.Sc),new d.r((0,u.rh)(i,c),a.vc)],collisionType:{type:"line",paths:[c]},radius:t?s.Qf:s.yy,state:a.Sc}}},37947:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(51995),i=r(86950),o=r(94172),s=r(38978),a=r(35284),c=r(83639),l=r(40508),d=r(91526),u=r(40779),g=r(70619),p=r(56529),h=r(4760),m=r(66156),f=r(58901),b=r(99034);class v extends a.Z{constructor(e,t){const r=new m.j({transparent:!0,writeDepth:!1,renderOccluded:p.yD.Opaque,isDecoration:!0}),s=c.rotateManipulatorDefaults.calloutWidth,a=new f.U({width:s,renderOccluded:p.yD.OccludeAndTransparent,isDecoration:!0});super({view:e,...M({imageMaterial:r,calloutMaterial:a})}),this._currentTexture=null,this._themeHandle=(0,o.YP)((()=>e.effectiveTheme.accentColor),(e=>{const o=(0,i.G)(e,.5),s=(0,i.mj)(e),c=this._currentTexture,l=t(o,s);r.setParameters({textureId:l.texture.id}),a.setParameters({color:n.Z.toUnitRGBA(e)}),this._currentTexture=l,null===c||void 0===c||c.release()}),o.nn)}destroy(){var e;this._themeHandle.remove(),null!==(e=this._currentTexture)&&void 0!==e&&e.release(),super.destroy()}}function M(e){let{imageMaterial:t,calloutMaterial:r}=e;const{focusMultiplier:n,calloutLength:i,discRadius:o}=c.rotateManipulatorDefaults,a=o*n,p=(e,t)=>{const r=[0,1,2,2,3,0];return new u.Z(t,[[h.T.POSITION,new d.a([i-e,-e,0,i+e,-e,0,i+e,e,0,i-e,e,0],r,3,!0)],[h.T.UV0,new d.a([0,0,1,0,1,1,0,1],r,2,!0)]])},m=(0,g.rh)(r,[[0,0,0],[i-o,0,0]]),f=(0,g.rh)(r,[[0,0,0],[i-a,0,0]]),v=s.do;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[i,0,0]},focusMultiplier:n,radius:o,renderObjects:[new l.r(p(o,t),b.Q9.Unfocused|v),new l.r(m,b.Q9.Unfocused|v),new l.r(p(a,t),b.Q9.Focused|v),new l.r(f,b.Q9.Focused|v)],state:v}}},61074:(e,t,r)=>{r.d(t,{K:()=>N,l:()=>n});var n,i,o=r(51995),s=r(86950),a=r(94172),c=r(29134),l=r(7025),d=r(68700),u=r(32035),g=r(12400),p=r(51378),h=r(3319),m=r(38978),f=r(35284),b=r(40508),v=r(68401),M=r(70619),I=r(56529),y=r(66832),w=r(58901),C=r(99034);(i=n||(n={}))[i.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",i[i.CENTER_ON_ARROW=1]="CENTER_ON_ARROW";class N extends f.Z{constructor(e,t){const r=new w.U({width:1,renderOccluded:I.yD.OccludeAndTransparent,isDecoration:!0}),n=new y.E({cullFace:v.Vr.Back,renderOccluded:I.yD.Opaque,isDecoration:!0}),i=new y.E({cullFace:v.Vr.Back,renderOccluded:I.yD.Opaque,isDecoration:!0}),c=new y.E({cullFace:v.Vr.Back,renderOccluded:I.yD.Opaque,isDecoration:!0}),l=new y.E({writeDepth:!1,cullFace:v.Vr.Front,renderOccluded:I.yD.Transparent,isDecoration:!0});super({view:e,...T({offsetMode:t,tubeMaterial:n,tipMaterial:i,capMaterial:c,outlineMaterial:l,calloutMaterial:r})}),this._themeHandle=(0,a.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=(0,s.mj)(e),a=o.Z.toUnitRGBA(e),d=o.Z.toUnitRGBA(t),u=o.Z.toUnitRGBA(o.Z.blendColors(t,e,.4)),g=o.Z.toUnitRGBA(o.Z.blendColors(t,e,.14));r.setParameters({color:a}),n.setParameters({color:g}),i.setParameters({color:d}),c.setParameters({color:u}),l.setParameters({color:a})}),a.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}function T(e){let{offsetMode:t,tubeMaterial:r,tipMaterial:i,capMaterial:o,outlineMaterial:s,calloutMaterial:a}=e;const c=t===n.CENTER_ON_CALLOUT?h.Eu:0,l=[(0,g.al)(c,0,-h.C7/2),(0,g.al)(c,0,h.C7/2)],d=function(e,t){const r=(0,u.f)((0,g.Ue)(),e[e.length-1],e[e.length-2]);(0,u.n)(r,r),(0,u.j)(r,r,h.GW),(0,u.g)(r,r,e[e.length-1]);{const t=(0,u.f)((0,g.Ue)(),e[0],e[1]);return(0,u.n)(t,t),(0,u.j)(t,t,h.GW),(0,u.g)(t,t,e[0]),[t,...e,r]}}(l),p=A({vertices:l,padding:0,materials:{tube:r,tip:i,cap:o}}),f=A({vertices:l,padding:h.K_,materials:{tube:s,tip:s,cap:s}}),v=(0,M.rh)(a,[[c,0,0],[c-h.Eu,0,0]]),I=(0,M.rh)(a,[[c,0,0],[c-h.Eu,0,0]]);return{renderObjects:[...p.normal.map((e=>new b.r(e,C.Q9.Unfocused|m.do))),...f.normal.map((e=>new b.r(e,C.Q9.Unfocused|m.do))),new b.r(v,C.Q9.Unfocused|m.do|m.Df),...p.focused.map((e=>new b.r(e,C.Q9.Focused|m.do))),...f.focused.map((e=>new b.r(e,C.Q9.Focused|m.do))),new b.r(I,C.Q9.Focused|m.do|m.Df)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[d]},collisionPriority:1,radius:h.tv,state:m.do}}function A(e){let{vertices:t,padding:r,materials:n}=e;const i=e=>{const i=t.slice(0),o=(0,u.f)(p.WM.get(),i[0],i[1]);(0,u.n)(o,o);const s=(0,u.f)(p.WM.get(),i[i.length-1],i[i.length-2]);if((0,u.n)(s,s),r>0){const e=(0,u.j)((0,g.Ue)(),s,-r);i[i.length-1]=(0,u.g)(e,e,i[i.length-1]);const t=(0,u.j)((0,g.Ue)(),o,-r);i[0]=(0,u.g)(t,t,i[0])}const a=e?h.XC:1,m=h.GW*a,f=h.tv*a,b=(0,c.yR)(p.MP.get());if(r>0){const e=m/4,t=(0,u.s)(p.WM.get(),0,e,0),n=1+r/e;(0,c.Iu)(b,b,t),(0,c.bA)(b,b,(0,u.s)(p.WM.get(),n,n,n)),(0,c.Iu)(b,b,(0,u.j)(t,t,-1/n))}const v=(0,c.yR)((0,l.Ue)()),I=(0,g.al)(0,1,0),y=(0,c.en)((0,l.Ue)(),(0,d.b0)(p.vD.get(),I,s));y[12]=i[i.length-1][0],y[13]=i[i.length-1][1],y[14]=i[i.length-1][2],(0,c.Jp)(y,y,b);const w=n.tube,C=function(e,t,r){const n=[],i=12;for(let o=0;o<i;o++){const t=o/i*2*Math.PI;n.push([Math.cos(t)*e,Math.sin(t)*e])}return(0,M.x2)(r,n,t,[],[],!1)}(h.sz*(e?h.L0:1)+r,i,w);C.transformation=v;const N=[C],T=n.tip,A=(0,M.QL)(T,m,f,24,!1,!1,!0);A.transformation=y,N.push(A);const j=n.cap,_=(0,M.QL)(j,m,f,24,!1,!0,!1);_.transformation=y,N.push(_);const O=(0,c.en)((0,l.Ue)(),(0,d.b0)(p.vD.get(),I,o));return O[12]=i[0][0],O[13]=i[0][1],O[14]=i[0][2],(0,c.Jp)(O,O,b),N.push(A.instantiate({transformation:O})),N.push(_.instantiate({transformation:O})),N};return{normal:i(!1),focused:i(!0)}}},32909:(e,t,r)=>{r.d(t,{CB:()=>o,bL:()=>s,ku:()=>i});var n=r(86950);const i=(0,r(86361).al)(0,0,0,.04);function o(e){let{accentColor:t}=e;return(0,n.Ch)(t,.5)}function s(e){let{accentColor:t}=e;return(0,n.Ch)(t,.7)}},3319:(e,t,r)=>{r.d(t,{AN:()=>d,C7:()=>w,Ci:()=>O,Eu:()=>y,G0:()=>p,GI:()=>s,GW:()=>I,K_:()=>C,L0:()=>c,Lf:()=>f,Mr:()=>a,P3:()=>u,QG:()=>N,Qf:()=>j,Wp:()=>g,XC:()=>l,Yn:()=>A,ZE:()=>h,ae:()=>W,cf:()=>T,fg:()=>b,sz:()=>v,tW:()=>o,tv:()=>M,v9:()=>m,yy:()=>_});var n=r(93169),i=r(16889);const o=(0,n.Z)("mac")?"Meta":"Control",s="Shift",a=2,c=1.15,l=1.15,d=2500,u=.02,g=Math.cos((0,i.Vl)(45)),p=Math.cos((0,i.Vl)(5)),h=.95,m=.3,f=2,b=1,v=3,M=11,I=22.5,y=40,w=48,C=2.25,N=4,T=1,A=.3,j=6,_=4,O=1600,W=.4},38978:(e,t,r)=>{r.d(t,{do:()=>ye,Df:()=>Ne,aZ:()=>we,ww:()=>Ce,zY:()=>ie,Lw:()=>pe,fT:()=>re,R_:()=>fe,i3:()=>me,j6:()=>ee,Rd:()=>oe,TA:()=>ne,J0:()=>he,lR:()=>Oe,Hq:()=>be,m3:()=>Me,oP:()=>Ie,Sc:()=>je,vc:()=>_e,Q3:()=>te,EC:()=>ae,A5:()=>ce,wj:()=>le,tF:()=>se});r(59486);var n=r(77372),i=(r(93169),r(32718)),o=r(16889),s=r(17842),a=r(29134),c=r(32035),l=r(12400),d=r(79803),u=r(14320),g=r(82218),p=r(55652),h=r(40885),m=r(40927),f=r(51378),b=r(32909),v=r(3319),M=r(33906),I=r(83639),y=r(33837),w=r(19093),C=r(86361),N=r(52168),T=r(70619),A=r(56529),j=r(37081),_=r(33559),O=r(23620),W=r(93822),P=r(12594),R=r(64642),D=r(11983),S=r(98634),L=r(82144),U=r(31132),E=r(7566),Z=r(27627),x=r(11316),H=r(8548),G=r(36207);class z extends S.K{constructor(){super(...arguments),this.backgroundColor=(0,C.al)(1,0,0,.5),this.gridColor=(0,C.al)(0,1,0,.5),this.gridWidth=4}}class V extends U.A{initializeProgram(e){return new Z.$(e.rctx,V.shader.get().build(this.configuration),E.i)}initializePipeline(){return(0,G.sm)({blending:(0,G.wK)(H.zi.ONE,H.zi.ONE,H.zi.ONE_MINUS_SRC_ALPHA,H.zi.ONE_MINUS_SRC_ALPHA),depthTest:{func:H.wb.LESS},colorWrite:G.BK})}}V.shader=new L.J(x.S,(()=>r.e(8492).then(r.bind(r,18492))));class B extends D.c{constructor(e){super(e,new k),this.produces=new Map([[W.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>e===j.H_.Color]]),this._configuration=new _.m}createBufferWriter(){return new P.G(R.W1)}createGLMaterial(e){return new Y(e)}getConfiguration(){return this._configuration}}class Y extends O.Z{constructor(e){super(e),this.ensureTechnique(V,null)}beginSlot(){return this.technique}}class k extends z{constructor(){super(...arguments),this.renderOccluded=A.yD.Occlude,this.isDecoration=!1}}class Q extends N._{constructor(e){super(e),this._material=null,this._renderOccluded=A.yD.OccludeAndTransparent,this._gridWidth=1,this._gridColor=(0,C.al)(1,0,0,1),this._backgroundColor=(0,C.al)(1,0,0,1),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){(0,w.c)(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){(0,w.c)(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new B(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){null!=this._material&&e(this._material)}createGeometries(e){if(null!=this._material){const t=(0,T.g7)(this._material);e.addGeometry(t)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){null!=this._material&&this._material.setParameters(this._materialParameters)}}var X,F,J=r(91643),q=r(81703),K=r(99034),$=r(848);r(53866);function ee(e,t,r,n,i,o,s,a){return function(e,t,r,n,i,o){const s=(0,c.m)(e,t),a=f.WM.get(),l=f.WM.get();switch(n===Ce.HORIZONTAL_OR_VERTICAL?Math.abs(s)>v.Wp?Ce.HORIZONTAL:Ce.VERTICAL:n){case Ce.VERTICAL:{const n=Math.abs(s)<=v.G0?e:r.viewUp;(0,c.b)(a,n,t),(0,c.c)(l,t);break}case Ce.HORIZONTAL:(0,c.b)(a,r.viewUp,t),(0,c.b)(l,t,a);break;case Ce.TILTED:{const n=Math.abs(s)<=v.G0?t:r.viewUp;(0,c.b)(a,n,e),(0,c.b)(l,e,a);break}}const d=(0,c.b)(f.WM.get(),a,l);(0,c.m)(d,r.viewForward)>0&&(0,c.j)(l,l,-1),(0,c.n)(i,a),(0,c.n)(o,l)}(t,s.worldUpAtPosition(e,f.WM.get()),i,o,a.basis1,a.basis2),(0,c.j)(a.basis1,a.basis1,r),(0,c.j)(a.basis2,a.basis2,n),(0,c.c)(a.origin,e),(0,p.my)(a.basis2,a.basis1,a.origin,a.plane),a}function te(e,t,r,n,i,o){const s=(0,c.c)(f.WM.get(),i.origin);(0,c.g)(s,s,(0,c.j)(f.WM.get(),i.basis1,e.direction[0]<0?1:-1)),(0,c.g)(s,s,(0,c.j)(f.WM.get(),i.basis2,e.direction[1]<0?1:-1));const a=(0,c.l)(i.basis1),l=(0,c.l)(i.basis2),d=(0,c.f)(f.WM.get(),r,s),u=(0,c.f)(f.WM.get(),t,s);let p=0,h=0;if(he(e)){const t=pe(i),r=pe(o);p=a-.5*e.direction[0]*(0,c.m)(i.basis1,u)/a,h=l-.5*e.direction[1]*(0,c.m)(i.basis2,u)/l;const n=r/t;p*=n,h*=n}const m=p+.5*e.direction[0]*(0,c.m)(i.basis1,d)/a,b=h+.5*e.direction[1]*(0,c.m)(i.basis2,d)/l,M=(0,c.j)(f.WM.get(),i.basis1,m/a),I=(0,c.j)(f.WM.get(),i.basis2,b/l);(m<=0||ue(o.origin,M,n)<=v.Ci)&&(0,c.c)(M,o.basis1),(b<=0||ue(o.origin,I,n)<=v.Ci)&&(0,c.c)(I,o.basis2);const y=(0,c.c)(f.WM.get(),s);return(0,c.g)(y,y,(0,c.j)(f.WM.get(),M,e.direction[0]<0?-1:1)),(0,c.g)(y,y,(0,c.j)(f.WM.get(),I,e.direction[1]<0?-1:1)),(0,g.f)(y,M,I,o)}function re(e,t){return v.ae*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function ne(e,t,r,n){const i=(0,c.b)(f.WM.get(),t,r);return(0,c.b)(i,i,t),(0,p.Yq)(e,i,n)}function ie(e,t){return(0,I.Aq)(e.basis1,e.basis2,e.origin,t)}function oe(e,t,r,n){const i=t.worldUpAtPosition(e.origin,f.WM.get()),o=f.WM.get();switch(r){case we.HEADING:(0,c.c)(o,i);break;case we.TILT:(0,c.c)(o,e.basis1)}return(0,p.Yq)(e.origin,o,n)}function se(e,t,r,n){const i=de(r,X.NEGATIVE_X),o=f.MP.get();(0,a.jI)(o,t,i.edge*Math.PI/2);const d=(0,c.n)(f.WM.get(),i.basis);let u=(0,c.j)(f.WM.get(),d,i.direction*n.computeScreenPixelSizeAt(i.position)*v.Eu);(0,c.g)(u,u,i.position);const p=n.projectToRenderScreen(u,(0,s.Wv)(f.WM.get())),h=function(e,t){const[r,n,i,o]=e.viewport,s=Math.min(i,o)/16;let a=!0;return t[0]<r+s?(t[0]=r+s,a=!1):t[0]>r+i-s&&(t[0]=r+i-s,a=!1),t[1]<n+s?(t[1]=n+s,a=!1):t[1]>n+o-s&&(t[1]=n+o-s,a=!1),a}(n,p);(0,q.Bh)(n,p,Te),(0,c.n)(Te.direction,Te.direction);const m=f.WM.get();!h&&(0,g.i)(r,Te,m)&&(u=m),o[12]=0,o[13]=0,o[14]=0,e.modelTransform=o,e.renderLocation=(0,l.d9)(u),h?e.state|=Ne:e.state&=~Ne}function ae(e,t,r,n){const i=(0,c.l)(n.basis1),o=(0,c.l)(n.basis2),s=ge(n),l=pe(n),d=(0,c.s)(f.WM.get(),0,0,0);(0,c.g)(d,(0,c.j)(f.WM.get(),n.basis1,t.direction[0]),(0,c.j)(f.WM.get(),n.basis2,t.direction[1])),(0,c.g)(d,n.origin,d);let u=0,g=1;if(he(t))1===t.direction[0]&&-1===t.direction[1]?u=Ae:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=l;else{const e=0!==t.direction[0]?1:2;u=1===e?Ae:0,g=(1===e?o:i)-s}const p=(0,a.QO)(f.MP.get(),u);(0,a.bA)(p,p,(0,c.s)(f.WM.get(),g,g,g)),(0,a.Jp)(p,r,p),p[12]=0,p[13]=0,p[14]=0,e.modelTransform=p,e.renderLocation=d}function ce(e,t,r,n){const i=n.worldUpAtPosition(r.origin,f.WM.get()),o=de(r,X.POSITIVE_X),s=(0,a.QO)(f.MP.get(),o.edge*Math.PI/2);(0,a.lM)(s,s,-ve(r,i)),(0,a.Jp)(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=o.position}function le(e,t,r){const n=de(r,X.POSITIVE_Y),i=(0,a.QO)(f.MP.get(),n.edge*Math.PI/2);(0,a.lM)(i,i,Ae),(0,a.Jp)(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=n.position}function de(e,t){switch(t){case X.POSITIVE_X:return{basis:e.basis1,direction:1,position:(0,c.g)(f.WM.get(),e.origin,e.basis1),edge:t};case X.POSITIVE_Y:return{basis:e.basis2,direction:1,position:(0,c.g)(f.WM.get(),e.origin,e.basis2),edge:t};case X.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:(0,c.f)(f.WM.get(),e.origin,e.basis1),edge:t};case X.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:(0,c.f)(f.WM.get(),e.origin,e.basis2),edge:t}}}function ue(e,t,r){const n=r.projectToRenderScreen((0,c.g)(f.WM.get(),e,t),(0,s.Wv)(f.WM.get())),i=r.projectToRenderScreen((0,c.f)(f.WM.get(),e,t),(0,s.Wv)(f.WM.get()));return(0,c.q)((0,c.f)(n,n,i))}function ge(e){const t=(0,c.l)(e.basis1),r=(0,c.l)(e.basis2);return v.Yn*Math.min(t,r)}function pe(e){return ge(e)}function he(e){return 0!==e.direction[0]&&0!==e.direction[1]}function me(e){return new y.r({view:e,attached:!1,color:(0,b.bL)(e.effectiveTheme),width:v.fg,renderOccluded:A.yD.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]],isDecoration:!0})}function fe(e){return new Q({view:e,attached:!1,backgroundColor:b.ku,gridColor:(0,b.CB)(e.effectiveTheme),gridWidth:4,renderOccluded:A.yD.OccludeAndTransparent,isDecoration:!0})}function be(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new n.Z;if(null==e)return null;const{renderCoordsHelper:s}=t,a=s.fromRenderCoords(e.origin,new $.Z({spatialReference:t.spatialReference}));if(null==a)return null;const l=(0,d.tryProjectWithZConversion)(a,r);if(null==l)return null;i.position=l;const u=2*(0,c.l)(e.basis1),g=2*(0,c.l)(e.basis2),p=J.Z.renderUnitScaleFactor(t.spatialReference,r);i.width=u*p,i.height=g*p;const h=s.worldUpAtPosition(e.origin,f.WM.get());return i.tilt=(0,o.BV)(ve(e,h)),i.heading=s.headingAtPosition(e.origin,e.basis1)-90,i}function ve(e,t){return(0,m.cp)(t,e.basis2,e.basis1)+Ae}function Me(e,t){if(null==(null===e||void 0===e?void 0:e.position))return null;const r=(0,M.G)(e.position,t.spatialReference,t.elevationProvider);if(null==r)return null;const n=J.Z.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),i=e.width*n,o=e.height*n;return{position:r,heading:e.heading,tilt:e.tilt,renderWidth:i,renderHeight:o}}function Ie(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,g.a)();if(null==e)return null;const s=function(e,t,r,n,s,a){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,g.a)();return a.toRenderCoords(e,l.origin)?(a.worldBasisAtPosition(l.origin,u.R.X,l.basis1),a.worldBasisAtPosition(l.origin,u.R.Y,l.basis2),(0,p.my)(l.basis2,l.basis1,l.origin,l.plane),(0,g.r)(l,-(0,o.Vl)(t),(0,g.n)(l),l),(0,g.r)(l,(0,o.Vl)(r),l.basis1,l),(0,c.j)(l.basis1,l.basis1,n/2),(0,c.j)(l.basis2,l.basis2,s/2),(0,g.u)(l),l):(i.Z.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error("Failed to project slice plane position, projection from ".concat(e.spatialReference.wkid," is not supported")),null)}(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,n);return r.tiltEnabled||null==s||function(e,t,r){const n=t.worldUpAtPosition(e.origin,f.WM.get()),i=e.basis1,o=ve(e,n),s=Math.round(o/Ae)*Ae;(0,g.r)(e,s-o,i,r)}(s,t.renderCoordsHelper,s),s}(F=X||(X={}))[F.POSITIVE_X=0]="POSITIVE_X",F[F.POSITIVE_Y=1]="POSITIVE_Y",F[F.NEGATIVE_X=2]="NEGATIVE_X",F[F.NEGATIVE_Y=3]="NEGATIVE_Y";const ye=K.jg.Custom1;var we,Ce;!function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"}(we||(we={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(Ce||(Ce={}));const Ne=K.jg.Custom2,Te=(0,h.Ue)(),Ae=Math.PI/2,je=K.jg.Custom1,_e=K.jg.Custom2;function Oe(e){return null!=("building-scene-3d"===e.type?e:null)}},11526:(e,t,r)=>{r.d(t,{O:()=>d,s:()=>u});const n="theme-style";function i(e,t){return function(e,t){const r=new Image(t,t);return r.src=e,r}(function(e){const t=(new XMLSerializer).serializeToString(e);return"data:image/svg+xml;base64,".concat(btoa(t))}(o(function(e){const t=e.split(",")[1],r=atob(t);return(new DOMParser).parseFromString(r,"image/svg+xml")}(e),t)),t.size)}function o(e,t){let{accentColor:r,contrastColor:i}=t;const o=r.toHex(),s=r.a,a=i.toHex(),c=i.a,l=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(n);return l&&(l.innerHTML="\n      .contrast-fill { fill: ".concat(a,"; fill-opacity: ").concat(c,"; }\n      .contrast-stroke { stroke: ").concat(a,"; stroke-opacity: ").concat(c,";  }\n      .accent-fill { fill: ").concat(o,"; fill-opacity: ").concat(s,"; }\n      .accent-stroke { stroke: ").concat(o,"; stroke-opacity:  ").concat(s,"; }")),e}const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==",a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";var c=r(1487);const l=64;function d(e,t){const{accentColor:r,contrastColor:n,preMultiplyAlpha:o}=t;return e.fromData("heading-rotate:[accent:".concat(r,",contrast:").concat(n,",size:").concat(l,"]"),(()=>new c.x(i(s,{accentColor:r,contrastColor:n,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}function u(e,t){const{accentColor:r,contrastColor:n,preMultiplyAlpha:o}=t;return e.fromData("tilt-rotate:[accent:".concat(r,",contrast:").concat(n,",size:").concat(l,"]"),(()=>new c.x(i(a,{accentColor:r,contrastColor:n,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}}}]);
//# sourceMappingURL=8035.0ac0edd2.chunk.js.map