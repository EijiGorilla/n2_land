"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[121,2463,2170],{92463:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>c});var r=n(53866),a=n(77577),i=n(848),o=n(80885),s=n(29909);const c={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new s.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},2170:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>T,changeDefaultSpatialReferenceTolerance:()=>F,clearDefaultSpatialReferenceTolerance:()=>H,clip:()=>s,contains:()=>u,convexHull:()=>A,crosses:()=>l,cut:()=>c,densify:()=>D,difference:()=>w,disjoint:()=>y,distance:()=>f,equals:()=>d,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>_,flipVertical:()=>N,generalize:()=>k,geodesicArea:()=>C,geodesicBuffer:()=>z,geodesicDensify:()=>L,geodesicLength:()=>J,intersect:()=>x,intersectLinesToPoints:()=>X,intersects:()=>h,isSimple:()=>v,nearestCoordinate:()=>Y,nearestVertex:()=>b,nearestVertices:()=>q,offset:()=>Z,overlaps:()=>M,planarArea:()=>E,planarLength:()=>j,relate:()=>m,rotate:()=>V,simplify:()=>G,symmetricDifference:()=>R,touches:()=>p,union:()=>S,within:()=>g});var r=n(99058),a=n(92463);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function s(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function c(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function l(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function d(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function m(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function v(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function G(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function w(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function R(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function x(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(a.hydratedAdapter,i(e),e,t)}function Z(e,t,n,o,s,c){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,o,s,c)}function T(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function z(e,t,n,o,s,c){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,s,c)}function Y(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function b(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function q(e,t,n,o){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function P(e){var t,n;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(t=null===(n=e.extent)||void 0===n?void 0:n.center)&&void 0!==t?t:null}function V(e,t,n){var a;if(null==e)throw new O;const i=e.spatialReference;if(null==(n=null!==(a=n)&&void 0!==a?a:P(e)))throw new O;const o=e.constructor.fromJSON(r.G.rotate(e,t,n));return o.spatialReference=i,o}function _(e,t){var n;if(null==e)throw new O;const a=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:P(e)))throw new O;const i=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return i.spatialReference=a,i}function N(e,t){var n;if(null==e)throw new O;const a=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:P(e)))throw new O;const i=e.constructor.fromJSON(r.G.flipVertical(e,t));return i.spatialReference=a,i}function k(e,t,n,o){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function D(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function L(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function E(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function j(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function C(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function J(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}function X(e,t){return r.G.intersectLinesToPoints(a.hydratedAdapter,i(e),e,t)}function F(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function H(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class O extends Error{constructor(){super("Illegal Argument Exception")}}},15559:(e,t,n)=>{n.d(t,{Gb:()=>h,Jf:()=>g,Lc:()=>G,TB:()=>m,_q:()=>M,cA:()=>v,j2:()=>y,p8:()=>p});n(59486);var r=n(10064),a=n(68860),i=n(38516),o=n(92975),s=n(29909),c=n(80885),u=(n(848),n(78952));function l(e){if(!e)return null;if((0,o.sT)(e)&&e.wkid){const t=i.Dg[e.wkid];if(t)return t}const t=e.wkt2||e.wkt;if(t){const e=function(e){const t=i.FQ.exec(e);if(!t||2!==t.length)return null;const n=t[1].split(",");if(!n||n.length<3)return null;const r=parseFloat(n[1]),a=parseFloat(n[2]);return isNaN(r)||isNaN(a)?null:{a:r,f:0===a?0:1/a}}(t);if(e)return e}return null}function f(e){const t=l(e);if(function(e){return null!=e&&"b"in e&&"eSq"in e&&"radius"in e}(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function d(e,t,n){const{a:r,eSq:a}=f(n),o=Math.sqrt(a),s=Math.sin(t[1]*i.Yr),c=r*t[0]*i.Yr;let u;return u=a>0?r*((1-a)*(s/(1-a*(s*s))-1/(2*o)*Math.log((1-o*s)/(1+o*s))))*.5:r*s,e[0]=c,e[1]=u,e}function h(e){return null!==l(e)}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"square-meters";if(e.some((e=>!h(e.spatialReference))))throw new r.Z("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let r=0;r<e.length;r++){const t=e[r],a=t.spatialReference,{radius:i,densificationRatio:o}=f(a),s=i*o;n.push(y(t,s))}const i=[],o=[0,0],s=[0,0];for(let r=0;r<n.length;r++){const{rings:e,spatialReference:c}=n[r];let u=0;for(let t=0;t<e.length;t++){const n=e[t];d(o,n[0],c),d(s,n[n.length-1],c);let r=s[0]*o[1]-o[0]*s[1];for(let e=0;e<n.length-1;e++)d(o,n[e+1],c),d(s,n[e],c),r+=s[0]*o[1]-o[0]*s[1];u+=r}u=(0,a.En)(u,"square-meters",t),i.push(u/-2)}return i}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!e)throw new r.Z("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some((e=>!h(e.spatialReference))))throw new r.Z("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let r=0;r<e.length;r++){const i=e[r],{spatialReference:o}=i,s="polyline"===i.type?i.paths:i.rings;let c=0;for(let e=0;e<s.length;e++){const t=s[e];let n=0;for(let e=1;e<t.length;e++){const r=t[e-1][0],a=t[e][0],i=t[e-1][1],s=t[e][1];if(i!==s||r!==a){const e=new M;v(e,[r,i],[a,s],o),n+=e.distance}}c+=n}c=(0,a.En)(c,"meters",t),n.push(c)}return n}function y(e,t){if("polyline"!==e.type&&"polygon"!==e.type)throw new r.Z("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!h(n))throw new r.Z("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const a="polyline"===e.type?e.paths:e.rings,i=[],o=[0,0],u=new M;for(const r of a){const e=[];i.push(e),e.push([r[0][0],r[0][1]]);let a,s,c=r[0][0],l=r[0][1];for(let i=0;i<r.length-1;i++){if(a=r[i+1][0],s=r[i+1][1],c===a&&l===s)continue;const f=[c,l];v(u,[c,l],[a,s],n);const{azimuth:d,distance:h}=u,p=h/t;if(p>1){for(let r=1;r<=p-1;r++)m(o,f,d,r*t,n),e.push(o.slice(0));m(o,f,d,(h+Math.floor(p-1)*t)/2,n),e.push(o.slice(0))}m(o,f,d,h,n),e.push(o.slice(0)),c=o[0],l=o[1]}}return"polyline"===e.type?new s.Z({paths:i,spatialReference:n}):new c.Z({rings:i,spatialReference:n})}class M{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=e,this.azimuth=t,this.reverseAzimuth=n}}function m(e,t,n,r,a){const o=t[0],s=t[1],c=o*i.Yr,u=s*i.Yr,l=(null!==n&&void 0!==n?n:0)*i.Yr,{a:d,b:h,f:p}=f(a),g=Math.sin(l),y=Math.cos(l),M=(1-p)*Math.tan(u),m=1/Math.sqrt(1+M*M),v=M*m,G=Math.atan2(M,y),A=m*g,w=A*A,R=1-w,x=R*(d*d-h*h)/(h*h),S=1+x/16384*(4096+x*(x*(320-175*x)-768)),Z=x/1024*(256+x*(x*(74-47*x)-128));let T,z,Y,b,q=r/(h*S),P=2*Math.PI;for(;Math.abs(q-P)>1e-12;)Y=Math.cos(2*G+q),T=Math.sin(q),z=Math.cos(q),b=Z*T*(Y+Z/4*(z*(2*Y*Y-1)-Z/6*Y*(4*T*T-3)*(4*Y*Y-3))),P=q,q=r/(h*S)+b;const V=v*T-m*z*y,_=Math.atan2(v*z+m*T*y,(1-p)*Math.sqrt(w+V*V)),N=Math.atan2(T*g,m*z-v*T*y),k=p/16*R*(4+p*(4-3*R)),D=_/i.Yr,L=(c+(N-(1-k)*p*A*(q+k*T*(Y+k*z*(2*Y*Y-1)))))/i.Yr;return e[0]=L,e[1]=D,e}function v(e,t,n,r){const a=t[0]*i.Yr,o=t[1]*i.Yr,s=n[0]*i.Yr,c=n[1]*i.Yr,{a:u,b:l,f:d,radius:h}=f(r),p=s-a,g=Math.atan((1-d)*Math.tan(o)),y=Math.atan((1-d)*Math.tan(c)),M=Math.sin(g),m=Math.cos(g),v=Math.sin(y),G=Math.cos(y);let A,w,R,x,S,Z,T,z,Y,b,q=1e3,P=p;do{if(T=Math.sin(P),z=Math.cos(P),R=Math.sqrt(G*T*(G*T)+(m*v-M*G*z)*(m*v-M*G*z)),0===R)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;S=M*v+m*G*z,Z=Math.atan2(R,S),Y=m*G*T/R,w=1-Y*Y,x=S-2*M*v/w,isNaN(x)&&(x=0),b=d/16*w*(4+d*(4-3*w)),A=P,P=p+(1-b)*d*Y*(Z+b*R*(x+b*S*(2*x*x-1)))}while(Math.abs(P-A)>1e-12&&--q>0);if(0===q){const t=h,n=Math.acos(Math.sin(o)*Math.sin(c)+Math.cos(o)*Math.cos(c)*Math.cos(s-a))*t,r=s-a,u=Math.sin(r)*Math.cos(c),l=Math.cos(o)*Math.sin(c)-Math.sin(o)*Math.cos(c)*Math.cos(r),f=Math.atan2(u,l);return e.azimuth=f/i.Yr,e.distance=n,e.reverseAzimuth=void 0,e}const V=w*(u*u-l*l)/(l*l),_=V/1024*(256+V*(V*(74-47*V)-128)),N=l*(1+V/16384*(4096+V*(V*(320-175*V)-768)))*(Z-_*R*(x+_/4*(S*(2*x*x-1)-_/6*x*(4*R*R-3)*(4*x*x-3)))),k=Math.atan2(G*Math.sin(P),m*v-M*G*Math.cos(P)),D=Math.atan2(m*Math.sin(P),m*v*Math.cos(P)-M*G);return e.azimuth=k/i.Yr,e.distance=N,e.reverseAzimuth=D/i.Yr,e}function G(e){return h(e)?e:(0,o.sS)(e)?u.Z.WGS84:null}},11208:(e,t,n)=>{n.d(t,{CM:()=>u,RS:()=>l,Rs:()=>f});var r=n(17842),a=n(13611),i=n(32035),o=n(12400),s=n(55946),c=n(74509);function u(e,t,n,r){n.projectToRenderScreen(e,p),n.projectToRenderScreen(t,g),(0,a.$X)(r,g,p),(0,a.Fv)(r,r)}function l(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,o.Ue)();const s=(0,i.c)(h,e);return s[2]=(0,c.zx)(r,s,t,n)||0,r.renderCoordsHelper.toRenderCoords(s,t,a),a}function f(e,t,n,a){return"2d"===a.type?(d.x=e[0],d.y=e[1],d.spatialReference=t,a.toScreen(d)):(l(e,t,n,a,h),a.state.camera.projectToScreen(h,y),(0,r.vW)(y[0],y[1]))}const d=(0,s.T)(0,0,0,null),h=(0,o.Ue)(),p=(0,r.gX)(),g=(0,r.gX)(),y=(0,r.s1)()},13615:(e,t,n)=>{n.d(t,{FB:()=>f,RT:()=>l,kQ:()=>u});var r=n(47898),a=n(12400),i=n(2170),o=n(15559),s=n(92975),c=n(47072);function u(e){const{spatialReference:t}=e;return(0,c.T5)(t,p,g,e)}function l(e,t){if(!(0,s.fS)(e.spatialReference,t.spatialReference))return null;const{spatialReference:n}=e;return M[0]=e.x,M[1]=e.y,M[2]=e.hasZ?e.z:0,m[0]=t.x,m[1]=t.y,m[2]=t.hasZ?t.z:0,f(M,m,n)}function f(e,t,n){return(0,c.T5)(n,d,h,e,t,n)}function d(e,t,n){return(0,r.yG)((0,o.cA)(y,e,t,n).distance,"meters")}function h(e,t,n){return(0,r.yG)((0,i.geodesicLength)(function(e,t,n){return{type:"polyline",spatialReference:n,paths:[[[...e],[...t]]]}}(e,t,n),"meters"),"meters")}function p(e){return(0,r.yG)((0,o.Jf)([e],"meters")[0],"meters")}function g(e){return(0,r.yG)((0,i.geodesicLength)(e,"meters"),"meters")}const y=new o._q,M=(0,a.Ue)(),m=(0,a.Ue)()},47072:(e,t,n)=>{n.d(t,{T5:()=>o,Yo:()=>s,op:()=>i});var r=n(15559),a=n(92975);function i(e){return(0,a.sT)(e)&&(0,r.Gb)(e)||(0,a.sS)(e)}function o(e,t,n){for(var i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];return(0,a.sT)(e)&&(0,r.Gb)(e)?t.apply(void 0,o):(0,a.sS)(e)?n.apply(void 0,o):null}const s=1e5}}]);
//# sourceMappingURL=121.0f277ab1.chunk.js.map