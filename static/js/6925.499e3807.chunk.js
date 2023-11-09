"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[6925],{86925:(e,t,r)=>{r.d(t,{Z:()=>X});var i=r(27366),s=r(10064),o=r(92026),l=r(94172),n=r(49861),a=(r(25243),r(63780),r(93169),r(69912)),u=r(37818),d=r(5845),c=r(52552),p=r(42069),h=r(32080),y=r(7138),m=r(66978),f=r(65618),g=r(5192),v=r(52639),_=r(18722),F=r(46798),b=r(78952),w=r(83040);class C{constructor(e){this._controller=e,this._handle=new q((t=>e.schedule(t)))}destroy(){this._handle.destroy()}invoke(e,t){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof b.Z&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,t).then((e=>{let t=0,r=0;const i=b.Z.fromJSON(e.spatialReference);e.spatialReference=i;const s=async o=>{if(e.fields)for(;t<e.fields.length;)if(e.fields[t]=w.Z.fromJSON(e.fields[t]),t++,o.madeProgress())return this._controller.reschedule((e=>s(e)));for(;r<e.features.length;){const t=e.features[r];if(++r,t.uid=v.Z.generateUID(),null!=t.geometry&&(t.geometry.spatialReference=i,x(t.geometry),o.madeProgress()))return this._controller.reschedule((e=>s(e)))}return e};return this._controller.schedule((e=>s(e)))}))):Promise.resolve(null)}}function x(e){switch(e.type){case"polyline":e.paths.reduce(((e,t)=>e+t.length),0)<_.c8&&(e.paths=e.hasZ||e.hasM?e.paths.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.paths.map((e=>e.map((e=>[e[0],e[1]])))));break;case"polygon":e.rings.reduce(((e,t)=>e+t.length),0)<_.c8&&(e.rings=e.hasZ||e.hasM?e.rings.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.rings.map((e=>e.map((e=>[e[0],e[1]])))))}}class q extends F.q{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},e)}}let R=class extends y.Z{constructor(e){super(e)}get queryFeaturesDehydrated(){const e=this.layer.capabilities,t=e&&e.query,r=t&&t.supportsFormatPBF,i=this.layer.parsedUrl;if(r){var s,o;null==this._decoder&&(this._decoder=new C(this.controller));const e={sourceSpatialReference:null!==(s=null===(o=this.layer.spatialReference)||void 0===o?void 0:o.toJSON())&&void 0!==s?s:null,applyTransform:!0,maxStringAttributeLength:1024};return(t,r)=>(0,g.Vn)(i,t,"pbf",this._createRequestOptions(r)).then((t=>((0,m.k_)(r),null!=this._decoder?this._decoder.invoke({buffer:t.data,options:e},r.signal):Promise.reject((0,m.zE)()))))}return(e,t)=>(0,g.JT)(i,e,this.layer.spatialReference,this._createRequestOptions(t)).then((e=>(0,f.PA)(e.data)))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=(0,o.SC)(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query}}}};(0,i._)([(0,n.Cb)({constructOnly:!0})],R.prototype,"layer",void 0),(0,i._)([(0,n.Cb)({constructOnly:!0})],R.prototype,"controller",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],R.prototype,"queryFeaturesDehydrated",null),R=(0,i._)([(0,a.j)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],R);let O=class extends y.Z{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,n.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],O.prototype,"queryFeaturesDehydrated",null),O=(0,i._)([(0,a.j)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],O);let E=class extends y.Z{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};(0,i._)([(0,n.Cb)({constructOnly:!0})],E.prototype,"layer",void 0),E=(0,i._)([(0,a.j)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],E);let P=class extends y.Z{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(f.PA,(r=>{if(r&&"query-features-json:unsupported"===r.name)return this.layer.queryFeatures(e,t);throw r}))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,n.Cb)({constructOnly:!0})],P.prototype,"layer",void 0),(0,i._)([(0,n.Cb)({constructOnly:!0})],P.prototype,"source",void 0),P=(0,i._)([(0,a.j)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],P);class M{constructor(e){this._memoryCache=null,this._capabilities=null;const t=e.layerView.layer;this._layerView=e.layerView,this.objectIdField=t.objectIdField,this.globalIdField="globalIdField"in t?t.globalIdField:null,this._returnZ=e.returnZ,this._returnM=e.returnM;const r=this._layerView.view.resourceController;this.query=function(e,t){return"feature"===e.type&&"feature-layer"===e.source.type?null!=e.infoFor3D?new O({layer:e}):new R({layer:e,controller:t}):"feature"===e.type&&"memory"===e.source.type||"csv"===e.type||"geojson"===e.type||"oriented-imagery"===e.type||"wfs"===e.type?new P({layer:e,source:e.source}):"ogc-feature"===e.type?new E({layer:e}):null}(t,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache("fl-".concat(t.uid)))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=(0,o.SC)(this._memoryCache),this.query.destroy()}createQuery(){const e=this._layerView.layer.createQuery();return e.outFields=this._layerView.availableFields,e.returnZ=this._returnZ,e.returnM=this._returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const e=this._layerView.view.resourceController;return e?e.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return null!=this._capabilities||(this._capabilities=(0,h.A)(this._layerView.layer)),this._capabilities}logFetchError(e,t){var r;e.error("#fetchTile()",this._layerView.layer,null!==(r=null===t||void 0===t?void 0:t.message)&&void 0!==r?r:t)}}var I=r(5198),S=r(58890),Z=r(78485),N=r(32718),V=r(45948),D=r(83444),T=r(18661),j=r(37270),A=r(87072),Q=r(21149),L=r(819),k=r(24405);const B="esri.views.layers.FeatureLayerView",G=N.Z.getLogger(B),H=e=>{let t=class extends e{constructor(){super(...arguments),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([(0,l.YP)((()=>{var e;const t=this.layer;return[null===t||void 0===t||null===(e=t.elevationInfo)||void 0===e?void 0:e.featureExpressionInfo,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),l.tX),(0,l.on)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.floors}),"change",(()=>this._handleRequiredFieldsChange())),(0,l.on)((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,j.Q0)(t,[...(0,j.Lk)(t,e.outFields),...r]):(0,j.Q0)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){G.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new Q.Z(e);if("feature"===this.layer.type){const e=(0,A.c)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new Q.Z(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t);if(r)throw r;return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,L.LC)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,o="orderBy"in t&&t.orderBy,l="featureReduction"in t?t.featureReduction:null,n=new Set,a=await Promise.allSettled([s?s.collectRequiredFields(n,r):null,(0,j.Mu)(n,t),e?(0,j.vl)(n,t):null,null!=this.filter?(0,j.Ll)(n,t,this.filter):null,null!=this.featureEffect?(0,j.Ll)(n,t,this.featureEffect.filter):null,l?(0,j.ZV)(n,t,l):null,o?(0,j.Qj)(n,t,o):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&(0,j.gd)(n,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&(t.floorInfo&&(0,j.gd)(n,t.fieldsIndex,[t.floorInfo.floorField]),e&&null!=t.infoFor3D&&(null==t.globalIdField&&G.error("globalIdField missing on 3DObjectFeatureLayer"),(0,j.gd)(n,t.fieldsIndex,[t.globalIdField]))),"subtype-group"===t.type){(0,j.AB)(n,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(n,r),(0,j.Mu)(n,e)])}));await Promise.allSettled(e)}for(const d of a)"rejected"===d.status&&G.error(d.reason);(0,j.AB)(n,r,i),e&&"displayField"in t&&t.displayField&&(0,j.AB)(n,r,t.displayField);const u=Array.from(n).sort();this._set("requiredFields",u)}validateFetchPopupFeatures(e){if(null==e)return null;for(const r of null!==(t=e.clientGraphics)&&void 0!==t?t:[]){var t;const i=r.layer;if("popupEnabled"in i&&!i.popupEnabled)return new s.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if(r.isAggregate){const e="featureReduction"in i?i.featureReduction:null;if(!(e&&"popupTemplate"in e&&e.popupEnabled&&e.popupTemplate))return new s.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i&&!(0,k.V5)(i,e))return new s.Z("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}async fetchClientPopupFeatures(e){const t=null!=e?e.clientGraphics:null;if(!t||0===t.length)return[];const r=new Array(t.length),i=new Map,s=await this.createPopupQuery(e);for(let o=0;o<t.length;o++){const l=t[o];if(l.isAggregate){r[o]=l;continue}const n=l.layer;if(!("popupEnabled"in n))continue;const a=(0,j.Lk)(this.layer.fieldsIndex,s.outFields),u=(0,k.V5)(n,e);if(null==u)continue;const d=await this._loadArcadeModules(u);d&&d.arcadeUtils.hasGeometryOperations(u)||!(0,j.R9)(a,l)?i.set(l.getObjectId(),{graphic:l,index:o}):r[o]=l}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);s.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(s);for(const t of e.features){const{graphic:{geometry:e},index:s}=i.get(t.getObjectId());t.geometry||(t.geometry=e),r[s]=t}}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const s=null!==e&&void 0!==e&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const o of s){if(!("popupEnabled"in o))continue;const t=(0,k.V5)(o,e);if(null==t)continue;const s=await this._loadArcadeModules(t),l=s&&s.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!l);const n=await(0,k.e7)(this.layer,t);for(const e of n)r.add(e)}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=(0,A.c)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return t}canResume(){return!!super.canResume()&&(null==this.timeExtent||!this.timeExtent.isEmpty)}};return(0,i._)([(0,n.Cb)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"availableFields",null),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"dataUpdating",void 0),(0,i._)([(0,n.Cb)({type:D.Z})],t.prototype,"featureEffect",null),(0,i._)([(0,n.Cb)({type:T.Z})],t.prototype,"filter",void 0),(0,i._)([(0,n.Cb)(V.qG)],t.prototype,"timeExtent",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,n.Cb)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,n.Cb)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"view",void 0),t=(0,i._)([(0,a.j)(B)],t),t};var U=r(67581),Y=r(13107);let z=class extends((0,Y.Z)((0,c.R)(H((0,p.A)(U.Z))))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.addHandles((0,l.YP)((()=>this._updatingRequiredFieldsPromise),(e=>this._updatingHandles.addPromise(e)),l.tX))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=(0,o.SC)(this._fetcherContext)}get maximumNumberOfFeatures(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t?void 0:t.maximumNumberOfFeatures)&&void 0!==e?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if(null!==(e=this.controller)&&void 0!==e&&e.updating){const e=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(r=(t-e)/t,this._controllerTotal=t)}let i=0;if(null!==(t=this.processor)&&void 0!==t&&t.updating){const e=this.processor.updatingRemaining,t=Math.max(e,this._processorTotal);t>0&&(i=(t-e)/t,this._processorTotal=t)}return.5*(r+i)}get updatePolicy(){if(!this.controller)return Z.j.ASYNC;switch(this.controller.mode){case"snapshot":{const e=J.get(this.layer.geometryType);return null==e||this.controller.serviceDataCount>e?Z.j.ASYNC:Z.j.SYNC}case"tiles":return Z.j.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,t){var r;null===(r=this.processor)||void 0===r||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new M({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new d.g({layerView:this,context:this._fetcherContext,graphics:new I.g,extent:this.clippingExtent});return this._updatingHandles.add((()=>e.serviceDataExtent),(e=>{this.processor&&(this.processor.dataExtent=e)}),l.nn),this.addHandles((0,l.YP)((()=>this.suspended),(t=>{t?e.suspend():e.resume()}),l.tX)),this._updatingHandles.add((()=>{var e;return null===(e=this.processor)||void 0===e?void 0:e.displayFeatureLimit}),(t=>e.displayFeatureLimit=t),l.nn),this.addHandles((0,l.gx)((()=>!this.updating),(()=>{this._controllerTotal=0,this._processorTotal=0}))),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.refreshFilter()}get usedMemory(){var e,t,r,i;return(null!==(e=null===(t=this.processor)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0)+(null!==(r=null===(i=this.controller)||void 0===i?void 0:i.memoryForUnusedFeatures)&&void 0!==r?r:0)}get unloadedMemory(){var e,t,r,i,s,o,l,n;const a=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0,u=null!==(r=null===(i=this.controller)||void 0===i?void 0:i.expectedFeatureDiff)&&void 0!==r?r:0,d=null!==(s=null===(o=this.processor)||void 0===o?void 0:o.loadedFeatures)&&void 0!==s?s:0,c=d+u>0?d/(d+u):1;return a+u*(null!==(l=null===(n=this.processor)||void 0===n?void 0:n.usedMemoryPerFeature)&&void 0!==l?l:0)*c}get ignoresMemoryFactor(){var e;return null===(e=this.controller)||void 0===e?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(null!==e&&void 0!==e&&e.outStatistics||null==this.graphics3DProcessor)return r;const i=this.layer.objectIdField,s=this.graphics3DProcessor.graphics3DGraphicsByObjectID,o=[];for(const l of r.features)if(l.geometry){const e=s.get(l.attributes[i]);e&&(l.geometry=(0,u.kB)(e.graphic.geometry),o.push(l))}else o.push(l);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=e=>{throw new s.Z("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '".concat(e,"'"))},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const i of r)null!=e[i]&&t(i);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),null==e.outSpatialReference||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get performanceInfo(){var e,t,r,i,s,o,l;const n=null===(e=this.controller)||void 0===e?void 0:e.displayFeatureLimit,a=null!=n?n.averageSymbolComplexity:void 0,u=null!=a?"f:".concat(a.verticesPerFeature,",v:").concat(a.verticesPerCoordinate):"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:null!==(t=null===(r=this.controller)||void 0===r?void 0:r.mode)&&void 0!==t?t:"n/a",symbolComplexity:u,nodes:null!==(i=null===(s=this.controller)||void 0===s?void 0:s.tileDescriptors.length)&&void 0!==i?i:0,...null!==(o=null===(l=this.controller)||void 0===l?void 0:l.performanceInfo)&&void 0!==o?o:{storedFeatures:0,totalVertices:0}}}get test(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:null===(e=this.controller)||void 0===e?void 0:e.graphics}}};(0,i._)([(0,n.Cb)()],z.prototype,"layer",void 0),(0,i._)([(0,n.Cb)()],z.prototype,"controller",void 0),(0,i._)([(0,n.Cb)()],z.prototype,"_controllerTotal",void 0),(0,i._)([(0,n.Cb)()],z.prototype,"_processorTotal",void 0),(0,i._)([(0,n.Cb)()],z.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,n.Cb)()],z.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,n.Cb)(S.q)],z.prototype,"updatingProgress",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"updatingProgressValue",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"updatePolicy",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"hasZ",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"hasM",null),(0,i._)([(0,n.Cb)()],z.prototype,"suspendResumeExtentMode",void 0),z=(0,i._)([(0,a.j)("esri.views.3d.layers.FeatureLayerViewBase3D")],z);const J=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),X=z},13107:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),s=r(32718),o=r(66978),l=r(94172),n=r(49861),a=(r(25243),r(63780),r(93169),r(69912));const u=e=>{let t=class extends e{initialize(){this.addHandles((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,o.D_)(e)||s.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=6925.499e3807.chunk.js.map