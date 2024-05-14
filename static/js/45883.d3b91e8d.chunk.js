"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[45883],{45883:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var a=i(27366),l=i(10064),n=i(94172),r=i(49861),s=(i(93169),i(32718),i(84936),i(69912)),o=i(80394),d=i(42069),u=i(77385),p=i(57284),h=i(52639),c=i(45948),y=i(24405);const v=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return(0,o.lK)(this.layer.serviceRasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return(0,o._D)(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(e){return!!(0,o.lK)(this.layer.serviceRasterInfo,e)}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new l.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:a}=i,n=(0,y.V5)(i,t);if(!a||null==n)throw new l.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const r=[],{value:s,magdirValue:o,processedValue:d}=await i.identify(e,{timeExtent:this.timeExtent,signal:null===t||void 0===t?void 0:t.signal});let u="";if(s&&s.length){u="imagery-tile"===i.type&&i.hasStandardTime()&&null!=s[0]?s.map((e=>i.getStandardTimeValue(e))).join(", "):s.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]="imagery-tile"===i.type&&"Function"===i.raster.datasetFormat?null===d||void 0===d?void 0:d.join(", "):u,e[t+".Raw"]=u;const a=i.serviceRasterInfo.attributeTable;if(null!=a){const{fields:t,features:i}=a,l=t.find((e=>{let{name:t}=e;return"value"===t.toLowerCase()})),n=l?i.find((e=>String(e.attributes[l.name])===u)):null;if(n)for(const a in n.attributes)n.attributes.hasOwnProperty(a)&&(e[this._rasterFieldPrefix+a]=n.attributes[a])}const l=i.serviceRasterInfo.dataType;"vector-magdir"!==l&&"vector-uv"!==l||(e["Raster.Magnitude"]=null===o||void 0===o?void 0:o[0],e["Raster.Direction"]=null===o||void 0===o?void 0:o[1]);const n=new h.Z(this.fullExtent.clone(),null,e);n.layer=i,n.sourceLayer=n.layer,r.push(n)}return r}};return(0,a._)([(0,r.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,r.Cb)(c.qG)],t.prototype,"timeExtent",void 0),(0,a._)([(0,r.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,r.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,r.Cb)()],t.prototype,"tileInfo",void 0),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"hasTilingEffects",null),(0,a._)([(0,r.Cb)()],t.prototype,"datumTransformation",null),t=(0,a._)([(0,s.j)("esri.views.layers.ImageryTileLayerView")],t),t};var m=i(67581),g=i(13107),f=i(45008),b=i(90316);let w=class extends(v((0,g.Z)((0,u.r)((0,d.A)(m.Z))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new l.Z("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=(0,n.N1)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this.layer.tileInfo,i=["png","png24","png32","jpg","mixed"].includes(t.format)&&e.compatibleWith(t);this.isAlignedMapTile=i;const a=i?t:e.toTileInfo();this.tileInfo=a,this._updatingHandles.add((()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent]),(()=>this.refresh()))}));this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,a]=this.tileInfo.size;return e.width=i,e.height=a,t.clearRect(0,0,i,a),t.getImageData(0,0,i,a)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){var e,t;const i=this.layer.tileInfo,a=null===(e=this.tileInfo.lodAt(0))||void 0===e?void 0:e.scale,l=null===(t=this.layer.tileInfo.lodAt(i.lods.length-1))||void 0===t?void 0:t.scale;return this.levelRangeFromScaleRange(a,l)}_getfullExtent(){var e;return(0,o.lK)(this.layer.serviceRasterInfo,null!=(null===(e=this.view.basemapTerrain)||void 0===e?void 0:e.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,i,a){const l=this.tileInfo,n=this._canSymbolizeInWebGL(),r={tileInfo:l,requestRawData:n,signal:a.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile,noClip:!1},{layer:s}=this,o=await s.fetchTile(e,t,i,r);if(o instanceof HTMLImageElement)return o;let d=null===o||void 0===o?void 0:o.pixelBlock;if(null==d)return this._blankTile;if(!n&&(d=await s.applyRenderer(o),null==d))return this._blankTile;const u=new p.H([e,t,i],d,l.size[0],l.size[1]);return n?(u.symbolizerRenderer=s.symbolizer.rendererJSON,u.symbolizerParameters=s.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),u.transformGrid=o.transformGrid,u.bandIds=s.bandIds):(u.isRendereredSource=!0,u.bandIds=null),u.interpolation=s.interpolation,u}_getSymbolizerOptions(e){var t;const i=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:null!=(null===(t=this.view.basemapTerrain)||void 0===t?void 0:t.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:i,y:i},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return(0,f.K)(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){var e,t;const i=(0,b.h)(),{symbolizer:a}=this.layer,l=null===(e=a.lookup)||void 0===e||null===(e=e.colormapLut)||void 0===e?void 0:e.indexedColormap,n=!(null===(t=this.layer.rasterFunction)||void 0===t||!t.hasClipFunction),r=l&&l.length>4*(i.maxTextureSize||4906);return a.canRenderInWebGL&&!r&&!n}};(0,a._)([(0,r.Cb)({readOnly:!0})],w.prototype,"_blankTile",null),(0,a._)([(0,r.Cb)({readOnly:!0})],w.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,r.Cb)({readOnly:!0})],w.prototype,"hasMixedImageFormats",null),(0,a._)([(0,r.Cb)({readOnly:!0})],w.prototype,"dataLevelRange",null),w=(0,a._)([(0,s.j)("esri.views.3d.layers.ImageryTileLayerView3D")],w);const R=w},42069:(e,t,i)=>{i.d(t,{A:()=>u});var a=i(27366),l=i(42537),n=i(66978),r=i(94172),s=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),d=i(5354);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,l.kB)((()=>e.abort()))),await(0,r.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,a._)([(0,s.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,s.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},77385:(e,t,i)=>{i.d(t,{r:()=>p});var a=i(27366),l=i(10064),n=i(94172),r=i(49861),s=(i(93169),i(32718),i(84936),i(69912)),o=i(20488),d=i(58890),u=i(53379);const p=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:a}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(a).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.W(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new l.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));const t=(0,n.N1)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,u.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new l.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new l.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new l.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},a=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return i;const l=a.levels[0],n=e=>{const t=Math.log(l.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,n(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,n(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,a._)([(0,r.Cb)(d.q)],t.prototype,"updatingProgress",void 0),(0,a._)([(0,r.Cb)(d.V)],t.prototype,"updatingProgressValue",void 0),(0,a._)([(0,r.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,a._)([(0,r.Cb)()],t.prototype,"dataScaleRange",null),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,a._)([(0,r.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,a._)([(0,r.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,s.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(27366),l=i(7138),n=i(91505),r=i(79056),s=i(32718),o=i(92026),d=i(67426),u=i(49861),p=(i(93169),i(84936),i(69912)),h=i(46634);let c=class extends((0,r.IG)((0,d.v)(n.Z.EventedMixin(l.Z)))){constructor(e){super(e),this._updatingHandles=new h.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",a=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";s.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(a,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,a;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(a=this.parent)||void 0===a?void 0:a.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,a._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,a._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,a._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,a._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,a._)([(0,u.Cb)()],c.prototype,"visible",null),(0,a._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,a._)([(0,p.j)("esri.views.layers.LayerView")],c);const y=c},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(27366),l=i(32718),n=i(66978),r=i(94172),s=(i(93169),i(84936),i(10064),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,r.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||l.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,a._)([(0,s.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},24405:(e,t,i)=>{i.d(t,{V5:()=>n,e7:()=>l,zc:()=>r});var a=i(37270);async function l(e){var t,i;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==l)return[];const n=await l.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=l,{objectIdField:s,typeIdField:o,globalIdField:d,relationships:u}=e;if(n.includes("*"))return["*"];const p=r?(0,a.CH)(e):[],h=(0,a.Q0)(e.fieldsIndex,[...n,...p]);return o&&h.push(o),h&&s&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(s)&&!h.includes(s)&&h.push(s),h&&d&&null!==(i=e.fieldsIndex)&&void 0!==i&&i.has(d)&&!h.includes(d)&&h.push(d),u&&u.forEach((t=>{var i;const{keyField:a}=t;h&&a&&(null===(i=e.fieldsIndex)||void 0===i?void 0:i.has(a))&&!h.includes(a)&&h.push(a)})),h}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function r(e,t){return null!=n(e,{defaultPopupTemplateEnabled:t})}},45008:(e,t,i)=>{i.d(t,{K:()=>n});i(59486);var a=i(68860),l=i(53866);function n(e,t,i){var n;let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new l.Z,s=0;if("2d"===i.type)s=t*(null!==(n=i.resolution)&&void 0!==n?n:0);else if("3d"===i.type){const l=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;s=null==n||n.equals(i.spatialReference)?t*l:(0,a.c9)(n)/(0,a.c9)(i.spatialReference)}const o=e.x-s,d=e.y-s,u=e.x+s,p=e.y+s,{spatialReference:h}=i;return r.xmin=Math.min(o,u),r.ymin=Math.min(d,p),r.xmax=Math.max(o,u),r.ymax=Math.max(d,p),r.spatialReference=h,r}new l.Z}}]);
//# sourceMappingURL=45883.d3b91e8d.chunk.js.map