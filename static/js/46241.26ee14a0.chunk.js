"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[46241],{46241:(t,n,e)=>{e.r(n),e.d(n,{l:()=>c});var r,i,o,u=e(84397),s={exports:{}};r=s,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(i=i||__filename),o=function(t){var n,e;(t=void 0!==(t=t||{})?t:{}).ready=new Promise((function(t,r){n=t,e=r}));var r,o,u,s,a,c,f=Object.assign({},t),p="object"==typeof window,l="function"==typeof importScripts,h="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";h?(d=l?require("path").dirname(d)+"/":__dirname+"/",c=()=>{a||(s=require("fs"),a=require("path"))},r=function(t,n){return c(),t=a.normalize(t),s.readFileSync(t,n?void 0:"utf8")},u=t=>{var n=r(t,!0);return n.buffer||(n=new Uint8Array(n)),n},o=(t,n,e)=>{c(),t=a.normalize(t),s.readFile(t,(function(t,r){t?e(t):n(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof V))throw t})),process.on("unhandledRejection",(function(t){throw t})),t.inspect=function(){return"[Emscripten Module object]"}):(p||l)&&(l?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),i&&(d=i),d=0!==d.indexOf("blob:")?d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):"",r=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},l&&(u=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),o=(t,n,e)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):e()},r.onerror=e,r.send(null)}),t.print||console.log.bind(console);var m,_,y=t.printErr||console.warn.bind(console);Object.assign(t,f),f=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(m=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&C("no native wasm support detected");var g,w,v,b,A,R,S=!1,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function E(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&x)return x.decode(t.subarray(n,i));for(var o="";n<i;){var u=t[n++];if(128&u){var s=63&t[n++];if(192!=(224&u)){var a=63&t[n++];if((u=224==(240&u)?(15&u)<<12|s<<6|a:(7&u)<<18|s<<12|a<<6|63&t[n++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|s)}else o+=String.fromCharCode(u)}return o}(v,t,n):""}function I(n){g=n,t.HEAP8=w=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=b=new Int32Array(n),t.HEAPU8=v=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=A=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var P=[],j=[],T=[];function H(t){P.unshift(t)}function M(t){T.unshift(t)}var W=0,k=null;function C(n){t.onAbort&&t.onAbort(n),y(n="Aborted("+n+")"),S=!0,n+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(n);throw e(r),r}var D,U="data:application/octet-stream;base64,";function q(t){return t.startsWith(U)}function F(t){return t.startsWith("file://")}function O(t){try{if(t==D&&m)return new Uint8Array(m);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}catch(y){C(y)}}function B(){if(!m&&(p||l)){if("function"==typeof fetch&&!F(D))return fetch(D,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+D+"'";return t.arrayBuffer()})).catch((function(){return O(D)}));if(o)return new Promise((function(t,n){o(D,(function(n){t(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return O(D)}))}function z(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?G(r)():G(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}q(D="lerc-wasm.wasm")||(D=function(n){return t.locateFile?t.locateFile(n,d):d+n}(D));var L=[];function G(t){var n=L[t];return n||(t>=L.length&&(L.length=t+1),L[t]=n=R.get(t)),n}function X(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){A[this.ptr+4>>2]=t},this.get_type=function(){return A[this.ptr+4>>2]},this.set_destructor=function(t){A[this.ptr+8>>2]=t},this.get_destructor=function(){return A[this.ptr+8>>2]},this.set_refcount=function(t){b[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,w[this.ptr+12>>0]=t},this.get_caught=function(){return 0!=w[this.ptr+12>>0]},this.set_rethrown=function(t){t=t?1:0,w[this.ptr+13>>0]=t},this.get_rethrown=function(){return 0!=w[this.ptr+13>>0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=b[this.ptr>>2];b[this.ptr>>2]=t+1},this.release_ref=function(){var t=b[this.ptr>>2];return b[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){A[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return A[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Q(this.get_type()))return A[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function N(t){try{return _.grow(t-g.byteLength+65535>>>16),I(_.buffer),1}catch(n){}}var Y={a:function(t,n,e,r){C("Assertion failed: "+E(t)+", at: "+[n?E(n):"unknown filename",e,r?E(r):"unknown function"])},c:function(t){return J(t+24)+24},b:function(t,n,e){throw new X(t).init(n,e),t},d:function(){C("")},f:function(t,n,e){v.copyWithin(t,n,n+e)},e:function(t){var n=v.length,e=2147483648;if((t>>>=0)>e)return!1;let r=(t,n)=>t+(n-t%n)%n;for(var i=1;i<=4;i*=2){var o=n*(1+.2/i);if(o=Math.min(o,t+100663296),N(Math.min(e,r(Math.max(t,o),65536))))return!0}return!1}};(function(){var n={a:Y};function r(n,e){var r=n.exports;t.asm=r,I((_=t.asm.g).buffer),R=t.asm.m,function(t){j.unshift(t)}(t.asm.h),function(n){if(W--,t.monitorRunDependencies&&t.monitorRunDependencies(W),0==W&&k){var e=k;k=null,e()}}()}function i(t){r(t.instance)}function o(t){return B().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(t){return t})).then(t,(function(t){y("failed to asynchronously prepare wasm: "+t),C(t)}))}if(W++,t.monitorRunDependencies&&t.monitorRunDependencies(W),t.instantiateWasm)try{return t.instantiateWasm(n,r)}catch(s){return y("Module.instantiateWasm callback failed with error: "+s),!1}(m||"function"!=typeof WebAssembly.instantiateStreaming||q(D)||F(D)||h||"function"!=typeof fetch?o(i):fetch(D,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return y("wasm streaming compile failed: "+t),y("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(e)})(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var J=t._malloc=function(){return(J=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var K,Q=t.___cxa_is_pointer_type=function(){return(Q=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)};function V(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Z(e){function r(){K||(K=!0,t.calledRun=!0,S||(z(j),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)M(t.postRun.shift());z(T)}()))}W>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)H(t.preRun.shift());z(P)}(),W>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),r()}),1)):r()))}if(k=function t(){K||Z(),K||(k=t)},t.run=Z,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Z(),t.ready},r.exports=o;const a=(0,u.g)(s.exports),c=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=46241.26ee14a0.chunk.js.map