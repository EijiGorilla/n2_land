"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[5641],{55641:(t,e,n)=>{n.r(e),n.d(e,{executeForTopExtents:()=>u});n(59486);var o=n(23084),r=n(88031),l=n(54307),i=n(53866);async function u(t,e,n){const u=(0,o.en)(t),s=await(0,r.m5)(u,l.Z.from(e),{...n}),d=s.data.extent;return!d||isNaN(d.xmin)||isNaN(d.ymin)||isNaN(d.xmax)||isNaN(d.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:i.Z.fromJSON(d)}}},88031:(t,e,n)=>{n.d(e,{IJ:()=>c,m5:()=>p,vB:()=>F,w7:()=>m});var o=n(76200),r=n(35995),l=n(77981),i=n(91340),u=n(92975),s=n(22585),d=n(68620);const a="Layer does not support extent calculation.";function y(t,e){var n,o;const r=t.geometry,i=t.toJSON(),s=i;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,l.Ji)(r),s.inSR=(0,u.B9)(r.spatialReference)),null!==(n=i.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),null!==(o=i.topFilter)&&void 0!==o&&o.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=(0,u.B9)(i.outSR):r&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete i.timeExtent}return s}async function c(t,e,n,o){const r=await x(t,e,"json",o);return(0,d.p)(e,n,r.data),r}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:x(t,e,"json",n,{returnIdsOnly:!0})}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:x(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):x(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function x(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,r.mN)(t):t,a=e.geometry?[e.geometry]:[];return l.responseType="json",(0,i.aX)(a,null,l).then((t=>{const i=null===t||void 0===t?void 0:t[0];null!=i&&((e=e.clone()).geometry=i);const a=(0,s.A)({...d.query,f:n,...u,...y(e,u)});return(0,o.Z)((0,r.v_)(d.path,"queryTopFeatures"),{...l,query:{...a,...l.query}})}))}}}]);
//# sourceMappingURL=5641.3014efa3.chunk.js.map