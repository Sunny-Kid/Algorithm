!function(e){function n(n){for(var t,o,i=n[0],c=n[1],d=n[2],a=n[3]||[],u=0,s=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(A,o)&&A[o]&&s.push(A[o][0]),A[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(U&&U(n),S.push.apply(S,a);s.length;)s.shift()();return H.push.apply(H,d||[]),r()}function r(){for(var e,n=0;n<H.length;n++){for(var r=H[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==A[i]&&(t=!1)}t&&(H.splice(n--,1),e=M(M.s=r[0]))}return 0===H.length&&(S.forEach((function(e){if(void 0===A[e]){A[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",M.nc&&n.setAttribute("nonce",M.nc),n.rel="prefetch",n.as="script",n.href=I(e),document.head.appendChild(n)}})),S.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--b&&0===g&&D()}(e,n),t&&t(e,n)};var o,i=!0,c="9610591de30bf01a7f50",d=1e4,a={},u=[],s=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:j,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,b=0,g=0,w={},O={},_={};function x(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=d,n=n||1e4,new Promise((function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}}))).then((function(e){if(!e)return h("idle"),null;O={},w={},_=e.c,y=e.h,h("prepare");var n=new Promise((function(e,n){m={resolve:e,reject:n}}));for(var r in v={},A)E(r);return"prepare"===f&&0===g&&0===b&&D(),n}));var n}function E(e){_[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return P(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(x(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,d;function s(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,d=o.chain;if((i=k[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<i.parents.length;a++){var u=i.parents[a],s=k[u];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([u]),moduleId:c,parentId:u};-1===n.indexOf(u)&&(s.hot._acceptedDependencies[c]?(r[u]||(r[u]=[]),l(r[u],[c])):(delete r[u],n.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;d=x(w);var j=!1,E=!1,D=!1,P="";switch((O=v[w]?s(d):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return h("abort"),Promise.reject(j);if(E)for(d in b[d]=v[d],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],O.outdatedDependencies[d]));D&&(l(m,[O.moduleId]),b[d]=g)}var H,S=[];for(t=0;t<m.length;t++)d=m[t],k[d]&&k[d].hot._selfAccepted&&b[d]!==g&&S.push({module:d,errorHandler:k[d].hot._selfAccepted});h("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete A[e]}(e)}));for(var I,q,C=m.slice();C.length>0;)if(d=C.pop(),i=k[d]){var T={},U=i.hot._disposeHandlers;for(o=0;o<U.length;o++)(r=U[o])(T);for(a[d]=T,i.hot.active=!1,delete k[d],delete p[d],o=0;o<i.children.length;o++){var z=k[i.children[o]];z&&((H=z.parents.indexOf(d))>=0&&z.parents.splice(H,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d]))for(q=p[d],o=0;o<q.length;o++)I=q[o],(H=i.children.indexOf(I))>=0&&i.children.splice(H,1);for(d in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var L=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d])){q=p[d];var R=[];for(t=0;t<q.length;t++)if(I=q[t],r=i.hot._acceptedDependencies[I]){if(-1!==R.indexOf(r))continue;R.push(r)}for(t=0;t<R.length;t++){r=R[t];try{r(q)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[t],error:N}),n.ignoreErrored||L||(L=N)}}}for(t=0;t<S.length;t++){var J=S[t];d=J.module,u=[d];try{M(d)}catch(N){if("function"===typeof J.errorHandler)try{J.errorHandler(N)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:G,originalError:N}),n.ignoreErrored||L||(L=G),L||(L=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:N}),n.ignoreErrored||L||(L=N)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise((function(e){e(m)})))}var k={},A={3:0},H=[],S=[];function I(e){return M.p+"static/js/"+({1:"1-home",2:"2-contribute"}[e]||e)+"."+{1:"50f49d13",2:"6c664ffa"}[e]+".js"}function M(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:l(n),parents:(s=u,u=[],s),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return M;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(u=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),M(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),g++,M.e(e).then(n,(function(e){throw n(),e}));function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}(n)),r.l=!0,r.exports}M.e=function(e){var n=[],r=A[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=A[e]=[n,t]}));n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,M.nc&&i.setAttribute("nonce",M.nc),i.src=I(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(d);var r=A[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,r[1](c)}A[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},M.m=e,M.c=k,M.d=function(e,n,r){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(M.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)M.d(r,t,function(n){return e[n]}.bind(null,t));return r},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/Algorithm/",M.oe=function(e){throw console.error(e),e},M.h=function(){return c};var q=window.webpackJsonp=window.webpackJsonp||[],C=q.push.bind(q);q.push=n,q=q.slice();for(var T=0;T<q.length;T++)n(q[T]);var U=C,z=(H.push([0,0]),r());n([[],{},0,[0,1,2]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"js-common-data-structures","description":"JavaScript Data Structures","menu":[],"version":"1.0.1","repository":false,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":false,"theme":"/Users/renminjie/personal/Algorithm/node_modules/docz-theme-umi/es/index.js","src":"./docs","public":"./public","base":"/Algorithm/","plugins":[{},{},{},{},{},{}]},"entries":[{"key":"1_home.mdx","value":{"name":"Getting Started","route":"/Algorithm/","id":"1d51a89b3dc15043d22b422b36a2ddfe","filepath":"1_home.mdx","link":"https://github.com/Sunny-Kid/Algorithm/edit/master/docs/1_home.mdx","slug":"1-home","menu":"","headings":[{"slug":"installation","depth":2,"value":"Installation"},{"slug":"yarn","depth":3,"value":"yarn"},{"slug":"npm","depth":3,"value":"npm"},{"slug":"binary-search-tree","depth":2,"value":"Binary Search Tree"},{"slug":"avl-tree","depth":2,"value":"AVL Tree"}]}},{"key":"2_contribute.mdx","value":{"name":"How to contribute","id":"12a2d3c2cb31e3dcc0505b7f734d3053","filepath":"2_contribute.mdx","link":"https://github.com/Sunny-Kid/Algorithm/edit/master/docs/2_contribute.mdx","slug":"2-contribute","route":"/Algorithm/2-contribute","menu":"","headings":[{"slug":"fork","depth":2,"value":"Fork"},{"slug":"install-dependencies","depth":2,"value":"Install dependencies"},{"slug":"launch-doc-via-dev-mode","depth":2,"value":"Launch doc via dev mode"}]}}],"props":[]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),i=r("react-dom"),c=r.n(i),d=r("./node_modules/docz/dist/index.esm.js"),a=r("./node_modules/docz-theme-umi/es/index.js"),u={"1_home.mdx":function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"./docs/1_home.mdx"))},"2_contribute.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./docs/2_contribute.mdx"))}},s=r("./.docz/app/db.json"),l=function(){return o.a.createElement(a.a,{linkComponent:d.b,db:s},o.a.createElement(d.c,{imports:u}))},p=[],f=[function(){var e=document.querySelector("#splash-spinner"),n=document.querySelector(".spinner");e&&document.head.removeChild(e),n&&n.parentNode&&n.parentNode.removeChild(n)}],h=function(){return p.forEach((function(e){return e&&e()}))},m=function(){return f.forEach((function(e){return e&&e()}))},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),c.a.render(o.a.createElement(e,null),v,m)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});