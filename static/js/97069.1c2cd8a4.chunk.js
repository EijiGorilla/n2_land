"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[97069],{97069:(t,n,e)=>{e.r(n),e.d(n,{l:()=>f});var r=e(84397);var o,i,a,u={exports:{}};o=u,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n,e,r=t;r.ready=new Promise(((t,r)=>{n=t,e=r}));var o=Object.assign({},r),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var c,f="";(a||u)&&(u?f=self.location.href:"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),i&&(f=i),f=0!==f.indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(c=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var s,l,p=r.print||console.log.bind(console),h=r.printErr||console.error.bind(console);Object.assign(r,o),o=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(s=r.wasmBinary),"object"!=typeof WebAssembly&&_("no native wasm support detected");var d,m,y=!1;function v(){var t=l.buffer;r.HEAP8=new Int8Array(t),r.HEAP16=new Int16Array(t),r.HEAPU8=d=new Uint8Array(t),r.HEAPU16=new Uint16Array(t),r.HEAP32=new Int32Array(t),r.HEAPU32=m=new Uint32Array(t),r.HEAPF32=new Float32Array(t),r.HEAPF64=new Float64Array(t)}var b=[],g=[],w=[];function A(t){b.unshift(t)}function E(t){w.unshift(t)}var R=0,P=null;function _(t){var n;null!==(n=r.onAbort)&&void 0!==n&&n.call(r,t),h(t="Aborted("+t+")"),y=!0,t+=". Build with -sASSERTIONS for more info.";var o=new WebAssembly.RuntimeError(t);throw e(o),o}var S,H=t=>t.startsWith("data:application/octet-stream;base64,");function I(t){if(t==S&&s)return new Uint8Array(s);if(c)return c(t);throw"both async and sync fetching of the wasm failed"}function T(t,n,e){return function(t){return s||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>I(t))):fetch(t,{credentials:"same-origin"}).then((n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()})).catch((()=>I(t)))}(t).then((t=>WebAssembly.instantiate(t,n))).then((t=>t)).then(e,(t=>{h("failed to asynchronously prepare wasm: ".concat(t)),_(t)}))}H(S="libtess.wasm")||(S=function(t){return r.locateFile?r.locateFile(t,f):f+t}(S));var j=t=>{for(;t.length>0;)t.shift()(r)};r.noExitRuntime;var x,C=t=>{var n=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(n),v(),1}catch(e){}},O=[null,[],[]],W="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,F=(t,n)=>{var e=O[t];0===n||10===n?((1===t?p:h)(((t,n,e)=>{for(var r=n+e,o=n;t[o]&&!(o>=r);)++o;if(o-n>16&&t.buffer&&W)return W.decode(t.subarray(n,o));for(var i="";n<o;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var c=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&t[n++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i})(e,0)),e.length=0):e.push(n)},M=[],k=t=>{var n=M[t];return n||(t>=M.length&&(M.length=t+1),M[t]=n=x.get(t)),n},U={e:()=>{throw 1/0},g:(t,n,e)=>d.copyWithin(t,n,n+e),f:t=>{var n=d.length,e=2147483648;if((t>>>=0)>e)return!1;for(var r=(t,n)=>t+(n-t%n)%n,o=1;o<=4;o*=2){var i=n*(1+.2/o);i=Math.min(i,t+100663296);var a=Math.min(e,r(Math.max(t,i),65536));if(C(a))return!0}return!1},c:(t,n,e,r)=>{for(var o=0,i=0;i<e;i++){var a=m[n>>2],u=m[n+4>>2];n+=8;for(var c=0;c<u;c++)F(t,d[a+c]);o+=u}return m[r>>2]=o,0},b:function(t,n){var e=L();try{return k(t)(n)}catch(i){if(z(e),i!==i+0)throw i;q(1,0)}},h:function(t,n,e,r){var i=L();try{return k(t)(n,e,r)}catch(o){if(z(i),o!==o+0)throw o;q(1,0)}},d:function(t,n){var e=L();try{k(t)(n)}catch(i){if(z(e),i!==i+0)throw i;q(1,0)}},a:function(t,n,e){var o=L();try{k(t)(n,e)}catch(r){if(z(o),r!==r+0)throw r;q(1,0)}}},B=function(){var t={a:U};function n(t,n){return B=t.exports,l=B.i,v(),x=B.m,function(t){g.unshift(t)}(B.j),function(t){var n;if(R--,null!==(n=r.monitorRunDependencies)&&void 0!==n&&n.call(r,R),0==R&&P){var e=P;P=null,e()}}(),B}if(function(t){var n;R++,null===(n=r.monitorRunDependencies)||void 0===n||n.call(r,R)}(),r.instantiateWasm)try{return r.instantiateWasm(t,n)}catch(o){h("Module.instantiateWasm callback failed with error: ".concat(o)),e(o)}return function(t,n,e,r){return t||"function"!=typeof WebAssembly.instantiateStreaming||H(n)||"function"!=typeof fetch?T(n,e,r):fetch(n,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,e).then(r,(function(t){return h("wasm streaming compile failed: ".concat(t)),h("falling back to ArrayBuffer instantiation"),T(n,e,r)}))))}(s,S,t,(function(t){n(t.instance)})).catch(e),{}}();r._malloc=t=>(r._malloc=B.k)(t),r._free=t=>(r._free=B.l)(t),r._triangulate=(t,n,e,o,i,a)=>(r._triangulate=B.n)(t,n,e,o,i,a);var D,q=(t,n)=>(q=B.o)(t,n),L=()=>(L=B.p)(),z=t=>(z=B.q)(t);function N(){function t(){D||(D=!0,r.calledRun=!0,y||(j(g),n(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)E(r.postRun.shift());j(w)}()))}R>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)A(r.preRun.shift());j(b)}(),R>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(P=function t(){D||N(),D||(P=t)},r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();N();let Y=null,G=null,X=null,J=null;let K=0;return r.triangulate=(t,n,e)=>{Y||(Y=r._triangulate);let o=r.HEAPF32;const i=r.HEAP32.BYTES_PER_ELEMENT,a=o.BYTES_PER_ELEMENT;e>K&&(K=e,X&&(r._free(X),X=0),G&&(r._free(G),G=0)),X||(X=r._malloc(e*a)),J||(J=r._malloc(4e3*i));const u=2*e;G||(G=r._malloc(u*a)),o=r.HEAPF32,o.set(t,X/a),r.HEAP32.set(n,J/i);const c=u/2,f=Y(X,J,Math.min(n.length,4e3),2,G,c),s=2*f;o=r.HEAPF32;const l=o.slice(G/a,G/a+s),p={};return p.buffer=l,p.vertexCount=f,p},t.ready},o.exports=a;var c=u.exports;const f=function(t,n){for(var e=0;e<n.length;e++){const r=n[e];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,r.g)(c)},[c])}}]);
//# sourceMappingURL=97069.1c2cd8a4.chunk.js.map