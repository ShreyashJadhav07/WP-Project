(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function GS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var tm={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function $S(){if(lv)return Nl;lv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Nl.Fragment=e,Nl.jsx=n,Nl.jsxs=n,Nl}var uv;function KS(){return uv||(uv=1,tm.exports=$S()),tm.exports}var W=KS(),nm={exports:{}},Ol={},im={exports:{}},rm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function QS(){return cv||(cv=1,function(r){function e(re,_e){var pe=re.length;re.push(_e);e:for(;0<pe;){var qe=pe-1>>>1,O=re[qe];if(0<o(O,_e))re[qe]=_e,re[pe]=O,pe=qe;else break e}}function n(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var _e=re[0],pe=re.pop();if(pe!==_e){re[0]=pe;e:for(var qe=0,O=re.length,ne=O>>>1;qe<ne;){var fe=2*(qe+1)-1,se=re[fe],ae=fe+1,Ie=re[ae];if(0>o(se,pe))ae<O&&0>o(Ie,se)?(re[qe]=Ie,re[ae]=pe,qe=ae):(re[qe]=se,re[fe]=pe,qe=fe);else if(ae<O&&0>o(Ie,pe))re[qe]=Ie,re[ae]=pe,qe=ae;else break e}}return _e}function o(re,_e){var pe=re.sortIndex-_e.sortIndex;return pe!==0?pe:re.id-_e.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],g=[],E=1,w=null,b=3,N=!1,L=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function Z(re){for(var _e=n(g);_e!==null;){if(_e.callback===null)s(g);else if(_e.startTime<=re)s(g),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=n(g)}}function ce(re){if($=!1,Z(re),!L)if(n(p)!==null)L=!0,vt();else{var _e=n(g);_e!==null&&ft(ce,_e.startTime-re)}}var le=!1,Ee=-1,x=5,R=-1;function S(){return!(r.unstable_now()-R<x)}function C(){if(le){var re=r.unstable_now();R=re;var _e=!0;try{e:{L=!1,$&&($=!1,G(Ee),Ee=-1),N=!0;var pe=b;try{t:{for(Z(re),w=n(p);w!==null&&!(w.expirationTime>re&&S());){var qe=w.callback;if(typeof qe=="function"){w.callback=null,b=w.priorityLevel;var O=qe(w.expirationTime<=re);if(re=r.unstable_now(),typeof O=="function"){w.callback=O,Z(re),_e=!0;break t}w===n(p)&&s(p),Z(re)}else s(p);w=n(p)}if(w!==null)_e=!0;else{var ne=n(g);ne!==null&&ft(ce,ne.startTime-re),_e=!1}}break e}finally{w=null,b=pe,N=!1}_e=void 0}}finally{_e?V():le=!1}}}var V;if(typeof ee=="function")V=function(){ee(C)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,D=j.port2;j.port1.onmessage=C,V=function(){D.postMessage(null)}}else V=function(){k(C,0)};function vt(){le||(le=!0,V())}function ft(re,_e){Ee=k(function(){re(r.unstable_now())},_e)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){L||N||(L=!0,vt())},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(re){switch(b){case 1:case 2:case 3:var _e=3;break;default:_e=b}var pe=b;b=_e;try{return re()}finally{b=pe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,_e){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var pe=b;b=re;try{return _e()}finally{b=pe}},r.unstable_scheduleCallback=function(re,_e,pe){var qe=r.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?qe+pe:qe):pe=qe,re){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=pe+O,re={id:E++,callback:_e,priorityLevel:re,startTime:pe,expirationTime:O,sortIndex:-1},pe>qe?(re.sortIndex=pe,e(g,re),n(p)===null&&re===n(g)&&($?(G(Ee),Ee=-1):$=!0,ft(ce,pe-qe))):(re.sortIndex=O,e(p,re),L||N||(L=!0,vt())),re},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(re){var _e=b;return function(){var pe=b;b=_e;try{return re.apply(this,arguments)}finally{b=pe}}}}(rm)),rm}var hv;function YS(){return hv||(hv=1,im.exports=QS()),im.exports}var sm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function XS(){if(fv)return Re;fv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,$={};function k(O,ne,fe){this.props=O,this.context=ne,this.refs=$,this.updater=fe||N}k.prototype.isReactComponent={},k.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},k.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function G(){}G.prototype=k.prototype;function ee(O,ne,fe){this.props=O,this.context=ne,this.refs=$,this.updater=fe||N}var Z=ee.prototype=new G;Z.constructor=ee,L(Z,k.prototype),Z.isPureReactComponent=!0;var ce=Array.isArray,le={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function x(O,ne,fe,se,ae,Ie){return fe=Ie.ref,{$$typeof:r,type:O,key:ne,ref:fe!==void 0?fe:null,props:Ie}}function R(O,ne){return x(O.type,ne,void 0,void 0,void 0,O.props)}function S(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function C(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return ne[fe]})}var V=/\/+/g;function j(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):ne.toString(36)}function D(){}function vt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,ne,fe,se,ae){var Ie=typeof O;(Ie==="undefined"||Ie==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0;break;case E:return be=O._init,ft(be(O._payload),ne,fe,se,ae)}}if(be)return ae=ae(O),be=se===""?"."+j(O,0):se,ce(ae)?(fe="",be!=null&&(fe=be.replace(V,"$&/")+"/"),ft(ae,ne,fe,"",function(rt){return rt})):ae!=null&&(S(ae)&&(ae=R(ae,fe+(ae.key==null||O&&O.key===ae.key?"":(""+ae.key).replace(V,"$&/")+"/")+be)),ne.push(ae)),1;be=0;var dt=se===""?".":se+":";if(ce(O))for(var ze=0;ze<O.length;ze++)se=O[ze],Ie=dt+j(se,ze),be+=ft(se,ne,fe,Ie,ae);else if(ze=b(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(se=O.next()).done;)se=se.value,Ie=dt+j(se,ze++),be+=ft(se,ne,fe,Ie,ae);else if(Ie==="object"){if(typeof O.then=="function")return ft(vt(O),ne,fe,se,ae);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return be}function re(O,ne,fe){if(O==null)return O;var se=[],ae=0;return ft(O,se,"","",function(Ie){return ne.call(fe,Ie,ae++)}),se}function _e(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function qe(){}return Re.Children={map:re,forEach:function(O,ne,fe){re(O,function(){ne.apply(this,arguments)},fe)},count:function(O){var ne=0;return re(O,function(){ne++}),ne},toArray:function(O){return re(O,function(ne){return ne})||[]},only:function(O){if(!S(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=k,Re.Fragment=n,Re.Profiler=o,Re.PureComponent=ee,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Re.act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.cache=function(O){return function(){return O.apply(null,arguments)}},Re.cloneElement=function(O,ne,fe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=L({},O.props),ae=O.key,Ie=void 0;if(ne!=null)for(be in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(ae=""+ne.key),ne)!Ee.call(ne,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&ne.ref===void 0||(se[be]=ne[be]);var be=arguments.length-2;if(be===1)se.children=fe;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];se.children=dt}return x(O.type,ae,void 0,void 0,Ie,se)},Re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Re.createElement=function(O,ne,fe){var se,ae={},Ie=null;if(ne!=null)for(se in ne.key!==void 0&&(Ie=""+ne.key),ne)Ee.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ae[se]=ne[se]);var be=arguments.length-2;if(be===1)ae.children=fe;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];ae.children=dt}if(O&&O.defaultProps)for(se in be=O.defaultProps,be)ae[se]===void 0&&(ae[se]=be[se]);return x(O,Ie,void 0,void 0,null,ae)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=S,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:_e}},Re.memo=function(O,ne){return{$$typeof:g,type:O,compare:ne===void 0?null:ne}},Re.startTransition=function(O){var ne=le.T,fe={};le.T=fe;try{var se=O(),ae=le.S;ae!==null&&ae(fe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(qe,pe)}catch(Ie){pe(Ie)}finally{le.T=ne}},Re.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Re.use=function(O){return le.H.use(O)},Re.useActionState=function(O,ne,fe){return le.H.useActionState(O,ne,fe)},Re.useCallback=function(O,ne){return le.H.useCallback(O,ne)},Re.useContext=function(O){return le.H.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O,ne){return le.H.useDeferredValue(O,ne)},Re.useEffect=function(O,ne){return le.H.useEffect(O,ne)},Re.useId=function(){return le.H.useId()},Re.useImperativeHandle=function(O,ne,fe){return le.H.useImperativeHandle(O,ne,fe)},Re.useInsertionEffect=function(O,ne){return le.H.useInsertionEffect(O,ne)},Re.useLayoutEffect=function(O,ne){return le.H.useLayoutEffect(O,ne)},Re.useMemo=function(O,ne){return le.H.useMemo(O,ne)},Re.useOptimistic=function(O,ne){return le.H.useOptimistic(O,ne)},Re.useReducer=function(O,ne,fe){return le.H.useReducer(O,ne,fe)},Re.useRef=function(O){return le.H.useRef(O)},Re.useState=function(O){return le.H.useState(O)},Re.useSyncExternalStore=function(O,ne,fe){return le.H.useSyncExternalStore(O,ne,fe)},Re.useTransition=function(){return le.H.useTransition()},Re.version="19.0.0",Re}var dv;function Zm(){return dv||(dv=1,sm.exports=XS()),sm.exports}var am={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function WS(){if(mv)return $t;mv=1;var r=Zm();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:g,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},$t.flushSync=function(p){var g=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=g,s.p=E,s.d.f()}},$t.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},$t.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},$t.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,w=m(E,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:b,fetchPriority:N}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:b,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$t.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},$t.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,w=m(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$t.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},$t.requestFormReset=function(p){s.d.r(p)},$t.unstable_batchedUpdates=function(p,g){return p(g)},$t.useFormState=function(p,g,E){return f.H.useFormState(p,g,E)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.0.0",$t}var pv;function ZS(){if(pv)return am.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),am.exports=WS(),am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function JS(){if(gv)return Ol;gv=1;var r=YS(),e=Zm(),n=ZS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),ce=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Ee(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var x=Symbol.for("react.client.reference");function R(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===x?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case g:return"StrictMode";case $:return"Suspense";case k:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Provider";case b:return(t._context.displayName||"Context")+".Consumer";case L:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return i=t.displayName||null,i!==null?i:R(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return R(t(i))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,V,j;function D(t){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",j=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+j}var vt=!1;function ft(t,i){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(K){var H=K}Reflect.construct(t,[],J)}else{try{J.call()}catch(K){H=K}t.call(J.prototype)}}else{try{throw Error()}catch(K){H=K}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(K){if(K&&H&&typeof K.stack=="string")return[K.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),P=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===P.length)for(l=I.length-1,h=P.length-1;1<=l&&0<=h&&I[l]!==P[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==P[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==P[h]){var Q=`
`+I[l].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=l&&0<=h);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?D(a):""}function re(t){switch(t.tag){case 26:case 27:case 5:return D(t.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return t=ft(t.type,!1),t;case 11:return t=ft(t.type.render,!1),t;case 1:return t=ft(t.type,!0),t;default:return""}}function _e(t){try{var i="";do i+=re(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function qe(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function O(t){if(pe(t)!==t)throw Error(s(188))}function ne(t){var i=t.alternate;if(!i){if(i=pe(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),t;if(d===l)return O(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function fe(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=fe(t),i!==null)return i;t=t.sibling}return null}var se=Array.isArray,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},be=[],dt=-1;function ze(t){return{current:t}}function rt(t){0>dt||(t.current=be[dt],be[dt]=null,dt--)}function $e(t,i){dt++,be[dt]=t.current,t.current=i}var Wt=ze(null),Di=ze(null),An=ze(null),fr=ze(null);function dr(t,i){switch($e(An,i),$e(Di,t),$e(Wt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?L_(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=L_(t),i=U_(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}rt(Wt),$e(Wt,i)}function Ni(){rt(Wt),rt(Di),rt(An)}function bo(t){t.memoizedState!==null&&$e(fr,t);var i=Wt.current,a=U_(i,t.type);i!==a&&($e(Di,t),$e(Wt,a))}function la(t){Di.current===t&&(rt(Wt),rt(Di)),fr.current===t&&(rt(fr),bl._currentValue=Ie)}var ua=Object.prototype.hasOwnProperty,gs=r.unstable_scheduleCallback,ca=r.unstable_cancelCallback,nf=r.unstable_shouldYield,Ro=r.unstable_requestPaint,sn=r.unstable_now,fu=r.unstable_getCurrentPriorityLevel,Et=r.unstable_ImmediatePriority,Dt=r.unstable_UserBlockingPriority,Oi=r.unstable_NormalPriority,du=r.unstable_LowPriority,Io=r.unstable_IdlePriority,rf=r.log,ys=r.unstable_setDisableYieldValue,mr=null,Ft=null;function Co(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(mr,t,void 0,(t.current.flags&128)===128)}catch{}}function ii(t){if(typeof rf=="function"&&ys(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(mr,t)}catch{}}var Zt=Math.clz32?Math.clz32:pu,Do=Math.log,mu=Math.LN2;function pu(t){return t>>>=0,t===0?32:31-(Do(t)/mu|0)|0}var ri=128,pr=4194304;function qn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=qn(a):(d&=T,d!==0?l=qn(d):t||(v=T&~v,v!==0&&(l=qn(v))))):(T=a&~h,T!==0?l=qn(T):d!==0?l=qn(d):t||(v=a&~v,v!==0&&(l=qn(v)))),l===0?0:i!==0&&i!==l&&!(i&h)&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function gr(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ha(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var t=ri;return ri<<=1,!(ri&4194176)&&(ri=128),t}function yr(){var t=pr;return pr<<=1,!(pr&62914560)&&(pr=4194304),t}function fa(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ut(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gu(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,P=t.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-Zt(a),J=1<<Q;T[Q]=0,I[Q]=-1;var H=P[Q];if(H!==null)for(P[Q]=null,Q=0;Q<H.length;Q++){var K=H[Q];K!==null&&(K.lane&=-536870913)}a&=~J}l!==0&&_r(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function _r(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Zt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function vr(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Zt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function yu(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function _u(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:nv(t.type))}function Er(t,i){var a=ae.p;try{return ae.p=t,i()}finally{ae.p=a}}var si=Math.random().toString(36).slice(2),Nt="__reactFiber$"+si,Tt="__reactProps$"+si,xi="__reactContainer$"+si,_s="__reactEvents$"+si,da="__reactListeners$"+si,ai="__reactHandles$"+si,Oo="__reactResources$"+si,Tr="__reactMarker$"+si;function vs(t){delete t[Nt],delete t[Tt],delete t[_s],delete t[da],delete t[ai]}function Fn(t){var i=t[Nt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[xi]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=B_(t);t!==null;){if(a=t[Nt])return a;t=B_(t)}return i}t=a,a=t.parentNode}return null}function Mi(t){if(t=t[Nt]||t[xi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function wr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Ar(t){var i=t[Oo];return i||(i=t[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function et(t){t[Tr]=!0}var xo=new Set,ma={};function fn(t,i){an(t,i),an(t+"Capture",i)}function an(t,i){for(ma[t]=i,t=0;t<i.length;t++)xo.add(i[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},ko={};function vu(t){return ua.call(ko,t)?!0:ua.call(Mo,t)?!1:sf.test(t)?ko[t]=!0:(Mo[t]=!0,!1)}function Sr(t,i,a){if(vu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function br(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function bn(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Eu(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function af(t){var i=Eu(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Es(t){t._valueTracker||(t._valueTracker=af(t))}function Vo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Eu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ki=/[\n"\\]/g;function st(t){return t.replace(ki,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Rr(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Jt(i)):t.value!==""+Jt(i)&&(t.value=""+Jt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ga(t,v,Jt(i)):a!=null?ga(t,v,Jt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Jt(T):t.removeAttribute("name")}function Ts(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Jt(a):"",i=i!=null?""+Jt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function ga(t,i,a){i==="number"&&pa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function je(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ws(t,i,a){if(i!=null&&(i=""+Jt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Jt(a):""}function Ir(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(se(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Jt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Rn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var of=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||of.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Tu(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Po(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Po(t,d,i[d])}function Lo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(t){return uf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var In=null;function ya(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vi=null,Pi=null;function Li(t){var i=Mi(t);if(i&&(t=i.stateNode)){var a=t[Tt]||null;e:switch(t=i.stateNode,i.type){case"input":if(Rr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Tt]||null;if(!h)throw Error(s(90));Rr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Vo(l)}break e;case"textarea":ws(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&je(t,!!a.multiple,i,!1)}}}var Uo=!1;function wu(t,i,a){if(Uo)return t(i,a);Uo=!0;try{var l=t(i);return l}finally{if(Uo=!1,(Vi!==null||Pi!==null)&&(dc(),Vi&&(i=Vi,t=Pi,Pi=Vi=null,Li(i),t)))for(i=0;i<t.length;i++)Li(t[i])}}function As(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Cn=!1;if(dn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Cn=!1}var li=null,Cr=null,Ui=null;function zo(){if(Ui)return Ui;var t,i=Cr,a=i.length,l,h="value"in li?li.value:li.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ui=h.slice(t,1<l?1-l:void 0)}function ui(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function jo(){return!1}function Ot(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ci:jo,this.isPropagationStopped=jo,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Ot(Fe),bs=C({},Fe,{view:0,detail:0}),Au=Ot(bs),va,Ea,hi,Rs=C({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(va=t.screenX-hi.screenX,Ea=t.screenY-hi.screenY):Ea=va=0,hi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:Ea}}),Dn=Ot(Rs),Su=C({},Rs,{dataTransfer:0}),cf=Ot(Su),Is=C({},bs,{relatedTarget:0}),Ta=Ot(Is),Bo=C({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),wa=Ot(Bo),bu=C({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aa=Ot(bu),hf=C({},Fe,{data:0}),Ho=Ot(hf),Cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Iu[t])?!!i[t]:!1}function Ds(){return qo}var Cu=C({},bs,{key:function(t){if(t.key){var i=Cs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ui(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ru[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(t){return t.type==="keypress"?ui(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ui(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sa=Ot(Cu),Du=C({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=Ot(Du),zi=C({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Nu=Ot(zi),Ou=C({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),xu=Ot(Ou),Mu=C({},Rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ba=Ot(Mu),en=C({},Fe,{newState:0,oldState:0}),ku=Ot(en),Vu=[9,13,27,32],fi=dn&&"CompositionEvent"in window,c=null;dn&&"documentMode"in document&&(c=document.documentMode);var y=dn&&"TextEvent"in window&&!c,_=dn&&(!fi||c&&8<c&&11>=c),A=" ",z=!1;function q(t,i){switch(t){case"keyup":return Vu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function wt(t,i){switch(t){case"compositionend":return ie(i);case"keypress":return i.which!==32?null:(z=!0,A);case"textInput":return t=i.data,t===A&&z?null:t;default:return null}}function Pe(t,i){if(Ve)return t==="compositionend"||!fi&&q(t,i)?(t=zo(),Ui=Cr=li=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function At(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xt[t.type]:i==="textarea"}function ji(t,i,a,l){Vi?Pi?Pi.push(l):Pi=[l]:Vi=l,i=_c(i,"onChange"),0<i.length&&(a=new _a("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Lt=null,di=null;function Go(t){x_(t,0)}function Pu(t){var i=wr(t);if(Vo(i))return t}function og(t,i){if(t==="change")return i}var lg=!1;if(dn){var ff;if(dn){var df="oninput"in document;if(!df){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),df=typeof ug.oninput=="function"}ff=df}else ff=!1;lg=ff&&(!document.documentMode||9<document.documentMode)}function cg(){Lt&&(Lt.detachEvent("onpropertychange",hg),di=Lt=null)}function hg(t){if(t.propertyName==="value"&&Pu(di)){var i=[];ji(i,di,t,ya(t)),wu(Go,i)}}function TA(t,i,a){t==="focusin"?(cg(),Lt=i,di=a,Lt.attachEvent("onpropertychange",hg)):t==="focusout"&&cg()}function wA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(di)}function AA(t,i){if(t==="click")return Pu(i)}function SA(t,i){if(t==="input"||t==="change")return Pu(i)}function bA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var mn=typeof Object.is=="function"?Object.is:bA;function $o(t,i){if(mn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ua.call(i,h)||!mn(t[h],i[h]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,i){var a=fg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fg(a)}}function mg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=pa(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=pa(t.document)}return i}function mf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function RA(t,i){var a=pg(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&mg(i.ownerDocument.documentElement,i)){if(l!==null&&mf(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=dg(i,d);var v=dg(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var IA=dn&&"documentMode"in document&&11>=document.documentMode,Ra=null,pf=null,Ko=null,gf=!1;function gg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gf||Ra==null||Ra!==pa(l)||(l=Ra,"selectionStart"in l&&mf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ko&&$o(Ko,l)||(Ko=l,l=_c(pf,"onSelect"),0<l.length&&(i=new _a("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ra)))}function Ns(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ia={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},yf={},yg={};dn&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Os(t){if(yf[t])return yf[t];if(!Ia[t])return t;var i=Ia[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in yg)return yf[t]=i[a];return t}var _g=Os("animationend"),vg=Os("animationiteration"),Eg=Os("animationstart"),CA=Os("transitionrun"),DA=Os("transitionstart"),NA=Os("transitioncancel"),Tg=Os("transitionend"),wg=new Map,Ag="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Gn(t,i){wg.set(t,i),fn(i,[t])}var Nn=[],Ca=0,_f=0;function Lu(){for(var t=Ca,i=_f=Ca=0;i<t;){var a=Nn[i];Nn[i++]=null;var l=Nn[i];Nn[i++]=null;var h=Nn[i];Nn[i++]=null;var d=Nn[i];if(Nn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Sg(a,h,d)}}function Uu(t,i,a,l){Nn[Ca++]=t,Nn[Ca++]=i,Nn[Ca++]=a,Nn[Ca++]=l,_f|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function vf(t,i,a,l){return Uu(t,i,a,l),zu(t)}function Dr(t,i){return Uu(t,null,null,i),zu(t)}function Sg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Zt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function zu(t){if(50<_l)throw _l=0,bd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Da={},bg=new WeakMap;function On(t,i){if(typeof t=="object"&&t!==null){var a=bg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:_e(i)},bg.set(t,i),i)}return{value:t,source:i,stack:_e(i)}}var Na=[],Oa=0,ju=null,Bu=0,xn=[],Mn=0,xs=null,Bi=1,Hi="";function Ms(t,i){Na[Oa++]=Bu,Na[Oa++]=ju,ju=t,Bu=i}function Rg(t,i,a){xn[Mn++]=Bi,xn[Mn++]=Hi,xn[Mn++]=xs,xs=t;var l=Bi;t=Hi;var h=32-Zt(l)-1;l&=~(1<<h),a+=1;var d=32-Zt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Bi=1<<32-Zt(i)+h|a<<h|l,Hi=d+t}else Bi=1<<d|a<<h|l,Hi=t}function Ef(t){t.return!==null&&(Ms(t,1),Rg(t,1,0))}function Tf(t){for(;t===ju;)ju=Na[--Oa],Na[Oa]=null,Bu=Na[--Oa],Na[Oa]=null;for(;t===xs;)xs=xn[--Mn],xn[Mn]=null,Hi=xn[--Mn],xn[Mn]=null,Bi=xn[--Mn],xn[Mn]=null}var tn=null,Ut=null,Be=!1,$n=null,mi=!1,wf=Error(s(519));function ks(t){var i=Error(s(418,""));throw Xo(On(i,t)),wf}function Ig(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Nt]=t,i[Tt]=l,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<El.length;a++)Me(El[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Ts(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Es(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Ir(i,l.value,l.defaultValue,l.children),Es(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||P_(i.textContent,a)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=vc),i=!0):i=!1,i||ks(t)}function Cg(t){for(tn=t.return;tn;)switch(tn.tag){case 3:case 27:mi=!0;return;case 5:case 13:mi=!1;return;default:tn=tn.return}}function Qo(t){if(t!==tn)return!1;if(!Be)return Cg(t),Be=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hd(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Ut&&ks(t),Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Ut=Qn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Ut=null}}else Ut=tn?Qn(t.stateNode.nextSibling):null;return!0}function Yo(){Ut=tn=null,Be=!1}function Xo(t){$n===null?$n=[t]:$n.push(t)}var Wo=Error(s(460)),Dg=Error(s(474)),Af={then:function(){}};function Ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hu(){}function Og(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Hu,Hu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Wo?Error(s(483)):t;default:if(typeof i.status=="string")i.then(Hu,Hu);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Wo?Error(s(483)):t}throw Zo=i,Wo}}var Zo=null;function xg(){if(Zo===null)throw Error(s(459));var t=Zo;return Zo=null,t}var xa=null,Jo=0;function qu(t){var i=Jo;return Jo+=1,xa===null&&(xa=[]),Og(xa,t,i)}function el(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Fu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Mg(t){var i=t._init;return i(t._payload)}function kg(t){function i(U,M){if(t){var B=U.deletions;B===null?(U.deletions=[M],U.flags|=16):B.push(M)}}function a(U,M){if(!t)return null;for(;M!==null;)i(U,M),M=M.sibling;return null}function l(U){for(var M=new Map;U!==null;)U.key!==null?M.set(U.key,U):M.set(U.index,U),U=U.sibling;return M}function h(U,M){return U=Br(U,M),U.index=0,U.sibling=null,U}function d(U,M,B){return U.index=B,t?(B=U.alternate,B!==null?(B=B.index,B<M?(U.flags|=33554434,M):B):(U.flags|=33554434,M)):(U.flags|=1048576,M)}function v(U){return t&&U.alternate===null&&(U.flags|=33554434),U}function T(U,M,B,Y){return M===null||M.tag!==6?(M=yd(B,U.mode,Y),M.return=U,M):(M=h(M,B),M.return=U,M)}function I(U,M,B,Y){var ue=B.type;return ue===p?Q(U,M,B.props.children,Y,B.key):M!==null&&(M.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ee&&Mg(ue)===M.type)?(M=h(M,B.props),el(M,B),M.return=U,M):(M=lc(B.type,B.key,B.props,null,U.mode,Y),el(M,B),M.return=U,M)}function P(U,M,B,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=_d(B,U.mode,Y),M.return=U,M):(M=h(M,B.children||[]),M.return=U,M)}function Q(U,M,B,Y,ue){return M===null||M.tag!==7?(M=Fs(B,U.mode,Y,ue),M.return=U,M):(M=h(M,B),M.return=U,M)}function J(U,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=yd(""+M,U.mode,B),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case f:return B=lc(M.type,M.key,M.props,null,U.mode,B),el(B,M),B.return=U,B;case m:return M=_d(M,U.mode,B),M.return=U,M;case ee:var Y=M._init;return M=Y(M._payload),J(U,M,B)}if(se(M)||Ee(M))return M=Fs(M,U.mode,B,null),M.return=U,M;if(typeof M.then=="function")return J(U,qu(M),B);if(M.$$typeof===N)return J(U,sc(U,M),B);Fu(U,M)}return null}function H(U,M,B,Y){var ue=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ue!==null?null:T(U,M,""+B,Y);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case f:return B.key===ue?I(U,M,B,Y):null;case m:return B.key===ue?P(U,M,B,Y):null;case ee:return ue=B._init,B=ue(B._payload),H(U,M,B,Y)}if(se(B)||Ee(B))return ue!==null?null:Q(U,M,B,Y,null);if(typeof B.then=="function")return H(U,M,qu(B),Y);if(B.$$typeof===N)return H(U,M,sc(U,B),Y);Fu(U,B)}return null}function K(U,M,B,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return U=U.get(B)||null,T(M,U,""+Y,ue);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case f:return U=U.get(Y.key===null?B:Y.key)||null,I(M,U,Y,ue);case m:return U=U.get(Y.key===null?B:Y.key)||null,P(M,U,Y,ue);case ee:var De=Y._init;return Y=De(Y._payload),K(U,M,B,Y,ue)}if(se(Y)||Ee(Y))return U=U.get(B)||null,Q(M,U,Y,ue,null);if(typeof Y.then=="function")return K(U,M,B,qu(Y),ue);if(Y.$$typeof===N)return K(U,M,B,sc(M,Y),ue);Fu(M,Y)}return null}function he(U,M,B,Y){for(var ue=null,De=null,me=M,ye=M=0,Vt=null;me!==null&&ye<B.length;ye++){me.index>ye?(Vt=me,me=null):Vt=me.sibling;var He=H(U,me,B[ye],Y);if(He===null){me===null&&(me=Vt);break}t&&me&&He.alternate===null&&i(U,me),M=d(He,M,ye),De===null?ue=He:De.sibling=He,De=He,me=Vt}if(ye===B.length)return a(U,me),Be&&Ms(U,ye),ue;if(me===null){for(;ye<B.length;ye++)me=J(U,B[ye],Y),me!==null&&(M=d(me,M,ye),De===null?ue=me:De.sibling=me,De=me);return Be&&Ms(U,ye),ue}for(me=l(me);ye<B.length;ye++)Vt=K(me,U,ye,B[ye],Y),Vt!==null&&(t&&Vt.alternate!==null&&me.delete(Vt.key===null?ye:Vt.key),M=d(Vt,M,ye),De===null?ue=Vt:De.sibling=Vt,De=Vt);return t&&me.forEach(function(Qr){return i(U,Qr)}),Be&&Ms(U,ye),ue}function Ae(U,M,B,Y){if(B==null)throw Error(s(151));for(var ue=null,De=null,me=M,ye=M=0,Vt=null,He=B.next();me!==null&&!He.done;ye++,He=B.next()){me.index>ye?(Vt=me,me=null):Vt=me.sibling;var Qr=H(U,me,He.value,Y);if(Qr===null){me===null&&(me=Vt);break}t&&me&&Qr.alternate===null&&i(U,me),M=d(Qr,M,ye),De===null?ue=Qr:De.sibling=Qr,De=Qr,me=Vt}if(He.done)return a(U,me),Be&&Ms(U,ye),ue;if(me===null){for(;!He.done;ye++,He=B.next())He=J(U,He.value,Y),He!==null&&(M=d(He,M,ye),De===null?ue=He:De.sibling=He,De=He);return Be&&Ms(U,ye),ue}for(me=l(me);!He.done;ye++,He=B.next())He=K(me,U,ye,He.value,Y),He!==null&&(t&&He.alternate!==null&&me.delete(He.key===null?ye:He.key),M=d(He,M,ye),De===null?ue=He:De.sibling=He,De=He);return t&&me.forEach(function(FS){return i(U,FS)}),Be&&Ms(U,ye),ue}function lt(U,M,B,Y){if(typeof B=="object"&&B!==null&&B.type===p&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case f:e:{for(var ue=B.key;M!==null;){if(M.key===ue){if(ue=B.type,ue===p){if(M.tag===7){a(U,M.sibling),Y=h(M,B.props.children),Y.return=U,U=Y;break e}}else if(M.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ee&&Mg(ue)===M.type){a(U,M.sibling),Y=h(M,B.props),el(Y,B),Y.return=U,U=Y;break e}a(U,M);break}else i(U,M);M=M.sibling}B.type===p?(Y=Fs(B.props.children,U.mode,Y,B.key),Y.return=U,U=Y):(Y=lc(B.type,B.key,B.props,null,U.mode,Y),el(Y,B),Y.return=U,U=Y)}return v(U);case m:e:{for(ue=B.key;M!==null;){if(M.key===ue)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){a(U,M.sibling),Y=h(M,B.children||[]),Y.return=U,U=Y;break e}else{a(U,M);break}else i(U,M);M=M.sibling}Y=_d(B,U.mode,Y),Y.return=U,U=Y}return v(U);case ee:return ue=B._init,B=ue(B._payload),lt(U,M,B,Y)}if(se(B))return he(U,M,B,Y);if(Ee(B)){if(ue=Ee(B),typeof ue!="function")throw Error(s(150));return B=ue.call(B),Ae(U,M,B,Y)}if(typeof B.then=="function")return lt(U,M,qu(B),Y);if(B.$$typeof===N)return lt(U,M,sc(U,B),Y);Fu(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(a(U,M.sibling),Y=h(M,B),Y.return=U,U=Y):(a(U,M),Y=yd(B,U.mode,Y),Y.return=U,U=Y),v(U)):a(U,M)}return function(U,M,B,Y){try{Jo=0;var ue=lt(U,M,B,Y);return xa=null,ue}catch(me){if(me===Wo)throw me;var De=Ln(29,me,null,U.mode);return De.lanes=Y,De.return=U,De}finally{}}}var Vs=kg(!0),Vg=kg(!1),Ma=ze(null),Gu=ze(0);function Pg(t,i){t=Ji,$e(Gu,t),$e(Ma,i),Ji=t|i.baseLanes}function Sf(){$e(Gu,Ji),$e(Ma,Ma.current)}function bf(){Ji=Gu.current,rt(Ma),rt(Gu)}var kn=ze(null),pi=null;function Nr(t){var i=t.alternate;$e(St,St.current&1),$e(kn,t),pi===null&&(i===null||Ma.current!==null||i.memoizedState!==null)&&(pi=t)}function Lg(t){if(t.tag===22){if($e(St,St.current),$e(kn,t),pi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(pi=t)}}else Or()}function Or(){$e(St,St.current),$e(kn,kn.current)}function qi(t){rt(kn),pi===t&&(pi=null),rt(St)}var St=ze(0);function $u(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var OA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},xA=r.unstable_scheduleCallback,MA=r.unstable_NormalPriority,bt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new OA,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&xA(MA,function(){t.controller.abort()})}var nl=null,If=0,ka=0,Va=null;function kA(t,i){if(nl===null){var a=nl=[];If=0,ka=Md(),Va={status:"pending",value:void 0,then:function(l){a.push(l)}}}return If++,i.then(Ug,Ug),i}function Ug(){if(--If===0&&nl!==null){Va!==null&&(Va.status="fulfilled");var t=nl;nl=null,ka=0,Va=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function VA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var zg=S.S;S.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&kA(t,i),zg!==null&&zg(t,i)};var Ps=ze(null);function Cf(){var t=Ps.current;return t!==null?t:Xe.pooledCache}function Ku(t,i){i===null?$e(Ps,Ps.current):$e(Ps,i.pool)}function jg(){var t=Cf();return t===null?null:{parent:bt._currentValue,pool:t}}var xr=0,Ce=null,Ke=null,mt=null,Qu=!1,Pa=!1,Ls=!1,Yu=0,il=0,La=null,PA=0;function ct(){throw Error(s(321))}function Df(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!mn(t[a],i[a]))return!1;return!0}function Nf(t,i,a,l,h,d){return xr=d,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=t===null||t.memoizedState===null?Us:Mr,Ls=!1,d=a(l,h),Ls=!1,Pa&&(d=Hg(i,a,l,h)),Bg(t),d}function Bg(t){S.H=gi;var i=Ke!==null&&Ke.next!==null;if(xr=0,mt=Ke=Ce=null,Qu=!1,il=0,La=null,i)throw Error(s(300));t===null||Mt||(t=t.dependencies,t!==null&&rc(t)&&(Mt=!0))}function Hg(t,i,a,l){Ce=t;var h=0;do{if(Pa&&(La=null),il=0,Pa=!1,25<=h)throw Error(s(301));if(h+=1,mt=Ke=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=zs,d=i(a,l)}while(Pa);return d}function LA(){var t=S.H,i=t.useState()[0];return i=typeof i.then=="function"?rl(i):i,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Ce.flags|=1024),i}function Of(){var t=Yu!==0;return Yu=0,t}function xf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Mf(t){if(Qu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Qu=!1}xr=0,mt=Ke=Ce=null,Pa=!1,il=Yu=0,La=null}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ce.memoizedState=mt=t:mt=mt.next=t,mt}function pt(){if(Ke===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var i=mt===null?Ce.memoizedState:mt.next;if(i!==null)mt=i,Ke=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},mt===null?Ce.memoizedState=mt=t:mt=mt.next=t}return mt}var Xu;Xu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function rl(t){var i=il;return il+=1,La===null&&(La=[]),t=Og(La,t,i),i=Ce,(mt===null?i.memoizedState:mt.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?Us:Mr),t}function Wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rl(t);if(t.$$typeof===N)return Gt(t)}throw Error(s(438,String(t)))}function kf(t){var i=null,a=Ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Xu(),Ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=ce;return i.index++,a}function Fi(t,i){return typeof i=="function"?i(t):i}function Zu(t){var i=pt();return Vf(i,Ke,t)}function Vf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,I=null,P=i,Q=!1;do{var J=P.lane&-536870913;if(J!==P.lane?(Le&J)===J:(xr&J)===J){var H=P.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),J===ka&&(Q=!0);else if((xr&H)===H){P=P.next,H===ka&&(Q=!0);continue}else J={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(T=I=J,v=d):I=I.next=J,Ce.lanes|=H,Hr|=H;J=P.action,Ls&&a(d,J),d=P.hasEagerState?P.eagerState:a(d,J)}else H={lane:J,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(T=I=H,v=d):I=I.next=H,Ce.lanes|=J,Hr|=J;P=P.next}while(P!==null&&P!==i);if(I===null?v=d:I.next=T,!mn(d,t.memoizedState)&&(Mt=!0,Q&&(a=Va,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Pf(t){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);mn(d,i.memoizedState)||(Mt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function qg(t,i,a){var l=Ce,h=pt(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!mn((Ke||h).memoizedState,a);if(v&&(h.memoizedState=a,Mt=!0),h=h.queue,zf($g.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,Ua(9,Gg.bind(null,l,h,a,i),{destroy:void 0},null),Xe===null)throw Error(s(349));d||xr&60||Fg(l,i,a)}return a}function Fg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ce.updateQueue,i===null?(i=Xu(),Ce.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Gg(t,i,a,l){i.value=a,i.getSnapshot=l,Kg(i)&&Qg(t)}function $g(t,i,a){return a(function(){Kg(i)&&Qg(t)})}function Kg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!mn(t,a)}catch{return!0}}function Qg(t){var i=Dr(t,2);i!==null&&nn(i,t,2)}function Lf(t){var i=on();if(typeof t=="function"){var a=t;if(t=a(),Ls){ii(!0);try{a()}finally{ii(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},i}function Yg(t,i,a,l){return t.baseState=a,Vf(t,Ke,typeof l=="function"?l:Fi)}function UA(t,i,a,l,h){if(tc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Xg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Xg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),I=S.S;I!==null&&I(v,T),Wg(t,i,T)}catch(P){Uf(t,i,P)}finally{S.T=d}}else try{d=a(h,l),Wg(t,i,d)}catch(P){Uf(t,i,P)}}function Wg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Zg(t,i,l)},function(l){return Uf(t,i,l)}):Zg(t,i,a)}function Zg(t,i,a){i.status="fulfilled",i.value=a,Jg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Xg(t,a)))}function Uf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Jg(i),i=i.next;while(i!==l)}t.action=null}function Jg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ey(t,i){return i}function ty(t,i){if(Be){var a=Xe.formState;if(a!==null){e:{var l=Ce;if(Be){if(Ut){t:{for(var h=Ut,d=mi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Qn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Ut=Qn(h.nextSibling),l=h.data==="F!";break e}}ks(l)}l=!1}l&&(i=a[0])}}return a=on(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ey,lastRenderedState:i},a.queue=l,a=vy.bind(null,Ce,l),l.dispatch=a,l=Lf(!1),d=Ff.bind(null,Ce,!1,l.queue),l=on(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=UA.bind(null,Ce,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function ny(t){var i=pt();return iy(i,Ke,t)}function iy(t,i,a){i=Vf(t,i,ey)[0],t=Zu(Fi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?rl(i):i;var l=pt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ce.flags|=2048,Ua(9,zA.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function zA(t,i){t.action=i}function ry(t){var i=pt(),a=Ke;if(a!==null)return iy(i,a,t);pt(),i=i.memoizedState,a=pt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ua(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Ce.updateQueue,i===null&&(i=Xu(),Ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function sy(){return pt().memoizedState}function Ju(t,i,a,l){var h=on();Ce.flags|=t,h.memoizedState=Ua(1|i,a,{destroy:void 0},l===void 0?null:l)}function ec(t,i,a,l){var h=pt();l=l===void 0?null:l;var d=h.memoizedState.inst;Ke!==null&&l!==null&&Df(l,Ke.memoizedState.deps)?h.memoizedState=Ua(i,a,d,l):(Ce.flags|=t,h.memoizedState=Ua(1|i,a,d,l))}function ay(t,i){Ju(8390656,8,t,i)}function zf(t,i){ec(2048,8,t,i)}function oy(t,i){return ec(4,2,t,i)}function ly(t,i){return ec(4,4,t,i)}function uy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function cy(t,i,a){a=a!=null?a.concat([t]):null,ec(4,4,uy.bind(null,i,t),a)}function jf(){}function hy(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Df(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function fy(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Df(i,l[1]))return l[0];if(l=t(),Ls){ii(!0);try{t()}finally{ii(!1)}}return a.memoizedState=[l,i],l}function Bf(t,i,a){return a===void 0||xr&1073741824?t.memoizedState=i:(t.memoizedState=a,t=m_(),Ce.lanes|=t,Hr|=t,a)}function dy(t,i,a,l){return mn(a,i)?a:Ma.current!==null?(t=Bf(t,a,l),mn(t,i)||(Mt=!0),t):xr&42?(t=m_(),Ce.lanes|=t,Hr|=t,i):(Mt=!0,t.memoizedState=a)}function my(t,i,a,l,h){var d=ae.p;ae.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,Ff(t,!1,i,a);try{var I=h(),P=S.S;if(P!==null&&P(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=VA(I,l);sl(t,i,Q,_n(t))}else sl(t,i,l,_n(t))}catch(J){sl(t,i,{then:function(){},status:"rejected",reason:J},_n())}finally{ae.p=d,S.T=v}}function jA(){}function Hf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=py(t).queue;my(t,h,i,Ie,a===null?jA:function(){return gy(t),a(l)})}function py(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:Ie},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function gy(t){var i=py(t).next.queue;sl(t,i,{},_n())}function qf(){return Gt(bl)}function yy(){return pt().memoizedState}function _y(){return pt().memoizedState}function BA(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=_n();t=Pr(a);var l=Lr(i,t,a);l!==null&&(nn(l,i,a),ll(l,i,a)),i={cache:Rf()},t.payload=i;return}i=i.return}}function HA(t,i,a){var l=_n();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},tc(t)?Ey(i,a):(a=vf(t,i,a,l),a!==null&&(nn(a,t,l),Ty(a,i,l)))}function vy(t,i,a){var l=_n();sl(t,i,a,l)}function sl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(t))Ey(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,mn(T,v))return Uu(t,i,h,0),Xe===null&&Lu(),!1}catch{}finally{}if(a=vf(t,i,h,l),a!==null)return nn(a,t,l),Ty(a,i,l),!0}return!1}function Ff(t,i,a,l){if(l={lane:2,revertLane:Md(),action:l,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(i)throw Error(s(479))}else i=vf(t,a,l,2),i!==null&&nn(i,t,2)}function tc(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function Ey(t,i){Pa=Qu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ty(t,i,a){if(a&4194176){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,vr(t,a)}}var gi={readContext:Gt,use:Wu,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};gi.useCacheRefresh=ct,gi.useMemoCache=ct,gi.useHostTransitionStatus=ct,gi.useFormState=ct,gi.useActionState=ct,gi.useOptimistic=ct;var Us={readContext:Gt,use:Wu,useCallback:function(t,i){return on().memoizedState=[t,i===void 0?null:i],t},useContext:Gt,useEffect:ay,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Ju(4194308,4,uy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ju(4194308,4,t,i)},useInsertionEffect:function(t,i){Ju(4,2,t,i)},useMemo:function(t,i){var a=on();i=i===void 0?null:i;var l=t();if(Ls){ii(!0);try{t()}finally{ii(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=on();if(a!==void 0){var h=a(i);if(Ls){ii(!0);try{a(i)}finally{ii(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=HA.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var i=on();return t={current:t},i.memoizedState=t},useState:function(t){t=Lf(t);var i=t.queue,a=vy.bind(null,Ce,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:jf,useDeferredValue:function(t,i){var a=on();return Bf(a,t,i)},useTransition:function(){var t=Lf(!1);return t=my.bind(null,Ce,t.queue,!0,!1),on().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ce,h=on();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));Le&60||Fg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ay($g.bind(null,l,d,t),[t]),l.flags|=2048,Ua(9,Gg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=on(),i=Xe.identifierPrefix;if(Be){var a=Hi,l=Bi;a=(l&~(1<<32-Zt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Yu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=PA++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return on().memoizedState=BA.bind(null,Ce)}};Us.useMemoCache=kf,Us.useHostTransitionStatus=qf,Us.useFormState=ty,Us.useActionState=ty,Us.useOptimistic=function(t){var i=on();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Ff.bind(null,Ce,!0,a),a.dispatch=i,[t,i]};var Mr={readContext:Gt,use:Wu,useCallback:hy,useContext:Gt,useEffect:zf,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:Zu,useRef:sy,useState:function(){return Zu(Fi)},useDebugValue:jf,useDeferredValue:function(t,i){var a=pt();return dy(a,Ke.memoizedState,t,i)},useTransition:function(){var t=Zu(Fi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:rl(t),i]},useSyncExternalStore:qg,useId:yy};Mr.useCacheRefresh=_y,Mr.useMemoCache=kf,Mr.useHostTransitionStatus=qf,Mr.useFormState=ny,Mr.useActionState=ny,Mr.useOptimistic=function(t,i){var a=pt();return Yg(a,Ke,t,i)};var zs={readContext:Gt,use:Wu,useCallback:hy,useContext:Gt,useEffect:zf,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:Pf,useRef:sy,useState:function(){return Pf(Fi)},useDebugValue:jf,useDeferredValue:function(t,i){var a=pt();return Ke===null?Bf(a,t,i):dy(a,Ke.memoizedState,t,i)},useTransition:function(){var t=Pf(Fi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:rl(t),i]},useSyncExternalStore:qg,useId:yy};zs.useCacheRefresh=_y,zs.useMemoCache=kf,zs.useHostTransitionStatus=qf,zs.useFormState=ry,zs.useActionState=ry,zs.useOptimistic=function(t,i){var a=pt();return Ke!==null?Yg(a,Ke,t,i):(a.baseState=t,[t,a.queue.dispatch])};function Gf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $f={isMounted:function(t){return(t=t._reactInternals)?pe(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=_n(),h=Pr(l);h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,l),i!==null&&(nn(i,t,l),ll(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=_n(),h=Pr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,l),i!==null&&(nn(i,t,l),ll(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=_n(),l=Pr(a);l.tag=2,i!=null&&(l.callback=i),i=Lr(t,l,a),i!==null&&(nn(i,t,a),ll(i,t,a))}};function wy(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!$o(a,l)||!$o(h,d):!0}function Ay(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&$f.enqueueReplaceState(i,i.state,null)}function js(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=C({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var nc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Sy(t){nc(t)}function by(t){console.error(t)}function Ry(t){nc(t)}function ic(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Iy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Kf(t,i,a){return a=Pr(a),a.tag=3,a.payload={element:null},a.callback=function(){ic(t,i)},a}function Cy(t){return t=Pr(t),t.tag=3,t}function Dy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Iy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Iy(i,a,l),typeof h!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function qA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&ol(i,a,h,!0),a=kn.current,a!==null){switch(a.tag){case 13:return pi===null?Cd():a.alternate===null&&ot===0&&(ot=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Af?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Nd(t,l,h)),!1;case 22:return a.flags|=65536,l===Af?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Nd(t,l,h)),!1}throw Error(s(435,a.tag))}return Nd(t,l,h),Cd(),!1}if(Be)return i=kn.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==wf&&(t=Error(s(422),{cause:l}),Xo(On(t,a)))):(l!==wf&&(i=Error(s(423),{cause:l}),Xo(On(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=On(l,a),h=Kf(t.stateNode,l,h),ld(t,h),ot!==4&&(ot=2)),!1;var d=Error(s(520),{cause:l});if(d=On(d,a),gl===null?gl=[d]:gl.push(d),ot!==4&&(ot=2),i===null)return!0;l=On(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Kf(a.stateNode,l,t),ld(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qr===null||!qr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Cy(h),Dy(h,t,a,l),ld(a,h),!1}a=a.return}while(a!==null);return!1}var Ny=Error(s(461)),Mt=!1;function zt(t,i,a,l){i.child=t===null?Vg(i,null,a,l):Vs(i,t.child,a,l)}function Oy(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Hs(i),l=Nf(t,i,a,v,d,h),T=Of(),t!==null&&!Mt?(xf(t,i,h),Gi(t,i,h)):(Be&&T&&Ef(i),i.flags|=1,zt(t,i,l,h),i.child)}function xy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!gd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,My(t,i,d,l,h)):(t=lc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!nd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(v,l)&&t.ref===i.ref)return Gi(t,i,h)}return i.flags|=1,t=Br(d,l),t.ref=i.ref,t.return=i,i.child=t}function My(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if($o(d,l)&&t.ref===i.ref)if(Mt=!1,i.pendingProps=l=d,nd(t,h))t.flags&131072&&(Mt=!0);else return i.lanes=t.lanes,Gi(t,i,h)}return Qf(t,i,a,l,h)}function ky(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(al(t,i),l.mode==="hidden"||d){if(i.flags&128){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Vy(t,i,l,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ku(i,v!==null?v.cachePool:null),v!==null?Pg(i,v):Sf(),Lg(i);else return i.lanes=i.childLanes=536870912,Vy(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Ku(i,v.cachePool),Pg(i,v),Or(),i.memoizedState=null):(t!==null&&Ku(i,null),Sf(),Or());return zt(t,i,h,a),i.child}function Vy(t,i,a,l){var h=Cf();return h=h===null?null:{parent:bt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Ku(i,null),Sf(),Lg(i),t!==null&&ol(t,i,l,!0),null}function al(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function Qf(t,i,a,l,h){return Hs(i),a=Nf(t,i,a,l,void 0,h),l=Of(),t!==null&&!Mt?(xf(t,i,h),Gi(t,i,h)):(Be&&l&&Ef(i),i.flags|=1,zt(t,i,a,h),i.child)}function Py(t,i,a,l,h,d){return Hs(i),i.updateQueue=null,a=Hg(i,l,a,h),Bg(t),l=Of(),t!==null&&!Mt?(xf(t,i,d),Gi(t,i,d)):(Be&&l&&Ef(i),i.flags|=1,zt(t,i,a,d),i.child)}function Ly(t,i,a,l,h){if(Hs(i),i.stateNode===null){var d=Da,v=a.contextType;typeof v=="object"&&v!==null&&(d=Gt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=$f,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},ad(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Gt(v):Da,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Gf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&$f.enqueueReplaceState(d,d.state,null),cl(i,l,d,h),ul(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,I=js(a,T);d.props=I;var P=d.context,Q=a.contextType;v=Da,typeof Q=="object"&&Q!==null&&(v=Gt(Q));var J=a.getDerivedStateFromProps;Q=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||P!==v)&&Ay(i,d,l,v),Vr=!1;var H=i.memoizedState;d.state=H,cl(i,l,d,h),ul(),P=i.memoizedState,T||H!==P||Vr?(typeof J=="function"&&(Gf(i,a,J,l),P=i.memoizedState),(I=Vr||wy(i,a,I,l,H,P,v))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=P),d.props=l,d.state=P,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,od(t,i),v=i.memoizedProps,Q=js(a,v),d.props=Q,J=i.pendingProps,H=d.context,P=a.contextType,I=Da,typeof P=="object"&&P!==null&&(I=Gt(P)),T=a.getDerivedStateFromProps,(P=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||H!==I)&&Ay(i,d,l,I),Vr=!1,H=i.memoizedState,d.state=H,cl(i,l,d,h),ul();var K=i.memoizedState;v!==J||H!==K||Vr||t!==null&&t.dependencies!==null&&rc(t.dependencies)?(typeof T=="function"&&(Gf(i,a,T,l),K=i.memoizedState),(Q=Vr||wy(i,a,Q,l,H,K,I)||t!==null&&t.dependencies!==null&&rc(t.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,K,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,K,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=K),d.props=l,d.state=K,d.context=I,l=Q):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,al(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Vs(i,t.child,null,h),i.child=Vs(i,null,a,h)):zt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Gi(t,i,h),t}function Uy(t,i,a,l){return Yo(),i.flags|=256,zt(t,i,a,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:jg()}}function Wf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Un),t}function zy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?Nr(i):Or(),Be){var T=Ut,I;if(I=T){e:{for(I=T,T=mi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Qn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:xs!==null?{id:Bi,overflow:Hi}:null,retryLane:536870912},I=Ln(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,tn=i,Ut=null,I=!0):I=!1}I||ks(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;qi(i)}return T=l.children,l=l.fallback,h?(Or(),h=i.mode,T=Jf({mode:"hidden",children:T},h),l=Fs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Xf(a),h.childLanes=Wf(t,v,a),i.memoizedState=Yf,l):(Nr(i),Zf(i,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Nr(i),i.flags&=-257,i=ed(t,i,a)):i.memoizedState!==null?(Or(),i.child=t.child,i.flags|=128,i=null):(Or(),h=l.fallback,T=i.mode,l=Jf({mode:"visible",children:l.children},T),h=Fs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Vs(i,t.child,null,a),l=i.child,l.memoizedState=Xf(a),l.childLanes=Wf(t,v,a),i.memoizedState=Yf,i=h);else if(Nr(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var P=v.dgst;v=P,l=Error(s(419)),l.stack="",l.digest=v,Xo({value:l,source:null,stack:null}),i=ed(t,i,a)}else if(Mt||ol(t,i,a,!1),v=(a&t.childLanes)!==0,Mt||v){if(v=Xe,v!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(v.suspendedLanes|a)?0:l,l!==0&&l!==I.retryLane)throw I.retryLane=l,Dr(t,l),nn(v,t,l),Ny}T.data==="$?"||Cd(),i=ed(t,i,a)}else T.data==="$?"?(i.flags|=128,i.child=t.child,i=rS.bind(null,t),T._reactRetry=i,i=null):(t=I.treeContext,Ut=Qn(T.nextSibling),tn=i,Be=!0,$n=null,mi=!1,t!==null&&(xn[Mn++]=Bi,xn[Mn++]=Hi,xn[Mn++]=xs,Bi=t.id,Hi=t.overflow,xs=i),i=Zf(i,l.children),i.flags|=4096);return i}return h?(Or(),h=l.fallback,T=i.mode,I=t.child,P=I.sibling,l=Br(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&31457280,P!==null?h=Br(P,h):(h=Fs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=Xf(a):(I=T.cachePool,I!==null?(P=bt._currentValue,I=I.parent!==P?{parent:P,pool:P}:I):I=jg(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Wf(t,v,a),i.memoizedState=Yf,l):(Nr(i),a=t.child,t=a.sibling,a=Br(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Zf(t,i){return i=Jf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Jf(t,i){return h_(t,i,0,null)}function ed(t,i,a){return Vs(i,t.child,null,a),t=Zf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function jy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),rd(t.return,i,a)}function td(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function By(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(zt(t,i,l.children,a),l=St.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jy(t,a,i);else if(t.tag===19)jy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch($e(St,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&$u(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),td(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&$u(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}td(i,!0,a,null,d);break;case"together":td(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Hr|=i.lanes,!(a&i.childLanes))if(t!==null){if(ol(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Br(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Br(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function nd(t,i){return t.lanes&i?!0:(t=t.dependencies,!!(t!==null&&rc(t)))}function FA(t,i,a){switch(i.tag){case 3:dr(i,i.stateNode.containerInfo),kr(i,bt,t.memoizedState.cache),Yo();break;case 27:case 5:bo(i);break;case 4:dr(i,i.stateNode.containerInfo);break;case 10:kr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(i),i.flags|=128,null):a&i.child.childLanes?zy(t,i,a):(Nr(i),t=Gi(t,i,a),t!==null?t.sibling:null);Nr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(ol(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return By(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$e(St,St.current),l)break;return null;case 22:case 23:return i.lanes=0,ky(t,i,a);case 24:kr(i,bt,t.memoizedState.cache)}return Gi(t,i,a)}function Hy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mt=!0;else{if(!nd(t,a)&&!(i.flags&128))return Mt=!1,FA(t,i,a);Mt=!!(t.flags&131072)}else Mt=!1,Be&&i.flags&1048576&&Rg(i,Bu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")gd(l)?(t=js(l,t),i.tag=1,i=Ly(null,i,l,t,a)):(i.tag=0,i=Qf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===L){i.tag=11,i=Oy(null,i,l,t,a);break e}else if(h===G){i.tag=14,i=xy(null,i,l,t,a);break e}}throw i=R(l)||l,Error(s(306,i,""))}}return i;case 0:return Qf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=js(l,i.pendingProps),Ly(t,i,l,h,a);case 3:e:{if(dr(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,od(t,i),cl(i,d,null,a);var v=i.memoizedState;if(d=v.cache,kr(i,bt,d),d!==h.cache&&sd(i,[bt],a,!0),ul(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Uy(t,i,d,a);break e}else if(d!==l){l=On(Error(s(424)),i),Xo(l),i=Uy(t,i,d,a);break e}else for(Ut=Qn(i.stateNode.containerInfo.firstChild),tn=i,Be=!0,$n=null,mi=!0,a=Vg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Yo(),d===l){i=Gi(t,i,a);break e}zt(t,i,d,a)}i=i.child}return i;case 26:return al(t,i),t===null?(a=G_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Be||(a=i.type,t=i.pendingProps,l=Ec(An.current).createElement(a),l[Nt]=i,l[Tt]=t,jt(l,a,t),et(l),i.stateNode=l):i.memoizedState=G_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return bo(i),t===null&&Be&&(l=i.stateNode=H_(i.type,i.pendingProps,An.current),tn=i,mi=!0,Ut=Qn(l.firstChild)),l=i.pendingProps.children,t!==null||Be?zt(t,i,l,a):i.child=Vs(i,null,l,a),al(t,i),i.child;case 5:return t===null&&Be&&((h=l=Ut)&&(l=ES(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,tn=i,Ut=Qn(l.firstChild),mi=!1,h=!0):h=!1),h||ks(i)),bo(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,Hd(h,d)?l=null:v!==null&&Hd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Nf(t,i,LA,null,null,a),bl._currentValue=h),al(t,i),zt(t,i,l,a),i.child;case 6:return t===null&&Be&&((t=a=Ut)&&(a=TS(a,i.pendingProps,mi),a!==null?(i.stateNode=a,tn=i,Ut=null,t=!0):t=!1),t||ks(i)),null;case 13:return zy(t,i,a);case 4:return dr(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Vs(i,null,l,a):zt(t,i,l,a),i.child;case 11:return Oy(t,i,i.type,i.pendingProps,a);case 7:return zt(t,i,i.pendingProps,a),i.child;case 8:return zt(t,i,i.pendingProps.children,a),i.child;case 12:return zt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,kr(i,i.type,l.value),zt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Hs(i),h=Gt(h),l=l(h),i.flags|=1,zt(t,i,l,a),i.child;case 14:return xy(t,i,i.type,i.pendingProps,a);case 15:return My(t,i,i.type,i.pendingProps,a);case 19:return By(t,i,a);case 22:return ky(t,i,a);case 24:return Hs(i),l=Gt(bt),t===null?(h=Cf(),h===null&&(h=Xe,d=Rf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},ad(i),kr(i,bt,h)):(t.lanes&a&&(od(t,i),cl(i,null,null,a),ul()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),kr(i,bt,l)):(l=d.cache,kr(i,bt,l),l!==h.cache&&sd(i,[bt],a,!0))),zt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var id=ze(null),Bs=null,$i=null;function kr(t,i,a){$e(id,i._currentValue),i._currentValue=a}function Ki(t){t._currentValue=id.current,rt(id)}function rd(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function sd(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),rd(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),rd(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ol(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if(h.flags&524288)d=!0;else if(h.flags&262144)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;mn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===fr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(bl):t=[bl])}h=h.return}t!==null&&sd(i,t,a,l),i.flags|=262144}function rc(t){for(t=t.firstContext;t!==null;){if(!mn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hs(t){Bs=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return qy(Bs,t)}function sc(t,i){return Bs===null&&Hs(t),qy(t,i)}function qy(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else $i=$i.next=i;return a}var Vr=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function od(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,nt&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=zu(t),Sg(t,null,a),i}return Uu(t,l,i,a),zu(t)}function ll(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,vr(t,a)}}function ld(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var ud=!1;function ul(){if(ud){var t=Va;if(t!==null)throw t}}function cl(t,i,a,l){ud=!1;var h=t.updateQueue;Vr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,P=I.next;I.next=null,v===null?d=P:v.next=P,v=I;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=P:T.next=P,Q.lastBaseUpdate=I))}if(d!==null){var J=h.baseState;v=0,Q=P=I=null,T=d;do{var H=T.lane&-536870913,K=H!==T.lane;if(K?(Le&H)===H:(l&H)===H){H!==0&&H===ka&&(ud=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=t,Ae=T;H=i;var lt=a;switch(Ae.tag){case 1:if(he=Ae.payload,typeof he=="function"){J=he.call(lt,J,H);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=Ae.payload,H=typeof he=="function"?he.call(lt,J,H):he,H==null)break e;J=C({},J,H);break e;case 2:Vr=!0}}H=T.callback,H!==null&&(t.flags|=64,K&&(t.flags|=8192),K=h.callbacks,K===null?h.callbacks=[H]:K.push(H))}else K={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(P=Q=K,I=J):Q=Q.next=K,v|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;K=T,T=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);Q===null&&(I=J),h.baseState=I,h.firstBaseUpdate=P,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),Hr|=v,t.lanes=v,t.memoizedState=J}}function Fy(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Gy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fy(a[t],i)}function hl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Ye(i,i.return,T)}}function Ur(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var I=a;try{T()}catch(P){Ye(h,I,P)}}}l=l.next}while(l!==d)}}catch(P){Ye(i,i.return,P)}}function $y(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Gy(i,a)}catch(l){Ye(t,t.return,l)}}}function Ky(t,i,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function qs(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){Ye(t,i,d)}}function pn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function Qy(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function Yy(t,i,a){try{var l=t.stateNode;pS(l,t.type,a,i),l[Tt]=i}catch(h){Ye(t,t.return,h)}}function Xy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(hd(t,i,a),t=t.sibling;t!==null;)hd(t,i,a),t=t.sibling}function ac(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(ac(t,i,a),t=t.sibling;t!==null;)ac(t,i,a),t=t.sibling}var Qi=!1,at=!1,fd=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,kt=null,Zy=!1;function GA(t,i){if(t=t.containerInfo,jd=Rc,t=pg(t),mf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,P=0,Q=0,J=t,H=null;t:for(;;){for(var K;J!==a||h!==0&&J.nodeType!==3||(T=v+h),J!==d||l!==0&&J.nodeType!==3||(I=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(K=J.firstChild)!==null;)H=J,J=K;for(;;){if(J===t)break t;if(H===a&&++P===h&&(T=v),H===d&&++Q===l&&(I=v),(K=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=K}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bd={focusedElem:t,selectionRange:a},Rc=!1,kt=i;kt!==null;)if(i=kt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,kt=t;else for(;kt!==null;){switch(i=kt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var he=js(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(he,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ae){Ye(a,a.return,Ae)}}break;case 3:if(t&1024){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Gd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,kt=t;break}kt=i.return}return he=Zy,Zy=!1,he}function Jy(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),l&4&&hl(5,a);break;case 1:if(Xi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){Ye(a,a.return,T)}else{var h=js(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Ye(a,a.return,T)}}l&64&&$y(a),l&512&&qs(a,a.return);break;case 3:if(Xi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Gy(l,t)}catch(T){Ye(a,a.return,T)}}break;case 26:Xi(t,a),l&512&&qs(a,a.return);break;case 27:case 5:Xi(t,a),i===null&&l&4&&Qy(a),l&512&&qs(a,a.return);break;case 12:Xi(t,a);break;case 13:Xi(t,a),l&4&&n_(t,a);break;case 22:if(h=a.memoizedState!==null||Qi,!h){i=i!==null&&i.memoizedState!==null||at;var d=Qi,v=at;Qi=h,(at=i)&&!v?zr(t,a,(a.subtreeFlags&8772)!==0):Xi(t,a),Qi=d,at=v}l&512&&(a.memoizedProps.mode==="manual"?qs(a,a.return):pn(a,a.return));break;default:Xi(t,a)}}function e_(t){var i=t.alternate;i!==null&&(t.alternate=null,e_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&vs(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,gn=!1;function Yi(t,i,a){for(a=a.child;a!==null;)t_(t,i,a),a=a.sibling}function t_(t,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(mr,a)}catch{}switch(a.tag){case 26:at||pn(a,i),Yi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||pn(a,i);var l=gt,h=gn;for(gt=a.stateNode,Yi(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);vs(a),gt=l,gn=h;break;case 5:at||pn(a,i);case 6:h=gt;var d=gn;if(gt=null,Yi(t,i,a),gt=h,gn=d,gt!==null)if(gn)try{t=gt,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){Ye(a,i,v)}else try{gt.removeChild(a.stateNode)}catch(v){Ye(a,i,v)}break;case 18:gt!==null&&(gn?(i=gt,a=a.stateNode,i.nodeType===8?Fd(i.parentNode,a):i.nodeType===1&&Fd(i,a),Dl(i)):Fd(gt,a.stateNode));break;case 4:l=gt,h=gn,gt=a.stateNode.containerInfo,gn=!0,Yi(t,i,a),gt=l,gn=h;break;case 0:case 11:case 14:case 15:at||Ur(2,a,i),at||Ur(4,a,i),Yi(t,i,a);break;case 1:at||(pn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ky(a,i,l)),Yi(t,i,a);break;case 21:Yi(t,i,a);break;case 22:at||pn(a,i),at=(l=at)||a.memoizedState!==null,Yi(t,i,a),at=l;break;default:Yi(t,i,a)}}function n_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dl(t)}catch(a){Ye(i,i.return,a)}}function $A(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Wy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Wy),i;default:throw Error(s(435,t.tag))}}function dd(t,i){var a=$A(t);i.forEach(function(l){var h=sS.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Vn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:gt=T.stateNode,gn=!1;break e;case 3:gt=T.stateNode.containerInfo,gn=!0;break e;case 4:gt=T.stateNode.containerInfo,gn=!0;break e}T=T.return}if(gt===null)throw Error(s(160));t_(d,v,h),gt=null,gn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)i_(i,t),i=i.sibling}var Kn=null;function i_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(i,t),Pn(t),l&4&&(Ur(3,t,t.return),hl(3,t),Ur(5,t,t.return));break;case 1:Vn(i,t),Pn(t),l&512&&(at||a===null||pn(a,a.return)),l&64&&Qi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Kn;if(Vn(i,t),Pn(t),l&512&&(at||a===null||pn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Tr]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),jt(d,l,a),d[Nt]=t,et(d),l=d;break e;case"link":var v=Q_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),jt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Q_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),jt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=t,et(d),l=d}t.stateNode=l}else Y_(h,t.type,t.stateNode);else t.stateNode=K_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Y_(h,t.type,t.stateNode):K_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yy(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var I=h.firstChild;I;){var P=I.nextSibling,Q=I.nodeName;I[Tr]||Q==="HEAD"||Q==="BODY"||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&I.rel.toLowerCase()==="stylesheet"||h.removeChild(I),I=P}for(var J=t.type,H=h.attributes;H.length;)h.removeAttributeNode(H[0]);jt(h,J,d),h[Nt]=t,h[Tt]=d}catch(he){Ye(t,t.return,he)}}case 5:if(Vn(i,t),Pn(t),l&512&&(at||a===null||pn(a,a.return)),t.flags&32){h=t.stateNode;try{Rn(h,"")}catch(he){Ye(t,t.return,he)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Yy(t,h,a!==null?a.memoizedProps:h)),l&1024&&(fd=!0);break;case 6:if(Vn(i,t),Pn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(he){Ye(t,t.return,he)}}break;case 3:if(Ac=null,h=Kn,Kn=Tc(i.containerInfo),Vn(i,t),Kn=h,Pn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Dl(i.containerInfo)}catch(he){Ye(t,t.return,he)}fd&&(fd=!1,r_(t));break;case 4:l=Kn,Kn=Tc(t.stateNode.containerInfo),Vn(i,t),Pn(t),Kn=l;break;case 12:Vn(i,t),Pn(t);break;case 13:Vn(i,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wd=sn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dd(t,l)));break;case 22:if(l&512&&(at||a===null||pn(a,a.return)),I=t.memoizedState!==null,P=a!==null&&a.memoizedState!==null,Q=Qi,J=at,Qi=Q||I,at=J||P,Vn(i,t),at=J,Qi=Q,Pn(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=I?i._visibility&-2:i._visibility|1,I&&(i=Qi||at,a===null||P||i||za(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){P=a=i;try{if(h=P.stateNode,I)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=P.stateNode,T=P.memoizedProps.style;var K=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(he){Ye(P,P.return,he)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=I?"":P.memoizedProps}catch(he){Ye(P,P.return,he)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,dd(t,a))));break;case 19:Vn(i,t),Pn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dd(t,l)));break;case 21:break;default:Vn(i,t),Pn(t)}}function Pn(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Xy(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=cd(t);ac(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Rn(v,""),l.flags&=-33);var T=cd(t);ac(t,T,v);break;case 3:case 4:var I=l.stateNode.containerInfo,P=cd(t);hd(t,P,I);break;default:throw Error(s(161))}}}catch(Q){Ye(t,t.return,Q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function r_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;r_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Xi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Jy(t,i.alternate,i),i=i.sibling}function za(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ur(4,i,i.return),za(i);break;case 1:pn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ky(i,i.return,a),za(i);break;case 26:case 27:case 5:pn(i,i.return),za(i);break;case 22:pn(i,i.return),i.memoizedState===null&&za(i);break;default:za(i)}t=t.sibling}}function zr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:zr(h,d,a),hl(4,d);break;case 1:if(zr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){Ye(l,l.return,P)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Fy(I[h],T)}catch(P){Ye(l,l.return,P)}}a&&v&64&&$y(d),qs(d,d.return);break;case 26:case 27:case 5:zr(h,d,a),a&&l===null&&v&4&&Qy(d),qs(d,d.return);break;case 12:zr(h,d,a);break;case 13:zr(h,d,a),a&&v&4&&n_(h,d);break;case 22:d.memoizedState===null&&zr(h,d,a),qs(d,d.return);break;default:zr(h,d,a)}i=i.sibling}}function md(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function pd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&tl(t))}function jr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)s_(t,i,a,l),i=i.sibling}function s_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:jr(t,i,a,l),h&2048&&hl(9,i);break;case 3:jr(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&tl(t)));break;case 12:if(h&2048){jr(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ye(i,i.return,I)}}else jr(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?jr(t,i,a,l):fl(t,i):d._visibility&4?jr(t,i,a,l):(d._visibility|=4,ja(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&md(i.alternate,i);break;case 24:jr(t,i,a,l),h&2048&&pd(i.alternate,i);break;default:jr(t,i,a,l)}}function ja(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,I=l,P=v.flags;switch(v.tag){case 0:case 11:case 15:ja(d,v,T,I,h),hl(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&4?ja(d,v,T,I,h):fl(d,v):(Q._visibility|=4,ja(d,v,T,I,h)),h&&P&2048&&md(v.alternate,v);break;case 24:ja(d,v,T,I,h),h&&P&2048&&pd(v.alternate,v);break;default:ja(d,v,T,I,h)}i=i.sibling}}function fl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:fl(a,l),h&2048&&md(l.alternate,l);break;case 24:fl(a,l),h&2048&&pd(l.alternate,l);break;default:fl(a,l)}i=i.sibling}}var dl=8192;function Ba(t){if(t.subtreeFlags&dl)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 26:Ba(t),t.flags&dl&&t.memoizedState!==null&&kS(Kn,t.memoizedState,t.memoizedProps);break;case 5:Ba(t);break;case 3:case 4:var i=Kn;Kn=Tc(t.stateNode.containerInfo),Ba(t),Kn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=dl,dl=16777216,Ba(t),dl=i):Ba(t));break;default:Ba(t)}}function o_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ml(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,u_(l,t)}o_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l_(t),t=t.sibling}function l_(t){switch(t.tag){case 0:case 11:case 15:ml(t),t.flags&2048&&Ur(9,t,t.return);break;case 3:ml(t);break;case 12:ml(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,oc(t)):ml(t);break;default:ml(t)}}function oc(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,u_(l,t)}o_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ur(8,i,i.return),oc(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,oc(i));break;default:oc(i)}t=t.sibling}}function u_(t,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:Ur(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=t;kt!==null;){l=kt;var h=l.sibling,d=l.return;if(e_(l),l===a){kt=null;break e}if(h!==null){h.return=d,kt=h;break e}kt=d}}}function KA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,i,a,l){return new KA(t,i,a,l)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Br(t,i){var a=t.alternate;return a===null?(a=Ln(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function c_(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function lc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")gd(t)&&(v=1);else if(typeof t=="string")v=xS(t,a,Wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return Fs(a.children,h,d,i);case g:v=8,h|=24;break;case E:return t=Ln(12,a,i,h|2),t.elementType=E,t.lanes=d,t;case $:return t=Ln(13,a,i,h),t.elementType=$,t.lanes=d,t;case k:return t=Ln(19,a,i,h),t.elementType=k,t.lanes=d,t;case Z:return h_(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case N:v=10;break e;case b:v=9;break e;case L:v=11;break e;case G:v=14;break e;case ee:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Ln(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Fs(t,i,a,l){return t=Ln(7,t,l,i),t.lanes=a,t}function h_(t,i,a,l){t=Ln(22,t,l,i),t.elementType=Z,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if(!(h._pendingVisibility&2)){var v=Dr(d,2);v!==null&&(h._pendingVisibility|=2,nn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if(h._pendingVisibility&2){var v=Dr(d,2);v!==null&&(h._pendingVisibility&=-3,nn(v,d,2))}}};return t.stateNode=h,t}function yd(t,i,a){return t=Ln(6,t,null,i),t.lanes=a,t}function _d(t,i,a){return i=Ln(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Wi(t){t.flags|=4}function f_(t,i){if(i.type!=="stylesheet"||i.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!X_(i)){if(i=kn.current,i!==null&&((Le&4194176)===Le?pi!==null:(Le&62914560)!==Le&&!(Le&536870912)||i!==pi))throw Zo=Af,Dg;t.flags|=8192}}function uc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?yr():536870912,t.lanes|=i,qa|=i)}function pl(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function QA(t,i,a){var l=i.pendingProps;switch(Tf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return tt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(bt),Ni(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qo(i)?Wi(i):t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,$n!==null&&(Rd($n),$n=null))),tt(i),null;case 26:return a=i.memoizedState,t===null?(Wi(i),a!==null?(tt(i),f_(i,a)):(tt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Wi(i),tt(i),f_(i,a)):(tt(i),i.flags&=-16777217):(t.memoizedProps!==l&&Wi(i),tt(i),i.flags&=-16777217),null;case 27:la(i),a=An.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Wi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return tt(i),null}t=Wt.current,Qo(i)?Ig(i):(t=H_(h,l,a),i.stateNode=t,Wi(i))}return tt(i),null;case 5:if(la(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Wi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return tt(i),null}if(t=Wt.current,Qo(i))Ig(i);else{switch(h=Ec(An.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Nt]=i,t[Tt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(jt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(i)}}return tt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Wi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=An.current,Qo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=tn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Nt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||P_(t.nodeValue,a)),t||ks(i)}else t=Ec(t).createTextNode(l),t[Nt]=i,i.stateNode=t}return tt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Qo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Nt]=i}else Yo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),h=!1}else $n!==null&&(Rd($n),$n=null),h=!0;if(!h)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),i.flags&128)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),uc(i,i.updateQueue),tt(i),null;case 4:return Ni(),t===null&&Ld(i.stateNode.containerInfo),tt(i),null;case 10:return Ki(i.type),tt(i),null;case 19:if(rt(St),h=i.memoizedState,h===null)return tt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)pl(h,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(d=$u(t),d!==null){for(i.flags|=128,pl(h,!1),t=d.updateQueue,i.updateQueue=t,uc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)c_(a,t),a=a.sibling;return $e(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&sn()>cc&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304)}else{if(!l)if(t=$u(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,uc(i,t),pl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Be)return tt(i),null}else 2*sn()-h.renderingStartTime>cc&&a!==536870912&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=sn(),i.sibling=null,t=St.current,$e(St,l?t&1|2:t&1),i):(tt(i),null);case 22:case 23:return qi(i),bf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?a&536870912&&!(i.flags&128)&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),a=i.updateQueue,a!==null&&uc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&rt(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(bt),tt(i),null;case 25:return null}throw Error(s(156,i.tag))}function YA(t,i){switch(Tf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(bt),Ni(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return la(i),null;case 13:if(qi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Yo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return rt(St),null;case 4:return Ni(),null;case 10:return Ki(i.type),null;case 22:case 23:return qi(i),bf(),t!==null&&rt(Ps),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(bt),null;case 25:return null;default:return null}}function d_(t,i){switch(Tf(i),i.tag){case 3:Ki(bt),Ni();break;case 26:case 27:case 5:la(i);break;case 4:Ni();break;case 13:qi(i);break;case 19:rt(St);break;case 10:Ki(i.type);break;case 22:case 23:qi(i),bf(),t!==null&&rt(Ps);break;case 24:Ki(bt)}}var XA={getCacheForType:function(t){var i=Gt(bt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},WA=typeof WeakMap=="function"?WeakMap:Map,nt=0,Xe=null,Ne=null,Le=0,We=0,yn=null,Zi=!1,Ha=!1,vd=!1,Ji=0,ot=0,Hr=0,Gs=0,Ed=0,Un=0,qa=0,gl=null,yi=null,Td=!1,wd=0,cc=1/0,hc=null,qr=null,fc=!1,$s=null,yl=0,Ad=0,Sd=null,_l=0,bd=null;function _n(){if(nt&2&&Le!==0)return Le&-Le;if(S.T!==null){var t=ka;return t!==0?t:Md()}return _u()}function m_(){Un===0&&(Un=!(Le&536870912)||Be?No():536870912);var t=kn.current;return t!==null&&(t.flags|=32),Un}function nn(t,i,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(Fa(t,0),er(t,Le,Un,!1)),ut(t,a),(!(nt&2)||t!==Xe)&&(t===Xe&&(!(nt&2)&&(Gs|=a),ot===4&&er(t,Le,Un,!1)),_i(t))}function p_(t,i,a){if(nt&6)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||gr(t,i),h=l?eS(t,i):Dd(t,i,!0),d=l;do{if(h===0){Ha&&!l&&er(t,i,0,!1);break}else if(h===6)er(t,i,0,!Zi);else{if(a=t.current.alternate,d&&!ZA(a)){h=Dd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=gl;var I=T.current.memoizedState.isDehydrated;if(I&&(Fa(T,v).flags|=256),v=Dd(T,v,!1),v!==2){if(vd&&!I){T.errorRecoveryDisabledLanes|=d,Gs|=d,h=4;break e}d=yi,yi=h,d!==null&&Rd(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Fa(t,0),er(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){er(l,i,Un,!Zi);break e}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=wd+300-sn(),10<d)){if(er(l,i,Un,!Zi),Sn(l,0)!==0)break e;l.timeoutHandle=z_(g_.bind(null,l,a,yi,hc,Td,i,Un,Gs,qa,Zi,2,-0,0),d);break e}g_(l,a,yi,hc,Td,i,Un,Gs,qa,Zi,0,-0,0)}}break}while(!0);_i(t)}function Rd(t){yi===null?yi=t:yi.push.apply(yi,t)}function g_(t,i,a,l,h,d,v,T,I,P,Q,J,H){var K=i.subtreeFlags;if((K&8192||(K&16785408)===16785408)&&(Sl={stylesheets:null,count:0,unsuspend:MS},a_(i),i=VS(),i!==null)){t.cancelPendingCommit=i(A_.bind(null,t,a,l,h,v,T,I,1,J,H)),er(t,d,v,!P);return}A_(t,a,l,h,v,T,I,Q,J,H)}function ZA(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!mn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function er(t,i,a,l){i&=~Ed,i&=~Gs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Zt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&_r(t,a,i)}function dc(){return nt&6?!0:(vl(0),!1)}function Id(){if(Ne!==null){if(We===0)var t=Ne.return;else t=Ne,$i=Bs=null,Mf(t),xa=null,Jo=0,t=Ne;for(;t!==null;)d_(t.alternate,t),t=t.return;Ne=null}}function Fa(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Id(),Xe=t,Ne=a=Br(t.current,null),Le=i,We=0,yn=null,Zi=!1,Ha=gr(t,i),vd=!1,qa=Un=Ed=Gs=Hr=ot=0,yi=gl=null,Td=!1,i&8&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Zt(l),d=1<<h;i|=t[h],l&=~d}return Ji=i,Lu(),a}function y_(t,i){Ce=null,S.H=gi,i===Wo?(i=xg(),We=3):i===Dg?(i=xg(),We=4):We=i===Ny?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yn=i,Ne===null&&(ot=1,ic(t,On(i,t.current)))}function __(){var t=S.H;return S.H=gi,t===null?gi:t}function v_(){var t=S.A;return S.A=XA,t}function Cd(){ot=4,Zi||(Le&4194176)!==Le&&kn.current!==null||(Ha=!0),!(Hr&134217727)&&!(Gs&134217727)||Xe===null||er(Xe,Le,Un,!1)}function Dd(t,i,a){var l=nt;nt|=2;var h=__(),d=v_();(Xe!==t||Le!==i)&&(hc=null,Fa(t,i)),i=!1;var v=ot;e:do try{if(We!==0&&Ne!==null){var T=Ne,I=yn;switch(We){case 8:Id(),v=6;break e;case 3:case 2:case 6:kn.current===null&&(i=!0);var P=We;if(We=0,yn=null,Ga(t,T,I,P),a&&Ha){v=0;break e}break;default:P=We,We=0,yn=null,Ga(t,T,I,P)}}JA(),v=ot;break}catch(Q){y_(t,Q)}while(!0);return i&&t.shellSuspendCounter++,$i=Bs=null,nt=l,S.H=h,S.A=d,Ne===null&&(Xe=null,Le=0,Lu()),v}function JA(){for(;Ne!==null;)E_(Ne)}function eS(t,i){var a=nt;nt|=2;var l=__(),h=v_();Xe!==t||Le!==i?(hc=null,cc=sn()+500,Fa(t,i)):Ha=gr(t,i);e:do try{if(We!==0&&Ne!==null){i=Ne;var d=yn;t:switch(We){case 1:We=0,yn=null,Ga(t,i,d,1);break;case 2:if(Ng(d)){We=0,yn=null,T_(i);break}i=function(){We===2&&Xe===t&&(We=7),_i(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Ng(d)?(We=0,yn=null,T_(i)):(We=0,yn=null,Ga(t,i,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var T=Ne;if(!v||X_(v)){We=0,yn=null;var I=T.sibling;if(I!==null)Ne=I;else{var P=T.return;P!==null?(Ne=P,mc(P)):Ne=null}break t}}We=0,yn=null,Ga(t,i,d,5);break;case 6:We=0,yn=null,Ga(t,i,d,6);break;case 8:Id(),ot=6;break e;default:throw Error(s(462))}}tS();break}catch(Q){y_(t,Q)}while(!0);return $i=Bs=null,S.H=l,S.A=h,nt=a,Ne!==null?0:(Xe=null,Le=0,Lu(),ot)}function tS(){for(;Ne!==null&&!nf();)E_(Ne)}function E_(t){var i=Hy(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,i===null?mc(t):Ne=i}function T_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Py(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=Py(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:Mf(i);default:d_(a,i),i=Ne=c_(i,Ji),i=Hy(a,i,Ji)}t.memoizedProps=t.pendingProps,i===null?mc(t):Ne=i}function Ga(t,i,a,l){$i=Bs=null,Mf(i),xa=null,Jo=0;var h=i.return;try{if(qA(t,h,i,a,Le)){ot=1,ic(t,On(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ot=1,ic(t,On(a,t.current)),Ne=null;return}i.flags&32768?(Be||l===1?t=!0:Ha||Le&536870912?t=!1:(Zi=t=!0,(l===2||l===3||l===6)&&(l=kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),w_(i,t)):mc(i)}function mc(t){var i=t;do{if(i.flags&32768){w_(i,Zi);return}t=i.return;var a=QA(i.alternate,i,Ji);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ot===0&&(ot=5)}function w_(t,i){do{var a=YA(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ot=6,Ne=null}function A_(t,i,a,l,h,d,v,T,I,P){var Q=S.T,J=ae.p;try{ae.p=2,S.T=null,nS(t,i,a,l,J,h,d,v,T,I,P)}finally{S.T=Q,ae.p=J}}function nS(t,i,a,l,h,d,v,T){do $a();while($s!==null);if(nt&6)throw Error(s(327));var I=t.finishedWork;if(l=t.finishedLanes,I===null)return null;if(t.finishedWork=null,t.finishedLanes=0,I===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var P=I.lanes|I.childLanes;if(P|=_f,gu(t,l,P,d,v,T),t===Xe&&(Ne=Xe=null,Le=0),!(I.subtreeFlags&10256)&&!(I.flags&10256)||fc||(fc=!0,Ad=P,Sd=a,aS(Oi,function(){return $a(),null})),a=(I.flags&15990)!==0,I.subtreeFlags&15990||a?(a=S.T,S.T=null,d=ae.p,ae.p=2,v=nt,nt|=4,GA(t,I),i_(I,t),RA(Bd,t.containerInfo),Rc=!!jd,Bd=jd=null,t.current=I,Jy(t,I.alternate,I),Ro(),nt=v,ae.p=d,S.T=a):t.current=I,fc?(fc=!1,$s=t,yl=l):S_(t,P),P=t.pendingLanes,P===0&&(qr=null),Co(I.stateNode),_i(t),i!==null)for(h=t.onRecoverableError,I=0;I<i.length;I++)P=i[I],h(P.value,{componentStack:P.stack});return yl&3&&$a(),P=t.pendingLanes,l&4194218&&P&42?t===bd?_l++:(_l=0,bd=t):_l=0,vl(0),null}function S_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,tl(i)))}function $a(){if($s!==null){var t=$s,i=Ad;Ad=0;var a=yu(yl),l=S.T,h=ae.p;try{if(ae.p=32>a?32:a,S.T=null,$s===null)var d=!1;else{a=Sd,Sd=null;var v=$s,T=yl;if($s=null,yl=0,nt&6)throw Error(s(331));var I=nt;if(nt|=4,l_(v.current),s_(v,v.current,T,a),nt=I,vl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(mr,v)}catch{}d=!0}return d}finally{ae.p=h,S.T=l,S_(t,i)}}return!1}function b_(t,i,a){i=On(a,i),i=Kf(t.stateNode,i,2),t=Lr(t,i,2),t!==null&&(ut(t,2),_i(t))}function Ye(t,i,a){if(t.tag===3)b_(t,t,a);else for(;i!==null;){if(i.tag===3){b_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qr===null||!qr.has(l))){t=On(a,t),a=Cy(2),l=Lr(i,a,2),l!==null&&(Dy(a,l,i,t),ut(l,2),_i(l));break}}i=i.return}}function Nd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new WA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(vd=!0,h.add(a),t=iS.bind(null,t,i,a),i.then(t,t))}function iS(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Le&a)===a&&(ot===4||ot===3&&(Le&62914560)===Le&&300>sn()-wd?!(nt&2)&&Fa(t,0):Ed|=a,qa===Le&&(qa=0)),_i(t)}function R_(t,i){i===0&&(i=yr()),t=Dr(t,i),t!==null&&(ut(t,i),_i(t))}function rS(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),R_(t,a)}function sS(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),R_(t,a)}function aS(t,i){return gs(t,i)}var pc=null,Ka=null,Od=!1,gc=!1,xd=!1,Ks=0;function _i(t){t!==Ka&&t.next===null&&(Ka===null?pc=Ka=t:Ka=Ka.next=t),gc=!0,Od||(Od=!0,lS(oS))}function vl(t,i){if(!xd&&gc){xd=!0;do for(var a=!1,l=pc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Zt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,D_(l,d))}else d=Le,d=Sn(l,l===Xe?d:0),!(d&3)||gr(l,d)||(a=!0,D_(l,d));l=l.next}while(a);xd=!1}}function oS(){gc=Od=!1;var t=0;Ks!==0&&(gS()&&(t=Ks),Ks=0);for(var i=sn(),a=null,l=pc;l!==null;){var h=l.next,d=I_(l,i);d===0?(l.next=null,a===null?pc=h:a.next=h,h===null&&(Ka=a)):(a=l,(t!==0||d&3)&&(gc=!0)),l=h}vl(t)}function I_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Zt(d),T=1<<v,I=h[v];I===-1?(!(T&a)||T&l)&&(h[v]=ha(T,i)):I<=i&&(t.expiredLanes|=T),d&=~T}if(i=Xe,a=Le,a=Sn(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ca(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||gr(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ca(l),yu(a)){case 2:case 8:a=Dt;break;case 32:a=Oi;break;case 268435456:a=Io;break;default:a=Oi}return l=C_.bind(null,t),a=gs(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ca(l),t.callbackPriority=2,t.callbackNode=null,2}function C_(t,i){var a=t.callbackNode;if($a()&&t.callbackNode!==a)return null;var l=Le;return l=Sn(t,t===Xe?l:0),l===0?null:(p_(t,l,i),I_(t,sn()),t.callbackNode!=null&&t.callbackNode===a?C_.bind(null,t):null)}function D_(t,i){if($a())return null;p_(t,i,!0)}function lS(t){_S(function(){nt&6?gs(Et,t):t()})}function Md(){return Ks===0&&(Ks=No()),Ks}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:oi(""+t)}function O_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function uS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=N_((h[Tt]||null).action),v=l.submitter;v&&(i=(i=v[Tt]||null)?N_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new _a("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ks!==0){var I=v?O_(h,v):new FormData(h);Hf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?O_(h,v):new FormData(h),Hf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var kd=0;kd<Ag.length;kd++){var Vd=Ag[kd],cS=Vd.toLowerCase(),hS=Vd[0].toUpperCase()+Vd.slice(1);Gn(cS,"on"+hS)}Gn(_g,"onAnimationEnd"),Gn(vg,"onAnimationIteration"),Gn(Eg,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(CA,"onTransitionRun"),Gn(DA,"onTransitionStart"),Gn(NA,"onTransitionCancel"),Gn(Tg,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function x_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,P=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(Q){nc(Q)}h.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,P=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(Q){nc(Q)}h.currentTarget=null,d=I}}}}function Me(t,i){var a=i[_s];a===void 0&&(a=i[_s]=new Set);var l=t+"__bubble";a.has(l)||(M_(i,t,2,!1),a.add(l))}function Pd(t,i,a){var l=0;i&&(l|=4),M_(a,t,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[yc]){t[yc]=!0,xo.forEach(function(a){a!=="selectionchange"&&(fS.has(a)||Pd(a,!1,t),Pd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yc]||(i[yc]=!0,Pd("selectionchange",!1,i))}}function M_(t,i,a,l){switch(nv(i)){case 2:var h=US;break;case 8:h=zS;break;default:h=Xd}a=h.bind(null,i,a,t),h=void 0,!Cn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Ud(t,i,a,l,h){var d=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Fn(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}wu(function(){var P=d,Q=ya(a),J=[];e:{var H=wg.get(t);if(H!==void 0){var K=_a,he=t;switch(t){case"keypress":if(ui(a)===0)break e;case"keydown":case"keyup":K=Sa;break;case"focusin":he="focus",K=Ta;break;case"focusout":he="blur",K=Ta;break;case"beforeblur":case"afterblur":K=Ta;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Nu;break;case _g:case vg:case Eg:K=wa;break;case Tg:K=xu;break;case"scroll":case"scrollend":K=Au;break;case"wheel":K=ba;break;case"copy":case"cut":case"paste":K=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Fo;break;case"toggle":case"beforetoggle":K=ku}var Ae=(i&4)!==0,lt=!Ae&&(t==="scroll"||t==="scrollend"),U=Ae?H!==null?H+"Capture":null:H;Ae=[];for(var M=P,B;M!==null;){var Y=M;if(B=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||B===null||U===null||(Y=As(M,U),Y!=null&&Ae.push(Tl(M,Y,B))),lt)break;M=M.return}0<Ae.length&&(H=new K(H,he,null,a,Q),J.push({event:H,listeners:Ae}))}}if(!(i&7)){e:{if(H=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",H&&a!==In&&(he=a.relatedTarget||a.fromElement)&&(Fn(he)||he[xi]))break e;if((K||H)&&(H=Q.window===Q?Q:(H=Q.ownerDocument)?H.defaultView||H.parentWindow:window,K?(he=a.relatedTarget||a.toElement,K=P,he=he?Fn(he):null,he!==null&&(lt=pe(he),Ae=he.tag,he!==lt||Ae!==5&&Ae!==27&&Ae!==6)&&(he=null)):(K=null,he=P),K!==he)){if(Ae=Dn,Y="onMouseLeave",U="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(Ae=Fo,Y="onPointerLeave",U="onPointerEnter",M="pointer"),lt=K==null?H:wr(K),B=he==null?H:wr(he),H=new Ae(Y,M+"leave",K,a,Q),H.target=lt,H.relatedTarget=B,Y=null,Fn(Q)===P&&(Ae=new Ae(U,M+"enter",he,a,Q),Ae.target=B,Ae.relatedTarget=lt,Y=Ae),lt=Y,K&&he)t:{for(Ae=K,U=he,M=0,B=Ae;B;B=Qa(B))M++;for(B=0,Y=U;Y;Y=Qa(Y))B++;for(;0<M-B;)Ae=Qa(Ae),M--;for(;0<B-M;)U=Qa(U),B--;for(;M--;){if(Ae===U||U!==null&&Ae===U.alternate)break t;Ae=Qa(Ae),U=Qa(U)}Ae=null}else Ae=null;K!==null&&k_(J,H,K,Ae,!1),he!==null&&lt!==null&&k_(J,lt,he,Ae,!0)}}e:{if(H=P?wr(P):window,K=H.nodeName&&H.nodeName.toLowerCase(),K==="select"||K==="input"&&H.type==="file")var ue=og;else if(At(H))if(lg)ue=SA;else{ue=wA;var De=TA}else K=H.nodeName,!K||K.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?P&&Lo(P.elementType)&&(ue=og):ue=AA;if(ue&&(ue=ue(t,P))){ji(J,ue,a,Q);break e}De&&De(t,H,P),t==="focusout"&&P&&H.type==="number"&&P.memoizedProps.value!=null&&ga(H,"number",H.value)}switch(De=P?wr(P):window,t){case"focusin":(At(De)||De.contentEditable==="true")&&(Ra=De,pf=P,Ko=null);break;case"focusout":Ko=pf=Ra=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,gg(J,a,Q);break;case"selectionchange":if(IA)break;case"keydown":case"keyup":gg(J,a,Q)}var me;if(fi)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ve?q(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(Ve||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ve&&(me=zo()):(li=Q,Cr="value"in li?li.value:li.textContent,Ve=!0)),De=_c(P,ye),0<De.length&&(ye=new Ho(ye,t,null,a,Q),J.push({event:ye,listeners:De}),me?ye.data=me:(me=ie(a),me!==null&&(ye.data=me)))),(me=y?wt(t,a):Pe(t,a))&&(ye=_c(P,"onBeforeInput"),0<ye.length&&(De=new Ho("onBeforeInput","beforeinput",null,a,Q),J.push({event:De,listeners:ye}),De.data=me)),uS(J,t,P,a,Q)}x_(J,i)})}function Tl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function _c(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=As(t,a),h!=null&&l.unshift(Tl(t,h,d)),h=As(t,i),h!=null&&l.push(Tl(t,h,d))),t=t.return}return l}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,P=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||P===null||(I=P,h?(P=As(a,d),P!=null&&v.unshift(Tl(a,P,I))):h||(P=As(a,d),P!=null&&v.push(Tl(a,P,I)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var dS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function V_(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(mS,"")}function P_(t,i){return i=V_(i),V_(t)===i}function vc(){}function Qe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Rn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Rn(t,""+l);break;case"className":br(t,"class",l);break;case"tabIndex":br(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":br(t,a,l);break;case"style":Tu(t,l,d);break;case"data":if(i!=="object"){br(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=oi(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qe(t,i,"name",h.name,h,null),Qe(t,i,"formEncType",h.formEncType,h,null),Qe(t,i,"formMethod",h.formMethod,h,null),Qe(t,i,"formTarget",h.formTarget,h,null)):(Qe(t,i,"encType",h.encType,h,null),Qe(t,i,"method",h.method,h,null),Qe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=oi(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=vc);break;case"onScroll":l!=null&&Me("scroll",t);break;case"onScrollEnd":l!=null&&Me("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=oi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Sr(t,"popover",l);break;case"xlinkActuate":bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lf.get(a)||a,Sr(t,a,l))}}function zd(t,i,a,l,h,d){switch(a){case"style":Tu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Rn(t,l):(typeof l=="number"||typeof l=="bigint")&&Rn(t,""+l);break;case"onScroll":l!=null&&Me("scroll",t);break;case"onScrollEnd":l!=null&&Me("scrollend",t);break;case"onClick":l!=null&&(t.onclick=vc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ma.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Sr(t,a,l)}}}function jt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,d,v,a,null)}}h&&Qe(t,i,"srcSet",a.srcSet,a,null),l&&Qe(t,i,"src",a.src,a,null);return;case"input":Me("invalid",t);var T=d=v=h=null,I=null,P=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":v=Q;break;case"checked":I=Q;break;case"defaultChecked":P=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Qe(t,i,l,Q,a,null)}}Ts(t,d,T,I,P,v,h,!1),Es(t);return;case"select":Me("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?je(t,!!l,i,!1):a!=null&&je(t,!!l,a,!0);return;case"textarea":Me("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(t,i,v,T,a,null)}Ir(t,l,h,d),Es(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,i,I,l,a,null)}return;case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(l=0;l<El.length;l++)Me(El[l],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(l=a[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,P,l,a,null)}return;default:if(Lo(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&zd(t,i,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(t,i,T,l,a,null))}function pS(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,I=null,P=null,Q=null;for(K in a){var J=a[K];if(a.hasOwnProperty(K)&&J!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(K)||Qe(t,i,K,null,l,J)}}for(var H in l){var K=l[H];if(J=a[H],l.hasOwnProperty(H)&&(K!=null||J!=null))switch(H){case"type":d=K;break;case"name":h=K;break;case"checked":P=K;break;case"defaultChecked":Q=K;break;case"value":v=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:K!==J&&Qe(t,i,H,K,l,J)}}Rr(t,v,T,I,P,Q,d,h);return;case"select":K=v=T=H=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":K=I;default:l.hasOwnProperty(d)||Qe(t,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Qe(t,i,h,d,l,I)}i=T,a=v,l=K,H!=null?je(t,!!a,H,!1):!!l!=!!a&&(i!=null?je(t,!!a,i,!0):je(t,!!a,a?[]:"",!1));return;case"textarea":K=H=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":H=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qe(t,i,v,h,l,d)}ws(t,H,K);return;case"option":for(var he in a)if(H=a[he],a.hasOwnProperty(he)&&H!=null&&!l.hasOwnProperty(he))switch(he){case"selected":t.selected=!1;break;default:Qe(t,i,he,null,l,H)}for(I in l)if(H=l[I],K=a[I],l.hasOwnProperty(I)&&H!==K&&(H!=null||K!=null))switch(I){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Qe(t,i,I,H,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)H=a[Ae],a.hasOwnProperty(Ae)&&H!=null&&!l.hasOwnProperty(Ae)&&Qe(t,i,Ae,null,l,H);for(P in l)if(H=l[P],K=a[P],l.hasOwnProperty(P)&&H!==K&&(H!=null||K!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Qe(t,i,P,H,l,K)}return;default:if(Lo(i)){for(var lt in a)H=a[lt],a.hasOwnProperty(lt)&&H!==void 0&&!l.hasOwnProperty(lt)&&zd(t,i,lt,void 0,l,H);for(Q in l)H=l[Q],K=a[Q],!l.hasOwnProperty(Q)||H===K||H===void 0&&K===void 0||zd(t,i,Q,H,l,K);return}}for(var U in a)H=a[U],a.hasOwnProperty(U)&&H!=null&&!l.hasOwnProperty(U)&&Qe(t,i,U,null,l,H);for(J in l)H=l[J],K=a[J],!l.hasOwnProperty(J)||H===K||H==null&&K==null||Qe(t,i,J,H,l,K)}var jd=null,Bd=null;function Ec(t){return t.nodeType===9?t:t.ownerDocument}function L_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Hd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qd=null;function gS(){var t=window.event;return t&&t.type==="popstate"?t===qd?!1:(qd=t,!0):(qd=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(vS)}:z_;function vS(t){setTimeout(function(){throw t})}function Fd(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),Dl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);Dl(i)}function Gd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gd(a),vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ES(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Tr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Qn(t.nextSibling),t===null)break}return null}function TS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Qn(t.nextSibling),t===null))return null;return t}function Qn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function B_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function H_(t,i,a){switch(i=Ec(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var zn=new Map,q_=new Set;function Tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var tr=ae.d;ae.d={f:wS,r:AS,D:SS,C:bS,L:RS,m:IS,X:DS,S:CS,M:NS};function wS(){var t=tr.f(),i=dc();return t||i}function AS(t){var i=Mi(t);i!==null&&i.tag===5&&i.type==="form"?gy(i):tr.r(t)}var Ya=typeof document>"u"?null:document;function F_(t,i,a){var l=Ya;if(l&&typeof i=="string"&&i){var h=st(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),q_.has(h)||(q_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),jt(i,"link",t),et(i),l.head.appendChild(i)))}}function SS(t){tr.D(t),F_("dns-prefetch",t,null)}function bS(t,i){tr.C(t,i),F_("preconnect",t,i)}function RS(t,i,a){tr.L(t,i,a);var l=Ya;if(l&&t&&i){var h='link[rel="preload"][as="'+st(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+st(a.imageSizes)+'"]')):h+='[href="'+st(t)+'"]';var d=h;switch(i){case"style":d=Xa(t);break;case"script":d=Wa(t)}zn.has(d)||(t=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),zn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(wl(d))||i==="script"&&l.querySelector(Al(d))||(i=l.createElement("link"),jt(i,"link",t),et(i),l.head.appendChild(i)))}}function IS(t,i){tr.m(t,i);var a=Ya;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Wa(t)}if(!zn.has(d)&&(t=C({rel:"modulepreload",href:t},i),zn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(d)))return}l=a.createElement("link"),jt(l,"link",t),et(l),a.head.appendChild(l)}}}function CS(t,i,a){tr.S(t,i,a);var l=Ya;if(l&&t){var h=Ar(l).hoistableStyles,d=Xa(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(wl(d)))T.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":i},a),(a=zn.get(d))&&$d(t,a);var I=v=l.createElement("link");et(I),jt(I,"link",t),I._p=new Promise(function(P,Q){I.onload=P,I.onerror=Q}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,wc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function DS(t,i){tr.X(t,i);var a=Ya;if(a&&t){var l=Ar(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(t=C({src:t,async:!0},i),(i=zn.get(h))&&Kd(t,i),d=a.createElement("script"),et(d),jt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function NS(t,i){tr.M(t,i);var a=Ya;if(a&&t){var l=Ar(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(t=C({src:t,async:!0,type:"module"},i),(i=zn.get(h))&&Kd(t,i),d=a.createElement("script"),et(d),jt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function G_(t,i,a,l){var h=(h=An.current)?Tc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Xa(a.href),a=Ar(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xa(a.href);var d=Ar(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(wl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),zn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zn.set(t,a),d||OS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wa(a),a=Ar(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xa(t){return'href="'+st(t)+'"'}function wl(t){return'link[rel="stylesheet"]['+t+"]"}function $_(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function OS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),jt(i,"link",a),et(i),t.head.appendChild(i))}function Wa(t){return'[src="'+st(t)+'"]'}function Al(t){return"script[async]"+t}function K_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return i.instance=l,et(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),et(l),jt(l,"style",h),wc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Xa(a.href);var d=t.querySelector(wl(h));if(d)return i.state.loading|=4,i.instance=d,et(d),d;l=$_(a),(h=zn.get(h))&&$d(l,h),d=(t.ownerDocument||t).createElement("link"),et(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),jt(d,"link",l),i.state.loading|=4,wc(d,a.precedence,t),i.instance=d;case"script":return d=Wa(a.src),(h=t.querySelector(Al(d)))?(i.instance=h,et(h),h):(l=a,(h=zn.get(d))&&(l=C({},a),Kd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),et(h),jt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(l=i.instance,i.state.loading|=4,wc(l,a.precedence,t));return i.instance}function wc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function $d(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ac=null;function Q_(t,i,a){if(Ac===null){var l=new Map,h=Ac=new Map;h.set(a,l)}else h=Ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[Tr]||d[Nt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Y_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function xS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function X_(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Sl=null;function MS(){}function kS(t,i,a){if(Sl===null)throw Error(s(475));var l=Sl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var h=Xa(a.href),d=t.querySelector(wl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Sc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,et(d);return}d=t.ownerDocument||t,a=$_(a),(h=zn.get(h))&&$d(a,h),d=d.createElement("link"),et(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),jt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&!(i.state.loading&3)&&(l.count++,i=Sc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function VS(){if(Sl===null)throw Error(s(475));var t=Sl;return t.stylesheets&&t.count===0&&Qd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Qd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Qd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Qd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,i.forEach(PS,t),bc=null,Sc.call(t))}function PS(t,i){if(!(i.state.loading&4)){var a=bc.get(t);if(a)var l=a.get(null);else{a=new Map,bc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var bl={$$typeof:N,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function LS(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.hiddenUpdates=fa(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function W_(t,i,a,l,h,d,v,T,I,P,Q,J){return t=new LS(t,i,a,v,T,I,P,J),i=1,d===!0&&(i|=24),d=Ln(3,null,null,i),t.current=d,d.stateNode=t,i=Rf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},ad(d),t}function Z_(t){return t?(t=Da,t):Da}function J_(t,i,a,l,h,d){h=Z_(h),l.context===null?l.context=h:l.pendingContext=h,l=Pr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Lr(t,l,i),a!==null&&(nn(a,t,i),ll(a,t,i))}function ev(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Yd(t,i){ev(t,i),(t=t.alternate)&&ev(t,i)}function tv(t){if(t.tag===13){var i=Dr(t,67108864);i!==null&&nn(i,t,67108864),Yd(t,67108864)}}var Rc=!0;function US(t,i,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=2,Xd(t,i,a,l)}finally{ae.p=d,S.T=h}}function zS(t,i,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=8,Xd(t,i,a,l)}finally{ae.p=d,S.T=h}}function Xd(t,i,a,l){if(Rc){var h=Wd(l);if(h===null)Ud(t,i,l,Ic,a),iv(t,l);else if(BS(h,t,i,a,l))l.stopPropagation();else if(iv(t,l),i&4&&-1<jS.indexOf(t)){for(;h!==null;){var d=Mi(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=qn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Zt(v);T.entanglements[1]|=I,v&=~I}_i(d),!(nt&6)&&(cc=sn()+500,vl(0))}}break;case 13:T=Dr(d,2),T!==null&&nn(T,d,2),dc(),Yd(d,2)}if(d=Wd(l),d===null&&Ud(t,i,l,Ic,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Ud(t,i,l,null,a)}}function Wd(t){return t=ya(t),Zd(t)}var Ic=null;function Zd(t){if(Ic=null,t=Fn(t),t!==null){var i=pe(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=qe(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ic=t,null}function nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fu()){case Et:return 2;case Dt:return 8;case Oi:case du:return 32;case Io:return 268435456;default:return 32}default:return 32}}var Jd=!1,Fr=null,Gr=null,$r=null,Rl=new Map,Il=new Map,Kr=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(t,i){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Cl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Mi(i),i!==null&&tv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function BS(t,i,a,l,h){switch(i){case"focusin":return Fr=Cl(Fr,t,i,a,l,h),!0;case"dragenter":return Gr=Cl(Gr,t,i,a,l,h),!0;case"mouseover":return $r=Cl($r,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Rl.set(d,Cl(Rl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Il.set(d,Cl(Il.get(d)||null,t,i,a,l,h)),!0}return!1}function rv(t){var i=Fn(t.target);if(i!==null){var a=pe(i);if(a!==null){if(i=a.tag,i===13){if(i=qe(a),i!==null){t.blockedOn=i,Er(t.priority,function(){if(a.tag===13){var l=_n(),h=Dr(a,l);h!==null&&nn(h,a,l),Yd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Wd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);In=l,a.target.dispatchEvent(l),In=null}else return i=Mi(a),i!==null&&tv(i),t.blockedOn=a,!1;i.shift()}return!0}function sv(t,i,a){Cc(t)&&a.delete(i)}function HS(){Jd=!1,Fr!==null&&Cc(Fr)&&(Fr=null),Gr!==null&&Cc(Gr)&&(Gr=null),$r!==null&&Cc($r)&&($r=null),Rl.forEach(sv),Il.forEach(sv)}function Dc(t,i){t.blockedOn===i&&(t.blockedOn=null,Jd||(Jd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HS)))}var Nc=null;function av(t){Nc!==t&&(Nc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Nc===t&&(Nc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Zd(l||a)===null)continue;break}var d=Mi(a);d!==null&&(t.splice(i,3),i-=3,Hf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Dl(t){function i(I){return Dc(I,t)}Fr!==null&&Dc(Fr,t),Gr!==null&&Dc(Gr,t),$r!==null&&Dc($r,t),Rl.forEach(i),Il.forEach(i);for(var a=0;a<Kr.length;a++){var l=Kr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Kr.length&&(a=Kr[0],a.blockedOn===null);)rv(a),a.blockedOn===null&&Kr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Tt]||null;if(typeof d=="function")v||av(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Tt]||null)T=v.formAction;else if(Zd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),av(a)}}}function em(t){this._internalRoot=t}Oc.prototype.render=em.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=_n();J_(a,l,t,i,null,null)},Oc.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&$a(),J_(t.current,2,null,t,null,null),dc(),i[xi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var i=_u();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Kr.length&&i!==0&&i<Kr[a].priority;a++);Kr.splice(a,0,t),a===0&&rv(t)}};var ov=e.version;if(ov!=="19.0.0")throw Error(s(527,ov,"19.0.0"));ae.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=ne(i),t=t!==null?fe(t):null,t=t===null?null:t.stateNode,t};var qS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Fn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{mr=xc.inject(qS),Ft=xc}catch{}}return Ol.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Sy,d=by,v=Ry,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=W_(t,1,!1,null,null,a,l,h,d,v,T,null),t[xi]=i.current,Ld(t.nodeType===8?t.parentNode:t),new em(i)},Ol.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Sy,v=by,T=Ry,I=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),i=W_(t,1,!0,i,a??null,l,h,d,v,T,I,P),i.context=Z_(null),a=i.current,l=_n(),h=Pr(l),h.callback=null,Lr(a,h,l),i.current.lanes=l,ut(i,l),_i(i),t[xi]=i.current,Ld(t),new Oc(i)},Ol.version="19.0.0",Ol}var yv;function eb(){if(yv)return nm.exports;yv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nm.exports=JS(),nm.exports}var tb=eb(),F=Zm();const nb=GS(F);var xl={},_v;function ib(){if(_v)return xl;_v=1,Object.defineProperty(xl,"__esModule",{value:!0}),xl.parse=f,xl.serialize=g;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function f(b,N){const L=new u,$=b.length;if($<2)return L;const k=(N==null?void 0:N.decode)||E;let G=0;do{const ee=b.indexOf("=",G);if(ee===-1)break;const Z=b.indexOf(";",G),ce=Z===-1?$:Z;if(ee>ce){G=b.lastIndexOf(";",ee-1)+1;continue}const le=m(b,G,ee),Ee=p(b,ee,le),x=b.slice(le,Ee);if(L[x]===void 0){let R=m(b,ee+1,ce),S=p(b,ce,R);const C=k(b.slice(R,S));L[x]=C}G=ce+1}while(G<$);return L}function m(b,N,L){do{const $=b.charCodeAt(N);if($!==32&&$!==9)return N}while(++N<L);return L}function p(b,N,L){for(;N>L;){const $=b.charCodeAt(--N);if($!==32&&$!==9)return N+1}return L}function g(b,N,L){const $=(L==null?void 0:L.encode)||encodeURIComponent;if(!r.test(b))throw new TypeError(`argument name is invalid: ${b}`);const k=$(N);if(!e.test(k))throw new TypeError(`argument val is invalid: ${N}`);let G=b+"="+k;if(!L)return G;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);G+="; Max-Age="+L.maxAge}if(L.domain){if(!n.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);G+="; Domain="+L.domain}if(L.path){if(!s.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);G+="; Path="+L.path}if(L.expires){if(!w(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);G+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(G+="; HttpOnly"),L.secure&&(G+="; Secure"),L.partitioned&&(G+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return G}function E(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function w(b){return o.call(b)==="[object Date]"}return xl}ib();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vv="popstate";function rb(r={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return Sm("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Gl(o)}return ab(e,n,null,r)}function Je(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Jn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sb(){return Math.random().toString(36).substring(2,10)}function Ev(r,e){return{usr:r.state,key:r.key,idx:e}}function Sm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?yo(e):e,state:n,key:e&&e.key||s||sb()}}function Gl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function yo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function ab(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,g=E();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function E(){return(f.state||{idx:null}).idx}function w(){m="POP";let k=E(),G=k==null?null:k-g;g=k,p&&p({action:m,location:$.location,delta:G})}function b(k,G){m="PUSH";let ee=Sm($.location,k,G);g=E()+1;let Z=Ev(ee,g),ce=$.createHref(ee);try{f.pushState(Z,"",ce)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ce)}u&&p&&p({action:m,location:$.location,delta:1})}function N(k,G){m="REPLACE";let ee=Sm($.location,k,G);g=E();let Z=Ev(ee,g),ce=$.createHref(ee);f.replaceState(Z,"",ce),u&&p&&p({action:m,location:$.location,delta:0})}function L(k){let G=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof k=="string"?k:Gl(k);return ee=ee.replace(/ $/,"%20"),Je(G,`No window.location.(origin|href) available to create URL for href: ${ee}`),new URL(ee,G)}let $={get action(){return m},get location(){return r(o,f)},listen(k){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(vv,w),p=k,()=>{o.removeEventListener(vv,w),p=null}},createHref(k){return e(o,k)},createURL:L,encodeLocation(k){let G=L(k);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:b,replace:N,go(k){return f.go(k)}};return $}function cE(r,e,n="/"){return ob(r,e,n,!1)}function ob(r,e,n,s){let o=typeof e=="string"?yo(e):e,u=rs(o.pathname||"/",n);if(u==null)return null;let f=hE(r);lb(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=vb(u);m=yb(f[p],g,s)}return m}function hE(r,e=[],n=[],s=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=ar([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),hE(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:pb(g,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of fE(u.path))o(u,f,p)}),e}function fE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=fE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function lb(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:gb(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var ub=/^:[\w-]+$/,cb=3,hb=2,fb=1,db=10,mb=-2,Tv=r=>r==="*";function pb(r,e){let n=r.split("/"),s=n.length;return n.some(Tv)&&(s+=mb),e&&(s+=hb),n.filter(o=>!Tv(o)).reduce((o,u)=>o+(ub.test(u)?cb:u===""?fb:db),s)}function gb(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function yb(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=eh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),b=p.route;if(!w&&g&&n&&!s[s.length-1].route.index&&(w=eh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:ar([u,w.pathname]),pathnameBase:Ab(ar([u,w.pathnameBase])),route:b}),w.pathnameBase!=="/"&&(u=ar([u,w.pathnameBase]))}return f}function eh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=_b(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:w},b)=>{if(E==="*"){let L=m[b]||"";f=u.slice(0,u.length-L.length).replace(/(.)\/+$/,"$1")}const N=m[b];return w&&!N?g[E]=void 0:g[E]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:r}}function _b(r,e=!1,n=!0){Jn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function vb(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function rs(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Eb(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?yo(r):r;return{pathname:n?n.startsWith("/")?n:Tb(n,e):e,search:Sb(s),hash:bb(o)}}function Tb(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function om(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wb(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jm(r){let e=wb(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function ep(r,e,n,s=!1){let o;typeof r=="string"?o=yo(r):(o={...r},Je(!o.pathname||!o.pathname.includes("?"),om("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),om("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),om("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let w=e.length-1;if(!s&&f.startsWith("..")){let b=f.split("/");for(;b[0]==="..";)b.shift(),w-=1;o.pathname=b.join("/")}m=w>=0?e[w]:"/"}let p=Eb(o,m),g=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var ar=r=>r.join("/").replace(/\/\/+/g,"/"),Ab=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Sb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,bb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Rb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var dE=["POST","PUT","PATCH","DELETE"];new Set(dE);var Ib=["GET",...dE];new Set(Ib);var _o=F.createContext(null);_o.displayName="DataRouter";var bh=F.createContext(null);bh.displayName="DataRouterState";var mE=F.createContext({isTransitioning:!1});mE.displayName="ViewTransition";var Cb=F.createContext(new Map);Cb.displayName="Fetchers";var Db=F.createContext(null);Db.displayName="Await";var ti=F.createContext(null);ti.displayName="Navigation";var Jl=F.createContext(null);Jl.displayName="Location";var ni=F.createContext({outlet:null,matches:[],isDataRoute:!1});ni.displayName="Route";var tp=F.createContext(null);tp.displayName="RouteError";function Nb(r,{relative:e}={}){Je(vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=F.useContext(ti),{hash:o,pathname:u,search:f}=tu(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:ar([n,u])),s.createHref({pathname:m,search:f,hash:o})}function vo(){return F.useContext(Jl)!=null}function fs(){return Je(vo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Jl).location}var pE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gE(r){F.useContext(ti).static||F.useLayoutEffect(r)}function eu(){let{isDataRoute:r}=F.useContext(ni);return r?qb():Ob()}function Ob(){Je(vo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(_o),{basename:e,navigator:n}=F.useContext(ti),{matches:s}=F.useContext(ni),{pathname:o}=fs(),u=JSON.stringify(Jm(s)),f=F.useRef(!1);return gE(()=>{f.current=!0}),F.useCallback((p,g={})=>{if(Jn(f.current,pE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=ep(p,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ar([e,E.pathname])),(g.replace?n.replace:n.push)(E,g.state,g)},[e,n,u,o,r])}F.createContext(null);function yE(){let{matches:r}=F.useContext(ni),e=r[r.length-1];return e?e.params:{}}function tu(r,{relative:e}={}){let{matches:n}=F.useContext(ni),{pathname:s}=fs(),o=JSON.stringify(Jm(n));return F.useMemo(()=>ep(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function xb(r,e){return _E(r,e)}function _E(r,e,n,s){var ee;Je(vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=F.useContext(ti),{matches:f}=F.useContext(ni),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",E=m?m.pathnameBase:"/",w=m&&m.route;{let Z=w&&w.path||"";vE(g,!w||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let b=fs(),N;if(e){let Z=typeof e=="string"?yo(e):e;Je(E==="/"||((ee=Z.pathname)==null?void 0:ee.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),N=Z}else N=b;let L=N.pathname||"/",$=L;if(E!=="/"){let Z=E.replace(/^\//,"").split("/");$="/"+L.replace(/^\//,"").split("/").slice(Z.length).join("/")}let k=!u&&n&&n.matches&&n.matches.length>0?n.matches:cE(r,{pathname:$});Jn(w||k!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Jn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Lb(k&&k.map(Z=>Object.assign({},Z,{params:Object.assign({},p,Z.params),pathname:ar([E,o.encodeLocation?o.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?E:ar([E,o.encodeLocation?o.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),f,n,s);return e&&G?F.createElement(Jl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},G):G}function Mb(){let r=Hb(),e=Rb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:o},n):null,f)}var kb=F.createElement(Mb,null),Vb=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(ni.Provider,{value:this.props.routeContext},F.createElement(tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pb({routeContext:r,match:e,children:n}){let s=F.useContext(_o);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(ni.Provider,{value:r},n)}function Lb(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:E,errors:w}=n,b=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||b){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let w,b=!1,N=null,L=null;n&&(w=u&&g.route.id?u[g.route.id]:void 0,N=g.route.errorElement||kb,f&&(m<0&&E===0?(vE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,L=null):m===E&&(b=!0,L=g.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),k=()=>{let G;return w?G=N:b?G=L:g.route.Component?G=F.createElement(g.route.Component,null):g.route.element?G=g.route.element:G=p,F.createElement(Pb,{match:g,routeContext:{outlet:p,matches:$,isDataRoute:n!=null},children:G})};return n&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?F.createElement(Vb,{location:n.location,revalidation:n.revalidation,component:N,error:w,children:k(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):k()},null)}function np(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ub(r){let e=F.useContext(_o);return Je(e,np(r)),e}function zb(r){let e=F.useContext(bh);return Je(e,np(r)),e}function jb(r){let e=F.useContext(ni);return Je(e,np(r)),e}function ip(r){let e=jb(r),n=e.matches[e.matches.length-1];return Je(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function Bb(){return ip("useRouteId")}function Hb(){var s;let r=F.useContext(tp),e=zb("useRouteError"),n=ip("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function qb(){let{router:r}=Ub("useNavigate"),e=ip("useNavigate"),n=F.useRef(!1);return gE(()=>{n.current=!0}),F.useCallback(async(o,u={})=>{Jn(n.current,pE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var wv={};function vE(r,e,n){!e&&!wv[r]&&(wv[r]=!0,Jn(!1,n))}F.memo(Fb);function Fb({routes:r,future:e,state:n}){return _E(r,void 0,n,e)}function Gb({to:r,replace:e,state:n,relative:s}){Je(vo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(ti);Jn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(ni),{pathname:f}=fs(),m=eu(),p=ep(r,Jm(u),f,s==="path"),g=JSON.stringify(p);return F.useEffect(()=>{m(JSON.parse(g),{replace:e,state:n,relative:s})},[m,g,s,e,n]),null}function kl(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $b({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){Je(!vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=yo(n));let{pathname:p="/",search:g="",hash:E="",state:w=null,key:b="default"}=n,N=F.useMemo(()=>{let L=rs(p,f);return L==null?null:{location:{pathname:L,search:g,hash:E,state:w,key:b},navigationType:s}},[f,p,g,E,w,b,s]);return Jn(N!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:F.createElement(ti.Provider,{value:m},F.createElement(Jl.Provider,{children:e,value:N}))}function Kb({children:r,location:e}){return xb(bm(r),e)}function bm(r,e=[]){let n=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){n.push.apply(n,bm(s.props.children,u));return}Je(s.type===kl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=bm(s.props.children,u)),n.push(f)}),n}var Bc="get",Hc="application/x-www-form-urlencoded";function Rh(r){return r!=null&&typeof r.tagName=="string"}function Qb(r){return Rh(r)&&r.tagName.toLowerCase()==="button"}function Yb(r){return Rh(r)&&r.tagName.toLowerCase()==="form"}function Xb(r){return Rh(r)&&r.tagName.toLowerCase()==="input"}function Wb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Zb(r,e){return r.button===0&&(!e||e==="_self")&&!Wb(r)}var Mc=null;function Jb(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var eR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lm(r){return r!=null&&!eR.has(r)?(Jn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):r}function tR(r,e){let n,s,o,u,f;if(Yb(r)){let m=r.getAttribute("action");s=m?rs(m,e):null,n=r.getAttribute("method")||Bc,o=lm(r.getAttribute("enctype"))||Hc,u=new FormData(r)}else if(Qb(r)||Xb(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?rs(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||Bc,o=lm(r.getAttribute("formenctype"))||lm(m.getAttribute("enctype"))||Hc,u=new FormData(m,r),!Jb()){let{name:g,type:E,value:w}=r;if(E==="image"){let b=g?`${g}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else g&&u.append(g,w)}}else{if(Rh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Bc,s=null,o=Hc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function nR(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function rR(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await nR(u,n);return f.links?f.links():[]}return[]}));return lR(s.flat(1).filter(iR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Av(r,e,n,s,o,u){let f=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,m=(p,g)=>{var E;return n[g].pathname!==p.pathname||((E=n[g].route.path)==null?void 0:E.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{var w;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function sR(r,e){return aR(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function aR(r){return[...new Set(r)]}function oR(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function lR(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(oR(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function uR(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function cR(){let r=F.useContext(_o);return rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function hR(){let r=F.useContext(bh);return rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var sp=F.createContext(void 0);sp.displayName="FrameworkContext";function EE(){let r=F.useContext(sp);return rp(r,"You must render this element inside a <HydratedRouter> element"),r}function fR(r,e){let n=F.useContext(sp),[s,o]=F.useState(!1),[u,f]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:w}=e,b=F.useRef(null);F.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let $=G=>{G.forEach(ee=>{f(ee.isIntersecting)})},k=new IntersectionObserver($,{threshold:.5});return b.current&&k.observe(b.current),()=>{k.disconnect()}}},[r]),F.useEffect(()=>{if(s){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[s]);let N=()=>{o(!0)},L=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,b,{}]:[u,b,{onFocus:Ml(m,N),onBlur:Ml(p,L),onMouseEnter:Ml(g,N),onMouseLeave:Ml(E,L),onTouchStart:Ml(w,N)}]:[!1,b,{}]}function Ml(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function dR({page:r,...e}){let{router:n}=cR(),s=F.useMemo(()=>cE(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?F.createElement(pR,{page:r,matches:s,...e}):null}function mR(r){let{manifest:e,routeModules:n}=EE(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return rR(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function pR({page:r,matches:e,...n}){let s=fs(),{manifest:o,routeModules:u}=EE(),{loaderData:f,matches:m}=hR(),p=F.useMemo(()=>Av(r,e,m,o,s,"data"),[r,e,m,o,s]),g=F.useMemo(()=>Av(r,e,m,o,s,"assets"),[r,e,m,o,s]),E=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let N=new Set,L=!1;if(e.forEach(k=>{var ee;let G=o.routes[k.route.id];!G||!G.hasLoader||(!p.some(Z=>Z.route.id===k.route.id)&&k.route.id in f&&((ee=u[k.route.id])!=null&&ee.shouldRevalidate)||G.hasClientLoader?L=!0:N.add(k.route.id))}),N.size===0)return[];let $=uR(r);return L&&N.size>0&&$.searchParams.set("_routes",e.filter(k=>N.has(k.route.id)).map(k=>k.route.id).join(",")),[$.pathname+$.search]},[f,s,o,p,e,r,u]),w=F.useMemo(()=>sR(g,o),[g,o]),b=mR(g);return F.createElement(F.Fragment,null,E.map(N=>F.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),w.map(N=>F.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),b.map(({key:N,link:L})=>F.createElement("link",{key:N,...L})))}function gR(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var TE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TE&&(window.__reactRouterVersion="7.1.5")}catch{}function yR({basename:r,children:e,window:n}){let s=F.useRef();s.current==null&&(s.current=rb({window:n,v5Compat:!0}));let o=s.current,[u,f]=F.useState({action:o.action,location:o.location}),m=F.useCallback(p=>{F.startTransition(()=>f(p))},[f]);return F.useLayoutEffect(()=>o.listen(m),[o,m]),F.createElement($b,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var wE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ap=F.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:E,viewTransition:w,...b},N){let{basename:L}=F.useContext(ti),$=typeof g=="string"&&wE.test(g),k,G=!1;if(typeof g=="string"&&$&&(k=g,TE))try{let S=new URL(window.location.href),C=g.startsWith("//")?new URL(S.protocol+g):new URL(g),V=rs(C.pathname,L);C.origin===S.origin&&V!=null?g=V+C.search+C.hash:G=!0}catch{Jn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=Nb(g,{relative:o}),[Z,ce,le]=fR(s,b),Ee=TR(g,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:w});function x(S){e&&e(S),S.defaultPrevented||Ee(S)}let R=F.createElement("a",{...b,...le,href:k||ee,onClick:G||u?e:x,ref:gR(N,ce),target:p,"data-discover":!$&&n==="render"?"true":void 0});return Z&&!$?F.createElement(F.Fragment,null,R,F.createElement(dR,{page:ee})):R});ap.displayName="Link";var _R=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},E){let w=tu(f,{relative:g.relative}),b=fs(),N=F.useContext(bh),{navigator:L,basename:$}=F.useContext(ti),k=N!=null&&RR(w)&&m===!0,G=L.encodeLocation?L.encodeLocation(w).pathname:w.pathname,ee=b.pathname,Z=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;n||(ee=ee.toLowerCase(),Z=Z?Z.toLowerCase():null,G=G.toLowerCase()),Z&&$&&(Z=rs(Z,$)||Z);const ce=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let le=ee===G||!o&&ee.startsWith(G)&&ee.charAt(ce)==="/",Ee=Z!=null&&(Z===G||!o&&Z.startsWith(G)&&Z.charAt(G.length)==="/"),x={isActive:le,isPending:Ee,isTransitioning:k},R=le?e:void 0,S;typeof s=="function"?S=s(x):S=[s,le?"active":null,Ee?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(x):u;return F.createElement(ap,{...g,"aria-current":R,className:S,ref:E,style:C,to:f,viewTransition:m},typeof p=="function"?p(x):p)});_R.displayName="NavLink";var vR=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=Bc,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:w,...b},N)=>{let L=SR(),$=bR(m,{relative:g}),k=f.toLowerCase()==="get"?"get":"post",G=typeof m=="string"&&wE.test(m),ee=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let ce=Z.nativeEvent.submitter,le=(ce==null?void 0:ce.getAttribute("formmethod"))||f;L(ce||Z.currentTarget,{fetcherKey:e,method:le,navigate:n,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:w})};return F.createElement("form",{ref:N,method:k,action:$,onSubmit:s?p:ee,...b,"data-discover":!G&&r==="render"?"true":void 0})});vR.displayName="Form";function ER(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AE(r){let e=F.useContext(_o);return Je(e,ER(r)),e}function TR(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=eu(),p=fs(),g=tu(r,{relative:u});return F.useCallback(E=>{if(Zb(E,e)){E.preventDefault();let w=n!==void 0?n:Gl(p)===Gl(g);m(r,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,n,s,e,r,o,u,f])}var wR=0,AR=()=>`__${String(++wR)}__`;function SR(){let{router:r}=AE("useSubmit"),{basename:e}=F.useContext(ti),n=Bb();return F.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=tR(s,e);if(o.navigate===!1){let E=o.fetcherKey||AR();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function bR(r,{relative:e}={}){let{basename:n}=F.useContext(ti),s=F.useContext(ni);Je(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...tu(r||".",{relative:e})},f=fs();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ar([n,u.pathname])),Gl(u)}function RR(r,e={}){let n=F.useContext(mE);Je(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=AE("useViewTransitionState"),o=tu(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=rs(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=rs(n.nextLocation.pathname,s)||n.nextLocation.pathname;return eh(o.pathname,f)!=null||eh(o.pathname,u)!=null}new TextEncoder;var Sv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},IR=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},bE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,g=p?r[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let b=(m&15)<<2|g>>6,N=g&63;p||(N=64,f||(b=64)),s.push(n[E],n[w],n[b],n[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(SE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):IR(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const g=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||g==null||w==null)throw new CR;const b=u<<2|m>>4;if(s.push(b),g!==64){const N=m<<4&240|g>>2;if(s.push(N),w!==64){const L=g<<6&192|w;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class CR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DR=function(r){const e=SE(r);return bE.encodeByteArray(e,!0)},th=function(r){return DR(r).replace(/\./g,"")},RE=function(r){try{return bE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=()=>NR().__FIREBASE_DEFAULTS__,xR=()=>{if(typeof process>"u"||typeof Sv>"u")return;const r=Sv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},MR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&RE(r[1]);return e&&JSON.parse(e)},Ih=()=>{try{return OR()||xR()||MR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},IE=r=>{var e,n;return(n=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},CE=r=>{const e=IE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},DE=()=>{var r;return(r=Ih())===null||r===void 0?void 0:r.config},NE=r=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[th(JSON.stringify(n)),th(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function PR(){var r;const e=(r=Ih())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function UR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zR(){const r=Xt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ME(){try{return typeof indexedDB=="object"}catch{return!1}}function kE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function BR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=HR,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?qR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Hn(o,m,s)}}function qR(r,e){return r.replace(FR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const FR=/\{\$([^}]+)}/g;function GR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ao(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(bv(u)&&bv(f)){if(!ao(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function bv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $R(r,e){const n=new KR(r,e);return n.subscribe.bind(n)}class KR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");QR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=um),o.error===void 0&&(o.error=um),o.complete===void 0&&(o.complete=um);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QR(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function um(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1e3,XR=2,WR=4*60*60*1e3,ZR=.5;function Rv(r,e=YR,n=XR){const s=e*Math.pow(n,r),o=Math.round(ZR*s*(Math.random()-.5)*2);return Math.min(WR,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r){return r&&r._delegate?r._delegate:r}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t1(e))try{this.getOrInitializeService({instanceIdentifier:Qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qs){return this.instances.has(e)}getOptions(e=Qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:e1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qs){return this.component?this.component.multipleInstances?e:Qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e1(r){return r===Qs?void 0:r}function t1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const i1={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},r1=Oe.INFO,s1={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},a1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=s1[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ch{constructor(e){this.name=e,this._logLevel=r1,this._logHandler=a1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const o1=(r,e)=>e.some(n=>r instanceof n);let Iv,Cv;function l1(){return Iv||(Iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u1(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VE=new WeakMap,Rm=new WeakMap,PE=new WeakMap,cm=new WeakMap,op=new WeakMap;function c1(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(es(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&VE.set(n,r)}).catch(()=>{}),op.set(e,r),e}function h1(r){if(Rm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Rm.set(r,e)}let Im={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Rm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||PE.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function f1(r){Im=r(Im)}function d1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(hm(this),e,...n);return PE.set(s,e.sort?e.sort():[e]),es(s)}:u1().includes(r)?function(...e){return r.apply(hm(this),e),es(VE.get(this))}:function(...e){return es(r.apply(hm(this),e))}}function m1(r){return typeof r=="function"?d1(r):(r instanceof IDBTransaction&&h1(r),o1(r,l1())?new Proxy(r,Im):r)}function es(r){if(r instanceof IDBRequest)return c1(r);if(cm.has(r))return cm.get(r);const e=m1(r);return e!==r&&(cm.set(r,e),op.set(e,r)),e}const hm=r=>op.get(r);function LE(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=es(f);return s&&f.addEventListener("upgradeneeded",p=>{s(es(f.result),p.oldVersion,p.newVersion,es(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const p1=["get","getKey","getAll","getAllKeys","count"],g1=["put","add","delete","clear"],fm=new Map;function Dv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(fm.get(e))return fm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=g1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||p1.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[n](...m),o&&p.done]))[0]};return fm.set(e,u),u}f1(r=>({...r,get:(e,n,s)=>Dv(e,n)||r.get(e,n,s),has:(e,n)=>!!Dv(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _1(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cm="@firebase/app",Nv="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Ch("@firebase/app"),v1="@firebase/app-compat",E1="@firebase/analytics-compat",T1="@firebase/analytics",w1="@firebase/app-check-compat",A1="@firebase/app-check",S1="@firebase/auth",b1="@firebase/auth-compat",R1="@firebase/database",I1="@firebase/data-connect",C1="@firebase/database-compat",D1="@firebase/functions",N1="@firebase/functions-compat",O1="@firebase/installations",x1="@firebase/installations-compat",M1="@firebase/messaging",k1="@firebase/messaging-compat",V1="@firebase/performance",P1="@firebase/performance-compat",L1="@firebase/remote-config",U1="@firebase/remote-config-compat",z1="@firebase/storage",j1="@firebase/storage-compat",B1="@firebase/firestore",H1="@firebase/vertexai",q1="@firebase/firestore-compat",F1="firebase",G1="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="[DEFAULT]",$1={[Cm]:"fire-core",[v1]:"fire-core-compat",[T1]:"fire-analytics",[E1]:"fire-analytics-compat",[A1]:"fire-app-check",[w1]:"fire-app-check-compat",[S1]:"fire-auth",[b1]:"fire-auth-compat",[R1]:"fire-rtdb",[I1]:"fire-data-connect",[C1]:"fire-rtdb-compat",[D1]:"fire-fn",[N1]:"fire-fn-compat",[O1]:"fire-iid",[x1]:"fire-iid-compat",[M1]:"fire-fcm",[k1]:"fire-fcm-compat",[V1]:"fire-perf",[P1]:"fire-perf-compat",[L1]:"fire-rc",[U1]:"fire-rc-compat",[z1]:"fire-gcs",[j1]:"fire-gcs-compat",[B1]:"fire-fst",[q1]:"fire-fst-compat",[H1]:"fire-vertex","fire-js":"fire-js",[F1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map,K1=new Map,Nm=new Map;function Ov(r,e){try{r.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ei(r){const e=r.name;if(Nm.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Nm.set(e,r);for(const n of nh.values())Ov(n,r);for(const n of K1.values())Ov(n,r);return!0}function ds(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function jn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ra("app","Firebase",Q1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=G1;function UE(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ts.create("bad-app-name",{appName:String(o)});if(n||(n=DE()),!n)throw ts.create("no-options");const u=nh.get(o);if(u){if(ao(n,u.options)&&ao(s,u.config))return u;throw ts.create("duplicate-app",{appName:o})}const f=new n1(o);for(const p of Nm.values())f.addComponent(p);const m=new Y1(n,s,f);return nh.set(o,m),m}function Dh(r=Dm){const e=nh.get(r);if(!e&&r===Dm&&DE())return UE();if(!e)throw ts.create("no-app",{appName:r});return e}function cn(r,e,n){var s;let o=(s=$1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(m.join(" "));return}ei(new Bn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebase-heartbeat-database",W1=1,$l="firebase-heartbeat-store";let dm=null;function zE(){return dm||(dm=LE(X1,W1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(r=>{throw ts.create("idb-open",{originalErrorMessage:r.message})})),dm}async function Z1(r){try{const n=(await zE()).transaction($l),s=await n.objectStore($l).get(jE(r));return await n.done,s}catch(e){if(e instanceof Hn)lr.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function xv(r,e){try{const s=(await zE()).transaction($l,"readwrite");await s.objectStore($l).put(e,jE(r)),await s.done}catch(n){if(n instanceof Hn)lr.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(s.message)}}}function jE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1024,eI=30;class tI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Mv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>eI){const f=rI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){lr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mv(),{heartbeatsToSend:s,unsentEntries:o}=nI(this._heartbeatsCache.heartbeats),u=th(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return lr.warn(n),""}}}function Mv(){return new Date().toISOString().substring(0,10)}function nI(r,e=J1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),kv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),kv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ME()?kE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Z1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function kv(r){return th(JSON.stringify({version:2,heartbeats:r})).length}function rI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(r){ei(new Bn("platform-logger",e=>new y1(e),"PRIVATE")),ei(new Bn("heartbeat",e=>new tI(e),"PRIVATE")),cn(Cm,Nv,r),cn(Cm,Nv,"esm2017"),cn("fire-js","")}sI("");var Vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,BE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function S(){}S.prototype=R.prototype,x.D=R.prototype,x.prototype=new S,x.prototype.constructor=x,x.C=function(C,V,j){for(var D=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)D[vt-2]=arguments[vt];return R.prototype[V].apply(C,D)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,S){S||(S=0);var C=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)C[V]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(V=0;16>V;++V)C[V]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=x.g[0],S=x.g[1],V=x.g[2];var j=x.g[3],D=R+(j^S&(V^j))+C[0]+3614090360&4294967295;R=S+(D<<7&4294967295|D>>>25),D=j+(V^R&(S^V))+C[1]+3905402710&4294967295,j=R+(D<<12&4294967295|D>>>20),D=V+(S^j&(R^S))+C[2]+606105819&4294967295,V=j+(D<<17&4294967295|D>>>15),D=S+(R^V&(j^R))+C[3]+3250441966&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(j^S&(V^j))+C[4]+4118548399&4294967295,R=S+(D<<7&4294967295|D>>>25),D=j+(V^R&(S^V))+C[5]+1200080426&4294967295,j=R+(D<<12&4294967295|D>>>20),D=V+(S^j&(R^S))+C[6]+2821735955&4294967295,V=j+(D<<17&4294967295|D>>>15),D=S+(R^V&(j^R))+C[7]+4249261313&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(j^S&(V^j))+C[8]+1770035416&4294967295,R=S+(D<<7&4294967295|D>>>25),D=j+(V^R&(S^V))+C[9]+2336552879&4294967295,j=R+(D<<12&4294967295|D>>>20),D=V+(S^j&(R^S))+C[10]+4294925233&4294967295,V=j+(D<<17&4294967295|D>>>15),D=S+(R^V&(j^R))+C[11]+2304563134&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(j^S&(V^j))+C[12]+1804603682&4294967295,R=S+(D<<7&4294967295|D>>>25),D=j+(V^R&(S^V))+C[13]+4254626195&4294967295,j=R+(D<<12&4294967295|D>>>20),D=V+(S^j&(R^S))+C[14]+2792965006&4294967295,V=j+(D<<17&4294967295|D>>>15),D=S+(R^V&(j^R))+C[15]+1236535329&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(V^j&(S^V))+C[1]+4129170786&4294967295,R=S+(D<<5&4294967295|D>>>27),D=j+(S^V&(R^S))+C[6]+3225465664&4294967295,j=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(j^R))+C[11]+643717713&4294967295,V=j+(D<<14&4294967295|D>>>18),D=S+(j^R&(V^j))+C[0]+3921069994&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^j&(S^V))+C[5]+3593408605&4294967295,R=S+(D<<5&4294967295|D>>>27),D=j+(S^V&(R^S))+C[10]+38016083&4294967295,j=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(j^R))+C[15]+3634488961&4294967295,V=j+(D<<14&4294967295|D>>>18),D=S+(j^R&(V^j))+C[4]+3889429448&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^j&(S^V))+C[9]+568446438&4294967295,R=S+(D<<5&4294967295|D>>>27),D=j+(S^V&(R^S))+C[14]+3275163606&4294967295,j=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(j^R))+C[3]+4107603335&4294967295,V=j+(D<<14&4294967295|D>>>18),D=S+(j^R&(V^j))+C[8]+1163531501&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^j&(S^V))+C[13]+2850285829&4294967295,R=S+(D<<5&4294967295|D>>>27),D=j+(S^V&(R^S))+C[2]+4243563512&4294967295,j=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(j^R))+C[7]+1735328473&4294967295,V=j+(D<<14&4294967295|D>>>18),D=S+(j^R&(V^j))+C[12]+2368359562&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(S^V^j)+C[5]+4294588738&4294967295,R=S+(D<<4&4294967295|D>>>28),D=j+(R^S^V)+C[8]+2272392833&4294967295,j=R+(D<<11&4294967295|D>>>21),D=V+(j^R^S)+C[11]+1839030562&4294967295,V=j+(D<<16&4294967295|D>>>16),D=S+(V^j^R)+C[14]+4259657740&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^j)+C[1]+2763975236&4294967295,R=S+(D<<4&4294967295|D>>>28),D=j+(R^S^V)+C[4]+1272893353&4294967295,j=R+(D<<11&4294967295|D>>>21),D=V+(j^R^S)+C[7]+4139469664&4294967295,V=j+(D<<16&4294967295|D>>>16),D=S+(V^j^R)+C[10]+3200236656&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^j)+C[13]+681279174&4294967295,R=S+(D<<4&4294967295|D>>>28),D=j+(R^S^V)+C[0]+3936430074&4294967295,j=R+(D<<11&4294967295|D>>>21),D=V+(j^R^S)+C[3]+3572445317&4294967295,V=j+(D<<16&4294967295|D>>>16),D=S+(V^j^R)+C[6]+76029189&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^j)+C[9]+3654602809&4294967295,R=S+(D<<4&4294967295|D>>>28),D=j+(R^S^V)+C[12]+3873151461&4294967295,j=R+(D<<11&4294967295|D>>>21),D=V+(j^R^S)+C[15]+530742520&4294967295,V=j+(D<<16&4294967295|D>>>16),D=S+(V^j^R)+C[2]+3299628645&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(V^(S|~j))+C[0]+4096336452&4294967295,R=S+(D<<6&4294967295|D>>>26),D=j+(S^(R|~V))+C[7]+1126891415&4294967295,j=R+(D<<10&4294967295|D>>>22),D=V+(R^(j|~S))+C[14]+2878612391&4294967295,V=j+(D<<15&4294967295|D>>>17),D=S+(j^(V|~R))+C[5]+4237533241&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~j))+C[12]+1700485571&4294967295,R=S+(D<<6&4294967295|D>>>26),D=j+(S^(R|~V))+C[3]+2399980690&4294967295,j=R+(D<<10&4294967295|D>>>22),D=V+(R^(j|~S))+C[10]+4293915773&4294967295,V=j+(D<<15&4294967295|D>>>17),D=S+(j^(V|~R))+C[1]+2240044497&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~j))+C[8]+1873313359&4294967295,R=S+(D<<6&4294967295|D>>>26),D=j+(S^(R|~V))+C[15]+4264355552&4294967295,j=R+(D<<10&4294967295|D>>>22),D=V+(R^(j|~S))+C[6]+2734768916&4294967295,V=j+(D<<15&4294967295|D>>>17),D=S+(j^(V|~R))+C[13]+1309151649&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~j))+C[4]+4149444226&4294967295,R=S+(D<<6&4294967295|D>>>26),D=j+(S^(R|~V))+C[11]+3174756917&4294967295,j=R+(D<<10&4294967295|D>>>22),D=V+(R^(j|~S))+C[2]+718787259&4294967295,V=j+(D<<15&4294967295|D>>>17),D=S+(j^(V|~R))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(V+(D<<21&4294967295|D>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+j&4294967295}s.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var S=R-this.blockSize,C=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=S;)o(this,x,j),j+=this.blockSize;if(typeof x=="string"){for(;j<R;)if(C[V++]=x.charCodeAt(j++),V==this.blockSize){o(this,C),V=0;break}}else for(;j<R;)if(C[V++]=x[j++],V==this.blockSize){o(this,C),V=0;break}}this.h=V,this.o+=R},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var S=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=S&255,S/=256;for(this.u(x),x=Array(16),R=S=0;4>R;++R)for(var C=0;32>C;C+=8)x[S++]=this.g[R]>>>C&255;return x};function u(x,R){var S=m;return Object.prototype.hasOwnProperty.call(S,x)?S[x]:S[x]=R(x)}function f(x,R){this.h=R;for(var S=[],C=!0,V=x.length-1;0<=V;V--){var j=x[V]|0;C&&j==R||(S[V]=j,C=!1)}this.g=S}var m={};function p(x){return-128<=x&&128>x?u(x,function(R){return new f([R|0],0>R?-1:0)}):new f([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return w;if(0>x)return k(g(-x));for(var R=[],S=1,C=0;x>=S;C++)R[C]=x/S|0,S*=4294967296;return new f(R,0)}function E(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return k(E(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(R,8)),C=w,V=0;V<x.length;V+=8){var j=Math.min(8,x.length-V),D=parseInt(x.substring(V,V+j),R);8>j?(j=g(Math.pow(R,j)),C=C.j(j).add(g(D))):(C=C.j(S),C=C.add(g(D)))}return C}var w=p(0),b=p(1),N=p(16777216);r=f.prototype,r.m=function(){if($(this))return-k(this).m();for(var x=0,R=1,S=0;S<this.g.length;S++){var C=this.i(S);x+=(0<=C?C:4294967296+C)*R,R*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if($(this))return"-"+k(this).toString(x);for(var R=g(Math.pow(x,6)),S=this,C="";;){var V=ce(S,R).g;S=G(S,V.j(R));var j=((0<S.g.length?S.g[0]:S.h)>>>0).toString(x);if(S=V,L(S))return j+C;for(;6>j.length;)j="0"+j;C=j+C}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function $(x){return x.h==-1}r.l=function(x){return x=G(this,x),$(x)?-1:L(x)?0:1};function k(x){for(var R=x.g.length,S=[],C=0;C<R;C++)S[C]=~x.g[C];return new f(S,~x.h).add(b)}r.abs=function(){return $(this)?k(this):this},r.add=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],C=0,V=0;V<=R;V++){var j=C+(this.i(V)&65535)+(x.i(V)&65535),D=(j>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);C=D>>>16,j&=65535,D&=65535,S[V]=D<<16|j}return new f(S,S[S.length-1]&-2147483648?-1:0)};function G(x,R){return x.add(k(R))}r.j=function(x){if(L(this)||L(x))return w;if($(this))return $(x)?k(this).j(k(x)):k(k(this).j(x));if($(x))return k(this.j(k(x)));if(0>this.l(N)&&0>x.l(N))return g(this.m()*x.m());for(var R=this.g.length+x.g.length,S=[],C=0;C<2*R;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var V=0;V<x.g.length;V++){var j=this.i(C)>>>16,D=this.i(C)&65535,vt=x.i(V)>>>16,ft=x.i(V)&65535;S[2*C+2*V]+=D*ft,ee(S,2*C+2*V),S[2*C+2*V+1]+=j*ft,ee(S,2*C+2*V+1),S[2*C+2*V+1]+=D*vt,ee(S,2*C+2*V+1),S[2*C+2*V+2]+=j*vt,ee(S,2*C+2*V+2)}for(C=0;C<R;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=R;C<2*R;C++)S[C]=0;return new f(S,0)};function ee(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function Z(x,R){this.g=x,this.h=R}function ce(x,R){if(L(R))throw Error("division by zero");if(L(x))return new Z(w,w);if($(x))return R=ce(k(x),R),new Z(k(R.g),k(R.h));if($(R))return R=ce(x,k(R)),new Z(k(R.g),R.h);if(30<x.g.length){if($(x)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var S=b,C=R;0>=C.l(x);)S=le(S),C=le(C);var V=Ee(S,1),j=Ee(C,1);for(C=Ee(C,2),S=Ee(S,2);!L(C);){var D=j.add(C);0>=D.l(x)&&(V=V.add(S),j=D),C=Ee(C,1),S=Ee(S,1)}return R=G(x,V.j(R)),new Z(V,R)}for(V=w;0<=x.l(R);){for(S=Math.max(1,Math.floor(x.m()/R.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),j=g(S),D=j.j(R);$(D)||0<D.l(x);)S-=C,j=g(S),D=j.j(R);L(j)&&(j=b),V=V.add(j),x=G(x,D)}return new Z(V,x)}r.A=function(x){return ce(this,x).h},r.and=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)&x.i(C);return new f(S,this.h&x.h)},r.or=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)|x.i(C);return new f(S,this.h|x.h)},r.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)^x.i(C);return new f(S,this.h^x.h)};function le(x){for(var R=x.g.length+1,S=[],C=0;C<R;C++)S[C]=x.i(C)<<1|x.i(C-1)>>>31;return new f(S,x.h)}function Ee(x,R){var S=R>>5;R%=32;for(var C=x.g.length-S,V=[],j=0;j<C;j++)V[j]=0<R?x.i(j+S)>>>R|x.i(j+S+1)<<32-R:x.i(j+S);return new f(V,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,BE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=E,ns=f}).apply(typeof Vv<"u"?Vv:typeof self<"u"?self:typeof window<"u"?window:{});var kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HE,Vl,qE,qc,Om,FE,GE,$E;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof kc=="object"&&kc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var z=c[A];if(!(z in _))break e;_=_[z]}c=c[c.length-1],A=_[c],y=y(A),y!=A&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,A=!1,z={next:function(){if(!A&&_<c.length){var q=_++;return{value:y(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function w(c,y,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,A),c.apply(y,z)}}return function(){return c.apply(y,arguments)}}function b(c,y,_){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,b.apply(null,arguments)}function N(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function L(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,z,q){for(var ie=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ie[Ve-2]=arguments[Ve];return y.prototype[z].apply(A,ie)}}function $(c){const y=c.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=c[A];return _}return[]}function k(c,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const z=c.length||0,q=A.length||0;c.length=z+q;for(let ie=0;ie<q;ie++)c[z+ie]=A[ie]}else c.push(A)}}class G{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ee(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ce(c){return ce[" "](c),c}ce[" "]=function(){};var le=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Ee(c,y,_){for(const A in c)y.call(_,c[A],A,c)}function x(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function R(c){const y={};for(const _ in c)y[_]=c[_];return y}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,y){let _,A;for(let z=1;z<arguments.length;z++){A=arguments[z];for(_ in A)c[_]=A[_];for(let q=0;q<S.length;q++)_=S[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function j(c){m.setTimeout(()=>{throw c},0)}function D(){var c=qe;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class vt{constructor(){this.h=this.g=null}add(y,_){const A=ft.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ft=new G(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,pe=!1,qe=new vt,O=()=>{const c=m.Promise.resolve(void 0);_e=()=>{c.then(ne)}};var ne=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(_){j(_)}var y=ft;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}pe=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return c}();function Ie(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(le){e:{try{ce(y.nodeName);var z=!0;break e}catch{}z=!1}z||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}L(Ie,se);var be={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function rt(c,y,_,A,z){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=z,this.key=++ze,this.da=this.fa=!1}function $e(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Wt(c){this.src=c,this.g={},this.h=0}Wt.prototype.add=function(c,y,_,A,z){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ie=An(c,y,A,z);return-1<ie?(y=c[ie],_||(y.fa=!1)):(y=new rt(y,this.src,q,!!A,z),y.fa=_,c.push(y)),y};function Di(c,y){var _=y.type;if(_ in c.g){var A=c.g[_],z=Array.prototype.indexOf.call(A,y,void 0),q;(q=0<=z)&&Array.prototype.splice.call(A,z,1),q&&($e(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function An(c,y,_,A){for(var z=0;z<c.length;++z){var q=c[z];if(!q.da&&q.listener==y&&q.capture==!!_&&q.ha==A)return z}return-1}var fr="closure_lm_"+(1e6*Math.random()|0),dr={};function Ni(c,y,_,A,z){if(Array.isArray(y)){for(var q=0;q<y.length;q++)Ni(c,y[q],_,A,z);return null}return _=fu(_),c&&c[dt]?c.K(y,_,g(A)?!!A.capture:!1,z):bo(c,y,_,!1,A,z)}function bo(c,y,_,A,z,q){if(!y)throw Error("Invalid event type");var ie=g(z)?!!z.capture:!!z,Ve=Ro(c);if(Ve||(c[fr]=Ve=new Wt(c)),_=Ve.add(y,_,A,ie,q),_.proxy)return _;if(A=la(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ae||(z=ie),z===void 0&&(z=!1),c.addEventListener(y.toString(),A,z);else if(c.attachEvent)c.attachEvent(ca(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function la(){function c(_){return y.call(c.src,c.listener,_)}const y=nf;return c}function ua(c,y,_,A,z){if(Array.isArray(y))for(var q=0;q<y.length;q++)ua(c,y[q],_,A,z);else A=g(A)?!!A.capture:!!A,_=fu(_),c&&c[dt]?(c=c.i,y=String(y).toString(),y in c.g&&(q=c.g[y],_=An(q,_,A,z),-1<_&&($e(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[y],c.h--)))):c&&(c=Ro(c))&&(y=c.g[y.toString()],c=-1,y&&(c=An(y,_,A,z)),(_=-1<c?y[c]:null)&&gs(_))}function gs(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[dt])Di(y.i,c);else{var _=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(_,A,c.capture):y.detachEvent?y.detachEvent(ca(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=Ro(y))?(Di(_,c),_.h==0&&(_.src=null,y[fr]=null)):$e(c)}}}function ca(c){return c in dr?dr[c]:dr[c]="on"+c}function nf(c,y){if(c.da)c=!0;else{y=new Ie(y,this);var _=c.listener,A=c.ha||c.src;c.fa&&gs(c),c=_.call(A,y)}return c}function Ro(c){return c=c[fr],c instanceof Wt?c:null}var sn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fu(c){return typeof c=="function"?c:(c[sn]||(c[sn]=function(y){return c.handleEvent(y)}),c[sn])}function Et(){fe.call(this),this.i=new Wt(this),this.M=this,this.F=null}L(Et,fe),Et.prototype[dt]=!0,Et.prototype.removeEventListener=function(c,y,_,A){ua(this,c,y,_,A)};function Dt(c,y){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var z=y;y=new se(A,c),C(y,z)}if(z=!0,_)for(var q=_.length-1;0<=q;q--){var ie=y.g=_[q];z=Oi(ie,A,!0,y)&&z}if(ie=y.g=c,z=Oi(ie,A,!0,y)&&z,z=Oi(ie,A,!1,y)&&z,_)for(q=0;q<_.length;q++)ie=y.g=_[q],z=Oi(ie,A,!1,y)&&z}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],A=0;A<_.length;A++)$e(_[A]);delete c.g[y],c.h--}}this.F=null},Et.prototype.K=function(c,y,_,A){return this.i.add(String(c),y,!1,_,A)},Et.prototype.L=function(c,y,_,A){return this.i.add(String(c),y,!0,_,A)};function Oi(c,y,_,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var z=!0,q=0;q<y.length;++q){var ie=y[q];if(ie&&!ie.da&&ie.capture==_){var Ve=ie.listener,wt=ie.ha||ie.src;ie.fa&&Di(c.i,ie),z=Ve.call(wt,A)!==!1&&z}}return z&&!A.defaultPrevented}function du(c,y,_){if(typeof c=="function")_&&(c=b(c,_));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Io(c){c.g=du(()=>{c.g=null,c.i&&(c.i=!1,Io(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class rf extends fe{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Io(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(c){fe.call(this),this.h=c,this.g={}}L(ys,fe);var mr=[];function Ft(c){Ee(c.g,function(y,_){this.g.hasOwnProperty(_)&&gs(y)},c),c.g={}}ys.prototype.N=function(){ys.aa.N.call(this),Ft(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Co=m.JSON.stringify,ii=m.JSON.parse,Zt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Do(){}Do.prototype.h=null;function mu(c){return c.h||(c.h=c.i())}function pu(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){se.call(this,"d")}L(pr,se);function qn(){se.call(this,"c")}L(qn,se);var Sn={},gr=null;function ha(){return gr=gr||new Et}Sn.La="serverreachability";function No(c){se.call(this,Sn.La,c)}L(No,se);function yr(c){const y=ha();Dt(y,new No(y))}Sn.STAT_EVENT="statevent";function fa(c,y){se.call(this,Sn.STAT_EVENT,c),this.stat=y}L(fa,se);function ut(c){const y=ha();Dt(y,new fa(y,c))}Sn.Ma="timingevent";function gu(c,y){se.call(this,Sn.Ma,c),this.size=y}L(gu,se);function _r(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function vr(){this.g=!0}vr.prototype.xa=function(){this.g=!1};function yu(c,y,_,A,z,q){c.info(function(){if(c.g)if(q)for(var ie="",Ve=q.split("&"),wt=0;wt<Ve.length;wt++){var Pe=Ve[wt].split("=");if(1<Pe.length){var xt=Pe[0];Pe=Pe[1];var At=xt.split("_");ie=2<=At.length&&At[1]=="type"?ie+(xt+"="+Pe+"&"):ie+(xt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+A+") [attempt "+z+"]: "+y+`
`+_+`
`+ie})}function _u(c,y,_,A,z,q,ie){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+z+"]: "+y+`
`+_+`
`+q+" "+ie})}function Er(c,y,_,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Nt(c,_)+(A?" "+A:"")})}function si(c,y){c.info(function(){return"TIMEOUT: "+y})}vr.prototype.info=function(){};function Nt(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var z=A[1];if(Array.isArray(z)&&!(1>z.length)){var q=z[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<z.length;ie++)z[ie]=""}}}}return Co(_)}catch{return y}}var Tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function da(){}L(da,Do),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},_s=new da;function ai(c,y,_,A){this.j=c,this.i=y,this.l=_,this.R=A||1,this.U=new ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oo}function Oo(){this.i=null,this.g="",this.h=!1}var Tr={},vs={};function Fn(c,y,_){c.L=1,c.v=ws(st(y)),c.m=_,c.P=!0,Mi(c,null)}function Mi(c,y){c.F=Date.now(),et(c),c.A=st(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Pi(_.i,"t",A),c.C=0,_=c.j.J,c.h=new Oo,c.g=xu(c.j,_?y:null,!c.m),0<c.O&&(c.M=new rf(b(c.Y,c,c.g),c.O)),y=c.U,_=c.g,A=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(mr[0]=z.toString()),z=mr);for(var q=0;q<z.length;q++){var ie=Ni(_,z[q],A||y.handleEvent,!1,y.h||y);if(!ie)break;y.g[ie.key]=ie}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),yr(),yu(c.i,c.u,c.A,c.l,c.R,c.m)}ai.prototype.ca=function(c){c=c.target;const y=this.M;y&&Dn(c)==3?y.j():this.Y(c)},ai.prototype.Y=function(c){try{if(c==this.g)e:{const At=Dn(this.g);var y=this.g.Ba();const ji=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Su(this.g)))){this.J||At!=4||y==7||(y==8||0>=ji?yr(3):yr(2)),ma(this);var _=this.g.Z();this.X=_;t:if(wr(this)){var A=Su(this.g);c="";var z=A.length,q=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),fn(this);var ie="";break t}this.h.i=new m.TextDecoder}for(y=0;y<z;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(q&&y==z-1)});A.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,_u(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,wt=this.g;if((Ve=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Ve)){var Pe=Ve;break t}}Pe=null}if(_=Pe)Er(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dn(this,_);else{this.o=!1,this.s=3,ut(12),an(this),fn(this);break e}}if(this.P){_=!0;let Lt;for(;!this.J&&this.C<ie.length;)if(Lt=Ar(this,ie),Lt==vs){At==4&&(this.s=4,ut(14),_=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Tr){this.s=4,ut(15),Er(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Er(this.i,this.l,Lt,null),dn(this,Lt);if(wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ie.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)Er(this.i,this.l,ie,"[Invalid Chunked Response]"),an(this),fn(this);else if(0<ie.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ds(xt),xt.M=!0,ut(11))}}else Er(this.i,this.l,ie,null),dn(this,ie);At==4&&an(this),this.o&&!this.J&&(At==4?Du(this.j,this):(this.o=!1,et(this)))}else cf(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),an(this),fn(this)}}}catch{}finally{}};function wr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ar(c,y){var _=c.C,A=y.indexOf(`
`,_);return A==-1?vs:(_=Number(y.substring(_,A)),isNaN(_)?Tr:(A+=1,A+_>y.length?vs:(y=y.slice(A,A+_),c.C=A+_,y)))}ai.prototype.cancel=function(){this.J=!0,an(this)};function et(c){c.S=Date.now()+c.I,xo(c,c.I)}function xo(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=_r(b(c.ba,c),y)}function ma(c){c.B&&(m.clearTimeout(c.B),c.B=null)}ai.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(si(this.i,this.A),this.L!=2&&(yr(),ut(17)),an(this),this.s=2,fn(this)):xo(this,this.S-c)};function fn(c){c.j.G==0||c.J||Du(c.j,c)}function an(c){ma(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ft(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function dn(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||Sr(_.h,c))){if(!c.K&&Sr(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var z=A;if(z[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Sa(_),wa(_);else break e;qo(_),ut(18)}}else _.za=z[1],0<_.za-_.T&&37500>z[2]&&_.F&&_.v==0&&!_.C&&(_.C=_r(b(_.Za,_),6e3));if(1>=vu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else zi(_,11)}else if((c.K||_.g==c)&&Sa(_),!ee(y))for(z=_.Da.g.parse(y),y=0;y<z.length;y++){let Pe=z[y];if(_.T=Pe[0],Pe=Pe[1],_.G==2)if(Pe[0]=="c"){_.K=Pe[1],_.ia=Pe[2];const xt=Pe[3];xt!=null&&(_.la=xt,_.j.info("VER="+_.la));const At=Pe[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const ji=Pe[5];ji!=null&&typeof ji=="number"&&0<ji&&(A=1.5*ji,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Lt=c.g;if(Lt){const di=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var q=A.h;q.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(br(q,q.h),q.h=null))}if(A.D){const Go=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(A.ya=Go,je(A.I,A.D,Go))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ie=c;if(A.qa=Ou(A,A.J?A.ia:null,A.W),ie.K){bn(A.h,ie);var Ve=ie,wt=A.L;wt&&(Ve.I=wt),Ve.B&&(ma(Ve),et(Ve)),A.g=ie}else Iu(A);0<_.i.length&&Aa(_)}else Pe[0]!="stop"&&Pe[0]!="close"||zi(_,7);else _.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?zi(_,7):Bo(_):Pe[0]!="noop"&&_.l&&_.l.ta(Pe),_.v=0)}}yr(4)}catch{}}var sf=class{constructor(c,y){this.g=c,this.map=y}};function Mo(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ko(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function vu(c){return c.h?1:c.g?c.g.size:0}function Sr(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function br(c,y){c.g?c.g.add(y):c.h=y}function bn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Mo.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Jt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return $(c.i)}function Eu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var y=[],_=c.length,A=0;A<_;A++)y.push(c[A]);return y}y=[],_=0;for(A in c)y[_++]=c[A];return y}function af(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const A in c)y[_++]=A;return y}}}function Es(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=af(c),A=Eu(c),z=A.length,q=0;q<z;q++)y.call(void 0,A[q],_&&_[q],c)}var Vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pa(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),z=null;if(0<=A){var q=c[_].substring(0,A);z=c[_].substring(A+1)}else q=c[_];y(q,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function ki(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ki){this.h=c.h,Rr(this,c.j),this.o=c.o,this.g=c.g,Ts(this,c.s),this.l=c.l;var y=c.i,_=new oi;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),ga(this,_),this.m=c.m}else c&&(y=String(c).match(Vo))?(this.h=!1,Rr(this,y[1]||"",!0),this.o=Ir(y[2]||""),this.g=Ir(y[3]||"",!0),Ts(this,y[4]),this.l=Ir(y[5]||"",!0),ga(this,y[6]||"",!0),this.m=Ir(y[7]||"")):(this.h=!1,this.i=new oi(null,this.h))}ki.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Rn(y,Po,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Rn(y,Po,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Rn(_,_.charAt(0)=="/"?Lo:Tu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Rn(_,uf)),c.join("")};function st(c){return new ki(c)}function Rr(c,y,_){c.j=_?Ir(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Ts(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function ga(c,y,_){y instanceof oi?(c.i=y,Uo(c.i,c.h)):(_||(y=Rn(y,lf)),c.i=new oi(y,c.h))}function je(c,y,_){c.i.set(y,_)}function ws(c){return je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ir(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Rn(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,of),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function of(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Po=/[#\/\?@]/g,Tu=/[#\?:]/g,Lo=/[#\?]/g,lf=/[#\?@]/g,uf=/#/g;function oi(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function In(c){c.g||(c.g=new Map,c.h=0,c.i&&pa(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}r=oi.prototype,r.add=function(c,y){In(this),this.i=null,c=Li(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function ya(c,y){In(c),y=Li(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Vi(c,y){return In(c),y=Li(c,y),c.g.has(y)}r.forEach=function(c,y){In(this),this.g.forEach(function(_,A){_.forEach(function(z){c.call(y,z,A,this)},this)},this)},r.na=function(){In(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const z=c[A];for(let q=0;q<z.length;q++)_.push(y[A])}return _},r.V=function(c){In(this);let y=[];if(typeof c=="string")Vi(this,c)&&(y=y.concat(this.g.get(Li(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},r.set=function(c,y){return In(this),this.i=null,c=Li(this,c),Vi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function Pi(c,y,_){ya(c,y),0<_.length&&(c.i=null,c.g.set(Li(c,y),$(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const q=encodeURIComponent(String(A)),ie=this.V(A);for(A=0;A<ie.length;A++){var z=q;ie[A]!==""&&(z+="="+encodeURIComponent(String(ie[A]))),c.push(z)}}return this.i=c.join("&")};function Li(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Uo(c,y){y&&!c.j&&(In(c),c.i=null,c.g.forEach(function(_,A){var z=A.toLowerCase();A!=z&&(ya(this,A),Pi(this,z,_))},c)),c.j=y}function wu(c,y){const _=new vr;if(m.Image){const A=new Image;A.onload=N(Cn,_,"TestLoadImage: loaded",!0,y,A),A.onerror=N(Cn,_,"TestLoadImage: error",!1,y,A),A.onabort=N(Cn,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=N(Cn,_,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function As(c,y){const _=new vr,A=new AbortController,z=setTimeout(()=>{A.abort(),Cn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(z),q.ok?Cn(_,"TestPingServer: ok",!0,y):Cn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),Cn(_,"TestPingServer: error",!1,y)})}function Cn(c,y,_,A,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),A(_)}catch{}}function Ss(){this.g=new Zt}function li(c,y,_){const A=_||"";try{Es(c,function(z,q){let ie=z;g(z)&&(ie=Co(z)),y.push(A+q+"="+encodeURIComponent(ie))})}catch(z){throw y.push(A+"type="+encodeURIComponent("_badmap")),z}}function Cr(c){this.l=c.Ub||null,this.j=c.eb||!1}L(Cr,Do),Cr.prototype.g=function(){return new Ui(this.l,this.j)},Cr.prototype.i=function(c){return function(){return c}}({});function Ui(c,y){Et.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Ui,Et),r=Ui.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,ci(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function zo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?ui(this):ci(this),this.readyState==3&&zo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ui(this))},r.Qa=function(c){this.g&&(this.response=c,ui(this))},r.ga=function(){this.g&&ui(this)};function ui(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ci(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function ci(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function jo(c){let y="";return Ee(c,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Ot(c,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=jo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):je(c,y,_))}function Fe(c){Et.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Fe,Et);var _a=/^https?$/i,bs=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?mu(this.o):mu(_s),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(q){Au(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var z in A)_.set(z,A[z]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),z=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(bs,y,void 0))||A||z||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of _)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Au(this,q)}};function Au(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,va(c),hi(c)}function va(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Dt(this,"complete"),Dt(this,"abort"),hi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},r.bb=function(){Ea(this)};function Ea(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Dn(c)!=4||c.Z()!=2)){if(c.u&&Dn(c)==4)du(c.Ea,0,c);else if(Dt(c,"readystatechange"),Dn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=ie===0){var z=String(c.D).match(Vo)[1]||null;!z&&m.self&&m.self.location&&(z=m.self.location.protocol.slice(0,-1)),A=!_a.test(z?z.toLowerCase():"")}_=A}if(_)Dt(c,"complete"),Dt(c,"success");else{c.m=6;try{var q=2<Dn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",va(c)}}finally{hi(c)}}}}function hi(c,y){if(c.g){Rs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Dt(c,"ready");try{_.onreadystatechange=A}catch{}}}function Rs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Dn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ii(y)}};function Su(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function cf(c){const y={};c=(c.g&&2<=Dn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ee(c[A]))continue;var _=V(c[A]);const z=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=y[z]||[];y[z]=q,q.push(_)}x(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ta(c){this.Aa=0,this.i=[],this.j=new vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,c),this.cb=Is("retryDelaySeedMs",1e4,c),this.Wa=Is("forwardChannelMaxRetries",2,c),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Mo(c&&c.concurrentRequestLimit),this.Da=new Ss,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ta.prototype,r.la=8,r.G=1,r.connect=function(c,y,_,A){ut(0),this.W=c,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Ou(this,null,this.W),Aa(this)};function Bo(c){if(bu(c),c.G==3){var y=c.U++,_=st(c.I);if(je(_,"SID",c.K),je(_,"RID",y),je(_,"TYPE","terminate"),Cs(c,_),y=new ai(c,c.j,y),y.L=2,y.v=ws(st(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=xu(y.j,null),y.g.ea(y.v)),y.F=Date.now(),et(y)}Nu(c)}function wa(c){c.g&&(Ds(c),c.g.cancel(),c.g=null)}function bu(c){wa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Sa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Aa(c){if(!ko(c.h)&&!c.s){c.s=!0;var y=c.Ga;_e||O(),pe||(_e(),pe=!0),qe.add(y,c),c.B=0}}function hf(c,y){return vu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=_r(b(c.Ga,c,y),Fo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new ai(this,this.j,c);let q=this.o;if(this.S&&(q?(q=R(q),C(q,this.S)):q=this.S),this.m!==null||this.O||(z.H=q,q=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=Ru(this,z,y),_=st(this.I),je(_,"RID",c),je(_,"CVER",22),this.D&&je(_,"X-HTTP-Session-Id",this.D),Cs(this,_),q&&(this.O?y="headers="+encodeURIComponent(String(jo(q)))+"&"+y:this.m&&Ot(_,this.m,q)),br(this.h,z),this.Ua&&je(_,"TYPE","init"),this.P?(je(_,"$req",y),je(_,"SID","null"),z.T=!0,Fn(z,_,null)):Fn(z,_,y),this.G=2}}else this.G==3&&(c?Ho(this,c):this.i.length==0||ko(this.h)||Ho(this))};function Ho(c,y){var _;y?_=y.l:_=c.U++;const A=st(c.I);je(A,"SID",c.K),je(A,"RID",_),je(A,"AID",c.T),Cs(c,A),c.m&&c.o&&Ot(A,c.m,c.o),_=new ai(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Ru(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),br(c.h,_),Fn(_,A,y)}function Cs(c,y){c.H&&Ee(c.H,function(_,A){je(y,A,_)}),c.l&&Es({},function(_,A){je(y,A,_)})}function Ru(c,y,_){_=Math.min(c.i.length,_);var A=c.l?b(c.l.Na,c.l,c):null;e:{var z=c.i;let q=-1;for(;;){const ie=["count="+_];q==-1?0<_?(q=z[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let Ve=!0;for(let wt=0;wt<_;wt++){let Pe=z[wt].g;const xt=z[wt].map;if(Pe-=q,0>Pe)q=Math.max(0,z[wt].g-100),Ve=!1;else try{li(xt,ie,"req"+Pe+"_")}catch{A&&A(xt)}}if(Ve){A=ie.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,A}function Iu(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;_e||O(),pe||(_e(),pe=!0),qe.add(y,c),c.v=0}}function qo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=_r(b(c.Fa,c),Fo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=_r(b(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),wa(this),Cu(this))};function Ds(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Cu(c){c.g=new ai(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=st(c.qa);je(y,"RID","rpc"),je(y,"SID",c.K),je(y,"AID",c.T),je(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&je(y,"TO",c.ja),je(y,"TYPE","xmlhttp"),Cs(c,y),c.m&&c.o&&Ot(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ws(st(y)),_.m=null,_.P=!0,Mi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,wa(this),qo(this),ut(19))};function Sa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Du(c,y){var _=null;if(c.g==y){Sa(c),Ds(c),c.g=null;var A=2}else if(Sr(c.h,y))_=y.D,bn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var z=c.B;A=ha(),Dt(A,new gu(A,_)),Aa(c)}else Iu(c);else if(z=y.s,z==3||z==0&&0<y.X||!(A==1&&hf(c,y)||A==2&&qo(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),z){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Fo(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function zi(c,y){if(c.j.info("Error code "+y),y==2){var _=b(c.fb,c),A=c.Xa;const z=!A;A=new ki(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Rr(A,"https"),ws(A),z?wu(A.toString(),_):As(A.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(y),Nu(c),bu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Nu(c){if(c.G=0,c.ka=[],c.l){const y=Jt(c.h);(y.length!=0||c.i.length!=0)&&(k(c.ka,y),k(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function Ou(c,y,_){var A=_ instanceof ki?st(_):new ki(_);if(A.g!="")y&&(A.g=y+"."+A.g),Ts(A,A.s);else{var z=m.location;A=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;var q=new ki(null);A&&Rr(q,A),y&&(q.g=y),z&&Ts(q,z),_&&(q.l=_),A=q}return _=c.D,y=c.ya,_&&y&&je(A,_,y),je(A,"VER",c.la),Cs(c,A),A}function xu(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Fe(new Cr({eb:_})):new Fe(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ba(){}ba.prototype.g=function(c,y){return new en(c,y)};function en(c,y){Et.call(this),this.g=new Ta(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!ee(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ee(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new fi(this)}L(en,Et),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Bo(this.g)},en.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Co(c),c=_);y.i.push(new sf(y.Ya++,c)),y.G==3&&Aa(y)},en.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,en.aa.N.call(this)};function ku(c){pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}L(ku,pr);function Vu(){qn.call(this),this.status=1}L(Vu,qn);function fi(c){this.g=c}L(fi,Mu),fi.prototype.ua=function(){Dt(this.g,"a")},fi.prototype.ta=function(c){Dt(this.g,new ku(c))},fi.prototype.sa=function(c){Dt(this.g,new Vu)},fi.prototype.ra=function(){Dt(this.g,"b")},ba.prototype.createWebChannel=ba.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,$E=function(){return new ba},GE=function(){return ha()},FE=Sn,Om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,qc=Tt,xi.COMPLETE="complete",qE=xi,pu.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Vl=pu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,HE=Fe}).apply(typeof kc<"u"?kc:typeof self<"u"?self:typeof window<"u"?window:{});const Pv="@firebase/firestore",Lv="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Ch("@firebase/firestore");function Za(){return Js.logLevel}function oe(r,...e){if(Js.logLevel<=Oe.DEBUG){const n=e.map(lp);Js.debug(`Firestore (${Eo}): ${r}`,...n)}}function ur(r,...e){if(Js.logLevel<=Oe.ERROR){const n=e.map(lp);Js.error(`Firestore (${Eo}): ${r}`,...n)}}function oo(r,...e){if(Js.logLevel<=Oe.WARN){const n=e.map(lp);Js.warn(`Firestore (${Eo}): ${r}`,...n)}}function lp(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+r;throw ur(e),new Error(e)}function Ge(r,e){r||ve()}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qt.UNAUTHENTICATED))}shutdown(){}}class oI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lI{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new or;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new or,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new or)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new KE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Qt(e)}}class uI{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cI{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new uI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,jn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Uv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new Uv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=fI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function lo(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=-62135596800,jv=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*jv);return new It(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zv)throw new de(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new It(0,0))}static max(){return new we(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__name__";class vi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(),s===void 0?s=e.length-n:s>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=vi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=vi.isNumericId(e),o=vi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?vi.extractNumericId(e).compare(vi.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class Ze extends vi{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const dI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends vi{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return dI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bv}static keyField(){return new Ht([Bv])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new de(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ze.fromString(e))}static fromName(e){return new ge(Ze.fromString(e).popFirst(5))}static empty(){return new ge(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=-1;function mI(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new It(n+1,0):new It(n,s));return new ss(o,ge.empty(),e)}function pI(r){return new ss(r.readTime,r.key,Kl)}class ss{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ss(we.min(),ge.empty(),Kl)}static max(){return new ss(we.max(),ge.empty(),Kl)}}function gI(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:ke(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _I{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==yI)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,s)=>{n(e)})}static reject(e){return new X((n,s)=>{s(e)})}static waitFor(e){return new X((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new X((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;n(e[g]).next(E=>{f[g]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new X((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function vI(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Nh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=-1;function Oh(r){return r==null}function ih(r){return r===0&&1/r==-1/0}function EI(r){return typeof r=="number"&&Number.isInteger(r)&&!ih(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="";function TI(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Hv(e)),e=wI(r.get(n),e);return Hv(e)}function wI(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case YE:n+="";break;default:n+=u}}return n}function Hv(r){return r+YE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ms(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function XE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vc(this.root,e,this.comparator,!0)}}class Vc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Bt.RED,this.left=o??Bt.EMPTY,this.right=u??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Bt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,s,o,u){return this}insert(e,n,s){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fv(this.data.getIterator())}getIteratorFrom(e){return new Fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class Fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new vn([])}unionWith(e){let n=new Ct(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new WE("Invalid base64 string: "+u):u}}(e);return new qt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const AI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(r){if(Ge(!!r),typeof r=="string"){let e=0;const n=AI.exec(r);if(Ge(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function os(r){return typeof r=="string"?qt.fromBase64String(r):qt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="server_timestamp",JE="__type__",eT="__previous_value__",tT="__local_write_time__";function cp(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[JE])===null||n===void 0?void 0:n.stringValue)===ZE}function xh(r){const e=r.mapValue.fields[eT];return cp(e)?xh(e):e}function Ql(r){const e=as(r.mapValue.fields[tT].timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,s,o,u,f,m,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g}}const rh="(default)";class Yl{constructor(e,n){this.projectId=e,this.database=n||rh}static empty(){return new Yl("","")}get isDefaultDatabase(){return this.database===rh}isEqual(e){return e instanceof Yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="__type__",bI="__max__",Pc={mapValue:{}},iT="__vector__",sh="value";function ls(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?cp(r)?4:II(r)?9007199254740991:RI(r)?10:11:ve()}function Si(r,e){if(r===e)return!0;const n=ls(r);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ql(r).isEqual(Ql(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=as(o.timestampValue),m=as(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return os(o.bytesValue).isEqual(os(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ht(o.geoPointValue.latitude)===ht(u.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ht(o.integerValue)===ht(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ht(o.doubleValue),m=ht(u.doubleValue);return f===m?ih(f)===ih(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return lo(r.arrayValue.values||[],e.arrayValue.values||[],Si);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(qv(f)!==qv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Si(f[p],m[p])))return!1;return!0}(r,e);default:return ve()}}function Xl(r,e){return(r.values||[]).find(n=>Si(n,e))!==void 0}function uo(r,e){if(r===e)return 0;const n=ls(r),s=ls(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ht(u.integerValue||u.doubleValue),p=ht(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return Gv(r.timestampValue,e.timestampValue);case 4:return Gv(Ql(r),Ql(e));case 5:return ke(r.stringValue,e.stringValue);case 6:return function(u,f){const m=os(u),p=os(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=ke(m[g],p[g]);if(E!==0)return E}return ke(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=ke(ht(u.latitude),ht(f.latitude));return m!==0?m:ke(ht(u.longitude),ht(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return $v(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,g,E;const w=u.fields||{},b=f.fields||{},N=(m=w[sh])===null||m===void 0?void 0:m.arrayValue,L=(p=b[sh])===null||p===void 0?void 0:p.arrayValue,$=ke(((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:$v(N,L)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Pc.mapValue&&f===Pc.mapValue)return 0;if(u===Pc.mapValue)return 1;if(f===Pc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const b=ke(p[w],E[w]);if(b!==0)return b;const N=uo(m[p[w]],g[E[w]]);if(N!==0)return N}return ke(p.length,E.length)}(r.mapValue,e.mapValue);default:throw ve()}}function Gv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const n=as(r),s=as(e),o=ke(n.seconds,s.seconds);return o!==0?o:ke(n.nanos,s.nanos)}function $v(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=uo(n[o],s[o]);if(u)return u}return ke(n.length,s.length)}function co(r){return xm(r)}function xm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=as(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return os(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ge.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=xm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${xm(n.fields[f])}`;return o+"}"}(r.mapValue):ve()}function Fc(r){switch(ls(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xh(r);return e?16+Fc(e):16;case 5:return 2*r.stringValue.length;case 6:return os(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Fc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ms(s.fields,(u,f)=>{o+=u.length+Fc(f)}),o}(r.mapValue);default:throw ve()}}function Mm(r){return!!r&&"integerValue"in r}function hp(r){return!!r&&"arrayValue"in r}function Kv(r){return!!r&&"nullValue"in r}function Qv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gc(r){return!!r&&"mapValue"in r}function RI(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[nT])===null||n===void 0?void 0:n.stringValue)===iT}function zl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function II(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===bI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(n)}setAll(e){let n=Ht.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=zl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Si(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Gc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ms(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new un(zl(this.value))}}function rT(r){const e=[];return ms(r.fields,(n,s)=>{const o=new Ht([n]);if(Gc(s)){const u=rT(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Yt(e,0,we.min(),we.min(),we.min(),un.empty(),0)}static newFoundDocument(e,n,s,o){return new Yt(e,1,n,we.min(),s,o,0)}static newNoDocument(e,n){return new Yt(e,2,n,we.min(),we.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,we.min(),we.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.position=e,this.inclusive=n}}function Yv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=uo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Si(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n="asc"){this.field=e,this.dir=n}}function CI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{}class Rt extends sT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new NI(e,n,s):n==="array-contains"?new MI(e,s):n==="in"?new kI(e,s):n==="not-in"?new VI(e,s):n==="array-contains-any"?new PI(e,s):new Rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OI(e,s):new xI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(uo(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bi extends sT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new bi(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function aT(r){return r.op==="and"}function oT(r){return DI(r)&&aT(r)}function DI(r){for(const e of r.filters)if(e instanceof bi)return!1;return!0}function km(r){if(r instanceof Rt)return r.field.canonicalString()+r.op.toString()+co(r.value);if(oT(r))return r.filters.map(e=>km(e)).join(",");{const e=r.filters.map(n=>km(n)).join(",");return`${r.op}(${e})`}}function lT(r,e){return r instanceof Rt?function(s,o){return o instanceof Rt&&s.op===o.op&&s.field.isEqual(o.field)&&Si(s.value,o.value)}(r,e):r instanceof bi?function(s,o){return o instanceof bi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&lT(f,o.filters[m]),!0):!1}(r,e):void ve()}function uT(r){return r instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(r):r instanceof bi?function(n){return n.op.toString()+" {"+n.getFilters().map(uT).join(" ,")+"}"}(r):"Filter"}class NI extends Rt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class OI extends Rt{constructor(e,n){super(e,"in",n),this.keys=cT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xI extends Rt{constructor(e,n){super(e,"not-in",n),this.keys=cT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cT(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ge.fromName(s.referenceValue))}class MI extends Rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hp(n)&&Xl(n.arrayValue,this.value)}}class kI extends Rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class VI extends Rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xl(this.value.arrayValue,n)}}class PI extends Rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Xl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function Wv(r,e=null,n=[],s=[],o=null,u=null,f=null){return new LI(r,e,n,s,o,u,f)}function fp(r){const e=Se(r);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>km(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>co(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>co(s)).join(",")),e.le=n}return e.le}function dp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!CI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!lT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Xv(r.startAt,e.startAt)&&Xv(r.endAt,e.endAt)}function Vm(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function UI(r,e,n,s,o,u,f,m){return new Mh(r,e,n,s,o,u,f,m)}function kh(r){return new Mh(r)}function Zv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function zI(r){return r.collectionGroup!==null}function jl(r){const e=Se(r);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ct(Ht.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new oh(u,s))}),n.has(Ht.keyField().canonicalString())||e.he.push(new oh(Ht.keyField(),s))}return e.he}function Ti(r){const e=Se(r);return e.Pe||(e.Pe=jI(e,jl(r))),e.Pe}function jI(r,e){if(r.limitType==="F")return Wv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new oh(o.field,u)});const n=r.endAt?new ah(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ah(r.startAt.position,r.startAt.inclusive):null;return Wv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Pm(r,e,n){return new Mh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Vh(r,e){return dp(Ti(r),Ti(e))&&r.limitType===e.limitType}function hT(r){return`${fp(Ti(r))}|lt:${r.limitType}`}function Ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>uT(o)).join(", ")}]`),Oh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>co(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>co(o)).join(",")),`Target(${s})`}(Ti(r))}; limitType=${r.limitType})`}function Ph(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of jl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const g=Yv(f,m,p);return f.inclusive?g<=0:g<0}(s.startAt,jl(s),o)||s.endAt&&!function(f,m,p){const g=Yv(f,m,p);return f.inclusive?g>=0:g>0}(s.endAt,jl(s),o))}(r,e)}function BI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function fT(r){return(e,n)=>{let s=!1;for(const o of jl(r)){const u=HI(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function HI(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?uo(p,g):ve()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return XE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new it(ge.comparator);function cr(){return qI}const dT=new it(ge.comparator);function Pl(...r){let e=dT;for(const n of r)e=e.insert(n.key,n);return e}function mT(r){let e=dT;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return Bl()}function pT(){return Bl()}function Bl(){return new aa(r=>r.toString(),(r,e)=>r.isEqual(e))}const FI=new it(ge.comparator),GI=new Ct(ge.comparator);function xe(...r){let e=GI;for(const n of r)e=e.add(n);return e}const $I=new Ct(ke);function KI(){return $I}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function gT(r){return{integerValue:""+r}}function QI(r,e){return EI(e)?gT(e):mp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this._=void 0}}function YI(r,e,n){return r instanceof lh?function(o,u){const f={fields:{[JE]:{stringValue:ZE},[tT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&cp(u)&&(u=xh(u)),u&&(f.fields[eT]=u),{mapValue:f}}(n,e):r instanceof ho?_T(r,e):r instanceof Wl?vT(r,e):function(o,u){const f=yT(o,u),m=Jv(f)+Jv(o.Ie);return Mm(f)&&Mm(o.Ie)?gT(m):mp(o.serializer,m)}(r,e)}function XI(r,e,n){return r instanceof ho?_T(r,e):r instanceof Wl?vT(r,e):n}function yT(r,e){return r instanceof uh?function(s){return Mm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class lh extends Lh{}class ho extends Lh{constructor(e){super(),this.elements=e}}function _T(r,e){const n=ET(e);for(const s of r.elements)n.some(o=>Si(o,s))||n.push(s);return{arrayValue:{values:n}}}class Wl extends Lh{constructor(e){super(),this.elements=e}}function vT(r,e){let n=ET(e);for(const s of r.elements)n=n.filter(o=>!Si(o,s));return{arrayValue:{values:n}}}class uh extends Lh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Jv(r){return ht(r.integerValue||r.doubleValue)}function ET(r){return hp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.field=e,this.transform=n}}function ZI(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof ho&&o instanceof ho||s instanceof Wl&&o instanceof Wl?lo(s.elements,o.elements,Si):s instanceof uh&&o instanceof uh?Si(s.Ie,o.Ie):s instanceof lh&&o instanceof lh}(r.transform,e.transform)}class JI{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $c(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Uh{}function TT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new pp(r.key,Wn.none()):new iu(r.key,r.data,Wn.none());{const n=r.data,s=un.empty();let o=new Ct(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ps(r.key,s,new vn(o.toArray()),Wn.none())}}function eC(r,e,n){r instanceof iu?function(o,u,f){const m=o.value.clone(),p=t0(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof ps?function(o,u,f){if(!$c(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=t0(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(wT(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Hl(r,e,n,s){return r instanceof iu?function(u,f,m,p){if(!$c(u.precondition,f))return m;const g=u.value.clone(),E=n0(u.fieldTransforms,p,f);return g.setAll(E),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(r,e,n,s):r instanceof ps?function(u,f,m,p){if(!$c(u.precondition,f))return m;const g=n0(u.fieldTransforms,p,f),E=f.data;return E.setAll(wT(u)),E.setAll(g),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,n,s):function(u,f,m){return $c(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function tC(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=yT(s.transform,o||null);u!=null&&(n===null&&(n=un.empty()),n.set(s.field,u))}return n||null}function e0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,(u,f)=>ZI(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class iu extends Uh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends Uh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function wT(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function t0(r,e,n){const s=new Map;Ge(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,XI(f,m,n[o]))}return s}function n0(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,YI(u,f,e))}return s}class pp extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nC extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&eC(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=TT(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(n,s)=>e0(n,s))&&lo(this.baseMutations,e.baseMutations,(n,s)=>e0(n,s))}}class gp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ge(e.mutations.length===s.length);let o=function(){return FI}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new gp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ue;function aC(r){switch(r){case te.OK:return ve();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return ve()}}function AT(r){if(r===void 0)return ur("GRPC error has no .code"),te.UNKNOWN;switch(r){case yt.OK:return te.OK;case yt.CANCELLED:return te.CANCELLED;case yt.UNKNOWN:return te.UNKNOWN;case yt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case yt.INTERNAL:return te.INTERNAL;case yt.UNAVAILABLE:return te.UNAVAILABLE;case yt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case yt.NOT_FOUND:return te.NOT_FOUND;case yt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case yt.ABORTED:return te.ABORTED;case yt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case yt.DATA_LOSS:return te.DATA_LOSS;default:return ve()}}(Ue=yt||(yt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new ns([4294967295,4294967295],0);function i0(r){const e=oC().encode(r),n=new BE;return n.update(e),new Uint8Array(n.digest())}function r0(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ns([n,s],0),new ns([o,u],0)]}class yp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ll(`Invalid padding: ${n}`);if(s<0)throw new Ll(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ll(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ll(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ns.fromNumber(this.Ee)}Ae(e,n,s){let o=e.add(n.multiply(ns.fromNumber(s)));return o.compare(lC)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=i0(e),[s,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new yp(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const n=i0(e),[s,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,ru.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new zh(we.min(),o,new it(ke),cr(),xe())}}class ru{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ru(s,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,s,o){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=o}}class ST{constructor(e,n){this.targetId=e,this.ge=n}}class bT{constructor(e,n,s=qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class s0{constructor(){this.pe=0,this.ye=a0(),this.we=qt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),n=xe(),s=xe();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new ru(this.we,this.Se,e,n,s)}Me(){this.be=!1,this.ye=a0()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class uC{constructor(e){this.ke=e,this.qe=new Map,this.Qe=cr(),this.$e=Lc(),this.Ke=Lc(),this.Ue=new it(ke)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(e){const n=e.targetId,s=e.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Vm(u))if(s===0){const f=new ge(u.path);this.ze(n,f,Yt.newNoDocument(f,we.min()))}else Ge(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,g)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=os(s).toUint8Array()}catch(p){if(p instanceof WE)return oo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new yp(f,o,u)}catch(p){return oo(p instanceof Ll?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(e){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Vm(m.target)){const p=new ge(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Yt.newNoDocument(p,e))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=xe();this.Ke.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new zh(e,n,this.Ue,this.Qe,s);return this.Qe=cr(),this.$e=Lc(),this.Ke=Lc(),this.Ue=new it(ke),o}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new s0,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Ct(ke),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ct(ke),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new s0),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Lc(){return new it(ge.comparator)}function a0(){return new it(ge.comparator)}const cC={asc:"ASCENDING",desc:"DESCENDING"},hC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fC={and:"AND",or:"OR"};class dC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lm(r,e){return r.useProto3Json||Oh(e)?e:{value:e}}function ch(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RT(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function mC(r,e){return ch(r,e.toTimestamp())}function wi(r){return Ge(!!r),we.fromTimestamp(function(n){const s=as(n);return new It(s.seconds,s.nanos)}(r))}function _p(r,e){return Um(r,e).canonicalString()}function Um(r,e){const n=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function IT(r){const e=Ze.fromString(r);return Ge(xT(e)),e}function zm(r,e){return _p(r.databaseId,e.path)}function mm(r,e){const n=IT(e);if(n.get(1)!==r.databaseId.projectId)throw new de(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new de(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(DT(n))}function CT(r,e){return _p(r.databaseId,e)}function pC(r){const e=IT(r);return e.length===4?Ze.emptyPath():DT(e)}function jm(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function DT(r){return Ge(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function o0(r,e,n){return{name:zm(r,e),fields:n.value.mapValue.fields}}function gC(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ge(E===void 0||typeof E=="string"),qt.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),qt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(g){const E=g.code===void 0?te.UNKNOWN:AT(g.code);return new de(E,g.message||"")}(f);n=new bT(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=mm(r,s.document.name),u=wi(s.document.updateTime),f=s.document.createTime?wi(s.document.createTime):we.min(),m=new un({mapValue:{fields:s.document.fields}}),p=Yt.newFoundDocument(o,u,f,m),g=s.targetIds||[],E=s.removedTargetIds||[];n=new Kc(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=mm(r,s.document),u=s.readTime?wi(s.readTime):we.min(),f=Yt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Kc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=mm(r,s.document),u=s.removedTargetIds||[];n=new Kc([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new sC(o,u),m=s.targetId;n=new ST(m,f)}}return n}function yC(r,e){let n;if(e instanceof iu)n={update:o0(r,e.key,e.value)};else if(e instanceof pp)n={delete:zm(r,e.key)};else if(e instanceof ps)n={update:o0(r,e.key,e.data),updateMask:RC(e.fieldMask)};else{if(!(e instanceof nC))return ve();n={verify:zm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof lh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ho)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof uh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw ve()}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:mC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(r,e.precondition)),n}function _C(r,e){return r&&r.length>0?(Ge(e!==void 0),r.map(n=>function(o,u){let f=o.updateTime?wi(o.updateTime):wi(u);return f.isEqual(we.min())&&(f=wi(u)),new JI(f,o.transformResults||[])}(n,e))):[]}function vC(r,e){return{documents:[CT(r,e.path)]}}function EC(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=CT(r,o);const u=function(g){if(g.length!==0)return OT(bi.create(g,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(g){if(g.length!==0)return g.map(E=>function(b){return{field:eo(b.field),direction:AC(b.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Lm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:n,parent:o}}function TC(r){let e=pC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ge(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(w){const b=NT(w);return b instanceof bi&&oT(b)?b.getFilters():[b]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(b=>function(L){return new oh(to(L.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(b))}(n.orderBy));let m=null;n.limit&&(m=function(w){let b;return b=typeof w=="object"?w.value:w,Oh(b)?null:b}(n.limit));let p=null;n.startAt&&(p=function(w){const b=!!w.before,N=w.values||[];return new ah(N,b)}(n.startAt));let g=null;return n.endAt&&(g=function(w){const b=!w.before,N=w.values||[];return new ah(N,b)}(n.endAt)),UI(e,o,f,u,m,"F",p,g)}function wC(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=to(n.unaryFilter.field);return Rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=to(n.unaryFilter.field);return Rt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=to(n.unaryFilter.field);return Rt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=to(n.unaryFilter.field);return Rt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(r):r.fieldFilter!==void 0?function(n){return Rt.create(to(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return bi.create(n.compositeFilter.filters.map(s=>NT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(r):ve()}function AC(r){return cC[r]}function SC(r){return hC[r]}function bC(r){return fC[r]}function eo(r){return{fieldPath:r.canonicalString()}}function to(r){return Ht.fromServerFormat(r.fieldPath)}function OT(r){return r instanceof Rt?function(n){if(n.op==="=="){if(Qv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Kv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Kv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:SC(n.op),value:n.value}}}(r):r instanceof bi?function(n){const s=n.getFilters().map(o=>OT(o));return s.length===1?s[0]:{compositeFilter:{op:bC(n.op),filters:s}}}(r):ve()}function RC(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s,o,u=we.min(),f=we.min(),m=qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.Tt=e}}function CC(r){const e=TC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Pm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.Tn=new NC}addToCollectionParentIndex(e,n){return this.Tn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(ss.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class NC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ct(Ze.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ct(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MT=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(MT,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new fo(0)}static Un(){return new fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="LruGarbageCollector",OC=1048576;function c0([r,e],[n,s]){const o=ke(r,n);return o===0?ke(e,s):o}class xC{constructor(e){this.Hn=e,this.buffer=new Ct(c0),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();c0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(u0,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wo(n)?oe(u0,"Ignoring IndexedDB error during garbage collection: ",n):await To(n)}await this.er(3e5)})}}class kC{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Nh.ae);const s=new xC(n);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(l0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),l0):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,o,u,f,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(e,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(g=Date.now(),Za()<=Oe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function VC(r,e){return new kC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changes=new aa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Hl(s.mutation,o,vn.empty(),It.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=xe()){const o=Ys();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Pl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,xe()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=cr();const f=Bl(),m=function(){return Bl()}();return n.forEach((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof ps)?u=u.insert(g.key,g):E!==void 0?(f.set(g.key,E.mutation.getFieldMask()),Hl(E.mutation,g,E.mutation.getFieldMask(),It.now())):f.set(g.key,vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>f.set(g,E)),n.forEach((g,E)=>{var w;return m.set(g,new LC(E,(w=f.get(g))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Bl();let o=new it((f,m)=>f-m),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let E=s.get(p)||vn.empty();E=m.applyToLocalView(g,E),s.set(p,E);const w=(o.get(m.batchId)||xe()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,w=pT();E.forEach(b=>{if(!u.has(b)){const N=TT(n.get(b),s.get(b));N!==null&&w.set(b,N),u=u.add(b)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,w))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(Ys());let m=Kl,p=u;return f.next(g=>X.forEach(g,(E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{p=p.insert(E,b)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,xe())).next(E=>({batchId:m,changes:mT(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(s=>{let o=Pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Pl();return this.indexManager.getCollectionParents(e,u).next(m=>X.forEach(m,p=>{const g=function(w,b){return new Mh(b,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((w,b)=>{f=f.insert(w,b)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,g)=>{const E=g.getKey();f.get(E)===null&&(f=f.insert(E,Yt.newInvalidDocument(E)))});let m=Pl();return f.forEach((p,g)=>{const E=u.get(p);E!==void 0&&Hl(E.mutation,g,vn.empty(),It.now()),Ph(n,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:wi(o.createTime)}}(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:CC(o.bundledQuery),readTime:wi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.overlays=new it(ge.comparator),this.Rr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return X.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Et(e,n,u)}),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),u=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new it((g,E)=>g-E);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=Ys(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=Ys(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=o)););return X.resolve(m)}Et(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new rC(n,s));let u=this.Rr.get(n);u===void 0&&(u=xe(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.Vr=new Ct(Pt.mr),this.gr=new Ct(Pt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new Pt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new Pt(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new ge(new Ze([])),s=new Pt(n,e),o=new Pt(n,e+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ge(new Ze([])),s=new Pt(n,e),o=new Pt(n,e+1);let u=xe();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Pt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ge.comparator(e.key,n.key)||ke(e.Cr,n.Cr)}static pr(e,n){return ke(e.Cr,n.Cr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ct(Pt.mr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new iC(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new Pt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?up:this.Fr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pt(n,0),o=new Pt(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ct(ke);return n.forEach(o=>{const u=new Pt(o,0),f=new Pt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),X.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const f=new Pt(new ge(u),0);let m=new Ct(ke);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Cr)),!0)},f),X.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ge(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return X.forEach(n.mutations,o=>{const u=new Pt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new Pt(n,0),o=this.Mr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.kr=e,this.docs=function(){return new it(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let s=cr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Yt.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=cr();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||gI(pI(E),s)<=0||(o.has(E.key)||Ph(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ve()}qr(e,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new FC(this)}getSize(e){return X.resolve(this.size)}}class FC extends PC{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),X.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.persistence=e,this.Qr=new aa(n=>fp(n),dp),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Kr=new vp,this.targetCount=0,this.Ur=fo.Kn()}forEachTarget(e,n){return this.Qr.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),X.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.zn(n),X.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.br(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.Kr.yr(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.Kr.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Kr.br(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Kr.vr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Nh(0),this.zr=!1,this.zr=!0,this.jr=new BC,this.referenceDelegate=e(this),this.Hr=new GC(this),this.indexManager=new DC,this.remoteDocumentCache=function(o){return new qC(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new IC(n),this.Yr=new zC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new HC(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new $C(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,n){return X.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class $C extends _I{constructor(e){super(),this.currentSequenceNumber=e}}class Ep{constructor(e){this.persistence=e,this.ti=new vp,this.ni=null}static ri(e){return new Ep(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,s=>{const o=ge.fromPath(s);return this.si(e,o).next(u=>{u||n.removeEntry(o,we.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class hh{constructor(e,n){this.persistence=e,this.oi=new aa(s=>TI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=VC(this,n)}static ri(e,n){return new hh(e,n)}Zr(){}Xr(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return X.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,n).next(m=>{m||(s++,u.removeEntry(f,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fc(e.data.value)),n}ar(e,n,s){return X.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(e,n){let s=xe(),o=xe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Tp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return jR()?8:vI(Xt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.rs(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new KC;return this._s(e,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,f,m.size)})}).next(()=>u.result)}us(e,n,s,o){return s.documentReadCount<this.es?(Za()<=Oe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(Za()<=Oe.DEBUG&&oe("QueryEngine","Query:",Ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Za()<=Oe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ti(n))):X.resolve())}rs(e,n){if(Zv(n))return X.resolve(null);let s=Ti(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Pm(n,null,"F"),s=Ti(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=xe(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.cs(n,m);return this.ls(n,g,f,p.readTime)?this.rs(e,Pm(n,null,"F")):this.hs(e,g,n,p)}))})))}ss(e,n,s,o){return Zv(n)||o.isEqual(we.min())?X.resolve(null):this.ns.getDocuments(e,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?X.resolve(null):(Za()<=Oe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ja(n)),this.hs(e,f,n,mI(o,Kl)).next(m=>m))})}cs(e,n){let s=new Ct(fT(e));return n.forEach((o,u)=>{Ph(e,u)&&(s=s.add(u))}),s}ls(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,n,s){return Za()<=Oe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Ja(n)),this.ns.getDocumentsMatchingQuery(e,n,ss.min(),s)}hs(e,n,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="LocalStore",YC=3e8;class XC{constructor(e,n,s,o){this.persistence=e,this.Ps=n,this.serializer=o,this.Ts=new it(ke),this.Is=new aa(u=>fp(u),dp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function WC(r,e,n,s){return new XC(r,e,n,s)}async function VT(r,e){const n=Se(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=xe();for(const g of o){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(g=>({Rs:g,removedBatchIds:f,addedBatchIds:m}))})})}function ZC(r,e){const n=Se(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const w=g.batch,b=w.keys();let N=X.resolve();return b.forEach(L=>{N=N.next(()=>E.getEntry(p,L)).next($=>{const k=g.docVersions.get(L);Ge(k!==null),$.version.compareTo(k)<0&&(w.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),E.addEntry($)))})}),N.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=xe();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function PT(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function JC(r,e){const n=Se(r),s=e.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];e.targetChanges.forEach((E,w)=>{const b=o.get(w);if(!b)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,w)));let N=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(qt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,s)),o=o.insert(w,N),function($,k,G){return $.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=YC?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(b,N,E)&&m.push(n.Hr.updateTargetData(u,N))});let p=cr(),g=xe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(e2(u,f,e.documentUpdates).next(E=>{p=E.Vs,g=E.fs})),!s.isEqual(we.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(w=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(n.Ts=o,u))}function e2(r,e,n){let s=xe(),o=xe();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=cr();return n.forEach((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(wp,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function t2(r,e){const n=Se(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=up),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function n2(r,e){const n=Se(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,e).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new Jr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Bm(r,e,n){const s=Se(r),o=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!wo(f))throw f;oe(wp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function h0(r,e,n){const s=Se(r);let o=we.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,g,E){const w=Se(p),b=w.Is.get(E);return b!==void 0?X.resolve(w.Ts.get(b)):w.Hr.getTargetData(g,E)}(s,f,Ti(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,e,n?o:we.min(),n?u:xe())).next(m=>(i2(s,BI(e),m),{documents:m,gs:u})))}function i2(r,e,n){let s=r.Es.get(e)||we.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class f0{constructor(){this.activeTargetIds=KI()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r2{constructor(){this.ho=new f0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new f0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="ConnectivityMonitor";class m0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(d0,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(d0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=null;function Hm(){return Uc===null?Uc=function(){return 268435456+Math.round(2147483648*Math.random())}():Uc++,"0x"+Uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="RestConnection",a2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===rh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,n,s,o,u){const f=Hm(),m=this.bo(e,n.toUriEncodedString());oe(pm,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,s).then(g=>(oe(pm,`Received RPC '${e}' ${f}: `,g),g),g=>{throw oo(pm,`RPC '${e}' ${f} failed with error: `,g,"url: ",m,"request:",s),g})}Co(e,n,s,o,u,f){return this.So(e,n,s,o,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,n){const s=a2[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class u2 extends o2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,o){const u=Hm();return new Promise((f,m)=>{const p=new HE;p.setWithCredentials(!0),p.listenOnce(qE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case qc.NO_ERROR:const E=p.getResponseJson();oe(Kt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case qc.TIMEOUT:oe(Kt,`RPC '${e}' ${u} timed out`),m(new de(te.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const w=p.getStatus();if(oe(Kt,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const L=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(G)>=0?G:te.UNKNOWN}(N.status);m(new de(L,N.message))}else m(new de(te.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new de(te.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{oe(Kt,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);oe(Kt,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",g,s,15)})}Wo(e,n,s){const o=Hm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=$E(),m=GE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(Kt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);let b=!1,N=!1;const L=new l2({Fo:k=>{N?oe(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,k):(b||(oe(Kt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),b=!0),oe(Kt,`RPC '${e}' stream ${o} sending:`,k),w.send(k))},Mo:()=>w.close()}),$=(k,G,ee)=>{k.listen(G,Z=>{try{ee(Z)}catch(ce){setTimeout(()=>{throw ce},0)}})};return $(w,Vl.EventType.OPEN,()=>{N||(oe(Kt,`RPC '${e}' stream ${o} transport opened.`),L.Qo())}),$(w,Vl.EventType.CLOSE,()=>{N||(N=!0,oe(Kt,`RPC '${e}' stream ${o} transport closed`),L.Ko())}),$(w,Vl.EventType.ERROR,k=>{N||(N=!0,oo(Kt,`RPC '${e}' stream ${o} transport errored:`,k),L.Ko(new de(te.UNAVAILABLE,"The operation could not be completed")))}),$(w,Vl.EventType.MESSAGE,k=>{var G;if(!N){const ee=k.data[0];Ge(!!ee);const Z=ee,ce=(Z==null?void 0:Z.error)||((G=Z[0])===null||G===void 0?void 0:G.error);if(ce){oe(Kt,`RPC '${e}' stream ${o} received error:`,ce);const le=ce.status;let Ee=function(S){const C=yt[S];if(C!==void 0)return AT(C)}(le),x=ce.message;Ee===void 0&&(Ee=te.INTERNAL,x="Unknown error status: "+le+" with message "+ce.message),N=!0,L.Ko(new de(Ee,x)),w.close()}else oe(Kt,`RPC '${e}' stream ${o} received:`,ee),L.Uo(ee)}}),$(m,FE.STAT_EVENT,k=>{k.stat===Om.PROXY?oe(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):k.stat===Om.NOPROXY&&oe(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.$o()},0),L}}function gm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(r){return new dC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="PersistentStream";class UT{constructor(e,n,s,o,u,f,m,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new LT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{e(()=>{const o=new de(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(p0,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(oe(p0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c2 extends UT{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=gC(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?we.min():f.readTime?wi(f.readTime):we.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=jm(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Vm(p)?{documents:vC(u,p)}:{query:EC(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=RT(u,f.resumeToken);const g=Lm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(we.min())>0){m.readTime=ch(u,f.snapshotVersion.toTimestamp());const g=Lm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const s=wC(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=jm(this.serializer),n.removeTarget=e,this.I_(n)}}class h2 extends UT{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=_C(e.writeResults,e.commitTime),s=wi(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=jm(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>yC(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{}class d2 extends f2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new de(te.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(e,Um(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(te.UNKNOWN,u.toString())})}Co(e,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,Um(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(te.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class m2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ur(n),this.N_=!1):oe("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="RemoteStore";class p2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{oa(this)&&(oe(ea,"Restarting streams for network reachability change."),await async function(p){const g=Se(p);g.W_.add(4),await su(g),g.j_.set("Unknown"),g.W_.delete(4),await Bh(g)}(this))})}),this.j_=new m2(s,o)}}async function Bh(r){if(oa(r))for(const e of r.G_)await e(!0)}async function su(r){for(const e of r.G_)await e(!1)}function zT(r,e){const n=Se(r);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Rp(n)?bp(n):Ao(n).c_()&&Sp(n,e))}function Ap(r,e){const n=Se(r),s=Ao(n);n.U_.delete(e),s.c_()&&jT(n,e),n.U_.size===0&&(s.c_()?s.P_():oa(n)&&n.j_.set("Unknown"))}function Sp(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(r).y_(e)}function jT(r,e){r.H_.Ne(e),Ao(r).w_(e)}function bp(r){r.H_=new uC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Ao(r).start(),r.j_.B_()}function Rp(r){return oa(r)&&!Ao(r).u_()&&r.U_.size>0}function oa(r){return Se(r).W_.size===0}function BT(r){r.H_=void 0}async function g2(r){r.j_.set("Online")}async function y2(r){r.U_.forEach((e,n)=>{Sp(r,e)})}async function _2(r,e){BT(r),Rp(r)?(r.j_.q_(e),bp(r)):r.j_.set("Unknown")}async function v2(r,e,n){if(r.j_.set("Online"),e instanceof bT&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,e)}catch(s){oe(ea,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fh(r,s)}else if(e instanceof Kc?r.H_.We(e):e instanceof ST?r.H_.Ze(e):r.H_.je(e),!n.isEqual(we.min()))try{const s=await PT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(g);E&&u.U_.set(g,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,g)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(qt.EMPTY_BYTE_STRING,E.snapshotVersion)),jT(u,p);const w=new Jr(E.target,p,g,E.sequenceNumber);Sp(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){oe(ea,"Failed to raise snapshot:",s),await fh(r,s)}}async function fh(r,e,n){if(!wo(e))throw e;r.W_.add(1),await su(r),r.j_.set("Offline"),n||(n=()=>PT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe(ea,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Bh(r)})}function HT(r,e){return e().catch(n=>fh(r,n,e))}async function Hh(r){const e=Se(r),n=us(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:up;for(;E2(e);)try{const o=await t2(e.localStore,s);if(o===null){e.K_.length===0&&n.P_();break}s=o.batchId,T2(e,o)}catch(o){await fh(e,o)}qT(e)&&FT(e)}function E2(r){return oa(r)&&r.K_.length<10}function T2(r,e){r.K_.push(e);const n=us(r);n.c_()&&n.S_&&n.b_(e.mutations)}function qT(r){return oa(r)&&!us(r).u_()&&r.K_.length>0}function FT(r){us(r).start()}async function w2(r){us(r).C_()}async function A2(r){const e=us(r);for(const n of r.K_)e.b_(n.mutations)}async function S2(r,e,n){const s=r.K_.shift(),o=gp.from(s,e,n);await HT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Hh(r)}async function b2(r,e){e&&us(r).S_&&await async function(s,o){if(function(f){return aC(f)&&f!==te.ABORTED}(o.code)){const u=s.K_.shift();us(s).h_(),await HT(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Hh(s)}}(r,e),qT(r)&&FT(r)}async function g0(r,e){const n=Se(r);n.asyncQueue.verifyOperationInProgress(),oe(ea,"RemoteStore received new credentials");const s=oa(n);n.W_.add(3),await su(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Bh(n)}async function R2(r,e){const n=Se(r);e?(n.W_.delete(2),await Bh(n)):e||(n.W_.add(2),await su(n),n.j_.set("Unknown"))}function Ao(r){return r.J_||(r.J_=function(n,s,o){const u=Se(n);return u.M_(),new c2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:g2.bind(null,r),No:y2.bind(null,r),Lo:_2.bind(null,r),p_:v2.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Rp(r)?bp(r):r.j_.set("Unknown")):(await r.J_.stop(),BT(r))})),r.J_}function us(r){return r.Y_||(r.Y_=function(n,s,o){const u=Se(n);return u.M_(),new h2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:w2.bind(null,r),Lo:b2.bind(null,r),D_:A2.bind(null,r),v_:S2.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Hh(r)):(await r.Y_.stop(),r.K_.length>0&&(oe(ea,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Ip(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(r,e){if(ur("AsyncQueue",`${e}: ${r}`),wo(r))return new de(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Pl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.Z_=new it(ge.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class mo{constructor(e,n,s,o,u,f,m,p,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new mo(e,n,no.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class C2{constructor(){this.queries=_0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Se(n),u=o.queries;o.queries=_0(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new de(te.ABORTED,"Firestore shutting down"))}}function _0(){return new aa(r=>hT(r),Vh)}async function Dp(r,e){const n=Se(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new I2,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Cp(f,`Initialization of query '${Ja(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&Op(n)}async function Np(r,e){const n=Se(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function D2(r,e){const n=Se(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&Op(n)}function N2(r,e,n){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(e)}function Op(r){r.ia.forEach(e=>{e.next()})}var qm,v0;(v0=qm||(qm={}))._a="default",v0.Cache="cache";class xp{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==qm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.key=e}}class $T{constructor(e){this.key=e}}class O2{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=fT(e),this.wa=new no(this.ya)}get Sa(){return this.fa}ba(e,n){const s=n?n.Da:new y0,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const b=o.get(E),N=Ph(this.query,w)?w:null,L=!!b&&this.mutatedKeys.has(b.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let k=!1;b&&N?b.data.isEqual(N.data)?L!==$&&(s.track({type:3,doc:N}),k=!0):this.va(b,N)||(s.track({type:2,doc:N}),k=!0,(p&&this.ya(N,p)>0||g&&this.ya(N,g)<0)&&(m=!0)):!b&&N?(s.track({type:0,doc:N}),k=!0):b&&!N&&(s.track({type:1,doc:b}),k=!0,(p||g)&&(m=!0)),k&&(N?(f=f.add(N),u=$?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,w)=>function(N,L){const $=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return $(N)-$(L)}(E.type,w.type)||this.ya(E.doc,w.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,g=p!==this.ga;return this.ga=p,f.length!==0||g?{snapshot:new mo(this.query,e.wa,u,f,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new y0,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new $T(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new GT(s))}),n}Oa(e){this.fa=e.gs,this.pa=xe();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return mo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Mp="SyncEngine";class x2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class M2{constructor(e){this.key=e,this.Ba=!1}}class k2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new aa(m=>hT(m),Vh),this.qa=new Map,this.Qa=new Set,this.$a=new it(ge.comparator),this.Ka=new Map,this.Ua=new vp,this.Wa={},this.Ga=new Map,this.za=fo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function V2(r,e,n=!0){const s=ZT(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await KT(s,e,n,!0),o}async function P2(r,e){const n=ZT(r);await KT(n,e,!0,!1)}async function KT(r,e,n,s){const o=await n2(r.localStore,Ti(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await L2(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&zT(r.remoteStore,o),m}async function L2(r,e,n,s,o){r.Ha=(w,b,N)=>async function($,k,G,ee){let Z=k.view.ba(G);Z.ls&&(Z=await h0($.localStore,k.query,!1).then(({documents:x})=>k.view.ba(x,Z)));const ce=ee&&ee.targetChanges.get(k.targetId),le=ee&&ee.targetMismatches.get(k.targetId)!=null,Ee=k.view.applyChanges(Z,$.isPrimaryClient,ce,le);return T0($,k.targetId,Ee.Ma),Ee.snapshot}(r,w,b,N);const u=await h0(r.localStore,e,!0),f=new O2(e,u.gs),m=f.ba(u.documents),p=ru.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),g=f.applyChanges(m,r.isPrimaryClient,p);T0(r,n,g.Ma);const E=new x2(e,n,f);return r.ka.set(e,E),r.qa.has(n)?r.qa.get(n).push(e):r.qa.set(n,[e]),g.snapshot}async function U2(r,e,n){const s=Se(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!Vh(f,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Bm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Ap(s.remoteStore,o.targetId),Fm(s,o.targetId)}).catch(To)):(Fm(s,o.targetId),await Bm(s.localStore,o.targetId,!0))}async function z2(r,e){const n=Se(r),s=n.ka.get(e),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ap(n.remoteStore,s.targetId))}async function j2(r,e,n){const s=K2(r);try{const o=await function(f,m){const p=Se(f),g=It.now(),E=m.reduce((N,L)=>N.add(L.key),xe());let w,b;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let L=cr(),$=xe();return p.ds.getEntries(N,E).next(k=>{L=k,L.forEach((G,ee)=>{ee.isValidDocument()||($=$.add(G))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,L)).next(k=>{w=k;const G=[];for(const ee of m){const Z=tC(ee,w.get(ee.key).overlayedDocument);Z!=null&&G.push(new ps(ee.key,Z,rT(Z.value.mapValue),Wn.exists(!0)))}return p.mutationQueue.addMutationBatch(N,g,G,m)}).next(k=>{b=k;const G=k.applyToLocalDocumentSet(w,$);return p.documentOverlayCache.saveOverlays(N,k.batchId,G)})}).then(()=>({batchId:b.batchId,changes:mT(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let g=f.Wa[f.currentUser.toKey()];g||(g=new it(ke)),g=g.insert(m,p),f.Wa[f.currentUser.toKey()]=g}(s,o.batchId,n),await au(s,o.changes),await Hh(s.remoteStore)}catch(o){const u=Cp(o,"Failed to persist write");n.reject(u)}}async function QT(r,e){const n=Se(r);try{const s=await JC(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ge(f.Ba):o.removedDocuments.size>0&&(Ge(f.Ba),f.Ba=!1))}),await au(n,s,e)}catch(s){await To(s)}}function E0(r,e,n){const s=Se(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Se(f);p.onlineState=m;let g=!1;p.queries.forEach((E,w)=>{for(const b of w.ta)b.sa(m)&&(g=!0)}),g&&Op(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function B2(r,e,n){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ka.get(e),u=o&&o.key;if(u){let f=new it(ge.comparator);f=f.insert(u,Yt.newNoDocument(u,we.min()));const m=xe().add(u),p=new zh(we.min(),new Map,new it(ke),f,m);await QT(s,p),s.$a=s.$a.remove(u),s.Ka.delete(e),kp(s)}else await Bm(s.localStore,e,!1).then(()=>Fm(s,e,n)).catch(To)}async function H2(r,e){const n=Se(r),s=e.batch.batchId;try{const o=await ZC(n.localStore,e);XT(n,s,null),YT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await au(n,o)}catch(o){await To(o)}}async function q2(r,e,n){const s=Se(r);try{const o=await function(f,m){const p=Se(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(w=>(Ge(w!==null),E=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(s.localStore,e);XT(s,e,n),YT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await au(s,o)}catch(o){await To(o)}}function YT(r,e){(r.Ga.get(e)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(e)}function XT(r,e,n){const s=Se(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function Fm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(e),r.isPrimaryClient&&r.Ua.br(e).forEach(s=>{r.Ua.containsKey(s)||WT(r,s)})}function WT(r,e){r.Qa.delete(e.path.canonicalString());const n=r.$a.get(e);n!==null&&(Ap(r.remoteStore,n),r.$a=r.$a.remove(e),r.Ka.delete(n),kp(r))}function T0(r,e,n){for(const s of n)s instanceof GT?(r.Ua.addReference(s.key,e),F2(r,s)):s instanceof $T?(oe(Mp,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,e),r.Ua.containsKey(s.key)||WT(r,s.key)):ve()}function F2(r,e){const n=e.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(oe(Mp,"New document in limbo: "+n),r.Qa.add(s),kp(r))}function kp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const n=new ge(Ze.fromString(e)),s=r.za.next();r.Ka.set(s,new M2(n)),r.$a=r.$a.insert(n,s),zT(r.remoteStore,new Jr(Ti(kh(n.path)),s,"TargetPurposeLimboResolution",Nh.ae))}}async function au(r,e,n){const s=Se(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,e,n).then(g=>{var E;if((g||n)&&s.isPrimaryClient){const w=g?!g.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){o.push(g);const w=Tp.Yi(p.targetId,g);u.push(w)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,g){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>X.forEach(g,b=>X.forEach(b.Hi,N=>E.persistence.referenceDelegate.addReference(w,b.targetId,N)).next(()=>X.forEach(b.Ji,N=>E.persistence.referenceDelegate.removeReference(w,b.targetId,N)))))}catch(w){if(!wo(w))throw w;oe(wp,"Failed to update sequence numbers: "+w)}for(const w of g){const b=w.targetId;if(!w.fromCache){const N=E.Ts.get(b),L=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(L);E.Ts=E.Ts.insert(b,$)}}}(s.localStore,u))}async function G2(r,e){const n=Se(r);if(!n.currentUser.isEqual(e)){oe(Mp,"User change. New user:",e.toKey());const s=await VT(n.localStore,e);n.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new de(te.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await au(n,s.Rs)}}function $2(r,e){const n=Se(r),s=n.Ka.get(e);if(s&&s.Ba)return xe().add(s.key);{let o=xe();const u=n.qa.get(e);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function ZT(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=QT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B2.bind(null,e),e.La.p_=D2.bind(null,e.eventManager),e.La.Ja=N2.bind(null,e.eventManager),e}function K2(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class dh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return WC(this.persistence,new QC,e.initialUser,this.serializer)}Xa(e){return new kT(Ep.ri,this.serializer)}Za(e){return new r2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dh.provider={build:()=>new dh};class Q2 extends dh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ge(this.persistence.referenceDelegate instanceof hh);const s=this.persistence.referenceDelegate.garbageCollector;return new MC(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new kT(s=>hh.ri(s,n),this.serializer)}}class Gm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>E0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await R2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C2}()}createDatastore(e){const n=jh(e.databaseInfo.databaseId),s=function(u){return new u2(u)}(e.databaseInfo);return function(u,f,m,p){return new d2(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new p2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>E0(this.syncEngine,n,0),function(){return m0.D()?new m0:new s2}())}createSyncEngine(e,n){return function(o,u,f,m,p,g,E){const w=new k2(o,u,f,m,p,g);return E&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Se(o);oe(ea,"RemoteStore shutting down."),u.W_.add(5),await su(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gm.provider={build:()=>new Gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="FirestoreClient";class Y2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=QE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{oe(cs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(oe(cs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ym(r,e){r.asyncQueue.verifyOperationInProgress(),oe(cs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await VT(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function w0(r,e){r.asyncQueue.verifyOperationInProgress();const n=await X2(r);oe(cs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>g0(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>g0(e.remoteStore,o)),r._onlineComponents=e}async function X2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(cs,"Using user provided OfflineComponentProvider");try{await ym(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;oo("Error using user provided cache. Falling back to memory cache: "+n),await ym(r,new dh)}}else oe(cs,"Using default OfflineComponentProvider"),await ym(r,new Q2(void 0));return r._offlineComponents}async function JT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(cs,"Using user provided OnlineComponentProvider"),await w0(r,r._uninitializedComponentsProvider._online)):(oe(cs,"Using default OnlineComponentProvider"),await w0(r,new Gm))),r._onlineComponents}function W2(r){return JT(r).then(e=>e.syncEngine)}async function mh(r){const e=await JT(r),n=e.eventManager;return n.onListen=V2.bind(null,e.syncEngine),n.onUnlisten=U2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=P2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z2.bind(null,e.syncEngine),n}function Z2(r,e,n={}){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,g){const E=new Vp({next:b=>{E.su(),f.enqueueAndForget(()=>Np(u,w));const N=b.docs.has(m);!N&&b.fromCache?g.reject(new de(te.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&b.fromCache&&p&&p.source==="server"?g.reject(new de(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),w=new xp(kh(m.path),E,{includeMetadataChanges:!0,Ta:!0});return Dp(u,w)}(await mh(r),r.asyncQueue,e,n,s)),s.promise}function J2(r,e,n={}){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,g){const E=new Vp({next:b=>{E.su(),f.enqueueAndForget(()=>Np(u,w)),b.fromCache&&p.source==="server"?g.reject(new de(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),w=new xp(m,E,{includeMetadataChanges:!0,Ta:!0});return Dp(u,w)}(await mh(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(r,e,n){if(!n)throw new de(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function eD(r,e,n,s){if(e===!0&&s===!0)throw new de(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function S0(r){if(!ge.isDocumentKey(r))throw new de(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function b0(r){if(ge.isDocumentKey(r))throw new de(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Pp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve()}function En(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pp(r);throw new de(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="firestore.googleapis.com",R0=!0;class I0{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nw,this.ssl=R0}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:R0;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OC)throw new de(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ew((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I0(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new aI;switch(s.type){case"firstParty":return new cI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=A0.get(n);s&&(oe("ComponentProvider","Removing Datastore"),A0.delete(n),s.terminate())}(this),Promise.resolve()}}function tD(r,e,n,s={}){var o;const u=(r=En(r,qh))._getSettings(),f=`${e}:${n}`;if(u.host!==nw&&u.host!==f&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:f,ssl:!1})),s.mockUserToken){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=Qt.MOCK_USER;else{m=OE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new de(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Qt(g)}r._authCredentials=new oI(new KE(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ou(this.firestore,e,this._query)}}class rn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}}class is extends ou{constructor(e,n,s){super(e,n,kh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new ge(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function nD(r,e,...n){if(r=_t(r),tw("collection","path",e),r instanceof qh){const s=Ze.fromString(e,...n);return b0(s),new is(r,null,s)}{if(!(r instanceof rn||r instanceof is))throw new de(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return b0(s),new is(r.firestore,null,s)}}function Ei(r,e,...n){if(r=_t(r),arguments.length===1&&(e=QE.newId()),tw("doc","path",e),r instanceof qh){const s=Ze.fromString(e,...n);return S0(s),new rn(r,null,new ge(s))}{if(!(r instanceof rn||r instanceof is))throw new de(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return S0(s),new rn(r.firestore,r instanceof is?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="AsyncQueue";class D0{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new LT(this,"async_queue_retry"),this.Su=()=>{const s=gm();s&&oe(C0,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=gm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=gm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new or;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wo(e))throw e;oe(C0,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw ur("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const o=Ip.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function N0(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class hs extends qh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new D0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new D0(e),this._firestoreClient=void 0,await e}}}function iD(r,e){const n=typeof r=="object"?r:Dh(),s=typeof r=="string"?r:rh,o=ds(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=CE("firestore");u&&tD(o,...u)}return o}function Fh(r){if(r._terminated)throw new de(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rD(r),r._firestoreClient}function rD(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,g,E){return new SI(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,ew(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Y2(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(qt.fromBase64String(e))}catch(n){throw new de(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new po(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=/^__.*__$/;class aD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new iu(e,this.data,n,this.fieldTransforms)}}class iw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class Kh{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Kh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ph(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(rw(this.Lu)&&sD.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||jh(e)}ju(e,n,s,o=!1){return new Kh({Lu:e,methodName:n,zu:s,path:Ht.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sw(r){const e=r._freezeSettings(),n=jh(r._databaseId);return new oD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function lD(r,e,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,e,n,o);jp("Data must be an object, but it was:",f,s);const m=aw(s,f);let p,g;if(u.merge)p=new vn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const b=$m(e,w,n);if(!f.contains(b))throw new de(te.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);lw(E,b)||E.push(b)}p=new vn(E),g=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=f.fieldTransforms;return new aD(new un(m),p,g)}class Qh extends $h{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qh}}function uD(r,e,n){return new Kh({Lu:3,zu:e.settings.zu,methodName:r._methodName,Qu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zp extends $h{constructor(e,n){super(e),this.Hu=n}_toFieldTransform(e){const n=uD(this,e,!0),s=this.Hu.map(u=>lu(u,n)),o=new ho(s);return new WI(e.path,o)}isEqual(e){return e instanceof zp&&ao(this.Hu,e.Hu)}}function cD(r,e,n,s){const o=r.ju(1,e,n);jp("Data must be an object, but it was:",o,s);const u=[],f=un.empty();ms(s,(p,g)=>{const E=Bp(e,p,n);g=_t(g);const w=o.Ku(E);if(g instanceof Qh)u.push(E);else{const b=lu(g,w);b!=null&&(u.push(E),f.set(E,b))}});const m=new vn(u);return new iw(f,m,o.fieldTransforms)}function hD(r,e,n,s,o,u){const f=r.ju(1,e,n),m=[$m(e,s,n)],p=[o];if(u.length%2!=0)throw new de(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)m.push($m(e,u[b])),p.push(u[b+1]);const g=[],E=un.empty();for(let b=m.length-1;b>=0;--b)if(!lw(g,m[b])){const N=m[b];let L=p[b];L=_t(L);const $=f.Ku(N);if(L instanceof Qh)g.push(N);else{const k=lu(L,$);k!=null&&(g.push(N),E.set(N,k))}}const w=new vn(g);return new iw(E,w,f.fieldTransforms)}function lu(r,e){if(ow(r=_t(r)))return jp("Unsupported field value:",e,r),aw(r,e);if(r instanceof $h)return function(s,o){if(!rw(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=lu(m,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return QI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=It.fromDate(s);return{timestampValue:ch(o.serializer,u)}}if(s instanceof It){const u=new It(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ch(o.serializer,u)}}if(s instanceof Lp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof po)return{bytesValue:RT(o.serializer,s._byteString)};if(s instanceof rn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:_p(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Up)return function(f,m){return{mapValue:{fields:{[nT]:{stringValue:iT},[sh]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw m.Wu("VectorValues must only contain numeric values.");return mp(m.serializer,g)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Pp(s)}`)}(r,e)}function aw(r,e){const n={};return XE(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,(s,o)=>{const u=lu(o,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function ow(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof It||r instanceof Lp||r instanceof po||r instanceof rn||r instanceof $h||r instanceof Up)}function jp(r,e,n){if(!ow(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Pp(n);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function $m(r,e,n){if((e=_t(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Bp(r,e);throw ph("Field path arguments must be of type string or ",r,!1,void 0,n)}const fD=new RegExp("[~\\*/\\[\\]]");function Bp(r,e,n){if(e.search(fD)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ph(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new de(te.INVALID_ARGUMENT,m+r+p)}function lw(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dD extends uw{data(){return super.data()}}function cw(r,e){return typeof e=="string"?Bp(r,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new de(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mD{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ms(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[sh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ht(f.doubleValue));return new Up(u)}convertGeoPoint(e){return new Lp(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ql(e));default:return null}}convertTimestamp(e){const n=as(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);Ge(xT(s));const o=new Yl(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(n)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fw extends uw{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qc extends fw{data(e={}){return super.data(e)}}class dw{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ul(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Qc(this._firestore,this._userDataWriter,s.key,s,new Ul(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:gD(m.type),doc:p,oldIndex:g,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gD(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r){r=En(r,rn);const e=En(r.firestore,hs);return Z2(Fh(e),r._key).then(n=>pw(e,r,n))}class Hp extends mD{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function yD(r){r=En(r,ou);const e=En(r.firestore,hs),n=Fh(e),s=new Hp(e);return hw(r._query),J2(n,r._query).then(o=>new dw(e,s,r,o))}function mw(r,e,n){r=En(r,rn);const s=En(r.firestore,hs),o=pD(r.converter,e);return qp(s,[lD(sw(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Wn.none())])}function Yc(r,e,n,...s){r=En(r,rn);const o=En(r.firestore,hs),u=sw(o);let f;return f=typeof(e=_t(e))=="string"||e instanceof Gh?hD(u,"updateDoc",r._key,e,n,s):cD(u,"updateDoc",r._key,e),qp(o,[f.toMutation(r._key,Wn.exists(!0))])}function _D(r){return qp(En(r.firestore,hs),[new pp(r._key,Wn.none())])}function vD(r,...e){var n,s,o;r=_t(r);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof e[f]!="object"||N0(e[f])||(u=e[f],f++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(N0(e[f])){const w=e[f];e[f]=(n=w.next)===null||n===void 0?void 0:n.bind(w),e[f+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),e[f+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let p,g,E;if(r instanceof rn)g=En(r.firestore,hs),E=kh(r._key.path),p={next:w=>{e[f]&&e[f](pw(g,r,w))},error:e[f+1],complete:e[f+2]};else{const w=En(r,ou);g=En(w.firestore,hs),E=w._query;const b=new Hp(g);p={next:N=>{e[f]&&e[f](new dw(g,b,w,N))},error:e[f+1],complete:e[f+2]},hw(r._query)}return function(b,N,L,$){const k=new Vp($),G=new xp(N,k,L);return b.asyncQueue.enqueueAndForget(async()=>Dp(await mh(b),G)),()=>{k.su(),b.asyncQueue.enqueueAndForget(async()=>Np(await mh(b),G))}}(Fh(g),E,m,p)}function qp(r,e){return function(s,o){const u=new or;return s.asyncQueue.enqueueAndForget(async()=>j2(await W2(s),o,u)),u.promise}(Fh(r),e)}function pw(r,e,n){const s=n.docs.get(e._key),o=new Hp(r);return new fw(r,o,e._key,s,new Ul(n.hasPendingWrites,n.fromCache),e.converter)}function ED(...r){return new zp("arrayUnion",r)}(function(e,n=!0){(function(o){Eo=o})(sa),ei(new Bn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new hs(new lI(s.getProvider("auth-internal")),new hI(f,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yl(g.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),cn(Pv,Lv,e),cn(Pv,Lv,"esm2017")})();var TD="firebase",wD="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(TD,wD,"app");const gw="@firebase/installations",Fp="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=1e4,_w=`w:${Fp}`,vw="FIS_v2",AD="https://firebaseinstallations.googleapis.com/v1",SD=60*60*1e3,bD="installations",RD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ta=new ra(bD,RD,ID);function Ew(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw({projectId:r}){return`${AD}/projects/${r}/installations`}function ww(r){return{token:r.token,requestStatus:2,expiresIn:DD(r.expiresIn),creationTime:Date.now()}}async function Aw(r,e){const s=(await e.json()).error;return ta.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Sw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function CD(r,{refreshToken:e}){const n=Sw(r);return n.append("Authorization",ND(e)),n}async function bw(r){const e=await r();return e.status>=500&&e.status<600?r():e}function DD(r){return Number(r.replace("s","000"))}function ND(r){return`${vw} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=Tw(r),o=Sw(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={fid:n,authVersion:vw,appId:r.appId,sdkVersion:_w},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await bw(()=>fetch(s,m));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:ww(g.authToken)}}else throw await Aw("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=/^[cdef][\w-]{21}$/,Qm="";function kD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=VD(r);return MD.test(n)?n:Qm}catch{return Qm}}function VD(r){return xD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new Map;function Cw(r,e){const n=Yh(r);Dw(n,e),PD(n,e)}function Dw(r,e){const n=Iw.get(r);if(n)for(const s of n)s(e)}function PD(r,e){const n=LD();n&&n.postMessage({key:r,fid:e}),UD()}let Xs=null;function LD(){return!Xs&&"BroadcastChannel"in self&&(Xs=new BroadcastChannel("[Firebase] FID Change"),Xs.onmessage=r=>{Dw(r.data.key,r.data.fid)}),Xs}function UD(){Iw.size===0&&Xs&&(Xs.close(),Xs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="firebase-installations-database",jD=1,na="firebase-installations-store";let _m=null;function Gp(){return _m||(_m=LE(zD,jD,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(na)}}})),_m}async function gh(r,e){const n=Yh(r),o=(await Gp()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&Cw(r,e.fid),e}async function Nw(r){const e=Yh(r),s=(await Gp()).transaction(na,"readwrite");await s.objectStore(na).delete(e),await s.done}async function Xh(r,e){const n=Yh(r),o=(await Gp()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&Cw(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(r){let e;const n=await Xh(r.appConfig,s=>{const o=BD(s),u=HD(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Qm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function BD(r){const e=r||{fid:kD(),registrationStatus:0};return Ow(e)}function HD(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ta.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qD(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FD(r)}:{installationEntry:e}}async function qD(r,e){try{const n=await OD(r,e);return gh(r.appConfig,n)}catch(n){throw Ew(n)&&n.customData.serverCode===409?await Nw(r.appConfig):await gh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function FD(r){let e=await O0(r.appConfig);for(;e.registrationStatus===1;)await Rw(100),e=await O0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $p(r);return s||n}return e}function O0(r){return Xh(r,e=>{if(!e)throw ta.create("installation-not-found");return Ow(e)})}function Ow(r){return GD(r)?{fid:r.fid,registrationStatus:0}:r}function GD(r){return r.registrationStatus===1&&r.registrationTime+yw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D({appConfig:r,heartbeatServiceProvider:e},n){const s=KD(r,n),o=CD(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={installation:{sdkVersion:_w,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await bw(()=>fetch(s,m));if(p.ok){const g=await p.json();return ww(g)}else throw await Aw("Generate Auth Token",p)}function KD(r,{fid:e}){return`${Tw(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(r,e=!1){let n;const s=await Xh(r.appConfig,u=>{if(!xw(u))throw ta.create("not-registered");const f=u.authToken;if(!e&&XD(f))return u;if(f.requestStatus===1)return n=QD(r,e),u;{if(!navigator.onLine)throw ta.create("app-offline");const m=ZD(u);return n=YD(r,m),m}});return n?await n:s.authToken}async function QD(r,e){let n=await x0(r.appConfig);for(;n.authToken.requestStatus===1;)await Rw(100),n=await x0(r.appConfig);const s=n.authToken;return s.requestStatus===0?Kp(r,e):s}function x0(r){return Xh(r,e=>{if(!xw(e))throw ta.create("not-registered");const n=e.authToken;return JD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function YD(r,e){try{const n=await $D(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await gh(r.appConfig,s),n}catch(n){if(Ew(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nw(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gh(r.appConfig,s)}throw n}}function xw(r){return r!==void 0&&r.registrationStatus===2}function XD(r){return r.requestStatus===2&&!WD(r)}function WD(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+SD}function ZD(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function JD(r){return r.requestStatus===1&&r.requestTime+yw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(r){const e=r,{installationEntry:n,registrationPromise:s}=await $p(e);return s?s.catch(console.error):Kp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(r,e=!1){const n=r;return await nN(n),(await Kp(n,e)).token}async function nN(r){const{registrationPromise:e}=await $p(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(r){if(!r||!r.options)throw vm("App Configuration");if(!r.name)throw vm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw vm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function vm(r){return ta.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="installations",rN="installations-internal",sN=r=>{const e=r.getProvider("app").getImmediate(),n=iN(e),s=ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},aN=r=>{const e=r.getProvider("app").getImmediate(),n=ds(e,Mw).getImmediate();return{getId:()=>eN(n),getToken:o=>tN(n,o)}};function oN(){ei(new Bn(Mw,sN,"PUBLIC")),ei(new Bn(rN,aN,"PRIVATE"))}oN();cn(gw,Fp);cn(gw,Fp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="analytics",lN="firebase_id",uN="origin",cN=60*1e3,hN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Ch("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new ra("analytics","Analytics",fN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(r){if(!r.startsWith(Qp)){const e=Tn.create("invalid-gtag-resource",{gtagURL:r});return hn.warn(e.message),""}return r}function kw(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function mN(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function pN(r,e){const n=mN("firebase-js-sdk-policy",{createScriptURL:dN}),s=document.createElement("script"),o=`${Qp}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function gN(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function yN(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await kw(n)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(m){hn.error(m)}r("config",o,u)}async function _N(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await kw(n);for(const p of f){const g=m.find(w=>w.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){hn.error(u)}}function vN(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await _N(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await yN(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,g]=f;r("get",m,p,g)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){hn.error(m)}}return o}function EN(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=vN(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function TN(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qp)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=30,AN=1e3;class SN{constructor(e={},n=AN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vw=new SN;function bN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function RN(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:bN(s)},u=hN.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function IN(r,e=Vw,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw Tn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Tn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new NN;return setTimeout(async()=>{m.abort()},cN),Pw({appId:s,apiKey:o,measurementId:u},f,m,e)}async function Pw(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=Vw){var u;const{appId:f,measurementId:m}=r;try{await CN(s,e)}catch(p){if(m)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await RN(r);return o.deleteThrottleMetadata(f),p}catch(p){const g=p;if(!DN(g)){if(o.deleteThrottleMetadata(f),m)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?Rv(n,o.intervalMillis,wN):Rv(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),hn.debug(`Calling attemptFetch again in ${E} millis`),Pw(r,w,s,o)}}function CN(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(Tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DN(r){if(!(r instanceof Hn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class NN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ON(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(){if(ME())try{await kE()}catch(r){return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MN(r,e,n,s,o,u,f){var m;const p=IN(r);p.then(N=>{n[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>hn.error(N)),e.push(p);const g=xN().then(N=>{if(N)return s.getId()}),[E,w]=await Promise.all([p,g]);TN(u)||pN(u,E.measurementId),o("js",new Date);const b=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return b[uN]="firebase",b.update=!0,w!=null&&(b[lN]=w),o("config",E.measurementId,b),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.app=e}_delete(){return delete ql[this.app.options.appId],Promise.resolve()}}let ql={},M0=[];const k0={};let Em="dataLayer",VN="gtag",V0,Lw,P0=!1;function PN(){const r=[];if(xE()&&r.push("This is a browser extension environment."),BR()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Tn.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function LN(r,e,n){PN();const s=r.options.appId;if(!s)throw Tn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(ql[s]!=null)throw Tn.create("already-exists",{id:s});if(!P0){gN(Em);const{wrappedGtag:u,gtagCore:f}=EN(ql,M0,k0,Em,VN);Lw=u,V0=f,P0=!0}return ql[s]=MN(r,M0,k0,e,V0,Em,n),new kN(r)}function UN(r=Dh()){r=_t(r);const e=ds(r,yh);return e.isInitialized()?e.getImmediate():zN(r)}function zN(r,e={}){const n=ds(r,yh);if(n.isInitialized()){const o=n.getImmediate();if(ao(e,n.getOptions()))return o;throw Tn.create("already-initialized")}return n.initialize({options:e})}function jN(r,e,n,s){r=_t(r),ON(Lw,ql[r.app.options.appId],e,n,s).catch(o=>hn.error(o))}const L0="@firebase/analytics",U0="0.10.11";function BN(){ei(new Bn(yh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return LN(s,o,n)},"PUBLIC")),ei(new Bn("analytics-internal",r,"PRIVATE")),cn(L0,U0),cn(L0,U0,"esm2017");function r(e){try{const n=e.getProvider(yh).getImmediate();return{logEvent:(s,o,u)=>jN(n,s,o,u)}}catch(n){throw Tn.create("interop-component-reg-failed",{reason:n})}}}BN();function Yp(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function Uw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HN=Uw,zw=new ra("auth","Firebase",Uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Ch("@firebase/auth");function qN(r,...e){_h.logLevel<=Oe.WARN&&_h.warn(`Auth (${sa}): ${r}`,...e)}function Xc(r,...e){_h.logLevel<=Oe.ERROR&&_h.error(`Auth (${sa}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(r,...e){throw Wp(r,...e)}function Zn(r,...e){return Wp(r,...e)}function Xp(r,e,n){const s=Object.assign(Object.assign({},HN()),{[e]:n});return new ra("auth","Firebase",s).create(e,{appName:r.name})}function Zs(r){return Xp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FN(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ri(r,"argument-error"),Xp(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return zw.create(r,...e)}function Te(r,e,...n){if(!r)throw Wp(e,...n)}function ir(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xc(e),new Error(e)}function hr(r,e){r||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function GN(){return z0()==="http:"||z0()==="https:"}function z0(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GN()||xE()||"connection"in navigator)?navigator.onLine:!0}function KN(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=VR()||UR()}get(){return $N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(r,e){hr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=new uu(3e4,6e4);function Jp(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function So(r,e,n,s,o={}){return Bw(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=nu(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return LR()||(g.referrerPolicy="no-referrer"),jw.fetch()(Hw(r,r.config.apiHost,n,m),g)})}async function Bw(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},QN),e);try{const o=new WN(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw zc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw zc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw zc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw zc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Xp(r,E,g);Ri(r,E)}}catch(o){if(o instanceof Hn)throw o;Ri(r,"network-request-failed",{message:String(o)})}}async function XN(r,e,n,s,o={}){const u=await So(r,e,n,s,o);return"mfaPendingCredential"in u&&Ri(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Hw(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?Zp(r.config,o):`${r.config.apiScheme}://${o}`}class WN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),YN.get())})}}function zc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Zn(r,e,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(r,e){return So(r,"POST","/v1/accounts:delete",e)}async function qw(r,e){return So(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(r,e=!1){const n=_t(r),s=await n.getIdToken(e),o=eg(s);Te(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Fl(Tm(o.auth_time)),issuedAtTime:Fl(Tm(o.iat)),expirationTime:Fl(Tm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Tm(r){return Number(r)*1e3}function eg(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const o=RE(n);return o?JSON.parse(o):(Xc("Failed to decode base64 JWT payload"),null)}catch(o){return Xc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function j0(r){const e=eg(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Hn&&eO(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function eO({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(r){var e;const n=r.auth,s=await r.getIdToken(),o=await Zl(r,qw(n,{idToken:s}));Te(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Fw(u.providerUserInfo):[],m=iO(r.providerData,f),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Xm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,w)}async function nO(r){const e=_t(r);await vh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iO(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Fw(r){return r.map(e=>{var{providerId:n}=e,s=Yp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(r,e){const n=await Bw(r,{},async()=>{const s=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=Hw(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",jw.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sO(r,e){return So(r,"POST","/v2/accounts:revokeToken",Jp(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):j0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=j0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await rO(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new io;return s&&(Te(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Xm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Zl(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JN(this,e)}reload(){return nO(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Zs(this.auth));const e=await this.getIdToken();return await Zl(this,ZN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,g,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,b=(o=n.email)!==null&&o!==void 0?o:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,L=(f=n.photoURL)!==null&&f!==void 0?f:void 0,$=(m=n.tenantId)!==null&&m!==void 0?m:void 0,k=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,G=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ee=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:ce,isAnonymous:le,providerData:Ee,stsTokenManager:x}=n;Te(Z&&x,e,"internal-error");const R=io.fromJSON(this.name,x);Te(typeof Z=="string",e,"internal-error"),Yr(w,e.name),Yr(b,e.name),Te(typeof ce=="boolean",e,"internal-error"),Te(typeof le=="boolean",e,"internal-error"),Yr(N,e.name),Yr(L,e.name),Yr($,e.name),Yr(k,e.name),Yr(G,e.name),Yr(ee,e.name);const S=new rr({uid:Z,auth:e,email:b,emailVerified:ce,displayName:w,isAnonymous:le,photoURL:L,phoneNumber:N,tenantId:$,stsTokenManager:R,createdAt:G,lastLoginAt:ee});return Ee&&Array.isArray(Ee)&&(S.providerData=Ee.map(C=>Object.assign({},C))),k&&(S._redirectEventId=k),S}static async _fromIdTokenResponse(e,n,s=!1){const o=new io;o.updateFromServerResponse(n);const u=new rr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await vh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Fw(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new io;m.updateFromIdToken(s);const p=new rr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Xm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Map;function sr(r){hr(r instanceof Function,"Expected a class definition");let e=B0.get(r);return e?(hr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,B0.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gw.type="NONE";const H0=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(r,e,n){return`firebase:${r}:${e}:${n}`}class ro{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Wc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Wc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ro(sr(H0),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||sr(H0);const f=Wc(s,e.config.apiKey,e.name);let m=null;for(const g of n)try{const E=await g._get(f);if(E){const w=rr._fromJSON(e,E);g!==u&&(m=w),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ro(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new ro(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ww(e))return"Blackberry";if(Zw(e))return"Webos";if(Kw(e))return"Safari";if((e.includes("chrome/")||Qw(e))&&!e.includes("edge/"))return"Chrome";if(Xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $w(r=Xt()){return/firefox\//i.test(r)}function Kw(r=Xt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qw(r=Xt()){return/crios\//i.test(r)}function Yw(r=Xt()){return/iemobile/i.test(r)}function Xw(r=Xt()){return/android/i.test(r)}function Ww(r=Xt()){return/blackberry/i.test(r)}function Zw(r=Xt()){return/webos/i.test(r)}function tg(r=Xt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function aO(r=Xt()){var e;return tg(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oO(){return zR()&&document.documentMode===10}function Jw(r=Xt()){return tg(r)||Xw(r)||Zw(r)||Ww(r)||/windows phone/i.test(r)||Yw(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(r,e=[]){let n;switch(r){case"Browser":n=q0(Xt());break;case"Worker":n=`${q0(Xt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sa}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(r,e={}){return So(r,"GET","/v2/passwordPolicy",Jp(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=6;class hO{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:cO,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new F0(this),this.idTokenSubscription=new F0(this),this.beforeStateQueue=new lO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qw(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Zs(this));const n=e?_t(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Zs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Zs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uO(this),n=new hO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await sO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wh(r){return _t(r)}class F0{constructor(e){this.auth=e,this.observer=null,this.addObserver=$R(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dO(r){ng=r}function mO(r){return ng.loadJS(r)}function pO(){return ng.gapiScript}function gO(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(r,e){const n=ds(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ao(u,e??{}))return o;Ri(o,"already-initialized")}return n.initialize({options:e})}function _O(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vO(r,e,n){const s=Wh(r);Te(s._canInitEmulator,s,"emulator-config-failed"),Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=tA(e),{host:f,port:m}=EO(e),p=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),TO()}function tA(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function EO(r){const e=tA(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:G0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:G0(f)}}}function G0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function TO(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(r,e){return XN(r,"POST","/v1/accounts:signInWithIdp",Jp(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="http://localhost";class ia extends nA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ia(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ri("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Yp(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new ia(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return so(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,so(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,so(e,n)}buildRequest(){const e={requestUri:wO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends cu{constructor(){super("facebook.com")}static credential(e){return ia._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ia._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nr.credential(n,s)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends cu{constructor(){super("github.com")}static credential(e){return ia._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends cu{constructor(){super("twitter.com")}static credential(e,n){return ia._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zr.credential(n,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),f=$0(s);return new go({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=$0(s);return new go({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function $0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Hn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Eh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Eh(e,n,s,o)}}function iA(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Eh._fromErrorAndOperation(r,u,e,s):u})}async function AO(r,e,n=!1){const s=await Zl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return go._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(r,e,n=!1){const{auth:s}=r;if(jn(s.app))return Promise.reject(Zs(s));const o="reauthenticate";try{const u=await Zl(r,iA(s,o,e,r),n);Te(u.idToken,s,"internal-error");const f=eg(u.idToken);Te(f,s,"internal-error");const{sub:m}=f;return Te(r.uid===m,s,"user-mismatch"),go._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ri(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(r,e,n=!1){if(jn(r.app))return Promise.reject(Zs(r));const s="signIn",o=await iA(r,s,e),u=await go._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function RO(r,e,n,s){return _t(r).onIdTokenChanged(e,n,s)}function IO(r,e,n){return _t(r).beforeAuthStateChanged(e,n)}function CO(r,e,n,s){return _t(r).onAuthStateChanged(e,n,s)}function DO(r){return _t(r).signOut()}const Th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Th,"1"),this.storage.removeItem(Th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=1e3,OO=10;class sA extends rA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);oO()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,OO):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},NO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sA.type="LOCAL";const xO=sA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends rA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aA.type="SESSION";const oA=aA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Zh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async g=>g(n.origin,u)),p=await MO(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const g=rg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const b=w;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return window}function VO(r){Ai().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof Ai().WorkerGlobalScope<"u"&&typeof Ai().importScripts=="function"}async function PO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LO(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function UO(){return lA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="firebaseLocalStorageDb",zO=1,wh="firebaseLocalStorage",cA="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jh(r,e){return r.transaction([wh],e?"readwrite":"readonly").objectStore(wh)}function jO(){const r=indexedDB.deleteDatabase(uA);return new hu(r).toPromise()}function Wm(){const r=indexedDB.open(uA,zO);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(wh,{keyPath:cA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(wh)?e(s):(s.close(),await jO(),e(await Wm()))})})}async function K0(r,e,n){const s=Jh(r,!0).put({[cA]:e,value:n});return new hu(s).toPromise()}async function BO(r,e){const n=Jh(r,!1).get(e),s=await new hu(n).toPromise();return s===void 0?null:s.value}function Q0(r,e){const n=Jh(r,!0).delete(e);return new hu(n).toPromise()}const HO=800,qO=3;class hA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance(UO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PO(),!this.activeServiceWorker)return;this.sender=new kO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wm();return await K0(e,Th,"1"),await Q0(e,Th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>K0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BO(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Jh(o,!1).getAll();return new hu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hA.type="LOCAL";const FO=hA;new uu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(r,e){return e?sr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends nA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,n){return so(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GO(r){return bO(r.auth,new sg(r),r.bypassAuthState)}function $O(r){const{auth:e,user:n}=r;return Te(n,e,"internal-error"),SO(n,new sg(r),r.bypassAuthState)}async function KO(r){const{auth:e,user:n}=r;return Te(n,e,"internal-error"),AO(n,new sg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GO;case"linkViaPopup":case"linkViaRedirect":return KO;case"reauthViaPopup":case"reauthViaRedirect":return $O;default:Ri(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=new uu(2e3,1e4);async function YO(r,e,n){if(jn(r.app))return Promise.reject(Zn(r,"operation-not-supported-in-this-environment"));const s=Wh(r);FN(r,e,ig);const o=fA(s,n);return new Ws(s,"signInViaPopup",e,o).executeNotNull()}class Ws extends dA{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QO.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="pendingRedirect",Zc=new Map;class WO extends dA{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const s=await ZO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZO(r,e){const n=tx(e),s=ex(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function JO(r,e){Zc.set(r._key(),e)}function ex(r){return sr(r._redirectPersistence)}function tx(r){return Wc(XO,r.config.apiKey,r.name)}async function nx(r,e,n=!1){if(jn(r.app))return Promise.reject(Zs(r));const s=Wh(r),o=fA(s,e),f=await new WO(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=10*60*1e3;class rx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mA(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ix&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y0(e))}saveEventToCache(e){this.cachedEventUids.add(Y0(e)),this.lastProcessedEventTime=Date.now()}}function Y0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function mA({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mA(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(r,e={}){return So(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lx=/^https?/;async function ux(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ax(r);for(const n of e)try{if(cx(n))return}catch{}Ri(r,"unauthorized-domain")}function cx(r){const e=Ym(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!lx.test(n))return!1;if(ox.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new uu(3e4,6e4);function X0(){const r=Ai().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function fx(r){return new Promise((e,n)=>{var s,o,u;function f(){X0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X0(),n(Zn(r,"network-request-failed"))},timeout:hx.get()})}if(!((o=(s=Ai().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Ai().gapi)===null||u===void 0)&&u.load)f();else{const m=gO("iframefcb");return Ai()[m]=()=>{gapi.load?f():n(Zn(r,"network-request-failed"))},mO(`${pO()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw Jc=null,e})}let Jc=null;function dx(r){return Jc=Jc||fx(r),Jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new uu(5e3,15e3),px="__/auth/iframe",gx="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_x=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vx(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Zp(e,gx):`https://${r.config.authDomain}/${px}`,s={apiKey:e.apiKey,appName:r.name,v:sa},o=_x.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${nu(s).slice(1)}`}async function Ex(r){const e=await dx(r),n=Ai().gapi;return Te(n,r,"internal-error"),e.open({where:document.body,url:vx(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Zn(r,"network-request-failed"),m=Ai().setTimeout(()=>{u(f)},mx.get());function p(){Ai().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wx=500,Ax=600,Sx="_blank",bx="http://localhost";class W0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rx(r,e,n,s=wx,o=Ax){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},Tx),{width:s.toString(),height:o.toString(),top:u,left:f}),g=Xt().toLowerCase();n&&(m=Qw(g)?Sx:n),$w(g)&&(e=e||bx,p.scrollbars="yes");const E=Object.entries(p).reduce((b,[N,L])=>`${b}${N}=${L},`,"");if(aO(g)&&m!=="_self")return Ix(e||"",m),new W0(null);const w=window.open(e||"",m,E);Te(w,r,"popup-blocked");try{w.focus()}catch{}return new W0(w)}function Ix(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="__/auth/handler",Dx="emulator/auth/handler",Nx=encodeURIComponent("fac");async function Z0(r,e,n,s,o,u){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:sa,eventId:o};if(e instanceof ig){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",GR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(e instanceof cu){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),g=p?`#${Nx}=${encodeURIComponent(p)}`:"";return`${Ox(r)}?${nu(m).slice(1)}${g}`}function Ox({config:r}){return r.emulator?Zp(r,Dx):`https://${r.authDomain}/${Cx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="webStorageSupport";class xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oA,this._completeRedirectFn=nx,this._overrideRedirectResult=JO}async _openPopup(e,n,s,o){var u;hr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Z0(e,n,s,Ym(),o);return Rx(e,f,rg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Z0(e,n,s,Ym(),o);return VO(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(hr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ex(e),s=new rx(e);return n.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wm,{type:wm},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[wm];f!==void 0&&n(!!f),Ri(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jw()||Kw()||tg()}}const Mx=xx;var J0="@firebase/auth",eE="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Px(r){ei(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Te(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eA(r)},g=new fO(s,o,u,p);return _O(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ei(new Bn("auth-internal",e=>{const n=Wh(e.getProvider("auth").getImmediate());return(s=>new kx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(J0,eE,Vx(r)),cn(J0,eE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=5*60,Ux=NE("authIdTokenMaxAge")||Lx;let tE=null;const zx=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ux)return;const o=n==null?void 0:n.token;tE!==o&&(tE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function jx(r=Dh()){const e=ds(r,"auth");if(e.isInitialized())return e.getImmediate();const n=yO(r,{popupRedirectResolver:Mx,persistence:[FO,xO,oA]}),s=NE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=zx(u.toString());IO(n,f,()=>f(n.currentUser)),RO(n,m=>f(m))}}const o=IE("auth");return o&&vO(n,`http://${o}`),n}function Bx(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}dO({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",Bx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Px("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="firebasestorage.googleapis.com",Hx="storageBucket",qx=2*60*1e3,Fx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Hn{constructor(e,n,s=0){super(Am(e),`Firebase Storage: ${n} (${Am(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ci.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Am(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ii;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ii||(Ii={}));function Am(r){return"storage/"+r}function Gx(){const r="An unknown error occurred, please check the error payload for server response.";return new Ci(Ii.UNKNOWN,r)}function $x(){return new Ci(Ii.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kx(){return new Ci(Ii.CANCELED,"User canceled the upload/download.")}function Qx(r){return new Ci(Ii.INVALID_URL,"Invalid URL '"+r+"'.")}function Yx(r){return new Ci(Ii.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function nE(r){return new Ci(Ii.INVALID_ARGUMENT,r)}function gA(){return new Ci(Ii.APP_DELETED,"The Firebase app was deleted.")}function Xx(r){return new Ci(Ii.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(s.path==="")return s;throw Yx(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function g(ce){ce.path_=decodeURIComponent(ce.path)}const E="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",N=new RegExp(`^https?://${w}/${E}/b/${o}/o${b}`,"i"),L={bucket:1,path:3},$=n===pA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",G=new RegExp(`^https?://${$}/${o}/${k}`,"i"),Z=[{regex:m,indices:p,postModify:u},{regex:N,indices:L,postModify:g},{regex:G,indices:{bucket:1,path:2},postModify:g}];for(let ce=0;ce<Z.length;ce++){const le=Z[ce],Ee=le.regex.exec(e);if(Ee){const x=Ee[le.indices.bucket];let R=Ee[le.indices.path];R||(R=""),s=new Xn(x,R),le.postModify(s);break}}if(s==null)throw Qx(e);return s}}class Wx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(r,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let g=!1;function E(...k){g||(g=!0,e.apply(null,k))}function w(k){o=setTimeout(()=>{o=null,r(N,p())},k)}function b(){u&&clearTimeout(u)}function N(k,...G){if(g){b();return}if(k){b(),E.call(null,k,...G);return}if(p()||f){b(),E.call(null,k,...G);return}s<64&&(s*=2);let Z;m===1?(m=2,Z=0):Z=(s+Math.random())*1e3,w(Z)}let L=!1;function $(k){L||(L=!0,b(),!g&&(o!==null?(k||(m=2),clearTimeout(o),w(0)):k||(m=1)))}return w(0),u=setTimeout(()=>{f=!0,$(!0)},n),$}function Jx(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(r){return r!==void 0}function iE(r,e,n,s){if(s<e)throw nE(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw nE(`Invalid value for '${r}'. Expected ${n} or less.`)}function tM(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Ah;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ah||(Ah={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(r,e){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,s,o,u,f,m,p,g,E,w,b=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=w,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,L)=>{this.resolve_=N,this.reject_=L,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new jc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Ah.NO_ERROR,p=u.getStatus();if(!m||nM(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Ah.ABORT;s(!1,new jc(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new jc(g,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());eM(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=Gx();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?gA():Kx();f(p)}else{const p=$x();f(p)}};this.canceled_?n(!1,new jc(!1,null,!0)):this.backoffId_=Zx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function rM(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function sM(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aM(r,e){e&&(r["X-Firebase-GMPID"]=e)}function oM(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function lM(r,e,n,s,o,u,f=!0){const m=tM(r.urlParams),p=r.url+m,g=Object.assign({},r.headers);return aM(g,e),rM(g,n),sM(g,u),oM(g,s),new iM(p,r.method,g,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function cM(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Sh(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cM(this._location.path)}get storage(){return this._service}get parent(){const e=uM(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Sh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Xx(e)}}function rE(r,e){const n=e==null?void 0:e[Hx];return n==null?null:Xn.makeFromBucketSpec(n,r)}function hM(r,e,n,s={}){r.host=`${e}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:OE(o,r.app.options.projectId))}class fM{constructor(e,n,s,o,u){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=pA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qx,this._maxUploadRetryTime=Fx,this._requests=new Set,o!=null?this._bucket=Xn.makeFromBucketSpec(o,this._host):this._bucket=rE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=rE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sh(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new Wx(gA());{const f=lM(e,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const sE="@firebase/storage",aE="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="storage";function dM(r=Dh(),e){r=_t(r);const s=ds(r,yA).getImmediate({identifier:e}),o=CE("storage");return o&&mM(s,...o),s}function mM(r,e,n,s={}){hM(r,e,n,s)}function pM(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new fM(n,s,o,e,sa)}function gM(){ei(new Bn(yA,pM,"PUBLIC").setMultipleInstances(!0)),cn(sE,aE,""),cn(sE,aE,"esm2017")}gM();const yM={apiKey:"AIzaSyDr1lSZCJXQTioifanFS5SdWv7Vr0BdBUE",authDomain:"whatsapp-clone-c2c79.firebaseapp.com",projectId:"whatsapp-clone-c2c79",storageBucket:"whatsapp-clone-c2c79.appspot.com",messagingSenderId:"788900349183",appId:"1:788900349183:web:87150ec7e76790dfea38ca",measurementId:"G-6S0WFNT5C0"},ef=UE(yM);UN(ef);const ag=jx(ef),Yn=iD(ef);dM(ef);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_A=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=F.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},p)=>F.createElement("svg",{ref:p,...vM,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:_A("lucide",o),...m},[...f.map(([g,E])=>F.createElement(g,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=(r,e)=>{const n=F.forwardRef(({className:s,...o},u)=>F.createElement(EM,{ref:u,iconNode:e,className:_A(`lucide-${_M(r)}`,s),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],wM=wn("ArrowLeft",TM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oE=wn("Check",AM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],bM=wn("CircleFadingPlus",SM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],IM=wn("EllipsisVertical",RM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],DM=wn("Fingerprint",CM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],vA=wn("LoaderCircle",NM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],xM=wn("LogIn",OM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],kM=wn("MessageSquareText",MM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],PM=wn("MessageSquare",VM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],UM=wn("Plus",LM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],jM=wn("Search",zM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],HM=wn("Send",BM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],FM=wn("UserRound",qM),EA=nb.createContext();function tf(){return F.useContext(EA)}function GM({children:r}){const[e,n]=F.useState(null),[s,o]=F.useState(!0),[u,f]=F.useState("");F.useEffect(()=>{const E=CO(ag,async w=>{if(o(!0),w){const b=Ei(Yn,"users",w==null?void 0:w.uid),N=await Km(b);if(N.exists()){const{profile_pic:L,name:$,email:k,lastSeen:G,status:ee}=N.data();await m(w),n({id:w.uid,profile_pic:L,email:k,name:$,lastSeen:G,status:ee||""})}}o(!1)});return()=>{E()}},[]);const m=async E=>{const b=new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0,day:"2-digit",month:"short"});await Yc(Ei(Yn,"users",E.uid),{lastSeen:b})},p=async E=>{try{await Yc(Ei(Yn,"users",e.id),{name:E}),n(w=>({...w,name:E}))}catch(w){f(w.message)}},g=async E=>{try{await Yc(Ei(Yn,"users",e.id),{status:E}),n(w=>({...w,status:E}))}catch(w){f(w.message)}};return W.jsx(EA.Provider,{value:{setUserData:n,userData:e,loading:s,updateName:p,updateStatus:g,error:u},children:r})}function $M(r){const e=eu(),{userData:n,updateName:s,updateStatus:o,error:u}=tf(),[f,m]=F.useState((n==null?void 0:n.name)||""),[p,g]=F.useState((n==null?void 0:n.status)||"");F.useEffect(()=>{m((n==null?void 0:n.name)||""),g((n==null?void 0:n.status)||"")},[n]);const E=()=>{DO(ag),e("/login")};return W.jsxs("div",{className:"bg-[#eff2f5] w-full sm:w-11/12 md:w-1/2 lg:w-1/3 min-w-0 h-full ",children:[W.jsxs("div",{className:"bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6",children:[W.jsx("button",{onClick:r.onBack,children:W.jsx(wM,{})}),W.jsx("div",{children:"profile"})]}),W.jsxs("div",{className:"flex flex-col items-center justify-center gap-8 mt-4 py-16 w-full",children:[W.jsx("div",{className:"rounded-full overflow-hidden w-[160px] h-[160px]",children:W.jsx("img",{src:(n==null?void 0:n.profile_pic)||"/default-user.png",alt:"profile-picture",className:"w-[160px] h-[160px] object-cover rounded-full"})}),u&&W.jsx("p",{className:"text-red-500",children:u}),W.jsxs("div",{className:"flex flex-col bg-white w-full py-4 px-8",children:[W.jsx("label",{className:"text-sm text-[#008069] mb-2",children:"Your name"}),W.jsxs("div",{className:"flex items-center w-full",children:[W.jsx("input",{value:f,className:"w-full bg-transparent",placeholder:"Update your name...",onChange:w=>{m(w.target.value)}}),W.jsx("button",{onClick:()=>s(f),children:W.jsx(oE,{className:"w-5 h-5"})})]})]}),W.jsxs("div",{className:"flex flex-col bg-white w-full py-4 px-8",children:[W.jsx("label",{className:"text-sm text-[#008069] mb-2",children:"Status"}),W.jsxs("div",{className:"flex items-center w-full",children:[W.jsx("input",{value:p,className:"w-full bg-transparent",placeholder:"Update your status...",onChange:w=>{g(w.target.value)}}),W.jsx("button",{onClick:()=>o(p),children:W.jsx(oE,{className:"w-5 h-5"})})]})]}),W.jsx("button",{onClick:E,className:"text-white px-4 py-3 rounded bg-[#04a784] hover:bg-[#008069] mt-6 sm:mt-4 md:mt-2 transform -translate-y-2 sm:-translate-y-3 w-full sm:w-auto max-w-xs mx-auto transition",children:"Logout"})]})]})}function KM(r){const{userObject:e}=r,n=yE(),s=(n==null?void 0:n.chatid)===e.id;return W.jsx("div",{children:W.jsxs(ap,{className:`flex gap-4 items-center hover:bg-[#eff2f5] p-2 rounded cursor-pointer ${s&&"bg-[#eff2f5]"}`,to:`/${e.id}`,children:[W.jsx("img",{src:e.userData.profile_pic,alt:"",className:" h-12 w-12 object-cover rounded-full"}),W.jsx("h2",{children:e.userData.name})]})},e.id)}function QM(){const[r,e]=F.useState([]),[n,s]=F.useState(!0),[o,u]=F.useState(!1),[f,m]=F.useState(""),{userData:p}=tf();F.useEffect(()=>{(async()=>{const N=(await yD(nD(Yn,"users"))).docs.map(L=>({userData:L.data(),id:L.id}));console.log("18",N),e(N),s(!1)})()},[]);let g=r;f&&(g=r.filter(w=>{var b,N;return(N=(b=w.userData.name)==null?void 0:b.toLowerCase())==null?void 0:N.includes(f==null?void 0:f.toLowerCase())}));const E=()=>{u(!1)};return o==!0?W.jsx($M,{onBack:E}):W.jsxs("div",{className:"bg-white w-full md:w-1/3 lg:w-1/4 max-w-[380px]",children:[W.jsxs("div",{className:"bg-[#eff2f5] py-2 px-4 border-r  flex justify-between items-center gap-2",children:[W.jsx("button",{onClick:()=>{u(!0)},children:W.jsx("img",{src:p.profile_pic||"/default-user.png",className:"w-10 h-10 rounded-full object-cover"})}),W.jsxs("div",{className:"flex items-end justify-center gap-6 mx-4",children:[W.jsx(bM,{className:"w-6 h-6"}),W.jsx(PM,{className:"w-6 h-6"}),W.jsx(FM,{className:"w-6 h-6"})]})]}),n?W.jsxs("div",{className:"h-full w-full flex justify-center items-center",children:[W.jsx(vA,{className:"w-10 h-10 animate-spin"})," "]}):W.jsxs("div",{className:"bg-white py-2 px-3",children:[W.jsxs("div",{className:"bg-[#eff2f5] flex items-center gap-4 px-3 py-2 rounded-lg",children:[W.jsx(jM,{className:"w-4 h-4"}),W.jsx("input",{className:"bg-[#eff2f5] focus-within:outline-none",placeholder:"Search",value:f,onChange:w=>m(w.target.value)})]}),W.jsx("div",{className:"py-4 divide-y h-full max-h-[calc(100vh-152px)] overflow-y-scroll",children:g.map(w=>W.jsx(KM,{userObject:w},w.id))})]})]})}function YM(){const r=yE(),[e,n]=F.useState(),[s,o]=F.useState(""),u=r.chatid,[f,m]=F.useState([]),[p,g]=F.useState(!1),{userData:E}=tf(),w=E!=null&&E.id&&u?E.id>u?`${E.id}-${u}`:`${u}-${E.id}`:null,b=F.useRef(null);F.useEffect(()=>{if(!u)return;const k=async()=>{try{const ee=Ei(Yn,"users",u),Z=await Km(ee);Z.exists()&&n(Z.data())}catch(ee){console.error("Error fetching user:",ee)}};let G=()=>{};if(w)try{G=vD(Ei(Yn,"user-chats",w),ee=>{var Z;m(((Z=ee.data())==null?void 0:Z.messages)||[])})}catch(ee){console.error("Error subscribing to messages:",ee)}return k(),()=>{try{G&&G()}catch{}}},[u,E==null?void 0:E.id,w]);const N=async()=>{if(!w){console.error("Chat ID is undefined");return}try{const k=Ei(Yn,"user-chats",w);if(!(await Km(k)).exists()){console.log("Chat does not exist"),g(!1);return}await _D(k),g(!1),setTimeout(()=>L("/"),200),console.log("Chat successfully deleted")}catch(k){console.error("Error deleting chat:",k)}},L=eu();F.useEffect(()=>{const k=()=>{L("/")};return window.addEventListener("popstate",k),()=>{window.removeEventListener("popstate",k)}},[]);const $=async()=>{if(s){const G=new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});(f==null?void 0:f.length)===0?await mw(Ei(Yn,"user-chats",w),{chatId:w,messages:[{text:s,time:G,sender:E.id,receiver:u}]}):(console.log(s,G,E.id,"seocndUser",e),await Yc(Ei(Yn,"user-chats",w),{chatId:w,messages:ED({text:s,time:G,sender:E.id,receiver:u})})),o("")}};return u?W.jsx("section",{className:"flex-1 h-full flex flex-col gap-4 items-center justify-center",children:W.jsxs("div",{className:"h-full w-full  bg-[#F2EFE9] flex flex-col",children:[W.jsxs("div",{className:"bg-[#eff2f5] py-2 px-4 flex items-center gap-2 shadow-sm",children:[W.jsx("img",{src:(e==null?void 0:e.profile_pic)||"/default-user.png",alt:"profile picture",className:"w-9 h-9 rounded-full object-cover"}),W.jsxs("div",{children:[W.jsx("h3",{children:e==null?void 0:e.name}),(e==null?void 0:e.lastSeen)&&W.jsxs("p",{className:"text-xs text-neutral-400",children:["last seen at ",e==null?void 0:e.lastSeen]})]}),W.jsxs("div",{className:"ml-auto cursor-pointer relative",children:[W.jsx(IM,{className:"text-gray-600",size:20,onClick:k=>{k.stopPropagation(),g(!p)}}),p&&W.jsx("div",{ref:b,className:"absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10",children:W.jsx("button",{onClick:N,className:"text-red-600 hover:bg-gray-100 w-full text-left py-2 px-4 rounded-md transition-all duration-200",children:"Delete Chat"})})]})]}),W.jsx("div",{className:"flex-grow flex flex-col gap-12 p-6 overflow-y-scroll",children:f==null?void 0:f.map((k,G)=>W.jsxs("div",{"data-sender":k.sender===E.id,className:"bg-white  w-fit rounded-md p-2 shadow-sm max-w-[400px] break-words data-[sender=true]:ml-auto data-[sender=true]:bg-[#D9FDD2] ",children:[W.jsx("p",{children:k==null?void 0:k.text}),W.jsx("p",{className:"text-xs text-neutral-500  text-end",children:k==null?void 0:k.time})]},G))}),W.jsxs("div",{className:"bg-[#eff2f5] py-3 px-6 shadow flex items-center gap-6",children:[W.jsx(UM,{}),W.jsx("input",{value:s,onChange:k=>{o(k.target.value)},onKeyDown:k=>{k.key==="Enter"&&$()},className:"w-full py-2 px-4 rounded  focus:outline-none",placeholder:"Type a message..."}),W.jsx("button",{onClick:$,children:W.jsx(HM,{})})]})]})}):W.jsxs("section",{className:"flex-1 h-full flex flex-col gap-4 items-center justify-center px-4",children:[W.jsx(kM,{className:"w-28 h-28 text-gray-400",strokeWidth:1.2}),W.jsxs("p",{className:"text-sm text-center text-gray-400",children:["select any contact to",W.jsx("br",{}),"start a chat with."]})]})}function lE(){return W.jsxs("main",{className:" relative w-full h-screen bg-[#E3E1DB]",children:[W.jsx("div",{className:"absolute top-0 h-[130px] bg-[#04a784] w-full"}),W.jsx("div",{className:"h-screen absolute w-full p-5 top-0",children:W.jsxs("div",{className:"bg-[#eff2f5] w-full h-full shadow-md flex",children:[W.jsx(QM,{}),W.jsx(YM,{})]})})]})}async function XM(r){const e=r.user,{uid:n,photoURL:s,displayName:o,email:u}=e,m=new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});await mw(Ei(Yn,"users",n),{email:u,profile_pic:s,name:o,lastSeen:m})}function WM(){const r=eu(),e=async()=>{const n=await YO(ag,new nr);await XM(n),r("/")};return W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"h-[200px] bg-[#04a784]",children:W.jsxs("div",{className:"flex ml-[200px] pt-10 items-center gap-4",children:[W.jsx("img",{src:"/WP-Project/whatsapp.svg",alt:"WhatsApp Logo",className:"h-8"}),W.jsx("div",{className:"text-white uppercase font-medium",children:"WhatsApp"})]})}),W.jsx("div",{className:"h-[calc(100vh-200px)] bg-[#eff2f5] flex justify-center items-center relative",children:W.jsxs("div",{className:"h-[80%] w-full max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col gap-4 justify-center items-center mx-auto absolute left-0 right-0 -top-[60px]",children:[W.jsx(DM,{className:"h-20 w-20 text-[#04a784]",strokeWidth:1}),W.jsx("div",{className:"text-2xl font-medium mb-2",children:"Sign In"}),W.jsxs("div",{className:"text-xs font-light text-slate-500 text-center",children:["Sign in with your google account",W.jsx("br",{}),"to get started."]}),W.jsxs("button",{className:"flex gap-2 items-center bg-[#04a784] p-4 text-white rounded-[5px]",onClick:e,children:[W.jsx("div",{children:"Sign in with Google"}),W.jsx(xM,{})]})]})})]})}function ZM(){return W.jsx("div",{children:"PageNotFound"})}function uE(r){const{userData:e,loading:n}=tf();if(n)return W.jsx("div",{className:"w-screen h-screen flex items-center justify-center bg-[#eff2f5]",children:W.jsx(vA,{className:"w-8 h-8 animate-spin"})});const s=r.children;return e?s:W.jsx(Gb,{to:"/login"})}function JM(){return W.jsx(W.Fragment,{children:W.jsxs(Kb,{children:[W.jsx(kl,{path:"/",element:W.jsx(uE,{children:W.jsx(lE,{})})}),W.jsx(kl,{path:"/:chatid",element:W.jsx(uE,{children:W.jsx(lE,{})})}),W.jsx(kl,{path:"/login",element:W.jsx(WM,{})}),W.jsx(kl,{path:"*",element:W.jsx(ZM,{})})]})})}tb.createRoot(document.getElementById("root")).render(W.jsx(GM,{children:W.jsx(yR,{children:W.jsx(JM,{})})}));
