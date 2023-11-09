"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[28],{42388:(e,t,r)=>{r.d(t,{j:()=>l});var s=r(27366),a=r(7138),i=r(49861),n=(r(25243),r(63780),r(93169),r(69912));const o={visible:"visibleSublayers"};let l=class extends a.Z{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,s=[],a=e=>{const{minScale:r,maxScale:i,sublayers:n,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(n?n.forEach(a):s.push(e))};return null!==r&&void 0!==r&&r.forEach(a),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:a,layers:t}}};(0,s._)([(0,i.Cb)()],l.prototype,"layer",null),(0,s._)([(0,i.Cb)({readOnly:!0})],l.prototype,"layers",null),(0,s._)([(0,i.Cb)({type:Number})],l.prototype,"scale",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],l.prototype,"version",null),(0,s._)([(0,i.Cb)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,s._)([(0,n.j)("esri.layers.support.ExportWMSImageParameters")],l)},30028:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var s=r(27366),a=r(10064),i=(r(32718),r(25243),r(63780),r(93169),r(69912)),n=r(53866),o=r(69229),l=r(92026),p=r(49861),h=r(45948),u=r(42388);const y=e=>{let t=class extends e{initialize(){this.exportImageParameters=new u.j({layer:this.layer})}destroy(){this.exportImageParameters=(0,l.SC)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new a.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new a.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:i,width:n,height:o,x:l,y:p}=s;if(!(i&&n&&o))throw new a.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:o});return t.fetchFeatureInfo(i,n,o,l,p)}};return(0,s._)([(0,p.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,p.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,p.Cb)(h.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,i.j)("esri.layers.mixins.WMSLayerView")],t),t};let c=class extends(y(o.Z)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add((()=>{var e;return null===(e=this.exportImageParameters)||void 0===e?void 0:e.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,s=new n.Z(r[0],r[1],r[2],r[3],this._spatialReference),a=t.imageSize,i=a.width,o=a.height,l=s.width/i;return{extent:s,width:i,height:o,x:Math.round((e.x-s.xmin)/l),y:Math.round((s.ymax-e.y)/l)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};c=(0,s._)([(0,i.j)("esri.views.3d.layers.WMSLayerView3D")],c);const m=c}}]);
//# sourceMappingURL=28.de22062c.chunk.js.map