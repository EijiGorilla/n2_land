"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[1553],{11553:(e,t,s)=>{s.r(t),s.d(t,{toBinaryGLTF:()=>$});var i,n=s(35995),r=s(585);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(i||(i={}));class a{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=a.HEADER_SIZE,this._length+=a.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=a.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const n=this._writeChunk(s,12,i.JSON,32);t&&this._writeChunk(t,n,i.BIN)}_writeHeader(){this._outView.setUint32(0,a.MAGIC,!0),this._outView.setUint32(4,a.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this._outView.setUint8(t,i),t++;return t}_writeArrayBuffer(e,t,s,i,n){new Uint8Array(e,s,n).set(new Uint8Array(t,i,n),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}a.HEADER_SIZE=12,a.CHUNK_HEADER_SIZE=8,a.MAGIC=1179937895,a.VERSION=2;var o,c,h,l,f,u,d,_=s(10064),g=s(32718),p=s(77427),m=s(16889),w=s(68860),E=s(14226),T=s(81949),A=s(48976),y=s(98131),b=s(11186),R=s(71353),x=s(80880),I=s(8623),N=s(53942),O=s(57898);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(o||(o={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(h||(h={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(l||(l={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(f||(f={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(u||(u={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(d||(d={}));var M=s(8548);class S{constructor(e,t,s,i,n){this._buffer=e,this._componentType=s,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const r=this._getElementSize();r>=4&&n!==h.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=r),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const n=this._accessorMax[s];this._accessorMax[s]="number"!=typeof n?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case M.g.BYTE:return new Int8Array(e,t);case M.g.FLOAT:return new Float32Array(e,t);case M.g.SHORT:return new Int16Array(e,t);case M.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case M.g.UNSIGNED_INT:return new Uint32Array(e,t);case M.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this._data.push(t[s]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)"number"!=typeof this._accessorMin[n]&&(this._accessorMin[n]=0),"number"!=typeof this._accessorMax[n]&&(this._accessorMax[n]=0);const i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case M.g.UNSIGNED_BYTE:case M.g.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case M.g.BYTE:case M.g.UNSIGNED_BYTE:return 1;case M.g.SHORT:case M.g.UNSIGNED_SHORT:return 2;case M.g.UNSIGNED_INT:case M.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case l.SCALAR:return 1;case l.VEC2:return 2;case l.VEC3:return 3;case l.VEC4:case l.MAT2:return 4;case l.MAT3:return 9;case l.MAT4:return 16}}}class B{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new S(this,this._gltf,e,t,s);return this._bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const i of this._bufferViews)i.writeOutToBuffer(t,s),s+=i.byteSize;return t}finalize(){var e;if(this._finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),null!==(e=this._gltf.extras)&&void 0!==e&&e.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function C(e,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:i,normal:n}=t,r=s.length/3;for(let a=0;a<r;++a){const e=3*s[3*a],t=3*s[3*a+1],r=3*s[3*a+2],o=(0,b.s)(L,i[e],i[e+1],i[e+2]),c=(0,b.s)(z,i[t],i[t+1],i[t+2]),h=(0,b.s)(V,i[r],i[r+1],i[r+2]),l=(0,b.f)(c,c,o),f=(0,b.f)(h,h,o),u=(0,b.b)(l,l,f);n[e]+=u[0],n[e+1]+=u[1],n[e+2]+=u[2],n[t]+=u[0],n[t+1]+=u[1],n[t+2]+=u[2],n[r]+=u[0],n[r+1]+=u[1],n[r+2]+=u[2]}for(let a=0;a<n.length;a+=3)(0,b.s)(F,n[a],n[a+1],n[a+2]),(0,b.n)(F,F),n[a]=F[0],n[a+1]=F[1],n[a+2]=F[2]}const L=(0,R.c)(),z=(0,R.c)(),V=(0,R.c)(),F=(0,R.c)();s(93169);async function v(e){const t=P(e);if(null==t)throw new _.Z("imageToArrayBuffer","Unsupported image type");const s=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,n.HK)(t)){const e=(0,n.sJ)(t);return"image/jpeg"===(null===e||void 0===e?void 0:e.mediaType)?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),i=await new Promise((e=>t.toBlob(e,s)));if(!i)throw new _.Z("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:s}}function P(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}var D=s(57661);const U=g.Z.getLogger("gltf");class G{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===o.GLB||t.options.imageOutputType===c.GLB;s&&(t.binChunkBuffer=new B(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,b.h)(s,R.Z)||(t.translation=(0,R.g)(s));const i=e.rotation;(0,A.j)(i,y.I)||(t.rotation=(0,y.b)(i));const n=e.scale;(0,b.h)(n,R.O)||(t.scale=(0,R.g)(n));const r=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),i=[r];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),i.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return i}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[r]}_addMesh(e,t){var s,i;null!==(i=(s=this.gltf).meshes)&&void 0!==i||(s.meshes=[]);const n=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=n}_createMeshes(e){const t=this.gltf.extras,s=t.options.bufferOutputType===o.GLB;let i;i=s?t.binChunkBuffer:new B(this.gltf),this.params.origin||(this.params.origin=function(e){const{vertexSpace:t}=e;if(t.isRelative)return t.getOriginPoint(e.spatialReference);const{extent:s}=e,i=s.xmax-s.width/2,n=s.ymax-s.height/2,a=s.zmin;return new r.Z({x:i,y:n,z:a,spatialReference:s.spatialReference})}(e));const{ignoreLocalTransform:n}=this.params,a=n?null:e.transform,{vertexSpace:c,spatialReference:f}=e,u=e.vertexAttributes;let d=null;if("local"===c.type){var g;const e=(0,w.r6)(f);(0,E.b)(k,null!==(g=null===a||void 0===a?void 0:a.localMatrix)&&void 0!==g?g:T.I,[e,e,e]),d=(0,O.Ne)(u,k)}else{const e=n?c.isRelative?new x.Z({origin:(0,R.g)(c.origin)}):new I.Z:c;d=(0,O.Yq)(u,e,a,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(null==d)throw new _.Z("Error during gltf export.");u.position&&d.position===u.position&&(d.position=u.position.slice()),u.normal&&d.normal===u.normal&&(d.normal=u.normal.slice()),u.tangent&&d.tangent===u.tangent&&(d.tangent=u.tangent.slice()),function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&C(s,t)}(e,d),this._flipYZAxis(d);const p=i.addBufferView(M.g.FLOAT,l.VEC3,h.ARRAY_BUFFER);let m,A,y,b;d.normal&&(m=i.addBufferView(M.g.FLOAT,l.VEC3,h.ARRAY_BUFFER)),u.uv&&(A=i.addBufferView(M.g.FLOAT,l.VEC2,h.ARRAY_BUFFER)),d.tangent&&(y=i.addBufferView(M.g.FLOAT,l.VEC4,h.ARRAY_BUFFER)),u.color&&(b=i.addBufferView(M.g.UNSIGNED_BYTE,l.VEC4,h.ARRAY_BUFFER)),p.startAccessor("POSITION"),m&&m.startAccessor("NORMAL"),A&&A.startAccessor("TEXCOORD_0"),y&&y.startAccessor("TANGENT"),b&&b.startAccessor("COLOR_0");const N=d.position.length/3,{position:S,normal:L,tangent:z}=d,{color:V,uv:F}=u;for(let r=0;r<N;++r)p.push(S[3*r]),p.push(S[3*r+1]),p.push(S[3*r+2]),m&&null!=L&&(m.push(L[3*r]),m.push(L[3*r+1]),m.push(L[3*r+2])),A&&null!=F&&(A.push(F[2*r]),A.push(F[2*r+1])),y&&null!=z&&(y.push(z[4*r]),y.push(z[4*r+1]),y.push(z[4*r+2]),y.push(z[4*r+3])),b&&null!=V&&(b.push(V[4*r]),b.push(V[4*r+1]),b.push(V[4*r+2]),b.push(V[4*r+3]));const v=p.endAccessor(),P=this._addAccessor(p.index,v);let D,U,G,Y,H;if(m){const e=m.endAccessor();D=this._addAccessor(m.index,e)}if(A){const e=A.endAccessor();U=this._addAccessor(A.index,e)}if(y){const e=y.endAccessor();G=this._addAccessor(y.index,e)}if(b){const e=b.endAccessor();Y=this._addAccessor(b.index,e)}const Z=[];return e.components&&e.components.length>0&&e.components[0].faces?(H=i.addBufferView(M.g.UNSIGNED_INT,l.SCALAR,h.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(H,e.components,Z,P,D,U,G,Y)):this._addMeshVertexNonIndexed(e.components,Z,P,D,U,G,Y),p.finalize(),m&&m.finalize(),A&&A.finalize(),y&&y.finalize(),H&&H.finalize(),b&&b.finalize(),s||i.finalize(),Z}_flipYZAxis(e){let{position:t,normal:s,tangent:i}=e;this._flipYZBuffer(t,3),this._flipYZBuffer(s,3),this._flipYZBuffer(i,4)}_flipYZBuffer(e,t){if(null!=e)for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],n=e[i];e[s]=n,e[i]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=u.MASK;break;case"auto":case"blend":s.alphaMode=u.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,n=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof N.Z){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=n(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,U.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const r=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),r}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:(0,m.Vl)(t.rotation)},s):s}_addTexture(e){var t;const s=null!==(t=this.gltf.textures)&&void 0!==t?t:[];return this.gltf.textures=s,(0,p.s1)(this._textureMap,e,(()=>{const t={sampler:this._addSampler(e),source:this._addImage(e)},i=s.length;return s.push(t),i}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const i=this.gltf.extras;switch(i.options.imageOutputType){case c.GLB:{const e=i.binChunkBuffer.addBufferView(M.g.UNSIGNED_BYTE,l.SCALAR);if((0,D.$A)(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const i=v(t).then((e=>{let{data:t,type:i}=e;return s.mimeType=i,t}));e.writeAsync(i).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case c.DataURI:if((0,D.$A)(t)){U.warnOnce("Image export for basis compressed textures not available.");break}s.uri=function(e){const t=P(e);return null!=t?t.toDataURL():""}(t);break;default:if((0,D.$A)(t)){U.warnOnce("Image export for basis compressed textures not available.");break}i.promises.push(v(t).then((e=>{let{data:t,type:i}=e;s.uri=t,s.mimeType=i})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=M.e8.REPEAT,s=M.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=M.e8.CLAMP_TO_EDGE,s=M.e8.CLAMP_TO_EDGE;break;case"mirror":t=M.e8.MIRRORED_REPEAT,s=M.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=M.e8.CLAMP_TO_EDGE;break;case"mirror":s=M.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=M.e8.CLAMP_TO_EDGE;break;case"mirror":t=M.e8.MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let r=0;r<this.gltf.samplers.length;++r)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[r]))return r;const n=this.gltf.samplers.length;return this.gltf.samplers.push(i),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,n,r,a,o){const c=new Map;for(const h of t){e.startAccessor("INDICES");for(let s=0;s<h.faces.length;++s)e.push(h.faces[s]);const t=e.endAccessor(),l={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(h.material)};n&&"flat"!==h.shading&&(l.attributes.NORMAL=n),r&&(l.attributes.TEXCOORD_0=r),a&&"flat"!==h.shading&&(l.attributes.TANGENT=a),o&&(l.attributes.COLOR_0=o);const f=c.get(h.name);if(f)f.primitives.push(l);else{const e={name:h.name,primitives:[l]};c.set(h.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,i,n,r,a){const o={primitives:[]};t.push(o);const c={attributes:{POSITION:s}};i&&(c.attributes.NORMAL=i),n&&(c.attributes.TEXCOORD_0=n),r&&(c.attributes.TANGENT=r),a&&(c.attributes.COLOR_0=a),e&&(c.material=this._addMaterial(e[0].material)),o.primitives.push(c)}}const k=(0,T.a)();var Y=s(63780);class H{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,Y.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class Z{constructor(e){this.mesh=e,this.name="",this.translation=(0,R.c)(),this.rotation=(0,y.a)(),this.scale=(0,R.g)(R.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,A.k)(this.rotation,e[0],e[1],e[2])}}const j="model.gltf",J="model.glb";async function K(e,t,s){var i,n;const h=new G(e,t=t||{},s);let l=h.params;l?l.origin||(l.origin=new r.Z({x:-1,y:-1,z:-1})):l={origin:new r.Z({x:-1,y:-1,z:-1})};const f=l.origin,u=h.gltf,d=null!==(i=null===(n=u.extras)||void 0===n?void 0:n.promises)&&void 0!==i?i:[];let _=1,g=1,p=null;await Promise.allSettled(d);const m={origin:f};delete u.extras;const w="number"==typeof t.jsonSpacing?t.jsonSpacing:4,E=JSON.stringify(u,((e,s)=>{if("extras"!==e){if(s instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(s))switch(t.imageOutputType){case c.DataURI:case c.GLB:break;case c.External:default:{const e="img".concat(g,".png");return g++,m[e]=s,e}}switch(t.bufferOutputType){case o.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let i=0;i<s.length;i++)t.push(String.fromCharCode(s[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(s);case o.GLB:if(p)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(p=s);case o.External:default:{const e="data".concat(_,".bin");return _++,m[e]=s,e}}}return s}}),w);return t.bufferOutputType===o.GLB||t.imageOutputType===c.GLB?m[J]=new a(E,p).buffer:m[j]=E,m}class W{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class X{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){(0,n.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function $(e,t){const s=new H,i=new W;return s.addScene(i),i.addNode(new Z(e)),function(e,t){return K(e,{bufferOutputType:o.GLB,imageOutputType:c.GLB,jsonSpacing:0},t)}(s,t).then((e=>new X(e[J],e.origin)))}}}]);
//# sourceMappingURL=1553.0370cb75.chunk.js.map