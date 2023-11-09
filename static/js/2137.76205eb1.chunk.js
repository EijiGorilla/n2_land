"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[2137],{36700:(e,t,n)=>{n.d(t,{x:()=>s});var i=n(44179),o=n(75691),a=n(61309);class s extends o.a{constructor(e){super({...e,constraint:new i.Hk(e.targetPoint)})}get hints(){return[new a.n(this.targetPoint,this.isDraped,this.domain)]}}},26823:(e,t,n)=>{n.r(t),n.d(t,{FeatureCollectionSnappingSource:()=>f});var i=n(27366),o=n(7138),a=n(97942),s=n(66978),r=n(94172),c=n(49861),l=(n(25243),n(63780),n(93169),n(69912)),u=n(74509),d=n(64674),p=n(52824),h=n(59877),g=n(53580),y=n(48817);let f=class extends o.Z{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,n=null!=e&&"3d"===e.type;if(!n||"subtype-group"===t.type)return(0,h.p)();return(0,h.p)(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:async(n,i)=>(await(0,s.Hl)(e.whenLayerView(t),i)).elevationAlignPointsInFeatures(n,i)})}get _snappingElevationFilter(){const{view:e}=this,t=null!=e&&"3d"===e.type&&"subtype-group"!==this.layerSource.layer.type;return(0,g.c)(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return null!=e&&"3d"===e.type&&"subtype-group"!==t.type?(0,y.k)(this._symbologySnappingSupported,(async(n,i)=>{const o=await e.whenLayerView(t);return(0,s.k_)(i),o.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},i)})):(0,y.k)()}get _symbologySnappingSupported(){return null!=this._layerView3D&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"subtype-group"!==t.type&&(e.whenLayerView(t).then((e=>this._layerView3D=e)),this.addHandles([e.elevationProvider.on("elevation-change",(e=>{let{context:n}=e;const{elevationInfo:i}=t;(0,u.W_)(n,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),(0,r.YP)((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),r.nn),(0,r.YP)((()=>{var e;return null!=this._layerView3D?null===(e=this._layerView3D.processor)||void 0===e?void 0:e.renderer:null}),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),r.nn),(0,r.on)((()=>{var e;return null===(e=this._layerView3D)||void 0===e?void 0:e.layer}),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=(0,a.H)(p.g)}refresh(){}async fetchCandidates(e,t){var n,i;const{layer:o}=this.layerSource,a=o.source;if(null===a||void 0===a||!a.querySnapping)return[];const r=(0,d.ML)(o),c=(0,d.rh)(e,null!==(n=null===(i=this.view)||void 0===i?void 0:i.type)&&void 0!==n?n:"2d",r),l=await a.querySnapping(c,{signal:t});(0,s.k_)(t);const u=e.coordinateHelper.spatialReference,h=await this._snappingElevationAligner.alignCandidates(l.candidates,u,t);(0,s.k_)(t);const g=await this._symbologySnappingFetcher.fetch(h,t);(0,s.k_)(t);const y=0===g.length?h:[...h,...g],f=this._snappingElevationFilter.filter(c,y),v=this._memoizedMakeGetGroundElevation(this.view,u);return f.map((e=>(0,p.X)(e,v)))}};(0,i._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"layerSource",void 0),(0,i._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"view",void 0),(0,i._)([(0,c.Cb)()],f.prototype,"_snappingElevationAligner",null),(0,i._)([(0,c.Cb)()],f.prototype,"_snappingElevationFilter",null),(0,i._)([(0,c.Cb)()],f.prototype,"_symbologySnappingFetcher",null),(0,i._)([(0,c.Cb)()],f.prototype,"_layerView3D",void 0),(0,i._)([(0,c.Cb)()],f.prototype,"_symbologySnappingSupported",null),f=(0,i._)([(0,l.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],f)},52824:(e,t,n)=>{n.d(t,{X:()=>c,g:()=>l});var i=n(38054),o=n(97760),a=n(95905),s=n(36700);function r(e){let{x:t,y:n,z:o}=e;return(0,i.al)(t,n,null!==o&&void 0!==o?o:0)}function c(e,t){switch(e.type){case"edge":return e.draped?new o.k({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,getGroundElevation:t}):new a.L({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new s.x({targetPoint:r(e.target),objectId:e.objectId,isDraped:!1})}}function l(e,t){return null!=e&&"3d"===e.type?(n,i)=>e.elevationProvider.getElevation(n,i,0,t,"ground"):()=>null}},59877:(e,t,n)=>{n.d(t,{p:()=>c});n(93169);var i=n(16054),o=n(77427),a=n(66978),s=n(68860),r=n(88152);function c(){let e=arguments.length>1?arguments[1]:void 0;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new u(t,n)}return new l}class l{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}}class u{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new i.z(1024),this._cacheVersion=0}async alignCandidates(e,t,n){const i=this._elevationInfo;return null==i||"absolute-height"!==i.mode||i.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(this._alignAbsoluteElevationCandidates(e,t,i),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(e,t,n){const{offset:i,unit:o}=n;if(null==i)return;const a=(0,s._R)(t),c=i*((0,r.Z7)(null!==o&&void 0!==o?o:"meters")/a);for(const s of e)switch(s.type){case"edge":s.start.z+=c,s.end.z+=c;continue;case"vertex":s.target.z+=c;continue}}async _alignComputedElevationCandidates(e,t,n){const i=new Map;for(const a of e)(0,o.s1)(i,a.objectId,h).push(a);const[s,r,c]=this._prepareQuery(i,t),l=await this._alignPointsInFeatures(s,n);if((0,a.k_)(n),c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(s,l,r);const{drapedObjectIds:u,failedObjectIds:d}=l,p=[];for(const o of e){const{objectId:e}=o;u.has(e)&&"edge"===o.type&&(o.draped=!0),d.has(e)||p.push(o)}return p}_prepareQuery(e,t){const n=[],i=[];for(const[o,a]of e){const e=[];for(const t of a)this._addToQueriesOrCachedResult(o,t.target,e,i),"edge"===t.type&&(this._addToQueriesOrCachedResult(o,t.start,e,i),this._addToQueriesOrCachedResult(o,t.end,e,i));0!==e.length&&n.push({objectId:o,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},i,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,i){const o=p(e,t),a=this._alignmentsCache.get(o);null==a?n.push(t):i.push(new d(t,a))}_applyCacheAndResponse(e,t,n){let{elevations:i,drapedObjectIds:o,failedObjectIds:a}=t;for(const c of n)c.apply();let s=0;const r=this._alignmentsCache;for(const{objectId:c,points:l}of e.pointsInFeatures){if(a.has(c)){s+=l.length;continue}const e=!o.has(c);for(const t of l){const n=p(c,t),o=i[s++];t.z=o,e&&r.put(n,o,1)}}}}class d{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function p(e,t){let{x:n,y:i,z:o,spatialReference:a}=t;return"".concat(e,"-").concat(n,"-").concat(i,"-").concat(null!==o&&void 0!==o?o:0,"}-wkid:").concat(null===a||void 0===a?void 0:a.wkid)}function h(){return[]}},53580:(e,t,n)=>{n.d(t,{c:()=>s});n(93169);class i{filter(e,t){return t}notifyElevationSourceChange(){}}class o{filter(e,t){const{point:n,distance:i}=e,{z:o}=n;if(null==o)return t;if(0===t.length)return t;const s=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(i),r=this._updateCandidatesTo3D(t,n,s).filter(a);return r.sort(l),r}_updateCandidatesTo3D(e,t,n){for(const i of e)switch(i.type){case"edge":r(i,t,n);continue;case"vertex":c(i,t,n);continue}return e}}function a(e){return e.distance<=1}function s(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new o:new i}function r(e,t,n){let{x:i,y:o,z:a}=n;const{start:s,end:r,target:c}=e;e.draped||function(e,t,n,i){const o=i.x-n.x,a=i.y-n.y,s=i.z-n.z,r=o*o+a*a+s*s,c=(t.x-n.x)*o+(t.y-n.y)*a+s*(t.z-n.z),l=Math.min(1,Math.max(0,c/r)),u=n.x+o*l,d=n.y+a*l,p=n.z+s*l;e.x=u,e.y=d,e.z=p}(c,t,s,r);const l=(t.x-c.x)/i,u=(t.y-c.y)/o,d=(t.z-c.z)/a;e.distance=Math.sqrt(l*l+u*u+d*d)}function c(e,t,n){let{x:i,y:o,z:a}=n;const{target:s}=e,r=(t.x-s.x)/i,c=(t.y-s.y)/o,l=(t.z-s.z)/a,u=Math.sqrt(r*r+c*c+l*l);e.distance=u}function l(e,t){return e.distance-t.distance}},48817:(e,t,n)=>{n.d(t,{k:()=>r});n(93169);var i=n(84652),o=n(16054),a=n(66978),s=n(643);function r(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new l(arguments.length>1?arguments[1]:void 0):new c}class c{async fetch(){return[]}notifySymbologyChange(){}}class l{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new o.z(1024),this._cacheVersion=0}async fetch(e,t){if(0===e.length)return[];const n=[],o=[],s=this._candidatesCache;for(const a of e){const e=u(a),t=s.get(e);if(t)for(const n of t)o.push((0,i.d9)(n));else n.push(a),s.put(e,[],1)}if(0===n.length)return o;const r=this._cacheVersion,{candidates:c,sourceCandidateIndices:l}=await this._getSymbologyCandidates(n,t);if((0,a.k_)(t),r!==this._cacheVersion)return this.fetch(e,t);const d=[],{length:p}=c;for(let a=0;a<p;++a){const e=c[a],t=u(n[l[a]]),o=s.get(t);o.push(e),s.put(t,o,o.length),d.push((0,i.d9)(e))}return o.concat(d)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function u(e){switch(e.type){case"vertex":{var t;const{objectId:n,target:i}=e,o="".concat(n,"-vertex-").concat(i.x,"-").concat(i.y,"-").concat(null!==(t=i.z)&&void 0!==t?t:0);return(0,s.hP)(o).toString()}case"edge":{var n,i;const{objectId:t,start:o,end:a}=e,r="".concat(t,"-edge-").concat(o.x,"-").concat(o.y,"-").concat(null!==(n=o.z)&&void 0!==n?n:0,"-to-").concat(a.x,"-").concat(a.y,"-").concat(null!==(i=a.z)&&void 0!==i?i:0);return(0,s.hP)(r).toString()}default:return""}}}}]);
//# sourceMappingURL=2137.76205eb1.chunk.js.map