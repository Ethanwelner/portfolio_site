var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function T(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function fe(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,de)}catch(e){de(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function pe(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fe(pe.bind(null,e))}var me={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=me,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=pe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=fe,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.1`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return l(e,t,null,n)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),i=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=r()})),a=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function oe(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),o=e(((e,t)=>{t.exports=a()})),s=e((e=>{var t=o(),r=n(),a=i();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),ae=Symbol.for(`react.portal`),oe=Symbol.for(`react.fragment`),se=Symbol.for(`react.strict_mode`),ce=Symbol.for(`react.profiler`),le=Symbol.for(`react.consumer`),T=Symbol.for(`react.context`),ue=Symbol.for(`react.forward_ref`),de=Symbol.for(`react.suspense`),fe=Symbol.for(`react.suspense_list`),pe=Symbol.for(`react.memo`),me=Symbol.for(`react.lazy`),he=Symbol.for(`react.activity`),ge=Symbol.for(`react.legacy_hidden`),_e=Symbol.for(`react.memo_cache_sentinel`),ve=Symbol.for(`react.view_transition`),ye=Symbol.for(`react.recoverable`),be=Symbol.iterator;function xe(e){return typeof e!=`object`||!e?null:(e=be&&e[be]||e[`@@iterator`],typeof e==`function`?e:null)}var Se=Symbol.for(`react.client.reference`);function Ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case oe:return`Fragment`;case ce:return`Profiler`;case se:return`StrictMode`;case de:return`Suspense`;case fe:return`SuspenseList`;case he:return`Activity`;case ve:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ae:return`Portal`;case T:return e.displayName||`Context`;case le:return(e._context.displayName||`Context`)+`.Consumer`;case ue:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case pe:return t=e.displayName||null,t===null?Ce(e.type)||`Memo`:t;case me:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var we=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ee=[],De=-1;function Oe(e){return{current:e}}function ke(e){0>De||(e.current=Ee[De],Ee[De]=null,De--)}function O(e,t){De++,Ee[De]=e.current,e.current=t}var Ae=Oe(null),je=Oe(null),Me=Oe(null),Ne=Oe(null);function Pe(e,t){switch(O(Me,t),O(je,e),O(Ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pp(t),e=mp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ke(Ae),O(Ae,e)}function Fe(){ke(Ae),ke(je),ke(Me)}function Ie(e){var t=e.memoizedState;t!==null&&(uh._currentValue=t.memoizedState,O(Ne,e)),t=Ae.current;var n=mp(t,e.type);t!==n&&(O(je,e),O(Ae,n))}function Le(e){je.current===e&&(ke(Ae),ke(je)),Ne.current===e&&(ke(Ne),uh._currentValue=Te)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var k=!1;function Ve(e,t){if(!e||k)return``;k=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{k=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function He(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function Ue(e){try{var t=``,n=null;do t+=He(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var We=Object.prototype.hasOwnProperty,Ge=t.unstable_scheduleCallback,Ke=t.unstable_cancelCallback,qe=t.unstable_shouldYield,A=t.unstable_requestPaint,Je=t.unstable_now,Ye=t.unstable_getCurrentPriorityLevel,Xe=t.unstable_ImmediatePriority,Ze=t.unstable_UserBlockingPriority,Qe=t.unstable_NormalPriority,$e=t.unstable_LowPriority,et=t.unstable_IdlePriority,tt=t.log,nt=t.unstable_setDisableYieldValue,rt=null,it=null;function at(e){if(typeof tt==`function`&&nt(e),it&&typeof it.setStrictMode==`function`)try{it.setStrictMode(rt,e)}catch{}}var ot=Math.clz32?Math.clz32:lt,st=Math.log,ct=Math.LN2;function lt(e){return e>>>=0,e===0?32:31-(st(e)/ct|0)|0}var ut=256,dt=262144,ft=4194304;function pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=pt(n))):i=pt(o):i=pt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=pt(n))):i=pt(o)):i=pt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ht(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ot(n),i=1<<r;t|=e[r],n&=~i}return t}function _t(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=ft;return ft<<=1,!(ft&62914560)&&(ft=4194304),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ot(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&St(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function St(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ot(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function wt(e,t){var n=t&-t;return n=n&42?1:Tt(n),(n&(e.suspendedLanes|t))===0?n:0}function Tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Eh(e.type)):e}function Ot(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var kt=Math.random().toString(36).slice(2),At=`__reactFiber$`+kt,jt=`__reactProps$`+kt,Mt=`__reactContainer$`+kt,Nt=`__reactEvents$`+kt,Pt=`__reactListeners$`+kt,Ft=`__reactHandles$`+kt,It=`__reactResources$`+kt,Lt=`__reactMarker$`+kt,Rt=`__reactLoad$`+kt;function zt(e){delete e[At],delete e[jt],delete e[Pt],delete e[Ft]}function Bt(e){var t;if(t=e[At])return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[At])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function Vt(e){if(e=e[At]||e[Mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ut(e){var t=e[It];return t||=e[It]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Wt(e){e[Lt]=!0}function Gt(e){e[Rt]=void 0}var Kt=new Set,qt={};function Jt(e,t){Yt(e,t),Yt(e+`Capture`,t)}function Yt(e,t){for(qt[e]=t,e=0;e<t.length;e++)Kt.add(t[e])}var Xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Zt={},Qt={};function $t(e){return We.call(Qt,e)?!0:We.call(Zt,e)?!1:Xt.test(e)?Qt[e]=!0:(Zt[e]=!0,!1)}var j=!1;function en(){var e=j;return j=!1,e}function tn(e,t,n){if($t(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function nn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function rn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function an(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function on(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function sn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cn(e){if(!e._valueTracker){var t=on(e)?`checked`:`value`;e._valueTracker=sn(e,t,``+e[t])}}function ln(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=on(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var un=/[\n"\\]/g;function dn(e){return e.replace(un,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function fn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+an(t)):e.value!==``+an(t)&&(e.value=``+an(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):mn(e,an(n)):o===`number`&&e.value==t?mn(e,an(e.value)):mn(e,an(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+an(s):e.removeAttribute(`name`)}function pn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){cn(e);return}n=n==null?``:``+an(n),t=t==null?n:``+an(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),cn(e)}function mn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gn(e,t,n){t!=null&&(t=``+an(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+an(n)}function _n(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=an(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),cn(e)}function vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function bn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||yn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function xn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,j=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(bn(e,i,r),j=!0)}else for(var a in t)t.hasOwnProperty(a)&&bn(e,a,t[a])}function Sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),wn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tn(e){return wn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function En(){}var Dn=null;function On(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,M=null;function An(e){var t=Vt(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(fn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+dn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[jt]||null;if(!i)throw Error(s(90));fn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&ln(r)}break a;case`textarea`:gn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}}}var jn=!1;function Mn(e,t,n){if(jn)return e(t,n);jn=!0;try{return e(t)}finally{if(jn=!1,(kn!==null||M!==null)&&(Hd(),kn&&(t=kn,e=M,M=kn=null,An(t),e)))for(t=0;t<e.length;t++)An(e[t])}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[jt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Fn=!1;if(Pn)try{var In={};Object.defineProperty(In,"passive",{get:function(){Fn=!0}}),window.addEventListener(`test`,In,In),window.removeEventListener(`test`,In,In)}catch{Fn=!1}var Ln=null,Rn=null,zn=null;function Bn(){if(zn)return zn;var e,t=Rn,n=t.length,r,i=`value`in Ln?Ln.value:Ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return zn=i.slice(e,1<r?1-r:void 0)}function Vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Un(){return!1}function Wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Hn:Un,this.isPropagationStopped=Un,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=Wn(Gn),qn=w({},Gn,{view:0,detail:0}),Jn=Wn(qn),Yn,Xn,Zn,Qn=w({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Zn&&(Zn&&e.type===`mousemove`?(Yn=e.screenX-Zn.screenX,Xn=e.screenY-Zn.screenY):Xn=Yn=0,Zn=e),Yn)},movementY:function(e){return`movementY`in e?e.movementY:Xn}}),$n=Wn(Qn),er=Wn(w({},Qn,{dataTransfer:0})),tr=Wn(w({},qn,{relatedTarget:0})),nr=Wn(w({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0})),rr=Wn(w({},Gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),ir=Wn(w({},Gn,{data:0})),ar={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},or={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},sr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function cr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sr[e])?!!t[e]:!1}function lr(){return cr}var ur=Wn(w({},qn,{key:function(e){if(e.key){var t=ar[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?or[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type===`keypress`?Vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),dr=Wn(w({},Qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),fr=Wn(w({},Gn,{submitter:0})),pr=Wn(w({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr})),mr=Wn(w({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),hr=Wn(w({},Qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),gr=Wn(w({},Gn,{newState:0,oldState:0,source:0})),_r=[9,13,27,32],vr=Pn&&`CompositionEvent`in window,yr=null;Pn&&`documentMode`in document&&(yr=document.documentMode);var br=Pn&&`TextEvent`in window&&!yr,xr=Pn&&(!vr||yr&&8<yr&&11>=yr),Sr=` `,Cr=!1;function wr(e,t){switch(e){case`keyup`:return _r.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Er=!1;function Dr(e,t){switch(e){case`compositionend`:return Tr(t);case`keypress`:return t.which===32?(Cr=!0,Sr):null;case`textInput`:return e=t.data,e===Sr&&Cr?null:e;default:return null}}function Or(e,t){if(Er)return e===`compositionend`||!vr&&wr(e,t)?(e=Bn(),zn=Rn=Ln=null,Er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return xr&&t.locale!==`ko`?null:t.data;default:return null}}var kr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!kr[e.type]:t===`textarea`}function jr(e,t,n,r){kn?M?M.push(r):M=[r]:kn=r,t=Zf(t,`onChange`),0<t.length&&(n=new Kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Nr=null;function Pr(e){Wf(e,0)}function Fr(e){if(ln(Ht(e)))return e}function Ir(e,t){if(e===`change`)return t}var Lr=!1;if(Pn){var Rr;if(Pn){var zr=`oninput`in document;if(!zr){var Br=document.createElement(`div`);Br.setAttribute(`oninput`,`return;`),zr=typeof Br.oninput==`function`}Rr=zr}else Rr=!1;Lr=Rr&&(!document.documentMode||9<document.documentMode)}function Vr(){Mr&&(Mr.detachEvent(`onpropertychange`,Hr),Nr=Mr=null)}function Hr(e){if(e.propertyName===`value`&&Fr(Nr)){var t=[];jr(t,Nr,e,On(e)),Mn(Pr,t)}}function Ur(e,t,n){e===`focusin`?(Vr(),Mr=t,Nr=n,Mr.attachEvent(`onpropertychange`,Hr)):e===`focusout`&&Vr()}function Wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Fr(Nr)}function Gr(e,t){if(e===`click`)return Fr(t)}function Kr(e,t){if(e===`input`||e===`change`)return Fr(t)}function qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Jr=typeof Object.is==`function`?Object.is:qr;function Yr(e,t){if(Jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!We.call(t,i)||!Jr(e[i],t[i]))return!1}return!0}function Xr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,t){var n=Zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Zr(n)}}function $r(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$r(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ei(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ni=Pn&&`documentMode`in document&&11>=document.documentMode,ri=null,ii=null,ai=null,oi=!1;function si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oi||ri==null||ri!==Xr(r)||(r=ri,`selectionStart`in r&&ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Yr(ai,r)||(ai=r,r=Zf(ii,`onSelect`),0<r.length&&(t=new Kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ri)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var li={animationend:ci(`Animation`,`AnimationEnd`),animationiteration:ci(`Animation`,`AnimationIteration`),animationstart:ci(`Animation`,`AnimationStart`),transitionrun:ci(`Transition`,`TransitionRun`),transitionstart:ci(`Transition`,`TransitionStart`),transitioncancel:ci(`Transition`,`TransitionCancel`),transitionend:ci(`Transition`,`TransitionEnd`)},ui={},di={};Pn&&(di=document.createElement(`div`).style,`AnimationEvent`in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),`TransitionEvent`in window||delete li.transitionend.transition);function fi(e){if(ui[e])return ui[e];if(!li[e])return e;var t=li[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in di)return ui[e]=t[n];return e}var pi=fi(`animationend`),mi=fi(`animationiteration`),hi=fi(`animationstart`),gi=fi(`transitionrun`),_i=fi(`transitionstart`),vi=fi(`transitioncancel`),yi=fi(`transitionend`),bi=new Map,xi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);xi.push(`scrollEnd`);function Si(e,t){bi.set(e,t),Jt(t,[e])}var Ci=0;function wi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=Cd.identifierPrefix;var n=Ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ti(e){if(e==null||typeof e==`string`)return e;var t=null,n=jd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ei(e,t){return e=Ti(e),t=Ti(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Di=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Oi=[],ki=0,Ai=0;function ji(){for(var e=ki,t=Ai=ki=0;t<e;){var n=Oi[t];Oi[t++]=null;var r=Oi[t];Oi[t++]=null;var i=Oi[t];Oi[t++]=null;var a=Oi[t];if(Oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Fi(n,i,a)}}function Mi(e,t,n,r){Oi[ki++]=e,Oi[ki++]=t,Oi[ki++]=n,Oi[ki++]=r,Ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ni(e,t,n,r){return Mi(e,t,n,r),Ii(e)}function Pi(e,t){return Mi(e,null,null,t),Ii(e)}function Fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ot(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ii(e){if(50<Md)throw Md=0,Nd=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Li={};function Ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,t,n,r){return new Ri(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,t){var n=e.alternate;return n===null?(n=zi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,r,i,a){var o=0;if(r=e,typeof r==`function`)Bi(r)&&(o=1);else if(typeof r==`string`)o=Xm(e,n,Ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case he:return e=zi(31,n,t,i),e.elementType=he,e.lanes=a,e;case oe:return Wi(n.children,i,a,t);case se:o=8,i|=24;break;case ce:return e=zi(12,n,t,i|2),e.elementType=ce,e.lanes=a,e;case de:return e=zi(13,n,t,i),e.elementType=de,e.lanes=a,e;case fe:return e=zi(19,n,t,i),e.elementType=fe,e.lanes=a,e;case ge:case ve:return e=i|32,e=zi(30,n,t,e),e.elementType=ve,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case T:o=10;break a;case le:o=9;break a;case ue:o=11;break a;case pe:o=14;break a;case me:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=zi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Wi(e,t,n,r){return e=zi(7,e,r,t),e.lanes=n,e}function Gi(e,t,n){return e=zi(6,e,null,t),e.lanes=n,e}function Ki(e){var t=zi(18,null,null,0);return t.stateNode=e,t}function qi(e,t,n){return t=zi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ji=new WeakMap;function Yi(e,t){if(typeof e==`object`&&e){var n=Ji.get(e);return n===void 0?(t={value:e,source:t,stack:Ue(t)},Ji.set(e,t),t):n}return{value:e,source:t,stack:Ue(t)}}var Xi=[],Zi=0,Qi=null,$i=0,ea=[],ta=0,na=null,ra=1,ia=``;function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=Qi,Qi=e,$i=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,na=e;var r=ra;e=ia;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ra=1<<32-ot(t)+i|n<<i|r,ia=a+e}else ra=1<<a|n<<i|r,ia=e}function sa(e){e.return!==null&&(aa(e,1),oa(e,1,0))}function ca(e){for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,ia=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function la(e,t){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,ra=t.id,ia=t.overflow,na=e}var ua=null,N=null,P=!1,da=null,fa=!1,pa=Error(s(519));function ma(e){throw ba(Yi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),pa}function ha(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[At]=e,t[jt]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<Hf.length;n++)Y(Hf[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),pn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),_n(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||rp(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=En),t=!0):t=!1,t||ma(e,!0)}function ga(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:ua=ua.return}}function _a(e){if(e!==ua)return!1;if(!P)return ga(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||gp(e.type,e.memoizedProps)),n=!n),n&&N&&ma(e),ga(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));N=mm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));N=mm(e)}else t===27?(t=N,Tp(e.type)?(e=pm,pm=null,N=e):N=t):N=ua?fm(e.stateNode.nextSibling):null;return!0}function va(){N=ua=null,P=!1}function ya(){var e=da;return e!==null&&(hd===null?hd=e:hd.push.apply(hd,e),da=null),e}function ba(e){da===null?da=[e]:da.push(e)}var xa=Oe(null),Sa=null,Ca=null;function wa(e,t,n){O(xa,t._currentValue),t._currentValue=n}function Ta(e){e._currentValue=xa.current,ke(xa)}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Da(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ea(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ea(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Ea(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===Ne.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[uh]:e.push(uh))}i=i.return}return e!==null&&Da(t,e,n,r),t.flags|=262144,e!==null}function ka(e){for(e=e.firstContext;e!==null;){if(!Jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Sa=e,Ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ja(e){return Na(Sa,e)}function Ma(e,t){return Sa===null&&Aa(e),Na(e,t)}function Na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ca===null){if(e===null)throw Error(s(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Fa=t.unstable_scheduleCallback,Ia=t.unstable_NormalPriority,F={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function La(){return{controller:new Pa,data:new Map,refCount:0}}function Ra(e){e.refCount--,e.refCount===0&&Fa(Ia,function(){e.controller.abort()})}function za(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ba=null;function Va(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ha=null,Ua=0,Wa=0,Ga=null;function Ka(e,t){if(Ha===null){var n=Ha=[];Ua=0,Wa=Lf(),Ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ua++,t.then(qa,qa),t}function qa(){if(--Ua===0&&(Ba=null,Ha!==null)){Ga!==null&&(Ga.status=`fulfilled`);var e=Ha;Ha=null,Wa=0,Ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ja(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ya=E.S;E.S=function(e,t){if(vd=Je(),typeof t==`object`&&t&&typeof t.then==`function`&&Ka(e,t),Ba!==null)for(var n=Cf;n!==null;)za(n,Ba),n=n.next;if(n=e.types,n!==null){for(var r=Cf;r!==null;)za(r,n),r=r.next;if(Wa!==0){r=Ba,r===null&&(r=Ba=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ya!==null&&Ya(e,t)};var Xa=Oe(null);function Za(){var e=Xa.current;return e===null?W.pooledCache:e}function Qa(e,t){t===null?O(Xa,Xa.current):O(Xa,t.pool)}function $a(){var e=Za();return e===null?null:{parent:F._currentValue,pool:e}}var eo=Error(s(460)),to=Error(s(474)),no=Error(s(542)),ro={then:function(){}};function io(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ao(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(En,En),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,lo(e),e===void 0&&!(`reason`in t)?Error(s(600)):e;default:if(typeof t.status==`string`)t.then(En,En);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,lo(e),e}throw so=t,eo}}function oo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(so=e,eo):e}}var so=null;function co(){if(so===null)throw Error(s(459));var e=so;return so=null,e}function lo(e){if(e===eo||e===no)throw Error(s(483))}var uo=null,fo=0;function po(e){var t=fo;return fo+=1,uo===null&&(uo=[]),ao(uo,e,t)}function mo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ho(e,t){throw t.$$typeof===re?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function go(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Gi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===oe?(e=d(e,t,n.props.children,r,n.key),mo(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===me&&oo(a)===t.type)?(t=i(t,n.props),mo(t,n),t.return=e,t):(t=Ui(n.type,n.key,n.props,null,e.mode,r),mo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=qi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Wi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=Ui(t.type,t.key,t.props,null,e.mode,n),mo(n,t),n.return=e,n;case ae:return t=qi(t,e.mode,n),t.return=e,t;case me:return t=oo(t),f(e,t,n)}if(we(t)||xe(t))return t=Wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,po(t),n);if(t.$$typeof===T)return f(e,Ma(e,t),n);ho(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case ae:return n.key===i?u(e,t,n,r):null;case me:return n=oo(n),p(e,t,n,r)}if(we(n)||xe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,po(n),r);if(n.$$typeof===T)return p(e,t,Ma(e,n),r);ho(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ae:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case me:return r=oo(r),m(e,t,n,r,i)}if(we(r)||xe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,po(r),i);if(r.$$typeof===T)return m(e,t,n,Ma(t,r),i);ho(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&aa(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return P&&aa(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&aa(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),P&&aa(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return P&&aa(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),P&&aa(i,g),u}function _(e,r,a,c){if(typeof a==`object`&&a&&a.type===oe&&a.key===null&&a.props.ref===void 0&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case ie:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===oe){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),mo(c,a),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===me&&oo(l)===r.type){n(e,r.sibling),c=i(r,a.props),mo(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===oe?(c=Wi(a.props.children,e.mode,c,a.key),mo(c,a),c.return=e,e=c):(c=Ui(a.type,a.key,a.props,null,e.mode,c),mo(c,a),c.return=e,e=c)}return o(e);case ae:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=qi(a,e.mode,c),c.return=e,e=c}return o(e);case me:return a=oo(a),_(e,r,a,c)}if(we(a))return h(e,r,a,c);if(xe(a)){if(l=xe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return _(e,r,po(a),c);if(a.$$typeof===T)return _(e,r,Ma(e,a),c);ho(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Gi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{fo=0;var i=_(e,t,n,r);return uo=null,i}catch(t){if(t===eo||t===no)throw t;var a=zi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var _o=go(!0),vo=go(!1),yo=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function So(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ii(e),Fi(e,null,n),t}return Mi(e,r,t,n),Ii(e)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}function To(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Eo=!1;function Do(){if(Eo){var e=Ga;if(e!==null)throw e}}function Oo(e,t,n,r){Eo=!1;var i=e.updateQueue;yo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===Wa&&(Eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:yo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ld|=o,e.lanes=o,e.memoizedState=d}}function ko(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Ao(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ko(n[e],t)}var jo=Oe(null),Mo=Oe(0);function No(e,t){e=sd,O(Mo,e),O(jo,t),sd=e|t.baseLanes}function Po(){O(Mo,sd),O(jo,jo.current)}function Fo(){sd=Mo.current,ke(jo),ke(Mo)}var Io=Oe(null),Lo=null;function Ro(e){var t=e.alternate;O(Uo,Uo.current&1),O(Io,e),Lo===null&&(t===null||jo.current!==null||t.memoizedState!==null)&&(Lo=e)}function zo(e){O(Uo,Uo.current),O(Io,e),Lo===null&&(Lo=e)}function Bo(e){e.tag===22?(O(Uo,Uo.current),O(Io,e),Lo===null&&(Lo=e)):Vo()}function Vo(){O(Uo,Uo.current),O(Io,Io.current)}function Ho(e){ke(Io),Lo===e&&(Lo=null),ke(Uo)}var Uo=Oe(0);function Wo(e,t){O(Io,Io.current),O(Uo,t)}function Go(e){ke(Uo),ke(Io),Lo===e&&(Lo=null)}function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lm(n)||um(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=0,I=null,L=null,R=null,Jo=!1,Yo=!1,Xo=!1,Zo=0,Qo=0,$o=null,es=0;function ts(){throw Error(s(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jr(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,i,a){return qo=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?vc:yc,Xo=!1,a=n(r,i),Xo=!1,Yo&&(a=as(t,n,r,i)),is(e),a}function is(e){E.H=_c;var t=L!==null&&L.next!==null;if(qo=0,R=L=I=null,Jo=!1,Qo=0,$o=null,t)throw Error(s(300));e===null||Ic||(e=e.dependencies,e!==null&&ka(e)&&(Ic=!0))}function as(e,t,n,r){I=e;var i=0;do{if(Yo&&($o=null),Qo=0,Yo=!1,25<=i)throw Error(s(301));if(i+=1,R=L=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=bc,a=t(n,r)}while(Yo);return a}function os(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?ps(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function ss(){var e=Zo!==0;return Zo=0,e}function cs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(Jo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jo=!1}qo=0,R=L=I=null,Yo=!1,Qo=Zo=0,$o=null}function us(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function ds(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(s(467)):Error(s(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(e){var t=Qo;return Qo+=1,$o===null&&($o=[]),e=ao($o,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?vc:yc),e}function ms(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ps(e);if(e.$$typeof===ye)return;if(e.$$typeof===T)return ja(e)}throw Error(s(438,String(e)))}function hs(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=fs(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_e;return t.index++,n}function gs(e,t){return typeof t==`function`?t(e):t}function _s(e){return vs(ds(),L,e)}function vs(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(qo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Wa&&(d=!0);else if((qo&p)===p){u=u.next,p===Wa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,I.lanes|=p,ld|=p;f=u.action,Xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,I.lanes|=f,ld|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Jr(a,e.memoizedState)&&(Ic=!0,d&&(n=Ga,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ys(e){var t=ds(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Jr(a,t.memoizedState)||(Ic=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function bs(e,t,n){var r=I,i=ds(),a=P;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Jr((L||i).memoizedState,n);if(o&&(i.memoizedState=n,Ic=!0),i=i.queue,Gs(Cs.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||R!==null&&!!(R.memoizedState.tag&1),Bs(e?9:8,{destroy:void 0},Ss.bind(null,r,i,n,t),null),e){if(r.flags|=2048,W===null)throw Error(s(349));a||qo&127||xs(r,t,n)}return n}function xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=fs(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ss(e,t,n,r){t.value=n,t.getSnapshot=r,ws(t)&&Ts(e)}function Cs(e,t,n){return n(function(){ws(t)&&Ts(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jr(e,n)}catch{return!0}}function Ts(e){var t=Pi(e,2);t!==null&&Ld(t,e,2)}function Es(e){var t=us();if(typeof e==`function`){var n=e;if(e=n(),Xo){at(!0);try{n()}finally{at(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},t}function Ds(e,t,n,r){return e.baseState=n,vs(e,L,typeof r==`function`?r:gs)}function Os(e,t,n,r,i){if(B(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,ks(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ks(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};o.types=a===null?null:a.types,E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),As(e,t,s)}catch(n){Ms(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),As(e,t,a)}catch(n){Ms(e,t,n)}}function As(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){js(e,t,n)},function(n){return Ms(e,t,n)}):js(e,t,n)}function js(e,t,n){t.status=`fulfilled`,t.value=n,Ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ks(e,n)))}function Ms(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ns(t),t=t.next;while(t!==r)}e.action=null}function Ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ps(e,t){return t}function Fs(e,t){if(P){var n=W.formState;if(n!==null){a:{var r=I;if(P){if(N){b:{for(var i=N,a=fa;i.nodeType!==8;)if(!a||(i=fm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=fm(i.nextSibling),r=i.data===`F!`;break a}}ma(r)}r=!1}r&&(t=n[0])}}return n=us(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},n.queue=r,n=fc.bind(null,I,r),r.dispatch=n,r=Es(!1),a=mc.bind(null,I,!1,r.queue),r=us(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Os.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Is(e){return Ls(ds(),L,e)}function Ls(e,t,n){if(t=vs(e,t,Ps)[0],e=_s(gs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ps(t)}catch(e){throw e===eo?no:e}else r=t;t=ds();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,Bs(9,{destroy:void 0},Rs.bind(null,i,n),null)),[r,a,e]}function Rs(e,t){e.action=t}function zs(e){var t=ds(),n=L;if(n!==null)return Ls(t,n,e);ds(),t=t.memoizedState,n=ds();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Bs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=fs(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Vs(){return ds().memoizedState}function Hs(e,t,n,r){var i=us();I.flags|=e,i.memoizedState=Bs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Us(e,t,n,r){var i=ds();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&ns(r,L.memoizedState.deps)?i.memoizedState=Bs(t,a,n,r):(I.flags|=e,i.memoizedState=Bs(1|t,a,n,r))}function Ws(e,t){Hs(8390656,8,e,t)}function Gs(e,t){Us(2048,8,e,t)}function Ks(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=fs(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qs(e){var t=ds().memoizedState;return Ks({ref:t,nextImpl:e}),function(){if(U&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Js(e,t){return Us(4,2,e,t)}function Ys(e,t){return Us(4,4,e,t)}function Xs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zs(e,t,n){n=n==null?null:n.concat([e]),Us(4,4,Xs.bind(null,t,e),n)}function Qs(){}function $s(e,t){var n=ds();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=ds();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ns(t,r[1]))return r[0];if(r=e(),Xo){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r}function tc(e,t,n){return n===void 0||qo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=Fd(),I.lanes|=e,ld|=e,n)}function nc(e,t,n,r){return Jr(n,t)?n:jo.current===null?!(qo&106)||qo&1073741824&&!(K&261930)?(Ic=!0,e.memoizedState=n):(e=Fd(),I.lanes|=e,ld|=e,t):(e=tc(e,n,r),Jr(e,t)||(Ic=!0),e)}function rc(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};s.types=o===null?null:o.types,E.T=s,mc(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?pc(e,t,Ja(c,r),Pd(e)):pc(e,t,r,Pd(e))}catch(n){pc(e,t,{then:function(){},status:`rejected`,reason:n},Pd())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ic(){}function ac(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=oc(e).queue;rc(e,i,t,Te,n===null?ic:function(){return sc(e),n(r)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:Te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),pc(e,t.next.queue,{},Pd())}function cc(){return ja(uh)}function z(){return ds().memoizedState}function lc(){return ds().memoizedState}function uc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pd();e=So(n);var r=Co(t,e,n);r!==null&&(Ld(r,t,n),wo(r,t,n)),t={cache:La()},e.payload=t;return}t=t.return}}function dc(e,t,n){var r=Pd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},B(e)?hc(t,n):(n=Ni(e,t,n,r),n!==null&&(Ld(n,e,r),gc(n,t,r)))}function fc(e,t,n){pc(e,t,n,Pd())}function pc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(B(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Jr(s,o))return Mi(e,t,i,0),W===null&&ji(),!1}catch{}if(n=Ni(e,t,i,r),n!==null)return Ld(n,e,r),gc(n,t,r),!0}return!1}function mc(e,t,n,r){if(r={lane:2,revertLane:Lf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},B(e)){if(t)throw Error(s(479))}else t=Ni(e,n,r,2),t!==null&&Ld(t,e,2)}function B(e){var t=e.alternate;return e===I||t!==null&&t===I}function hc(e,t){Yo=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}var _c={readContext:ja,use:ms,useCallback:ts,useContext:ts,useEffect:ts,useImperativeHandle:ts,useLayoutEffect:ts,useInsertionEffect:ts,useMemo:ts,useReducer:ts,useRef:ts,useState:ts,useDebugValue:ts,useDeferredValue:ts,useTransition:ts,useSyncExternalStore:ts,useId:ts,useHostTransitionStatus:ts,useFormState:ts,useActionState:ts,useOptimistic:ts,useMemoCache:ts,useCacheRefresh:ts,useEffectEvent:ts},vc={readContext:ja,use:ms,useCallback:function(e,t){return us().memoizedState=[e,t===void 0?null:t],e},useContext:ja,useEffect:Ws,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Hs(4194308,4,Xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){Hs(4,2,e,t)},useMemo:function(e,t){var n=us();t=t===void 0?null:t;var r=e();if(Xo){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=us();if(n!==void 0){var i=n(t);if(Xo){at(!0);try{n(t)}finally{at(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=dc.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=us();return e={current:e},t.memoizedState=e},useState:function(e){e=Es(e);var t=e.queue,n=fc.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qs,useDeferredValue:function(e,t){return tc(us(),e,t)},useTransition:function(){var e=Es(!1);return e=rc.bind(null,I,e.queue,!0,!1),us().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,i=us();if(P){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),W===null)throw Error(s(349));K&127||xs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ws(Cs.bind(null,r,a,e),[e]),r.flags|=2048,Bs(9,{destroy:void 0},Ss.bind(null,r,a,n,t),null),n},useId:function(){var e=us(),t=W.identifierPrefix;if(P){var n=ia,r=ra;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=es++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:cc,useFormState:Fs,useActionState:Fs,useOptimistic:function(e){var t=us();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mc.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:hs,useCacheRefresh:function(){return us().memoizedState=uc.bind(null,I)},useEffectEvent:function(e){var t=us(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:ja,use:ms,useCallback:$s,useContext:ja,useEffect:Gs,useImperativeHandle:Zs,useInsertionEffect:Js,useLayoutEffect:Ys,useMemo:ec,useReducer:_s,useRef:Vs,useState:function(){return _s(gs)},useDebugValue:Qs,useDeferredValue:function(e,t){return nc(ds(),L.memoizedState,e,t)},useTransition:function(){var e=_s(gs)[0],t=ds().memoizedState;return[typeof e==`boolean`?e:ps(e),t]},useSyncExternalStore:bs,useId:z,useHostTransitionStatus:cc,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){return Ds(ds(),L,e,t)},useMemoCache:hs,useCacheRefresh:lc,useEffectEvent:qs},bc={readContext:ja,use:ms,useCallback:$s,useContext:ja,useEffect:Gs,useImperativeHandle:Zs,useInsertionEffect:Js,useLayoutEffect:Ys,useMemo:ec,useReducer:ys,useRef:Vs,useState:function(){return ys(gs)},useDebugValue:Qs,useDeferredValue:function(e,t){var n=ds();return L===null?tc(n,e,t):nc(n,L.memoizedState,e,t)},useTransition:function(){var e=ys(gs)[0],t=ds().memoizedState;return[typeof e==`boolean`?e:ps(e),t]},useSyncExternalStore:bs,useId:z,useHostTransitionStatus:cc,useFormState:zs,useActionState:zs,useOptimistic:function(e,t){var n=ds();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Ds(n,L,e,t)},useMemoCache:hs,useCacheRefresh:lc,useEffectEvent:qs};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pd(),i=So(r);i.payload=t,n!=null&&(i.callback=n),t=Co(e,i,r),t!==null&&(Ld(t,e,r),wo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pd(),i=So(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Co(e,i,r),t!==null&&(Ld(t,e,r),wo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pd(),r=So(n);r.tag=2,t!=null&&(r.callback=t),t=Co(e,r,n),t!==null&&(Ld(t,e,n),wo(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){Di(e)}function Dc(e){console.error(e)}function Oc(e){Di(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=So(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=So(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(xd===null?xd=new Set([this]):xd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Oa(t,n,i,!0),n=Io.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Lo===null?Yd():n.alternate===null&&cd===0&&(cd=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ro?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),_f(e,r,i)),!1;case 22:return n.flags|=65536,r===ro?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),_f(e,r,i)),!1}throw Error(s(435,n.tag))}return _f(e,r,i),Yd(),!1}if(P)return t=Io.current,t===null?(r!==pa&&(t=Error(s(423),{cause:r}),ba(Yi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Yi(r,n),i=jc(e.stateNode,r,i),To(e,i),cd!==4&&(cd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==pa&&(e=Error(s(422),{cause:r}),ba(Yi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Yi(a,n),md===null?md=[a]:md.push(a),cd!==4&&(cd=2),t===null)return!0;r=Yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=jc(n.stateNode,r,e),To(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(xd===null||!xd.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Mc(i),Nc(i,e,n,r),To(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(s(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?vo(t,null,n,r):_o(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Aa(t),r=rs(e,t,n,o,a,i),s=ss(),e!==null&&!Ic?(cs(e,t,i),fl(e,t,i)):(P&&s&&sa(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Yr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Yr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qa(t,a===null?null:a.cachePool),a===null?Po():No(t,a),Bo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Qa(t,null),Po(),Vo()):(Qa(t,a.cachePool),No(t,a),Vo(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Za();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Qa(t,null),Po(),Bo(t),e!==null&&Oa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return _o(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Ho(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(zo(t),(e=N)?(e=cm(e,fa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,N=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return Wc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(zo(t),i){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(Ic||Oa(e,t,n,!1),i=(n&e.childLanes)!==0,Ic||i){if(jo.current===null){if(r=W,r!==null&&(o=wt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Pi(e,o),Ld(r,e,o),Fc;Yd()}t=Gc(e,t,n)}else e=a.treeContext,N=fm(o.nextSibling),ua=t,P=!0,da=null,fa=!1,e!==null&&la(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Aa(t),n=rs(e,t,n,r,void 0,i),r=ss(),e!==null&&!Ic?(cs(e,t,i),fl(e,t,i)):(P&&r&&sa(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Aa(t),t.updateQueue=null,n=as(t,r,n,i),is(e),r=ss(),e!==null&&!Ic?(cs(e,t,a),fl(e,t,a)):(P&&r&&sa(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Aa(t),t.stateNode===null){var a=Li,o=n.contextType;typeof o==`object`&&o&&(a=ja(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},bo(t),o=n.contextType,a.context=typeof o==`object`&&o?ja(o):Li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),Oo(t,r,a,i),Do(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Li,typeof u==`object`&&u&&(o=ja(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),yo=!1;var f=t.memoizedState;a.state=f,Oo(t,r,a,i),Do(),l=t.memoizedState,s||f!==l||yo?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=yo||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xo(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Li,typeof l==`object`&&l&&(c=ja(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),yo=!1,f=t.memoizedState,a.state=f,Oo(t,r,a,i),Do();var p=t.memoizedState;o!==d||f!==p||yo||e!==null&&e.dependencies!==null&&ka(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=yo||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ka(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=_o(t,e.child,null,i),t.child=_o(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return va(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:$a()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=fd),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Uo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(i?Ro(t):Vo(),(e=N)?(e=cm(e,fa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,N=null)):e=null,e===null)throw ma(t);return t.lanes=um(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Vo(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Wi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Ro(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Vo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Vi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Wi(i,a,n,null),i.flags|=2):i=Vi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=$a():(s=F._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Ro(t),n=e.child,e=n.sibling,n=Vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=zi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return _o(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,i,a,o,c){if(n)return t.flags&256?(Ro(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Vo(),a=i.fallback,o=t.mode,i=rl({mode:`visible`,children:i.children},o),a=Wi(a,o,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,_o(t,e.child,null,c),i=t.child,i.memoizedState=$c(c),i.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,i)):(Vo(),t.child=e.child,t.flags|=128,null);if(Ro(t),um(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(s(419)),i.stack=``,i.digest=r,ba({value:i,source:null,stack:null})),il(e,t,c)}if(Ic||Oa(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(jo.current!==null)return il(e,t,c);if(r=W,r!==null&&(i=wt(r,c),i!==0&&i!==o.retryLane))throw o.retryLane=i,Pi(e,i),Ld(r,e,i),Fc;return lm(a)||Yd(),il(e,t,c)}return lm(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,N=fm(a.nextSibling),ua=t,P=!0,da=null,fa=!1,e!==null&&la(t,e),t=nl(t,i.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ko(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Uo.current;if(t.flags&128)return Wo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Wo(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=P?$i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return wa(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ld|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ka(e)))}function ml(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),wa(t,F,e.memoizedState.cache),va();break;case 27:case 5:Ie(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ro(t),t.flags|=128,null;r=Oa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Ro(t),e=fl(e,t,n),e===null?null:e.sibling)}Ro(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Wo(t,Uo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:wa(t,F,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,P&&t.flags&1048576&&oa(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=oo(t.elementType),t.type=e,typeof e==`function`)Bi(e)?(r=Tc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ue){t.tag=11,t=Rc(null,t,e,r,n);break a}if(i===pe){t.tag=14,t=zc(null,t,e,r,n);break a}if(i===T){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=Ce(e)||e,Error(s(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Tc(r,t.pendingProps),Xc(e,t,r,i,n);case 3:a:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,xo(e,t),Oo(t,r,null,n);var o=t.memoizedState;if(r=o.cache,wa(t,F,r),r!==a.cache&&Da(t,[F],n,!0),Do(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==i){i=Yi(Error(s(424)),t),ba(i),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=fm(e.firstChild),ua=t,P=!0,da=null,fa=!0,n=vo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(va(),r===i){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Im(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(t.stateNode=hp(t.type,t.pendingProps,Me.current,t)):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&P&&(r=t.stateNode=vm(t.type,t.pendingProps,Me.current),ua=t,fa=!0,i=N,Tp(t.type)?(pm=i,N=fm(r.firstChild)):N=i),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((i=r=N)&&(r=om(r,t.type,t.pendingProps,fa),r===null?i=!1:(t.stateNode=r,ua=t,N=fm(r.firstChild),fa=!1,i=!0)),i||ma(t)),Ie(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,gp(i,a)?r=null:o!==null&&gp(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=rs(e,t,os,null,null,n),uh._currentValue=i),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=sm(n,t.pendingProps,fa),n===null?e=!1:(t.stateNode=n,ua=t,N=null,e=!0)),e||ma(t)),null;case 13:return tl(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_o(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,Aa(t),i=ja(i),r=r(i),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Aa(t),r=ja(F),e===null?(i=Za(),i===null&&(i=W,a=La(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},bo(t),wa(t,F,i)):((e.lanes&n)!==0&&(xo(e,t),Oo(t,null,null,n),Do()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,wa(t,F,r),r!==i.cache&&Da(t,[F],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wa(t,F,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:P&&sa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Zm(t,r):Zm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Kd())e.flags|=8192;else throw so=ro,to}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t)){if(Kd())e.flags|=8192;else throw so=ro,to}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:vt(),e.lanes|=t,pd|=t)}function bl(e,t){if(!P)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ta(F),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_a(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ya())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(gl(t),a===null?(V(t),_l(t,i,null,r,n)):(V(t),vl(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,a)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,i,e,r,n)),null;case 27:if(Le(t),n=Me.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}e=Ae.current,_a(t)?ha(t,e):(e=vm(i,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}if(a=Ae.current,_a(t))ha(t,a);else{var o=fp(Me.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[At]=t,a[jt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(ap(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=Me.current,_a(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=ua,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[At]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||rp(e.nodeValue,n)),e||ma(t,!0)}else e=fp(e).createTextNode(r),e[At]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=_a(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[At]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=ya(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ho(t),t):(Ho(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[At]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=ya(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ho(t),t):(Ho(t),null)}return Ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return Fe(),e===null&&qf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return Ta(t.type),V(t),null;case 19:if(Go(t),r=t.memoizedState,r===null)return V(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)bl(r,!1);else{if(cd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ko(e),a!==null){for(t.flags|=128,bl(r,!1),e=a.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hi(n,e),n=n.sibling;return Wo(t,Uo.current&1|2),P&&aa(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Je()>yd&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Ko(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!P)return V(t),null}else 2*Je()-r.renderingStartTime>yd&&n!==536870912&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Je(),e.sibling=null,a=Uo.current,a=i?a&1|2:a&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||P?Wo(t,a):(n=a,O(Io,t),O(Uo,n),Lo===null&&(Lo=t)),P&&aa(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return Ho(t),Fo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ke(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ta(F),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(s(156,t.tag))}function Sl(e,t){switch(ca(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(F),Fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(Ho(t),t.alternate===null)throw Error(s(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Go(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Fe(),null;case 10:return Ta(t.type),null;case 22:case 23:return Ho(t),Fo(),e!==null&&ke(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ta(F),null;case 25:return null;default:return null}}function Cl(e,t){switch(ca(t),t.tag){case 3:Ta(F),Fe();break;case 26:case 27:case 5:Le(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&Ho(t);break;case 13:Ho(t);break;case 19:Go(t);break;case 10:Ta(t.type);break;case 22:case 23:Ho(t),Fo(),e!==null&&ke(Xa);break;case 24:Ta(F)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ao(t,n)}catch(t){J(e,e.return,t)}}}function Dl(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=wi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Lp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Rp(e);h(e.child,!1,tm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rm(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&rm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&im(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;sp(r,e.type,n,t),r[jt]=t}catch(t){J(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=En)),Al(e,r),j=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Tp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),j=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Tp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ap(t,r,n),t[At]=e,t[jt]=n}catch(t){J(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=jp(o);r.push(s),s.view&&(a=!0)}else a||jp(o).view&&(a=!0);Hl=!0,Op(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?kp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(s(544));var n=t.name;t=Ei(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=wi(r,n),a=Ei(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Id(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ei(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Id(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Ei(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Id(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Id(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode);t=Ei(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=jp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Op(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=wi(n,r),a=Ei(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Mp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Id(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,up=yh,e=ei(e),ti(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(dp={focusedElem:e,selectionRange:r},yh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var a=t.stateNode;try{var o=Tc(t.type,i);n=a.getSnapshotBeforeUpdate(o,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(e){J(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)am(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:am(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=wi(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=Ei(i.default,i.update),i!==`none`&&Jl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ru(e,n),r&4&&wl(5,n);break;case 1:if(Ru(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Ru(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ao(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Ru(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Ru(e,n);break;case 31:Ru(e,n),r&4&&Du(e,n);break;case 13:Ru(e,n),r&4&&Ou(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=bf.bind(null,n),dm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Bu(e,n,r)):Ru(e,n),su=t,H=i}break;case 30:Ru(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Ru(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){J(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,j=!0}catch(t){J(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Dp(s,!0):Dp(e.stateNode,!1)}catch(t){J(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cu=null,wu=!1;function Tu(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(it&&typeof it.onCommitFiberUnmount==`function`)try{it.onCommitFiberUnmount(rt,n)}catch{}switch(n.tag){case 26:H||kl(n,t),Tu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=Cu,i=wu;Tp(n.type)&&(Cu=n.stateNode,wu=!1),Tu(e,t,n),ym(n.stateNode,n.type,n.memoizedProps),Cu=r,wu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=Cu,i=wu,Cu=null,Tu(e,t,n),Cu=r,wu=i,Cu!==null){if(wu)try{(Cu.nodeType===9?Cu.body:Cu.nodeName===`HTML`?Cu.ownerDocument.body:Cu).removeChild(n.stateNode),j=!0}catch(e){J(n,t,e)}else try{Cu.removeChild(n.stateNode),j=!0}catch(e){J(n,t,e)}}break;case 18:Cu!==null&&(wu?(e=Cu,Ep(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Gh(e)):Ep(Cu,n.stateNode));break;case 4:r=Cu,i=wu,Cu=n.stateNode.containerInfo,wu=!0,Tu(e,t,n),Cu=r,wu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),Tu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,Tu(e,t,n),H=r;break;case 30:kl(n,t),Tu(e,t,n);break;case 7:H||kl(n,t),Tu(e,t,n);break;default:Tu(e,t,n)}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gh(e)}catch(e){J(t,t.return,e)}}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gh(e)}catch(e){J(t,t.return,e)}}function ku(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(s(435,e.tag))}}function Au(e,t){var n=ku(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=xf.bind(null,e,t);t.then(r,r)}})}function ju(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i],o=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Tp(l.type)){Cu=l.stateNode,wu=!1;break a}break;case 5:Cu=l.stateNode,wu=!1;break a;case 3:case 4:Cu=l.stateNode.containerInfo,wu=!0;break a}l=l.return}if(Cu===null)throw Error(s(160));Eu(o,c,a),Cu=null,wu=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nu(t,e,n),t=t.sibling}var Mu=null;function Nu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var a=0;a<r.length;a++){var o=r[a];o.ref.impl=o.nextImpl}ju(t,e,n),Pu(e),i&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),i&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Mu,ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=hp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=a.ownerDocument||a;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Lt]||r[At]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),ap(r,t,n),r[At]=e,Wt(r),t=r;break a;case`link`:if(a=Jm(`link`,`href`,i).get(t+(n.href||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break b}}r=i.createElement(t),ap(r,t,n),i.head.appendChild(r);break;case`meta`:if(a=Jm(`meta`,`content`,i).get(t+(n.content||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){a.splice(o,1);break b}}r=i.createElement(t),ap(r,t,n),i.head.appendChild(r);break;default:throw Error(s(468,t))}r[At]=e,Wt(r),t=r}e.stateNode=t}}else su||Ym(a,e.type,e.stateNode)}else e.stateNode=Um(a,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):i.count--,n===null?su||Ym(a,e.type,e.stateNode):Um(a,n,e.memoizedProps))}break;case 27:ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),r!==null&&i&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(a=cu,cu=!1,ju(t,e,n),cu=a,Pu(e),i&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{vn(t,``),j=!0}catch(t){J(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),i&1024&&(lu=!0);break;case 6:if(ju(t,e,n),Pu(e),i&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,j=!0}catch(t){J(e,e.return,t)}}break;case 3:if(j=!1,qm=null,a=Mu,Mu=Cm(t.containerInfo),ju(t,e,n),Mu=a,Pu(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Gh(t.containerInfo)}catch(t){J(e,e.return,t)}lu&&(lu=!1,Fu(e)),j=!1;break;case 4:i=cu,cu=su,r=en(),a=Mu,Mu=Cm(e.stateNode.containerInfo),ju(t,e,n),Pu(e),Mu=a,j&&pu&&(mu=!0),j=r,cu=i;break;case 12:ju(t,e,n),Pu(e);break;case 31:ju(t,e,n),Pu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:ju(t,e,n),Pu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(_d=Je()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:a=e.memoizedState!==null,o=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||a,cu=u||a,H=l||o,ju(t,e,n),H=l,cu=u,su=c,Pu(e),i&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||r===null||o||su||H||(t=o||H,n=su,r=H,su=a||su,H=t,zu(e,2),su=n,H=r),!a&&cu||yu(e,a)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:ju(t,e,n),Pu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:i&512&&(H||r===null||kl(r,r.return)),i=en(),a=pu,o=(n&335544064)===n,c=e.memoizedProps,pu=o&&Ei(c.default,c.update)!==`none`,ju(t,e,n),Pu(e),o&&r!==null&&j&&(e.flags|=4),pu=a,j=i;break;case 21:break;case 7:i&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ju(t,e,n),Pu(e)}}function Pu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Pl(i)){var a=i.stateNode;r===null?r=[a]:r.push(a)}if(Nl(i))break;i=i.return}var o=r;if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,o);break;case 5:var l=n.stateNode;n.flags&32&&(vn(l,``),n.flags&=-33),Bl(e,Rl(e),l,o);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,o);break;default:throw Error(s(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yh=!0,t.reset(),yh=!1),e=e.sibling}}function Iu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling;else ou(t,!1)}function Lu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Iu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];kp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Iu(t,e);break;case 4:r=fu,fu=!1,Iu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Iu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Iu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=wi(a,o),o=wi(n.memoizedProps,o);var s=Ei(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Id(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Iu(t,e)}}function Ru(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function zu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),zu(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),zu(n,r);break;case 27:r&2&&ym(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),zu(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),zu(n,r);break;case 22:n.memoizedState===null&&zu(n,r);break;case 30:kl(n,n.return),zu(n,r);break;case 7:kl(n,n.return);default:zu(n,r)}e=e.sibling}}function Bu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Bu(i,a,n),wl(4,a);break;case 1:if(Bu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ko(l[i],c)}catch(e){J(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Ym(Cm(c.ownerDocument),a.type,c),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:Bu(i,a,n);break;case 31:Bu(i,a,n),s&&o&4&&Du(i,a);break;case 13:Bu(i,a,n),s&&o&4&&Ou(i,a);break;case 22:a.memoizedState===null&&Bu(i,a,n),Ol(a,a.return);break;case 30:Bu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:Bu(i,a,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ra(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ra(e))}function Uu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Wu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Wu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Uu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Uu(e,t,n,r);break;case 3:Uu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ra(a)));break;case 12:if(a&2048){Uu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Uu(e,t,n,r);break;case 31:Uu(e,t,n,r);break;case 13:Uu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Uu(e,t,n,r):(o._visibility|=2,Gu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Uu(e,t,n,r):Ku(e,t)),a&2048&&Vu(s,t);break;case 24:Uu(e,t,n,r),a&2048&&Hu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Uu(e,t,n,r);break;default:Uu(e,t,n,r)}}function Gu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Gu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Gu(a,o,s,c,i)):u._visibility&2?Gu(a,o,s,c,i):Ku(a,o),i&&l&2048&&Vu(o.alternate,o);break;case 24:Gu(a,o,s,c,i),i&&l&2048&&Hu(o.alternate,o);break;default:Gu(a,o,s,c,i)}t=t.sibling}}function Ku(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ku(n,r),i&2048&&Vu(r.alternate,r);break;case 24:Ku(n,r),i&2048&&Hu(r.alternate,r);break;default:Ku(n,r)}t=t.sibling}}var qu=8192;function Ju(e,t,n){if(e.subtreeFlags&qu)for(e=e.child;e!==null;)Yu(e,t,n),e=e.sibling}function Yu(e,t,n){switch(e.tag){case 26:Ju(e,t,n),e.flags&qu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&eh(n,e)):th(n,Mu,e.memoizedState,e.memoizedProps));break;case 5:Ju(e,t,n),e.flags&qu&&(e=e.stateNode,(t&335544128)===t&&eh(n,e));break;case 3:case 4:var r=Mu;Mu=Cm(e.stateNode.containerInfo),Ju(e,t,n),Mu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=qu,qu=16777216,Ju(e,t,n),qu=r):Ju(e,t,n));break;case 30:if((e.flags&qu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}Ju(e,t,n);break;default:Ju(e,t,n)}}function Xu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qu(e),e=e.sibling}function Qu(e){switch(e.tag){case 0:case 11:case 15:Zu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Zu(e);break;case 12:Zu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$u(e)):Zu(e);break;default:Zu(e)}}function $u(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),$u(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$u(t));break;default:$u(t)}e=e.sibling}}function ed(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ra(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var td={getCacheForType:function(e){var t=ja(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ja(F).controller.signal}},nd=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,rd=null,id=!1,ad=!1,od=!1,sd=0,cd=0,ld=0,ud=0,dd=0,fd=0,pd=0,md=null,hd=null,gd=!1,_d=0,vd=0,yd=1/0,bd=null,xd=null,Sd=0,Cd=null,wd=null,Td=0,Ed=0,Dd=null,Od=null,kd=null,Ad=null,jd=null,Md=0,Nd=null;function Pd(){return U&2&&K!==0?K&-K:E.T===null?Dt():Lf()}function Fd(){if(fd===0){if(!(K&536870912)||P){var e=dt;dt<<=1,!(dt&3932160)&&(dt=262144),fd=e}else fd=536870912}return e=Io.current,e!==null&&(e.flags|=32),fd}function Id(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Lp(wi(e.memoizedProps,n))),Ad===null&&(Ad=[]),Ad.push(t.bind(null,r))}}function Ld(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(Wd(e,0),Vd(e,K,fd,!1)),bt(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(ud|=n),cd===4&&Vd(e,K,fd,!1)),kf(e))}function Rd(e,t,n){if(U&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ht(e,t),i=r?Qd(e,t):Xd(e,t,!0),a=r;do{if(i===0){ad&&!r&&Vd(e,t,0,!1);break}if(n=e.current.alternate,a&&!Bd(n))i=Xd(e,t,!1),a=!1;else{if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=md;var l=c.current.memoizedState.isDehydrated;if(l&&(Wd(c,o).flags|=256),o=Xd(c,o,!1),o!==2&&o!==6){if(od&&!l){c.errorRecoveryDisabledLanes|=a,ud|=a,i=4;break a}a=hd,hd=i,a!==null&&(hd===null?hd=a:hd.push.apply(hd,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Wd(e,0),Vd(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Vd(r,t,fd,!id);break a;case 2:hd=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=_d+300-Je(),10<i)){if(Vd(r,t,fd,!id),mt(r,0,!0)!==0)break a;Td=t,r.timeoutHandle=yp(zd.bind(null,r,n,hd,bd,gd,t,fd,ud,pd,id,a,`Throttled`,-0,0),i);break a}zd(r,n,hd,bd,gd,t,fd,ud,pd,id,a,null,-0,0)}break}}while(1);kf(e)}function zd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:En},Ul=null,Yu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ah.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?_d-Je():(a&4194048)===a?vd-Je():0,m=rh(d,m),m!==null)?(Td=a,e.cancelPendingCommit=m(of.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Vd(e,a,o,!l)):of(e,t,a,n,r,i,o,s,c,l,u,d)}function Bd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vd(e,t,n,r){t=gt(e,t),t&=~dd,t&=~ud,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ot(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&St(e,n,t)}function Hd(){return U&6?!0:(Af(0,!1),!1)}function Ud(){if(G!==null){if(q===0)var e=G.return;else e=G,Ca=Sa=null,ls(e),uo=null,fo=0,e=G;for(;e!==null;)Cl(e.alternate,e),e=e.return;G=null}}function Wd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Td=0,Ud(),W=e,G=n=Vi(e.current,null),K=t,q=0,rd=null,id=!1,ad=ht(e,t),od=!1,pd=fd=dd=ud=ld=cd=0,hd=md=null,gd=!1,sd=gt(e,t),ji(),n}function Gd(e,t){I=null,E.H=_c,t===eo||t===no?(t=co(),q=3):t===to?(t=co(),q=4):q=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,rd=t,G===null&&(cd=1,kc(e,Yi(t,e.current)))}function Kd(){var e=Io.current;return e===null?!0:(K&4194048)===K?Lo===null:(K&62914560)===K||K&536870912?e===Lo:!1}function qd(){var e=E.H;return E.H=_c,e===null?_c:e}function Jd(){var e=E.A;return E.A=td,e}function Yd(){cd=4,id||(K&4194048)!==K&&Io.current!==null||(ad=!0),!(ld&134217727)&&!(ud&134217727)||W===null||Vd(W,K,fd,!1)}function Xd(e,t,n){var r=U;U|=2;var i=qd(),a=Jd();(W!==e||K!==t)&&(bd=null,Wd(e,t)),t=!1;var o=cd;a:do try{if(q!==0&&G!==null){var s=G,c=rd;switch(q){case 8:Ud(),o=6;break a;case 3:case 2:case 9:case 6:Io.current===null&&(t=!0);var l=q;if(q=0,rd=null,nf(e,s,c,l),n&&ad){o=0;break a}break;default:l=q,q=0,rd=null,nf(e,s,c,l)}}Zd(),o=cd;break}catch(t){Gd(e,t)}while(1);return t&&e.shellSuspendCounter++,Ca=Sa=null,U=r,E.H=i,E.A=a,G===null&&(W=null,K=0,ji()),o}function Zd(){for(;G!==null;)ef(G)}function Qd(e,t){var n=U;U|=2;var r=qd(),i=Jd();W!==e||K!==t?(bd=null,yd=Je()+500,Wd(e,t)):ad=ht(e,t);a:do try{if(q!==0&&G!==null){t=G;var a=rd;b:switch(q){case 1:q=0,rd=null,nf(e,t,a,1);break;case 2:case 9:if(io(a)){q=0,rd=null,tf(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),kf(e)},a.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:io(a)?(q=0,rd=null,tf(t)):(q=0,rd=null,nf(e,t,a,7));break;case 5:var o=null;switch(G.tag){case 26:o=G.memoizedState;case 5:case 27:var c=G;if(o?Qm(o):c.stateNode.complete){q=0,rd=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,rf(u))}break b}}q=0,rd=null,nf(e,t,a,5);break;case 6:q=0,rd=null,nf(e,t,a,6);break;case 8:Ud(),cd=6;break a;default:throw Error(s(462))}}$d();break}catch(t){Gd(e,t)}while(1);return Ca=Sa=null,E.H=r,E.A=i,U=n,G===null?(W=null,K=0,ji(),cd):0}function $d(){for(;G!==null&&!qe();)ef(G)}function ef(e){var t=hl(e.alternate,e,sd);e.memoizedProps=e.pendingProps,t===null?rf(e):G=t}function tf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:ls(t);var r=t;r===ua&&(P?(ga(r),r.tag===5&&r.stateNode!=null&&(N=r.stateNode)):(ga(r),P=!0));default:Cl(n,t),t=G=Hi(t,sd),t=hl(n,t,sd)}e.memoizedProps=e.pendingProps,t===null?rf(e):G=t}function nf(e,t,n,r){Ca=Sa=null,ls(t),uo=null,fo=0;var i=t.return;try{if(Pc(e,i,t,n,K)){cd=1,kc(e,Yi(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;cd=1,kc(e,Yi(n,e.current)),G=null;return}t.flags&32768?(P||r===1?e=!0:ad||K&536870912?e=!1:(id=e=!0,(r===2||r===9||r===3||r===6)&&(r=Io.current,r!==null&&r.tag===13&&(r.flags|=16384))),af(t,e)):rf(t)}function rf(e){var t=e;do{if(t.flags&32768){af(t,id);return}e=t.return;var n=xl(t.alternate,t,sd);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);cd===0&&(cd=5)}function af(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);cd=6,G=null}function of(e,t,n,r,i,a,o,c,l,u,d,f){e.cancelPendingCommit=null;do mf();while(Sd!==0);if(U&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===W&&(G=W=null,K=0),wd=t,Cd=e,Td=n,Dd=i,Od=r,sf(e,t,n,o,c,l,f)}}function sf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Ed=s,s|=Ai,xt(e,n,s,r,i,a),Ad=null,(n&335544064)===n?(jd=Va(e),r=10262):(jd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Sf(Qe,function(){return hf(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,a=U,U|=4;try{gu(e,t,n)}finally{U=a,D.p=i,E.T=r}}Sd=1,Hl?kd=Fp(o,e.containerInfo,jd,uf,df,lf,ff,hf,cf,null,null):(uf(),df(),ff())}function cf(e){if(Sd!==0){var t=Cd.onRecoverableError;t(e,{componentStack:null})}}function lf(){Sd===3&&(Sd=0,Lu(wd,Cd),Sd=4)}function uf(){if(Sd===1){Sd=0;var e=Cd,t=wd,n=Td,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=E.T,E.T=null;var i=D.p;D.p=2;var a=U;U|=4;try{pu=mu=!1,Nu(t,e,n),n=dp;var o=ei(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&$r(s.ownerDocument.documentElement,s)){if(c!==null&&ti(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Qr(s,h),v=Qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}yh=!!up,dp=up=null}finally{U=a,D.p=i,E.T=r}}e.current=t,Sd=2}}function df(){if(Sd===2){Sd=0;var e=Cd,t=wd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=U;U|=4;try{vu(e,t.alternate,t)}finally{U=i,D.p=r,E.T=n}}Sd=3}}function ff(){if(Sd===4||Sd===3){Sd=0;var e=kd;kd=null,A();var t=Cd,n=wd,r=Td,i=Od,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Sd=5:(Sd=0,wd=Cd=null,pf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(xd=null),Et(r),n=n.stateNode,it&&typeof it.onCommitFiberRoot==`function`)try{it.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=E.T,a=D.p,D.p=2,E.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{E.T=n,D.p=a}}if(i=Ad,o=jd,jd=null,i!==null&&(Ad=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Td&3&&mf(),kf(t),a=t.pendingLanes,r&261930&&a&42?t===Nd?Md++:(Md=0,Nd=t):(Md=0,Nd=null),Af(0,!1)}}function pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ra(t)))}function mf(){return kd!==null&&(kd.skipTransition(),kd=null),uf(),df(),ff(),hf()}function hf(){if(Sd!==5)return!1;var e=Cd,t=Ed;Ed=0;var n=Et(Td),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=Dd,Dd=null;var a=Cd,o=Td;if(Sd=0,wd=Cd=null,Td=0,U&6)throw Error(s(331));var c=U;if(U|=4,Qu(a.current),Wu(a,a.current,o,n),U=c,Af(0,!1),it&&typeof it.onPostCommitFiberRoot==`function`)try{it.onPostCommitFiberRoot(rt,a)}catch{}return!0}finally{D.p=i,E.T=r,pf(e,t)}}function gf(e,t,n){t=Yi(n,t),t=jc(e.stateNode,t,2),e=Co(e,t,2),e!==null&&(bt(e,2),kf(e))}function J(e,t,n){if(e.tag===3)gf(e,e,n);else for(;t!==null;){if(t.tag===3){gf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(xd===null||!xd.has(r))){e=Yi(n,e),n=Mc(2),r=Co(t,n,2),r!==null&&(Nc(n,r,t,e),bt(r,2),kf(r));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(od=!0,i.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(cd===4||cd===3&&(K&62914560)===K&&300>Je()-_d?U&2?dd|=n:Wd(e,0):dd|=n,pd===K&&(pd=0)),kf(e)}function yf(e,t){t===0&&(t=vt()),e=Pi(e,t),e!==null&&(bt(e,t),kf(e))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yf(e,n)}function xf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),yf(e,n)}function Sf(e,t){return Ge(e,t)}var Cf=null,wf=null,Tf=!1,Ef=!1,Df=!1,Of=0;function kf(e){e!==wf&&e.next===null&&(wf===null?Cf=wf=e:wf=wf.next=e),Ef=!0,Tf||(Tf=!0,If())}function Af(e,t){if(!Df&&Ef){Df=!0;do for(var n=!1,r=Cf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ot(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ff(r,a))}else a=K,a=mt(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ht(r,a)||(n=!0,Ff(r,a))}r=r.next}while(n);Df=!1}}function jf(){Mf()}function Mf(){Ef=Tf=!1;var e=0;Of!==0&&vp()&&(e=Of);for(var t=Je(),n=null,r=Cf;r!==null;){var i=r.next,a=Nf(r,t);a===0?(r.next=null,n===null?Cf=i:n.next=i,i===null&&(wf=n)):(n=r,(e!==0||a&3)&&(Ef=!0)),r=i}Sd!==0&&Sd!==5||Af(e,!1),Of!==0&&(Of=0)}function Nf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ot(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=_t(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=mt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ht(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ke(r),Et(n)){case 2:case 8:n=Ze;break;case 32:n=Qe;break;case 268435456:n=et;break;default:n=Qe}return r=Pf.bind(null,e),n=Ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function Pf(e,t){if(Sd!==0&&Sd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(mf()&&e.callbackNode!==n)return null;var r=K;return r=mt(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Rd(e,r,t),Nf(e,Je()),e.callbackNode!=null&&e.callbackNode===n?Pf.bind(null,e):null)}function Ff(e,t){if(mf())return null;Rd(e,t,!0)}function If(){Cp(function(){U&6?Ge(Xe,jf):Mf()})}function Lf(){if(Of===0){var e=Wa;e===0&&(e=ut,ut<<=1,!(ut&261888)&&(ut=256)),Of=e}return Of}function Rf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Tn(e)}function zf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Rf((i[jt]||null).action),o=r.submitter;o&&(t=(t=o[jt]||null)?Rf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Of!==0){var e=new FormData(i,o);ac(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ac(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Bf=0;Bf<xi.length;Bf++){var Vf=xi[Bf];Si(Vf.toLowerCase(),`on`+(Vf[0].toUpperCase()+Vf.slice(1)))}Si(pi,`onAnimationEnd`),Si(mi,`onAnimationIteration`),Si(hi,`onAnimationStart`),Si(`dblclick`,`onDoubleClick`),Si(`focusin`,`onFocus`),Si(`focusout`,`onBlur`),Si(gi,`onTransitionRun`),Si(_i,`onTransitionStart`),Si(vi,`onTransitionCancel`),Si(yi,`onTransitionEnd`),Yt(`onMouseEnter`,[`mouseout`,`mouseover`]),Yt(`onMouseLeave`,[`mouseout`,`mouseover`]),Yt(`onPointerEnter`,[`pointerout`,`pointerover`]),Yt(`onPointerLeave`,[`pointerout`,`pointerover`]),Jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Hf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Uf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Hf));function Wf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[Nt];n===void 0&&(n=t[Nt]=new Set);var r=e+`__bubble`;n.has(r)||(Jf(t,e,2,!1),n.add(r))}function Gf(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var Kf=`_reactListening`+Math.random().toString(36).slice(2);function qf(e){if(!e[Kf]){e[Kf]=!0,Kt.forEach(function(t){t!==`selectionchange`&&(Uf.has(t)||Gf(t,!1,e),Gf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kf]||(t[Kf]=!0,Gf(`selectionchange`,!1,t))}}function Jf(e,t,n,r){switch(Eh(t)){case 2:var i=bh;break;case 8:i=xh;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!Fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Yf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Bt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}Mn(function(){var r=a,i=On(n),o=[];a:{var s=bi.get(e);if(s!==void 0){var c=Kn,u=e;switch(e){case`keypress`:if(Vn(n)===0)break a;case`keydown`:case`keyup`:c=ur;break;case`focusin`:u=`focus`,c=tr;break;case`focusout`:u=`blur`,c=tr;break;case`beforeblur`:case`afterblur`:c=tr;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=$n;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=er;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=pr;break;case pi:case mi:case hi:c=nr;break;case yi:c=mr;break;case`scroll`:case`scrollend`:c=Jn;break;case`wheel`:c=hr;break;case`copy`:case`cut`:case`paste`:c=rr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=dr;break;case`submit`:c=fr;break;case`toggle`:case`beforetoggle`:c=gr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Nn(m,p),g!=null&&d.push(Xf(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==Dn&&(u=n.relatedTarget||n.fromElement)&&(Bt(u)||u[Mt]))break a;(s||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?Bt(c):null,c!==null&&(f=l(c),d=c.tag,c!==f||d!==5&&d!==27&&d!==6)&&(c=null)):(s=null,c=r),s!==c&&(d=$n,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=dr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=s==null?u:Ht(s),h=c==null?u:Ht(c),u=new d(g,m+`leave`,s,n,i),u.target=f,u.relatedTarget=h,g=null,Bt(i)===r&&(d=new d(p,m+`enter`,c,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=s&&c?ne(s,c,Qf):null,s!==null&&$f(o,u,s,d,!1),c!==null&&f!==null&&$f(o,f,c,d,!0)))}a:{if(s=r?Ht(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=Ir;else if(Ar(s)){if(Lr)_=Kr;else{_=Wr;var v=Ur}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Sn(r.elementType)&&(_=Ir):_=Gr;if(_&&=_(e,r)){jr(o,_,n,i);break a}v&&v(e,s,r)}switch(v=r?Ht(r):window,e){case`focusin`:(Ar(v)||v.contentEditable===`true`)&&(ri=v,ii=r,ai=null);break;case`focusout`:ai=ii=ri=null;break;case`mousedown`:oi=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:oi=!1,si(o,n,i);break;case`selectionchange`:if(ni)break;case`keydown`:case`keyup`:si(o,n,i)}var y;if(vr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Er?wr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(xr&&n.locale!==`ko`&&(Er||b!==`onCompositionStart`?b===`onCompositionEnd`&&Er&&(y=Bn()):(Ln=i,Rn=`value`in Ln?Ln.value:Ln.textContent,Er=!0)),v=Zf(r,b),0<v.length&&(b=new ir(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=Tr(n),y!==null&&(b.data=y)))),(y=br?Dr(e,n):Or(e,n))&&(b=Zf(r,`onBeforeInput`),0<b.length&&(v=new ir(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),zf(o,e,r,n,i)}Wf(o,t)})}function Xf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Nn(e,n),i!=null&&r.unshift(Xf(e,i,a)),i=Nn(e,t),i!=null&&r.push(Xf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Qf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Nn(n,a),l!=null&&o.unshift(Xf(n,l,c))):i||(l=Nn(n,a),l!=null&&o.push(Xf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function np(e){return(typeof e==`string`?e:``+e).replace(ep,`
`).replace(tp,``)}function rp(e,t){return t=np(t),np(e)===t}function X(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||vn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&vn(e,``+r);else return;break;case`className`:nn(e,`class`,r);break;case`tabIndex`:nn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:nn(e,n,r);break;case`style`:xn(e,r,a);return;case`data`:if(t!==`object`){nn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Tn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,i.name,i,null),X(e,t,`formEncType`,i.formEncType,i,null),X(e,t,`formMethod`,i.formMethod,i,null),X(e,t,`formTarget`,i.formTarget,i,null)):(X(e,t,`encType`,i.encType,i,null),X(e,t,`method`,i.method,i,null),X(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Tn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=En);return;case`onScroll`:r!=null&&Y(`scroll`,e);return;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Tn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),tn(e,`popover`,r);break;case`xlinkActuate`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:tn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Cn.get(n)||n,tn(e,n,r);else return}j=!0}function ip(e,t,n,r,i,a){switch(n){case`style`:xn(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)vn(e,r);else if(typeof r==`number`||typeof r==`bigint`)vn(e,``+r);else return;break;case`onScroll`:r!=null&&Y(`scroll`,e);return;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=En);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!qt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[jt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}j=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):tn(e,n,r)}return}j=!0}function ap(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:X(e,t,a,o,n,null)}}i&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:X(e,t,r,d,n,null)}}pn(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Y(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:X(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&hn(e,!!r,n,!0):hn(e,!!r,t,!1);return;case`textarea`:for(o in Y(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:X(e,t,o,c,n,null)}_n(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<Hf.length;r++)Y(Hf[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:X(e,t,u,r,n,null)}return;default:if(Sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ip(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}var op={};function sp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(j=!0),a=m;break;case`name`:m!==f&&(j=!0),i=m;break;case`checked`:m!==f&&(j=!0),u=m;break;case`defaultChecked`:m!==f&&(j=!0),d=m;break;case`value`:m!==f&&(j=!0),o=m;break;case`defaultValue`:m!==f&&(j=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}fn(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||X(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:a!==l&&(j=!0),p=a;break;case`defaultValue`:a!==l&&(j=!0),c=a;break;case`multiple`:a!==l&&(j=!0),o=a;default:a!==l&&X(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?hn(e,!!n,n?[]:``,!1):hn(e,!!n,t,!0)):hn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(j=!0),p=i;break;case`defaultValue`:i!==a&&(j=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&X(e,t,o,i,r,a)}gn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(j=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(Sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ip(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ip(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function cp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function lp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&cp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&cp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var up=null,dp=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function mp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function hp(e,t,n,r){return n=fp(n).createElement(e),n[At]=r,n[jt]=t,ap(n,e,t),Wt(n),n}function gp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function vp(){var e=window.event;return e&&e.type===`popstate`?e!==_p&&(_p=e,!0):(_p=null,!1)}var yp=typeof setTimeout==`function`?setTimeout:void 0,bp=typeof clearTimeout==`function`?clearTimeout:void 0,xp=typeof Promise==`function`?Promise:void 0,Sp=typeof requestAnimationFrame==`function`?requestAnimationFrame:yp,Cp=typeof queueMicrotask==`function`?queueMicrotask:xp===void 0?yp:function(e){return xp.resolve(null).then(e).catch(wp)};function wp(e){setTimeout(function(){throw e})}function Tp(e){return e===`head`}function Ep(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Gh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Lt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bm(e.ownerDocument.body)}n=i}while(n);Gh(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Op(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function kp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Ap(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jp(e){return Ap(e.getBoundingClientRect(),getComputedStyle(e),e)}function Mp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Ap(t,n,e)}function Np(e){return e.documentElement.clientHeight}function Pp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Fp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Np(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=$m(f),u>nh){s.length=o;break}f=new Promise(Pp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Ip(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Ip.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ip.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ip.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Ip(`group`,e),imagePair:new Ip(`image-pair`,e),old:new Ip(`old`,e),new:new Ip(`new`,e)}}function Rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Rp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Up(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Vp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,zp,e,s,r)}this._eventListeners=a}};function zp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Rp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Up(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Vp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Bp,e,n,i),r.splice(t,1),a!==null&&a()}};function Bp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Vp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Up(e,t,n,r){if(e.length===0)return-1;r=Hp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Hp(a.optionsOrUseCapture)===r)return i}return-1}Rp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Rp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),gm(e,t))}Rp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Gp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Wp(t[n],e);n--);};function Gp(e,t){return t.push(e),!1}Rp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0))};function Kp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Rp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0)};function qp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Rp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Jp,e,void 0,void 0);for(var n=t=0;n<Yp.length;n++){var r=Yp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Yp[t++]=r}Yp.length=t}};function Jp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Yp=[],Xp=!1;function Zp(e,t,n){Yp.push({fragmentInstance:e,observer:t,instance:n}),Xp||(Xp=!0,_m(function(){Xp=!1;var e=Yp;Yp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Rp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Qp,e,void 0,void 0),e};function Qp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Rp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Rp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Gp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$p(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $p(e,t,n,r,i){var a=Bt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function em(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Rp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(s(566));var t=[];h(this._fragmentFiber.child,!1,Gp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),em(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=b(i),em(i,n)):b(i).scrollIntoView(e),r+=n?-1:1}};function tm(e,t){return e=b(e),nm(e,t),!1}function nm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Yp.length;i++){var a=Yp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Yp[r++]=a)}Yp.length=r,n.observe(e)}),nm(e,t))}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Zp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function am(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:am(n),zt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function om(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Lt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=fm(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=fm(e.nextSibling),e===null))return null;return e}function cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=fm(e.nextSibling),e===null))return null;return e}function lm(e){return e.data===`$?`||e.data===`$~`}function um(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function dm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function fm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pm=null;function mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return fm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function _m(e){Sp(function(){Sp(function(t){return e(t)})})}function vm(e,t,n){switch(t=fp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ym(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&X(e,t,r,null,op,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===En&&(e.onclick=null),zt(e)}function bm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zt(e)}var xm=new Map,Sm=new Set;function Cm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var wm=D.d;D.d={f:Tm,r:Em,D:km,C:Am,L:jm,m:Mm,X:Pm,S:Nm,M:Fm};function Tm(){var e=wm.f(),t=Hd();return e||t}function Em(e){var t=Vt(e);t!==null&&t.tag===5&&t.type===`form`?sc(t):wm.r(e)}var Dm=typeof document>`u`?null:document;function Om(e,t,n){var r=Dm;if(r&&typeof t==`string`&&t){var i=dn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ap(t,`link`,e),Wt(t),r.head.appendChild(t)))}}function km(e){wm.D(e),Om(`dns-prefetch`,e,null)}function Am(e,t){wm.C(e,t),Om(`preconnect`,e,t)}function jm(e,t,n){wm.L(e,t,n);var r=Dm;if(r&&e&&t){var i=`link[rel="preload"][as="`+dn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+dn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+dn(n.imageSizes)+`"]`)):i+=`[href="`+dn(e)+`"]`;var a=i;switch(t){case`style`:a=Lm(e);break;case`script`:a=Vm(e)}if(!(xm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Rm(a))||t===`script`&&r.querySelector(Hm(a))))){var o=r.createElement(`link`);ap(o,`link`,e),t===`style`&&(o[Rt]=!0,o.onload=o.onerror=function(){Gt(o)}),Wt(o),r.head.appendChild(o)}}}function Mm(e,t){wm.m(e,t);var n=Dm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+dn(r)+`"][href="`+dn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Vm(e)}if(!xm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),xm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Hm(a)))return}r=n.createElement(`link`),ap(r,`link`,e),Wt(r),n.head.appendChild(r)}}}function Nm(e,t,n){wm.S(e,t,n);var r=Dm;if(r&&e){var i=Ut(r).hoistableStyles,a=Lm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Rm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xm.get(a))&&Gm(e,n);var c=o=r.createElement(`link`);Wt(c),ap(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Wm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Pm(e,t){wm.X(e,t);var n=Dm;if(n&&e){var r=Ut(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=w({src:e,async:!0},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Wt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t){wm.M(e,t);var n=Dm;if(n&&e){var r=Ut(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Wt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t,n,r){var i=(i=Me.current)?Cm(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Lm(n.href),t=Ut(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Lm(n.href);var a=Ut(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(Rm(e)))?a._p||(o.instance=a,o.state.loading=5):(a=xm.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xm.set(e,a)),Bm(i,e,a,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Vm(n),t=Ut(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Lm(e){return`href="`+dn(e)+`"`}function Rm(e){return`link[rel="stylesheet"][`+e+`]`}function zm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Bm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Rt]){r.loading=1;return}}else t=e.createElement(`link`),t[Rt]=!0,t.onload=t.onerror=Gt.bind(null,t),ap(t,`link`,n),Wt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Vm(e){return`[src="`+dn(e)+`"]`}function Hm(e){return`script[async]`+e}function Um(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+dn(n.href)+`"]`);if(r)return t.instance=r,Wt(r),r;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Wt(r),ap(r,`style`,i),Wm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Lm(n.href);var a=e.querySelector(Rm(i));if(a)return t.state.loading|=4,t.instance=a,Wt(a),a;r=zm(n),(i=xm.get(i))&&Gm(r,i),a=(e.ownerDocument||e).createElement(`link`),Wt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),t.state.loading|=4,Wm(a,n.precedence,e),t.instance=a;case`script`:return a=Vm(n.src),(i=e.querySelector(Hm(a)))?(t.instance=i,Wt(i),i):(r=n,(i=xm.get(a))&&(r=w({},n),Km(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Wt(i),ap(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Wm(r,n.precedence,e));return t.instance}function Wm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var qm=null;function Jm(e,t,n){if(qm===null){var r=new Map,i=qm=new Map;i.set(n,r)}else i=qm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Lt]||a[At]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Xm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Zm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Qm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function $m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function eh(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=$m(t),e.suspenseyImages.push(t)),e=oh.bind(e),t.decode().then(e,e))}function th(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Lm(r.href),a=t.querySelector(Rm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ah.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Wt(a);return}a=t.ownerDocument||t,r=zm(r),(i=xm.get(i))&&Gm(r,i),a=a.createElement(`link`),Wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ah.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var nh=0;function rh(e,t){return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&nh===0&&(nh=62500*lp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ih(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ch(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ah(){this.count--,ih(this)}function oh(){this.imgCount--,ih(this)}var sh=null;function ch(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sh=new Map,t.forEach(lh,e),sh=null,ah.call(e))}function lh(e,t){if(!(t.state.loading&4)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ah.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var uh={$$typeof:T,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function dh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function fh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new dh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=zi(3,null,null,t),e.current=a,a.stateNode=e,t=La(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},bo(a),e}function ph(e){return e?(e=Li,e):Li}function mh(e,t,n,r,i,a){i=ph(i),r.context===null?r.context=i:r.pendingContext=i,r=So(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Co(e,r,t),n!==null&&(Ld(n,e,t),wo(n,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gh(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function _h(e){if(e.tag===13||e.tag===31){var t=Pi(e,67108864);t!==null&&Ld(t,e,67108864),gh(e,67108864)}}function vh(e){if(e.tag===13||e.tag===31){var t=Pd();t=Tt(t);var n=Pi(e,t);n!==null&&Ld(n,e,t),gh(e,t)}}var yh=!0;function bh(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,Sh(e,t,n,r)}finally{D.p=a,E.T=i}}function xh(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,Sh(e,t,n,r)}finally{D.p=a,E.T=i}}function Sh(e,t,n,r){if(yh){var i=Ch(r);if(i===null)Yf(e,t,r,wh,n),Fh(e,r);else if(Lh(i,e,t,n,r))r.stopPropagation();else if(Fh(e,r),t&4&&-1<Ph.indexOf(e)){for(;i!==null;){var a=Vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=pt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ot(o);s.entanglements[1]|=c,o&=~c}kf(a),!(U&6)&&(yd=Je()+500,Af(0,!1))}}break;case 31:case 13:s=Pi(a,2),s!==null&&Ld(s,a,2),Hd(),gh(a,2)}if(a=Ch(r),a===null&&Yf(e,t,r,wh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Yf(e,t,r,null,n)}}function Ch(e){return e=On(e),Th(e)}var wh=null;function Th(e){if(wh=null,e=Bt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wh=e,null}function Eh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ye()){case Xe:return 2;case Ze:return 8;case Qe:case $e:return 32;case et:return 268435456;default:return 32}default:return 32}}var Dh=!1,Oh=null,kh=null,Ah=null,jh=new Map,Mh=new Map,Nh=[],Ph=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Fh(e,t){switch(e){case`focusin`:case`focusout`:Oh=null;break;case`dragenter`:case`dragleave`:kh=null;break;case`mouseover`:case`mouseout`:Ah=null;break;case`pointerover`:case`pointerout`:jh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Mh.delete(t.pointerId)}}function Ih(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vt(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lh(e,t,n,r,i){switch(t){case`focusin`:return Oh=Ih(Oh,e,t,n,r,i),!0;case`dragenter`:return kh=Ih(kh,e,t,n,r,i),!0;case`mouseover`:return Ah=Ih(Ah,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return jh.set(a,Ih(jh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Mh.set(a,Ih(Mh.get(a)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=Bt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){vh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ch(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dn=r,n.target.dispatchEvent(r),Dn=null}else return t=Vt(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function Bh(e,t,n){zh(e)&&n.delete(t)}function Vh(){Dh=!1,Oh!==null&&zh(Oh)&&(Oh=null),kh!==null&&zh(kh)&&(kh=null),Ah!==null&&zh(Ah)&&(Ah=null),jh.forEach(Bh),Mh.forEach(Bh)}function Hh(e,n){e.blockedOn===n&&(e.blockedOn=null,Dh||(Dh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vh)))}var Uh=null;function Wh(e){Uh!==e&&(Uh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Uh===e&&(Uh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Th(r||n)===null)continue;break}var a=Vt(n);a!==null&&(e.splice(t,3),t-=3,ac(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Gh(e){function t(t){return Hh(t,e)}Oh!==null&&Hh(Oh,e),kh!==null&&Hh(kh,e),Ah!==null&&Hh(Ah,e),jh.forEach(t),Mh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&(n=Nh[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&Nh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[jt]||null;if(typeof a==`function`)o||Wh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[jt]||null)s=o.formAction;else if(Th(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Wh(n)}}}function Kh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function qh(e){this._internalRoot=e}Jh.prototype.render=qh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;mh(n,Pd(),e,t,null,null)},Jh.prototype.unmount=qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),Hd(),t[Mt]=null}};function Jh(e){this._internalRoot=e}Jh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&t!==0&&t<Nh[n].priority;n++);Nh.splice(n,0,e),n===0&&Rh(e)}};var Yh=r.version;if(Yh!==`19.3.1`)throw Error(s(527,Yh,`19.3.1`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Xh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zh.isDisabled&&Zh.supportsFiber)try{rt=Zh.inject(Xh),it=Zh}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Ec,a=Dc,o=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fh(e,1,!1,null,null,n,r,null,i,a,o,Kh),e[Mt]=t.current,qf(e),new qh(t)}})),c=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()}));function l(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function u(e,t=`|`){return e.map(e=>ue(e)).join(t)}function d(e,t){return typeof t==`bigint`?t.toString():t}var f=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};function p(e){return new f(e)}function m(e){return e==null}function h(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function g(e,t){let n=e/t,r=Math.round(n),i=4*2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}function _(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function v(e){let t=Object.getOwnPropertyDescriptor(e,`shape`);return t?.get?t.get.raw:t?.value}function y(e){return v(e._zod.def)??e._zod.def.shape}function b(e,t,n){Object.defineProperty(e,t,{get(){let e=n();return _(this,t,e),e},enumerable:!0,configurable:!0})}function x(e,t,n){t in e?_(e,t,n):e[t]=n}function S(e,t,n,r){let i=y(t);for(let a of n){let n=Object.getOwnPropertyDescriptor(i,a);n.enumerable&&(n.get?b(e,a,()=>{let e=t._zod.def.shape[a];return r?r(e,a):e}):x(e,a,r?r(n.value,a):n.value))}}function ee(e,t){for(let n of Reflect.ownKeys(t)){let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable&&(r.get?b(e,n,()=>t[n]):x(e,n,r.value))}}function te(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function C(e){return JSON.stringify(e)}function ne(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var w=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function re(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ie=p(()=>{if(Xe.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function ae(e){if(re(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return re(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function oe(e){return ae(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var se=new Set([`string`,`number`,`symbol`]);function ce(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function le(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function T(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function ue(e){return typeof e==`bigint`?e.toString()+`n`:typeof e==`string`?`"${e}"`:`${e}`}function de(e){return Object.keys(e).filter(t=>e[t]._zod.optin!==void 0&&e[t]._zod.optout===`optional`)}var fe={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},pe={int64:[BigInt(`-9223372036854775808`),BigInt(`9223372036854775807`)],uint64:[BigInt(0),BigInt(`18446744073709551615`)]};function me(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);let i={};return S(i,e,he(e,t)),le(e,te(n,{shape:i,checks:[]}))}function he(e,t){let n=y(e),r=[];for(let e of Reflect.ownKeys(t)){if(!Object.getOwnPropertyDescriptor(n,e)?.enumerable)throw Error(`Unrecognized key: "${String(e)}"`);t[e]&&r.push(e)}return r}function ge(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);let i=new Set(he(e,t)),a={};return S(a,e,Reflect.ownKeys(y(e)).filter(e=>!i.has(e))),le(e,te(n,{shape:a,checks:[]}))}function _e(e,t){if(!ae(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=y(e);for(let e of Reflect.ownKeys(t))if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return le(e,te(e._zod.def,{shape:ve(e,t)}))}function ve(e,t){let n={};return S(n,e,Reflect.ownKeys(y(e))),ee(n,t),n}function ye(e,t){if(!ae(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return le(e,te(e._zod.def,{shape:ve(e,t)}))}function be(e,t){if(!t?._zod?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);let n={};return S(n,e,Reflect.ownKeys(y(e))),S(n,t,Reflect.ownKeys(y(t))),le(e,te(e._zod.def,{shape:n,get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function xe(e,t,n,r=`partial`){let i=t._zod.def.checks;if(i&&i.length>0)throw Error(`.${r}() cannot be used on object schemas containing refinements`);let a=n?new Set(he(t,n)):void 0,o={};return S(o,t,Reflect.ownKeys(y(t)),e&&((t,n)=>a&&!a.has(n)?t:new e({type:`optional`,innerType:t}))),le(t,te(t._zod.def,{shape:o,checks:[]}))}function Se(e,t,n){let r=n?new Set(he(t,n)):void 0,i={};return S(i,t,Reflect.ownKeys(y(t)),(t,n)=>r&&!r.has(n)?t:new e({type:`nonoptional`,innerType:t})),le(t,te(t._zod.def,{shape:i}))}function Ce(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function we(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function E(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function D(e){return typeof e==`string`?e:e?.message}function Te(e){let t=[];for(let n of e??[]){let e=n._zod.def;if(!/_(length|size)$|_equals$/.test(e.check))break;let r=e.maximum??e.length??e.size;r>=0&&t.push([r,n])}return t}function Ee(e,t,n){var r;for(let i=t;i<e.length;i++)(r=e[i]).schema??(r.schema=n)}function De(e,t,n){var r;let i=e.inst?._zod?.traits;i?.has(`$ZodType`)&&(i.has(`$ZodCheck`)?(r=e).schema??(r.schema=e.inst):e.schema=e.inst);let a=e.schema===e.inst?void 0:e.schema?._zod.def?.error,o=e.message?e.message:D(e.inst?._zod.def?.error?.(e))??D(a?.(e))??D(t?.error?.(e))??D(n.customError?.(e))??D(n.localeError?.(e))??`Invalid input`,s={};for(let t of Object.keys(e))t!==`inst`&&t!==`schema`&&t!==`continue`&&t!==`input`&&t!==`__proto__`&&(s[t]=e[t]);return s.path??=[],s.message=o,t?.reportInput&&(s.input=e.input),s}var Oe=/[\uD800-\uDBFF]/;function ke(e){let t=e.length;if(!Oe.test(e))return t;let n=t;for(let r=0;r<t-1;r++)(e.charCodeAt(r)&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320&&(n--,r++);return n}function O(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function Ae(e){let t=typeof e;switch(t){case`number`:return Number.isNaN(e)?`nan`:`number`;case`object`:{if(e===null)return`null`;if(Array.isArray(e))return`array`;let t=e;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&`constructor`in t&&t.constructor)return t.constructor.name}}return t}function je(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function Me(e,t){for(let n in t){let r=Object.getOwnPropertyDescriptor(t,n);r.get?Object.defineProperty(e,n,{...r,enumerable:!1}):Ie(e,n,r.value)}}function Ne(e,t,n,r=!0){return Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:r,value:n}),n}function Pe(e,t,n){return Ne(e,t,n,!1)}function Fe(e,t){for(let n in e){let r=e[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return Ne(this,n,r(this))},set(e){Ne(this,n,e)}})}return t}function Ie(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){return this==null?n:Ne(this,t,n.bind(this))},set(e){Ne(this,t,e)}})}function Le(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}var Re,ze=!1,Be={configurable:!0,get(){ze=!0}};function k(e,t,n){let r=Object.getPrototypeOf(e._zod);t in r&&Re!==e._zod?Re=void 0:(Re=e._zod,Object.defineProperty(r,t,{configurable:!0,get(){Object.defineProperty(this,t,Be);let e=ze;ze=!1;try{let r=n(this);return ze?delete this[t]:Object.defineProperty(this,t,{configurable:!0,writable:!0,value:r}),ze||=e,r}catch(n){throw delete this[t],ze||=e,n}},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}}))}function Ve(e,t,n,r){let i=Le(e,t);i&&Object.defineProperty(i,t,{configurable:!0,get(){let e={configurable:!0,writable:!0,enumerable:r,value:void 0};return Object.defineProperty(this,t,e),e.value=n(this),Object.defineProperty(this,t,e),e.value},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:r,value:e})}})}var He=`~constantCatch`;function Ue(e){let t=()=>e;return t[He]=!0,t}var We,Ge={value:void 0,enumerable:!1},Ke=`captureStackTrace`in Error?Error:null;function qe(e){let t=Ke;if(t){let n=t.stackTraceLimit;if(typeof n==`number`){try{t.stackTraceLimit=0}catch{return Ke=null,new e}try{return new e}finally{t.stackTraceLimit=n}}}return new e}function A(e,t,n,r){let i={};function a(e){this.def=e,this.constr=d,this.traits=new Set}a.prototype=i;let o=n,s=o&&new WeakSet;function c(n,r){if(!n._zod){Ge.value=new a(r);try{Object.defineProperty(n,"_zod",Ge)}finally{Ge.value=void 0}}else if(n._zod.traits.has(e))return;if(n._zod.traits.add(e),t(n,r),s){let e=Object.getPrototypeOf(n),t=n._zod.constr.prototype,r=e;for(;r&&r!==t;)r=Object.getPrototypeOf(r);let i=r??e;s.has(i)||(s.add(i),Me(i,o))}let i=d.prototype;for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let l=r?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:e});function d(e){let t=r?.Parent?qe(u):this;c(t,e);let n=t._zod.deferred;if(n){for(let e of n)e();t._zod.deferred=void 0}let i=globalThis.__zod_globalConfig?.postProcessor;return i&&i(t),t}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:t=>r?.Parent&&t instanceof r.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}var Je=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Ye=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(We=globalThis).__zod_globalConfig??(We.__zod_globalConfig={});var Xe=globalThis.__zod_globalConfig;function Ze(e){return e&&Object.assign(Xe,e),Xe}function Qe(){let e=this._zod;return e.message??=JSON.stringify(e.def,d,2),e.message}function $e(e){this._zod.message=e}var et={get:Qe,set:$e,enumerable:!0,configurable:!0},tt={value:void 0,enumerable:!1},nt=new WeakSet([Object.prototype,Error.prototype]),rt=A(`$ZodError`,(e,t)=>{e.name=`$ZodError`,tt.value=t,Object.defineProperty(e,"issues",tt),tt.value=void 0,Object.defineProperty(e,"message",et);let n=Object.getPrototypeOf(e);nt.has(n)||(nt.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))});function it(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function at(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?it(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function ot(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.prototype.hasOwnProperty.call(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}function st(e,t){return{callee:t?.callee??e,Err:t?.Err}}var ct=e=>{let t=(n,r,i,a)=>{let o=i?{...i,async:!1}:{async:!1},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise)throw new Je;if(s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>De(e,o,Ze())));throw w(n,a?.callee??t),n}return s.value};return t},lt=e=>{let t=async(n,r,i,a)=>{let o=i?{...i,async:!0}:{async:!0},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise&&(s=await s),s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>De(e,o,Ze())));throw w(n,a?.callee??t),n}return s.value};return t},ut=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Je;return a.issues.length?dt(e,a.issues,i):{success:!0,data:a.value}};function dt(e,t,n){let r;return{success:!1,get error(){return r||(r=new e(t.map(e=>De(e,n,Ze()))),t=void 0,n=void 0),r},set error(e){r=e,t=void 0,n=void 0}}}var ft=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?dt(e,a.issues,i):{success:!0,data:a.value}},pt=Symbol.for(`zod.compile.invalid`),mt=Symbol.for(`zod.compile.fallback`),ht=((e,t,n)=>{let r=e._zod.bag.validator;if(r!==void 0){if(r(t)!==pt)return!0;if(r.definite===!0&&n===void 0)return!1}return gt(e,t,n)});function gt(e,t,n){let r=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},i=e._zod.bag.fallbackRun,a;if(i?(r[mt]=!0,a=i({value:t,issues:[]},r)):a=e._zod.run({value:t,issues:[]},r),a instanceof Promise)throw new Je;return a.issues.length===0}var _t=async(e,t,n)=>{let r=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0},i=e._zod.run({value:t,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length===0},vt=e=>{let t=ct(e),n=(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return t(e,r,o,st(n,a))};return n},yt=e=>{let t=ct(e),n=(e,r,i,a)=>t(e,r,i,st(n,a));return n},bt=e=>{let t=lt(e),n=async(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return await t(e,r,o,st(n,a))};return n},xt=e=>{let t=lt(e),n=async(e,r,i,a)=>await t(e,r,i,st(n,a));return n},St=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ut(e)(t,n,i)},Ct=e=>(t,n,r)=>ut(e)(t,n,r),wt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ft(e)(t,n,i)},Tt=e=>async(t,n,r)=>ft(e)(t,n,r),Et=/^[cC][0-9a-z]{6,}$/,Dt=/^[0-9a-z]+$/,Ot=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,kt=/^[0-9a-vA-V]{20}$/,At=/^[A-Za-z0-9]{27}$/,jt=/^[a-zA-Z0-9_-]{21}$/;function Mt(e){return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)}var Nt=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Pt=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Ft=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,It=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Lt=`^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function Rt(){return new RegExp(Lt,`u`)}var zt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Bt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Vt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ht=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ut=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Wt=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,Gt=/^https?$/,Kt=/^\+[1-9]\d{6,14}$/,qt=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function Jt(e){return RegExp(`^${e}$`)}var Yt=Jt(qt);function Xt(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:e.seconds?`${t}:[0-5]\\d(?:\\.\\d+)?`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Zt(e){return RegExp(`^${Xt(e)}$`)}function Qt(e){let t=[`Z`];e.offset&&t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let n=`${Xt({precision:e.precision,seconds:!0})}(?:${t.join(`|`)})`,r=e.local?`${n}|${Xt({precision:e.precision})}`:n;return RegExp(`^${qt}T(?:${r})$`)}var $t=/^[\s\S]{0,}$/,j=/^-?\d+$/,en=/^-?\d+(?:\.\d+)?$/,tn=/^(?:true|false)$/i,nn=/^[^A-Z]*$/,rn=/^[^a-z]*$/,an=A(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),on=e=>{let t=e.value;return!m(t)&&t.length!==void 0},sn={number:`number`,bigint:`bigint`,object:`date`},cn=A(`$ZodCheckLessThan`,(e,t)=>{an.init(e,t);let n=sn[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:sn[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ln=A(`$ZodCheckGreaterThan`,(e,t)=>{an.init(e,t);let n=sn[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:sn[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),un=A(`$ZodCheckMultipleOf`,(e,t)=>{an.init(e,t),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?t.value!==BigInt(0)&&n.value%t.value===BigInt(0):g(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),dn=A(`$ZodCheckNumberFormat`,(e,t)=>{an.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=fe[t.format];e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),fn=A(`$ZodCheckMaxLength`,(e,t)=>{var n;an.init(e,t),(n=e._zod.def).when??(n.when=on),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>t.maximum?ke(r):i)<=t.maximum)return;let a=O(r);n.issues.push({origin:a,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),pn=A(`$ZodCheckMinLength`,(e,t)=>{var n;an.init(e,t),(n=e._zod.def).when??(n.when=on),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>=t.minimum&&i<t.minimum*2?ke(r):i)>=t.minimum)return;let a=O(r);n.issues.push({origin:a,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),mn=A(`$ZodCheckLengthEquals`,(e,t)=>{var n;an.init(e,t),(n=e._zod.def).when??(n.when=on),e._zod.check=n=>{let r=n.value,i=r.length,a=typeof r==`string`&&i>=t.length&&i<=t.length*2?ke(r):i;if(a===t.length)return;let o=O(r),s=a>t.length;n.issues.push({origin:o,...s?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),hn=A(`$ZodCheckStringFormat`,(e,t)=>{var n,r;an.init(e,t),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),gn=A(`$ZodCheckRegex`,(e,t)=>{hn.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),_n=A(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=nn,hn.init(e,t)}),vn=A(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=rn,hn.init(e,t)}),yn=A(`$ZodCheckIncludes`,(e,t)=>{an.init(e,t);let n=ce(t.includes);t.pattern=new RegExp(typeof t.position==`number`?`^.{${t.position},}${n}`:n),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),bn=A(`$ZodCheckStartsWith`,(e,t)=>{an.init(e,t);let n=RegExp(`^${ce(t.prefix)}.*`);t.pattern??=n,e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),xn=A(`$ZodCheckEndsWith`,(e,t)=>{an.init(e,t);let n=RegExp(`.*${ce(t.suffix)}$`);t.pattern??=n,e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Sn=A(`$ZodCheckOverwrite`,(e,t)=>{an.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),Cn=class{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{--this.indent}}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.content??[``];return new e(...Object.keys(this.closed),`return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`)(...Object.values(this.closed))}},wn={major:4,minor:6,patch:7},Tn=A(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=wn;let r=e._zod.def.checks,i=e._zod.traits.has(`$ZodCheck`)?[e,...r??[]]:r?.length?[...r]:[];for(let t of i)for(let n of t._zod.onattach)n(e);if(i.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(t,n,r)=>{if(t.memo)return t;let i=Ce(t),a;for(let o of n){if(o._zod.def.when){if(we(t)||!o._zod.def.when(t))continue}else if(i)continue;let n=t.issues.length,s=o._zod.check(t);if(s instanceof Promise&&r?.async===!1)throw new Je;if(a||s instanceof Promise)a=(a??Promise.resolve()).then(async()=>{await s,t.issues.length!==n&&(Ee(t.issues,n,e),i||=Ce(t,n))});else{if(t.issues.length===n)continue;Ee(t.issues,n,e),i||=Ce(t,n)}}return a?a.then(()=>t):t},n=(n,r,a)=>{if(Ce(n))return n.aborted=!0,n;let o=t(r,i,a);if(o instanceof Promise){if(a.async===!1)throw new Je;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(r,a)=>{if(a.skipChecks)return e._zod.parse(r,a);if(a.direction===`backward`){let t=e._zod.parse({value:r.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,r,a)):n(t,r,a)}let o=e._zod.parse(r,a);if(o instanceof Promise){if(a.async===!1)throw new Je;return o.then(e=>t(e,i,a))}return t(o,i,a)}}},{get"~standard"(){return Pe(this,`~standard`,On(this))},set"~standard"(e){Ne(this,`~standard`,e)}}),En=(e,t)=>e.issues.length?{issues:e.issues.map(e=>De(e,t,Ze()))}:{value:e.value};async function Dn(e,t){let n={async:!0};return En(await e._zod.run({value:t,issues:[]},n),n)}function On(e){return{validate:t=>{let n={async:!1};try{let r=e._zod.run({value:t,issues:[]},n);if(!(r instanceof Promise))return En(r,n)}catch{}return Dn(e,t)},vendor:`zod`,version:1}}var kn=A(`$ZodString`,(e,t)=>{Tn.init(e,t),e._zod.pattern=t.pattern??$t,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),M=A(`$ZodStringFormat`,(e,t)=>{hn.init(e,t),kn.init(e,t)}),An=A(`$ZodGUID`,(e,t)=>{t.pattern??=Pt,M.init(e,t)}),jn=A(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Ft(e)}else t.pattern??=Ft();M.init(e,t)}),Mn=A(`$ZodEmail`,(e,t)=>{t.pattern??=It,M.init(e,t)});function Nn(e){try{return typeof URL<`u`&&typeof URL.canParse==`function`?URL.canParse(e):(new URL(e),!0)}catch{return!1}}function Pn(e,t){return!(`normalize`in t)&&!(`hostname`in t)&&!(`protocol`in t)?Nn(e)||2:Fn(e,t)}function Fn(e,t){if(!t.normalize&&t.protocol?.source===Gt.source&&!/^https?:\/\//i.test(e))return 1;try{if(typeof URL<`u`){let t=URL;if(typeof t.parse==`function`)return t.parse(e)??2}return new URL(e)}catch{return 2}}var In=/[\t\n\r]/g;function Ln(e){return e.replace(In,``)}function Rn(e,t){return t.lastIndex=0,t.test(e.hostname)}function zn(e,t){return t.lastIndex=0,t.test(e.protocol.endsWith(`:`)?e.protocol.slice(0,-1):e.protocol)}var Bn=A(`$ZodURL`,(e,t)=>{M.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=Pn(r,t);if(i===1){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}if(i===2){n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort});return}if(i===!0){n.value=Ln(r);return}t.hostname&&!Rn(i,t.hostname)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort}),t.protocol&&!zn(i,t.protocol)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort}),n.value=t.normalize?i.href:Ln(r);return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Vn=A(`$ZodEmoji`,(e,t)=>{t.pattern??=Rt(),M.init(e,t)}),Hn=A(`$ZodNanoID`,(e,t)=>{if(t.length!==void 0&&(!Number.isInteger(t.length)||t.length<1))throw Error(`Invalid nanoid length: ${t.length}`);t.pattern??=t.length===void 0?jt:Mt(t.length),M.init(e,t)}),Un=A(`$ZodCUID`,(e,t)=>{t.pattern??=Et,M.init(e,t)}),Wn=A(`$ZodCUID2`,(e,t)=>{t.pattern??=Dt,M.init(e,t)}),Gn=A(`$ZodULID`,(e,t)=>{t.pattern??=Ot,M.init(e,t)}),Kn=A(`$ZodXID`,(e,t)=>{t.pattern??=kt,M.init(e,t)}),qn=A(`$ZodKSUID`,(e,t)=>{t.pattern??=At,M.init(e,t)}),Jn=A(`$ZodISODateTime`,(e,t)=>{t.pattern??=Qt(t),M.init(e,t)}),Yn=A(`$ZodISODate`,(e,t)=>{t.pattern??=Yt,M.init(e,t)}),Xn=A(`$ZodISOTime`,(e,t)=>{t.pattern??=Zt(t),M.init(e,t)}),Zn=A(`$ZodISODuration`,(e,t)=>{t.pattern??=Nt,M.init(e,t)}),Qn=A(`$ZodIPv4`,(e,t)=>{t.pattern??=zt,M.init(e,t)}),$n=/^[0-9a-fA-F:.]+$/;function er(e){return $n.test(e)?Nn(`http://[${e}]`):!1}var tr=A(`$ZodIPv6`,(e,t)=>{t.pattern??=Bt,M.init(e,t),e._zod.check=n=>{er(n.value)||n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}),nr=A(`$ZodCIDRv4`,(e,t)=>{t.pattern??=Vt,M.init(e,t)});function rr(e){let t=e.split(`/`);if(t.length!==2)return!1;let[n,r]=t;if(!r)return!1;let i=Number(r);return`${i}`!==r||i<0||i>128?!1:er(n)}var ir=A(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Ht,M.init(e,t),e._zod.check=n=>{rr(n.value)||n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}});function ar(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var or=/^[0-9a-zA-Z+/]*={0,2}$/,sr=A(`$ZodBase64`,(e,t)=>{t.pattern??=or,M.init(e,t),e._zod.check=n=>{ar(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}}),cr=/^[A-Za-z0-9_-]*$/;function lr(e){if(!cr.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return ar(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var ur=A(`$ZodBase64URL`,(e,t)=>{t.pattern??=cr,M.init(e,t),e._zod.check=n=>{lr(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),dr=A(`$ZodE164`,(e,t)=>{t.pattern??=Kt,M.init(e,t)});function fr(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var pr=A(`$ZodJWT`,(e,t)=>{M.init(e,t),e._zod.check=n=>{fr(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),mr=A(`$ZodNumber`,(e,t)=>{Tn.init(e,t),e._zod.pattern=en,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),hr=A(`$ZodNumberFormat`,(e,t)=>{dn.init(e,t),mr.init(e,t)}),gr=A(`$ZodBoolean`,(e,t)=>{Tn.init(e,t),e._zod.pattern=tn,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let i=n.value;return typeof i==`boolean`||n.issues.push({expected:`boolean`,code:`invalid_type`,input:i,inst:e}),n}}),_r=A(`$ZodUnknown`,(e,t)=>{Tn.init(e,t),e._zod.parse=e=>e}),vr=A(`$ZodNever`,(e,t)=>{Tn.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function yr(e,t){let n=Te(e._zod.def.checks);if(!n.length)return;let r=Math.min(...n.map(e=>e[0])),i=e._zod.parse;e._zod.parse=(n,a)=>{let o=t(n.value);if(o>r&&!a?.skipChecks&&a?.direction!==`backward`){for(let[t,r]of Te(e._zod.def.checks))if(o>t&&r._zod.def.when(n)){let t=n.issues.length;return r._zod.check(n),n.issues[t].continue=!1,Ee(n.issues,t,e),n}}return i(n,a)}}var br=e=>Array.isArray(e)?e.length:-1;function xr(e,t,n){e.issues.length&&t.issues.push(...E(n,e.issues)),t.value[n]=e.value}var Sr=A(`$ZodArray`,(e,t)=>{Tn.init(e,t);let n=Xe.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({expected:`array`,code:`invalid_type`,input:a,inst:e}),r;r.value=n?n.alloc(e,r,Array(a.length),i):Array(a.length);let o=[],s=i?.abortEarly;for(let e=0;e<a.length;e++){let n=a[e],c=t.element._zod.run({value:n,issues:[]},i);if(c instanceof Promise)o.push(c.then(t=>xr(t,r,e)));else if(xr(c,r,e),s&&c.issues.length!==0&&Ce(c))break}return o.length?Promise.all(o).then(()=>r):r},yr(e,br)});function Cr(e,t,n,r,i,a){let o=n in r,s=a===`optional`;if(o||!s||i!==`optional`){if(e.issues.length){if(i!==void 0&&s&&!o)return;t.issues.push(...E(n,e.issues))}!o&&i===void 0?e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]}):e.value===void 0?(o||i===`defaulted`&&!s)&&(t.value[n]=void 0):t.value[n]=e.value}}var wr=[];function Tr(e){let t=Object.keys(e.shape),n=Object.getOwnPropertySymbols(e.shape),r=n.length?n:wr,i=r.length?[...t,...r]:t;for(let t of i)if(!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);let a=de(e.shape);return{...e,allKeys:i,symbolKeys:r,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(a)}}function Er(e,t,n,r,i,a,o){let s=[],c=i.keySet,l=i.catchall._zod,u=l.def.type,d=l.optin,f=l.optout,p=0;for(let i in t){if(o&&n.issues.length!==p){if(Ce(n,p))break;p=n.issues.length}if(c.has(i))continue;if(i===`__proto__`){u===`never`&&s.push(i);continue}if(u===`never`){s.push(i);continue}let a=l.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>Cr(e,n,i,t,d,f))):Cr(a,n,i,t,d,f)}return s.length&&n.issues.push({code:`unrecognized_keys`,keys:s,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var Dr=A(`$ZodObject`,(e,t)=>{Tn.init(e,t);let n=Object.getOwnPropertyDescriptor(t,`shape`),r=n?.get?n.get.raw:t.shape??{};if(r){let e=()=>{let n={...r};return Object.defineProperty(t,"shape",{value:n}),e.raw=n,n};e.raw=r,Object.defineProperty(t,"shape",{get:e})}let i=p(()=>Tr(t));k(e,`propValues`,e=>{let t=e.def.shape,n={};for(let e in t){let r=t[e]._zod;if(r.values){Object.prototype.hasOwnProperty.call(n,e)||_(n,e,new Set);for(let t of r.values)n[e].add(t);r.optin!==void 0&&n[e].add(void 0)}}return n});let a=re,o=t.catchall,s,c=Xe.memoizer;c?.attach(e),e._zod.parse=(t,n)=>{s??=i.value;let r=t.value;if(!a(r))return t.issues.push({expected:`object`,code:`invalid_type`,input:r,inst:e}),t;t.value=c?c.alloc(e,t,{},n):{};let l=[],u=s.shape,d=n?.abortEarly,f=t.issues.length;for(let e of s.allKeys){if(d&&t.issues.length!==f){if(Ce(t,f))break;f=t.issues.length}if(e===`__proto__`)continue;let i=u[e],a=i._zod.optin,o=i._zod.optout,s=i._zod.run({value:r[e],issues:[]},n);s instanceof Promise?l.push(s.then(n=>Cr(n,t,e,r,a,o))):Cr(s,t,e,r,a,o)}return o?Er(l,r,t,n,i.value,e,d===!0):l.length?Promise.all(l).then(()=>t):t}}),Or=A(`$ZodObjectJIT`,(e,t)=>{Dr.init(e,t);let n=e._zod.parse,r=p(()=>Tr(t)),i=Xe.memoizer,a=t=>{let n=r.value,a=n.symbolKeys,o=new Cn([`payload`,`ctx`],{shape:t,inst:e,memo:i,syms:a}),s=e=>`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,c=(e,t)=>`
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;o.write(`const input = payload.value;`);let l=Object.create(null),u=0;for(let e of n.allKeys)l[e]=`key_${u++}`;o.write(i?`const newResult = memo.alloc(inst, payload, {}, ctx);`:`const newResult = {};`);for(let e of n.allKeys){if(e===`__proto__`)continue;let n=l[e],r=typeof e==`symbol`?`syms[${a.indexOf(e)}]`:C(e),i=`${r} in input`,u=t[e],d=u?._zod?.optin,f=d!==void 0,p=u?._zod?.optout===`optional`;if(o.write(`const ${n} = ${s(r)};`),f&&p){let e=d===`optional`?`${n}_present`:`${n}.value !== undefined || ${n}_present`;o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n,r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `)}else f?(o.write(`
        if (${n}.issues.length) {${c(n,r)}
        }
      `),d===`defaulted`?o.write(`newResult[${r}] = ${n}.value;`):o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)):o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n,r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `)}return o.write(`payload.value = newResult;`),o.write(`return payload;`),o.compile()},o,s=re,c=!Xe.jitless,l=c&&ie.value,u=t.catchall,d;e._zod.parse=(i,f)=>{d??=r.value;let p=i.value;return s(p)?c&&l&&f?.async===!1&&f.jitless!==!0?(o||=a(t.shape),i=o(i,f),u?Er([],p,i,f,d,e,f?.abortEarly===!0):i):n(i,f):(i.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),i)}});function kr(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!Ce(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>De(e,r,Ze())))}),t)}var Ar=A(`$ZodUnion`,(e,t)=>{Tn.init(e,t),k(e,`optin`,e=>e.def.options.some(e=>e._zod.optin===`defaulted`)?`defaulted`:e.def.options.some(e=>e._zod.optin!==void 0)?`optional`:void 0),k(e,`optout`,e=>e.def.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),k(e,`values`,e=>{if(e.def.options.every(e=>e._zod.values))return new Set(e.def.options.flatMap(e=>Array.from(e._zod.values)))}),k(e,`pattern`,e=>{if(e.def.options.every(e=>e._zod.pattern)){let t=e.def.options.map(e=>e._zod.pattern);return RegExp(`^(${t.map(e=>h(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>kr(t,r,e,i)):kr(o,r,e,i)}}),jr=A(`$ZodIntersection`,(e,t)=>{Tn.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>Nr(e,t,n)):Nr(e,i,a)}});function Mr(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(ae(e)&&ae(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.prototype.hasOwnProperty.call(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=Mr(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Mr(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Nr(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=Mr(t.value,n.value);if(!c.valid){if(Ce(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var Pr=A(`$ZodRecord`,(e,t)=>{Tn.init(e,t);let n=Xe.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!ae(a))return r.issues.push({expected:`record`,code:`invalid_type`,input:a,inst:e}),r;let o=[],s=t.keyType._zod.values;if(s&&!t.partial){r.value=n?n.alloc(e,r,{},i):{};let c=new Set;for(let n of s)if(typeof n==`string`||typeof n==`number`||typeof n==`symbol`){if(c.add(typeof n==`number`?n.toString():n),n===`__proto__`)continue;let s=t.keyType._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(s.issues.length){r.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>De(e,i,Ze())),input:n,path:[n],inst:e});continue}let l=s.value;if(l===`__proto__`)continue;let u=t.valueType._zod.run({value:a[n],issues:[]},i);u instanceof Promise?o.push(u.then(e=>{e.issues.length&&r.issues.push(...E(n,e.issues)),r.value[l]=e.value})):(u.issues.length&&r.issues.push(...E(n,u.issues)),r.value[l]=u.value)}let l;for(let e in a)if(!c.has(e)){if(t.mode===`loose`){if(e===`__proto__`)continue;r.value[e]=a[e]}else l??=[],l.push(e)}l&&l.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:l,continue:!0})}else{r.value=n?n.alloc(e,r,{},i):{};let c;for(let n of Reflect.ownKeys(a)){if(n===`__proto__`||!Object.prototype.propertyIsEnumerable.call(a,n))continue;let l=t.keyType._zod.run({value:n,issues:[]},i);if(l instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof n==`string`&&en.test(n)&&l.issues.length){let e=t.keyType._zod.run({value:Number(n),issues:[]},i);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(l=e)}if(l.issues.length){t.mode===`loose`?r.value[n]=a[n]:s?(c??=[],c.push(n)):r.issues.push({code:`invalid_key`,origin:`record`,issues:l.issues.map(e=>De(e,i,Ze())),input:n,path:[n],inst:e});continue}let u=l.value;if(u===`__proto__`)continue;let d=t.valueType._zod.run({value:a[n],issues:[]},i);d instanceof Promise?o.push(d.then(e=>{e.issues.length&&r.issues.push(...E(n,e.issues)),r.value[u]=e.value})):(d.issues.length&&r.issues.push(...E(n,d.issues)),r.value[u]=d.value)}c&&c.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:c,continue:!0})}return o.length?Promise.all(o).then(()=>r):r}}),Fr=A(`$ZodEnum`,(e,t)=>{Tn.init(e,t);let n=l(t.entries),r=new Set(n);e._zod.values=r,k(e,`pattern`,e=>{let t=l(e.def.entries).filter(e=>se.has(typeof e));return RegExp(t.length?`^(${t.map(e=>ce(e.toString())).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Ir=A(`$ZodTransform`,(e,t)=>{Tn.init(e,t),e._zod.optin=`optional`,Xe.memoizer?.guard(e),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Ye(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new Je;return n.value=i,n}});function Lr(e,t){return e.value=t.issues.length?void 0:t.value,e}var Rr=A(`$ZodOptional`,(e,t)=>{Tn.init(e,t),k(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),e._zod.optout=`optional`,k(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t,void 0]):void 0}),k(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${h(t.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(e.value===void 0){if(t.innerType._zod.optin!==`defaulted`)return e;let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(t=>Lr(e,t)):Lr(e,r)}return t.innerType._zod.run(e,n)}}),zr=A(`$ZodExactOptional`,(e,t)=>{Rr.init(e,t),k(e,`values`,e=>e.def.innerType._zod.values),k(e,`pattern`,e=>e.def.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),Br=A(`$ZodNullable`,(e,t)=>{Tn.init(e,t),k(e,`optin`,e=>e.def.innerType._zod.optin),k(e,`optout`,e=>e.def.innerType._zod.optout),k(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${h(t.source)}|null)$`):void 0}),k(e,`values`,e=>e.def.innerType._zod.values?new Set([...e.def.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),Vr=A(`$ZodDefault`,(e,t)=>{Tn.init(e,t),e._zod.optin=`defaulted`,k(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>Hr(e,t)):Hr(r,t)}});function Hr(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var Ur=A(`$ZodPrefault`,(e,t)=>{Tn.init(e,t),e._zod.optin=`defaulted`,k(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),Wr=A(`$ZodNonOptional`,(e,t)=>{Tn.init(e,t),k(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>Gr(t,e)):Gr(i,e)}});function Gr(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}function Kr(e,t,n,r){return t.issues.length?(e.value=n.catchValue({...t,value:e.value,error:{issues:t.issues.map(e=>De(e,r,Ze()))},input:e.value}),e):(e.value=t.value,t.memo&&(e.memo=!0),e)}var qr=A(`$ZodCatch`,(e,t)=>{Tn.init(e,t),k(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),k(e,`optout`,e=>e.def.innerType._zod.optout),k(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(r=>Kr(e,r,t,n)):Kr(e,r,t,n)}}),Jr=A(`$ZodPipe`,(e,t)=>{Tn.init(e,t),k(e,`values`,e=>e.def.in._zod.values),k(e,`optin`,e=>e.def.in._zod.optin),k(e,`optout`,e=>e.def.out._zod.optout),k(e,`propValues`,e=>e.def.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Yr(e,t.in,n)):Yr(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Yr(e,t.out,n)):Yr(r,t.out,n)}});function Yr(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var Xr=A(`$ZodReadonly`,(e,t)=>{Tn.init(e,t),k(e,`propValues`,e=>e.def.innerType._zod.propValues),k(e,`values`,e=>e.def.innerType._zod.values),k(e,`optin`,e=>e.def.innerType?._zod?.optin),k(e,`optout`,e=>e.def.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Zr):Zr(r)}});function Zr(e){return e.memo||(e.value=Object.freeze(e.value)),e}var Qr=A(`$ZodCustom`,(e,t)=>{an.init(e,t),Tn.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>$r(t,n,r,e));$r(i,n,r,e)}});function $r(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(je(e))}}var ei=class extends Error{constructor(){super(`Cannot parse a reference cycle that closes through a transform`),this.name=`ZodCyclicError`}},ti=`~memo`,ni=[];function ri(e){return typeof e==`object`&&!!e}function ii(e){return e.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}var ai=new WeakMap,oi=0,si=1,ci=2;function li(e,t,n){let r=ai.get(e);if(r!==void 0)return r?ci:oi;if(t.has(e))return ci;t.add(e);let i=oi,a=e=>{if(i!==ci&&e?._zod){let r=li(e,t,n);r>i&&(i=r)}},o=(e,r)=>{let i=oi;for(let a of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,a);if(r&&!o.enumerable)continue;let s=o.get?si:o.value?._zod?li(o.value,t,n):oi;s>i&&(i=s)}return i},s=e=>{e>i&&(i=e)},c=e._zod.def;switch(c.type){case`object`:{let e=v(c);s(e?o(e,!0):si),a(c.catchall);break}case`array`:a(c.element);break;case`tuple`:for(let e of c.items)a(e);a(c.rest);break;case`record`:case`map`:a(c.keyType),a(c.valueType);break;case`set`:a(c.valueType);break;case`union`:for(let e of c.options)a(e);break;case`intersection`:a(c.left),a(c.right);break;case`optional`:case`nullable`:case`default`:case`prefault`:case`catch`:case`readonly`:case`nonoptional`:case`promise`:case`success`:a(c.innerType);break;case`pipe`:a(c.in),a(c.out);break;case`function`:a(c.input),a(c.output);break;case`lazy`:{let r=c._cachedInner??(n?e._zod.innerType:void 0);s(r?li(r,t,!1):si);break}case`template_literal`:case`string`:case`number`:case`int`:case`boolean`:case`bigint`:case`symbol`:case`undefined`:case`null`:case`void`:case`never`:case`any`:case`unknown`:case`date`:case`nan`:case`enum`:case`literal`:case`file`:case`transform`:case`custom`:break;default:for(let e in c){let t=Object.getOwnPropertyDescriptor(c,e);if(!t||t.get)continue;let n=t.value;if(n&&typeof n==`object`){if(n._zod)a(n);else if(Array.isArray(n))for(let e of n)a(e)}}}return t.delete(e),ui(e,i)}function ui(e,t){return t!==si&&ai.set(e,t===ci),t}function di(e,t){let n=e.buckets.get(t);return n||(n=new WeakMap,e.buckets.set(t,n)),n}var fi,pi=[],mi={alloc(e,t,n){let r=fi;if(!r)return n;fi=void 0;let i={value:n,issues:null};return r.set(t.value,i),pi.push(i),n},guard(e){var t;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,n=(e,n)=>{if(n.direction!==`backward`&&gi(n,e.value))throw new ei;return t(e,n)};e._zod.parse=n,e._zod.run===t&&(e._zod.run=n)})},attach(e){var t;let n,r=!1,i,a;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,o=(s,c)=>{if(n===void 0){let i=li(e,new Set,!1);if(i===oi)return e._zod.parse=t,e._zod.run===o&&(e._zod.run=t),t(s,c);i===ci||r?n=!0:r=!0}let l=s.value;if(!ri(l))return t(s,c);let u=c[ti];u||(u={buckets:new WeakMap,backEdges:void 0},c[ti]=u);let d;i===c?d=a:(d=di(u,e),i=c,a=d);let f=d.get(l);if(f)return s.value=f.value,f.issues?f.issues.length&&s.issues.push(...ii(f.issues)):(s.memo=!0,u.backEdges??(u.backEdges=new WeakSet),u.backEdges.add(f.value)),s;fi=d;let p=pi.length,m=t(s,c);fi=void 0;let h=pi.length>p?pi.pop():void 0;return m instanceof Promise?m.then(e=>(h&&(h.issues=e.issues.length?ii(e.issues):ni),e)):(h&&(h.issues=m.issues.length?ii(m.issues):ni),m)};e._zod.parse=o,e._zod.run===t&&(e._zod.run=o)})}};function hi(){return mi}function gi(e,t){let n=e[ti]?.backEdges;return n!==void 0&&ri(t)&&n.has(t)}var _i=()=>{let e={string:{unit:`characters`,verb:`to have`},file:{unit:`bytes`,verb:`to have`},array:{unit:`items`,verb:`to have`},set:{unit:`items`,verb:`to have`},map:{unit:`entries`,verb:`to have`}};function t(t){return e[t]??null}let n={regex:`input`,email:`email address`,url:`URL`,emoji:`emoji`,uuid:`UUID`,uuidv4:`UUIDv4`,uuidv6:`UUIDv6`,nanoid:`nanoid`,guid:`GUID`,cuid:`cuid`,cuid2:`cuid2`,ulid:`ULID`,xid:`XID`,ksuid:`KSUID`,datetime:`ISO datetime`,date:`ISO date`,time:`ISO time`,duration:`ISO duration`,ipv4:`IPv4 address`,ipv6:`IPv6 address`,mac:`MAC address`,cidrv4:`IPv4 range`,cidrv6:`IPv6 range`,base64:`base64-encoded string`,base64url:`base64url-encoded string`,json_string:`JSON string`,e164:`E.164 number`,currency_code:`currency code`,credit_card:`credit card number`,iban:`IBAN`,jwt:`JWT`,template_literal:`input`},r={nan:`NaN`};function i(e,t){return e===`number`&&typeof t==`number`&&!Number.isFinite(t)?String(t):r[e]??e}return e=>{switch(e.code){case`invalid_type`:return`Invalid input: expected ${i(e.expected)}, received ${i(Ae(e.input),e.input)}`;case`invalid_value`:return e.values.length===1?`Invalid input: expected ${ue(e.values[0])}`:`Invalid option: expected one of ${u(e.values,`|`)}`;case`too_big`:{let n=e.exact?`exactly `:e.inclusive?`<=`:`<`,r=t(e.origin);return r?`Too big: expected ${e.origin??`value`} to have ${n}${e.maximum.toString()} ${r.unit??`elements`}`:`Too big: expected ${e.origin??`value`} to be ${n}${e.maximum.toString()}`}case`too_small`:{let n=e.exact?`exactly `:e.inclusive?`>=`:`>`,r=t(e.origin);return r?`Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`:`Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`}case`invalid_format`:{let t=e;return t.format===`starts_with`?`Invalid string: must start with "${t.prefix}"`:t.format===`ends_with`?`Invalid string: must end with "${t.suffix}"`:t.format===`includes`?`Invalid string: must include "${t.includes}"`:t.format===`regex`?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${n[t.format]??e.format}`}case`not_multiple_of`:return`Invalid number: must be a multiple of ${e.divisor}`;case`unrecognized_keys`:return`Unrecognized key${e.keys.length>1?`s`:``}: ${u(e.keys,`, `)}`;case`invalid_key`:return`Invalid key in ${e.origin}`;case`invalid_union`:return e.options&&Array.isArray(e.options)&&e.options.length>0?`Invalid discriminator value. Expected ${e.options.map(e=>`'${e}'`).join(` | `)}`:e.inclusive===!1?`Invalid input: more than one option matched`:`Invalid input`;case`invalid_element`:return`Invalid value in ${e.origin}`;default:return`Invalid input`}}};function vi(){return{localeError:_i()}}var yi,bi=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function xi(){return new bi}(yi=globalThis).__zod_globalRegistry??(yi.__zod_globalRegistry=xi());var Si=globalThis.__zod_globalRegistry;function Ci(e){return e.checks&&=[...e.checks],e}function wi(e,t){return new e(Ci({type:`string`,...T(t)}))}function Ti(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...T(t)})}function Ei(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...T(t)})}function Di(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...T(t)})}function Oi(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...T(t)})}function ki(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...T(t)})}function Ai(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...T(t)})}function ji(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...T(t)})}function Mi(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...T(t)})}function Ni(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...T(t)})}function Pi(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...T(t)})}function Fi(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...T(t)})}function Ii(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...T(t)})}function Li(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...T(t)})}function Ri(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...T(t)})}function zi(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...T(t)})}function Bi(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...T(t)})}function Vi(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...T(t)})}function Hi(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...T(t)})}function Ui(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...T(t)})}function Wi(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...T(t)})}function Gi(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...T(t)})}function Ki(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...T(t)})}function qi(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...T(t)})}function Ji(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...T(t)})}function Yi(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...T(t)})}function Xi(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...T(t)})}function Zi(e,t){return new e(Ci({type:`number`,checks:[],...T(t)}))}function Qi(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...T(t)})}function $i(e,t){return new e({type:`boolean`,...T(t)})}function ea(e){return new e({type:`unknown`})}function ta(e,t){return new e({type:`never`,...T(t)})}function na(e,t){return new cn({check:`less_than`,...T(t),value:e,inclusive:!1})}function ra(e,t){return new cn({check:`less_than`,...T(t),value:e,inclusive:!0})}function ia(e,t){return new ln({check:`greater_than`,...T(t),value:e,inclusive:!1})}function aa(e,t){return new ln({check:`greater_than`,...T(t),value:e,inclusive:!0})}function oa(e,t){return new un({check:`multiple_of`,...T(t),value:e})}function sa(e,t){return new fn({check:`max_length`,...T(t),maximum:e})}function ca(e,t){return new pn({check:`min_length`,...T(t),minimum:e})}function la(e,t){return new mn({check:`length_equals`,...T(t),length:e})}function ua(e,t){return new gn({check:`string_format`,format:`regex`,...T(t),pattern:e})}function N(e){return new _n({check:`string_format`,format:`lowercase`,...T(e)})}function P(e){return new vn({check:`string_format`,format:`uppercase`,...T(e)})}function da(e,t){return new yn({check:`string_format`,format:`includes`,...T(t),includes:e})}function fa(e,t){return new bn({check:`string_format`,format:`starts_with`,...T(t),prefix:e})}function pa(e,t){return new xn({check:`string_format`,format:`ends_with`,...T(t),suffix:e})}function ma(e){return new Sn({check:`overwrite`,tx:e})}function ha(e){return ma(t=>t.normalize(e))}function ga(){return ma(e=>e.trim())}function _a(){return ma(e=>e.toLowerCase())}function va(){return ma(e=>e.toUpperCase())}function ya(){return ma(e=>ne(e))}function ba(e,t,n){return new e({type:`array`,element:t,...T(n)})}function xa(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...T(n)})}function Sa(e,t){let n=Ca(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(je(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,`input`in r||(r.input=t.value),r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(je(r))}},e(t.value,t)),t);return n}function Ca(e,t){let n=new an({check:`custom`,...T(t)});return n._zod.check=e,n}function wa(e,...t){for(let n of t)for(let t of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,t)&&_(e,t,n[t]);return e}function Ta(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Si,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,intersections:[],deferred:[],external:e?.external??void 0}}function Ea(e,t,n,r,i){let a=typeof t.unrepresentable==`function`?t.unrepresentable({zodSchema:e,path:r.path,message:i}):t.unrepresentable;if(a===`any`)return!1;if(a===void 0||a===`throw`)throw Error(i);return Object.assign(n,a),!0}function Da(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o),t.sharedDefsExtractedFor=void 0,t.sharedEmitDoneFor=void 0;let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Da(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&wa(o.schema,c),t.io===`input`&&F(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Oa(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function ka(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);if(e.external&&e.sharedDefsExtractedFor===e.external)return;let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${Oa(a)}`}}let i=`#/${r}/`;if(t[1]===n&&!t[1].schema.id)return{ref:`#`};let a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+Oa(a)}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0])a(n);else{if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}(e.metadataRegistry.get(n[0])?.id||r.cycle||r.count>1&&e.reused===`ref`)&&a(n)}}e.external&&(e.sharedDefsExtractedFor=e.external)}function Aa(e){let t=e.anyOf;if(!Array.isArray(t)||t.length===0||e.type!==void 0)return;let n=[];for(let e of t){if(!e||typeof e!=`object`)return;Aa(e);let t=Object.keys(e);if(t.length!==1||t[0]!==`type`)return;let r=e.type;for(let e of Array.isArray(r)?r:[r]){if(typeof e!=`string`)return;n.includes(e)||n.push(e)}}delete e.anyOf,e.type=n.length===1?n[0]:n}var ja=new Set([`type`,`properties`,`required`,`additionalProperties`]),Ma=[`oneOf`,`anyOf`];function Na(e){let t=e.additionalProperties;return t===void 0||t===!1||typeof t!=`object`||!t?null:Object.keys(t).length?t:null}function Pa(e){let t=[];for(let n of e){if(typeof n!=`object`||n.type!==`object`)return null;for(let e in n)if(!ja.has(e))return null;t.push(n)}let n={},r=new Set;for(let e of t){for(let r in e.properties){if(Object.prototype.hasOwnProperty.call(n,r))continue;let e=[];for(let n of t){let t=n.properties?.[r]??Na(n);t!=null&&(e.some(e=>JSON.stringify(e)===JSON.stringify(t))||e.push(t))}_(n,r,e.length===1?e[0]:Pa(e)??{allOf:e})}for(let t of e.required??[])r.add(t)}let i={type:`object`,properties:n};if(r.size&&(i.required=[...r]),t.every(e=>e.additionalProperties===!1))i.additionalProperties=!1;else{let e=[];for(let n of t){let t=Na(n);t&&!e.some(e=>JSON.stringify(e)===JSON.stringify(t))&&e.push(t)}e.length===1?i.additionalProperties=e[0]:e.length>1&&(i.additionalProperties={allOf:e})}return i}function Fa(e){let t=e.allOf;if(!Array.isArray(t)||t.length<2)return;for(let t of ja)if(t in e)return;let n=t.filter(e=>Ma.some(t=>Array.isArray(e[t]))),r=null;if(!n.length)r=Pa(t);else{let e=n[0],i=Ma.find(t=>Array.isArray(e[t]));if(Object.keys(e).length!==1)return;let a=t.filter(t=>t!==e),o=e[i].map(e=>Pa([...a,e]));if(o.some(e=>!e))return;r={[i]:o}}r&&(delete e.allOf,wa(e,r))}function Ia(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):wa(i,s),wa(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};if(!e.external||e.sharedEmitDoneFor!==e.external){for(let t of[...e.seen.entries()].reverse())r(t[0]);if(e.target!==`openapi-3.0`)for(let t of e.seen.entries())Aa(t[1].def??t[1].schema);for(let t of e.deferred)t();if(e.intersections.length){let t=new Map;for(let n of e.seen.values())for(let e of[n.schema,n.def]){let n=e?.allOf;if(!Array.isArray(n))continue;let r=t.get(n);r?r.push(e):t.set(n,[e])}for(let n of e.intersections)for(let e of t.get(n)??[])Fa(e)}}let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}wa(i,n.defId?n.schema:n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};if(!e.external||e.sharedEmitDoneFor!==e.external)for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,_(o,e.defId,e.def))}e.external&&(e.sharedEmitDoneFor=e.external),e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Ra(t,`input`,e.processors),output:Ra(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function F(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return F(r.element,n);if(r.type===`set`)return F(r.valueType,n);if(r.type===`lazy`)return F(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`||r.type===`catch`)return F(r.innerType,n);if(r.type===`intersection`)return F(r.left,n)||F(r.right,n);if(r.type===`record`||r.type===`map`)return F(r.keyType,n)||F(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:F(r.in,n)||F(r.out,n);if(r.type===`object`){for(let e in r.shape)if(F(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(F(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(F(e,n))return!0;return!!(r.rest&&F(r.rest,n))}return!1}var La=(e,t={})=>n=>{let r=Ta({...n,processors:t});return Da(e,r),ka(r,e),Ia(r,e)},Ra=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Ta({...i??{},target:a,io:t,processors:n});return Da(e,o),ka(o,e),Ia(o,e)},za=(e,t,n)=>{(e[t]===void 0||n>e[t])&&(e[t]=n)},Ba=(e,t,n)=>{(e[t]===void 0||n<e[t])&&(e[t]=n)},Va=(e,t)=>{za(e,`minimum`,t),Ba(e,`maximum`,t)},Ha=(e,t)=>{e.multipleOf??=[],e.multipleOf.includes(t)||e.multipleOf.push(t)},Ua=(e,t)=>{e.patterns??=new Set,e.patterns.add(t)},Wa=(e,t)=>{e.mime=e.mime?e.mime.filter(e=>t.includes(e)):[...t]},Ga=(e,t)=>{e.format=t,t.includes(`int`)&&(e.isInt=!0)},Ka=(e,t)=>za(e,`minimum`,t.minimum),qa=(e,t)=>Ba(e,`maximum`,t.maximum),Ja=e=>(t,n)=>{Ga(t,n.format);let[r,i]=e[n.format];za(t,`minimum`,r),Ba(t,`maximum`,i)},Ya={greater_than:(e,t)=>za(e,t.inclusive?`minimum`:`exclusiveMinimum`,t.value),less_than:(e,t)=>Ba(e,t.inclusive?`maximum`:`exclusiveMaximum`,t.value),multiple_of:(e,t)=>Ha(e,t.value),number_format:Ja(fe),bigint_format:Ja(pe),min_length:Ka,max_length:qa,length_equals:(e,t)=>Va(e,t.length),min_size:Ka,max_size:qa,size_equals:(e,t)=>Va(e,t.size),string_format:(e,t)=>{Ga(e,t.format),t.pattern&&Ua(e,t.pattern),(t.format===`base64`||t.format===`base64url`)&&(e.contentEncoding=t.format),(t.local||t.precision===-1)&&(e.laxFormat=!0)},mime_type:(e,t)=>Wa(e,t.mime)};function Xa(e){let t={},n=e._zod.def,r=e._zod.traits.has(`$ZodCheck`)?[e,...n.checks??[]]:n.checks??[];for(let e of r)Ya[e._zod.def.check]?.(t,e._zod.def);let i=e._zod.bag;i.minimum!==void 0&&za(t,`minimum`,i.minimum),i.exclusiveMinimum!==void 0&&za(t,`exclusiveMinimum`,i.exclusiveMinimum),i.maximum!==void 0&&Ba(t,`maximum`,i.maximum),i.exclusiveMaximum!==void 0&&Ba(t,`exclusiveMaximum`,i.exclusiveMaximum),i.multipleOf!==void 0&&Ha(t,i.multipleOf),i.format!==void 0&&(t.format??=i.format,i.format.includes(`int`)&&(t.isInt=!0)),i.mime&&Wa(t,i.mime);for(let e of i.patterns??[])Ua(t,e);return t}var Za={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Qa=new Map([[or,Ut],[cr,Wt]]),$a=e=>Qa.get(e)??e,eo=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l,laxFormat:u}=Xa(e);if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Za[s]??s,i.format===``&&delete i.format,(s===`time`||u)&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c].map($a);e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},to=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,multipleOf:s,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=Xa(e);i.type=u?`integer`:`number`;let d=typeof l==`number`&&l>=(a??-1/0),f=typeof c==`number`&&c<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;if(d?p?(i.minimum=l,i.exclusiveMinimum=!0):i.exclusiveMinimum=l:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=c,i.exclusiveMaximum=!0):i.exclusiveMaximum=c:typeof o==`number`&&(i.maximum=o),s){let n=new Set;for(let a of s)Number.isFinite(a)&&a!==0?n.add(Math.abs(a)):Ea(e,t,i,r,`A multipleOf divisor of ${a} cannot be represented in JSON Schema`);let[a,...o]=n;a!==void 0&&(i.multipleOf=a),o.length&&(i.allOf=[...i.allOf??[],...o.map(e=>({multipleOf:e}))])}},no=(e,t,n,r)=>{n.type=`boolean`},ro=(e,t,n,r)=>{n.not={}},io=(e,t,n,r)=>{let i=e._zod.def,a=l(i.entries);a.length===0?n.not={}:(a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a)},ao=(e,t,n,r)=>{Ea(e,t,n,r,`Custom types cannot be represented in JSON Schema`)},oo=(e,t,n,r)=>{Ea(e,t,n,r,`Transforms cannot be represented in JSON Schema`)},so=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=Xa(e);typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Da(a.element,t,{...r,path:[...r.path,`items`]})};function co(e){let t=e._zod.def;return t.type===`pipe`&&t.in._zod.traits.has(`$ZodTransform`)?co(t.out):t.type===`catch`?co(t.innerType):e._zod.optin}var lo=(e,t,n,r)=>{let i=n,a=e._zod.def,o=a.shape;if(Object.getOwnPropertySymbols(o).length&&Ea(e,t,i,r,`Symbol keys cannot be represented in JSON Schema`))return;i.type=`object`,i.properties={};for(let e in o)_(i.properties,e,Da(o[e],t,{...r,path:[...r.path,`properties`,e]}));let s=[];for(let e of Object.keys(o)){let n=a.shape[e];(t.io===`input`?co(n)===void 0:n._zod.optout===void 0)&&s.push(e)}s.length>0&&(i.required=s),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Da(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},uo=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Da(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},fo=(e,t,n,r)=>{let i=e._zod.def,a=Da(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Da(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1,c=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]];n.allOf=c,t.intersections.push(c)};function po(e,t,n){if(t.$ref){if(n.has(t))return t;n.add(t);let r=e.get(t)?.def;if(!r)return t;let i=po(e,r,n);return i===r?t:i}for(let r of[`anyOf`,`oneOf`]){let i=t[r];if(!Array.isArray(i))continue;let a=i.map(t=>po(e,t,n));a.some((e,t)=>e!==i[t])&&(t={...t,[r]:a})}let r=Array.isArray(t.type)?t.type:[t.type],i=!r.includes(`string`)&&r.some(e=>e===`number`||e===`integer`),a=t.enum??(t.const===void 0?void 0:[t.const]);if(!i&&!a?.some(e=>typeof e==`number`))return t;let{minimum:o,maximum:s,exclusiveMinimum:c,exclusiveMaximum:l,multipleOf:u,format:d,id:f,...p}=t;return p.enum?p.enum=p.enum.map(e=>typeof e==`number`?String(e):e):typeof p.const==`number`&&(p.const=String(p.const)),i&&(p.type=`string`,a||(p.pattern=(r.includes(`number`)?en:j).source)),p}var mo=new WeakMap;function ho(e){let t=new Map;for(let n of e.seen.values())n.def&&!t.has(n.schema)&&t.set(n.schema,n);let n=new Map;for(let r of mo.get(e)??[]){let i=e.seen.get(r),a=(i?.def??i?.schema)?.propertyNames;if(!a||a===!0||n.has(a))continue;let o=po(t,a,new Set);o!==a&&n.set(a,o)}if(n.size)for(let t of e.seen.values())for(let e of[t.schema,t.def]){let t=e&&n.get(e.propertyNames);t&&(e.propertyNames=t)}}var go=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=Xa(o).patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Da(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)_(i.patternProperties,$a(t).source,e)}else{if(t.target===`draft-07`||t.target===`draft-2020-12`){i.propertyNames=Da(a.keyType,t,{...r,path:[...r.path,`propertyNames`]});let n=mo.get(t);n||(n=[],mo.set(t,n),t.deferred.push(()=>ho(t))),n.push(e)}i.additionalProperties=Da(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]})}let c=o._zod.values,l=t.io===`input`&&co(a.valueType)!==void 0;if(c&&!a.partial&&!l){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e.map(String))}},_o=(e,t,n,r)=>{let i=e._zod.def,a=Da(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},vo=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},yo=Symbol();function bo(e,t,n,r,i){let a=!1,o=JSON.stringify(e,(e,t)=>typeof t==`bigint`?(a=!0,null):t);return a?(Ea(t,n,r,i,`BigInt defaults cannot be represented in JSON Schema`),yo):JSON.parse(o)}var xo=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o=bo(i.defaultValue,e,t,n,r);o!==yo&&(n.default=o)},So=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);if(a.ref=i.innerType,t.io!==`input`)return;let o=bo(i.defaultValue,e,t,n,r);o!==yo&&(n._prefault=o)},Co=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{Ea(e,t,n,r,`Dynamic catch values are not supported in JSON Schema`);return}n.default=o},wo=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Da(o,t,r);let s=t.seen.get(e);s.ref=o},To=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},Eo=(e,t,n,r)=>{let i=e._zod.def;Da(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Do=new WeakSet([Object.prototype,Error.prototype]);function Oo(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var ko=(e,t)=>{rt.init(e,t),e.name=`ZodError`;let n=Object.getPrototypeOf(e);Do.has(n)||(Do.add(n),Oo(n,`format`,e=>t=>ot(e,t)),Oo(n,`flatten`,e=>t=>at(e,t)),Oo(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,d,2)}),Oo(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,d,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Ao=A(`ZodError`,ko),jo=A(`ZodError`,ko,void 0,{Parent:Error}),Mo=ct(jo),No=lt(jo),Po=ut(jo),Fo=ft(jo),Io=vt(jo),Lo=yt(jo),Ro=bt(jo),zo=xt(jo),Bo=St(jo),Vo=Ct(jo),Ho=wt(jo),Uo=Tt(jo);function Wo(){Xe.localeError||Ze(vi())}function Go(){Xe.memoizer||Ze({memoizer:hi()})}var Ko=A(`ZodType`,(e,t)=>(Wo(),Tn.init(e,t),e.def=t,e.type=t.type,e),{check(...e){let t=this.def;return this.clone(te(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return le(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(sc(e,t))},superRefine(e,t){return this.check(cc(e,t))},overwrite(e){return this.check(ma(e))},optional(){return Us(this)},exactOptional(){return Gs(this)},nullable(){return qs(this)},nullish(){return Us(qs(this))},nonoptional(e){return $s(this,e)},array(){return Os(this)},or(e){return Ms([this,e])},and(e){return Ps(this,e)},transform(e){return rc(this,Vs(e))},default(e){return Ys(this,e)},prefault(e){return Zs(this,e)},catch(e){return tc(this,e)},pipe(e){return rc(this,e)},readonly(){return ac(this)},describe(e){let t=this.clone();return Si.add(t,{description:e}),t},meta(...e){if(e.length===0)return Si.get(this);let t=this.clone();return Si.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e,...t){return t.length===0?e(this):e(this,...t)},get"~standard"(){return Pe(this,`~standard`,{...On(this),jsonSchema:{input:Ra(this,`input`),output:Ra(this,`output`)}})},set"~standard"(e){Ne(this,`~standard`,e)},parse:function e(t,n){return Mo(this,t,n,{callee:e})},parseAsync:async function e(t,n){return await No(this,t,n,{callee:e})},safeParse(e,t){return Po(this,e,t)},async safeParseAsync(e,t){return Fo(this,e,t)},get spa(){return this?.safeParseAsync},set spa(e){Ne(this,`spa`,e)},validate(e,t){return ht(this,e,t)},validateAsync(e,t){return _t(this,e,t)},encode:function e(t,n){return Io(this,t,n,{callee:e})},decode:function e(t,n){return Lo(this,t,n,{callee:e})},encodeAsync:async function e(t,n){return await Ro(this,t,n,{callee:e})},decodeAsync:async function e(t,n){return await zo(this,t,n,{callee:e})},safeEncode(e,t){return Bo(this,e,t)},safeDecode(e,t){return Vo(this,e,t)},async safeEncodeAsync(e,t){return Ho(this,e,t)},async safeDecodeAsync(e,t){return Uo(this,e,t)},toJSONSchema(e){return La(this,{})(e)},get description(){return Si.get(this)?.description},get _def(){return this._zod.def}}),qo=A(`_ZodString`,(e,t)=>{kn.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>eo(e,t,n,r)},Fe({format:e=>Xa(e).format??null,minLength:e=>Xa(e).minimum??null,maxLength:e=>Xa(e).maximum??null},{regex(...e){return this.check(ua(...e))},includes(...e){return this.check(da(...e))},startsWith(...e){return this.check(fa(...e))},endsWith(...e){return this.check(pa(...e))},min(...e){return this.check(ca(...e))},max(...e){return this.check(sa(...e))},length(...e){return this.check(la(...e))},nonempty(...e){return this.check(ca(1,...e))},lowercase(e){return this.check(N(e))},uppercase(e){return this.check(P(e))},trim(){return this.check(ga())},normalize(...e){return this.check(ha(...e))},toLowerCase(){return this.check(_a())},toUpperCase(){return this.check(va())},slugify(){return this.check(ya())}})),I=A(`ZodString`,(e,t)=>{kn.init(e,t),qo.init(e,t)},{email(e){return this.check(Ti(Qo,e))},url(e){return this.check(ji(ts,e))},jwt(e){return this.check(Ki(gs,e))},emoji(e){return this.check(Mi(ns,e))},guid(e){return this.check(Ei($o,e))},uuid(e){return this.check(Di(es,e))},uuidv4(e){return this.check(Oi(es,e))},uuidv6(e){return this.check(ki(es,e))},uuidv7(e){return this.check(Ai(es,e))},nanoid(e){return this.check(Ni(rs,e))},cuid(e){return this.check(Pi(is,e))},cuid2(e){return this.check(Fi(as,e))},ulid(e){return this.check(Ii(os,e))},base64(e){return this.check(Ui(ps,e))},base64url(e){return this.check(Wi(ms,e))},xid(e){return this.check(Li(ss,e))},ksuid(e){return this.check(Ri(cs,e))},ipv4(e){return this.check(zi(ls,e))},ipv6(e){return this.check(Bi(us,e))},cidrv4(e){return this.check(Vi(ds,e))},cidrv6(e){return this.check(Hi(fs,e))},e164(e){return this.check(Gi(hs,e))},datetime(e){return this.check(qi(Jo,e))},date(e){return this.check(Ji(Yo,e))},time(e){return this.check(Yi(Xo,e))},duration(e){return this.check(Xi(Zo,e))}});function L(e){return wi(I,e)}var R=A(`ZodStringFormat`,(e,t)=>{M.init(e,t),qo.init(e,t)}),Jo=A(`ZodISODateTime`,(e,t)=>{Jn.init(e,t),R.init(e,t)}),Yo=A(`ZodISODate`,(e,t)=>{Yn.init(e,t),R.init(e,t)}),Xo=A(`ZodISOTime`,(e,t)=>{Xn.init(e,t),R.init(e,t)}),Zo=A(`ZodISODuration`,(e,t)=>{Zn.init(e,t),R.init(e,t)}),Qo=A(`ZodEmail`,(e,t)=>{Mn.init(e,t),R.init(e,t)}),$o=A(`ZodGUID`,(e,t)=>{An.init(e,t),R.init(e,t)}),es=A(`ZodUUID`,(e,t)=>{jn.init(e,t),R.init(e,t)}),ts=A(`ZodURL`,(e,t)=>{Bn.init(e,t),R.init(e,t)}),ns=A(`ZodEmoji`,(e,t)=>{Vn.init(e,t),R.init(e,t)}),rs=A(`ZodNanoID`,(e,t)=>{Hn.init(e,t),R.init(e,t)}),is=A(`ZodCUID`,(e,t)=>{Un.init(e,t),R.init(e,t)}),as=A(`ZodCUID2`,(e,t)=>{Wn.init(e,t),R.init(e,t)}),os=A(`ZodULID`,(e,t)=>{Gn.init(e,t),R.init(e,t)}),ss=A(`ZodXID`,(e,t)=>{Kn.init(e,t),R.init(e,t)}),cs=A(`ZodKSUID`,(e,t)=>{qn.init(e,t),R.init(e,t)}),ls=A(`ZodIPv4`,(e,t)=>{Qn.init(e,t),R.init(e,t)}),us=A(`ZodIPv6`,(e,t)=>{tr.init(e,t),R.init(e,t)}),ds=A(`ZodCIDRv4`,(e,t)=>{nr.init(e,t),R.init(e,t)}),fs=A(`ZodCIDRv6`,(e,t)=>{ir.init(e,t),R.init(e,t)}),ps=A(`ZodBase64`,(e,t)=>{sr.init(e,t),R.init(e,t)}),ms=A(`ZodBase64URL`,(e,t)=>{ur.init(e,t),R.init(e,t)}),hs=A(`ZodE164`,(e,t)=>{dr.init(e,t),R.init(e,t)}),gs=A(`ZodJWT`,(e,t)=>{pr.init(e,t),R.init(e,t)}),_s=A(`ZodNumber`,(e,t)=>{mr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>to(e,t,n,r),e.isFinite=!0},Fe({minValue:e=>{let{minimum:t,exclusiveMinimum:n}=Xa(e);return Math.max(t??-1/0,n??-1/0)},maxValue:e=>{let{maximum:t,exclusiveMaximum:n}=Xa(e);return Math.min(t??1/0,n??1/0)},isInt:e=>{let{isInt:t,multipleOf:n}=Xa(e);return!!t||!!n?.some(Number.isSafeInteger)},format:e=>Xa(e).format??null},{gt(e,t){return this.check(ia(e,t))},gte(e,t){return this.check(aa(e,t))},min(e,t){return this.check(aa(e,t))},lt(e,t){return this.check(na(e,t))},lte(e,t){return this.check(ra(e,t))},max(e,t){return this.check(ra(e,t))},int(e){return this.check(bs(e))},safe(e){return this.check(bs(e))},positive(e){return this.check(ia(0,e))},nonnegative(e){return this.check(aa(0,e))},negative(e){return this.check(na(0,e))},nonpositive(e){return this.check(ra(0,e))},multipleOf(e,t){return this.check(oa(e,t))},step(e,t){return this.check(oa(e,t))},finite(){return this}}));function vs(e){return Zi(_s,e)}var ys=A(`ZodNumberFormat`,(e,t)=>{hr.init(e,t),_s.init(e,t)});function bs(e){return Qi(ys,e)}var xs=A(`ZodBoolean`,(e,t)=>{gr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>no(e,t,n,r)});function Ss(e){return $i(xs,e)}var Cs=A(`ZodUnknown`,(e,t)=>{_r.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function ws(){return ea(Cs)}var Ts=A(`ZodNever`,(e,t)=>{vr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ro(e,t,n,r)});function Es(e){return ta(Ts,e)}var Ds=A(`ZodArray`,(e,t)=>{Go(),Sr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>so(e,t,n,r),e.element=t.element},{min(e,t){return this.check(ca(e,t))},nonempty(e){return this.check(ca(1,e))},max(e,t){return this.check(sa(e,t))},length(e,t){return this.check(la(e,t))},unwrap(){return this.element}});function Os(e,t){return ba(Ds,e,t)}var ks=A(`ZodObject`,(e,t)=>{Go(),Or.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>lo(e,t,n,r),Ve(e,`shape`,e=>e._zod.def.shape,!1)},{keyof(){return zs(Object.keys(this._zod.def.shape))},catchall(e){return this.clone(te(this._zod.def,{catchall:e}))},passthrough(){return this.clone(te(this._zod.def,{catchall:ws()}))},loose(){return this.clone(te(this._zod.def,{catchall:ws()}))},strict(){return this.clone(te(this._zod.def,{catchall:Es()}))},strip(){return this.clone(te(this._zod.def,{catchall:void 0}))},extend(e){return _e(this,e)},safeExtend(e){return ye(this,e)},merge(e){return be(this,e)},pick(e){return me(this,e)},omit(e){return ge(this,e)},partial(...e){return xe(Hs,this,e[0])},exactPartial(...e){return xe(Ws,this,e[0],`exactPartial`)},required(...e){return Se(Qs,this,e[0])}});function As(e,t){return new ks({type:`object`,shape:e??{},...T(t)})}var js=A(`ZodUnion`,(e,t)=>{Ar.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>uo(e,t,n,r),e.options=t.options});function Ms(e,t){return new js({type:`union`,options:e,...T(t)})}var Ns=A(`ZodIntersection`,(e,t)=>{jr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>fo(e,t,n,r)});function Ps(e,t){return new Ns({type:`intersection`,left:e,right:t})}var Fs=A(`ZodRecord`,(e,t)=>{Go(),Pr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>go(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function Is(e,t,n){return!t||!t._zod?new Fs({type:`record`,keyType:L(),valueType:e,...T(t)}):new Fs({type:`record`,keyType:e,valueType:t,...T(n)})}function Ls(e,t,n){return new Fs({type:`record`,keyType:e,valueType:t,...T(n),partial:!0})}var Rs=A(`ZodEnum`,(e,t)=>{Fr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>io(e,t,n,r),e.enum=t.entries,e.options=[...e._zod.values];let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Rs({...t,checks:[],...T(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Rs({...t,checks:[],...T(r),entries:i})}});function zs(e,t){return new Rs({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...T(t)})}var Bs=A(`ZodTransform`,(e,t)=>{Go(),Ir.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oo(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Ye(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(je(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,`input`in t||(t.input=n.value),t.inst??=e,n.issues.push(je(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function Vs(e){return new Bs({type:`transform`,transform:e})}var Hs=A(`ZodOptional`,(e,t)=>{Rr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Eo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Us(e){return new Hs({type:`optional`,innerType:e})}var Ws=A(`ZodExactOptional`,(e,t)=>{zr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Eo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Gs(e){return new Ws({type:`optional`,innerType:e})}var Ks=A(`ZodNullable`,(e,t)=>{Br.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>_o(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function qs(e){return new Ks({type:`nullable`,innerType:e})}var Js=A(`ZodDefault`,(e,t)=>{Vr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Ys(e,t){return new Js({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Xs=A(`ZodPrefault`,(e,t)=>{Ur.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>So(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Zs(e,t){return new Xs({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():oe(t)}})}var Qs=A(`ZodNonOptional`,(e,t)=>{Wr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>vo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function $s(e,t){return new Qs({type:`nonoptional`,innerType:e,...T(t)})}var ec=A(`ZodCatch`,(e,t)=>{qr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Co(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function tc(e,t){return new ec({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:Ue(t)})}var nc=A(`ZodPipe`,(e,t)=>{Jr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>wo(e,t,n,r),e.in=t.in,e.out=t.out});function rc(e,t){return new nc({type:`pipe`,in:e,out:t})}var ic=A(`ZodReadonly`,(e,t)=>{Xr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>To(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function ac(e){return new ic({type:`readonly`,innerType:e})}var oc=A(`ZodCustom`,(e,t)=>{Qr.init(e,t),Ko.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ao(e,t,n,r)});function sc(e,t={}){return xa(oc,e,t)}function cc(e,t){return Sa(e,t)}var z=n(),lc=i(),uc=c(),dc=[`endurance`,`power`,`grace`],fc=[`empathy`,`persuasion`,`demeanor`],pc=[`logic`,`intuition`,`memory`],mc=zs([...dc,...fc,...pc]),B={physical:dc,social:fc,mental:pc,magic:[]},hc=[`physical`,`social`,`mental`],gc=As({hp:vs().int(),vp:vs().int(),sp:vs().int(),mp:vs().int()}).partial(),_c=L().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/,`must be kebab-case`),vc=zs([`placeholder`,`draft`,`final`]),yc=As({id:_c,name:L().min(1),status:vc,plane:L().min(1),region:L().optional(),summary:L().min(1),tags:Os(L()).default([]),lore:L().optional()}),bc=Is(mc,As({bonus:vs().int().min(0),max:vs().int().min(0).max(20)}).refine(e=>e.bonus<=e.max,`bonus can't exceed max`)),xc=As({name:L().min(1),description:L().min(1)}),Sc=As({trait:_c,rank:vs().int().min(1).optional()}),Cc=As({choose:vs().int().min(1),from:L().min(1),note:L().optional(),perRank:Ss().optional()}),wc=yc.extend({features:Os(xc).default([]),grants:Os(Sc).default([]),resources:gc.default({}),traitAccess:Os(L()).default([]),stats:bc,freePoints:vs().int().min(0).default(0),maxTotal:vs().int().min(0).optional()}),Tc=zs([`origin`,`profession`,`past`]),Ec=As({count:vs().int().min(1),group:zs(hc)}),Dc=yc.extend({type:Tc,grants:Os(Sc).default([]),bonusPoints:Os(Ec).default([]),coreBonus:Ls(zs([`magic`]),vs().int().min(1)).default({}),choices:Os(Cc).default([]),backgroundTraits:Os(_c).default([]),features:Os(xc).default([])}),Oc=zs([`knowledge`,`skill`,`contact`,`starter`,`ability`,`condition`,`membership`,`circumstance`,`other`]),kc=As(Object.fromEntries([...mc.options,...Object.keys(B)].map(e=>[e,vs().int().min(0).optional()]))).strict(),Ac=yc.extend({category:Oc,types:Os(L()).default([]),ranked:Ss().default(!1),rankStats:Os(mc).default([]),minStats:kc.default({}),prerequisites:Os(_c).default([]),prerequisiteTags:Os(L()).default([]),background:Ss().default(!1),starterOnly:Ss().default(!1),mastery:Ss().default(!1),temporary:L().optional(),conveyed:Ss().default(!1),rpRequirement:L().optional(),effect:L().min(1),language:L().optional(),choices:Os(Cc).default([]),resources:gc.default({}),coreAccess:Os(zs([`magic`])).default([]),list:L().optional(),opensLists:Os(L()).default([]),grants:Os(Sc).default([])}),jc=As({group:zs(Object.keys(B)),points:Ls(mc,vs().int().min(0))}),Mc=zs([`universal`,`background`]),Nc=As({trait:_c,rank:vs().int().min(1).default(1),pick:Mc}),Pc=As({package:_c.optional(),trait:_c.optional(),from:L().min(1),traits:Os(L().trim().min(1))}).refine(e=>e.package===void 0!=(e.trait===void 0),`an answer names either a package or a Trait`),Fc=As({name:L().optional(),kind:_c,origin:_c,profession:_c,past:_c,startPoints:Ls(mc,vs().int().min(0)).default({}),level:vs().int().min(1).default(1),levels:Os(jc),traits:Os(Nc).default([]),choices:Os(Pc).default([])}),Ic={startingLevel:3},Lc=mc.options,Rc=[`origin`,`profession`,`past`],zc={language:e=>e.types.includes(`language`),"dreftian-language":e=>e.types.includes(`language`)&&e.region===`dreft`,"spoken-language":e=>e.types.includes(`language`)&&!e.tags.includes(`writing`)};function Bc(e,t){if(e.language)return t.traits.find(t=>t.language===e.language&&t.types.includes(`language`)&&t.tags.includes(`writing`))}var Vc={contact:`Contact`,place:`Place`},Hc=e=>Object.hasOwn(Vc,e);function Uc(e,t){if(e===`spoken-and-written-language`)return t.traits.filter(e=>zc[`spoken-language`](e)&&Bc(e,t));let n=zc[e];return n?t.traits.filter(n):[]}var Wc=(e,t)=>e[t.by]===t.id&&e.from===t.from;function Gc(e,t,n=1){let r=[];for(let i of t.choices){let a=r.find(e=>e.from===i.from);a?(a.count+=i.choose*(i.perRank===!1?1:n),i.note&&a.notes.push(i.note)):r.push({by:e,id:t.id,name:t.name,from:i.from,count:i.choose*(i.perRank===!1?1:n),notes:i.note?[i.note]:[]})}return r}function Kc(e,t){let n=[];for(let e of t)for(let t of e.bonusPoints){let r=n.find(e=>e.group===t.group);r?(r.count+=t.count,r.from.push(e.name)):n.push({group:t.group,count:t.count,from:[e.name]})}for(let t of n){let n=B[t.group].reduce((t,n)=>t+Math.max(0,(e?.stats[n]?.max??20)-(e?.stats[n]?.bonus??0)),0);t.count=Math.min(t.count,n)}return{any:e?.freePoints??0,groups:n.filter(e=>e.count>0)}}function qc(e,t){let n=new Set,r=e=>{if(!n.has(e)){n.add(e);for(let n of t.traits.find(t=>t.id===e)?.grants??[])r(n.trait)}};for(let t of e)r(t);return n}function Jc(e,t){let n=new Set;for(let r of qc(e,t))for(let e of t.traits.find(e=>e.id===r)?.opensLists??[])n.add(e);return n}function Yc(e,t){let n=new Set(hc);for(let r of qc(e,t))for(let e of t.traits.find(e=>e.id===r)?.coreAccess??[])n.add(e);return[...n]}var Xc=e=>`${e.name} (${e.id})`,Zc=e=>/^[aeiou]/.test(e)?`an ${e}`:`a ${e}`;function Qc(e,t,n=Ic){let r=[],i=[],a=(e,t,n)=>r.push({code:e,message:t,path:n}),o=(e,t,n)=>i.push({code:e,message:t,path:n}),s=Fc.safeParse(e);if(!s.success){for(let e of s.error.issues)a(`schema`,`${e.path.join(`.`)||`build`}: ${e.message}`,e.path.join(`.`)||void 0);return{ok:!1,errors:r,warnings:i}}let c=s.data,l=new Map(t.traits.map(e=>[e.id,e])),u=t.kinds.find(e=>e.id===c.kind);u||a(`kind`,`Kind "${c.kind}" doesn't exist`,`kind`);let d=u?.stats,f=[];for(let e of Rc){let n=t.packages.find(t=>t.id===c[e]);n?n.type===e?f.push(n):a(`package`,`${n.name} is ${Zc(n.type)}, not ${Zc(e)}`,e):a(`package`,`${e} "${c[e]}" doesn't exist`,e)}c.level!==n.startingLevel&&a(`level`,`This campaign starts characters at level ${n.startingLevel}, but the build is level ${c.level}`,`level`),c.levels.length!==c.level&&a(`level`,`A level ${c.level} character needs ${c.level} level allocations, but the build has ${c.levels.length}`,`levels`);let p=Object.fromEntries(Lc.map(e=>[e,d?.[e]?.bonus??0]));for(let[e,t=0]of Object.entries(c.startPoints))p[e]+=t;let m=Kc(u,f),h=e=>B[e].reduce((e,t)=>e+(c.startPoints[t]??0),0),g=Object.values(c.startPoints).reduce((e,t)=>e+(t??0),0),_=0;for(let e of m.groups){let t=h(e.group);if(_+=Math.min(t,e.count),t<e.count){let n=e.count-t;a(`allocation`,`Place ${n} ${e.group.charAt(0).toUpperCase()+e.group.slice(1)} bonus ${n===1?`point`:`points`} from ${e.from.join(` and `)}`,`startPoints`)}}let v=m.any,y=g-_;u&&y!==v&&(v||y>0)&&a(`allocation`,v?y<v?y===0?`Place ${u.name}'s ${v} free bonus points`:`Place ${v-y} more of ${u.name}'s ${v} free bonus points`:`${u.name} gives ${v} free bonus points, but the build places ${y}`:m.groups.length?`The build places ${y} more bonus ${y===1?`point`:`points`} than its packages give`:`${u.name} has no free bonus points, but the build places ${g}`,`startPoints`);let b=Object.fromEntries(Object.keys(B).map(e=>[e,0]));if(c.levels.forEach((e,t)=>{let n=`levels[${t}].points`;b[e.group]++;let r=B[e.group],i=r.length?3:0,o=0;for(let[i,s=0]of Object.entries(e.points)){if(!r.includes(i)){let o=r.length?` (${r.join(`, `)})`:`; ${e.group} has no focus stats`;a(`allocation`,`Level ${t+1} puts points in ${i}, which isn't a ${e.group} stat${o}`,n)}p[i]+=s,o+=s}o!==i&&i&&a(`allocation`,`Level ${t+1} spends ${o} focus points; each level gives exactly 3`,n)}),d)for(let e of Lc){let t=d[e]?.max??20;p[e]>20?a(`stat-cap`,`${e} is ${p[e]}; nothing can exceed 20`,`levels`):p[e]>t&&a(`stat-max`,`${e} is ${p[e]}, above the ${u.name} max of ${t}`,`levels`)}let x={universal:{available:Lc.reduce((e,t)=>e+Math.ceil(p[t]/2),0),spent:0,banked:0},background:{available:Lc.reduce((e,t)=>e+Math.floor(p[t]/2),0),spent:0,banked:0}},S=new Map,ee=(e,t,n)=>{let r=S.get(e);if(r)r.rank=Math.max(r.rank,t),r.sources.push(n);else{S.set(e,{trait:e,rank:t,sources:[n]});for(let t of l.get(e)?.grants??[])ee(t.trait,t.rank??1,`trait ${e}`)}};for(let e of u?.grants??[])ee(e.trait,e.rank??1,`kind ${u.id}`);for(let e of f)for(let t of e.grants)ee(t.trait,t.rank??1,`${e.type} ${e.id}`);let te=new Set,C=[],ne=(e,n,r)=>{C.push(e);let{name:i,from:s,count:u}=e,d=Vc[s],f=c.choices.findIndex(t=>!te.has(c.choices.indexOf(t))&&Wc(t,e)),p=f<0?0:c.choices[f].traits.length;if(d&&p<u){let e=u-p;o(`choice`,`${i} gives ${u} ${d}${u>1?`s`:``}: record ${e>1?`${e} more`:p?`one more`:s===`contact`?`who`:`which`} on the Choices step`,f<0?`choices`:`choices[${f}]`)}if(f<0){d||a(`choice`,`${i} asks for ${u} from "${s}", but the build doesn't answer it`,`choices`);return}te.add(f);let m=c.choices[f],h=`choices[${f}]`;if((d?p>u:p!==u)&&a(`choice`,`${i} asks for ${u} from "${s}", but the build gives ${p}`,h),new Set(m.traits).size!==m.traits.length&&a(`choice`,`${i}'s "${s}" answer lists the same ${d??`Trait`} twice`,h),Hc(s))return;let g=Uc(s,t);if(g.length===0)o(`choice-pool`,`Can't check ${i}'s "${s}" answer (${m.traits.join(`, `)}): no Traits are defined for that pool yet`,h);else for(let e of m.traits){let t=l.get(e);t?g.includes(t)?r&&S.has(e)&&a(`duplicate-trait`,`${Xc(t)} is already held (from ${S.get(e).sources.join(`, `)}), so ${i} can't give it again`,h):a(`choice`,`${Xc(t)} isn't in the "${s}" pool for ${i}`,h):a(`unknown-trait`,`Trait "${e}" doesn't exist`,h)}for(let e of m.traits)ee(e,1,`${n} choice`);if(s===`spoken-and-written-language`)for(let e of m.traits){let o=l.has(e)?Bc(l.get(e),t):void 0;o&&(r&&S.has(o.id)&&a(`duplicate-trait`,`${Xc(o)} is already held (from ${S.get(o.id).sources.join(`, `)}), so ${i} can't give it again`,h),ee(o.id,1,`${n} choice`))}};for(let e of f)for(let t of Gc(`package`,e))ne(t,`${e.type} ${e.id}`,!1);let w=new Set(u?.traitAccess??[]),re=Jc(S.keys(),t),ie=new Set(f.flatMap(e=>e.backgroundTraits));for(let e of t.traits)e.conveyed||e.list&&!re.has(e.list)||(e.tags.some(e=>w.has(e))||e.list&&e.background)&&ie.add(e.id);let ae=new Map;c.traits.forEach((e,t)=>{let n=l.get(e.trait),r=`traits[${t}]`;n?(x[e.pick].spent++,n.conveyed&&a(`conveyed`,`${Xc(n)} is Conveyed: it comes from a package or from play, not from a pick`,r),e.pick===`universal`&&n.background&&a(`pick-type`,`${Xc(n)} is a Background Trait and needs a background pick`,r),e.pick===`background`&&!ie.has(n.id)&&a(`pick-type`,`${Xc(n)} isn't on this character's Background Trait list, so it needs a universal pick`,r),ae.has(n.id)||ae.set(n.id,[]),ae.get(n.id).push({rank:e.rank,index:t})):a(`unknown-trait`,`Trait "${e.trait}" doesn't exist`,r)});for(let[e,t]of ae){let n=l.get(e),r=S.get(e),i=r?.rank??0,o=r?` (from ${r.sources.join(`, `)})`:``;if(!n.ranked){for(let e of t)e.rank>1&&a(`rank`,`${Xc(n)} isn't ranked, so it can't go above rank 1`,`traits[${e.index}]`);i>0?a(`duplicate-trait`,`${Xc(n)} is already held${o} and isn't ranked, so it can't be taken again`,`traits[${t[0].index}]`):t.length>1&&a(`duplicate-trait`,`${Xc(n)} isn't ranked, so it can't be taken twice`,`traits[${t[1].index}]`),ee(e,1,`${c.traits[t[0].index].pick} pick`);continue}let s=i+1;for(let r of[...t].sort((e,t)=>e.rank-t.rank)){let t=`traits[${r.index}]`;r.rank<s?a(`rank`,`${Xc(n)} is already at rank ${s-1}${r.rank<=i?o:``}, so a pick for rank ${r.rank} does nothing`,t):(r.rank>s&&a(`rank`,`${Xc(n)} rank ${r.rank} needs rank ${s} first`,t),s=r.rank+1,ee(e,r.rank,`${c.traits[r.index].pick} pick`))}let u=Math.max(...t.map(e=>e.rank));if(u>1){let e=n.rankStats.filter(e=>p[e]<3*u);if(e.length){let t=e.map(e=>`${e} ${p[e]}`).join(`, `);a(`rank-stats`,`${Xc(n)} rank ${u} needs ${n.rankStats.join(`, `)} of at least ${3*u} (has ${t})`,`traits`)}}}for(let e of[...S.values()]){let t=l.get(e.trait);if(t?.choices.length)for(let n of Gc(`trait`,t,t.ranked?e.rank:1))ne(n,`trait ${t.id}`,!0)}c.choices.forEach((e,t)=>{if(te.has(t))return;let n=`choices[${t}]`;if(e.package!==void 0){let t=f.some(t=>t.id===e.package);a(`choice`,t?`${e.package} has no "${e.from}" choice, or it's answered twice`:`The build answers a choice for "${e.package}", which isn't one of its packages`,n)}else{let t=l.get(e.trait)?.name??e.trait;a(`choice`,S.has(e.trait)?`${t} has no "${e.from}" choice, or it's answered twice`:`The build answers a choice for ${t}, which it doesn't hold`,n)}}),c.traits.forEach((e,t)=>{let n=l.get(e.trait);for(let e of n?.prerequisites??[])if(!S.has(e)){let r=l.get(e)?.name??e;a(`prerequisite`,`${Xc(n)} needs ${r} (${e}) first`,`traits[${t}]`)}for(let e of n?.prerequisiteTags??[])[...S.keys()].some(t=>t!==n.id&&l.get(t)?.tags.includes(e))||a(`prerequisite`,`${Xc(n)} needs a Trait tagged ${e} first`,`traits[${t}]`)});let oe=new Set(Yc(S.keys(),t));for(let e of Object.keys(b)){if(!b[e]||oe.has(e))continue;let n=t.traits.filter(t=>t.coreAccess.includes(e)).map(e=>e.name),r=e.charAt(0).toUpperCase()+e.slice(1);a(`core-access`,`${b[e]} ${b[e]===1?`level goes`:`levels go`} to ${r}, which this character can't level${n.length?` without ${n.join(` or `)}`:``}`,`levels`)}let se=Object.fromEntries(Object.keys(B).map(e=>[e,0]));for(let e of f)for(let[t,n=0]of Object.entries(e.coreBonus))oe.has(t)&&(se[t]+=n);for(let e of Object.keys(b))b[e]+=se[e];let ce=Jc(S.keys(),t);for(let e of ae.keys()){let n=l.get(e);if(!n.list||ce.has(n.list))continue;let r=t.traits.filter(e=>e.opensLists.includes(n.list)).map(e=>e.name),i=n.list.charAt(0).toUpperCase()+n.list.slice(1);a(`trait-list`,`${Xc(n)} is on the ${i} list, which this character can't take from${r.length?` without ${r.join(` or `)}`:``}`,`traits[${ae.get(e)[0].index}]`)}for(let e of ae.keys()){let t=l.get(e),n=Object.entries(t.minStats).filter(([e,t])=>{let n=e in b?b[e]:p[e];return t!==void 0&&n<t});if(n.length){let r=Object.entries(t.minStats).map(([e,t])=>`${e} ${t}`).join(`, `),i=n.map(([e])=>`${e} ${e in b?b[e]:p[e]}`).join(`, `);a(`min-stats`,`${Xc(t)} needs ${r} (has ${i})`,`traits[${ae.get(e)[0].index}]`)}}for(let e of[`universal`,`background`]){let t=x[e];t.banked=Math.max(0,t.available-t.spent),t.spent>t.available&&a(`picks-overspent`,`The build spends ${t.spent} ${e} picks but its stats give only ${t.available}`,`traits`)}let le=e=>B[e].reduce((e,t)=>e+p[t],0),T={hp:10+le(`physical`),vp:le(`social`),sp:le(`mental`),mp:3*b.magic},ue=[`hp`,`vp`,`sp`,`mp`];for(let e of ue)T[e]+=u?.resources[e]??0;for(let e of S.values()){let t=l.get(e.trait)?.resources??{};for(let n of ue)T[n]+=(t[n]??0)*e.rank}return{ok:r.length===0,errors:r,warnings:i,summary:{stats:p,coreStats:b,coreBonus:se,coreAccess:[...oe],resources:T,picks:x,traits:[...S.values()],backgroundList:[...ie].sort(),traitLists:[...ce],questions:C}}}var $c=[`character`,`background`,`stats`,`traits`,`choices`,`sheet`],el=Object.keys(B),tl=()=>({physical:0,social:0,mental:0,magic:0}),nl={draft:{level:3,core:tl(),points:{},traits:[],choices:[]},campaign:{startingLevel:3},step:`character`};function rl(e,t){let n=[];for(let r of el){let i=B[r].map(e=>[e,t[e]??0]);for(let t=0;t<e[r];t++){let a={group:r,points:{}},o=t===e[r]-1?1/0:3;for(let e of i){let t=Math.min(o,e[1]);t>0&&(a.points[e[0]]=t,e[1]-=t,o-=t)}n.push(a)}}return n}function il(e){let t=tl(),n={};for(let r of e)if(r&&r.group in t){t[r.group]++;for(let[e,t]of Object.entries(r.points??{}))t&&(n[e]=(n[e]??0)+t)}return{core:t,points:n}}function al(e){return{core:{...tl(),...e.core},points:e.points&&typeof e.points==`object`?e.points:{}}}function ol(e){let{core:t,points:n,...r}=e,i={};for(let[e,a]of Object.entries({...r,levels:rl(t,n)}))a!==void 0&&a!==``&&(i[e]=a);return i}var sl=e=>Array.isArray(e)?e:[],cl=e=>typeof e==`string`&&e!==``?e:void 0;function ll(e){if(typeof e!=`object`||!e||Array.isArray(e))throw Error(`A build is a JSON object`);let t=e,n=sl(t.levels),r=typeof t.level==`number`?t.level:Math.max(1,n.length),i=t.kind===`tatot`&&(t.form===`orcoid`||t.form===`goblinoid`)?`tatot-${t.form}`:cl(t.kind);return{name:cl(t.name),kind:i,origin:cl(t.origin),profession:cl(t.profession),past:cl(t.past),...t.startPoints&&typeof t.startPoints==`object`&&Object.keys(t.startPoints).length?{startPoints:t.startPoints}:{},level:r,...t.core&&typeof t.core==`object`?al(t):il(n),traits:sl(t.traits).map(e=>({...e,rank:e.rank??1})),choices:sl(t.choices)}}function ul(e,t){let n={...e,level:t};for(let e of[...el].reverse())for(;n.core[e]>0&&el.reduce((e,t)=>e+n.core[t],0)>t;)n=dl(n,e,n.core[e]-1);return n}function dl(e,t,n){let r={...e.points},i=B[t].reduce((e,t)=>e+(r[t]??0),0)-n*3;for(let e of[...B[t]].reverse()){if(i<=0)break;let t=Math.min(i,r[e]??0);r[e]=(r[e]??0)-t,r[e]||delete r[e],i-=t}return{...e,core:{...e.core,[t]:n},points:r}}function fl(e,t,n,r){return{...e,traits:[...e.traits,{trait:t,rank:n,pick:r}]}}var pl=`sf-character-builder:v1`;function ml(){try{let e=localStorage.getItem(pl);if(!e)return nl;let t=JSON.parse(e),n=ll(t.draft),r=t.campaign?.startingLevel??n.level,i=t.step===`levels`?`stats`:t.step,a=$c.includes(i)?i:`character`,o=t.ai&&Array.isArray(t.ai.reasons)?t.ai:void 0;return{draft:n,campaign:{startingLevel:r},step:a,ai:o}}catch{return nl}}function hl(e){try{localStorage.setItem(pl,JSON.stringify(e))}catch{}}function gl(){try{localStorage.removeItem(pl)}catch{}}var _l=e=>e.toLowerCase().normalize(`NFKD`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),vl=/^levels\[(\d+)\]/;function yl(e,t,n){let r=bl(e,t,n);return Object.keys(B).filter(t=>r.includes(t)||e.core[t]>0)}function bl(e,t,n){return n?.summary?n.summary.coreAccess:Yc([...(t.kinds.find(t=>t.id===e.kind)?.grants??[]).map(e=>e.trait),...t.packages.filter(t=>[e.origin,e.profession,e.past].includes(t.id)).flatMap(e=>e.grants.map(e=>e.trait)),...e.traits.map(e=>e.trait)],t)}function V(e,t,n){let r=Qc(ol(e),t,n);return{...r,errors:xl(r.errors,e)}}function xl(e,t){let n=rl(t.core,t.points),r=new Set,i=[];for(let a of e){if(a.code===`level`&&a.path===`levels`){let e=Object.values(t.core).reduce((e,t)=>e+t,0),n=t.level-e,r=Math.abs(n);i.push({...a,message:n>0?`Place ${r} more core ${r===1?`point`:`points`}`:`Take back ${r} core ${r===1?`point`:`points`}; a level ${t.level} character has ${t.level}`});continue}let e=a.code===`allocation`?vl.exec(a.path??``):null,o=e?n[Number(e[1])]?.group:void 0;if(!o){i.push(a);continue}if(r.has(o))continue;r.add(o);let s=t.core[o]*3,c=B[o].reduce((e,n)=>e+(t.points[n]??0),0),l=Math.abs(s-c),u=o.charAt(0).toUpperCase()+o.slice(1);i.push({...a,path:`levels`,message:c<s?`Place ${l} more ${u} ${l===1?`point`:`points`}`:`${u} has ${l} more ${l===1?`point`:`points`} than its core stat unlocks`})}return i}function Sl(e,t,n,r){let i=V(e,t,n);if(!i.summary)return;let a=new Set(i.errors.map(e=>e.message)),o=new Map(i.summary.traits.map(e=>[e.trait,e.rank])),s=[],c=typeof r==`string`?void 0:r.list;if(c&&!i.summary.traitLists.includes(c))return[];for(let i of t.traits){if(i.list!==c)continue;let l=typeof r==`string`?r:i.background?`background`:`universal`,u=i.ranked?(o.get(i.id)??0)+1:1,d=V(fl(e,i.id,u,l),t,n),f=`${i.name} asks for `,p=d.errors.filter(e=>!a.has(e.message)&&!(e.code===`choice`&&e.message.startsWith(f)));p.some(e=>e.code===`pick-type`||e.code===`conveyed`)||s.push({trait:i,rank:u,pick:l,reasons:p.map(e=>e.message)})}return s}function Cl(e){switch(e.code){case`kind`:return`character`;case`package`:return`background`;case`level`:return e.path===`level`?`character`:`stats`;case`allocation`:case`core-access`:case`stat-max`:case`stat-cap`:return`stats`;case`choice`:case`choice-pool`:return`choices`;case`schema`:{let t=e.path?.split(`.`)[0];return t===`name`||t===`level`||t===`kind`?`character`:t===`origin`||t===`profession`||t===`past`?`background`:t===`levels`||t===`startPoints`?`stats`:t===`choices`?`choices`:`traits`}default:return e.path===`choices`||e.path?.startsWith(`choices[`)?`choices`:`traits`}}var wl={kind:`Choose a Kind`,origin:`Choose an Origin`,profession:`Choose a Profession`,past:`Choose a Past`};function Tl(e,t){return e.code===`schema`&&e.path&&e.path in wl&&!t[e.path]?wl[e.path]:e.message}var El=`id: ai-core
name: AI Core
status: placeholder
plane: earth
summary: "A sentient, self-contained machine mind, capable of inhabiting different forms and of lightning-fast computation."
tags: [ai-core, artificial-intelligence, machine, earth, kashgar]
features:
  - name: Creatures of Logic
    description: AI Cores get a +3 bonus to every Mental stat.
  - name: Bodiless
    description: AI Cores can’t put points into Physical stats. An AI Core inhabits a chassis, which determines its physical stats.
  - name: Armored Core
    description: An AI Core’s central core is an item with 10 HP, and it must be destroyed separately from its chassis for the character to be killed.
  - name: Machine Mind
    description: An AI Core can interface directly with other machines through the cabled port interfaces on its core.
# Bodiless keeps Physical at 0, so the maximums total 120, not Human's 135.
maxTotal: 120
stats:
  endurance: { bonus: 0, max: 0 }
  power: { bonus: 0, max: 0 }
  grace: { bonus: 0, max: 0 }
  empathy: { bonus: 0, max: 20 }
  persuasion: { bonus: 0, max: 20 }
  demeanor: { bonus: 0, max: 20 }
  logic: { bonus: 3, max: 20 }
  intuition: { bonus: 3, max: 20 }
  memory: { bonus: 3, max: 20 }
`,Dl=`id: guwain
name: Guwain
status: placeholder
plane: isekai
region: dreft
summary: The “Brine Dwarves.” Averaging four feet and well over 250 pounds. Most live along the coast; a few hold out in mountaintop villages where the air is thin and cold.
tags: [dwarf, sea, diving, mountains]
features:
  - name: Stout
    description: Higher Endurance and Power maximums, lower Grace maximum.
  - name: Prodigious Lungs
    description: Can hold their breath for hours, and are unbothered by the thin air of high altitudes.
  - name: Beard Nets
    description: Guwain beards grow in thick, tangled messes. Most Guwain braid theirs, often with tie-offs and a meshed pattern that lets them carry goods inside.
# Born to magic, like every Kind of Dreft but the Orcoid Tatot.
grants:
  - trait: magical-heritage
stats:
  endurance: { bonus: 2, max: 20 }
  power: { bonus: 2, max: 17 }
  grace: { bonus: 0, max: 10 }
  empathy: { bonus: 1, max: 15 }
  persuasion: { bonus: 1, max: 14 }
  demeanor: { bonus: 1, max: 16 }
  logic: { bonus: 1, max: 15 }
  intuition: { bonus: 0, max: 14 }
  memory: { bonus: 1, max: 14 }
`,Ol=`id: isek
name: Isek
status: placeholder
plane: isekai
region: dreft
summary: "The so-called “Free Elves.” Brash and adventure-seeking by nature, this nigh-immortal Kind rarely sees old age. Young Isek chase rebellion and are possessed of an irresistible wanderlust."
tags: [elf, immortal, restless, rebel, adventurer]
features:
  - name: Nigh Immortal
    description: Isek don’t age past their prime, though with their inveterate adventure-seeking and simple lack of self-care, few live to see old age.
  - name: Reckless
    description: Higher Power and Grace maximums, lower Demeanor maximum.
  - name: Restless
    description: Ill-suited to sedentary life. Isek have easier access to military, guild, and caravan Traits.
traitAccess: [military, guild, caravan]
# Born to magic, like every Kind of Dreft but the Orcoid Tatot.
grants:
  - trait: magical-heritage
stats:
  endurance: { bonus: 1, max: 15 }
  power: { bonus: 2, max: 18 }
  grace: { bonus: 2, max: 18 }
  empathy: { bonus: 1, max: 14 }
  persuasion: { bonus: 1, max: 15 }
  demeanor: { bonus: 0, max: 10 }
  logic: { bonus: 0, max: 14 }
  intuition: { bonus: 1, max: 16 }
  memory: { bonus: 1, max: 15 }
`,kl=`id: tatot-goblinoid
name: "Tatot, Goblinoid"
status: placeholder
plane: isekai
region: dreft
summary: "The “High Orks.” A polyphenic Kind: every Tatot is born either orcoid or goblinoid. Goblinoids are small, with plentiful mana."
tags: [tatot, goblinoid, merchant, magic]
features:
  - name: Goblinoid
    description: Higher Memory and Logic maximums, access to magic Traits, and +6 MP.
  - name: Merchant Clans
    description: Easier access to trading guild and merchant clan Traits.
traitAccess: [trading-guild, merchant-clan]
# Born to magic, like every Kind of Dreft but the Orcoid Tatot.
grants:
  - trait: magical-heritage
# Plentiful mana: MP without any Magic.
resources: { mp: 6 }
stats:
  endurance: { bonus: 1, max: 13 }
  power: { bonus: 0, max: 10 }
  grace: { bonus: 1, max: 16 }
  empathy: { bonus: 1, max: 15 }
  persuasion: { bonus: 1, max: 15 }
  demeanor: { bonus: 1, max: 14 }
  logic: { bonus: 2, max: 18 }
  intuition: { bonus: 1, max: 16 }
  memory: { bonus: 1, max: 18 }
`,Al=`id: tatot-orcoid
name: "Tatot, Orcoid"
status: placeholder
plane: isekai
region: dreft
summary: "The “High Orks.” A polyphenic Kind: every Tatot is born either orcoid or goblinoid. Orcoids are larger and stronger, have no mana, and are largely immune to sunsickness."
tags: [tatot, orcoid, merchant]
features:
  - name: Orcoid
    description: Higher Power and Endurance maximums. No mana, and largely immune to sunsickness.
  - name: Merchant Clans
    description: Easier access to trading guild and merchant clan Traits.
traitAccess: [trading-guild, merchant-clan]
stats:
  endurance: { bonus: 2, max: 18 }
  power: { bonus: 2, max: 18 }
  grace: { bonus: 1, max: 13 }
  empathy: { bonus: 1, max: 14 }
  persuasion: { bonus: 1, max: 15 }
  demeanor: { bonus: 1, max: 15 }
  logic: { bonus: 0, max: 13 }
  intuition: { bonus: 1, max: 15 }
  memory: { bonus: 0, max: 14 }
`,jl=`id: human
name: Human
status: draft
plane: earth
summary: "The humanity of Earth Baseline."
tags: [generalist, earth]
features:
  - name: Generalists
    description: Humans get a +1 bonus to every focus stat.
  - name: Unexceptional
    description: Humans can't exceed 15 in any focus stat unless otherwise modified.
stats:
  endurance: { bonus: 1, max: 15 }
  power: { bonus: 1, max: 15 }
  grace: { bonus: 1, max: 15 }
  empathy: { bonus: 1, max: 15 }
  persuasion: { bonus: 1, max: 15 }
  demeanor: { bonus: 1, max: 15 }
  logic: { bonus: 1, max: 15 }
  intuition: { bonus: 1, max: 15 }
  memory: { bonus: 1, max: 15 }
`,Ml=`id: american-empire-colonies
name: "The American Empire: Colonies"
status: placeholder
plane: earth
region: american-empire
summary: "You grew up in the Empire’s stellar territories, in New Columbia on Luna or aboard the capital Ark, New York, a long way from the Earth the Empire still calls home."
tags: [american-empire, colonies, luna, ark, space]
lore: american-empire
type: origin
# A free bonus point the player places in a Physical stat.
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: american-history, rank: 1 }
  - { trait: imperial-law, rank: 1 }
  - { trait: english }
  - { trait: english-written }
backgroundTraits:
  - new-columbia
  - ark-new-york
  - ark-life
  - the-imperial-military
  - imperial-politics
  - earth-baseline-technology
  - spanish
`,Nl=`id: american-empire-earth
name: "The American Empire: Earth"
status: placeholder
plane: earth
region: american-empire
summary: "You were born in the Empire’s Earth territories, anywhere from the Californias and the Great Lakes to Nueva Mexico, in a country that calls itself the new Rome and is rarely short of a war to prove it."
tags: [american-empire, earth, empire]
lore: american-empire
type: origin
# A free bonus point the player places in a Physical stat.
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: american-history, rank: 1 }
  - { trait: american-geography, rank: 1 }
  - { trait: imperial-law, rank: 1 }
  - { trait: english }
  - { trait: english-written }
backgroundTraits:
  - the-imperial-military
  - imperial-politics
  - the-union-of-texas
  - earth-baseline-technology
  - spanish
  - spanish-written
`,Pl=`id: chinese-empire-colonies
name: "The Empire of China: Colonies"
status: placeholder
plane: earth
region: chinese-empire
summary: "You grew up in the Empire’s stellar territories, in Yùtù, the Jade Rabbit colony on Luna, or aboard the Ark Zhulong."
tags: [chinese-empire, colonies, luna, ark, space]
lore: chinese-empire
type: origin
# A free bonus point the player places in a Mental stat.
bonusPoints:
  - { count: 1, group: mental }
grants:
  - { trait: the-chinese-empire, rank: 1 }
  - { trait: chinese-imperial-law, rank: 1 }
  - { trait: mandarin }
  - { trait: mandarin-written }
backgroundTraits:
  - yutu
  - zhulong
  - ark-life
  - the-corporate-syndicates
  - earth-baseline-technology
`,Fl=`id: chinese-empire-earth
name: "The Empire of China: Earth"
status: placeholder
plane: earth
region: chinese-empire
summary: "You were born in the Empire of China’s Earth territories, from Wuhan to the old nations of Southeast Asia, during a golden age the corporate syndicates are starting to suspect is ending."
tags: [chinese-empire, earth, empire, corporate]
lore: chinese-empire
type: origin
# A free bonus point the player places in a Mental stat.
bonusPoints:
  - { count: 1, group: mental }
grants:
  - { trait: the-chinese-empire, rank: 1 }
  - { trait: chinese-imperial-law, rank: 1 }
  - { trait: mandarin }
  - { trait: mandarin-written }
backgroundTraits:
  - the-corporate-syndicates
  - southeast-asia
  - earth-baseline-technology
`,Il=`id: dreft
name: Dreft
status: placeholder
plane: isekai
region: dreft
summary: "Born and raised in the Kingdom of Dreft, whether in Port Herminst, a coastal town, a farming village or the mountains."
tags: [kingdom, dreft, isekai]
lore: dreft
type: origin
# A free bonus point the player places in a Physical stat.
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: dreft, rank: 1 }
  - { trait: dreftian-law, rank: 1 }
  - { trait: dreftan }
# Where in Dreft a character grew up isn't granted; it's bought with
# background picks from this list.
backgroundTraits:
  - port-herminst
  - glintl
  - the-switch-port
  - the-kings-woods
  - the-corsine-pass
  - seafaring
  - coastal-trade
  - farming
  - mountaineering
  - local-folklore
  - karsef
`,Ll=`# Drovus’s lore is still coming soon on the site; the description only draws on Dreft’s history.
id: the-drovus-empire
name: "The Drovus Empire"
status: placeholder
plane: isekai
region: drovus
summary: "You grew up in the Drovus Empire, which has spent the last decade swallowing its neighbors, the Sunrise Princedoms among them."
tags: [drovus, empire, isekai, military]
lore: drovus-empire
type: origin
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: the-drovus-empire, rank: 1 }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - the-sunrise-princedoms
  - military-tactics
  - military-drill
  - heraldry
`,Rl=`id: the-free-american-states
name: "The Free American States"
status: placeholder
plane: earth
region: free-american-states
summary: "You grew up in one of the Free States, a fractious free-trade zone of independent countries wedged between the American Empire and the Union of Texas."
tags: [free-american-states, earth, trade]
lore: free-american-states
type: origin
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: the-free-american-states, rank: 1 }
  - { trait: english }
  - { trait: english-written }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - spanish
  - spanish-written
  - the-union-of-texas
  - haggler
  - trade-law
  - smooth-talker
`,zl=`# Karsef’s lore is still coming soon on the site; the description only draws on Dreft’s history.
id: kingdom-of-karsef
name: "Kingdom of Karsef"
status: placeholder
plane: isekai
region: karsef
summary: "You grew up in the Kingdom of Karsef, across the Corsine Pass from Dreft, and an old rival of it."
tags: [karsef, kingdom, isekai, mountains]
lore: kingdom-of-karsef
type: origin
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: karsef, rank: 1 }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - the-corsine-pass
  - mountaineering
  - dreft
  - shield-wall
  - military-tactics
`,Bl=`id: kashgar
name: "Kashgar"
status: placeholder
plane: earth
region: kashgar
summary: "You grew up on Kashgar, the largest Ark in the systems and the heart of the AI diaspora. Your neighbors were as likely to be AI Cores as people, Kashgari security watched every deck, and home never stayed anywhere for long."
tags: [ark, kashgar, ai, space, urban]
lore: kashgar
type: origin
# A free bonus point the player places in a Mental stat.
bonusPoints:
  - { count: 1, group: mental }
grants:
  - { trait: kashgar, rank: 1 }
  - { trait: ai-culture, rank: 1 }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - ark-life
  - kashgar-mindworks
  - artificial-intelligence
  - cybernetics
  - robotics
  - earth-baseline-technology
`,Vl=`id: the-lunar-industrial-syndicate
name: "The Lunar Industrial Syndicate"
status: placeholder
plane: earth
region: lunar-industrial-syndicate
summary: "You grew up a “citizen shareholder” of the Eighth Lunar Industrial Syndicate, on Earth, Luna or one of its outposts, in a nation run for its investors first."
tags: [lunar-industrial-syndicate, earth, luna, corporate]
lore: lunar-industrial-syndicate
type: origin
bonusPoints:
  - { count: 1, group: mental }
grants:
  - { trait: the-lunar-industrial-syndicate, rank: 1 }
  - { trait: english }
  - { trait: english-written }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - portuguese
  - portuguese-written
  - the-corporate-syndicates
  - ark-life
  - starship-engineering
  - cargo-handling
`,Hl=`id: sdu-colonies
name: "The Stellar Democratic Union: Colonies"
status: placeholder
plane: earth
region: sdu
summary: "You grew up in the Union’s stellar or planar territories: the Martian Association, the Antiluna colony, New Persia on Pairidaeza, or aboard one of the Union’s Arks."
tags: [sdu, colonies, mars, ark, space]
lore: stellar-democratic-union
type: origin
# A free bonus point the player places in a Social stat.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: the-stellar-democratic-union, rank: 1 }
  - { trait: sdu-law, rank: 1 }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - the-martian-association
  - antiluna
  - new-persia
  - boneyard
  - ark-life
  - union-politics
  - earth-baseline-technology
`,Ul=`id: sdu-earth
name: "The Stellar Democratic Union: Earth"
status: placeholder
plane: earth
region: sdu
summary: "You were born in the Union’s Earth territories, anywhere from core Europe to Japan, Brazil or Canada, in the largest and richest nation in the systems."
tags: [sdu, earth, union]
lore: stellar-democratic-union
type: origin
# A free bonus point the player places in a Social stat.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: the-stellar-democratic-union, rank: 1 }
  - { trait: sdu-law, rank: 1 }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - union-politics
  - tetra
  - the-diplomatic-wing
  - the-united-nations
  - earth-baseline-technology
`,Wl=`# Sorellion’s lore is still coming soon on the site; this is a placeholder to fill in.
id: kingdom-of-sorellion
name: "Kingdom of Sorellion"
status: placeholder
plane: isekai
region: sorellion
summary: "You grew up in the Kingdom of Sorellion, one of Dreft’s neighbors on Isekai."
tags: [sorellion, kingdom, isekai]
lore: kingdom-of-sorellion
type: origin
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: sorellion, rank: 1 }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - dreft
  - heraldry
  - courtly-manners
  - haggler
`,Gl=`id: tetra
name: Tetra
status: placeholder
plane: earth
region: tetra
summary: "You grew up on Ark Tetra, the home of the UN and of planar exploration, and the capital of the SDU. Your early life was spent on a colossal drifting space station, where you learned the ways of city life and of living in space."
tags: [ark, tetra, space, sdu, un, urban, planar-exploration]
lore: tetra
type: origin
# A free bonus point the player places in a Social stat, like the SDU's.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: tetra, rank: 1 }
  - { trait: sdu-law, rank: 1 }
# One language of the player's choice, both spoken and written: the answer
# is the spoken form, and the engine adds its written form.
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - the-diplomatic-wing
  - the-united-nations
  - tetra-frontiers-co
  - the-explorers-lodge
  - planar-exploration
  - ark-life
  - earth-baseline-technology
  - the-switch-port
`,Kl=`id: the-union-of-texas
name: "The Union of Texas"
status: placeholder
plane: earth
region: union-of-texas
summary: "You grew up in the Union of Texas, an embittered, impoverished military republic that has spent 130 years preparing for a war with the Empire that never came."
tags: [union-of-texas, earth, military]
lore: union-of-texas
type: origin
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: the-union-of-texas, rank: 1 }
  - { trait: english }
  - { trait: english-written }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - military-tactics
  - spanish
  - spanish-written
  - the-free-american-states
  - wielder-rifle
  - survivalist
`,ql=`id: craft-apprenticeship
name: "Craft Apprenticeship"
status: placeholder
plane: any
summary: "Spent years apprenticed to a master craftsman, learning a trade one mistake at a time."
tags: [craft, apprentice, trade]
type: past
grants:
  - { trait: appraisal }
  - { trait: haggler }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,Jl=`id: criminal-family
name: "Criminal Family"
status: placeholder
plane: any
summary: "Born into a family business that the law would rather not hear about."
tags: [crime, family, underworld]
type: past
grants:
  - { trait: streetwise }
  - { trait: criminal-underworld }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,Yl=`id: gutter-trash
name: "Gutter Trash"
status: placeholder
plane: any
summary: "Grew up on the streets with nothing, and learned to take what wasn’t given and to disappear when it mattered."
tags: [streets, poverty, urban, crime]
type: past
grants:
  - { trait: streetwise }
  - { trait: sleight-of-hand }
  - { trait: concealment }
`,Xl=`id: military-service
name: "Military Service"
status: placeholder
plane: any
summary: "Served a term in an army, navy or militia, and came out with the habits to prove it."
tags: [military, veteran, service]
type: past
grants:
  - { trait: military-drill }
  - { trait: vigilance }
  - { trait: military-tactics }
`,Zl=`id: privileged-upbringing
name: "Privileged Upbringing"
status: placeholder
plane: any
summary: "Grew up wanting for nothing, with tutors, connections, and the manners that open doors."
tags: [wealth, privilege, education, family]
type: past
grants:
  - { trait: smooth-talker }
  - { trait: appraisal }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
  - choose: 1
    from: contact
    note: "+1 Contact"
`,Ql=`id: raised-at-court
name: "Raised at Court"
status: placeholder
plane: any
summary: "Grew up around a royal or noble court, among its manners, its rivalries and its whispers."
tags: [court, nobility, intrigue]
type: past
grants:
  - { trait: courtly-manners }
  - { trait: court-etiquette }
  - { trait: heraldry }
`,$l=`id: shipborn
name: "Shipborn"
status: placeholder
plane: any
summary: "Born and raised aboard a ship, whether it sailed the sea or the stars, and never really at home on solid ground."
tags: [ship, travel, family]
type: past
grants:
  - { trait: cargo-handling }
  - { trait: tinkerer }
  - { trait: vigilance }
`,eu=`id: simple-farmer
name: "Simple Farmer"
status: placeholder
plane: any
summary: "Grew up working the land, wherever there was land to work, and learned that the harvest waits for no one."
tags: [farming, rural, family]
type: past
grants:
  - { trait: teamster }
  - { trait: simple-cooking }
  - { trait: farming }
`,tu=`id: traveling-troupe
name: "Traveling Troupe"
status: placeholder
plane: any
summary: "Grew up on the road with a company of performers, never in one town for long."
tags: [performer, travel, troupe]
type: past
grants:
  - { trait: performer-music }
  - { trait: smooth-talker }
  - { trait: sleight-of-hand }
`,nu=`id: countryside-upbringing
name: "Countryside Upbringing"
status: placeholder
plane: isekai
region: dreft
summary: "Grew up in the sleepy Dreftian countryside, where the year turns on the harvest and every hedge has a story."
tags: [rural, farming, village, folklore]
type: past
grants:
  - { trait: farming }
  - { trait: countryside-lore }
  - { trait: local-folklore }
  - { trait: teamster }
`,ru=`id: expelled-from-the-mage-schools
name: "Expelled from the Mage Schools"
status: placeholder
plane: isekai
region: dreft
summary: "Studied at one of Port Herminst’s licensed schools of magic until something went wrong, and left with half an education and a secret."
tags: [magic, scholar, herminst, disgrace]
lore: isekai-magic
type: past
grants:
  - { trait: magic-on-isekai }
  - { trait: port-herminst }
  - { trait: concealment }
`,iu=`id: glintl-docks
name: "Glintl Docks"
status: placeholder
plane: isekai
region: dreft
summary: "Grew up on the busy docks of Glintl, the other great trading port on Dreft’s western coast."
tags: [port, docks, sea, trade, guwain]
lore: glintl
type: past
grants:
  - { trait: seafaring }
  - { trait: coastal-trade }
  - { trait: glintl }
  - { trait: haggler }
`,au=`id: karsef-border-veteran
name: "Karsef Border Veteran"
status: placeholder
plane: isekai
region: dreft
summary: "Served in the skirmishes over the Corsine Pass, where Dreft and Karsef have been testing each other for generations."
tags: [military, border, mountains, karsef, veteran]
lore: corsine-mountains
type: past
grants:
  - { trait: shield-wall }
  - { trait: mountaineering }
  - { trait: the-corsine-pass }
  - { trait: karsef }
`,ou=`id: merchant-dynasty
name: Merchant Dynasty
status: placeholder
plane: isekai
region: dreft
summary: "Child of a trade family grown rich off the switch port, and resented for it."
tags: [merchant, trade, wealth, family]
type: past
grants:
  - { trait: haggler }
  - { trait: appraisal }
  - { trait: trade-law }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
`,su=`id: monster-raided-village
name: "Monster-Raided Village"
status: placeholder
plane: isekai
region: dreft
summary: "Survived a monster raid on the home village, and learned to watch the tree line ever since."
tags: [monsters, village, survivor, hunting]
lore: isekai-monsters
type: past
grants:
  - { trait: vigilance }
  - { trait: tracker }
  - { trait: monsters-of-isekai }
  - { trait: the-kings-woods }
`,H=`id: noble-household
name: Noble Household
status: placeholder
plane: isekai
region: dreft
summary: "Born or raised in service to a noble house, just in time for the succession crisis."
tags: [nobility, court, intrigue, succession]
type: past
grants:
  - { trait: courtly-manners }
  - { trait: schemer }
  - { trait: noble-houses-of-dreft }
  - { trait: succession-law }
`,cu=`id: palace-servant
name: "Palace Servant"
status: placeholder
plane: isekai
region: dreft
summary: "Served in the royal palace at Port Herminst, close enough to the crown to hear things, and there when the queen died under unusual circumstances."
tags: [palace, court, servant, intrigue, herminst]
lore: herminst
type: past
grants:
  - { trait: court-etiquette }
  - { trait: sleight-of-hand }
  - { trait: noble-houses-of-dreft }
  - { trait: port-herminst }
`,lu=`id: raised-in-the-caravan-town
name: Raised in the Caravan Town
status: placeholder
plane: isekai
region: dreft
summary: "Grew up in the shadow of Castle Tetra, among foreigners and the people who profit from them."
tags: [switch-port, urban, caravan, foreigners]
type: past
grants:
  - { trait: streetwise }
  - { trait: sleight-of-hand }
  - { trait: caravan-routes }
  - { trait: earth-baseline-customs }
`,uu=`id: returned-from-the-systems
name: Returned from the Systems
status: placeholder
plane: isekai
region: dreft
summary: "Left Dreft for the systems and came back changed, like everyone who comes back."
tags: [systems, traveler, technology, earth]
type: past
grants:
  - { trait: tinkerer }
  - { trait: earth-baseline-technology }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
  - choose: 1
    from: language
    note: "+1 Language"
`,du=`id: sunrise-refugee
name: Sunrise Refugee
status: placeholder
plane: isekai
region: dreft
summary: Fled the Sunrise Princedoms when Drovus finished absorbing them.
tags: [refugee, sunrise, drovus, survival]
type: past
grants:
  - { trait: survivalist }
  - { trait: concealment }
  - { trait: the-drovus-empire }
  - { trait: the-sunrise-princedoms }
`,fu=`id: station-rat
name: "Station Rat"
status: placeholder
plane: earth
summary: "Grew up in the corridors and crawlspaces of a station, where everyone knows how to fix things and where not to go."
tags: [station, space, urban, tech]
type: past
grants:
  - { trait: tinkerer }
  - { trait: concealment }
  - { trait: ports-and-stations }
`,pu=`id: university-educated
name: "University Educated"
status: placeholder
plane: earth
summary: "Studied at one of the systems’ universities, and still owes someone for it."
tags: [education, university, science]
type: past
grants:
  - { trait: research }
  - { trait: mathematics }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
  - choose: 1
    from: contact
    note: "+1 Contact"
`,mu=`id: delegation-child
name: "Delegation Child"
status: placeholder
plane: earth
region: tetra
summary: "Grew up inside one of the sovereign territorial grounds that every UN member state keeps on Tetra, raised among diplomats and their staff."
tags: [diplomacy, un, tetra, politics]
lore: tetra
type: past
grants:
  - { trait: the-united-nations }
  - { trait: the-diplomatic-wing }
  - { trait: smooth-talker }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
`,hu=`id: gate-lab-kid
name: "Gate Lab Kid"
status: placeholder
plane: earth
region: tetra
summary: "Grew up around the hundreds of gate exploration projects running inside Tetra’s armored bulk, and knows a switch gate better than a playground."
tags: [planes, switch-gates, research, tetra]
lore: switch-gates
type: past
grants:
  - { trait: planar-exploration }
  - { trait: paraphysics }
  - { trait: tinkerer }
`,gu=`id: holding-company-kid
name: "Holding Company Kid"
status: placeholder
plane: earth
region: tetra
summary: "Child of a family working at one of the two dozen planar exploration and holding companies on Tetra, raised on talk of leases and attunements."
tags: [corporate, planes, tetra, business]
lore: tetra-frontiers-co
type: past
grants:
  - { trait: tetra-frontiers-co }
  - { trait: haggler }
  - { trait: appraisal }
`,_u=`id: parasapient-quarter
name: "Parasapient Quarter"
status: placeholder
plane: earth
region: tetra
summary: "Grew up among Tetra’s parasapient diasporas, the largest resident population of parasapients in the systems."
tags: [parasapients, diaspora, tetra, urban]
lore: tetra
type: past
grants:
  - { trait: parasapients }
  - { trait: streetwise }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
`,vu=`id: raised-in-the-infill
name: "Raised in the Infill"
status: placeholder
plane: earth
region: tetra
summary: "Grew up in the Ark’s infill and maintenance spaces, in the latticework of supports, wiring and piping that holds Tetra together."
tags: [ark, maintenance, tetra, urban, tech]
lore: arks
type: past
grants:
  - { trait: ark-life }
  - { trait: tinkerer }
  - { trait: concealment }
`,yu=`id: raised-on-ward-politics
name: "Raised on Ward Politics"
status: placeholder
plane: earth
region: tetra
summary: "Grew up in a family that trades in delegated votes, close to the ward representatives and maybe even the Council of 11."
tags: [politics, liquid-democracy, tetra, votes]
lore: tetra
type: past
grants:
  - { trait: liquid-democracy }
  - { trait: schemer }
  - { trait: smooth-talker }
`,bu=`id: apothecary
name: "Apothecary"
status: placeholder
plane: any
summary: "Mixes remedies and simple potions for the sick and injured, and sells them over the counter."
tags: [potions, healing, herbs, trade]
type: profession
grants:
  - { trait: folk-remedies }
  - { trait: simple-potion-mixing }
  - { trait: haggler }
  - { trait: herbalism }
backgroundTraits:
  - medical-aid
  - advanced-potion-mixing
  - medicine
  - alchemy
  - pharmacology
  - toxicology
`,xu=`id: bard
name: "Bard"
status: placeholder
plane: any
summary: "Travels from town to town with songs and stories, carrying the news along with them."
tags: [bard, music, performer, stories]
type: profession
grants:
  - { trait: performer-music }
  - { trait: smooth-talker }
  - { trait: music }
  - { trait: local-folklore }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - sleight-of-hand
  - local-history
  - heraldry
`,Su=`id: blacksmith
name: "Blacksmith"
status: placeholder
plane: any
summary: "Works metal at the forge: tools, fittings, and now and then a blade."
tags: [craft, smithing, trade]
type: profession
grants:
  - { trait: craft-smithing }
  - { trait: appraisal }
  - { trait: haggler }
  - { trait: metallurgy }
backgroundTraits:
  - wielder-longsword
  - wielder-war-axe
  - craft-leatherworking
`,Cu=`id: courier
name: "Courier"
status: placeholder
plane: any
summary: "Carries messages and parcels, fast and unread, by whatever route gets them there."
tags: [courier, travel, messages]
type: profession
grants:
  - { trait: rider-basic-animals }
  - { trait: survivalist }
  - { trait: vigilance }
  - { trait: local-history }
backgroundTraits:
  - concealment
  - pilot-truck
  - animal-husbandry
`,wu=`id: criminal-enforcer
name: "Criminal Enforcer"
status: placeholder
plane: any
summary: "Muscle for a criminal outfit: collecting debts, guarding deals and making examples of people who talk."
tags: [crime, enforcer, muscle]
type: profession
grants:
  - { trait: streetwise }
  - { trait: intimidation }
  - { trait: vigilance }
  - { trait: ambusher }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - concealment
  - schemer
  - wielder-pistol
  - criminal-underworld
`,Tu=`id: doctor
name: "Doctor"
status: placeholder
plane: any
summary: "Diagnoses and treats illness and injury, in a hospital, a clinic, a ship’s sick bay or a village sickroom."
tags: [medicine, doctor, healing, science]
type: profession
grants:
  - { trait: medical-aid }
  - { trait: research }
  - { trait: smooth-talker }
  - { trait: medicine }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - surgery
  - herbalism
  - cybernetics
  - pharmacology
  - pathology
  - psychology
  - parasapient-medicine
`,Eu=`id: farmer
name: "Farmer"
status: placeholder
plane: any
summary: "Works the land, raising crops and livestock, wherever there’s land to work."
tags: [farming, rural, labor]
type: profession
grants:
  - { trait: teamster }
  - { trait: animal-husbandry }
  - { trait: simple-cooking }
  - { trait: farming }
backgroundTraits:
  - rider-basic-animals
  - countryside-lore
  - herbalism
  - local-folklore
`,Du=`id: jester
name: "Jester"
status: placeholder
plane: any
summary: "Entertains a court or a crowd, and gets away with saying what no one else there can."
tags: [jester, performer, court]
type: profession
grants:
  - { trait: performer-acrobatics }
  - { trait: sleight-of-hand }
  - { trait: smooth-talker }
  - { trait: court-etiquette }
backgroundTraits:
  - performer-music
  - schemer
  - disguise
`,Ou=`id: knight
name: "Knight"
status: placeholder
plane: any
summary: "A sworn warrior of a noble house or order, trained to fight on horseback and to carry its honor."
tags: [knight, nobility, military]
type: profession
grants:
  - { trait: wielder-longsword }
  - { trait: shield-wall }
  - { trait: rider-basic-animals }
  - { trait: courtly-manners }
  - { trait: heraldry }
backgroundTraits:
  - court-etiquette
  - military-tactics
  - vigilance
`,ku=`id: local-police
name: "Local Police"
status: placeholder
plane: any
summary: "Keeps the peace in a town, city or station, and knows its streets and the people on them."
tags: [police, law, enforcement]
type: profession
grants:
  - { trait: vigilance }
  - { trait: investigation }
  - { trait: wielder-pistol }
  - { trait: local-history }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - streetwise
  - intimidation
  - medical-aid
  - criminal-underworld
`,Au=`id: musical-artist
name: "Musical Artist"
status: placeholder
plane: any
summary: "Plays, sings or composes for a living, from taverns and station bars to concert halls."
tags: [music, artist, performer, culture]
type: profession
grants:
  - { trait: performer-music }
  - { trait: smooth-talker }
  - { trait: music }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - performer-acrobatics
  - sleight-of-hand
  - haggler
`,ju=`id: ranger
name: "Ranger"
status: placeholder
plane: any
summary: "Patrols the wild places, tracking dangerous beasts and guiding travelers through."
tags: [ranger, wilderness, hunting]
type: profession
grants:
  - { trait: tracker }
  - { trait: survivalist }
  - { trait: vigilance }
  - { trait: countryside-lore }
backgroundTraits:
  - ambusher
  - wielder-musket
  - rider-basic-animals
  - animal-husbandry
`,Mu=`id: smuggler
name: "Smuggler"
status: placeholder
plane: any
summary: "Moves goods past the law, by ship, caravan or cart, along whatever routes the authorities aren’t watching."
tags: [crime, smuggling, trade, cargo]
type: profession
grants:
  - { trait: concealment }
  - { trait: sleight-of-hand }
  - { trait: haggler }
  - { trait: criminal-underworld }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - streetwise
  - appraisal
  - cargo-handling
  - lockpicking
  - thieves-cant
`,Nu=`id: spy
name: "Spy"
status: placeholder
plane: any
summary: "Gathers secrets for a government, a noble house, a guild or a corporation, and is rarely who they say they are."
tags: [spy, intrigue, secrets]
type: profession
grants:
  - { trait: concealment }
  - { trait: disguise }
  - { trait: schemer }
  - { trait: smooth-talker }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
backgroundTraits:
  - investigation
  - sleight-of-hand
  - lockpicking
  - thieves-cant
  - heraldry
`,Pu=`id: squire
name: "Squire"
status: placeholder
plane: any
summary: "A knight’s apprentice, learning to fight and ride by carrying their armor and minding their horse."
tags: [squire, knight, nobility, military]
type: profession
grants:
  - { trait: rider-basic-animals }
  - { trait: shield-wall }
  - { trait: court-etiquette }
  - { trait: heraldry }
backgroundTraits:
  - wielder-longsword
  - courtly-manners
  - animal-husbandry
`,Fu=`id: stonemason
name: "Stonemason"
status: placeholder
plane: any
summary: "Cuts and lays stone for walls, bridges and buildings, and knows which ones will still stand in a hundred years."
tags: [craft, masonry, building]
type: profession
grants:
  - { trait: craft-masonry }
  - { trait: teamster }
  - { trait: architecture }
backgroundTraits:
  - artist-sculpture
  - mountaineering
  - appraisal
`,Iu=`id: surgeon
name: "Surgeon"
status: placeholder
plane: any
summary: "Operates to repair what medicine alone can’t, from battlefield wounds to failing organs."
tags: [medicine, surgery, healing, science]
type: profession
grants:
  - { trait: surgery }
  - { trait: medical-aid }
  - { trait: medicine }
backgroundTraits:
  - research
  - cybernetics
  - pharmacology
  - pathology
  - parasapient-medicine
`,Lu=`id: tanner
name: "Tanner"
status: placeholder
plane: any
summary: "Turns hides into leather, including the hides of stranger beasts when someone brings them in."
tags: [craft, leather, trade]
type: profession
grants:
  - { trait: craft-leatherworking }
  - { trait: animal-husbandry }
  - { trait: haggler }
backgroundTraits:
  - appraisal
  - specimen-handling
  - countryside-lore
`,Ru=`id: visual-artist
name: "Visual Artist"
status: placeholder
plane: any
summary: "Makes a living, or tries to, from painting, sculpture, illustration or design."
tags: [art, artist, culture]
type: profession
grants:
  - { trait: artist-painting }
  - { trait: appraisal }
  - { trait: art-history }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - artist-sculpture
  - haggler
  - smooth-talker
`,zu=`id: alchemist
name: "Alchemist"
status: placeholder
plane: isekai
region: dreft
summary: "Studies the properties of substances and brews potions to unlock them, with more ambition than safety."
tags: [potions, alchemy, scholar, dreft]
type: profession
grants:
  - { trait: simple-potion-mixing }
  - { trait: research }
  - { trait: alchemy }
  - { trait: herbalism }
backgroundTraits:
  - advanced-potion-mixing
  - appraisal
  - exotic-materials
`,Bu=`id: caravaneer
name: Caravaneer
status: placeholder
plane: isekai
region: dreft
summary: "An itinerant merchant trader, always moving between ports, cities, and kingdoms."
tags: [caravan, trade, travel, merchant]
type: profession
grants:
  - { trait: teamster }
  - { trait: haggler }
  - { trait: trade-roads }
  - { trait: bandits-and-brigands }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,Vu=`id: dreft-local-militia
name: "Dreft Local Militia"
status: placeholder
plane: isekai
region: dreft
summary: "Called up from a town or village to defend it from bandits and monsters when the crown’s soldiers are far away."
tags: [militia, military, village, dreft]
type: profession
grants:
  - { trait: shield-wall }
  - { trait: vigilance }
  - { trait: local-history }
  - { trait: countryside-lore }
backgroundTraits:
  - wielder-war-axe
  - wielder-longsword
  - tracker
  - military-tactics
`,Hu=`id: dreft-mercenary
name: "Dreft Mercenary"
status: placeholder
plane: isekai
region: dreft
summary: "Fights for whoever pays, guarding caravans, settling feuds and filling out noble armies in the succession crisis."
tags: [mercenary, military, combat, dreft]
type: profession
grants:
  - { trait: wielder-longsword }
  - { trait: shield-wall }
  - { trait: haggler }
  - { trait: bandits-and-brigands }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - wielder-war-axe
  - wielder-musket
  - survivalist
  - intimidation
  - military-tactics
`,Uu=`id: gate-hand
name: Gate Hand
status: placeholder
plane: isekai
region: dreft
summary: "Works the switch port for Tetra Frontiers Co.: hauling, translating, and generally being useful."
tags: [switch-port, company, translator, foreigners, isekai, dreft]
type: profession
grants:
  - { trait: smooth-talker }
  - { trait: haggler }
  - { trait: tetra-frontiers-co }
  - { trait: earth-baseline-customs }
`,Wu=`id: guild-hunter
name: Guild Hunter
status: placeholder
plane: isekai
region: dreft
summary: "Hunts monsters for pay and glory. Hunting guilds keep posts and track the monster bounties put up by the kingdom or locals."
tags: [hunter, monsters, guild, wilderness, combat]
type: profession
grants:
  - { trait: tracker }
  - { trait: ambusher }
  - { trait: monsters-of-isekai }
  - { trait: the-kings-woods }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,Gu=`id: hedge-witch
name: Hedge Witch
status: placeholder
plane: isekai
region: dreft
summary: "Practices magic outside the licensed system of Dreft and its neighboring kingdoms. Working far from the scrutiny of cities and trading posts, these mages are a mixed bag."
tags: [witch, magic, unlicensed, folk]
type: profession
# A bonus point in Magic, without a level, for a character who can level it.
coreBonus: { magic: 1 }
grants:
  - { trait: folk-remedies }
  - { trait: countryside-lore }
  - { trait: magic-on-isekai }
  - { trait: herbalism }
`,Ku=`id: licensed-mage
name: Licensed Mage
status: placeholder
plane: isekai
region: dreft
summary: "Trained in the licensed colleges of magic in Dreft or one of its neighboring kingdoms, these mages practice officially sanctioned, and supposedly safe, magic."
tags: [mage, magic, licensed, scholar]
type: profession
# A bonus point in Magic, without a level, for a character who can level it.
coreBonus: { magic: 1 }
grants:
  - { trait: incantation }
  - { trait: relic-handling }
  - { trait: magic-on-isekai }
  - { trait: dreftian-law }
`,qu=`id: royal-guard
name: Royal Guard
status: placeholder
plane: isekai
region: dreft
summary: "Sworn to the crown of one of Isekai’s kingdoms, and as adept with a blade as with courtly manners."
tags: [guard, military, crown, court]
type: profession
grants:
  - { trait: shield-wall }
  - { trait: vigilance }
  - { trait: court-etiquette }
  - { trait: aristocracy }
`,Ju=`id: american-empire-soldier
name: "American Empire Soldier"
status: placeholder
plane: earth
region: american-empire
summary: "A soldier of the Imperial armed forces, trained for an Empire that is rarely short of a frontier to hold or a rival to stare down."
tags: [military, soldier, american-empire, combat]
lore: american-empire
type: profession
grants:
  - { trait: wielder-rifle }
  - { trait: military-drill }
  - { trait: vigilance }
  - { trait: the-imperial-military }
  - { trait: imperial-service-record }
`,Yu=`id: combat-medic
name: "Combat Medic"
status: placeholder
plane: earth
summary: "Keeps soldiers alive under fire, patching wounds in the middle of a fight."
tags: [medicine, military, combat, healing]
type: profession
grants:
  - { trait: medical-aid }
  - { trait: military-drill }
  - { trait: vigilance }
backgroundTraits:
  - surgery
  - survivalist
  - wielder-rifle
  - medicine
  - pharmacology
  - toxicology
  - psychology
`,Xu=`id: computer-engineer
name: "Computer Engineer"
status: placeholder
plane: earth
summary: "Designs, builds and fixes the software and systems that run the settled systems."
tags: [computers, engineering, technology, ai]
type: profession
grants:
  - { trait: programming }
  - { trait: research }
  - { trait: computer-systems }
  - { trait: mathematics }
backgroundTraits:
  - robotics
  - artificial-intelligence
  - cybernetics
`,Zu=`id: emergency-medical-technician
name: "Emergency Medical Technician"
status: placeholder
plane: earth
summary: "First on the scene of accidents and emergencies, keeping people alive until they reach a hospital."
tags: [medicine, emergency, healing, urban]
type: profession
grants:
  - { trait: medical-aid }
  - { trait: vigilance }
  - { trait: streetwise }
  - { trait: medicine }
backgroundTraits:
  - surgery
  - pilot-truck
  - pharmacology
  - toxicology
  - psychology
`,Qu=`id: exotic-specimen-dealer
name: "Exotic Specimen Dealer"
status: placeholder
plane: earth
summary: "Imports extraplanar specimens for labs, zoos and pet shops, with paperwork that’s usually in order."
tags: [trade, animals, parabiology, merchant, smuggling]
type: profession
grants:
  - { trait: haggler }
  - { trait: appraisal }
  - { trait: parazoology }
  - { trait: cargo-handling }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,$u=`id: fighter-pilot
name: "Fighter Pilot"
status: placeholder
plane: earth
summary: "Flies fighters for a navy, a corporation or whoever is paying, and knows a dogfight from the inside."
tags: [pilot, military, fighter, space]
type: profession
grants:
  - { trait: pilot-fighter }
  - { trait: military-drill }
  - { trait: vigilance }
  - { trait: military-tactics }
backgroundTraits:
  - pilot-helicopter
  - starship-engineering
  - shipping-lanes
`,ed=`id: interplanar-diplomat
name: "Interplanar Diplomat"
status: placeholder
plane: earth
summary: "Represents a nation to peoples and powers from other planes, where the first job is working out what an insult looks like."
tags: [diplomacy, politics, parasapients]
type: profession
grants:
  - { trait: smooth-talker }
  - { trait: interplanar-relations }
  - { trait: parasapients }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
  - choose: 1
    from: contact
    note: "+1 Contact"
`,td=`id: interplanar-rights-lawyer
name: "Interplanar Rights Lawyer"
status: placeholder
plane: earth
summary: "Practices the law of the treatment and rights of beings from beyond the stars, and tests what counts as a person in court."
tags: [law, rights, parasapients, courts]
type: profession
grants:
  - { trait: legal-advocacy }
  - { trait: interplanar-law }
  - { trait: parasapients }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,nd=`id: officer-of-the-bureau-of-planar-management-and-enforcement
name: "Officer of the Bureau of Planar Management and Enforcement"
status: placeholder
plane: earth
summary: "Enforces the laws on planar exploration for the Bureau, inspecting gates and chasing down unregulated exploitation across the systems."
tags: [law, enforcement, planes, bureau, tetra]
type: profession
grants:
  - { trait: investigation }
  - { trait: vigilance }
  - { trait: wielder-pistol }
  - { trait: the-bureau-of-planar-management }
  - { trait: interplanar-law }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
backgroundTraits:
  - planar-surveying
  - planar-exploration
  - tetra
  - paraphysics
`,U=`id: paraarcheologist
name: "Paraarcheologist"
status: placeholder
plane: earth
summary: "Digs up what parasapient civilizations left behind on other planes, before someone else sells it."
tags: [science, archeology, ruins, fieldwork]
type: profession
grants:
  - { trait: research }
  - { trait: excavation }
  - { trait: paraarcheology }
  - { trait: appraisal }
`,W=`id: paraecologist
name: "Paraecologist"
status: placeholder
plane: earth
summary: "Catalogues whole new kingdoms of life, many of them reliant on exotic physics, out in the field and often alongside the Explorers’ Lodge."
tags: [science, parabiology, fieldwork, ecology, lodge]
lore: explorers-lodge
type: profession
grants:
  - { trait: survivalist }
  - { trait: field-sampling }
  - { trait: parabiology }
  - { trait: the-explorers-lodge }
`,G=`id: paraethnologist
name: "Paraethnologist"
status: placeholder
plane: earth
summary: "Studies the cultures of parasapient peoples, usually by living among them for as long as they’ll allow it."
tags: [science, parasapients, cultures, fieldwork]
type: profession
grants:
  - { trait: research }
  - { trait: parasapients }
  - { trait: smooth-talker }
choices:
  - choose: 1
    from: language
    note: "+1 Language"
`,K=`id: paraevolutionary-scientist
name: "Paraevolutionary Scientist"
status: placeholder
plane: earth
summary: "Studies how extraplanar life came to be, from the history of flora floating in a sea of light to why it evolved at all."
tags: [science, parabiology, research, evolution]
type: profession
grants:
  - { trait: research }
  - { trait: parabiology }
  - { trait: paraflora }
  - { trait: paraphysics }
`,q=`id: paraphysiologist
name: "Paraphysiologist"
status: placeholder
plane: earth
summary: "Researches the strange forms and biologies of extraplanar creatures, like the ones made of ice, usually with one on the table."
tags: [science, parabiology, research, anatomy]
type: profession
grants:
  - { trait: research }
  - { trait: parabiology }
  - { trait: parazoology }
  - { trait: specimen-handling }
`,rd=`id: parazoological-keeper
name: "Parazoological Keeper"
status: placeholder
plane: earth
summary: "Keeps extraplanar animals alive and contained in a lab, zoo or pet shop, and knows which enclosures not to stand near."
tags: [animals, parabiology, zoo, care]
type: profession
grants:
  - { trait: specimen-handling }
  - { trait: parazoology }
  - { trait: vigilance }
`,id=`id: planar-expeditionary-professional
name: "Planar Expeditionary Professional"
status: placeholder
plane: earth
summary: "A member of the expedition teams that open new planes for the Explorers’ Lodge: surveying, raising the first gate platforms, and surviving whatever is waiting on the other side."
tags: [planes, exploration, lodge, survey, wilderness]
lore: explorers-lodge
type: profession
grants:
  - { trait: survivalist }
  - { trait: planar-surveying }
  - { trait: planar-exploration }
  - { trait: the-explorers-lodge }
  - { trait: explorers-lodge-membership }
`,ad=`id: starship-engineer
name: "Starship Engineer"
status: placeholder
plane: earth
summary: "Keeps starships running: reactors, drives, life support, and everything that rattles in between."
tags: [engineering, starships, technology, space]
type: profession
grants:
  - { trait: starship-engineering }
  - { trait: tinkerer }
  - { trait: exotic-materials }
  - { trait: ports-and-stations }
backgroundTraits:
  - programming
  - cargo-handling
  - robotics
`,od=`id: station-maintenance
name: "Station Maintenance"
status: placeholder
plane: earth
summary: "Keeps a station or Ark habitable: air, water, power and the endless repairs nobody notices until they stop."
tags: [maintenance, station, ark, technology]
type: profession
grants:
  - { trait: tinkerer }
  - { trait: cargo-handling }
  - { trait: ark-life }
  - { trait: ports-and-stations }
backgroundTraits:
  - starship-engineering
  - programming
  - concealment
`,sd=`id: theoretical-paraphysicist
name: "Theoretical Paraphysicist"
status: placeholder
plane: earth
summary: "A scientist working at the edge of paraphysics, the field The Gift opened up, where new discoveries are made every day and most of them are wrong."
tags: [science, paraphysics, research, scholar]
type: profession
grants:
  - { trait: research }
  - { trait: paraphysics }
  - { trait: exotic-materials }
  - { trait: mathematics }
`,cd=`id: truck-pilot
name: "Truck Pilot"
status: placeholder
plane: earth
summary: "Hauls cargo in a truck between stations, ships and planetary surfaces, and rarely knows what’s inside the containers."
tags: [pilot, trucks, shipping, cargo, space]
lore: trucks
type: profession
grants:
  - { trait: pilot-truck }
  - { trait: cargo-handling }
  - { trait: shipping-lanes }
  - { trait: ports-and-stations }
choices:
  - choose: 1
    from: contact
    note: "+1 Contact"
`,ld=`id: capable-student
name: "Capable Student"
status: draft
plane: any
summary: "Learns new knowledge in half the time."
tags: [learning, study, site-example]
category: ability
minStats: { memory: 3, logic: 3 }
effect: "This character can learn a new (knowledge) Trait in half the specified time."
`,ud=`id: con-man
name: "Con Man"
status: draft
plane: any
summary: "A practiced liar, in speech and in writing."
tags: [lying, deception, social, site-example]
category: ability
minStats: { persuasion: 8, demeanor: 4, intuition: 4, memory: 4 }
effect: "Add 5 to any skill check rolls that involve lying in either written or spoken form."
`,dd=`id: eagle-eye
name: "Eagle Eye"
status: draft
plane: any
summary: "Sees unusually well at a distance."
tags: [sight, perception, site-example]
category: ability
conveyed: true
effect: "This character can request advantage in situations that involve seeing at distance."
`,fd=`id: gladiator
name: "Gladiator"
status: draft
plane: any
summary: "Can fight passably with any close combat weapon."
tags: [combat, melee, site-example]
category: ability
minStats: { physical: 5, grace: 5, demeanor: 5 }
effect: "When in combat, this character can use any close combat weapon as if they had the Wielder Trait with a single rank for that weapon."
`,pd=`id: knowledge-sponge
name: "Knowledge Sponge"
status: draft
plane: any
summary: "Learns new knowledge in a quarter of the time."
tags: [learning, study, site-example]
category: ability
mastery: true
minStats: { memory: 5, logic: 5, intuition: 5 }
prerequisites: [capable-student]
effect: "This character can learn a new (knowledge) Trait in a quarter the specified time."
`,md=`id: magic-access
name: "Magic Access"
status: placeholder
plane: any
summary: "This character can use magic: they can level the Magic core stat and take Traits on the Magic list."
tags: [magic, access]
category: ability
conveyed: true
coreAccess: [magic]
opensLists: [magic]
effect: "This character can put levels into Magic, a core stat with no focus stats; each point of Magic adds 3 MP (Mana Points). They can also take Traits on the Magic list, like Incantation."
`,hd=`id: magical-heritage
name: "Magical Heritage"
status: placeholder
plane: isekai
region: dreft
summary: "Born on a plane where magic is part of the world."
tags: [magic, dreft, heritage]
category: ability
conveyed: true
# Magic comes with the heritage.
grants:
  - trait: magic-access
effect: "This character was born to magic, and has Magic Access."
`,gd=`id: mental-fortitude
name: "Mental Fortitude"
status: draft
plane: any
summary: "Holds together when the mind is badly taxed."
tags: [will, resistance, site-example]
category: ability
minStats: { endurance: 8, logic: 5, demeanor: 5 }
effect: "This character can request advantage in any scenario where their mental faculties are being severely taxed, be it resisting the mesmerizing effects of a vampire or pushing through a long march without becoming exhausted."
`,_d=`id: natural-breath-weapon
name: "Natural Breath Weapon"
status: draft
plane: any
summary: "A biology that lets the character use their breath as a tool or weapon."
tags: [breath, natural-weapon, combat, site-example]
category: ability
ranked: true
background: true
minStats: { endurance: 3 }
effect: "This character's biology allows them to use their breath as a tool or weapon. For each rank of this ability add another d4 to the damage the breath weapon deals."
`,vd=`id: sculpted
name: "Sculpted"
status: draft
plane: any
summary: "Looks every bit as athletic as they are."
tags: [appearance, athletics, social, site-example]
category: ability
minStats: { power: 5, endurance: 5, demeanor: 3 }
effect: "This character can request advantage in situations where the appearance of athleticism can affect the outcome of a roll or situation (useful for models, athletes with endorsements, or barbarians trying to intimidate)."
`,yd=`id: trail-runner
name: "Trail Runner"
status: draft
plane: any
summary: "Slow to tire when running, hiking or climbing."
tags: [endurance, travel, site-example]
category: ability
minStats: { power: 3, endurance: 2, grace: 2 }
effect: "This character takes twice as long to get winded by activities that involve running, hiking, or climbing."
`,bd=`id: explorers-lodge-membership
name: "Explorers’ Lodge Membership"
status: placeholder
plane: earth
summary: "This character is a member in good standing of the Explorers’ Lodge."
tags: [lodge, exploration, membership]
lore: explorers-lodge
category: circumstance
conveyed: true
effect: Placeholder. Effect not yet written.
`,xd=`id: imperial-service-record
name: "Imperial Service Record"
status: placeholder
plane: earth
region: american-empire
summary: "This character serves, or has served, in the American Empire’s armed forces."
tags: [military, american-empire, service]
category: circumstance
conveyed: true
effect: Placeholder. Effect not yet written.
`,Sd=`id: short-term-fame
name: "Short Term Fame"
status: draft
plane: any
summary: "Famous, for now, after recent events."
tags: [fame, social, site-example]
category: circumstance
conveyed: true
temporary: "30 days"
effect: "Due to recent events this character is famous and can request advantage in social situations where the character's fame may aid them."
`,Cd=`id: significant-inheritance
name: "Significant Inheritance"
status: draft
plane: earth
summary: "An inheritance of 2 million ERC sitting safely in a bank."
tags: [money, inheritance, wealth, site-example]
category: circumstance
conveyed: true
temporary: "Lost when the money is all spent"
effect: "This character has access to an Inheritance of 2 million Earth Reserve Credits (ERC) currently safely contained in a bank."
`,wd=`id: thieves-guild-membership
name: "Thieves Guild Membership"
status: draft
plane: any
summary: "An official member of a local Thieves Guild."
tags: [thieves-guild, membership, crime, site-example]
category: circumstance
conveyed: true
effect: "This character is an official member of a Local Thieves Guild."
`,Td=`id: tugboat-captain
name: "Tugboat Captain"
status: draft
plane: any
summary: "Licensed and trained to command a tugboat."
tags: [tugboat, license, pilot, site-example]
category: circumstance
conveyed: true
effect: "This character has all required legal training and licenses required to command a Tugboat."
`,Ed=`id: wanted-in-sol
name: "Wanted in Sol"
status: draft
plane: earth
summary: "Wanted by the nations of the Sol system for past crimes."
tags: [wanted, crime, sol, site-example]
category: circumstance
conveyed: true
temporary: "Lost when the character's innocence is proclaimed or they are caught"
effect: "This character is wanted by the nations of the Sol system for past crimes. This character's wanted status is severe and law enforcement and bounty hunting entities are actively searching for them."
`,Dd=`id: cybernetic-intelligence
name: "Cybernetic Intelligence"
status: draft
plane: earth
summary: "A machine-fast mind for mathematics."
tags: [cybernetic, mathematics, ai, site-example]
category: condition
background: true
effect: "This character is capable of extremely rapid feats of mathematical comprehension and has a +20 roll modifier for skill checks related to mathematics. This character is capable of performing significant numbers of mathematical calculations simultaneously; it is at the GM's discretion when and how this ability is limited."
`,Od=`id: damaged
name: "Damaged"
status: draft
plane: any
summary: "An object below its full HP."
tags: [objects, damage, site-example, hit-points]
category: condition
conveyed: true
temporary: "An object gains this trait if it is below its maximum HP total"
effect: "This Trait has no effect on its own."
`,kd=`id: dead
name: "Dead"
status: draft
plane: any
summary: "Dead."
tags: [injury, death, site-example]
category: condition
types: [injury]
conveyed: true
temporary: "A character gains this trait if they are at 0 or less HP"
effect: "This character is dead and cannot perform voluntary actions. This character cannot be healed by any means unless otherwise stated."
`,Ad=`id: destroyed
name: "Destroyed"
status: draft
plane: any
summary: "An object at 0 HP or less, no longer working."
tags: [objects, damage, site-example, hit-points]
category: condition
conveyed: true
temporary: "An object gains this trait if it is at 0 or less HP"
effect: "This object has been destroyed and no longer functions in any intended capacity. This object cannot be repaired by any means unless otherwise stated."
`,jd=`id: ghost-sight
name: "Ghost Sight"
status: draft
plane: any
summary: "Perceives beyond the veil, seeing and hearing the supernatural."
tags: [supernatural, sight, site-example]
category: condition
conveyed: true
temporary: "Lost when the effect that granted this Trait ends"
effect: "This character perceives beyond the veil. This character can see and hear the supernatural."
`,Md=`id: hard-shell
name: "Hard Shell"
status: draft
plane: any
summary: "A hard natural shell that protects the torso."
tags: [shell, armor, natural, site-example]
category: condition
ranked: true
background: true
minStats: { endurance: 5 }
effect: "This character possesses a hard natural shell that protects them from harm. Rank *3 added to this character's Blunt, Slashing, and Piercing resistances for attacks that hit its torso."
`,Nd=`id: healthy
name: "Healthy"
status: draft
plane: any
summary: "At full HP."
tags: [health, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character or object gains this trait while they are at their maximum HP total"
effect: "This Trait has no effect on its own."
`,Pd=`id: incapacitated
name: "Incapacitated"
status: draft
plane: any
summary: "Too badly hurt to act or perceive."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are at less than a quarter of their HP total"
effect: "This character has been incapacitated by their injuries and can no longer perform voluntary actions or perceive the world around them."
`,Fd=`id: injured
name: "Injured"
status: draft
plane: any
summary: "Below full HP."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are below their maximum HP total"
effect: "This Trait has no effect on its own."
`,Id=`id: long-toothed
name: "Long Toothed"
status: draft
plane: isekai
summary: "An Orc whose teeth have grown long with age, a mark of wisdom and prestige among Orcs."
tags: [orcs, age, prestige, social, site-example]
category: condition
background: true
minStats: { power: 10, endurance: 5, demeanor: 5 }
rpRequirement: "Middle Aged or Older"
effect: "An Orc's teeth grow continuously as they age, acting as both a sign of wisdom and prestige. An Orc that has managed to maintain their teeth throughout their life is seen as a highly capable individual or one of noble birth. A long-toothed Orc can request advantage in dealings with other Orcs, or with any other party that may hold this belief about Orcs."
`,Ld=`id: mechanical
name: "Mechanical"
status: draft
plane: any
summary: "A machine: harmed by EMP, and usually immune to Death damage."
tags: [machine, emp, site-example]
category: condition
background: true
effect: "This character or object is a machine. It can be harmed by EMP damage and is typically immune to Death damage."
`,Rd=`id: severe-bleeding
name: "Severe Bleeding"
status: draft
plane: any
summary: "Losing blood fast, until someone treats it."
tags: [injury, bleeding, site-example]
category: condition
types: [injury]
conveyed: true
temporary: "This trait is lost when this Condition is Treated"
effect: "This character loses 1 HP every combat round while in combat. This character loses 1 HP every minute while outside of combat."
`,zd=`id: severely-injured
name: "Severely Injured"
status: draft
plane: any
summary: "Below half HP."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are below half their maximum HP total"
effect: "This Trait has no effect on its own."
`,Bd=`id: sorcerous
name: "Sorcerous"
status: draft
plane: isekai
summary: "Able to take magic Traits and to put points into the Magic core stat."
tags: [magic, sorcerous, site-example]
category: condition
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
background: true
effect: "This character may take magic-related traits and may spend stat points on the Magic core stat."
`,Vd=`id: stimm-rush
name: "Stimm Rush"
status: draft
plane: earth
summary: "Riding the rush of a Stimm."
tags: [stimm, drugs, physical, site-example]
category: condition
conveyed: true
temporary: "This Trait lasts a number of minutes stated by the Stimm being used, or 1 minute if there is no stated duration"
effect: "This character gains 5 to all physical focus stats."
`,Hd=`id: stone-skin
name: "Stone Skin"
status: draft
plane: any
summary: "Skin hardened to stone by an enchantment."
tags: [enchantment, resistance, site-example]
category: condition
types: [enchantment]
conveyed: true
temporary: "This trait lasts a number of minutes equal to the caster's Rank in this ability"
effect: "This character gains Rank *3 resistance to all Physical damage types."
`,Ud=`id: supernatural
name: "Supernatural"
status: draft
plane: any
summary: "Gone beyond the real: able to take supernatural Traits and to put points into the Supernatural core stat."
tags: [supernatural, site-example]
category: condition
background: true
effect: "This character has gone beyond the realm of the real and can take supernatural-related traits and may spend stat points on the Supernatural core stat."
`,Wd=`id: additional-contact
name: Additional Contact
status: placeholder
plane: any
summary: "Someone the character can call on. Who it is is up to the player."
tags: [contact, people, network]
category: contact
ranked: true
effect: Placeholder. Effect not yet written.
choices:
  - choose: 1
    from: contact
    note: "+1 Contact per rank"
`,Gd=`id: additional-language
name: Additional Language
status: placeholder
plane: any
summary: "One more language the character speaks."
tags: [language]
category: knowledge
ranked: true
effect: Placeholder. Effect not yet written.
choices:
  - choose: 1
    from: language
    note: "+1 Language per rank"
`,Kd=`id: ai-culture
name: "AI Culture"
status: placeholder
plane: earth
summary: "The customs, media and politics of AI Cores and the communities around them."
tags: [ai, culture, kashgar]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 2 }
effect: "This character has knowledge of AI society and culture and can be assumed to be familiar with the peoples, places, and customs relevant to AI Cores and the communities around them."
`,qd=`id: alchemy
name: "Alchemy"
status: draft
plane: isekai
summary: "The properties of substances and how they combine, the theory behind every potion."
tags: [alchemy, potions, science]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, intuition: 2 }
effect: "This character has knowledge of alchemy and can be assumed to be familiar with the properties of common reagents and how they combine in potions."
`,Jd=`id: american-geography
name: "American Geography"
status: placeholder
plane: earth
region: american-empire
summary: "The Empire’s Earth territories, from the Californias to Nueva Mexico."
tags: [geography, american-empire, earth]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of American geography and can be assumed to be familiar with the American Empire’s territories on Earth and in its colonies."
`,Yd=`id: american-history
name: "American History"
status: placeholder
plane: earth
region: american-empire
summary: "The history of the United States and the American Empire that replaced it."
tags: [history, american-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of American history and can be assumed to be familiar with the history of the United States and the American Empire that replaced it."
`,Xd=`id: amharic-written
name: "Amharic (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, amharic, earth, writing]
category: knowledge
types: [language]
language: amharic
effect: "This character can read and write the Amharic language."
`,Zd=`id: amharic
name: "Amharic (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, amharic, earth]
category: knowledge
types: [language]
language: amharic
effect: "This character is conversational in the Amharic language and can speak it."
`,Qd=`id: antiluna
name: "Antiluna"
status: placeholder
plane: earth
region: sdu
summary: "The SDU’s colony in high Earth orbit."
tags: [colony, orbit, sdu]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Antiluna space station and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,$d=`id: arabic-written
name: "Arabic (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, arabic, earth, writing]
category: knowledge
types: [language]
language: arabic
effect: "This character can read and write the Arabic language."
`,ef=`id: arabic
name: "Arabic (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, arabic, earth]
category: knowledge
types: [language]
language: arabic
effect: "This character is conversational in the Arabic language and can speak it."
`,tf=`id: architecture
name: "Architecture"
status: draft
plane: any
summary: "How buildings and bridges are designed, built and brought down."
tags: [building, masonry, engineering]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of architecture and can be assumed to be familiar with building styles, structural design and construction methods."
`,nf=`id: aristocracy
name: Aristocracy
status: placeholder
plane: isekai
summary: "The nobility of Isekai’s kingdoms: titles, ranks and who’s who."
tags: [nobility, court]
category: knowledge
minStats: { memory: 3, demeanor: 3 }
effect: "This character has knowledge of the aristocracy and can be assumed to be familiar with the nobles, titles, and ranks of the kingdoms surrounding the switch port on Isekai."
`,rf=`id: ark-life
name: "Ark Life"
status: placeholder
plane: earth
region: tetra
summary: "Living and working aboard a drifting Ark, from the air recyclers to the corridors."
tags: [ark, space, urban]
category: knowledge
ranked: true
minStats: { memory: 1, intuition: 2 }
effect: "This character has knowledge of life aboard Arks and can be assumed to be familiar with navigating their corridors and cultures."
`,af=`id: ark-new-york
name: "Ark New York"
status: placeholder
plane: earth
region: american-empire
summary: "The Empire’s capital Ark and the absentee Emperor’s court aboard it."
tags: [ark, new-york, american-empire]
lore: new-york
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark New York and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,of=`id: art-history
name: "Art History"
status: draft
plane: any
summary: "Artists, movements and famous works, and what they are worth."
tags: [art, culture, history]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of art history and can be assumed to be familiar with notable artists, movements and works and their value."
`,sf=`id: artificial-intelligence
name: "Artificial Intelligence"
status: placeholder
plane: earth
summary: "How AI Cores and lesser machine minds are built, trained and kept running."
tags: [ai, technology, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of artificial intelligence and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,cf=`id: bandits-and-brigands
name: "Bandits & Brigands"
status: placeholder
plane: isekai
region: dreft
summary: "Who robs the roads of Dreft, and how."
tags: [bandits, crime, roads]
category: knowledge
minStats: { memory: 2, intuition: 2 }
effect: "This character has knowledge of the criminal underworld of Isekai and can be assumed to be familiar with its groups and places."
`,lf=`id: bengali-written
name: "Bengali (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, bengali, earth, writing]
category: knowledge
types: [language]
language: bengali
effect: "This character can read and write the Bengali language."
`,uf=`id: bengali
name: "Bengali (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, bengali, earth]
category: knowledge
types: [language]
language: bengali
effect: "This character is conversational in the Bengali language and can speak it."
`,df=`id: boneyard
name: "Boneyard"
status: placeholder
plane: earth
region: sdu
summary: "Boneyard, one of the Union’s Arks."
tags: [ark, sdu]
lore: boneyard
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Boneyard and can be assumed to be familiar with the people, places, and customs aboard it."
`,ff=`id: burmese-written
name: "Burmese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, burmese, earth, writing]
category: knowledge
types: [language]
language: burmese
effect: "This character can read and write the Burmese language."
`,pf=`id: burmese
name: "Burmese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, burmese, earth]
category: knowledge
types: [language]
language: burmese
effect: "This character is conversational in the Burmese language and can speak it."
`,mf=`id: cantonese-written
name: "Cantonese (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, cantonese, earth, writing]
category: knowledge
types: [language]
language: cantonese
effect: "This character can read and write the Cantonese language."
`,hf=`id: cantonese
name: "Cantonese (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, cantonese, earth]
category: knowledge
types: [language]
language: cantonese
effect: "This character is conversational in the Cantonese language and can speak it."
`,gf=`id: caravan-routes
name: Caravan Routes
status: placeholder
plane: any
summary: "The people, places, and routes caravans take to and from their destinations."
tags: [caravan, trade, travel]
category: knowledge
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of the caravan trade and can be assumed to be familiar with the companies, routes, and oases it uses."
choices:
  - choose: 1
    from: place
    note: "Where the caravan routes run"
    perRank: false
`,J=`id: chinese-imperial-law
name: "Chinese Imperial Law"
status: placeholder
plane: earth
region: chinese-empire
summary: "The laws of the Empire of China, written and as the syndicates actually apply them."
tags: [law, chinese-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Chinese Imperial Law and can be assumed to be familiar with the laws and courts of the Empire of China."
`,_f=`id: coastal-trade
name: Coastal Trade
status: placeholder
plane: isekai
region: dreft
summary: "The goods, routes and traders of Dreft’s western coast."
tags: [trade, coast, merchant]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of coastal trade on Isekai and can be assumed to be familiar with its ports, products, and dangers."
`,vf=`id: computer-systems
name: "Computer Systems"
status: draft
plane: earth
summary: "The networks, software and hardware that run the settled systems."
tags: [computers, technology, networks]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of computer systems and can be assumed to be familiar with common networks, software and hardware and how they are secured."
`,yf=`id: countryside-lore
name: Countryside Lore
status: placeholder
plane: any
summary: "The ways of the countryside, away from the cities and trading posts."
tags: [rural, folklore, folk]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the local countryside and can be assumed to be familiar with its people, places, and customs."
choices:
  - choose: 1
    from: place
    note: "Which countryside"
    perRank: false
`,bf=`id: court-etiquette
name: Court Etiquette
status: placeholder
plane: isekai
region: dreft
summary: How to behave at the royal court.
tags: [court, nobility, etiquette]
category: knowledge
minStats: { memory: 2, demeanor: 3 }
effect: "This character has knowledge of courtly etiquette and can be assumed to be familiar with the rules and manners expected in the royal halls of Isekai."
`,xf=`id: criminal-underworld
name: "Criminal Underworld"
status: draft
plane: any
summary: "The gangs, fences and smugglers who work outside the law, and the rules they keep among themselves."
tags: [crime, underworld, streets]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of organized crime and can be assumed to be familiar with its gangs, fences, black markets and the unwritten rules between them."
`,Sf=`id: cybernetics
name: "Cybernetics"
status: placeholder
plane: earth
summary: "Implants, prosthetics and the medicine of joining people to machines."
tags: [cybernetics, technology, medicine]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of cybernetics and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,Cf=`id: dreft
name: Dreft
status: placeholder
plane: isekai
region: dreft
summary: "The Kingdom of Dreft: its regions, its crown and its customs."
tags: [kingdom, dreft]
lore: dreft
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Kingdom of Dreft and can be assumed to be familiar with its politics, regions, wildlife, and cultures."
`,wf=`id: dreftan-written
name: "Dreftan (Written)"
status: placeholder
plane: isekai
region: dreft
summary: "The common language of Dreft."
tags: [language, dreft, writing]
category: knowledge
types: [language]
language: dreftan
effect: This character can read and write the Dreftan language.
`,Tf=`id: dreftan
name: "Dreftan (Spoken)"
status: placeholder
plane: isekai
region: dreft
summary: "The common language of Dreft."
tags: [language, dreft]
category: knowledge
types: [language]
language: dreftan
effect: This character is conversational in the Dreftan language and can speak it.
`,Ef=`id: dreftian-law
name: Dreftian Law
status: placeholder
plane: isekai
region: dreft
summary: The laws of the Kingdom of Dreft and how they’re enforced.
tags: [law, dreft]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Dreftian law and can be assumed to be familiar with the laws of the Kingdom of Dreft and how they’re enforced."
`,Df=`id: dutch-written
name: "Dutch (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, dutch, earth, writing]
category: knowledge
types: [language]
language: dutch
effect: "This character can read and write the Dutch language."
`,Of=`id: dutch
name: "Dutch (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, dutch, earth]
category: knowledge
types: [language]
language: dutch
effect: "This character is conversational in the Dutch language and can speak it."
`,kf=`id: dwarvish-runes-written
name: "Dwarvish Runes (Written)"
status: draft
plane: isekai
summary: "The runes Dwarvish peoples write in."
tags: [language, dwarvish, writing, site-example]
category: knowledge
types: [language]
language: dwarvish-runes
minStats: { memory: 3, intuition: 5 }
effect: "This character can read and write Dwarvish Runes."
`,Af=`# Pairs with Dwarvish Runes (Written).
id: dwarvish
name: "Dwarvish (Spoken)"
status: draft
plane: isekai
summary: "The spoken tongue that Dwarvish Runes are written in."
tags: [language, dwarvish, isekai]
category: knowledge
types: [language]
language: dwarvish-runes
effect: "This character is conversational in the Dwarvish language and can speak it."
`,jf=`id: earth-baseline-customs
name: Earth Baseline Customs
status: placeholder
plane: earth
summary: How people from Earth Baseline expect things to be done.
tags: [earth, customs, foreigners]
category: knowledge
ranked: true
minStats: { memory: 1 }
effect: "This character has knowledge of Earth baseline customs and can be assumed to be familiar with how people across the systems expect things to be done."
`,Mf=`id: earth-baseline-technology
name: Earth Baseline Technology
status: placeholder
plane: earth
summary: The machines and devices of Earth Baseline.
tags: [earth, technology]
category: knowledge
minStats: { memory: 1 }
effect: "This character has knowledge of Earth baseline technology and can be assumed to be familiar with the machines and devices common across the systems."
`,Nf=`id: elemental-magics
name: "Elemental Magics"
status: draft
plane: isekai
summary: "The theory and history of Elemental Magics."
tags: [magic, elemental, site-example]
category: knowledge
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
ranked: true
minStats: { memory: 3, intuition: 5 }
effect: "This character has knowledge of Elemental Magics, including the theoretical underpinnings of that magic as well as its history."
`,Pf=`id: english-written
name: "English (Written)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, english, earth, writing]
category: knowledge
types: [language]
language: english
effect: This character can read and write the English language.
`,Ff=`id: english
name: "English (Spoken)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, english, earth]
category: knowledge
types: [language]
language: english
effect: This character is conversational in the English language and can speak it.
`,If=`id: exotic-materials
name: "Exotic Materials"
status: placeholder
plane: earth
summary: "The exotic materials paraphysics depends on: what they are, where they come from and what they do."
tags: [exotic-materials, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of exotic materials and can be assumed to be familiar with their uses, prices, and the rough paraphysical concepts by which they operate."
`,Lf=`id: farming
name: Farming
status: placeholder
plane: any
summary: "Crops, livestock and the farming year."
tags: [farming, rural]
category: knowledge
ranked: true
minStats: { memory: 2, endurance: 2 }
effect: "This character has knowledge of farming and can be assumed to be familiar with the technologies, techniques, and lifestyles associated with the practice."
`,Rf=`id: filipino-written
name: "Filipino (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, filipino, earth, writing]
category: knowledge
types: [language]
language: filipino
effect: "This character can read and write the Filipino language."
`,zf=`id: filipino
name: "Filipino (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, filipino, earth]
category: knowledge
types: [language]
language: filipino
effect: "This character is conversational in the Filipino language and can speak it."
`,Bf=`id: french-written
name: "French (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and Centafrica."
tags: [language, french, earth, writing]
category: knowledge
types: [language]
language: french
effect: "This character can read and write the French language."
`,Vf=`id: french
name: "French (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and Centafrica."
tags: [language, french, earth]
category: knowledge
types: [language]
language: french
effect: "This character is conversational in the French language and can speak it."
`,Hf=`id: german-written
name: "German (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, german, earth, writing]
category: knowledge
types: [language]
language: german
effect: "This character can read and write the German language."
`,Uf=`id: german
name: "German (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, german, earth]
category: knowledge
types: [language]
language: german
effect: "This character is conversational in the German language and can speak it."
`,Wf=`id: glintl
name: Glintl
status: placeholder
plane: isekai
region: dreft
summary: Knowing your way around the trading port of Glintl.
tags: [city, port, guwain]
lore: glintl
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the trading port of Glintl and can be assumed to be familiar with the peoples, places, and customs of the city."
`,Y=`id: gujarati-written
name: "Gujarati (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, gujarati, earth, writing]
category: knowledge
types: [language]
language: gujarati
effect: "This character can read and write the Gujarati language."
`,Gf=`id: gujarati
name: "Gujarati (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, gujarati, earth]
category: knowledge
types: [language]
language: gujarati
effect: "This character is conversational in the Gujarati language and can speak it."
`,Kf=`id: hausa-written
name: "Hausa (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, hausa, earth, writing]
category: knowledge
types: [language]
language: hausa
effect: "This character can read and write the Hausa language."
`,qf=`id: hausa
name: "Hausa (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, hausa, earth]
category: knowledge
types: [language]
language: hausa
effect: "This character is conversational in the Hausa language and can speak it."
`,Jf=`id: heraldry
name: "Heraldry"
status: draft
plane: any
summary: "The arms, mottos and lineages of noble houses, and what they say about who you are talking to."
tags: [nobility, heraldry, court]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of heraldry and can be assumed to be familiar with the arms, colors and lineages of noble houses and orders."
`,Yf=`id: herbalism
name: Herbalism
status: placeholder
plane: any
summary: "Plants and what they do for, and to, people."
tags: [herbs, healing, plants]
category: knowledge
minStats: { memory: 3, intuition: 3 }
effect: "This character has knowledge of herbalism and can be assumed to be familiar with the plants, techniques, and precautions involved with the practice."
`,Xf=`id: hindi-written
name: "Hindi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India and Kashgar."
tags: [language, hindi, earth, writing]
category: knowledge
types: [language]
language: hindi
effect: "This character can read and write the Hindi language."
`,Zf=`id: hindi
name: "Hindi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India and Kashgar."
tags: [language, hindi, earth]
category: knowledge
types: [language]
language: hindi
effect: "This character is conversational in the Hindi language and can speak it."
`,Qf=`id: imperial-law
name: "Imperial Law"
status: placeholder
plane: earth
region: american-empire
summary: "The American Empire’s legal code, its courts and how they’re enforced."
tags: [law, american-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the American Empire’s legal code and can be assumed to be familiar with the laws and courts of its territories."
`,$f=`id: imperial-politics
name: "Imperial Politics"
status: placeholder
plane: earth
region: american-empire
summary: "The Emperor, the Prince Regent, the Senate and who is feuding with whom."
tags: [politics, american-empire, senate]
lore: american-empire
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Imperial politics and can be assumed to be familiar with the Emperor, the Prince Regent, the Senate, and their feuds."
`,ep=`id: indonesian-written
name: "Indonesian (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, indonesian, earth, writing]
category: knowledge
types: [language]
language: indonesian
effect: "This character can read and write the Indonesian language."
`,tp=`id: indonesian
name: "Indonesian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, indonesian, earth]
category: knowledge
types: [language]
language: indonesian
effect: "This character is conversational in the Indonesian language and can speak it."
`,np=`id: interplanar-law
name: "Interplanar Law"
status: placeholder
plane: earth
summary: "The law of extraplanar beings: the treatment of specimens, the legal status of parasapients, and who counts as a person in which nation."
tags: [law, parasapients, rights, immigration]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 3 }
effect: "This character has knowledge of interplanar law and can be assumed to be familiar with the laws governing extraplanar beings, including the treatment of specimens and the legal status of parasapients."
`,rp=`id: interplanar-relations
name: "Interplanar Relations"
status: placeholder
plane: earth
summary: "The diplomatic and business ties linking nations separated by entire realities."
tags: [diplomacy, politics, trade, parasapients]
category: knowledge
ranked: true
minStats: { memory: 3, persuasion: 3 }
effect: "This character has knowledge of interplanar relations and can be assumed to be familiar with the planes, societies, and laws involved with contact between parasapients and representatives of Earth baseline."
`,X=`id: italian-written
name: "Italian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, italian, earth, writing]
category: knowledge
types: [language]
language: italian
effect: "This character can read and write the Italian language."
`,ip=`id: italian
name: "Italian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, italian, earth]
category: knowledge
types: [language]
language: italian
effect: "This character is conversational in the Italian language and can speak it."
`,ap=`id: japanese-written
name: "Japanese (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, japanese, earth, writing]
category: knowledge
types: [language]
language: japanese
effect: "This character can read and write the Japanese language."
`,op=`id: japanese
name: "Japanese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, japanese, earth]
category: knowledge
types: [language]
language: japanese
effect: "This character is conversational in the Japanese language and can speak it."
`,sp=`id: javanese-written
name: "Javanese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, javanese, earth, writing]
category: knowledge
types: [language]
language: javanese
effect: "This character can read and write the Javanese language."
`,cp=`id: javanese
name: "Javanese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, javanese, earth]
category: knowledge
types: [language]
language: javanese
effect: "This character is conversational in the Javanese language and can speak it."
`,lp=`id: kannada-written
name: "Kannada (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, kannada, earth, writing]
category: knowledge
types: [language]
language: kannada
effect: "This character can read and write the Kannada language."
`,up=`id: kannada
name: "Kannada (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, kannada, earth]
category: knowledge
types: [language]
language: kannada
effect: "This character is conversational in the Kannada language and can speak it."
`,dp=`id: karsef
name: Karsef
status: placeholder
plane: isekai
summary: The land across the Corsine Mountains from Dreft.
tags: [karsef, border, foreign]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Kingdom of Karsef and can be assumed to be familiar with its politics, regions, wildlife, and cultures."
`,fp=`id: kashgar-mindworks
name: "Kashgar Mindworks"
status: placeholder
plane: earth
region: kashgar
summary: "The company that builds AI Cores, and how it works."
tags: [ai, company, kashgar]
lore: kashgar-mindworks
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of Kashgar Mindworks and can be assumed to be familiar with its businesses, locations, employees, culture, and leadership."
`,pp=`id: kashgar
name: "Kashgar"
status: placeholder
plane: earth
region: kashgar
summary: "Kashgar, the largest Ark in the systems and the heart of the AI diaspora: its decks, its politics and its people."
tags: [kashgar, ark, ai]
lore: kashgar
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Kashgar and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,mp=`id: kazakh-written
name: "Kazakh (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kazakh, earth, writing]
category: knowledge
types: [language]
language: kazakh
effect: "This character can read and write the Kazakh language."
`,hp=`id: kazakh
name: "Kazakh (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kazakh, earth]
category: knowledge
types: [language]
language: kazakh
effect: "This character is conversational in the Kazakh language and can speak it."
`,gp=`id: khmer-written
name: "Khmer (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, khmer, earth, writing]
category: knowledge
types: [language]
language: khmer
effect: "This character can read and write the Khmer language."
`,_p=`id: khmer
name: "Khmer (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, khmer, earth]
category: knowledge
types: [language]
language: khmer
effect: "This character is conversational in the Khmer language and can speak it."
`,vp=`id: kinyarwanda-written
name: "Kinyarwanda (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, kinyarwanda, earth, writing]
category: knowledge
types: [language]
language: kinyarwanda
effect: "This character can read and write the Kinyarwanda language."
`,yp=`id: kinyarwanda
name: "Kinyarwanda (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, kinyarwanda, earth]
category: knowledge
types: [language]
language: kinyarwanda
effect: "This character is conversational in the Kinyarwanda language and can speak it."
`,bp=`id: korean-written
name: "Korean (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, korean, earth, writing]
category: knowledge
types: [language]
language: korean
effect: "This character can read and write the Korean language."
`,xp=`id: korean
name: "Korean (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, korean, earth]
category: knowledge
types: [language]
language: korean
effect: "This character is conversational in the Korean language and can speak it."
`,Sp=`id: kyrgyz-written
name: "Kyrgyz (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kyrgyz, earth, writing]
category: knowledge
types: [language]
language: kyrgyz
effect: "This character can read and write the Kyrgyz language."
`,Cp=`id: kyrgyz
name: "Kyrgyz (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kyrgyz, earth]
category: knowledge
types: [language]
language: kyrgyz
effect: "This character is conversational in the Kyrgyz language and can speak it."
`,wp=`id: lao-written
name: "Lao (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, lao, earth, writing]
category: knowledge
types: [language]
language: lao
effect: "This character can read and write the Lao language."
`,Tp=`id: lao
name: "Lao (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, lao, earth]
category: knowledge
types: [language]
language: lao
effect: "This character is conversational in the Lao language and can speak it."
`,Ep=`id: lingala-written
name: "Lingala (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, lingala, earth, writing]
category: knowledge
types: [language]
language: lingala
effect: "This character can read and write the Lingala language."
`,Dp=`id: lingala
name: "Lingala (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, lingala, earth]
category: knowledge
types: [language]
language: lingala
effect: "This character is conversational in the Lingala language and can speak it."
`,Op=`id: liquid-democracy
name: "Liquid Democracy"
status: placeholder
plane: earth
region: tetra
summary: "Tetra’s Liquid Democracy: delegated votes, ward representatives and the Council of 11."
tags: [tetra, politics, liquid-democracy, votes]
lore: tetra
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Tetra’s Liquid Democracy and can be assumed to be familiar with its delegated votes, ward representatives, and the Council of 11."
`,kp=`id: local-folklore
name: Local Folklore
status: placeholder
plane: any
summary: "The stories, superstitions and old warnings of a region."
tags: [folklore, rural]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the local folklore and can be assumed to be familiar with its history, places, rumors, and taboos."
choices:
  - choose: 1
    from: place
    note: "Which region's folklore"
    perRank: false
`,Ap=`id: local-history
name: "Local History"
status: draft
plane: any
summary: "The history of one local region: its names, places and what happened there."
tags: [history, local, site-example]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences."
`,jp=`id: magic-on-isekai
name: Magic on Isekai
status: placeholder
plane: isekai
summary: How magic works on Isekai.
tags: [magic]
lore: isekai-magic
category: knowledge
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of the magic on Isekai and can be assumed to be familiar with the philosophies, cultures, methods, and laws related to its practice."
`,Mp=`id: malay-written
name: "Malay (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, malay, earth, writing]
category: knowledge
types: [language]
language: malay
effect: "This character can read and write the Malay language."
`,Np=`id: malay
name: "Malay (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, malay, earth]
category: knowledge
types: [language]
language: malay
effect: "This character is conversational in the Malay language and can speak it."
`,Pp=`id: malayalam-written
name: "Malayalam (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, malayalam, earth, writing]
category: knowledge
types: [language]
language: malayalam
effect: "This character can read and write the Malayalam language."
`,Fp=`id: malayalam
name: "Malayalam (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, malayalam, earth]
category: knowledge
types: [language]
language: malayalam
effect: "This character is conversational in the Malayalam language and can speak it."
`,Ip=`id: mandarin-written
name: "Mandarin (Written)"
status: placeholder
plane: earth
summary: "The language of the Empire of China."
tags: [language, mandarin, earth, writing]
category: knowledge
types: [language]
language: mandarin
effect: This character can read and write the Mandarin language.
`,Lp=`id: mandarin
name: "Mandarin (Spoken)"
status: placeholder
plane: earth
summary: "The language of the Empire of China."
tags: [language, mandarin, earth]
category: knowledge
types: [language]
language: mandarin
effect: This character is conversational in the Mandarin language and can speak it.
`,Rp=`id: marathi-written
name: "Marathi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, marathi, earth, writing]
category: knowledge
types: [language]
language: marathi
effect: "This character can read and write the Marathi language."
`,zp=`id: marathi
name: "Marathi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, marathi, earth]
category: knowledge
types: [language]
language: marathi
effect: "This character is conversational in the Marathi language and can speak it."
`,Bp=`id: mathematics
name: "Mathematics"
status: placeholder
plane: any
summary: "Mathematics and its fields of study."
tags: [mathematics, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of mathematics and can be assumed to be familiar with mathematical fields of study."
`,Vp=`id: medicine
name: "Medicine"
status: draft
plane: any
summary: "How bodies work, how they fail, and how to treat them."
tags: [medicine, healing, science]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3 }
effect: "This character has knowledge of medicine and can be assumed to be familiar with anatomy, common illnesses and injuries, and how they are treated."
`,Hp=`id: metallurgy
name: "Metallurgy"
status: draft
plane: any
summary: "Metals and alloys: how they are smelted, worked and tempered."
tags: [metal, smithing, craft]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of metallurgy and can be assumed to be familiar with common metals and alloys and how they are smelted, worked and tempered."
`,Up=`id: military-tactics
name: "Military Tactics"
status: draft
plane: any
summary: "How battles are fought: formations, maneuvers and command."
tags: [military, tactics, combat]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of military tactics and can be assumed to be familiar with formations, maneuvers, chains of command and how battles are fought."
`,Wp=`id: mongolian-written
name: "Mongolian (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, mongolian, earth, writing]
category: knowledge
types: [language]
language: mongolian
effect: "This character can read and write the Mongolian language."
`,Gp=`id: mongolian
name: "Mongolian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, mongolian, earth]
category: knowledge
types: [language]
language: mongolian
effect: "This character is conversational in the Mongolian language and can speak it."
`,Kp=`id: monsters-of-isekai
name: Monsters of Isekai
status: placeholder
plane: isekai
summary: The monsters of Isekai and how to deal with them.
tags: [monsters, hunting]
lore: isekai-monsters
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the monsters of Isekai and can be assumed to be familiar with their names, territories, the goods that they can provide, and their strengths and weaknesses."
`,qp=`id: mountaineering
name: Mountaineering
status: placeholder
plane: any
summary: "Climbing, and surviving, in high mountains."
tags: [mountains, climbing, survival]
category: knowledge
ranked: true
minStats: { memory: 3, endurance: 2 }
effect: "This character has knowledge of mountaineering and can be assumed to be familiar with the preparation, dangers, and survival craft involved in trekking mountains."
`,Jp=`id: music
name: "Music"
status: draft
plane: any
summary: "Musical theory, history and repertoire."
tags: [music, culture, performance]
category: knowledge
ranked: true
minStats: { memory: 2, intuition: 2 }
effect: "This character has knowledge of music and can be assumed to be familiar with musical theory, well-known pieces and the traditions they come from."
`,Yp=`id: nepali-written
name: "Nepali (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, nepali, earth, writing]
category: knowledge
types: [language]
language: nepali
effect: "This character can read and write the Nepali language."
`,Xp=`id: nepali
name: "Nepali (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, nepali, earth]
category: knowledge
types: [language]
language: nepali
effect: "This character is conversational in the Nepali language and can speak it."
`,Zp=`id: new-columbia
name: "New Columbia"
status: placeholder
plane: earth
region: american-empire
summary: "The Empire’s colony on Luna."
tags: [luna, colony, american-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of New Columbia and can be assumed to be familiar with the peoples, places, and customs of the American Empire’s colony on Luna."
`,Qp=`id: new-persia
name: "New Persia"
status: placeholder
plane: earth
region: sdu
summary: "The SDU’s planar territory on Pairidaeza."
tags: [planes, colony, sdu]
lore: pairidaeza
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of New Persia and can be assumed to be familiar with the peoples, places, and customs of the SDU’s planar territory on Pairidaeza."
`,$p=`id: noble-houses-of-dreft
name: Noble Houses of Dreft
status: placeholder
plane: isekai
region: dreft
summary: "Dreft’s noble houses, their histories and their feuds."
tags: [nobility, politics, houses]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the noble houses of Dreft and can be assumed to be familiar with their histories and feuds."
`,em=`id: odia-written
name: "Odia (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, odia, earth, writing]
category: knowledge
types: [language]
language: odia
effect: "This character can read and write the Odia language."
`,tm=`id: odia
name: "Odia (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, odia, earth]
category: knowledge
types: [language]
language: odia
effect: "This character is conversational in the Odia language and can speak it."
`,nm=`id: orc-society
name: "Orc Society"
status: draft
plane: isekai
summary: "The customs, institutions and traditions of Orc societies."
tags: [orcs, culture, site-example]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of orc customs and can be assumed to be familiar with the institutions and traditions of Orc societies."
`,rm=`id: oromo-written
name: "Oromo (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, oromo, earth, writing]
category: knowledge
types: [language]
language: oromo
effect: "This character can read and write the Oromo language."
`,im=`id: oromo
name: "Oromo (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, oromo, earth]
category: knowledge
types: [language]
language: oromo
effect: "This character is conversational in the Oromo language and can speak it."
`,am=`id: paraarcheology
name: "Paraarcheology"
status: placeholder
plane: earth
summary: "The ruins and remains that parasapient civilizations have left behind on other planes."
tags: [parabiology, archeology, history, ruins]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of paraarcheology and can be assumed to be familiar with the skills, places, histories, and planar details associated with the study of archeology on other planes."
`,om=`id: parabiology
name: "Parabiology"
status: placeholder
plane: earth
summary: "The study of extraplanar life in all its forms, and why so many planes hold any at all."
tags: [parabiology, science, life]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, empathy: 2 }
effect: "This character has knowledge of parabiology and can be assumed to be familiar with the living organisms of other planes, and their vital processes, structures, functions, and growth."
`,sm=`id: paraflora
name: "Paraflora"
status: placeholder
plane: earth
summary: "Extraplanar plants and the stranger things that fill a plant’s role, from flora floating in a sea of light on down."
tags: [parabiology, plants, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, empathy: 2 }
effect: "This character has knowledge of paraflora and can be assumed to be familiar with extraplanar plants, including their ecologies, growth patterns, and the rough paraphysical concepts by which they may operate."
`,cm=`id: paraphysics
name: "Paraphysics"
status: placeholder
plane: earth
summary: "The science The Gift opened up: the theories that skirt the old limits of nature."
tags: [paraphysics, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, intuition: 2 }
effect: "This character has knowledge of paraphysics and can be assumed to be familiar with paraphysical concepts, paraphysical effects, and axiomatic sciences."
`,lm=`id: parasapient-medicine
name: "Parasapient Medicine"
status: draft
plane: earth
summary: "Treating parasapient patients, whose bodies rarely work the way Earth Baseline medicine expects."
tags: [medicine, parasapients, parabiology]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, empathy: 2 }
effect: "This character has knowledge of parasapient medicine and can be assumed to be familiar with the anatomy and common ailments of the parasapient peoples known to the systems, and how to treat them."
`,um=`id: parasapients
name: "Parasapients"
status: placeholder
plane: earth
summary: "The sapient peoples of other planes: their bodies, their cultures, and how they live alongside humanity."
tags: [parabiology, parasapients, cultures, people]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 3 }
effect: "This character has knowledge of parasapients and can be assumed to be familiar with extraplanar sapients, including their cultures, diplomatic relations, and the rough paraphysical concepts by which they may operate."
`,dm=`id: parazoology
name: "Parazoology"
status: placeholder
plane: earth
summary: "Extraplanar animals: how they live, what they eat, and which ones eat people."
tags: [parabiology, animals, creatures, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, intuition: 2 }
effect: "This character has knowledge of parazoology and can be assumed to be familiar with extraplanar creatures, including their habitats, needs, and the rough paraphysical concepts by which they may operate."
`,fm=`id: pathology
name: "Pathology"
status: draft
plane: any
summary: "Disease: how it spreads, how it shows itself, and how it is stopped."
tags: [medicine, disease, contagion]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, intuition: 2 }
effect: "This character has knowledge of pathology and can be assumed to be familiar with common diseases, how they spread and present, and how outbreaks are contained."
`,pm=`id: persian-written
name: "Persian (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, persian, earth, writing]
category: knowledge
types: [language]
language: persian
effect: "This character can read and write the Persian language."
`,mm=`id: persian
name: "Persian (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, persian, earth]
category: knowledge
types: [language]
language: persian
effect: "This character is conversational in the Persian language and can speak it."
`,hm=`id: pharmacology
name: "Pharmacology"
status: draft
plane: any
summary: "Drugs and remedies: what they do, how much is safe, and what they do together."
tags: [medicine, drugs, pharmacology]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3 }
effect: "This character has knowledge of pharmacology and can be assumed to be familiar with common drugs and remedies, their doses, side effects and interactions."
`,gm=`id: planar-exploration
name: "Planar Exploration"
status: placeholder
plane: earth
region: tetra
summary: "How new planes are found, locked and opened, and who does the work."
tags: [planes, exploration, tetra]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, intuition: 2 }
effect: "This character has knowledge of planar exploration and can be assumed to be familiar with the regulations, laws, dangers, and methods involved."
`,_m=`id: polish-written
name: "Polish (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, polish, earth, writing]
category: knowledge
types: [language]
language: polish
effect: "This character can read and write the Polish language."
`,vm=`id: polish
name: "Polish (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, polish, earth]
category: knowledge
types: [language]
language: polish
effect: "This character is conversational in the Polish language and can speak it."
`,ym=`id: port-herminst
name: Port Herminst
status: placeholder
plane: isekai
region: dreft
summary: Knowing your way around Dreft’s capital and biggest port.
tags: [city, port, capital]
lore: herminst
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Port Herminst and can be assumed to be familiar with the peoples, places, and customs of Dreft’s capital."
`,bm=`id: ports-and-stations
name: "Ports and Stations"
status: placeholder
plane: earth
summary: "How docks, customs and station traffic control work, and how to get through them."
tags: [ports, stations, space]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the ports and stations of the systems and can be assumed to be familiar with the customs, regulations, industries, ships, and docks involved in trade."
`,xm=`id: portuguese-written
name: "Portuguese (Written)"
status: draft
plane: earth
summary: "One of the languages of the Lunar Industrial Syndicate and its former South American nations."
tags: [language, portuguese, earth, writing]
category: knowledge
types: [language]
language: portuguese
effect: "This character can read and write the Portuguese language."
`,Sm=`id: portuguese
name: "Portuguese (Spoken)"
status: draft
plane: earth
summary: "One of the languages of the Lunar Industrial Syndicate and its former South American nations."
tags: [language, portuguese, earth]
category: knowledge
types: [language]
language: portuguese
effect: "This character is conversational in the Portuguese language and can speak it."
`,Cm=`id: psychology
name: "Psychology"
status: draft
plane: any
summary: "The mind: how it works, how it breaks, and how it heals."
tags: [medicine, mind, psychology]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 4 }
effect: "This character has knowledge of psychology and can be assumed to be familiar with how minds work, common mental illnesses, and the treatment of trauma and stress."
`,wm=`id: punjabi-written
name: "Punjabi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, punjabi, earth, writing]
category: knowledge
types: [language]
language: punjabi
effect: "This character can read and write the Punjabi language."
`,Tm=`id: punjabi
name: "Punjabi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, punjabi, earth]
category: knowledge
types: [language]
language: punjabi
effect: "This character is conversational in the Punjabi language and can speak it."
`,Em=`id: robotics
name: "Robotics"
status: placeholder
plane: earth
summary: "Drones, chassis and the machines that do the systems’ work."
tags: [robotics, technology, machines]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of robotics and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,Dm=`id: romanian-written
name: "Romanian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, romanian, earth, writing]
category: knowledge
types: [language]
language: romanian
effect: "This character can read and write the Romanian language."
`,Om=`id: romanian
name: "Romanian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, romanian, earth]
category: knowledge
types: [language]
language: romanian
effect: "This character is conversational in the Romanian language and can speak it."
`,km=`id: russian-written
name: "Russian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and the Ural Federation."
tags: [language, russian, earth, writing]
category: knowledge
types: [language]
language: russian
effect: "This character can read and write the Russian language."
`,Am=`id: russian
name: "Russian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and the Ural Federation."
tags: [language, russian, earth]
category: knowledge
types: [language]
language: russian
effect: "This character is conversational in the Russian language and can speak it."
`,jm=`id: sdu-law
name: "Stellar Democratic Union Law"
status: placeholder
plane: earth
region: tetra
summary: "The laws of the Stellar Democratic Union and how they’re enforced."
tags: [law, sdu, tetra]
lore: stellar-democratic-union
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Stellar Democratic Union law and can be assumed to be familiar with the laws and courts of the Stellar Democratic Union."
`,Mm=`id: seafaring
name: Seafaring
status: placeholder
plane: any
summary: "Ships, sailing and life at sea."
tags: [seafaring, sea]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 3 }
effect: "This character has knowledge of seafaring and can be assumed to be familiar with the crew and operations of ships on the sea as well as the winds, currents, and seas of a given world."
choices:
  - choose: 1
    from: place
    note: "Which seas"
    perRank: false
`,Nm=`id: shipping-lanes
name: "Shipping Lanes"
status: placeholder
plane: earth
summary: "The routes, schedules and checkpoints of cargo traffic between stations, ships and surfaces."
tags: [shipping, trade, space]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the shipping lanes between stations, ships, and surfaces and can be assumed to be familiar with their routes, schedules, and checkpoints."
`,Pm=`id: sinhala-written
name: "Sinhala (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, sinhala, earth, writing]
category: knowledge
types: [language]
language: sinhala
effect: "This character can read and write the Sinhala language."
`,Fm=`id: sinhala
name: "Sinhala (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, sinhala, earth]
category: knowledge
types: [language]
language: sinhala
effect: "This character is conversational in the Sinhala language and can speak it."
`,Im=`id: somali-written
name: "Somali (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, somali, earth, writing]
category: knowledge
types: [language]
language: somali
effect: "This character can read and write the Somali language."
`,Lm=`id: somali
name: "Somali (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, somali, earth]
category: knowledge
types: [language]
language: somali
effect: "This character is conversational in the Somali language and can speak it."
`,Rm=`# Lore for Sorellion is still coming soon on the site.
id: sorellion
name: "Sorellion"
status: draft
plane: isekai
summary: "The Kingdom of Sorellion, one of Dreft’s neighbors on Isekai."
tags: [sorellion, kingdom, isekai]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Kingdom of Sorellion and can be assumed to be familiar with its people, places and customs."
`,zm=`id: southeast-asia
name: "Southeast Asia"
status: placeholder
plane: earth
region: chinese-empire
summary: "The Empire’s Southeast Asian territories, their peoples and their old borders."
tags: [geography, chinese-empire, earth]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Southeast Asian geography and can be assumed to be familiar with the Empire of China’s Southeast Asian territories, their peoples, and their old borders."
`,Bm=`id: spanish-written
name: "Spanish (Written)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, spanish, earth, writing]
category: knowledge
types: [language]
language: spanish
effect: This character can read and write the Spanish language.
`,Vm=`id: spanish
name: "Spanish (Spoken)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, spanish, earth]
category: knowledge
types: [language]
language: spanish
effect: This character is conversational in the Spanish language and can speak it.
`,Hm=`id: succession-law
name: Succession Law
status: placeholder
plane: isekai
region: dreft
summary: "Who inherits what, and who has a claim to the crown."
tags: [law, succession, nobility]
category: knowledge
minStats: { memory: 6, persuasion: 2 }
effect: "This character has knowledge of succession law and can be assumed to be familiar with who inherits what in Dreft and who has a claim to the crown."
`,Um=`id: swahili-written
name: "Swahili (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, swahili, earth, writing]
category: knowledge
types: [language]
language: swahili
effect: "This character can read and write the Swahili language."
`,Wm=`id: swahili
name: "Swahili (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, swahili, earth]
category: knowledge
types: [language]
language: swahili
effect: "This character is conversational in the Swahili language and can speak it."
`,Gm=`id: tamil-written
name: "Tamil (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, tamil, earth, writing]
category: knowledge
types: [language]
language: tamil
effect: "This character can read and write the Tamil language."
`,Km=`id: tamil
name: "Tamil (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, tamil, earth]
category: knowledge
types: [language]
language: tamil
effect: "This character is conversational in the Tamil language and can speak it."
`,qm=`id: telugu-written
name: "Telugu (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, telugu, earth, writing]
category: knowledge
types: [language]
language: telugu
effect: "This character can read and write the Telugu language."
`,Jm=`id: telugu
name: "Telugu (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, telugu, earth]
category: knowledge
types: [language]
language: telugu
effect: "This character is conversational in the Telugu language and can speak it."
`,Ym=`id: tetra-frontiers-co
name: Tetra Frontiers Co.
status: placeholder
plane: isekai
region: dreft
summary: "The company that runs the switch port, and how it works."
tags: [company, switch-port, tetra]
lore: tetra-frontiers-co
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of Tetra Frontiers Co. and can be assumed to be familiar with its holdings, locations, employees, culture, and leadership."
`,Xm=`id: tetra
name: "Tetra"
status: placeholder
plane: earth
region: tetra
summary: "Ark Tetra: its wings, its people and how the station runs."
tags: [tetra, ark, sdu]
lore: tetra
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Tetra and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,Zm=`id: thai-written
name: "Thai (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, thai, earth, writing]
category: knowledge
types: [language]
language: thai
effect: "This character can read and write the Thai language."
`,Qm=`id: thai
name: "Thai (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, thai, earth]
category: knowledge
types: [language]
language: thai
effect: "This character is conversational in the Thai language and can speak it."
`,$m=`id: the-bureau-of-planar-management
name: "The Bureau of Planar Management"
status: draft
plane: earth
summary: "The Bureau that licenses, inspects and polices planar exploration across the systems."
tags: [bureau, planes, law, tetra]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Bureau of Planar Management and can be assumed to be familiar with its regulations, inspections, offices and officers."
`,eh=`id: the-chinese-empire
name: "The Empire of China"
status: placeholder
plane: earth
region: chinese-empire
summary: "The Empire of China: the Wuhan Dynasty, its territories and its corporate syndicates."
tags: [chinese-empire, politics]
lore: chinese-empire
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Empire of China and can be assumed to be familiar with its customs, politics, and territories."
`,th=`id: the-corporate-syndicates
name: "The Corporate Syndicates"
status: placeholder
plane: earth
region: chinese-empire
summary: "The corporate syndicates that make up the Empire of China’s government, and their rivalries."
tags: [corporate, politics, chinese-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Chinese corporate syndicates and can be assumed to be familiar with their people, ties, and industries."
`,nh=`id: the-corsine-pass
name: The Corsine Pass
status: placeholder
plane: isekai
region: dreft
summary: The pass through the Corsine Mountains to Karsef.
tags: [mountains, border, travel]
category: knowledge
ranked: true
minStats: { memory: 2, endurance: 2 }
effect: "This character has knowledge of the Corsine Pass on Isekai and can be assumed to be familiar with its passes, peoples, and dangers."
`,rh=`id: the-diplomatic-wing
name: "The Diplomatic Wing"
status: placeholder
plane: earth
region: tetra
summary: "Ark Tetra’s Diplomatic Wing, its embassies and its envoys."
tags: [tetra, diplomacy, politics]
lore: diplomatic-wing
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Tetra’s Diplomatic Wing and can be assumed to be familiar with its diplomats, embassies, businesses, and security."
`,ih=`id: the-drovus-empire
name: The Drovus Empire
status: placeholder
plane: isekai
summary: The empire that absorbed the Sunrise Princedoms.
tags: [drovus, empire, foreign]
lore: drovus-empire
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Drovus Empire and can be assumed to be familiar with its politics, regions, wildlife, and cultures."
`,ah=`id: the-explorers-lodge
name: "The Explorers’ Lodge"
status: placeholder
plane: earth
region: tetra
summary: "The Explorers’ Lodge: its members, its rules and how expeditions get handed out."
tags: [lodge, exploration, tetra]
lore: explorers-lodge
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Explorers’ Lodge and can be assumed to be familiar with its members, its rules, and how expeditions are handed out."
`,oh=`id: the-free-american-states
name: "The Free American States"
status: draft
plane: earth
summary: "The fractious free-trade zone of independent states between the American Empire and the Union of Texas."
tags: [free-american-states, earth, trade]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Free American States and can be assumed to be familiar with its member states, its trade and its border disputes."
`,sh=`id: the-imperial-military
name: "The Imperial Military"
status: placeholder
plane: earth
region: american-empire
summary: "The Empire’s armed forces: their branches, ranks, bases and habits."
tags: [military, american-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Imperial Military and can be assumed to be familiar with its branches, ranks, bases, and habits."
`,ch=`id: the-kings-woods
name: The King’s Woods
status: placeholder
plane: isekai
region: dreft
summary: "The forest east of the switch port, and what lives in it."
tags: [forest, wilderness, monsters]
lore: kings-woods
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the King’s Woods and can be assumed to be familiar with its geography, ecology, and locations."
`,lh=`id: the-lunar-industrial-syndicate
name: "The Lunar Industrial Syndicate"
status: draft
plane: earth
summary: "The Eighth Lunar Industrial Syndicate: a business cartel grown into a nation, with investors and citizen shareholders."
tags: [lunar-industrial-syndicate, luna, corporate]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Lunar Industrial Syndicate and can be assumed to be familiar with its board, holdings, territories and corporate politics."
`,uh=`id: the-martian-association
name: "The Martian Association"
status: placeholder
plane: earth
region: sdu
summary: "The SDU’s territory on Mars and the people who run it."
tags: [mars, colony, sdu]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Martian Association and can be assumed to be familiar with the peoples, places, and customs of the SDU’s territory on Mars."
`,dh=`id: the-stellar-democratic-union
name: "The Stellar Democratic Union"
status: placeholder
plane: earth
region: sdu
summary: "The SDU: its member states, its tiers of membership and how the Union holds together."
tags: [sdu, politics]
lore: stellar-democratic-union
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Stellar Democratic Union and can be assumed to be familiar with its customs, politics, and territories."
`,fh=`id: the-sunrise-princedoms
name: The Sunrise Princedoms
status: placeholder
plane: isekai
summary: "The princedoms Drovus absorbed, as they were."
tags: [sunrise, princedoms, refugee]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Sunrise Princedoms and can be assumed to be familiar with their politics, regions, wildlife, and cultures as they were before Drovus absorbed them."
`,ph=`id: the-switch-port
name: The Switch Port
status: placeholder
plane: isekai
region: dreft
summary: "The switch port at Castle Tetra, where Dreft meets the systems."
tags: [switch-port, tetra, caravan]
lore: tetra-switch-port
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the switch port at Castle Tetra and can be assumed to be familiar with its peoples, places, and customs."
`,mh=`id: the-union-of-texas
name: "The Union of Texas"
status: placeholder
plane: earth
summary: "The breakaway states the Empire still faces across a tense border."
tags: [texas, foreign, politics]
lore: union-of-texas
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Union of Texas and can be assumed to be familiar with its customs, politics, and territories."
`,hh=`id: the-united-nations
name: "The United Nations"
status: placeholder
plane: earth
region: tetra
summary: "The UN and its institutions aboard Tetra."
tags: [un, politics, tetra]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the United Nations and can be assumed to be familiar with its institutions aboard Tetra."
`,gh=`id: thieves-cant
name: "Thieves' Cant (Spoken)"
status: draft
plane: any
summary: "The coded slang criminals use to talk business in plain hearing."
tags: [language, crime, underworld]
category: knowledge
types: [language]
language: thieves-cant
effect: "This character can speak and understand Thieves' Cant, passing hidden messages in ordinary conversation."
`,_h=`id: toxicology
name: "Toxicology"
status: draft
plane: any
summary: "Poisons, venoms and their antidotes."
tags: [medicine, poison, antidotes]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of toxicology and can be assumed to be familiar with common poisons and venoms, their symptoms and their antidotes."
`,vh=`id: trade-law
name: Trade Law
status: placeholder
plane: isekai
region: dreft
summary: "The rules of trade in Dreft, and their loopholes."
tags: [law, trade, merchant]
category: knowledge
minStats: { memory: 3, persuasion: 2 }
effect: "This character has knowledge of Dreftian trade law and can be assumed to be familiar with the rules of trade in Dreft and their loopholes."
`,yh=`id: trade-roads
name: Trade Roads
status: placeholder
plane: isekai
region: dreft
summary: The roads trade travels across Dreft.
tags: [trade, roads, caravan]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the trade roads of Dreft and can be assumed to be familiar with their routes, products, and dangers."
`,bh=`id: turkish-written
name: "Turkish (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, turkish, earth, writing]
category: knowledge
types: [language]
language: turkish
effect: "This character can read and write the Turkish language."
`,xh=`id: turkish
name: "Turkish (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, turkish, earth]
category: knowledge
types: [language]
language: turkish
effect: "This character is conversational in the Turkish language and can speak it."
`,Sh=`id: ukrainian-written
name: "Ukrainian (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, ukrainian, earth, writing]
category: knowledge
types: [language]
language: ukrainian
effect: "This character can read and write the Ukrainian language."
`,Ch=`id: ukrainian
name: "Ukrainian (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, ukrainian, earth]
category: knowledge
types: [language]
language: ukrainian
effect: "This character is conversational in the Ukrainian language and can speak it."
`,wh=`id: union-politics
name: "Union Politics"
status: placeholder
plane: earth
region: sdu
summary: "The parties, presidents and member-state rivalries of the SDU."
tags: [sdu, politics]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Union politics and can be assumed to be familiar with the parties, presidents, and member-state rivalries of the SDU."
`,Th=`id: urdu-written
name: "Urdu (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, urdu, earth, writing]
category: knowledge
types: [language]
language: urdu
effect: "This character can read and write the Urdu language."
`,Eh=`id: urdu
name: "Urdu (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, urdu, earth]
category: knowledge
types: [language]
language: urdu
effect: "This character is conversational in the Urdu language and can speak it."
`,Dh=`id: uyghur-written
name: "Uyghur (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, uyghur, earth, writing]
category: knowledge
types: [language]
language: uyghur
effect: "This character can read and write the Uyghur language."
`,Oh=`id: uyghur
name: "Uyghur (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, uyghur, earth]
category: knowledge
types: [language]
language: uyghur
effect: "This character is conversational in the Uyghur language and can speak it."
`,kh=`id: vietnamese-written
name: "Vietnamese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, vietnamese, earth, writing]
category: knowledge
types: [language]
language: vietnamese
effect: "This character can read and write the Vietnamese language."
`,Ah=`id: vietnamese
name: "Vietnamese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, vietnamese, earth]
category: knowledge
types: [language]
language: vietnamese
effect: "This character is conversational in the Vietnamese language and can speak it."
`,jh=`id: yoruba-written
name: "Yoruba (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, yoruba, earth, writing]
category: knowledge
types: [language]
language: yoruba
effect: "This character can read and write the Yoruba language."
`,Mh=`id: yoruba
name: "Yoruba (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, yoruba, earth]
category: knowledge
types: [language]
language: yoruba
effect: "This character is conversational in the Yoruba language and can speak it."
`,Nh=`id: yutu
name: "Yùtù"
status: placeholder
plane: earth
region: chinese-empire
summary: "The Jade Rabbit, the Empire of China’s colony on Luna."
tags: [luna, colony, chinese-empire]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Yùtù and can be assumed to be familiar with the peoples, places, and customs of the Empire of China’s colony on Luna."
`,Ph=`id: zhulong
name: "Zhulong"
status: placeholder
plane: earth
region: chinese-empire
summary: "The Empire of China’s Ark."
tags: [ark, chinese-empire]
lore: zhulong
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Zhulong and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,Fh=`id: possessed-by-a-spirit
name: "Possessed By A Spirit"
status: draft
plane: any
summary: "Lost control of their body to a supernatural entity."
tags: [supernatural, spirit, possession, site-example]
category: other
conveyed: true
temporary: "lost when the character is no longer possessed"
effect: "This character has lost control over their body to a supernatural entity. If this is a player character then how that player or the GM continue to operate the character is at the GM's discretion, as is the nature of the entity that has possessed them. This character no longer accrues experience. While under the control of this entity the character's Mental and Social stats are considered (Mental 8) (Logic 8) (Intuition 10) (Memory 9) (Social 7) (Empathy 3) (Persuasion 9) (Demeanor 12) for most purposes. Condition Traits that modify these stats are still in effect unless otherwise stated. If the character had Traits with minimum stat values or had Ranks in Traits they no longer qualify for, then those Traits are to be ignored. The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum stats required for them. While possessed, this character gains Supernatural, Spirit Touched, Telekinesis(1), Inured to pain, Fearless, Ghost Sight, Knowledge: The Supernatural (1)."
`,Ih=`id: advanced-cooking
name: "Advanced Cooking"
status: draft
plane: any
summary: "Cooking at a professional level, for a crowd or a court."
tags: [cooking, food, expert]
category: skill
mastery: true
minStats: { intuition: 5, memory: 4, empathy: 3 }
prerequisites: [simple-cooking]
effect: "This character cooks at a professional level and can feed a large group. This character can request advantage on skill checks involving cooking, and a fine meal can earn them favor in social situations at the GM’s discretion."
`,Lh=`id: advanced-potion-mixing
name: "Advanced Potion Mixing"
status: draft
plane: isekai
summary: "Brewing complex, potent potions, and working out new ones."
tags: [potions, alchemy, expert]
category: skill
mastery: true
minStats: { memory: 6, intuition: 6, logic: 4 }
prerequisites: [simple-potion-mixing]
effect: "This character can brew complex and potent potions, and can work out a new recipe from its ingredients’ properties. This character can request advantage on skill checks involving brewing potions."
`,Rh=`id: ambusher
name: Ambusher
status: placeholder
plane: any
summary: Setting and springing ambushes.
tags: [ambush, hunting, combat]
category: skill
effect: Placeholder. Effect not yet written.
`,zh=`id: animal-husbandry
name: "Animal Husbandry"
status: draft
plane: any
summary: "Raising, feeding and caring for livestock and working animals."
tags: [animals, farming, care]
category: skill
ranked: true
minStats: { empathy: 3, endurance: 2, intuition: 2 }
effect: "This character is capable of raising, feeding and caring for livestock and working animals without a skill check. Rank *10 added to skill check rolls involving handling and caring for animals."
`,Bh=`id: appraisal
name: Appraisal
status: placeholder
plane: any
summary: Judging what something is worth.
tags: [trade, valuation, merchant]
category: skill
effect: Placeholder. Effect not yet written.
`,Vh=`id: artist-painting
name: "Artist: Painting"
status: draft
plane: any
summary: "Painting, from portraits to murals."
tags: [art, painting, craft]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, memory: 2 }
effect: "This character is capable of painting a competent likeness or scene without a skill check. Rank *10 added to skill check rolls involving painting."
`,Hh=`id: artist-sculpture
name: "Artist: Sculpture"
status: draft
plane: any
summary: "Shaping stone, clay, wood or metal into art."
tags: [art, sculpture, craft]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, power: 2 }
effect: "This character is capable of sculpting a competent figure in stone, clay or wood without a skill check. Rank *10 added to skill check rolls involving sculpture."
`,Uh=`id: cargo-handling
name: "Cargo Handling"
status: placeholder
plane: any
summary: "Loading, securing and moving freight, in gravity or out of it."
tags: [cargo, shipping, labor]
category: skill
effect: Placeholder. Effect not yet written.
`,Wh=`id: concealment
name: Concealment
status: placeholder
plane: any
summary: "Hiding things, and yourself."
tags: [stealth, hiding]
category: skill
effect: Placeholder. Effect not yet written.
`,Gh=`id: courtly-manners
name: Courtly Manners
status: placeholder
plane: any
summary: Moving gracefully through noble society.
tags: [court, nobility, social]
category: skill
effect: Placeholder. Effect not yet written.
`,Kh=`id: craft-leatherworking
name: "Craft: Leatherworking"
status: draft
plane: any
summary: "Tanning hides and making leather goods and armor."
tags: [craft, leather, armor]
category: skill
ranked: true
minStats: { grace: 3, endurance: 2, intuition: 2 }
effect: "This character is capable of tanning hides and making leather goods and simple leather armor without a skill check. Rank *10 added to skill check rolls involving leatherworking."
`,qh=`id: craft-masonry
name: "Craft: Masonry"
status: draft
plane: any
summary: "Cutting, dressing and laying stone."
tags: [craft, masonry, building]
category: skill
ranked: true
minStats: { power: 4, endurance: 3, logic: 2 }
effect: "This character is capable of cutting and laying stone for walls, foundations and simple structures without a skill check. Rank *10 added to skill check rolls involving masonry."
`,Jh=`id: craft-smithing
name: "Craft: Smithing"
status: draft
plane: any
summary: "Forging and repairing metal tools, fittings and weapons."
tags: [craft, smithing, metal]
category: skill
ranked: true
minStats: { power: 4, endurance: 3, grace: 2 }
effect: "This character is capable of forging and repairing simple metal tools, fittings and weapons without a skill check. Rank *10 added to skill check rolls involving smithing."
`,Yh=`id: disguise
name: "Disguise"
status: draft
plane: any
summary: "Passing as someone else, through costume, makeup and manner."
tags: [disguise, deception, spy]
category: skill
ranked: true
minStats: { demeanor: 4, grace: 2, intuition: 2 }
effect: "This character is capable of putting together a convincing simple disguise without a skill check. Rank *10 added to skill check rolls involving disguise and impersonation."
`,Xh=`id: excavation
name: "Excavation"
status: placeholder
plane: any
summary: "Digging up the past carefully enough that there’s something left to study."
tags: [archeology, fieldwork, ruins]
category: skill
effect: Placeholder. Effect not yet written.
`,Zh=`id: expert-pilot
name: "Expert Pilot"
status: draft
plane: any
summary: "A pilot good enough to fly almost anything they have training in, and most things like it."
tags: [pilot, expert, site-example]
category: skill
mastery: true
minStats: { memory: 5, intuition: 10, grace: 5 }
prerequisiteTags: [pilot]
effect: "This character can request advantage on piloting any craft they have training in and may request competence in piloting any craft similar to one they have training in."
`,Qh=`id: field-sampling
name: "Field Sampling"
status: placeholder
plane: any
summary: "Collecting, labelling and preserving samples in the field, wherever the field happens to be."
tags: [parabiology, science, fieldwork, survey]
category: skill
effect: Placeholder. Effect not yet written.
`,$h=`id: folk-remedies
name: Folk Remedies
status: placeholder
plane: any
summary: Treating ailments with folk cures.
tags: [healing, folk, herbs]
category: skill
effect: Placeholder. Effect not yet written.
`,eg=`id: haggler
name: Haggler
status: placeholder
plane: any
summary: Getting a better price.
tags: [trade, bargaining, merchant]
category: skill
effect: Placeholder. Effect not yet written.
`,tg=`id: incantation
name: Incantation
status: placeholder
plane: isekai
summary: Casting spells by incantation.
tags: [magic, spellcasting]
category: skill
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
effect: Placeholder. Effect not yet written.
`,ng=`id: intimidation
name: "Intimidation"
status: draft
plane: any
summary: "Getting what you want through threats and presence."
tags: [intimidation, social, threat]
category: skill
ranked: true
minStats: { demeanor: 3, power: 3 }
effect: "This character is capable of making a credible threat without a skill check. Rank *10 added to skill check rolls involving intimidation."
`,rg=`id: investigation
name: "Investigation"
status: draft
plane: any
summary: "Gathering evidence, reading a scene and following leads."
tags: [investigation, law, detective]
category: skill
ranked: true
minStats: { intuition: 4, logic: 3, memory: 2 }
effect: "This character is capable of searching a scene and following obvious leads without a skill check. Rank *10 added to skill check rolls involving investigating crimes and mysteries."
`,ig=`id: legal-advocacy
name: "Legal Advocacy"
status: placeholder
plane: any
summary: "Arguing a case in court, at a hearing or across a desk, and knowing which forms to file first."
tags: [law, persuasion, courts]
category: skill
effect: Placeholder. Effect not yet written.
`,ag=`id: lockpicking
name: "Lockpicking"
status: draft
plane: any
summary: "Opening locks without the key."
tags: [locks, theft, security]
category: skill
ranked: true
minStats: { grace: 4, intuition: 2 }
effect: "This character is capable of opening simple mechanical locks with the right tools without a skill check. Rank *10 added to skill check rolls involving picking locks and bypassing security."
`,og=`id: medical-aid
name: "Medical Aid"
status: draft
plane: any
summary: "First aid: stopping bleeding, dressing wounds and setting bones."
tags: [medicine, first-aid, healing]
category: skill
ranked: true
minStats: { empathy: 3, memory: 3, grace: 2 }
effect: "This character is capable of performing basic first aid, such as stopping bleeding, dressing wounds and setting bones, without a skill check. Rank *10 added to skill check rolls involving treating injuries."
`,sg=`id: military-drill
name: "Military Drill"
status: placeholder
plane: any
summary: "Moving, fighting and following orders as part of a unit."
tags: [military, discipline]
category: skill
effect: Placeholder. Effect not yet written.
`,cg=`id: performer-acrobatics
name: "Performer: Acrobatics"
status: draft
plane: any
summary: "Tumbling, juggling and feats of balance for a crowd."
tags: [acrobatics, performance, agility]
category: skill
ranked: true
minStats: { grace: 4, endurance: 3, persuasion: 2 }
effect: "This character is capable of tumbling, juggling and keeping their balance in a performance without a skill check. Rank *10 added to skill check rolls involving acrobatics and balance."
`,lg=`id: performer-music
name: "Performer: Music"
status: draft
plane: any
summary: "Playing an instrument or singing for an audience."
tags: [music, performance, art]
category: skill
ranked: true
minStats: { grace: 3, persuasion: 3, intuition: 2 }
effect: "This character is capable of playing an instrument or singing well enough to hold an audience without a skill check. Rank *10 added to skill check rolls involving musical performance."
`,ug=`id: pilot-fighter
name: "Pilot: Fighter"
status: draft
plane: earth
summary: "Flying fighters in and out of combat."
tags: [pilot, fighter, military, space]
category: skill
ranked: true
minStats: { grace: 5, intuition: 4, memory: 4 }
effect: "This character is capable of piloting a fighter in simple scenarios and describing its basic functions and controls without a skill check. Rank *10 added to skill check rolls involving fighter piloting."
`,dg=`id: pilot-helicopter
name: "Pilot: Helicopter"
status: draft
plane: earth
summary: "Flying helicopters."
tags: [pilot, helicopters, site-example]
category: skill
ranked: true
minStats: { memory: 5, intuition: 3, grace: 3 }
effect: "This character is capable of piloting helicopters in simple scenarios without a skill check and is capable of describing the basic functions and controls of a helicopter. Rank *10 added to skill check rolls involving helicopter piloting."
`,fg=`id: pilot-truck
name: "Pilot: Truck"
status: placeholder
plane: earth
summary: "Flying cargo trucks between stations, ships and planetary surfaces."
tags: [pilot, trucks, shipping]
lore: trucks
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,pg=`id: planar-surveying
name: "Planar Surveying"
status: placeholder
plane: earth
summary: "Mapping and assessing a newly opened plane in the field."
tags: [planes, exploration, survey]
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,mg=`id: programming
name: "Programming"
status: draft
plane: earth
summary: "Writing, reading and breaking software."
tags: [computers, programming, technology]
category: skill
ranked: true
minStats: { logic: 4, memory: 3, intuition: 2 }
effect: "This character is capable of writing and debugging simple software and reading other people’s code without a skill check. Rank *10 added to skill check rolls involving programming and hacking."
`,hg=`id: relic-handling
name: Relic Handling
status: placeholder
plane: isekai
summary: Handling magical relics without incident.
tags: [magic, relics]
category: skill
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
effect: Placeholder. Effect not yet written.
`,gg=`id: research
name: "Research"
status: placeholder
plane: any
summary: "Designing experiments, reading the literature and getting results."
tags: [science, research]
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,_g=`id: rider-basic-animals
name: "Rider: Basic Animals"
status: draft
plane: any
summary: "Riding a simple animal as a mount."
tags: [riding, animals, site-example]
category: skill
ranked: true
minStats: { grace: 4, empathy: 4, persuasion: 3 }
effect: "This character is capable of riding a basic animal as a mount in simple scenarios without a skill check. Rank *10 added to skill check rolls involving riding a simple animal."
`,vg=`id: schemer
name: Schemer
status: placeholder
plane: any
summary: Plotting and seeing through plots.
tags: [intrigue, politics]
category: skill
effect: Placeholder. Effect not yet written.
`,yg=`id: shield-wall
name: Shield Wall
status: placeholder
plane: any
summary: Fighting in formation behind a shield.
tags: [combat, shield, military]
category: skill
effect: Placeholder. Effect not yet written.
`,bg=`id: simple-cooking
name: "Simple Cooking"
status: draft
plane: any
summary: "Cooking simple, filling meals, even over a campfire."
tags: [cooking, food, survival]
category: skill
ranked: true
minStats: { memory: 2, intuition: 2 }
effect: "This character can cook simple, filling meals for themselves and a small group without a skill check, even over a campfire. Rank *10 added to skill check rolls involving cooking."
`,xg=`id: simple-potion-mixing
name: "Simple Potion Mixing"
status: draft
plane: isekai
summary: "Brewing simple potions from a known recipe."
tags: [potions, alchemy, herbs]
category: skill
ranked: true
minStats: { memory: 3, intuition: 3 }
effect: "This character can brew simple potions, such as healing draughts and sleeping tonics, from a known recipe and the right ingredients without a skill check. Rank *10 added to skill check rolls involving brewing potions."
`,Sg=`id: sleight-of-hand
name: Sleight of Hand
status: placeholder
plane: any
summary: "Quick, unnoticed work with the hands."
tags: [theft, trickery]
category: skill
effect: Placeholder. Effect not yet written.
`,Cg=`id: smooth-talker
name: Smooth Talker
status: placeholder
plane: any
summary: "Talking people into things, or out of them."
tags: [social, persuasion]
category: skill
effect: Placeholder. Effect not yet written.
`,wg=`id: specimen-handling
name: "Specimen Handling"
status: placeholder
plane: any
summary: "Catching, keeping, feeding and moving living specimens without losing them, or a hand."
tags: [parabiology, animals, care, handling]
category: skill
effect: Placeholder. Effect not yet written.
`,Tg=`id: starship-engineering
name: "Starship Engineering"
status: draft
plane: earth
summary: "Maintaining and repairing a starship’s reactors, drives and life support."
tags: [engineering, starships, technology, space]
category: skill
ranked: true
minStats: { logic: 4, memory: 3, grace: 2 }
effect: "This character is capable of maintaining and making routine repairs to a starship’s reactors, drives and life support without a skill check. Rank *10 added to skill check rolls involving starship repair."
`,Eg=`id: streetwise
name: Streetwise
status: placeholder
plane: any
summary: "Getting by, and getting answers, on the street."
tags: [urban, crime, social]
category: skill
effect: Placeholder. Effect not yet written.
`,Dg=`id: surgery
name: "Surgery"
status: draft
plane: any
summary: "Operating to repair serious injuries."
tags: [medicine, surgery, healing]
category: skill
ranked: true
minStats: { memory: 6, grace: 5, logic: 4 }
prerequisites: [medical-aid]
effect: "This character is capable of performing surgery to treat severe injuries, such as removing shrapnel or closing internal wounds, given the proper tools. Rank *10 added to skill check rolls involving surgery."
`,Og=`id: survivalist
name: Survivalist
status: placeholder
plane: any
summary: Staying alive with little in the wild.
tags: [survival, wilderness]
category: skill
effect: Placeholder. Effect not yet written.
`,kg=`id: teamster
name: Teamster
status: placeholder
plane: any
summary: Driving and caring for draft animals and wagons.
tags: [caravan, animals, driving]
category: skill
effect: Placeholder. Effect not yet written.
`,Ag=`id: tinkerer
name: Tinkerer
status: placeholder
plane: any
summary: Fixing and improvising with machines.
tags: [technology, repair, crafting]
category: skill
effect: Placeholder. Effect not yet written.
`,jg=`id: tracker
name: Tracker
status: placeholder
plane: any
summary: Following trails and reading signs.
tags: [tracking, hunting, wilderness]
category: skill
effect: Placeholder. Effect not yet written.
`,Mg=`id: vigilance
name: Vigilance
status: placeholder
plane: any
summary: Staying alert on watch.
tags: [guard, awareness]
category: skill
effect: Placeholder. Effect not yet written.
`,Ng=`id: wielder-longsword
name: "Wielder: Longsword"
status: draft
plane: any
summary: "Fighting with, and maintaining, a longsword."
tags: [combat, melee, swords, site-example]
category: skill
ranked: true
minStats: { grace: 4, power: 4, endurance: 4 }
effect: "This character is capable of performing the basic tasks of maintaining a Longsword without a skill check. Rank *5 added to skill check rolls involving a Longsword."
`,Pg=`id: wielder-musket
name: "Wielder: Musket"
status: draft
plane: any
summary: "Fighting with, and maintaining, a musket."
tags: [combat, firearms, muskets, site-example]
category: skill
ranked: true
minStats: { grace: 3, power: 2, intuition: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Musket without a skill check. Rank *5 added to skill check rolls involving a Musket."
`,Fg=`id: wielder-pistol
name: "Wielder: Pistol"
status: draft
plane: any
summary: "Fighting with, and maintaining, a pistol."
tags: [combat, firearms, sidearm]
category: skill
ranked: true
minStats: { grace: 3, intuition: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Pistol without a skill check. Rank *5 added to skill check rolls involving a Pistol."
`,Ig=`id: wielder-rifle
name: "Wielder: Rifle"
status: draft
plane: earth
summary: "Fighting with, and maintaining, a modern rifle."
tags: [combat, firearms, military]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, power: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Rifle without a skill check. Rank *5 added to skill check rolls involving a Rifle."
`,Lg=`id: wielder-war-axe
name: "Wielder: War Axe"
status: draft
plane: any
summary: "Fighting with, and maintaining, a war axe."
tags: [combat, melee, axes]
category: skill
ranked: true
minStats: { power: 5, endurance: 4, grace: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a War Axe without a skill check. Rank *5 added to skill check rolls involving a War Axe."
`,Rg=Symbol.for(`yaml.alias`),zg=Symbol.for(`yaml.document`),Bg=Symbol.for(`yaml.map`),Vg=Symbol.for(`yaml.pair`),Hg=Symbol.for(`yaml.scalar`),Ug=Symbol.for(`yaml.seq`),Wg=Symbol.for(`yaml.node.type`),Gg=e=>!!e&&typeof e==`object`&&e[Wg]===Rg,Kg=e=>!!e&&typeof e==`object`&&e[Wg]===zg,qg=e=>!!e&&typeof e==`object`&&e[Wg]===Bg,Jg=e=>!!e&&typeof e==`object`&&e[Wg]===Vg,Yg=e=>!!e&&typeof e==`object`&&e[Wg]===Hg,Xg=e=>!!e&&typeof e==`object`&&e[Wg]===Ug;function Zg(e){if(e&&typeof e==`object`)switch(e[Wg]){case Bg:case Ug:return!0}return!1}function Qg(e){if(e&&typeof e==`object`)switch(e[Wg]){case Rg:case Bg:case Hg:case Ug:return!0}return!1}var $g=e=>(Yg(e)||Zg(e))&&!!e.anchor,e_=Symbol(`break visit`),t_=Symbol(`skip children`),n_=Symbol(`remove node`);function r_(e,t){let n=a_(t);Kg(e)?i_(null,e.contents,n,Object.freeze([e]))===n_&&(e.contents=null):i_(null,e,n,Object.freeze([]))}r_.BREAK=e_,r_.SKIP=t_,r_.REMOVE=n_;function i_(e,t,n,r){let i=o_(e,t,n,r);if(Qg(i)||Jg(i))return s_(e,r,i),i_(e,i,n,r);if(typeof i!=`symbol`){if(Zg(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=i_(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===e_)return e_;else i===n_&&(t.items.splice(e,1),--e)}}else if(Jg(t)){r=Object.freeze(r.concat(t));let e=i_(`key`,t.key,n,r);if(e===e_)return e_;e===n_&&(t.key=null);let i=i_(`value`,t.value,n,r);if(i===e_)return e_;i===n_&&(t.value=null)}}return i}function a_(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function o_(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(qg(t))return n.Map?.(e,t,r);if(Xg(t))return n.Seq?.(e,t,r);if(Jg(t))return n.Pair?.(e,t,r);if(Yg(t))return n.Scalar?.(e,t,r);if(Gg(t))return n.Alias?.(e,t,r)}function s_(e,t,n){let r=t[t.length-1];if(Zg(r))r.items[e]=n;else if(Jg(r))e===`key`?r.key=n:r.value=n;else if(Kg(r))r.contents=n;else{let e=Gg(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var c_={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},l_=e=>e.replace(/[!,[\]{}]/g,e=>c_[e]),u_=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags)}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+l_(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&Qg(e.contents)){let t={};r_(e.contents,(e,n)=>{Qg(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)(i!==`!!`||a!==`tag:yaml.org,2002:`)&&(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};u_.defaultYaml={explicit:!1,version:`1.2`},u_.defaultTags={"!!":`tag:yaml.org,2002:`};function d_(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function f_(e){let t=new Set;return r_(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function p_(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function m_(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=f_(e);let a=p_(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(Yg(t.node)||Zg(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function h_(e,t,n,r){if(r&&typeof r==`object`){if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=h_(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=h_(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=h_(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=h_(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}}return e.call(t,n,r)}function g_(e,t,n){if(Array.isArray(e))return e.map((e,t)=>g_(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!$g(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var __=class{constructor(e){Object.defineProperty(this,Wg,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!Kg(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=g_(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?h_(i,{"":o},``,o):o}},v_=class extends __{constructor(e){super(Rg),this.source=e,Object.defineProperty(this,"tag",{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){if(t?.maxAliasCount===0)throw ReferenceError(`Alias resolution is disabled`);let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],r_(e,{Node:(e,t)=>{(Gg(t)||$g(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}if(r&&t){let{anchors:e,doc:n,maxAliasCount:i}=t,a=e.get(r);if(a||=(g_(r,null,t),e.get(r)),a?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=y_(n,r,e)),a.count*a.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`)}return r}toJSON(e,t){if(!t)return{source:this.source};let n=this.resolve(t.doc,t);if(!n){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}return t.anchors.get(n).res}toString(e,t,n){let r=`*${this.source}`;if(e){if(d_(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function y_(e,t,n){if(Gg(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}if(Zg(t)){let r=0;for(let i of t.items){let t=y_(e,i,n);t>r&&(r=t)}return r}if(Jg(t)){let r=y_(e,t.key,n),i=y_(e,t.value,n);return Math.max(r,i)}return 1}var b_=e=>!e||typeof e!=`function`&&typeof e!=`object`,Z=class extends __{constructor(e){super(Hg),this.value=e}toJSON(e,t){return t?.keep?this.value:g_(this.value,e,t)}toString(){return String(this.value)}};Z.BLOCK_FOLDED=`BLOCK_FOLDED`,Z.BLOCK_LITERAL=`BLOCK_LITERAL`,Z.PLAIN=`PLAIN`,Z.QUOTE_DOUBLE=`QUOTE_DOUBLE`,Z.QUOTE_SINGLE=`QUOTE_SINGLE`;var x_=`tag:yaml.org,2002:`;function S_(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function C_(e,t,n){if(Kg(e)&&(e=e.contents),Qg(e))return e;if(Jg(e)){let t=n.schema[Bg].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new v_(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=x_+t.slice(2));let l=S_(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new Z(e);return c&&(c.node=t),t}l=e instanceof Map?o[Bg]:Symbol.iterator in Object(e)?o[Ug]:o[Bg]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new Z(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function w_(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return C_(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var T_=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,E_=class extends __{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>Qg(t)||Jg(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(T_(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if(Zg(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,w_(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if(Zg(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&Yg(i)?i.value:i:Zg(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Jg(t))return!1;let n=t.value;return n==null||e&&Yg(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return Zg(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if(Zg(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,w_(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},D_=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function O_(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var k_=(e,t,n)=>e.endsWith(`
`)?O_(n,t):n.includes(`
`)?`
`+O_(n,t):(e.endsWith(` `)?``:` `)+n,A_=`flow`,j_=`block`,M_=`quoted`;function N_(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=P_(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=P_(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d){if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function P_(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var F_=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),I_=e=>/^(%|---|\.\.\.)/m.test(e);function L_(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function R_(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(I_(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:N_(o,a,M_,F_(t,!1))}function z_(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return R_(e,t);let n=t.indent||(I_(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:N_(r,n,A_,F_(t,!1))}function B_(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=R_;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?z_:i&&!t?R_:n?z_:R_}return r(e,t)}var V_;try{V_=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{V_=/\n+(?!\n|$)/g}function H_({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return B_(n,r);let l=r.indent||(r.forceBlockIndent||I_(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===Z.BLOCK_FOLDED?!1:t===Z.BLOCK_LITERAL||!L_(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(V_,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=F_(r,!0);o!==`folded`&&t!==Z.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=N_(`${v}${e}${p}`,l,j_,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function U_(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return B_(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?B_(a,t):H_(e,t,n,r);if(!s&&!u&&i!==Z.PLAIN&&a.includes(`
`))return H_(e,t,n,r);if(I_(a)){if(c===``)return t.forceBlockIndent=!0,H_(e,t,n,r);if(s&&c===l)return B_(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return B_(a,t)}return s?d:N_(d,c,A_,F_(t,!1))}function W_(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==Z.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=Z.QUOTE_DOUBLE);let c=e=>{switch(e){case Z.BLOCK_FOLDED:case Z.BLOCK_LITERAL:return i||a?B_(o.value,t):H_(o,t,n,r);case Z.QUOTE_DOUBLE:return R_(o.value,t);case Z.QUOTE_SINGLE:return z_(o.value,t);case Z.PLAIN:return U_(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function G_(e,t){let n=Object.assign({blockQuote:!0,commentString:D_,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function K_(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(Yg(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function q_(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(Yg(e)||Zg(e))&&e.anchor;a&&d_(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function J_(e,t,n,r){if(Jg(e))return e.toString(t,n,r);if(Gg(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=Qg(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=K_(t.doc.schema.tags,a);let o=q_(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):Yg(a)?W_(a,t,n,r):a.toString(t,n,r);return o?Yg(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Y_({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=Qg(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if(Zg(e)||!Qg(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||Zg(e)||(Yg(e)?e.type===Z.BLOCK_FOLDED||e.type===Z.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=J_(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=k_(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=k_(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=k_(g,n.indent,l(f))));let _,v,y;Qg(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&Yg(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&Xg(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=J_(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${O_(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&Zg(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else(x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=k_(g,n.indent,l(y)):h&&i&&i(),g}function X_(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var Z_=`<<`,Q_={identify:e=>e===Z_||typeof e==`symbol`&&e.description===Z_,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new Z(Symbol(Z_)),{addToJSMap:ev}),stringify:()=>Z_},$_=(e,t)=>(Q_.identify(t)||Yg(t)&&(!t.type||t.type===Z.PLAIN)&&Q_.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===Q_.tag&&e.default);function ev(e,t,n){let r=nv(e,n);if(Xg(r))for(let n of r.items)tv(e,t,n);else if(Array.isArray(r))for(let n of r)tv(e,t,n);else tv(e,t,r)}function tv(e,t,n){let r=nv(e,n);if(!qg(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function nv(e,t){return e&&Gg(t)?t.resolve(e.doc,e):t}function rv(e,t,{key:n,value:r}){if(Qg(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if($_(e,n))ev(e,t,r);else{let i=g_(n,``,e);if(t instanceof Map)t.set(i,g_(r,i,e));else if(t instanceof Set)t.add(i);else{let a=iv(n,i,e),o=g_(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function iv(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(Qg(e)&&n?.doc){let t=G_(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),X_(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function av(e,t,n){return new ov(C_(e,void 0,n),C_(t,void 0,n))}var ov=class e{constructor(e,t=null){Object.defineProperty(this,Wg,{value:Vg}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return Qg(n)&&(n=n.clone(t)),Qg(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return rv(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Y_(this,e,t,n):JSON.stringify(this)}};function sv(e,t,n){return(t.inFlow??e.flow?lv:cv)(e,t,n)}function cv({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(Qg(i))!d&&i.spaceBefore&&f.push(``),uv(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(Jg(i)){let e=Qg(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),uv(n,f,e.commentBefore,d))}d=!1;let s=J_(i,u,()=>o=null,()=>d=!0);o&&(s+=k_(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+O_(l(e),c),s&&s()):d&&o&&o(),p}function lv({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(Qg(i))i.spaceBefore&&d.push(``),uv(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(Jg(i)){let e=Qg(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),uv(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=Qg(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=J_(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=k_(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}return`${f}${o}${d.join(` `)}${o}${p}`}function uv({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=O_(t(r),e);n.push(i.trimStart())}}function dv(e,t){let n=Yg(t)?t.value:t;for(let r of e)if(Jg(r)&&(r.key===t||r.key===n||Yg(r.key)&&r.key.value===n))return r}var fv=class extends E_{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(Bg,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(av(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=Jg(e)?e:!e||typeof e!=`object`||!(`key`in e)?new ov(e,e?.value):new ov(e.key,e.value);let r=dv(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);Yg(r.value)&&b_(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=dv(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=dv(this.items,e)?.value;return(!t&&Yg(n)?n.value:n)??void 0}has(e){return!!dv(this.items,e)}set(e,t){this.add(new ov(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)rv(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!Jg(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),sv(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},pv={collection:`map`,default:!0,nodeClass:fv,tag:`tag:yaml.org,2002:map`,resolve(e,t){return qg(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>fv.from(e,t,n)},mv=class extends E_{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(Ug,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=hv(e);return typeof t==`number`&&this.items.splice(t,1).length>0}get(e,t){let n=hv(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&Yg(r)?r.value:r}has(e){let t=hv(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=hv(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];Yg(r)&&b_(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(g_(e,String(r++),t));return n}toString(e,t,n){return e?sv(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(C_(a,void 0,n))}}return i}};function hv(e){let t=Yg(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var gv={collection:`seq`,default:!0,nodeClass:mv,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return Xg(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>mv.from(e,t,n)},_v={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),W_(e,t,n,r)}},vv={identify:e=>e==null,createNode:()=>new Z(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Z(null),stringify:({source:e},t)=>typeof e==`string`&&vv.test.test(e)?e:t.options.nullStr},yv={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Z(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&yv.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function bv({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^-?\d/.test(a)&&!a.includes(`e`)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-->0;)a+=`0`}return a}var xv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:bv},Sv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():bv(e)}},Cv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new Z(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:bv},wv=e=>typeof e==`bigint`||Number.isInteger(e),Tv=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function Ev(e,t,n){let{value:r}=e;return wv(r)&&r>=0?n+r.toString(t):bv(e)}var Dv={identify:e=>wv(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>Tv(e,2,8,n),stringify:e=>Ev(e,8,`0o`)},Ov={identify:wv,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>Tv(e,0,10,n),stringify:bv},kv={identify:e=>wv(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>Tv(e,2,16,n),stringify:e=>Ev(e,16,`0x`)},Av=[pv,gv,_v,vv,yv,Dv,Ov,kv,xv,Sv,Cv];function jv(e){return typeof e==`bigint`||Number.isInteger(e)}var Mv=({value:e})=>JSON.stringify(e),Nv=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:Mv},{identify:e=>e==null,createNode:()=>new Z(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:Mv},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:Mv},{identify:jv,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>jv(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Mv}],Pv=[pv,gv].concat(Nv,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),Fv={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=Z.BLOCK_LITERAL,t!==Z.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===Z.BLOCK_LITERAL?`
`:` `)}return W_({comment:e,type:t,value:s},r,i,a)}};function Iv(e,t){if(Xg(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!Jg(r)){if(qg(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new ov(new Z(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=Jg(r)?r:new ov(r)}}else t(`Expected a sequence for this tag`);return e}function Lv(e,t,n){let{replacer:r}=n,i=new mv(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e)){if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`)}else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(av(o,s,n))}return i}var Rv={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:Iv,createNode:Lv},zv=class e extends mv{constructor(){super(),this.add=fv.prototype.add.bind(this),this.delete=fv.prototype.delete.bind(this),this.get=fv.prototype.get.bind(this),this.has=fv.prototype.has.bind(this),this.set=fv.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(Jg(e)?(r=g_(e.key,``,t),i=g_(e.value,r,t)):r=g_(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=Lv(e,t,n),i=new this;return i.items=r.items,i}};zv.tag=`tag:yaml.org,2002:omap`;var Bv={collection:`seq`,identify:e=>e instanceof Map,nodeClass:zv,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=Iv(e,t),r=[];for(let{key:e}of n.items)Yg(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new zv,n)},createNode:(e,t,n)=>zv.from(e,t,n)};function Vv({value:e,source:t},n){return t&&(e?Hv:Uv).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var Hv={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Z(!0),stringify:Vv},Uv={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Z(!1),stringify:Vv},Wv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:bv},Gv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():bv(e)}},Kv={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new Z(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:bv},qv=e=>typeof e==`bigint`||Number.isInteger(e);function Jv(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function Yv(e,t,n){let{value:r}=e;if(qv(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return bv(e)}var Xv={identify:qv,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Jv(e,2,2,n),stringify:e=>Yv(e,2,`0b`)},Zv={identify:qv,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Jv(e,1,8,n),stringify:e=>Yv(e,8,`0`)},Qv={identify:qv,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Jv(e,0,10,n),stringify:bv},$v={identify:qv,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Jv(e,2,16,n),stringify:e=>Yv(e,16,`0x`)},ey=class e extends fv{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=Jg(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new ov(e.key,null):new ov(e,null),dv(this.items,t.key)||this.items.push(t)}get(e,t){let n=dv(this.items,e);return!t&&Jg(n)?Yg(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=dv(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new ov(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(av(e,null,n));return i}};ey.tag=`tag:yaml.org,2002:set`;var ty={collection:`map`,identify:e=>e instanceof Set,nodeClass:ey,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>ey.from(e,t,n),resolve(e,t){if(qg(e)){if(e.hasAllNullValues(!0))return Object.assign(new ey,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function ny(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function ry(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return bv(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var iy={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>ny(e,n),stringify:ry},ay={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>ny(e,!1),stringify:ry},oy={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(oy.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=ny(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},sy=[pv,gv,_v,vv,Hv,Uv,Xv,Zv,Qv,$v,Wv,Gv,Kv,Fv,Q_,Bv,Rv,ty,iy,ay,oy],cy=new Map([[`core`,Av],[`failsafe`,[pv,gv,_v]],[`json`,Pv],[`yaml11`,sy],[`yaml-1.1`,sy]]),ly={binary:Fv,bool:yv,float:Cv,floatExp:Sv,floatNaN:xv,floatTime:ay,int:Ov,intHex:kv,intOct:Dv,intTime:iy,map:pv,merge:Q_,null:vv,omap:Bv,pairs:Rv,seq:gv,set:ty,timestamp:oy},uy={"tag:yaml.org,2002:binary":Fv,"tag:yaml.org,2002:merge":Q_,"tag:yaml.org,2002:omap":Bv,"tag:yaml.org,2002:pairs":Rv,"tag:yaml.org,2002:set":ty,"tag:yaml.org,2002:timestamp":oy};function dy(e,t,n){let r=cy.get(t);if(r&&!e)return n&&!r.includes(Q_)?r.concat(Q_):r.slice();let i=r;if(!i){if(Array.isArray(e))i=[];else{let e=Array.from(cy.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(Q_)),i.reduce((e,t)=>{let n=typeof t==`string`?ly[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(ly).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var fy=(e,t)=>e.key<t.key?-1:+(e.key>t.key),py=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?dy(e,`compat`):e?dy(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?uy:{},this.tags=dy(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Bg,{value:pv}),Object.defineProperty(this,Hg,{value:_v}),Object.defineProperty(this,Ug,{value:gv}),this.sortMapEntries=typeof a==`function`?a:a===!0?fy:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function my(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=G_(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(O_(t,``))}let o=!1,s=null;if(e.contents){if(Qg(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(O_(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=J_(e.contents,i,()=>s=null,t);s&&(c+=k_(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(J_(e.contents,i));if(e.directives?.docEnd){if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(O_(t,``))):n.push(`... ${t}`)}else n.push(`...`)}else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(O_(a(t),``)))}return n.join(`
`)+`
`}var hy=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Wg,{value:zg});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new u_({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[Wg]:{value:zg}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Qg(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){gy(this.contents)&&this.contents.add(e)}addIn(e,t){gy(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=f_(this);e.anchor=!t||n.has(t)?p_(t||`a`,n):t}return new v_(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=m_(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=C_(e,l,p);return o&&Zg(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new ov(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return gy(this.contents)?this.contents.delete(e):!1}deleteIn(e){return T_(e)?this.contents!=null&&(this.contents=null,!0):gy(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return Zg(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return T_(e)?!t&&Yg(this.contents)?this.contents.value:this.contents:Zg(this.contents)?this.contents.getIn(e,t):void 0}has(e){return Zg(this.contents)?this.contents.has(e):!1}hasIn(e){return T_(e)?this.contents!==void 0:Zg(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=w_(this.schema,[e],t):gy(this.contents)&&this.contents.set(e,t)}setIn(e,t){T_(e)?this.contents=t:this.contents==null?this.contents=w_(this.schema,Array.from(e),t):gy(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new u_({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new u_({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new py(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=g_(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?h_(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return my(this,e)}};function gy(e){if(Zg(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var _y=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},vy=class extends _y{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},yy=class extends _y{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},by=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function xy(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],ee=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:ee,start:x??ee}}function Sy(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(Sy(t.key)||Sy(t.value))return!0}return!1;default:return!0}}function Cy(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&Sy(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function wy(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||Yg(e)&&Yg(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var Ty=`All mapping items must start at the same column`;function Ey({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??fv)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=xy(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,Ty)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||Sy(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,Ty);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&Cy(r.indent,u,i),n.atKey=!1,wy(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=xy(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&Cy(r.indent,f,i),s=c.range[2];let l=new ov(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new ov(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function Dy({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??mv)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=xy(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found){if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&Cy(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function Oy(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var ky=`Block collections are not allowed within flow collections`,Ay=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function jy({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new((a?.nodeClass)??(o?fv:mv))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=xy(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&Sy(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];Jg(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],Ay(m)&&i(r.range,`BLOCK_IN_FLOW`,ky)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);Ay(f)&&i(g.range,`BLOCK_IN_FLOW`,ky),n.atKey=!1;let _=xy(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?Ay(m)&&i(v.range,`BLOCK_IN_FLOW`,ky):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new ov(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;wy(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new fv(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=Oy(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function My(e,t,n,r,i,a){let o=n.type===`block-map`?Ey(e,t,n,r,a):n.type===`block-seq`?Dy(e,t,n,r,a):jy(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function Ny(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===fv.tagName&&s===`map`||o===mv.tagName&&s===`seq`)return My(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),My(e,t,n,i,o)}let l=My(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=Qg(u)?u:new Z(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function Py(e,t,n){let r=t.offset,i=Fy(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?Z.BLOCK_FOLDED:Z.BLOCK_LITERAL,o=t.source?Iy(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===Z.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
`):t.length>c||r[0]===`	`?(f===` `?f=`
`:!p&&f===`
`&&(f=`

`),d+=f+t.slice(c)+r,f=`
`,p=!0):r===``?f===`
`?d+=`
`:f=`
`:(d+=f+r,f=` `,p=!1)}switch(i.chomp){case`-`:break;case`+`:for(let e=s;e<o.length;++e)d+=`
`+o[e][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function Fy({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function Iy(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function Ly(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=Z.PLAIN,c=Ry(a,l);break;case`single-quoted-scalar`:s=Z.QUOTE_SINGLE,c=zy(a,l);break;case`double-quoted-scalar`:s=Z.QUOTE_DOUBLE,c=Vy(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=Oy(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function Ry(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),By(e)}function zy(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),By(e.slice(1,-1)).replace(/''/g,`'`)}function By(e){let t=/(.*?)\r?\n/sy,n=t.exec(e);if(!n)return e;let r,i;try{r=RegExp(`(?<![ 	])[ 	]+$`),i=RegExp(`^[ 	]+|(?<![ 	])[ 	]+$`,`g`)}catch{r=/[ \t]+$/,i=/^[ \t]+|[ \t]+$/g}let a=n[1].replace(r,``),o=` `,s=t.lastIndex;for(;n=t.exec(e);){let e=n[1].replace(i,``);e===``?o===`
`?a+=o:o=`
`:(a+=o+e,o=` `),s=t.lastIndex}let c=/[ \t]*(.*)/sy;return c.lastIndex=s,n=c.exec(e),a+o+(n?.[1]??``)}function Vy(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(i!==`\r`||e[r+1]!==`
`){if(i===`
`){let{fold:t,offset:i}=Hy(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=Uy[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a=i===`x`?2:i===`u`?4:8;n+=Wy(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&(a!==`\r`||e[r+2]!==`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function Hy(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&(r!==`\r`||e[t+2]===`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var Uy={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function Wy(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}}function Gy(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?Py(e,t,r):Ly(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[Hg]:c?Ky(e.schema,i,c,n,r):t.type===`scalar`?qy(e,i,t,r):e.schema[Hg];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=Yg(a)?a:new Z(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new Z(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Ky(e,t,n,r,i){if(n===`!`)return e[Hg];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n){if(t.default&&t.test)a.push(t);else return t}for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[Hg])}function qy({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[Hg];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[Hg];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function Jy(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var Yy={composeNode:Xy,composeEmptyNode:Zy};function Xy(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=Qy(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=Gy(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=Ny(Yy,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=Zy(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!Yg(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function Zy(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=Gy(e,{type:`scalar`,offset:Jy(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function Qy({options:e},{offset:t,source:n,end:r},i){let a=new v_(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=Oy(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function $y(e,t,{offset:n,start:r,value:i,end:a},o){let s=new hy(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=xy(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?Xy(c,i,l,o):Zy(c,l.end,r,null,l,o);let u=s.contents.range[2],d=Oy(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function eb(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function tb(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var nb=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=eb(e);r?this.warnings.push(new yy(i,t,n)):this.errors.push(new vy(i,t,n))},this.directives=new u_({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=tb(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if(Zg(i)&&!i.flow&&i.items.length>0){let e=i.items[0];Jg(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:tb(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=eb(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=$y(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new vy(eb(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new vy(eb(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=Oy(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new vy(eb(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new hy(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},rb=Symbol(`break visit`),ib=Symbol(`skip children`),ab=Symbol(`remove item`);function ob(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),sb(Object.freeze([]),e,t)}ob.BREAK=rb,ob.SKIP=ib,ob.REMOVE=ab,ob.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},ob.parentCollection=(e,t)=>{let n=ob.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function sb(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=sb(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===rb)return rb;else r===ab&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function cb(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function lb(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var ub=new Set(`0123456789ABCDEFabcdef`),db=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),fb=new Set(`,[]{}`),pb=new Set(` ,[]{}
\r	`),mb=e=>!e||pb.has(e),hb=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`||t===`\r`&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&lb(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&lb(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!lb(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&lb(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,`block-start`}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(mb),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&lb(r[3]))&&(n!==this.indentNext-1||this.flowLevel!==1||r[0]!==`]`&&r[0]!==`}`))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(mb),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||lb(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>lb(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.indentNext=this.blockScalarIndent===-1?t:this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(1);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(lb(r)||e&&fb.has(r))break;t=n}else if(lb(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&fb.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&fb.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){let e=0;loop:for(;;){switch(this.charAt(0)){case`!`:e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue loop;case`&`:e+=yield*this.pushUntil(mb),e+=yield*this.pushSpaces(!0);continue loop;case`-`:case`?`:case`:`:{let t=this.flowLevel>0,n=this.charAt(1);if(lb(n)||t&&fb.has(n)){t?this.flowKey&&=!1:this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue loop}}}break loop}return e}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!lb(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(db.has(t))t=this.buffer[++e];else if(t===`%`&&ub.has(this.buffer[e+1])&&ub.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},gb=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function _b(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function vb(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function yb(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function bb(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function xb(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function Sb(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function Cb(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!_b(t.start,`explicit-key-ind`)&&!_b(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,yb(t.value)?t.value.end?Sb(t.value.end,t.sep):t.value.end=t.sep:Sb(t.start,t.sep),delete t.sep)}var wb=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new hb,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=cb(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source})}else{if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&Cb(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&vb(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:vb(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=xb(bb(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Sb(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey){if(!t.sep){if(_b(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=xb(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(_b(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(yb(t.key)&&!_b(t.sep,`newline`)){let e=xb(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken)}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):_b(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!_b(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Sb(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||_b(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=xb(bb(t));Cb(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=xb(bb(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=xb(bb(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function Tb(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new gb||null,prettyErrors:t}}function Eb(e,t={}){let{lineCounter:n,prettyErrors:r}=Tb(t),i=new wb(n?.addNewLine),a=new nb(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new vy(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach(by(e,n)),o.warnings.forEach(by(e,n))),o}function Db(e,t,n){let r;typeof t==`function`?r=t:n===void 0&&t&&typeof t==`object`&&(n=t);let i=Eb(e,n);if(!i)return null;if(i.warnings.forEach(e=>X_(i.options.logLevel,e)),i.errors.length>0){if(i.options.logLevel!==`silent`)throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:r},n))}function Ob(e,t,n,r){let i=new Map,a=[],o=e.filter(e=>e.path.startsWith(`${t}/`)&&e.path.endsWith(`.yaml`)).sort((e,t)=>e.path.localeCompare(t.path));for(let{path:e,text:t}of o){let o=n.safeParse(Db(t));if(!o.success){for(let t of o.error.issues)r.push(`${e}: ${t.path.join(`.`)||`(root)`}: ${t.message}`);continue}let s=o.data.id;s!==e.split(`/`).pop().replace(/\.yaml$/,``)&&r.push(`${e}: id "${s}" doesn't match the file name`),i.has(s)&&r.push(`${e}: id "${s}" is also used by ${i.get(s)}`),i.set(s,e),a.push(o.data)}return a}function kb(e){let t=[];return{content:{kinds:Ob(e,`kinds`,wc,t),packages:[`origins`,`professions`,`pasts`].flatMap(n=>Ob(e,n,Dc,t)),traits:Ob(e,`traits`,Ac,t)},errors:t}}var{content:Ab,errors:jb}=kb(Object.entries(Object.assign({"../../content/kinds/ai-core.yaml":El,"../../content/kinds/dreft/guwain.yaml":Dl,"../../content/kinds/dreft/isek.yaml":Ol,"../../content/kinds/dreft/tatot-goblinoid.yaml":kl,"../../content/kinds/dreft/tatot-orcoid.yaml":Al,"../../content/kinds/human.yaml":jl,"../../content/origins/american-empire/american-empire-colonies.yaml":Ml,"../../content/origins/american-empire/american-empire-earth.yaml":Nl,"../../content/origins/chinese-empire/chinese-empire-colonies.yaml":Pl,"../../content/origins/chinese-empire/chinese-empire-earth.yaml":Fl,"../../content/origins/dreft/dreft.yaml":Il,"../../content/origins/drovus/the-drovus-empire.yaml":Ll,"../../content/origins/free-american-states/the-free-american-states.yaml":Rl,"../../content/origins/karsef/kingdom-of-karsef.yaml":zl,"../../content/origins/kashgar/kashgar.yaml":Bl,"../../content/origins/lunar-industrial-syndicate/the-lunar-industrial-syndicate.yaml":Vl,"../../content/origins/sdu/sdu-colonies.yaml":Hl,"../../content/origins/sdu/sdu-earth.yaml":Ul,"../../content/origins/sorellion/kingdom-of-sorellion.yaml":Wl,"../../content/origins/tetra/tetra.yaml":Gl,"../../content/origins/union-of-texas/the-union-of-texas.yaml":Kl,"../../content/pasts/any/craft-apprenticeship.yaml":ql,"../../content/pasts/any/criminal-family.yaml":Jl,"../../content/pasts/any/gutter-trash.yaml":Yl,"../../content/pasts/any/military-service.yaml":Xl,"../../content/pasts/any/privileged-upbringing.yaml":Zl,"../../content/pasts/any/raised-at-court.yaml":Ql,"../../content/pasts/any/shipborn.yaml":$l,"../../content/pasts/any/simple-farmer.yaml":eu,"../../content/pasts/any/traveling-troupe.yaml":tu,"../../content/pasts/dreft/countryside-upbringing.yaml":nu,"../../content/pasts/dreft/expelled-from-the-mage-schools.yaml":ru,"../../content/pasts/dreft/glintl-docks.yaml":iu,"../../content/pasts/dreft/karsef-border-veteran.yaml":au,"../../content/pasts/dreft/merchant-dynasty.yaml":ou,"../../content/pasts/dreft/monster-raided-village.yaml":su,"../../content/pasts/dreft/noble-household.yaml":H,"../../content/pasts/dreft/palace-servant.yaml":cu,"../../content/pasts/dreft/raised-in-the-caravan-town.yaml":lu,"../../content/pasts/dreft/returned-from-the-systems.yaml":uu,"../../content/pasts/dreft/sunrise-refugee.yaml":du,"../../content/pasts/systems/station-rat.yaml":fu,"../../content/pasts/systems/university-educated.yaml":pu,"../../content/pasts/tetra/delegation-child.yaml":mu,"../../content/pasts/tetra/gate-lab-kid.yaml":hu,"../../content/pasts/tetra/holding-company-kid.yaml":gu,"../../content/pasts/tetra/parasapient-quarter.yaml":_u,"../../content/pasts/tetra/raised-in-the-infill.yaml":vu,"../../content/pasts/tetra/raised-on-ward-politics.yaml":yu,"../../content/professions/any/apothecary.yaml":bu,"../../content/professions/any/bard.yaml":xu,"../../content/professions/any/blacksmith.yaml":Su,"../../content/professions/any/courier.yaml":Cu,"../../content/professions/any/criminal-enforcer.yaml":wu,"../../content/professions/any/doctor.yaml":Tu,"../../content/professions/any/farmer.yaml":Eu,"../../content/professions/any/jester.yaml":Du,"../../content/professions/any/knight.yaml":Ou,"../../content/professions/any/local-police.yaml":ku,"../../content/professions/any/musical-artist.yaml":Au,"../../content/professions/any/ranger.yaml":ju,"../../content/professions/any/smuggler.yaml":Mu,"../../content/professions/any/spy.yaml":Nu,"../../content/professions/any/squire.yaml":Pu,"../../content/professions/any/stonemason.yaml":Fu,"../../content/professions/any/surgeon.yaml":Iu,"../../content/professions/any/tanner.yaml":Lu,"../../content/professions/any/visual-artist.yaml":Ru,"../../content/professions/dreft/alchemist.yaml":zu,"../../content/professions/dreft/caravaneer.yaml":Bu,"../../content/professions/dreft/dreft-local-militia.yaml":Vu,"../../content/professions/dreft/dreft-mercenary.yaml":Hu,"../../content/professions/dreft/gate-hand.yaml":Uu,"../../content/professions/dreft/guild-hunter.yaml":Wu,"../../content/professions/dreft/hedge-witch.yaml":Gu,"../../content/professions/dreft/licensed-mage.yaml":Ku,"../../content/professions/dreft/royal-guard.yaml":qu,"../../content/professions/systems/american-empire-soldier.yaml":Ju,"../../content/professions/systems/combat-medic.yaml":Yu,"../../content/professions/systems/computer-engineer.yaml":Xu,"../../content/professions/systems/emergency-medical-technician.yaml":Zu,"../../content/professions/systems/exotic-specimen-dealer.yaml":Qu,"../../content/professions/systems/fighter-pilot.yaml":$u,"../../content/professions/systems/interplanar-diplomat.yaml":ed,"../../content/professions/systems/interplanar-rights-lawyer.yaml":td,"../../content/professions/systems/officer-of-the-bureau-of-planar-management-and-enforcement.yaml":nd,"../../content/professions/systems/paraarcheologist.yaml":U,"../../content/professions/systems/paraecologist.yaml":W,"../../content/professions/systems/paraethnologist.yaml":G,"../../content/professions/systems/paraevolutionary-scientist.yaml":K,"../../content/professions/systems/paraphysiologist.yaml":q,"../../content/professions/systems/parazoological-keeper.yaml":rd,"../../content/professions/systems/planar-expeditionary-professional.yaml":id,"../../content/professions/systems/starship-engineer.yaml":ad,"../../content/professions/systems/station-maintenance.yaml":od,"../../content/professions/systems/theoretical-paraphysicist.yaml":sd,"../../content/professions/systems/truck-pilot.yaml":cd,"../../content/traits/ability/capable-student.yaml":ld,"../../content/traits/ability/con-man.yaml":ud,"../../content/traits/ability/eagle-eye.yaml":dd,"../../content/traits/ability/gladiator.yaml":fd,"../../content/traits/ability/knowledge-sponge.yaml":pd,"../../content/traits/ability/magic-access.yaml":md,"../../content/traits/ability/magical-heritage.yaml":hd,"../../content/traits/ability/mental-fortitude.yaml":gd,"../../content/traits/ability/natural-breath-weapon.yaml":_d,"../../content/traits/ability/sculpted.yaml":vd,"../../content/traits/ability/trail-runner.yaml":yd,"../../content/traits/circumstance/explorers-lodge-membership.yaml":bd,"../../content/traits/circumstance/imperial-service-record.yaml":xd,"../../content/traits/circumstance/short-term-fame.yaml":Sd,"../../content/traits/circumstance/significant-inheritance.yaml":Cd,"../../content/traits/circumstance/thieves-guild-membership.yaml":wd,"../../content/traits/circumstance/tugboat-captain.yaml":Td,"../../content/traits/circumstance/wanted-in-sol.yaml":Ed,"../../content/traits/condition/cybernetic-intelligence.yaml":Dd,"../../content/traits/condition/damaged.yaml":Od,"../../content/traits/condition/dead.yaml":kd,"../../content/traits/condition/destroyed.yaml":Ad,"../../content/traits/condition/ghost-sight.yaml":jd,"../../content/traits/condition/hard-shell.yaml":Md,"../../content/traits/condition/healthy.yaml":Nd,"../../content/traits/condition/incapacitated.yaml":Pd,"../../content/traits/condition/injured.yaml":Fd,"../../content/traits/condition/long-toothed.yaml":Id,"../../content/traits/condition/mechanical.yaml":Ld,"../../content/traits/condition/severe-bleeding.yaml":Rd,"../../content/traits/condition/severely-injured.yaml":zd,"../../content/traits/condition/sorcerous.yaml":Bd,"../../content/traits/condition/stimm-rush.yaml":Vd,"../../content/traits/condition/stone-skin.yaml":Hd,"../../content/traits/condition/supernatural.yaml":Ud,"../../content/traits/contact/additional-contact.yaml":Wd,"../../content/traits/knowledge/additional-language.yaml":Gd,"../../content/traits/knowledge/ai-culture.yaml":Kd,"../../content/traits/knowledge/alchemy.yaml":qd,"../../content/traits/knowledge/american-geography.yaml":Jd,"../../content/traits/knowledge/american-history.yaml":Yd,"../../content/traits/knowledge/amharic-written.yaml":Xd,"../../content/traits/knowledge/amharic.yaml":Zd,"../../content/traits/knowledge/antiluna.yaml":Qd,"../../content/traits/knowledge/arabic-written.yaml":$d,"../../content/traits/knowledge/arabic.yaml":ef,"../../content/traits/knowledge/architecture.yaml":tf,"../../content/traits/knowledge/aristocracy.yaml":nf,"../../content/traits/knowledge/ark-life.yaml":rf,"../../content/traits/knowledge/ark-new-york.yaml":af,"../../content/traits/knowledge/art-history.yaml":of,"../../content/traits/knowledge/artificial-intelligence.yaml":sf,"../../content/traits/knowledge/bandits-and-brigands.yaml":cf,"../../content/traits/knowledge/bengali-written.yaml":lf,"../../content/traits/knowledge/bengali.yaml":uf,"../../content/traits/knowledge/boneyard.yaml":df,"../../content/traits/knowledge/burmese-written.yaml":ff,"../../content/traits/knowledge/burmese.yaml":pf,"../../content/traits/knowledge/cantonese-written.yaml":mf,"../../content/traits/knowledge/cantonese.yaml":hf,"../../content/traits/knowledge/caravan-routes.yaml":gf,"../../content/traits/knowledge/chinese-imperial-law.yaml":J,"../../content/traits/knowledge/coastal-trade.yaml":_f,"../../content/traits/knowledge/computer-systems.yaml":vf,"../../content/traits/knowledge/countryside-lore.yaml":yf,"../../content/traits/knowledge/court-etiquette.yaml":bf,"../../content/traits/knowledge/criminal-underworld.yaml":xf,"../../content/traits/knowledge/cybernetics.yaml":Sf,"../../content/traits/knowledge/dreft.yaml":Cf,"../../content/traits/knowledge/dreftan-written.yaml":wf,"../../content/traits/knowledge/dreftan.yaml":Tf,"../../content/traits/knowledge/dreftian-law.yaml":Ef,"../../content/traits/knowledge/dutch-written.yaml":Df,"../../content/traits/knowledge/dutch.yaml":Of,"../../content/traits/knowledge/dwarvish-runes-written.yaml":kf,"../../content/traits/knowledge/dwarvish.yaml":Af,"../../content/traits/knowledge/earth-baseline-customs.yaml":jf,"../../content/traits/knowledge/earth-baseline-technology.yaml":Mf,"../../content/traits/knowledge/elemental-magics.yaml":Nf,"../../content/traits/knowledge/english-written.yaml":Pf,"../../content/traits/knowledge/english.yaml":Ff,"../../content/traits/knowledge/exotic-materials.yaml":If,"../../content/traits/knowledge/farming.yaml":Lf,"../../content/traits/knowledge/filipino-written.yaml":Rf,"../../content/traits/knowledge/filipino.yaml":zf,"../../content/traits/knowledge/french-written.yaml":Bf,"../../content/traits/knowledge/french.yaml":Vf,"../../content/traits/knowledge/german-written.yaml":Hf,"../../content/traits/knowledge/german.yaml":Uf,"../../content/traits/knowledge/glintl.yaml":Wf,"../../content/traits/knowledge/gujarati-written.yaml":Y,"../../content/traits/knowledge/gujarati.yaml":Gf,"../../content/traits/knowledge/hausa-written.yaml":Kf,"../../content/traits/knowledge/hausa.yaml":qf,"../../content/traits/knowledge/heraldry.yaml":Jf,"../../content/traits/knowledge/herbalism.yaml":Yf,"../../content/traits/knowledge/hindi-written.yaml":Xf,"../../content/traits/knowledge/hindi.yaml":Zf,"../../content/traits/knowledge/imperial-law.yaml":Qf,"../../content/traits/knowledge/imperial-politics.yaml":$f,"../../content/traits/knowledge/indonesian-written.yaml":ep,"../../content/traits/knowledge/indonesian.yaml":tp,"../../content/traits/knowledge/interplanar-law.yaml":np,"../../content/traits/knowledge/interplanar-relations.yaml":rp,"../../content/traits/knowledge/italian-written.yaml":X,"../../content/traits/knowledge/italian.yaml":ip,"../../content/traits/knowledge/japanese-written.yaml":ap,"../../content/traits/knowledge/japanese.yaml":op,"../../content/traits/knowledge/javanese-written.yaml":sp,"../../content/traits/knowledge/javanese.yaml":cp,"../../content/traits/knowledge/kannada-written.yaml":lp,"../../content/traits/knowledge/kannada.yaml":up,"../../content/traits/knowledge/karsef.yaml":dp,"../../content/traits/knowledge/kashgar-mindworks.yaml":fp,"../../content/traits/knowledge/kashgar.yaml":pp,"../../content/traits/knowledge/kazakh-written.yaml":mp,"../../content/traits/knowledge/kazakh.yaml":hp,"../../content/traits/knowledge/khmer-written.yaml":gp,"../../content/traits/knowledge/khmer.yaml":_p,"../../content/traits/knowledge/kinyarwanda-written.yaml":vp,"../../content/traits/knowledge/kinyarwanda.yaml":yp,"../../content/traits/knowledge/korean-written.yaml":bp,"../../content/traits/knowledge/korean.yaml":xp,"../../content/traits/knowledge/kyrgyz-written.yaml":Sp,"../../content/traits/knowledge/kyrgyz.yaml":Cp,"../../content/traits/knowledge/lao-written.yaml":wp,"../../content/traits/knowledge/lao.yaml":Tp,"../../content/traits/knowledge/lingala-written.yaml":Ep,"../../content/traits/knowledge/lingala.yaml":Dp,"../../content/traits/knowledge/liquid-democracy.yaml":Op,"../../content/traits/knowledge/local-folklore.yaml":kp,"../../content/traits/knowledge/local-history.yaml":Ap,"../../content/traits/knowledge/magic-on-isekai.yaml":jp,"../../content/traits/knowledge/malay-written.yaml":Mp,"../../content/traits/knowledge/malay.yaml":Np,"../../content/traits/knowledge/malayalam-written.yaml":Pp,"../../content/traits/knowledge/malayalam.yaml":Fp,"../../content/traits/knowledge/mandarin-written.yaml":Ip,"../../content/traits/knowledge/mandarin.yaml":Lp,"../../content/traits/knowledge/marathi-written.yaml":Rp,"../../content/traits/knowledge/marathi.yaml":zp,"../../content/traits/knowledge/mathematics.yaml":Bp,"../../content/traits/knowledge/medicine.yaml":Vp,"../../content/traits/knowledge/metallurgy.yaml":Hp,"../../content/traits/knowledge/military-tactics.yaml":Up,"../../content/traits/knowledge/mongolian-written.yaml":Wp,"../../content/traits/knowledge/mongolian.yaml":Gp,"../../content/traits/knowledge/monsters-of-isekai.yaml":Kp,"../../content/traits/knowledge/mountaineering.yaml":qp,"../../content/traits/knowledge/music.yaml":Jp,"../../content/traits/knowledge/nepali-written.yaml":Yp,"../../content/traits/knowledge/nepali.yaml":Xp,"../../content/traits/knowledge/new-columbia.yaml":Zp,"../../content/traits/knowledge/new-persia.yaml":Qp,"../../content/traits/knowledge/noble-houses-of-dreft.yaml":$p,"../../content/traits/knowledge/odia-written.yaml":em,"../../content/traits/knowledge/odia.yaml":tm,"../../content/traits/knowledge/orc-society.yaml":nm,"../../content/traits/knowledge/oromo-written.yaml":rm,"../../content/traits/knowledge/oromo.yaml":im,"../../content/traits/knowledge/paraarcheology.yaml":am,"../../content/traits/knowledge/parabiology.yaml":om,"../../content/traits/knowledge/paraflora.yaml":sm,"../../content/traits/knowledge/paraphysics.yaml":cm,"../../content/traits/knowledge/parasapient-medicine.yaml":lm,"../../content/traits/knowledge/parasapients.yaml":um,"../../content/traits/knowledge/parazoology.yaml":dm,"../../content/traits/knowledge/pathology.yaml":fm,"../../content/traits/knowledge/persian-written.yaml":pm,"../../content/traits/knowledge/persian.yaml":mm,"../../content/traits/knowledge/pharmacology.yaml":hm,"../../content/traits/knowledge/planar-exploration.yaml":gm,"../../content/traits/knowledge/polish-written.yaml":_m,"../../content/traits/knowledge/polish.yaml":vm,"../../content/traits/knowledge/port-herminst.yaml":ym,"../../content/traits/knowledge/ports-and-stations.yaml":bm,"../../content/traits/knowledge/portuguese-written.yaml":xm,"../../content/traits/knowledge/portuguese.yaml":Sm,"../../content/traits/knowledge/psychology.yaml":Cm,"../../content/traits/knowledge/punjabi-written.yaml":wm,"../../content/traits/knowledge/punjabi.yaml":Tm,"../../content/traits/knowledge/robotics.yaml":Em,"../../content/traits/knowledge/romanian-written.yaml":Dm,"../../content/traits/knowledge/romanian.yaml":Om,"../../content/traits/knowledge/russian-written.yaml":km,"../../content/traits/knowledge/russian.yaml":Am,"../../content/traits/knowledge/sdu-law.yaml":jm,"../../content/traits/knowledge/seafaring.yaml":Mm,"../../content/traits/knowledge/shipping-lanes.yaml":Nm,"../../content/traits/knowledge/sinhala-written.yaml":Pm,"../../content/traits/knowledge/sinhala.yaml":Fm,"../../content/traits/knowledge/somali-written.yaml":Im,"../../content/traits/knowledge/somali.yaml":Lm,"../../content/traits/knowledge/sorellion.yaml":Rm,"../../content/traits/knowledge/southeast-asia.yaml":zm,"../../content/traits/knowledge/spanish-written.yaml":Bm,"../../content/traits/knowledge/spanish.yaml":Vm,"../../content/traits/knowledge/succession-law.yaml":Hm,"../../content/traits/knowledge/swahili-written.yaml":Um,"../../content/traits/knowledge/swahili.yaml":Wm,"../../content/traits/knowledge/tamil-written.yaml":Gm,"../../content/traits/knowledge/tamil.yaml":Km,"../../content/traits/knowledge/telugu-written.yaml":qm,"../../content/traits/knowledge/telugu.yaml":Jm,"../../content/traits/knowledge/tetra-frontiers-co.yaml":Ym,"../../content/traits/knowledge/tetra.yaml":Xm,"../../content/traits/knowledge/thai-written.yaml":Zm,"../../content/traits/knowledge/thai.yaml":Qm,"../../content/traits/knowledge/the-bureau-of-planar-management.yaml":$m,"../../content/traits/knowledge/the-chinese-empire.yaml":eh,"../../content/traits/knowledge/the-corporate-syndicates.yaml":th,"../../content/traits/knowledge/the-corsine-pass.yaml":nh,"../../content/traits/knowledge/the-diplomatic-wing.yaml":rh,"../../content/traits/knowledge/the-drovus-empire.yaml":ih,"../../content/traits/knowledge/the-explorers-lodge.yaml":ah,"../../content/traits/knowledge/the-free-american-states.yaml":oh,"../../content/traits/knowledge/the-imperial-military.yaml":sh,"../../content/traits/knowledge/the-kings-woods.yaml":ch,"../../content/traits/knowledge/the-lunar-industrial-syndicate.yaml":lh,"../../content/traits/knowledge/the-martian-association.yaml":uh,"../../content/traits/knowledge/the-stellar-democratic-union.yaml":dh,"../../content/traits/knowledge/the-sunrise-princedoms.yaml":fh,"../../content/traits/knowledge/the-switch-port.yaml":ph,"../../content/traits/knowledge/the-union-of-texas.yaml":mh,"../../content/traits/knowledge/the-united-nations.yaml":hh,"../../content/traits/knowledge/thieves-cant.yaml":gh,"../../content/traits/knowledge/toxicology.yaml":_h,"../../content/traits/knowledge/trade-law.yaml":vh,"../../content/traits/knowledge/trade-roads.yaml":yh,"../../content/traits/knowledge/turkish-written.yaml":bh,"../../content/traits/knowledge/turkish.yaml":xh,"../../content/traits/knowledge/ukrainian-written.yaml":Sh,"../../content/traits/knowledge/ukrainian.yaml":Ch,"../../content/traits/knowledge/union-politics.yaml":wh,"../../content/traits/knowledge/urdu-written.yaml":Th,"../../content/traits/knowledge/urdu.yaml":Eh,"../../content/traits/knowledge/uyghur-written.yaml":Dh,"../../content/traits/knowledge/uyghur.yaml":Oh,"../../content/traits/knowledge/vietnamese-written.yaml":kh,"../../content/traits/knowledge/vietnamese.yaml":Ah,"../../content/traits/knowledge/yoruba-written.yaml":jh,"../../content/traits/knowledge/yoruba.yaml":Mh,"../../content/traits/knowledge/yutu.yaml":Nh,"../../content/traits/knowledge/zhulong.yaml":Ph,"../../content/traits/other/possessed-by-a-spirit.yaml":Fh,"../../content/traits/skill/advanced-cooking.yaml":Ih,"../../content/traits/skill/advanced-potion-mixing.yaml":Lh,"../../content/traits/skill/ambusher.yaml":Rh,"../../content/traits/skill/animal-husbandry.yaml":zh,"../../content/traits/skill/appraisal.yaml":Bh,"../../content/traits/skill/artist-painting.yaml":Vh,"../../content/traits/skill/artist-sculpture.yaml":Hh,"../../content/traits/skill/cargo-handling.yaml":Uh,"../../content/traits/skill/concealment.yaml":Wh,"../../content/traits/skill/courtly-manners.yaml":Gh,"../../content/traits/skill/craft-leatherworking.yaml":Kh,"../../content/traits/skill/craft-masonry.yaml":qh,"../../content/traits/skill/craft-smithing.yaml":Jh,"../../content/traits/skill/disguise.yaml":Yh,"../../content/traits/skill/excavation.yaml":Xh,"../../content/traits/skill/expert-pilot.yaml":Zh,"../../content/traits/skill/field-sampling.yaml":Qh,"../../content/traits/skill/folk-remedies.yaml":$h,"../../content/traits/skill/haggler.yaml":eg,"../../content/traits/skill/incantation.yaml":tg,"../../content/traits/skill/intimidation.yaml":ng,"../../content/traits/skill/investigation.yaml":rg,"../../content/traits/skill/legal-advocacy.yaml":ig,"../../content/traits/skill/lockpicking.yaml":ag,"../../content/traits/skill/medical-aid.yaml":og,"../../content/traits/skill/military-drill.yaml":sg,"../../content/traits/skill/performer-acrobatics.yaml":cg,"../../content/traits/skill/performer-music.yaml":lg,"../../content/traits/skill/pilot-fighter.yaml":ug,"../../content/traits/skill/pilot-helicopter.yaml":dg,"../../content/traits/skill/pilot-truck.yaml":fg,"../../content/traits/skill/planar-surveying.yaml":pg,"../../content/traits/skill/programming.yaml":mg,"../../content/traits/skill/relic-handling.yaml":hg,"../../content/traits/skill/research.yaml":gg,"../../content/traits/skill/rider-basic-animals.yaml":_g,"../../content/traits/skill/schemer.yaml":vg,"../../content/traits/skill/shield-wall.yaml":yg,"../../content/traits/skill/simple-cooking.yaml":bg,"../../content/traits/skill/simple-potion-mixing.yaml":xg,"../../content/traits/skill/sleight-of-hand.yaml":Sg,"../../content/traits/skill/smooth-talker.yaml":Cg,"../../content/traits/skill/specimen-handling.yaml":wg,"../../content/traits/skill/starship-engineering.yaml":Tg,"../../content/traits/skill/streetwise.yaml":Eg,"../../content/traits/skill/surgery.yaml":Dg,"../../content/traits/skill/survivalist.yaml":Og,"../../content/traits/skill/teamster.yaml":kg,"../../content/traits/skill/tinkerer.yaml":Ag,"../../content/traits/skill/tracker.yaml":jg,"../../content/traits/skill/vigilance.yaml":Mg,"../../content/traits/skill/wielder-longsword.yaml":Ng,"../../content/traits/skill/wielder-musket.yaml":Pg,"../../content/traits/skill/wielder-pistol.yaml":Fg,"../../content/traits/skill/wielder-rifle.yaml":Ig,"../../content/traits/skill/wielder-war-axe.yaml":Lg})).map(([e,t])=>({path:e.slice(14),text:t}))),Mb=new Map(Ab.traits.map(e=>[e.id,e])),Nb=new Map(Ab.packages.map(e=>[e.id,e])),Pb=new Map(Ab.kinds.map(e=>[e.id,e])),Fb=[`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`,`twenty`,`twenty-one`,`twenty-two`,`twenty-three`,`twenty-four`,`twenty-five`],Ib=[`first`,`second`,`third`,`fourth`,`fifth`,`sixth`,`seventh`,`eighth`,`ninth`,`tenth`,`eleventh`,`twelfth`,`thirteenth`,`fourteenth`,`fifteenth`,`sixteenth`,`seventeenth`,`eighteenth`,`nineteenth`,`twentieth`,`twenty-first`,`twenty-second`,`twenty-third`,`twenty-fourth`,`twenty-fifth`],Lb=e=>[...e].sort((e,t)=>t.length-e.length).map(e=>e.replace(`-`,`[\\s-]`)).join(`|`),Rb=`(\\d{1,2}|${Lb(Fb)})`,zb=`(\\d{1,2})(?:st|nd|rd|th)|(${Lb(Ib)})`,Bb=RegExp(`\\b(?:level|lvl|lv)[\\s-]*${Rb}\\b`,`i`),Vb=RegExp(`\\b(?:${zb})[\\s-]+(?:level|lvl)\\b`,`i`);function Hb(e,t){if(!e)return;let n=/^\d+$/.test(e)?Number(e):t.indexOf(e.toLowerCase().replace(/\s+/,`-`))+1;return n>=1&&n<=25?n:void 0}function Ub(e){let t=Bb.exec(e);if(t)return Hb(t[1],Fb);let n=Vb.exec(e);if(n)return Hb(n[1],Ib)??Hb(n[2],Ib)}var Wb=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Q=e(((e,t)=>{t.exports=Wb()}))(),Gb=Object.keys(B),Kb=Gb.filter(e=>B[e].length>0),$=e=>e.charAt(0).toUpperCase()+e.slice(1),qb=e=>Mb.get(e)?.name??e,Jb=e=>`region-${e===`isekai`?`dreft`:`systems`}`,Yb=e=>Jb(Mb.get(e)?.plane),Xb=(e,t)=>`+${e} ${t.split(`-`).map($).join(` `)}`,Zb={isekai:{mark:`isekai`,name:`Isekai`},earth:{mark:`systems`,name:`The Systems`}};function Qb({plane:e}){let t=e?Zb[e]:void 0;return t?(0,Q.jsx)(`span`,{className:`setting-icon setting-${t.mark}`,role:`img`,"aria-label":t.name,title:t.name}):null}var $b=e=>e.package===void 0?qb(e.trait??``):Nb.get(e.package)?.name??e.package;function ex(e){return e.kind?Pb.get(e.kind)?.stats:void 0}function tx({step:e,title:t,children:n}){return(0,Q.jsxs)(`header`,{className:`step-head`,children:[(0,Q.jsx)(`h2`,{children:t}),(0,Q.jsx)(`div`,{className:`stinger-row`,children:(0,Q.jsxs)(`div`,{className:`copy stinger black`,children:[`Step `,$c.indexOf(e)+1,` of `,$c.length]})}),n&&(0,Q.jsx)(`p`,{className:`lede`,children:n})]})}function nx(e){return(0,Q.jsx)(`div`,{role:`radio`,"aria-checked":e.selected,"aria-label":e.label,tabIndex:0,className:`card${e.className?` ${e.className}`:``}${e.selected?` selected`:``}`,onClick:e.onSelect,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.onSelect())},children:e.children})}function rx(e){return(0,Q.jsx)(`span`,{className:`chip${e.tone?` chip-${e.tone}`:``}`,children:e.children})}var ix=20;function ax({bonus:e,value:t,max:n}){return(0,Q.jsx)(`div`,{className:`stat-line`,"aria-hidden":`true`,children:Array.from({length:ix},(r,i)=>{let a=i+1,o=a<=t?a>n?`over`:a<=e?`default`:`filled`:a<=n?`empty`:`unavailable`;return(0,Q.jsx)(`span`,{className:`stat ${a%2?`dot`:`square`} ${o}`},a)})})}function ox({bonus:e=0,value:t}){return(0,Q.jsx)(`div`,{className:`stat-line`,"aria-hidden":`true`,children:Array.from({length:ix},(n,r)=>(0,Q.jsx)(`span`,{className:`stat diamond ${r<e?`default`:r<t?`filled`:`empty`}`},r))})}function sx({stats:e}){return(0,Q.jsx)(`div`,{className:`stat-ranges`,children:Kb.map(t=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{className:`stat-ranges-group`,children:$(t)}),B[t].map(t=>(0,Q.jsxs)(`div`,{className:`stat-range`,children:[(0,Q.jsx)(`span`,{children:$(t)}),(0,Q.jsxs)(`span`,{className:`num`,children:[`+`,e[t]?.bonus,(0,Q.jsxs)(`span`,{className:`muted`,children:[`/`,e[t]?.max]})]})]},t))]},t))})}function cx({name:e,onChange:t,heading:n,className:r}){let[i,a]=(0,z.useState)(!1),[o,s]=(0,z.useState)(e??``),c=()=>{s(e??``),a(!0)},l=e=>{e&&t(o.trim()||void 0),a(!1)};return(0,Q.jsxs)(`div`,{className:`name-field-line ${r}`,children:[(0,Q.jsx)(n,{children:i?(0,Q.jsx)(`input`,{className:`name-input`,"aria-label":`Character name`,value:o,maxLength:80,placeholder:`Unnamed character`,autoFocus:!0,onChange:e=>s(e.target.value),onBlur:()=>l(!0),onKeyDown:e=>{e.key===`Enter`&&l(!0),e.key===`Escape`&&l(!1)}}):(0,Q.jsx)(`button`,{type:`button`,className:`name-text${e?``:` muted`}`,onClick:c,children:e||`Unnamed character`})}),(0,Q.jsx)(`button`,{type:`button`,className:`name-edit`,"aria-label":`Edit the name`,onMouseDown:e=>i&&e.preventDefault(),onClick:()=>i?l(!0):c(),children:(0,Q.jsx)(`span`,{className:`pen-icon`,"aria-hidden":`true`})})]})}var lx={left:`M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z`,right:`M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z`};function ux({to:e}){return(0,Q.jsx)(`svg`,{className:`arrow-icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:lx[e]})})}var dx={plus:`M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z`,minus:`M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z`};function fx({is:e}){return(0,Q.jsx)(`svg`,{className:`sign-icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:dx[e]})})}function px({label:e,level:t,onChange:n,disabled:r,className:i=``}){return(0,Q.jsxs)(`div`,{className:`level-stepper ${i}`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:e}),(0,Q.jsxs)(`div`,{className:`stepper`,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:()=>n(Math.max(1,t-1)),disabled:r||t<=1,"aria-label":`Lower level`,children:(0,Q.jsx)(fx,{is:`minus`})}),(0,Q.jsx)(`span`,{className:`num`,"aria-live":`polite`,children:t}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>n(Math.min(25,t+1)),disabled:r||t>=25,"aria-label":`Raise level`,children:(0,Q.jsx)(fx,{is:`plus`})})]})]})}var mx=[`origin`,`profession`,`past`],hx={origin:`Where you're from.`,profession:`What you do for a living.`,past:`What shaped you before the story starts.`};function gx(e){let t=e.map(e=>qb(e.trait)+(e.rank?` ${e.rank}`:``)),n=[];for(let e of t){let r=e.match(/^(.*) \((Spoken|Written)\)$/)?.[1],i=r!==void 0&&t.includes(`${r} (Spoken)`)&&t.includes(`${r} (Written)`)?`${r} (Spoken & Written)`:e;n.includes(i)||n.push(i)}return n}function _x({pkg:e}){return(0,Q.jsxs)(`div`,{className:`grants`,children:[(e.bonusPoints.length>0||Object.keys(e.coreBonus).length>0)&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Bonus`}),e.bonusPoints.map(e=>(0,Q.jsxs)(rx,{tone:`accent`,children:[`+`,e.count,` `,$(e.group),` `,e.count===1?`point`:`points`]},e.group)),Object.entries(e.coreBonus).map(([e,t])=>(0,Q.jsxs)(rx,{tone:`accent`,children:[`+`,t,` `,$(e)]},e))]}),e.grants.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Grants`}),gx(e.grants).map(e=>(0,Q.jsx)(rx,{tone:`accent`,children:e},e))]}),e.choices.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Choose`}),e.choices.map((e,t)=>(0,Q.jsx)(rx,{children:e.note??Xb(e.choose,e.from)},t))]}),e.backgroundTraits.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Background list`}),gx(e.backgroundTraits.map(e=>({trait:e}))).map(e=>(0,Q.jsx)(rx,{children:e},e))]}),e.features.map(e=>(0,Q.jsxs)(`p`,{children:[(0,Q.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.description]},e.name))]})}function vx({draft:e,onChange:t}){let[n,r]=(0,z.useState)(()=>({origin:!e.origin,profession:!e.profession,past:!e.past})),i=(e,t)=>r(n=>n[e]===t?n:{...n,[e]:t});(0,z.useEffect)(()=>i(`origin`,!e.origin),[e.origin]),(0,z.useEffect)(()=>i(`profession`,!e.profession),[e.profession]),(0,z.useEffect)(()=>i(`past`,!e.past),[e.past]);let a=(n,r)=>{let i=e[n],a=i===r?void 0:r,o=[i,a].some(e=>e&&Nb.get(e)?.bonusPoints.length);t({...e,[n]:a,choices:e.choices.filter(e=>e.package!==i),...o?{startPoints:void 0}:{}})};return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`background`,title:`Background`,children:`Pick an Origin, a Profession and a Past. Their Traits come free and don't use picks.`}),(0,Q.jsx)(`div`,{className:`tech-fields tech-fields-light step-box`,children:mx.map(t=>(0,Q.jsxs)(`details`,{className:`slot`,open:n[t],onToggle:e=>i(t,e.currentTarget.open),children:[(0,Q.jsx)(`summary`,{children:(0,Q.jsxs)(`h3`,{className:`subhead`,children:[$(t),` `,e[t]?(0,Q.jsx)(`span`,{className:`slot-pick`,children:Nb.get(e[t])?.name??e[t]}):(0,Q.jsx)(`span`,{className:`muted`,children:hx[t]}),(0,Q.jsx)(`span`,{className:`slot-toggle`,"aria-hidden":`true`,children:(0,Q.jsx)(fx,{is:n[t]?`minus`:`plus`})})]})}),(0,Q.jsx)(`div`,{className:`cards`,role:`radiogroup`,"aria-label":$(t),children:Ab.packages.filter(e=>e.type===t).map(n=>(0,Q.jsxs)(nx,{className:`headed ${Jb(n.plane)}`,label:n.name,selected:e[t]===n.id,onSelect:()=>a(t,n.id),children:[(0,Q.jsxs)(`div`,{className:`card-head`,children:[(0,Q.jsxs)(`h3`,{children:[(0,Q.jsx)(Qb,{plane:n.plane}),n.name]}),(0,Q.jsx)(rx,{tone:`muted`,children:n.plane})]}),(0,Q.jsx)(`p`,{children:n.summary}),(0,Q.jsx)(_x,{pkg:n})]},n.id))})]},t))})]})}var yx=[`systems`,`dreft`],bx={systems:`The Systems`,dreft:`Dreft`},xx=e=>e.region??(e.plane===`earth`?`systems`:e.plane),Sx=e=>yx.includes(e)?yx.indexOf(e):yx.length,Cx=[...new Set(Ab.kinds.map(xx))].sort((e,t)=>Sx(e)-Sx(t));function wx({draft:e,onChange:t}){return(0,Q.jsx)(`div`,{className:`tech-fields tech-fields-light step-box`,children:(0,Q.jsx)(`div`,{role:`radiogroup`,"aria-label":`Kind`,children:Cx.map(n=>(0,Q.jsxs)(`div`,{className:`kind-group`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:bx[n]??$(n)}),(0,Q.jsx)(`div`,{className:`cards`,children:Ab.kinds.filter(e=>xx(e)===n).map(n=>(0,Q.jsxs)(nx,{className:`kind-card headed ${Jb(n.plane)}`,label:n.name,selected:e.kind===n.id,onSelect:()=>t({...e,kind:e.kind===n.id?void 0:n.id,startPoints:void 0}),children:[(0,Q.jsxs)(`div`,{className:`card-head`,children:[(0,Q.jsxs)(`h3`,{children:[(0,Q.jsx)(Qb,{plane:n.plane}),n.name]}),(0,Q.jsx)(rx,{tone:`muted`,children:n.plane})]}),(0,Q.jsx)(`p`,{children:n.summary}),(0,Q.jsx)(sx,{stats:n.stats}),n.grants.length>0&&(0,Q.jsx)(`div`,{className:`grants`,children:(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Grants`}),n.grants.map(e=>(0,Q.jsx)(rx,{tone:`accent`,children:qb(e.trait)},e.trait))]})}),(0,Q.jsx)(`ul`,{className:`features`,children:n.features.map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.description]},e.name))})]},n.id))})]},n))})})}function Tx({draft:e,startingLevel:t,onChange:n,onStartingLevel:r}){return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`character`,title:`Character`,children:`Name your character, set the level your campaign starts at, and choose a Kind. Your GM sets the level; most campaigns start at 3. A Kind adds a bonus to each stat and sets how far each can go; numbers show bonus/max.`}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light step-box character-fields`,children:[(0,Q.jsxs)(`label`,{className:`field name-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Character Name`}),(0,Q.jsx)(`input`,{value:e.name??``,placeholder:`Unnamed character`,onChange:t=>n({...e,name:t.target.value||void 0})})]}),(0,Q.jsx)(px,{label:`Starting Level`,level:t,onChange:r})]}),(0,Q.jsx)(wx,{draft:e,onChange:n})]})}function Ex(e){let t=[];for(let n of[e.origin,e.profession,e.past]){let e=n?Nb.get(n):void 0;if(e)for(let n of e.choices){let r=t.find(t=>t.id===e.id&&t.from===n.from);r?(r.count+=n.choose,n.note&&r.notes.push(n.note)):t.push({by:`package`,id:e.id,name:e.name,from:n.from,count:n.choose,notes:n.note?[n.note]:[]})}}return t}var Dx=e=>e.by===`trait`?`Trait`:$(Nb.get(e.id)?.type??`package`),Ox=e=>e.by===`trait`?Mb.get(e.id)?.plane:Nb.get(e.id)?.plane;function kx({draft:e,result:t,onChange:n}){let r=t.summary?.questions??Ex(e),i=t=>e.choices.find(e=>Wc(e,t)),a=(t,r)=>{let i=e.choices.filter(e=>!Wc(e,t)),a={[t.by]:t.id,from:t.from,traits:r};n({...e,choices:[...i,a]})};return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`choices`,title:`Choices`,children:`Packages and some Traits ask you to choose, like who a Contact is, which language you speak, or which seas you've sailed.`}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light step-box`,children:[r.length===0&&(0,Q.jsx)(`p`,{className:`empty`,children:`This build's packages and Traits have no choices to answer.`}),(0,Q.jsx)(`div`,{className:`choice-grid`,children:r.map(e=>(0,Q.jsxs)(`div`,{className:`choice headed ${Jb(Ox(e))}`,children:[(0,Q.jsxs)(`div`,{className:`card-head`,children:[(0,Q.jsxs)(`h3`,{children:[(0,Q.jsx)(Qb,{plane:Ox(e)}),e.name]}),(0,Q.jsx)(rx,{tone:`muted`,children:Dx(e)})]}),(0,Q.jsx)(`p`,{children:e.notes.join(`; `)||Xb(e.count,e.from)}),(0,Q.jsx)(Ax,{q:e,answer:i(e)?.traits??[],onAnswer:t=>a(e,t)})]},`${e.by}/${e.id}/${e.from}`))})]})]})}function Ax({q:e,answer:t,onAnswer:n}){let r=Uc(e.from,Ab),i=Vc[e.from],a=Array.from({length:e.count},(e,n)=>t[n]??``),o=(e,t)=>{let r=a.slice();r[e]=t,n(r.filter(e=>e!==``))};if(i){let t=e.from===`contact`;return(0,Q.jsxs)(`div`,{className:`answer`,children:[(0,Q.jsx)(`p`,{className:`hint`,children:t?`Who is your ${i}? Write a name or a short note; it's yours to decide.`:`Write it in your own words; it's yours to decide.`}),a.map((n,r)=>(0,Q.jsx)(jx,{value:n,label:`${e.name} ${i} ${r+1}`,placeholder:t?void 0:`e.g. The Mende river and its delta`,onCommit:e=>o(r,e)},r))]})}return r.length>0?(0,Q.jsx)(`div`,{className:`answer`,children:a.map((t,n)=>(0,Q.jsxs)(`select`,{value:t,onChange:e=>o(n,e.target.value),"aria-label":`${e.name} ${e.from} choice ${n+1}`,children:[(0,Q.jsx)(`option`,{value:``,children:`Choose…`}),r.map(t=>(0,Q.jsx)(`option`,{value:t.id,children:e.from===`spoken-and-written-language`?t.name.replace(/ \(Spoken\)$/,``):t.name},t.id))]},n))}):(0,Q.jsxs)(`div`,{className:`answer`,children:[(0,Q.jsxs)(`p`,{className:`hint`,children:[`No Traits are in the “`,e.from,`” pool yet. Type a name: it's saved as an id, and the engine warns that it can't check it.`]}),a.map((t,n)=>(0,Q.jsx)(jx,{value:t,label:`${e.name} ${e.from} choice ${n+1}`,asId:!0,onCommit:e=>o(n,e)},n))]})}function jx({value:e,label:t,asId:n,placeholder:r,onCommit:i}){let[a,o]=(0,z.useState)(e&&n?qb(e):e),s=()=>i(n?_l(a):a.trim());return(0,Q.jsxs)(`div`,{className:`free-text`,children:[(0,Q.jsx)(`input`,{value:a,"aria-label":t,placeholder:r??(n?`e.g. Old Herminstan`:`e.g. Harbor Master Oyl, who owes me a favor`),onChange:e=>o(e.target.value),onBlur:s,onKeyDown:e=>e.key===`Enter`&&s()}),e&&n&&(0,Q.jsx)(`code`,{className:`muted`,children:e})]})}var Mx=class extends Error{kind;constructor(e,t){super(t),this.kind=e}},Nx={type:`object`,description:`Who the character is. The rules engine turns this into a full legal build. Every id must come from the game's content.`,properties:{name:{type:`string`,description:`The character's name, if the player gave one or one fits.`},kind:{type:`string`,description:`Kind id, e.g. isek.`},origin:{type:`string`,description:`Origin package id.`},profession:{type:`string`,description:`Profession package id.`},past:{type:`string`,description:`Past package id.`},focus:{type:`array`,items:{type:`string`,enum:mc.options},description:`The stats that matter most for this character, most important first (two to four). Stat points go to these.`},magic:{type:`integer`,minimum:0,description:`How many of the character's levels go to the Magic core stat, for a spellcaster or anyone magical. Only Kinds or packages that grant a Trait opening Magic (Magic Access, which every Kind of Dreft but the Orcoid Tatot gets through Magical Heritage) can use it. Each Magic level gives 3 MP but no focus points. Default 0.`},traits:{type:`array`,items:{type:`string`},description:`Trait ids that fit the character, best fit first. List more than the picks will cover (12 to 20): the engine buys them in order and skips any the build can't take. List a ranked Trait twice to ask for rank 2. Don't list Traits the packages already grant.`},choices:{type:`array`,description:`Optional answers to package or Trait choices with a pool, like languages (an Additional Language Trait asks which one). Any you leave out are filled in. Never answer Contacts.`,items:{type:`object`,properties:{package:{type:`string`,description:`The package that asks. Give this or trait, not both.`},trait:{type:`string`,description:`The Trait that asks, for a Trait's choice.`},from:{type:`string`,description:`The pool name, as the package or Trait lists it.`},traits:{type:`array`,items:{type:`string`}}},required:[`from`,`traits`]}}},required:[`kind`,`origin`,`profession`,`past`,`focus`,`traits`]},Px=[{name:`search_traits`,description:`Search the game's Traits by words in their name, summary or tags, and filter by category, tag and pick type. Call this to find Traits that fit the concept before picking them. For background picks, pass pick: "background" with the build's kind, origin, profession and past: only Traits on that build's Background Trait list come back.`,input_schema:{type:`object`,properties:{query:{type:`string`,description:`Words to look for, e.g. "sea trade". Leave out to list everything that passes the filters.`},category:{type:`string`,enum:Oc.options},tags:{type:`array`,items:{type:`string`},description:`Only Traits with at least one of these tags.`},pick:{type:`string`,enum:[`universal`,`background`],description:`Only Traits this kind of pick can buy.`},kind:{type:`string`},origin:{type:`string`},profession:{type:`string`},past:{type:`string`},limit:{type:`integer`,minimum:1,maximum:100,description:`Most results to return. Default 25.`}}}},{name:`list_packages`,description:`List the background packages of one type (origin, profession or past), with their summaries and tags.`,input_schema:{type:`object`,properties:{type:{type:`string`,enum:Tc.options}},required:[`type`]}},{name:`get_package`,description:`Get one background package in full: the Traits it grants, the choices it asks for (and whether their pools have Traits yet), and the Traits it adds to the Background Trait list. Choices marked leftForPlayer (like Contacts) are for the player to fill in.`,input_schema:{type:`object`,properties:{id:{type:`string`}},required:[`id`]}},{name:`get_kind`,description:`Get one Kind in full: its features, Trait access, and starting stats and maximums.`,input_schema:{type:`object`,properties:{id:{type:`string`}},required:[`id`]}},{name:`submit_build`,description:`Submit the character concept with a one-line reason for each choice. The rules engine spreads the stat points, buys Traits from your list in order and checks the result. If it's legal you're done; if not, the problems come back and you submit again.`,input_schema:{type:`object`,properties:{concept:Nx,summary:{type:`string`,description:`One or two sentences on who this character is, for the player.`},reasons:{type:`array`,description:`One short line per choice. Targets: kind, origin, profession, past, levels (why the priority stats), and each listed Trait's id.`,items:{type:`object`,properties:{target:{type:`string`},reason:{type:`string`}},required:[`target`,`reason`]}}},required:[`concept`,`summary`,`reasons`]}}],Fx=`player-choice`,Ix=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:void 0,Lx=e=>Array.isArray(e)?e:[],Rx=(e,t)=>Hc(e)||Uc(e,t).length===0,zx=(e,t)=>!!e&&e.from===t.from&&(t.package===void 0?e.trait===t.trait:e.package===t.package);function Bx(e,t){let n=Ix(e)??{},r=Qc(n,t).summary;if(r)return r.questions.filter(e=>Rx(e.from,t)).map(e=>({[e.by]:e.id,from:e.from,count:e.count,...e.notes.length?{note:e.notes.join(`; `)}:{}}));let i=[];for(let e of[`origin`,`profession`,`past`]){let r=t.packages.find(t=>t.id===n[e]&&t.type===e);for(let e of r?.choices??[]){if(!Rx(e.from,t))continue;let n=i.find(t=>t.package===r.id&&t.from===e.from);n?n.count+=e.choose:i.push({package:r.id,from:e.from,count:e.choose,note:e.note})}}return i}function Vx(e,t){let n=Ix(e);if(!n)return[];let r=[],i=new Set(t.traits.map(e=>e.id)),a=new Set(t.packages.map(e=>e.id)),o=e=>typeof e==`string`,s=o(n.kind)?t.kinds.find(e=>e.id===n.kind):void 0;o(n.kind)&&!s&&r.push({path:`kind`,message:`Kind "${n.kind}" doesn't exist`});for(let e of[`origin`,`profession`,`past`])o(n[e])&&!a.has(n[e])&&r.push({path:e,message:`Package "${n[e]}" doesn't exist`});Lx(n.traits).forEach((e,t)=>{let n=Ix(e)?.trait;o(n)&&!i.has(n)&&r.push({path:`traits[${t}]`,message:`Trait "${n}" doesn't exist`})});let c=Bx(n,t);return Lx(n.choices).forEach((e,t)=>{let n=Ix(e);if(n){if(o(n.package)&&!a.has(n.package)&&r.push({path:`choices[${t}]`,message:`Package "${n.package}" doesn't exist`}),o(n.trait)&&!i.has(n.trait)&&r.push({path:`choices[${t}]`,message:`Trait "${n.trait}" doesn't exist`}),c.some(e=>zx(n,e))){let e=Vc[String(n.from)];r.push({path:`choices[${t}]`,message:e?`The player writes in their own ${e} on the Choices step, so leave this choice out. Remove this answer.`:`No Traits exist in the "${String(n.from)}" pool yet, so this choice is left for the player. Remove this answer.`})}else for(let e of Lx(n.traits))o(e)&&!i.has(e)&&r.push({path:`choices[${t}]`,message:`Trait "${e}" doesn't exist`})}}),r}function Hx(e,t,n=Ic){let r=Vx(e,t),i=Qc(e,t,n),a=Bx(e,t),o=Ix(e),s=i,c=new Set;if(o&&a.some(e=>!Hc(e.from))){let e=Lx(o.choices),r=t=>e.some(e=>zx(Ix(e),t)),i=a.filter(e=>!r(e)&&!Hc(e.from)).map(e=>({...e.package===void 0?{trait:e.trait}:{package:e.package},from:e.from,traits:Array.from({length:e.count},(e,t)=>`${Fx}-${t+1}`)}));c=new Set(i.map((t,n)=>`choices[${e.length+n}]`)),s=Qc({...o,choices:[...e,...i]},t,n)}return{accepted:r.length===0&&s.ok,legal:r.length===0&&i.ok,unknownIds:r,errors:s.errors,warnings:s.warnings.filter(e=>!e.path||!c.has(e.path)),openChoices:a,summary:s.summary}}var Ux=e=>({id:e.id,name:e.name,category:e.category,summary:e.summary,tags:e.tags,types:e.types,ranked:e.ranked,rankStats:e.rankStats,prerequisites:e.prerequisites,background:e.background,starterOnly:e.starterOnly,conveyed:e.conveyed,choices:e.choices,...e.list?{list:e.list}:{},...e.opensLists.length?{opensLists:e.opensLists}:{}}),Wx=class extends Error{},Gx=e=>typeof e==`string`&&e.trim()!==``?e.trim():void 0;function Kx(e,t,n){let r=t.traits,i=Gx(e.category);i&&(r=r.filter(e=>e.category===i));let a=Lx(e.tags).filter(e=>typeof e==`string`);a.length&&(r=r.filter(e=>e.tags.some(e=>a.includes(e))));let o=Gx(e.pick);if(o&&(r=r.filter(e=>!e.conveyed)),o===`universal`&&(r=r.filter(e=>!e.background)),o===`background`){let i={kind:e.kind,origin:e.origin,profession:e.profession,past:e.past,level:n.startingLevel,levels:[]},a=Vx(i,t);if(a.length)throw new Wx(a.map(e=>e.message).join(`; `));let o=Qc(i,t,n).summary?.backgroundList;if(!o)throw new Wx(`For background picks, pass the build's kind, origin, profession and past.`);r=r.filter(e=>o.includes(e.id))}let s=(Gx(e.query)??``).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),c=r.map(e=>{let t=[e.id,e.name,e.summary,e.category,...e.tags,...e.types].join(` `).toLowerCase();return{t:e,score:s.filter(e=>t.includes(e)).length}}),l=typeof e.limit==`number`?Math.min(Math.max(1,e.limit),100):25,u=c.filter(e=>s.length===0||e.score>0).sort((e,t)=>t.score-e.score||e.t.name.localeCompare(t.t.name)).slice(0,l);return{count:u.length,traits:u.map(e=>Ux(e.t))}}function qx(e,t){let n=Gx(e.id),r=t.packages.find(e=>e.id===n);if(!r)throw new Wx(`No package "${n}". Known ids: ${t.packages.map(e=>e.id).join(`, `)}`);let i=e=>t.traits.find(t=>t.id===e)?.name??e;return{...r,grants:r.grants.map(e=>({...e,name:i(e.trait)})),choices:r.choices.map(e=>Rx(e.from,t)?{...e,leftForPlayer:!0}:{...e,pool:Uc(e.from,t).map(e=>({id:e.id,name:e.name}))}),backgroundTraits:r.backgroundTraits.map(e=>({id:e,name:i(e)}))}}function Jx(e,t){let n=Gx(e.id),r=t.kinds.find(e=>e.id===n);if(!r)throw new Wx(`No Kind "${n}". Known ids: ${t.kinds.map(e=>e.id).join(`, `)}`);return r}function Yx(e,t,n,r=Ic){let i=Ix(t)??{};switch(e){case`search_traits`:return Kx(i,n,r);case`list_packages`:{let e=Tc.safeParse(i.type);if(!e.success)throw new Wx(`type must be one of ${Tc.options.join(`, `)}`);return n.packages.filter(t=>t.type===e.data).map(e=>({id:e.id,name:e.name,summary:e.summary,tags:e.tags,region:e.region}))}case`get_package`:return qx(i,n);case`get_kind`:return Jx(i,n);default:throw new Wx(`Unknown tool "${e}"`)}}var Xx=`claude-opus-5-5`,Zx=`server-side-fallback-2026-07-01`,Qx=e=>!e.startsWith(`claude-haiku`),$x=e=>e.startsWith(`claude-haiku`)?`high`:`medium`;function eS(e,t=12,n=Xx){return{model:n,maxTurns:t,review:!0,start:t=>new tS(e,t,n)}}var tS=class{create;model;messages;system;constructor(e,t,n){this.create=e,this.model=n,this.system=[{type:`text`,text:t.instructions},{type:`text`,text:t.index,cache_control:{type:`ephemeral`}}],this.messages=[{role:`user`,content:t.user}]}async send(){let e=await this.create({model:this.model,max_tokens:16e3,tools:Px,system:this.system,messages:this.messages,thinking:{type:`adaptive`},output_config:{effort:$x(this.model)},cache_control:{type:`ephemeral`},...Qx(this.model)?{betas:[Zx],fallbacks:`default`}:{}}),t=e.usage,n={inputTokens:t.input_tokens,outputTokens:t.output_tokens,cacheReadTokens:t.cache_read_input_tokens??0,cacheWriteTokens:t.cache_creation_input_tokens??0};if(e.stop_reason===`refusal`)throw new Mx(`refused`,`Claude declined to build this character. Try describing it differently.`);if(e.stop_reason===`max_tokens`)throw new Mx(`truncated`,`Claude's response was cut off before it finished the build.`);return this.messages.push({role:`assistant`,content:e.content}),{calls:e.content.filter(e=>e.type===`tool_use`).map(e=>({id:e.id,name:e.name,input:e.input})),usage:n}}addResults(e){this.messages.push({role:`user`,content:e.map(e=>({type:`tool_result`,tool_use_id:e.call.id,content:e.content,...e.isError?{is_error:!0}:{}}))})}nudge(e){this.messages.push({role:`user`,content:e})}},nS=(e,t)=>L().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/,`must be a ${e} id like "${t}", not a name`),rS=As({name:L().optional(),kind:nS(`Kind`,`isek`),origin:nS(`package`,`dreft`),profession:nS(`package`,`guild-hunter`),past:nS(`package`,`countryside-upbringing`),focus:Os(L()).default([]),magic:vs().int().min(0).default(0),traits:Os(L()).default([]),choices:Os(Pc).default([])}),iS=Object.fromEntries(Object.entries(B).flatMap(([e,t])=>t.map(t=>[t,e]))),aS=e=>mc.safeParse(e).success;function oS(e,t){return t.kinds.find(t=>t.id===e.kind)?.stats}function sS(e,t,n,r=[]){let i=[...new Set(e.filter(aS))],a=Object.fromEntries(mc.options.map(e=>[e,t?.[e]?.bonus??0])),o=e=>Math.min(t?.[e]?.max??20,20)-a[e],s={},c=(e,t)=>{for(let n=0;n<e;n++){let e=i.filter(e=>t.includes(e)&&o(e)>0),r=e.length?e[n%e.length]:[...t].sort((e,t)=>o(t)-o(e))[0];if(!r||o(r)<=0)break;s[r]=(s[r]??0)+1,a[r]++}};for(let e of r)c(e.count,B[e.group]);return c(n,mc.options),s}var cS=3,lS=6,uS=5;function dS(e,t,n){let r=[...new Set(e.filter(aS))],i=Object.fromEntries(mc.options.map(e=>[e,t?.[e]?.bonus??0])),a=e=>Math.min(t?.[e]?.max??20,20),o=e=>a(e)-i[e],s=Object.keys(B).filter(e=>!r.some(t=>iS[t]===e)).sort((e,t)=>B[t].reduce((e,t)=>e+o(t),0)-B[e].reduce((e,t)=>e+o(t),0)),c=[...new Set(r.map(e=>iS[e]))],l=c.length?c:s,u=e=>B[e].reduce((e,t)=>e+o(t),0),d=[],f=e=>d.filter(t=>t.group===e).length,p=0;for(let e=0;e<n;e++){let t=e+1,n=t>=lS&&(t-lS)%uS===0,a=Object.keys(B).filter(e=>u(e)>=3).sort((e,t)=>f(e)-f(t)||u(t)-u(e))[0],c=n&&a?a:l[p++%l.length],m=[c,...l,...s].find(e=>u(e)>=3)??c,h=t>=cS&&f(m)%2==1,g=r.filter(e=>iS[e]===m),_=[...B[m]].filter(e=>!r.includes(e)),v={};for(let e=0;e<3;e++){let t=[...B[m]].filter(e=>o(e)>0).sort((e,t)=>i[e]-i[t]||o(t)-o(e))[0],n=h&&e===2&&t,r=g.filter(e=>o(e)>0),a=_.filter(e=>o(e)>0).sort((e,t)=>o(t)-o(e)),s=n||!g.length&&t?t:r.length?r[e%r.length]:a[0]??g[0]??_[0];v[s]=(v[s]??0)+1,i[s]++}d.push({group:m,points:v})}return d}function fS(e,t,n){let r=n.packages.find(e=>e.id===t.origin&&e.type===`origin`),i=e=>r?.region&&e.region===r.region?0:e.plane===r?.plane?1:e.plane===`any`?2:3;return[...e].sort((e,t)=>i(e)-i(t))}function pS(e,t){let n=[],r=new Set;for(let i of[`origin`,`profession`,`past`]){let a=t.packages.find(t=>t.id===e[i]&&t.type===i);if(!a)continue;for(let e of a.grants)r.add(e.trait);let o=new Map;for(let e of a.choices)o.set(e.from,(o.get(e.from)??0)+e.choose);for(let[i,s]of o){let o=fS(Uc(i,t),e,t);if(Hc(i)||o.length===0)continue;let c=new Set(o.map(e=>e.id)),l=e.choices.find(e=>e.package===a.id&&e.from===i)?.traits??[],u=[...new Set(l)].filter(e=>c.has(e)&&!r.has(e));for(let e of o)!u.includes(e.id)&&!r.has(e.id)&&u.push(e.id);let d=u.slice(0,s);d.forEach(e=>r.add(e)),n.push({package:a.id,from:i,traits:d})}}return n}function mS(e,t){let n=[];for(let r of[`origin`,`profession`,`past`]){let i=t.packages.find(t=>t.id===e[r]&&t.type===r),a=new Map;for(let e of i?.choices??[])a.set(e.from,(a.get(e.from)??0)+e.choose);for(let[e,r]of a)Hc(e)||Uc(e,t).length||n.push({package:i.id,from:e,traits:Array.from({length:r},(e,t)=>`player-choice-${t+1}`)})}return n}function hS(e,t){let n=new Map(t.traits.map(e=>[e.id,e])),r=new Map;for(let n of[`origin`,`profession`,`past`]){let i=t.packages.find(t=>t.id===e[n]&&t.type===n);for(let e of i?.grants??[])r.set(e.trait,Math.max(r.get(e.trait)??0,e.rank??1))}let i=new Map;for(let t of e.traits)i.set(t,(i.get(t)??0)+1);let a=[...e.focus];for(let[e,t]of i){let i=n.get(e);if(!(!i?.ranked||(r.get(e)??0)+t<2))for(let e of i.rankStats)a.includes(e)||a.push(e)}return a}var gS=(e,t)=>e.summary?.picks[t].banked??0;function _S(e,t,n=Ic){let r=rS.safeParse(e);if(!r.success)return{error:r.error.issues.map(e=>`${e.path.join(`.`)||`concept`}: ${e.message}`).join(`; `)};let i=r.data,a=new Map(t.traits.map(e=>[e.id,e])),o=hS(i,t),s=oS(i,t),c=Kc(t.kinds.find(e=>e.id===i.kind),[`origin`,`profession`,`past`].flatMap(e=>t.packages.filter(t=>t.id===i[e]&&t.type===e))),l=sS(o,s,c.any,c.groups),u=s&&Object.fromEntries(Object.entries(s).map(([e,t])=>[e,{...t,bonus:t.bonus+(l[e]??0)}])),d=Yc([...t.kinds.find(e=>e.id===i.kind)?.grants??[],...t.packages.filter(e=>[i.origin,i.profession,i.past].includes(e.id)).flatMap(e=>e.grants)].map(e=>e.trait),t).includes(`magic`)?Math.min(i.magic,n.startingLevel):0,f=Fc.parse({...i.name?{name:i.name}:{},kind:i.kind,origin:i.origin,profession:i.profession,past:i.past,level:n.startingLevel,startPoints:l,levels:[...dS(o,u,n.startingLevel-d),...Array.from({length:d},()=>({group:`magic`,points:{}}))],traits:[],choices:pS(i,t)}),p=mS(f,t),m=e=>Qc({...e,choices:[...e.choices,...p]},t,n),h=e=>{let n=m(e),r=new Set(n.summary?.traits.map(e=>e.trait)??[]),a=e.choices;for(let e of n.summary?.questions??[]){if(e.by!==`trait`||Hc(e.from))continue;let n=fS(Uc(e.from,t),i,t);if(n.length===0){p=[...p.filter(t=>!Wc(t,e)),{trait:e.id,from:e.from,traits:Array.from({length:e.count},(e,t)=>`player-choice-${t+1}`)}];continue}let o=a.find(t=>Wc(t,e))?.traits??[];if(o.length>=e.count)continue;let s=new Set(n.map(e=>e.id)),c=i.choices.find(t=>Wc(t,e))?.traits??[],l=[...o];for(let t of[...c,...n.map(e=>e.id)]){if(l.length>=e.count)break;s.has(t)&&!l.includes(t)&&!r.has(t)&&l.push(t)}a=[...a.filter(t=>!Wc(t,e)),{trait:e.id,from:e.from,traits:l}]}return{...e,choices:a}},g=m(f),_=[],v=[];if(!g.ok)return{build:f,taken:_,skipped:v,result:g};let y=e=>{let t=a.get(e);if(!t)return`Trait "${e}" doesn't exist`;let n=gS(g,`universal`),r=gS(g,`background`);if(n+r===0)return`no picks left`;let i=g.summary.traits.find(t=>t.trait===e);if(i&&!t.ranked)return`already held (from ${i.sources.join(`, `)})`;let o=g.summary.backgroundList.includes(e)&&r>0?`background`:!t.background&&n>0?`universal`:void 0;if(!o)return t.background?`${t.name} needs a background pick, and none fit`:`no universal picks left`;let s=p,c=h({...f,traits:[...f.traits,{trait:e,rank:(i?.rank??0)+1,pick:o}]}),l=m(c);if(!l.ok)return p=s,l.errors[0].message;f=c,g=l};for(let e of i.traits){let t=y(e);t?v.push({trait:e,reason:t}):_.push(e)}return{build:f,taken:_,skipped:v,result:g}}var vS=`You build player characters for Strange Frontiers, a tabletop RPG. A player describes the character they want; you choose who they are from the game's real content and explain each choice in one line. The rules engine does the bookkeeping: it spreads the stat points, buys Traits and checks that the result is legal.

How you work:
1. Read the description for the concept: who this person is, what they're good at, where they come from. If the player names a Kind, use it. If they don't, choose the Kind that fits best.
2. Choose from the content index below, which lists every Kind, package and Trait by id with its stats, grants and tags. It has what you need, so go straight to submit_build. The lookup tools (get_kind, get_package, list_packages, search_traits) are there only if something in the index is unclear.
3. Call submit_build with the concept, a one- or two-sentence summary of the character for the player, and a reason for each choice. If the engine sends problems back, fix them and submit again.

The concept:
- One Kind, one origin, one profession and one past.
- focus: the two to four stats that matter most for this character (its priority stats), most important first. The engine puts most of each level's stat points into these, and spreads a few into the other stats as the level rises, so a high-level character isn't helpless outside their specialty.
- magic: optional. How many levels go to the Magic core stat. Only a character holding a Trait that opens Magic can level it: Magic Access, which every Kind of Dreft but the Orcoid Tatot gets through its Magical Heritage. Each Magic level gives 3 MP (Mana Points) but no focus points, so it buys no Traits: give a spellcaster or a magical character one or two, and leave it at 0 for anyone else.
- traits: Trait ids that fit the character, best fit first. List 12 to 20, more than the picks will cover; the engine buys them in order and skips any the build can't take, so put the ones that matter most at the top. A Trait fits when it belongs in this character's life: what the description says or implies, and their Kind, home, work and past. Background picks only buy Traits from the packages' Background Traits (in the index), so include the ones there that fit. Picks left over are banked for later, so don't pad the list with Traits that don't belong. Don't list Traits the packages already grant (their Grants in the index). List a ranked Trait twice only if rank 2 matters.
- choices: optional. Package and Trait choices with a pool, like languages (an Additional Language asks which one), are filled in for you; answer one only to pick a specific Trait from its pool, naming the package or the Trait that asks. Contacts and Places (like which seas Seafaring covers) are written in by the player, so never answer a Contact or Place choice.

Rules you must follow:
- Use only ids that exist in the content. Never invent a Kind, package or Trait. Unknown ids are rejected in code.
- Don't work out stat points or pick counts yourself. That's the engine's job.
- A Trait on a list (marked "magic list" in the index) can only be taken by a character holding a Trait that opens that list (marked "opens the magic list", like Magic Access, which most Kinds of Dreft get through their Magical Heritage; a Trait that grants an opener counts too). Don't list them for anyone else.

Reasons: give one short line per choice, in plain words a player would use, tied to what they asked for. Targets are kind, origin, profession, past, levels (one line on why the priority stats), and each listed Trait's id.

Most content is early and its effect text is placeholder, so judge fit by names, summaries and tags.`,yS=Object.values(B).flat(),bS=e=>yS.map(t=>`${t} ${e[t]?.bonus}/${e[t]?.max}`).join(`, `);function xS(e){let t=[`# Content index`,``,`Stats are listed as Kind bonus/max. Every stat starts at 0 and the Kind adds its bonus.`,``,`## Kinds`];for(let n of e.kinds){let e=n.grants.map(e=>e.trait).join(`, `),r=Object.entries(n.resources).map(([e,t])=>`+${t} ${e.toUpperCase()}`).join(`, `);t.push(`- ${n.id}: ${n.name}. ${n.summary} Tags: ${n.tags.join(`, `)||`none`}. Trait access: ${n.traitAccess.join(`, `)||`none`}.${e?` Grants: ${e}.`:``}${r?` Resources: ${r}.`:``}`),t.push(`  Stats: ${bS(n.stats)}${n.freePoints?`. Plus ${n.freePoints} free bonus points, placed by the engine`:``}`)}for(let n of[`origin`,`profession`,`past`]){t.push(``,`## ${n[0].toUpperCase()}${n.slice(1)}s`);for(let r of e.packages.filter(e=>e.type===n)){let e=r.grants.map(e=>e.rank?`${e.trait} ${e.rank}`:e.trait).join(`, `),n=r.choices.map(e=>`${e.choose} from ${e.from}`).join(`, `);t.push(`- ${r.id}: ${r.name}${r.region?` (${r.region})`:``}. ${r.summary} Tags: ${r.tags.join(`, `)||`none`}. Grants: ${e||`none`}.${n?` Choices: ${n}.`:``}${r.bonusPoints.length?` Bonus points (placed by the engine): ${r.bonusPoints.map(e=>`${e.count} ${e.group}`).join(`, `)}.`:``}${Object.keys(r.coreBonus).length?` Core bonus: ${Object.entries(r.coreBonus).map(([e,t])=>`+${t} ${e}`).join(`, `)} (if the character can level it).`:``}${r.backgroundTraits.length?` Background Traits: ${r.backgroundTraits.join(`, `)}.`:``}`)}}t.push(``,`## Traits`,`Format: id: name [category; flags] summary`);for(let n of e.traits){let e=[n.ranked?`ranked by ${n.rankStats.join(`+`)||`nothing`}`:``,n.background?`background`:``,n.starterOnly?`starter only`:``,n.conveyed?`conveyed, packages only`:``,n.list?`${n.list} list`:``,n.opensLists.length?`opens the ${n.opensLists.join(`, `)} list`:``,n.grants.length?`grants ${n.grants.map(e=>e.trait).join(`, `)}`:``,n.prerequisites.length?`needs ${n.prerequisites.join(`, `)}`:``,n.prerequisiteTags.length?`needs a Trait tagged ${n.prerequisiteTags.join(`, `)}`:``,Object.keys(n.minStats).length?`min ${Object.entries(n.minStats).map(([e,t])=>`${e} ${t}`).join(`, `)}`:``,n.temporary?`temporary`:``,n.types.length?`types ${n.types.join(`, `)}`:``,n.choices.length?`choices ${n.choices.map(e=>`${e.choose} from ${e.from}${n.ranked&&e.perRank!==!1?` per rank`:``}`).join(`, `)}`:``].filter(Boolean);t.push(`- ${n.id}: ${n.name} [${[n.category,...e].join(`; `)}] ${n.summary} Tags: ${n.tags.join(`, `)||`none`}.`)}return t.join(`
`)}function SS(e,t,n){let r=kS(t)??{},i=typeof r.id==`string`?r.id:``;switch(e){case`get_kind`:return`Looking up the ${n.kinds.find(e=>e.id===i)?.name??i} Kind`;case`get_package`:return`Reading ${n.packages.find(e=>e.id===i)?.name??i}`;case`list_packages`:return`Listing ${String(r.type??`package`)}s`;case`search_traits`:return typeof r.query==`string`&&r.query.trim()?`Searching Traits for "${r.query.trim()}"`:`Searching Traits`;case`submit_build`:return`Submitting the build`;default:return e}}var CS=e=>{let t=e.replace(/\s+/g,` `).trim();return t.length>160?`…${t.slice(-160)}`:t};function wS(e){let t=new Set;for(let n of[`kind`,`origin`,`profession`,`past`])typeof e[n]==`string`&&t.add(n);t.add(`levels`);for(let n of Array.isArray(e.traits)?e.traits:[])typeof n?.trait==`string`&&t.add(n.trait);for(let n of Array.isArray(e.choices)?e.choices:[])t.add(`choice:${n?.package??n?.trait}/${n?.from}`);return t}function TS(e){let t=e.summary?.picks.universal;if(!(!t||t.banked<=2))return`${t.banked} of ${t.available} universal picks are unspent`}var ES=(e,t)=>{let n=wS(e);return t.filter(e=>n.has(e.target))};function DS(e){return Array.isArray(e)?e.filter(e=>typeof e?.target==`string`&&typeof e?.reason==`string`).map(e=>({target:e.target,reason:e.reason.trim()})):[]}var OS=e=>e.filter(e=>e.reason!==`no picks left`),kS=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:void 0;async function AS(e){let{content:t,provider:n}=e,r=e.campaign??Ic,i=e.maxTurns??n.maxTurns,a=0,o=t=>e.onProgress?.({turn:a,maxTurns:i,status:t}),s=0,c=e.onProgress?e=>{let t=Date.now();t-s<400||(s=t,o(`Thinking: ${CS(e)}`))}:void 0,l={inputTokens:0,outputTokens:0,cacheReadTokens:0,cacheWriteTokens:0},u=n.start({instructions:vS,index:xS(t),user:`The campaign starts characters at level ${r.startingLevel}.\n\n`+(e.name?.trim()?`The player has named this character "${e.name.trim()}". Use that name.\n\n`:``)+`<player_description>\n${e.description.trim()}\n</player_description>`}),d,f=!1,p=!1,m=!1,h=new Map,g=!1,_=(e,t)=>({status:e,model:n.model,build:d?.build,summary:d?.summary,reasons:d?.reasons??[],check:d?.check,turns:t,usage:l});for(let s=1;s<=i;s++){a=s,o(`Thinking`);let{calls:i,usage:v}=await u.send(c,{think:!g});if(e.onTurn?.(s,i),i.length&&o(i.map(e=>SS(e.name,e.input,t)).join(` · `)),l.inputTokens+=v.inputTokens??0,l.outputTokens+=v.outputTokens??0,l.cacheReadTokens+=v.cacheReadTokens??0,l.cacheWriteTokens+=v.cacheWriteTokens??0,i.length===0){u.nudge(`Call submit_build with the concept, a summary and a reason for each choice.`);continue}let y=[];for(let e of i)if(e.name===`submit_build`){let i=kS(e.input)??{},a=kS(i.concept),c=DS(i.reasons),l=typeof i.summary==`string`?i.summary.trim():void 0;if(!a){y.push({call:e,isError:!0,content:`submit_build needs a concept object.`});continue}g=!0;let u;try{u=_S(a,t,r)}catch(e){if(!(e instanceof Ao))throw e;u={error:e.issues.map(e=>`${e.path.join(`.`)||`concept`}: ${e.message}`).join(`; `)}}if(`error`in u){y.push({call:e,isError:!0,content:`The concept doesn't match the format: ${u.error}`});continue}let v=Hx(u.build,t,r);for(let e of c)h.set(e.target,e);d={build:u.build,check:v,summary:l??d?.summary,reasons:[...h.values()]};let b={taken:u.taken,skipped:OS(u.skipped)},x=v.accepted?TS(v):void 0;if(v.accepted&&n.review&&!p){o(`Build is legal; reviewing it against the description`),p=!0,y.push({call:e,isError:!0,content:JSON.stringify({rejected:!0,review:`The engine built a legal character. Before it's final, check it against the player's description: drop any Trait that doesn't belong in this character's life, and spend unspent picks on Traits that do: skills of their trade, knowledge of their home and past, things the description implies. Leave a pick banked only when nothing else plausibly fits. Give every choice a reason. Then call submit_build with the final concept, summary and reasons.`,...x?{banked:x}:{},...b})});continue}if(x&&!f&&!n.review){o(`Build is legal; asking for more Traits`),f=!0;let t=`The engine built a legal character, but ${x}: the Trait list ran out. Submit again with the same concept and more Traits that fit added to the list.`;y.push({call:e,isError:!0,content:JSON.stringify({rejected:!0,picks:t,...b})});continue}let S=v.accepted?[...wS(u.build)].filter(e=>!e.startsWith(`choice:`)&&!h.has(e)):[];if(S.length&&!m){o(`Build is legal; asking for its reasons`),m=!0;let t=`The build is legal, but these choices have no reason yet: ${S.join(`, `)}. Call submit_build again with the same concept, a summary, and a one-line reason for each of them.`;y.push({call:e,isError:!0,content:JSON.stringify({rejected:!0,reasonsNeeded:t})});continue}if(v.accepted)return d.reasons=ES(u.build,d.reasons),o(`Done`),_(`accepted`,s);o(`The engine sent the concept back with ${v.errors.length+v.unknownIds.length} problems; fixing them`),y.push({call:e,isError:!0,content:JSON.stringify({rejected:!0,unknownIds:v.unknownIds,errors:v.errors,...b})})}else try{let n=Yx(e.name,e.input,t,r);y.push({call:e,content:JSON.stringify(n)})}catch(t){if(!(t instanceof Wx))throw t;y.push({call:e,isError:!0,content:t.message})}u.addResults(y)}return d?.check.accepted?(d.reasons=ES(d.build,d.reasons),_(`accepted`,i)):_(`turn-limit`,i)}var jS=class extends Error{error;constructor(e,t){super(t),this.error=e}};function MS(e,t=(e,t)=>fetch(e,t)){return async n=>{let r;try{r=await t(e,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(n)})}catch{throw new jS(`server`,`Couldn't reach the AI server. Check your connection, or start it with npm run dev when working locally.`)}let i=await r.json().catch(()=>void 0);if(!r.ok){let e=i;throw new jS(e?.error??`api`,e?.message??`The AI server answered ${r.status} with no details.`)}return i}}async function NS(e){let t=eS(MS(e.endpoint,e.fetcher),void 0,e.model);try{return await AS({description:e.description,name:e.name,content:e.content,campaign:{startingLevel:(e.levelFromText===!1?void 0:Ub(e.description))??e.startingLevel},provider:t,onProgress:e.onProgress})}catch(e){if(e instanceof jS)return{error:e.error,message:e.message};if(e instanceof Mx)return{error:e.kind===`refused`?`refused`:e.kind===`unavailable`?`unavailable`:`api`,message:e.message};throw e}}async function PS(e,t){if(!e.headers.get(`content-type`)?.includes(`ndjson`)||!e.body)return await e.json().catch(()=>void 0);let n=e.body.pipeThrough(new TextDecoderStream).getReader(),r=``,i,a=e=>{if(!e.trim())return;let n=JSON.parse(e);n.type===`progress`?t(n):i=n.type===`result`?n.result:n.error};for(;;){let{value:e,done:t}=await n.read();if(t)break;r+=e;let i=r.split(`
`);r=i.pop()??``,i.forEach(a)}return a(r),i}function FS(e,t){if(e===`kind`)return`Kind: ${Pb.get(t.kind??``)?.name??t.kind}`;if(e===`origin`||e===`profession`||e===`past`){let n=t[e];return`${$(e)}: ${Nb.get(n??``)?.name??n}`}if(e===`levels`)return`Stats`;if(e.startsWith(`choice:`)){let[t,n]=e.slice(7).split(`/`);return`${Nb.get(t??``)?.name??qb(t??``)} choice (${n})`}return qb(e)}async function IS({description:e,level:t,name:n},r){let i;try{i=await fetch(`api/describe`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({description:e,startingLevel:t,exactLevel:!0,name:n})})}catch{throw Error(`Couldn't reach the AI server. Start it with npm run dev.`)}let a=await PS(i,r);if(!a)throw Error(`The AI server answered ${i.status} with no details. Is npm run dev running?`);return a}var LS=(e,t)=>({route:`browser`,endpoint:`creator-api.php`,model:`claude-haiku-5-5`}).route===`browser`?NS({description:e.description,startingLevel:e.level,levelFromText:!1,name:e.name,content:Ab,endpoint:{route:`browser`,endpoint:`creator-api.php`,model:`claude-haiku-5-5`}.endpoint,model:{route:`browser`,endpoint:`creator-api.php`,model:`claude-haiku-5-5`}.model,onProgress:t}):IS(e,t),RS=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function zS({notes:e,showNotes:t,startingLevel:n,hasBuild:r,onBuilt:i,draft:a,actions:o}){let[s,c]=(0,z.useState)(e?.description??``),[l,u]=(0,z.useState)(e?.name??``),[d,f]=(0,z.useState)(n);(0,z.useEffect)(()=>f(n),[n]);let p=e=>{c(e);let t=Ub(e);t&&f(t)},[m,h]=(0,z.useState)(!1),[g,_]=(0,z.useState)(),[v,y]=(0,z.useState)(),[b,x]=(0,z.useState)(!1),S=(0,z.useRef)(0),[ee,te]=(0,z.useState)(0),C=()=>Math.round((Date.now()-S.current)/1e3);return(0,z.useEffect)(()=>{if(!m)return;let e=setInterval(()=>te(C()),1e3);return()=>clearInterval(e)},[m]),(0,Q.jsxs)(`section`,{className:`describe`,"aria-label":`Describe your character`,children:[(0,Q.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),s.trim()&&!m){if(r&&!b)x(!0);else{x(!1),S.current=Date.now(),te(0),h(!0),y(void 0),_(void 0);try{let e=l.trim()||void 0,t=await LS({description:s,level:d,name:e},_);if(`error`in t)throw Error(t.message);if(!t.build)throw Error(`The model didn't propose a build. Try again, or describe the character differently.`);i(e?{...t,build:{...t.build,name:e}}:t,s,C(),e)}catch(e){let t=e instanceof Error?e.message:String(e);y(`${t} (after ${RS(C())})`)}finally{h(!1)}}}},children:[(0,Q.jsxs)(`div`,{className:`describe-intro`,children:[(0,Q.jsx)(`h3`,{className:`copy-title`,children:`Describe your character`}),(0,Q.jsx)(`p`,{className:`hint`,children:`Say who they are in your own words. The AI picks from the game's real Kinds, packages and Traits, the rules engine checks every choice, and you can change anything afterward.`})]}),(0,Q.jsxs)(`div`,{className:`describe-controls`,children:[(0,Q.jsxs)(`div`,{className:`describe-fields`,children:[(0,Q.jsxs)(`label`,{className:`describe-field describe-name`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Character Name`}),(0,Q.jsx)(`input`,{className:`rpg-search-input`,value:l,maxLength:80,placeholder:`Leave blank to let the builder name them`,onChange:e=>u(e.target.value),disabled:m})]}),(0,Q.jsx)(px,{className:`describe-level`,label:`Level`,level:d,onChange:f,disabled:m}),(0,Q.jsxs)(`label`,{className:`describe-field describe-text`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,Q.jsx)(`textarea`,{className:`rpg-search-input`,value:s,rows:3,maxLength:4e3,placeholder:`e.g. A goblin who failed out of the mage schools and now patches up caravan guards with whatever grows by the road.`,onChange:e=>p(e.target.value),disabled:m})]})]}),(0,Q.jsxs)(`div`,{className:`describe-actions`,children:[(0,Q.jsx)(`button`,{type:`submit`,className:`primary build-button`,disabled:m||!s.trim(),"aria-busy":m,children:m?(0,Q.jsxs)(Q.Fragment,{children:[`Building`,(0,Q.jsx)(`span`,{className:`stopwatch-icon`,"aria-hidden":`true`}),(0,Q.jsx)(`span`,{className:`num`,"aria-label":`${ee} seconds`,children:RS(ee)})]}):b?`Replace it`:`Build it`}),o,b&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:`hint`,children:`This replaces the current build.`}),(0,Q.jsx)(`button`,{type:`button`,className:`link`,onClick:()=>x(!1),children:`Cancel`})]}),m&&(0,Q.jsx)(`span`,{className:`describe-progress muted`,title:g?.status,children:g?`Turn ${g.turn} of ${g.maxTurns} · ${g.status}`:`Starting…`})]})]})]}),v&&(0,Q.jsxs)(`div`,{className:`notice bad`,role:`alert`,children:[v,(0,Q.jsx)(`button`,{className:`link`,onClick:()=>y(void 0),"aria-label":`Dismiss error`,children:`✕`})]}),e&&t&&!m&&(0,Q.jsxs)(`div`,{className:`describe-result`,children:[(0,Q.jsxs)(`p`,{className:`describe-status ${e.status===`accepted`?`good`:`bad`}`,children:[e.seconds!==void 0&&(0,Q.jsxs)(`strong`,{children:[`Build finished in `,RS(e.seconds),`. `]}),e.status===`accepted`?`Built from your description. Edit anything below; the panel keeps checking.`:`The builder ran out of turns before the build was legal. The panel shows what's left to fix.`]}),e.summary&&(0,Q.jsx)(`p`,{children:e.summary}),(0,Q.jsxs)(`details`,{className:`lore-details`,children:[(0,Q.jsxs)(`summary`,{className:`line-container`,children:[(0,Q.jsx)(`h5`,{children:(0,Q.jsx)(`strong`,{children:`Details`})}),(0,Q.jsx)(`div`,{className:`line`})]}),e.openChoices.length>0&&(0,Q.jsxs)(`p`,{className:`hint`,children:[`Left for you on the Choices step:`,` `,e.openChoices.map(e=>`${e.note??Xb(e.count,e.from)} (${$b(e)})`).join(`; `),`.`]}),(0,Q.jsx)(`ul`,{className:`ai-reasons`,children:e.reasons.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:FS(e.target,a)}),` `,e.reason]},t))})]})]})]})}function BS({draft:e,onChange:t}){let n=ex(e),r=[e.origin,e.profession,e.past].flatMap(e=>e&&Nb.get(e)?[Nb.get(e)]:[]),i=Kc(e.kind?Pb.get(e.kind):void 0,r),a=e.startPoints??{},o=e=>B[e].reduce((e,t)=>e+(a[t]??0),0),s=e=>i.groups.find(t=>t.group===e)?.count??0,c=i.groups.reduce((e,t)=>e+Math.min(o(t.group),t.count),0),l=Object.values(a).reduce((e,t)=>e+(t??0),0),u=Math.max(0,i.any-(l-c)),d=e=>Math.max(0,s(e)-o(e))+u,f=e=>Object.keys(B).find(t=>B[t].includes(e)),p=Gb.reduce((t,n)=>t+e.core[n],0),m=e.level-p,h=yl(e,Ab),g=bl(e,Ab),_=t=>B[t].reduce((t,n)=>t+(e.points[n]??0),0),v=e=>n?.[e]?.bonus??0,y=e=>v(e)+(a[e]??0),b=t=>y(t)+(e.points[t]??0),x=(n,r)=>{let i={...a},o={...e.points};r>0?d(f(n))>0?i[n]=(i[n]??0)+1:o[n]=(o[n]??0)+1:o[n]?--o[n]:i[n]&&--i[n],i[n]||delete i[n],o[n]||delete o[n],t({...e,startPoints:i,points:o})};return n?(0,Q.jsxs)(`section`,{children:[(0,Q.jsxs)(tx,{step:`stats`,title:`Stats`,children:[`Each level gives a core point. Level a group's core stat with the + beside its number to unlock `,3,` focus points for its stats, then spend them with each stat's +. A group's stats can't take points until its core stat is leveled. Your stats start at 0, and your Kind's bonus is added on top, in purple; your points show in green.`]}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light step-box`,children:[(0,Q.jsxs)(`p`,{className:`pool-summary`,children:[(0,Q.jsxs)(`span`,{className:`num${m===0?` good`:m<0?` bad`:``}`,children:[p,`/`,e.level]}),` `,`core points placed`,m>0&&(0,Q.jsxs)(`span`,{className:`muted`,children:[` · `,m,` left`]}),i.groups.map(e=>(0,Q.jsxs)(`span`,{children:[` · `,(0,Q.jsxs)(`span`,{className:`num${o(e.group)>=e.count?` good`:``}`,children:[Math.min(o(e.group),e.count),`/`,e.count]}),` `,$(e.group),` bonus `,e.count===1?`point`:`points`,` placed`,(0,Q.jsxs)(`span`,{className:`muted`,children:[` (from `,e.from.join(` and `),`, spent first)`]})]},e.group)),i.any>0&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,(0,Q.jsxs)(`span`,{className:`num${u===0?` good`:``}`,children:[i.any-u,`/`,i.any]}),` `,`free bonus points placed`,(0,Q.jsx)(`span`,{className:`muted`,children:` (spent first, on any stat)`})]})]}),(0,Q.jsx)(`div`,{className:`pool-stats`,children:h.map(i=>{let a=e.core[i],o=a*3,s=_(i);if(!B[i].length){let n=m>0&&g.includes(i),o=g.includes(i)?r.reduce((e,t)=>e+(t.coreBonus[i]??0),0):0;return(0,Q.jsxs)(`div`,{className:`sheet-group${a===0&&!n?` locked`:``}`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsxs)(`div`,{className:`core-control`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core stat`,children:a+o}),(0,Q.jsx)(`button`,{"aria-label":`Take a core point from ${i}`,onClick:()=>t(dl(e,i,a-1)),disabled:a===0,children:(0,Q.jsx)(fx,{is:`minus`})}),(0,Q.jsx)(`button`,{"aria-label":`Put a core point in ${i}`,title:m>0&&!g.includes(i)?`This character can't level ${$(i)}`:void 0,onClick:()=>t(dl(e,i,a+1)),disabled:!n,children:(0,Q.jsx)(fx,{is:`plus`})})]}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(i)}),(0,Q.jsxs)(`span`,{className:`num${a+o===0?` muted`:``}`,children:[3*(a+o),` MP`]})]}),(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsx)(`div`,{className:`tiny-text`,children:(0,Q.jsxs)(`strong`,{children:[`Each point in `,$(i),` adds `,3,` MP (Mana Points)`]})}),(0,Q.jsx)(ox,{bonus:o,value:a+o})]}),!g.includes(i)&&(0,Q.jsxs)(`p`,{className:`hint`,children:[`This character can't level `,$(i),`; take these points back.`]})]},i)}let c=d(i)+Math.max(0,o-s),l=c===0&&s===0,u=B[i].reduce((e,t)=>e+Math.max(0,(n[t]?.max??0)-b(t)),0)-Math.max(0,o-s),f=m>0&&u>=3,p=Math.max(0,s-(a-1)*3);return(0,Q.jsxs)(`div`,{className:`sheet-group${l?` locked`:``}`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsxs)(`div`,{className:`core-control`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core stat`,children:a}),(0,Q.jsx)(`button`,{"aria-label":`Take a core point from ${i}`,title:a>0&&p?`Also takes back ${p} focus ${p===1?`point`:`points`}`:void 0,onClick:()=>t(dl(e,i,a-1)),disabled:a===0,children:(0,Q.jsx)(fx,{is:`minus`})}),(0,Q.jsx)(`button`,{"aria-label":`Put a core point in ${i}`,title:m>0&&!f?`${$(i)}'s stats have no room for 3 more points`:void 0,onClick:()=>t(dl(e,i,a+1)),disabled:!f,children:(0,Q.jsx)(fx,{is:`plus`})})]}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(i)}),(0,Q.jsxs)(`span`,{className:`num${a===0?` muted`:s===o?` good`:s>o?` bad`:``}`,children:[s,`/`,o]})]}),a===0&&!f&&u<3&&(0,Q.jsx)(`p`,{className:`hint`,children:`These stats have no room for points.`}),B[i].map(e=>{let t=b(e),r=n[e]?.max??0,i=Math.max(0,Math.min(c,r-t));return(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsxs)(`div`,{className:`tiny-text`,children:[(0,Q.jsxs)(`strong`,{children:[$(e),` - `,t]}),i>0&&(0,Q.jsxs)(`span`,{className:`stat-spend muted`,children:[`Spend `,i,` `,i===1?`point`:`points`]})]}),(0,Q.jsxs)(`div`,{className:`pool-stat-row`,children:[(0,Q.jsxs)(`div`,{className:`stat-buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Take a point from ${e}`,onClick:()=>x(e,-1),disabled:t<=v(e),children:(0,Q.jsx)(fx,{is:`minus`})}),(0,Q.jsx)(`button`,{"aria-label":`Add a point to ${e}`,onClick:()=>x(e,1),disabled:c===0||t>=r,children:(0,Q.jsx)(fx,{is:`plus`})})]}),(0,Q.jsx)(ax,{bonus:y(e),value:t,max:r})]})]},e)})]},i)})})]})]}):(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`stats`,title:`Stats`}),(0,Q.jsx)(`p`,{className:`empty`,children:`Choose a Kind first; it adds a bonus to each stat and sets how far each can go.`})]})}var VS=/^(kind|origin|profession|past) ([a-z0-9-]+)( choice)?$/,HS=/^trait ([a-z0-9-]+) choice$/,US=/^trait ([a-z0-9-]+)$/;function WS(e){let t=HS.exec(e);if(t)return`${qb(t[1])} (choice)`;let n=US.exec(e);if(n)return qb(n[1]);let r=VS.exec(e);return r?`${(r[1]===`kind`?Pb.get(r[2])?.name:Nb.get(r[2])?.name)??r[2]} (${r[1]}${r[3]??``})`:e}function GS({held:e,places:t}){let n=Mb.get(e.trait);return(0,Q.jsxs)(`div`,{className:`trait-box ${Yb(e.trait)}`,children:[(0,Q.jsxs)(`div`,{className:`trait-name`,children:[(0,Q.jsx)(Qb,{plane:n?.plane}),qb(e.trait),n?.ranked||e.rank>1?` (${e.rank})`:``]}),(0,Q.jsx)(`div`,{className:`chips`,children:n?(0,Q.jsx)(rx,{children:$(n.category)}):(0,Q.jsx)(rx,{tone:`bad`,children:`not in content yet`})}),n&&(0,Q.jsx)(`p`,{className:`effect`,children:n.effect}),t.length>0&&(0,Q.jsxs)(`p`,{className:`small`,children:[(0,Q.jsxs)(`strong`,{children:[n?.choices.find(e=>e.from===`place`)?.note??`Place`,`:`]}),` `,t.join(`, `)]}),(0,Q.jsxs)(`p`,{className:`muted small`,children:[`From `,e.sources.map(WS).join(`, `)]})]})}function KS({held:e,places:t,onClose:n}){let r=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let e=document.activeElement;r.current?.focus(),document.documentElement.classList.add(`lore-modal-open`);let t=e=>{e.key===`Escape`&&n()};return window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`keydown`,t),document.documentElement.classList.remove(`lore-modal-open`),e?.focus()}},[n]),(0,Q.jsx)(`div`,{className:`lore-modal is-open`,role:`dialog`,"aria-modal":`true`,"aria-label":qb(e.trait),onClick:e=>e.target===e.currentTarget&&n(),children:(0,Q.jsxs)(`div`,{className:`lore-modal-panel`,children:[(0,Q.jsx)(`button`,{ref:r,type:`button`,className:`lore-modal-close`,"aria-label":`Close`,onClick:n,children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M2 2l16 16M18 2L2 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`})})}),(0,Q.jsx)(GS,{held:e,places:t})]})})}function qS({draft:e,result:t,onExport:n,onImport:r,onName:i}){let a=e.kind?Pb.get(e.kind):void 0,o=[e.origin,e.profession,e.past].map(e=>e?Nb.get(e):void 0),s=ex(e),c=t.summary,l=yl(e,Ab,t),u=l.includes(`magic`)||(c?.resources.mp??0)>0?[`hp`,`vp`,`sp`,`mp`]:[`hp`,`vp`,`sp`],d=e.choices.flatMap(e=>e.from===`contact`?e.traits.map(t=>({text:t,noun:Vc[e.from],from:$b(e)})):[]),f=t=>e.choices.filter(e=>e.trait===t&&e.from===`place`).flatMap(e=>e.traits),p=c?.traits??[],m=e=>Mb.get(e.trait)?.category===`knowledge`,h=e=>!!Mb.get(e.trait)?.types.includes(`language`),g=[...p.filter(e=>m(e)&&!h(e)),...p.filter(h)],_=p.filter(e=>!m(e)),[v,y]=(0,z.useState)(),b=(0,z.useCallback)(()=>y(void 0),[]),x=p.find(e=>e.trait===v),S=[...o.flatMap(e=>(e?.features??[]).map(t=>({...t,from:e.name})))],ee=[[`Kind`,a?.name],[`Origin`,o[0]?.name],[`Profession`,o[1]?.name],[`Past`,o[2]?.name]];return(0,Q.jsxs)(`section`,{className:`sheet`,children:[(0,Q.jsx)(tx,{step:`sheet`,title:`Sheet`}),(0,Q.jsxs)(`div`,{className:`sheet-actions`,children:[(0,Q.jsx)(`span`,{className:`status ${t.ok?`good`:`bad`}`,children:t.ok?`Legal`:`${t.errors.length} ${t.errors.length===1?`error`:`errors`}`}),(0,Q.jsx)(`button`,{onClick:n,children:`Export`}),(0,Q.jsx)(`button`,{onClick:r,children:`Import`}),(0,Q.jsx)(`button`,{onClick:()=>window.print(),children:`Print`})]}),(0,Q.jsxs)(`div`,{className:`c-sheet`,children:[(0,Q.jsx)(`div`,{className:`level-badge`,"aria-label":`Level ${e.level}`,children:e.level}),(0,Q.jsxs)(`div`,{className:`c-sheet-box sheet-head`,children:[(0,Q.jsxs)(`div`,{className:`sheet-head-main`,children:[(0,Q.jsx)(cx,{className:`sheet-name`,heading:`h2`,name:e.name,onChange:i}),(0,Q.jsxs)(`p`,{className:`lede`,children:[`Level `,e.level,` `,a?.name??`—`,` · `,o.map(e=>e?.name??`—`).join(` · `)]}),(0,Q.jsx)(`p`,{className:`sheet-resources`,children:u.map(e=>(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`i`,{children:c?.resources[e]??`–`}),` `,(0,Q.jsx)(`strong`,{children:e.toUpperCase()})]},e))}),a&&a.features.length>0&&(0,Q.jsx)(`ul`,{className:`features kind-features`,children:a.features.map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.description]},e.name))})]}),(0,Q.jsx)(`ul`,{className:`call-response sheet-background`,children:ee.map(([e,t])=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:t??`—`})]},e))})]}),(0,Q.jsxs)(`div`,{className:`c-sheet-box sheet-body`,children:[(0,Q.jsx)(`div`,{className:`sheet-stats`,children:l.map(t=>(0,Q.jsxs)(`div`,{className:`sheet-group`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core stat`,children:c?.coreStats[t]??`–`}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(t)})]}),!B[t].length&&(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsx)(`div`,{className:`tiny-text`,children:(0,Q.jsxs)(`strong`,{children:[`Each point in `,$(t),` adds `,3,` MP (Mana Points)`]})}),(0,Q.jsx)(ox,{bonus:c?.coreBonus[t]??0,value:c?.coreStats[t]??e.core[t]})]}),B[t].map(t=>{let n=c?.stats[t],r=(s?.[t]?.bonus??0)+(e.startPoints?.[t]??0),i=s?.[t]?.max??0;return(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsxs)(`div`,{className:`tiny-text`,children:[(0,Q.jsxs)(`strong`,{children:[$(t),` - `,n??`–`]}),(0,Q.jsxs)(`span`,{className:`muted`,children:[` max `,s?.[t]?.max??`–`]})]}),(0,Q.jsx)(ax,{bonus:r,value:n??r,max:i})]},t)})]},t))}),(0,Q.jsxs)(`div`,{className:`sheet-side`,children:[(0,Q.jsx)(`h4`,{className:`rule`,children:`Knowledges`}),g.length>0?(0,Q.jsx)(`ul`,{className:`knowledge-list`,children:g.map(e=>{let t=Mb.get(e.trait);return(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`tiny-text`,children:h(e)?`Language:`:`Knowledge:`}),` `,(0,Q.jsxs)(`button`,{type:`button`,className:`link`,onClick:()=>y(e.trait),children:[qb(e.trait),t?.ranked||e.rank>1?` (${e.rank})`:``]})]},e.trait)})}):(0,Q.jsx)(`p`,{className:`empty`,children:`None yet.`}),c&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h4`,{className:`rule`,children:`Banked picks`}),(0,Q.jsxs)(`p`,{children:[c.picks.universal.banked,` universal, `,c.picks.background.banked,` background`]})]})]})]}),(0,Q.jsxs)(`div`,{className:`c-sheet-box`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Traits`}),_.length>0?(0,Q.jsx)(`ul`,{className:`sheet-traits`,children:_.map(e=>(0,Q.jsx)(`li`,{children:(0,Q.jsx)(GS,{held:e,places:f(e.trait)})},e.trait))}):(0,Q.jsx)(`p`,{className:`empty`,children:p.length?`No Traits besides Knowledges.`:`No Traits yet.`}),d.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Contacts`}),(0,Q.jsx)(`ul`,{className:`features`,children:d.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:e.text}),` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`(`,e.noun,` from `,e.from,`)`]})]},t))})]}),S.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Features`}),(0,Q.jsx)(`ul`,{className:`features`,children:S.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:e.name}),` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`(`,e.from,`)`]}),`. `,e.description]},t))})]})]})]}),x&&(0,Q.jsx)(KS,{held:x,places:f(x.trait),onClose:b})]})}var JS=e=>[...Object.entries(e.minStats).map(([e,t])=>`${$(e)} ${t}`),...e.prerequisites.map(qb),...e.prerequisiteTags.map(e=>`any ${$(e)} Trait`),...e.rpRequirement?[e.rpRequirement]:[]].join(`, `),YS={knowledge:`Knowledges`,skill:`Skills`,contact:`Contacts`,starter:`Starter Traits`,ability:`Abilities`,condition:`Conditions`,membership:`Memberships`,circumstance:`Circumstances`,other:`Other`},XS={universal:`Universal picks take any Trait that isn't a Background Trait, knowledge included at creation.`,background:`Background picks take only Traits on this character's Background Trait list.`},ZS=e=>Ab.traits.filter(t=>t.opensLists.includes(e)).map(e=>e.name).join(` or `);function QS({draft:e,campaign:t,result:n,onChange:r}){let[i,a]=(0,z.useState)(`universal`),[o,s]=(0,z.useState)(``),[c,l]=(0,z.useState)(new Set),[u,d]=(0,z.useState)(!0),f=n.summary,p=f?.traitLists??[],m=typeof i==`string`||p.includes(i.list)?i:`universal`,h=typeof m==`string`?m:`list:${m.list}`,g=(0,z.useMemo)(()=>Sl(e,Ab,t,m),[e,t,h]);if(!g||!f)return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`traits`,title:`Traits`}),(0,Q.jsx)(`p`,{className:`empty`,children:`Finish the Kind and Background steps first; the engine needs a complete build to check picks against.`})]});let _=o.trim().toLowerCase(),v=new Set(e.traits.map(e=>e.trait)),y=g.filter(e=>!c.has(e.trait.category)&&(!u||e.reasons.length===0||v.has(e.trait.id))&&(!_||e.trait.name.toLowerCase().includes(_)||e.trait.tags.some(e=>e.toLowerCase().includes(_)))),b=Oc.options.map(e=>({category:e,options:y.filter(t=>t.trait.category===e)})).filter(e=>e.options.length>0),x=e=>{let t=new Set(c);t.delete(e)||t.add(e),l(t)},S=t=>r({...e,traits:e.traits.filter((e,n)=>n!==t)}),ee=t=>e.traits.map(e=>e.trait).lastIndexOf(t),te=new Map(f.traits.map(e=>[e.trait,e.rank])),C=(t,n,i)=>{let a=ee(t);a>=0?S(a):r(fl(e,t,n,i))};return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(tx,{step:`traits`,title:`Traits`,children:`Spend picks on Traits. Unspent picks are banked for later.`}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light`,children:[(0,Q.jsxs)(`div`,{className:`tech-field-tab-list`,role:`tablist`,"aria-label":`Pick type`,children:[[`universal`,`background`].map(e=>{let t=f.picks[e];return(0,Q.jsxs)(`button`,{role:`tab`,"aria-selected":m===e,className:`tech-field-tab${m===e?` is-active`:``}`,onClick:()=>a(e),children:[$(e),` `,(0,Q.jsxs)(`span`,{className:`num`,children:[t.spent,`/`,t.available]})]},e)}),p.map(t=>{let n=typeof m!=`string`&&m.list===t,r=new Set(e.traits.filter(e=>Mb.get(e.trait)?.list===t).map(e=>e.trait)).size;return(0,Q.jsxs)(`button`,{role:`tab`,"aria-selected":n,className:`tech-field-tab${n?` is-active`:``}`,onClick:()=>a({list:t}),children:[$(t),` `,(0,Q.jsx)(`span`,{className:`num`,children:r})]},t)})]}),(0,Q.jsx)(`p`,{className:`hint`,children:typeof m==`string`?XS[m]:`${$(m.list)} Traits, open to this character through ${ZS(m.list)}. Background Traits here take background picks; the rest take universal picks.`}),(0,Q.jsxs)(`div`,{className:`filters`,children:[(0,Q.jsx)(`input`,{type:`search`,placeholder:`Search name or tag`,value:o,onChange:e=>s(e.target.value),"aria-label":`Search Traits`}),Oc.options.map(e=>(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:!c.has(e),onChange:()=>x(e)}),` `,YS[e]]},e)),(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:u,onChange:e=>d(e.target.checked)}),` Hide unavailable`]})]}),g.length===0&&m===`background`&&(0,Q.jsx)(`p`,{className:`empty`,children:`This character's Background Trait list is empty. It grows from package background Traits and the Kind's Trait access.`}),g.length>0&&y.length===0&&(0,Q.jsx)(`p`,{className:`empty`,children:u?`No available Traits match. Turn off Hide unavailable to see why the rest are out.`:`No Traits match.`}),b.map(t=>(0,Q.jsxs)(`div`,{className:`trait-group`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:YS[t.category]}),(0,Q.jsx)(`ul`,{className:`trait-list`,children:t.options.map(({trait:t,rank:n,pick:i,reasons:a})=>{let o=ee(t.id)>=0,s=!o&&a.length>0;return(0,Q.jsxs)(`li`,{role:`checkbox`,"aria-checked":o,"aria-disabled":s,"aria-label":o?`${t.name}, taken`:`Take ${t.name}${t.ranked||n>1?` rank ${n}`:``} with a ${i} pick`,tabIndex:0,className:`trait trait-box ${Yb(t.id)}${o?` selected`:``}${s?` rejected`:``}`,onClick:()=>!s&&C(t.id,n,i),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s||C(t.id,n,i))},children:[(0,Q.jsxs)(`h3`,{className:`trait-name`,children:[(0,Q.jsx)(Qb,{plane:t.plane}),t.name]}),(0,Q.jsxs)(`div`,{className:`trait-main`,children:[(0,Q.jsxs)(`div`,{className:`chips`,children:[(0,Q.jsx)(rx,{children:$(t.category)}),t.ranked&&(0,Q.jsx)(rx,{tone:`muted`,children:`Ranked`}),t.background&&(0,Q.jsx)(rx,{tone:`muted`,children:`Background`}),t.mastery&&(0,Q.jsx)(rx,{tone:`muted`,children:`Mastery`})]}),(0,Q.jsx)(`p`,{children:t.summary}),(0,Q.jsx)(`p`,{className:`effect`,children:t.effect}),JS(t)&&(0,Q.jsxs)(`p`,{className:`muted small`,children:[`Needs `,JS(t)]}),t.tags.length>0&&(0,Q.jsx)(`p`,{className:`tags`,children:t.tags.map(e=>`#${e}`).join(` `)}),o&&t.ranked&&(0,Q.jsxs)(`div`,{className:`rank-step`,onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:[(0,Q.jsx)(`span`,{className:`rank-label`,children:`Rank`}),(0,Q.jsx)(`button`,{type:`button`,"aria-label":`Drop a rank of ${t.name}`,onClick:()=>S(ee(t.id)),children:(0,Q.jsx)(fx,{is:`minus`})}),(0,Q.jsx)(`span`,{className:`num`,children:te.get(t.id)??0}),(0,Q.jsx)(`button`,{type:`button`,disabled:a.length>0,title:a.join(` `)||void 0,"aria-label":`Take ${t.name} rank ${n} with a ${i} pick`,onClick:()=>r(fl(e,t.id,n,i)),children:(0,Q.jsx)(fx,{is:`plus`})})]}),s&&(0,Q.jsx)(`ul`,{className:`reasons`,children:a.map(e=>(0,Q.jsx)(`li`,{children:e},e))})]})]},t.id)})})]},t.category)),(0,Q.jsx)(`h3`,{className:`subhead`,children:`Picks spent`}),e.traits.length===0?(0,Q.jsx)(`p`,{className:`empty`,children:`No picks spent yet.`}):(0,Q.jsx)(`ul`,{className:`picks`,children:e.traits.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:qb(e.trait)}),` rank `,e.rank??1,` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`· `,e.pick,` pick`]}),!Mb.has(e.trait)&&(0,Q.jsx)(rx,{tone:`bad`,children:`unknown`})]}),(0,Q.jsx)(`button`,{className:`link`,onClick:()=>S(t),"aria-label":`Remove ${qb(e.trait)} rank ${e.rank??1}`,children:`Remove`})]},t))})]})]})}function $S({draft:e,result:t,onName:n}){let[r,i]=(0,z.useState)(!1),{summary:a}=t,o=ex(e),s=[`origin`,`profession`,`past`].map(t=>[$(t),e[t]?Nb.get(e[t])?.name??e[t]:`–`]);return(0,Q.jsxs)(`aside`,{className:`panel${r?` open`:``}`,"aria-label":`Validation`,children:[(0,Q.jsxs)(`button`,{className:`panel-toggle`,onClick:()=>i(!r),"aria-expanded":r,children:[(0,Q.jsx)(`span`,{className:`panel-toggle-name${e.name?``:` muted`}`,children:e.name??`Unnamed character`}),a&&(0,Q.jsxs)(`span`,{className:`num`,children:[`U `,a.picks.universal.spent,`/`,a.picks.universal.available,` · B `,a.picks.background.spent,`/`,a.picks.background.available]}),(0,Q.jsx)(`span`,{className:`muted`,children:r?`Hide`:`Details`})]}),(0,Q.jsxs)(`div`,{className:`panel-body`,children:[(0,Q.jsx)(cx,{className:`panel-name`,heading:`h3`,name:e.name,onChange:n}),(0,Q.jsxs)(`ul`,{className:`panel-background`,children:[(0,Q.jsxs)(`li`,{className:`panel-stat`,children:[(0,Q.jsx)(`span`,{children:`Level`}),(0,Q.jsx)(`strong`,{children:e.level})]}),s.map(([e,t])=>(0,Q.jsxs)(`li`,{className:`panel-stat`,children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:t})]},e))]}),(0,Q.jsx)(`h4`,{children:`Stats`}),(0,Q.jsx)(`div`,{className:`panel-stats`,children:yl(e,Ab,t).map(t=>(0,Q.jsxs)(`div`,{className:`panel-group`,children:[(0,Q.jsxs)(`div`,{className:`panel-group-head`,children:[(0,Q.jsx)(`span`,{children:$(t)}),(0,Q.jsxs)(`span`,{className:`num`,children:[`Core `,a?a.coreStats[t]:`–`]})]}),!B[t].length&&(0,Q.jsxs)(`div`,{className:`panel-stat`,children:[(0,Q.jsx)(`span`,{children:`MP`}),(0,Q.jsx)(`span`,{className:`num`,children:a?a.resources.mp:3*e.core[t]})]}),B[t].map(e=>{let t=a?.stats[e],n=o?.[e]?.max,r=t!==void 0&&n!==void 0&&t>n;return(0,Q.jsxs)(`div`,{className:`panel-stat`,children:[(0,Q.jsx)(`span`,{children:$(e)}),(0,Q.jsxs)(`span`,{className:`num${r?` bad`:``}`,children:[t??`–`,(0,Q.jsxs)(`span`,{className:`muted`,children:[` / `,n??`–`]})]})]},e)})]},t))}),(0,Q.jsx)(`h4`,{children:`Picks`}),(0,Q.jsxs)(`table`,{className:`picks-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{}),(0,Q.jsx)(`th`,{children:`Available`}),(0,Q.jsx)(`th`,{children:`Spent`}),(0,Q.jsx)(`th`,{children:`Banked`})]})}),(0,Q.jsx)(`tbody`,{children:[`universal`,`background`].map(e=>{let t=a?.picks[e];return(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:$(e)}),(0,Q.jsx)(`td`,{className:`num`,children:t?.available??`–`}),(0,Q.jsx)(`td`,{className:`num${t&&t.spent>t.available?` bad`:``}`,children:t?.spent??`–`}),(0,Q.jsx)(`td`,{className:`num`,children:t?.banked??`–`})]},e)})})]})]})]})}var eC={character:`Character`,background:`Background`,stats:`Stats`,traits:`Traits`,choices:`Choices`,sheet:`Sheet`};function tC(){let[e,t]=(0,z.useState)(ml),[n,r]=(0,z.useState)(!1),[i,a]=(0,z.useState)(),[o,s]=(0,z.useState)(!1),c=(0,z.useRef)(null),{draft:l,campaign:u,step:d}=e;(0,z.useEffect)(()=>hl(e),[e]);let f=(0,z.useMemo)(()=>V(l,Ab,u),[l,u]),p=(0,z.useMemo)(()=>{let e=new Set(f.errors.map(Cl)),t=f.summary?.picks,n=!!t&&Object.values(t).every(e=>e.banked===0),r=!e.has(`character`)&&!e.has(`background`),i={character:!e.has(`character`),background:!e.has(`background`),stats:r&&!e.has(`stats`),traits:r&&!e.has(`traits`)&&n,choices:r&&!e.has(`choices`)};return i.sheet=!!f.summary&&f.errors.length===0,i},[f]),m=(0,z.useMemo)(()=>f.errors.filter(e=>Cl(e)===d).map(e=>Tl(e,l)),[f,d,l]),h=e=>t(t=>({...t,draft:e})),g=e=>t(t=>({...t,step:e})),_=e=>t(t=>({...t,campaign:{startingLevel:e},draft:ul(t.draft,e)})),v=()=>{let e=JSON.stringify(ol(l),null,2),t=URL.createObjectURL(new Blob([e+`
`],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=`${_l(l.name??``)||`character`}.json`,n.click(),URL.revokeObjectURL(t)},y=async e=>{let n=e.target.files?.[0];if(e.target.value=``,n)try{let e=ll(JSON.parse(await n.text()));t(t=>({...t,draft:e,campaign:{startingLevel:e.level},ai:void 0})),r(!1),a(`Imported ${n.name}.`)}catch(e){a(`Couldn't import ${n.name}: ${e instanceof Error?e.message:String(e)}`)}},b=(e,n,i,o)=>{let s=ll(e.build);r(!0),t(t=>({...t,draft:s,campaign:{startingLevel:s.level},step:`sheet`,ai:{description:n,name:o,model:e.model,status:e.status,summary:e.summary,reasons:e.reasons,openChoices:e.check?.openChoices??[],seconds:i}})),a(void 0)},x=()=>{s(!1),r(!1),gl(),t(nl),a(void 0)},S=$c.indexOf(d);return(0,Q.jsxs)(`div`,{className:`sf-creator`,children:[(0,Q.jsx)(`header`,{className:`builder-hero`,children:(0,Q.jsx)(`div`,{className:`container d-flex builder-row`,children:(0,Q.jsxs)(`div`,{className:`builder-main hero-main`,children:[(0,Q.jsxs)(`div`,{className:`builder-statement`,children:[(0,Q.jsx)(`h1`,{className:`title hero-title frontiers-accent`,children:`Strange Frontiers`}),(0,Q.jsx)(`p`,{className:`title section-title`,children:`Character Builder`})]}),(0,Q.jsx)(zS,{draft:l,notes:e.ai,showNotes:n,startingLevel:u.startingLevel,hasBuild:!!(l.kind||l.origin||l.profession||l.past||l.traits.length),onBuilt:b,actions:(0,Q.jsxs)(`div`,{className:`hero-bar`,children:[o?(0,Q.jsxs)(`span`,{className:`hero-confirm`,children:[`Clear this build?`,(0,Q.jsx)(`button`,{type:`button`,className:`hero-link`,onClick:x,children:`Yes`}),(0,Q.jsx)(`button`,{type:`button`,className:`hero-link`,onClick:()=>s(!1),children:`Cancel`})]}):(0,Q.jsx)(`button`,{type:`button`,className:`hero-link`,onClick:()=>s(!0),children:`New`}),(0,Q.jsx)(`input`,{ref:c,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:y})]})}),(0,Q.jsx)(`nav`,{className:`builder-tabs rpg-tab-list`,"aria-label":`Steps`,children:$c.map((e,t)=>(0,Q.jsxs)(`button`,{className:`rpg-tab${e===d?` is-active`:``}`,"aria-current":e===d?`step`:void 0,onClick:()=>g(e),children:[(0,Q.jsx)(`span`,{className:`step-n`,children:t+1}),` `,eC[e],p[e]&&(0,Q.jsx)(`span`,{className:`step-done`,role:`img`,"aria-label":`done`})]},e))})]})})}),(0,Q.jsx)(`div`,{className:`section unlimited white-bg builder-panel`,children:(0,Q.jsxs)(`div`,{className:`container builder-body${d===`sheet`?` no-side`:``}`,children:[d!==`sheet`&&(0,Q.jsx)(`aside`,{className:`builder-side`,children:(0,Q.jsx)($S,{draft:l,result:f,onName:e=>h({...l,name:e})})}),(0,Q.jsx)(`main`,{children:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`pager`,children:[S>0?(0,Q.jsxs)(`button`,{onClick:()=>g($c[S-1]),children:[(0,Q.jsx)(ux,{to:`left`}),` `,eC[$c[S-1]]]}):(0,Q.jsx)(`span`,{}),(0,Q.jsxs)(`div`,{className:`pager-next`,children:[m.length>0&&(0,Q.jsx)(`ul`,{className:`issues bad step-issues`,children:m.map((e,t)=>(0,Q.jsx)(`li`,{children:e},t))}),S<$c.length-1&&(0,Q.jsxs)(`button`,{className:`step-next${p[d]?` is-done`:``}`,onClick:()=>g($c[S+1]),children:[eC[$c[S+1]],` `,(0,Q.jsx)(ux,{to:`right`})]})]})]}),jb.length>0&&(0,Q.jsxs)(`div`,{className:`notice bad`,children:[`Content failed to load: `,jb.join(`; `)]}),i&&(0,Q.jsxs)(`div`,{className:`notice`,role:`status`,children:[i,(0,Q.jsx)(`button`,{className:`link`,onClick:()=>a(void 0),"aria-label":`Dismiss`,children:`✕`})]}),d===`character`&&(0,Q.jsx)(Tx,{draft:l,startingLevel:u.startingLevel,onChange:h,onStartingLevel:_}),d===`background`&&(0,Q.jsx)(vx,{draft:l,onChange:h}),d===`stats`&&(0,Q.jsx)(BS,{draft:l,onChange:h}),d===`choices`&&(0,Q.jsx)(kx,{draft:l,result:f,onChange:h}),d===`traits`&&(0,Q.jsx)(QS,{draft:l,campaign:u,result:f,onChange:h}),d===`sheet`&&(0,Q.jsx)(qS,{draft:l,result:f,onExport:v,onImport:()=>c.current?.click(),onName:e=>h({...l,name:e})})]})})]})})]})}var nC=(0,uc.createRoot)(document.getElementById(`root`));(0,lc.flushSync)(()=>nC.render((0,Q.jsx)(z.StrictMode,{children:(0,Q.jsx)(tC,{})})));