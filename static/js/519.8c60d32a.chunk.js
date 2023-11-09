"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[519,3139],{28458:(e,a,r)=>{r.d(a,{L:()=>n});var t=r(41226);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.T)(e,a);return this._serviceMetadatas.set(e,n),n}}},20519:(e,a,r)=>{r.d(a,{k:()=>h,populateOperationalLayers:()=>s});var t=r(80987),n=(r(93169),r(28458)),i=r(19610),l=r(98995);function o(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var c=r(43139),y=r(21371);async function s(e,a,r){if(!a)return;const t=[];for(const i of a)t.push(w(i,r));const n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},v={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...p,LinkChartLayer:"LinkChartLayer"},I={...S},T={...f};async function w(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await h(t,a,r):b(a)?function(e,a,r){a.itemId&&(e.portalItem=new l.default({id:a.itemId,portal:null===r||void 0===r?void 0:r.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;A(t,e,a,i,r);const l=null===(n=a.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];l&&t.read(l,r)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,a,r.context):g(a)&&await async function(e,a,r){var t;const n=i.T.FeatureLayer,l=await n(),o=a.featureCollection,c=null===o||void 0===o?void 0:o.showLegend,y=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new l;i.read(t,r);const o={...r,ignoreDefaults:!0};return A(i,e,a,n,o),null!=c&&i.read({showLegend:c},o),i}));e.layers.addMany(null!==y&&void 0!==y?y:[])}(t,a,r.context)),await(0,y.y)(t,r.context),t}(await M(e,a),e,a)}async function M(e,a){var r,t;const y=a.context,s=G(y);let u=e.layerType||e.type;!u&&(null===a||void 0===a?void 0:a.defaultLayerType)&&(u=a.defaultLayerType);const d=s[u];let L=d?i.T[d]:i.T.UnknownLayer;if(b(e)){const a=null===y||void 0===y?void 0:y.portal;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});await r.load();const t=(await(0,c.v)(r,new n.L)).className||"UnknownLayer";L=i.T[t]}}else"ArcGISFeatureLayer"===u?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?L=i.T.MapNotesLayer:function(e){return o(e,"route")}(e)?L=i.T.RouteLayer:g(e)&&(L=i.T.GroupLayer):null!==(r=e.wmtsInfo)&&void 0!==r&&r.url&&e.wmtsInfo.layerIdentifier?L=i.T.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(L=i.T.UnsupportedLayer);return L()}function g(e){var a,r;return"ArcGISFeatureLayer"===e.layerType&&!b(e)&&(null!==(a=null===(r=e.featureCollection)||void 0===r||null===(r=r.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)>1}function b(e){return"Feature Collection"===e.type}function G(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=v;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=T;break;case"tables":a=I;break;default:a=m}break;default:switch(e.layerContainerType){case"basemap":a=f;break;case"tables":a=S;break;default:a=p}}return a}async function h(e,a,r){const n=new t.Z,i=s(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(l){e.destroy();for(const e of n)e.destroy();throw l}}catch(l){throw l}}function A(e,a,r,t,n){var i,l;e.read({id:"".concat(a.id,"-sublayer-").concat(t),visibility:null===(i=null===(l=r.visibleLayers)||void 0===l?void 0:l.includes(t))||void 0===i||i},n)}},97827:(e,a,r)=>{r.d(a,{$O:()=>i,CD:()=>s,Ok:()=>l,Q4:()=>o,XX:()=>c,_Y:()=>y,bS:()=>n});var t=r(84076);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,r){var t,i;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(i=e)||void 0===i?void 0:i.tables)){var l,o;const t=await r.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(l=t.layers)||void 0===l?void 0:l.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(o=t.tables)||void 0===o?void 0:o.map(n))}return e}function l(e){const a=e.layers;if(null!==a&&void 0!==a&&a.length)return a[0].id;const r=e.tables;return null!==r&&void 0!==r&&r.length?r[0].id:null}function o(e){var a,r,t,n;return(null!==(a=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function c(e){var a;const r=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function y(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function s(e,a,r){var i,l;if(null===e||void 0===e||!e.url)return null!==(i=a)&&void 0!==i?i:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var o;const t=await r.fetchServiceMetadata(e.url);a.layers=null===(o=t.layers)||void 0===o?void 0:o.map(n)}const{serverUrl:c,portalItem:y}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==c)return a.tables=[],a;if(!a.tables&&y){const e=await y.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var s;const e=await r.fetchServiceMetadata(c);a.tables=null===e||void 0===e||null===(s=e.tables)||void 0===s?void 0:s.map(n)}}if(a.tables)for(const t of a.tables)t.url="".concat(c,"/").concat(t.id);return a}},43139:(e,a,r)=>{r.d(a,{fromItem:()=>u,v:()=>d});var t=r(10064),n=r(84076),i=r(28458),l=r(37933),o=r(19610),c=r(98995),y=r(97827),s=r(73117);async function u(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.L;return async function(e){const a=e.className,r=o.T[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"Map Service":return async function(e,a){return await async function(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Feature Service":return async function(e,a){const r=await L(e,a);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,a);case"Feature Collection":return async function(e){await e.load();const a=(0,s._$)(e,"Map Notes"),r=(0,s._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,s._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,y.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,a){const r=await L(e,a,(async()=>{try{var r;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),i=await a.fetchServiceMetadata(t);return null!==(r=null===i||void 0===i?void 0:i.tables)&&void 0!==r?r:[]}catch{return[]}}));if("object"==typeof r){var t;const n={};let i;if(null!=r.id?(n.layerId=r.id,i="".concat(e.url,"/layers/").concat(r.id)):i=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const a of Object.keys(l.fb))if(e.typeKeywords.includes(a))return{className:l.fb[a]};const o=await a.fetchServiceMetadata(i);return{className:l.fb[null===o||void 0===o?void 0:o.layerType]||"SceneLayer",properties:n}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===r||void 0===r?void 0:r.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Image Service":return async function(e,a){var r,t,n,i;await e.load();const l=null!==(r=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==r?r:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=await e.fetchData(),c=null===o||void 0===o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===c)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===c)return{className:"ImageryLayer"};const y=await a.fetchServiceMetadata(e.url),s=null===(n=y.cacheType)||void 0===n?void 0:n.toLowerCase(),u=null===(i=y.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===s||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,a,r){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,y.$O)(n,t,a),r=v(e);if("object"==typeof r){const a=(0,y.XX)(e),t=(0,y._Y)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&null!==t&&void 0!==t&&t.includes(r.id)?"OrientedImageryLayer":"FeatureLayer"}return r}if("Scene Service"===e.type&&(n=await(0,y.CD)(e,n,a)),(0,y.Q4)(n)>0)return v(n);const i=await a.fetchServiceMetadata(t);return r&&(i.tables=await r()),v(i)}function v(e){return 1===(0,y.Q4)(e)&&{id:(0,y.Ok)(e)}}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=519.8c60d32a.chunk.js.map