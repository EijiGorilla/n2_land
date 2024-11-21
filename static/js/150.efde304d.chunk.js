"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[150],{60150:(e,t,r)=>{r.r(t),r.d(t,{default:()=>fe});var i=r(27366),n=r(11582),o=r(80987),s=r(10064),l=r(93002),a=r(97642),d=r(66978),u=r(94172),p=r(76672),y=r(35995),c=r(49861),h=(r(93169),r(32718)),b=(r(84936),r(38511)),v=r(69912),f=r(30651),g=r(27961),m=r(11936),w=r(6693),_=r(46671),C=r(56601),F=r(75088),S=r(6061),I=r(29598),O=r(71684),j=r(56811),E=r(99063),T=r(25899),x=r(70361),A=r(62594),L=r(25610),Z=r(37270),P=r(44055),G=r(94931),q=(r(15126),r(98689),r(57823),r(32066),r(49018)),R=r(34999),V=r(28189),D=(r(9014),r(79056)),k=r(84652),N=r(54472),M=r(18202),U=r(31201),Q=r(47492),H=r(83485),J=r(12224),B=r(77748),Y=r(85116),z=r(21149),K=r(81085),X=r(61574);const W={key:"type",base:q.Z,errorContext:"renderer",typeMap:{simple:R.Z,"unique-value":V.Z,"class-breaks":G.Z}},$=(0,L.v)(),ee=(0,Q.d)({types:W});let te=0;function re(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ie(e){switch(e){case"point":case"multipoint":return X.xA.clone();case"polyline":return X.CJ.clone();case"polygon":case"multipatch":return X.z3.clone();default:return null}}function ne(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((t=>t.code===e))}function oe(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},n=ne(e,t);if(null!=n){const{defaultValues:e}=n;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new J.Z({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let se=class extends((0,a.R)((0,n.J)((0,D.IG)(N.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(te++),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return(0,Z.YN)(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}get effectiveCapabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){var i;const{fields:n,parent:o}=this;let s;if(n){s=[];let e=0;n.forEach((t=>{var r;let{name:i,alias:n,editable:l,visible:a}=t;if(!a)return;const d=null===o||void 0===o||null===(r=o.fields)||void 0===r?void 0:r.find((e=>e.name===i));if(!d)return;const u={name:i};let p=!1;n!==d.alias&&(u.alias=n,p=!0),l!==d.editable&&(u.editable=l,p=!0),s.push(u),p&&e++})),0===e&&s.length===n.length&&(s=null)}else s=(0,k.d9)(e);(null===(i=s)||void 0===i?void 0:i.length)&&(0,M.RB)(r,s,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;const{subtypes:n,subtypeField:o}=e,s=null===n||void 0===n?void 0:n.find((e=>e.code===r)),l=null===s||void 0===s?void 0:s.defaultValues,a=null===s||void 0===s?void 0:s.domains,d=[];for(const y of i){var u,p;const e=y.clone(),{name:i}=e,n=null===t||void 0===t?void 0:t.find((e=>e.name===i));if(e.visible=!t||!!n,n){const{alias:t,editable:r}=n;t&&(e.alias=t),!1===r&&(e.editable=!1)}const s=null!==(u=null===l||void 0===l?void 0:l[i])&&void 0!==u?u:null;e.defaultValue=i===o?r:s;const c=null!==(p=null===a||void 0===a?void 0:a[i])&&void 0!==p?p:null;e.domain=i===o?null:c?"inherited"===c.type?e.domain:c.clone():null,d.push(e)}return d}get floorInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}get geometryType(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||h.Z.getLogger(this).error(ae("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,Z.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new R.Z({symbol:ie(e)})}(e.geometryType):null}readRendererFromService(e,t,r){var i,n;if("Table"===t.type)return null;const o=null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer,s=ee(o,t,r);let l;const{subtypeCode:a}=this;if(null!=a&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&null!=e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(s,t.subtypeField)){var d;const e=null===(d=s.uniqueValueInfos)||void 0===d?void 0:d.find((e=>{let{value:t}=e;return(t="number"==typeof t?String(t):t)===String(a)}));e&&(l=new R.Z({symbol:e.symbol}))}else"simple"!==(null===s||void 0===s?void 0:s.type)||(null===(n=s.visualVariables)||void 0===n?void 0:n.length)||(l=s);return l}readRenderer(e,t,r){var i,n;const o=null===t||void 0===t||null===(i=t.layerDefinition)||void 0===i||null===(i=i.drawingInfo)||void 0===i?void 0:i.renderer;if(!o)return;const s=null===(n=o.visualVariables)||void 0===n?void 0:n.some((e=>"rotationInfo"!==e.type));return s?void 0:ee(o,t,r)||void 0}get spatialReference(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}get subtypeField(){var e;return null===(e=this.parent)||void 0===e?void 0:e.subtypeField}readTemplatesFromService(e,t){return[oe(this.subtypeCode,t)]}readTitleFromService(e,t){const r=ne(this.subtypeCode,t);return null!=r?r.name:null}get url(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw ae("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw ae("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw ae("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw ae("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:n}=this;if(r){const{displayField:e,editFieldsInfo:o,objectIdField:s}=r;t={displayField:e,editFieldsInfo:o,fields:i,objectIdField:s,title:n}}return(0,K.eZ)(t,e)}createQuery(){if(!this.parent)throw ae("createQuery");const e=(0,A.rP)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,p._)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw ae("queryAttachments");const i=e.clone();return i.where=le(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){var r;const i=await this.load();if(!i.parent)throw ae("queryFeatures");const n=null!==(r=z.Z.from(e))&&void 0!==r?r:i.createQuery();return null!=e&&(n.where=le(n.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"capabilities",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"effectiveCapabilities",null),(0,i._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],se.prototype,"charts",void 0),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],se.prototype,"editingEnabled",void 0),(0,i._)([(0,c.Cb)({type:Boolean,readOnly:!0})],se.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],se.prototype,"fieldOverrides",void 0),(0,i._)([(0,U.c)("fieldOverrides")],se.prototype,"writeFieldOverrides",null),(0,i._)([(0,c.Cb)({...$.fields,readOnly:!0,json:{read:!1}})],se.prototype,"fields",null),(0,i._)([(0,c.Cb)($.fieldsIndex)],se.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"floorInfo",null),(0,i._)([(0,c.Cb)({type:H.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],se.prototype,"formTemplate",void 0),(0,i._)([(0,c.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],se.prototype,"id",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"geometryType",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"type",void 0),(0,i._)([(0,c.Cb)(re((0,k.d9)(x.iR)))],se.prototype,"labelsVisible",void 0),(0,i._)([(0,c.Cb)({type:[B.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Y.r},write:{ignoreOrigin:!0}}})],se.prototype,"labelingInfo",void 0),(0,i._)([(0,c.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],se.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)(re((0,k.d9)(x.rn)))],se.prototype,"legendEnabled",void 0),(0,i._)([(0,c.Cb)({type:["show","hide"]})],se.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)((()=>{const e=(0,k.d9)(x.rO);return e.json.origins.service.read=!1,re(e)})())],se.prototype,"minScale",void 0),(0,i._)([(0,c.Cb)((()=>{const e=(0,k.d9)(x.u1);return e.json.origins.service.read=!1,re(e)})())],se.prototype,"maxScale",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],se.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],se.prototype,"opacity",void 0),(0,i._)([(0,c.Cb)({clonable:!1})],se.prototype,"parent",void 0),(0,i._)([(0,c.Cb)(re((0,k.d9)(x.C_)))],se.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:P.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],se.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],se.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)({types:W,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],se.prototype,"renderer",null),(0,i._)([(0,b.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],se.prototype,"readRendererFromService",null),(0,i._)([(0,b.r)("renderer",["layerDefinition.drawingInfo.renderer"])],se.prototype,"readRenderer",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"spatialReference",null),(0,i._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],se.prototype,"subtypeCode",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"subtypeField",null),(0,i._)([(0,c.Cb)({type:[J.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],se.prototype,"templates",void 0),(0,i._)([(0,b.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],se.prototype,"readTemplatesFromService",null),(0,i._)([(0,c.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],se.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["subtypes"])],se.prototype,"readTitleFromService",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"url",null),(0,i._)([(0,c.Cb)({readOnly:!0})],se.prototype,"userHasUpdateItemPrivileges",null),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],se.prototype,"visible",void 0),se=(0,i._)([(0,v.j)("esri.layers.support.SubtypeSublayer")],se);const le=(e,t,r)=>{const i=new RegExp("".concat(t,"\\s*=\\s*\\d+")),n="".concat(t,"=").concat(r),o=null!==e&&void 0!==e?e:"";return i.test(o)?o.replace(i,n):(0,p._)(n,o)},ae=e=>new s.Z("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e)),de=se;var ue=r(57370),pe=r(26704),ye=r(84933);const ce="SubtypeGroupLayer";function he(e,t){return new s.Z("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}const be=(0,L.v)();let ve=class extends((0,F.B)((0,C.o1)((0,w.h7)((0,E.n)((0,j.M)((0,O.Q)((0,m.Y)((0,S.q)((0,I.I)((0,a.R)((0,_.N)((0,g.V)((0,n.J)(f.Z)))))))))))))){constructor(){super(...arguments),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(o.Z.ofType(de)),this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,d.Ds)((async(e,t,i)=>{const{save:n,saveAs:o}=await r.e(2224).then(r.bind(r,2224));switch(e){case ye.x.SAVE:return n(this,t);case ye.x.SAVE_AS:return o(this,i,t)}})),this.addHandles((0,u.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),u.Z_))}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.r9).then((async()=>{if(!this.url)throw new s.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,A.nU)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,A.sX)(this)}get parsedUrl(){const e=(0,y.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,t){let{name:r}=t;return this.url?(0,T.a7)(this.url,r):r}async addAttachment(e,t){return(0,A.JD)(this,e,t,ce)}async updateAttachment(e,t,r){return(0,A.Y5)(this,e,t,r,ce)}async applyEdits(e,t){return(0,A.Jj)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,d.Hl)(Promise.all([r.e(7607),r.e(8663),r.e(7358)]).then(r.bind(r,27358)),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=(0,A.rP)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,p._)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}async deleteAttachments(e,t){return(0,A.FV)(this,e,t,ce)}async fetchRecomputedExtents(e){return(0,A.Ci)(this,e,ce)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,l.G)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,A.SU)(this,e,t,ce)}async queryFeatures(e,t){var r,i;const n=await this.load(),o=null!==(r=z.Z.from(e))&&void 0!==r?r:n.createQuery(),s=null!==(i=o.outFields)&&void 0!==i?i:[];s.includes(this.subtypeField)||(s.push(this.subtypeField),o.outFields=s);const l=await n.source.queryFeatures(o,t);if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return l}async queryObjectIds(e,t){return(0,A.tD)(this,e,t,ce)}async queryFeatureCount(e,t){return(0,A.VG)(this,e,t,ce)}async queryExtent(e,t){return(0,A.KE)(this,e,t,ce)}async queryRelatedFeatures(e,t){return(0,A.kp)(this,e,t,ce)}async queryRelatedFeaturesCount(e,t){return(0,A.C9)(this,e,t,ce)}async save(e){return this._debouncedSaveOperations(ye.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ye.x.SAVE_AS,t,e)}write(e,t){var r;const{origin:i,layerContainerType:n,messages:o}=t;if(this.isTable){if("web-scene"===i||"web-map"===i&&"tables"!==n)return null!==o&&void 0!==o&&o.push(he(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===i&&"tables"===n)return null!==o&&void 0!==o&&o.push(he(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?super.write(e,t):(null!==o&&void 0!==o&&o.push(new s.Z("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,pe.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var t;this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),null===(t=this.subtypes)||void 0===t||!t.length)throw new s.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,Z.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,A.gG)(this)}_verifyFields(){var e,t,r;const i=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+i+")"),this.isTable||-1!==i.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((e=>"geometry"===e.type)))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+i+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,this._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,this._sublayerLookup.delete(t.subtypeCode)}))],"sublayers-owner"))}};(0,i._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"createQueryVersion",null),(0,i._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"editingEnabled",null),(0,i._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.Cb)({...be.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ve.prototype,"fields",void 0),(0,i._)([(0,c.Cb)(be.fieldsIndex)],ve.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.Cb)(x.id)],ve.prototype,"id",void 0),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ve.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],ve.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)(be.outFields)],ve.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({clonable:!1})],ve.prototype,"source",null),(0,i._)([(0,c.Cb)({type:o.Z.ofType(de),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>{let{code:i}=e;const n=new de({subtypeCode:i});return n.read(t,r),n}));return new(o.Z.ofType(de))(i)}}}},name:"layers",write:{ignoreOrigin:!0}}})],ve.prototype,"sublayers",void 0),(0,i._)([(0,c.Cb)({type:ue.Z})],ve.prototype,"timeInfo",void 0),(0,i._)([(0,c.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ve.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["name"])],ve.prototype,"readTitleFromService",null),(0,i._)([(0,c.Cb)({json:{read:!1}})],ve.prototype,"type",void 0),ve=(0,i._)([(0,v.j)("esri.layers.SubtypeGroupLayer")],ve);const fe=ve}}]);
//# sourceMappingURL=150.efde304d.chunk.js.map