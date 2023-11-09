"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[9714],{42069:(e,s,t)=>{t.d(s,{A:()=>h});var i=t(27366),a=t(42537),l=t(66978),r=t(94172),o=t(49861),n=(t(25243),t(63780),t(93169),t(69912)),d=t(5354);const h=e=>{let s=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,s=e.signal;this.addHandles((0,a.kB)((()=>e.abort()))),await(0,r.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),s),(0,l.k_)(s);const t=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(t)throw t}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return(0,i._)([(0,o.Cb)()],s.prototype,"view",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"slicePlaneEnabled",void 0),s=(0,i._)([(0,n.j)("esri.views.3d.layers.LayerView3D")],s),s}},9714:(e,s,t)=>{t.r(s),t.d(s,{default:()=>W});var i,a,l=t(27366),r=(t(59486),t(10064)),o=t(32718),n=t(94172),d=t(49861),h=(t(25243),t(63780),t(93169),t(69912)),u=t(11186),c=t(71353),p=t(5986),y=t(41414),v=t(92975),b=t(42069),m=t(39261),_=t(23224),g=t(67581),w=t(78952);(a=i||(i={}))[a.API=1]="API",a[a.VerboseAPI=2]="VerboseAPI",a[a.Error=3]="Error";const f=(0,c.c)(),S=(0,c.c)();let V=class extends((0,_.i)((0,b.A)(g.Z))){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e,s;return null!==(e=null===(s=this.layer.parsedUrl)||void 0===s?void 0:s.path)&&void 0!==e?e:""}get wasmLayerId(){return this._wasmLayerId}initialize(){var e;if(this._dbgFlags.add(i.Error),"local"!==this.view.viewingMode)throw new r.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(null===(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||void 0===e||!e.textureFloat)throw new r.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const s=this.layer.spatialReference;if(!(0,v.fS)(s,this.view.spatialReference))throw new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=this.layer.currentVariableId,a=this.layer.getVolume(t),l=this.layer.getVariable(t);if(null!=a&&null!=l){const e=a.dimensions[0],s=a.dimensions[1],t=a.zDimension;if(t>1){const i=a.dimensions[t],r=e.size*s.size*i.size;let o=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":o=2;break;case"Int32":case"UInt32":case"Float32":o=4}this._futureMemory=o*r}}const o=(0,m.JF)(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=(0,n.YP)((()=>this.suspended),(e=>{const s=(0,m.$L)(this.view);s&&s.setEnabled(this,!e)}),n.nn),this.addHandles([(0,n.YP)((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),(0,n.YP)((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),(0,n.YP)((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),(0,n.YP)((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),(0,n.YP)((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),(0,n.YP)((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),(0,n.YP)((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),(0,n.YP)((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),(0,n.YP)((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e))),(0,n.YP)((()=>this.slicePlaneEnabled),(e=>this._pushAnalysisSliceToWasm(e,this.view.slicePlane))),(0,n.YP)((()=>this.view.slicePlane),(e=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,e)))])})).catch((e=>{if((0,m.mq)(this),this._wasmLayerId=-1,-1===e)throw new r.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new r.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(o)}destroy(){(0,m.mq)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=(0,m.$L)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}whenGraphicBounds(e,s){const t=e.attributes["Voxel.WorldPosition"];if(t){const e=(0,y.cS)(),s=JSON.parse(t);if((0,p.S)(s,this.view.renderSpatialReference,S,this.view.spatialReference||w.Z.WGS84))return(0,y.pp)(e,S),Promise.resolve({boundingBox:e,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=(0,m.$L)(this.view);null===e||void 0===e||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=(0,m.$L)(this.view);null===e||void 0===e||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){var e;const s=(0,m.$L)(this.view);return null!==(e=null===s||void 0===s?void 0:s.getLayerTimes(this))&&void 0!==e?e:[]}getCurrentLayerTimeIndex(){var e;const s=(0,m.$L)(this.view);return null!==(e=null===s||void 0===s?void 0:s.getCurrentLayerTimeIndex(this))&&void 0!==e?e:0}_pushRenderModeToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setRenderMode(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setStaticSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setCurrentVariable(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setVariableStyles(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const t=null!=s?s:this.layer.enableSlices;for(let i=0;i<e.length;++i){const s=e[i];for(const e of s.slices)e.enabled=e.enabled&&t}}_pushVolumeStylesToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const t=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(t?"have WASM":"don't have WASM!!!"));let a=!1;if(t){if(s){const i=s.origin;(0,u.b)(f,s.basis1,s.basis2),(0,u.n)(f,f),a=t.setAnalysisSlice(this,e,i,f)}else(0,u.s)(f,0,0,1),a=t.setAnalysisSlice(this,!1,f,f);a||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableDynamicSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=(0,m.$L)(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const t=this.layer.getVolumeStyles();this._accountForEnableSlices(t,e),s.setVolumeStyles(this,t)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableIsosurfaces(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=(0,m.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?o.Z.getLogger(this).error(s):o.Z.getLogger(this).warn(s))}};(0,l._)([(0,d.Cb)()],V.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],V.prototype,"baseUrl",null),(0,l._)([(0,d.Cb)({type:Boolean})],V.prototype,"slicePlaneEnabled",void 0),V=(0,l._)([(0,h.j)("esri.views.3d.layers.VoxelLayerView3D")],V);const W=V},23224:(e,s,t)=>{t.d(s,{i:()=>n});var i=t(27366),a=t(10064),l=(t(32718),t(25243),t(63780),t(93169),t(69912)),r=t(37270),o=t(24405);const n=e=>{let s=class extends e{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:t}=s;if(!t)throw new a.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});if(!(0,o.V5)(s,e))throw new a.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,s){this._validateFetchPopupFeatures(s);const t=null!=s?s.clientGraphics:null;if(!t||0===t.length)return[];const i="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let a=[];"fieldsIndex"in this.layer&&(a=(0,r.Lk)(this.layer.fieldsIndex,await(0,o.e7)(i,(0,o.V5)(this.layer,s)))),await this.prepareFetchPopupFeatures(a);const l=new Set,n=[],d=[];for(const o of t)(0,r.Gm)(a,o,l)?d.push(o):n.push(o);return 0===d.length?n:this.whenGraphicAttributes(d,[...l]).catch((()=>d)).then((e=>n.concat(e)))}};return s=(0,i._)([(0,l.j)("esri.views.3d.layers.support.PopupSceneLayerView")],s),s}},67581:(e,s,t)=>{t.d(s,{Z:()=>y});var i=t(27366),a=t(7138),l=t(91505),r=t(79056),o=t(32718),n=t(92026),d=t(67426),h=t(49861),u=(t(25243),t(63780),t(93169),t(69912)),c=t(46634);let p=class extends((0,r.IG)((0,d.v)(l.Z.EventedMixin(a.Z)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var s;const t=this.layer&&this.layer.id||"no id",i=(null===(s=this.layer)||void 0===s?void 0:s.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(t,"')"),e)}}))}destroy(){this._updatingHandles=(0,n.SC)(this._updatingHandles)}get fullOpacity(){var e,s,t,i;return(null!==(e=null===(s=this.layer)||void 0===s?void 0:s.opacity)&&void 0!==e?e:1)*(null!==(t=null===(i=this.parent)||void 0===i?void 0:i.fullOpacity)&&void 0!==t?t:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,s,t;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(s=this.parent)&&void 0!==s&&s.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)||!1}getSuspendInfo(){var e,s;const t=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(s=this.view)&&void 0!==s&&s.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,i._)([(0,h.Cb)()],p.prototype,"fullOpacity",null),(0,i._)([(0,h.Cb)()],p.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],p.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,i._)([(0,h.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,i._)([(0,h.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,i._)([(0,h.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,i._)([(0,h.Cb)()],p.prototype,"visible",null),(0,i._)([(0,h.Cb)()],p.prototype,"view",void 0),p=(0,i._)([(0,u.j)("esri.views.layers.LayerView")],p);const y=p}}]);
//# sourceMappingURL=9714.d5087acc.chunk.js.map