"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[6421],{55107:(e,t,n)=>{var o,r;n.d(t,{B:()=>r,P:()=>o}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(o||(o={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(r||(r={}))},71323:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>E,dracoDecompressPointCloudData:()=>m,filterObbsForModifications:()=>y,filterObbsForModificationsSync:()=>N,initialize:()=>I,interpretObbModificationResults:()=>S,process:()=>h,project:()=>g,setLegacySchema:()=>p,setModifications:()=>b,setModificationsSync:()=>L,test:()=>_,transformNormals:()=>w});var o=n(78952),r=n(86372),i=n(80880),s=n(50250),a=n(32035),c=n(55107),l=n(65905);function f(e){return(0,l.V)("esri/libs/i3s/".concat(e))}let u;var d=n(95964);async function h(e){M=await U();const t=[e.geometryBuffer];return{result:R(M,e,t),transferList:t}}async function m(e){var t;M=await U();const n=[e.geometryBuffer],{geometryBuffer:o}=e,r=o.byteLength,i=M._malloc(r),s=new Uint8Array(M.HEAPU8.buffer,i,r);s.set(new Uint8Array(o));const a=M.dracoDecompressPointCloudData(i,s.byteLength);if(M._free(i),a.error.length>0)throw new Error("i3s.wasm: ".concat(a.error));const c=(null===(t=a.featureIds)||void 0===t?void 0:t.length)>0?a.featureIds.slice():null,l=a.positions.slice();return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function y(e){await U(),N(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function b(e){await U(),L(e)}async function p(e){M=await U(),M.setLegacySchema(e.context,e.jsonSchema)}async function g(e){const{localMatrix:t,origin:a,positions:c,vertexSpace:l,localMode:f}=e,u=o.Z.fromJSON(e.inSpatialReference),d=o.Z.fromJSON(e.outSpatialReference);let h;if("georeferenced"===l.type){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([Promise.resolve().then(n.bind(n,50628)),Promise.resolve().then(n.bind(n,79803))]);await t(u,d),h=new Float64Array(c.length),e(c,u,0,h,d,0,h.length/3)}else{const e="georeferencedRelative"===l.type?i.Z.fromJSON(l):s.Z.fromJSON(l),{project:o}=await Promise.resolve().then(n.bind(n,57898));h=(0,r.mB)(o({positions:c,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:u,outSpatialReference:d,localMode:f}))}const m=h.length,[y,b,p]=a;for(let n=0;n<m;n+=3)h[n]-=y,h[n+1]-=b,h[n+2]-=p;return{result:{projected:h,original:c},transferList:[h.buffer,c.buffer]}}async function w(e){let{normalMatrix:t,normals:n}=e;const o=new Float32Array(n.length);return(0,a.a)(o,n,t),(0,a.n)(o,o),{result:{transformed:o,original:n},transferList:[o.buffer,n.buffer]}}function E(e){P(e)}let v,M;function L(e){if(!M)return;const t=e.modifications,n=M._malloc(8*t.length),o=new Float64Array(M.HEAPU8.buffer,n,t.length);for(let r=0;r<t.length;++r)o[r]=t[r];M.setModifications(e.context,n,t.length,e.isGeodetic),M._free(n)}function R(e,t,n){const{context:o,localOrigin:r,globalTrafo:i,mbs:s,obb:a,elevationOffset:l,geometryBuffer:f,geometryDescriptor:u,indexToVertexProjector:d,vertexToRenderProjector:h}=t,m=e._malloc(f.byteLength),y=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(e.HEAPU8.buffer,m,f.byteLength);b.set(new Uint8Array(f));const p=new Float64Array(e.HEAPU8.buffer,y,33);A(p,r);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g);A(w,i),g+=16*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,s),g+=4*p.BYTES_PER_ELEMENT,null!=a&&(w=new Float64Array(p.buffer,g),A(w,a.center),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,a.halfSize),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,a.quaternion));const E=u,v={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:E.featureIndex},M=e.process(o,!!t.obb,m,b.byteLength,E,v,y,l,d,h,t.normalReferenceFrame);if(e._free(y),e._free(m),M.error.length>0)throw new Error("i3s.wasm: ".concat(M.error));if(M.discarded)return null;const L=M.componentOffsets.length>0?M.componentOffsets.slice():null,R=M.featureIds.length>0?M.featureIds.slice():null,S=M.anchorIds.length>0?Array.from(M.anchorIds):null,N=M.anchors.length>0?Array.from(M.anchors):null,P=M.interleavedVertedData.slice().buffer,I=M.indicesType===c.P.Int16?new Uint16Array(M.indices.buffer,M.indices.byteOffset,M.indices.byteLength/2).slice():new Uint32Array(M.indices.buffer,M.indices.byteOffset,M.indices.byteLength/4).slice(),U=M.positions.slice(),_=M.positionIndicesType===c.P.Int16?new Uint16Array(M.positionIndices.buffer,M.positionIndices.byteOffset,M.positionIndices.byteLength/2).slice():new Uint32Array(M.positionIndices.buffer,M.positionIndices.byteOffset,M.positionIndices.byteLength/4).slice(),O={layout:t.layouts[0],interleavedVertexData:P,indices:I,hasColors:M.hasColors,hasModifications:M.hasModifications,positionData:{data:U,indices:_}};return R&&n.push(R.buffer),L&&n.push(L.buffer),n.push(P),n.push(I.buffer),n.push(U.buffer),n.push(_.buffer),{componentOffsets:L,featureIds:R,anchorIds:S,anchors:N,transformedGeometry:O,obb:M.obb}}function S(e){return 0===e?d.O4.Unmodified:1===e?d.O4.PotentiallyModified:2===e?d.O4.Culled:d.O4.Unknown}function N(e){if(!M)return;const{context:t,buffer:n}=e,o=M._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(M.HEAPU8.buffer,o,r),s=new Float64Array(n);i.set(s),M.filterOBBs(t,o,r),s.set(i),M._free(o)}function P(e){M&&0===M.destroy(e)&&(M=null)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function I(){M||await U()}function U(){return M?Promise.resolve(M):(v||(v=(u||(u=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const o=n({locateFile:f,onRuntimeInitialized:()=>e(o)});delete o.then})))).catch((e=>{throw e}))),u).then((e=>(M=e,v=null,M)))),v)}const _={transform:(e,t)=>M&&R(M,e,t),destroy:P}},95964:(e,t,n)=>{n.d(t,{$i:()=>f,FE:()=>a,Hw:()=>i,NB:()=>u,O4:()=>r,U_:()=>o,oQ:()=>d,w5:()=>s});var o,r,i,s,a,c,l=n(23470);class f{constructor(e,t){this.id=e,this.mbs=t,this.renderMbs=(0,l.f)(0,0,0,-1),this.elevationRangeMin=NaN,this.elevationRangeMax=NaN}invalidateElevationRange(){this.elevationRangeMin=NaN}}(c=o||(o={}))[c.Unmodified=0]="Unmodified",c[c.Culled=1]="Culled",c[c.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class u extends f{constructor(e,t,n,o,s,a,c,l,f,u){super(e,n),this.index=t,this.childCount=o,this.level=s,this.resources=a,this.version=c,this.lodMetric=l,this.maxError=f,this.numFeatures=u,this.failed=!1,this.cacheState=i.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={}));class d{constructor(e,t,n,o){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=o}}}}]);
//# sourceMappingURL=6421.1cff7e3e.chunk.js.map