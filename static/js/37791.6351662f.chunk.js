"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[37791],{71039:(e,t,r)=>{r.d(t,{z:()=>M});var n=r(27366),i=(r(59486),r(7138)),s=r(63780),o=r(32718),a=r(16889),l=r(25666),u=r(94172),c=r(68860),d=r(49861),p=(r(93169),r(69912)),y=r(32035),h=r(12400),g=r(54054),f=r(83448),_=r(79803),m=r(51066),b=r(5986),v=r(41414),S=r(65156),E=r(86372),w=r(22186),I=r(92975),R=r(23470),F=r(81753),C=r(18661),x=r(44011),O=r(78952);const j="esri.views.3d.layers.i3s.I3SMeshViewFilter",Q=()=>o.Z.getLogger(j);let M=class extends i.Z{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){(0,u.N1)((()=>{var e;return(null===(e=this.viewFilter)||void 0===e?void 0:e.geometry)||null!=this.layerFilter})).then((()=>this.loadAsyncModule(Promise.all([r.e(99058),r.e(2170)]).then(r.bind(r,2170)).then((e=>{this.destroyed||(this._geometryEngine=e)})))))}get sortedObjectIds(){var e;if(null==(null===(e=this.viewFilter)||void 0===e?void 0:e.objectIds))return null;const t=(0,E.QZ)(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){var e;const t=null===(e=this.viewFilter)||void 0===e?void 0:e.where;if(null==t||!t)return null;try{return g.WhereClause.create(t,this.layerFieldsIndex)}catch(r){Q().error("Failed to parse filter where clause: ".concat(r))}return null}addFilters(e,t,r,n){var i;const s=this.sortedObjectIds;null!=s&&e.push((e=>(0,x.Yb)(s,!0,e))),this.addSqlFilter(e,this.parsedWhereClause),this.addTimeFilter(e,null===(i=this.viewFilter)||void 0===i?void 0:i.timeExtent);const o=(0,l.lK)(this._layerMaskGeometries),a=this._geometryEngine;if(null!=o&&null!=this.layerFilter&&null!=a){const i=this.layerFilter.spatialRelationship;e.push(((e,s)=>Z(a,e,s,n,t,r,o,i)))}const u=(0,l.lK)(this._viewMaskGeometries);if(null!=u&&null!=this.viewFilter&&null!=a){const i=this.viewFilter.spatialRelationship;e.push(((e,s)=>Z(a,e,s,n,t,r,u,i)))}}isMBSGeometryVisible(e,t,r){const n=(0,l.lK)(this._layerMaskGeometries),i=this._geometryEngine;if(null!=n&&null!=this.layerFilter&&null!=i){const s=this.layerFilter.spatialRelationship,o=n[0].spatialReference||t;return(0,m.s)(e,r,A,o)?G(i,A,n,o,s):(Q().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=(0,l.lK)(this._viewMaskGeometries);if(null!=s&&null!=this.viewFilter&&null!=i){const n=this.viewFilter.spatialRelationship,o=s[0].spatialReference||t;return(0,m.s)(e,r,A,o)?G(i,A,s,o,n):(Q().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=(0,l.lK)(this._viewMaskGeometries),t=(0,l.lK)(this._layerMaskGeometries);return null==e||null==t?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return null==e?null:null==this._geometryEngine?l.cn:"disjoint"===e.spatialRelationship?e.geometries.map((e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}}))):[e.geometries.reduce(((e,t)=>(e.rings=[...e.rings,...t.rings],e)),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(null==this.viewFilter)return null;const{geometry:e}=this.viewFilter;if(null==e)return null;if(null==this.viewFilter||null==this._geometryEngine)return l.cn;const{distance:t,units:r}=this.viewFilter,n=this.viewFilter.spatialRelationship,i="mesh"===e.type?e.extent:e;if(null==t||0===t)return D(this._geometryEngine,i,n);const s=r||(0,c.qE)(i.spatialReference);if(i.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(i,t,s);return D(this._geometryEngine,e,n)}const o=(0,F.iV)(i,O.Z.WGS84);if(null!=o){const e=(0,F.iV)(this._geometryEngine.geodesicBuffer(o,t,s),i.spatialReference);return D(this._geometryEngine,e,n)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,_.load)().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let a=null;try{a=(0,_.project)(i,O.Z.WGS84)}catch(u){}if(a)try{a=(0,_.project)(this._geometryEngine.geodesicBuffer(a,t,s),i.spatialReference)}catch(u){a=null}return a||Q().error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry (".concat(i.spatialReference.wkid,") to WGS84.")),D(this._geometryEngine,a,n)}get updating(){return(0,l.j)(this._layerMaskGeometries)||(0,l.j)(this._viewMaskGeometries)}static checkSupport(e){return null!=e&&(!!function(e){return null!=e&&k.includes(e)}(e.spatialRelationship)||(Q().warn("Filters with spatialRelationship other than ".concat(k.join(", ")," are not supported for mesh scene layers")),!1))}};(0,n._)([(0,d.Cb)()],M.prototype,"layerFilter",void 0),(0,n._)([(0,d.Cb)({type:C.Z})],M.prototype,"viewFilter",void 0),(0,n._)([(0,d.Cb)()],M.prototype,"layerFieldsIndex",void 0),(0,n._)([(0,d.Cb)()],M.prototype,"loadAsyncModule",void 0),(0,n._)([(0,d.Cb)()],M.prototype,"addSqlFilter",void 0),(0,n._)([(0,d.Cb)()],M.prototype,"addTimeFilter",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],M.prototype,"sortedObjectIds",null),(0,n._)([(0,d.Cb)({readOnly:!0})],M.prototype,"parsedWhereClause",null),(0,n._)([(0,d.Cb)({readOnly:!0})],M.prototype,"parsedGeometry",null),(0,n._)([(0,d.Cb)({readOnly:!0})],M.prototype,"_layerMaskGeometries",null),(0,n._)([(0,d.Cb)({readOnly:!0})],M.prototype,"_viewMaskGeometries",null),(0,n._)([(0,d.Cb)()],M.prototype,"updating",null),(0,n._)([(0,d.Cb)()],M.prototype,"_projectionEngineLoaded",void 0),(0,n._)([(0,d.Cb)()],M.prototype,"_geometryEngine",void 0),M=(0,n._)([(0,p.j)(j)],M);const k=["contains","intersects","disjoint"];var T,N;function D(e,t,r){if(null==t)return null;if("disjoint"===r&&"polygon"===t.type){const r=t.rings.length,n=t.spatialReference,i=new Array(r);for(let e=0;e<r;++e){const r=(0,S.al)(1/0,1/0,-1/0,-1/0);(0,S.Wi)(r,t.rings[e]),i[e]={type:"polygon",rings:[t.rings[e]],spatialReference:n,cache:{},aabr:r}}i.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const o=new Set,a=new s.SO;for(let t=0;t<i.length;++t){const r=i[t],n=r.aabr[0];o.forEach((t=>{if(n>=t.aabr[2])return void o.delete(t);if(r.aabr[1]>t.aabr[3]||r.aabr[3]<t.aabr[1]||!e.intersects(r,t))return;r.rings=r.rings.concat(t.rings),(0,S.jn)(r.aabr,t.aabr,r.aabr),r.cache={},o.delete(t);const l=(0,s.cq)(i,t,i.length,a);i.splice(l,1)})),o.add(r)}for(const e of i)e.aabr=void 0;return i}return[t]}function G(e,t,r,n,i){if(t[3]>=.5*(t[2]+(0,f.Iu)(n).radius))return!0;const s=K(e,t,n);return r.every((t=>J(e,t,s,i)!==T.DISCARD))}function Z(e,t,r,n,i,s,o,a){const l=o[0].spatialReference||i.spatialReference;if(!(0,m.s)(r.node.serviceMbsInIndexSR,s,A,l))return void Q().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=K(e,A,l),c=function(e,t,r,n,i){const s=t.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,c;switch(e){case"intersects":u=(e,t,r)=>e.intersects(t,r)?T.KEEP:T.TEST,c=P;break;case"contains":u=(e,t,r)=>e.contains(t,r)?T.TEST:T.DISCARD,c=P;break;default:u=(e,t,r)=>e.disjoint(t,r)?T.TEST:T.DISCARD,c=V}return{collection:n,object:i,type:e,maskSR:r,renderSR:s,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:c}}(a,i,l,n,r.objectHandle);for(const d of o){if(0===t.length)return;switch(J(e,d,u,a)){case T.DISCARD:return void(t.length=0);case T.KEEP:continue}(0,x.hv)(t,r.featureIds,(t=>W(e,d,t,c)))}}(N=T||(T={}))[N.KEEP=0]="KEEP",N[N.DISCARD=1]="DISCARD",N[N.TEST=2]="TEST";const A=(0,R.f)(0,0,0,0);function K(e,t,r){const n={type:"point",x:t[0],y:t[1],hasZ:!1,hasM:!1,spatialReference:r},i=!(0,I.oR)(r)&&!(0,I.sS)(r),s=Number.isNaN(t[3])?0:(0,a.uZ)(t[3],0,2*w.sv.radius),o=i?e.buffer(n,s,1):e.geodesicBuffer(n,s,1);return o.type="polygon",o}function J(e,t,r,n){switch(n){case"intersects":case"contains":return P(e,t,r);case"disjoint":return V(e,t,r)}}function P(e,t,r){return e.intersects(t,r)?e.contains(t,r)?T.KEEP:T.TEST:T.DISCARD}function V(e,t,r){return e.intersects(t,r)?e.contains(t,r)?T.DISCARD:T.TEST:T.KEEP}function W(e,t,r,n){const{collection:i,object:s,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=n;let c=u.get(r);if(!c){const e=i.getObjectTransform(s);i.getComponentAabb(s,r,q);const t=[(0,h.al)(q[0],q[1],0),(0,h.al)(q[0],q[4],0),(0,h.al)(q[3],q[4],0),(0,h.al)(q[3],q[1],0)];for(let r=0;r<4;++r)(0,y.t)(t[r],t[r],e.rotationScale),(0,y.g)(t[r],t[r],e.position),(0,b.S)(t[r],o,t[r],a);c={type:"polygon",rings:[t],spatialReference:a,cache:{}},c.rings[0][4]=c.rings[0][0],u.set(r,c)}switch(l(e,t,c)){case T.DISCARD:return!1;case T.KEEP:return!0}const{triangle:d,triangleTest:p,positions:g}=n,f=d.rings[0][0],_=d.rings[0][1],m=d.rings[0][2],v=i.getObjectTransform(s);i.getComponentPositions(s,r,g);const{indices:S,data:E,stride:w,startIndex:I,endIndex:R}=g;for(let h=I;h<R;h+=3){const r=w*S[h],n=w*S[h+1],i=w*S[h+2];switch((0,y.s)(f,E[r],E[r+1],E[r+2]),(0,y.s)(_,E[n],E[n+1],E[n+2]),(0,y.s)(m,E[i],E[i+1],E[i+2]),(0,y.t)(f,f,v.rotationScale),(0,y.t)(_,_,v.rotationScale),(0,y.t)(m,m,v.rotationScale),(0,y.g)(f,f,v.position),(0,y.g)(_,_,v.position),(0,y.g)(m,m,v.position),(0,b.S)(f,o,f,a),(0,b.S)(_,o,_,a),(0,b.S)(m,o,m,a),p(e,t,d)){case T.DISCARD:return!1;case T.KEEP:return!0}}return"intersects"!==n.type}const q=(0,v.Ue)()},43812:(e,t,r)=>{r.d(t,{u:()=>f});var n=r(27366),i=r(7138),s=r(10064),o=r(92026),a=r(49861),l=(r(93169),r(32718),r(84936),r(69912)),u=r(53866),c=r(28970),d=r(75878),p=r(52410),y=r(49818),h=r(21149);const g=d.q;let f=class extends i.Z{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new h.Z({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))))}destroy(){this._dataQueryEngineInstance=(0,o.SC)(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:u.Z.fromJSON(n)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new s.Z("unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new s.Z("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(r,t),i=y.Z.fromJSON(n);return i.features.forEach((e=>e.geometry=null)),i}_ensureQueryJSON(e){return null==e?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var e;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const t=this.layer.objectIdField||c.d,r=(null===(e=this.layer.fieldsIndex)||void 0===e?void 0:e.toJSON())||new p.Z([]),n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),s=this.priority,o=this.spatialIndex;return this._dataQueryEngineInstance=new g({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fieldsIndex:r,timeInfo:null,spatialReference:i,objectIdField:t,featureStore:o,scheduler:n,priority:s}),this._dataQueryEngineInstance}};(0,n._)([(0,a.Cb)({constructOnly:!0})],f.prototype,"layerView",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],f.prototype,"priority",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],f.prototype,"spatialIndex",void 0),(0,n._)([(0,a.Cb)()],f.prototype,"spatialReference",null),(0,n._)([(0,a.Cb)()],f.prototype,"layer",null),(0,n._)([(0,a.Cb)()],f.prototype,"defaultQueryJSON",null),f=(0,n._)([(0,l.j)("esri.views.3d.layers.i3s.I3SQueryEngine")],f)},51246:(e,t,r)=>{r.d(t,{u:()=>a});var n=r(41414),i=r(85403),s=r(80457),o=r(44011);class a{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var t;const{meta:r,index:n}=e,i={};this._objectIdField&&(i[this._objectIdField]=e.id);const s=null===(t=r.attributeInfo)||void 0===t?void 0:t.attributeData;if(null!=s)for(const a of Object.keys(s))i[a]=(0,o.Jx)(s[a],n);return i}getAttribute(e,t){var r;if(t===this._objectIdField)return e.id;const{meta:n,index:i}=e,s=null===(r=n.attributeInfo)||void 0===r?void 0:r.attributeData;return null!=s?(0,o.Jx)(s[t],i):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,r,n,i,o]=this._getFeatureExtent(e,l);return new s.Z([5],[t,r,n,i,r,n,i,o,n,t,o,n,t,r,n])}getCentroid(e,t){if(e.geometry)return(0,i.Y)(new s.Z,e.geometry,t.hasZ,t.hasM);const[r,n,o,a,u,c]=this._getFeatureExtent(e,l);return new s.Z([0],[(r+a)/2,(n+u)/2,(o+c)/2])}cloneWithGeometry(e,t){const{id:r,index:n,meta:i}=e;return{id:r,index:n,meta:i,geometry:t}}}const l=(0,n.Ue)()},73552:(e,t,r)=>{r.d(t,{I:()=>h});var n=r(27366),i=r(7138),s=r(91505),o=r(49861),a=(r(93169),r(32718),r(84936),r(69912)),l=r(51066),u=r(41414),c=r(65156),d=r(23470),p=r(42757);const y=(0,u.Ue)();let h=class extends i.Z{constructor(e){super(e),this.events=new s.Z}forEach(e){this.forAllFeatures((t=>(e(t),p.Ku.CONTINUE)))}forEachBounds(e,t){const r=this.getFeatureExtent;for(const n of e)t(r(n,y))}forEachInBounds(e,t){this.forAllFeatures((r=>{const n=this.getFeatureExtent(r,f);return(0,c.kK)(e,(0,u.y8)(n,_))&&t(r),p.Ku.CONTINUE}),(t=>{if((0,l.s)(t.node.serviceMbsInIndexSR,this.sourceSpatialReference,g,this.viewSpatialReference),g[0]>=e[0]&&g[2]<=e[2]&&g[1]>=e[1]&&g[3]<=e[3])return p.Ku.CONTINUE;const r=Math.max(e[0],Math.min(g[0],e[2])),n=Math.max(e[1],Math.min(g[1],e[3])),i=g[0]-r,s=g[1]-n;return i*i+s*s<=g[3]*g[3]?p.Ku.CONTINUE:p.Ku.SKIP}))}};(0,n._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"featureAdapter",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"forAllFeatures",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"getFeatureExtent",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"viewSpatialReference",void 0),h=(0,n._)([(0,a.j)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],h);const g=(0,d.f)(0,0,0,0),f=(0,u.Ue)(),_=(0,c.Ue)()}}]);
//# sourceMappingURL=37791.6351662f.chunk.js.map