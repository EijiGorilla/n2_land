"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[60115],{97942:(e,t,n)=>{function r(e){let t,n,r=[],i=!1;return function(){for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return i&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(o,r)||(n=e.apply(this,o),t=this,r=o,i=!0),n}}n.d(t,{H:()=>r})},87888:(e,t,n)=>{n.d(t,{Kj:()=>i,Sn:()=>r});const r={redo:"r",undo:"z",center:"Alt",constraint:"Shift",cancel:"Escape",delete:["Backspace","Delete"],complete:"Enter",vertexAdd:"f",pan:" "},i={toggle:"Control"}},44179:(e,t,n)=>{n.d(t,{Hk:()=>m,M8:()=>O,SP:()=>k,Vy:()=>Z,aU:()=>C,f2:()=>ne,jg:()=>H,kt:()=>P,ku:()=>A,wp:()=>ie});var r=n(63780),i=n(16889),s=n(13611),o=n(6644),l=n(32035),a=n(12400),u=n(19093),c=n(86361),h=n(38516),d=n(15559),p=n(55652),f=n(23470),g=n(80064),v=n(38054),y=n(55793),L=n(94163);class b{intersect(e){return Y(this,e)}closestPoints(e){return[this.closestTo(e)]}}class m extends b{constructor(e){super(),this.point=e}equals(e){return this===e||ie(e)&&(0,l.j)(this.point,e.point)}closestTo(){return(0,v.d9)(this.point)}}class x extends b{constructor(e,t,n){super(),this.start=e,this.end=t,this.lineLike={start:e,end:t,type:n}}equals(e){return this===e||se(e)&&this.lineLike.type===e.lineLike.type&&(0,l.j)(this.start,e.start)&&(0,l.j)(this.end,e.end)}closestTo(e){const t=(0,y.ZE)(e,this.lineLike);return(0,v.uo)(t)}}class A extends x{constructor(e,t){super(e,t,L.SP.LINE)}}class S extends x{constructor(e,t){super(e,t,L.SP.RAY)}}class w extends b{constructor(e){super(),this.constraints=e}equals(e){return this===e||re(e)&&(0,r.fS)(this.constraints,e.constraints,((e,t)=>e.equals(t)))}closestTo(e){let t,n=1/0;for(const r of this.constraints){const i=r.closestTo(e),s=(0,l.a)(e,i);s<n&&(n=s,t=i)}return t?(0,v.d9)(t):e}closestPoints(e){return this.constraints.flatMap((t=>t===this?[]:t.closestPoints(e)))}}class P extends b{constructor(e,t){super(),this.center=e,this.radius=t}equals(e){return this===e||ae(e)&&this.center[0]===e.center[0]&&this.center[1]===e.center[1]&&this.radius===e.radius}closestTo(e){const t=(0,y.sc)(e,this.center,this.radius);return(0,v.uo)(t)}}class E extends b{constructor(e,t){super(),this.center=e,this.radius=t}equals(e){return this===e||ue(e)&&(0,l.j)(this.center,e.center)&&this.radius===e.radius}closestTo(e){const t=(0,y.sc)(e,this.center,this.radius);return t[2]=this.center[2],(0,v.uo)(t)}asCircle(){return new N((0,v.d9)(this.center),this.radius,(0,v.al)(0,0,1))}}class N extends b{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;super(),this.center=e,this.radius=t,this.normal=n,this.slicePlane=r}equals(e){return this===e||ce(e)&&(0,l.j)(this.center,e.center)&&(0,l.j)(this.normal,e.normal)&&this.radius===e.radius}closestTo(e){const{center:t,radius:n}=this;(0,p.nF)(this.getPlane(_),e,U);const r=(0,l.z)(U,U,t),i=(0,l.p)(r);if((0,y.hA)(i,0))return(0,v.d9)(e);const s=n/Math.sqrt(i),o=(0,l.r)((0,a.Ue)(),t,r,s),{slicePlane:u}=this;if(u&&!(0,y.zf)(u,o)){var c;const t=J(u,this);return null!==(c=null===t||void 0===t?void 0:t.closestTo(e))&&void 0!==c?c:(0,v.d9)(e)}return(0,v.uo)(o)}getPlane(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.Ue)();return(0,p.Yq)(this.center,this.normal,e)}}const U=(0,a.Ue)(),_=(0,p.Ue)();class k extends b{constructor(e){super(),this.z=e}equals(e){return this===e||oe(e)&&this.z===e.z}closestTo(e){return(0,v.uo)((0,a.al)(e[0],e[1],this.z))}getPlane(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.Ue)();return(0,l.s)(T,0,0,this.z),(0,p.Yq)(T,a.eG,e)}}const T=(0,a.Ue)();class z extends b{constructor(e,t,n){super(),this.start=e,this.end=t,this.planeLike={start:(0,v.eR)(e),end:(0,v.eR)(t),type:n}}equals(e){return this===e||le(e)&&this.planeLike.type===e.planeLike.type&&(0,l.j)(this.start,e.start)&&(0,l.j)(this.end,e.end)}closestTo(e){return(0,v.uo)((0,y.z9)(e,this.planeLike))}closestEndTo(e){const{start:t,end:n}=this.planeLike;return Math.sign((0,s.AK)((0,s.$X)(j,n,t),(0,s.$X)(R,(0,v.eR)(e),t)))>0?this.end:this.start}getPlane(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.Ue)();const t=(0,l.c)(M,this.end);return t[2]+=1,(0,p.zk)(this.start,this.end,t,e)}getSlicePlane(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.Ue)();const{start:t,end:n,type:r}=this.planeLike;if(r===y.Jk.PLANE)return;const i=(0,l.s)(M,t[0],t[1],0),s=(0,l.s)(q,n[0],n[1],0),o=(0,l.f)(q,s,i);return(0,p.Yq)(i,o,e),e}}const j=(0,o.Ue)(),R=(0,o.Ue)(),M=(0,a.Ue)(),q=(0,a.Ue)();class C extends z{constructor(e,t){super(e,t,y.Jk.HALF_PLANE)}}class H extends z{constructor(e,t){super(e,t,y.Jk.PLANE)}}class I extends b{constructor(e,t){super(),this.sphere=(0,f.k)(e,t)}equals(e){return this===e||he(e)&&(0,f.l)(this.sphere,e.sphere)}closestTo(e){const t=(0,f.p)(this.sphere,e,(0,a.Ue)());return(0,v.uo)(t)}get center(){return(0,f.g)(this.sphere)}get radius(){return this.sphere[3]}}class O extends b{constructor(e,t,n){super(),this.start=e,this.end=t,this.getZ=n,this.planeLike={start:(0,v.eR)(e),end:(0,v.eR)(t),type:y.Jk.PLANE}}equals(e){return this===e||de(e)&&(0,l.j)(this.start,e.start)&&(0,l.j)(this.end,e.end)&&this.getZ===e.getZ}closestTo(e){return function(e,t){var n;const r=(0,y.z9)(t,e.planeLike);return r[2]=null!==(n=e.getZ(r[0],r[1]))&&void 0!==n?n:pe,(0,v.uo)(r)}(this,e)}addIfOnTheGround(e,t){for(const r of t){var n;const t=null!==(n=this.getZ(r[0],r[1]))&&void 0!==n?n:0;(0,y.hA)(r[2],t)&&(r[2]=t,e.push(r))}}}class Z extends b{constructor(e,t,n,r,i){super(),this._origin=e,this._spatialReference=t,this._distanceMeters=n,this._elevationMeters=r,this._directionDegrees=i}equals(e){return this===e||function(e){return e instanceof Z}(e)&&(0,s.I6)(this._origin,e._origin)&&this._distanceMeters===e._distanceMeters&&this._elevationMeters===e._elevationMeters&&this._directionDegrees===e._directionDegrees}closestTo(e){var t;let[n,r,i]=e;if((0,s.t8)(F,n,r),null!=this._directionDegrees&&null!=this._distanceMeters)(0,d.TB)(F,this._origin,this._directionDegrees,this._distanceMeters,this._spatialReference);else if(null!=this._directionDegrees)!function(e,t,n,r,i){var s;let{azimuth:o,distance:l}=(0,d.cA)(D,t,r,i);null!==(s=o)&&void 0!==s||(o=0);let a=l*Math.cos((o-n)*h.Yr);a=Math.max(0,a),(0,d.TB)(e,t,n,a,i)}(F,this._origin,this._directionDegrees,F,this._spatialReference);else if(null!=this._distanceMeters){const{azimuth:e}=(0,d.cA)(G,this._origin,F,this._spatialReference);(0,d.TB)(F,this._origin,null!==e&&void 0!==e?e:0,this._distanceMeters,this._spatialReference)}return(0,v.Ue)(F[0],F[1],null!==(t=this._elevationMeters)&&void 0!==t?t:i)}}const F=[0,0],G=new d._q;const D=new d._q;function Y(e,t){if(re(e)){const n=[];for(const r of e.constraints){const e=r.intersect(t);e&&n.push(e)}return ne(n)}if(re(t))return Y(t,e);if(de(e))return $(e,t);if(de(t))return $(t,e);if(ie(e)){const{point:n}=e;if(ie(t))return(0,l.j)(n,t.point)?e:void 0;const r=t.closestTo(n);return(0,l.G)(r,n)?e:void 0}if(se(e)){if(ie(t))return Y(t,e);if(se(t))return ee((0,y.Au)(e.lineLike,t.lineLike));if(oe(t))return B(e,t);if(le(t))return ee((0,y.fK)(t.planeLike,e.lineLike));if(ae(t))return ee((0,y.CJ)(e.lineLike,t.center,t.radius));if(ce(t))return ee((0,y.UG)(e.lineLike,t));if(ue(t))return function(e,t){let{lineLike:n}=e,{center:r,radius:i}=t;const s=r[2];return ee((0,y.CJ)(n,r,i).filter((e=>(0,y.hA)(e[2],s))))}(e,t);if(he(t))return function(e,t){let{lineLike:n}=e,{sphere:r}=t;return ee((0,f.m)(r,n.start,n.end))}(e,t)}else if(oe(e)){if(ie(t)||se(t))return Y(t,e);if(oe(t))return function(e,t){return(0,y.hA)(e.z,t.z)?e:void 0}(e,t);if(le(t))return function(e,t){let{z:n}=e,{planeLike:r}=t;const[i,s]=r.start,[o,l]=r.end,a=(0,v.al)(i,s,n),u=(0,v.al)(o,l,n);return r.type===y.Jk.PLANE?new A(a,u):new S(a,u)}(e,t);if(ae(t))return function(e,t){const[n,r]=t.center;return new E((0,v.al)(n,r,e.z),t.radius)}(e,t);if(ce(t))return K(e,t);if(ue(t))return function(e,t){return(0,y.hA)(t.center[2],e.z)?t:void 0}(e,t);if(he(t))return function(e,t){let{center:n,radius:r}=t;const i=Math.abs(n[2]-e.z);if(i>r&&!(0,y.hA)(i,r))return;const s=(0,v.al)(n[0],n[1],e.z),o=Math.sqrt(r**2-i**2);return(0,y.hA)(o,0)?void 0:new E(s,o)}(e,t)}else if(le(e)){if(ie(t)||se(t)||oe(t))return Y(t,e);if(le(t))return Q((0,y.Nn)(e.planeLike,t.planeLike));if(ae(t))return Q((0,y.SD)(e.planeLike,t.center,t.radius));if(ce(t))return W(e,t);if(ue(t))return V(e,t);if(he(t))return X(e,t)}else if(ae(e)){if(ie(t)||se(t)||oe(t)||le(t))return Y(t,e);if(ae(t))return Q((0,y.Yf)((0,v.eR)(e.center),e.radius,(0,v.eR)(t.center),t.radius));if(ce(t))return;if(ue(t))return function(e,t){const n=(0,s.bI)((0,v.eR)(e.center),(0,v.eR)(t.center));return(0,y.hA)(n,0)&&(0,y.hA)(e.radius,t.radius)?t:te((0,y.Yf)((0,v.eR)(e.center),e.radius,(0,v.eR)(t.center),t.radius),t.center[2])}(e,t);if(he(t))return}else if(ce(e)){if(ie(t)||se(t)||oe(t)||le(t)||ae(t))return Y(t,e);if(ce(t))return;if(ue(t))return void t.asCircle();if(he(t))return}else if(ue(e)){if(ie(t)||se(t)||oe(t)||le(t)||ae(t)||ce(t))return Y(t,e);if(ue(t))return function(e,t){if(!(0,y.$7)(e.center,t.center))return;const n=(0,s.bI)((0,v.eR)(e.center),(0,v.eR)(t.center));return(0,y.hA)(n,0)&&(0,y.hA)(e.radius,t.radius)?e:te((0,y.Yf)((0,v.eR)(e.center),e.radius,(0,v.eR)(t.center),t.radius),e.center[2])}(t,e);if(he(t))return}else if(he(e)){if(ie(t)||se(t)||oe(t)||le(t)||ae(t)||ue(t))return Y(t,e);if(he(t))return}}const B=(()=>{const e=(0,p.Ue)();return(t,n)=>{const{start:r,end:i}=t;if((0,y.$7)(r,i)&&(0,y.hA)(r[2],n.z))return t;const s=(0,a.Ue)();return(0,p.fn)(n.getPlane(e),r,i,s)?new m((0,v.uo)(s)):void 0}})();const J=(()=>{const e=(0,c.Ue)(),t=(0,a.Ue)(),n=(0,a.Ue)();return(r,s,o)=>{const{normal:c,center:h,radius:d}=s;(0,g._F)(c,t,n);const f=(0,p.st)(r),L=d*(0,l.k)(f,t),b=d*(0,l.k)(f,n);(0,u.s)(e,h[0],h[1],h[2],1);const x=(0,u.g)(r,e),A=Math.hypot(L,b),S=(0,y.hA)(A,0);if((0,y.hA)((0,p.TE)(r,h),0)){if(S)return s;if((0,y.hA)(d,0))return!o||(0,y.zf)(o,h)?new m((0,v.d9)(h)):void 0;(0,l.b)(t,f,c),(0,l.n)(t,t);const e=new Array,n=(0,a.d9)(h);(0,l.r)(n,n,t,d),o&&!(0,y.zf)(o,n)||e.push(n);const r=(0,a.d9)(h);return(0,l.r)(r,r,t,-d),o&&!(0,y.zf)(o,r)||e.push(r),ee(e)}if(S)return;const w=-x/A;if(Math.abs(w)>1||(0,y.hA)(w,1))return;const P=Math.atan(L/b),E=(0,i.Kt)(w)-P,N=Math.PI-E,U=new Array,_=(0,a.Ue)();(0,l.r)(_,h,t,d*Math.cos(E)),(0,l.r)(_,_,n,d*Math.sin(E)),U.push(_);const k=(0,a.Ue)();return(0,l.r)(k,h,t,d*Math.cos(N)),(0,l.r)(k,k,n,d*Math.sin(N)),U.push(k),ee(o?(0,y.rq)(o,U):U)}})();const K=(()=>{const e=(0,p.Ue)();return(t,n)=>J(t.getPlane(e),n,n.slicePlane)})();const V=(()=>{const e=(0,p.Ue)();return(t,n)=>{let{center:r,radius:i}=n;const s=(0,y.SD)(t.planeLike,r,i),o=r[2];t.getSlicePlane(e);const l=new Array;for(const[a,u]of s){const t=[a,u,o];(0,y.zf)(e,t)&&l.push(t)}return ee(l)}})(),W=(()=>{const e=(0,p.Ue)(),t=(0,p.Ue)();return(n,r)=>J(n.getPlane(e),r,n.getSlicePlane(t))})(),X=(()=>{const e=(0,p.Ue)();return(t,n)=>{let{center:r,radius:i}=n;const s=t.getPlane(e),o=(0,p.jH)(s,r),u=Math.abs(o);if(u>i&&!(0,y.hA)(u,i))return;const c=(0,a.d9)((0,p.st)(s)),h=(0,l.r)((0,a.Ue)(),r,c,o),d=Math.sqrt(i**2-o**2);return(0,y.hA)(d,0)?new m((0,v.uo)((0,p.nF)(s,r,(0,a.Ue)()))):new N((0,v.uo)(h),d,c,t.getSlicePlane())}})();function $(e,t){const{planeLike:n,getZ:r}=e,i=new Array;if(ie(t))e.addIfOnTheGround(i,(0,y.hm)(n,t.point));else if(se(t))e.addIfOnTheGround(i,(0,y.fK)(n,t.lineLike));else if(ae(t))for(const[o,l]of(0,y.SD)(n,t.center,t.radius)){const e=r(o,l);null!=e&&i.push((0,a.al)(o,l,e))}else if(le(t)||de(t))for(const[o,l]of(0,y.Nn)(n,t.planeLike)){var s;const e=null!==(s=r(o,l))&&void 0!==s?s:pe;i.push((0,a.al)(o,l,e))}return ee(i)}function Q(e){return ne(e.map((e=>{let[t,n]=e;const r=(0,v.al)(t,n,0),i=(0,v.al)(t,n,1);return new A(r,i)})))}function ee(e){return ne(e.map((e=>e?new m((0,v.uo)(e)):void 0)))}function te(e,t){return ee(e.map((e=>{let[n,r]=e;return[n,r,t]})))}function ne(e){var t;if(0!==e.length)return 1===e.length?null!==(t=e[0])&&void 0!==t?t:void 0:new w(e.filter(r.pC))}function re(e){return e instanceof w}function ie(e){return e instanceof m}function se(e){return e instanceof x}function oe(e){return e instanceof k}function le(e){return e instanceof z}function ae(e){return e instanceof P}function ue(e){return e instanceof E}function ce(e){return e instanceof N}function he(e){return e instanceof I}function de(e){return e instanceof O}const pe=0},38054:(e,t,n)=>{n.d(t,{Ju:()=>p,SN:()=>d,Ue:()=>o,aK:()=>f,al:()=>u,d9:()=>c,eR:()=>a,j7:()=>h,uo:()=>l});var r=n(12400),i=n(55946),s=n(74509);function o(e,t,n){return(0,r.al)(e,t,n)}function l(e){return e}function a(e){return e}function u(e,t,n){return(0,r.al)(e,t,n)}function c(e){return(0,r.d9)(e)}function h(e,t,n){let{coordinateHelper:r,elevationInfo:i}=n;return e?d(r.vectorToDehydratedPoint(e,g),t,i):null}function d(e,t,n){var i,o;if(null==e)return null;if(null==t)return(0,r.al)(e.x,e.y,null!==(i=e.z)&&void 0!==i?i:0);if("2d"===t.type)return(0,r.al)(e.x,e.y,0);const l=null!==(o=(0,s.vQ)(t,e,n,s.jG))&&void 0!==o?o:0;return(0,r.al)(e.x,e.y,l)}function p(e,t){return(0,i.T)(e[0],e[1],e[2],t)}function f(e,t,n,r){let{z:o,m:l}=n;const{spatialReference:a,elevationInfo:u}=r;let c;if(null==o&&null==l)c=void 0;else if(null==t||"2d"===t.type)c=null!==o&&void 0!==o?o:void 0;else{var h;c=null!==(h=(0,s.zx)(t,e,a,s.jG,u))&&void 0!==h?h:0}const d=(0,i.T)(e[0],e[1],c,a);return null!=l&&(d.m=l,d.hasM=!0),d}const g=(0,i.T)(0,0,0,null)},76014:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(27366),i=n(51995),s=n(46784),o=n(49861),l=n(69912);let a=class extends s.wq{constructor(){super(...arguments),this.enabled=!0}};(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"enabled",void 0),a=(0,r._)([(0,l.j)("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")],a);let u=class extends s.wq{constructor(e){super(e),this.lineSnapper=new a,this.parallelLineSnapper=new a,this.rightAngleSnapper=new a,this.rightAngleTriangleSnapper=new a,this.shortLineThreshold=15,this.distance=5,this.pointThreshold=1e-6,this.intersectionParallelLineThreshold=1e-6,this.parallelLineThreshold=1e-6,this.verticalLineThresholdMeters=.3,this.touchSensitivityMultiplier=1.5,this.pointOnLineThreshold=1e-6,this.orange=new i.Z([255,127,0]),this.orangeTransparent=new i.Z([255,127,0,.5]),this.lineHintWidthReference=3,this.lineHintWidthTarget=3,this.lineHintFadedExtensions=.3,this.parallelLineHintWidth=2,this.parallelLineHintLength=24,this.parallelLineHintOffset=1.5,this.rightAngleHintSize=24,this.rightAngleHintOutlineSize=1.5,this.satisfiesConstraintScreenThreshold=1}};(0,r._)([(0,o.Cb)({type:a,constructOnly:!0,nonNullable:!0,json:{write:!0}})],u.prototype,"lineSnapper",void 0),(0,r._)([(0,o.Cb)({type:a,constructOnly:!0,nonNullable:!0,json:{write:!0}})],u.prototype,"parallelLineSnapper",void 0),(0,r._)([(0,o.Cb)({type:a,constructOnly:!0,nonNullable:!0,json:{write:!0}})],u.prototype,"rightAngleSnapper",void 0),(0,r._)([(0,o.Cb)({type:a,constructOnly:!0,nonNullable:!0,json:{write:!0}})],u.prototype,"rightAngleTriangleSnapper",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],u.prototype,"shortLineThreshold",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],u.prototype,"distance",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],u.prototype,"pointThreshold",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],u.prototype,"intersectionParallelLineThreshold",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],u.prototype,"parallelLineThreshold",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],u.prototype,"verticalLineThresholdMeters",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],u.prototype,"touchSensitivityMultiplier",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],u.prototype,"pointOnLineThreshold",void 0),(0,r._)([(0,o.Cb)({type:i.Z,nonNullable:!0})],u.prototype,"orange",void 0),(0,r._)([(0,o.Cb)({type:i.Z,nonNullable:!0})],u.prototype,"orangeTransparent",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],u.prototype,"lineHintWidthReference",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],u.prototype,"lineHintWidthTarget",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],u.prototype,"lineHintFadedExtensions",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],u.prototype,"parallelLineHintWidth",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:50},json:{write:!0}})],u.prototype,"parallelLineHintLength",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],u.prototype,"parallelLineHintOffset",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:46},json:{write:!0}})],u.prototype,"rightAngleHintSize",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:6},json:{write:!0}})],u.prototype,"rightAngleHintOutlineSize",void 0),(0,r._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],u.prototype,"satisfiesConstraintScreenThreshold",void 0),u=(0,r._)([(0,l.j)("esri.views.interactive.snapping.Settings.Defaults")],u);const c=new u},34019:(e,t,n)=>{n.d(t,{N:()=>r});class r{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.feature=e.feature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}},80371:(e,t,n)=>{var r;n.d(t,{B:()=>r}),function(e){e[e.FEATURE=1]="FEATURE",e[e.SELF=2]="SELF",e[e.ALL=3]="ALL"}(r||(r={}))},80151:(e,t,n)=>{n.d(t,{W:()=>d});var r=n(92026),i=n(66978),s=n(94172),o=n(70178),l=n(37818),a=n(74509),u=n(5693),c=n(34019),h=n(93463);function d(e){let{predicate:t=(()=>!0),snappingManager:n,snappingContext:l,updatingHandles:d,useZ:y=!0}=e;const L=new u.hM;if(null==n)return{snappingStep:[v,L],cancelSnapping:v};let b,m=null,x=null,A=null;const S=()=>{var e;m=(0,r.IM)(m),n.doneSnapping(),null!==(e=x)&&void 0!==e&&e.frameTask.remove(),x=null,b=(0,r.hw)(b),A=null},w=function(e,t,n){return(0,i.Ds)((async(r,i)=>{let{frameTask:s,point:l,scenePoint:a,context:u,event:c,delta:h,getLastState:d}=r;const p=await s.schedule((()=>e.snap({point:l,scenePoint:a,context:u,signal:i})),i);if(p.valid){let r=await s.schedule((()=>p.apply()),i);const a=d();null!=a.point&&l!==a.point&&(r=e.update({point:a.point,scenePoint:a.scenePoint,context:u})),null!=a.updatePoint&&(0,o.kg)(r,a.updatePoint)||(g(c.mapEnd,r,h,t),n.execute(c))}}))}(n,y,L);let P=null,E=null,N=null;return{snappingStep:[e=>{if(!t(e))return e;const{action:r}=e;if("start"===r){const{info:t}=e,r=function(e){return"3d"===e.type?e.resourceController.scheduler.registerTask(h.T8.SNAPPING):h.sq}(n.view);if(x=function(e,t,n){return{context:new c.N({editGeometryOperations:e.editGeometryOperations,elevationInfo:e.elevationInfo,pointer:e.pointer,vertexHandle:null!=t.info?t.info.handle:null,excludeFeature:e.excludeFeature,feature:e.feature,visualizer:e.visualizer}),originalPos:null!=t.snapOrigin?e.coordinateHelper.vectorToDehydratedPoint(t.snapOrigin):t.mapStart,originalScenePos:null!=t.scenePoints?t.scenePoints.sceneStart:null,frameTask:n}}(l,e,r),x.context.selfSnappingZ=null,!y&&null!=t){var o;const e=function(e,t){if(!e.hasZ())return null;const n=t.vertices;let r=null;for(const i of n){const t=e.getZ(i.pos);if(null!=r&&null!=t&&Math.abs(t-r)>1e-6)return null;null==r&&(r=t)}return r}(l.coordinateHelper,t.handle.component);null!=e&&(x.context.selfSnappingZ={value:e,elevationInfo:null!==(o=l.elevationInfo)&&void 0!==o?o:a.jG})}}if(null!=x){const{context:t,originalScenePos:o,originalPos:l}=x,{mapEnd:a,mapStart:u,scenePoints:c}=e,h=p(l,f(a,u)),v=f(u,l),L={...e,action:"update"},S=x.context,U=function(e,t){return null==e||null==t?null:p(e,f(t.sceneEnd,t.sceneStart))}(o,c),_=n.update({point:h,scenePoint:U,context:t});if(N=_,g(a,_,v,y),P=h,E=U,"end"!==r){const{frameTask:e}=x;null==m&&(m=new AbortController),A=t=>{d.addPromise((0,i.R8)(w({frameTask:e,event:L,context:S,point:h,scenePoint:U,delta:v,getLastState:()=>({point:P,scenePoint:E,updatePoint:t.forceUpdate?null:N})},m.signal)))},A({forceUpdate:!1}),null==b&&(b=(0,s.YP)((()=>n.options.effectiveEnabled),(()=>{var e;return null===(e=A)||void 0===e?void 0:e({forceUpdate:!0})})))}}return"end"===r&&S(),e},L],cancelSnapping:e=>(S(),e)}}function p(e,t){let[n,r,i]=t;const s=(0,l.WG)(e);return s.x+=n,s.y+=r,s.hasZ&&(s.z+=i),s}function f(e,t){const n=e.hasZ&&t.hasZ?e.z-t.z:0;return[e.x-t.x,e.y-t.y,n]}function g(e,t,n,r){let[i,s,o]=n;e.x=t.x+i,e.y=t.y+s,r&&e.hasZ&&t.hasZ&&(e.z=t.z+o)}function v(e){return e}},38561:(e,t,n)=>{n.d(t,{a:()=>u});var r=n(42537),i=n(90609),s=n(53397),o=n(5916),l=n(61309),a=n(41216);class u{draw(e,t){const n=this._getUniqueHints(e),u=this.sortUniqueHints(n),c=[];for(const r of u)r instanceof i.w&&c.push(this.visualizeIntersectionPoint(r,t)),r instanceof s.w&&c.push(this.visualizeLine(r,t)),r instanceof o.L&&c.push(this.visualizeParallelSign(r,t)),r instanceof a.y&&c.push(this.visualizeRightAngleQuad(r,t)),r instanceof l.n&&c.push(this.visualizePoint(r,t));return(0,r.AL)(c)}sortUniqueHints(e){return e}_getUniqueHints(e){const t=[];for(const n of e){let e=!0;for(const r of t)if(n.equals(r)){e=!1;break}e&&t.push(n)}return t}}},90609:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(32035),i=n(80371),s=n(55054);class o extends s.r{constructor(e,t){super(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.B.ALL),this.intersectionPoint=e}equals(e){return e instanceof o&&(0,r.j)(this.intersectionPoint,e.intersectionPoint)}}},53397:(e,t,n)=>{n.d(t,{w:()=>o});n(93169),n(32718);var r=n(32035),i=n(80371),s=n(55054);class o extends s.r{constructor(e,t,n,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i.B.ALL,o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],l=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];super(r,s),this.type=e,this.lineStart=t,this.lineEnd=n,this.fadeLeft=o,this.fadeRight=l}equals(e){return e instanceof o&&this.type===e.type&&(0,r.j)(this.lineStart,e.lineStart)&&(0,r.j)(this.lineEnd,e.lineEnd)&&this.fadeLeft===e.fadeLeft&&this.fadeRight===e.fadeRight}get length(){return(0,r.q)(this.lineStart,this.lineEnd)}}},5916:(e,t,n)=>{n.d(t,{L:()=>o});n(93169),n(32718);var r=n(32035),i=n(80371),s=n(55054);class o extends s.r{constructor(e,t,n){super(n,arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.B.ALL),this.lineStart=e,this.lineEnd=t}equals(e){return e instanceof o&&(0,r.j)(this.lineStart,e.lineStart)&&(0,r.j)(this.lineEnd,e.lineEnd)}}},61309:(e,t,n)=>{n.d(t,{n:()=>s});var r=n(32035),i=n(55054);class s extends i.r{constructor(e,t,n){super(t,n),this.point=e}equals(e){return e instanceof s&&(0,r.j)(this.point,e.point)}}},41216:(e,t,n)=>{n.d(t,{y:()=>o});n(93169),n(32718);var r=n(32035),i=n(80371),s=n(55054);class o extends s.r{constructor(e,t,n,r){super(r,arguments.length>4&&void 0!==arguments[4]?arguments[4]:i.B.ALL),this.previousVertex=e,this.centerVertex=t,this.nextVertex=n}equals(e){return e instanceof o&&(0,r.j)(this.previousVertex,e.previousVertex)&&(0,r.j)(this.centerVertex,e.centerVertex)&&(0,r.j)(this.nextVertex,e.nextVertex)}}},55054:(e,t,n)=>{n.d(t,{r:()=>r});class r{constructor(e,t){this.isDraped=e,this.domain=t}}},34356:(e,t,n)=>{n.d(t,{ze:()=>r,_j:()=>L,n0:()=>A,ML:()=>b,rh:()=>y,fG:()=>g,Ob:()=>x,lQ:()=>v,Bb:()=>f});var r,i=n(94172),s=n(92377),o=n(76672),l=n(86710),a=n(32035),u=n(55946),c=n(21149),h=n(51678),d=n(87888),p=n(38054);function f(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function g(e,t){return Math.sqrt(f(e,t))}function v(e,t){t.sort(((t,n)=>(0,a.a)(t.targetPoint,e)-(0,a.a)(n.targetPoint,e)))}function y(e,t,n){let{point:r,distance:i,returnEdge:a,vertexMode:h,coordinateHelper:{spatialReference:d},filter:p}=e;return n=null!=n?n.clone():new c.Z({where:"1=1"}),p&&(n.geometry=p.geometry,n.distance=p.distance,n.spatialRelationship=p.spatialRelationship,n.where=(0,o._)(n.where,p.where),n.timeExtent=(0,l.Ov)(n.timeExtent,p.timeExtent),n.objectIds=function(e,t){return e||t?t?e?Array.from((0,s.jV)(new Set(e),new Set(t))):t:e:null}(n.objectIds,p.objectIds)),{point:(0,u.T)(r[0],r[1],r[2],d.toJSON()),mode:t,distance:i,returnEdge:a,vertexMode:h,query:n.toJSON()}}function L(e,t,n){return{left:(0,p.j7)(e.leftVertex.pos,t,n),right:(0,p.j7)(e.rightVertex.pos,t,n)}}function b(e){return e.createQuery()}!function(e){e[e.TARGET=0]="TARGET",e[e.REFERENCE=1]="REFERENCE",e[e.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"}(r||(r={}));const m=Symbol("snapping-toggle");function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};const n=(0,i.YP)((()=>({view:e.view,snappingOptions:e.snappingOptions})),(n=>{let{view:r,snappingOptions:i}=n;if(e.removeHandles(m),!r||!i)return;const s=h.f.TOOL,o=[r.on("key-down",(e=>{e.key!==d.Kj.toggle||e.repeat||(i.enabledToggled=!0,t())}),s),r.on("key-up",(e=>{e.key===d.Kj.toggle&&(i.enabledToggled=!1,t())}),s),r.on("pointer-move",(e=>{const n=e.native.ctrlKey;i.enabledToggled!==n&&(i.enabledToggled=n,t())}),s)];e.addHandles(o,m)}),i.tX);e.addHandles(n)}function A(e){var t;return function(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass}(e)&&"utilityNetworks"in e&&!(null===(t=e.utilityNetworks)||void 0===t||!t.length)}},73840:(e,t,n)=>{n.d(t,{LH:()=>y,Lm:()=>f,n6:()=>v,uE:()=>r,yd:()=>L});var r,i=n(17768),s=n(47898),o=n(68860),l=n(13611),a=n(6644),u=n(32035),c=n(12400),h=n(5986),d=n(15559),p=n(92975);function f(e,t){if(null==e||null==t)return;const n=g(e,t);return null!=n?(0,s.GJ)(n,"radians","geographic"):void 0}!function(e){e.Absolute="absolute",e.Relative="relative",e.RelativeBilateral="relative-bilateral"}(r||(r={}));const g=(()=>{const e=(0,c.Ue)(),t=(0,c.Ue)();return(n,r)=>{var i,s;return(0,u.s)(e,n.x,n.y,null!==(i=n.z)&&void 0!==i?i:0),(0,u.s)(t,r.x,r.y,null!==(s=r.z)&&void 0!==s?s:0),v(e,t,n.spatialReference,r.spatialReference)}})(),v=(()=>{const e=(0,a.Ue)(),t=(0,c.Ue)(),n=(0,c.Ue)();return(r,i,s,c)=>{if((0,u.j)(r,i))return;const f=(0,d.Lc)(s),g=(0,d.Lc)(c);if(f&&g&&(0,p.fS)(f,g)&&(0,h.S)(r,s,t,f)&&(0,h.S)(i,c,n,g)){const{azimuth:e}=(0,d.cA)(b,t,n,f);return null!=e?(0,o.En)(e,"degrees","radians"):void 0}e[0]=i[0]-r[0],e[1]=i[1]-r[1];let v=(0,l.EU)(a.IO,e);return e[0]<0&&(v=m-v),v}})();const y=(()=>{const e=(0,c.Ue)();return function(t,n,r,i,l){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"geodesic";(0,u.c)(e,n);const c=L(l);if("geodesic"===a){const s=(0,d.Lc)(r);if(s&&(0,h.S)(e,r,e,s))return(0,d.TB)(t,e,c,i,s),t[2]=n[2],!!(0,h.S)(t,s,t,r)}const p=(0,s.hw)(c,"geographic","arithmetic"),f=(0,o.En)(p,"degrees","radians"),g=n[0]+i*Math.cos(f),v=n[1]+i*Math.sin(f),y=n[2];return(0,u.s)(t,g,v,y),!0}})();function L(e){return null!=e?(0,s.hw)((0,o.En)(e.value,e.unit,"degrees"),e.rotationType,"geographic"):void 0}const b=new d._q,m=2*Math.PI;new i.pE(-180,180)},55793:(e,t,n)=>{n.d(t,{$7:()=>w,Au:()=>x,CJ:()=>m,Jk:()=>U,Nn:()=>g,SD:()=>d,UG:()=>b,Yf:()=>A,ZE:()=>L,fK:()=>p,hA:()=>P,hm:()=>f,rq:()=>E,sc:()=>y,z9:()=>v,zf:()=>N});var r=n(16889),i=n(13611),s=n(6644),o=n(32035),l=n(12400),a=n(24204),u=n(55652),c=n(80064),h=n(94163);function d(e,t,n){let{start:r,end:o,type:l}=e;const a=[],u=(0,i.$X)(k,o,r),c=(0,i.$X)(T,r,t),h=(0,i.we)(u),d=2*(0,i.AK)(u,c),p=d*d-4*h*((0,i.we)(c)-n*n);if(0===p){const e=-d/(2*h);(l===U.PLANE||e>=0)&&a.push((0,i.od)((0,s.Ue)(),r,u,e))}else if(p>0){const e=Math.sqrt(p),t=(-d+e)/(2*h);(l===U.PLANE||t>=0)&&a.push((0,i.od)((0,s.Ue)(),r,u,t));const n=(-d-e)/(2*h);(l===U.PLANE||n>=0)&&a.push((0,i.od)((0,s.Ue)(),r,u,n))}return a}function p(e,t){const n=e.start,r=e.end,s=(0,i.$X)(k,r,n),u=(0,o.s)(j,-s[1],s[0],0),c=t.start,d=t.end,p=(0,o.z)(R,d,c),f=(0,o.k)(p,u),g=(0,o.s)(M,n[0],n[1],0),v=(0,o.z)(q,g,c),y=(0,o.k)(v,u),L=(0,a.bn)();if(Math.abs(f)<L)return Math.abs(y),[];const b=(0,o.r)(C,c,p,y/f);if(t.type===h.SP.RAY){const e=(0,o.z)(H,b,c);if((0,o.k)(e,p)<-L)return[]}if(e.type===U.HALF_PLANE){const e=(0,i.lu)(T,b,n);if((0,i.AK)(e,s)<-L)return[]}return[(0,l.d9)(b)]}function f(e,t){return function(e,t){let{start:n,end:r,type:i}=e;const s=(0,o.z)(z,t,n),u=(0,o.z)(j,r,n),c=(0,o.b)(R,u,s),d=(0,o.x)(c)/(0,o.x)(u),p=(0,a.bn)();if(d<p)switch(i){case h.SP.LINE:return[(0,l.d9)(t)];case h.SP.RAY:return(0,o.k)(u,s)<-p?[]:[(0,l.d9)(t)]}return[]}(S(O,t[2],e),t)}function g(e,t){return x(S(O,0,e),S(Z,0,t)).map((e=>{let[t,n]=e;return(0,s.al)(t,n)}))}function v(e,t){return L(e,S(O,e[2],t))}function y(e,t,n){const r=(0,i.$X)(k,e,t),s=(0,i.kE)(r),o=0===s?1:n/s,a=(0,l.Ue)();return(0,i.od)(a,t,r,o),a[2]=e[2],a}function L(e,t){let{start:n,end:r,type:i}=t,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,l.Ue)();const a=(0,o.z)(z,e,n),u=(0,o.z)(j,r,n),c=(0,o.k)(a,u)/(0,o.k)(u,u);return(0,o.r)(s,n,u,i===h.SP.RAY?Math.max(c,0):c)}const b=(()=>{const e=(0,l.Ue)(),t=(0,l.Ue)(),n=(0,l.Ue)();return(r,a)=>{let{start:d,end:p}=r,{center:f,radius:g,normal:v,slicePlane:y}=a;const L=(0,u.Yq)(f,v,I);if(P((0,u.TE)(L,d),0)&&P((0,u.TE)(L,p),0)){(0,c._F)(v,e,t);const r=(r,s)=>((0,o.f)(n,s,f),(0,i.t8)(r,(0,o.k)(n,e),(0,o.k)(n,t)),r),a=(0,h.UG)({start:r(k,d),end:r(T,p),type:h.SP.LINE},s.AG,g),u=[];for(const[n,i]of a){const r=(0,o.c)((0,l.Ue)(),f);(0,o.r)(r,r,e,n),(0,o.r)(r,r,t,i),y&&!N(y,r)||u.push(r)}return u}const b=(0,l.Ue)();return(0,u.fn)(L,d,p,b)?!P((0,o.q)(b,f),g)||y&&!N(y,b)?[]:[b]:[]}})();function m(e,t,n){let{start:r,end:s,type:a}=e;const u=[],c=(0,o.f)(z,s,r),d=(0,i.$X)(T,r,t),p=(0,i.we)(c),f=2*(0,i.AK)(c,d),g=f*f-4*p*((0,i.we)(d)-n*n);if(0===g){const e=-f/(2*p);(a===h.SP.LINE||e>=0)&&u.push((0,o.r)((0,l.Ue)(),r,c,e))}else if(g>0){const e=Math.sqrt(g),t=(-f+e)/(2*p);(a===h.SP.LINE||t>=0)&&u.push((0,o.r)((0,l.Ue)(),r,c,t));const n=(-f-e)/(2*p);(a===h.SP.LINE||n>=0)&&u.push((0,o.r)((0,l.Ue)(),r,c,n))}return u}function x(e,t){const n=e.start,r=e.end,i=t.start,s=t.end,u=(0,o.z)(z,r,n),c=(0,o.z)(j,s,i),d=(0,o.z)(R,i,n),p=(0,o.b)(M,u,c);if(!P((0,o.k)(d,p),0))return[];const f=(0,o.x)(p);if(P(f,0))return[];const g=(0,o.b)(q,d,c),v=(0,o.k)(g,p)/f,y=(0,o.r)(C,n,u,v);if(e.type===h.SP.RAY){const e=(0,o.z)(H,y,n);if((0,o.k)(u,e)<-(0,a.bn)())return[]}if(t.type===h.SP.RAY){const e=(0,o.z)(H,y,i);if((0,o.k)(c,e)<-(0,a.bn)())return[]}return[(0,l.d9)(y)]}function A(e,t,n,r){const[o,l]=e,[a,u]=n,c=a-o,h=u-l,d=c*c+h*h,p=Math.sqrt(d);if(p>t+r)return[];if(p<Math.abs(t-r))return[];if(P(p,0)&&P(t,r))return[];const f=(t*t-r*r+d)/(2*p),g=Math.sqrt(t*t-f*f),v=g*h/p,y=g*c/p,[L,b]=(0,i.t7)(k,e,n,f/p);return P(v,y)?[(0,s.al)(L,b)]:[(0,s.al)(L+v,b-y),(0,s.al)(L-v,b+y)]}function S(e,t,n){let{start:r,end:i,type:s}=n;return(0,o.s)(e.start,r[0],r[1],t),(0,o.s)(e.end,i[0],i[1],t),e.type=_[s],e}function w(e,t){return P(e[2],t[2])}function P(e,t){return(0,r.W8)(Math.abs(e-t),0,(0,a.bn)())}function E(e,t){return t.filter((t=>N(e,t)))}function N(e,t){return(0,u.Ac)(e,t)}var U;!function(e){e[e.PLANE=0]="PLANE",e[e.HALF_PLANE=1]="HALF_PLANE"}(U||(U={}));const _={[U.PLANE]:h.SP.LINE,[U.HALF_PLANE]:h.SP.RAY},k=(0,s.Ue)(),T=(0,s.Ue)(),z=(0,l.Ue)(),j=(0,l.Ue)(),R=(0,l.Ue)(),M=(0,l.Ue)(),q=(0,l.Ue)(),C=(0,l.Ue)(),H=(0,l.Ue)(),I=(0,u.Ue)(),O={start:(0,l.Ue)(),end:(0,l.Ue)(),type:h.SP.LINE},Z={start:(0,l.Ue)(),end:(0,l.Ue)(),type:h.SP.LINE}}}]);
//# sourceMappingURL=60115.eb634e0e.chunk.js.map