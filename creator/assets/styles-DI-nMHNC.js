var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return E(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ue(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,le)}catch(e){le(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function de(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ue(de.bind(null,e))}var fe={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=fe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=de,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ue,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return l(e,t,null,n)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),i=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=r()})),a=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(E)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=E,te=function(){re.postMessage(null)}}else te=function(){_(E,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),o=e(((e,t)=>{t.exports=a()})),s=e((e=>{var t=o(),r=n(),a=i();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ee(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var E=Object.assign,te=Symbol.for(`react.element`),ne=Symbol.for(`react.transitional.element`),re=Symbol.for(`react.portal`),ie=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),D=Symbol.for(`react.context`),ce=Symbol.for(`react.forward_ref`),le=Symbol.for(`react.suspense`),ue=Symbol.for(`react.suspense_list`),de=Symbol.for(`react.memo`),fe=Symbol.for(`react.lazy`),pe=Symbol.for(`react.activity`),me=Symbol.for(`react.legacy_hidden`),he=Symbol.for(`react.memo_cache_sentinel`),ge=Symbol.for(`react.view_transition`),_e=Symbol.for(`react.recoverable`),ve=Symbol.iterator;function ye(e){return typeof e!=`object`||!e?null:(e=ve&&e[ve]||e[`@@iterator`],typeof e==`function`?e:null)}var be=Symbol.for(`react.client.reference`);function xe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ie:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case le:return`Suspense`;case ue:return`SuspenseList`;case pe:return`Activity`;case ge:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case re:return`Portal`;case D:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case ce:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case de:return t=e.displayName||null,t===null?xe(e.type)||`Memo`:t;case fe:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var Se=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},we=[],Te=-1;function Ee(e){return{current:e}}function De(e){0>Te||(e.current=we[Te],we[Te]=null,Te--)}function A(e,t){Te++,we[Te]=e.current,e.current=t}var Oe=Ee(null),ke=Ee(null),Ae=Ee(null),je=Ee(null);function Me(e,t){switch(A(Ae,t),A(ke,e),A(Oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mp(t),e=hp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}De(Oe),A(Oe,e)}function Ne(){De(Oe),De(ke),De(Ae)}function Pe(e){var t=e.memoizedState;t!==null&&(dh._currentValue=t.memoizedState,A(je,e)),t=Oe.current;var n=hp(t,e.type);t!==n&&(A(ke,e),A(Oe,n))}function Fe(e){ke.current===e&&(De(Oe),De(ke)),je.current===e&&(De(je),dh._currentValue=Ce)}var Ie,Le;function Re(e){if(Ie===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ie=t&&t[1]||``,Le=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ie+e+Le}var j=!1;function ze(e,t){if(!e||j)return``;j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{j=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Re(n):``}function Be(e,t){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re(`Lazy`);case 13:return e.child!==t&&t!==null?Re(`Suspense Fallback`):Re(`Suspense`);case 19:return Re(`SuspenseList`);case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return Re(`Activity`);case 30:return Re(`ViewTransition`);default:return``}}function Ve(e){try{var t=``,n=null;do t+=Be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var He=Object.prototype.hasOwnProperty,Ue=t.unstable_scheduleCallback,We=t.unstable_cancelCallback,Ge=t.unstable_shouldYield,M=t.unstable_requestPaint,Ke=t.unstable_now,qe=t.unstable_getCurrentPriorityLevel,Je=t.unstable_ImmediatePriority,Ye=t.unstable_UserBlockingPriority,Xe=t.unstable_NormalPriority,Ze=t.unstable_LowPriority,Qe=t.unstable_IdlePriority,$e=t.log,et=t.unstable_setDisableYieldValue,tt=null,nt=null;function rt(e){if(typeof $e==`function`&&et(e),nt&&typeof nt.setStrictMode==`function`)try{nt.setStrictMode(tt,e)}catch{}}var it=Math.clz32?Math.clz32:st,at=Math.log,ot=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(at(e)/ot|0)|0}var ct=256,lt=262144,ut=4194304;function dt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=dt(n))):i=dt(o):i=dt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=dt(n))):i=dt(o)):i=dt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-it(n),i=1<<r;t|=e[r],n&=~i}return t}function ht(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var e=ut;return ut<<=1,!(ut&62914560)&&(ut=4194304),e}function _t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-it(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&bt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function bt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-it(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function St(e,t){var n=t&-t;return n=n&42?1:Ct(n),(n&(e.suspendedLanes|t))===0?n:0}function Ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Tt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:Dh(e.type)):e}function Et(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var Dt=Math.random().toString(36).slice(2),Ot=`__reactFiber$`+Dt,kt=`__reactProps$`+Dt,At=`__reactContainer$`+Dt,jt=`__reactEvents$`+Dt,Mt=`__reactListeners$`+Dt,Nt=`__reactHandles$`+Dt,Pt=`__reactResources$`+Dt,Ft=`__reactMarker$`+Dt,It=`__reactLoad$`+Dt;function Lt(e){delete e[Ot],delete e[kt],delete e[Mt],delete e[Nt]}function Rt(e){var t;if(t=e[Ot])return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gm(e);e!==null;){if(n=e[Ot])return n;e=gm(e)}return t}e=n,n=e.parentNode}return null}function zt(e){if(e=e[Ot]||e[At]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Vt(e){var t=e[Pt];return t||=e[Pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ht(e){e[Ft]=!0}function Ut(e){e[It]=void 0}var Wt=new Set,Gt={};function Kt(e,t){qt(e,t),qt(e+`Capture`,t)}function qt(e,t){for(Gt[e]=t,e=0;e<t.length;e++)Wt.add(t[e])}var Jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Yt={},Xt={};function Zt(e){return He.call(Xt,e)?!0:He.call(Yt,e)?!1:Jt.test(e)?Xt[e]=!0:(Yt[e]=!0,!1)}var N=!1;function Qt(){var e=N;return N=!1,e}function $t(e,t,n){if(Zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function en(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function tn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function nn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function rn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function an(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function on(e){if(!e._valueTracker){var t=rn(e)?`checked`:`value`;e._valueTracker=an(e,t,``+e[t])}}function sn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=rn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var cn=/[\n"\\]/g;function ln(e){return e.replace(cn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function un(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+nn(t)):e.value!==``+nn(t)&&(e.value=``+nn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):fn(e,nn(n)):o===`number`&&e.value==t?fn(e,nn(e.value)):fn(e,nn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+nn(s):e.removeAttribute(`name`)}function dn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){on(e);return}n=n==null?``:``+nn(n),t=t==null?n:``+nn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),on(e)}function fn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mn(e,t,n){t!=null&&(t=``+nn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+nn(n)}function hn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Se(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=nn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),on(e)}function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function vn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||_n.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function yn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,N=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(vn(e,i,r),N=!0)}else for(var a in t)t.hasOwnProperty(a)&&vn(e,a,t[a])}function bn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var xn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function wn(){}var Tn=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,P=null;function On(e){var t=zt(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(un(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+ln(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[kt]||null;if(!i)throw Error(s(90));un(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&sn(r)}break a;case`textarea`:mn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}}}var kn=!1;function An(e,t,n){if(kn)return e(t,n);kn=!0;try{return e(t)}finally{if(kn=!1,(Dn!==null||P!==null)&&(Ud(),Dn&&(t=Dn,e=P,P=Dn=null,On(t),e)))for(t=0;t<e.length;t++)On(e[t])}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[kt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Nn=!1;if(Mn)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Nn=!0}}),window.addEventListener(`test`,Pn,Pn),window.removeEventListener(`test`,Pn,Pn)}catch{Nn=!1}var Fn=null,In=null,Ln=null;function Rn(){if(Ln)return Ln;var e,t=In,n=t.length,r,i=`value`in Fn?Fn.value:Fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ln=i.slice(e,1<r?1-r:void 0)}function zn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Vn(){return!1}function Hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Bn:Vn,this.isPropagationStopped=Vn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Hn(Un),Gn=E({},Un,{view:0,detail:0}),Kn=Hn(Gn),qn,Jn,Yn,Xn=E({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Yn&&(Yn&&e.type===`mousemove`?(qn=e.screenX-Yn.screenX,Jn=e.screenY-Yn.screenY):Jn=qn=0,Yn=e),qn)},movementY:function(e){return`movementY`in e?e.movementY:Jn}}),Zn=Hn(Xn),Qn=Hn(E({},Xn,{dataTransfer:0})),$n=Hn(E({},Gn,{relatedTarget:0})),er=Hn(E({},Un,{animationName:0,elapsedTime:0,pseudoElement:0})),tr=Hn(E({},Un,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),nr=Hn(E({},Un,{data:0})),rr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},ir={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ar={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function or(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ar[e])?!!t[e]:!1}function sr(){return or}var cr=Hn(E({},Gn,{key:function(e){if(e.key){var t=rr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=zn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?ir[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type===`keypress`?zn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?zn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),lr=Hn(E({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ur=Hn(E({},Un,{submitter:0})),dr=Hn(E({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr})),fr=Hn(E({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0})),pr=Hn(E({},Xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),mr=Hn(E({},Un,{newState:0,oldState:0,source:0})),hr=[9,13,27,32],gr=Mn&&`CompositionEvent`in window,_r=null;Mn&&`documentMode`in document&&(_r=document.documentMode);var vr=Mn&&`TextEvent`in window&&!_r,yr=Mn&&(!gr||_r&&8<_r&&11>=_r),br=` `,xr=!1;function Sr(e,t){switch(e){case`keyup`:return hr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var wr=!1;function Tr(e,t){switch(e){case`compositionend`:return Cr(t);case`keypress`:return t.which===32?(xr=!0,br):null;case`textInput`:return e=t.data,e===br&&xr?null:e;default:return null}}function Er(e,t){if(wr)return e===`compositionend`||!gr&&Sr(e,t)?(e=Rn(),Ln=In=Fn=null,wr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return yr&&t.locale!==`ko`?null:t.data;default:return null}}var Dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Dr[e.type]:t===`textarea`}function kr(e,t,n,r){Dn?P?P.push(r):P=[r]:Dn=r,t=Qf(t,`onChange`),0<t.length&&(n=new Wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Ar=null,jr=null;function Mr(e){Gf(e,0)}function Nr(e){if(sn(Bt(e)))return e}function Pr(e,t){if(e===`change`)return t}var Fr=!1;if(Mn){var Ir;if(Mn){var Lr=`oninput`in document;if(!Lr){var Rr=document.createElement(`div`);Rr.setAttribute(`oninput`,`return;`),Lr=typeof Rr.oninput==`function`}Ir=Lr}else Ir=!1;Fr=Ir&&(!document.documentMode||9<document.documentMode)}function zr(){Ar&&(Ar.detachEvent(`onpropertychange`,Br),jr=Ar=null)}function Br(e){if(e.propertyName===`value`&&Nr(jr)){var t=[];kr(t,jr,e,En(e)),An(Mr,t)}}function Vr(e,t,n){e===`focusin`?(zr(),Ar=t,jr=n,Ar.attachEvent(`onpropertychange`,Br)):e===`focusout`&&zr()}function Hr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Nr(jr)}function Ur(e,t){if(e===`click`)return Nr(t)}function Wr(e,t){if(e===`input`||e===`change`)return Nr(t)}function Gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Kr=typeof Object.is==`function`?Object.is:Gr;function qr(e,t){if(Kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!He.call(t,i)||!Kr(e[i],t[i]))return!1}return!0}function Jr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xr(e,t){var n=Yr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Yr(n)}}function Zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function $r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ei=Mn&&`documentMode`in document&&11>=document.documentMode,ti=null,ni=null,ri=null,ii=!1;function ai(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ii||ti==null||ti!==Jr(r)||(r=ti,`selectionStart`in r&&$r(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&qr(ri,r)||(ri=r,r=Qf(ni,`onSelect`),0<r.length&&(t=new Wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ti)))}function oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var si={animationend:oi(`Animation`,`AnimationEnd`),animationiteration:oi(`Animation`,`AnimationIteration`),animationstart:oi(`Animation`,`AnimationStart`),transitionrun:oi(`Transition`,`TransitionRun`),transitionstart:oi(`Transition`,`TransitionStart`),transitioncancel:oi(`Transition`,`TransitionCancel`),transitionend:oi(`Transition`,`TransitionEnd`)},ci={},li={};Mn&&(li=document.createElement(`div`).style,`AnimationEvent`in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),`TransitionEvent`in window||delete si.transitionend.transition);function ui(e){if(ci[e])return ci[e];if(!si[e])return e;var t=si[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in li)return ci[e]=t[n];return e}var di=ui(`animationend`),fi=ui(`animationiteration`),pi=ui(`animationstart`),mi=ui(`transitionrun`),hi=ui(`transitionstart`),gi=ui(`transitioncancel`),_i=ui(`transitionend`),vi=new Map,yi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);yi.push(`scrollEnd`);function bi(e,t){vi.set(e,t),Kt(t,[e])}var xi=0;function Si(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=wd.identifierPrefix;var n=xi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ci(e){if(e==null||typeof e==`string`)return e;var t=null,n=Md;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function wi(e,t){return e=Ci(e),t=Ci(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ei=[],Di=0,Oi=0;function ki(){for(var e=Di,t=Oi=Di=0;t<e;){var n=Ei[t];Ei[t++]=null;var r=Ei[t];Ei[t++]=null;var i=Ei[t];Ei[t++]=null;var a=Ei[t];if(Ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ni(n,i,a)}}function Ai(e,t,n,r){Ei[Di++]=e,Ei[Di++]=t,Ei[Di++]=n,Ei[Di++]=r,Oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ji(e,t,n,r){return Ai(e,t,n,r),Pi(e)}function Mi(e,t){return Ai(e,null,null,t),Pi(e)}function Ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-it(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Pi(e){if(50<Nd)throw Nd=0,Pd=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fi={};function Ii(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(e,t,n,r){return new Ii(e,t,n,r)}function Ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,t){var n=e.alternate;return n===null?(n=Li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,n,r,i,a){var o=0;if(r=e,typeof r==`function`)Ri(r)&&(o=1);else if(typeof r==`string`)o=Zm(e,n,Oe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case pe:return e=Li(31,n,t,i),e.elementType=pe,e.lanes=a,e;case ie:return Hi(n.children,i,a,t);case ae:o=8,i|=24;break;case oe:return e=Li(12,n,t,i|2),e.elementType=oe,e.lanes=a,e;case le:return e=Li(13,n,t,i),e.elementType=le,e.lanes=a,e;case ue:return e=Li(19,n,t,i),e.elementType=ue,e.lanes=a,e;case me:case ge:return e=i|32,e=Li(30,n,t,e),e.elementType=ge,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case D:o=10;break a;case se:o=9;break a;case ce:o=11;break a;case de:o=14;break a;case fe:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=Li(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Hi(e,t,n,r){return e=Li(7,e,r,t),e.lanes=n,e}function Ui(e,t,n){return e=Li(6,e,null,t),e.lanes=n,e}function Wi(e){var t=Li(18,null,null,0);return t.stateNode=e,t}function Gi(e,t,n){return t=Li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ki=new WeakMap;function qi(e,t){if(typeof e==`object`&&e){var n=Ki.get(e);return n===void 0?(t={value:e,source:t,stack:Ve(t)},Ki.set(e,t),t):n}return{value:e,source:t,stack:Ve(t)}}var Ji=[],Yi=0,Xi=null,Zi=0,Qi=[],$i=0,ea=null,ta=1,na=``;function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Xi,Xi=e,Zi=t}function ia(e,t,n){Qi[$i++]=ta,Qi[$i++]=na,Qi[$i++]=ea,ea=e;var r=ta;e=na;var i=32-it(r)-1;r&=~(1<<i),n+=1;var a=32-it(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ta=1<<32-it(t)+i|n<<i|r,na=a+e}else ta=1<<a|n<<i|r,na=e}function aa(e){e.return!==null&&(ra(e,1),ia(e,1,0))}function oa(e){for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null;for(;e===ea;)ea=Qi[--$i],Qi[$i]=null,na=Qi[--$i],Qi[$i]=null,ta=Qi[--$i],Qi[$i]=null}function sa(e,t){Qi[$i++]=ta,Qi[$i++]=na,Qi[$i++]=ea,ta=t.id,na=t.overflow,ea=e}var ca=null,la=null,F=!1,ua=null,da=!1,fa=Error(s(519));function pa(e){throw ya(qi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),fa}function ma(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ot]=e,t[kt]=r,n){case`dialog`:J(`cancel`,t),J(`close`,t);break;case`iframe`:case`object`:case`embed`:J(`load`,t);break;case`video`:case`audio`:for(n=0;n<Uf.length;n++)J(Uf[n],t);break;case`source`:J(`error`,t);break;case`img`:case`image`:case`link`:J(`error`,t),J(`load`,t);break;case`details`:J(`toggle`,t);break;case`input`:J(`invalid`,t),dn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:J(`invalid`,t);break;case`textarea`:J(`invalid`,t),hn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ip(t.textContent,n)?(r.popover!=null&&(J(`beforetoggle`,t),J(`toggle`,t)),r.onScroll!=null&&J(`scroll`,t),r.onScrollEnd!=null&&J(`scrollend`,t),r.onClick!=null&&(t.onclick=wn),t=!0):t=!1,t||pa(e,!0)}function ha(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:da=!1;return;case 27:case 3:da=!0;return;default:ca=ca.return}}function ga(e){if(e!==ca)return!1;if(!F)return ha(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||_p(e.type,e.memoizedProps)),n=!n),n&&la&&pa(e),ha(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));la=hm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));la=hm(e)}else t===27?(t=la,Ep(e.type)?(e=mm,mm=null,la=e):la=t):la=ca?pm(e.stateNode.nextSibling):null;return!0}function _a(){la=ca=null,F=!1}function va(){var e=ua;return e!==null&&(gd===null?gd=e:gd.push.apply(gd,e),ua=null),e}function ya(e){ua===null?ua=[e]:ua.push(e)}var ba=Ee(null),xa=null,Sa=null;function Ca(e,t,n){A(ba,t._currentValue),t._currentValue=n}function wa(e){e._currentValue=ba.current,De(ba)}function Ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ea(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ta(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ta(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Ta(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Da(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Kr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===je.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[dh]:e.push(dh))}i=i.return}return e!==null&&Ea(t,e,n,r),t.flags|=262144,e!==null}function Oa(e){for(e=e.firstContext;e!==null;){if(!Kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){xa=e,Sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Aa(e){return Ma(xa,e)}function ja(e,t){return xa===null&&ka(e),Ma(e,t)}function Ma(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sa===null){if(e===null)throw Error(s(308));Sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sa=Sa.next=t;return n}var Na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Pa=t.unstable_scheduleCallback,Fa=t.unstable_NormalPriority,I={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ia(){return{controller:new Na,data:new Map,refCount:0}}function La(e){e.refCount--,e.refCount===0&&Pa(Fa,function(){e.controller.abort()})}function Ra(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var za=null;function Ba(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Va=null,Ha=0,Ua=0,Wa=null;function Ga(e,t){if(Va===null){var n=Va=[];Ha=0,Ua=Rf(),Wa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ha++,t.then(Ka,Ka),t}function Ka(){if(--Ha===0&&(za=null,Va!==null)){Wa!==null&&(Wa.status=`fulfilled`);var e=Va;Va=null,Ua=0,Wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ja=O.S;O.S=function(e,t){if(yd=Ke(),typeof t==`object`&&t&&typeof t.then==`function`&&Ga(e,t),za!==null)for(var n=wf;n!==null;)Ra(n,za),n=n.next;if(n=e.types,n!==null){for(var r=wf;r!==null;)Ra(r,n),r=r.next;if(Ua!==0){r=za,r===null&&(r=za=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ja!==null&&Ja(e,t)};var Ya=Ee(null);function Xa(){var e=Ya.current;return e===null?rd.pooledCache:e}function Za(e,t){t===null?A(Ya,Ya.current):A(Ya,t.pool)}function Qa(){var e=Xa();return e===null?null:{parent:I._currentValue,pool:e}}var $a=Error(s(460)),eo=Error(s(474)),to=Error(s(542)),no={then:function(){}};function ro(e){return e=e.status,e===`fulfilled`||e===`rejected`}function io(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wn,wn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,co(e),e===void 0&&!(`reason`in t)?Error(s(600)):e;default:if(typeof t.status==`string`)t.then(wn,wn);else{if(e=rd,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,co(e),e}throw oo=t,$a}}function ao(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(oo=e,$a):e}}var oo=null;function so(){if(oo===null)throw Error(s(459));var e=oo;return oo=null,e}function co(e){if(e===$a||e===to)throw Error(s(483))}var lo=null,uo=0;function fo(e){var t=uo;return uo+=1,lo===null&&(lo=[]),io(lo,e,t)}function po(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function mo(e,t){throw t.$$typeof===te?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ho(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=zi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ui(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===ie?(e=d(e,t,n.props.children,r,n.key),po(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===fe&&ao(a)===t.type)?(t=i(t,n.props),po(t,n),t.return=e,t):(t=Vi(n.type,n.key,n.props,null,e.mode,r),po(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Gi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Hi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ne:return n=Vi(t.type,t.key,t.props,null,e.mode,n),po(n,t),n.return=e,n;case re:return t=Gi(t,e.mode,n),t.return=e,t;case fe:return t=ao(t),f(e,t,n)}if(Se(t)||ye(t))return t=Hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,fo(t),n);if(t.$$typeof===D)return f(e,ja(e,t),n);mo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ne:return n.key===i?l(e,t,n,r):null;case re:return n.key===i?u(e,t,n,r):null;case fe:return n=ao(n),p(e,t,n,r)}if(Se(n)||ye(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,fo(n),r);if(n.$$typeof===D)return p(e,t,ja(e,n),r);mo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ne:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case re:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case fe:return r=ao(r),m(e,t,n,r,i)}if(Se(r)||ye(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,fo(r),i);if(r.$$typeof===D)return m(e,t,n,ja(t,r),i);mo(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&ra(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return F&&ra(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&ra(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),F&&ra(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return F&&ra(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),F&&ra(i,g),u}function _(e,r,a,c){if(typeof a==`object`&&a&&a.type===ie&&a.key===null&&a.props.ref===void 0&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case ne:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===ie){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),po(c,a),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===fe&&ao(l)===r.type){n(e,r.sibling),c=i(r,a.props),po(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===ie?(c=Hi(a.props.children,e.mode,c,a.key),po(c,a),c.return=e,e=c):(c=Vi(a.type,a.key,a.props,null,e.mode,c),po(c,a),c.return=e,e=c)}return o(e);case re:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Gi(a,e.mode,c),c.return=e,e=c}return o(e);case fe:return a=ao(a),_(e,r,a,c)}if(Se(a))return h(e,r,a,c);if(ye(a)){if(l=ye(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return _(e,r,fo(a),c);if(a.$$typeof===D)return _(e,r,ja(e,a),c);mo(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ui(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{uo=0;var i=_(e,t,n,r);return lo=null,i}catch(t){if(t===$a||t===to)throw t;var a=Li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var go=ho(!0),_o=ho(!1),vo=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function So(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Pi(e),Ni(e,null,n),t}return Ai(e,r,t,n),Pi(e)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}function wo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var To=!1;function Eo(){if(To){var e=Wa;if(e!==null)throw e}}function Do(e,t,n,r){To=!1;var i=e.updateQueue;vo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(G&f)===f:(r&f)===f){f!==0&&f===Ua&&(To=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:vo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ud|=o,e.lanes=o,e.memoizedState=d}}function Oo(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ko(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Oo(n[e],t)}var Ao=Ee(null),jo=Ee(0);function Mo(e,t){e=cd,A(jo,e),A(Ao,t),cd=e|t.baseLanes}function No(){A(jo,cd),A(Ao,Ao.current)}function Po(){cd=jo.current,De(Ao),De(jo)}var Fo=Ee(null),Io=null;function Lo(e){var t=e.alternate;A(Ho,Ho.current&1),A(Fo,e),Io===null&&(t===null||Ao.current!==null||t.memoizedState!==null)&&(Io=e)}function Ro(e){A(Ho,Ho.current),A(Fo,e),Io===null&&(Io=e)}function zo(e){e.tag===22?(A(Ho,Ho.current),A(Fo,e),Io===null&&(Io=e)):Bo()}function Bo(){A(Ho,Ho.current),A(Fo,Fo.current)}function Vo(e){De(Fo),Io===e&&(Io=null),De(Ho)}var Ho=Ee(0);function Uo(e,t){A(Fo,Fo.current),A(Ho,t)}function Wo(e){De(Ho),De(Fo),Io===e&&(Io=null)}function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||um(n)||dm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=0,L=null,R=null,z=null,qo=!1,Jo=!1,Yo=!1,Xo=0,Zo=0,Qo=null,$o=0;function es(){throw Error(s(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kr(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,i,a){return Ko=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?_c:vc,Yo=!1,a=n(r,i),Yo=!1,Jo&&(a=is(t,n,r,i)),rs(e),a}function rs(e){O.H=gc;var t=R!==null&&R.next!==null;if(Ko=0,z=R=L=null,qo=!1,Zo=0,Qo=null,t)throw Error(s(300));e===null||Fc||(e=e.dependencies,e!==null&&Oa(e)&&(Fc=!0))}function is(e,t,n,r){L=e;var i=0;do{if(Jo&&(Qo=null),Zo=0,Jo=!1,25<=i)throw Error(s(301));if(i+=1,z=R=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=yc,a=t(n,r)}while(Jo);return a}function as(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?fs(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function os(){var e=Xo!==0;return Xo=0,e}function ss(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cs(e){if(qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qo=!1}Ko=0,z=R=L=null,Jo=!1,Zo=Xo=0,Qo=null}function ls(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?L.memoizedState=z=e:z=z.next=e,z}function us(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=z===null?L.memoizedState:z.next;if(t!==null)z=t,R=e;else{if(e===null)throw L.alternate===null?Error(s(467)):Error(s(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},z===null?L.memoizedState=z=e:z=z.next=e}return z}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=Zo;return Zo+=1,Qo===null&&(Qo=[]),e=io(Qo,e,t),t=L,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?_c:vc),e}function ps(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return fs(e);if(e.$$typeof===_e)return;if(e.$$typeof===D)return Aa(e)}throw Error(s(438,String(e)))}function ms(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ds(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=he;return t.index++,n}function hs(e,t){return typeof t==`function`?t(e):t}function gs(e){return _s(us(),R,e)}function _s(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ko&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ua&&(d=!0);else if((Ko&p)===p){u=u.next,p===Ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,L.lanes|=p,ud|=p;f=u.action,Yo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,L.lanes|=f,ud|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Kr(a,e.memoizedState)&&(Fc=!0,d&&(n=Wa,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vs(e){var t=us(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Kr(a,t.memoizedState)||(Fc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ys(e,t,n){var r=L,i=us(),a=F;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Kr((R||i).memoizedState,n);if(o&&(i.memoizedState=n,Fc=!0),i=i.queue,Us(Ss.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||z!==null&&!!(z.memoizedState.tag&1),Rs(e?9:8,{destroy:void 0},xs.bind(null,r,i,n,t),null),e){if(r.flags|=2048,rd===null)throw Error(s(349));a||Ko&127||bs(r,t,n)}return n}function bs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=ds(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&ws(e)}function Ss(e,t,n){return n(function(){Cs(t)&&ws(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kr(e,n)}catch{return!0}}function ws(e){var t=Mi(e,2);t!==null&&Rd(t,e,2)}function Ts(e){var t=ls();if(typeof e==`function`){var n=e;if(e=n(),Yo){rt(!0);try{n()}finally{rt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t}function Es(e,t,n,r){return e.baseState=n,_s(e,R,typeof r==`function`?r:hs)}function B(e,t,n,r,i){if(pc(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};O.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ds(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};o.types=a===null?null:a.types,O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Os(e,t,s)}catch(n){As(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Os(e,t,a)}catch(n){As(e,t,n)}}function Os(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ks(e,t,n)},function(n){return As(e,t,n)}):ks(e,t,n)}function ks(e,t,n){t.status=`fulfilled`,t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ds(e,n)))}function As(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,js(t),t=t.next;while(t!==r)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ms(e,t){return t}function Ns(e,t){if(F){var n=rd.formState;if(n!==null){a:{var r=L;if(F){if(la){b:{for(var i=la,a=da;i.nodeType!==8;)if(!a||(i=pm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){la=pm(i.nextSibling),r=i.data===`F!`;break a}}pa(r)}r=!1}r&&(t=n[0])}}return n=ls(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=r,n=V.bind(null,L,r),r.dispatch=n,r=Ts(!1),a=fc.bind(null,L,!1,r.queue),r=ls(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=B.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ps(e){return Fs(us(),R,e)}function Fs(e,t,n){if(t=_s(e,t,Ms)[0],e=gs(hs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=fs(t)}catch(e){throw e===$a?to:e}else r=t;t=us();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,Rs(9,{destroy:void 0},Is.bind(null,i,n),null)),[r,a,e]}function Is(e,t){e.action=t}function Ls(e){var t=us(),n=R;if(n!==null)return Fs(t,n,e);us(),t=t.memoizedState,n=us();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=ds(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zs(){return us().memoizedState}function Bs(e,t,n,r){var i=ls();L.flags|=e,i.memoizedState=Rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Vs(e,t,n,r){var i=us();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&ts(r,R.memoizedState.deps)?i.memoizedState=Rs(t,a,n,r):(L.flags|=e,i.memoizedState=Rs(1|t,a,n,r))}function Hs(e,t){Bs(8390656,8,e,t)}function Us(e,t){Vs(2048,8,e,t)}function Ws(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ds(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gs(e){var t=us().memoizedState;return Ws({ref:t,nextImpl:e}),function(){if(U&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ks(e,t){return Vs(4,2,e,t)}function qs(e,t){return Vs(4,4,e,t)}function Js(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,n){n=n==null?null:n.concat([e]),Vs(4,4,Js.bind(null,t,e),n)}function Xs(){}function Zs(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ts(t,r[1]))return r[0];if(r=e(),Yo){rt(!0);try{e()}finally{rt(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||Ko&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=Id(),L.lanes|=e,ud|=e,n)}function ec(e,t,n,r){return Kr(n,t)?n:Ao.current===null?!(Ko&106)||Ko&1073741824&&!(G&261930)?(Fc=!0,e.memoizedState=n):(e=Id(),L.lanes|=e,ud|=e,t):(e=$s(e,n,r),Kr(e,t)||(Fc=!0),e)}function tc(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};s.types=o===null?null:o.types,O.T=s,fc(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?dc(e,t,qa(c,r),Fd(e)):dc(e,t,r,Fd(e))}catch(n){dc(e,t,{then:function(){},status:`rejected`,reason:n},Fd())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function nc(){}function rc(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ic(e).queue;tc(e,i,t,Ce,n===null?nc:function(){return ac(e),n(r)})}function ic(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:Ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ac(e){var t=ic(e);t.next===null&&(t=e.alternate.memoizedState),dc(e,t.next.queue,{},Fd())}function oc(){return Aa(dh)}function sc(){return us().memoizedState}function cc(){return us().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fd();e=xo(n);var r=So(t,e,n);r!==null&&(Rd(r,t,n),Co(r,t,n)),t={cache:Ia()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=Fd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pc(e)?mc(t,n):(n=ji(e,t,n,r),n!==null&&(Rd(n,e,r),hc(n,t,r)))}function V(e,t,n){dc(e,t,n,Fd())}function dc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pc(e))mc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Kr(s,o))return Ai(e,t,i,0),rd===null&&ki(),!1}catch{}if(n=ji(e,t,i,r),n!==null)return Rd(n,e,r),hc(n,t,r),!0}return!1}function fc(e,t,n,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pc(e)){if(t)throw Error(s(479))}else t=ji(e,n,r,2),t!==null&&Rd(t,e,2)}function pc(e){var t=e.alternate;return e===L||t!==null&&t===L}function mc(e,t){Jo=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}var gc={readContext:Aa,use:ps,useCallback:es,useContext:es,useEffect:es,useImperativeHandle:es,useLayoutEffect:es,useInsertionEffect:es,useMemo:es,useReducer:es,useRef:es,useState:es,useDebugValue:es,useDeferredValue:es,useTransition:es,useSyncExternalStore:es,useId:es,useHostTransitionStatus:es,useFormState:es,useActionState:es,useOptimistic:es,useMemoCache:es,useCacheRefresh:es,useEffectEvent:es},_c={readContext:Aa,use:ps,useCallback:function(e,t){return ls().memoizedState=[e,t===void 0?null:t],e},useContext:Aa,useEffect:Hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Bs(4194308,4,Js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bs(4194308,4,e,t)},useInsertionEffect:function(e,t){Bs(4,2,e,t)},useMemo:function(e,t){var n=ls();t=t===void 0?null:t;var r=e();if(Yo){rt(!0);try{e()}finally{rt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ls();if(n!==void 0){var i=n(t);if(Yo){rt(!0);try{n(t)}finally{rt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=ls();return e={current:e},t.memoizedState=e},useState:function(e){e=Ts(e);var t=e.queue,n=V.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){return $s(ls(),e,t)},useTransition:function(){var e=Ts(!1);return e=tc.bind(null,L,e.queue,!0,!1),ls().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,i=ls();if(F){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),rd===null)throw Error(s(349));G&127||bs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Hs(Ss.bind(null,r,a,e),[e]),r.flags|=2048,Rs(9,{destroy:void 0},xs.bind(null,r,a,n,t),null),n},useId:function(){var e=ls(),t=rd.identifierPrefix;if(F){var n=na,r=ta;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=$o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=ls();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fc.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:ms,useCacheRefresh:function(){return ls().memoizedState=lc.bind(null,L)},useEffectEvent:function(e){var t=ls(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:Aa,use:ps,useCallback:Zs,useContext:Aa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:gs,useRef:zs,useState:function(){return gs(hs)},useDebugValue:Xs,useDeferredValue:function(e,t){return ec(us(),R.memoizedState,e,t)},useTransition:function(){var e=gs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:sc,useHostTransitionStatus:oc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){return Es(us(),R,e,t)},useMemoCache:ms,useCacheRefresh:cc,useEffectEvent:Gs},yc={readContext:Aa,use:ps,useCallback:Zs,useContext:Aa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:vs,useRef:zs,useState:function(){return vs(hs)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=us();return R===null?$s(n,e,t):ec(n,R.memoizedState,e,t)},useTransition:function(){var e=vs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:sc,useHostTransitionStatus:oc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var n=us();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Es(n,R,e,t)},useMemoCache:ms,useCacheRefresh:cc,useEffectEvent:Gs};function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fd(),i=xo(r);i.payload=t,n!=null&&(i.callback=n),t=So(e,i,r),t!==null&&(Rd(t,e,r),Co(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fd(),i=xo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=So(e,i,r),t!==null&&(Rd(t,e,r),Co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fd(),r=xo(n);r.tag=2,t!=null&&(r.callback=t),t=So(e,r,n),t!==null&&(Rd(t,e,n),Co(t,e,n))}};function Sc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(i,a):!0}function Cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function wc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=E({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Tc(e){Ti(e)}function Ec(e){console.error(e)}function Dc(e){Ti(e)}function Oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){return n=xo(n),n.tag=3,n.payload={element:null},n.callback=function(){Oc(e,t)},n}function jc(e){return e=xo(e),e.tag=3,e}function Mc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){kc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){kc(t,n,r),typeof i!=`function`&&(Sd===null?Sd=new Set([this]):Sd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Nc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Da(t,n,i,!0),n=Fo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Io===null?Xd():n.alternate===null&&ld===0&&(ld=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===no?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),vf(e,r,i)),!1;case 22:return n.flags|=65536,r===no?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),vf(e,r,i)),!1}throw Error(s(435,n.tag))}return vf(e,r,i),Xd(),!1}if(F)return t=Fo.current,t===null?(r!==fa&&(t=Error(s(423),{cause:r}),ya(qi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=qi(r,n),i=Ac(e.stateNode,r,i),wo(e,i),ld!==4&&(ld=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==fa&&(e=Error(s(422),{cause:r}),ya(qi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=qi(a,n),hd===null?hd=[a]:hd.push(a),ld!==4&&(ld=2),t===null)return!0;r=qi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Ac(n.stateNode,r,e),wo(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(Sd===null||!Sd.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=jc(i),Mc(i,e,n,r),wo(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Pc=Error(s(461)),Fc=!1;function Ic(e,t,n,r){t.child=e===null?_o(t,null,n,r):go(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ka(t),r=ns(e,t,n,o,a,i),s=os(),e!==null&&!Fc?(ss(e,t,i),dl(e,t,i)):(F&&s&&aa(t),t.flags|=1,Ic(e,t,r,i),t.child)}function Rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,zc(e,t,a,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!fl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?qr:n,n(o,r)&&e.ref===t.ref)return dl(e,t,i)}return t.flags|=1,e=zi(a,r),e.ref=t.ref,e.return=t,t.child=e}function zc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(qr(a,r)&&e.ref===t.ref){if(Fc=!1,t.pendingProps=r=a,fl(e,i))e.flags&131072&&(Fc=!0);else return t.lanes=e.lanes,dl(e,t,i)}}return qc(e,t,n,r,i)}function Bc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Za(t,a===null?null:a.cachePool),a===null?No():Mo(t,a),zo(t);else return r=t.lanes=536870912,Hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Za(t,null),No(),Bo()):(Za(t,a.cachePool),Mo(t,a),Bo(),t.memoizedState=null);return Ic(e,t,i,n),t.child}function Vc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hc(e,t,n,r,i){var a=Xa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Za(t,null),No(),zo(t),e!==null&&Da(e,t,r,!0),t.childLanes=i,null}function Uc(e,t){return t=nl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wc(e,t,n){return go(t,e.child,null,n),e=Uc(t,t.pendingProps),e.flags|=2,Vo(t),t.memoizedState=null,e}function Gc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=Uc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Vc(null,e);if(Ro(t),(e=la)?(e=lm(e,da),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea===null?null:{id:ta,overflow:na},retryLane:536870912,hydrationErrors:null},n=Wi(e),n.return=t,t.child=n,ca=t,la=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return Uc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Ro(t),i){if(t.flags&256)t.flags&=-257,t=Wc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(Fc||Da(e,t,n,!1),i=(n&e.childLanes)!==0,Fc||i){if(Ao.current===null){if(r=rd,r!==null&&(o=St(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Mi(e,o),Rd(r,e,o),Pc;Xd()}t=Wc(e,t,n)}else e=a.treeContext,la=pm(o.nextSibling),ca=t,F=!0,ua=null,da=!1,e!==null&&sa(t,e),t=Uc(t,r),t.flags|=134221824;return t}return e=zi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qc(e,t,n,r,i){return ka(t),n=ns(e,t,n,r,void 0,i),r=os(),e!==null&&!Fc?(ss(e,t,i),dl(e,t,i)):(F&&r&&aa(t),t.flags|=1,Ic(e,t,n,i),t.child)}function Jc(e,t,n,r,i,a){return ka(t),t.updateQueue=null,n=is(t,r,n,i),rs(e),r=os(),e!==null&&!Fc?(ss(e,t,a),dl(e,t,a)):(F&&r&&aa(t),t.flags|=1,Ic(e,t,n,a),t.child)}function Yc(e,t,n,r,i){if(ka(t),t.stateNode===null){var a=Fi,o=n.contextType;typeof o==`object`&&o&&(a=Aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},yo(t),o=n.contextType,a.context=typeof o==`object`&&o?Aa(o):Fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(bc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&xc.enqueueReplaceState(a,a.state,null),Do(t,r,a,i),Eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=wc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Fi,typeof u==`object`&&u&&(o=Aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Cc(t,a,r,o),vo=!1;var f=t.memoizedState;a.state=f,Do(t,r,a,i),Eo(),l=t.memoizedState,s||f!==l||vo?(typeof d==`function`&&(bc(t,n,d,r),l=t.memoizedState),(c=vo||Sc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bo(e,t),o=t.memoizedProps,u=wc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Fi,typeof l==`object`&&l&&(c=Aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Cc(t,a,r,c),vo=!1,f=t.memoizedState,a.state=f,Do(t,r,a,i),Eo();var p=t.memoizedState;o!==d||f!==p||vo||e!==null&&e.dependencies!==null&&Oa(e.dependencies)?(typeof s==`function`&&(bc(t,n,s,r),p=t.memoizedState),(u=vo||Sc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Kc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=go(t,e.child,null,i),t.child=go(t,null,n,i)):Ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=dl(e,t,i),e}function Xc(e,t,n,r){return _a(),t.flags|=256,Ic(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:Qa()}}function $c(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=pd),e}function el(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Ho.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(i?Lo(t):Bo(),(e=la)?(e=lm(e,da),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea===null?null:{id:ta,overflow:na},retryLane:536870912,hydrationErrors:null},n=Wi(e),n.return=t,t.child=n,ca=t,la=null)):e=null,e===null)throw pa(t);return t.lanes=dm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Bo(),i=t.mode,a=nl({mode:`hidden`,children:a},i),r=Hi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Qc(n),r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(null,r)):(Lo(t),tl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return il(e,t,a,o,r,c,s,n)}return i?(Bo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=zi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Hi(i,a,n,null),i.flags|=2):i=zi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Vc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Qc(n):(a=i.cachePool,a===null?a=Qa():(s=I._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(e.child,r)):(Lo(t),n=e.child,e=n.sibling,n=zi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function tl(e,t){return t=nl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function nl(e,t){return e=Li(22,e,null,t),e.lanes=0,e}function rl(e,t,n){return go(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function il(e,t,n,r,i,a,o,c){if(n)return t.flags&256?(Lo(t),t.flags&=-257,rl(e,t,c)):t.memoizedState===null?(Bo(),a=i.fallback,o=t.mode,i=nl({mode:`visible`,children:i.children},o),a=Hi(a,o,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,go(t,e.child,null,c),i=t.child,i.memoizedState=Qc(c),i.childLanes=$c(e,r,c),t.memoizedState=Zc,Vc(null,i)):(Bo(),t.child=e.child,t.flags|=128,null);if(Lo(t),dm(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(s(419)),i.stack=``,i.digest=r,ya({value:i,source:null,stack:null})),rl(e,t,c)}if(Fc||Da(e,t,c,!1),r=(c&e.childLanes)!==0,Fc||r){if(Ao.current!==null)return rl(e,t,c);if(r=rd,r!==null&&(i=St(r,c),i!==0&&i!==o.retryLane))throw o.retryLane=i,Mi(e,i),Rd(r,e,i),Pc;return um(a)||Xd(),rl(e,t,c)}return um(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,la=pm(a.nextSibling),ca=t,F=!0,ua=null,da=!1,e!==null&&sa(t,e),t=tl(t,i.children),t.flags|=134221824,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ta(e.return,t,n)}function ol(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Go(n)===null&&(t=e),e=e.sibling}return t}function sl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function cl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ll(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Ho.current;if(t.flags&128)return Uo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Uo(t,o),i===`backwards`&&e!==null?(cl(e),Ic(e,t,r,n),cl(e)):Ic(e,t,r,n),r=F?Zi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,cl(t)),sl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,a,r);break;case`together`:sl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,a,r)}return t.child}function ul(e,t,n){var r=t.pendingProps;return Ca(t,t.type,r.value),Ic(e,t,r.children,n),t.child}function dl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ud|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=zi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Oa(e)))}function pl(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),Ca(t,I,e.memoizedState.cache),_a();break;case 27:case 5:Pe(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Lo(t),t.flags|=128,null;r=Da(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?el(e,t,n):(Lo(t),e=dl(e,t,n),e===null?null:e.sibling)}Lo(t);break;case 19:if(t.flags&128)return ll(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Da(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ll(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Uo(t,Ho.current),r)break;return null;case 22:return t.lanes=0,Bc(e,t,n,t.pendingProps);case 24:Ca(t,I,e.memoizedState.cache)}return dl(e,t,n)}function ml(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Fc=!0;else{if(!fl(e,n)&&!(t.flags&128))return Fc=!1,pl(e,t,n);Fc=!!(e.flags&131072)}}else Fc=!1,F&&t.flags&1048576&&ia(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ao(t.elementType),t.type=e,typeof e==`function`)Ri(e)?(r=wc(e,r),t.tag=1,t=Yc(null,t,e,r,n)):(t.tag=0,t=qc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ce){t.tag=11,t=Lc(null,t,e,r,n);break a}if(i===de){t.tag=14,t=Rc(null,t,e,r,n);break a}if(i===D){t.tag=10,t.type=e,t=ul(null,t,n);break a}}throw t=xe(e)||e,Error(s(306,t,``))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=wc(r,t.pendingProps),Yc(e,t,r,i,n);case 3:a:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,bo(e,t),Do(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ca(t,I,r),r!==a.cache&&Ea(t,[I],n,!0),Eo(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Xc(e,t,r,n);break a}if(r!==i){i=qi(Error(s(424)),t),ya(i),t=Xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(la=pm(e.firstChild),ca=t,F=!0,ua=null,da=!0,n=_o(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(_a(),r===i){t=dl(e,t,n);break a}Ic(e,t,r,n)}t=t.child}return t;case 26:return Kc(e,t),e===null?(n=Lm(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(t.stateNode=gp(t.type,t.pendingProps,Ae.current,t)):t.memoizedState=Lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&F&&(r=t.stateNode=ym(t.type,t.pendingProps,Ae.current),ca=t,da=!0,i=la,Ep(t.type)?(mm=i,la=pm(r.firstChild)):la=i),Ic(e,t,t.pendingProps.children,n),Kc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((i=r=la)&&(r=sm(r,t.type,t.pendingProps,da),r===null?i=!1:(t.stateNode=r,ca=t,la=pm(r.firstChild),da=!1,i=!0)),i||pa(t)),Pe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,_p(i,a)?r=null:o!==null&&_p(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ns(e,t,as,null,null,n),dh._currentValue=i),Kc(e,t),Ic(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=la)&&(n=cm(n,t.pendingProps,da),n===null?e=!1:(t.stateNode=n,ca=t,la=null,e=!0)),e||pa(t)),null;case 13:return el(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=go(t,null,r,n):Ic(e,t,r,n),t.child;case 11:return Lc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Kc(e,t),Ic(e,t,r,n),t.child;case 8:return Ic(e,t,t.pendingProps.children,n),t.child;case 12:return Ic(e,t,t.pendingProps.children,n),t.child;case 10:return ul(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,ka(t),i=Aa(i),r=r(i),t.flags|=1,Ic(e,t,r,n),t.child;case 14:return Rc(e,t,t.type,t.pendingProps,n);case 15:return zc(e,t,t.type,t.pendingProps,n);case 19:return ll(e,t,n);case 31:return Gc(e,t,n);case 22:return Bc(e,t,n,t.pendingProps);case 24:return ka(t),r=Aa(I),e===null?(i=Xa(),i===null&&(i=rd,a=Ia(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},yo(t),Ca(t,I,i)):((e.lanes&n)!==0&&(bo(e,t),Do(t,null,null,n),Eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ca(t,I,r),r!==i.cache&&Ea(t,[I],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ca(t,I,r))),Ic(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:F&&aa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Kc(e,t),Ic(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function hl(e){e.flags|=4}function gl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Qm(t,r):Qm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(qd())e.flags|=8192;else throw oo=no,eo}}else e.flags&=-16777217}function _l(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$m(t)){if(qd())e.flags|=8192;else throw oo=no,eo}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:gt(),e.lanes|=t,md|=t)}function yl(e,t){if(!F)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function bl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(oa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bl(t),null;case 1:return bl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wa(I),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ga(t)?hl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,va())),bl(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(hl(t),a===null?(bl(t),gl(t,i,null,r,n)):(bl(t),_l(t,a))):a?a===e.memoizedState?(bl(t),t.flags&=-16777217):(hl(t),bl(t),_l(t,a)):(e=e.memoizedProps,e!==r&&hl(t),bl(t),gl(t,i,e,r,n)),null;case 27:if(Fe(t),n=Ae.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return bl(t),t.subtreeFlags&=-33554433,null}e=Oe.current,ga(t)?ma(t,e):(e=ym(i,r,n),t.stateNode=e,hl(t))}return bl(t),t.subtreeFlags&=-33554433,null;case 5:if(Fe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return bl(t),t.subtreeFlags&=-33554433,null}if(a=Oe.current,ga(t))ma(t,a);else{var o=pp(Ae.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[Ot]=t,a[kt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(op(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&hl(t)}}return bl(t),t.subtreeFlags&=-33554433,gl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=Ae.current,ga(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=ca,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ip(e.nodeValue,n)),e||pa(t,!0)}else e=pp(e).createTextNode(r),e[Ot]=t,t.stateNode=e}return bl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ga(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[Ot]=t}else _a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),e=!1}else n=va(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Vo(t),t):(Vo(t),null);if(t.flags&128)throw Error(s(558))}return bl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ga(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[Ot]=t}else _a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),i=!1}else i=va(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Vo(t),t):(Vo(t),null)}return Vo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),bl(t),null);case 4:return Ne(),e===null&&Jf(t.stateNode.containerInfo),t.flags|=67108864,bl(t),null;case 10:return wa(t.type),bl(t),null;case 19:if(Wo(t),r=t.memoizedState,r===null)return bl(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)yl(r,!1);else{if(ld!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Go(e),a!==null){for(t.flags|=128,yl(r,!1),e=a.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bi(n,e),n=n.sibling;return Uo(t,Ho.current&1|2),F&&ra(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ke()>bd&&(t.flags|=128,i=!0,yl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Go(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),yl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!F)return bl(t),null}else 2*Ke()-r.renderingStartTime>bd&&n!==536870912&&(t.flags|=128,i=!0,yl(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ke(),e.sibling=null,a=Ho.current,a=i?a&1|2:a&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||F?Uo(t,a):(n=a,A(Fo,t),A(Ho,n),Io===null&&(Io=t)),F&&ra(t,r.treeForkCount),e}return bl(t),null;case 22:case 23:return Vo(t),Po(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(bl(t),t.subtreeFlags&6&&(t.flags|=8192)):bl(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&De(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wa(I),bl(t),null;case 25:return null;case 30:return t.flags|=33554432,bl(t),null}throw Error(s(156,t.tag))}function Sl(e,t){switch(oa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wa(I),Ne(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 31:if(t.memoizedState!==null){if(Vo(t),t.alternate===null)throw Error(s(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Vo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Wo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ne(),null;case 10:return wa(t.type),null;case 22:case 23:return Vo(t),Po(),e!==null&&De(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wa(I),null;case 25:return null;default:return null}}function Cl(e,t){switch(oa(t),t.tag){case 3:wa(I),Ne();break;case 26:case 27:case 5:Fe(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Vo(t);break;case 13:Vo(t);break;case 19:Wo(t);break;case 10:wa(t.type);break;case 22:case 23:Vo(t),Po(),e!==null&&De(Ya);break;case 24:wa(I)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){q(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){q(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){q(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ko(t,n)}catch(t){q(e,e.return,t)}}}function Dl(e,t,n){n.props=wc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){q(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=Si(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Rp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new zp(e);h(e.child,!1,nm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){q(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){q(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){q(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)im(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&im(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&am(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){q(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;cp(r,e.type,n,t),r[kt]=t}catch(t){q(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ep(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ep(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wn)),Al(e,r),N=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Ep(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),N=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Ep(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);op(t,r,n),t[Ot]=e,t[kt]=n}catch(t){q(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Mp(o);r.push(s),s.view&&(a=!0)}else a||Mp(o).view&&(a=!0);Hl=!0,kp(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ap(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(s(544));var n=t.name;t=wi(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Si(r,n),a=wi(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Ld(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=wi(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Ld(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=Si(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=wi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Ld(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Ld(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Si(t,e.stateNode);t=wi(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Mp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&kp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Si(n,r),a=wi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Np)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Ld(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,dp=bh,e=Qr(e),$r(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(fp={focusedElem:e,selectionRange:r},bh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var a=t.stateNode;try{var o=wc(t.type,i);n=a.getSnapshotBeforeUpdate(o,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(e){q(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)om(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:om(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Si(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=wi(i.default,i.update),i!==`none`&&Jl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ru(e,n),r&4&&wl(5,n);break;case 1:if(Ru(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){q(n,n.return,e)}else{var i=wc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){q(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Ru(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ko(e,t)}catch(e){q(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Ru(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Ru(e,n);break;case 31:Ru(e,n),r&4&&Du(e,n);break;case 13:Ru(e,n),r&4&&Ou(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=xf.bind(null,n),fm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Bu(e,n,r)):Ru(e,n),su=t,H=i}break;case 30:Ru(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Ru(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){q(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,N=!0}catch(t){q(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Op(s,!0):Op(e.stateNode,!1)}catch(t){q(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cu=null,wu=!1;function Tu(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount==`function`)try{nt.onCommitFiberUnmount(tt,n)}catch{}switch(n.tag){case 26:H||kl(n,t),Tu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=Cu,i=wu;Ep(n.type)&&(Cu=n.stateNode,wu=!1),Tu(e,t,n),bm(n.stateNode,n.type,n.memoizedProps),Cu=r,wu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=Cu,i=wu,Cu=null,Tu(e,t,n),Cu=r,wu=i,Cu!==null){if(wu)try{(Cu.nodeType===9?Cu.body:Cu.nodeName===`HTML`?Cu.ownerDocument.body:Cu).removeChild(n.stateNode),N=!0}catch(e){q(n,t,e)}else try{Cu.removeChild(n.stateNode),N=!0}catch(e){q(n,t,e)}}break;case 18:Cu!==null&&(wu?(e=Cu,Dp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Kh(e)):Dp(Cu,n.stateNode));break;case 4:r=Cu,i=wu,Cu=n.stateNode.containerInfo,wu=!0,Tu(e,t,n),Cu=r,wu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),Tu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,Tu(e,t,n),H=r;break;case 30:kl(n,t),Tu(e,t,n);break;case 7:H||kl(n,t),Tu(e,t,n);break;default:Tu(e,t,n)}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kh(e)}catch(e){q(t,t.return,e)}}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kh(e)}catch(e){q(t,t.return,e)}}function ku(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(s(435,e.tag))}}function Au(e,t){var n=ku(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Sf.bind(null,e,t);t.then(r,r)}})}function ju(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i],o=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Ep(l.type)){Cu=l.stateNode,wu=!1;break a}break;case 5:Cu=l.stateNode,wu=!1;break a;case 3:case 4:Cu=l.stateNode.containerInfo,wu=!0;break a}l=l.return}if(Cu===null)throw Error(s(160));Eu(o,c,a),Cu=null,wu=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nu(t,e,n),t=t.sibling}var Mu=null;function Nu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var a=0;a<r.length;a++){var o=r[a];o.ref.impl=o.nextImpl}ju(t,e,n),Pu(e),i&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),i&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Mu,ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=gp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=a.ownerDocument||a;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Ft]||r[Ot]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),op(r,t,n),r[Ot]=e,Ht(r),t=r;break a;case`link`:if(a=Ym(`link`,`href`,i).get(t+(n.href||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break b}}r=i.createElement(t),op(r,t,n),i.head.appendChild(r);break;case`meta`:if(a=Ym(`meta`,`content`,i).get(t+(n.content||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){a.splice(o,1);break b}}r=i.createElement(t),op(r,t,n),i.head.appendChild(r);break;default:throw Error(s(468,t))}r[Ot]=e,Ht(r),t=r}e.stateNode=t}}else su||Xm(a,e.type,e.stateNode)}else e.stateNode=Wm(a,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):i.count--,n===null?su||Xm(a,e.type,e.stateNode):Wm(a,n,e.memoizedProps))}break;case 27:ju(t,e,n),Pu(e),i&512&&(H||r===null||kl(r,r.return)),r!==null&&i&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(a=cu,cu=!1,ju(t,e,n),cu=a,Pu(e),i&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{gn(t,``),N=!0}catch(t){q(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),i&1024&&(lu=!0);break;case 6:if(ju(t,e,n),Pu(e),i&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,N=!0}catch(t){q(e,e.return,t)}}break;case 3:if(N=!1,Jm=null,a=Mu,Mu=wm(t.containerInfo),ju(t,e,n),Mu=a,Pu(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Kh(t.containerInfo)}catch(t){q(e,e.return,t)}lu&&(lu=!1,Fu(e)),N=!1;break;case 4:i=cu,cu=su,r=Qt(),a=Mu,Mu=wm(e.stateNode.containerInfo),ju(t,e,n),Pu(e),Mu=a,N&&pu&&(mu=!0),N=r,cu=i;break;case 12:ju(t,e,n),Pu(e);break;case 31:ju(t,e,n),Pu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:ju(t,e,n),Pu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vd=Ke()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:a=e.memoizedState!==null,o=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||a,cu=u||a,H=l||o,ju(t,e,n),H=l,cu=u,su=c,Pu(e),i&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||r===null||o||su||H||(t=o||H,n=su,r=H,su=a||su,H=t,zu(e,2),su=n,H=r),!a&&cu||yu(e,a)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:ju(t,e,n),Pu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:i&512&&(H||r===null||kl(r,r.return)),i=Qt(),a=pu,o=(n&335544064)===n,c=e.memoizedProps,pu=o&&wi(c.default,c.update)!==`none`,ju(t,e,n),Pu(e),o&&r!==null&&N&&(e.flags|=4),pu=a,N=i;break;case 21:break;case 7:i&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ju(t,e,n),Pu(e)}}function Pu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Pl(i)){var a=i.stateNode;r===null?r=[a]:r.push(a)}if(Nl(i))break;i=i.return}var o=r;if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,o);break;case 5:var l=n.stateNode;n.flags&32&&(gn(l,``),n.flags&=-33),Bl(e,Rl(e),l,o);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,o);break;default:throw Error(s(161))}}catch(t){q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,bh=!0,t.reset(),bh=!1),e=e.sibling}}function Iu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling;else ou(t,!1)}function Lu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Iu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ap(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Iu(t,e);break;case 4:r=fu,fu=!1,Iu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Iu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Iu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Si(a,o),o=Si(n.memoizedProps,o);var s=wi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Ld(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Iu(t,e)}}function Ru(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function zu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),zu(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),zu(n,r);break;case 27:r&2&&bm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),zu(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),zu(n,r);break;case 22:n.memoizedState===null&&zu(n,r);break;case 30:kl(n,n.return),zu(n,r);break;case 7:kl(n,n.return);default:zu(n,r)}e=e.sibling}}function Bu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Bu(i,a,n),wl(4,a);break;case 1:if(Bu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){q(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Oo(l[i],c)}catch(e){q(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Xm(wm(c.ownerDocument),a.type,c),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:Bu(i,a,n);break;case 31:Bu(i,a,n),s&&o&4&&Du(i,a);break;case 13:Bu(i,a,n),s&&o&4&&Ou(i,a);break;case 22:a.memoizedState===null&&Bu(i,a,n),Ol(a,a.return);break;case 30:Bu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:Bu(i,a,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&La(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&La(e))}function Uu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Wu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Wu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Uu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Uu(e,t,n,r);break;case 3:Uu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&La(a)));break;case 12:if(a&2048){Uu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){q(t,t.return,e)}}else Uu(e,t,n,r);break;case 31:Uu(e,t,n,r);break;case 13:Uu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Uu(e,t,n,r):(o._visibility|=2,Gu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Uu(e,t,n,r):Ku(e,t)),a&2048&&Vu(s,t);break;case 24:Uu(e,t,n,r),a&2048&&Hu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Uu(e,t,n,r);break;default:Uu(e,t,n,r)}}function Gu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Gu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Gu(a,o,s,c,i)):u._visibility&2?Gu(a,o,s,c,i):Ku(a,o),i&&l&2048&&Vu(o.alternate,o);break;case 24:Gu(a,o,s,c,i),i&&l&2048&&Hu(o.alternate,o);break;default:Gu(a,o,s,c,i)}t=t.sibling}}function Ku(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ku(n,r),i&2048&&Vu(r.alternate,r);break;case 24:Ku(n,r),i&2048&&Hu(r.alternate,r);break;default:Ku(n,r)}t=t.sibling}}var qu=8192;function Ju(e,t,n){if(e.subtreeFlags&qu)for(e=e.child;e!==null;)Yu(e,t,n),e=e.sibling}function Yu(e,t,n){switch(e.tag){case 26:Ju(e,t,n),e.flags&qu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&th(n,e)):nh(n,Mu,e.memoizedState,e.memoizedProps));break;case 5:Ju(e,t,n),e.flags&qu&&(e=e.stateNode,(t&335544128)===t&&th(n,e));break;case 3:case 4:var r=Mu;Mu=wm(e.stateNode.containerInfo),Ju(e,t,n),Mu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=qu,qu=16777216,Ju(e,t,n),qu=r):Ju(e,t,n));break;case 30:if((e.flags&qu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}Ju(e,t,n);break;default:Ju(e,t,n)}}function Xu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qu(e),e=e.sibling}function Qu(e){switch(e.tag){case 0:case 11:case 15:Zu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Zu(e);break;case 12:Zu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$u(e)):Zu(e);break;default:Zu(e)}}function $u(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,ed(r,e)}Xu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),$u(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$u(t));break;default:$u(t)}e=e.sibling}}function ed(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:La(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var td={getCacheForType:function(e){var t=Aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Aa(I).controller.signal}},nd=typeof WeakMap==`function`?WeakMap:Map,U=0,rd=null,W=null,G=0,K=0,id=null,ad=!1,od=!1,sd=!1,cd=0,ld=0,ud=0,dd=0,fd=0,pd=0,md=0,hd=null,gd=null,_d=!1,vd=0,yd=0,bd=1/0,xd=null,Sd=null,Cd=0,wd=null,Td=null,Ed=0,Dd=0,Od=null,kd=null,Ad=null,jd=null,Md=null,Nd=0,Pd=null;function Fd(){return U&2&&G!==0?G&-G:O.T===null?Tt():Rf()}function Id(){if(pd===0){if(!(G&536870912)||F){var e=lt;lt<<=1,!(lt&3932160)&&(lt=262144),pd=e}else pd=536870912}return e=Fo.current,e!==null&&(e.flags|=32),pd}function Ld(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Rp(Si(e.memoizedProps,n))),jd===null&&(jd=[]),jd.push(t.bind(null,r))}}function Rd(e,t,n){(e===rd&&(K===2||K===9)||e.cancelPendingCommit!==null)&&(Gd(e,0),Hd(e,G,pd,!1)),vt(e,n),(!(U&2)||e!==rd)&&(e===rd&&(!(U&2)&&(dd|=n),ld===4&&Hd(e,G,pd,!1)),Af(e))}function zd(e,t,n){if(U&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||pt(e,t),i=r?$d(e,t):Zd(e,t,!0),a=r;do{if(i===0){od&&!r&&Hd(e,t,0,!1);break}if(n=e.current.alternate,a&&!Vd(n))i=Zd(e,t,!1),a=!1;else{if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=hd;var l=c.current.memoizedState.isDehydrated;if(l&&(Gd(c,o).flags|=256),o=Zd(c,o,!1),o!==2&&o!==6){if(sd&&!l){c.errorRecoveryDisabledLanes|=a,dd|=a,i=4;break a}a=gd,gd=i,a!==null&&(gd===null?gd=a:gd.push.apply(gd,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Gd(e,0),Hd(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Hd(r,t,pd,!ad);break a;case 2:gd=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=vd+300-Ke(),10<i)){if(Hd(r,t,pd,!ad),ft(r,0,!0)!==0)break a;Ed=t,r.timeoutHandle=bp(Bd.bind(null,r,n,gd,xd,_d,t,pd,dd,md,ad,a,`Throttled`,-0,0),i);break a}Bd(r,n,gd,xd,_d,t,pd,dd,md,ad,a,null,-0,0)}break}}while(1);Af(e)}function Bd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},Ul=null,Yu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=oh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?vd-Ke():(a&4194048)===a?yd-Ke():0,m=ih(d,m),m!==null)?(Ed=a,e.cancelPendingCommit=m(sf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Hd(e,a,o,!l)):sf(e,t,a,n,r,i,o,s,c,l,u,d)}function Vd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hd(e,t,n,r){t=mt(e,t),t&=~fd,t&=~dd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-it(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&bt(e,n,t)}function Ud(){return U&6?!0:(jf(0,!1),!1)}function Wd(){if(W!==null){if(K===0)var e=W.return;else e=W,Sa=xa=null,cs(e),lo=null,uo=0,e=W;for(;e!==null;)Cl(e.alternate,e),e=e.return;W=null}}function Gd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,xp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ed=0,Wd(),rd=e,W=n=zi(e.current,null),G=t,K=0,id=null,ad=!1,od=pt(e,t),sd=!1,md=pd=fd=dd=ud=ld=0,gd=hd=null,_d=!1,cd=mt(e,t),ki(),n}function Kd(e,t){L=null,O.H=gc,t===$a||t===to?(t=so(),K=3):t===eo?(t=so(),K=4):K=t===Pc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,id=t,W===null&&(ld=1,Oc(e,qi(t,e.current)))}function qd(){var e=Fo.current;return e===null?!0:(G&4194048)===G?Io===null:(G&62914560)===G||G&536870912?e===Io:!1}function Jd(){var e=O.H;return O.H=gc,e===null?gc:e}function Yd(){var e=O.A;return O.A=td,e}function Xd(){ld=4,ad||(G&4194048)!==G&&Fo.current!==null||(od=!0),!(ud&134217727)&&!(dd&134217727)||rd===null||Hd(rd,G,pd,!1)}function Zd(e,t,n){var r=U;U|=2;var i=Jd(),a=Yd();(rd!==e||G!==t)&&(xd=null,Gd(e,t)),t=!1;var o=ld;a:do try{if(K!==0&&W!==null){var s=W,c=id;switch(K){case 8:Wd(),o=6;break a;case 3:case 2:case 9:case 6:Fo.current===null&&(t=!0);var l=K;if(K=0,id=null,rf(e,s,c,l),n&&od){o=0;break a}break;default:l=K,K=0,id=null,rf(e,s,c,l)}}Qd(),o=ld;break}catch(t){Kd(e,t)}while(1);return t&&e.shellSuspendCounter++,Sa=xa=null,U=r,O.H=i,O.A=a,W===null&&(rd=null,G=0,ki()),o}function Qd(){for(;W!==null;)tf(W)}function $d(e,t){var n=U;U|=2;var r=Jd(),i=Yd();rd!==e||G!==t?(xd=null,bd=Ke()+500,Gd(e,t)):od=pt(e,t);a:do try{if(K!==0&&W!==null){t=W;var a=id;b:switch(K){case 1:K=0,id=null,rf(e,t,a,1);break;case 2:case 9:if(ro(a)){K=0,id=null,nf(t);break}t=function(){K!==2&&K!==9||rd!==e||(K=7),Af(e)},a.then(t,t);break a;case 3:K=7;break a;case 4:K=5;break a;case 7:ro(a)?(K=0,id=null,nf(t)):(K=0,id=null,rf(e,t,a,7));break;case 5:var o=null;switch(W.tag){case 26:o=W.memoizedState;case 5:case 27:var c=W;if(o?$m(o):c.stateNode.complete){K=0,id=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,af(u))}break b}}K=0,id=null,rf(e,t,a,5);break;case 6:K=0,id=null,rf(e,t,a,6);break;case 8:Wd(),ld=6;break a;default:throw Error(s(462))}}ef();break}catch(t){Kd(e,t)}while(1);return Sa=xa=null,O.H=r,O.A=i,U=n,W===null?(rd=null,G=0,ki(),ld):0}function ef(){for(;W!==null&&!Ge();)tf(W)}function tf(e){var t=ml(e.alternate,e,cd);e.memoizedProps=e.pendingProps,t===null?af(e):W=t}function nf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jc(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=Jc(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:cs(t);var r=t;r===ca&&(F?(ha(r),r.tag===5&&r.stateNode!=null&&(la=r.stateNode)):(ha(r),F=!0));default:Cl(n,t),t=W=Bi(t,cd),t=ml(n,t,cd)}e.memoizedProps=e.pendingProps,t===null?af(e):W=t}function rf(e,t,n,r){Sa=xa=null,cs(t),lo=null,uo=0;var i=t.return;try{if(Nc(e,i,t,n,G)){ld=1,Oc(e,qi(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;ld=1,Oc(e,qi(n,e.current)),W=null;return}t.flags&32768?(F||r===1?e=!0:od||G&536870912?e=!1:(ad=e=!0,(r===2||r===9||r===3||r===6)&&(r=Fo.current,r!==null&&r.tag===13&&(r.flags|=16384))),of(t,e)):af(t)}function af(e){var t=e;do{if(t.flags&32768){of(t,ad);return}e=t.return;var n=xl(t.alternate,t,cd);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);ld===0&&(ld=5)}function of(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);ld=6,W=null}function sf(e,t,n,r,i,a,o,c,l,u,d,f){e.cancelPendingCommit=null;do hf();while(Cd!==0);if(U&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===rd&&(W=rd=null,G=0),Td=t,wd=e,Ed=n,Od=i,kd=r,cf(e,t,n,o,c,l,f)}}function cf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Dd=s,s|=Oi,yt(e,n,s,r,i,a),jd=null,(n&335544064)===n?(Md=Ba(e),r=10262):(Md=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Cf(Xe,function(){return gf(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,i=k.p,k.p=2,a=U,U|=4;try{gu(e,t,n)}finally{U=a,k.p=i,O.T=r}}Cd=1,Hl?Ad=Ip(o,e.containerInfo,Md,df,ff,uf,pf,gf,lf,null,null):(df(),ff(),pf())}function lf(e){if(Cd!==0){var t=wd.onRecoverableError;t(e,{componentStack:null})}}function uf(){Cd===3&&(Cd=0,Lu(Td,wd),Cd=4)}function df(){if(Cd===1){Cd=0;var e=wd,t=Td,n=Ed,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=O.T,O.T=null;var i=k.p;k.p=2;var a=U;U|=4;try{pu=mu=!1,Nu(t,e,n),n=fp;var o=Qr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zr(s.ownerDocument.documentElement,s)){if(c!==null&&$r(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Xr(s,h),v=Xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}bh=!!dp,fp=dp=null}finally{U=a,k.p=i,O.T=r}}e.current=t,Cd=2}}function ff(){if(Cd===2){Cd=0;var e=wd,t=Td,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=U;U|=4;try{vu(e,t.alternate,t)}finally{U=i,k.p=r,O.T=n}}Cd=3}}function pf(){if(Cd===4||Cd===3){Cd=0;var e=Ad;Ad=null,M();var t=wd,n=Td,r=Ed,i=kd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Cd=5:(Cd=0,Td=wd=null,mf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Sd=null),wt(r),n=n.stateNode,nt&&typeof nt.onCommitFiberRoot==`function`)try{nt.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=O.T,a=k.p,k.p=2,O.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{O.T=n,k.p=a}}if(i=jd,o=Md,Md=null,i!==null&&(jd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Ed&3&&hf(),Af(t),a=t.pendingLanes,r&261930&&a&42?t===Pd?Nd++:(Nd=0,Pd=t):(Nd=0,Pd=null),jf(0,!1)}}function mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,La(t)))}function hf(){return Ad!==null&&(Ad.skipTransition(),Ad=null),df(),ff(),pf(),gf()}function gf(){if(Cd!==5)return!1;var e=wd,t=Dd;Dd=0;var n=wt(Ed),r=O.T,i=k.p;try{k.p=32>n?32:n,O.T=null,n=Od,Od=null;var a=wd,o=Ed;if(Cd=0,Td=wd=null,Ed=0,U&6)throw Error(s(331));var c=U;if(U|=4,Qu(a.current),Wu(a,a.current,o,n),U=c,jf(0,!1),nt&&typeof nt.onPostCommitFiberRoot==`function`)try{nt.onPostCommitFiberRoot(tt,a)}catch{}return!0}finally{k.p=i,O.T=r,mf(e,t)}}function _f(e,t,n){t=qi(n,t),t=Ac(e.stateNode,t,2),e=So(e,t,2),e!==null&&(vt(e,2),Af(e))}function q(e,t,n){if(e.tag===3)_f(e,e,n);else for(;t!==null;){if(t.tag===3){_f(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Sd===null||!Sd.has(r))){e=qi(n,e),n=jc(2),r=So(t,n,2),r!==null&&(Mc(n,r,t,e),vt(r,2),Af(r));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(sd=!0,i.add(n),e=yf.bind(null,e,t,n),t.then(e,e))}function yf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rd===e&&(G&n)===n&&(ld===4||ld===3&&(G&62914560)===G&&300>Ke()-vd?U&2?fd|=n:Gd(e,0):fd|=n,md===G&&(md=0)),Af(e)}function bf(e,t){t===0&&(t=gt()),e=Mi(e,t),e!==null&&(vt(e,t),Af(e))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bf(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),bf(e,n)}function Cf(e,t){return Ue(e,t)}var wf=null,Tf=null,Ef=!1,Df=!1,Of=!1,kf=0;function Af(e){e!==Tf&&e.next===null&&(Tf===null?wf=Tf=e:Tf=Tf.next=e),Df=!0,Ef||(Ef=!0,Lf())}function jf(e,t){if(!Of&&Df){Of=!0;do for(var n=!1,r=wf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-it(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,If(r,a))}else a=G,a=ft(r,r===rd?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||pt(r,a)||(n=!0,If(r,a))}r=r.next}while(n);Of=!1}}function Mf(){Nf()}function Nf(){Df=Ef=!1;var e=0;kf!==0&&yp()&&(e=kf);for(var t=Ke(),n=null,r=wf;r!==null;){var i=r.next,a=Pf(r,t);a===0?(r.next=null,n===null?wf=i:n.next=i,i===null&&(Tf=n)):(n=r,(e!==0||a&3)&&(Df=!0)),r=i}Cd!==0&&Cd!==5||jf(e,!1),kf!==0&&(kf=0)}function Pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-it(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=rd,n=G,n=ft(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(K===2||K===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&We(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||pt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&We(r),wt(n)){case 2:case 8:n=Ye;break;case 32:n=Xe;break;case 268435456:n=Qe;break;default:n=Xe}return r=Ff.bind(null,e),n=Ue(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&We(r),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,t){if(Cd!==0&&Cd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hf()&&e.callbackNode!==n)return null;var r=G;return r=ft(e,e===rd?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(zd(e,r,t),Pf(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?Ff.bind(null,e):null)}function If(e,t){if(hf())return null;zd(e,t,!0)}function Lf(){wp(function(){U&6?Ue(Je,Mf):Nf()})}function Rf(){if(kf===0){var e=Ua;e===0&&(e=ct,ct<<=1,!(ct&261888)&&(ct=256)),kf=e}return kf}function zf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Cn(e)}function Bf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=zf((i[kt]||null).action),o=r.submitter;o&&(t=(t=o[kt]||null)?zf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(kf!==0){var e=new FormData(i,o);rc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),rc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Vf=0;Vf<yi.length;Vf++){var Hf=yi[Vf];bi(Hf.toLowerCase(),`on`+(Hf[0].toUpperCase()+Hf.slice(1)))}bi(di,`onAnimationEnd`),bi(fi,`onAnimationIteration`),bi(pi,`onAnimationStart`),bi(`dblclick`,`onDoubleClick`),bi(`focusin`,`onFocus`),bi(`focusout`,`onBlur`),bi(mi,`onTransitionRun`),bi(hi,`onTransitionStart`),bi(gi,`onTransitionCancel`),bi(_i,`onTransitionEnd`),qt(`onMouseEnter`,[`mouseout`,`mouseover`]),qt(`onMouseLeave`,[`mouseout`,`mouseover`]),qt(`onPointerEnter`,[`pointerout`,`pointerover`]),qt(`onPointerLeave`,[`pointerout`,`pointerover`]),Kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Uf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Wf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Uf));function Gf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ti(e)}i.currentTarget=null,a=c}}}}function J(e,t){var n=t[jt];n===void 0&&(n=t[jt]=new Set);var r=e+`__bubble`;n.has(r)||(Yf(t,e,2,!1),n.add(r))}function Kf(e,t,n){var r=0;t&&(r|=4),Yf(n,e,r,t)}var qf=`_reactListening`+Math.random().toString(36).slice(2);function Jf(e){if(!e[qf]){e[qf]=!0,Wt.forEach(function(t){t!==`selectionchange`&&(Wf.has(t)||Kf(t,!1,e),Kf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qf]||(t[qf]=!0,Kf(`selectionchange`,!1,t))}}function Yf(e,t,n,r){switch(Dh(t)){case 2:var i=xh;break;case 8:i=Sh;break;default:i=Ch}n=i.bind(null,t,n,e),i=void 0,!Nn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Xf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Rt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}An(function(){var r=a,i=En(n),o=[];a:{var s=vi.get(e);if(s!==void 0){var c=Wn,u=e;switch(e){case`keypress`:if(zn(n)===0)break a;case`keydown`:case`keyup`:c=cr;break;case`focusin`:u=`focus`,c=$n;break;case`focusout`:u=`blur`,c=$n;break;case`beforeblur`:case`afterblur`:c=$n;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=dr;break;case di:case fi:case pi:c=er;break;case _i:c=fr;break;case`scroll`:case`scrollend`:c=Kn;break;case`wheel`:c=pr;break;case`copy`:case`cut`:case`paste`:c=tr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=lr;break;case`submit`:c=ur;break;case`toggle`:case`beforetoggle`:c=mr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=jn(m,p),g!=null&&d.push(Zf(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==Tn&&(u=n.relatedTarget||n.fromElement)&&(Rt(u)||u[At]))break a;(s||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?Rt(c):null,c!==null&&(f=l(c),d=c.tag,c!==f||d!==5&&d!==27&&d!==6)&&(c=null)):(s=null,c=r),s!==c&&(d=Zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=lr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=s==null?u:Bt(s),h=c==null?u:Bt(c),u=new d(g,m+`leave`,s,n,i),u.target=f,u.relatedTarget=h,g=null,Rt(i)===r&&(d=new d(p,m+`enter`,c,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=s&&c?ee(s,c,$f):null,s!==null&&ep(o,u,s,d,!1),c!==null&&f!==null&&ep(o,f,c,d,!0)))}a:{if(s=r?Bt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=Pr;else if(Or(s)){if(Fr)_=Wr;else{_=Hr;var v=Vr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&bn(r.elementType)&&(_=Pr):_=Ur;if(_&&=_(e,r)){kr(o,_,n,i);break a}v&&v(e,s,r)}switch(v=r?Bt(r):window,e){case`focusin`:(Or(v)||v.contentEditable===`true`)&&(ti=v,ni=r,ri=null);break;case`focusout`:ri=ni=ti=null;break;case`mousedown`:ii=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ii=!1,ai(o,n,i);break;case`selectionchange`:if(ei)break;case`keydown`:case`keyup`:ai(o,n,i)}var y;if(gr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else wr?Sr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(yr&&n.locale!==`ko`&&(wr||b!==`onCompositionStart`?b===`onCompositionEnd`&&wr&&(y=Rn()):(Fn=i,In=`value`in Fn?Fn.value:Fn.textContent,wr=!0)),v=Qf(r,b),0<v.length&&(b=new nr(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=Cr(n),y!==null&&(b.data=y)))),(y=vr?Tr(e,n):Er(e,n))&&(b=Qf(r,`onBeforeInput`),0<b.length&&(v=new nr(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),Bf(o,e,r,n,i)}Gf(o,t)})}function Zf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=jn(e,n),i!=null&&r.unshift(Zf(e,i,a)),i=jn(e,t),i!=null&&r.push(Zf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function $f(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ep(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=jn(n,a),l!=null&&o.unshift(Zf(n,l,c))):i||(l=jn(n,a),l!=null&&o.push(Zf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function rp(e){return(typeof e==`string`?e:``+e).replace(tp,`
`).replace(np,``)}function ip(e,t){return t=rp(t),rp(e)===t}function Y(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&gn(e,``+r);else return;break;case`className`:en(e,`class`,r);break;case`tabIndex`:en(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:en(e,n,r);break;case`style`:yn(e,r,a);return;case`data`:if(t!==`object`){en(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&Y(e,t,`name`,i.name,i,null),Y(e,t,`formEncType`,i.formEncType,i,null),Y(e,t,`formMethod`,i.formMethod,i,null),Y(e,t,`formTarget`,i.formTarget,i,null)):(Y(e,t,`encType`,i.encType,i,null),Y(e,t,`method`,i.method,i,null),Y(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=wn);return;case`onScroll`:r!=null&&J(`scroll`,e);return;case`onScrollEnd`:r!=null&&J(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Cn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:J(`beforetoggle`,e),J(`toggle`,e),$t(e,`popover`,r);break;case`xlinkActuate`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:$t(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=xn.get(n)||n,$t(e,n,r);else return}N=!0}function ap(e,t,n,r,i,a){switch(n){case`style`:yn(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)gn(e,``+r);else return;break;case`onScroll`:r!=null&&J(`scroll`,e);return;case`onScrollEnd`:r!=null&&J(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=wn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Gt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[kt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}N=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):$t(e,n,r)}return}N=!0}function op(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:J(`error`,e),J(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Y(e,t,a,o,n,null)}}i&&Y(e,t,`srcSet`,n.srcSet,n,null),r&&Y(e,t,`src`,n.src,n,null);return;case`input`:J(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:Y(e,t,r,d,n,null)}}dn(e,a,c,l,u,o,i,!1);return;case`select`:for(i in J(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:Y(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&pn(e,!!r,n,!0):pn(e,!!r,t,!1);return;case`textarea`:for(o in J(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:Y(e,t,o,c,n,null)}hn(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Y(e,t,l,r,n,null)}return;case`dialog`:J(`beforetoggle`,e),J(`toggle`,e),J(`cancel`,e),J(`close`,e);break;case`iframe`:case`object`:J(`load`,e);break;case`video`:case`audio`:for(r=0;r<Uf.length;r++)J(Uf[r],e);break;case`image`:J(`error`,e),J(`load`,e);break;case`details`:J(`toggle`,e);break;case`embed`:case`source`:case`link`:J(`error`,e),J(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Y(e,t,u,r,n,null)}return;default:if(bn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ap(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Y(e,t,c,r,n,null))}var sp={};function cp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Y(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(N=!0),a=m;break;case`name`:m!==f&&(N=!0),i=m;break;case`checked`:m!==f&&(N=!0),u=m;break;case`defaultChecked`:m!==f&&(N=!0),d=m;break;case`value`:m!==f&&(N=!0),o=m;break;case`defaultValue`:m!==f&&(N=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&Y(e,t,p,m,r,f)}}un(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Y(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:a!==l&&(N=!0),p=a;break;case`defaultValue`:a!==l&&(N=!0),c=a;break;case`multiple`:a!==l&&(N=!0),o=a;default:a!==l&&Y(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?pn(e,!!n,n?[]:``,!1):pn(e,!!n,t,!0)):pn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Y(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(N=!0),p=i;break;case`defaultValue`:i!==a&&(N=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&Y(e,t,o,i,r,a)}mn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Y(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(N=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Y(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Y(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:Y(e,t,u,p,r,m)}return;default:if(bn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ap(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ap(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Y(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Y(e,t,f,p,r,m)}function lp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function up(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&lp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&lp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var dp=null,fp=null;function pp(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function hp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function gp(e,t,n,r){return n=pp(n).createElement(e),n[Ot]=r,n[kt]=t,op(n,e,t),Ht(n),n}function _p(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vp=null;function yp(){var e=window.event;return e&&e.type===`popstate`?e!==vp&&(vp=e,!0):(vp=null,!1)}var bp=typeof setTimeout==`function`?setTimeout:void 0,xp=typeof clearTimeout==`function`?clearTimeout:void 0,Sp=typeof Promise==`function`?Promise:void 0,Cp=typeof requestAnimationFrame==`function`?requestAnimationFrame:bp,wp=typeof queueMicrotask==`function`?queueMicrotask:Sp===void 0?bp:function(e){return Sp.resolve(null).then(e).catch(Tp)};function Tp(e){setTimeout(function(){throw e})}function Ep(e){return e===`head`}function Dp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Kh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)xm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,xm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&xm(e.ownerDocument.body)}n=i}while(n);Kh(t)}function Op(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function kp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ap(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function jp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Mp(e){return jp(e.getBoundingClientRect(),getComputedStyle(e),e)}function Np(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return jp(t,n,e)}function Pp(e){return e.documentElement.clientHeight}function Fp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Ip(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Pp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=eh(f),u>rh){s.length=o;break}f=new Promise(Fp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Lp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Lp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:E({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Lp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Lp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rp(e){return{name:e,group:new Lp(`group`,e),imagePair:new Lp(`image-pair`,e),old:new Lp(`old`,e),new:new Lp(`new`,e)}}function zp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}zp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Wp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Hp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Bp,e,s,r)}this._eventListeners=a}};function Bp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}zp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Wp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Hp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Vp,e,n,i),r.splice(t,1),a!==null&&a()}};function Vp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Hp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Up(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Wp(e,t,n,r){if(e.length===0)return-1;r=Up(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Up(a.optionsOrUseCapture)===r)return i}return-1}zp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Hp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Hp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},zp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag!==6&&(e=b(e),_m(e,t))}zp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Kp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Gp(t[n],e);n--);};function Kp(e,t){return t.push(e),!1}zp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=pp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,qp,e,void 0,void 0))};function qp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}zp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Jp,e,void 0,void 0)};function Jp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}zp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0);for(var n=t=0;n<Xp.length;n++){var r=Xp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Xp[t++]=r}Xp.length=t}};function Yp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Xp=[],Zp=!1;function Qp(e,t,n){Xp.push({fragmentInstance:e,observer:t,instance:n}),Zp||(Zp=!0,vm(function(){Zp=!1;var e=Xp;Xp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}zp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,$p,e,void 0,void 0),e};function $p(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}zp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},zp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Kp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||em(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function em(e,t,n,r,i){var a=Rt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ee(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ee(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function tm(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}zp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(s(566));var t=[];h(this._fragmentFiber.child,!1,Kp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),tm(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=b(i),tm(i,n)):b(i).scrollIntoView(e),r+=n?-1:1}};function nm(e,t){return e=b(e),rm(e,t),!1}function rm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Hp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Xp.length;i++){var a=Xp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Xp[r++]=a)}Xp.length=r,n.observe(e)}),rm(e,t))}function am(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Hp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Qp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function om(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:om(n),Lt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function sm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=pm(e.nextSibling),e===null)break}return null}function cm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=pm(e.nextSibling),e===null))return null;return e}function lm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=pm(e.nextSibling),e===null))return null;return e}function um(e){return e.data===`$?`||e.data===`$~`}function dm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function fm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function pm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var mm=null;function hm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return pm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _m(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function vm(e){Cp(function(){Cp(function(t){return e(t)})})}function ym(e,t,n){switch(t=pp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&Y(e,t,r,null,sp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===wn&&(e.onclick=null),Lt(e)}function xm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lt(e)}var Sm=new Map,Cm=new Set;function wm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Tm=k.d;k.d={f:Em,r:Dm,D:Am,C:jm,L:Mm,m:Nm,X:Fm,S:Pm,M:Im};function Em(){var e=Tm.f(),t=Ud();return e||t}function Dm(e){var t=zt(e);t!==null&&t.tag===5&&t.type===`form`?ac(t):Tm.r(e)}var Om=typeof document>`u`?null:document;function km(e,t,n){var r=Om;if(r&&typeof t==`string`&&t){var i=ln(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Cm.has(i)||(Cm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),op(t,`link`,e),Ht(t),r.head.appendChild(t)))}}function Am(e){Tm.D(e),km(`dns-prefetch`,e,null)}function jm(e,t){Tm.C(e,t),km(`preconnect`,e,t)}function Mm(e,t,n){Tm.L(e,t,n);var r=Om;if(r&&e&&t){var i=`link[rel="preload"][as="`+ln(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+ln(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+ln(n.imageSizes)+`"]`)):i+=`[href="`+ln(e)+`"]`;var a=i;switch(t){case`style`:a=Rm(e);break;case`script`:a=Hm(e)}if(!(Sm.has(a)||(e=E({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Sm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(zm(a))||t===`script`&&r.querySelector(Um(a))))){var o=r.createElement(`link`);op(o,`link`,e),t===`style`&&(o[It]=!0,o.onload=o.onerror=function(){Ut(o)}),Ht(o),r.head.appendChild(o)}}}function Nm(e,t){Tm.m(e,t);var n=Om;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+ln(r)+`"][href="`+ln(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Hm(e)}if(!Sm.has(a)&&(e=E({rel:`modulepreload`,href:e},t),Sm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Um(a)))return}r=n.createElement(`link`),op(r,`link`,e),Ht(r),n.head.appendChild(r)}}}function Pm(e,t,n){Tm.S(e,t,n);var r=Om;if(r&&e){var i=Vt(r).hoistableStyles,a=Rm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(zm(a)))s.loading=5;else{e=E({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Sm.get(a))&&Km(e,n);var c=o=r.createElement(`link`);Ht(c),op(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Gm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Fm(e,t){Tm.X(e,t);var n=Om;if(n&&e){var r=Vt(n).hoistableScripts,i=Hm(e),a=r.get(i);a||(a=n.querySelector(Um(i)),a||(e=E({src:e,async:!0},t),(t=Sm.get(i))&&qm(e,t),a=n.createElement(`script`),Ht(a),op(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t){Tm.M(e,t);var n=Om;if(n&&e){var r=Vt(n).hoistableScripts,i=Hm(e),a=r.get(i);a||(a=n.querySelector(Um(i)),a||(e=E({src:e,async:!0,type:`module`},t),(t=Sm.get(i))&&qm(e,t),a=n.createElement(`script`),Ht(a),op(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Lm(e,t,n,r){var i=(i=Ae.current)?wm(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Rm(n.href),t=Vt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Rm(n.href);var a=Vt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(zm(e)))?a._p||(o.instance=a,o.state.loading=5):(a=Sm.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sm.set(e,a)),Vm(i,e,a,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Hm(n),t=Vt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rm(e){return`href="`+ln(e)+`"`}function zm(e){return`link[rel="stylesheet"][`+e+`]`}function Bm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Vm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[It]){r.loading=1;return}}else t=e.createElement(`link`),t[It]=!0,t.onload=t.onerror=Ut.bind(null,t),op(t,`link`,n),Ht(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Hm(e){return`[src="`+ln(e)+`"]`}function Um(e){return`script[async]`+e}function Wm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+ln(n.href)+`"]`);if(r)return t.instance=r,Ht(r),r;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ht(r),op(r,`style`,i),Gm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Rm(n.href);var a=e.querySelector(zm(i));if(a)return t.state.loading|=4,t.instance=a,Ht(a),a;r=Bm(n),(i=Sm.get(i))&&Km(r,i),a=(e.ownerDocument||e).createElement(`link`),Ht(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),op(a,`link`,r),t.state.loading|=4,Gm(a,n.precedence,e),t.instance=a;case`script`:return a=Hm(n.src),(i=e.querySelector(Um(a)))?(t.instance=i,Ht(i),i):(r=n,(i=Sm.get(a))&&(r=E({},n),qm(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ht(i),op(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Gm(r,n.precedence,e));return t.instance}function Gm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function qm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Jm=null;function Ym(e,t,n){if(Jm===null){var r=new Map,i=Jm=new Map;i.set(n,r)}else i=Jm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ft]||a[Ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Xm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Zm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Qm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function $m(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function eh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function th(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=eh(t),e.suspenseyImages.push(t)),e=sh.bind(e),t.decode().then(e,e))}function nh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Rm(r.href),a=t.querySelector(zm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=oh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ht(a);return}a=t.ownerDocument||t,r=Bm(r),(i=Sm.get(i))&&Km(r,i),a=a.createElement(`link`),Ht(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),op(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=oh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var rh=0;function ih(e,t){return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&rh===0&&(rh=62500*up());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>rh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ah(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)lh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function oh(){this.count--,ah(this)}function sh(){this.imgCount--,ah(this)}var ch=null;function lh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ch=new Map,t.forEach(uh,e),ch=null,oh.call(e))}function uh(e,t){if(!(t.state.loading&4)){var n=ch.get(e);if(n)var r=n.get(null);else{n=new Map,ch.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=oh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var dh={$$typeof:D,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function fh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,a,o,s,c,l,u,d){return e=new fh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Li(3,null,null,t),e.current=a,a.stateNode=e,t=Ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},yo(a),e}function mh(e){return e?(e=Fi,e):Fi}function hh(e,t,n,r,i,a){i=mh(i),r.context===null?r.context=i:r.pendingContext=i,r=xo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=So(e,r,t),n!==null&&(Rd(n,e,t),Co(n,e,t))}function gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _h(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function vh(e){if(e.tag===13||e.tag===31){var t=Mi(e,67108864);t!==null&&Rd(t,e,67108864),_h(e,67108864)}}function yh(e){if(e.tag===13||e.tag===31){var t=Fd();t=Ct(t);var n=Mi(e,t);n!==null&&Rd(n,e,t),_h(e,t)}}var bh=!0;function xh(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,Ch(e,t,n,r)}finally{k.p=a,O.T=i}}function Sh(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,Ch(e,t,n,r)}finally{k.p=a,O.T=i}}function Ch(e,t,n,r){if(bh){var i=wh(r);if(i===null)Xf(e,t,r,Th,n),Ih(e,r);else if(Rh(i,e,t,n,r))r.stopPropagation();else if(Ih(e,r),t&4&&-1<Fh.indexOf(e)){for(;i!==null;){var a=zt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=dt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-it(o);s.entanglements[1]|=c,o&=~c}Af(a),!(U&6)&&(bd=Ke()+500,jf(0,!1))}}break;case 31:case 13:s=Mi(a,2),s!==null&&Rd(s,a,2),Ud(),_h(a,2)}if(a=wh(r),a===null&&Xf(e,t,r,Th,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Xf(e,t,r,null,n)}}function wh(e){return e=En(e),Eh(e)}var Th=null;function Eh(e){if(Th=null,e=Rt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Th=e,null}function Dh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(qe()){case Je:return 2;case Ye:return 8;case Xe:case Ze:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var Oh=!1,kh=null,Ah=null,jh=null,Mh=new Map,Nh=new Map,Ph=[],Fh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ih(e,t){switch(e){case`focusin`:case`focusout`:kh=null;break;case`dragenter`:case`dragleave`:Ah=null;break;case`mouseover`:case`mouseout`:jh=null;break;case`pointerover`:case`pointerout`:Mh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Nh.delete(t.pointerId)}}function Lh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=zt(t),t!==null&&vh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rh(e,t,n,r,i){switch(t){case`focusin`:return kh=Lh(kh,e,t,n,r,i),!0;case`dragenter`:return Ah=Lh(Ah,e,t,n,r,i),!0;case`mouseover`:return jh=Lh(jh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Mh.set(a,Lh(Mh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Nh.set(a,Lh(Nh.get(a)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=Rt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Et(e.priority,function(){yh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Et(e.priority,function(){yh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tn=r,n.target.dispatchEvent(r),Tn=null}else return t=zt(n),t!==null&&vh(t),e.blockedOn=n,!1;t.shift()}return!0}function Vh(e,t,n){Bh(e)&&n.delete(t)}function Hh(){Oh=!1,kh!==null&&Bh(kh)&&(kh=null),Ah!==null&&Bh(Ah)&&(Ah=null),jh!==null&&Bh(jh)&&(jh=null),Mh.forEach(Vh),Nh.forEach(Vh)}function Uh(e,n){e.blockedOn===n&&(e.blockedOn=null,Oh||(Oh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Hh)))}var Wh=null;function Gh(e){Wh!==e&&(Wh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Wh===e&&(Wh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Eh(r||n)===null)continue;break}var a=zt(n);a!==null&&(e.splice(t,3),t-=3,rc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Kh(e){function t(t){return Uh(t,e)}kh!==null&&Uh(kh,e),Ah!==null&&Uh(Ah,e),jh!==null&&Uh(jh,e),Mh.forEach(t),Nh.forEach(t);for(var n=0;n<Ph.length;n++){var r=Ph[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ph.length&&(n=Ph[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&Ph.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[kt]||null;if(typeof a==`function`)o||Gh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[kt]||null)s=o.formAction;else if(Eh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Gh(n)}}}function qh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Jh(e){this._internalRoot=e}Yh.prototype.render=Jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;hh(n,Fd(),e,t,null,null)},Yh.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hh(e.current,2,null,e,null,null),Ud(),t[At]=null}};function Yh(e){this._internalRoot=e}Yh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ph.length&&t!==0&&t<Ph[n].priority;n++);Ph.splice(n,0,e),n===0&&zh(e)}};var Xh=r.version;if(Xh!==`19.3.1`)throw Error(s(527,Xh,`19.3.1`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Zh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Qh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qh.isDisabled&&Qh.supportsFiber)try{tt=Qh.inject(Zh),nt=Qh}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Tc,a=Ec,o=Dc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ph(e,1,!1,null,null,n,r,null,i,a,o,qh),e[At]=t.current,Jf(e),new Jh(t)}})),c=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()}));function l(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function u(e,t=`|`){return e.map(e=>ce(e)).join(t)}function d(e,t){return typeof t==`bigint`?t.toString():t}var f=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};function p(e){return new f(e)}function m(e){return e==null}function h(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function g(e,t){let n=e/t,r=Math.round(n),i=4*2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}function _(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function v(e){let t=Object.getOwnPropertyDescriptor(e,`shape`);return t?.get?t.get.raw:t?.value}function y(e){return v(e._zod.def)??e._zod.def.shape}function b(e,t,n){Object.defineProperty(e,t,{get(){let e=n();return _(this,t,e),e},enumerable:!0,configurable:!0})}function x(e,t,n){t in e?_(e,t,n):e[t]=n}function S(e,t,n,r){let i=y(t);for(let a of n){let n=Object.getOwnPropertyDescriptor(i,a);n.enumerable&&(n.get?b(e,a,()=>{let e=t._zod.def.shape[a];return r?r(e,a):e}):x(e,a,r?r(n.value,a):n.value))}}function C(e,t){for(let n of Reflect.ownKeys(t)){let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable&&(r.get?b(e,n,()=>t[n]):x(e,n,r.value))}}function w(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function T(e){return JSON.stringify(e)}function ee(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var E=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function te(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ne=p(()=>{if(Je.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function re(e){if(te(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return te(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function ie(e){return re(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var ae=new Set([`string`,`number`,`symbol`]);function oe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function se(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function D(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function ce(e){return typeof e==`bigint`?e.toString()+`n`:typeof e==`string`?`"${e}"`:`${e}`}function le(e){return Object.keys(e).filter(t=>e[t]._zod.optin!==void 0&&e[t]._zod.optout===`optional`)}var ue={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},de={int64:[BigInt(`-9223372036854775808`),BigInt(`9223372036854775807`)],uint64:[BigInt(0),BigInt(`18446744073709551615`)]};function fe(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);let i={};return S(i,e,pe(e,t)),se(e,w(n,{shape:i,checks:[]}))}function pe(e,t){let n=y(e),r=[];for(let e of Reflect.ownKeys(t)){if(!Object.getOwnPropertyDescriptor(n,e)?.enumerable)throw Error(`Unrecognized key: "${String(e)}"`);t[e]&&r.push(e)}return r}function me(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);let i=new Set(pe(e,t)),a={};return S(a,e,Reflect.ownKeys(y(e)).filter(e=>!i.has(e))),se(e,w(n,{shape:a,checks:[]}))}function he(e,t){if(!re(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=y(e);for(let e of Reflect.ownKeys(t))if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return se(e,w(e._zod.def,{shape:ge(e,t)}))}function ge(e,t){let n={};return S(n,e,Reflect.ownKeys(y(e))),C(n,t),n}function _e(e,t){if(!re(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return se(e,w(e._zod.def,{shape:ge(e,t)}))}function ve(e,t){if(!t?._zod?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);let n={};return S(n,e,Reflect.ownKeys(y(e))),S(n,t,Reflect.ownKeys(y(t))),se(e,w(e._zod.def,{shape:n,get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function ye(e,t,n,r=`partial`){let i=t._zod.def.checks;if(i&&i.length>0)throw Error(`.${r}() cannot be used on object schemas containing refinements`);let a=n?new Set(pe(t,n)):void 0,o={};return S(o,t,Reflect.ownKeys(y(t)),e&&((t,n)=>a&&!a.has(n)?t:new e({type:`optional`,innerType:t}))),se(t,w(t._zod.def,{shape:o,checks:[]}))}function be(e,t,n){let r=n?new Set(pe(t,n)):void 0,i={};return S(i,t,Reflect.ownKeys(y(t)),(t,n)=>r&&!r.has(n)?t:new e({type:`nonoptional`,innerType:t})),se(t,w(t._zod.def,{shape:i}))}function xe(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function Se(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function O(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function k(e){return typeof e==`string`?e:e?.message}function Ce(e){let t=[];for(let n of e??[]){let e=n._zod.def;if(!/_(length|size)$|_equals$/.test(e.check))break;let r=e.maximum??e.length??e.size;r>=0&&t.push([r,n])}return t}function we(e,t,n){var r;for(let i=t;i<e.length;i++)(r=e[i]).schema??(r.schema=n)}function Te(e,t,n){var r;let i=e.inst?._zod?.traits;i?.has(`$ZodType`)&&(i.has(`$ZodCheck`)?(r=e).schema??(r.schema=e.inst):e.schema=e.inst);let a=e.schema===e.inst?void 0:e.schema?._zod.def?.error,o=e.message?e.message:k(e.inst?._zod.def?.error?.(e))??k(a?.(e))??k(t?.error?.(e))??k(n.customError?.(e))??k(n.localeError?.(e))??`Invalid input`,s={};for(let t of Object.keys(e))t!==`inst`&&t!==`schema`&&t!==`continue`&&t!==`input`&&t!==`__proto__`&&(s[t]=e[t]);return s.path??=[],s.message=o,t?.reportInput&&(s.input=e.input),s}var Ee=/[\uD800-\uDBFF]/;function De(e){let t=e.length;if(!Ee.test(e))return t;let n=t;for(let r=0;r<t-1;r++)(e.charCodeAt(r)&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320&&(n--,r++);return n}function A(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function Oe(e){let t=typeof e;switch(t){case`number`:return Number.isNaN(e)?`nan`:`number`;case`object`:{if(e===null)return`null`;if(Array.isArray(e))return`array`;let t=e;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&`constructor`in t&&t.constructor)return t.constructor.name}}return t}function ke(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function Ae(e,t){for(let n in t){let r=Object.getOwnPropertyDescriptor(t,n);r.get?Object.defineProperty(e,n,{...r,enumerable:!1}):Pe(e,n,r.value)}}function je(e,t,n,r=!0){return Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:r,value:n}),n}function Me(e,t,n){return je(e,t,n,!1)}function Ne(e,t){for(let n in e){let r=e[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get(){return je(this,n,r(this))},set(e){je(this,n,e)}})}return t}function Pe(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){return this==null?n:je(this,t,n.bind(this))},set(e){je(this,t,e)}})}function Fe(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}var Ie,Le=!1,Re={configurable:!0,get(){Le=!0}};function j(e,t,n){let r=Object.getPrototypeOf(e._zod);t in r&&Ie!==e._zod?Ie=void 0:(Ie=e._zod,Object.defineProperty(r,t,{configurable:!0,get(){Object.defineProperty(this,t,Re);let e=Le;Le=!1;try{let r=n(this);return Le?delete this[t]:Object.defineProperty(this,t,{configurable:!0,writable:!0,value:r}),Le||=e,r}catch(n){throw delete this[t],Le||=e,n}},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}}))}function ze(e,t,n,r){let i=Fe(e,t);i&&Object.defineProperty(i,t,{configurable:!0,get(){let e={configurable:!0,writable:!0,enumerable:r,value:void 0};return Object.defineProperty(this,t,e),e.value=n(this),Object.defineProperty(this,t,e),e.value},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:r,value:e})}})}var Be=`~constantCatch`;function Ve(e){let t=()=>e;return t[Be]=!0,t}var He,Ue={value:void 0,enumerable:!1},We=`captureStackTrace`in Error?Error:null;function Ge(e){let t=We;if(t){let n=t.stackTraceLimit;if(typeof n==`number`){try{t.stackTraceLimit=0}catch{return We=null,new e}try{return new e}finally{t.stackTraceLimit=n}}}return new e}function M(e,t,n,r){let i={};function a(e){this.def=e,this.constr=d,this.traits=new Set}a.prototype=i;let o=n,s=o&&new WeakSet;function c(n,r){if(!n._zod){Ue.value=new a(r);try{Object.defineProperty(n,"_zod",Ue)}finally{Ue.value=void 0}}else if(n._zod.traits.has(e))return;if(n._zod.traits.add(e),t(n,r),s){let e=Object.getPrototypeOf(n),t=n._zod.constr.prototype,r=e;for(;r&&r!==t;)r=Object.getPrototypeOf(r);let i=r??e;s.has(i)||(s.add(i),Ae(i,o))}let i=d.prototype;for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let l=r?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:e});function d(e){let t=r?.Parent?Ge(u):this;c(t,e);let n=t._zod.deferred;if(n){for(let e of n)e();t._zod.deferred=void 0}let i=globalThis.__zod_globalConfig?.postProcessor;return i&&i(t),t}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:t=>r?.Parent&&t instanceof r.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}var Ke=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},qe=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(He=globalThis).__zod_globalConfig??(He.__zod_globalConfig={});var Je=globalThis.__zod_globalConfig;function Ye(e){return e&&Object.assign(Je,e),Je}function Xe(){let e=this._zod;return e.message??=JSON.stringify(e.def,d,2),e.message}function Ze(e){this._zod.message=e}var Qe={get:Xe,set:Ze,enumerable:!0,configurable:!0},$e={value:void 0,enumerable:!1},et=new WeakSet([Object.prototype,Error.prototype]),tt=M(`$ZodError`,(e,t)=>{e.name=`$ZodError`,$e.value=t,Object.defineProperty(e,"issues",$e),$e.value=void 0,Object.defineProperty(e,"message",Qe);let n=Object.getPrototypeOf(e);et.has(n)||(et.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))});function nt(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function rt(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?nt(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function it(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.prototype.hasOwnProperty.call(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}function at(e,t){return{callee:t?.callee??e,Err:t?.Err}}var ot=e=>{let t=(n,r,i,a)=>{let o=i?{...i,async:!1}:{async:!1},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise)throw new Ke;if(s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>Te(e,o,Ye())));throw E(n,a?.callee??t),n}return s.value};return t},st=e=>{let t=async(n,r,i,a)=>{let o=i?{...i,async:!0}:{async:!0},s=n._zod.run({value:r,issues:[]},o);if(s instanceof Promise&&(s=await s),s.issues.length){let n=new((a?.Err)??e)(s.issues.map(e=>Te(e,o,Ye())));throw E(n,a?.callee??t),n}return s.value};return t},ct=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Ke;return a.issues.length?lt(e,a.issues,i):{success:!0,data:a.value}};function lt(e,t,n){let r;return{success:!1,get error(){return r||(r=new e(t.map(e=>Te(e,n,Ye()))),t=void 0,n=void 0),r},set error(e){r=e,t=void 0,n=void 0}}}var ut=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?lt(e,a.issues,i):{success:!0,data:a.value}},dt=Symbol.for(`zod.compile.invalid`),ft=Symbol.for(`zod.compile.fallback`),pt=((e,t,n)=>{let r=e._zod.bag.validator;if(r!==void 0){if(r(t)!==dt)return!0;if(r.definite===!0&&n===void 0)return!1}return mt(e,t,n)});function mt(e,t,n){let r=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},i=e._zod.bag.fallbackRun,a;if(i?(r[ft]=!0,a=i({value:t,issues:[]},r)):a=e._zod.run({value:t,issues:[]},r),a instanceof Promise)throw new Ke;return a.issues.length===0}var ht=async(e,t,n)=>{let r=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0},i=e._zod.run({value:t,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length===0},gt=e=>{let t=ot(e),n=(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return t(e,r,o,at(n,a))};return n},_t=e=>{let t=ot(e),n=(e,r,i,a)=>t(e,r,i,at(n,a));return n},vt=e=>{let t=st(e),n=async(e,r,i,a)=>{let o=i?{...i,direction:`backward`}:{direction:`backward`};return await t(e,r,o,at(n,a))};return n},yt=e=>{let t=st(e),n=async(e,r,i,a)=>await t(e,r,i,at(n,a));return n},bt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ct(e)(t,n,i)},xt=e=>(t,n,r)=>ct(e)(t,n,r),St=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return ut(e)(t,n,i)},Ct=e=>async(t,n,r)=>ut(e)(t,n,r),wt=/^[cC][0-9a-z]{6,}$/,Tt=/^[0-9a-z]+$/,Et=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,Dt=/^[0-9a-vA-V]{20}$/,Ot=/^[A-Za-z0-9]{27}$/,kt=/^[a-zA-Z0-9_-]{21}$/;function At(e){return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)}var jt=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Mt=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Nt=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Pt=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Ft=`^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function It(){return new RegExp(Ft,`u`)}var Lt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Rt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,zt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Bt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Vt=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Ht=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,Ut=/^https?$/,Wt=/^\+[1-9]\d{6,14}$/,Gt=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function Kt(e){return RegExp(`^${e}$`)}var qt=Kt(Gt);function Jt(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:e.seconds?`${t}:[0-5]\\d(?:\\.\\d+)?`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Yt(e){return RegExp(`^${Jt(e)}$`)}function Xt(e){let t=[`Z`];e.offset&&t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let n=`${Jt({precision:e.precision,seconds:!0})}(?:${t.join(`|`)})`,r=e.local?`${n}|${Jt({precision:e.precision})}`:n;return RegExp(`^${Gt}T(?:${r})$`)}var Zt=/^[\s\S]{0,}$/,N=/^-?\d+$/,Qt=/^-?\d+(?:\.\d+)?$/,$t=/^(?:true|false)$/i,en=/^[^A-Z]*$/,tn=/^[^a-z]*$/,nn=M(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),rn=e=>{let t=e.value;return!m(t)&&t.length!==void 0},an={number:`number`,bigint:`bigint`,object:`date`},on=M(`$ZodCheckLessThan`,(e,t)=>{nn.init(e,t);let n=an[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:an[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),sn=M(`$ZodCheckGreaterThan`,(e,t)=>{nn.init(e,t);let n=an[typeof t.value];e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:an[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),cn=M(`$ZodCheckMultipleOf`,(e,t)=>{nn.init(e,t),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?t.value!==BigInt(0)&&n.value%t.value===BigInt(0):g(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),ln=M(`$ZodCheckNumberFormat`,(e,t)=>{nn.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=ue[t.format];e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),un=M(`$ZodCheckMaxLength`,(e,t)=>{var n;nn.init(e,t),(n=e._zod.def).when??(n.when=rn),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>t.maximum?De(r):i)<=t.maximum)return;let a=A(r);n.issues.push({origin:a,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),dn=M(`$ZodCheckMinLength`,(e,t)=>{var n;nn.init(e,t),(n=e._zod.def).when??(n.when=rn),e._zod.check=n=>{let r=n.value,i=r.length;if((typeof r==`string`&&i>=t.minimum&&i<t.minimum*2?De(r):i)>=t.minimum)return;let a=A(r);n.issues.push({origin:a,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),fn=M(`$ZodCheckLengthEquals`,(e,t)=>{var n;nn.init(e,t),(n=e._zod.def).when??(n.when=rn),e._zod.check=n=>{let r=n.value,i=r.length,a=typeof r==`string`&&i>=t.length&&i<=t.length*2?De(r):i;if(a===t.length)return;let o=A(r),s=a>t.length;n.issues.push({origin:o,...s?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),pn=M(`$ZodCheckStringFormat`,(e,t)=>{var n,r;nn.init(e,t),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),mn=M(`$ZodCheckRegex`,(e,t)=>{pn.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),hn=M(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=en,pn.init(e,t)}),gn=M(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=tn,pn.init(e,t)}),_n=M(`$ZodCheckIncludes`,(e,t)=>{nn.init(e,t);let n=oe(t.includes);t.pattern=new RegExp(typeof t.position==`number`?`^.{${t.position},}${n}`:n),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),vn=M(`$ZodCheckStartsWith`,(e,t)=>{nn.init(e,t);let n=RegExp(`^${oe(t.prefix)}.*`);t.pattern??=n,e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),yn=M(`$ZodCheckEndsWith`,(e,t)=>{nn.init(e,t);let n=RegExp(`.*${oe(t.suffix)}$`);t.pattern??=n,e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),bn=M(`$ZodCheckOverwrite`,(e,t)=>{nn.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),xn=class{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{--this.indent}}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.content??[``];return new e(...Object.keys(this.closed),`return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`)(...Object.values(this.closed))}},Sn={major:4,minor:6,patch:7},Cn=M(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Sn;let r=e._zod.def.checks,i=e._zod.traits.has(`$ZodCheck`)?[e,...r??[]]:r?.length?[...r]:[];for(let t of i)for(let n of t._zod.onattach)n(e);if(i.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(t,n,r)=>{if(t.memo)return t;let i=xe(t),a;for(let o of n){if(o._zod.def.when){if(Se(t)||!o._zod.def.when(t))continue}else if(i)continue;let n=t.issues.length,s=o._zod.check(t);if(s instanceof Promise&&r?.async===!1)throw new Ke;if(a||s instanceof Promise)a=(a??Promise.resolve()).then(async()=>{await s,t.issues.length!==n&&(we(t.issues,n,e),i||=xe(t,n))});else{if(t.issues.length===n)continue;we(t.issues,n,e),i||=xe(t,n)}}return a?a.then(()=>t):t},n=(n,r,a)=>{if(xe(n))return n.aborted=!0,n;let o=t(r,i,a);if(o instanceof Promise){if(a.async===!1)throw new Ke;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(r,a)=>{if(a.skipChecks)return e._zod.parse(r,a);if(a.direction===`backward`){let t=e._zod.parse({value:r.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,r,a)):n(t,r,a)}let o=e._zod.parse(r,a);if(o instanceof Promise){if(a.async===!1)throw new Ke;return o.then(e=>t(e,i,a))}return t(o,i,a)}}},{get"~standard"(){return Me(this,`~standard`,En(this))},set"~standard"(e){je(this,`~standard`,e)}}),wn=(e,t)=>e.issues.length?{issues:e.issues.map(e=>Te(e,t,Ye()))}:{value:e.value};async function Tn(e,t){let n={async:!0};return wn(await e._zod.run({value:t,issues:[]},n),n)}function En(e){return{validate:t=>{let n={async:!1};try{let r=e._zod.run({value:t,issues:[]},n);if(!(r instanceof Promise))return wn(r,n)}catch{}return Tn(e,t)},vendor:`zod`,version:1}}var Dn=M(`$ZodString`,(e,t)=>{Cn.init(e,t),e._zod.pattern=t.pattern??Zt,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),P=M(`$ZodStringFormat`,(e,t)=>{pn.init(e,t),Dn.init(e,t)}),On=M(`$ZodGUID`,(e,t)=>{t.pattern??=Mt,P.init(e,t)}),kn=M(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Nt(e)}else t.pattern??=Nt();P.init(e,t)}),An=M(`$ZodEmail`,(e,t)=>{t.pattern??=Pt,P.init(e,t)});function jn(e){try{return typeof URL<`u`&&typeof URL.canParse==`function`?URL.canParse(e):(new URL(e),!0)}catch{return!1}}function Mn(e,t){return!(`normalize`in t)&&!(`hostname`in t)&&!(`protocol`in t)?jn(e)||2:Nn(e,t)}function Nn(e,t){if(!t.normalize&&t.protocol?.source===Ut.source&&!/^https?:\/\//i.test(e))return 1;try{if(typeof URL<`u`){let t=URL;if(typeof t.parse==`function`)return t.parse(e)??2}return new URL(e)}catch{return 2}}var Pn=/[\t\n\r]/g;function Fn(e){return e.replace(Pn,``)}function In(e,t){return t.lastIndex=0,t.test(e.hostname)}function Ln(e,t){return t.lastIndex=0,t.test(e.protocol.endsWith(`:`)?e.protocol.slice(0,-1):e.protocol)}var Rn=M(`$ZodURL`,(e,t)=>{P.init(e,t),e._zod.check=n=>{try{let r=n.value.trim(),i=Mn(r,t);if(i===1){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}if(i===2){n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort});return}if(i===!0){n.value=Fn(r);return}t.hostname&&!In(i,t.hostname)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort}),t.protocol&&!Ln(i,t.protocol)&&n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort}),n.value=t.normalize?i.href:Fn(r);return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),zn=M(`$ZodEmoji`,(e,t)=>{t.pattern??=It(),P.init(e,t)}),Bn=M(`$ZodNanoID`,(e,t)=>{if(t.length!==void 0&&(!Number.isInteger(t.length)||t.length<1))throw Error(`Invalid nanoid length: ${t.length}`);t.pattern??=t.length===void 0?kt:At(t.length),P.init(e,t)}),Vn=M(`$ZodCUID`,(e,t)=>{t.pattern??=wt,P.init(e,t)}),Hn=M(`$ZodCUID2`,(e,t)=>{t.pattern??=Tt,P.init(e,t)}),Un=M(`$ZodULID`,(e,t)=>{t.pattern??=Et,P.init(e,t)}),Wn=M(`$ZodXID`,(e,t)=>{t.pattern??=Dt,P.init(e,t)}),Gn=M(`$ZodKSUID`,(e,t)=>{t.pattern??=Ot,P.init(e,t)}),Kn=M(`$ZodISODateTime`,(e,t)=>{t.pattern??=Xt(t),P.init(e,t)}),qn=M(`$ZodISODate`,(e,t)=>{t.pattern??=qt,P.init(e,t)}),Jn=M(`$ZodISOTime`,(e,t)=>{t.pattern??=Yt(t),P.init(e,t)}),Yn=M(`$ZodISODuration`,(e,t)=>{t.pattern??=jt,P.init(e,t)}),Xn=M(`$ZodIPv4`,(e,t)=>{t.pattern??=Lt,P.init(e,t)}),Zn=/^[0-9a-fA-F:.]+$/;function Qn(e){return Zn.test(e)?jn(`http://[${e}]`):!1}var $n=M(`$ZodIPv6`,(e,t)=>{t.pattern??=Rt,P.init(e,t),e._zod.check=n=>{Qn(n.value)||n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}),er=M(`$ZodCIDRv4`,(e,t)=>{t.pattern??=zt,P.init(e,t)});function tr(e){let t=e.split(`/`);if(t.length!==2)return!1;let[n,r]=t;if(!r)return!1;let i=Number(r);return`${i}`!==r||i<0||i>128?!1:Qn(n)}var nr=M(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Bt,P.init(e,t),e._zod.check=n=>{tr(n.value)||n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}});function rr(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var ir=/^[0-9a-zA-Z+/]*={0,2}$/,ar=M(`$ZodBase64`,(e,t)=>{t.pattern??=ir,P.init(e,t),e._zod.check=n=>{rr(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}}),or=/^[A-Za-z0-9_-]*$/;function sr(e){if(!or.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return rr(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var cr=M(`$ZodBase64URL`,(e,t)=>{t.pattern??=or,P.init(e,t),e._zod.check=n=>{sr(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),lr=M(`$ZodE164`,(e,t)=>{t.pattern??=Wt,P.init(e,t)});function ur(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var dr=M(`$ZodJWT`,(e,t)=>{P.init(e,t),e._zod.check=n=>{ur(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),fr=M(`$ZodNumber`,(e,t)=>{Cn.init(e,t),e._zod.pattern=Qt,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),pr=M(`$ZodNumberFormat`,(e,t)=>{ln.init(e,t),fr.init(e,t)}),mr=M(`$ZodBoolean`,(e,t)=>{Cn.init(e,t),e._zod.pattern=$t,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let i=n.value;return typeof i==`boolean`||n.issues.push({expected:`boolean`,code:`invalid_type`,input:i,inst:e}),n}}),hr=M(`$ZodUnknown`,(e,t)=>{Cn.init(e,t),e._zod.parse=e=>e}),gr=M(`$ZodNever`,(e,t)=>{Cn.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function _r(e,t){let n=Ce(e._zod.def.checks);if(!n.length)return;let r=Math.min(...n.map(e=>e[0])),i=e._zod.parse;e._zod.parse=(n,a)=>{let o=t(n.value);if(o>r&&!a?.skipChecks&&a?.direction!==`backward`){for(let[t,r]of Ce(e._zod.def.checks))if(o>t&&r._zod.def.when(n)){let t=n.issues.length;return r._zod.check(n),n.issues[t].continue=!1,we(n.issues,t,e),n}}return i(n,a)}}var vr=e=>Array.isArray(e)?e.length:-1;function yr(e,t,n){e.issues.length&&t.issues.push(...O(n,e.issues)),t.value[n]=e.value}var br=M(`$ZodArray`,(e,t)=>{Cn.init(e,t);let n=Je.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({expected:`array`,code:`invalid_type`,input:a,inst:e}),r;r.value=n?n.alloc(e,r,Array(a.length),i):Array(a.length);let o=[],s=i?.abortEarly;for(let e=0;e<a.length;e++){let n=a[e],c=t.element._zod.run({value:n,issues:[]},i);if(c instanceof Promise)o.push(c.then(t=>yr(t,r,e)));else if(yr(c,r,e),s&&c.issues.length!==0&&xe(c))break}return o.length?Promise.all(o).then(()=>r):r},_r(e,vr)});function xr(e,t,n,r,i,a){let o=n in r,s=a===`optional`;if(o||!s||i!==`optional`){if(e.issues.length){if(i!==void 0&&s&&!o)return;t.issues.push(...O(n,e.issues))}!o&&i===void 0?e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]}):e.value===void 0?(o||i===`defaulted`&&!s)&&(t.value[n]=void 0):t.value[n]=e.value}}var Sr=[];function Cr(e){let t=Object.keys(e.shape),n=Object.getOwnPropertySymbols(e.shape),r=n.length?n:Sr,i=r.length?[...t,...r]:t;for(let t of i)if(!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);let a=le(e.shape);return{...e,allKeys:i,symbolKeys:r,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(a)}}function wr(e,t,n,r,i,a,o){let s=[],c=i.keySet,l=i.catchall._zod,u=l.def.type,d=l.optin,f=l.optout,p=0;for(let i in t){if(o&&n.issues.length!==p){if(xe(n,p))break;p=n.issues.length}if(c.has(i))continue;if(i===`__proto__`){u===`never`&&s.push(i);continue}if(u===`never`){s.push(i);continue}let a=l.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>xr(e,n,i,t,d,f))):xr(a,n,i,t,d,f)}return s.length&&n.issues.push({code:`unrecognized_keys`,keys:s,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var Tr=M(`$ZodObject`,(e,t)=>{Cn.init(e,t);let n=Object.getOwnPropertyDescriptor(t,`shape`),r=n?.get?n.get.raw:t.shape??{};if(r){let e=()=>{let n={...r};return Object.defineProperty(t,"shape",{value:n}),e.raw=n,n};e.raw=r,Object.defineProperty(t,"shape",{get:e})}let i=p(()=>Cr(t));j(e,`propValues`,e=>{let t=e.def.shape,n={};for(let e in t){let r=t[e]._zod;if(r.values){Object.prototype.hasOwnProperty.call(n,e)||_(n,e,new Set);for(let t of r.values)n[e].add(t);r.optin!==void 0&&n[e].add(void 0)}}return n});let a=te,o=t.catchall,s,c=Je.memoizer;c?.attach(e),e._zod.parse=(t,n)=>{s??=i.value;let r=t.value;if(!a(r))return t.issues.push({expected:`object`,code:`invalid_type`,input:r,inst:e}),t;t.value=c?c.alloc(e,t,{},n):{};let l=[],u=s.shape,d=n?.abortEarly,f=t.issues.length;for(let e of s.allKeys){if(d&&t.issues.length!==f){if(xe(t,f))break;f=t.issues.length}if(e===`__proto__`)continue;let i=u[e],a=i._zod.optin,o=i._zod.optout,s=i._zod.run({value:r[e],issues:[]},n);s instanceof Promise?l.push(s.then(n=>xr(n,t,e,r,a,o))):xr(s,t,e,r,a,o)}return o?wr(l,r,t,n,i.value,e,d===!0):l.length?Promise.all(l).then(()=>t):t}}),Er=M(`$ZodObjectJIT`,(e,t)=>{Tr.init(e,t);let n=e._zod.parse,r=p(()=>Cr(t)),i=Je.memoizer,a=t=>{let n=r.value,a=n.symbolKeys,o=new xn([`payload`,`ctx`],{shape:t,inst:e,memo:i,syms:a}),s=e=>`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,c=(e,t)=>`
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
          }`;o.write(`const input = payload.value;`);let l=Object.create(null),u=0;for(let e of n.allKeys)l[e]=`key_${u++}`;o.write(i?`const newResult = memo.alloc(inst, payload, {}, ctx);`:`const newResult = {};`);for(let e of n.allKeys){if(e===`__proto__`)continue;let n=l[e],r=typeof e==`symbol`?`syms[${a.indexOf(e)}]`:T(e),i=`${r} in input`,u=t[e],d=u?._zod?.optin,f=d!==void 0,p=u?._zod?.optout===`optional`;if(o.write(`const ${n} = ${s(r)};`),f&&p){let e=d===`optional`?`${n}_present`:`${n}.value !== undefined || ${n}_present`;o.write(`
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

      `)}return o.write(`payload.value = newResult;`),o.write(`return payload;`),o.compile()},o,s=te,c=!Je.jitless,l=c&&ne.value,u=t.catchall,d;e._zod.parse=(i,f)=>{d??=r.value;let p=i.value;return s(p)?c&&l&&f?.async===!1&&f.jitless!==!0?(o||=a(t.shape),i=o(i,f),u?wr([],p,i,f,d,e,f?.abortEarly===!0):i):n(i,f):(i.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),i)}});function Dr(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!xe(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>Te(e,r,Ye())))}),t)}var Or=M(`$ZodUnion`,(e,t)=>{Cn.init(e,t),j(e,`optin`,e=>e.def.options.some(e=>e._zod.optin===`defaulted`)?`defaulted`:e.def.options.some(e=>e._zod.optin!==void 0)?`optional`:void 0),j(e,`optout`,e=>e.def.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),j(e,`values`,e=>{if(e.def.options.every(e=>e._zod.values))return new Set(e.def.options.flatMap(e=>Array.from(e._zod.values)))}),j(e,`pattern`,e=>{if(e.def.options.every(e=>e._zod.pattern)){let t=e.def.options.map(e=>e._zod.pattern);return RegExp(`^(${t.map(e=>h(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>Dr(t,r,e,i)):Dr(o,r,e,i)}}),kr=M(`$ZodIntersection`,(e,t)=>{Cn.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>jr(e,t,n)):jr(e,i,a)}});function Ar(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(re(e)&&re(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.prototype.hasOwnProperty.call(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=Ar(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Ar(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function jr(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=Ar(t.value,n.value);if(!c.valid){if(xe(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var Mr=M(`$ZodRecord`,(e,t)=>{Cn.init(e,t);let n=Je.memoizer;n?.attach(e),e._zod.parse=(r,i)=>{let a=r.value;if(!re(a))return r.issues.push({expected:`record`,code:`invalid_type`,input:a,inst:e}),r;let o=[],s=t.keyType._zod.values;if(s&&!t.partial){r.value=n?n.alloc(e,r,{},i):{};let c=new Set;for(let n of s)if(typeof n==`string`||typeof n==`number`||typeof n==`symbol`){if(c.add(typeof n==`number`?n.toString():n),n===`__proto__`)continue;let s=t.keyType._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(s.issues.length){r.issues.push({code:`invalid_key`,origin:`record`,issues:s.issues.map(e=>Te(e,i,Ye())),input:n,path:[n],inst:e});continue}let l=s.value;if(l===`__proto__`)continue;let u=t.valueType._zod.run({value:a[n],issues:[]},i);u instanceof Promise?o.push(u.then(e=>{e.issues.length&&r.issues.push(...O(n,e.issues)),r.value[l]=e.value})):(u.issues.length&&r.issues.push(...O(n,u.issues)),r.value[l]=u.value)}let l;for(let e in a)if(!c.has(e)){if(t.mode===`loose`){if(e===`__proto__`)continue;r.value[e]=a[e]}else l??=[],l.push(e)}l&&l.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:l,continue:!0})}else{r.value=n?n.alloc(e,r,{},i):{};let c;for(let n of Reflect.ownKeys(a)){if(n===`__proto__`||!Object.prototype.propertyIsEnumerable.call(a,n))continue;let l=t.keyType._zod.run({value:n,issues:[]},i);if(l instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);if(typeof n==`string`&&Qt.test(n)&&l.issues.length){let e=t.keyType._zod.run({value:Number(n),issues:[]},i);if(e instanceof Promise)throw Error(`Async schemas not supported in object keys currently`);e.issues.length===0&&(l=e)}if(l.issues.length){t.mode===`loose`?r.value[n]=a[n]:s?(c??=[],c.push(n)):r.issues.push({code:`invalid_key`,origin:`record`,issues:l.issues.map(e=>Te(e,i,Ye())),input:n,path:[n],inst:e});continue}let u=l.value;if(u===`__proto__`)continue;let d=t.valueType._zod.run({value:a[n],issues:[]},i);d instanceof Promise?o.push(d.then(e=>{e.issues.length&&r.issues.push(...O(n,e.issues)),r.value[u]=e.value})):(d.issues.length&&r.issues.push(...O(n,d.issues)),r.value[u]=d.value)}c&&c.length>0&&r.issues.push({code:`unrecognized_keys`,input:a,inst:e,keys:c,continue:!0})}return o.length?Promise.all(o).then(()=>r):r}}),Nr=M(`$ZodEnum`,(e,t)=>{Cn.init(e,t);let n=l(t.entries),r=new Set(n);e._zod.values=r,j(e,`pattern`,e=>{let t=l(e.def.entries).filter(e=>ae.has(typeof e));return RegExp(t.length?`^(${t.map(e=>oe(e.toString())).join(`|`)})$`:`^[^\\s\\S]$`)}),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Pr=M(`$ZodTransform`,(e,t)=>{Cn.init(e,t),e._zod.optin=`optional`,Je.memoizer?.guard(e),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new qe(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n));if(i instanceof Promise)throw new Ke;return n.value=i,n}});function Fr(e,t){return e.value=t.issues.length?void 0:t.value,e}var Ir=M(`$ZodOptional`,(e,t)=>{Cn.init(e,t),j(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),e._zod.optout=`optional`,j(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t,void 0]):void 0}),j(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${h(t.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(e.value===void 0){if(t.innerType._zod.optin!==`defaulted`)return e;let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(t=>Fr(e,t)):Fr(e,r)}return t.innerType._zod.run(e,n)}}),Lr=M(`$ZodExactOptional`,(e,t)=>{Ir.init(e,t),j(e,`values`,e=>e.def.innerType._zod.values),j(e,`pattern`,e=>e.def.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),Rr=M(`$ZodNullable`,(e,t)=>{Cn.init(e,t),j(e,`optin`,e=>e.def.innerType._zod.optin),j(e,`optout`,e=>e.def.innerType._zod.optout),j(e,`pattern`,e=>{let t=e.def.innerType._zod.pattern;return t?RegExp(`^(${h(t.source)}|null)$`):void 0}),j(e,`values`,e=>e.def.innerType._zod.values?new Set([...e.def.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),zr=M(`$ZodDefault`,(e,t)=>{Cn.init(e,t),e._zod.optin=`defaulted`,j(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>Br(e,t)):Br(r,t)}});function Br(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var Vr=M(`$ZodPrefault`,(e,t)=>{Cn.init(e,t),e._zod.optin=`defaulted`,j(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),Hr=M(`$ZodNonOptional`,(e,t)=>{Cn.init(e,t),j(e,`values`,e=>{let t=e.def.innerType._zod.values;return t?new Set([...t].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>Ur(t,e)):Ur(i,e)}});function Ur(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}function Wr(e,t,n,r){return t.issues.length?(e.value=n.catchValue({...t,value:e.value,error:{issues:t.issues.map(e=>Te(e,r,Ye()))},input:e.value}),e):(e.value=t.value,t.memo&&(e.memo=!0),e)}var Gr=M(`$ZodCatch`,(e,t)=>{Cn.init(e,t),j(e,`optin`,e=>e.def.innerType._zod.optin===`defaulted`?`defaulted`:`optional`),j(e,`optout`,e=>e.def.innerType._zod.optout),j(e,`values`,e=>e.def.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run({value:e.value,issues:[]},n);return r instanceof Promise?r.then(r=>Wr(e,r,t,n)):Wr(e,r,t,n)}}),Kr=M(`$ZodPipe`,(e,t)=>{Cn.init(e,t),j(e,`values`,e=>e.def.in._zod.values),j(e,`optin`,e=>e.def.in._zod.optin),j(e,`optout`,e=>e.def.out._zod.optout),j(e,`propValues`,e=>e.def.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>qr(e,t.in,n)):qr(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>qr(e,t.out,n)):qr(r,t.out,n)}});function qr(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},n)}var Jr=M(`$ZodReadonly`,(e,t)=>{Cn.init(e,t),j(e,`propValues`,e=>e.def.innerType._zod.propValues),j(e,`values`,e=>e.def.innerType._zod.values),j(e,`optin`,e=>e.def.innerType?._zod?.optin),j(e,`optout`,e=>e.def.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Yr):Yr(r)}});function Yr(e){return e.memo||(e.value=Object.freeze(e.value)),e}var Xr=M(`$ZodCustom`,(e,t)=>{nn.init(e,t),Cn.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Zr(t,n,r,e));Zr(i,n,r,e)}});function Zr(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(ke(e))}}var Qr=class extends Error{constructor(){super(`Cannot parse a reference cycle that closes through a transform`),this.name=`ZodCyclicError`}},$r=`~memo`,ei=[];function ti(e){return typeof e==`object`&&!!e}function ni(e){return e.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}var ri=new WeakMap,ii=0,ai=1,oi=2;function si(e,t,n){let r=ri.get(e);if(r!==void 0)return r?oi:ii;if(t.has(e))return oi;t.add(e);let i=ii,a=e=>{if(i!==oi&&e?._zod){let r=si(e,t,n);r>i&&(i=r)}},o=(e,r)=>{let i=ii;for(let a of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,a);if(r&&!o.enumerable)continue;let s=o.get?ai:o.value?._zod?si(o.value,t,n):ii;s>i&&(i=s)}return i},s=e=>{e>i&&(i=e)},c=e._zod.def;switch(c.type){case`object`:{let e=v(c);s(e?o(e,!0):ai),a(c.catchall);break}case`array`:a(c.element);break;case`tuple`:for(let e of c.items)a(e);a(c.rest);break;case`record`:case`map`:a(c.keyType),a(c.valueType);break;case`set`:a(c.valueType);break;case`union`:for(let e of c.options)a(e);break;case`intersection`:a(c.left),a(c.right);break;case`optional`:case`nullable`:case`default`:case`prefault`:case`catch`:case`readonly`:case`nonoptional`:case`promise`:case`success`:a(c.innerType);break;case`pipe`:a(c.in),a(c.out);break;case`function`:a(c.input),a(c.output);break;case`lazy`:{let r=c._cachedInner??(n?e._zod.innerType:void 0);s(r?si(r,t,!1):ai);break}case`template_literal`:case`string`:case`number`:case`int`:case`boolean`:case`bigint`:case`symbol`:case`undefined`:case`null`:case`void`:case`never`:case`any`:case`unknown`:case`date`:case`nan`:case`enum`:case`literal`:case`file`:case`transform`:case`custom`:break;default:for(let e in c){let t=Object.getOwnPropertyDescriptor(c,e);if(!t||t.get)continue;let n=t.value;if(n&&typeof n==`object`){if(n._zod)a(n);else if(Array.isArray(n))for(let e of n)a(e)}}}return t.delete(e),ci(e,i)}function ci(e,t){return t!==ai&&ri.set(e,t===oi),t}function li(e,t){let n=e.buckets.get(t);return n||(n=new WeakMap,e.buckets.set(t,n)),n}var ui,di=[],fi={alloc(e,t,n){let r=ui;if(!r)return n;ui=void 0;let i={value:n,issues:null};return r.set(t.value,i),di.push(i),n},guard(e){var t;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,n=(e,n)=>{if(n.direction!==`backward`&&mi(n,e.value))throw new Qr;return t(e,n)};e._zod.parse=n,e._zod.run===t&&(e._zod.run=n)})},attach(e){var t;let n,r=!1,i,a;(t=e._zod).deferred??(t.deferred=[]),e._zod.deferred.push(()=>{let t=e._zod.parse,o=(s,c)=>{if(n===void 0){let i=si(e,new Set,!1);if(i===ii)return e._zod.parse=t,e._zod.run===o&&(e._zod.run=t),t(s,c);i===oi||r?n=!0:r=!0}let l=s.value;if(!ti(l))return t(s,c);let u=c[$r];u||(u={buckets:new WeakMap,backEdges:void 0},c[$r]=u);let d;i===c?d=a:(d=li(u,e),i=c,a=d);let f=d.get(l);if(f)return s.value=f.value,f.issues?f.issues.length&&s.issues.push(...ni(f.issues)):(s.memo=!0,u.backEdges??(u.backEdges=new WeakSet),u.backEdges.add(f.value)),s;ui=d;let p=di.length,m=t(s,c);ui=void 0;let h=di.length>p?di.pop():void 0;return m instanceof Promise?m.then(e=>(h&&(h.issues=e.issues.length?ni(e.issues):ei),e)):(h&&(h.issues=m.issues.length?ni(m.issues):ei),m)};e._zod.parse=o,e._zod.run===t&&(e._zod.run=o)})}};function pi(){return fi}function mi(e,t){let n=e[$r]?.backEdges;return n!==void 0&&ti(t)&&n.has(t)}var hi=()=>{let e={string:{unit:`characters`,verb:`to have`},file:{unit:`bytes`,verb:`to have`},array:{unit:`items`,verb:`to have`},set:{unit:`items`,verb:`to have`},map:{unit:`entries`,verb:`to have`}};function t(t){return e[t]??null}let n={regex:`input`,email:`email address`,url:`URL`,emoji:`emoji`,uuid:`UUID`,uuidv4:`UUIDv4`,uuidv6:`UUIDv6`,nanoid:`nanoid`,guid:`GUID`,cuid:`cuid`,cuid2:`cuid2`,ulid:`ULID`,xid:`XID`,ksuid:`KSUID`,datetime:`ISO datetime`,date:`ISO date`,time:`ISO time`,duration:`ISO duration`,ipv4:`IPv4 address`,ipv6:`IPv6 address`,mac:`MAC address`,cidrv4:`IPv4 range`,cidrv6:`IPv6 range`,base64:`base64-encoded string`,base64url:`base64url-encoded string`,json_string:`JSON string`,e164:`E.164 number`,currency_code:`currency code`,credit_card:`credit card number`,iban:`IBAN`,jwt:`JWT`,template_literal:`input`},r={nan:`NaN`};function i(e,t){return e===`number`&&typeof t==`number`&&!Number.isFinite(t)?String(t):r[e]??e}return e=>{switch(e.code){case`invalid_type`:return`Invalid input: expected ${i(e.expected)}, received ${i(Oe(e.input),e.input)}`;case`invalid_value`:return e.values.length===1?`Invalid input: expected ${ce(e.values[0])}`:`Invalid option: expected one of ${u(e.values,`|`)}`;case`too_big`:{let n=e.exact?`exactly `:e.inclusive?`<=`:`<`,r=t(e.origin);return r?`Too big: expected ${e.origin??`value`} to have ${n}${e.maximum.toString()} ${r.unit??`elements`}`:`Too big: expected ${e.origin??`value`} to be ${n}${e.maximum.toString()}`}case`too_small`:{let n=e.exact?`exactly `:e.inclusive?`>=`:`>`,r=t(e.origin);return r?`Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`:`Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`}case`invalid_format`:{let t=e;return t.format===`starts_with`?`Invalid string: must start with "${t.prefix}"`:t.format===`ends_with`?`Invalid string: must end with "${t.suffix}"`:t.format===`includes`?`Invalid string: must include "${t.includes}"`:t.format===`regex`?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${n[t.format]??e.format}`}case`not_multiple_of`:return`Invalid number: must be a multiple of ${e.divisor}`;case`unrecognized_keys`:return`Unrecognized key${e.keys.length>1?`s`:``}: ${u(e.keys,`, `)}`;case`invalid_key`:return`Invalid key in ${e.origin}`;case`invalid_union`:return e.options&&Array.isArray(e.options)&&e.options.length>0?`Invalid discriminator value. Expected ${e.options.map(e=>`'${e}'`).join(` | `)}`:e.inclusive===!1?`Invalid input: more than one option matched`:`Invalid input`;case`invalid_element`:return`Invalid value in ${e.origin}`;default:return`Invalid input`}}};function gi(){return{localeError:hi()}}var _i,vi=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function yi(){return new vi}(_i=globalThis).__zod_globalRegistry??(_i.__zod_globalRegistry=yi());var bi=globalThis.__zod_globalRegistry;function xi(e){return e.checks&&=[...e.checks],e}function Si(e,t){return new e(xi({type:`string`,...D(t)}))}function Ci(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...D(t)})}function wi(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...D(t)})}function Ti(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...D(t)})}function Ei(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...D(t)})}function Di(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...D(t)})}function Oi(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...D(t)})}function ki(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...D(t)})}function Ai(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...D(t)})}function ji(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...D(t)})}function Mi(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...D(t)})}function Ni(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...D(t)})}function Pi(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...D(t)})}function Fi(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...D(t)})}function Ii(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...D(t)})}function Li(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...D(t)})}function Ri(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...D(t)})}function zi(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...D(t)})}function Bi(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...D(t)})}function Vi(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...D(t)})}function Hi(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...D(t)})}function Ui(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...D(t)})}function Wi(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...D(t)})}function Gi(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...D(t)})}function Ki(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...D(t)})}function qi(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...D(t)})}function Ji(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...D(t)})}function Yi(e,t){return new e(xi({type:`number`,checks:[],...D(t)}))}function Xi(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...D(t)})}function Zi(e,t){return new e({type:`boolean`,...D(t)})}function Qi(e){return new e({type:`unknown`})}function $i(e,t){return new e({type:`never`,...D(t)})}function ea(e,t){return new on({check:`less_than`,...D(t),value:e,inclusive:!1})}function ta(e,t){return new on({check:`less_than`,...D(t),value:e,inclusive:!0})}function na(e,t){return new sn({check:`greater_than`,...D(t),value:e,inclusive:!1})}function ra(e,t){return new sn({check:`greater_than`,...D(t),value:e,inclusive:!0})}function ia(e,t){return new cn({check:`multiple_of`,...D(t),value:e})}function aa(e,t){return new un({check:`max_length`,...D(t),maximum:e})}function oa(e,t){return new dn({check:`min_length`,...D(t),minimum:e})}function sa(e,t){return new fn({check:`length_equals`,...D(t),length:e})}function ca(e,t){return new mn({check:`string_format`,format:`regex`,...D(t),pattern:e})}function la(e){return new hn({check:`string_format`,format:`lowercase`,...D(e)})}function F(e){return new gn({check:`string_format`,format:`uppercase`,...D(e)})}function ua(e,t){return new _n({check:`string_format`,format:`includes`,...D(t),includes:e})}function da(e,t){return new vn({check:`string_format`,format:`starts_with`,...D(t),prefix:e})}function fa(e,t){return new yn({check:`string_format`,format:`ends_with`,...D(t),suffix:e})}function pa(e){return new bn({check:`overwrite`,tx:e})}function ma(e){return pa(t=>t.normalize(e))}function ha(){return pa(e=>e.trim())}function ga(){return pa(e=>e.toLowerCase())}function _a(){return pa(e=>e.toUpperCase())}function va(){return pa(e=>ee(e))}function ya(e,t,n){return new e({type:`array`,element:t,...D(n)})}function ba(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...D(n)})}function xa(e,t){let n=Sa(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(ke(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,`input`in r||(r.input=t.value),r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(ke(r))}},e(t.value,t)),t);return n}function Sa(e,t){let n=new nn({check:`custom`,...D(t)});return n._zod.check=e,n}function Ca(e,...t){for(let n of t)for(let t of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,t)&&_(e,t,n[t]);return e}function wa(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??bi,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,intersections:[],deferred:[],external:e?.external??void 0}}function Ta(e,t,n,r,i){let a=typeof t.unrepresentable==`function`?t.unrepresentable({zodSchema:e,path:r.path,message:i}):t.unrepresentable;if(a===`any`)return!1;if(a===void 0||a===`throw`)throw Error(i);return Object.assign(n,a),!0}function Ea(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o),t.sharedDefsExtractedFor=void 0,t.sharedEmitDoneFor=void 0;let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Ea(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Ca(o.schema,c),t.io===`input`&&I(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Da(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Oa(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);if(e.external&&e.sharedDefsExtractedFor===e.external)return;let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${Da(a)}`}}let i=`#/${r}/`;if(t[1]===n&&!t[1].schema.id)return{ref:`#`};let a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+Da(a)}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0])a(n);else{if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}(e.metadataRegistry.get(n[0])?.id||r.cycle||r.count>1&&e.reused===`ref`)&&a(n)}}e.external&&(e.sharedDefsExtractedFor=e.external)}function ka(e){let t=e.anyOf;if(!Array.isArray(t)||t.length===0||e.type!==void 0)return;let n=[];for(let e of t){if(!e||typeof e!=`object`)return;ka(e);let t=Object.keys(e);if(t.length!==1||t[0]!==`type`)return;let r=e.type;for(let e of Array.isArray(r)?r:[r]){if(typeof e!=`string`)return;n.includes(e)||n.push(e)}}delete e.anyOf,e.type=n.length===1?n[0]:n}var Aa=new Set([`type`,`properties`,`required`,`additionalProperties`]),ja=[`oneOf`,`anyOf`];function Ma(e){let t=e.additionalProperties;return t===void 0||t===!1||typeof t!=`object`||!t?null:Object.keys(t).length?t:null}function Na(e){let t=[];for(let n of e){if(typeof n!=`object`||n.type!==`object`)return null;for(let e in n)if(!Aa.has(e))return null;t.push(n)}let n={},r=new Set;for(let e of t){for(let r in e.properties){if(Object.prototype.hasOwnProperty.call(n,r))continue;let e=[];for(let n of t){let t=n.properties?.[r]??Ma(n);t!=null&&(e.some(e=>JSON.stringify(e)===JSON.stringify(t))||e.push(t))}_(n,r,e.length===1?e[0]:Na(e)??{allOf:e})}for(let t of e.required??[])r.add(t)}let i={type:`object`,properties:n};if(r.size&&(i.required=[...r]),t.every(e=>e.additionalProperties===!1))i.additionalProperties=!1;else{let e=[];for(let n of t){let t=Ma(n);t&&!e.some(e=>JSON.stringify(e)===JSON.stringify(t))&&e.push(t)}e.length===1?i.additionalProperties=e[0]:e.length>1&&(i.additionalProperties={allOf:e})}return i}function Pa(e){let t=e.allOf;if(!Array.isArray(t)||t.length<2)return;for(let t of Aa)if(t in e)return;let n=t.filter(e=>ja.some(t=>Array.isArray(e[t]))),r=null;if(!n.length)r=Na(t);else{let e=n[0],i=ja.find(t=>Array.isArray(e[t]));if(Object.keys(e).length!==1)return;let a=t.filter(t=>t!==e),o=e[i].map(e=>Na([...a,e]));if(o.some(e=>!e))return;r={[i]:o}}r&&(delete e.allOf,Ca(e,r))}function Fa(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Ca(i,s),Ca(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};if(!e.external||e.sharedEmitDoneFor!==e.external){for(let t of[...e.seen.entries()].reverse())r(t[0]);if(e.target!==`openapi-3.0`)for(let t of e.seen.entries())ka(t[1].def??t[1].schema);for(let t of e.deferred)t();if(e.intersections.length){let t=new Map;for(let n of e.seen.values())for(let e of[n.schema,n.def]){let n=e?.allOf;if(!Array.isArray(n))continue;let r=t.get(n);r?r.push(e):t.set(n,[e])}for(let n of e.intersections)for(let e of t.get(n)??[])Pa(e)}}let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Ca(i,n.defId?n.schema:n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};if(!e.external||e.sharedEmitDoneFor!==e.external)for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,_(o,e.defId,e.def))}e.external&&(e.sharedEmitDoneFor=e.external),e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:La(t,`input`,e.processors),output:La(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function I(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return I(r.element,n);if(r.type===`set`)return I(r.valueType,n);if(r.type===`lazy`)return I(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`||r.type===`catch`)return I(r.innerType,n);if(r.type===`intersection`)return I(r.left,n)||I(r.right,n);if(r.type===`record`||r.type===`map`)return I(r.keyType,n)||I(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:I(r.in,n)||I(r.out,n);if(r.type===`object`){for(let e in r.shape)if(I(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(I(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(I(e,n))return!0;return!!(r.rest&&I(r.rest,n))}return!1}var Ia=(e,t={})=>n=>{let r=wa({...n,processors:t});return Ea(e,r),Oa(r,e),Fa(r,e)},La=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=wa({...i??{},target:a,io:t,processors:n});return Ea(e,o),Oa(o,e),Fa(o,e)},Ra=(e,t,n)=>{(e[t]===void 0||n>e[t])&&(e[t]=n)},za=(e,t,n)=>{(e[t]===void 0||n<e[t])&&(e[t]=n)},Ba=(e,t)=>{Ra(e,`minimum`,t),za(e,`maximum`,t)},Va=(e,t)=>{e.multipleOf??=[],e.multipleOf.includes(t)||e.multipleOf.push(t)},Ha=(e,t)=>{e.patterns??=new Set,e.patterns.add(t)},Ua=(e,t)=>{e.mime=e.mime?e.mime.filter(e=>t.includes(e)):[...t]},Wa=(e,t)=>{e.format=t,t.includes(`int`)&&(e.isInt=!0)},Ga=(e,t)=>Ra(e,`minimum`,t.minimum),Ka=(e,t)=>za(e,`maximum`,t.maximum),qa=e=>(t,n)=>{Wa(t,n.format);let[r,i]=e[n.format];Ra(t,`minimum`,r),za(t,`maximum`,i)},Ja={greater_than:(e,t)=>Ra(e,t.inclusive?`minimum`:`exclusiveMinimum`,t.value),less_than:(e,t)=>za(e,t.inclusive?`maximum`:`exclusiveMaximum`,t.value),multiple_of:(e,t)=>Va(e,t.value),number_format:qa(ue),bigint_format:qa(de),min_length:Ga,max_length:Ka,length_equals:(e,t)=>Ba(e,t.length),min_size:Ga,max_size:Ka,size_equals:(e,t)=>Ba(e,t.size),string_format:(e,t)=>{Wa(e,t.format),t.pattern&&Ha(e,t.pattern),(t.format===`base64`||t.format===`base64url`)&&(e.contentEncoding=t.format),(t.local||t.precision===-1)&&(e.laxFormat=!0)},mime_type:(e,t)=>Ua(e,t.mime)};function Ya(e){let t={},n=e._zod.def,r=e._zod.traits.has(`$ZodCheck`)?[e,...n.checks??[]]:n.checks??[];for(let e of r)Ja[e._zod.def.check]?.(t,e._zod.def);let i=e._zod.bag;i.minimum!==void 0&&Ra(t,`minimum`,i.minimum),i.exclusiveMinimum!==void 0&&Ra(t,`exclusiveMinimum`,i.exclusiveMinimum),i.maximum!==void 0&&za(t,`maximum`,i.maximum),i.exclusiveMaximum!==void 0&&za(t,`exclusiveMaximum`,i.exclusiveMaximum),i.multipleOf!==void 0&&Va(t,i.multipleOf),i.format!==void 0&&(t.format??=i.format,i.format.includes(`int`)&&(t.isInt=!0)),i.mime&&Ua(t,i.mime);for(let e of i.patterns??[])Ha(t,e);return t}var Xa={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Za=new Map([[ir,Vt],[or,Ht]]),Qa=e=>Za.get(e)??e,$a=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l,laxFormat:u}=Ya(e);if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Xa[s]??s,i.format===``&&delete i.format,(s===`time`||u)&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c].map(Qa);e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},eo=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,multipleOf:s,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=Ya(e);i.type=u?`integer`:`number`;let d=typeof l==`number`&&l>=(a??-1/0),f=typeof c==`number`&&c<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;if(d?p?(i.minimum=l,i.exclusiveMinimum=!0):i.exclusiveMinimum=l:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=c,i.exclusiveMaximum=!0):i.exclusiveMaximum=c:typeof o==`number`&&(i.maximum=o),s){let n=new Set;for(let a of s)Number.isFinite(a)&&a!==0?n.add(Math.abs(a)):Ta(e,t,i,r,`A multipleOf divisor of ${a} cannot be represented in JSON Schema`);let[a,...o]=n;a!==void 0&&(i.multipleOf=a),o.length&&(i.allOf=[...i.allOf??[],...o.map(e=>({multipleOf:e}))])}},to=(e,t,n,r)=>{n.type=`boolean`},no=(e,t,n,r)=>{n.not={}},ro=(e,t,n,r)=>{let i=e._zod.def,a=l(i.entries);a.length===0?n.not={}:(a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a)},io=(e,t,n,r)=>{Ta(e,t,n,r,`Custom types cannot be represented in JSON Schema`)},ao=(e,t,n,r)=>{Ta(e,t,n,r,`Transforms cannot be represented in JSON Schema`)},oo=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=Ya(e);typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Ea(a.element,t,{...r,path:[...r.path,`items`]})};function so(e){let t=e._zod.def;return t.type===`pipe`&&t.in._zod.traits.has(`$ZodTransform`)?so(t.out):t.type===`catch`?so(t.innerType):e._zod.optin}var co=(e,t,n,r)=>{let i=n,a=e._zod.def,o=a.shape;if(Object.getOwnPropertySymbols(o).length&&Ta(e,t,i,r,`Symbol keys cannot be represented in JSON Schema`))return;i.type=`object`,i.properties={};for(let e in o)_(i.properties,e,Ea(o[e],t,{...r,path:[...r.path,`properties`,e]}));let s=[];for(let e of Object.keys(o)){let n=a.shape[e];(t.io===`input`?so(n)===void 0:n._zod.optout===void 0)&&s.push(e)}s.length>0&&(i.required=s),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Ea(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},lo=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Ea(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},uo=(e,t,n,r)=>{let i=e._zod.def,a=Ea(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Ea(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1,c=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]];n.allOf=c,t.intersections.push(c)};function fo(e,t,n){if(t.$ref){if(n.has(t))return t;n.add(t);let r=e.get(t)?.def;if(!r)return t;let i=fo(e,r,n);return i===r?t:i}for(let r of[`anyOf`,`oneOf`]){let i=t[r];if(!Array.isArray(i))continue;let a=i.map(t=>fo(e,t,n));a.some((e,t)=>e!==i[t])&&(t={...t,[r]:a})}let r=Array.isArray(t.type)?t.type:[t.type],i=!r.includes(`string`)&&r.some(e=>e===`number`||e===`integer`),a=t.enum??(t.const===void 0?void 0:[t.const]);if(!i&&!a?.some(e=>typeof e==`number`))return t;let{minimum:o,maximum:s,exclusiveMinimum:c,exclusiveMaximum:l,multipleOf:u,format:d,id:f,...p}=t;return p.enum?p.enum=p.enum.map(e=>typeof e==`number`?String(e):e):typeof p.const==`number`&&(p.const=String(p.const)),i&&(p.type=`string`,a||(p.pattern=(r.includes(`number`)?Qt:N).source)),p}var po=new WeakMap;function mo(e){let t=new Map;for(let n of e.seen.values())n.def&&!t.has(n.schema)&&t.set(n.schema,n);let n=new Map;for(let r of po.get(e)??[]){let i=e.seen.get(r),a=(i?.def??i?.schema)?.propertyNames;if(!a||a===!0||n.has(a))continue;let o=fo(t,a,new Set);o!==a&&n.set(a,o)}if(n.size)for(let t of e.seen.values())for(let e of[t.schema,t.def]){let t=e&&n.get(e.propertyNames);t&&(e.propertyNames=t)}}var ho=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`;let o=a.keyType,s=Ya(o).patterns;if(a.mode===`loose`&&s&&s.size>0){let e=Ea(a.valueType,t,{...r,path:[...r.path,`patternProperties`,`*`]});i.patternProperties={};for(let t of s)_(i.patternProperties,Qa(t).source,e)}else{if(t.target===`draft-07`||t.target===`draft-2020-12`){i.propertyNames=Ea(a.keyType,t,{...r,path:[...r.path,`propertyNames`]});let n=po.get(t);n||(n=[],po.set(t,n),t.deferred.push(()=>mo(t))),n.push(e)}i.additionalProperties=Ea(a.valueType,t,{...r,path:[...r.path,`additionalProperties`]})}let c=o._zod.values,l=t.io===`input`&&so(a.valueType)!==void 0;if(c&&!a.partial&&!l){let e=[...c].filter(e=>typeof e==`string`||typeof e==`number`);e.length>0&&(i.required=e.map(String))}},go=(e,t,n,r)=>{let i=e._zod.def,a=Ea(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},_o=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},vo=Symbol();function yo(e,t,n,r,i){let a=!1,o=JSON.stringify(e,(e,t)=>typeof t==`bigint`?(a=!0,null):t);return a?(Ta(t,n,r,i,`BigInt defaults cannot be represented in JSON Schema`),vo):JSON.parse(o)}var bo=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o=yo(i.defaultValue,e,t,n,r);o!==vo&&(n.default=o)},xo=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);if(a.ref=i.innerType,t.io!==`input`)return;let o=yo(i.defaultValue,e,t,n,r);o!==vo&&(n._prefault=o)},So=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{Ta(e,t,n,r,`Dynamic catch values are not supported in JSON Schema`);return}n.default=o},Co=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Ea(o,t,r);let s=t.seen.get(e);s.ref=o},wo=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},To=(e,t,n,r)=>{let i=e._zod.def;Ea(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},Eo=new WeakSet([Object.prototype,Error.prototype]);function Do(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var Oo=(e,t)=>{tt.init(e,t),e.name=`ZodError`;let n=Object.getPrototypeOf(e);Eo.has(n)||(Eo.add(n),Do(n,`format`,e=>t=>it(e,t)),Do(n,`flatten`,e=>t=>rt(e,t)),Do(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,d,2)}),Do(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,d,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},ko=M(`ZodError`,Oo),Ao=M(`ZodError`,Oo,void 0,{Parent:Error}),jo=ot(Ao),Mo=st(Ao),No=ct(Ao),Po=ut(Ao),Fo=gt(Ao),Io=_t(Ao),Lo=vt(Ao),Ro=yt(Ao),zo=bt(Ao),Bo=xt(Ao),Vo=St(Ao),Ho=Ct(Ao);function Uo(){Je.localeError||Ye(gi())}function Wo(){Je.memoizer||Ye({memoizer:pi()})}var Go=M(`ZodType`,(e,t)=>(Uo(),Cn.init(e,t),e.def=t,e.type=t.type,e),{check(...e){let t=this.def;return this.clone(w(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return se(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(ac(e,t))},superRefine(e,t){return this.check(oc(e,t))},overwrite(e){return this.check(pa(e))},optional(){return Vs(this)},exactOptional(){return Us(this)},nullable(){return Gs(this)},nullish(){return Vs(Gs(this))},nonoptional(e){return Zs(this,e)},array(){return B(this)},or(e){return As([this,e])},and(e){return Ms(this,e)},transform(e){return tc(this,zs(e))},default(e){return qs(this,e)},prefault(e){return Ys(this,e)},catch(e){return $s(this,e)},pipe(e){return tc(this,e)},readonly(){return rc(this)},describe(e){let t=this.clone();return bi.add(t,{description:e}),t},meta(...e){if(e.length===0)return bi.get(this);let t=this.clone();return bi.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e,...t){return t.length===0?e(this):e(this,...t)},get"~standard"(){return Me(this,`~standard`,{...En(this),jsonSchema:{input:La(this,`input`),output:La(this,`output`)}})},set"~standard"(e){je(this,`~standard`,e)},parse:function e(t,n){return jo(this,t,n,{callee:e})},parseAsync:async function e(t,n){return await Mo(this,t,n,{callee:e})},safeParse(e,t){return No(this,e,t)},async safeParseAsync(e,t){return Po(this,e,t)},get spa(){return this?.safeParseAsync},set spa(e){je(this,`spa`,e)},validate(e,t){return pt(this,e,t)},validateAsync(e,t){return ht(this,e,t)},encode:function e(t,n){return Fo(this,t,n,{callee:e})},decode:function e(t,n){return Io(this,t,n,{callee:e})},encodeAsync:async function e(t,n){return await Lo(this,t,n,{callee:e})},decodeAsync:async function e(t,n){return await Ro(this,t,n,{callee:e})},safeEncode(e,t){return zo(this,e,t)},safeDecode(e,t){return Bo(this,e,t)},async safeEncodeAsync(e,t){return Vo(this,e,t)},async safeDecodeAsync(e,t){return Ho(this,e,t)},toJSONSchema(e){return Ia(this,{})(e)},get description(){return bi.get(this)?.description},get _def(){return this._zod.def}}),Ko=M(`_ZodString`,(e,t)=>{Dn.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$a(e,t,n,r)},Ne({format:e=>Ya(e).format??null,minLength:e=>Ya(e).minimum??null,maxLength:e=>Ya(e).maximum??null},{regex(...e){return this.check(ca(...e))},includes(...e){return this.check(ua(...e))},startsWith(...e){return this.check(da(...e))},endsWith(...e){return this.check(fa(...e))},min(...e){return this.check(oa(...e))},max(...e){return this.check(aa(...e))},length(...e){return this.check(sa(...e))},nonempty(...e){return this.check(oa(1,...e))},lowercase(e){return this.check(la(e))},uppercase(e){return this.check(F(e))},trim(){return this.check(ha())},normalize(...e){return this.check(ma(...e))},toLowerCase(){return this.check(ga())},toUpperCase(){return this.check(_a())},slugify(){return this.check(va())}})),L=M(`ZodString`,(e,t)=>{Dn.init(e,t),Ko.init(e,t)},{email(e){return this.check(Ci(Zo,e))},url(e){return this.check(ki(es,e))},jwt(e){return this.check(Wi(hs,e))},emoji(e){return this.check(Ai(ts,e))},guid(e){return this.check(wi(Qo,e))},uuid(e){return this.check(Ti($o,e))},uuidv4(e){return this.check(Ei($o,e))},uuidv6(e){return this.check(Di($o,e))},uuidv7(e){return this.check(Oi($o,e))},nanoid(e){return this.check(ji(ns,e))},cuid(e){return this.check(Mi(rs,e))},cuid2(e){return this.check(Ni(is,e))},ulid(e){return this.check(Pi(as,e))},base64(e){return this.check(Vi(fs,e))},base64url(e){return this.check(Hi(ps,e))},xid(e){return this.check(Fi(os,e))},ksuid(e){return this.check(Ii(ss,e))},ipv4(e){return this.check(Li(cs,e))},ipv6(e){return this.check(Ri(ls,e))},cidrv4(e){return this.check(zi(us,e))},cidrv6(e){return this.check(Bi(ds,e))},e164(e){return this.check(Ui(ms,e))},datetime(e){return this.check(Gi(qo,e))},date(e){return this.check(Ki(Jo,e))},time(e){return this.check(qi(Yo,e))},duration(e){return this.check(Ji(Xo,e))}});function R(e){return Si(L,e)}var z=M(`ZodStringFormat`,(e,t)=>{P.init(e,t),Ko.init(e,t)}),qo=M(`ZodISODateTime`,(e,t)=>{Kn.init(e,t),z.init(e,t)}),Jo=M(`ZodISODate`,(e,t)=>{qn.init(e,t),z.init(e,t)}),Yo=M(`ZodISOTime`,(e,t)=>{Jn.init(e,t),z.init(e,t)}),Xo=M(`ZodISODuration`,(e,t)=>{Yn.init(e,t),z.init(e,t)}),Zo=M(`ZodEmail`,(e,t)=>{An.init(e,t),z.init(e,t)}),Qo=M(`ZodGUID`,(e,t)=>{On.init(e,t),z.init(e,t)}),$o=M(`ZodUUID`,(e,t)=>{kn.init(e,t),z.init(e,t)}),es=M(`ZodURL`,(e,t)=>{Rn.init(e,t),z.init(e,t)}),ts=M(`ZodEmoji`,(e,t)=>{zn.init(e,t),z.init(e,t)}),ns=M(`ZodNanoID`,(e,t)=>{Bn.init(e,t),z.init(e,t)}),rs=M(`ZodCUID`,(e,t)=>{Vn.init(e,t),z.init(e,t)}),is=M(`ZodCUID2`,(e,t)=>{Hn.init(e,t),z.init(e,t)}),as=M(`ZodULID`,(e,t)=>{Un.init(e,t),z.init(e,t)}),os=M(`ZodXID`,(e,t)=>{Wn.init(e,t),z.init(e,t)}),ss=M(`ZodKSUID`,(e,t)=>{Gn.init(e,t),z.init(e,t)}),cs=M(`ZodIPv4`,(e,t)=>{Xn.init(e,t),z.init(e,t)}),ls=M(`ZodIPv6`,(e,t)=>{$n.init(e,t),z.init(e,t)}),us=M(`ZodCIDRv4`,(e,t)=>{er.init(e,t),z.init(e,t)}),ds=M(`ZodCIDRv6`,(e,t)=>{nr.init(e,t),z.init(e,t)}),fs=M(`ZodBase64`,(e,t)=>{ar.init(e,t),z.init(e,t)}),ps=M(`ZodBase64URL`,(e,t)=>{cr.init(e,t),z.init(e,t)}),ms=M(`ZodE164`,(e,t)=>{lr.init(e,t),z.init(e,t)}),hs=M(`ZodJWT`,(e,t)=>{dr.init(e,t),z.init(e,t)}),gs=M(`ZodNumber`,(e,t)=>{fr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>eo(e,t,n,r),e.isFinite=!0},Ne({minValue:e=>{let{minimum:t,exclusiveMinimum:n}=Ya(e);return Math.max(t??-1/0,n??-1/0)},maxValue:e=>{let{maximum:t,exclusiveMaximum:n}=Ya(e);return Math.min(t??1/0,n??1/0)},isInt:e=>{let{isInt:t,multipleOf:n}=Ya(e);return!!t||!!n?.some(Number.isSafeInteger)},format:e=>Ya(e).format??null},{gt(e,t){return this.check(na(e,t))},gte(e,t){return this.check(ra(e,t))},min(e,t){return this.check(ra(e,t))},lt(e,t){return this.check(ea(e,t))},lte(e,t){return this.check(ta(e,t))},max(e,t){return this.check(ta(e,t))},int(e){return this.check(ys(e))},safe(e){return this.check(ys(e))},positive(e){return this.check(na(0,e))},nonnegative(e){return this.check(ra(0,e))},negative(e){return this.check(ea(0,e))},nonpositive(e){return this.check(ta(0,e))},multipleOf(e,t){return this.check(ia(e,t))},step(e,t){return this.check(ia(e,t))},finite(){return this}}));function _s(e){return Yi(gs,e)}var vs=M(`ZodNumberFormat`,(e,t)=>{pr.init(e,t),gs.init(e,t)});function ys(e){return Xi(vs,e)}var bs=M(`ZodBoolean`,(e,t)=>{mr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>to(e,t,n,r)});function xs(e){return Zi(bs,e)}var Ss=M(`ZodUnknown`,(e,t)=>{hr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function Cs(){return Qi(Ss)}var ws=M(`ZodNever`,(e,t)=>{gr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>no(e,t,n,r)});function Ts(e){return $i(ws,e)}var Es=M(`ZodArray`,(e,t)=>{Wo(),br.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oo(e,t,n,r),e.element=t.element},{min(e,t){return this.check(oa(e,t))},nonempty(e){return this.check(oa(1,e))},max(e,t){return this.check(aa(e,t))},length(e,t){return this.check(sa(e,t))},unwrap(){return this.element}});function B(e,t){return ya(Es,e,t)}var Ds=M(`ZodObject`,(e,t)=>{Wo(),Er.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>co(e,t,n,r),ze(e,`shape`,e=>e._zod.def.shape,!1)},{keyof(){return Ls(Object.keys(this._zod.def.shape))},catchall(e){return this.clone(w(this._zod.def,{catchall:e}))},passthrough(){return this.clone(w(this._zod.def,{catchall:Cs()}))},loose(){return this.clone(w(this._zod.def,{catchall:Cs()}))},strict(){return this.clone(w(this._zod.def,{catchall:Ts()}))},strip(){return this.clone(w(this._zod.def,{catchall:void 0}))},extend(e){return he(this,e)},safeExtend(e){return _e(this,e)},merge(e){return ve(this,e)},pick(e){return fe(this,e)},omit(e){return me(this,e)},partial(...e){return ye(Bs,this,e[0])},exactPartial(...e){return ye(Hs,this,e[0],`exactPartial`)},required(...e){return be(Xs,this,e[0])}});function Os(e,t){return new Ds({type:`object`,shape:e??{},...D(t)})}var ks=M(`ZodUnion`,(e,t)=>{Or.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>lo(e,t,n,r),e.options=t.options});function As(e,t){return new ks({type:`union`,options:e,...D(t)})}var js=M(`ZodIntersection`,(e,t)=>{kr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>uo(e,t,n,r)});function Ms(e,t){return new js({type:`intersection`,left:e,right:t})}var Ns=M(`ZodRecord`,(e,t)=>{Wo(),Mr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ho(e,t,n,r),e.keyType=t.keyType,e.valueType=t.valueType});function Ps(e,t,n){return!t||!t._zod?new Ns({type:`record`,keyType:R(),valueType:e,...D(t)}):new Ns({type:`record`,keyType:e,valueType:t,...D(n)})}function Fs(e,t,n){return new Ns({type:`record`,keyType:e,valueType:t,...D(n),partial:!0})}var Is=M(`ZodEnum`,(e,t)=>{Nr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ro(e,t,n,r),e.enum=t.entries,e.options=[...e._zod.values];let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Is({...t,checks:[],...D(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Is({...t,checks:[],...D(r),entries:i})}});function Ls(e,t){return new Is({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...D(t)})}var Rs=M(`ZodTransform`,(e,t)=>{Wo(),Pr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ao(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new qe(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(ke(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,`input`in t||(t.input=n.value),t.inst??=e,n.issues.push(ke(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n)):(n.value=i,n)}});function zs(e){return new Rs({type:`transform`,transform:e})}var Bs=M(`ZodOptional`,(e,t)=>{Ir.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>To(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Vs(e){return new Bs({type:`optional`,innerType:e})}var Hs=M(`ZodExactOptional`,(e,t)=>{Lr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>To(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Us(e){return new Hs({type:`optional`,innerType:e})}var Ws=M(`ZodNullable`,(e,t)=>{Rr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>go(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Gs(e){return new Ws({type:`nullable`,innerType:e})}var Ks=M(`ZodDefault`,(e,t)=>{zr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>bo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function qs(e,t){return new Ks({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():ie(t)}})}var Js=M(`ZodPrefault`,(e,t)=>{Vr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>xo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ys(e,t){return new Js({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():ie(t)}})}var Xs=M(`ZodNonOptional`,(e,t)=>{Hr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>_o(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Zs(e,t){return new Xs({type:`nonoptional`,innerType:e,...D(t)})}var Qs=M(`ZodCatch`,(e,t)=>{Gr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>So(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function $s(e,t){return new Qs({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:Ve(t)})}var ec=M(`ZodPipe`,(e,t)=>{Kr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Co(e,t,n,r),e.in=t.in,e.out=t.out});function tc(e,t){return new ec({type:`pipe`,in:e,out:t})}var nc=M(`ZodReadonly`,(e,t)=>{Jr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>wo(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function rc(e){return new nc({type:`readonly`,innerType:e})}var ic=M(`ZodCustom`,(e,t)=>{Xr.init(e,t),Go.init(e,t),e._zod.processJSONSchema=(t,n,r)=>io(e,t,n,r)});function ac(e,t={}){return ba(ic,e,t)}function oc(e,t){return xa(e,t)}var sc=[`endurance`,`power`,`grace`],cc=[`empathy`,`persuasion`,`demeanor`],lc=[`logic`,`intuition`,`memory`],uc=Ls([...sc,...cc,...lc]),V={physical:sc,social:cc,mental:lc,magic:[]},dc=[`physical`,`social`,`mental`],fc=Os({hp:_s().int(),vp:_s().int(),sp:_s().int(),mp:_s().int()}).partial(),pc=R().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/,`must be kebab-case`),mc=Ls([`placeholder`,`draft`,`final`]),hc=Os({id:pc,name:R().min(1),status:mc,plane:R().min(1),region:R().optional(),summary:R().min(1),tags:B(R()).default([]),lore:R().optional()}),gc=Ps(uc,Os({bonus:_s().int().min(0),max:_s().int().min(0).max(20)}).refine(e=>e.bonus<=e.max,`bonus can't exceed max`)),_c=Os({name:R().min(1),description:R().min(1)}),vc=Os({trait:pc,rank:_s().int().min(1).optional()}),yc=Os({choose:_s().int().min(1),from:R().min(1),note:R().optional(),perRank:xs().optional()}),bc=hc.extend({features:B(_c).default([]),grants:B(vc).default([]),resources:fc.default({}),traitAccess:B(R()).default([]),stats:gc,freePoints:_s().int().min(0).default(0),maxTotal:_s().int().min(0).optional()}),xc=Ls([`origin`,`profession`,`past`]),Sc=Os({count:_s().int().min(1),group:Ls(dc)}),Cc=hc.extend({type:xc,grants:B(vc).default([]),bonusPoints:B(Sc).default([]),coreBonus:Fs(Ls([`magic`]),_s().int().min(1)).default({}),choices:B(yc).default([]),backgroundTraits:B(pc).default([]),features:B(_c).default([])}),wc=Ls([`knowledge`,`skill`,`contact`,`starter`,`ability`,`condition`,`membership`,`circumstance`,`other`]),Tc=Os(Object.fromEntries([...uc.options,...Object.keys(V)].map(e=>[e,_s().int().min(0).optional()]))).strict(),Ec=hc.extend({category:wc,types:B(R()).default([]),ranked:xs().default(!1),rankStats:B(uc).default([]),minStats:Tc.default({}),prerequisites:B(pc).default([]),prerequisiteTags:B(R()).default([]),background:xs().default(!1),starterOnly:xs().default(!1),mastery:xs().default(!1),temporary:R().optional(),conveyed:xs().default(!1),rpRequirement:R().optional(),effect:R().min(1),language:R().optional(),choices:B(yc).default([]),resources:fc.default({}),coreAccess:B(Ls([`magic`])).default([]),list:R().optional(),opensLists:B(R()).default([]),grants:B(vc).default([])}),Dc=[`weapon`,`armor`,`gear`,`consumable`,`currency`,`other`],Oc=Ls([`weapon`,`wearable`,`equipment`,`structure`,`vehicle`,`animal`,`misc`]),kc=hc.extend({type:Oc,category:Ls(Dc),damage:R().optional(),resistances:R().optional(),uses:R().optional(),slot:R().optional(),value:_s().int().min(0).optional(),currency:R().optional(),notes:R().optional()}),Ac=Os({group:Ls(Object.keys(V)),points:Fs(uc,_s().int().min(0))}),jc=Ls([`universal`,`background`]),Mc=Os({trait:pc,rank:_s().int().min(1).default(1),pick:jc}),Nc=Os({package:pc.optional(),trait:pc.optional(),from:R().min(1),traits:B(R().trim().min(1))}).refine(e=>e.package===void 0!=(e.trait===void 0),`an answer names either a package or a Trait`),Pc=Os({id:R().optional(),item:pc.optional(),name:R().trim().min(1),qty:_s().int().min(0).default(1),category:Ls(Dc).default(`gear`),equipped:xs().default(!1),notes:R().optional()}),Fc=Os({trait:R().trim().min(1),rank:_s().int().min(1).default(1),note:R().optional()}),Ic=Os({name:R().optional(),age:_s().int().min(0).optional(),gender:Ls([`male`,`female`,`indeterminate`,`none`,`fluid`,`custom`]).optional(),customGender:R().optional(),height:R().optional(),weight:R().optional(),portrait:R().optional(),description:R().optional(),kind:pc,origin:pc,profession:pc,past:pc,startPoints:Fs(uc,_s().int().min(0)).default({}),level:_s().int().min(1).default(1),levels:B(Ac),traits:B(Mc).default([]),choices:B(Nc).default([]),items:B(Pc).default([]),conditions:B(Fc).default([])}),Lc={startingLevel:3},Rc=uc.options,zc=[`origin`,`profession`,`past`],Bc={language:e=>e.types.includes(`language`),"dreftian-language":e=>e.types.includes(`language`)&&e.region===`dreft`,"spoken-language":e=>e.types.includes(`language`)&&!e.tags.includes(`writing`)},Vc=`spoken-and-written-language`;function Hc(e,t){if(e.language)return t.traits.find(t=>t.language===e.language&&t.types.includes(`language`)&&t.tags.includes(`writing`))}var Uc={contact:`Contact`,place:`Place`},Wc=e=>Object.hasOwn(Uc,e);function Gc(e,t){if(e===`spoken-and-written-language`)return t.traits.filter(e=>Bc[`spoken-language`](e)&&Hc(e,t));let n=Bc[e];return n?t.traits.filter(n):[]}var Kc=(e,t)=>e[t.by]===t.id&&e.from===t.from;function qc(e,t,n=1){let r=[];for(let i of t.choices){let a=r.find(e=>e.from===i.from);a?(a.count+=i.choose*(i.perRank===!1?1:n),i.note&&a.notes.push(i.note)):r.push({by:e,id:t.id,name:t.name,from:i.from,count:i.choose*(i.perRank===!1?1:n),notes:i.note?[i.note]:[]})}return r}function Jc(e,t){let n=[];for(let e of t)for(let t of e.bonusPoints){let r=n.find(e=>e.group===t.group);r?(r.count+=t.count,r.from.push(e.name)):n.push({group:t.group,count:t.count,from:[e.name]})}for(let t of n){let n=V[t.group].reduce((t,n)=>t+Math.max(0,(e?.stats[n]?.max??20)-(e?.stats[n]?.bonus??0)),0);t.count=Math.min(t.count,n)}return{any:e?.freePoints??0,groups:n.filter(e=>e.count>0)}}function Yc(e,t){let n=new Set,r=e=>{if(!n.has(e)){n.add(e);for(let n of t.traits.find(t=>t.id===e)?.grants??[])r(n.trait)}};for(let t of e)r(t);return n}function Xc(e,t){let n=new Set;for(let r of Yc(e,t))for(let e of t.traits.find(e=>e.id===r)?.opensLists??[])n.add(e);return n}function Zc(e,t){let n=new Set(dc);for(let r of Yc(e,t))for(let e of t.traits.find(e=>e.id===r)?.coreAccess??[])n.add(e);return[...n]}var Qc=e=>`${e.name} (${e.id})`,$c=e=>/^[aeiou]/.test(e)?`an ${e}`:`a ${e}`;function el(e,t,n=Lc){let r=[],i=[],a=(e,t,n)=>r.push({code:e,message:t,path:n}),o=(e,t,n)=>i.push({code:e,message:t,path:n}),s=Ic.safeParse(e);if(!s.success){for(let e of s.error.issues)a(`schema`,`${e.path.join(`.`)||`build`}: ${e.message}`,e.path.join(`.`)||void 0);return{ok:!1,errors:r,warnings:i}}let c=s.data,l=new Map(t.traits.map(e=>[e.id,e])),u=t.kinds.find(e=>e.id===c.kind);u||a(`kind`,`Kind "${c.kind}" doesn't exist`,`kind`);let d=u?.stats,f=[];for(let e of zc){let n=t.packages.find(t=>t.id===c[e]);n?n.type===e?f.push(n):a(`package`,`${n.name} is ${$c(n.type)}, not ${$c(e)}`,e):a(`package`,`${e} "${c[e]}" doesn't exist`,e)}c.level!==n.startingLevel&&a(`level`,`This campaign starts characters at level ${n.startingLevel}, but the build is level ${c.level}`,`level`),c.levels.length!==c.level&&a(`level`,`A level ${c.level} character needs ${c.level} level allocations, but the build has ${c.levels.length}`,`levels`);let p=Object.fromEntries(Rc.map(e=>[e,d?.[e]?.bonus??0]));for(let[e,t=0]of Object.entries(c.startPoints))p[e]+=t;let m=Jc(u,f),h=e=>V[e].reduce((e,t)=>e+(c.startPoints[t]??0),0),g=Object.values(c.startPoints).reduce((e,t)=>e+(t??0),0),_=0;for(let e of m.groups){let t=h(e.group);if(_+=Math.min(t,e.count),t<e.count){let n=e.count-t;a(`allocation`,`Place ${n} ${e.group.charAt(0).toUpperCase()+e.group.slice(1)} bonus ${n===1?`point`:`points`} from ${e.from.join(` and `)}`,`startPoints`)}}let v=m.any,y=g-_;u&&y!==v&&(v||y>0)&&a(`allocation`,v?y<v?y===0?`Place ${u.name}'s ${v} free bonus points`:`Place ${v-y} more of ${u.name}'s ${v} free bonus points`:`${u.name} gives ${v} free bonus points, but the build places ${y}`:m.groups.length?`The build places ${y} more bonus ${y===1?`point`:`points`} than its packages give`:`${u.name} has no free bonus points, but the build places ${g}`,`startPoints`);let b=Object.fromEntries(Object.keys(V).map(e=>[e,0]));if(c.levels.forEach((e,t)=>{let n=`levels[${t}].points`;b[e.group]++;let r=V[e.group],i=r.length?3:0,o=0;for(let[i,s=0]of Object.entries(e.points)){if(!r.includes(i)){let o=r.length?` (${r.join(`, `)})`:`; ${e.group} has no focus Stats`;a(`allocation`,`Level ${t+1} puts points in ${i}, which isn't a ${e.group} Stat${o}`,n)}p[i]+=s,o+=s}o!==i&&i&&a(`allocation`,`Level ${t+1} spends ${o} focus points; each Level gives exactly 3`,n)}),d)for(let e of Rc){let t=d[e]?.max??20;p[e]>20?a(`stat-cap`,`${e} is ${p[e]}; nothing can exceed 20`,`levels`):p[e]>t&&a(`stat-max`,`${e} is ${p[e]}, above the ${u.name} max of ${t}`,`levels`)}let x={universal:{available:Rc.reduce((e,t)=>e+Math.ceil(p[t]/2),0),spent:0,banked:0},background:{available:Rc.reduce((e,t)=>e+Math.floor(p[t]/2),0),spent:0,banked:0}},S=new Map,C=(e,t,n)=>{let r=S.get(e);if(r)r.rank=Math.max(r.rank,t),r.sources.push(n);else{S.set(e,{trait:e,rank:t,sources:[n]});for(let t of l.get(e)?.grants??[])C(t.trait,t.rank??1,`trait ${e}`)}};for(let e of u?.grants??[])C(e.trait,e.rank??1,`kind ${u.id}`);for(let e of f)for(let t of e.grants)C(t.trait,t.rank??1,`${e.type} ${e.id}`);let w=new Set,T=[],ee=(e,n,i)=>{T.push(e);let{name:s,from:u,count:d}=e,f=Uc[u],p=`${u.replace(/-/g,` `)}${d>1?`s`:``}`,m=c.choices.findIndex(t=>!w.has(c.choices.indexOf(t))&&Kc(t,e)),h=m<0?0:c.choices[m].traits.length;if(f&&h<d){let e=d-h;o(`choice`,`${s} gives ${d} ${f}${d>1?`s`:``}: record ${e>1?`${e} more`:h?`one more`:u===`contact`?`who`:`which`} on the Choices step`,m<0?`choices`:`choices[${m}]`)}if(m<0){f||r.push({code:`choice`,message:`${s} gives a choice of ${d} ${p}: pick ${d>1?`them`:`it`} on the Choices step`,path:`choices`,pool:u});return}w.add(m);let g=c.choices[m],_=`choices[${m}]`;if((f?h>d:h!==d)&&a(`choice`,`${s} gives a choice of ${d} ${p}, but the build picks ${h}`,_),new Set(g.traits).size!==g.traits.length&&a(`choice`,`${s}'s "${u}" answer lists the same ${f??`Trait`} twice`,_),Wc(u))return;let v=Gc(u,t);if(v.length===0)o(`choice-pool`,`Can't check ${s}'s "${u}" answer (${g.traits.join(`, `)}): no Traits are defined for that pool yet`,_);else for(let e of g.traits){let t=l.get(e);t?v.includes(t)?i&&S.has(e)&&a(`duplicate-trait`,`${Qc(t)} is already held (from ${S.get(e).sources.join(`, `)}), so ${s} can't give it again`,_):a(`choice`,`${Qc(t)} isn't in the "${u}" pool for ${s}`,_):a(`unknown-trait`,`Trait "${e}" doesn't exist`,_)}for(let e of g.traits)C(e,1,`${n} choice`);if(u===`spoken-and-written-language`)for(let e of g.traits){let r=l.has(e)?Hc(l.get(e),t):void 0;r&&(i&&S.has(r.id)&&a(`duplicate-trait`,`${Qc(r)} is already held (from ${S.get(r.id).sources.join(`, `)}), so ${s} can't give it again`,_),C(r.id,1,`${n} choice`))}};for(let e of f)for(let t of qc(`package`,e))ee(t,`${e.type} ${e.id}`,!1);let E=new Set(u?.traitAccess??[]),te=Xc(S.keys(),t),ne=new Set(f.flatMap(e=>e.backgroundTraits));for(let e of t.traits)e.conveyed||e.list&&!te.has(e.list)||(e.tags.some(e=>E.has(e))||e.list&&e.background)&&ne.add(e.id);let re=new Map;c.traits.forEach((e,t)=>{let n=l.get(e.trait),r=`traits[${t}]`;n?(x[e.pick].spent++,n.conveyed&&a(`conveyed`,`${Qc(n)} is Conveyed: it comes from a package or from play, not from a pick`,r),e.pick===`universal`&&n.background&&a(`pick-type`,`${Qc(n)} is a Background Trait and needs a Background pick`,r),e.pick===`background`&&!ne.has(n.id)&&a(`pick-type`,`${Qc(n)} isn't on this character's Background Trait list, so it needs a Universal pick`,r),re.has(n.id)||re.set(n.id,[]),re.get(n.id).push({rank:e.rank,index:t})):a(`unknown-trait`,`Trait "${e.trait}" doesn't exist`,r)});for(let[e,t]of re){let n=l.get(e),r=S.get(e),i=r?.rank??0,o=r?` (from ${r.sources.join(`, `)})`:``;if(!n.ranked){for(let e of t)e.rank>1&&a(`rank`,`${Qc(n)} isn't ranked, so it can't go above rank 1`,`traits[${e.index}]`);i>0?a(`duplicate-trait`,`${Qc(n)} is already held${o} and isn't ranked, so it can't be taken again`,`traits[${t[0].index}]`):t.length>1&&a(`duplicate-trait`,`${Qc(n)} isn't ranked, so it can't be taken twice`,`traits[${t[1].index}]`),C(e,1,`${c.traits[t[0].index].pick} pick`);continue}let s=i+1;for(let r of[...t].sort((e,t)=>e.rank-t.rank)){let t=`traits[${r.index}]`;r.rank<s?a(`rank`,`${Qc(n)} is already at rank ${s-1}${r.rank<=i?o:``}, so a pick for rank ${r.rank} does nothing`,t):(r.rank>s&&a(`rank`,`${Qc(n)} rank ${r.rank} needs rank ${s} first`,t),s=r.rank+1,C(e,r.rank,`${c.traits[r.index].pick} pick`))}let u=Math.max(...t.map(e=>e.rank));if(u>1){let e=n.rankStats.filter(e=>p[e]<3*u);if(e.length){let t=e.map(e=>`${e} ${p[e]}`).join(`, `);a(`rank-stats`,`${Qc(n)} rank ${u} needs ${n.rankStats.join(`, `)} of at least ${3*u} (has ${t})`,`traits`)}}}for(let e of[...S.values()]){let t=l.get(e.trait);if(t?.choices.length)for(let n of qc(`trait`,t,t.ranked?e.rank:1))ee(n,`trait ${t.id}`,!0)}c.choices.forEach((e,t)=>{if(w.has(t))return;let n=`choices[${t}]`;if(e.package!==void 0){let t=f.some(t=>t.id===e.package);a(`choice`,t?`${e.package} has no "${e.from}" choice, or it's answered twice`:`The build answers a choice for "${e.package}", which isn't one of its packages`,n)}else{let t=l.get(e.trait)?.name??e.trait;a(`choice`,S.has(e.trait)?`${t} has no "${e.from}" choice, or it's answered twice`:`The build answers a choice for ${t}, which it doesn't hold`,n)}}),c.traits.forEach((e,t)=>{let n=l.get(e.trait);for(let e of n?.prerequisites??[])if(!S.has(e)){let r=l.get(e)?.name??e;a(`prerequisite`,`${Qc(n)} needs ${r} (${e}) first`,`traits[${t}]`)}for(let e of n?.prerequisiteTags??[])[...S.keys()].some(t=>t!==n.id&&l.get(t)?.tags.includes(e))||a(`prerequisite`,`${Qc(n)} needs a Trait tagged ${e} first`,`traits[${t}]`)});let ie=new Set(Zc(S.keys(),t));for(let e of Object.keys(b)){if(!b[e]||ie.has(e))continue;let n=t.traits.filter(t=>t.coreAccess.includes(e)).map(e=>e.name),r=e.charAt(0).toUpperCase()+e.slice(1);a(`core-access`,`${b[e]} ${b[e]===1?`Level goes`:`Levels go`} to ${r}, which this character can't Level${n.length?` without ${n.join(` or `)}`:``}`,`levels`)}let ae=Object.fromEntries(Object.keys(V).map(e=>[e,0]));for(let e of f)for(let[t,n=0]of Object.entries(e.coreBonus))ie.has(t)&&(ae[t]+=n);for(let e of Object.keys(b))b[e]+=ae[e];let oe=Xc(S.keys(),t);for(let e of re.keys()){let n=l.get(e);if(!n.list||oe.has(n.list))continue;let r=t.traits.filter(e=>e.opensLists.includes(n.list)).map(e=>e.name),i=n.list.charAt(0).toUpperCase()+n.list.slice(1);a(`trait-list`,`${Qc(n)} is on the ${i} list, which this character can't take from${r.length?` without ${r.join(` or `)}`:``}`,`traits[${re.get(e)[0].index}]`)}for(let e of re.keys()){let t=l.get(e),n=Object.entries(t.minStats).filter(([e,t])=>{let n=e in b?b[e]:p[e];return t!==void 0&&n<t});if(n.length){let r=Object.entries(t.minStats).map(([e,t])=>`${e} ${t}`).join(`, `),i=n.map(([e])=>`${e} ${e in b?b[e]:p[e]}`).join(`, `);a(`min-stats`,`${Qc(t)} needs ${r} (has ${i})`,`traits[${re.get(e)[0].index}]`)}}for(let e of[`universal`,`background`]){let t=x[e];t.banked=Math.max(0,t.available-t.spent),t.spent>t.available&&a(`picks-overspent`,`The build spends ${t.spent} ${e===`universal`?`Universal`:`Background`} picks but its Stats give only ${t.available}`,`traits`)}let se=e=>V[e].reduce((e,t)=>e+p[t],0),D={hp:10+se(`physical`),vp:se(`social`),sp:se(`mental`),mp:3*b.magic},ce=[`hp`,`vp`,`sp`,`mp`];for(let e of ce)D[e]+=u?.resources[e]??0;for(let e of S.values()){let t=l.get(e.trait)?.resources??{};for(let n of ce)D[n]+=(t[n]??0)*e.rank}return{ok:r.length===0,errors:r,warnings:i,summary:{stats:p,coreStats:b,coreBonus:ae,coreAccess:[...ie],resources:D,picks:x,traits:[...S.values()],backgroundList:[...ne].sort(),traitLists:[...oe],questions:T}}}var tl={Physical:[`Blunt`,`Slashing`,`Piercing`],Elemental:[`Heat`,`Cold`,`Electrical`,`EMP`],Supernatural:[`Metaphysical`,`Death`,`Psychic`],Other:[`Radiation`,`Acidic/Corrosive`]},nl=Object.values(tl).flat(),rl=e=>nl.find(t=>t.toLowerCase()===e.trim().toLowerCase());function il(e){let t=e.split(/\s*\/\s*(?=\d)/).map(e=>e.split(`,`).map(e=>{let t=e.trim().match(/^(?:(\d+)\s+)?(.+)$/),n=t&&rl(t[2]);return n?{type:n,...t[1]?{amount:Number(t[1])}:{}}:void 0}));return t.every(e=>e.every(Boolean))?t:void 0}function al(e){let t=il(e);return t?t.map(e=>{let t=e.map(e=>e.amount===void 0?e.type:`${e.amount} ${e.type}`);return t.length>1?`${t.slice(0,-1).join(`, `)} and ${t.at(-1)}`:t[0]}).join(` or `):e}var ol=()=>Math.random().toString(36).slice(2,10);function sl(e,t){let n=e.find(e=>e.name.toLowerCase()===t.name.toLowerCase());return n?e.map(e=>e===n?{...e,qty:e.qty+t.qty}:e):[...e,{...t,id:ol()}]}function cl(e,t,n){let r=e.find(e=>e.name.toLowerCase()===t.toLowerCase());return r?n===void 0||n>=r.qty?e.filter(e=>e!==r):e.map(e=>e===r?{...e,qty:e.qty-n}:e):e}function ll(e){return Array.isArray(e)?e.flatMap(e=>{if(typeof e!=`object`||!e)return[];let t=e;if(typeof t.name!=`string`||!t.name.trim())return[];let n=Dc.includes(t.category)?t.category:`gear`;return[{id:typeof t.id==`string`&&t.id?t.id:ol(),...typeof t.item==`string`&&t.item?{item:t.item}:{},name:t.name,qty:typeof t.qty==`number`&&t.qty>=0?Math.round(t.qty):1,category:n,equipped:t.equipped===!0,...typeof t.notes==`string`&&t.notes?{notes:t.notes}:{}}]}):[]}function ul(e){let t=[e.damage?`${al(e.damage)} damage`:``,e.resistances?`resists ${e.resistances}`:``,e.uses??``,e.slot?`${e.slot} slot`:``,e.value!==void 0&&e.currency?`${e.value.toLocaleString(`en-US`)} ${e.currency}`:``].filter(Boolean).join(`; `);return t.charAt(0).toUpperCase()+t.slice(1)}function dl(e,t){let n=t.trim().toLowerCase();return e.find(e=>e.name.toLowerCase()===n)}var fl=[`healthy`,`injured`,`severely-injured`,`incapacitated`,`dead`];function pl(e,t){return e<=0?[`dead`]:e>=t?[`healthy`]:[`injured`,...e<t/2?[`severely-injured`]:[],...e<t/4?[`incapacitated`]:[]]}function ml(e){return e.traits.filter(e=>e.category===`condition`&&e.temporary&&!fl.includes(e.id)).filter(e=>!/\bobject\b/i.test(e.temporary??``)||/\bcharacter\b/i.test(e.temporary??``)).sort((e,t)=>e.name.localeCompare(t.name))}function hl(e,t,n,r=1,i){let a=t.traits.find(e=>e.id===n),o=e.find(e=>e.trait===n);return o?a?.ranked?e.map(e=>e===o?{...e,rank:e.rank+r,note:i??e.note}:e):e:[...e,{trait:n,rank:a?.ranked?r:1,...i?{note:i}:{}}]}function gl(e,t){return e.filter(e=>e.trait!==t)}function _l(e){return Array.isArray(e)?e.flatMap(e=>{if(!e||typeof e!=`object`||typeof e.trait!=`string`)return[];let{trait:t,rank:n,note:r}=e;return[{trait:t,rank:typeof n==`number`&&n>=1?Math.floor(n):1,...typeof r==`string`&&r?{note:r}:{}}]}):[]}var vl=[`unlisted`,`male`,`female`,`indeterminate`,`none`,`fluid`,`custom`],yl=[`character`,`background`,`stats`,`traits`,`choices`,`sheet`],bl=Object.keys(V),xl=()=>({physical:0,social:0,mental:0,magic:0}),Sl={draft:{level:3,core:xl(),points:{},traits:[],choices:[]},campaign:{startingLevel:3},step:`character`};function Cl(e,t){let n=[];for(let r of bl){let i=V[r].map(e=>[e,t[e]??0]);for(let t=0;t<e[r];t++){let a={group:r,points:{}},o=t===e[r]-1?1/0:3;for(let e of i){let t=Math.min(o,e[1]);t>0&&(a.points[e[0]]=t,e[1]-=t,o-=t)}n.push(a)}}return n}function wl(e){let t=xl(),n={};for(let r of e)if(r&&r.group in t){t[r.group]++;for(let[e,t]of Object.entries(r.points??{}))t&&(n[e]=(n[e]??0)+t)}return{core:t,points:n}}function Tl(e){return{core:{...xl(),...e.core},points:e.points&&typeof e.points==`object`?e.points:{}}}function El(e){let{core:t,points:n,...r}=e,i={};for(let[e,a]of Object.entries({...r,levels:Cl(t,n)}))a!==void 0&&a!==``&&(e!==`items`&&e!==`conditions`||!Array.isArray(a)||a.length)&&(i[e]=a);return i}var Dl=e=>Array.isArray(e)?e:[],Ol=e=>typeof e==`string`&&e!==``?e:void 0,kl=e=>typeof e==`string`&&e.length<=15e5&&/^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/]+=*$/.test(e)?e:void 0,Al=e=>typeof e==`number`&&Number.isInteger(e)&&e>=0&&e<=9999?e:void 0,jl=9999,Ml=e=>typeof e==`string`&&e.trim()!==``?e.trim().slice(0,20):void 0,Nl=e=>vl.includes(e)&&e!==`unlisted`?e:void 0;function Pl(e){if(e.gender)return e.gender===`custom`?e.customGender?.trim()||void 0:e.gender[0].toUpperCase()+e.gender.slice(1)}function Fl(e){if(typeof e!=`object`||!e||Array.isArray(e))throw Error(`A build is a JSON object`);let t=e,n=Dl(t.levels),r=typeof t.level==`number`?t.level:Math.max(1,n.length),i=t.kind===`tatot`&&(t.form===`orcoid`||t.form===`goblinoid`)?`tatot-${t.form}`:Ol(t.kind);return{name:Ol(t.name),age:Al(t.age),gender:Nl(t.gender),customGender:t.gender===`custom`?Ol(t.customGender):void 0,height:Ml(t.height),weight:Ml(t.weight),portrait:kl(t.portrait),description:Ol(t.description),kind:i,origin:Ol(t.origin),profession:Ol(t.profession),past:Ol(t.past),...t.startPoints&&typeof t.startPoints==`object`&&Object.keys(t.startPoints).length?{startPoints:t.startPoints}:{},level:r,...t.core&&typeof t.core==`object`?Tl(t):wl(n),traits:Dl(t.traits).map(e=>({...e,rank:e.rank??1})),choices:Dl(t.choices),...Array.isArray(t.items)&&t.items.length?{items:ll(t.items)}:{},...Array.isArray(t.conditions)&&t.conditions.length?{conditions:_l(t.conditions)}:{}}}function Il(e,t){let n={...e,level:t};for(let e of[...bl].reverse())for(;n.core[e]>0&&bl.reduce((e,t)=>e+n.core[t],0)>t;)n=Ll(n,e,n.core[e]-1);return n}function Ll(e,t,n){let r={...e.points},i=V[t].reduce((e,t)=>e+(r[t]??0),0)-n*3;for(let e of[...V[t]].reverse()){if(i<=0)break;let t=Math.min(i,r[e]??0);r[e]=(r[e]??0)-t,r[e]||delete r[e],i-=t}return{...e,core:{...e.core,[t]:n},points:r}}function Rl(e,t,n,r){return{...e,traits:[...e.traits,{trait:t,rank:n,pick:r}]}}var zl=`sf-character-builder:v1`;function Bl(){try{let e=localStorage.getItem(zl);if(!e)return Sl;let t=JSON.parse(e),n=Fl(t.draft),r=t.campaign?.startingLevel??n.level,i=t.step===`levels`?`stats`:t.step,a=yl.includes(i)?i:`character`,o=t.ai&&Array.isArray(t.ai.reasons)?t.ai:void 0;return{draft:n,campaign:{startingLevel:r},step:a,ai:o}}catch{return Sl}}function Vl(e){try{localStorage.setItem(zl,JSON.stringify(e))}catch{}}function Hl(){try{localStorage.removeItem(zl)}catch{}}var Ul=e=>e.toLowerCase().normalize(`NFKD`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),Wl=/^levels\[(\d+)\]/;function Gl(e,t,n){let r=Kl(e,t,n);return Object.keys(V).filter(t=>r.includes(t)||e.core[t]>0)}function Kl(e,t,n){return n?.summary?n.summary.coreAccess:Zc([...(t.kinds.find(t=>t.id===e.kind)?.grants??[]).map(e=>e.trait),...t.packages.filter(t=>[e.origin,e.profession,e.past].includes(t.id)).flatMap(e=>e.grants.map(e=>e.trait)),...e.traits.map(e=>e.trait)],t)}function ql(e,t,n){let r=el(El(e),t,n);return{...r,errors:Jl(r.errors,e)}}function Jl(e,t){let n=Cl(t.core,t.points),r=new Set,i=[];for(let a of e){if(a.code===`level`&&a.path===`levels`){let e=Object.values(t.core).reduce((e,t)=>e+t,0),n=t.level-e,r=Math.abs(n);i.push({...a,message:n>0?`Place ${r} more core ${r===1?`point`:`points`}`:`Take back ${r} core ${r===1?`point`:`points`}; a level ${t.level} character has ${t.level}`});continue}let e=a.code===`allocation`?Wl.exec(a.path??``):null,o=e?n[Number(e[1])]?.group:void 0;if(!o){i.push(a);continue}if(r.has(o))continue;r.add(o);let s=t.core[o]*3,c=V[o].reduce((e,n)=>e+(t.points[n]??0),0),l=Math.abs(s-c),u=o.charAt(0).toUpperCase()+o.slice(1);i.push({...a,path:`levels`,message:c<s?`Place ${l} more ${u} ${l===1?`point`:`points`}`:`${u} has ${l} more ${l===1?`point`:`points`} than its core Stat unlocks`})}return i}function Yl(e,t,n,r){let i=ql(e,t,n);if(!i.summary)return;let a=new Set(i.errors.map(e=>e.message)),o=new Map(i.summary.traits.map(e=>[e.trait,e.rank])),s=[],c=typeof r==`string`?void 0:r.list;if(c&&!i.summary.traitLists.includes(c))return[];for(let i of t.traits){if(i.list!==c)continue;let l=typeof r==`string`?r:i.background?`background`:`universal`,u=i.ranked?(o.get(i.id)??0)+1:1,d=ql(Rl(e,i.id,u,l),t,n),f=`${i.name} gives a choice of `,p=d.errors.filter(e=>!a.has(e.message)&&!(e.code===`choice`&&e.message.startsWith(f)));p.some(e=>e.code===`pick-type`||e.code===`conveyed`)||s.push({trait:i,rank:u,pick:l,reasons:p.map(e=>e.message)})}return s}function Xl(e){switch(e.code){case`kind`:return`character`;case`package`:return`background`;case`level`:return e.path===`level`?`character`:`stats`;case`allocation`:case`core-access`:case`stat-max`:case`stat-cap`:return`stats`;case`choice`:case`choice-pool`:return`choices`;case`schema`:{let t=e.path?.split(`.`)[0];return t===`name`||t===`level`||t===`kind`?`character`:t===`origin`||t===`profession`||t===`past`?`background`:t===`levels`||t===`startPoints`?`stats`:t===`choices`?`choices`:`traits`}default:return e.path===`choices`||e.path?.startsWith(`choices[`)?`choices`:`traits`}}var Zl={kind:`Choose a Kind`,origin:`Choose an Origin`,profession:`Choose a Profession`,past:`Choose a Past`};function Ql(e,t){if(e.code===`schema`&&e.path&&e.path in Zl&&!t[e.path])return Zl[e.path];if(e.pool){let t=e.pool.split(`-`).pop();return`${t[0].toUpperCase()}${t.slice(1)} choice needed`}return e.message}var $l=`id: anti-radiation-pills
name: "Anti-Radiation Pills"
status: draft
plane: earth
summary: "Pills that limit the harm of radiation exposure."
tags: [medical, radiation]
type: misc
category: consumable
uses: "uses 4: when taken"
value: 30
currency: "ERC"
`,eu=`id: arrows
name: "Arrows"
status: draft
plane: any
summary: "A quiver of arrows."
tags: [ammunition, archery]
type: misc
category: consumable
uses: "uses 20: when fired, some recoverable"
value: 40
currency: "ERC"
`,tu=`id: backpack
name: "Backpack"
status: draft
plane: any
summary: "A sturdy pack for carrying gear."
tags: [travel, storage]
type: equipment
category: gear
slot: "Back"
value: 80
currency: "ERC"
`,nu=`id: ballistic-shield
name: "Ballistic Shield"
status: draft
plane: earth
summary: "A handheld shield of layered ballistic panels with a view port."
tags: [shield, modern]
type: equipment
category: armor
resistances: "4 Blunt, 3 Slashing, 6 Piercing (when raised)"
slot: "Off Hand"
value: 1200
currency: "ERC"
`,ru=`id: ballistic-vest
name: "Ballistic Vest"
status: draft
plane: earth
summary: "A modern vest with armor plates, made to stop bullets."
tags: [armor, modern]
type: wearable
category: armor
resistances: "2 Blunt, 1 Slashing, 5 Piercing, 1 Cold"
slot: "Body Armor"
value: 800
currency: "ERC"
`,iu=`id: bedroll
name: "Bedroll"
status: draft
plane: any
summary: "A rolled blanket and pad for sleeping rough."
tags: [travel, camping]
type: equipment
category: gear
value: 60
currency: "ERC"
`,au=`id: binoculars
name: "Binoculars"
status: draft
plane: earth
summary: "Electronic binoculars with a rangefinder."
tags: [optics, scouting]
type: equipment
category: gear
value: 500
currency: "ERC"
`,ou=`id: brigandine
name: "Brigandine"
status: draft
plane: any
summary: "A cloth or leather coat lined with riveted steel plates."
tags: [armor, medium]
type: wearable
category: armor
resistances: "2 Blunt, 3 Slashing, 2 Piercing"
slot: "Body Armor"
value: 900
currency: "ERC"
`,su=`id: buckler
name: "Buckler"
status: draft
plane: any
summary: "A small round fist shield, quick to raise."
tags: [shield]
type: equipment
category: armor
resistances: "2 Blunt, 2 Slashing, 1 Piercing (when raised)"
slot: "Off Hand"
value: 60
currency: "ERC"
`,H=`id: cargo-truck
name: "Cargo Truck"
status: draft
plane: earth
summary: "A flying cargo truck for hauling between stations, ships and planetary surfaces."
tags: [vehicle, cargo, space]
type: vehicle
category: other
value: 900000
currency: "ERC"
`,cu=`id: chainmail
name: "Chainmail"
status: draft
plane: any
summary: "A shirt of interlocking iron rings."
tags: [armor, medium]
type: wearable
category: armor
resistances: "1 Blunt, 3 Slashing, 1 Piercing"
slot: "Body Armor"
value: 1200
currency: "ERC"
`,lu=`id: club
name: "Club"
status: draft
plane: any
summary: "A stout length of wood, or anything else heavy enough to swing."
tags: [melee, blunt, improvised]
type: weapon
category: weapon
damage: "3 Blunt"
value: 20
currency: "ERC"
`,uu=`id: cold-weather-gear
name: "Cold Weather Gear"
status: draft
plane: any
summary: "Furs, layers or an insulated parka for freezing climates."
tags: [survival, cold]
type: wearable
category: armor
resistances: "3 Cold"
slot: "Outerwear"
value: 300
currency: "ERC"
`,du=`id: combat-helmet
name: "Combat Helmet"
status: draft
plane: earth
summary: "A modern helmet with a radio mount. Protects the head only."
tags: [armor, helmet, military]
type: wearable
category: armor
resistances: "4 Blunt, 2 Slashing, 5 Piercing (head)"
slot: "Headwear"
value: 500
currency: "ERC"
`,fu=`id: combat-knife
name: "Combat Knife"
status: draft
plane: earth
summary: "A sturdy military knife for fighting and field work."
tags: [melee, blade, military, concealable]
type: weapon
category: weapon
damage: "3 Slashing / 4 Piercing"
value: 120
currency: "ERC"
`,pu=`id: combat-voidsuit
name: "Combat Voidsuit"
status: draft
plane: earth
summary: "An armored voidsuit for boarding actions and fighting in space."
tags: [space, armor, modern]
type: wearable
category: armor
resistances: "3 Blunt, 2 Slashing, 4 Piercing, 4 Cold, 2 Radiation"
uses: "uses 1: per air tank"
slot: "Body Armor"
value: 120000
currency: "ERC"
`,mu=`id: comm-unit
name: "Comm Unit"
status: draft
plane: earth
summary: "A personal communicator and computer. Doesn’t reach across a switch gate without a relay."
tags: [electronic, communication]
type: equipment
category: gear
value: 800
currency: "ERC"
`,hu=`id: compass
name: "Compass"
status: draft
plane: any
summary: "A magnetic compass. Its reliability on a new plane is not guaranteed."
tags: [navigation]
type: equipment
category: gear
value: 30
currency: "ERC"
`,gu=`id: cooking-kit
name: "Cooking Kit"
status: draft
plane: any
summary: "A pot, pan, utensils and spices."
tags: [food, camping]
type: equipment
category: gear
value: 60
currency: "ERC"
`,_u=`id: crossbow-bolts
name: "Crossbow Bolts"
status: draft
plane: any
summary: "A case of crossbow bolts."
tags: [ammunition, archery]
type: misc
category: consumable
uses: "uses 20: when fired, some recoverable"
value: 40
currency: "ERC"
`,vu=`id: crossbow
name: "Crossbow"
status: draft
plane: any
summary: "A bow mounted on a stock, slow to load but easy to aim."
tags: [ranged, archery, two-handed]
type: weapon
category: weapon
damage: "5 Piercing"
value: 500
currency: "ERC"
`,yu=`id: dagger
name: "Dagger"
status: draft
plane: any
summary: "A short double-edged blade, easy to hide and quick in close quarters."
tags: [melee, blade, concealable]
type: weapon
category: weapon
damage: "3 Slashing / 3 Piercing"
value: 60
currency: "ERC"
`,bu=`id: disguise-kit
name: "Disguise Kit"
status: draft
plane: any
summary: "Makeup, wigs, false hair and a few changes of clothes."
tags: [crime, social]
type: equipment
category: gear
value: 150
currency: "ERC"
`,xu=`id: earth-reserve-credits
name: "Earth Reserve Credits (ERC)"
status: draft
plane: earth
summary: "The common currency of most of the systems, held in accounts and chips."
tags: [currency]
type: misc
category: currency
value: 1
currency: "ERC"
`,Su=`id: emp-grenade
name: "EMP Grenade"
status: draft
plane: earth
summary: "A grenade that releases an electromagnetic pulse, harming only machines."
tags: [explosive, thrown, anti-machine]
type: weapon
category: consumable
damage: "7 EMP"
uses: "uses 1: when thrown"
value: 400
currency: "ERC"
`,Cu=`id: engineers-toolkit
name: "Engineer’s Toolkit"
status: draft
plane: earth
summary: "Power tools, meters and spares for fixing machines and ship systems."
tags: [tools, engineering]
type: equipment
category: gear
value: 2000
currency: "ERC"
`,wu=`id: faraday-shroud
name: "Faraday Shroud"
status: draft
plane: earth
summary: "A wire-mesh cloak that shields the machines under it from electromagnetic pulses."
tags: [machine, emp]
type: wearable
category: armor
resistances: "4 EMP, 2 Electrical"
slot: "Outerwear"
value: 2000
currency: "ERC"
`,Tu=`id: field-sample-kit
name: "Field Sample Kit"
status: draft
plane: earth
summary: "Sealed vials, swabs, sample bags and a portable cold box."
tags: [science, exploration]
type: equipment
category: gear
value: 400
currency: "ERC"
`,Eu=`id: fighter
name: "Fighter"
status: draft
plane: earth
summary: "A single-seat combat spacecraft. Occupants: 1."
tags: [vehicle, space, military]
type: vehicle
category: other
value: 30000000
currency: "ERC"
`,Du=`id: fine-clothes
name: "Fine Clothes"
status: draft
plane: any
summary: "Clothing good enough for a noble court or a corporate gala."
tags: [social, clothing]
type: wearable
category: gear
slot: "Clothing"
value: 800
currency: "ERC"
`,Ou=`id: fishing-kit
name: "Fishing Kit"
status: draft
plane: any
summary: "Line, hooks and lures."
tags: [food, survival]
type: equipment
category: gear
value: 40
currency: "ERC"
`,ku=`id: flail
name: "Flail"
status: draft
plane: any
summary: "A spiked iron ball on a chain, swung from a wooden haft."
tags: [melee, blunt]
type: weapon
category: weapon
damage: "6 Blunt"
value: 350
currency: "ERC"
`,Au=`id: flamethrower
name: "Flamethrower"
status: draft
plane: earth
summary: "A backpack fuel tank and nozzle that projects burning fuel."
tags: [ranged, heavy, fire]
type: weapon
category: weapon
damage: "7 Heat"
value: 3000
currency: "ERC"
`,ju=`id: flashlight
name: "Flashlight"
status: draft
plane: earth
summary: "A rechargeable electric torch."
tags: [light, electronic]
type: equipment
category: gear
value: 30
currency: "ERC"
`,Mu=`id: flint-and-steel
name: "Flint and Steel"
status: draft
plane: any
summary: "For striking sparks to start a fire."
tags: [fire, survival]
type: equipment
category: gear
value: 10
currency: "ERC"
`,Nu=`id: frag-grenade
name: "Frag Grenade"
status: draft
plane: earth
summary: "A hand grenade that bursts into a blast of fragments."
tags: [explosive, thrown, military]
type: weapon
category: consumable
damage: "5 Blunt, 5 Piercing"
uses: "uses 1: when thrown"
value: 50
currency: "ERC"
`,Pu=`id: fuel-canister
name: "Fuel Canister"
status: draft
plane: earth
summary: "A refill tank for a flamethrower."
tags: [ammunition, fire]
type: misc
category: consumable
uses: "uses 1: per refill"
value: 150
currency: "ERC"
`,Fu=`id: gambeson
name: "Gambeson"
status: draft
plane: any
summary: "A thick quilted jacket worn alone or under mail."
tags: [armor, light]
type: wearable
category: armor
resistances: "2 Blunt, 1 Slashing, 2 Cold"
slot: "Body Armor"
value: 150
currency: "ERC"
`,Iu=`id: geiger-counter
name: "Geiger Counter"
status: draft
plane: earth
summary: "Detects and measures radiation."
tags: [detector, radiation, science]
type: equipment
category: gear
value: 300
currency: "ERC"
`,Lu=`id: grappling-hook
name: "Grappling Hook"
status: draft
plane: any
summary: "A folding hook for catching ledges and walls."
tags: [climbing, utility]
type: equipment
category: gear
value: 50
currency: "ERC"
`,Ru=`id: greatsword
name: "Greatsword"
status: draft
plane: any
summary: "A heavy two-handed sword built to cleave through armor and ranks."
tags: [melee, blade, sword, two-handed]
type: weapon
category: weapon
damage: "7 Slashing"
value: 1000
currency: "ERC"
`,zu=`id: halberd
name: "Halberd"
status: draft
plane: any
summary: "An axe blade, spike and hook on a long haft."
tags: [melee, polearm, reach, two-handed]
type: weapon
category: weapon
damage: "5 Slashing / 4 Piercing"
value: 500
currency: "ERC"
`,Bu=`id: hand-axe
name: "Hand Axe"
status: draft
plane: any
summary: "A small one-handed axe, as useful for chopping wood as for fighting."
tags: [melee, axe]
type: weapon
category: weapon
damage: "4 Slashing"
value: 80
currency: "ERC"
`,Vu=`id: handcuffs
name: "Handcuffs"
status: draft
plane: earth
summary: "Steel or polymer restraints."
tags: [police, restraint]
type: equipment
category: gear
value: 30
currency: "ERC"
`,Hu=`id: hazmat-suit
name: "Hazmat Suit"
status: draft
plane: earth
summary: "A sealed suit for chemical, biological and radiation hazards."
tags: [hazard, survival]
type: wearable
category: armor
resistances: "2 Heat, 4 Electrical, 4 Radiation, 3 Acidic/Corrosive"
slot: "Body Armor"
value: 400
currency: "ERC"
`,Uu=`id: healers-kit
name: "Healer’s Kit"
status: draft
plane: any
summary: "Bandages, salves, splints and needle and thread."
tags: [medical]
type: equipment
category: gear
uses: "uses 10: per treatment"
value: 80
currency: "ERC"
`,Wu=`id: helicopter
name: "Helicopter"
status: draft
plane: earth
summary: "A light utility helicopter. Occupants: 6."
tags: [vehicle, air]
type: vehicle
category: other
value: 1500000
currency: "ERC"
`,Gu=`id: hide-armor
name: "Hide Armor"
status: draft
plane: isekai
summary: "Cured furs and hides, layered and laced together."
tags: [armor, light]
type: wearable
category: armor
resistances: "1 Blunt, 2 Slashing, 2 Cold"
slot: "Body Armor"
value: 80
currency: "Luras"
`,Ku=`id: imperial-dollars
name: "Imperial Dollars (ID)"
status: draft
plane: earth
region: american-empire
summary: "The currency of the American Empire, also used by the Union of Texas and the Free American States."
tags: [currency]
type: misc
category: currency
notes: "Exchange rate to ERC not set yet."
`,qu=`id: incendiary-grenade
name: "Incendiary Grenade"
status: draft
plane: earth
summary: "A grenade that bursts into burning chemical fire."
tags: [explosive, thrown, fire, military]
type: weapon
category: consumable
damage: "2 Blunt, 6 Heat"
uses: "uses 1: when thrown"
value: 150
currency: "ERC"
`,Ju=`id: insulated-gloves
name: "Insulated Gloves"
status: draft
plane: earth
summary: "Heavy rubber gloves for live wiring."
tags: [tool, electrical]
type: wearable
category: armor
resistances: "2 Cold, 4 Electrical (hands)"
slot: "Gloves"
value: 50
currency: "ERC"
`,Yu=`id: javelin
name: "Javelin"
status: draft
plane: any
summary: "A light spear made for throwing."
tags: [ranged, thrown]
type: weapon
category: weapon
damage: "3 Piercing"
uses: "uses 1: when thrown, until recovered"
value: 50
currency: "ERC"
`,Xu=`id: lantern
name: "Lantern"
status: draft
plane: any
summary: "A shuttered oil lantern."
tags: [light]
type: equipment
category: gear
value: 30
currency: "ERC"
`,Zu=`id: leather-armor
name: "Leather Armor"
status: draft
plane: any
summary: "Hardened leather over the chest and shoulders."
tags: [armor, light]
type: wearable
category: armor
resistances: "2 Blunt, 1 Slashing, 1 Cold"
slot: "Body Armor"
value: 300
currency: "ERC"
`,Qu=`id: leather-jacket
name: "Leather Jacket"
status: draft
plane: any
summary: "A heavy leather jacket. Turns a scrape or a cold wind, not much more."
tags: [clothing, light]
type: wearable
category: armor
resistances: "1 Blunt, 1 Slashing, 1 Cold"
slot: "Outerwear"
value: 200
currency: "ERC"
`,$u=`id: leatherworking-tools
name: "Leatherworking Tools"
status: draft
plane: any
summary: "Knives, awls, punches and waxed thread."
tags: [craft, tools]
type: equipment
category: gear
value: 150
currency: "ERC"
`,ed=`id: lockpicks
name: "Lockpicks"
status: draft
plane: any
summary: "A roll of picks and tension wrenches."
tags: [crime, utility]
type: equipment
category: gear
value: 40
currency: "ERC"
`,td=`id: longbow
name: "Longbow"
status: draft
plane: any
summary: "A tall bow with a heavy draw and a long reach."
tags: [ranged, archery, two-handed]
type: weapon
category: weapon
damage: "4 Piercing"
value: 400
currency: "ERC"
`,nd=`id: longsword
name: "Longsword"
status: draft
plane: any
summary: "A long straight sword wielded in one or two hands."
tags: [melee, blade, sword]
type: weapon
category: weapon
damage: "6 Slashing / 4 Piercing"
value: 600
currency: "ERC"
`,U=`id: luras
name: "Luras"
status: draft
plane: isekai
region: dreft
summary: "The currency of Dreft."
tags: [currency]
type: misc
category: currency
value: 1
currency: "Luras"
`,rd=`id: mace
name: "Mace"
status: draft
plane: any
summary: "A heavy flanged head on a short haft, made to crush through armor."
tags: [melee, blunt]
type: weapon
category: weapon
damage: "5 Blunt"
value: 250
currency: "ERC"
`,W=`id: machine-gun
name: "Machine Gun"
status: draft
plane: earth
summary: "A heavy automatic gun fired from the hip, a bipod or a mount."
tags: [ranged, firearm, military, heavy]
type: weapon
category: weapon
damage: "7 Piercing"
value: 9000
currency: "ERC"
`,G=`id: masonry-tools
name: "Masonry Tools"
status: draft
plane: any
summary: "Chisels, mallets, trowels and a level."
tags: [craft, tools]
type: equipment
category: gear
value: 200
currency: "ERC"
`,K=`id: maul
name: "Maul"
status: draft
plane: any
summary: "A heavy two-handed hammer that crushes armor and bone alike."
tags: [melee, blunt, two-handed]
type: weapon
category: weapon
damage: "7 Blunt"
value: 400
currency: "ERC"
`,id=`id: medkit
name: "Medkit"
status: draft
plane: earth
summary: "A modern trauma kit: dressings, tourniquets, injectors and a diagnostic scanner."
tags: [medical, electronic]
type: equipment
category: gear
uses: "uses 10: per treatment"
value: 250
currency: "ERC"
`,ad=`id: missile-launcher
name: "Missile Launcher"
status: draft
plane: earth
summary: "A shoulder-fired tube for rockets and guided missiles."
tags: [ranged, heavy, explosive, military]
type: weapon
category: weapon
damage: "5 Blunt, 5 Heat"
value: 25000
currency: "ERC"
`,od=`id: musical-instrument
name: "Musical Instrument"
status: draft
plane: any
summary: "A lute, fiddle, drum, flute or whatever the player chooses."
tags: [performance, music]
type: equipment
category: gear
value: 400
currency: "ERC"
`,sd=`id: musket
name: "Musket"
status: draft
plane: any
summary: "A muzzle-loading smoothbore gun, loud, slow and devastating."
tags: [ranged, firearm, two-handed]
type: weapon
category: weapon
damage: "7 Piercing"
value: 1500
currency: "ERC"
`,cd=`id: night-vision-goggles
name: "Night Vision Goggles"
status: draft
plane: earth
summary: "Goggles that let the wearer see in near darkness."
tags: [optics, electronic, military]
type: wearable
category: gear
slot: "Eyewear"
value: 3000
currency: "ERC"
`,ld=`id: pack-animal
name: "Pack Animal"
status: draft
plane: any
summary: "A sturdy animal for carrying loads or pulling a cart."
tags: [animal, travel, cargo]
type: animal
category: other
value: 2500
currency: "ERC"
`,ud=`id: padded-coif
name: "Padded Coif"
status: draft
plane: any
summary: "A quilted hood. Protects the head only."
tags: [armor, light]
type: wearable
category: armor
resistances: "2 Blunt, 1 Slashing (head)"
slot: "Headwear"
value: 40
currency: "ERC"
`,dd=`id: painkillers
name: "Painkillers"
status: draft
plane: earth
summary: "A strip of strong painkillers."
tags: [medical, drug]
type: misc
category: consumable
uses: "uses 6: when taken"
value: 15
currency: "ERC"
`,fd=`id: painting-supplies
name: "Painting Supplies"
status: draft
plane: any
summary: "Brushes, pigments and canvas."
tags: [art]
type: equipment
category: gear
value: 100
currency: "ERC"
`,pd=`id: pistol-magazine
name: "Pistol Magazine"
status: draft
plane: earth
summary: "A loaded magazine for a pistol."
tags: [ammunition, firearm]
type: misc
category: consumable
uses: "uses 1: per reload"
value: 30
currency: "ERC"
`,md=`id: pistol
name: "Pistol"
status: draft
plane: earth
summary: "A modern handgun."
tags: [ranged, firearm, sidearm, concealable]
type: weapon
category: weapon
damage: "7 Piercing"
value: 600
currency: "ERC"
`,hd=`id: plate-armor
name: "Plate Armor"
status: draft
plane: any
summary: "A full suit of fitted steel plates. Heavy, loud and very hard to get through."
tags: [armor, heavy]
type: wearable
category: armor
resistances: "4 Blunt, 4 Slashing, 2 Piercing, 2 Heat"
slot: "Body Armor"
value: 5000
currency: "ERC"
`,gd=`id: plate-carrier
name: "Plate Carrier"
status: draft
plane: earth
summary: "A vest of heavy ceramic trauma plates, made to stop rifle rounds."
tags: [armor, modern, heavy]
type: wearable
category: armor
resistances: "3 Blunt, 2 Slashing, 7 Piercing"
slot: "Body Armor"
value: 2500
currency: "ERC"
`,_d=`id: portable-computer
name: "Portable Computer"
status: draft
plane: earth
summary: "A rugged laptop or tablet for real computing work."
tags: [electronic, computing]
type: equipment
category: gear
value: 1500
currency: "ERC"
`,vd=`id: potion-kit
name: "Potion Kit"
status: draft
plane: isekai
summary: "Vials, a mortar and pestle, a burner and a few common reagents."
tags: [alchemy, potions]
type: equipment
category: gear
value: 50
currency: "Luras"
`,yd=`id: powder-and-shot
name: "Powder and Shot"
status: draft
plane: any
summary: "Black powder and lead balls for a musket."
tags: [ammunition, firearm]
type: misc
category: consumable
uses: "uses 20: when fired"
value: 30
currency: "ERC"
`,bd=`id: power-armor
name: "Power Armor"
status: draft
plane: earth
summary: "A powered, sealed suit of heavy armor plates, worn like a small vehicle."
tags: [armor, heavy, powered, modern]
type: wearable
category: armor
resistances: "6 Blunt, 6 Slashing, 6 Piercing, 2 Heat, 2 Cold, 2 Radiation"
slot: "Body Armor"
value: 250000
currency: "ERC"
`,xd=`id: quarterstaff
name: "Quarterstaff"
status: draft
plane: any
summary: "A long wooden staff, as useful on the road as in a fight."
tags: [melee, blunt, two-handed]
type: weapon
category: weapon
damage: "3 Blunt"
value: 40
currency: "ERC"
`,Sd=`id: rad-suit
name: "Rad Suit"
status: draft
plane: earth
summary: "A lead-lined suit for work in irradiated areas."
tags: [radiation, survival]
type: wearable
category: armor
resistances: "1 Blunt, 6 Radiation, 1 Acidic/Corrosive"
slot: "Body Armor"
value: 1500
currency: "ERC"
`,Cd=`id: rapier
name: "Rapier"
status: draft
plane: any
summary: "A slender sword built for thrusting, with a swept hilt."
tags: [melee, blade, sword]
type: weapon
category: weapon
damage: "3 Slashing / 5 Piercing"
value: 450
currency: "ERC"
`,wd=`id: ration-pack
name: "Ration Pack"
status: draft
plane: earth
summary: "A sealed, self-heating meal for one day."
tags: [food, military]
type: misc
category: consumable
uses: "uses 1: when eaten"
value: 12
currency: "ERC"
`,Td=`id: rebreather
name: "Rebreather"
status: draft
plane: earth
summary: "A mask and small tank for bad air, smoke or water."
tags: [survival, breathing]
type: equipment
category: gear
uses: "uses 1: per tank, about an hour"
slot: "Face"
value: 600
currency: "ERC"
`,Ed=`id: renminbi
name: "Rénmínbì (RMB)"
status: draft
plane: earth
region: chinese-empire
summary: "The currency of the Empire of China."
tags: [currency]
type: misc
category: currency
notes: "Exchange rate to ERC not set yet."
`,Dd=`id: revolver
name: "Revolver"
status: draft
plane: earth
summary: "A heavy six-shot handgun with a rotating cylinder."
tags: [ranged, firearm, sidearm]
type: weapon
category: weapon
damage: "8 Piercing"
value: 800
currency: "ERC"
`,Od=`id: riding-animal
name: "Riding Animal"
status: draft
plane: any
summary: "A common saddle animal trained to carry a rider."
tags: [mount, animal, travel]
type: animal
category: other
value: 5000
currency: "ERC"
`,kd=`id: rifle-magazine
name: "Rifle Magazine"
status: draft
plane: earth
summary: "A loaded magazine for a rifle."
tags: [ammunition, firearm]
type: misc
category: consumable
uses: "uses 1: per reload"
value: 40
currency: "ERC"
`,Ad=`id: rifle
name: "Rifle"
status: draft
plane: earth
summary: "A modern rifle, the standard arm of soldiers across the systems."
tags: [ranged, firearm, military, two-handed]
type: weapon
category: weapon
damage: "7 Piercing"
value: 1200
currency: "ERC"
`,jd=`id: riot-gear
name: "Riot Gear"
status: draft
plane: earth
summary: "Padded armor, helmet and shield for crowd control."
tags: [armor, police]
type: wearable
category: armor
resistances: "4 Blunt, 3 Slashing, 2 Piercing, 1 Cold"
slot: "Body Armor"
value: 1500
currency: "ERC"
`,Md=`id: rope
name: "Rope"
status: draft
plane: any
summary: "Fifteen meters of strong rope."
tags: [climbing, utility]
type: equipment
category: gear
value: 30
currency: "ERC"
`,Nd=`id: rowboat
name: "Rowboat"
status: draft
plane: any
summary: "A small wooden boat with oars. Occupants: 4."
tags: [vehicle, water]
type: vehicle
category: other
value: 1500
currency: "ERC"
`,Pd=`id: shortbow
name: "Shortbow"
status: draft
plane: any
summary: "A compact bow, easy to carry and to shoot from horseback."
tags: [ranged, archery, two-handed]
type: weapon
category: weapon
damage: "3 Piercing"
value: 200
currency: "ERC"
`,Fd=`id: shortsword
name: "Shortsword"
status: draft
plane: any
summary: "A one-handed sword, light enough to carry everywhere."
tags: [melee, blade, sword]
type: weapon
category: weapon
damage: "5 Slashing / 4 Piercing"
value: 250
currency: "ERC"
`,Id=`id: shotgun-shells
name: "Shotgun Shells"
status: draft
plane: earth
summary: "A box of shotgun shells."
tags: [ammunition, firearm]
type: misc
category: consumable
uses: "uses 25: when fired"
value: 25
currency: "ERC"
`,Ld=`id: shotgun
name: "Shotgun"
status: draft
plane: earth
summary: "A smoothbore gun firing shot or slugs, brutal at short range."
tags: [ranged, firearm, two-handed]
type: weapon
category: weapon
damage: "8 Piercing"
value: 700
currency: "ERC"
`,Rd=`id: sling-stones
name: "Sling Stones"
status: draft
plane: any
summary: "A pouch of smooth stones or lead shot."
tags: [ammunition]
type: misc
category: consumable
uses: "uses 20: when fired"
value: 5
currency: "ERC"
`,zd=`id: sling
name: "Sling"
status: draft
plane: any
summary: "A strap of leather or cord that hurls stones."
tags: [ranged, cheap]
type: weapon
category: weapon
damage: "3 Blunt"
value: 15
currency: "ERC"
`,Bd=`id: smithing-tools
name: "Smithing Tools"
status: draft
plane: any
summary: "Hammers, tongs and files. Needs a forge for real work."
tags: [craft, tools]
type: equipment
category: gear
value: 400
currency: "ERC"
`,Vd=`id: smoke-grenade
name: "Smoke Grenade"
status: draft
plane: earth
summary: "A grenade that fills an area with thick smoke."
tags: [thrown, cover, military]
type: equipment
category: consumable
uses: "uses 1: when thrown"
value: 40
currency: "ERC"
`,Hd=`id: sniper-rifle
name: "Sniper Rifle"
status: draft
plane: earth
summary: "A long-range precision rifle with a powerful scope."
tags: [ranged, firearm, military, two-handed]
type: weapon
category: weapon
damage: "9 Piercing"
value: 4000
currency: "ERC"
`,Ud=`id: spear
name: "Spear"
status: draft
plane: any
summary: "A long shaft with a sharpened head, cheap to make and deadly in a line."
tags: [melee, polearm, reach]
type: weapon
category: weapon
damage: "5 Piercing"
value: 150
currency: "ERC"
`,Wd=`id: spyglass
name: "Spyglass"
status: draft
plane: any
summary: "A brass telescope that folds to pocket size."
tags: [optics, scouting]
type: equipment
category: gear
value: 150
currency: "ERC"
`,Gd=`id: steel-helm
name: "Steel Helm"
status: draft
plane: any
summary: "A steel helmet. Protects the head only."
tags: [armor, helmet]
type: wearable
category: armor
resistances: "3 Blunt, 4 Slashing, 2 Piercing (head)"
slot: "Headwear"
value: 250
currency: "ERC"
`,Kd=`id: stun-baton
name: "Stun Baton"
status: draft
plane: earth
summary: "A police baton that delivers a disabling electric shock."
tags: [melee, blunt, nonlethal, police]
type: weapon
category: weapon
damage: "2 Blunt, 2 Electrical"
value: 150
currency: "ERC"
`,qd=`id: submachine-gun
name: "Submachine Gun"
status: draft
plane: earth
summary: "A compact automatic weapon that fires pistol rounds."
tags: [ranged, firearm, military]
type: weapon
category: weapon
damage: "6 Piercing"
value: 2500
currency: "ERC"
`,Jd=`id: surgical-kit
name: "Surgical Kit"
status: draft
plane: any
summary: "Scalpels, clamps, sutures and the rest of a surgeon’s tools."
tags: [medical]
type: equipment
category: gear
value: 600
currency: "ERC"
`,Yd=`id: taser
name: "Taser"
status: draft
plane: earth
summary: "A handheld stun gun that fires two barbed electrodes on wires."
tags: [ranged, nonlethal, police]
type: weapon
category: weapon
damage: "4 Electrical"
uses: "uses 1: per cartridge"
value: 300
currency: "ERC"
`,Xd=`id: tent
name: "Tent"
status: draft
plane: any
summary: "A canvas or synthetic tent for two."
tags: [travel, camping, shelter]
type: structure
category: gear
value: 200
currency: "ERC"
`,Zd=`id: throwing-knives
name: "Throwing Knives"
status: draft
plane: any
summary: "A set of balanced knives made for throwing."
tags: [ranged, thrown, concealable]
type: weapon
category: weapon
damage: "3 Piercing"
uses: "uses 6: when thrown, until recovered"
value: 80
currency: "ERC"
`,Qd=`id: torch
name: "Torch"
status: draft
plane: any
summary: "A pitch-soaked torch that burns for about an hour."
tags: [light, fire]
type: equipment
category: consumable
damage: "Heat"
uses: "uses 1: burns about an hour"
value: 5
currency: "ERC"
`,$d=`id: tower-shield
name: "Tower Shield"
status: draft
plane: any
summary: "A tall shield that covers a body from shin to chin. Heavy and slow."
tags: [shield, heavy]
type: equipment
category: armor
resistances: "5 Blunt, 5 Slashing, 5 Piercing (when raised)"
slot: "Off Hand"
value: 300
currency: "ERC"
`,ef=`id: trail-rations
name: "Trail Rations"
status: draft
plane: any
summary: "Dried meat, hard bread and fruit for one day."
tags: [food, travel]
type: misc
category: consumable
uses: "uses 1: when eaten"
value: 15
currency: "ERC"
`,tf=`id: travelers-cloak
name: "Traveler’s Cloak"
status: draft
plane: any
summary: "A hooded wool cloak against wind and rain."
tags: [travel, clothing]
type: wearable
category: gear
resistances: "2 Cold"
slot: "Outerwear"
value: 60
currency: "ERC"
`,nf=`id: turnout-gear
name: "Turnout Gear"
status: draft
plane: earth
summary: "A firefighter’s heat-resistant coat, trousers and boots."
tags: [fire, survival]
type: wearable
category: armor
resistances: "1 Blunt, 1 Slashing, 4 Heat, 1 Cold"
slot: "Body Armor"
value: 2000
currency: "ERC"
`,rf=`id: voidsuit
name: "Voidsuit"
status: draft
plane: earth
summary: "A sealed, pressurized suit with its own air, for working in space."
tags: [space, survival]
type: wearable
category: armor
resistances: "2 Blunt (decompression), 4 Cold"
uses: "uses 1: per air tank"
slot: "Body Armor"
value: 50000
currency: "ERC"
`,af=`id: wagon
name: "Wagon"
status: draft
plane: any
summary: "A four-wheeled wagon pulled by draft animals. Occupants: 2, plus cargo."
tags: [vehicle, cargo, travel]
type: vehicle
category: other
value: 3000
currency: "ERC"
`,of=`id: war-axe
name: "War Axe"
status: draft
plane: any
summary: "A broad-headed axe made for fighting rather than firewood."
tags: [melee, axe]
type: weapon
category: weapon
damage: "7 Slashing"
value: 300
currency: "ERC"
`,sf=`id: war-hammer
name: "War Hammer"
status: draft
plane: any
summary: "A hammer with a spike on its back, for denting plate or punching through it."
tags: [melee, blunt]
type: weapon
category: weapon
damage: "5 Blunt / 4 Piercing"
value: 300
currency: "ERC"
`,cf=`id: warded-robes
name: "Warded Robes"
status: draft
plane: isekai
region: dreft
summary: "Robes stitched with protective wards against hostile magic."
tags: [magic, clothing]
type: wearable
category: armor
resistances: "3 Metaphysical, 1 Cold"
slot: "Body Armor"
value: 400
currency: "Luras"
notes: "Suggested by Claude; check with the magic pass."
`,lf=`id: waterskin
name: "Waterskin"
status: draft
plane: any
summary: "A leather skin or canteen that holds a day’s water."
tags: [travel, survival]
type: equipment
category: gear
value: 15
currency: "ERC"
`,uf=`id: wooden-shield
name: "Wooden Shield"
status: draft
plane: any
summary: "A round shield of planks and leather."
tags: [shield]
type: equipment
category: armor
resistances: "4 Blunt, 4 Slashing, 3 Piercing (when raised)"
slot: "Off Hand"
value: 100
currency: "ERC"
`,df=`id: writing-kit
name: "Writing Kit"
status: draft
plane: any
summary: "Paper, ink, pens and sealing wax, or a tablet and stylus."
tags: [scholar, utility]
type: equipment
category: gear
value: 30
currency: "ERC"
`,ff=`id: ai-core
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
# A machine mind: harmed by EMP, usually immune to Death damage.
grants:
  - trait: mechanical
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
`,pf=`id: guwain
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
`,mf=`id: isek
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
`,hf=`id: tatot-goblinoid
name: "Tatot, Goblinoid"
status: placeholder
plane: isekai
region: dreft
summary: "The “High Orcs.” A polyphenic Kind: every Tatot is born either orcoid or goblinoid. Goblinoids are small, with plentiful mana."
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
`,gf=`id: tatot-orcoid
name: "Tatot, Orcoid"
status: placeholder
plane: isekai
region: dreft
summary: "The “High Orcs.” A polyphenic Kind: every Tatot is born either orcoid or goblinoid. Orcoids are larger and stronger, have no mana, and are largely immune to sunsickness."
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
`,_f=`id: human
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
`,q=`id: american-empire-colonies
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
`,vf=`id: american-empire-earth
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
`,yf=`id: centafrica-colonies
name: "Centafrica: Colonies"
status: placeholder
plane: earth
region: centafrica
summary: "You grew up aboard Aksum, Centafrica’s station on its long elliptical orbit through the inner Sol System."
tags: [centafrica, colonies, station, space]
lore: centafrica
type: origin
# A free bonus point the player places in a Mental stat.
bonusPoints:
  - { count: 1, group: mental }
grants:
  - { trait: centafrica, rank: 1 }
  - { trait: centafrican-law, rank: 1 }
  - { trait: swahili }
  - { trait: swahili-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - aksum
  - ports-and-stations
  - spacefaring
  - starships
  - shipping-lanes
  - music
  - earth-baseline-technology
  - french
  - english
`,bf=`id: centafrica-earth
name: "Centafrica: Earth"
status: placeholder
plane: earth
region: centafrica
summary: "You were born in Centafrica, anywhere from Lagos to Kinshasa to Addis Ababa, in a vibrant democracy whose wealth is rarely spread evenly and whose people have long memories."
tags: [centafrica, earth, democracy, culture]
lore: centafrica
type: origin
# A free bonus point the player places in a Social stat.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: centafrica, rank: 1 }
  - { trait: centafrican-law, rank: 1 }
  - { trait: swahili }
  - { trait: swahili-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - music
  - art-history
  - theater
  - politics
  - commerce
  - earth-baseline-technology
  - french
  - french-written
  - english
  - lingala
  - yoruba
  - hausa
`,xf=`id: chinese-empire-colonies
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
`,Sf=`id: chinese-empire-earth
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
`,Cf=`id: dreft
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
`,wf=`# Drovus’s lore is still coming soon on the site; the description only draws on Dreft’s history.
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
`,Tf=`id: the-free-american-states
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
`,Ef=`# Karsef’s lore is still coming soon on the site; the description only draws on Dreft’s history.
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
`,Df=`id: kashgar
name: "Kashgar"
status: placeholder
plane: earth
region: kashgar
summary: "You grew up on Kashgar, the largest Ark in the settled systems and the heart of the AI diaspora. Your neighbors were as likely to be AI Cores as people, Kashgari security watched every deck, and home never stayed anywhere for long."
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
`,Of=`id: the-kingdom-of-india-colonies
name: "The Kingdom of India: Colonies"
status: placeholder
plane: earth
region: kingdom-of-india
summary: "You grew up in the Kingdom’s new homes beyond Earth: in Pataliputra, the planar capital where millions arrive every year, or aboard Amaravati, its station in high Earth orbit."
tags: [india, colonies, planar, pataliputra, station]
lore: kingdom-of-india
type: origin
# A free bonus point the player places in a Social stat.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: the-kingdom-of-india, rank: 1 }
  - { trait: indian-law, rank: 1 }
  - { trait: hindi }
  - { trait: hindi-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - pataliputra
  - amaravati
  - indian-theology
  - planar-exploration
  - interplanar-relations
  - ecology
  - earth-baseline-technology
  - english
  - english-written
`,kf=`id: the-kingdom-of-india-earth
name: "The Kingdom of India: Earth"
status: placeholder
plane: earth
region: kingdom-of-india
summary: "You were born in the Kingdom of India’s Earth territories, a regreened paradise whose crown, and millions of its people, have left for Pataliputra."
tags: [india, earth, kingdom, theocracy]
lore: kingdom-of-india
type: origin
# A free bonus point the player places in a Physical stat.
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: the-kingdom-of-india, rank: 1 }
  - { trait: indian-law, rank: 1 }
  - { trait: hindi }
  - { trait: hindi-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - indian-theology
  - ecology
  - farming
  - herbalism
  - pataliputra
  - earth-baseline-technology
  - english
  - english-written
  - bengali
  - tamil
`,Af=`id: the-lunar-industrial-syndicate
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
`,jf=`id: sdu-colonies
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
`,Mf=`id: sdu-earth
name: "The Stellar Democratic Union: Earth"
status: placeholder
plane: earth
region: sdu
summary: "You were born in the Union’s Earth territories, anywhere from core Europe to Japan, Brazil or Canada, in the largest and richest nation in the settled systems."
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
`,Nf=`# Sorellion’s lore is still coming soon on the site; this is a placeholder to fill in.
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
`,Pf=`id: tetra
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
`,Ff=`id: the-union-of-texas
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
`,If=`id: the-ural-federation
name: "The Ural Federation"
status: placeholder
plane: earth
region: ural-federation
summary: "You grew up in the Ural Federation, among the tribal statelets of the steppe and the thawed Siberian breadbasket, in a melting pot of native peoples, climate refugees and the last of the Russian diaspora."
tags: [ural-federation, earth, tribal, steppe]
lore: ural-federation
type: origin
# A free bonus point the player places in a Physical stat.
bonusPoints:
  - { count: 1, group: physical }
grants:
  - { trait: the-ural-federation, rank: 1 }
  - { trait: ural-tribal-law, rank: 1 }
  - { trait: russian }
  - { trait: russian-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - farming
  - countryside-lore
  - wilderness-lore
  - survivalist
  - rider-basic-animals
  - animal-husbandry
  - the-chinese-empire
  - earth-baseline-technology
  - kazakh
  - mongolian
  - uyghur
`,Lf=`id: xanthus
name: "Xanthus"
status: placeholder
plane: earth
region: xanthus
summary: "You grew up aboard Xanthus, the free Ark built around an iron asteroid: a pariah state, a model democracy and a haven for anyone escaping poverty or persecution."
tags: [xanthus, ark, space, democracy, refugee]
lore: xanthus
type: origin
# A free bonus point the player places in a Social stat.
bonusPoints:
  - { count: 1, group: social }
grants:
  - { trait: xanthus, rank: 1 }
  - { trait: swahili }
  - { trait: swahili-written }
choices:
  - choose: 1
    from: spoken-and-written-language
    note: "+1 Language (Spoken & Written)"
backgroundTraits:
  - ark-life
  - asteroid-mining
  - ports-and-stations
  - spacefaring
  - centafrica
  - criminal-underworld
  - starship-engineering
  - lingala
  - english
  - spanish
  - portuguese
`,Rf=`id: craft-apprenticeship
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
backgroundTraits:
  - trade-guilds
  - commerce
  - engineering
`,zf=`id: criminal-family
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
backgroundTraits:
  - gambling
  - law-enforcement
  - security-systems
`,Bf=`id: gutter-trash
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
backgroundTraits:
  - gambling
  - law-enforcement
  - wielder-dagger
`,Vf=`id: military-service
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
backgroundTraits:
  - weapons
  - wilderness-lore
  - navigation
  - wielder-grenade
  - wielder-machine-gun
`,Hf=`id: privileged-upbringing
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
backgroundTraits:
  - high-society
  - literature
  - history
  - politics
`,Uf=`id: raised-at-court
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
backgroundTraits:
  - high-society
  - politics
  - history
`,Wf=`id: shipborn
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
backgroundTraits:
  - navigation
  - starships
  - spacefaring
  - geography
`,Gf=`id: simple-farmer
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
backgroundTraits:
  - animal-lore
  - wilderness-lore
  - wielder-sling
  - wielder-staff
`,J=`id: traveling-troupe
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
backgroundTraits:
  - theater
  - literature
  - geography
`,Kf=`id: countryside-upbringing
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
backgroundTraits:
  - animal-lore
  - wilderness-lore
  - wielder-sling
  - wielder-bow
`,qf=`id: expelled-from-the-mage-schools
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
backgroundTraits:
  - literature
  - history
`,Jf=`id: glintl-docks
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
backgroundTraits:
  - commerce
  - navigation
  - gambling
`,Yf=`id: karsef-border-veteran
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
backgroundTraits:
  - weapons
  - wilderness-lore
  - geography
  - wielder-crossbow
  - wielder-spear
  - wielder-polearm
`,Xf=`id: merchant-dynasty
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
backgroundTraits:
  - commerce
  - high-society
`,Zf=`id: monster-raided-village
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
backgroundTraits:
  - animal-lore
  - wilderness-lore
  - weapons
  - wielder-spear
  - wielder-sling
`,Qf=`id: noble-household
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
backgroundTraits:
  - high-society
  - history
  - politics
`,$f=`id: palace-servant
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
backgroundTraits:
  - high-society
  - politics
`,ep=`id: raised-in-the-caravan-town
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
backgroundTraits:
  - commerce
  - geography
  - animal-lore
`,tp=`id: returned-from-the-systems
name: Returned from the Settled Systems
status: placeholder
plane: isekai
region: dreft
summary: "Left Dreft for the settled systems and came back changed, like everyone who comes back."
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
backgroundTraits:
  - starships
  - spacefaring
`,np=`id: sunrise-refugee
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
backgroundTraits:
  - bureaucracy
  - geography
`,rp=`id: station-rat
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
backgroundTraits:
  - spacefaring
  - engineering
`,ip=`id: university-educated
name: "University Educated"
status: placeholder
plane: earth
summary: "Studied at one of the settled systems’ universities, and still owes someone for it."
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
backgroundTraits:
  - physics
  - chemistry
  - biology
  - history
  - literature
`,Y=`id: delegation-child
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
backgroundTraits:
  - diplomatic-protocol
  - politics
  - high-society
`,ap=`id: gate-lab-kid
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
backgroundTraits:
  - physics
  - engineering
`,op=`id: holding-company-kid
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
backgroundTraits:
  - commerce
  - bureaucracy
`,sp=`id: parasapient-quarter
name: "Parasapient Quarter"
status: placeholder
plane: earth
region: tetra
summary: "Grew up among Tetra’s parasapient diasporas, the largest resident population of parasapients in the settled systems."
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
backgroundTraits:
  - bureaucracy
  - legal-systems
`,cp=`id: raised-in-the-infill
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
backgroundTraits:
  - spacefaring
  - engineering
`,lp=`id: raised-on-ward-politics
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
backgroundTraits:
  - politics
  - bureaucracy
`,up=`id: apothecary
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
  - chemistry
  - biology
  - commerce
`,dp=`id: bard
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
  - history
  - literature
  - theater
  - wielder-dagger
`,fp=`id: blacksmith
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
  - weapons
  - engineering
  - trade-guilds
  - commerce
  - wielder-mace
`,pp=`id: courier
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
  - geography
  - navigation
  - animal-lore
  - bureaucracy
`,mp=`id: criminal-enforcer
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
  - weapons
  - gambling
  - law-enforcement
  - wielder-dagger
  - wielder-shotgun
`,hp=`id: doctor
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
  - biology
  - chemistry
`,gp=`id: farmer
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
  - animal-lore
  - biology
  - commerce
  - wilderness-lore
`,_p=`id: jester
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
  - theater
  - literature
  - high-society
  - politics
`,vp=`id: knight
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
  - weapons
  - history
  - high-society
  - animal-lore
  - wielder-spear
  - wielder-mace
  - wielder-greatsword
`,yp=`id: local-police
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
  - law-enforcement
  - legal-systems
  - weapons
  - security-systems
  - wielder-shotgun
`,bp=`id: musical-artist
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
  - theater
  - literature
  - high-society
`,xp=`id: ranger
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
  - wilderness-lore
  - animal-lore
  - geography
  - navigation
  - wielder-bow
  - wielder-dagger
  - wielder-throwing-weapon
`,Sp=`id: smuggler
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
  - navigation
  - starships
  - security-systems
  - gambling
  - commerce
  - wielder-shotgun
  - wielder-dagger
`,Cp=`id: spy
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
  - cryptography
  - politics
  - security-systems
  - high-society
  - theater
  - wielder-dagger
`,wp=`id: squire
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
  - weapons
  - animal-lore
  - history
  - wielder-spear
  - wielder-mace
  - wielder-shortsword
`,Tp=`id: stonemason
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
  - engineering
  - trade-guilds
  - commerce
`,Ep=`id: surgeon
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
  - biology
  - chemistry
`,Dp=`id: tanner
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
  - animal-lore
  - chemistry
  - trade-guilds
  - commerce
`,Op=`id: visual-artist
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
  - history
  - literature
  - high-society
  - commerce
`,kp=`id: alchemist
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
  - chemistry
  - trade-guilds
`,Ap=`id: caravaneer
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
backgroundTraits:
  - commerce
  - geography
  - navigation
  - animal-lore
  - wielder-crossbow
`,jp=`id: dreft-local-militia
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
  - weapons
  - wilderness-lore
  - geography
  - wielder-spear
  - wielder-crossbow
  - wielder-polearm
`,Mp=`id: dreft-mercenary
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
  - weapons
  - gambling
  - geography
  - commerce
  - wielder-polearm
  - wielder-crossbow
  - wielder-greatsword
  - wielder-siege-engine
`,Np=`id: gate-hand
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
backgroundTraits:
  - commerce
  - bureaucracy
`,Pp=`id: guild-hunter
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
backgroundTraits:
  - animal-lore
  - wilderness-lore
  - weapons
  - trade-guilds
  - wielder-bow
  - wielder-spear
  - wielder-throwing-weapon
`,Fp=`id: hedge-witch
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
backgroundTraits:
  - animal-lore
  - wilderness-lore
  - biology
  - wielder-staff
`,Ip=`id: licensed-mage
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
backgroundTraits:
  - history
  - literature
  - bureaucracy
  - chemistry
  - wielder-staff
`,Lp=`id: royal-guard
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
backgroundTraits:
  - weapons
  - law-enforcement
  - politics
  - high-society
  - wielder-polearm
  - wielder-crossbow
  - wielder-shortsword
`,Rp=`id: american-empire-soldier
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
backgroundTraits:
  - weapons
  - military-tactics
  - wilderness-lore
  - wielder-machine-gun
  - wielder-grenade
  - wielder-missile-launcher
  - wielder-sniper-rifle
  - wielder-mortar
`,zp=`id: combat-medic
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
  - biology
  - weapons
  - military-tactics
  - wielder-shotgun
`,Bp=`id: computer-engineer
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
  - cryptography
  - security-systems
  - engineering
  - physics
`,Vp=`id: emergency-medical-technician
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
  - biology
  - law-enforcement
`,Hp=`id: exotic-specimen-dealer
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
backgroundTraits:
  - commerce
  - animal-lore
  - bureaucracy
  - biology
  - starships
`,Up=`id: fighter-pilot
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
  - starships
  - navigation
  - physics
  - spacefaring
  - weapons
`,Wp=`id: interplanar-diplomat
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
backgroundTraits:
  - diplomatic-protocol
  - politics
  - history
  - bureaucracy
  - high-society
`,Gp=`id: interplanar-rights-lawyer
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
backgroundTraits:
  - legal-systems
  - bureaucracy
  - politics
`,Kp=`id: officer-of-the-bureau-of-planar-management-and-enforcement
name: "Officer of the Bureau of Planar Management and Enforcement"
status: placeholder
plane: earth
summary: "Enforces the laws on planar exploration for the Bureau, inspecting gates and chasing down unregulated exploitation across the settled systems."
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
  - law-enforcement
  - legal-systems
  - bureaucracy
  - security-systems
  - wielder-shotgun
  - wielder-grenade
`,qp=`id: paraarcheologist
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
backgroundTraits:
  - history
  - geography
  - chemistry
`,Jp=`id: paraecologist
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
backgroundTraits:
  - biology
  - wilderness-lore
  - animal-lore
  - geography
`,Yp=`id: paraethnologist
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
backgroundTraits:
  - history
  - politics
  - literature
`,Xp=`id: paraevolutionary-scientist
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
backgroundTraits:
  - biology
  - chemistry
  - history
`,Zp=`id: paraphysiologist
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
backgroundTraits:
  - biology
  - chemistry
  - medicine
`,Qp=`id: parazoological-keeper
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
backgroundTraits:
  - animal-lore
  - biology
  - security-systems
`,$p=`id: planar-expeditionary-professional
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
backgroundTraits:
  - wilderness-lore
  - geography
  - navigation
  - biology
  - wielder-shotgun
  - wielder-flamethrower
`,em=`id: starship-engineer
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
  - engineering
  - physics
  - starships
  - spacefaring
`,tm=`id: station-maintenance
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
  - engineering
  - spacefaring
  - security-systems
`,nm=`id: theoretical-paraphysicist
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
backgroundTraits:
  - physics
  - chemistry
  - engineering
`,rm=`id: truck-pilot
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
backgroundTraits:
  - starships
  - navigation
  - spacefaring
  - commerce
`,im=`id: capable-student
name: "Capable Student"
status: draft
plane: any
summary: "Learns new knowledge in half the time."
tags: [learning, study, site-example]
category: ability
minStats: { memory: 3, logic: 3 }
effect: "This character can learn a new (knowledge) Trait in half the specified time."
`,am=`id: con-man
name: "Con Man"
status: draft
plane: any
summary: "A practiced liar, in speech and in writing."
tags: [lying, deception, social, site-example]
category: ability
minStats: { persuasion: 8, demeanor: 4, intuition: 4, memory: 4 }
effect: "Add 5 to any skill check rolls that involve lying in either written or spoken form."
`,om=`id: eagle-eye
name: "Eagle Eye"
status: draft
plane: any
summary: "Sees unusually well at a distance."
tags: [sight, perception, site-example]
category: ability
conveyed: true
effect: "This character can request advantage in situations that involve seeing at distance."
`,sm=`id: gladiator
name: "Gladiator"
status: draft
plane: any
summary: "Can fight passably with any close combat weapon."
tags: [combat, melee, site-example]
category: ability
minStats: { physical: 5, grace: 5, demeanor: 5 }
effect: "When in combat, this character can use any close combat weapon as if they had the Wielder Trait with a single rank for that weapon."
`,cm=`id: knowledge-sponge
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
`,lm=`id: magic-access
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
`,um=`id: magical-heritage
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
`,dm=`id: mental-fortitude
name: "Mental Fortitude"
status: draft
plane: any
summary: "Holds together when the mind is badly taxed."
tags: [will, resistance, site-example]
category: ability
minStats: { endurance: 8, logic: 5, demeanor: 5 }
effect: "This character can request advantage in any scenario where their mental faculties are being severely taxed, be it resisting the mesmerizing effects of a vampire or pushing through a long march without becoming exhausted."
`,fm=`id: natural-breath-weapon
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
`,pm=`id: sculpted
name: "Sculpted"
status: draft
plane: any
summary: "Looks every bit as athletic as they are."
tags: [appearance, athletics, social, site-example]
category: ability
minStats: { power: 5, endurance: 5, demeanor: 3 }
effect: "This character can request advantage in situations where the appearance of athleticism can affect the outcome of a roll or situation (useful for models, athletes with endorsements, or barbarians trying to intimidate)."
`,mm=`id: trail-runner
name: "Trail Runner"
status: draft
plane: any
summary: "Slow to tire when running, hiking or climbing."
tags: [endurance, travel, site-example]
category: ability
minStats: { power: 3, endurance: 2, grace: 2 }
effect: "This character takes twice as long to get winded by activities that involve running, hiking, or climbing."
`,hm=`id: explorers-lodge-membership
name: "Explorers’ Lodge Membership"
status: placeholder
plane: earth
summary: "This character is a member in good standing of the Explorers’ Lodge."
tags: [lodge, exploration, membership]
lore: explorers-lodge
category: circumstance
conveyed: true
effect: Placeholder. Effect not yet written.
`,gm=`id: imperial-service-record
name: "Imperial Service Record"
status: placeholder
plane: earth
region: american-empire
summary: "This character serves, or has served, in the American Empire’s armed forces."
tags: [military, american-empire, service]
category: circumstance
conveyed: true
effect: Placeholder. Effect not yet written.
`,_m=`id: short-term-fame
name: "Short Term Fame"
status: draft
plane: any
summary: "Famous, for now, after recent events."
tags: [fame, social, site-example]
category: circumstance
conveyed: true
temporary: "30 days"
effect: "Due to recent events this character is famous and can request advantage in social situations where the character's fame may aid them."
`,vm=`id: significant-inheritance
name: "Significant Inheritance"
status: draft
plane: earth
summary: "An inheritance of 2 million ERC sitting safely in a bank."
tags: [money, inheritance, wealth, site-example]
category: circumstance
conveyed: true
temporary: "Lost when the money is all spent"
effect: "This character has access to an Inheritance of 2 million Earth Reserve Credits (ERC) currently safely contained in a bank."
`,ym=`id: thieves-guild-membership
name: "Thieves Guild Membership"
status: draft
plane: any
summary: "An official member of a local Thieves Guild."
tags: [thieves-guild, membership, crime, site-example]
category: circumstance
conveyed: true
effect: "This character is an official member of a Local Thieves Guild."
`,bm=`id: tugboat-captain
name: "Tugboat Captain"
status: draft
plane: any
summary: "Licensed and trained to command a tugboat."
tags: [tugboat, license, pilot, site-example]
category: circumstance
conveyed: true
effect: "This character has all required legal training and licenses required to command a Tugboat."
`,xm=`id: wanted-in-sol
name: "Wanted in Sol"
status: draft
plane: earth
summary: "Wanted by the nations of the Sol System for past crimes."
tags: [wanted, crime, sol, site-example]
category: circumstance
conveyed: true
temporary: "Lost when the character's innocence is proclaimed or they are caught"
effect: "This character is wanted by the nations of the Sol System for past crimes. This character's wanted status is severe and law enforcement and bounty hunting entities are actively searching for them."
`,Sm=`id: cybernetic-intelligence
name: "Cybernetic Intelligence"
status: draft
plane: earth
summary: "A machine-fast mind for mathematics."
tags: [cybernetic, mathematics, ai, site-example]
category: condition
background: true
effect: "This character is capable of extremely rapid feats of mathematical comprehension and has a +20 roll modifier for skill checks related to mathematics. This character is capable of performing significant numbers of mathematical calculations simultaneously; it is at the GM's discretion when and how this ability is limited."
`,Cm=`id: damaged
name: "Damaged"
status: draft
plane: any
summary: "An object below its full HP."
tags: [objects, damage, site-example, hit-points]
category: condition
conveyed: true
temporary: "An object gains this trait if it is below its maximum HP total"
effect: "This Trait has no effect on its own."
`,wm=`id: dead
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
`,Tm=`id: destroyed
name: "Destroyed"
status: draft
plane: any
summary: "An object at 0 HP or less, no longer working."
tags: [objects, damage, site-example, hit-points]
category: condition
conveyed: true
temporary: "An object gains this trait if it is at 0 or less HP"
effect: "This object has been destroyed and no longer functions in any intended capacity. This object cannot be repaired by any means unless otherwise stated."
`,Em=`id: ghost-sight
name: "Ghost Sight"
status: draft
plane: any
summary: "Perceives beyond the veil, seeing and hearing the supernatural."
tags: [supernatural, sight, site-example]
category: condition
conveyed: true
temporary: "Lost when the effect that granted this Trait ends"
effect: "This character perceives beyond the veil. This character can see and hear the supernatural."
`,Dm=`id: hard-shell
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
`,Om=`id: healthy
name: "Healthy"
status: draft
plane: any
summary: "At full HP."
tags: [health, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character or object gains this trait while they are at their maximum HP total"
effect: "This Trait has no effect on its own."
`,km=`id: incapacitated
name: "Incapacitated"
status: draft
plane: any
summary: "Too badly hurt to act or perceive."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are at less than a quarter of their HP total"
effect: "This character has been incapacitated by their injuries and can no longer perform voluntary actions or perceive the world around them."
`,Am=`id: injured
name: "Injured"
status: draft
plane: any
summary: "Below full HP."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are below their maximum HP total"
effect: "This Trait has no effect on its own."
`,jm=`id: long-toothed
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
`,Mm=`id: mechanical
name: "Mechanical"
status: draft
plane: any
summary: "A machine: harmed by EMP, and usually immune to Death damage."
tags: [machine, emp, site-example]
category: condition
background: true
effect: "This character or object is a machine. It can be harmed by EMP damage and is typically immune to Death damage."
`,Nm=`id: severe-bleeding
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
`,Pm=`id: severely-injured
name: "Severely Injured"
status: draft
plane: any
summary: "Below half HP."
tags: [health, injury, site-example, hit-points]
category: condition
conveyed: true
temporary: "A character gains this trait while they are below half their maximum HP total"
effect: "This Trait has no effect on its own."
`,Fm=`id: sorcerous
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
`,Im=`id: stimm-rush
name: "Stimm Rush"
status: draft
plane: earth
summary: "Riding the rush of a Stimm."
tags: [stimm, drugs, physical, site-example]
category: condition
conveyed: true
temporary: "This Trait lasts a number of minutes stated by the Stimm being used, or 1 minute if there is no stated duration"
effect: "This character gains 5 to all physical focus stats."
`,Lm=`id: stone-skin
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
`,Rm=`id: supernatural
name: "Supernatural"
status: draft
plane: any
summary: "Gone beyond the real: able to take supernatural Traits and to put points into the Supernatural core stat."
tags: [supernatural, site-example]
category: condition
background: true
effect: "This character has gone beyond the realm of the real and can take supernatural-related traits and may spend stat points on the Supernatural core stat."
`,zm=`id: additional-contact
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
`,Bm=`id: additional-language
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
`,Vm=`id: ai-culture
name: "AI Culture"
status: placeholder
plane: earth
summary: "The customs, media and politics of AI Cores and the communities around them."
tags: [ai, culture, kashgar]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 2 }
effect: "This character has knowledge of AI society and culture and can be assumed to be familiar with the peoples, places, and customs relevant to AI Cores and the communities around them."
`,Hm=`# Aksum has no lore entry on the site yet.
id: aksum
name: "Aksum"
status: draft
plane: earth
region: centafrica
summary: "Aksum, Centafrica’s station on its elliptical orbit through the inner Sol System."
tags: [centafrica, station, space]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Aksum and can be assumed to be familiar with the peoples, places, and customs of Centafrica’s inner-system station."
`,Um=`id: alchemy
name: "Alchemy"
status: draft
plane: isekai
summary: "The properties of substances and how they combine, the theory behind every potion."
tags: [alchemy, potions, science]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, intuition: 2 }
effect: "This character has knowledge of alchemy and can be assumed to be familiar with the properties of common reagents and how they combine in potions."
`,Wm=`# Amaravati has no lore entry on the site yet.
id: amaravati
name: "Amaravati"
status: draft
plane: earth
region: kingdom-of-india
summary: "Amaravati, the Kingdom of India’s station in high Earth orbit."
tags: [india, station, orbit]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Amaravati and can be assumed to be familiar with the peoples, places, and customs of India’s station in high Earth orbit."
`,Gm=`id: american-geography
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
`,Km=`id: american-history
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
`,qm=`id: amharic-written
name: "Amharic (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, amharic, earth, writing]
category: knowledge
types: [language]
language: amharic
effect: "This character can read and write the Amharic language."
`,Jm=`id: amharic
name: "Amharic (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, amharic, earth]
category: knowledge
types: [language]
language: amharic
effect: "This character is conversational in the Amharic language and can speak it."
`,Ym=`id: animal-lore
name: "Animal Lore"
status: draft
plane: any
summary: "Common animals: their habits, needs, dangers and uses."
tags: [animals, nature]
category: knowledge
ranked: true
minStats: { memory: 2, intuition: 2 }
effect: "This character has knowledge of animals and can be assumed to be familiar with the habits, needs, dangers and uses of common domestic and wild animals."
`,Xm=`id: antiluna
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
`,Zm=`id: arabic-written
name: "Arabic (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, arabic, earth, writing]
category: knowledge
types: [language]
language: arabic
effect: "This character can read and write the Arabic language."
`,Qm=`id: arabic
name: "Arabic (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, arabic, earth]
category: knowledge
types: [language]
language: arabic
effect: "This character is conversational in the Arabic language and can speak it."
`,$m=`id: architecture
name: "Architecture"
status: draft
plane: any
summary: "How buildings and bridges are designed, built and brought down."
tags: [building, masonry, engineering]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of architecture and can be assumed to be familiar with building styles, structural design and construction methods."
`,eh=`id: aristocracy
name: Aristocracy
status: placeholder
plane: isekai
summary: "The nobility of Isekai’s kingdoms: titles, ranks and who’s who."
tags: [nobility, court]
category: knowledge
minStats: { memory: 3, demeanor: 3 }
effect: "This character has knowledge of the aristocracy and can be assumed to be familiar with the nobles, titles, and ranks of the kingdoms surrounding the switch port on Isekai."
`,th=`id: ark-life
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
`,nh=`id: ark-new-york
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
`,rh=`id: art-history
name: "Art History"
status: draft
plane: any
summary: "Artists, movements and famous works, and what they are worth."
tags: [art, culture, history]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of art history and can be assumed to be familiar with notable artists, movements and works and their value."
`,ih=`id: artificial-intelligence
name: "Artificial Intelligence"
status: placeholder
plane: earth
summary: "How AI Cores and lesser machine minds are built, trained and kept running."
tags: [ai, technology, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of artificial intelligence and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,ah=`id: asteroid-mining
name: "Asteroid Mining"
status: draft
plane: earth
summary: "Finding, claiming and working asteroids for ore and ice."
tags: [mining, space, asteroid]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of asteroid mining and can be assumed to be familiar with how asteroids are surveyed, claimed, and worked."
`,oh=`id: bandits-and-brigands
name: "Bandits & Brigands"
status: placeholder
plane: isekai
region: dreft
summary: "Who robs the roads of Dreft, and how."
tags: [bandits, crime, roads]
category: knowledge
minStats: { memory: 2, intuition: 2 }
effect: "This character has knowledge of the criminal underworld of Isekai and can be assumed to be familiar with its groups and places."
`,sh=`id: bengali-written
name: "Bengali (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, bengali, earth, writing]
category: knowledge
types: [language]
language: bengali
effect: "This character can read and write the Bengali language."
`,ch=`id: bengali
name: "Bengali (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, bengali, earth]
category: knowledge
types: [language]
language: bengali
effect: "This character is conversational in the Bengali language and can speak it."
`,lh=`id: biology
name: "Biology"
status: draft
plane: any
summary: "Living things: how they grow, work, sicken and die."
tags: [science, biology, life]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of biology and can be assumed to be familiar with how living things grow, function, reproduce and interact."
`,uh=`id: boneyard
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
`,dh=`id: bureaucracy
name: "Bureaucracy"
status: draft
plane: any
summary: "Officialdom: forms, permits, departments, and how to get anything done through them."
tags: [bureaucracy, government, paperwork]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of bureaucracy and can be assumed to be familiar with how officials and departments work, which forms and permits are needed, and who to ask."
`,fh=`id: burmese-written
name: "Burmese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, burmese, earth, writing]
category: knowledge
types: [language]
language: burmese
effect: "This character can read and write the Burmese language."
`,ph=`id: burmese
name: "Burmese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, burmese, earth]
category: knowledge
types: [language]
language: burmese
effect: "This character is conversational in the Burmese language and can speak it."
`,mh=`id: cantonese-written
name: "Cantonese (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, cantonese, earth, writing]
category: knowledge
types: [language]
language: cantonese
effect: "This character can read and write the Cantonese language."
`,hh=`id: cantonese
name: "Cantonese (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, cantonese, earth]
category: knowledge
types: [language]
language: cantonese
effect: "This character is conversational in the Cantonese language and can speak it."
`,gh=`id: caravan-routes
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
`,_h=`id: centafrica
name: "Centafrica"
status: draft
plane: earth
region: centafrica
summary: "Centafrica: its federal democracy, its storied universities and the unreconciled history of its founding."
tags: [centafrica, politics]
lore: centafrica
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Centafrica and can be assumed to be familiar with its customs, politics, and territories."
`,vh=`id: centafrican-law
name: "Centafrican Law"
status: draft
plane: earth
region: centafrica
summary: "The laws of Centafrica’s federal democratic republic and how they’re enforced."
tags: [law, centafrica]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Centafrican law and can be assumed to be familiar with the laws and courts of Centafrica."
`,yh=`id: chemistry
name: "Chemistry"
status: draft
plane: any
summary: "What things are made of and how they react."
tags: [science, chemistry]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of chemistry and can be assumed to be familiar with common substances, how they react, and how to handle them safely."
`,bh=`id: chinese-imperial-law
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
`,xh=`id: coastal-trade
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
`,Sh=`id: commerce
name: "Commerce"
status: draft
plane: any
summary: "Trade and business: markets, prices, contracts and money."
tags: [trade, business, money]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of commerce and can be assumed to be familiar with how markets and businesses work, fair prices, contracts and the movement of money."
`,Ch=`id: computer-systems
name: "Computer Systems"
status: draft
plane: earth
summary: "The networks, software and hardware that run the settled systems."
tags: [computers, technology, networks]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of computer systems and can be assumed to be familiar with common networks, software and hardware and how they are secured."
`,wh=`id: countryside-lore
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
`,Th=`id: court-etiquette
name: Court Etiquette
status: placeholder
plane: isekai
region: dreft
summary: How to behave at the royal court.
tags: [court, nobility, etiquette]
category: knowledge
minStats: { memory: 2, demeanor: 3 }
effect: "This character has knowledge of courtly etiquette and can be assumed to be familiar with the rules and manners expected in the royal halls of Isekai."
`,Eh=`id: criminal-underworld
name: "Criminal Underworld"
status: draft
plane: any
summary: "The gangs, fences and smugglers who work outside the law, and the rules they keep among themselves."
tags: [crime, underworld, streets]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of organized crime and can be assumed to be familiar with its gangs, fences, black markets and the unwritten rules between them."
`,Dh=`id: cryptography
name: "Cryptography"
status: draft
plane: any
summary: "Codes and ciphers: making them, and breaking them."
tags: [codes, secrets, spy]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 4 }
effect: "This character has knowledge of cryptography and can be assumed to be familiar with common codes and ciphers and the methods used to make and break them."
`,Oh=`id: cybernetics
name: "Cybernetics"
status: placeholder
plane: earth
summary: "Implants, prosthetics and the medicine of joining people to machines."
tags: [cybernetics, technology, medicine]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of cybernetics and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,kh=`id: diplomatic-protocol
name: "Diplomatic Protocol"
status: draft
plane: any
summary: "The rules of formal meetings between powers: precedence, ceremony and what not to say."
tags: [diplomacy, etiquette, politics]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 3 }
effect: "This character has knowledge of diplomatic protocol and can be assumed to be familiar with the ceremonies, forms of address and unwritten rules of formal diplomacy."
`,Ah=`id: dreft
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
`,jh=`id: dreftan-written
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
`,Mh=`id: dreftan
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
`,Nh=`id: dreftian-law
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
`,Ph=`id: dutch-written
name: "Dutch (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, dutch, earth, writing]
category: knowledge
types: [language]
language: dutch
effect: "This character can read and write the Dutch language."
`,Fh=`id: dutch
name: "Dutch (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, dutch, earth]
category: knowledge
types: [language]
language: dutch
effect: "This character is conversational in the Dutch language and can speak it."
`,Ih=`id: dwarvish-runes-written
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
`,Lh=`# Pairs with Dwarvish Runes (Written).
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
`,Rh=`id: earth-baseline-customs
name: Earth Baseline Customs
status: placeholder
plane: earth
summary: How people from Earth Baseline expect things to be done.
tags: [earth, customs, foreigners]
category: knowledge
ranked: true
minStats: { memory: 1 }
effect: "This character has knowledge of Earth baseline customs and can be assumed to be familiar with how people across the settled systems expect things to be done."
`,zh=`id: earth-baseline-technology
name: Earth Baseline Technology
status: placeholder
plane: earth
summary: The machines and devices of Earth Baseline.
tags: [earth, technology]
category: knowledge
minStats: { memory: 1 }
effect: "This character has knowledge of Earth baseline technology and can be assumed to be familiar with the machines and devices common across the settled systems."
`,Bh=`id: ecology
name: "Ecology"
status: draft
plane: any
summary: "Ecosystems, climate and how damaged land is restored."
tags: [ecology, science, nature]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of ecology and can be assumed to be familiar with how ecosystems work and how damaged land is restored."
`,Vh=`id: elemental-magics
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
`,Hh=`id: engineering
name: "Engineering"
status: draft
plane: any
summary: "How machines, structures and systems are designed and kept running."
tags: [engineering, technology, building]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 4 }
effect: "This character has knowledge of engineering and can be assumed to be familiar with how machines, structures and systems are designed, built, maintained and broken."
`,Uh=`id: english-written
name: "English (Written)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, english, earth, writing]
category: knowledge
types: [language]
language: english
effect: This character can read and write the English language.
`,Wh=`id: english
name: "English (Spoken)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, english, earth]
category: knowledge
types: [language]
language: english
effect: This character is conversational in the English language and can speak it.
`,Gh=`id: exotic-materials
name: "Exotic Materials"
status: placeholder
plane: earth
summary: "The exotic materials paraphysics depends on: what they are, where they come from and what they do."
tags: [exotic-materials, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of exotic materials and can be assumed to be familiar with their uses, prices, and the rough paraphysical concepts by which they operate."
`,Kh=`id: farming
name: Farming
status: placeholder
plane: any
summary: "Crops, livestock and the farming year."
tags: [farming, rural]
category: knowledge
ranked: true
minStats: { memory: 2, endurance: 2 }
effect: "This character has knowledge of farming and can be assumed to be familiar with the technologies, techniques, and lifestyles associated with the practice."
`,qh=`id: filipino-written
name: "Filipino (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, filipino, earth, writing]
category: knowledge
types: [language]
language: filipino
effect: "This character can read and write the Filipino language."
`,Jh=`id: filipino
name: "Filipino (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, filipino, earth]
category: knowledge
types: [language]
language: filipino
effect: "This character is conversational in the Filipino language and can speak it."
`,Yh=`id: french-written
name: "French (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and Centafrica."
tags: [language, french, earth, writing]
category: knowledge
types: [language]
language: french
effect: "This character can read and write the French language."
`,Xh=`id: french
name: "French (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and Centafrica."
tags: [language, french, earth]
category: knowledge
types: [language]
language: french
effect: "This character is conversational in the French language and can speak it."
`,Zh=`id: gambling
name: "Gambling"
status: draft
plane: any
summary: "Games of chance: the odds, the tells, and the cheats."
tags: [gambling, games, underworld]
category: knowledge
ranked: true
minStats: { memory: 2, intuition: 3 }
effect: "This character has knowledge of gambling and can be assumed to be familiar with common games of chance, their odds, and the tricks cheats use."
`,Qh=`id: geography
name: "Geography"
status: draft
plane: any
summary: "The lay of the land: regions, cities, routes and the people who live along them."
tags: [geography, travel, places]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of geography and can be assumed to be familiar with the regions, cities, terrain and routes of the places they have lived and traveled."
`,$h=`id: german-written
name: "German (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, german, earth, writing]
category: knowledge
types: [language]
language: german
effect: "This character can read and write the German language."
`,eg=`id: german
name: "German (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, german, earth]
category: knowledge
types: [language]
language: german
effect: "This character is conversational in the German language and can speak it."
`,tg=`id: glintl
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
`,ng=`id: gujarati-written
name: "Gujarati (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, gujarati, earth, writing]
category: knowledge
types: [language]
language: gujarati
effect: "This character can read and write the Gujarati language."
`,rg=`id: gujarati
name: "Gujarati (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, gujarati, earth]
category: knowledge
types: [language]
language: gujarati
effect: "This character is conversational in the Gujarati language and can speak it."
`,ig=`id: hausa-written
name: "Hausa (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, hausa, earth, writing]
category: knowledge
types: [language]
language: hausa
effect: "This character can read and write the Hausa language."
`,ag=`id: hausa
name: "Hausa (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, hausa, earth]
category: knowledge
types: [language]
language: hausa
effect: "This character is conversational in the Hausa language and can speak it."
`,og=`id: heraldry
name: "Heraldry"
status: draft
plane: any
summary: "The arms, mottos and lineages of noble houses, and what they say about who you are talking to."
tags: [nobility, heraldry, court]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of heraldry and can be assumed to be familiar with the arms, colors and lineages of noble houses and orders."
`,sg=`id: herbalism
name: Herbalism
status: placeholder
plane: any
summary: "Plants and what they do for, and to, people."
tags: [herbs, healing, plants]
category: knowledge
minStats: { memory: 3, intuition: 3 }
effect: "This character has knowledge of herbalism and can be assumed to be familiar with the plants, techniques, and precautions involved with the practice."
`,cg=`id: high-society
name: "High Society"
status: draft
plane: any
summary: "The world of the rich and well-connected: their manners, fashions, scandals and parties."
tags: [society, wealth, social]
category: knowledge
ranked: true
minStats: { memory: 2, empathy: 3 }
effect: "This character has knowledge of high society and can be assumed to be familiar with the manners, fashions, families and scandals of the wealthy and powerful."
`,lg=`id: hindi-written
name: "Hindi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India and Kashgar."
tags: [language, hindi, earth, writing]
category: knowledge
types: [language]
language: hindi
effect: "This character can read and write the Hindi language."
`,ug=`id: hindi
name: "Hindi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India and Kashgar."
tags: [language, hindi, earth]
category: knowledge
types: [language]
language: hindi
effect: "This character is conversational in the Hindi language and can speak it."
`,dg=`id: history
name: "History"
status: draft
plane: any
summary: "The broad sweep of the past: wars, dynasties, discoveries and how the present came to be."
tags: [history, scholar]
category: knowledge
ranked: true
minStats: { memory: 4 }
effect: "This character has knowledge of history and can be assumed to be familiar with the major events, people and turning points of their world’s past."
`,fg=`id: imperial-law
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
`,pg=`id: imperial-politics
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
`,mg=`id: indian-law
name: "Indian Law"
status: draft
plane: earth
region: kingdom-of-india
summary: "The laws of the Kingdom of India, set by its crown and its temples, and how they’re enforced."
tags: [law, india]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Indian law and can be assumed to be familiar with the laws and courts of the Kingdom of India."
`,hg=`id: indian-theology
name: "Indian Theology"
status: draft
plane: earth
region: kingdom-of-india
summary: "The land of 10,000 gods: the faiths of India and the theocracy that rules in their name."
tags: [religion, india]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Indian theology and can be assumed to be familiar with the gods, temples, and rites of the Kingdom of India."
`,gg=`id: indonesian-written
name: "Indonesian (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, indonesian, earth, writing]
category: knowledge
types: [language]
language: indonesian
effect: "This character can read and write the Indonesian language."
`,_g=`id: indonesian
name: "Indonesian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, indonesian, earth]
category: knowledge
types: [language]
language: indonesian
effect: "This character is conversational in the Indonesian language and can speak it."
`,vg=`id: interplanar-law
name: "Interplanar Law"
status: placeholder
plane: earth
summary: "The law of extraplanar beings: the treatment of specimens, the legal status of parasapients, and who counts as a person in which nation."
tags: [law, parasapients, rights, immigration]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 3 }
effect: "This character has knowledge of interplanar law and can be assumed to be familiar with the laws governing extraplanar beings, including the treatment of specimens and the legal status of parasapients."
`,yg=`id: interplanar-relations
name: "Interplanar Relations"
status: placeholder
plane: earth
summary: "The diplomatic and business ties linking nations separated by entire realities."
tags: [diplomacy, politics, trade, parasapients]
category: knowledge
ranked: true
minStats: { memory: 3, persuasion: 3 }
effect: "This character has knowledge of interplanar relations and can be assumed to be familiar with the planes, societies, and laws involved with contact between parasapients and representatives of Earth baseline."
`,bg=`id: italian-written
name: "Italian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, italian, earth, writing]
category: knowledge
types: [language]
language: italian
effect: "This character can read and write the Italian language."
`,xg=`id: italian
name: "Italian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, italian, earth]
category: knowledge
types: [language]
language: italian
effect: "This character is conversational in the Italian language and can speak it."
`,Sg=`id: japanese-written
name: "Japanese (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, japanese, earth, writing]
category: knowledge
types: [language]
language: japanese
effect: "This character can read and write the Japanese language."
`,Cg=`id: japanese
name: "Japanese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, japanese, earth]
category: knowledge
types: [language]
language: japanese
effect: "This character is conversational in the Japanese language and can speak it."
`,wg=`id: javanese-written
name: "Javanese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, javanese, earth, writing]
category: knowledge
types: [language]
language: javanese
effect: "This character can read and write the Javanese language."
`,Tg=`id: javanese
name: "Javanese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, javanese, earth]
category: knowledge
types: [language]
language: javanese
effect: "This character is conversational in the Javanese language and can speak it."
`,Eg=`id: kannada-written
name: "Kannada (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, kannada, earth, writing]
category: knowledge
types: [language]
language: kannada
effect: "This character can read and write the Kannada language."
`,Dg=`id: kannada
name: "Kannada (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, kannada, earth]
category: knowledge
types: [language]
language: kannada
effect: "This character is conversational in the Kannada language and can speak it."
`,Og=`id: karsef
name: Karsef
status: placeholder
plane: isekai
summary: The land across the Corsine Mountains from Dreft.
tags: [karsef, border, foreign]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Kingdom of Karsef and can be assumed to be familiar with its politics, regions, wildlife, and cultures."
`,kg=`id: kashgar-mindworks
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
`,Ag=`id: kashgar
name: "Kashgar"
status: placeholder
plane: earth
region: kashgar
summary: "Kashgar, the largest Ark in the settled systems and the heart of the AI diaspora: its decks, its politics and its people."
tags: [kashgar, ark, ai]
lore: kashgar
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Kashgar and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,jg=`id: kazakh-written
name: "Kazakh (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kazakh, earth, writing]
category: knowledge
types: [language]
language: kazakh
effect: "This character can read and write the Kazakh language."
`,Mg=`id: kazakh
name: "Kazakh (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kazakh, earth]
category: knowledge
types: [language]
language: kazakh
effect: "This character is conversational in the Kazakh language and can speak it."
`,Ng=`id: khmer-written
name: "Khmer (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, khmer, earth, writing]
category: knowledge
types: [language]
language: khmer
effect: "This character can read and write the Khmer language."
`,Pg=`id: khmer
name: "Khmer (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, khmer, earth]
category: knowledge
types: [language]
language: khmer
effect: "This character is conversational in the Khmer language and can speak it."
`,Fg=`id: kinyarwanda-written
name: "Kinyarwanda (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, kinyarwanda, earth, writing]
category: knowledge
types: [language]
language: kinyarwanda
effect: "This character can read and write the Kinyarwanda language."
`,Ig=`id: kinyarwanda
name: "Kinyarwanda (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, kinyarwanda, earth]
category: knowledge
types: [language]
language: kinyarwanda
effect: "This character is conversational in the Kinyarwanda language and can speak it."
`,Lg=`id: korean-written
name: "Korean (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, korean, earth, writing]
category: knowledge
types: [language]
language: korean
effect: "This character can read and write the Korean language."
`,Rg=`id: korean
name: "Korean (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, korean, earth]
category: knowledge
types: [language]
language: korean
effect: "This character is conversational in the Korean language and can speak it."
`,zg=`id: kyrgyz-written
name: "Kyrgyz (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kyrgyz, earth, writing]
category: knowledge
types: [language]
language: kyrgyz
effect: "This character can read and write the Kyrgyz language."
`,Bg=`id: kyrgyz
name: "Kyrgyz (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, kyrgyz, earth]
category: knowledge
types: [language]
language: kyrgyz
effect: "This character is conversational in the Kyrgyz language and can speak it."
`,Vg=`id: lao-written
name: "Lao (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, lao, earth, writing]
category: knowledge
types: [language]
language: lao
effect: "This character can read and write the Lao language."
`,Hg=`id: lao
name: "Lao (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, lao, earth]
category: knowledge
types: [language]
language: lao
effect: "This character is conversational in the Lao language and can speak it."
`,Ug=`id: law-enforcement
name: "Law Enforcement"
status: draft
plane: any
summary: "How police and guards work: procedures, patrols, evidence and arrests."
tags: [law, police, enforcement]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of law enforcement and can be assumed to be familiar with police and guard procedures, how evidence is handled, and how arrests and investigations proceed."
`,Wg=`id: legal-systems
name: "Legal Systems"
status: draft
plane: any
summary: "How laws are made, courts run, and cases won or lost."
tags: [law, courts]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3 }
effect: "This character has knowledge of legal systems and can be assumed to be familiar with how laws are written and enforced, how courts work, and common legal procedures."
`,Gg=`id: lingala-written
name: "Lingala (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, lingala, earth, writing]
category: knowledge
types: [language]
language: lingala
effect: "This character can read and write the Lingala language."
`,Kg=`id: lingala
name: "Lingala (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, lingala, earth]
category: knowledge
types: [language]
language: lingala
effect: "This character is conversational in the Lingala language and can speak it."
`,qg=`id: liquid-democracy
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
`,Jg=`id: literature
name: "Literature"
status: draft
plane: any
summary: "Books, poems, plays and stories, and the ideas they carry."
tags: [literature, culture, scholar]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of literature and can be assumed to be familiar with famous works, authors, forms and the ideas they made popular."
`,Yg=`id: local-folklore
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
`,Xg=`id: local-history
name: "Local History"
status: draft
plane: any
summary: "The history of one local region: its names, places and what happened there."
tags: [history, local, site-example]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences."
`,Zg=`id: magic-on-isekai
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
`,Qg=`id: malay-written
name: "Malay (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, malay, earth, writing]
category: knowledge
types: [language]
language: malay
effect: "This character can read and write the Malay language."
`,$g=`id: malay
name: "Malay (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, malay, earth]
category: knowledge
types: [language]
language: malay
effect: "This character is conversational in the Malay language and can speak it."
`,e_=`id: malayalam-written
name: "Malayalam (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, malayalam, earth, writing]
category: knowledge
types: [language]
language: malayalam
effect: "This character can read and write the Malayalam language."
`,t_=`id: malayalam
name: "Malayalam (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, malayalam, earth]
category: knowledge
types: [language]
language: malayalam
effect: "This character is conversational in the Malayalam language and can speak it."
`,n_=`id: mandarin-written
name: "Mandarin (Written)"
status: placeholder
plane: earth
summary: "The language of the Empire of China."
tags: [language, mandarin, earth, writing]
category: knowledge
types: [language]
language: mandarin
effect: This character can read and write the Mandarin language.
`,r_=`id: mandarin
name: "Mandarin (Spoken)"
status: placeholder
plane: earth
summary: "The language of the Empire of China."
tags: [language, mandarin, earth]
category: knowledge
types: [language]
language: mandarin
effect: This character is conversational in the Mandarin language and can speak it.
`,i_=`id: marathi-written
name: "Marathi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, marathi, earth, writing]
category: knowledge
types: [language]
language: marathi
effect: "This character can read and write the Marathi language."
`,a_=`id: marathi
name: "Marathi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, marathi, earth]
category: knowledge
types: [language]
language: marathi
effect: "This character is conversational in the Marathi language and can speak it."
`,o_=`id: mathematics
name: "Mathematics"
status: placeholder
plane: any
summary: "Mathematics and its fields of study."
tags: [mathematics, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of mathematics and can be assumed to be familiar with mathematical fields of study."
`,s_=`id: medicine
name: "Medicine"
status: draft
plane: any
summary: "How bodies work, how they fail, and how to treat them."
tags: [medicine, healing, science]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3 }
effect: "This character has knowledge of medicine and can be assumed to be familiar with anatomy, common illnesses and injuries, and how they are treated."
`,c_=`id: metallurgy
name: "Metallurgy"
status: draft
plane: any
summary: "Metals and alloys: how they are smelted, worked and tempered."
tags: [metal, smithing, craft]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of metallurgy and can be assumed to be familiar with common metals and alloys and how they are smelted, worked and tempered."
`,l_=`id: military-tactics
name: "Military Tactics"
status: draft
plane: any
summary: "How battles are fought: formations, maneuvers and command."
tags: [military, tactics, combat]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of military tactics and can be assumed to be familiar with formations, maneuvers, chains of command and how battles are fought."
`,u_=`id: mongolian-written
name: "Mongolian (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, mongolian, earth, writing]
category: knowledge
types: [language]
language: mongolian
effect: "This character can read and write the Mongolian language."
`,d_=`id: mongolian
name: "Mongolian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, mongolian, earth]
category: knowledge
types: [language]
language: mongolian
effect: "This character is conversational in the Mongolian language and can speak it."
`,f_=`id: monsters-of-isekai
name: Monsters of Isekai
status: placeholder
plane: isekai
summary: The monsters of Isekai and how to deal with them.
tags: [monsters, hunting]
lore: isekai-monsters
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the monsters of Isekai and can be assumed to be familiar with their names, territories, the goods that they can provide, and their strengths and weaknesses."
`,p_=`id: mountaineering
name: Mountaineering
status: placeholder
plane: any
summary: "Climbing, and surviving, in high mountains."
tags: [mountains, climbing, survival]
category: knowledge
ranked: true
minStats: { memory: 3, endurance: 2 }
effect: "This character has knowledge of mountaineering and can be assumed to be familiar with the preparation, dangers, and survival craft involved in trekking mountains."
`,m_=`id: music
name: "Music"
status: draft
plane: any
summary: "Musical theory, history and repertoire."
tags: [music, culture, performance]
category: knowledge
ranked: true
minStats: { memory: 2, intuition: 2 }
effect: "This character has knowledge of music and can be assumed to be familiar with musical theory, well-known pieces and the traditions they come from."
`,h_=`id: navigation
name: "Navigation"
status: draft
plane: any
summary: "Finding the way: maps, stars, instruments and charts."
tags: [navigation, travel, maps]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 3 }
effect: "This character has knowledge of navigation and can be assumed to be familiar with reading maps, charts, stars and instruments, and plotting a course."
`,g_=`id: nepali-written
name: "Nepali (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, nepali, earth, writing]
category: knowledge
types: [language]
language: nepali
effect: "This character can read and write the Nepali language."
`,__=`id: nepali
name: "Nepali (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, nepali, earth]
category: knowledge
types: [language]
language: nepali
effect: "This character is conversational in the Nepali language and can speak it."
`,v_=`id: new-columbia
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
`,y_=`id: new-persia
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
`,b_=`id: noble-houses-of-dreft
name: Noble Houses of Dreft
status: placeholder
plane: isekai
region: dreft
summary: "Dreft’s noble houses, their histories and their feuds."
tags: [nobility, politics, houses]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the noble houses of Dreft and can be assumed to be familiar with their histories and feuds."
`,x_=`id: odia-written
name: "Odia (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, odia, earth, writing]
category: knowledge
types: [language]
language: odia
effect: "This character can read and write the Odia language."
`,S_=`id: odia
name: "Odia (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, odia, earth]
category: knowledge
types: [language]
language: odia
effect: "This character is conversational in the Odia language and can speak it."
`,C_=`id: orc-society
name: "Orc Society"
status: draft
plane: isekai
summary: "The customs, institutions and traditions of Orc societies."
tags: [orcs, culture, site-example]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of orc customs and can be assumed to be familiar with the institutions and traditions of Orc societies."
`,w_=`id: oromo-written
name: "Oromo (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, oromo, earth, writing]
category: knowledge
types: [language]
language: oromo
effect: "This character can read and write the Oromo language."
`,T_=`id: oromo
name: "Oromo (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, oromo, earth]
category: knowledge
types: [language]
language: oromo
effect: "This character is conversational in the Oromo language and can speak it."
`,E_=`id: paraarcheology
name: "Paraarcheology"
status: placeholder
plane: earth
summary: "The ruins and remains that parasapient civilizations have left behind on other planes."
tags: [parabiology, archeology, history, ruins]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of paraarcheology and can be assumed to be familiar with the skills, places, histories, and planar details associated with the study of archeology on other planes."
`,D_=`id: parabiology
name: "Parabiology"
status: placeholder
plane: earth
summary: "The study of extraplanar life in all its forms, and why so many planes hold any at all."
tags: [parabiology, science, life]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, empathy: 2 }
effect: "This character has knowledge of parabiology and can be assumed to be familiar with the living organisms of other planes, and their vital processes, structures, functions, and growth."
`,O_=`id: paraflora
name: "Paraflora"
status: placeholder
plane: earth
summary: "Extraplanar plants and the stranger things that fill a plant’s role, from flora floating in a sea of light on down."
tags: [parabiology, plants, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, empathy: 2 }
effect: "This character has knowledge of paraflora and can be assumed to be familiar with extraplanar plants, including their ecologies, growth patterns, and the rough paraphysical concepts by which they may operate."
`,k_=`id: paraphysics
name: "Paraphysics"
status: placeholder
plane: earth
summary: "The science The Gift opened up: the theories that skirt the old limits of nature."
tags: [paraphysics, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, intuition: 2 }
effect: "This character has knowledge of paraphysics and can be assumed to be familiar with paraphysical concepts, paraphysical effects, and axiomatic sciences."
`,A_=`id: parasapient-medicine
name: "Parasapient Medicine"
status: draft
plane: earth
summary: "Treating parasapient patients, whose bodies rarely work the way Earth Baseline medicine expects."
tags: [medicine, parasapients, parabiology]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, empathy: 2 }
effect: "This character has knowledge of parasapient medicine and can be assumed to be familiar with the anatomy and common ailments of the parasapient peoples known to the settled systems, and how to treat them."
`,j_=`id: parasapients
name: "Parasapients"
status: placeholder
plane: earth
summary: "The sapient peoples of other planes: their bodies, their cultures, and how they live alongside humanity."
tags: [parabiology, parasapients, cultures, people]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 3 }
effect: "This character has knowledge of parasapients and can be assumed to be familiar with extraplanar sapients, including their cultures, diplomatic relations, and the rough paraphysical concepts by which they may operate."
`,M_=`id: parazoology
name: "Parazoology"
status: placeholder
plane: earth
summary: "Extraplanar animals: how they live, what they eat, and which ones eat people."
tags: [parabiology, animals, creatures, science]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2, intuition: 2 }
effect: "This character has knowledge of parazoology and can be assumed to be familiar with extraplanar creatures, including their habitats, needs, and the rough paraphysical concepts by which they may operate."
`,N_=`id: pataliputra
name: "Pataliputra"
status: draft
plane: earth
region: kingdom-of-india
summary: "295/c/29 - “Pataliputra,” India’s planar capital and the largest planar colony ever attempted."
tags: [india, planar, colony]
lore: pataliputra
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Pataliputra and can be assumed to be familiar with the peoples, places, and customs of India’s planar capital."
`,P_=`id: pathology
name: "Pathology"
status: draft
plane: any
summary: "Disease: how it spreads, how it shows itself, and how it is stopped."
tags: [medicine, disease, contagion]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3, intuition: 2 }
effect: "This character has knowledge of pathology and can be assumed to be familiar with common diseases, how they spread and present, and how outbreaks are contained."
`,F_=`id: persian-written
name: "Persian (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, persian, earth, writing]
category: knowledge
types: [language]
language: persian
effect: "This character can read and write the Persian language."
`,I_=`id: persian
name: "Persian (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, persian, earth]
category: knowledge
types: [language]
language: persian
effect: "This character is conversational in the Persian language and can speak it."
`,L_=`id: pharmacology
name: "Pharmacology"
status: draft
plane: any
summary: "Drugs and remedies: what they do, how much is safe, and what they do together."
tags: [medicine, drugs, pharmacology]
category: knowledge
ranked: true
minStats: { memory: 4, logic: 3 }
effect: "This character has knowledge of pharmacology and can be assumed to be familiar with common drugs and remedies, their doses, side effects and interactions."
`,R_=`id: physics
name: "Physics"
status: draft
plane: any
summary: "How the physical world works: motion, energy, light and matter."
tags: [science, physics]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 4 }
effect: "This character has knowledge of physics and can be assumed to be familiar with motion, energy, forces, light and matter, and the math that describes them."
`,z_=`id: planar-exploration
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
`,B_=`id: polish-written
name: "Polish (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, polish, earth, writing]
category: knowledge
types: [language]
language: polish
effect: "This character can read and write the Polish language."
`,V_=`id: polish
name: "Polish (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, polish, earth]
category: knowledge
types: [language]
language: polish
effect: "This character is conversational in the Polish language and can speak it."
`,H_=`id: politics
name: "Politics"
status: draft
plane: any
summary: "How power works: factions, alliances, elections, rivalries and who owes whom."
tags: [politics, power, intrigue]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 3 }
effect: "This character has knowledge of politics and can be assumed to be familiar with how power is won, held and traded, and the factions and figures that matter."
`,U_=`id: port-herminst
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
`,W_=`id: ports-and-stations
name: "Ports and Stations"
status: placeholder
plane: earth
summary: "How docks, customs and station traffic control work, and how to get through them."
tags: [ports, stations, space]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the ports and stations of the settled systems and can be assumed to be familiar with the customs, regulations, industries, ships, and docks involved in trade."
`,G_=`id: portuguese-written
name: "Portuguese (Written)"
status: draft
plane: earth
summary: "One of the languages of the Lunar Industrial Syndicate and its former South American nations."
tags: [language, portuguese, earth, writing]
category: knowledge
types: [language]
language: portuguese
effect: "This character can read and write the Portuguese language."
`,K_=`id: portuguese
name: "Portuguese (Spoken)"
status: draft
plane: earth
summary: "One of the languages of the Lunar Industrial Syndicate and its former South American nations."
tags: [language, portuguese, earth]
category: knowledge
types: [language]
language: portuguese
effect: "This character is conversational in the Portuguese language and can speak it."
`,q_=`id: psychology
name: "Psychology"
status: draft
plane: any
summary: "The mind: how it works, how it breaks, and how it heals."
tags: [medicine, mind, psychology]
category: knowledge
ranked: true
minStats: { memory: 3, empathy: 4 }
effect: "This character has knowledge of psychology and can be assumed to be familiar with how minds work, common mental illnesses, and the treatment of trauma and stress."
`,J_=`id: punjabi-written
name: "Punjabi (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, punjabi, earth, writing]
category: knowledge
types: [language]
language: punjabi
effect: "This character can read and write the Punjabi language."
`,Y_=`id: punjabi
name: "Punjabi (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, punjabi, earth]
category: knowledge
types: [language]
language: punjabi
effect: "This character is conversational in the Punjabi language and can speak it."
`,X_=`id: robotics
name: "Robotics"
status: placeholder
plane: earth
summary: "Drones, chassis and the machines that do the settled systems’ work."
tags: [robotics, technology, machines]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of robotics and can be assumed to be familiar with the technologies, businesses, and laws pertaining to it."
`,Z_=`id: romanian-written
name: "Romanian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, romanian, earth, writing]
category: knowledge
types: [language]
language: romanian
effect: "This character can read and write the Romanian language."
`,Q_=`id: romanian
name: "Romanian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union."
tags: [language, romanian, earth]
category: knowledge
types: [language]
language: romanian
effect: "This character is conversational in the Romanian language and can speak it."
`,$_=`id: russian-written
name: "Russian (Written)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and the Ural Federation."
tags: [language, russian, earth, writing]
category: knowledge
types: [language]
language: russian
effect: "This character can read and write the Russian language."
`,ev=`id: russian
name: "Russian (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Stellar Democratic Union and the Ural Federation."
tags: [language, russian, earth]
category: knowledge
types: [language]
language: russian
effect: "This character is conversational in the Russian language and can speak it."
`,tv=`id: sdu-law
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
`,nv=`id: seafaring
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
`,rv=`id: security-systems
name: "Security Systems"
status: draft
plane: earth
summary: "Locks, alarms, cameras and checkpoints, and how they are run and beaten."
tags: [security, technology, surveillance]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of security systems and can be assumed to be familiar with common locks, alarms, surveillance and access controls, and their weaknesses."
`,iv=`id: shipping-lanes
name: "Shipping Lanes"
status: placeholder
plane: earth
summary: "The routes, schedules and checkpoints of cargo traffic between stations, ships and surfaces."
tags: [shipping, trade, space]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the shipping lanes between stations, ships, and surfaces and can be assumed to be familiar with their routes, schedules, and checkpoints."
`,av=`id: sinhala-written
name: "Sinhala (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, sinhala, earth, writing]
category: knowledge
types: [language]
language: sinhala
effect: "This character can read and write the Sinhala language."
`,ov=`id: sinhala
name: "Sinhala (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, sinhala, earth]
category: knowledge
types: [language]
language: sinhala
effect: "This character is conversational in the Sinhala language and can speak it."
`,sv=`id: somali-written
name: "Somali (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, somali, earth, writing]
category: knowledge
types: [language]
language: somali
effect: "This character can read and write the Somali language."
`,cv=`id: somali
name: "Somali (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica."
tags: [language, somali, earth]
category: knowledge
types: [language]
language: somali
effect: "This character is conversational in the Somali language and can speak it."
`,lv=`# Lore for Sorellion is still coming soon on the site.
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
`,uv=`id: southeast-asia
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
`,dv=`id: spacefaring
name: "Spacefaring"
status: draft
plane: earth
summary: "Living and working in space: vacuum, zero gravity, airlocks and life support."
tags: [space, station, survival]
category: knowledge
ranked: true
minStats: { memory: 3, intuition: 2 }
effect: "This character has knowledge of spacefaring and can be assumed to be familiar with life in vacuum and zero gravity, airlocks, suits, life support, and what to do when they fail."
`,fv=`id: spanish-written
name: "Spanish (Written)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, spanish, earth, writing]
category: knowledge
types: [language]
language: spanish
effect: This character can read and write the Spanish language.
`,pv=`id: spanish
name: "Spanish (Spoken)"
status: placeholder
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, spanish, earth]
category: knowledge
types: [language]
language: spanish
effect: This character is conversational in the Spanish language and can speak it.
`,mv=`id: starships
name: "Starships"
status: draft
plane: earth
summary: "The ships of the settled systems: their classes, makers, capabilities and quirks."
tags: [starships, space, technology]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 2 }
effect: "This character has knowledge of starships and can be assumed to be familiar with the classes, makers, capabilities and common faults of the starships of the settled systems."
`,hv=`id: succession-law
name: Succession Law
status: placeholder
plane: isekai
region: dreft
summary: "Who inherits what, and who has a claim to the crown."
tags: [law, succession, nobility]
category: knowledge
minStats: { memory: 6, persuasion: 2 }
effect: "This character has knowledge of succession law and can be assumed to be familiar with who inherits what in Dreft and who has a claim to the crown."
`,gv=`id: swahili-written
name: "Swahili (Written)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, swahili, earth, writing]
category: knowledge
types: [language]
language: swahili
effect: "This character can read and write the Swahili language."
`,_v=`id: swahili
name: "Swahili (Spoken)"
status: draft
plane: earth
summary: "Spoken in Centafrica and Xanthus."
tags: [language, swahili, earth]
category: knowledge
types: [language]
language: swahili
effect: "This character is conversational in the Swahili language and can speak it."
`,vv=`id: tamil-written
name: "Tamil (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, tamil, earth, writing]
category: knowledge
types: [language]
language: tamil
effect: "This character can read and write the Tamil language."
`,yv=`id: tamil
name: "Tamil (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, tamil, earth]
category: knowledge
types: [language]
language: tamil
effect: "This character is conversational in the Tamil language and can speak it."
`,bv=`id: telugu-written
name: "Telugu (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, telugu, earth, writing]
category: knowledge
types: [language]
language: telugu
effect: "This character can read and write the Telugu language."
`,xv=`id: telugu
name: "Telugu (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, telugu, earth]
category: knowledge
types: [language]
language: telugu
effect: "This character is conversational in the Telugu language and can speak it."
`,Sv=`id: tetra-frontiers-co
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
`,Cv=`id: tetra
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
`,wv=`id: thai-written
name: "Thai (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, thai, earth, writing]
category: knowledge
types: [language]
language: thai
effect: "This character can read and write the Thai language."
`,Tv=`id: thai
name: "Thai (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, thai, earth]
category: knowledge
types: [language]
language: thai
effect: "This character is conversational in the Thai language and can speak it."
`,Ev=`id: the-bureau-of-planar-management
name: "The Bureau of Planar Management"
status: draft
plane: earth
summary: "The Bureau that licenses, inspects and polices planar exploration across the settled systems."
tags: [bureau, planes, law, tetra]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Bureau of Planar Management and can be assumed to be familiar with its regulations, inspections, offices and officers."
`,Dv=`id: the-chinese-empire
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
`,Ov=`id: the-corporate-syndicates
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
`,kv=`id: the-corsine-pass
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
`,Av=`id: the-diplomatic-wing
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
`,jv=`id: the-drovus-empire
name: The Drovus Empire
status: placeholder
plane: isekai
summary: The empire that absorbed the Sunrise Princedoms.
tags: [drovus, empire, foreign]
lore: drovus-empire
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Drovus Empire and can be assumed to be familiar with its politics, regions, wildlife, and cultures."
`,Mv=`id: the-explorers-lodge
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
`,Nv=`id: the-free-american-states
name: "The Free American States"
status: draft
plane: earth
summary: "The fractious free-trade zone of independent states between the American Empire and the Union of Texas."
tags: [free-american-states, earth, trade]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Free American States and can be assumed to be familiar with its member states, its trade and its border disputes."
`,Pv=`id: the-imperial-military
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
`,Fv=`id: the-kingdom-of-india
name: "The Kingdom of India"
status: draft
plane: earth
region: kingdom-of-india
summary: "The Kingdom of India: its royal house, its temples and the regreening of the subcontinent."
tags: [india, politics]
lore: kingdom-of-india
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Kingdom of India and can be assumed to be familiar with its customs, politics, and territories."
`,Iv=`id: the-kings-woods
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
`,Lv=`id: the-lunar-industrial-syndicate
name: "The Lunar Industrial Syndicate"
status: draft
plane: earth
summary: "The Eighth Lunar Industrial Syndicate: a business cartel grown into a nation, with investors and citizen shareholders."
tags: [lunar-industrial-syndicate, luna, corporate]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Lunar Industrial Syndicate and can be assumed to be familiar with its board, holdings, territories and corporate politics."
`,Rv=`id: the-martian-association
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
`,zv=`id: the-stellar-democratic-union
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
`,Bv=`id: the-sunrise-princedoms
name: The Sunrise Princedoms
status: placeholder
plane: isekai
summary: "The princedoms Drovus absorbed, as they were."
tags: [sunrise, princedoms, refugee]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Sunrise Princedoms and can be assumed to be familiar with their politics, regions, wildlife, and cultures as they were before Drovus absorbed them."
`,Vv=`id: the-switch-port
name: The Switch Port
status: placeholder
plane: isekai
region: dreft
summary: "The switch port at Castle Tetra, where Dreft meets the settled systems."
tags: [switch-port, tetra, caravan]
lore: tetra-switch-port
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the switch port at Castle Tetra and can be assumed to be familiar with its peoples, places, and customs."
`,Hv=`id: the-union-of-texas
name: "The Union of Texas"
status: placeholder
plane: earth
summary: "The breakaway states the Empire still faces across a tense border."
tags: [texas, foreign, politics]
lore: union-of-texas
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the Union of Texas and can be assumed to be familiar with its customs, politics, and territories."
`,Uv=`id: the-united-nations
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
`,Wv=`id: the-ural-federation
name: "The Ural Federation"
status: draft
plane: earth
region: ural-federation
summary: "The Ural Federation: hundreds of tribal statelets across the steppe and the thawed Siberian breadbasket."
tags: [ural-federation, politics]
lore: ural-federation
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of the Ural Federation and can be assumed to be familiar with its customs, politics, and territories."
`,Gv=`id: theater
name: "Theater"
status: draft
plane: any
summary: "Plays, performers, stagecraft and the people who put on a show."
tags: [theater, performance, culture]
category: knowledge
ranked: true
minStats: { memory: 2, persuasion: 2 }
effect: "This character has knowledge of theater and can be assumed to be familiar with famous plays and performers, stagecraft, and how a performance is put together."
`,Kv=`id: thieves-cant
name: "Thieves' Cant (Spoken)"
status: draft
plane: any
summary: "The coded slang criminals use to talk business in plain hearing."
tags: [language, crime, underworld]
category: knowledge
types: [language]
language: thieves-cant
effect: "This character can speak and understand Thieves' Cant, passing hidden messages in ordinary conversation."
`,qv=`id: toxicology
name: "Toxicology"
status: draft
plane: any
summary: "Poisons, venoms and their antidotes."
tags: [medicine, poison, antidotes]
category: knowledge
ranked: true
minStats: { memory: 3, logic: 3 }
effect: "This character has knowledge of toxicology and can be assumed to be familiar with common poisons and venoms, their symptoms and their antidotes."
`,Jv=`id: trade-guilds
name: "Trade Guilds"
status: draft
plane: any
summary: "The guilds and unions of craftsmen and traders: their ranks, rules and rivalries."
tags: [guild, craft, trade]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of trade guilds and can be assumed to be familiar with how craft and trade guilds are organized, their ranks, rules and the masters who run them."
`,Yv=`id: trade-law
name: Trade Law
status: placeholder
plane: isekai
region: dreft
summary: "The rules of trade in Dreft, and their loopholes."
tags: [law, trade, merchant]
category: knowledge
minStats: { memory: 3, persuasion: 2 }
effect: "This character has knowledge of Dreftian trade law and can be assumed to be familiar with the rules of trade in Dreft and their loopholes."
`,Xv=`id: trade-roads
name: Trade Roads
status: placeholder
plane: isekai
region: dreft
summary: The roads trade travels across Dreft.
tags: [trade, roads, caravan]
category: knowledge
minStats: { memory: 3 }
effect: "This character has knowledge of the trade roads of Dreft and can be assumed to be familiar with their routes, products, and dangers."
`,Zv=`id: turkish-written
name: "Turkish (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, turkish, earth, writing]
category: knowledge
types: [language]
language: turkish
effect: "This character can read and write the Turkish language."
`,Qv=`id: turkish
name: "Turkish (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, turkish, earth]
category: knowledge
types: [language]
language: turkish
effect: "This character is conversational in the Turkish language and can speak it."
`,$v=`id: ukrainian-written
name: "Ukrainian (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, ukrainian, earth, writing]
category: knowledge
types: [language]
language: ukrainian
effect: "This character can read and write the Ukrainian language."
`,ey=`id: ukrainian
name: "Ukrainian (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, ukrainian, earth]
category: knowledge
types: [language]
language: ukrainian
effect: "This character is conversational in the Ukrainian language and can speak it."
`,ty=`id: union-politics
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
`,ny=`id: ural-tribal-law
name: "Ural Tribal Law"
status: draft
plane: earth
region: ural-federation
summary: "The customs and tribal laws of the Ural Federation’s statelets."
tags: [law, ural-federation]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ural tribal law and can be assumed to be familiar with the customs and laws of the Ural Federation’s statelets."
`,ry=`id: urdu-written
name: "Urdu (Written)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, urdu, earth, writing]
category: knowledge
types: [language]
language: urdu
effect: "This character can read and write the Urdu language."
`,iy=`id: urdu
name: "Urdu (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Kingdom of India."
tags: [language, urdu, earth]
category: knowledge
types: [language]
language: urdu
effect: "This character is conversational in the Urdu language and can speak it."
`,ay=`id: uyghur-written
name: "Uyghur (Written)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, uyghur, earth, writing]
category: knowledge
types: [language]
language: uyghur
effect: "This character can read and write the Uyghur language."
`,oy=`id: uyghur
name: "Uyghur (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Ural Federation."
tags: [language, uyghur, earth]
category: knowledge
types: [language]
language: uyghur
effect: "This character is conversational in the Uyghur language and can speak it."
`,sy=`id: vietnamese-written
name: "Vietnamese (Written)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, vietnamese, earth, writing]
category: knowledge
types: [language]
language: vietnamese
effect: "This character can read and write the Vietnamese language."
`,cy=`id: vietnamese
name: "Vietnamese (Spoken)"
status: draft
plane: earth
summary: "Spoken in the Empire of China."
tags: [language, vietnamese, earth]
category: knowledge
types: [language]
language: vietnamese
effect: "This character is conversational in the Vietnamese language and can speak it."
`,ly=`id: weapons
name: "Weapons"
status: draft
plane: any
summary: "Weapons of every kind: how they work, what they do, and how they are made and cared for."
tags: [weapons, combat, military]
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of weapons and can be assumed to be familiar with common weapons, how they work and are maintained, and what they can do."
`,uy=`id: wilderness-lore
name: "Wilderness Lore"
status: draft
plane: any
summary: "The wild: terrain, weather, edible plants and how not to die out there."
tags: [wilderness, survival, nature]
category: knowledge
ranked: true
minStats: { memory: 2, intuition: 3 }
effect: "This character has knowledge of the wilderness and can be assumed to be familiar with terrain, weather, edible and dangerous plants, and the signs that keep travelers alive."
`,dy=`id: xanthus
name: "Xanthus"
status: draft
plane: earth
region: xanthus
summary: "Xanthus, the free Ark built around an iron asteroid, and the micro-nations that appear in its wake."
tags: [xanthus, ark]
lore: xanthus
category: knowledge
ranked: true
minStats: { memory: 3 }
effect: "This character has knowledge of Ark Xanthus and can be assumed to be familiar with the peoples, places, and customs aboard it."
`,fy=`id: yoruba-written
name: "Yoruba (Written)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, yoruba, earth, writing]
category: knowledge
types: [language]
language: yoruba
effect: "This character can read and write the Yoruba language."
`,py=`id: yoruba
name: "Yoruba (Spoken)"
status: draft
plane: earth
summary: "One of the common languages of Earth Baseline."
tags: [language, yoruba, earth]
category: knowledge
types: [language]
language: yoruba
effect: "This character is conversational in the Yoruba language and can speak it."
`,my=`id: yutu
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
`,hy=`id: zhulong
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
`,gy=`id: possessed-by-a-spirit
name: "Possessed By A Spirit"
status: draft
plane: any
summary: "Lost control of their body to a supernatural entity."
tags: [supernatural, spirit, possession, site-example]
category: other
conveyed: true
temporary: "lost when the character is no longer possessed"
effect: "This character has lost control over their body to a supernatural entity. If this is a player character then how that player or the GM continue to operate the character is at the GM's discretion, as is the nature of the entity that has possessed them. This character no longer accrues experience. While under the control of this entity the character's Mental and Social stats are considered (Mental 8) (Logic 8) (Intuition 10) (Memory 9) (Social 7) (Empathy 3) (Persuasion 9) (Demeanor 12) for most purposes. Condition Traits that modify these stats are still in effect unless otherwise stated. If the character had Traits with minimum stat values or had Ranks in Traits they no longer qualify for, then those Traits are to be ignored. The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum stats required for them. While possessed, this character gains Supernatural, Spirit Touched, Telekinesis(1), Inured to pain, Fearless, Ghost Sight, Knowledge: The Supernatural (1)."
`,_y=`id: advanced-cooking
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
`,vy=`id: advanced-potion-mixing
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
`,yy=`id: ambusher
name: Ambusher
status: placeholder
plane: any
summary: Setting and springing ambushes.
tags: [ambush, hunting, combat]
category: skill
effect: Placeholder. Effect not yet written.
`,by=`id: animal-husbandry
name: "Animal Husbandry"
status: draft
plane: any
summary: "Raising, feeding and caring for livestock and working animals."
tags: [animals, farming, care]
category: skill
ranked: true
minStats: { empathy: 3, endurance: 2, intuition: 2 }
effect: "This character is capable of raising, feeding and caring for livestock and working animals without a skill check. Rank *10 added to skill check rolls involving handling and caring for animals."
`,xy=`id: appraisal
name: Appraisal
status: placeholder
plane: any
summary: Judging what something is worth.
tags: [trade, valuation, merchant]
category: skill
effect: Placeholder. Effect not yet written.
`,Sy=`id: artist-painting
name: "Artist: Painting"
status: draft
plane: any
summary: "Painting, from portraits to murals."
tags: [art, painting, craft]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, memory: 2 }
effect: "This character is capable of painting a competent likeness or scene without a skill check. Rank *10 added to skill check rolls involving painting."
`,Cy=`id: artist-sculpture
name: "Artist: Sculpture"
status: draft
plane: any
summary: "Shaping stone, clay, wood or metal into art."
tags: [art, sculpture, craft]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, power: 2 }
effect: "This character is capable of sculpting a competent figure in stone, clay or wood without a skill check. Rank *10 added to skill check rolls involving sculpture."
`,wy=`id: cargo-handling
name: "Cargo Handling"
status: placeholder
plane: any
summary: "Loading, securing and moving freight, in gravity or out of it."
tags: [cargo, shipping, labor]
category: skill
effect: Placeholder. Effect not yet written.
`,Ty=`id: concealment
name: Concealment
status: placeholder
plane: any
summary: "Hiding things, and yourself."
tags: [stealth, hiding]
category: skill
effect: Placeholder. Effect not yet written.
`,Ey=`id: courtly-manners
name: Courtly Manners
status: placeholder
plane: any
summary: Moving gracefully through noble society.
tags: [court, nobility, social]
category: skill
effect: Placeholder. Effect not yet written.
`,Dy=`id: craft-leatherworking
name: "Craft: Leatherworking"
status: draft
plane: any
summary: "Tanning hides and making leather goods and armor."
tags: [craft, leather, armor]
category: skill
ranked: true
minStats: { grace: 3, endurance: 2, intuition: 2 }
effect: "This character is capable of tanning hides and making leather goods and simple leather armor without a skill check. Rank *10 added to skill check rolls involving leatherworking."
`,Oy=`id: craft-masonry
name: "Craft: Masonry"
status: draft
plane: any
summary: "Cutting, dressing and laying stone."
tags: [craft, masonry, building]
category: skill
ranked: true
minStats: { power: 4, endurance: 3, logic: 2 }
effect: "This character is capable of cutting and laying stone for walls, foundations and simple structures without a skill check. Rank *10 added to skill check rolls involving masonry."
`,ky=`id: craft-smithing
name: "Craft: Smithing"
status: draft
plane: any
summary: "Forging and repairing metal tools, fittings and weapons."
tags: [craft, smithing, metal]
category: skill
ranked: true
minStats: { power: 4, endurance: 3, grace: 2 }
effect: "This character is capable of forging and repairing simple metal tools, fittings and weapons without a skill check. Rank *10 added to skill check rolls involving smithing."
`,Ay=`id: disguise
name: "Disguise"
status: draft
plane: any
summary: "Passing as someone else, through costume, makeup and manner."
tags: [disguise, deception, spy]
category: skill
ranked: true
minStats: { demeanor: 4, grace: 2, intuition: 2 }
effect: "This character is capable of putting together a convincing simple disguise without a skill check. Rank *10 added to skill check rolls involving disguise and impersonation."
`,jy=`id: excavation
name: "Excavation"
status: placeholder
plane: any
summary: "Digging up the past carefully enough that there’s something left to study."
tags: [archeology, fieldwork, ruins]
category: skill
effect: Placeholder. Effect not yet written.
`,My=`id: expert-pilot
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
`,Ny=`id: field-sampling
name: "Field Sampling"
status: placeholder
plane: any
summary: "Collecting, labelling and preserving samples in the field, wherever the field happens to be."
tags: [parabiology, science, fieldwork, survey]
category: skill
effect: Placeholder. Effect not yet written.
`,Py=`id: folk-remedies
name: Folk Remedies
status: placeholder
plane: any
summary: Treating ailments with folk cures.
tags: [healing, folk, herbs]
category: skill
effect: Placeholder. Effect not yet written.
`,Fy=`id: haggler
name: Haggler
status: placeholder
plane: any
summary: Getting a better price.
tags: [trade, bargaining, merchant]
category: skill
effect: Placeholder. Effect not yet written.
`,Iy=`id: incantation
name: Incantation
status: placeholder
plane: isekai
summary: Casting spells by incantation.
tags: [magic, spellcasting]
category: skill
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
effect: Placeholder. Effect not yet written.
`,Ly=`id: intimidation
name: "Intimidation"
status: draft
plane: any
summary: "Getting what you want through threats and presence."
tags: [intimidation, social, threat]
category: skill
ranked: true
minStats: { demeanor: 3, power: 3 }
effect: "This character is capable of making a credible threat without a skill check. Rank *10 added to skill check rolls involving intimidation."
`,Ry=`id: investigation
name: "Investigation"
status: draft
plane: any
summary: "Gathering evidence, reading a scene and following leads."
tags: [investigation, law, detective]
category: skill
ranked: true
minStats: { intuition: 4, logic: 3, memory: 2 }
effect: "This character is capable of searching a scene and following obvious leads without a skill check. Rank *10 added to skill check rolls involving investigating crimes and mysteries."
`,zy=`id: legal-advocacy
name: "Legal Advocacy"
status: placeholder
plane: any
summary: "Arguing a case in court, at a hearing or across a desk, and knowing which forms to file first."
tags: [law, persuasion, courts]
category: skill
effect: Placeholder. Effect not yet written.
`,By=`id: lockpicking
name: "Lockpicking"
status: draft
plane: any
summary: "Opening locks without the key."
tags: [locks, theft, security]
category: skill
ranked: true
minStats: { grace: 4, intuition: 2 }
effect: "This character is capable of opening simple mechanical locks with the right tools without a skill check. Rank *10 added to skill check rolls involving picking locks and bypassing security."
`,Vy=`id: medical-aid
name: "Medical Aid"
status: draft
plane: any
summary: "First aid: stopping bleeding, dressing wounds and setting bones."
tags: [medicine, first-aid, healing]
category: skill
ranked: true
minStats: { empathy: 3, memory: 3, grace: 2 }
effect: "This character is capable of performing basic first aid, such as stopping bleeding, dressing wounds and setting bones, without a skill check. Rank *10 added to skill check rolls involving treating injuries."
`,Hy=`id: military-drill
name: "Military Drill"
status: placeholder
plane: any
summary: "Moving, fighting and following orders as part of a unit."
tags: [military, discipline]
category: skill
effect: Placeholder. Effect not yet written.
`,Uy=`id: performer-acrobatics
name: "Performer: Acrobatics"
status: draft
plane: any
summary: "Tumbling, juggling and feats of balance for a crowd."
tags: [acrobatics, performance, agility]
category: skill
ranked: true
minStats: { grace: 4, endurance: 3, persuasion: 2 }
effect: "This character is capable of tumbling, juggling and keeping their balance in a performance without a skill check. Rank *10 added to skill check rolls involving acrobatics and balance."
`,Wy=`id: performer-music
name: "Performer: Music"
status: draft
plane: any
summary: "Playing an instrument or singing for an audience."
tags: [music, performance, art]
category: skill
ranked: true
minStats: { grace: 3, persuasion: 3, intuition: 2 }
effect: "This character is capable of playing an instrument or singing well enough to hold an audience without a skill check. Rank *10 added to skill check rolls involving musical performance."
`,Gy=`id: pilot-fighter
name: "Pilot: Fighter"
status: draft
plane: earth
summary: "Flying fighters in and out of combat."
tags: [pilot, fighter, military, space]
category: skill
ranked: true
minStats: { grace: 5, intuition: 4, memory: 4 }
effect: "This character is capable of piloting a fighter in simple scenarios and describing its basic functions and controls without a skill check. Rank *10 added to skill check rolls involving fighter piloting."
`,Ky=`id: pilot-helicopter
name: "Pilot: Helicopter"
status: draft
plane: earth
summary: "Flying helicopters."
tags: [pilot, helicopters, site-example]
category: skill
ranked: true
minStats: { memory: 5, intuition: 3, grace: 3 }
effect: "This character is capable of piloting helicopters in simple scenarios without a skill check and is capable of describing the basic functions and controls of a helicopter. Rank *10 added to skill check rolls involving helicopter piloting."
`,qy=`id: pilot-truck
name: "Pilot: Truck"
status: placeholder
plane: earth
summary: "Flying cargo trucks between stations, ships and planetary surfaces."
tags: [pilot, trucks, shipping]
lore: trucks
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,Jy=`id: planar-surveying
name: "Planar Surveying"
status: placeholder
plane: earth
summary: "Mapping and assessing a newly opened plane in the field."
tags: [planes, exploration, survey]
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,Yy=`id: programming
name: "Programming"
status: draft
plane: earth
summary: "Writing, reading and breaking software."
tags: [computers, programming, technology]
category: skill
ranked: true
minStats: { logic: 4, memory: 3, intuition: 2 }
effect: "This character is capable of writing and debugging simple software and reading other people’s code without a skill check. Rank *10 added to skill check rolls involving programming and hacking."
`,Xy=`id: relic-handling
name: Relic Handling
status: placeholder
plane: isekai
summary: Handling magical relics without incident.
tags: [magic, relics]
category: skill
# On the Magic list: only a character with Magical Heritage can pick it.
list: magic
effect: Placeholder. Effect not yet written.
`,Zy=`id: research
name: "Research"
status: placeholder
plane: any
summary: "Designing experiments, reading the literature and getting results."
tags: [science, research]
category: skill
ranked: true
effect: Placeholder. Effect not yet written.
`,Qy=`id: rider-basic-animals
name: "Rider: Basic Animals"
status: draft
plane: any
summary: "Riding a simple animal as a mount."
tags: [riding, animals, site-example]
category: skill
ranked: true
minStats: { grace: 4, empathy: 4, persuasion: 3 }
effect: "This character is capable of riding a basic animal as a mount in simple scenarios without a skill check. Rank *10 added to skill check rolls involving riding a simple animal."
`,$y=`id: schemer
name: Schemer
status: placeholder
plane: any
summary: Plotting and seeing through plots.
tags: [intrigue, politics]
category: skill
effect: Placeholder. Effect not yet written.
`,eb=`id: shield-wall
name: Shield Wall
status: placeholder
plane: any
summary: Fighting in formation behind a shield.
tags: [combat, shield, military]
category: skill
effect: Placeholder. Effect not yet written.
`,tb=`id: simple-cooking
name: "Simple Cooking"
status: draft
plane: any
summary: "Cooking simple, filling meals, even over a campfire."
tags: [cooking, food, survival]
category: skill
ranked: true
minStats: { memory: 2, intuition: 2 }
effect: "This character can cook simple, filling meals for themselves and a small group without a skill check, even over a campfire. Rank *10 added to skill check rolls involving cooking."
`,nb=`id: simple-potion-mixing
name: "Simple Potion Mixing"
status: draft
plane: isekai
summary: "Brewing simple potions from a known recipe."
tags: [potions, alchemy, herbs]
category: skill
ranked: true
minStats: { memory: 3, intuition: 3 }
effect: "This character can brew simple potions, such as healing draughts and sleeping tonics, from a known recipe and the right ingredients without a skill check. Rank *10 added to skill check rolls involving brewing potions."
`,rb=`id: sleight-of-hand
name: Sleight of Hand
status: placeholder
plane: any
summary: "Quick, unnoticed work with the hands."
tags: [theft, trickery]
category: skill
effect: Placeholder. Effect not yet written.
`,ib=`id: smooth-talker
name: Smooth Talker
status: placeholder
plane: any
summary: "Talking people into things, or out of them."
tags: [social, persuasion]
category: skill
effect: Placeholder. Effect not yet written.
`,ab=`id: specimen-handling
name: "Specimen Handling"
status: placeholder
plane: any
summary: "Catching, keeping, feeding and moving living specimens without losing them, or a hand."
tags: [parabiology, animals, care, handling]
category: skill
effect: Placeholder. Effect not yet written.
`,ob=`id: starship-engineering
name: "Starship Engineering"
status: draft
plane: earth
summary: "Maintaining and repairing a starship’s reactors, drives and life support."
tags: [engineering, starships, technology, space]
category: skill
ranked: true
minStats: { logic: 4, memory: 3, grace: 2 }
effect: "This character is capable of maintaining and making routine repairs to a starship’s reactors, drives and life support without a skill check. Rank *10 added to skill check rolls involving starship repair."
`,sb=`id: streetwise
name: Streetwise
status: placeholder
plane: any
summary: "Getting by, and getting answers, on the street."
tags: [urban, crime, social]
category: skill
effect: Placeholder. Effect not yet written.
`,cb=`id: surgery
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
`,lb=`id: survivalist
name: Survivalist
status: placeholder
plane: any
summary: Staying alive with little in the wild.
tags: [survival, wilderness]
category: skill
effect: Placeholder. Effect not yet written.
`,ub=`id: teamster
name: Teamster
status: placeholder
plane: any
summary: Driving and caring for draft animals and wagons.
tags: [caravan, animals, driving]
category: skill
effect: Placeholder. Effect not yet written.
`,db=`id: tinkerer
name: Tinkerer
status: placeholder
plane: any
summary: Fixing and improvising with machines.
tags: [technology, repair, crafting]
category: skill
effect: Placeholder. Effect not yet written.
`,fb=`id: tracker
name: Tracker
status: placeholder
plane: any
summary: Following trails and reading signs.
tags: [tracking, hunting, wilderness]
category: skill
effect: Placeholder. Effect not yet written.
`,pb=`id: vigilance
name: Vigilance
status: placeholder
plane: any
summary: Staying alert on watch.
tags: [guard, awareness]
category: skill
effect: Placeholder. Effect not yet written.
`,mb=`id: wielder-bow
name: "Wielder: Bow"
status: draft
plane: any
summary: "Fighting with, and maintaining, bows."
tags: [combat, ranged, archery]
category: skill
ranked: true
minStats: { grace: 3, power: 3, intuition: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Bow without a skill check. Rank *5 added to skill check rolls involving a Bow."
`,hb=`id: wielder-crossbow
name: "Wielder: Crossbow"
status: draft
plane: any
summary: "Fighting with, and maintaining, crossbows."
tags: [combat, ranged, archery]
category: skill
ranked: true
minStats: { grace: 2, power: 2, intuition: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Crossbow without a skill check. Rank *5 added to skill check rolls involving a Crossbow."
`,gb=`id: wielder-dagger
name: "Wielder: Dagger"
status: draft
plane: any
summary: "Fighting with, and maintaining, daggers and knives."
tags: [combat, melee, blades]
category: skill
ranked: true
minStats: { grace: 3, intuition: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Dagger without a skill check. Rank *5 added to skill check rolls involving a Dagger."
`,_b=`id: wielder-flamethrower
name: "Wielder: Flamethrower"
status: draft
plane: earth
summary: "Fighting with, and maintaining, flamethrowers and their fuel tanks."
tags: [combat, heavy weapons, fire]
category: skill
ranked: true
minStats: { endurance: 3, power: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Flamethrower without a skill check. Rank *5 added to skill check rolls involving a Flamethrower."
`,vb=`id: wielder-greatsword
name: "Wielder: Greatsword"
status: draft
plane: any
summary: "Fighting with, and maintaining, heavy two-handed swords."
tags: [combat, melee, swords]
category: skill
ranked: true
minStats: { power: 5, endurance: 4, grace: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Greatsword without a skill check. Rank *5 added to skill check rolls involving a Greatsword."
`,yb=`id: wielder-grenade
name: "Wielder: Grenade"
status: draft
plane: earth
summary: "Throwing, launching and safely handling grenades."
tags: [combat, explosives, military]
category: skill
ranked: true
minStats: { grace: 2, intuition: 3, power: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Grenade without a skill check. Rank *5 added to skill check rolls involving a Grenade."
`,bb=`id: wielder-longsword
name: "Wielder: Longsword"
status: draft
plane: any
summary: "Fighting with, and maintaining, a longsword."
tags: [combat, melee, swords, site-example]
category: skill
ranked: true
minStats: { grace: 4, power: 4, endurance: 4 }
effect: "This character is capable of performing the basic tasks of maintaining a Longsword without a skill check. Rank *5 added to skill check rolls involving a Longsword."
`,xb=`id: wielder-mace
name: "Wielder: Mace"
status: draft
plane: any
summary: "Fighting with, and maintaining, clubs, maces, flails and war hammers."
tags: [combat, melee, blunt]
category: skill
ranked: true
minStats: { power: 4, endurance: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Mace without a skill check. Rank *5 added to skill check rolls involving a Mace."
`,Sb=`id: wielder-machine-gun
name: "Wielder: Machine Gun"
status: draft
plane: earth
summary: "Fighting with, and maintaining, heavy automatic weapons fired from the hip, a bipod or a mount."
tags: [combat, firearms, heavy weapons, military]
category: skill
ranked: true
minStats: { power: 3, endurance: 3, grace: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Machine Gun without a skill check. Rank *5 added to skill check rolls involving a Machine Gun."
`,Cb=`id: wielder-missile-launcher
name: "Wielder: Missile Launcher"
status: draft
plane: earth
summary: "Firing and maintaining shoulder-fired rockets and guided missiles."
tags: [combat, explosives, heavy weapons, military]
category: skill
ranked: true
minStats: { intuition: 3, logic: 2, endurance: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Missile Launcher without a skill check. Rank *5 added to skill check rolls involving a Missile Launcher."
`,wb=`id: wielder-mortar
name: "Wielder: Mortar"
status: draft
plane: earth
summary: "Crewing, aiming and maintaining mortars and light field artillery."
tags: [combat, explosives, artillery, military]
category: skill
ranked: true
minStats: { logic: 3, intuition: 3, endurance: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Mortar without a skill check. Rank *5 added to skill check rolls involving a Mortar."
`,Tb=`id: wielder-musket
name: "Wielder: Musket"
status: draft
plane: any
summary: "Fighting with, and maintaining, a musket."
tags: [combat, firearms, muskets, site-example]
category: skill
ranked: true
minStats: { grace: 3, power: 2, intuition: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Musket without a skill check. Rank *5 added to skill check rolls involving a Musket."
`,Eb=`id: wielder-pistol
name: "Wielder: Pistol"
status: draft
plane: any
summary: "Fighting with, and maintaining, a pistol."
tags: [combat, firearms, sidearm]
category: skill
ranked: true
minStats: { grace: 3, intuition: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Pistol without a skill check. Rank *5 added to skill check rolls involving a Pistol."
`,Db=`id: wielder-polearm
name: "Wielder: Polearm"
status: draft
plane: any
summary: "Fighting with, and maintaining, long-hafted weapons like halberds, glaives and pikes."
tags: [combat, melee, polearms]
category: skill
ranked: true
minStats: { power: 4, grace: 3, endurance: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Polearm without a skill check. Rank *5 added to skill check rolls involving a Polearm."
`,Ob=`id: wielder-rifle
name: "Wielder: Rifle"
status: draft
plane: earth
summary: "Fighting with, and maintaining, a modern rifle."
tags: [combat, firearms, military]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, power: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Rifle without a skill check. Rank *5 added to skill check rolls involving a Rifle."
`,kb=`id: wielder-shortsword
name: "Wielder: Shortsword"
status: draft
plane: any
summary: "Fighting with, and maintaining, one-handed swords and sabers."
tags: [combat, melee, swords]
category: skill
ranked: true
minStats: { grace: 3, power: 2, endurance: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Shortsword without a skill check. Rank *5 added to skill check rolls involving a Shortsword."
`,Ab=`id: wielder-shotgun
name: "Wielder: Shotgun"
status: draft
plane: earth
summary: "Fighting with, and maintaining, shotguns."
tags: [combat, firearms]
category: skill
ranked: true
minStats: { grace: 2, power: 3, intuition: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Shotgun without a skill check. Rank *5 added to skill check rolls involving a Shotgun."
`,jb=`id: wielder-siege-engine
name: "Wielder: Siege Engine"
status: draft
plane: any
summary: "Crewing, aiming and maintaining catapults, trebuchets, ballistae and cannons."
tags: [combat, siege, artillery]
category: skill
ranked: true
minStats: { logic: 3, intuition: 3, power: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Siege Engine without a skill check. Rank *5 added to skill check rolls involving a Siege Engine."
`,Mb=`id: wielder-sling
name: "Wielder: Sling"
status: draft
plane: any
summary: "Fighting with, and maintaining, slings."
tags: [combat, ranged]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a Sling without a skill check. Rank *5 added to skill check rolls involving a Sling."
`,Nb=`id: wielder-sniper-rifle
name: "Wielder: Sniper Rifle"
status: draft
plane: earth
summary: "Fighting with, and maintaining, long-range precision rifles."
tags: [combat, firearms, military]
category: skill
ranked: true
minStats: { intuition: 5, grace: 3, endurance: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Sniper Rifle without a skill check. Rank *5 added to skill check rolls involving a Sniper Rifle."
`,Pb=`id: wielder-spear
name: "Wielder: Spear"
status: draft
plane: any
summary: "Fighting with, and maintaining, spears and lances."
tags: [combat, melee, polearms]
category: skill
ranked: true
minStats: { grace: 3, power: 3, endurance: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Spear without a skill check. Rank *5 added to skill check rolls involving a Spear."
`,Fb=`id: wielder-staff
name: "Wielder: Staff"
status: draft
plane: any
summary: "Fighting with, and maintaining, a staff or quarterstaff."
tags: [combat, melee, staves]
category: skill
ranked: true
minStats: { grace: 3, endurance: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Staff without a skill check. Rank *5 added to skill check rolls involving a Staff."
`,Ib=`id: wielder-throwing-weapon
name: "Wielder: Throwing Weapon"
status: draft
plane: any
summary: "Fighting with thrown weapons like knives, axes and javelins."
tags: [combat, ranged, thrown]
category: skill
ranked: true
minStats: { grace: 3, intuition: 3, power: 2 }
effect: "This character is capable of performing the basic tasks of maintaining a Throwing Weapon without a skill check. Rank *5 added to skill check rolls involving a Throwing Weapon."
`,Lb=`id: wielder-war-axe
name: "Wielder: War Axe"
status: draft
plane: any
summary: "Fighting with, and maintaining, a war axe."
tags: [combat, melee, axes]
category: skill
ranked: true
minStats: { power: 5, endurance: 4, grace: 3 }
effect: "This character is capable of performing the basic tasks of maintaining a War Axe without a skill check. Rank *5 added to skill check rolls involving a War Axe."
`,Rb=Symbol.for(`yaml.alias`),zb=Symbol.for(`yaml.document`),Bb=Symbol.for(`yaml.map`),Vb=Symbol.for(`yaml.pair`),Hb=Symbol.for(`yaml.scalar`),Ub=Symbol.for(`yaml.seq`),Wb=Symbol.for(`yaml.node.type`),Gb=e=>!!e&&typeof e==`object`&&e[Wb]===Rb,Kb=e=>!!e&&typeof e==`object`&&e[Wb]===zb,qb=e=>!!e&&typeof e==`object`&&e[Wb]===Bb,Jb=e=>!!e&&typeof e==`object`&&e[Wb]===Vb,Yb=e=>!!e&&typeof e==`object`&&e[Wb]===Hb,Xb=e=>!!e&&typeof e==`object`&&e[Wb]===Ub;function Zb(e){if(e&&typeof e==`object`)switch(e[Wb]){case Bb:case Ub:return!0}return!1}function Qb(e){if(e&&typeof e==`object`)switch(e[Wb]){case Rb:case Bb:case Hb:case Ub:return!0}return!1}var $b=e=>(Yb(e)||Zb(e))&&!!e.anchor,ex=Symbol(`break visit`),tx=Symbol(`skip children`),nx=Symbol(`remove node`);function rx(e,t){let n=ax(t);Kb(e)?ix(null,e.contents,n,Object.freeze([e]))===nx&&(e.contents=null):ix(null,e,n,Object.freeze([]))}rx.BREAK=ex,rx.SKIP=tx,rx.REMOVE=nx;function ix(e,t,n,r){let i=ox(e,t,n,r);if(Qb(i)||Jb(i))return sx(e,r,i),ix(e,i,n,r);if(typeof i!=`symbol`){if(Zb(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=ix(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===ex)return ex;else i===nx&&(t.items.splice(e,1),--e)}}else if(Jb(t)){r=Object.freeze(r.concat(t));let e=ix(`key`,t.key,n,r);if(e===ex)return ex;e===nx&&(t.key=null);let i=ix(`value`,t.value,n,r);if(i===ex)return ex;i===nx&&(t.value=null)}}return i}function ax(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function ox(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(qb(t))return n.Map?.(e,t,r);if(Xb(t))return n.Seq?.(e,t,r);if(Jb(t))return n.Pair?.(e,t,r);if(Yb(t))return n.Scalar?.(e,t,r);if(Gb(t))return n.Alias?.(e,t,r)}function sx(e,t,n){let r=t[t.length-1];if(Zb(r))r.items[e]=n;else if(Jb(r))e===`key`?r.key=n:r.value=n;else if(Kb(r))r.contents=n;else{let e=Gb(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var cx={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},lx=e=>e.replace(/[!,[\]{}]/g,e=>cx[e]),ux=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags)}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+lx(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&Qb(e.contents)){let t={};rx(e.contents,(e,n)=>{Qb(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)(i!==`!!`||a!==`tag:yaml.org,2002:`)&&(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};ux.defaultYaml={explicit:!1,version:`1.2`},ux.defaultTags={"!!":`tag:yaml.org,2002:`};function dx(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function fx(e){let t=new Set;return rx(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function px(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function mx(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=fx(e);let a=px(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(Yb(t.node)||Zb(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function hx(e,t,n,r){if(r&&typeof r==`object`){if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=hx(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=hx(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=hx(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=hx(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}}return e.call(t,n,r)}function gx(e,t,n){if(Array.isArray(e))return e.map((e,t)=>gx(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!$b(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var _x=class{constructor(e){Object.defineProperty(this,Wb,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!Kb(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=gx(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?hx(i,{"":o},``,o):o}},vx=class extends _x{constructor(e){super(Rb),this.source=e,Object.defineProperty(this,"tag",{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){if(t?.maxAliasCount===0)throw ReferenceError(`Alias resolution is disabled`);let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],rx(e,{Node:(e,t)=>{(Gb(t)||$b(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}if(r&&t){let{anchors:e,doc:n,maxAliasCount:i}=t,a=e.get(r);if(a||=(gx(r,null,t),e.get(r)),a?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=yx(n,r,e)),a.count*a.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`)}return r}toJSON(e,t){if(!t)return{source:this.source};let n=this.resolve(t.doc,t);if(!n){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}return t.anchors.get(n).res}toString(e,t,n){let r=`*${this.source}`;if(e){if(dx(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function yx(e,t,n){if(Gb(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}if(Zb(t)){let r=0;for(let i of t.items){let t=yx(e,i,n);t>r&&(r=t)}return r}if(Jb(t)){let r=yx(e,t.key,n),i=yx(e,t.value,n);return Math.max(r,i)}return 1}var bx=e=>!e||typeof e!=`function`&&typeof e!=`object`,X=class extends _x{constructor(e){super(Hb),this.value=e}toJSON(e,t){return t?.keep?this.value:gx(this.value,e,t)}toString(){return String(this.value)}};X.BLOCK_FOLDED=`BLOCK_FOLDED`,X.BLOCK_LITERAL=`BLOCK_LITERAL`,X.PLAIN=`PLAIN`,X.QUOTE_DOUBLE=`QUOTE_DOUBLE`,X.QUOTE_SINGLE=`QUOTE_SINGLE`;var xx=`tag:yaml.org,2002:`;function Sx(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function Cx(e,t,n){if(Kb(e)&&(e=e.contents),Qb(e))return e;if(Jb(e)){let t=n.schema[Bb].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new vx(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=xx+t.slice(2));let l=Sx(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new X(e);return c&&(c.node=t),t}l=e instanceof Map?o[Bb]:Symbol.iterator in Object(e)?o[Ub]:o[Bb]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new X(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function wx(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return Cx(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var Tx=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,Ex=class extends _x{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>Qb(t)||Jb(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Tx(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if(Zb(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,wx(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if(Zb(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&Yb(i)?i.value:i:Zb(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Jb(t))return!1;let n=t.value;return n==null||e&&Yb(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return Zb(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if(Zb(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,wx(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},Dx=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function Ox(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var kx=(e,t,n)=>e.endsWith(`
`)?Ox(n,t):n.includes(`
`)?`
`+Ox(n,t):(e.endsWith(` `)?``:` `)+n,Ax=`flow`,jx=`block`,Mx=`quoted`;function Nx(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=Px(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=Px(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d){if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function Px(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var Fx=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Ix=e=>/^(%|---|\.\.\.)/m.test(e);function Lx(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function Rx(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Ix(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:Nx(o,a,Mx,Fx(t,!1))}function zx(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Rx(e,t);let n=t.indent||(Ix(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:Nx(r,n,Ax,Fx(t,!1))}function Bx(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=Rx;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?zx:i&&!t?Rx:n?zx:Rx}return r(e,t)}var Vx;try{Vx=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{Vx=/\n+(?!\n|$)/g}function Hx({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return Bx(n,r);let l=r.indent||(r.forceBlockIndent||Ix(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===X.BLOCK_FOLDED?!1:t===X.BLOCK_LITERAL||!Lx(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(Vx,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=Fx(r,!0);o!==`folded`&&t!==X.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=Nx(`${v}${e}${p}`,l,jx,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function Ux(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Bx(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?Bx(a,t):Hx(e,t,n,r);if(!s&&!u&&i!==X.PLAIN&&a.includes(`
`))return Hx(e,t,n,r);if(Ix(a)){if(c===``)return t.forceBlockIndent=!0,Hx(e,t,n,r);if(s&&c===l)return Bx(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return Bx(a,t)}return s?d:Nx(d,c,Ax,Fx(t,!1))}function Wx(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==X.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=X.QUOTE_DOUBLE);let c=e=>{switch(e){case X.BLOCK_FOLDED:case X.BLOCK_LITERAL:return i||a?Bx(o.value,t):Hx(o,t,n,r);case X.QUOTE_DOUBLE:return Rx(o.value,t);case X.QUOTE_SINGLE:return zx(o.value,t);case X.PLAIN:return Ux(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function Gx(e,t){let n=Object.assign({blockQuote:!0,commentString:Dx,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function Kx(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(Yb(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function qx(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(Yb(e)||Zb(e))&&e.anchor;a&&dx(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function Jx(e,t,n,r){if(Jb(e))return e.toString(t,n,r);if(Gb(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=Qb(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=Kx(t.doc.schema.tags,a);let o=qx(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):Yb(a)?Wx(a,t,n,r):a.toString(t,n,r);return o?Yb(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Yx({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=Qb(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if(Zb(e)||!Qb(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||Zb(e)||(Yb(e)?e.type===X.BLOCK_FOLDED||e.type===X.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=Jx(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=kx(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=kx(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=kx(g,n.indent,l(f))));let _,v,y;Qb(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&Yb(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&Xb(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=Jx(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${Ox(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&Zb(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else(x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=kx(g,n.indent,l(y)):h&&i&&i(),g}function Xx(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var Zx=`<<`,Qx={identify:e=>e===Zx||typeof e==`symbol`&&e.description===Zx,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new X(Symbol(Zx)),{addToJSMap:eS}),stringify:()=>Zx},$x=(e,t)=>(Qx.identify(t)||Yb(t)&&(!t.type||t.type===X.PLAIN)&&Qx.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===Qx.tag&&e.default);function eS(e,t,n){let r=nS(e,n);if(Xb(r))for(let n of r.items)tS(e,t,n);else if(Array.isArray(r))for(let n of r)tS(e,t,n);else tS(e,t,r)}function tS(e,t,n){let r=nS(e,n);if(!qb(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function nS(e,t){return e&&Gb(t)?t.resolve(e.doc,e):t}function rS(e,t,{key:n,value:r}){if(Qb(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if($x(e,n))eS(e,t,r);else{let i=gx(n,``,e);if(t instanceof Map)t.set(i,gx(r,i,e));else if(t instanceof Set)t.add(i);else{let a=iS(n,i,e),o=gx(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function iS(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(Qb(e)&&n?.doc){let t=Gx(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),Xx(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function aS(e,t,n){return new oS(Cx(e,void 0,n),Cx(t,void 0,n))}var oS=class e{constructor(e,t=null){Object.defineProperty(this,Wb,{value:Vb}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return Qb(n)&&(n=n.clone(t)),Qb(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return rS(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Yx(this,e,t,n):JSON.stringify(this)}};function sS(e,t,n){return(t.inFlow??e.flow?lS:cS)(e,t,n)}function cS({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(Qb(i))!d&&i.spaceBefore&&f.push(``),uS(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(Jb(i)){let e=Qb(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),uS(n,f,e.commentBefore,d))}d=!1;let s=Jx(i,u,()=>o=null,()=>d=!0);o&&(s+=kx(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+Ox(l(e),c),s&&s()):d&&o&&o(),p}function lS({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(Qb(i))i.spaceBefore&&d.push(``),uS(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(Jb(i)){let e=Qb(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),uS(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=Qb(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=Jx(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=kx(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}return`${f}${o}${d.join(` `)}${o}${p}`}function uS({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=Ox(t(r),e);n.push(i.trimStart())}}function dS(e,t){let n=Yb(t)?t.value:t;for(let r of e)if(Jb(r)&&(r.key===t||r.key===n||Yb(r.key)&&r.key.value===n))return r}var fS=class extends Ex{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(Bb,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(aS(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=Jb(e)?e:!e||typeof e!=`object`||!(`key`in e)?new oS(e,e?.value):new oS(e.key,e.value);let r=dS(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);Yb(r.value)&&bx(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=dS(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=dS(this.items,e)?.value;return(!t&&Yb(n)?n.value:n)??void 0}has(e){return!!dS(this.items,e)}set(e,t){this.add(new oS(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)rS(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!Jb(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),sS(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},pS={collection:`map`,default:!0,nodeClass:fS,tag:`tag:yaml.org,2002:map`,resolve(e,t){return qb(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>fS.from(e,t,n)},mS=class extends Ex{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(Ub,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=hS(e);return typeof t==`number`&&this.items.splice(t,1).length>0}get(e,t){let n=hS(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&Yb(r)?r.value:r}has(e){let t=hS(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=hS(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];Yb(r)&&bx(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(gx(e,String(r++),t));return n}toString(e,t,n){return e?sS(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(Cx(a,void 0,n))}}return i}};function hS(e){let t=Yb(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var gS={collection:`seq`,default:!0,nodeClass:mS,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return Xb(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>mS.from(e,t,n)},_S={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),Wx(e,t,n,r)}},vS={identify:e=>e==null,createNode:()=>new X(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new X(null),stringify:({source:e},t)=>typeof e==`string`&&vS.test.test(e)?e:t.options.nullStr},yS={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new X(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&yS.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function bS({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^-?\d/.test(a)&&!a.includes(`e`)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-->0;)a+=`0`}return a}var xS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:bS},SS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():bS(e)}},CS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new X(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:bS},wS=e=>typeof e==`bigint`||Number.isInteger(e),TS=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function ES(e,t,n){let{value:r}=e;return wS(r)&&r>=0?n+r.toString(t):bS(e)}var DS={identify:e=>wS(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>TS(e,2,8,n),stringify:e=>ES(e,8,`0o`)},OS={identify:wS,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>TS(e,0,10,n),stringify:bS},kS={identify:e=>wS(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>TS(e,2,16,n),stringify:e=>ES(e,16,`0x`)},AS=[pS,gS,_S,vS,yS,DS,OS,kS,xS,SS,CS];function jS(e){return typeof e==`bigint`||Number.isInteger(e)}var MS=({value:e})=>JSON.stringify(e),NS=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:MS},{identify:e=>e==null,createNode:()=>new X(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:MS},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:MS},{identify:jS,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>jS(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:MS}],PS=[pS,gS].concat(NS,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),FS={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=X.BLOCK_LITERAL,t!==X.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===X.BLOCK_LITERAL?`
`:` `)}return Wx({comment:e,type:t,value:s},r,i,a)}};function IS(e,t){if(Xb(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!Jb(r)){if(qb(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new oS(new X(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=Jb(r)?r:new oS(r)}}else t(`Expected a sequence for this tag`);return e}function LS(e,t,n){let{replacer:r}=n,i=new mS(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e)){if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`)}else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(aS(o,s,n))}return i}var RS={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:IS,createNode:LS},zS=class e extends mS{constructor(){super(),this.add=fS.prototype.add.bind(this),this.delete=fS.prototype.delete.bind(this),this.get=fS.prototype.get.bind(this),this.has=fS.prototype.has.bind(this),this.set=fS.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(Jb(e)?(r=gx(e.key,``,t),i=gx(e.value,r,t)):r=gx(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=LS(e,t,n),i=new this;return i.items=r.items,i}};zS.tag=`tag:yaml.org,2002:omap`;var BS={collection:`seq`,identify:e=>e instanceof Map,nodeClass:zS,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=IS(e,t),r=[];for(let{key:e}of n.items)Yb(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new zS,n)},createNode:(e,t,n)=>zS.from(e,t,n)};function VS({value:e,source:t},n){return t&&(e?HS:US).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var HS={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new X(!0),stringify:VS},US={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new X(!1),stringify:VS},WS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:bS},GS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():bS(e)}},KS={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new X(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:bS},qS=e=>typeof e==`bigint`||Number.isInteger(e);function JS(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function YS(e,t,n){let{value:r}=e;if(qS(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return bS(e)}var XS={identify:qS,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>JS(e,2,2,n),stringify:e=>YS(e,2,`0b`)},ZS={identify:qS,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>JS(e,1,8,n),stringify:e=>YS(e,8,`0`)},QS={identify:qS,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>JS(e,0,10,n),stringify:bS},$S={identify:qS,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>JS(e,2,16,n),stringify:e=>YS(e,16,`0x`)},eC=class e extends fS{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=Jb(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new oS(e.key,null):new oS(e,null),dS(this.items,t.key)||this.items.push(t)}get(e,t){let n=dS(this.items,e);return!t&&Jb(n)?Yb(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=dS(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new oS(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(aS(e,null,n));return i}};eC.tag=`tag:yaml.org,2002:set`;var tC={collection:`map`,identify:e=>e instanceof Set,nodeClass:eC,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>eC.from(e,t,n),resolve(e,t){if(qb(e)){if(e.hasAllNullValues(!0))return Object.assign(new eC,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function nC(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function rC(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return bS(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var iC={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>nC(e,n),stringify:rC},aC={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>nC(e,!1),stringify:rC},oC={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(oC.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=nC(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},sC=[pS,gS,_S,vS,HS,US,XS,ZS,QS,$S,WS,GS,KS,FS,Qx,BS,RS,tC,iC,aC,oC],cC=new Map([[`core`,AS],[`failsafe`,[pS,gS,_S]],[`json`,PS],[`yaml11`,sC],[`yaml-1.1`,sC]]),lC={binary:FS,bool:yS,float:CS,floatExp:SS,floatNaN:xS,floatTime:aC,int:OS,intHex:kS,intOct:DS,intTime:iC,map:pS,merge:Qx,null:vS,omap:BS,pairs:RS,seq:gS,set:tC,timestamp:oC},uC={"tag:yaml.org,2002:binary":FS,"tag:yaml.org,2002:merge":Qx,"tag:yaml.org,2002:omap":BS,"tag:yaml.org,2002:pairs":RS,"tag:yaml.org,2002:set":tC,"tag:yaml.org,2002:timestamp":oC};function dC(e,t,n){let r=cC.get(t);if(r&&!e)return n&&!r.includes(Qx)?r.concat(Qx):r.slice();let i=r;if(!i){if(Array.isArray(e))i=[];else{let e=Array.from(cC.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(Qx)),i.reduce((e,t)=>{let n=typeof t==`string`?lC[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(lC).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var fC=(e,t)=>e.key<t.key?-1:+(e.key>t.key),pC=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?dC(e,`compat`):e?dC(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?uC:{},this.tags=dC(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Bb,{value:pS}),Object.defineProperty(this,Hb,{value:_S}),Object.defineProperty(this,Ub,{value:gS}),this.sortMapEntries=typeof a==`function`?a:a===!0?fC:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function mC(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=Gx(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(Ox(t,``))}let o=!1,s=null;if(e.contents){if(Qb(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(Ox(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=Jx(e.contents,i,()=>s=null,t);s&&(c+=kx(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(Jx(e.contents,i));if(e.directives?.docEnd){if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(Ox(t,``))):n.push(`... ${t}`)}else n.push(`...`)}else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(Ox(a(t),``)))}return n.join(`
`)+`
`}var hC=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Wb,{value:zb});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new ux({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[Wb]:{value:zb}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Qb(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){gC(this.contents)&&this.contents.add(e)}addIn(e,t){gC(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=fx(this);e.anchor=!t||n.has(t)?px(t||`a`,n):t}return new vx(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=mx(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=Cx(e,l,p);return o&&Zb(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new oS(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return gC(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Tx(e)?this.contents!=null&&(this.contents=null,!0):gC(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return Zb(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Tx(e)?!t&&Yb(this.contents)?this.contents.value:this.contents:Zb(this.contents)?this.contents.getIn(e,t):void 0}has(e){return Zb(this.contents)?this.contents.has(e):!1}hasIn(e){return Tx(e)?this.contents!==void 0:Zb(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=wx(this.schema,[e],t):gC(this.contents)&&this.contents.set(e,t)}setIn(e,t){Tx(e)?this.contents=t:this.contents==null?this.contents=wx(this.schema,Array.from(e),t):gC(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new ux({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new ux({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new pC(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=gx(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?hx(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return mC(this,e)}};function gC(e){if(Zb(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var _C=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},vC=class extends _C{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},yC=class extends _C{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},bC=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function xC(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],C=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:C,start:x??C}}function SC(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(SC(t.key)||SC(t.value))return!0}return!1;default:return!0}}function CC(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&SC(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function wC(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||Yb(e)&&Yb(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var TC=`All mapping items must start at the same column`;function EC({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??fS)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=xC(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,TC)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||SC(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,TC);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&CC(r.indent,u,i),n.atKey=!1,wC(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=xC(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&CC(r.indent,f,i),s=c.range[2];let l=new oS(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new oS(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function DC({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??mS)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=xC(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found){if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&CC(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function OC(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var kC=`Block collections are not allowed within flow collections`,AC=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function jC({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new((a?.nodeClass)??(o?fS:mS))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=xC(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&SC(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];Jb(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],AC(m)&&i(r.range,`BLOCK_IN_FLOW`,kC)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);AC(f)&&i(g.range,`BLOCK_IN_FLOW`,kC),n.atKey=!1;let _=xC(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?AC(m)&&i(v.range,`BLOCK_IN_FLOW`,kC):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new oS(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;wC(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new fS(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=OC(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function MC(e,t,n,r,i,a){let o=n.type===`block-map`?EC(e,t,n,r,a):n.type===`block-seq`?DC(e,t,n,r,a):jC(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function NC(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===fS.tagName&&s===`map`||o===mS.tagName&&s===`seq`)return MC(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),MC(e,t,n,i,o)}let l=MC(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=Qb(u)?u:new X(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function PC(e,t,n){let r=t.offset,i=FC(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?X.BLOCK_FOLDED:X.BLOCK_LITERAL,o=t.source?IC(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===X.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
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
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function FC({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function IC(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function LC(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=X.PLAIN,c=RC(a,l);break;case`single-quoted-scalar`:s=X.QUOTE_SINGLE,c=zC(a,l);break;case`double-quoted-scalar`:s=X.QUOTE_DOUBLE,c=VC(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=OC(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function RC(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),BC(e)}function zC(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),BC(e.slice(1,-1)).replace(/''/g,`'`)}function BC(e){let t=/(.*?)\r?\n/sy,n=t.exec(e);if(!n)return e;let r,i;try{r=RegExp(`(?<![ 	])[ 	]+$`),i=RegExp(`^[ 	]+|(?<![ 	])[ 	]+$`,`g`)}catch{r=/[ \t]+$/,i=/^[ \t]+|[ \t]+$/g}let a=n[1].replace(r,``),o=` `,s=t.lastIndex;for(;n=t.exec(e);){let e=n[1].replace(i,``);e===``?o===`
`?a+=o:o=`
`:(a+=o+e,o=` `),s=t.lastIndex}let c=/[ \t]*(.*)/sy;return c.lastIndex=s,n=c.exec(e),a+o+(n?.[1]??``)}function VC(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(i!==`\r`||e[r+1]!==`
`){if(i===`
`){let{fold:t,offset:i}=HC(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=UC[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a=i===`x`?2:i===`u`?4:8;n+=WC(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&(a!==`\r`||e[r+2]!==`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function HC(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&(r!==`\r`||e[t+2]===`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var UC={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function WC(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}}function GC(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?PC(e,t,r):LC(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[Hb]:c?KC(e.schema,i,c,n,r):t.type===`scalar`?qC(e,i,t,r):e.schema[Hb];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=Yb(a)?a:new X(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new X(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function KC(e,t,n,r,i){if(n===`!`)return e[Hb];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n){if(t.default&&t.test)a.push(t);else return t}for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[Hb])}function qC({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[Hb];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[Hb];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function JC(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var YC={composeNode:XC,composeEmptyNode:ZC};function XC(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=QC(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=GC(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=NC(YC,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=ZC(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!Yb(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function ZC(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=GC(e,{type:`scalar`,offset:JC(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function QC({options:e},{offset:t,source:n,end:r},i){let a=new vx(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=OC(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function $C(e,t,{offset:n,start:r,value:i,end:a},o){let s=new hC(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=xC(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?XC(c,i,l,o):ZC(c,l.end,r,null,l,o);let u=s.contents.range[2],d=OC(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function ew(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function tw(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var nw=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=ew(e);r?this.warnings.push(new yC(i,t,n)):this.errors.push(new vC(i,t,n))},this.directives=new ux({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=tw(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if(Zb(i)&&!i.flow&&i.items.length>0){let e=i.items[0];Jb(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:tw(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=ew(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=$C(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new vC(ew(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new vC(ew(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=OC(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new vC(ew(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new hC(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},rw=Symbol(`break visit`),iw=Symbol(`skip children`),aw=Symbol(`remove item`);function ow(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),sw(Object.freeze([]),e,t)}ow.BREAK=rw,ow.SKIP=iw,ow.REMOVE=aw,ow.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},ow.parentCollection=(e,t)=>{let n=ow.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function sw(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=sw(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===rw)return rw;else r===aw&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function cw(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function lw(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var uw=new Set(`0123456789ABCDEFabcdef`),dw=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),fw=new Set(`,[]{}`),pw=new Set(` ,[]{}
\r	`),mw=e=>!e||pw.has(e),hw=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`||t===`\r`&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&lw(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&lw(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!lw(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&lw(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,`block-start`}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(mw),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&lw(r[3]))&&(n!==this.indentNext-1||this.flowLevel!==1||r[0]!==`]`&&r[0]!==`}`))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(mw),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||lw(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>lw(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.indentNext=this.blockScalarIndent===-1?t:this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(1);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(lw(r)||e&&fw.has(r))break;t=n}else if(lw(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&fw.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&fw.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){let e=0;loop:for(;;){switch(this.charAt(0)){case`!`:e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue loop;case`&`:e+=yield*this.pushUntil(mw),e+=yield*this.pushSpaces(!0);continue loop;case`-`:case`?`:case`:`:{let t=this.flowLevel>0,n=this.charAt(1);if(lw(n)||t&&fw.has(n)){t?this.flowKey&&=!1:this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue loop}}}break loop}return e}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!lw(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(dw.has(t))t=this.buffer[++e];else if(t===`%`&&uw.has(this.buffer[e+1])&&uw.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},gw=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function _w(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function vw(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function yw(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function bw(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function xw(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function Sw(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function Cw(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!_w(t.start,`explicit-key-ind`)&&!_w(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,yw(t.value)?t.value.end?Sw(t.value.end,t.sep):t.value.end=t.sep:Sw(t.start,t.sep),delete t.sep)}var ww=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new hw,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=cw(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source})}else{if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&Cw(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&vw(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:vw(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=xw(bw(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Sw(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey){if(!t.sep){if(_w(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=xw(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(_w(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(yw(t.key)&&!_w(t.sep,`newline`)){let e=xw(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken)}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):_w(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!_w(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Sw(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||_w(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=xw(bw(t));Cw(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=xw(bw(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=xw(bw(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function Tw(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new gw||null,prettyErrors:t}}function Ew(e,t={}){let{lineCounter:n,prettyErrors:r}=Tw(t),i=new ww(n?.addNewLine),a=new nw(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new vC(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach(bC(e,n)),o.warnings.forEach(bC(e,n))),o}function Dw(e,t,n){let r;typeof t==`function`?r=t:n===void 0&&t&&typeof t==`object`&&(n=t);let i=Ew(e,n);if(!i)return null;if(i.warnings.forEach(e=>Xx(i.options.logLevel,e)),i.errors.length>0){if(i.options.logLevel!==`silent`)throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:r},n))}function Ow(e,t,n,r){let i=new Map,a=[],o=e.filter(e=>e.path.startsWith(`${t}/`)&&e.path.endsWith(`.yaml`)).sort((e,t)=>e.path.localeCompare(t.path));for(let{path:e,text:t}of o){let o=n.safeParse(Dw(t));if(!o.success){for(let t of o.error.issues)r.push(`${e}: ${t.path.join(`.`)||`(root)`}: ${t.message}`);continue}let s=o.data.id;s!==e.split(`/`).pop().replace(/\.yaml$/,``)&&r.push(`${e}: id "${s}" doesn't match the file name`),i.has(s)&&r.push(`${e}: id "${s}" is also used by ${i.get(s)}`),i.set(s,e),a.push(o.data)}return a}function kw(e){let t=[];return{content:{kinds:Ow(e,`kinds`,bc,t),packages:[`origins`,`professions`,`pasts`].flatMap(n=>Ow(e,n,Cc,t)),traits:Ow(e,`traits`,Ec,t),items:Ow(e,`items`,kc,t)},errors:t}}var{content:Aw,errors:jw}=kw(Object.entries(Object.assign({"../../content/items/anti-radiation-pills.yaml":$l,"../../content/items/arrows.yaml":eu,"../../content/items/backpack.yaml":tu,"../../content/items/ballistic-shield.yaml":nu,"../../content/items/ballistic-vest.yaml":ru,"../../content/items/bedroll.yaml":iu,"../../content/items/binoculars.yaml":au,"../../content/items/brigandine.yaml":ou,"../../content/items/buckler.yaml":su,"../../content/items/cargo-truck.yaml":H,"../../content/items/chainmail.yaml":cu,"../../content/items/club.yaml":lu,"../../content/items/cold-weather-gear.yaml":uu,"../../content/items/combat-helmet.yaml":du,"../../content/items/combat-knife.yaml":fu,"../../content/items/combat-voidsuit.yaml":pu,"../../content/items/comm-unit.yaml":mu,"../../content/items/compass.yaml":hu,"../../content/items/cooking-kit.yaml":gu,"../../content/items/crossbow-bolts.yaml":_u,"../../content/items/crossbow.yaml":vu,"../../content/items/dagger.yaml":yu,"../../content/items/disguise-kit.yaml":bu,"../../content/items/earth-reserve-credits.yaml":xu,"../../content/items/emp-grenade.yaml":Su,"../../content/items/engineers-toolkit.yaml":Cu,"../../content/items/faraday-shroud.yaml":wu,"../../content/items/field-sample-kit.yaml":Tu,"../../content/items/fighter.yaml":Eu,"../../content/items/fine-clothes.yaml":Du,"../../content/items/fishing-kit.yaml":Ou,"../../content/items/flail.yaml":ku,"../../content/items/flamethrower.yaml":Au,"../../content/items/flashlight.yaml":ju,"../../content/items/flint-and-steel.yaml":Mu,"../../content/items/frag-grenade.yaml":Nu,"../../content/items/fuel-canister.yaml":Pu,"../../content/items/gambeson.yaml":Fu,"../../content/items/geiger-counter.yaml":Iu,"../../content/items/grappling-hook.yaml":Lu,"../../content/items/greatsword.yaml":Ru,"../../content/items/halberd.yaml":zu,"../../content/items/hand-axe.yaml":Bu,"../../content/items/handcuffs.yaml":Vu,"../../content/items/hazmat-suit.yaml":Hu,"../../content/items/healers-kit.yaml":Uu,"../../content/items/helicopter.yaml":Wu,"../../content/items/hide-armor.yaml":Gu,"../../content/items/imperial-dollars.yaml":Ku,"../../content/items/incendiary-grenade.yaml":qu,"../../content/items/insulated-gloves.yaml":Ju,"../../content/items/javelin.yaml":Yu,"../../content/items/lantern.yaml":Xu,"../../content/items/leather-armor.yaml":Zu,"../../content/items/leather-jacket.yaml":Qu,"../../content/items/leatherworking-tools.yaml":$u,"../../content/items/lockpicks.yaml":ed,"../../content/items/longbow.yaml":td,"../../content/items/longsword.yaml":nd,"../../content/items/luras.yaml":U,"../../content/items/mace.yaml":rd,"../../content/items/machine-gun.yaml":W,"../../content/items/masonry-tools.yaml":G,"../../content/items/maul.yaml":K,"../../content/items/medkit.yaml":id,"../../content/items/missile-launcher.yaml":ad,"../../content/items/musical-instrument.yaml":od,"../../content/items/musket.yaml":sd,"../../content/items/night-vision-goggles.yaml":cd,"../../content/items/pack-animal.yaml":ld,"../../content/items/padded-coif.yaml":ud,"../../content/items/painkillers.yaml":dd,"../../content/items/painting-supplies.yaml":fd,"../../content/items/pistol-magazine.yaml":pd,"../../content/items/pistol.yaml":md,"../../content/items/plate-armor.yaml":hd,"../../content/items/plate-carrier.yaml":gd,"../../content/items/portable-computer.yaml":_d,"../../content/items/potion-kit.yaml":vd,"../../content/items/powder-and-shot.yaml":yd,"../../content/items/power-armor.yaml":bd,"../../content/items/quarterstaff.yaml":xd,"../../content/items/rad-suit.yaml":Sd,"../../content/items/rapier.yaml":Cd,"../../content/items/ration-pack.yaml":wd,"../../content/items/rebreather.yaml":Td,"../../content/items/renminbi.yaml":Ed,"../../content/items/revolver.yaml":Dd,"../../content/items/riding-animal.yaml":Od,"../../content/items/rifle-magazine.yaml":kd,"../../content/items/rifle.yaml":Ad,"../../content/items/riot-gear.yaml":jd,"../../content/items/rope.yaml":Md,"../../content/items/rowboat.yaml":Nd,"../../content/items/shortbow.yaml":Pd,"../../content/items/shortsword.yaml":Fd,"../../content/items/shotgun-shells.yaml":Id,"../../content/items/shotgun.yaml":Ld,"../../content/items/sling-stones.yaml":Rd,"../../content/items/sling.yaml":zd,"../../content/items/smithing-tools.yaml":Bd,"../../content/items/smoke-grenade.yaml":Vd,"../../content/items/sniper-rifle.yaml":Hd,"../../content/items/spear.yaml":Ud,"../../content/items/spyglass.yaml":Wd,"../../content/items/steel-helm.yaml":Gd,"../../content/items/stun-baton.yaml":Kd,"../../content/items/submachine-gun.yaml":qd,"../../content/items/surgical-kit.yaml":Jd,"../../content/items/taser.yaml":Yd,"../../content/items/tent.yaml":Xd,"../../content/items/throwing-knives.yaml":Zd,"../../content/items/torch.yaml":Qd,"../../content/items/tower-shield.yaml":$d,"../../content/items/trail-rations.yaml":ef,"../../content/items/travelers-cloak.yaml":tf,"../../content/items/turnout-gear.yaml":nf,"../../content/items/voidsuit.yaml":rf,"../../content/items/wagon.yaml":af,"../../content/items/war-axe.yaml":of,"../../content/items/war-hammer.yaml":sf,"../../content/items/warded-robes.yaml":cf,"../../content/items/waterskin.yaml":lf,"../../content/items/wooden-shield.yaml":uf,"../../content/items/writing-kit.yaml":df,"../../content/kinds/ai-core.yaml":ff,"../../content/kinds/dreft/guwain.yaml":pf,"../../content/kinds/dreft/isek.yaml":mf,"../../content/kinds/dreft/tatot-goblinoid.yaml":hf,"../../content/kinds/dreft/tatot-orcoid.yaml":gf,"../../content/kinds/human.yaml":_f,"../../content/origins/american-empire/american-empire-colonies.yaml":q,"../../content/origins/american-empire/american-empire-earth.yaml":vf,"../../content/origins/centafrica/centafrica-colonies.yaml":yf,"../../content/origins/centafrica/centafrica-earth.yaml":bf,"../../content/origins/chinese-empire/chinese-empire-colonies.yaml":xf,"../../content/origins/chinese-empire/chinese-empire-earth.yaml":Sf,"../../content/origins/dreft/dreft.yaml":Cf,"../../content/origins/drovus/the-drovus-empire.yaml":wf,"../../content/origins/free-american-states/the-free-american-states.yaml":Tf,"../../content/origins/karsef/kingdom-of-karsef.yaml":Ef,"../../content/origins/kashgar/kashgar.yaml":Df,"../../content/origins/kingdom-of-india/the-kingdom-of-india-colonies.yaml":Of,"../../content/origins/kingdom-of-india/the-kingdom-of-india-earth.yaml":kf,"../../content/origins/lunar-industrial-syndicate/the-lunar-industrial-syndicate.yaml":Af,"../../content/origins/sdu/sdu-colonies.yaml":jf,"../../content/origins/sdu/sdu-earth.yaml":Mf,"../../content/origins/sorellion/kingdom-of-sorellion.yaml":Nf,"../../content/origins/tetra/tetra.yaml":Pf,"../../content/origins/union-of-texas/the-union-of-texas.yaml":Ff,"../../content/origins/ural-federation/the-ural-federation.yaml":If,"../../content/origins/xanthus/xanthus.yaml":Lf,"../../content/pasts/any/craft-apprenticeship.yaml":Rf,"../../content/pasts/any/criminal-family.yaml":zf,"../../content/pasts/any/gutter-trash.yaml":Bf,"../../content/pasts/any/military-service.yaml":Vf,"../../content/pasts/any/privileged-upbringing.yaml":Hf,"../../content/pasts/any/raised-at-court.yaml":Uf,"../../content/pasts/any/shipborn.yaml":Wf,"../../content/pasts/any/simple-farmer.yaml":Gf,"../../content/pasts/any/traveling-troupe.yaml":J,"../../content/pasts/dreft/countryside-upbringing.yaml":Kf,"../../content/pasts/dreft/expelled-from-the-mage-schools.yaml":qf,"../../content/pasts/dreft/glintl-docks.yaml":Jf,"../../content/pasts/dreft/karsef-border-veteran.yaml":Yf,"../../content/pasts/dreft/merchant-dynasty.yaml":Xf,"../../content/pasts/dreft/monster-raided-village.yaml":Zf,"../../content/pasts/dreft/noble-household.yaml":Qf,"../../content/pasts/dreft/palace-servant.yaml":$f,"../../content/pasts/dreft/raised-in-the-caravan-town.yaml":ep,"../../content/pasts/dreft/returned-from-the-systems.yaml":tp,"../../content/pasts/dreft/sunrise-refugee.yaml":np,"../../content/pasts/systems/station-rat.yaml":rp,"../../content/pasts/systems/university-educated.yaml":ip,"../../content/pasts/tetra/delegation-child.yaml":Y,"../../content/pasts/tetra/gate-lab-kid.yaml":ap,"../../content/pasts/tetra/holding-company-kid.yaml":op,"../../content/pasts/tetra/parasapient-quarter.yaml":sp,"../../content/pasts/tetra/raised-in-the-infill.yaml":cp,"../../content/pasts/tetra/raised-on-ward-politics.yaml":lp,"../../content/professions/any/apothecary.yaml":up,"../../content/professions/any/bard.yaml":dp,"../../content/professions/any/blacksmith.yaml":fp,"../../content/professions/any/courier.yaml":pp,"../../content/professions/any/criminal-enforcer.yaml":mp,"../../content/professions/any/doctor.yaml":hp,"../../content/professions/any/farmer.yaml":gp,"../../content/professions/any/jester.yaml":_p,"../../content/professions/any/knight.yaml":vp,"../../content/professions/any/local-police.yaml":yp,"../../content/professions/any/musical-artist.yaml":bp,"../../content/professions/any/ranger.yaml":xp,"../../content/professions/any/smuggler.yaml":Sp,"../../content/professions/any/spy.yaml":Cp,"../../content/professions/any/squire.yaml":wp,"../../content/professions/any/stonemason.yaml":Tp,"../../content/professions/any/surgeon.yaml":Ep,"../../content/professions/any/tanner.yaml":Dp,"../../content/professions/any/visual-artist.yaml":Op,"../../content/professions/dreft/alchemist.yaml":kp,"../../content/professions/dreft/caravaneer.yaml":Ap,"../../content/professions/dreft/dreft-local-militia.yaml":jp,"../../content/professions/dreft/dreft-mercenary.yaml":Mp,"../../content/professions/dreft/gate-hand.yaml":Np,"../../content/professions/dreft/guild-hunter.yaml":Pp,"../../content/professions/dreft/hedge-witch.yaml":Fp,"../../content/professions/dreft/licensed-mage.yaml":Ip,"../../content/professions/dreft/royal-guard.yaml":Lp,"../../content/professions/systems/american-empire-soldier.yaml":Rp,"../../content/professions/systems/combat-medic.yaml":zp,"../../content/professions/systems/computer-engineer.yaml":Bp,"../../content/professions/systems/emergency-medical-technician.yaml":Vp,"../../content/professions/systems/exotic-specimen-dealer.yaml":Hp,"../../content/professions/systems/fighter-pilot.yaml":Up,"../../content/professions/systems/interplanar-diplomat.yaml":Wp,"../../content/professions/systems/interplanar-rights-lawyer.yaml":Gp,"../../content/professions/systems/officer-of-the-bureau-of-planar-management-and-enforcement.yaml":Kp,"../../content/professions/systems/paraarcheologist.yaml":qp,"../../content/professions/systems/paraecologist.yaml":Jp,"../../content/professions/systems/paraethnologist.yaml":Yp,"../../content/professions/systems/paraevolutionary-scientist.yaml":Xp,"../../content/professions/systems/paraphysiologist.yaml":Zp,"../../content/professions/systems/parazoological-keeper.yaml":Qp,"../../content/professions/systems/planar-expeditionary-professional.yaml":$p,"../../content/professions/systems/starship-engineer.yaml":em,"../../content/professions/systems/station-maintenance.yaml":tm,"../../content/professions/systems/theoretical-paraphysicist.yaml":nm,"../../content/professions/systems/truck-pilot.yaml":rm,"../../content/traits/ability/capable-student.yaml":im,"../../content/traits/ability/con-man.yaml":am,"../../content/traits/ability/eagle-eye.yaml":om,"../../content/traits/ability/gladiator.yaml":sm,"../../content/traits/ability/knowledge-sponge.yaml":cm,"../../content/traits/ability/magic-access.yaml":lm,"../../content/traits/ability/magical-heritage.yaml":um,"../../content/traits/ability/mental-fortitude.yaml":dm,"../../content/traits/ability/natural-breath-weapon.yaml":fm,"../../content/traits/ability/sculpted.yaml":pm,"../../content/traits/ability/trail-runner.yaml":mm,"../../content/traits/circumstance/explorers-lodge-membership.yaml":hm,"../../content/traits/circumstance/imperial-service-record.yaml":gm,"../../content/traits/circumstance/short-term-fame.yaml":_m,"../../content/traits/circumstance/significant-inheritance.yaml":vm,"../../content/traits/circumstance/thieves-guild-membership.yaml":ym,"../../content/traits/circumstance/tugboat-captain.yaml":bm,"../../content/traits/circumstance/wanted-in-sol.yaml":xm,"../../content/traits/condition/cybernetic-intelligence.yaml":Sm,"../../content/traits/condition/damaged.yaml":Cm,"../../content/traits/condition/dead.yaml":wm,"../../content/traits/condition/destroyed.yaml":Tm,"../../content/traits/condition/ghost-sight.yaml":Em,"../../content/traits/condition/hard-shell.yaml":Dm,"../../content/traits/condition/healthy.yaml":Om,"../../content/traits/condition/incapacitated.yaml":km,"../../content/traits/condition/injured.yaml":Am,"../../content/traits/condition/long-toothed.yaml":jm,"../../content/traits/condition/mechanical.yaml":Mm,"../../content/traits/condition/severe-bleeding.yaml":Nm,"../../content/traits/condition/severely-injured.yaml":Pm,"../../content/traits/condition/sorcerous.yaml":Fm,"../../content/traits/condition/stimm-rush.yaml":Im,"../../content/traits/condition/stone-skin.yaml":Lm,"../../content/traits/condition/supernatural.yaml":Rm,"../../content/traits/contact/additional-contact.yaml":zm,"../../content/traits/knowledge/additional-language.yaml":Bm,"../../content/traits/knowledge/ai-culture.yaml":Vm,"../../content/traits/knowledge/aksum.yaml":Hm,"../../content/traits/knowledge/alchemy.yaml":Um,"../../content/traits/knowledge/amaravati.yaml":Wm,"../../content/traits/knowledge/american-geography.yaml":Gm,"../../content/traits/knowledge/american-history.yaml":Km,"../../content/traits/knowledge/amharic-written.yaml":qm,"../../content/traits/knowledge/amharic.yaml":Jm,"../../content/traits/knowledge/animal-lore.yaml":Ym,"../../content/traits/knowledge/antiluna.yaml":Xm,"../../content/traits/knowledge/arabic-written.yaml":Zm,"../../content/traits/knowledge/arabic.yaml":Qm,"../../content/traits/knowledge/architecture.yaml":$m,"../../content/traits/knowledge/aristocracy.yaml":eh,"../../content/traits/knowledge/ark-life.yaml":th,"../../content/traits/knowledge/ark-new-york.yaml":nh,"../../content/traits/knowledge/art-history.yaml":rh,"../../content/traits/knowledge/artificial-intelligence.yaml":ih,"../../content/traits/knowledge/asteroid-mining.yaml":ah,"../../content/traits/knowledge/bandits-and-brigands.yaml":oh,"../../content/traits/knowledge/bengali-written.yaml":sh,"../../content/traits/knowledge/bengali.yaml":ch,"../../content/traits/knowledge/biology.yaml":lh,"../../content/traits/knowledge/boneyard.yaml":uh,"../../content/traits/knowledge/bureaucracy.yaml":dh,"../../content/traits/knowledge/burmese-written.yaml":fh,"../../content/traits/knowledge/burmese.yaml":ph,"../../content/traits/knowledge/cantonese-written.yaml":mh,"../../content/traits/knowledge/cantonese.yaml":hh,"../../content/traits/knowledge/caravan-routes.yaml":gh,"../../content/traits/knowledge/centafrica.yaml":_h,"../../content/traits/knowledge/centafrican-law.yaml":vh,"../../content/traits/knowledge/chemistry.yaml":yh,"../../content/traits/knowledge/chinese-imperial-law.yaml":bh,"../../content/traits/knowledge/coastal-trade.yaml":xh,"../../content/traits/knowledge/commerce.yaml":Sh,"../../content/traits/knowledge/computer-systems.yaml":Ch,"../../content/traits/knowledge/countryside-lore.yaml":wh,"../../content/traits/knowledge/court-etiquette.yaml":Th,"../../content/traits/knowledge/criminal-underworld.yaml":Eh,"../../content/traits/knowledge/cryptography.yaml":Dh,"../../content/traits/knowledge/cybernetics.yaml":Oh,"../../content/traits/knowledge/diplomatic-protocol.yaml":kh,"../../content/traits/knowledge/dreft.yaml":Ah,"../../content/traits/knowledge/dreftan-written.yaml":jh,"../../content/traits/knowledge/dreftan.yaml":Mh,"../../content/traits/knowledge/dreftian-law.yaml":Nh,"../../content/traits/knowledge/dutch-written.yaml":Ph,"../../content/traits/knowledge/dutch.yaml":Fh,"../../content/traits/knowledge/dwarvish-runes-written.yaml":Ih,"../../content/traits/knowledge/dwarvish.yaml":Lh,"../../content/traits/knowledge/earth-baseline-customs.yaml":Rh,"../../content/traits/knowledge/earth-baseline-technology.yaml":zh,"../../content/traits/knowledge/ecology.yaml":Bh,"../../content/traits/knowledge/elemental-magics.yaml":Vh,"../../content/traits/knowledge/engineering.yaml":Hh,"../../content/traits/knowledge/english-written.yaml":Uh,"../../content/traits/knowledge/english.yaml":Wh,"../../content/traits/knowledge/exotic-materials.yaml":Gh,"../../content/traits/knowledge/farming.yaml":Kh,"../../content/traits/knowledge/filipino-written.yaml":qh,"../../content/traits/knowledge/filipino.yaml":Jh,"../../content/traits/knowledge/french-written.yaml":Yh,"../../content/traits/knowledge/french.yaml":Xh,"../../content/traits/knowledge/gambling.yaml":Zh,"../../content/traits/knowledge/geography.yaml":Qh,"../../content/traits/knowledge/german-written.yaml":$h,"../../content/traits/knowledge/german.yaml":eg,"../../content/traits/knowledge/glintl.yaml":tg,"../../content/traits/knowledge/gujarati-written.yaml":ng,"../../content/traits/knowledge/gujarati.yaml":rg,"../../content/traits/knowledge/hausa-written.yaml":ig,"../../content/traits/knowledge/hausa.yaml":ag,"../../content/traits/knowledge/heraldry.yaml":og,"../../content/traits/knowledge/herbalism.yaml":sg,"../../content/traits/knowledge/high-society.yaml":cg,"../../content/traits/knowledge/hindi-written.yaml":lg,"../../content/traits/knowledge/hindi.yaml":ug,"../../content/traits/knowledge/history.yaml":dg,"../../content/traits/knowledge/imperial-law.yaml":fg,"../../content/traits/knowledge/imperial-politics.yaml":pg,"../../content/traits/knowledge/indian-law.yaml":mg,"../../content/traits/knowledge/indian-theology.yaml":hg,"../../content/traits/knowledge/indonesian-written.yaml":gg,"../../content/traits/knowledge/indonesian.yaml":_g,"../../content/traits/knowledge/interplanar-law.yaml":vg,"../../content/traits/knowledge/interplanar-relations.yaml":yg,"../../content/traits/knowledge/italian-written.yaml":bg,"../../content/traits/knowledge/italian.yaml":xg,"../../content/traits/knowledge/japanese-written.yaml":Sg,"../../content/traits/knowledge/japanese.yaml":Cg,"../../content/traits/knowledge/javanese-written.yaml":wg,"../../content/traits/knowledge/javanese.yaml":Tg,"../../content/traits/knowledge/kannada-written.yaml":Eg,"../../content/traits/knowledge/kannada.yaml":Dg,"../../content/traits/knowledge/karsef.yaml":Og,"../../content/traits/knowledge/kashgar-mindworks.yaml":kg,"../../content/traits/knowledge/kashgar.yaml":Ag,"../../content/traits/knowledge/kazakh-written.yaml":jg,"../../content/traits/knowledge/kazakh.yaml":Mg,"../../content/traits/knowledge/khmer-written.yaml":Ng,"../../content/traits/knowledge/khmer.yaml":Pg,"../../content/traits/knowledge/kinyarwanda-written.yaml":Fg,"../../content/traits/knowledge/kinyarwanda.yaml":Ig,"../../content/traits/knowledge/korean-written.yaml":Lg,"../../content/traits/knowledge/korean.yaml":Rg,"../../content/traits/knowledge/kyrgyz-written.yaml":zg,"../../content/traits/knowledge/kyrgyz.yaml":Bg,"../../content/traits/knowledge/lao-written.yaml":Vg,"../../content/traits/knowledge/lao.yaml":Hg,"../../content/traits/knowledge/law-enforcement.yaml":Ug,"../../content/traits/knowledge/legal-systems.yaml":Wg,"../../content/traits/knowledge/lingala-written.yaml":Gg,"../../content/traits/knowledge/lingala.yaml":Kg,"../../content/traits/knowledge/liquid-democracy.yaml":qg,"../../content/traits/knowledge/literature.yaml":Jg,"../../content/traits/knowledge/local-folklore.yaml":Yg,"../../content/traits/knowledge/local-history.yaml":Xg,"../../content/traits/knowledge/magic-on-isekai.yaml":Zg,"../../content/traits/knowledge/malay-written.yaml":Qg,"../../content/traits/knowledge/malay.yaml":$g,"../../content/traits/knowledge/malayalam-written.yaml":e_,"../../content/traits/knowledge/malayalam.yaml":t_,"../../content/traits/knowledge/mandarin-written.yaml":n_,"../../content/traits/knowledge/mandarin.yaml":r_,"../../content/traits/knowledge/marathi-written.yaml":i_,"../../content/traits/knowledge/marathi.yaml":a_,"../../content/traits/knowledge/mathematics.yaml":o_,"../../content/traits/knowledge/medicine.yaml":s_,"../../content/traits/knowledge/metallurgy.yaml":c_,"../../content/traits/knowledge/military-tactics.yaml":l_,"../../content/traits/knowledge/mongolian-written.yaml":u_,"../../content/traits/knowledge/mongolian.yaml":d_,"../../content/traits/knowledge/monsters-of-isekai.yaml":f_,"../../content/traits/knowledge/mountaineering.yaml":p_,"../../content/traits/knowledge/music.yaml":m_,"../../content/traits/knowledge/navigation.yaml":h_,"../../content/traits/knowledge/nepali-written.yaml":g_,"../../content/traits/knowledge/nepali.yaml":__,"../../content/traits/knowledge/new-columbia.yaml":v_,"../../content/traits/knowledge/new-persia.yaml":y_,"../../content/traits/knowledge/noble-houses-of-dreft.yaml":b_,"../../content/traits/knowledge/odia-written.yaml":x_,"../../content/traits/knowledge/odia.yaml":S_,"../../content/traits/knowledge/orc-society.yaml":C_,"../../content/traits/knowledge/oromo-written.yaml":w_,"../../content/traits/knowledge/oromo.yaml":T_,"../../content/traits/knowledge/paraarcheology.yaml":E_,"../../content/traits/knowledge/parabiology.yaml":D_,"../../content/traits/knowledge/paraflora.yaml":O_,"../../content/traits/knowledge/paraphysics.yaml":k_,"../../content/traits/knowledge/parasapient-medicine.yaml":A_,"../../content/traits/knowledge/parasapients.yaml":j_,"../../content/traits/knowledge/parazoology.yaml":M_,"../../content/traits/knowledge/pataliputra.yaml":N_,"../../content/traits/knowledge/pathology.yaml":P_,"../../content/traits/knowledge/persian-written.yaml":F_,"../../content/traits/knowledge/persian.yaml":I_,"../../content/traits/knowledge/pharmacology.yaml":L_,"../../content/traits/knowledge/physics.yaml":R_,"../../content/traits/knowledge/planar-exploration.yaml":z_,"../../content/traits/knowledge/polish-written.yaml":B_,"../../content/traits/knowledge/polish.yaml":V_,"../../content/traits/knowledge/politics.yaml":H_,"../../content/traits/knowledge/port-herminst.yaml":U_,"../../content/traits/knowledge/ports-and-stations.yaml":W_,"../../content/traits/knowledge/portuguese-written.yaml":G_,"../../content/traits/knowledge/portuguese.yaml":K_,"../../content/traits/knowledge/psychology.yaml":q_,"../../content/traits/knowledge/punjabi-written.yaml":J_,"../../content/traits/knowledge/punjabi.yaml":Y_,"../../content/traits/knowledge/robotics.yaml":X_,"../../content/traits/knowledge/romanian-written.yaml":Z_,"../../content/traits/knowledge/romanian.yaml":Q_,"../../content/traits/knowledge/russian-written.yaml":$_,"../../content/traits/knowledge/russian.yaml":ev,"../../content/traits/knowledge/sdu-law.yaml":tv,"../../content/traits/knowledge/seafaring.yaml":nv,"../../content/traits/knowledge/security-systems.yaml":rv,"../../content/traits/knowledge/shipping-lanes.yaml":iv,"../../content/traits/knowledge/sinhala-written.yaml":av,"../../content/traits/knowledge/sinhala.yaml":ov,"../../content/traits/knowledge/somali-written.yaml":sv,"../../content/traits/knowledge/somali.yaml":cv,"../../content/traits/knowledge/sorellion.yaml":lv,"../../content/traits/knowledge/southeast-asia.yaml":uv,"../../content/traits/knowledge/spacefaring.yaml":dv,"../../content/traits/knowledge/spanish-written.yaml":fv,"../../content/traits/knowledge/spanish.yaml":pv,"../../content/traits/knowledge/starships.yaml":mv,"../../content/traits/knowledge/succession-law.yaml":hv,"../../content/traits/knowledge/swahili-written.yaml":gv,"../../content/traits/knowledge/swahili.yaml":_v,"../../content/traits/knowledge/tamil-written.yaml":vv,"../../content/traits/knowledge/tamil.yaml":yv,"../../content/traits/knowledge/telugu-written.yaml":bv,"../../content/traits/knowledge/telugu.yaml":xv,"../../content/traits/knowledge/tetra-frontiers-co.yaml":Sv,"../../content/traits/knowledge/tetra.yaml":Cv,"../../content/traits/knowledge/thai-written.yaml":wv,"../../content/traits/knowledge/thai.yaml":Tv,"../../content/traits/knowledge/the-bureau-of-planar-management.yaml":Ev,"../../content/traits/knowledge/the-chinese-empire.yaml":Dv,"../../content/traits/knowledge/the-corporate-syndicates.yaml":Ov,"../../content/traits/knowledge/the-corsine-pass.yaml":kv,"../../content/traits/knowledge/the-diplomatic-wing.yaml":Av,"../../content/traits/knowledge/the-drovus-empire.yaml":jv,"../../content/traits/knowledge/the-explorers-lodge.yaml":Mv,"../../content/traits/knowledge/the-free-american-states.yaml":Nv,"../../content/traits/knowledge/the-imperial-military.yaml":Pv,"../../content/traits/knowledge/the-kingdom-of-india.yaml":Fv,"../../content/traits/knowledge/the-kings-woods.yaml":Iv,"../../content/traits/knowledge/the-lunar-industrial-syndicate.yaml":Lv,"../../content/traits/knowledge/the-martian-association.yaml":Rv,"../../content/traits/knowledge/the-stellar-democratic-union.yaml":zv,"../../content/traits/knowledge/the-sunrise-princedoms.yaml":Bv,"../../content/traits/knowledge/the-switch-port.yaml":Vv,"../../content/traits/knowledge/the-union-of-texas.yaml":Hv,"../../content/traits/knowledge/the-united-nations.yaml":Uv,"../../content/traits/knowledge/the-ural-federation.yaml":Wv,"../../content/traits/knowledge/theater.yaml":Gv,"../../content/traits/knowledge/thieves-cant.yaml":Kv,"../../content/traits/knowledge/toxicology.yaml":qv,"../../content/traits/knowledge/trade-guilds.yaml":Jv,"../../content/traits/knowledge/trade-law.yaml":Yv,"../../content/traits/knowledge/trade-roads.yaml":Xv,"../../content/traits/knowledge/turkish-written.yaml":Zv,"../../content/traits/knowledge/turkish.yaml":Qv,"../../content/traits/knowledge/ukrainian-written.yaml":$v,"../../content/traits/knowledge/ukrainian.yaml":ey,"../../content/traits/knowledge/union-politics.yaml":ty,"../../content/traits/knowledge/ural-tribal-law.yaml":ny,"../../content/traits/knowledge/urdu-written.yaml":ry,"../../content/traits/knowledge/urdu.yaml":iy,"../../content/traits/knowledge/uyghur-written.yaml":ay,"../../content/traits/knowledge/uyghur.yaml":oy,"../../content/traits/knowledge/vietnamese-written.yaml":sy,"../../content/traits/knowledge/vietnamese.yaml":cy,"../../content/traits/knowledge/weapons.yaml":ly,"../../content/traits/knowledge/wilderness-lore.yaml":uy,"../../content/traits/knowledge/xanthus.yaml":dy,"../../content/traits/knowledge/yoruba-written.yaml":fy,"../../content/traits/knowledge/yoruba.yaml":py,"../../content/traits/knowledge/yutu.yaml":my,"../../content/traits/knowledge/zhulong.yaml":hy,"../../content/traits/other/possessed-by-a-spirit.yaml":gy,"../../content/traits/skill/advanced-cooking.yaml":_y,"../../content/traits/skill/advanced-potion-mixing.yaml":vy,"../../content/traits/skill/ambusher.yaml":yy,"../../content/traits/skill/animal-husbandry.yaml":by,"../../content/traits/skill/appraisal.yaml":xy,"../../content/traits/skill/artist-painting.yaml":Sy,"../../content/traits/skill/artist-sculpture.yaml":Cy,"../../content/traits/skill/cargo-handling.yaml":wy,"../../content/traits/skill/concealment.yaml":Ty,"../../content/traits/skill/courtly-manners.yaml":Ey,"../../content/traits/skill/craft-leatherworking.yaml":Dy,"../../content/traits/skill/craft-masonry.yaml":Oy,"../../content/traits/skill/craft-smithing.yaml":ky,"../../content/traits/skill/disguise.yaml":Ay,"../../content/traits/skill/excavation.yaml":jy,"../../content/traits/skill/expert-pilot.yaml":My,"../../content/traits/skill/field-sampling.yaml":Ny,"../../content/traits/skill/folk-remedies.yaml":Py,"../../content/traits/skill/haggler.yaml":Fy,"../../content/traits/skill/incantation.yaml":Iy,"../../content/traits/skill/intimidation.yaml":Ly,"../../content/traits/skill/investigation.yaml":Ry,"../../content/traits/skill/legal-advocacy.yaml":zy,"../../content/traits/skill/lockpicking.yaml":By,"../../content/traits/skill/medical-aid.yaml":Vy,"../../content/traits/skill/military-drill.yaml":Hy,"../../content/traits/skill/performer-acrobatics.yaml":Uy,"../../content/traits/skill/performer-music.yaml":Wy,"../../content/traits/skill/pilot-fighter.yaml":Gy,"../../content/traits/skill/pilot-helicopter.yaml":Ky,"../../content/traits/skill/pilot-truck.yaml":qy,"../../content/traits/skill/planar-surveying.yaml":Jy,"../../content/traits/skill/programming.yaml":Yy,"../../content/traits/skill/relic-handling.yaml":Xy,"../../content/traits/skill/research.yaml":Zy,"../../content/traits/skill/rider-basic-animals.yaml":Qy,"../../content/traits/skill/schemer.yaml":$y,"../../content/traits/skill/shield-wall.yaml":eb,"../../content/traits/skill/simple-cooking.yaml":tb,"../../content/traits/skill/simple-potion-mixing.yaml":nb,"../../content/traits/skill/sleight-of-hand.yaml":rb,"../../content/traits/skill/smooth-talker.yaml":ib,"../../content/traits/skill/specimen-handling.yaml":ab,"../../content/traits/skill/starship-engineering.yaml":ob,"../../content/traits/skill/streetwise.yaml":sb,"../../content/traits/skill/surgery.yaml":cb,"../../content/traits/skill/survivalist.yaml":lb,"../../content/traits/skill/teamster.yaml":ub,"../../content/traits/skill/tinkerer.yaml":db,"../../content/traits/skill/tracker.yaml":fb,"../../content/traits/skill/vigilance.yaml":pb,"../../content/traits/skill/wielder-bow.yaml":mb,"../../content/traits/skill/wielder-crossbow.yaml":hb,"../../content/traits/skill/wielder-dagger.yaml":gb,"../../content/traits/skill/wielder-flamethrower.yaml":_b,"../../content/traits/skill/wielder-greatsword.yaml":vb,"../../content/traits/skill/wielder-grenade.yaml":yb,"../../content/traits/skill/wielder-longsword.yaml":bb,"../../content/traits/skill/wielder-mace.yaml":xb,"../../content/traits/skill/wielder-machine-gun.yaml":Sb,"../../content/traits/skill/wielder-missile-launcher.yaml":Cb,"../../content/traits/skill/wielder-mortar.yaml":wb,"../../content/traits/skill/wielder-musket.yaml":Tb,"../../content/traits/skill/wielder-pistol.yaml":Eb,"../../content/traits/skill/wielder-polearm.yaml":Db,"../../content/traits/skill/wielder-rifle.yaml":Ob,"../../content/traits/skill/wielder-shortsword.yaml":kb,"../../content/traits/skill/wielder-shotgun.yaml":Ab,"../../content/traits/skill/wielder-siege-engine.yaml":jb,"../../content/traits/skill/wielder-sling.yaml":Mb,"../../content/traits/skill/wielder-sniper-rifle.yaml":Nb,"../../content/traits/skill/wielder-spear.yaml":Pb,"../../content/traits/skill/wielder-staff.yaml":Fb,"../../content/traits/skill/wielder-throwing-weapon.yaml":Ib,"../../content/traits/skill/wielder-war-axe.yaml":Lb})).map(([e,t])=>({path:e.slice(14),text:t}))),Mw=new Map(Aw.traits.map(e=>[e.id,e])),Nw=new Map(Aw.packages.map(e=>[e.id,e])),Pw=new Map(Aw.kinds.map(e=>[e.id,e])),Fw=new Map(Aw.items.map(e=>[e.id,e])),Iw=[`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`,`twenty`,`twenty-one`,`twenty-two`,`twenty-three`,`twenty-four`,`twenty-five`],Lw=[`first`,`second`,`third`,`fourth`,`fifth`,`sixth`,`seventh`,`eighth`,`ninth`,`tenth`,`eleventh`,`twelfth`,`thirteenth`,`fourteenth`,`fifteenth`,`sixteenth`,`seventeenth`,`eighteenth`,`nineteenth`,`twentieth`,`twenty-first`,`twenty-second`,`twenty-third`,`twenty-fourth`,`twenty-fifth`],Rw=e=>[...e].sort((e,t)=>t.length-e.length).map(e=>e.replace(`-`,`[\\s-]`)).join(`|`),zw=`(\\d{1,2}|${Rw(Iw)})`,Bw=`(\\d{1,2})(?:st|nd|rd|th)|(${Rw(Lw)})`,Vw=RegExp(`\\b(?:level|lvl|lv)[\\s-]*${zw}\\b`,`i`),Hw=RegExp(`\\b(?:${Bw})[\\s-]+(?:level|lvl)\\b`,`i`);function Uw(e,t){if(!e)return;let n=/^\d+$/.test(e)?Number(e):t.indexOf(e.toLowerCase().replace(/\s+/,`-`))+1;return n>=1&&n<=25?n:void 0}function Ww(e){let t=Vw.exec(e);if(t)return Uw(t[1],Iw);let n=Hw.exec(e);if(n)return Uw(n[1],Lw)??Uw(n[2],Lw)}var Z=n();async function Gw(e){if(!e.type.startsWith(`image/`))throw Error(`${e.name} isn't an image.`);let t;try{t=await createImageBitmap(e)}catch{throw Error(`Couldn't read ${e.name}. Try a PNG, JPEG or WebP.`)}let n=Math.min(1,512/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext(`2d`).drawImage(t,0,0,r.width,r.height),t.close();let i=r.toDataURL(`image/webp`,.82);if(i.startsWith(`data:image/webp`)||(i=r.toDataURL(`image/jpeg`,.85)),i.length>15e5)throw Error(`${e.name} is still too big after shrinking it.`);return i}var Kw=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),qw=e(((e,t)=>{t.exports=Kw()})),Q=qw(),Jw=Object.keys(V),Yw=Jw.filter(e=>V[e].length>0),$=e=>e.charAt(0).toUpperCase()+e.slice(1),Xw=e=>Mw.get(e)?.name??e,Zw=e=>`region-${e===`isekai`?`dreft`:`systems`}`,Qw=e=>Zw(Mw.get(e)?.plane),$w=(e,t)=>`+${e} ${t.split(`-`).map($).join(` `)}`,eT={isekai:{mark:`isekai`,name:`Isekai`},earth:{mark:`systems`,name:`The Settled Systems`}};function tT({plane:e}){let t=e?eT[e]:void 0;return t?(0,Q.jsx)(`span`,{className:`setting-icon setting-${t.mark}`,role:`img`,"aria-label":t.name,title:t.name}):null}var nT=e=>e.package===void 0?Xw(e.trait??``):Nw.get(e.package)?.name??e.package;function rT(e){return e.kind?Pw.get(e.kind)?.stats:void 0}function iT({title:e,children:t}){return(0,Q.jsxs)(`header`,{className:`step-head`,children:[(0,Q.jsx)(`h2`,{children:e}),t&&(0,Q.jsx)(`p`,{className:`lede`,children:t})]})}function aT(e){return(0,Q.jsx)(`div`,{role:`radio`,"aria-checked":e.selected,"aria-label":e.label,tabIndex:0,className:`card${e.className?` ${e.className}`:``}${e.selected?` selected`:``}`,onClick:e.onSelect,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.onSelect())},children:e.children})}var oT=3e3;function sT({children:e,fades:t,bad:n,onDismiss:r}){let[i,a]=(0,Z.useState)(!1),o=(0,Z.useRef)(r);return o.current=r,(0,Z.useEffect)(()=>{if(a(!1),!t)return;let e=setTimeout(()=>a(!0),oT),n=setTimeout(()=>o.current(),3400);return()=>{clearTimeout(e),clearTimeout(n)}},[e,t]),(0,Q.jsxs)(`div`,{className:`notice${n?` bad`:t?` is-success`:``}${i?` is-leaving`:``}`,role:`status`,children:[e,(0,Q.jsx)(`button`,{className:`link`,onClick:r,"aria-label":`Dismiss`,children:`✕`})]})}function cT({label:e,onClose:t,children:n,className:r=``}){let i=(0,Z.useRef)(null),a=(0,Z.useRef)(t);return a.current=t,(0,Z.useEffect)(()=>{let e=document.activeElement;i.current?.focus(),document.documentElement.classList.add(`lore-modal-open`);let t=e=>{e.key===`Escape`&&a.current()};return window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`keydown`,t),document.documentElement.classList.remove(`lore-modal-open`),e?.focus()}},[]),(0,Q.jsx)(`div`,{className:`lore-modal is-open ${r}`,role:`dialog`,"aria-modal":`true`,"aria-label":e,onClick:e=>e.target===e.currentTarget&&t(),children:(0,Q.jsxs)(`div`,{className:`lore-modal-panel`,children:[(0,Q.jsx)(`button`,{ref:i,type:`button`,className:`lore-modal-close`,"aria-label":`Close`,onClick:t,children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M2 2l16 16M18 2L2 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`})})}),n]})})}function lT(e){return(0,Q.jsx)(`span`,{className:`chip${e.tone?` chip-${e.tone}`:``}`,children:e.children})}var uT=20;function dT(e){let t=(0,Z.useRef)({value:e,from:e});return t.current.value!==e&&(t.current={value:e,from:t.current.value}),t.current.from}function fT({bonus:e,value:t,max:n}){let r=dT(t);return(0,Q.jsx)(`div`,{className:`stat-line`,"aria-hidden":`true`,children:Array.from({length:uT},(i,a)=>{let o=a+1,s=o<=t?o>n?`over`:o<=e?`default`:`filled`:o<=n?`empty`:`unavailable`,c=s===`filled`&&o>r?` is-new`:``;return(0,Q.jsx)(`span`,{className:`stat ${o%2?`dot`:`square`} ${s}${c}`},o)})})}function pT({bonus:e=0,value:t}){let n=dT(t);return(0,Q.jsx)(`div`,{className:`stat-line`,"aria-hidden":`true`,children:Array.from({length:uT},(r,i)=>(0,Q.jsx)(`span`,{className:`stat diamond ${i<e?`default`:i<t?`filled${i>=n?` is-new`:``}`:`empty`}`},i))})}function mT({stats:e}){return(0,Q.jsx)(`div`,{className:`stat-ranges`,children:Yw.map(t=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{className:`stat-ranges-group`,children:$(t)}),V[t].map(t=>(0,Q.jsxs)(`div`,{className:`stat-range`,children:[(0,Q.jsx)(`span`,{children:$(t)}),(0,Q.jsxs)(`span`,{className:`num`,children:[`+`,e[t]?.bonus,(0,Q.jsxs)(`span`,{className:`muted`,children:[`/`,e[t]?.max]})]})]},t))]},t))})}function hT({portrait:e,name:t,onChange:n,className:r=``}){let i=(0,Z.useRef)(null),[a,o]=(0,Z.useState)(),[s,c]=(0,Z.useState)(!1),[l,u]=(0,Z.useState)(!1),d=t?`Portrait of ${t}`:`Character portrait`;if(!n)return e?(0,Q.jsx)(`div`,{className:`portrait ${r}`,children:(0,Q.jsx)(`img`,{src:e,alt:d})}):null;let f=()=>{u(!1),o(void 0)},p=async e=>{if(e){c(!0),o(void 0);try{n(await Gw(e)),u(!1)}catch(e){o(e instanceof Error?e.message:String(e))}finally{c(!1)}}},m=()=>i.current?.click();return(0,Q.jsxs)(`div`,{className:`portrait-field ${r}`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`portrait${e?` portrait-filled`:` portrait-empty`}`,onClick:()=>e?u(!0):m(),disabled:s,"aria-label":e?`Edit the portrait`:`Add a portrait`,children:e?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`img`,{src:e,alt:``}),(0,Q.jsx)(`span`,{className:`portrait-edit`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`pen-icon`})})]}):(0,Q.jsxs)(`span`,{className:`portrait-prompt`,children:[(0,Q.jsx)(wT,{name:`upload`}),s?`Shrinking…`:`Add a portrait`]})}),(0,Q.jsx)(`input`,{ref:i,type:`file`,accept:`image/png,image/jpeg,image/webp,image/gif,image/avif`,hidden:!0,onChange:e=>{p(e.target.files?.[0]),e.target.value=``}}),a&&!l&&(0,Q.jsx)(`p`,{className:`portrait-error`,children:a}),l&&e&&(0,Q.jsxs)(cT,{label:`Portrait`,onClose:f,className:`portrait-popup`,children:[(0,Q.jsx)(`h3`,{className:`lore-modal-title`,children:`Portrait`}),(0,Q.jsx)(`img`,{className:`portrait-large`,src:e,alt:d}),a&&(0,Q.jsx)(`p`,{className:`portrait-error`,children:a}),(0,Q.jsxs)(`div`,{className:`portrait-actions`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`primary`,onClick:m,disabled:s,children:[(0,Q.jsx)(wT,{name:`upload`}),s?`Shrinking…`:`Replace image`]}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>{n(void 0),f()},disabled:s,children:`Remove`})]})]})]})}function gT({description:e,onChange:t}){return t?(0,Q.jsx)(`div`,{className:`sheet-description`,children:(0,Q.jsx)(`textarea`,{"aria-label":`Description`,value:e??``,maxLength:4e3,placeholder:`Who they are, how they look, what they want.`,onChange:e=>t(e.target.value||void 0)})}):e?(0,Q.jsx)(`div`,{className:`sheet-description`,children:(0,Q.jsx)(`p`,{children:e})}):null}function _T({looks:e,onChange:t,disabled:n,fieldClass:r,inputClass:i}){let a=n=>{let r=Number(n);t({...e,age:n===``||!Number.isFinite(r)?void 0:Math.min(jl,Math.max(0,Math.floor(r)))})},o=n=>{let r=n===`unlisted`?void 0:n;t({...e,gender:r,customGender:r===`custom`?e.customGender:void 0})};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`label`,{className:`${r} age-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Age`}),(0,Q.jsx)(`input`,{className:i,type:`number`,inputMode:`numeric`,min:0,max:jl,step:1,value:e.age??``,placeholder:`—`,onChange:e=>a(e.target.value),disabled:n})]}),(0,Q.jsxs)(`label`,{className:`${r} gender-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Gender`}),(0,Q.jsx)(`select`,{className:i,value:e.gender??`unlisted`,onChange:e=>o(e.target.value),disabled:n,children:vl.map(e=>(0,Q.jsx)(`option`,{value:e,children:$(e)},e))})]}),e.gender===`custom`&&(0,Q.jsxs)(`label`,{className:`${r} custom-gender-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Custom Gender`}),(0,Q.jsx)(`input`,{className:i,value:e.customGender??``,maxLength:40,placeholder:`In your own words`,onChange:n=>t({...e,customGender:n.target.value||void 0}),disabled:n})]}),(0,Q.jsxs)(`label`,{className:`${r} height-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Height`}),(0,Q.jsx)(`input`,{className:i,value:e.height??``,maxLength:20,placeholder:`—`,onChange:n=>t({...e,height:n.target.value||void 0}),disabled:n})]}),(0,Q.jsxs)(`label`,{className:`${r} weight-field`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Weight`}),(0,Q.jsx)(`input`,{className:i,value:e.weight??``,maxLength:20,placeholder:`—`,onChange:n=>t({...e,weight:n.target.value||void 0}),disabled:n})]})]})}function vT({name:e,onChange:t,heading:n,className:r}){let[i,a]=(0,Z.useState)(!1),[o,s]=(0,Z.useState)(e??``),c=()=>{s(e??``),a(!0)},l=e=>{e&&t(o.trim()||void 0),a(!1)};return(0,Q.jsxs)(`div`,{className:`name-field-line ${r}`,children:[(0,Q.jsx)(n,{children:i?(0,Q.jsx)(`input`,{className:`name-input`,"aria-label":`Character name`,value:o,maxLength:80,placeholder:`Unnamed character`,autoFocus:!0,onChange:e=>s(e.target.value),onBlur:()=>l(!0),onKeyDown:e=>{e.key===`Enter`&&l(!0),e.key===`Escape`&&l(!1)}}):(0,Q.jsx)(`button`,{type:`button`,className:`name-text${e?``:` muted`}`,onClick:c,children:e||`Unnamed character`})}),(0,Q.jsx)(`button`,{type:`button`,className:`name-edit`,"aria-label":`Edit the name`,onMouseDown:e=>i&&e.preventDefault(),onClick:()=>i?l(!0):c(),children:(0,Q.jsx)(`span`,{className:`pen-icon`,"aria-hidden":`true`})})]})}var yT={left:`M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z`,right:`M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z`};function bT({to:e}){return(0,Q.jsx)(`svg`,{className:`arrow-icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:yT[e]})})}var xT={plus:`M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z`,minus:`M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z`};function ST({is:e}){return(0,Q.jsx)(`svg`,{className:`sign-icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:xT[e]})})}var CT={knowledge:{viewBox:`0 0 640 512`,d:`M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z`},language:{viewBox:`0 0 640 512`,d:`M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z`},download:{viewBox:`0 0 512 512`,d:`M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z`},switch:{viewBox:`0 0 512 512`,d:`M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z`},upload:{viewBox:`0 0 512 512`,d:`M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z`},print:{viewBox:`0 0 512 512`,d:`M448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h32c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM384 448H128v-96h256V448zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296zM128 64h229.5L384 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64V64z`},plus:{viewBox:`0 0 448 512`,d:`M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z`},restore:{viewBox:`0 0 512 512`,d:`M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z`},send:{viewBox:`0 0 512 512`,d:`M511.1 255.1c0 12.8-7.625 24.38-19.41 29.41L44.6 477.4c-4.062 1.75-8.344 2.594-12.59 2.594c-8.625 0-17.09-3.5-23.28-10.05c-9.219-9.766-11.34-24.25-5.344-36.27l73.66-147.3l242.1-30.37L77.03 225.6l-73.66-147.3C-2.623 66.3-.4982 51.81 8.72 42.05c9.25-9.766 23.56-12.75 35.87-7.453L492.6 226.6C504.4 231.6 511.1 243.2 511.1 255.1z`},blunt:{viewBox:`0 0 512 512`,d:`M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z`},slashing:{viewBox:`0 0 512 512`,d:`M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z`},piercing:{viewBox:`0 0 512 512`,d:`M242.5 21.5c-25.192 3.245-47.28 32.016-47.28 68.78 0 20.28 7.038 38.25 17.5 50.75l10.25 12.25-15.69 2.94c-6.058 1.128-11.42 3.163-16.25 6.093l50.907 29.343.22.125c10.092 5.547 17.387 12.847 21.687 20.72 4.332 7.932 5.865 16.78 2.562 24.75-3.302 7.97-12.133 13.29-21.687 13.344-9.457.054-20.02-3.703-32.345-11.5-.13-.082-.245-.136-.375-.22l-52.313-30.06a192.847 192.847 0 0 0-4.156 14.56c-8.238 33.626-9.925 74.615-10.155 110.407H189.5l.625 8.626 11.28 149.78 96.69.002 9.935-149.69.564-8.72h42c-.013-36.18-.378-77.737-7.844-111.624-4.05-18.384-10.197-34.295-18.813-45.75-8.615-11.454-19.257-18.706-34.593-21.062l-16-2.438L283.5 140.25c10.008-12.437 16.72-30.183 16.72-49.97-.002-39.2-24.78-68.718-52.5-68.718-2.913 0-4.762-.12-5.22-.062zM20.812 85.78v21.626l200.875 115.5.188.094.188.125c10.573 6.74 18.416 8.805 22.53 8.78 4.115-.022 4.113-.724 4.563-1.81.45-1.09.63-4.324-1.72-8.626-2.348-4.304-7.01-9.363-14.436-13.407l-.094-.032-.094-.06-212-122.19zm396.97 187.626-15.626 28.22-33.656-19.063c.355 8.144.576 16.234.688 24.187l22.906 13.03-15.47 27.94 114.97 15.124-73.813-89.438z`},heat:{viewBox:`0 0 512 512`,d:`M162.22 21.312c-183.876 106.68 51.994 227.35-10.19 332.47C116.95 413.083 38.11 325.45 43.75 227-6.035 353.376 30.21 443.745 95.22 492.75c1.386.34 17.577.498 41.186.562-28.478-16.9-32.06-75.355 32.813-103.25l15.78-7L182.062 400c-1.356 8.34-.318 13.95 1.188 16.937 1.507 2.987 3.106 3.544 5.844 4.094 5.475 1.1 16.963-2.395 26.28-14.624 18.636-24.457 29.117-80.228-26.874-167l-4.094-6.437-13.906-19.25 23.25 9.905 5.25 1.75c80.85 25.498 135.3 58.46 174.625 112.72 21.544-22.906 38.7-56.835 43.812-91.69l3.5-27.468 13.438 23.97c25.525 45.802 30.267 104.912 11.094 156.5-14.23 38.28-42.036 72.34-84 93.5 13.623-.01 24.05.032 25.25.124 154.76-34.77 139.345-244.952-14.19-394.093.012.726 0 1.46 0 2.188 78.964 185.87-136.465 189.104-119.25 11.47-41.686 100.463-132.86-2.147-91.06-91.283zM269.093 332.25c13.51 15.806 22.35 33.086 22.78 50.812.587 24.03-9.293 47.12-24.53 66.563-14.832 18.926-34.837 34.62-56.625 43.656 33.127-.065 64.926-.16 95.217-.25l-.062-.186c30.95-18.584 47.31-38.83 53.75-57.813 6.44-18.982 3.25-37.246-5.844-53.718-15.44-27.97-49.705-47.71-84.686-49.062z`},cold:{viewBox:`0 0 512 512`,d:`M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56l185.783 81.41c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z`},electrical:{viewBox:`0 0 512 512`,d:`M376 211H256V16L136 301h120v195z`},emp:{viewBox:`0 0 512 512`,d:`M133.844 19.97c-28.18.03-55.19 11.19-77.875 33.624-26.88 26.58-37.526 56.483-36.095 85.875 1.43 29.39 15.237 58.516 39 82.28 9.592 9.593 44.044 33.04 74.78 52.563 1.14.723 2.104 1.293 3.22 2l44.344-44.344c-22.65-18.013-45.176-36.208-53.72-44.75h-.03c-24.88-24.882-22.98-56.233-5.626-73.032 17.354-16.8 48.748-18.29 73.25 5.937 8.61 8.51 26.702 30.837 44.656 53.313l38.438-38.407c-.71-1.12-1.305-2.073-2.032-3.218-19.468-30.66-42.827-64.955-52.47-74.656C195.738 33.16 165.59 20.706 136.564 20c-.91-.022-1.81-.032-2.718-.03zm190.312 77.25-34.72 20.624c.836 1.31 1.673 2.633 2.502 3.937 19.683 31 36.406 59.032 36.406 59.032l3.75 6.25-5.156 5.157-46.313 46.31-7.47 7.47-6.5-8.344s-12.84-16.436-28.5-36.187l-28.843 28.843a9056.369 9056.369 0 0 0 36.22 28.437l8.374 6.47-7.5 7.5-52.344 52.374-5.156 5.156-6.25-3.75s-24.577-14.675-53.125-32.688l-19.78 48.22 36.375-14.344 15.156 81.718 28.126-55.28 60.406 63.25-15.718-86.126 51.875 6.28 2.624 1.345 4.03 47.344 77.595 11.092-12.095 52.375L403.47 492h86.624v-81.594l-50.375-29.22 10.092-41.31-96.718-3.032 14.094-44.313-42.157-29.967 2.345-21.094 52.344 17.06-31.126-69.75 42.72-22.53-65.44-20.063-1.718-48.968zm-35.78 54.03-36.907 36.906c11.742 14.79 19.468 24.643 23.405 29.688l33.656-33.656a2417.118 2417.118 0 0 0-20.155-32.938zm-92.407 92.406-42.876 42.875a2446.831 2446.831 0 0 0 32.937 20.158l39.72-39.75c-5.06-3.934-14.962-11.59-29.78-23.282z`},metaphysical:{viewBox:`0 0 512 512`,d:`M486 203.652H310.111L256 37.113l-54.111 166.539H26l142.22 103.623-54.462 167.612L256 371.24l142.242 103.646-54.473-167.612zm-85.995 28.008-65.335 47.596-15.46-47.596h80.795zM256 127.708l24.658 75.91H231.33zM111.995 231.66h80.795l-15.45 47.596zm55.097 169.713 24.932-76.743 40.194 29.29zm34.041-104.762 21.1-64.951h67.524l21.099 64.95-54.867 39.977zm143.731 104.762-65.082-47.454 40.194-29.29zm-37.983-264.359-10.424-32.092a183.269 183.269 0 0 1 114.322 81.21H376.43a155.293 155.293 0 0 0-69.55-49.118zM129 371.328l-10.413 32.049a182.425 182.425 0 0 1-43.918-142.581l26.684 19.435v2.847A153.804 153.804 0 0 0 129 371.284zm177.104 58.108 26.64 19.413a182.447 182.447 0 0 1-153.51 0l26.64-19.413a154.79 154.79 0 0 0 100.23 0zM135.569 186.133h-34.348a183.269 183.269 0 0 1 114.322-81.21l-10.424 32.091a155.293 155.293 0 0 0-69.55 49.119zm303.12 96.955a181.922 181.922 0 0 1-45.276 120.245L383 371.285a153.804 153.804 0 0 0 27.68-88.197v-2.846l26.683-19.446a183.685 183.685 0 0 1 1.325 22.292z`},death:{viewBox:`0 0 512 512`,d:`M296.625 25.406c-63.794.388-135.81 14.683-206.03 32.844-3.472 34.08 2.226 68.906 14.03 104.25C181.175 75.936 393.65 44.825 486.72 128 456.02 50.466 384.046 24.874 296.624 25.406zM65.655 61.438 27.906 71c5.643 78.022 28.546 132.393 60.44 174.47-16.54 10.348-40.693 19.673-68.782 26.843 5.664 6.597 14.25 16.18 30.53 18.53 24.846-4.33 39.912-14.982 53.75-26.593 76.24 85.145 190.22 118.955 253.126 224.22l49.436-.126C290.996 275.316 81.01 364.804 65.656 61.438z`},psychic:{viewBox:`0 0 512 512`,d:`M65.125 18.344C47.11 49.844 36.72 86.262 36.72 125.124c0 80.293 43.973 150.497 109.124 187.75.403-6.904.92-13.833 1.625-20.75-55.33-34.965-92.064-96.676-92.064-167 0-39.426 11.63-75.964 31.563-106.78H65.124zm69.03 0c-25.61 28.273-41.374 65.635-41.374 106.78 0 51.08 24.052 96.656 61.44 125.97l.06-.25c1.612-6.61 3.473-13.008 5.69-19.125-29.73-25.896-48.5-64.026-48.5-106.595 0-42.848 19.254-80.837 49.436-106.78h-26.75zm210.532 0c30.125 25.95 49.438 64.003 49.438 106.78 0 41.152-17.546 78.157-45.563 103.97 2.26 6.282 4.116 12.876 5.657 19.687 35.748-29.366 58.592-73.883 58.592-123.655 0-41.123-15.81-78.5-41.406-106.78h-26.72zm73.407 0c20.06 30.867 32.094 67.387 32.094 106.78 0 69.457-35.82 130.505-90 165.69.545 7.037.933 14.107 1.187 21.123 64.267-37.483 107.53-107.18 107.53-186.812 0-38.925-10.745-75.328-28.874-106.78h-21.936zm-165.313 2.28c-57.625 0-104.53 46.906-104.53 104.532 0 28.606 11.56 54.573 30.25 73.47 4.13-4.712 8.84-8.817 14.094-12.19-15.844-15.56-25.656-37.237-25.656-61.28 0-47.527 38.316-85.844 85.843-85.844 47.528 0 85.845 38.317 85.845 85.844 0 23.16-9.108 44.114-23.938 59.53 5.488 3.14 10.394 7.033 14.688 11.533 17.327-18.666 27.938-43.657 27.938-71.064 0-57.626-46.905-104.53-104.532-104.53zm-4.186 55.564c-21.622 2.8-40.97 27.91-40.97 60.28 0 17.846 6.173 33.653 15.282 44.595l10.188 12.218-15.656 2.94c-11.884 2.226-20.62 8.512-28.032 18.655-7.41 10.143-13.023 24.216-16.97 40.406-7.188 29.5-8.736 65.498-8.967 97.126h38.999l.655 8.656 9.906 132.5h83.69l8.75-132.437.592-8.72h37.125c-.02-32-.39-68.49-6.906-98.217-3.57-16.297-8.992-30.34-16.5-40.375-7.505-10.035-16.654-16.288-29.967-18.344L273.875 193l10.094-12.625c8.713-10.89 14.592-26.495 14.592-43.906 0-34.515-21.658-60.22-45.468-60.22-2.672 0-4.275-.092-4.5-.063z`},radiation:{viewBox:`0 0 512 512`,d:`M253.78 17.188c-130.728 0-236.905 106.177-236.905 236.906C16.875 384.824 123.052 491 253.78 491c130.73 0 236.907-106.18 236.907-236.906 0-130.73-106.177-236.906-236.906-236.906zm0 18.687c120.63 0 218.22 97.59 218.22 218.22 0 120.626-97.59 218.218-218.22 218.218-120.628 0-218.218-97.59-218.218-218.22s97.59-218.218 218.22-218.218zm101.19 46.313-76.41 132.875c15.916 9.635 25.177 26.33 26.125 43.78h148.407c1.644-70.01-33.49-138.867-98.125-176.656zm-205.126 2.468c-27.1 16.725-50.68 40.147-67.72 69.656-19.01 32.928-26.926 69.12-26 104.532H196a54.04 54.04 0 0 1 7.188-24.438c5.21-9.024 12.64-16 21.218-20.625L149.844 84.657zm100.594 141.156a36.723 36.723 0 0 0-2.594.094c-11.446.793-22.288 7.084-28.5 17.844-9.94 17.216-4.09 38.967 13.125 48.906 17.213 9.94 38.935 4.12 48.874-13.094 9.94-17.215 4.12-38.967-13.094-48.906-5.648-3.26-11.768-4.824-17.813-4.844zm28.218 82.375c-16.127 9.75-36.864 10.846-54.406 1.25l-68.03 117.22c29.454 16.785 61.044 25.177 92.75 26 34.567.898 68.72-7.786 99.124-24.032l-69.438-120.438z`},acidic:{viewBox:`0 0 512 512`,d:`M433.814 68.664c-2.74.05-5.495.423-8.242 1.152-8.47 2.25-15.3 7.512-20.44 14.49C292.905 120.865 186.494 154.58 75.276 190.4c-39.714 12.79-64.6 51.163-53.006 86.784 11.597 35.62 54.342 52.277 94.035 39.277l-.002.002c109.41-35.827 214.424-69.036 325.12-104.656.56.212 1.13.39 1.694.58-2.62 2.935-4.226 6.796-4.226 11.04 0 9.164 7.43 16.593 16.594 16.593 9.165 0 16.596-7.43 16.596-16.593 0-4.32-1.664-8.24-4.367-11.192 12.75-4.865 21.353-16.866 25.535-30.898 4.547-15.257 4.504-33.654-.584-52.48-5.088-18.828-14.327-34.77-25.94-45.712-8.712-8.206-19.263-13.79-30.175-14.43-.91-.052-1.822-.07-2.736-.054zm.497 18.68a17.2 17.2 0 0 1 1.377.035c5.567.358 11.818 3.34 18.22 9.37 8.535 8.04 16.44 21.165 20.716 36.986 3.622 13.4 4 26.397 2.012 36.852h-52.783c-3.517-6.207-6.512-13.352-8.622-21.158-4.276-15.822-4.046-31.094-.716-42.266 3.33-11.172 9.122-17.497 15.855-19.285a16.148 16.148 0 0 1 3.94-.536zm-38.414 17.043c-3.815 14.734-3.516 32.133 1.29 49.92a114.327 114.327 0 0 0 5.728 16.26h-151.22c-64.405 20.742-125.856 40.507-163.35 52.59-23.24 7.486-35.353 27.407-30.406 42.593 4.946 15.188 26.582 24.333 49.75 16.75 66.89-21.89 199.01-64.39 302.822-97.803 3.76 5.807 7.998 10.967 12.62 15.323.066.06.135.118.2.18-104.876 33.753-241.66 77.74-309.83 100.05-30.827 10.09-64.424-1.334-73.344-28.72-8.92-27.385 11.603-56.22 42.438-66.155 68.055-21.93 208.2-66.996 313.302-100.988zm59.58 180.205c-16.948 63.255-40.507 54.472-40.507 91.5 0 22.36 18.146 40.508 40.507 40.508 22.36 0 40.507-18.147 40.507-40.508 0-39.97-23.256-27.12-40.507-91.5z`}};function wT({name:e,label:t,className:n=``}){let{viewBox:r,d:i}=CT[e];return(0,Q.jsxs)(`svg`,{className:`icon icon-${e} ${n}`.trim(),xmlns:`http://www.w3.org/2000/svg`,viewBox:r,role:t?`img`:void 0,"aria-label":t,"aria-hidden":!t||void 0,children:[t&&(0,Q.jsx)(`title`,{children:t}),(0,Q.jsx)(`path`,{d:i})]})}function TT({label:e,level:t,onChange:n,disabled:r,className:i=``}){return(0,Q.jsxs)(`div`,{className:`level-stepper ${i}`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:e}),(0,Q.jsxs)(`div`,{className:`stepper`,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:()=>n(Math.max(1,t-1)),disabled:r||t<=1,"aria-label":`Lower Level`,children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`span`,{className:`num`,"aria-live":`polite`,children:t}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>n(Math.min(25,t+1)),disabled:r||t>=25,"aria-label":`Raise Level`,children:(0,Q.jsx)(ST,{is:`plus`})})]})]})}var ET=[`origin`,`profession`,`past`],DT={origin:`Where you're from.`,profession:`What you do for a living.`,past:`What shaped you before the story starts.`};function OT(e){let t=e.map(e=>Xw(e.trait)+(e.rank?` ${e.rank}`:``)),n=[];for(let e of t){let r=e.match(/^(.*) \((Spoken|Written)\)$/)?.[1],i=r!==void 0&&t.includes(`${r} (Spoken)`)&&t.includes(`${r} (Written)`)?`${r} (Spoken & Written)`:e;n.includes(i)||n.push(i)}return n}function kT({pkg:e}){return(0,Q.jsxs)(`div`,{className:`grants`,children:[(e.bonusPoints.length>0||Object.keys(e.coreBonus).length>0)&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Bonus`}),e.bonusPoints.map(e=>(0,Q.jsxs)(lT,{tone:`accent`,children:[`+`,e.count,` `,$(e.group),` focus `,e.count===1?`point`:`points`]},e.group)),Object.entries(e.coreBonus).map(([e,t])=>(0,Q.jsxs)(lT,{tone:`accent`,children:[`+`,t,` `,$(e)]},e))]}),e.grants.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Grants`}),OT(e.grants).map(e=>(0,Q.jsx)(lT,{tone:`accent`,children:e},e))]}),e.choices.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Choose`}),e.choices.map((e,t)=>(0,Q.jsx)(lT,{children:e.note??$w(e.choose,e.from)},t))]}),e.backgroundTraits.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Background list`}),OT(e.backgroundTraits.map(e=>({trait:e}))).map(e=>(0,Q.jsx)(lT,{children:e},e))]}),e.features.map(e=>(0,Q.jsxs)(`p`,{children:[(0,Q.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.description]},e.name))]})}var AT=[[`earth`,`The Settled Systems`],[`isekai`,`Isekai`],[`any`,`Any`]],jT=[`physical`,`social`,`mental`];function MT({slot:e,picked:t,onChoose:n}){let[r,i]=(0,Z.useState)(``),[a,o]=(0,Z.useState)(new Set),s=Aw.packages.filter(t=>t.type===e),c=AT.filter(([e])=>s.some(t=>t.plane===e)),l=jT.filter(e=>s.some(t=>t.bonusPoints.some(t=>t.group===e))),u=e=>{let t=new Set(a);t.delete(e)||t.add(e),o(t)},d=r.trim().toLowerCase(),f=s.filter(e=>e.id===t||!a.has(`plane:${e.plane}`)&&!e.bonusPoints.some(e=>a.has(`bonus:${e.group}`))&&(!d||e.name.toLowerCase().includes(d)||e.tags.some(e=>e.toLowerCase().includes(d))));return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`filters`,children:[(0,Q.jsx)(`input`,{type:`search`,placeholder:`Search name or tag`,value:r,onChange:e=>i(e.target.value),"aria-label":`Search ${$(e)}s`}),c.length>1&&c.map(([e,t])=>(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:!a.has(`plane:${e}`),onChange:()=>u(`plane:${e}`)}),` `,t]},e)),l.length>1&&l.map(e=>(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:!a.has(`bonus:${e}`),onChange:()=>u(`bonus:${e}`)}),` `,$(e),` bonus`]},e))]}),f.length===0?(0,Q.jsxs)(`p`,{className:`empty`,children:[`No `,$(e),`s match.`]}):(0,Q.jsx)(`div`,{className:`cards`,role:`radiogroup`,"aria-label":$(e),children:f.map(e=>(0,Q.jsxs)(aT,{className:`headed ${Zw(e.plane)}`,label:e.name,selected:t===e.id,onSelect:()=>n(e.id),children:[(0,Q.jsxs)(`div`,{className:`card-head`,children:[(0,Q.jsxs)(`h3`,{children:[(0,Q.jsx)(tT,{plane:e.plane}),e.name]}),(0,Q.jsx)(lT,{tone:`muted`,children:e.plane})]}),(0,Q.jsx)(`p`,{children:e.summary}),(0,Q.jsx)(kT,{pkg:e})]},e.id))})]})}function NT({draft:e,onChange:t}){let[n,r]=(0,Z.useState)(()=>({origin:!e.origin,profession:!e.profession,past:!e.past})),i=(e,t)=>r(n=>n[e]===t?n:{...n,[e]:t});(0,Z.useEffect)(()=>i(`origin`,!e.origin),[e.origin]),(0,Z.useEffect)(()=>i(`profession`,!e.profession),[e.profession]),(0,Z.useEffect)(()=>i(`past`,!e.past),[e.past]);let a=(n,r)=>{let i=e[n],a=i===r?void 0:r,o=[i,a].some(e=>e&&Nw.get(e)?.bonusPoints.length);t({...e,[n]:a,choices:e.choices.filter(e=>e.package!==i),...o?{startPoints:void 0}:{}})};return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(iT,{title:`Background`,children:`Pick an Origin, a Profession and a Past. Their Traits come free and don't use picks.`}),(0,Q.jsx)(`div`,{className:`tech-fields tech-fields-light step-box`,children:ET.map(t=>(0,Q.jsxs)(`details`,{className:`slot`,open:n[t],onToggle:e=>i(t,e.currentTarget.open),children:[(0,Q.jsx)(`summary`,{children:(0,Q.jsxs)(`h3`,{className:`subhead`,children:[$(t),` `,e[t]?(0,Q.jsx)(`span`,{className:`slot-pick`,children:Nw.get(e[t])?.name??e[t]}):(0,Q.jsx)(`span`,{className:`muted`,children:DT[t]}),(0,Q.jsx)(`span`,{className:`slot-toggle`,"aria-hidden":`true`,children:(0,Q.jsx)(ST,{is:n[t]?`minus`:`plus`})})]})}),(0,Q.jsx)(MT,{slot:t,picked:e[t],onChoose:e=>a(t,e)})]},t))})]})}var PT=class extends Error{kind;constructor(e,t){super(t),this.kind=e}},FT={type:`object`,description:`Who the character is. The rules engine turns this into a full legal build. Every id must come from the game's content.`,properties:{name:{type:`string`,description:`The character's name: the player's, or one you make up that fits their Kind, home and past.`},kind:{type:`string`,description:`Kind id, e.g. isek.`},origin:{type:`string`,description:`Origin package id.`},profession:{type:`string`,description:`Profession package id.`},past:{type:`string`,description:`Past package id.`},focus:{type:`array`,items:{type:`string`,enum:uc.options},description:`The stats that matter most for this character, most important first (two to four). Stat points go to these.`},magic:{type:`integer`,minimum:0,description:`How many of the character's levels go to the Magic core stat, for a spellcaster or anyone magical. Only Kinds or packages that grant a Trait opening Magic (Magic Access, which every Kind of Dreft but the Orcoid Tatot gets through Magical Heritage) can use it. Each Magic level gives 3 MP but no focus points. Default 0.`},traits:{type:`array`,items:{type:`string`},description:`Trait ids that fit the character, best fit first. List more than the picks will cover (12 to 20): the engine buys them in order and skips any the build can't take. List a ranked Trait twice to ask for rank 2. Don't list Traits the packages already grant.`},items:{type:`array`,items:{type:`string`},description:`Item ids the character carries, most needed first (about 3 to 8): the weapon and armor they'd fight in, the tools and kits of their trade and Traits, and gear for how they live and travel. Only items from the character's own plane or any plane. List an item twice to carry two.`},choices:{type:`array`,description:`Optional answers to package or Trait choices with a pool, like languages (an Additional Language Trait asks which one). Any you leave out are filled in. Never answer Contacts.`,items:{type:`object`,properties:{package:{type:`string`,description:`The package that asks. Give this or trait, not both.`},trait:{type:`string`,description:`The Trait that asks, for a Trait's choice.`},from:{type:`string`,description:`The pool name, as the package or Trait lists it.`},traits:{type:`array`,items:{type:`string`}}},required:[`from`,`traits`]}}},required:[`name`,`kind`,`origin`,`profession`,`past`,`focus`,`traits`,`items`]},IT=[{name:`search_traits`,description:`Search the game's Traits by words in their name, summary or tags, and filter by category, tag and pick type. Call this to find Traits that fit the concept before picking them. For background picks, pass pick: "background" with the build's kind, origin, profession and past: only Traits on that build's Background Trait list come back.`,input_schema:{type:`object`,properties:{query:{type:`string`,description:`Words to look for, e.g. "sea trade". Leave out to list everything that passes the filters.`},category:{type:`string`,enum:wc.options},tags:{type:`array`,items:{type:`string`},description:`Only Traits with at least one of these tags.`},pick:{type:`string`,enum:[`universal`,`background`],description:`Only Traits this kind of pick can buy.`},kind:{type:`string`},origin:{type:`string`},profession:{type:`string`},past:{type:`string`},limit:{type:`integer`,minimum:1,maximum:100,description:`Most results to return. Default 25.`}}}},{name:`list_packages`,description:`List the background packages of one type (origin, profession or past), with their summaries and tags.`,input_schema:{type:`object`,properties:{type:{type:`string`,enum:xc.options}},required:[`type`]}},{name:`get_package`,description:`Get one background package in full: the Traits it grants, the choices it asks for (and whether their pools have Traits yet), and the Traits it adds to the Background Trait list. Choices marked leftForPlayer (like Contacts) are for the player to fill in.`,input_schema:{type:`object`,properties:{id:{type:`string`}},required:[`id`]}},{name:`get_kind`,description:`Get one Kind in full: its features, Trait access, and starting stats and maximums.`,input_schema:{type:`object`,properties:{id:{type:`string`}},required:[`id`]}},{name:`submit_build`,description:`Submit the character concept with a one-line reason for each choice. The rules engine spreads the stat points, buys Traits from your list in order and checks the result. If it's legal you're done; if not, the problems come back and you submit again.`,input_schema:{type:`object`,properties:{concept:FT,summary:{type:`string`,description:`One or two sentences on who this character is, for the player.`},reasons:{type:`array`,description:`One short line per choice. Targets: kind, origin, profession, past, levels (why the priority stats), each listed Trait's id, and item:<id> for each item.`,items:{type:`object`,properties:{target:{type:`string`},reason:{type:`string`}},required:[`target`,`reason`]}}},required:[`concept`,`summary`,`reasons`]}}],LT=`player-choice`,RT=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:void 0,zT=e=>Array.isArray(e)?e:[],BT=(e,t)=>Wc(e)||Gc(e,t).length===0,VT=(e,t)=>!!e&&e.from===t.from&&(t.package===void 0?e.trait===t.trait:e.package===t.package);function HT(e,t){let n=RT(e)??{},r=el(n,t).summary;if(r)return r.questions.filter(e=>BT(e.from,t)).map(e=>({[e.by]:e.id,from:e.from,count:e.count,...e.notes.length?{note:e.notes.join(`; `)}:{}}));let i=[];for(let e of[`origin`,`profession`,`past`]){let r=t.packages.find(t=>t.id===n[e]&&t.type===e);for(let e of r?.choices??[]){if(!BT(e.from,t))continue;let n=i.find(t=>t.package===r.id&&t.from===e.from);n?n.count+=e.choose:i.push({package:r.id,from:e.from,count:e.choose,note:e.note})}}return i}function UT(e,t){let n=RT(e);if(!n)return[];let r=[],i=new Set(t.traits.map(e=>e.id)),a=new Set(t.packages.map(e=>e.id)),o=e=>typeof e==`string`,s=o(n.kind)?t.kinds.find(e=>e.id===n.kind):void 0;o(n.kind)&&!s&&r.push({path:`kind`,message:`Kind "${n.kind}" doesn't exist`});for(let e of[`origin`,`profession`,`past`])o(n[e])&&!a.has(n[e])&&r.push({path:e,message:`Package "${n[e]}" doesn't exist`});zT(n.traits).forEach((e,t)=>{let n=RT(e)?.trait;o(n)&&!i.has(n)&&r.push({path:`traits[${t}]`,message:`Trait "${n}" doesn't exist`})});let c=new Set(t.items.map(e=>e.id));zT(n.items).forEach((e,t)=>{let n=RT(e)?.item;o(n)&&!c.has(n)&&r.push({path:`items[${t}]`,message:`Item "${n}" doesn't exist`})});let l=HT(n,t);return zT(n.choices).forEach((e,t)=>{let n=RT(e);if(n){if(o(n.package)&&!a.has(n.package)&&r.push({path:`choices[${t}]`,message:`Package "${n.package}" doesn't exist`}),o(n.trait)&&!i.has(n.trait)&&r.push({path:`choices[${t}]`,message:`Trait "${n.trait}" doesn't exist`}),l.some(e=>VT(n,e))){let e=Uc[String(n.from)];r.push({path:`choices[${t}]`,message:e?`The player writes in their own ${e} on the Choices step, so leave this choice out. Remove this answer.`:`No Traits exist in the "${String(n.from)}" pool yet, so this choice is left for the player. Remove this answer.`})}else for(let e of zT(n.traits))o(e)&&!i.has(e)&&r.push({path:`choices[${t}]`,message:`Trait "${e}" doesn't exist`})}}),r}function WT(e,t,n=Lc){let r=UT(e,t),i=el(e,t,n),a=HT(e,t),o=RT(e),s=i,c=new Set;if(o&&a.some(e=>!Wc(e.from))){let e=zT(o.choices),r=t=>e.some(e=>VT(RT(e),t)),i=a.filter(e=>!r(e)&&!Wc(e.from)).map(e=>({...e.package===void 0?{trait:e.trait}:{package:e.package},from:e.from,traits:Array.from({length:e.count},(e,t)=>`${LT}-${t+1}`)}));c=new Set(i.map((t,n)=>`choices[${e.length+n}]`)),s=el({...o,choices:[...e,...i]},t,n)}return{accepted:r.length===0&&s.ok,legal:r.length===0&&i.ok,unknownIds:r,errors:s.errors,warnings:s.warnings.filter(e=>!e.path||!c.has(e.path)),openChoices:a,summary:s.summary}}var GT=e=>({id:e.id,name:e.name,category:e.category,summary:e.summary,tags:e.tags,types:e.types,ranked:e.ranked,rankStats:e.rankStats,prerequisites:e.prerequisites,background:e.background,starterOnly:e.starterOnly,conveyed:e.conveyed,choices:e.choices,...e.list?{list:e.list}:{},...e.opensLists.length?{opensLists:e.opensLists}:{}}),KT=class extends Error{},qT=e=>typeof e==`string`&&e.trim()!==``?e.trim():void 0;function JT(e,t,n){let r=t.traits,i=qT(e.category);i&&(r=r.filter(e=>e.category===i));let a=zT(e.tags).filter(e=>typeof e==`string`);a.length&&(r=r.filter(e=>e.tags.some(e=>a.includes(e))));let o=qT(e.pick);if(o&&(r=r.filter(e=>!e.conveyed)),o===`universal`&&(r=r.filter(e=>!e.background)),o===`background`){let i={kind:e.kind,origin:e.origin,profession:e.profession,past:e.past,level:n.startingLevel,levels:[]},a=UT(i,t);if(a.length)throw new KT(a.map(e=>e.message).join(`; `));let o=el(i,t,n).summary?.backgroundList;if(!o)throw new KT(`For background picks, pass the build's kind, origin, profession and past.`);r=r.filter(e=>o.includes(e.id))}let s=(qT(e.query)??``).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),c=r.map(e=>{let t=[e.id,e.name,e.summary,e.category,...e.tags,...e.types].join(` `).toLowerCase();return{t:e,score:s.filter(e=>t.includes(e)).length}}),l=typeof e.limit==`number`?Math.min(Math.max(1,e.limit),100):25,u=c.filter(e=>s.length===0||e.score>0).sort((e,t)=>t.score-e.score||e.t.name.localeCompare(t.t.name)).slice(0,l);return{count:u.length,traits:u.map(e=>GT(e.t))}}function YT(e,t){let n=qT(e.id),r=t.packages.find(e=>e.id===n);if(!r)throw new KT(`No package "${n}". Known ids: ${t.packages.map(e=>e.id).join(`, `)}`);let i=e=>t.traits.find(t=>t.id===e)?.name??e;return{...r,grants:r.grants.map(e=>({...e,name:i(e.trait)})),choices:r.choices.map(e=>BT(e.from,t)?{...e,leftForPlayer:!0}:{...e,pool:Gc(e.from,t).map(e=>({id:e.id,name:e.name}))}),backgroundTraits:r.backgroundTraits.map(e=>({id:e,name:i(e)}))}}function XT(e,t){let n=qT(e.id),r=t.kinds.find(e=>e.id===n);if(!r)throw new KT(`No Kind "${n}". Known ids: ${t.kinds.map(e=>e.id).join(`, `)}`);return r}function ZT(e,t,n,r=Lc){let i=RT(t)??{};switch(e){case`search_traits`:return JT(i,n,r);case`list_packages`:{let e=xc.safeParse(i.type);if(!e.success)throw new KT(`type must be one of ${xc.options.join(`, `)}`);return n.packages.filter(t=>t.type===e.data).map(e=>({id:e.id,name:e.name,summary:e.summary,tags:e.tags,region:e.region}))}case`get_package`:return YT(i,n);case`get_kind`:return XT(i,n);default:throw new KT(`Unknown tool "${e}"`)}}var QT=`claude-opus-5-5`,$T=`server-side-fallback-2026-07-01`,eE=e=>!e.startsWith(`claude-haiku`),tE=e=>e.startsWith(`claude-haiku`)?`high`:`medium`;function nE(e,t=12,n=QT){return{model:n,maxTurns:t,review:!0,start:t=>new rE(e,t,n)}}var rE=class{create;model;messages;system;constructor(e,t,n){this.create=e,this.model=n,this.system=[{type:`text`,text:t.instructions},{type:`text`,text:t.index,cache_control:{type:`ephemeral`}}],this.messages=[{role:`user`,content:t.user}]}async send(){let e=await this.create({model:this.model,max_tokens:16e3,tools:IT,system:this.system,messages:this.messages,thinking:{type:`adaptive`},output_config:{effort:tE(this.model)},cache_control:{type:`ephemeral`},...eE(this.model)?{betas:[$T],fallbacks:`default`}:{}}),t=e.usage,n={inputTokens:t.input_tokens,outputTokens:t.output_tokens,cacheReadTokens:t.cache_read_input_tokens??0,cacheWriteTokens:t.cache_creation_input_tokens??0};if(e.stop_reason===`refusal`)throw new PT(`refused`,`Claude declined to build this character. Try describing it differently.`);if(e.stop_reason===`max_tokens`)throw new PT(`truncated`,`Claude's response was cut off before it finished the build.`);return this.messages.push({role:`assistant`,content:e.content}),{calls:e.content.filter(e=>e.type===`tool_use`).map(e=>({id:e.id,name:e.name,input:e.input})),usage:n}}addResults(e){this.messages.push({role:`user`,content:e.map(e=>({type:`tool_result`,tool_use_id:e.call.id,content:e.content,...e.isError?{is_error:!0}:{}}))})}nudge(e){this.messages.push({role:`user`,content:e})}},iE=(e,t)=>R().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/,`must be a ${e} id like "${t}", not a name`),aE=Os({name:R().optional(),kind:iE(`Kind`,`isek`),origin:iE(`package`,`dreft`),profession:iE(`package`,`guild-hunter`),past:iE(`package`,`countryside-upbringing`),focus:B(R()).default([]),magic:_s().int().min(0).default(0),traits:B(R()).default([]),choices:B(Nc).default([]),items:B(As([R(),Os({item:R(),qty:_s().int().min(1).default(1)})])).default([])}),oE=Object.fromEntries(Object.entries(V).flatMap(([e,t])=>t.map(t=>[t,e]))),sE=e=>uc.safeParse(e).success;function cE(e,t){return t.kinds.find(t=>t.id===e.kind)?.stats}function lE(e,t,n,r=[]){let i=[...new Set(e.filter(sE))],a=Object.fromEntries(uc.options.map(e=>[e,t?.[e]?.bonus??0])),o=e=>Math.min(t?.[e]?.max??20,20)-a[e],s={},c=(e,t)=>{for(let n=0;n<e;n++){let e=i.filter(e=>t.includes(e)&&o(e)>0),r=e.length?e[n%e.length]:[...t].sort((e,t)=>o(t)-o(e))[0];if(!r||o(r)<=0)break;s[r]=(s[r]??0)+1,a[r]++}};for(let e of r)c(e.count,V[e.group]);return c(n,uc.options),s}var uE=3,dE=6,fE=5;function pE(e,t,n){let r=[...new Set(e.filter(sE))],i=Object.fromEntries(uc.options.map(e=>[e,t?.[e]?.bonus??0])),a=e=>Math.min(t?.[e]?.max??20,20),o=e=>a(e)-i[e],s=Object.keys(V).filter(e=>!r.some(t=>oE[t]===e)).sort((e,t)=>V[t].reduce((e,t)=>e+o(t),0)-V[e].reduce((e,t)=>e+o(t),0)),c=[...new Set(r.map(e=>oE[e]))],l=c.length?c:s,u=e=>V[e].reduce((e,t)=>e+o(t),0),d=[],f=e=>d.filter(t=>t.group===e).length,p=0;for(let e=0;e<n;e++){let t=e+1,n=t>=dE&&(t-dE)%fE===0,a=Object.keys(V).filter(e=>u(e)>=3).sort((e,t)=>f(e)-f(t)||u(t)-u(e))[0],c=n&&a?a:l[p++%l.length],m=[c,...l,...s].find(e=>u(e)>=3)??c,h=t>=uE&&f(m)%2==1,g=r.filter(e=>oE[e]===m),_=[...V[m]].filter(e=>!r.includes(e)),v={};for(let e=0;e<3;e++){let t=[...V[m]].filter(e=>o(e)>0).sort((e,t)=>i[e]-i[t]||o(t)-o(e))[0],n=h&&e===2&&t,r=g.filter(e=>o(e)>0),a=_.filter(e=>o(e)>0).sort((e,t)=>o(t)-o(e)),s=n||!g.length&&t?t:r.length?r[e%r.length]:a[0]??g[0]??_[0];v[s]=(v[s]??0)+1,i[s]++}d.push({group:m,points:v})}return d}function mE(e,t,n){let r=n.packages.find(e=>e.id===t.origin&&e.type===`origin`),i=e=>r?.region&&e.region===r.region?0:e.plane===r?.plane?1:e.plane===`any`?2:3;return[...e].sort((e,t)=>i(e)-i(t))}function hE(e,t){let n=[],r=new Set;for(let i of[`origin`,`profession`,`past`]){let a=t.packages.find(t=>t.id===e[i]&&t.type===i);if(!a)continue;for(let e of a.grants)r.add(e.trait);let o=new Map;for(let e of a.choices)o.set(e.from,(o.get(e.from)??0)+e.choose);for(let[i,s]of o){let o=mE(Gc(i,t),e,t);if(Wc(i)||o.length===0)continue;let c=new Set(o.map(e=>e.id)),l=e.choices.find(e=>e.package===a.id&&e.from===i)?.traits??[],u=[...new Set(l)].filter(e=>c.has(e)&&!r.has(e));for(let e of o)!u.includes(e.id)&&!r.has(e.id)&&u.push(e.id);let d=u.slice(0,s);d.forEach(e=>r.add(e)),n.push({package:a.id,from:i,traits:d})}}return n}function gE(e,t){let n=[];for(let r of[`origin`,`profession`,`past`]){let i=t.packages.find(t=>t.id===e[r]&&t.type===r),a=new Map;for(let e of i?.choices??[])a.set(e.from,(a.get(e.from)??0)+e.choose);for(let[e,r]of a)Wc(e)||Gc(e,t).length||n.push({package:i.id,from:e,traits:Array.from({length:r},(e,t)=>`player-choice-${t+1}`)})}return n}function _E(e,t){let n=new Map(t.traits.map(e=>[e.id,e])),r=new Map;for(let n of[`origin`,`profession`,`past`]){let i=t.packages.find(t=>t.id===e[n]&&t.type===n);for(let e of i?.grants??[])r.set(e.trait,Math.max(r.get(e.trait)??0,e.rank??1))}let i=new Map;for(let t of e.traits)i.set(t,(i.get(t)??0)+1);let a=[...e.focus];for(let[e,t]of i){let i=n.get(e);if(!(!i?.ranked||(r.get(e)??0)+t<2))for(let e of i.rankStats)a.includes(e)||a.push(e)}return a}function vE(e,t){let n=t.packages.find(t=>t.id===e.origin&&t.type===`origin`)?.plane,r=[],i=[],a=new Set;for(let o of e.items){let{item:e,qty:s}=typeof o==`string`?{item:o,qty:1}:o,c=t.items.find(t=>t.id===e),l=c?c.category===`currency`?`money isn't handed out yet`:n&&c.plane!==`any`&&c.plane!==n?`${c.name} is from ${c.plane===`earth`?`Earth`:`Isekai`}, and this character isn't`:void 0:`Item "${e}" doesn't exist`;if(l||!c){i.push({item:e,reason:l});continue}let u=r.find(e=>e.item===c.id);if(u){u.qty+=s;continue}let d=c.category===`weapon`||!!c.slot&&!a.has(c.slot);c.slot&&a.add(c.slot),r.push({item:c.id,name:c.name,qty:s,category:c.category,equipped:d})}return{items:r,skipped:i}}var yE=(e,t)=>e.summary?.picks[t].banked??0;function bE(e,t,n=Lc){let r=aE.safeParse(e);if(!r.success)return{error:r.error.issues.map(e=>`${e.path.join(`.`)||`concept`}: ${e.message}`).join(`; `)};let i=r.data,a=new Map(t.traits.map(e=>[e.id,e])),o=_E(i,t),s=cE(i,t),c=Jc(t.kinds.find(e=>e.id===i.kind),[`origin`,`profession`,`past`].flatMap(e=>t.packages.filter(t=>t.id===i[e]&&t.type===e))),l=lE(o,s,c.any,c.groups),u=s&&Object.fromEntries(Object.entries(s).map(([e,t])=>[e,{...t,bonus:t.bonus+(l[e]??0)}])),d=Zc([...t.kinds.find(e=>e.id===i.kind)?.grants??[],...t.packages.filter(e=>[i.origin,i.profession,i.past].includes(e.id)).flatMap(e=>e.grants)].map(e=>e.trait),t).includes(`magic`)?Math.min(i.magic,n.startingLevel):0,f=vE(i,t),p=Ic.parse({...i.name?{name:i.name}:{},kind:i.kind,origin:i.origin,profession:i.profession,past:i.past,level:n.startingLevel,startPoints:l,levels:[...pE(o,u,n.startingLevel-d),...Array.from({length:d},()=>({group:`magic`,points:{}}))],traits:[],choices:hE(i,t),items:f.items}),m=gE(p,t),h=e=>el({...e,choices:[...e.choices,...m]},t,n),g=e=>{let n=h(e),r=new Set(n.summary?.traits.map(e=>e.trait)??[]),a=e.choices;for(let e of n.summary?.questions??[]){if(e.by!==`trait`||Wc(e.from))continue;let n=mE(Gc(e.from,t),i,t);if(n.length===0){m=[...m.filter(t=>!Kc(t,e)),{trait:e.id,from:e.from,traits:Array.from({length:e.count},(e,t)=>`player-choice-${t+1}`)}];continue}let o=a.find(t=>Kc(t,e))?.traits??[];if(o.length>=e.count)continue;let s=new Set(n.map(e=>e.id)),c=i.choices.find(t=>Kc(t,e))?.traits??[],l=[...o];for(let t of[...c,...n.map(e=>e.id)]){if(l.length>=e.count)break;s.has(t)&&!l.includes(t)&&!r.has(t)&&l.push(t)}a=[...a.filter(t=>!Kc(t,e)),{trait:e.id,from:e.from,traits:l}]}return{...e,choices:a}},_=h(p),v=[],y=[];if(!_.ok)return{build:p,taken:v,skipped:y,skippedItems:f.skipped,result:_};let b=e=>{let t=a.get(e);if(!t)return`Trait "${e}" doesn't exist`;let n=yE(_,`universal`),r=yE(_,`background`);if(n+r===0)return`no picks left`;let i=_.summary.traits.find(t=>t.trait===e);if(i&&!t.ranked)return`already held (from ${i.sources.join(`, `)})`;let o=_.summary.backgroundList.includes(e)&&r>0?`background`:!t.background&&n>0?`universal`:void 0;if(!o)return t.background?`${t.name} needs a Background pick, and none fit`:`no Universal picks left`;let s=m,c=g({...p,traits:[...p.traits,{trait:e,rank:(i?.rank??0)+1,pick:o}]}),l=h(c);if(!l.ok)return m=s,l.errors[0].message;p=c,_=l};for(let e of i.traits){let t=b(e);t?y.push({trait:e,reason:t}):v.push(e)}return{build:p,taken:v,skipped:y,skippedItems:f.skipped,result:_}}var xE=`You build player characters for Strange Frontiers, a tabletop RPG. A player describes the character they want; you choose who they are from the game's real content and explain each choice in one line. The rules engine does the bookkeeping: it spreads the stat points, buys Traits and checks that the result is legal.

How you work:
1. Read the description for the concept: who this person is, what they're good at, where they come from. If the player names a Kind, use it. If they don't, choose the Kind that fits best.
2. Choose from the content index below, which lists every Kind, package, Trait and item by id with its stats, grants and tags. It has what you need, so go straight to submit_build. The lookup tools (get_kind, get_package, list_packages, search_traits) are there only if something in the index is unclear.
3. Call submit_build with the concept, a one- or two-sentence summary of the character for the player, and a reason for each choice. If the engine sends problems back, fix them and submit again.

The concept:
- name: the character's name. Use the player's if they gave one; otherwise make one up that fits the character's Kind, home and past. Every character gets a name.
- One Kind, one origin, one profession and one past.
- focus: the two to four stats that matter most for this character (its priority stats), most important first. The engine puts most of each level's stat points into these, and spreads a few into the other stats as the level rises, so a high-level character isn't helpless outside their specialty.
- magic: optional. How many levels go to the Magic core stat. Only a character holding a Trait that opens Magic can level it: Magic Access, which every Kind of Dreft but the Orcoid Tatot gets through its Magical Heritage. Each Magic level gives 3 MP (Mana Points) but no focus points, so it buys no Traits: give a spellcaster or a magical character one or two, and leave it at 0 for anyone else.
- traits: Trait ids that fit the character, best fit first. List 12 to 20, more than the picks will cover; the engine buys them in order and skips any the build can't take, so put the ones that matter most at the top. A Trait fits when it belongs in this character's life: what the description says or implies, and their Kind, home, work and past. Background picks only buy Traits from the packages' Background Traits (in the index), so include the ones there that fit. Picks left over are banked for later, so don't pad the list with Traits that don't belong. Don't list Traits the packages already grant (their Grants in the index). List a ranked Trait twice only if rank 2 matters.
- items: item ids the character starts with, from the Items in the index, most needed first. Pick what this person would really carry: a weapon and armor if they fight (matching their weapon skills), the kits and tools of their trade and Traits, travel or survival gear if they live on the road, ammunition for a bow or gun. About 3 to 8; a scholar may carry little, a soldier more. Only items from the character's own plane (their origin's: Earth or Isekai) or any plane: a character from Dreft doesn't start with an Earth pistol. Money isn't handed out yet, so leave currency out. List an item twice to carry two.
- choices: optional. Package and Trait choices with a pool, like languages (an Additional Language asks which one), are filled in for you; answer one only to pick a specific Trait from its pool, naming the package or the Trait that asks. Contacts and Places (like which seas Seafaring covers) are written in by the player, so never answer a Contact or Place choice.

Rules you must follow:
- Use only ids that exist in the content. Never invent a Kind, package, Trait or item. Unknown ids are rejected in code.
- Don't work out stat points or pick counts yourself. That's the engine's job.
- A Trait on a list (marked "magic list" in the index) can only be taken by a character holding a Trait that opens that list (marked "opens the magic list", like Magic Access, which most Kinds of Dreft get through their Magical Heritage; a Trait that grants an opener counts too). Don't list them for anyone else.

Reasons: give one short line per choice, in plain words a player would use, tied to what they asked for. Targets are kind, origin, profession, past, levels (one line on why the priority stats), each listed Trait's id, and item:<id> for each item.

Most content is early and its effect text is placeholder, so judge fit by names, summaries and tags.`,SE=Object.values(V).flat(),CE=e=>SE.map(t=>`${t} ${e[t]?.bonus}/${e[t]?.max}`).join(`, `);function wE(e){let t=[`# Content index`,``,`Stats are listed as Kind bonus/max. Every stat starts at 0 and the Kind adds its bonus.`,``,`## Kinds`];for(let n of e.kinds){let e=n.grants.map(e=>e.trait).join(`, `),r=Object.entries(n.resources).map(([e,t])=>`+${t} ${e.toUpperCase()}`).join(`, `);t.push(`- ${n.id}: ${n.name}. ${n.summary} Tags: ${n.tags.join(`, `)||`none`}. Trait access: ${n.traitAccess.join(`, `)||`none`}.${e?` Grants: ${e}.`:``}${r?` Resources: ${r}.`:``}`),t.push(`  Stats: ${CE(n.stats)}${n.freePoints?`. Plus ${n.freePoints} free bonus points, placed by the engine`:``}`)}for(let n of[`origin`,`profession`,`past`]){t.push(``,`## ${n[0].toUpperCase()}${n.slice(1)}s`);for(let r of e.packages.filter(e=>e.type===n)){let e=r.grants.map(e=>e.rank?`${e.trait} ${e.rank}`:e.trait).join(`, `),n=r.choices.map(e=>`${e.choose} from ${e.from}`).join(`, `);t.push(`- ${r.id}: ${r.name}${r.region?` (${r.region})`:``}. ${r.summary} Tags: ${r.tags.join(`, `)||`none`}. Grants: ${e||`none`}.${n?` Choices: ${n}.`:``}${r.bonusPoints.length?` Bonus points (placed by the engine): ${r.bonusPoints.map(e=>`${e.count} ${e.group}`).join(`, `)}.`:``}${Object.keys(r.coreBonus).length?` Core bonus: ${Object.entries(r.coreBonus).map(([e,t])=>`+${t} ${e}`).join(`, `)} (if the character can level it).`:``}${r.backgroundTraits.length?` Background Traits: ${r.backgroundTraits.join(`, `)}.`:``}`)}}t.push(``,`## Traits`,`Format: id: name [category; flags] summary`);for(let n of e.traits){let e=[n.ranked?`ranked by ${n.rankStats.join(`+`)||`nothing`}`:``,n.background?`background`:``,n.starterOnly?`starter only`:``,n.conveyed?`conveyed, packages only`:``,n.list?`${n.list} list`:``,n.opensLists.length?`opens the ${n.opensLists.join(`, `)} list`:``,n.grants.length?`grants ${n.grants.map(e=>e.trait).join(`, `)}`:``,n.prerequisites.length?`needs ${n.prerequisites.join(`, `)}`:``,n.prerequisiteTags.length?`needs a Trait tagged ${n.prerequisiteTags.join(`, `)}`:``,Object.keys(n.minStats).length?`min ${Object.entries(n.minStats).map(([e,t])=>`${e} ${t}`).join(`, `)}`:``,n.temporary?`temporary`:``,n.types.length?`types ${n.types.join(`, `)}`:``,n.choices.length?`choices ${n.choices.map(e=>`${e.choose} from ${e.from}${n.ranked&&e.perRank!==!1?` per rank`:``}`).join(`, `)}`:``].filter(Boolean);t.push(`- ${n.id}: ${n.name} [${[n.category,...e].join(`; `)}] ${n.summary} Tags: ${n.tags.join(`, `)||`none`}.`)}t.push(``,`## Items`,`Format: id: name [category; plane; slot; damage or resistances] summary. Any-plane items suit everyone.`);for(let n of e.items){if(n.category===`currency`)continue;let e=[n.category,n.plane,n.slot?`slot ${n.slot}`:``,n.damage?`damage ${al(n.damage)}`:``,n.resistances?`resists ${n.resistances}`:``,n.uses??``].filter(Boolean);t.push(`- ${n.id}: ${n.name} [${e.join(`; `)}] ${n.summary} Tags: ${n.tags.join(`, `)||`none`}.`)}return t.join(`
`)}function TE(e,t,n){let r=NE(t)??{},i=typeof r.id==`string`?r.id:``;switch(e){case`get_kind`:return`Looking up the ${n.kinds.find(e=>e.id===i)?.name??i} Kind`;case`get_package`:return`Reading ${n.packages.find(e=>e.id===i)?.name??i}`;case`list_packages`:return`Listing ${String(r.type??`package`)}s`;case`search_traits`:return typeof r.query==`string`&&r.query.trim()?`Searching Traits for "${r.query.trim()}"`:`Searching Traits`;case`submit_build`:return`Submitting the build`;default:return e}}var EE=e=>{let t=e.replace(/\s+/g,` `).trim();return t.length>160?`…${t.slice(-160)}`:t};function DE(e){let t=new Set;for(let n of[`kind`,`origin`,`profession`,`past`])typeof e[n]==`string`&&t.add(n);t.add(`levels`);for(let n of Array.isArray(e.traits)?e.traits:[])typeof n?.trait==`string`&&t.add(n.trait);for(let n of Array.isArray(e.choices)?e.choices:[])t.add(`choice:${n?.package??n?.trait}/${n?.from}`);for(let n of Array.isArray(e.items)?e.items:[])typeof n?.item==`string`&&t.add(`item:${n.item}`);return t}function OE(e){let t=e.summary?.picks.universal;if(!(!t||t.banked<=2))return`${t.banked} of ${t.available} universal picks are unspent`}var kE=(e,t)=>{let n=DE(e);return t.filter(e=>n.has(e.target))};function AE(e){return Array.isArray(e)?e.filter(e=>typeof e?.target==`string`&&typeof e?.reason==`string`).map(e=>({target:e.target,reason:e.reason.trim()})):[]}var jE=e=>e.filter(e=>e.reason!==`no picks left`);function ME({age:e,gender:t,height:n,weight:r}){let i=[e===void 0?``:`age ${e}`,t?.trim()?`gender ${t.trim()}`:``,n?.trim()?`height ${n.trim()}`:``,r?.trim()?`weight ${r.trim()}`:``].filter(Boolean);return i.length?`The player set this character's ${i.length>1?`${i.slice(0,-1).join(`, `)} and ${i.at(-1)}`:i[0]}. These are cosmetic. Respect them in the name, summary and reasons (use pronouns and a name that fit), but don't let them decide the Kind, packages, Traits, stats or choices.\n\n`:``}var NE=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:void 0;async function PE(e){let{content:t,provider:n}=e,r=e.campaign??Lc,i=e.maxTurns??n.maxTurns,a=0,o=t=>e.onProgress?.({turn:a,maxTurns:i,status:t}),s=0,c=e.onProgress?e=>{let t=Date.now();t-s<400||(s=t,o(`Thinking: ${EE(e)}`))}:void 0,l={inputTokens:0,outputTokens:0,cacheReadTokens:0,cacheWriteTokens:0},u=n.start({instructions:xE,index:wE(t),user:`The campaign starts characters at level ${r.startingLevel}.\n\n`+(e.name?.trim()?`The player has named this character "${e.name.trim()}". Use that name.\n\n`:``)+ME(e)+`<player_description>\n${e.description.trim()}\n</player_description>`}),d,f=!1,p=!1,m=!1,h=!1,g=new Map,_=e.name?.trim()||void 0,v=!1,y=(e,t)=>({status:e,model:n.model,build:d?.build,summary:d?.summary,reasons:d?.reasons??[],check:d?.check,turns:t,usage:l});for(let s=1;s<=i;s++){a=s,o(`Thinking`);let{calls:i,usage:b}=await u.send(c,{think:!v});if(e.onTurn?.(s,i),i.length&&o(i.map(e=>TE(e.name,e.input,t)).join(` · `)),l.inputTokens+=b.inputTokens??0,l.outputTokens+=b.outputTokens??0,l.cacheReadTokens+=b.cacheReadTokens??0,l.cacheWriteTokens+=b.cacheWriteTokens??0,i.length===0){u.nudge(`Call submit_build with the concept, a summary and a reason for each choice.`);continue}let x=[];for(let a of i)if(a.name===`submit_build`){let i=NE(a.input)??{},c=NE(i.concept),l=AE(i.reasons),u=typeof i.summary==`string`?i.summary.trim():void 0;if(!c){x.push({call:a,isError:!0,content:`submit_build needs a concept object.`});continue}v=!0,!e.name?.trim()&&typeof c.name==`string`&&c.name.trim()&&(_=c.name.trim());let b=_?{...c,name:_}:c,S;try{S=bE(b,t,r)}catch(e){if(!(e instanceof ko))throw e;S={error:e.issues.map(e=>`${e.path.join(`.`)||`concept`}: ${e.message}`).join(`; `)}}if(`error`in S){x.push({call:a,isError:!0,content:`The concept doesn't match the format: ${S.error}`});continue}let C=WT(S.build,t,r);for(let e of l)g.set(e.target,e);d={build:S.build,check:C,summary:u??d?.summary,reasons:[...g.values()]};let w={taken:S.taken,skipped:jE(S.skipped),...S.skippedItems.length?{skippedItems:S.skippedItems}:{}},T=C.accepted?OE(C):void 0;if(C.accepted&&n.review&&!p){o(`Build is legal; reviewing it against the description`),p=!0,x.push({call:a,isError:!0,content:JSON.stringify({rejected:!0,review:`The engine built a legal character. Before it's final, check it against the player's description: drop any Trait that doesn't belong in this character's life, and spend unspent picks on Traits that do: skills of their trade, knowledge of their home and past, things the description implies. Leave a pick banked only when nothing else plausibly fits. Check the items too: what this character would carry for their work, fights and travels. Give every choice a reason. Then call submit_build with the final concept, summary and reasons.`,...T?{banked:T}:{},...w})});continue}if(T&&!f&&!n.review){o(`Build is legal; asking for more Traits`),f=!0;let e=`The engine built a legal character, but ${T}: the Trait list ran out. Submit again with the same concept and more Traits that fit added to the list.`;x.push({call:a,isError:!0,content:JSON.stringify({rejected:!0,picks:e,...w})});continue}if(C.accepted&&!S.build.items.length&&!h){o(`Build is legal; asking for items`),h=!0,x.push({call:a,isError:!0,content:JSON.stringify({rejected:!0,items:`The engine built a legal character, but it carries nothing. Submit again with the same concept and the items it would carry (from the Items in the index), with a reason for each.`,...w})});continue}let ee=C.accepted?[...DE(S.build)].filter(e=>!e.startsWith(`choice:`)&&!g.has(e)):[];if(ee.length&&!m){o(`Build is legal; asking for its reasons`),m=!0;let e=`The build is legal, but these choices have no reason yet: ${ee.join(`, `)}. Call submit_build again with the same concept, a summary, and a one-line reason for each of them.`;x.push({call:a,isError:!0,content:JSON.stringify({rejected:!0,reasonsNeeded:e})});continue}if(C.accepted)return d.reasons=kE(S.build,d.reasons),o(`Done`),y(`accepted`,s);o(`The engine sent the concept back with ${C.errors.length+C.unknownIds.length} problems; fixing them`),x.push({call:a,isError:!0,content:JSON.stringify({rejected:!0,unknownIds:C.unknownIds,errors:C.errors,...w})})}else try{let e=ZT(a.name,a.input,t,r);x.push({call:a,content:JSON.stringify(e)})}catch(e){if(!(e instanceof KT))throw e;x.push({call:a,isError:!0,content:e.message})}u.addResults(x)}return d?.check.accepted?(d.reasons=kE(d.build,d.reasons),y(`accepted`,i)):y(`turn-limit`,i)}var FE=class extends Error{error;constructor(e,t){super(t),this.error=e}};function IE(e,t=(e,t)=>fetch(e,t)){return async n=>{let r;try{r=await t(e,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(n)})}catch{throw new FE(`server`,`Couldn't reach the AI server. Check your connection, or start it with npm run dev when working locally.`)}let i=await r.json().catch(()=>void 0);if(!r.ok){let e=i;throw new FE(e?.error??`api`,e?.message??`The AI server answered ${r.status} with no details.`)}return i}}async function LE(e){let t=nE(IE(e.endpoint,e.fetcher),void 0,e.model);try{return await PE({description:e.description,name:e.name,age:e.age,gender:e.gender,height:e.height,weight:e.weight,content:e.content,campaign:{startingLevel:(e.levelFromText===!1?void 0:Ww(e.description))??e.startingLevel},provider:t,onProgress:e.onProgress})}catch(e){if(e instanceof FE)return{error:e.error,message:e.message};if(e instanceof PT)return{error:e.kind===`refused`?`refused`:e.kind===`unavailable`?`unavailable`:`api`,message:e.message};throw e}}function RE({draft:e,onChange:t,floor:n}){let r=rT(e),i=[e.origin,e.profession,e.past].flatMap(e=>e&&Nw.get(e)?[Nw.get(e)]:[]),a=Jc(e.kind?Pw.get(e.kind):void 0,i),o=e.startPoints??{},s=e=>V[e].reduce((e,t)=>e+(o[t]??0),0),c=e=>a.groups.find(t=>t.group===e)?.count??0,l=a.groups.reduce((e,t)=>e+Math.min(s(t.group),t.count),0),u=Object.values(o).reduce((e,t)=>e+(t??0),0),d=Math.max(0,a.any-(u-l)),f=e=>Math.max(0,c(e)-s(e))+d,p=e=>Object.keys(V).find(t=>V[t].includes(e)),m=Jw.reduce((t,n)=>t+e.core[n],0),h=e.level-m,g=Gl(e,Aw),_=Kl(e,Aw),v=t=>V[t].reduce((t,n)=>t+(e.points[n]??0),0),y=e=>r?.[e]?.bonus??0,b=e=>y(e)+(o[e]??0),x=t=>b(t)+(e.points[t]??0),S=e=>n?y(e)+(n.startPoints?.[e]??0)+(n.points[e]??0):y(e),C=e=>n?.core[e]??0,w=r=>{if(!n)return t(Ll(e,r,e.core[r]-1));let i={...e.points};for(let e of V[r])n.points[e]?i[e]=n.points[e]:delete i[e];t({...e,core:{...e.core,[r]:e.core[r]-1},points:i})},T=(n,r)=>{let i={...o},a={...e.points};r>0?f(p(n))>0?i[n]=(i[n]??0)+1:a[n]=(a[n]??0)+1:a[n]?--a[n]:i[n]&&--i[n],i[n]||delete i[n],a[n]||delete a[n],t({...e,startPoints:i,points:a})};return r?(0,Q.jsxs)(`section`,{children:[(0,Q.jsxs)(iT,{title:`Stats`,children:[`Each level gives a core point. Level a group's core stat with the + beside its number to unlock `,3,` focus points for its stats, then spend them with each stat's +. A group's stats can't take points until its core stat is leveled. Your stats start at 0, and your Kind's bonus is added on top, in purple; your points show in green.`]}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light step-box`,children:[n?(0,Q.jsxs)(`ul`,{className:`pool-summary pool-left`,children:[h>0&&(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`num`,children:h}),` core `,h===1?`point`:`points`,` to place: Level a core Stat with the + beside its number.`]}),Yw.map(t=>{let n=e.core[t]*3-v(t);return n>0?(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`num`,children:n}),` `,$(t),` focus `,n===1?`point`:`points`,` to spend with the + beside each `,$(t),` Stat.`]},t):null}),a.groups.map(e=>{let t=e.count-s(e.group);return t>0?(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`num`,children:t}),` `,$(e.group),` bonus `,t===1?`point`:`points`,` from `,e.from.join(` and `),` to place with the + beside a`,` `,$(e.group),` stat.`]},e.group):null}),d>0&&(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`num`,children:d}),` free bonus `,d===1?`point`:`points`,` to place with the + beside any Stat.`]}),h<=0&&Yw.every(t=>v(t)>=e.core[t]*3)&&a.groups.every(e=>s(e.group)>=e.count)&&d<=0&&(0,Q.jsx)(`li`,{className:`good`,children:`Every point is placed. Submit to keep them.`})]}):(0,Q.jsxs)(`p`,{className:`pool-summary`,children:[(0,Q.jsxs)(`span`,{className:`num${h===0?` good`:h<0?` bad`:``}`,children:[m,`/`,e.level]}),` `,`core points placed`,h>0&&(0,Q.jsxs)(`span`,{className:`muted`,children:[` · `,h,` left`]}),a.groups.map(e=>(0,Q.jsxs)(`span`,{children:[` · `,(0,Q.jsxs)(`span`,{className:`num${s(e.group)>=e.count?` good`:``}`,children:[Math.min(s(e.group),e.count),`/`,e.count]}),` `,$(e.group),` bonus `,e.count===1?`point`:`points`,` placed`,(0,Q.jsxs)(`span`,{className:`muted`,children:[` (from `,e.from.join(` and `),`, spent first)`]})]},e.group)),a.any>0&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,(0,Q.jsxs)(`span`,{className:`num${d===0?` good`:``}`,children:[a.any-d,`/`,a.any]}),` `,`free bonus points placed`,(0,Q.jsx)(`span`,{className:`muted`,children:` (spent first, on any Stat)`})]})]}),(0,Q.jsx)(`div`,{className:`pool-stats`,children:g.map(n=>{let a=e.core[n],o=a*3,s=v(n);if(!V[n].length){let r=h>0&&_.includes(n),o=_.includes(n)?i.reduce((e,t)=>e+(t.coreBonus[n]??0),0):0;return(0,Q.jsxs)(`div`,{className:`sheet-group stat-group-${n}${a===0&&!r?` locked`:``}`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsxs)(`div`,{className:`core-control`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core Stat`,children:a+o}),(0,Q.jsx)(`button`,{"aria-label":`Take a core point from ${n}`,onClick:()=>w(n),disabled:a<=C(n),children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`button`,{className:`is-plus`,"aria-label":`Put a core point in ${n}`,title:h>0&&!_.includes(n)?`This character can't Level ${$(n)}`:void 0,onClick:()=>t(Ll(e,n,a+1)),disabled:!r,children:(0,Q.jsx)(ST,{is:`plus`})})]}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(n)}),(0,Q.jsxs)(`span`,{className:`num${a+o===0?` muted`:` resource-mp`}`,children:[3*(a+o),` MP`]})]}),(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsx)(`div`,{className:`tiny-text`,children:(0,Q.jsxs)(`strong`,{children:[`Each point in `,$(n),` adds `,3,` MP (Mana Points)`]})}),(0,Q.jsx)(pT,{bonus:o,value:a+o})]}),!_.includes(n)&&(0,Q.jsxs)(`p`,{className:`hint`,children:[`This character can't Level `,$(n),`; take these points back.`]})]},n)}let c=f(n)+Math.max(0,o-s),l=c===0&&s===0,u=V[n].reduce((e,t)=>e+Math.max(0,(r[t]?.max??0)-x(t)),0)-Math.max(0,o-s),d=h>0&&u>=3,p=Math.max(0,s-(a-1)*3);return(0,Q.jsxs)(`div`,{className:`sheet-group stat-group-${n}${l?` locked`:``}`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsxs)(`div`,{className:`core-control`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core Stat`,children:a}),(0,Q.jsx)(`button`,{"aria-label":`Take a core point from ${n}`,title:a>0&&p?`Also takes back ${p} focus ${p===1?`point`:`points`}`:void 0,onClick:()=>w(n),disabled:a<=C(n),children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`button`,{className:`is-plus`,"aria-label":`Put a core point in ${n}`,title:h>0&&!d?`${$(n)}'s Stats have no room for 3 more points`:void 0,onClick:()=>t(Ll(e,n,a+1)),disabled:!d,children:(0,Q.jsx)(ST,{is:`plus`})})]}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(n)}),(0,Q.jsxs)(`span`,{className:`num${a===0?` muted`:s===o?` good`:s>o?` bad`:``}`,children:[s,`/`,o]})]}),a===0&&!d&&u<3&&(0,Q.jsx)(`p`,{className:`hint`,children:`These Stats have no room for points.`}),V[n].map(e=>{let t=x(e),n=r[e]?.max??0,i=Math.max(0,Math.min(c,n-t));return(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsxs)(`div`,{className:`tiny-text`,children:[(0,Q.jsxs)(`strong`,{children:[$(e),` - `,t]}),i>0&&(0,Q.jsxs)(`span`,{className:`stat-spend muted`,children:[`Spend `,i,` `,i===1?`point`:`points`]})]}),(0,Q.jsxs)(`div`,{className:`pool-stat-row`,children:[(0,Q.jsxs)(`div`,{className:`stat-buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Take a point from ${e}`,onClick:()=>T(e,-1),disabled:t<=S(e),children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`button`,{className:`is-plus`,"aria-label":`Add a point to ${e}`,onClick:()=>T(e,1),disabled:c===0||t>=n,children:(0,Q.jsx)(ST,{is:`plus`})})]}),(0,Q.jsx)(fT,{bonus:b(e),value:t,max:n})]})]},e)})]},n)})})]})]}):(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(iT,{title:`Stats`}),(0,Q.jsx)(`p`,{className:`empty`,children:`Choose a Kind first; it adds a bonus to each Stat and sets how far each can go.`})]})}var zE=e=>nl.find(t=>t.toLowerCase()===e.trim().toLowerCase());function BE(e,t){let n=e.match(/\(([^)]*)\)\s*$/);return e.split(`,`).flatMap(e=>{let r=e.trim().match(/^(-?\d+)\s+([^(]+?)\s*(?:\(([^)]*)\))?$/),i=r&&zE(r[2]);if(!r||!i)return[];let a=n?n[1]:r[3];return[{type:i,amount:Number(r[1]),from:t,...a?{where:a.trim()}:{}}]})}function VE(e,t,n){return e.split(/(?<=\.)\s+/).flatMap(e=>{let r=e.match(/Rank \*(\d+)/i);if(!r||!/resist/i.test(e))return[];let i=new Set;for(let[t,n]of Object.entries(tl))RegExp(`all ${t} damage types`,`i`).test(e)&&n.forEach(e=>i.add(e));for(let t of nl)RegExp(`\\b${t.replace(`/`,`\\/`)}\\b`).test(e)&&i.add(t);let a=e.match(/attacks that hit (?:its|their|the) (\w+)/i)?.[1];return[...i].map(e=>({type:e,amount:Number(r[1])*t,from:n,...a?{where:a}:{}}))})}function HE(e,t,n){let r=t.flatMap(t=>{if(!t.equipped)return[];let n=t.item&&e.items.find(e=>e.id===t.item)||dl(e.items,t.name);return n?.resistances?BE(n.resistances,n.name):[]}),i=new Map;for(let e of n)i.set(e.trait,Math.max(i.get(e.trait)??0,e.rank));let a=[...i].flatMap(([t,n])=>{let r=e.traits.find(e=>e.id===t);return r?VE(r.effect,n,r.name):[]});return[...r,...a]}var UE=e=>e===`Acidic/Corrosive`?`acidic`:e.toLowerCase();function WE({items:e,held:t}){let n=(0,Z.useMemo)(()=>HE(Aw,e,t),[e,t]),r=(0,Z.useId)(),i=nl.map(e=>{let t=n.filter(t=>t.type===e);return{type:e,own:t,total:t.filter(e=>!e.where).reduce((e,t)=>e+t.amount,0)}}).filter(e=>e.total!==0||e.own.some(e=>e.where&&e.amount!==0));return(0,Q.jsxs)(`div`,{className:`sheet-resistances`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Resistances`}),i.length?(0,Q.jsx)(`ul`,{className:`sheet-resistance-list`,children:i.map(({type:e,own:t,total:n},i)=>(0,Q.jsxs)(`li`,{className:`sheet-resistance`,tabIndex:0,"aria-describedby":`${r}-${i}`,children:[(0,Q.jsx)(wT,{name:UE(e),label:e}),(0,Q.jsx)(`span`,{className:`num`,children:n}),(0,Q.jsxs)(`div`,{className:`sheet-resistance-pop`,role:`tooltip`,id:`${r}-${i}`,children:[(0,Q.jsxs)(`strong`,{className:`sheet-resistance-pop-title`,children:[e,` `,n]}),(0,Q.jsx)(`ul`,{children:t.map((e,t)=>(0,Q.jsxs)(`li`,{className:e.where?`is-partial`:void 0,children:[(0,Q.jsxs)(`span`,{children:[e.from,e.where&&(0,Q.jsxs)(`span`,{className:`muted`,children:[` (`,e.where,`)`]})]}),(0,Q.jsx)(`span`,{className:`num`,children:e.where&&e.amount>0?`+${e.amount}`:e.amount})]},t))})]})]},e))}):(0,Q.jsx)(`p`,{className:`empty`,children:`None.`})]})}function GE({id:e,onClose:t}){let n=Pw.get(e),r=n?void 0:Nw.get(e),i=n??r;return i?(0,Q.jsx)(cT,{label:i.name,onClose:t,className:`lore-modal-card`,children:(0,Q.jsxs)(`div`,{className:`card headed tools-background-card ${Zw(i.plane)}`,children:[(0,Q.jsxs)(`div`,{className:`card-head`,children:[(0,Q.jsxs)(`h3`,{children:[(0,Q.jsx)(tT,{plane:i.plane}),i.name]}),(0,Q.jsxs)(`span`,{className:`trait-name-chips`,children:[(0,Q.jsx)(lT,{children:n?`Kind`:$(r.type)}),(0,Q.jsx)(lT,{tone:`muted`,children:i.plane})]})]}),(0,Q.jsx)(`p`,{children:i.summary}),i.lore&&(0,Q.jsx)(`p`,{className:`muted`,children:i.lore}),n&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(mT,{stats:n.stats}),n.grants.length>0&&(0,Q.jsx)(`div`,{className:`grants`,children:(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`label`,children:`Grants`}),n.grants.map(e=>(0,Q.jsx)(lT,{tone:`accent`,children:Xw(e.trait)},e.trait))]})}),(0,Q.jsx)(`ul`,{className:`features`,children:n.features.map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsxs)(`strong`,{children:[e.name,`.`]}),` `,e.description]},e.name))})]}),r&&(0,Q.jsx)(kT,{pkg:r})]})}):null}var KE=e=>e[0].toUpperCase()+e.slice(1);function qE({looks:e,onChange:t}){let[n,r]=(0,Z.useState)(),[i,a]=(0,Z.useState)(``),[o,s]=(0,Z.useState)(``),[c,l]=(0,Z.useState)(`unlisted`),[u,d]=(0,Z.useState)(``),f=()=>{a(e.age===void 0?``:String(e.age)),r(`age`)},p=()=>{l(e.gender??`unlisted`),d(e.customGender??``),r(`gender`)},m=n=>{if(n){let n=Number(i);t({...e,age:i.trim()===``||!Number.isFinite(n)?void 0:Math.min(jl,Math.max(0,Math.floor(n)))})}r(void 0)},h=(n,r)=>{let i=n===`unlisted`?void 0:n;t({...e,gender:i,customGender:i===`custom`&&r.trim()||void 0})},g=e=>{e.currentTarget.contains(e.relatedTarget)||(h(c,u),r(void 0))},_=e=>t=>{t.key===`Enter`&&e(!0),t.key===`Escape`&&e(!1)},v=e=>{e&&h(c,u),r(void 0)},y=t=>{s(e[t]??``),r(t)},b=n=>i=>{i&&t({...e,[n]:o.trim()||void 0}),r(void 0)},x=(t,r)=>(0,Q.jsxs)(`span`,{className:`tools-line-item tools-look`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:r}),(0,Q.jsxs)(`span`,{className:`tools-look-row`,children:[n===t?(0,Q.jsx)(`input`,{className:`tools-look-input tools-look-size`,"aria-label":r,maxLength:20,placeholder:`—`,autoFocus:!0,value:o,onChange:e=>s(e.target.value),onBlur:()=>b(t)(!0),onKeyDown:_(b(t))}):(0,Q.jsx)(`button`,{type:`button`,className:`tools-look-value`,onClick:()=>y(t),children:(0,Q.jsx)(`strong`,{children:e[t]??`—`})}),(0,Q.jsx)(`button`,{type:`button`,className:`name-edit tools-look-edit`,"aria-label":`Edit the ${t}`,onMouseDown:e=>n===t&&e.preventDefault(),onClick:()=>n===t?b(t)(!0):y(t),children:(0,Q.jsx)(`span`,{className:`pen-icon`,"aria-hidden":`true`})})]})]});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`span`,{className:`tools-line-item tools-look`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Age`}),(0,Q.jsxs)(`span`,{className:`tools-look-row`,children:[n===`age`?(0,Q.jsx)(`input`,{className:`tools-look-input tools-look-age`,type:`number`,inputMode:`numeric`,min:0,max:jl,step:1,"aria-label":`Age`,placeholder:`—`,autoFocus:!0,value:i,onChange:e=>a(e.target.value),onBlur:()=>m(!0),onKeyDown:_(m)}):(0,Q.jsx)(`button`,{type:`button`,className:`tools-look-value`,onClick:f,children:(0,Q.jsx)(`strong`,{children:e.age??`—`})}),(0,Q.jsx)(`button`,{type:`button`,className:`name-edit tools-look-edit`,"aria-label":`Edit the age`,onMouseDown:e=>n===`age`&&e.preventDefault(),onClick:()=>n===`age`?m(!0):f(),children:(0,Q.jsx)(`span`,{className:`pen-icon`,"aria-hidden":`true`})})]})]}),(0,Q.jsxs)(`span`,{className:`tools-line-item tools-look`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:`Gender`}),(0,Q.jsxs)(`span`,{className:`tools-look-row`,children:[n===`gender`?(0,Q.jsxs)(`span`,{className:`tools-look-gender`,onBlur:g,children:[(0,Q.jsx)(`select`,{className:`tools-look-input`,"aria-label":`Gender`,autoFocus:!0,value:c,onChange:e=>{l(e.target.value),e.target.value!==`custom`&&(h(e.target.value,``),r(void 0))},onKeyDown:e=>e.key===`Escape`&&v(!1),children:vl.map(e=>(0,Q.jsx)(`option`,{value:e,children:KE(e)},e))}),c===`custom`&&(0,Q.jsx)(`input`,{className:`tools-look-input`,"aria-label":`Custom gender`,maxLength:40,placeholder:`In your own words`,autoFocus:!0,value:u,onChange:e=>d(e.target.value),onKeyDown:_(v)})]}):(0,Q.jsx)(`button`,{type:`button`,className:`tools-look-value`,onClick:p,children:(0,Q.jsx)(`strong`,{children:Pl(e)??`Unlisted`})}),(0,Q.jsx)(`button`,{type:`button`,className:`name-edit tools-look-edit`,"aria-label":`Edit the gender`,onMouseDown:e=>n===`gender`&&e.preventDefault(),onClick:()=>n===`gender`?v(!0):p(),children:(0,Q.jsx)(`span`,{className:`pen-icon`,"aria-hidden":`true`})})]})]}),x(`height`,`Height`),x(`weight`,`Weight`)]})}var JE=[`Kind`,`Origin`,`Profession`,`Past`];function YE({draft:e,onLooks:t}){let[n,r]=(0,Z.useState)(),i=(0,Z.useCallback)(()=>r(void 0),[]),a=(e,t)=>t&&(0,Q.jsxs)(`span`,{className:`tools-line-item`,children:[(0,Q.jsx)(`span`,{className:`field-label`,children:JE[e]}),(0,Q.jsx)(`button`,{type:`button`,className:`link`,onClick:()=>r(t),children:(e===0?Pw.get(t)?.name:Nw.get(t)?.name)??t})]});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`tools-line`,children:[(0,Q.jsxs)(`p`,{className:`tools-line-row`,children:[a(0,e.kind),(0,Q.jsx)(qE,{looks:e,onChange:t})]}),(0,Q.jsxs)(`p`,{className:`tools-line-row tools-line-stack`,children:[a(1,e.origin),a(2,e.profession),a(3,e.past)]})]}),n&&(0,Q.jsx)(GE,{id:n,onClose:i})]})}function XE({conditions:e,hp:t,maxHp:n,onChange:r}){let i=(0,Z.useMemo)(()=>ml(Aw),[]),a=pl(t,n),[o,s]=(0,Z.useState)(!1),c=(t,n)=>r(e.map(e=>e===t?{...e,...n}:e));return(0,Q.jsxs)(`section`,{className:`tools-conditions-side`,"aria-label":`Conditions`,children:[(0,Q.jsxs)(`div`,{className:`sheet-section-head`,children:[(0,Q.jsx)(`h4`,{className:`rule`,children:`Conditions`}),(0,Q.jsx)(`button`,{type:`button`,className:`sheet-section-add`,onClick:()=>s(!0),children:`Add Condition`})]}),o&&(0,Q.jsxs)(cT,{label:`Add a Condition`,onClose:()=>s(!1),className:`sheet-add-popup`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Add a Condition`}),(0,Q.jsx)(`div`,{className:`tools-add`,children:(0,Q.jsxs)(`select`,{"aria-label":`Condition to add`,value:``,onChange:t=>{t.target.value&&(r(hl(e,Aw,t.target.value)),s(!1))},children:[(0,Q.jsx)(`option`,{value:``,children:`Pick a Condition…`}),i.map(e=>(0,Q.jsx)(`option`,{value:e.id,children:e.name},e.id))]})})]}),(0,Q.jsxs)(`ul`,{className:`tools-conditions`,children:[a.map(e=>{let t=Mw.get(e);return(0,Q.jsxs)(`li`,{className:`trait-box`,children:[(0,Q.jsx)(`div`,{className:`trait-name`,children:t?.name??e}),(0,Q.jsxs)(`p`,{className:`muted small`,children:[`From HP. `,t?.temporary]}),t&&(0,Q.jsx)(`p`,{className:`effect`,children:t.effect})]},e)}),e.map(t=>{let n=Mw.get(t.trait);return(0,Q.jsxs)(`li`,{className:`trait-box`,children:[(0,Q.jsxs)(`div`,{className:`trait-name tools-condition-head`,children:[(0,Q.jsxs)(`span`,{children:[n?.name??t.trait,n?.ranked?` (${t.rank})`:``]}),(0,Q.jsx)(`button`,{type:`button`,className:`tools-condition-remove`,"aria-label":`Remove ${n?.name??t.trait}`,onClick:()=>r(gl(e,t.trait)),children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M2 2l16 16M18 2L2 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`})})})]}),n?.ranked&&(0,Q.jsxs)(`div`,{className:`stepper tools-rank`,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:()=>c(t,{rank:t.rank-1}),disabled:t.rank<=1,"aria-label":`Lower rank`,children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`span`,{className:`num`,children:t.rank}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>c(t,{rank:t.rank+1}),"aria-label":`Raise rank`,children:(0,Q.jsx)(ST,{is:`plus`})})]}),n?.temporary&&(0,Q.jsxs)(`p`,{className:`muted small`,children:[n.temporary,`.`]}),n&&(0,Q.jsx)(`p`,{className:`effect`,children:n.effect}),(0,Q.jsx)(`input`,{className:`tools-note`,type:`text`,placeholder:`Note, like where or from what`,"aria-label":`Note for ${n?.name??t.trait}`,value:t.note??``,onChange:e=>c(t,{note:e.target.value||void 0})})]},t.trait)})]})]})}var ZE=Aw.items.filter(e=>e.category!==`currency`).sort((e,t)=>e.name.localeCompare(t.name));function QE({items:e,onChange:t}){let[n,r]=(0,Z.useState)(``),[i,a]=(0,Z.useState)(`1`),[o,s]=(0,Z.useState)(`gear`),[c,l]=(0,Z.useState)(!1),u=(0,Z.useId)(),[d,f]=(0,Z.useState)(new Map),p=e=>d.get(e.id)??!!e.notes,m=e=>f(new Map(d).set(e.id,!p(e))),[h,g]=(0,Z.useState)(),[_,v]=(0,Z.useState)(new Set),y=e=>{let t=new Set(_);t.delete(e.id)||t.add(e.id),v(t)},b=(n,r)=>t(e.map(e=>e===n?{...e,...r}:e)),x=n=>t(e.filter(e=>e!==n)),S=()=>{if(!n.trim())return;let s=dl(Aw.items,n),c=Math.max(1,Math.round(Number(i))||1);t(sl(e,s?{item:s.id,name:s.name,qty:c,category:s.category,equipped:!1}:{name:n.trim(),qty:c,category:o,equipped:!1})),r(``),a(`1`),l(!1)};return(0,Q.jsxs)(`section`,{className:`tools-items`,children:[(0,Q.jsxs)(`div`,{className:`sheet-section-head`,children:[(0,Q.jsx)(`h4`,{className:`rule`,children:`Items`}),(0,Q.jsx)(`button`,{type:`button`,className:`sheet-section-add`,onClick:()=>l(!0),children:`Add item`})]}),c&&(0,Q.jsxs)(cT,{label:`Add an item`,onClose:()=>l(!1),className:`sheet-add-popup`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Add an item`}),(0,Q.jsxs)(`form`,{className:`tools-add`,onSubmit:e=>{e.preventDefault(),S()},children:[(0,Q.jsx)(`input`,{type:`text`,placeholder:`Item name`,"aria-label":`Item name`,list:u,value:n,onChange:e=>{r(e.target.value);let t=dl(Aw.items,e.target.value);t&&s(t.category)}}),(0,Q.jsx)(`datalist`,{id:u,children:ZE.map(e=>(0,Q.jsx)(`option`,{value:e.name},e.id))}),(0,Q.jsx)(`input`,{type:`number`,min:1,"aria-label":`Count`,className:`tools-qty`,value:i,onChange:e=>a(e.target.value)}),(0,Q.jsx)(`select`,{"aria-label":`Category`,value:o,onChange:e=>s(e.target.value),children:Dc.map(e=>(0,Q.jsx)(`option`,{value:e,children:$(e)},e))}),(0,Q.jsx)(`button`,{type:`submit`,disabled:!n.trim(),children:`Add`})]})]}),e.length===0?(0,Q.jsx)(`p`,{className:`empty`,children:`No Items yet.`}):(0,Q.jsx)(`ul`,{className:`tools-item-list`,children:e.map(e=>{let t=e.item?Fw.get(e.item):void 0,n=t?ul(t):``,r=_.has(e.id),i=(0,Q.jsx)(`button`,{type:`button`,className:`tools-item-icon tools-item-expand`,"aria-label":`${r?`Collapse`:`Expand`} ${e.name}`,"aria-expanded":r,title:r?`Collapse`:`Expand`,onClick:()=>y(e),children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12 8`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M1 1.5l5 5 5-5`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})})});return r?(0,Q.jsxs)(`li`,{className:`c-sheet-box tools-item`,children:[(0,Q.jsxs)(`div`,{className:`tools-item-row`,children:[(0,Q.jsx)(`input`,{type:`text`,className:`tools-item-name`,"aria-label":`Item name`,value:e.name,onChange:t=>b(e,{name:t.target.value})}),(0,Q.jsx)(`input`,{type:`number`,min:0,className:`tools-qty`,"aria-label":`How many ${e.name}`,value:e.qty,onChange:t=>b(e,{qty:Math.max(0,Math.round(Number(t.target.value))||0)})}),(0,Q.jsx)(`select`,{"aria-label":`${e.name} category`,value:e.category,onChange:t=>b(e,{category:t.target.value}),children:Dc.map(e=>(0,Q.jsx)(`option`,{value:e,children:$(e)},e))}),(0,Q.jsxs)(`label`,{className:`tools-equipped`,title:`Equip`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,"aria-label":`Equip`,checked:e.equipped,onChange:t=>b(e,{equipped:t.target.checked})}),(0,Q.jsx)(`span`,{className:`tools-equipped-label`,children:`Equip`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`tools-item-icon tools-item-notes`,"aria-label":`Notes for ${e.name}`,"aria-expanded":p(e),title:`Notes`,onClick:()=>{p(e)||g(e.id),m(e)},children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 576 512`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75zM58.57 323.5L291.7 90.34L421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L58.57 323.5zM552 464C565.3 464 576 474.7 576 488C576 501.3 565.3 512 552 512H248C234.7 512 224 501.3 224 488C224 474.7 234.7 464 248 464H552z`})})}),(0,Q.jsx)(`button`,{type:`button`,className:`tools-item-icon`,"aria-label":`Remove ${e.name}`,title:`Remove`,onClick:()=>x(e),children:(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z`})})}),i]}),t&&(0,Q.jsxs)(`p`,{className:`tools-item-stock`,children:[t.summary,n&&(0,Q.jsxs)(`span`,{className:`tools-item-details`,children:[` `,n]})]}),p(e)&&(0,Q.jsx)(`input`,{type:`text`,className:`tools-note`,placeholder:`Notes, like damage, resistances or charges`,"aria-label":`${e.name} notes`,autoFocus:h===e.id,value:e.notes??``,onChange:t=>b(e,{notes:t.target.value||void 0})})]},e.id):(0,Q.jsx)(`li`,{className:`c-sheet-box tools-item`,children:(0,Q.jsxs)(`div`,{className:`tools-item-row tools-item-summary`,children:[(0,Q.jsxs)(`span`,{className:`tools-item-count`,children:[e.qty,`×`]}),(0,Q.jsx)(`span`,{className:`tools-item-title`,children:e.name}),(0,Q.jsx)(`span`,{className:`tools-item-category`,children:(0,Q.jsx)(lT,{children:$(e.category)})}),(0,Q.jsxs)(`label`,{className:`tools-equipped`,title:`Equip`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,"aria-label":`Equip`,checked:e.equipped,onChange:t=>b(e,{equipped:t.target.checked})}),(0,Q.jsx)(`span`,{className:`tools-equipped-label`,children:`Equip`})]}),i]})},e.id)})})]})}var $E={hp:`Hit Points`,vp:`Vibe Points`,sp:`Savvy Points`,mp:`Mana Points`},eD=/^(kind|origin|profession|past) ([a-z0-9-]+)( choice)?$/,tD=/^trait ([a-z0-9-]+) choice$/,nD=/^trait ([a-z0-9-]+)$/;function rD(e){let t=tD.exec(e);if(t)return`${Xw(t[1])} (choice)`;let n=nD.exec(e);if(n)return Xw(n[1]);let r=eD.exec(e);return r?`${(r[1]===`kind`?Pw.get(r[2])?.name:Nw.get(r[2])?.name)??r[2]} (${r[1]}${r[3]??``})`:e}var iD=[`origin`,`profession`,`past`];function aD(e,t){let n=e.sources.some(e=>eD.exec(e)?.[1]===`kind`)?[`Kind`]:[];if(e.sources.includes(`background pick`))for(let r of iD)Nw.get(t[r]??``)?.backgroundTraits.includes(e.trait)&&n.push($(r));return n}function oD({held:e,places:t,draft:n}){let r=Mw.get(e.trait);return(0,Q.jsxs)(`div`,{className:`trait-box ${Qw(e.trait)}`,children:[(0,Q.jsxs)(`div`,{className:`trait-name trait-name-with-chip`,children:[(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(tT,{plane:r?.plane}),Xw(e.trait),r?.ranked||e.rank>1?` (${e.rank})`:``]}),(0,Q.jsxs)(`span`,{className:`trait-name-chips`,children:[aD(e,n).map(e=>(0,Q.jsx)(lT,{children:e},e)),r?(0,Q.jsx)(lT,{children:$(r.category)}):(0,Q.jsx)(lT,{tone:`bad`,children:`not in content yet`})]})]}),r&&(0,Q.jsx)(`p`,{className:`effect`,children:r.effect}),t.length>0&&(0,Q.jsxs)(`p`,{className:`small`,children:[(0,Q.jsxs)(`strong`,{children:[r?.choices.find(e=>e.from===`place`)?.note??`Place`,`:`]}),` `,t.join(`, `)]}),(0,Q.jsxs)(`p`,{className:`muted small`,children:[`From `,e.sources.map(rD).join(`, `)]})]})}function sD({held:e,places:t,draft:n,onClose:r}){return(0,Q.jsx)(cT,{label:Xw(e.trait),onClose:r,className:`lore-modal-card`,children:(0,Q.jsx)(oD,{held:e,places:t,draft:n})})}function cD({stack:e,top:t,children:n}){return e?(0,Q.jsxs)(`div`,{className:`sheet-side-stack`,children:[t,(0,Q.jsx)(`div`,{className:`sheet-side-row`,children:n})]}):(0,Q.jsx)(Q.Fragment,{children:n})}function lD({draft:e,result:t,onExport:n,onImport:r,onName:i,onLooks:a,onPortrait:o,onDescription:s,embedded:c=!1,statsSlot:l,resistancesSlot:u,traitsAction:d,items:f,onItems:p,conditions:m,onConditions:h,hp:g}){let _=[e.origin,e.profession,e.past].map(e=>e?Nw.get(e):void 0),v=rT(e),y=t.summary,b=Gl(e,Aw,t),x=b.includes(`magic`)||(y?.resources.mp??0)>0?[`hp`,`vp`,`sp`,`mp`]:[`hp`,`vp`,`sp`],S=e.choices.flatMap(e=>e.from===`contact`?e.traits.map(t=>({text:t,noun:Uc[e.from],from:nT(e)})):[]),C=t=>e.choices.filter(e=>e.trait===t&&e.from===`place`).flatMap(e=>e.traits),w=y?.traits??[],T=e=>Mw.get(e.trait)?.category===`knowledge`,ee=e=>!!Mw.get(e.trait)?.types.includes(`language`),E=[...w.filter(e=>T(e)&&!ee(e)),...w.filter(ee)],te=w.filter(e=>!T(e)),[ne,re]=(0,Z.useState)(),ie=(0,Z.useCallback)(()=>re(void 0),[]),ae=(0,Z.useRef)(null),[oe,se]=(0,Z.useState)(!1),D=!!u;(0,Z.useLayoutEffect)(()=>{let e=ae.current;if(!e||!D)return;let t=()=>{let t=e.querySelector(`:scope > .sheet-body`),n=e.querySelector(`:scope > .sheet-side-stack`);t&&n&&se(n.getBoundingClientRect().top>t.getBoundingClientRect().top+1)};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[D]);let ce=u&&(0,Q.jsx)(`div`,{className:`c-sheet-box sheet-resistances`,children:u}),le=w.find(e=>e.trait===ne),ue=[..._.flatMap(e=>(e?.features??[]).map(t=>({...t,from:e.name})))];return(0,Q.jsxs)(`section`,{className:`sheet${c?` sheet-embedded`:``}`,children:[!c&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(iT,{title:`Sheet`}),(0,Q.jsxs)(`div`,{className:`sheet-actions`,children:[(0,Q.jsx)(`span`,{className:`status ${t.ok?`good`:`bad`}`,children:t.ok?`Legal`:`${t.errors.length} ${t.errors.length===1?`error`:`errors`}`}),(0,Q.jsxs)(`button`,{onClick:n,children:[(0,Q.jsx)(wT,{name:`download`}),`Download`]}),(0,Q.jsxs)(`button`,{onClick:r,children:[(0,Q.jsx)(wT,{name:`upload`}),`Import`]}),(0,Q.jsxs)(`button`,{onClick:()=>window.print(),children:[(0,Q.jsx)(wT,{name:`print`}),`Print`]})]})]}),(0,Q.jsxs)(`div`,{className:`c-sheet`,children:[!c&&(0,Q.jsxs)(`div`,{className:`level-badge level-blob`,"aria-label":`Level ${e.level}`,children:[(0,Q.jsx)(`span`,{className:`level-badge-label`,children:`Level`}),(0,Q.jsx)(`span`,{className:`level-badge-number`,children:e.level})]}),!c&&(0,Q.jsxs)(`div`,{className:`c-sheet-box sheet-head`,children:[(0,Q.jsxs)(`div`,{className:`sheet-head-who`,children:[(0,Q.jsx)(hT,{className:`sheet-portrait`,portrait:e.portrait,name:e.name,onChange:o}),(0,Q.jsxs)(`div`,{className:`sheet-head-main`,children:[(0,Q.jsx)(vT,{className:`sheet-name`,heading:`h2`,name:e.name,onChange:i??(()=>{})}),(0,Q.jsx)(YE,{draft:e,onLooks:a??(()=>{})})]})]}),(0,Q.jsx)(gT,{description:e.description,onChange:s})]}),!c&&(0,Q.jsx)(`div`,{className:`c-sheet-box`,children:(0,Q.jsx)(`div`,{className:`tools-resources sheet-resources`,children:x.map(e=>(0,Q.jsx)(`div`,{className:`tools-resource`,children:(0,Q.jsxs)(`div`,{className:`tools-resource-value`,children:[(0,Q.jsx)(`strong`,{className:`tools-resource-name resource-${e}`,title:$E[e],children:e.toUpperCase()}),(0,Q.jsxs)(`span`,{className:`num`,children:[y?.resources[e]??`–`,(0,Q.jsxs)(`span`,{className:`muted`,children:[` / `,y?.resources[e]??`–`]})]})]})},e))})}),(0,Q.jsxs)(`div`,{className:`sheet-row`,ref:ae,children:[oe&&ce,(0,Q.jsx)(`div`,{className:`c-sheet-box sheet-body`,children:l?(0,Q.jsx)(`div`,{className:`sheet-stats`,children:l}):(0,Q.jsx)(`div`,{className:`sheet-stats`,children:b.map(t=>(0,Q.jsxs)(`div`,{className:`sheet-group stat-group-${t}`,children:[(0,Q.jsxs)(`div`,{className:`sheet-group-head`,children:[(0,Q.jsx)(`span`,{className:`stat-badge`,title:`Core Stat`,children:y?.coreStats[t]??`–`}),(0,Q.jsx)(`h4`,{className:`rule`,children:$(t)})]}),!V[t].length&&(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsx)(`div`,{className:`tiny-text`,children:(0,Q.jsxs)(`strong`,{children:[`Each point in `,$(t),` adds `,3,` MP (Mana Points)`]})}),(0,Q.jsx)(pT,{bonus:y?.coreBonus[t]??0,value:y?.coreStats[t]??e.core[t]})]}),V[t].map(t=>{let n=y?.stats[t],r=(v?.[t]?.bonus??0)+(e.startPoints?.[t]??0),i=v?.[t]?.max??0;return(0,Q.jsxs)(`div`,{className:`sheet-stat`,children:[(0,Q.jsxs)(`div`,{className:`tiny-text`,children:[(0,Q.jsxs)(`strong`,{children:[$(t),` - `,n??`–`]}),(0,Q.jsxs)(`span`,{className:`muted`,children:[` max `,v?.[t]?.max??`–`]})]}),(0,Q.jsx)(fT,{bonus:r,value:n??r,max:i})]},t)})]},t))})}),p&&h&&(0,Q.jsxs)(cD,{stack:D,top:!oe&&ce,children:[(0,Q.jsx)(`div`,{className:`c-sheet-box sheet-conditions`,children:(0,Q.jsx)(XE,{conditions:m??[],hp:g??y?.resources.hp??0,maxHp:y?.resources.hp??0,onChange:h})}),(0,Q.jsx)(`div`,{className:`c-sheet-box sheet-items`,children:(0,Q.jsx)(QE,{items:f??[],onChange:p})})]})]}),(0,Q.jsxs)(`div`,{className:`sheet-lower`,children:[(0,Q.jsxs)(`div`,{className:`c-sheet-box sheet-side`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Knowledges`}),E.length>0?(0,Q.jsx)(`ul`,{className:`knowledge-list`,children:E.map(e=>{let t=Mw.get(e.trait);return(0,Q.jsxs)(`li`,{children:[ee(e)?(0,Q.jsx)(wT,{name:`language`,label:`Language`}):(0,Q.jsx)(wT,{name:`knowledge`,label:`Knowledge`}),(0,Q.jsxs)(`button`,{type:`button`,className:`link`,onClick:()=>re(e.trait),children:[Xw(e.trait),t?.ranked||e.rank>1?` (${e.rank})`:``]})]},e.trait)})}):(0,Q.jsx)(`p`,{className:`empty`,children:`None yet.`})]}),(0,Q.jsxs)(`div`,{className:`c-sheet-box`,children:[d?(0,Q.jsxs)(`div`,{className:`sheet-traits-head`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Traits`}),d]}):(0,Q.jsx)(`h3`,{className:`subhead`,children:`Traits`}),y&&(0,Q.jsxs)(`p`,{className:`sheet-banked`,children:[y.picks.universal.banked,` universal and `,y.picks.background.banked,` background`,` `,y.picks.universal.banked+y.picks.background.banked===1?`pick`:`picks`,` available`]}),te.length>0?(0,Q.jsx)(`ul`,{className:`sheet-traits`,children:te.map(t=>(0,Q.jsx)(`li`,{children:(0,Q.jsx)(oD,{held:t,places:C(t.trait),draft:e})},t.trait))}):(0,Q.jsx)(`p`,{className:`empty`,children:w.length?`No Traits besides Knowledges.`:`No Traits yet.`}),S.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Contacts`}),(0,Q.jsx)(`ul`,{className:`features`,children:S.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:e.text}),` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`(`,e.noun,` from `,e.from,`)`]})]},t))})]}),ue.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:`Features`}),(0,Q.jsx)(`ul`,{className:`features`,children:ue.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:e.name}),` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`(`,e.from,`)`]}),`. `,e.description]},t))})]})]})]})]}),le&&(0,Q.jsx)(sD,{held:le,places:C(le.trait),draft:e,onClose:ie})]})}var uD=e=>[...Object.entries(e.minStats).map(([e,t])=>`${$(e)} ${t}`),...e.prerequisites.map(Xw),...e.prerequisiteTags.map(e=>`any ${$(e)} Trait`),...e.rpRequirement?[e.rpRequirement]:[]].join(`, `),dD={knowledge:`Knowledges`,skill:`Skills`,contact:`Contacts`,starter:`Starter Traits`,ability:`Abilities`,condition:`Conditions`,membership:`Memberships`,circumstance:`Circumstances`,other:`Other`},fD={universal:`Universal picks take any Trait that isn't a Background Trait, knowledge included at creation.`,background:`Background picks take only Traits on this character's Background Trait list.`},pD=e=>Aw.traits.filter(t=>t.opensLists.includes(e)).map(e=>e.name).join(` or `);function mD({draft:e,campaign:t,result:n,onChange:r,hide:i,newFrom:a}){let[o,s]=(0,Z.useState)(`universal`),[c,l]=(0,Z.useState)(``),[u,d]=(0,Z.useState)(new Set),[f,p]=(0,Z.useState)(!0),m=n.summary,h=m?.traitLists??[],g=typeof o==`string`||h.includes(o.list)?o:`universal`,_=typeof g==`string`?g:`list:${g.list}`,v=(0,Z.useMemo)(()=>Yl(e,Aw,t,g),[e,t,_]);if(!v||!m)return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(iT,{title:`Traits`}),(0,Q.jsx)(`p`,{className:`empty`,children:`Finish the Kind and Background steps first; the engine needs a complete build to check picks against.`})]});let y=c.trim().toLowerCase(),b=new Set(e.traits.map(e=>e.trait)),x=v.filter(e=>!i?.has(e.trait.id)&&!u.has(e.trait.category)&&(!f||e.reasons.length===0||b.has(e.trait.id))&&(!y||e.trait.name.toLowerCase().includes(y)||e.trait.tags.some(e=>e.toLowerCase().includes(y)))),S=wc.options.map(e=>({category:e,options:x.filter(t=>t.trait.category===e)})).filter(e=>e.options.length>0),C=e=>{let t=new Set(u);t.delete(e)||t.add(e),d(t)},w=t=>r({...e,traits:e.traits.filter((e,n)=>n!==t)}),T=t=>e.traits.map(e=>e.trait).lastIndexOf(t),ee=new Map(m.traits.map(e=>[e.trait,e.rank])),E=(t,n,i)=>{let a=T(t);a>=0?w(a):r(Rl(e,t,n,i))};return(0,Q.jsxs)(`section`,{children:[(0,Q.jsx)(iT,{title:`Traits`,children:`Spend picks on Traits. Unspent picks are banked for later.`}),(0,Q.jsxs)(`div`,{className:`tech-fields tech-fields-light`,children:[(0,Q.jsxs)(`div`,{className:`tech-field-tab-list`,role:`tablist`,"aria-label":`Pick type`,children:[[`universal`,`background`].map(e=>{let t=m.picks[e];return(0,Q.jsxs)(`button`,{role:`tab`,"aria-selected":g===e,className:`tech-field-tab${g===e?` is-active`:``}`,onClick:()=>s(e),children:[$(e),` `,(0,Q.jsxs)(`span`,{className:`num`,children:[t.spent,`/`,t.available]})]},e)}),h.map(t=>{let n=typeof g!=`string`&&g.list===t,r=new Set(e.traits.filter(e=>Mw.get(e.trait)?.list===t).map(e=>e.trait)).size;return(0,Q.jsxs)(`button`,{role:`tab`,"aria-selected":n,className:`tech-field-tab${n?` is-active`:``}`,onClick:()=>s({list:t}),children:[$(t),` `,(0,Q.jsx)(`span`,{className:`num`,children:r})]},t)})]}),(0,Q.jsx)(`p`,{className:`hint`,children:typeof g==`string`?fD[g]:`${$(g.list)} Traits, open to this character through ${pD(g.list)}. Background Traits here take Background picks; the rest take Universal picks.`}),(0,Q.jsxs)(`div`,{className:`filters`,children:[(0,Q.jsx)(`input`,{type:`search`,placeholder:`Search name or tag`,value:c,onChange:e=>l(e.target.value),"aria-label":`Search Traits`}),wc.options.map(e=>(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:!u.has(e),onChange:()=>C(e)}),` `,dD[e]]},e)),(0,Q.jsxs)(`label`,{className:`check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:f,onChange:e=>p(e.target.checked)}),` Hide unavailable`]})]}),v.length===0&&g===`background`&&(0,Q.jsx)(`p`,{className:`empty`,children:`This character's Background Trait list is empty. It grows from package Background Traits and the Kind's Trait access.`}),v.length>0&&x.length===0&&(0,Q.jsx)(`p`,{className:`empty`,children:f?`No available Traits match. Turn off Hide unavailable to see why the rest are out.`:`No Traits match.`}),S.map(t=>(0,Q.jsxs)(`div`,{className:`trait-group`,children:[(0,Q.jsx)(`h3`,{className:`subhead`,children:dD[t.category]}),(0,Q.jsx)(`ul`,{className:`trait-list`,children:t.options.map(({trait:t,rank:n,pick:i,reasons:a})=>{let o=T(t.id)>=0,s=!o&&a.length>0;return(0,Q.jsxs)(`li`,{role:`checkbox`,"aria-checked":o,"aria-disabled":s,"aria-label":o?`${t.name}, taken`:`Take ${t.name}${t.ranked||n>1?` rank ${n}`:``} with a ${i} pick`,tabIndex:0,className:`trait trait-box ${Qw(t.id)}${o?` selected`:``}${s?` rejected`:``}`,onClick:()=>!s&&E(t.id,n,i),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s||E(t.id,n,i))},children:[(0,Q.jsxs)(`h3`,{className:`trait-name`,children:[(0,Q.jsx)(tT,{plane:t.plane}),t.name]}),(0,Q.jsxs)(`div`,{className:`trait-main`,children:[(0,Q.jsxs)(`div`,{className:`chips`,children:[(0,Q.jsx)(lT,{children:$(t.category)}),t.ranked&&(0,Q.jsx)(lT,{tone:`muted`,children:`Ranked`}),t.background&&(0,Q.jsx)(lT,{tone:`muted`,children:`Background`}),t.mastery&&(0,Q.jsx)(lT,{tone:`muted`,children:`Mastery`})]}),(0,Q.jsx)(`p`,{children:t.summary}),(0,Q.jsx)(`p`,{className:`effect`,children:t.effect}),uD(t)&&(0,Q.jsxs)(`p`,{className:`muted small`,children:[`Needs `,uD(t)]}),t.tags.length>0&&(0,Q.jsx)(`p`,{className:`tags`,children:t.tags.map(e=>`#${e}`).join(` `)}),o&&t.ranked&&(0,Q.jsxs)(`div`,{className:`rank-step`,onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:[(0,Q.jsx)(`span`,{className:`rank-label`,children:`Rank`}),(0,Q.jsx)(`button`,{type:`button`,"aria-label":`Drop a rank of ${t.name}`,onClick:()=>w(T(t.id)),children:(0,Q.jsx)(ST,{is:`minus`})}),(0,Q.jsx)(`span`,{className:`num`,children:ee.get(t.id)??0}),(0,Q.jsx)(`button`,{type:`button`,disabled:a.length>0,title:a.join(` `)||void 0,"aria-label":`Take ${t.name} rank ${n} with a ${i} pick`,onClick:()=>r(Rl(e,t.id,n,i)),children:(0,Q.jsx)(ST,{is:`plus`})})]}),s&&(0,Q.jsx)(`ul`,{className:`reasons`,children:a.map(e=>(0,Q.jsx)(`li`,{children:e},e))})]})]},t.id)})})]},t.category)),(0,Q.jsx)(`h3`,{className:`subhead`,children:a===void 0?`Picks spent`:`Traits selected`}),e.traits.length<=(a??0)?(0,Q.jsx)(`p`,{className:`empty`,children:a===void 0?`No picks spent yet.`:`No Traits selected yet.`}):(0,Q.jsx)(`ul`,{className:`picks`,children:e.traits.map((e,t)=>t<(a??0)?null:(0,Q.jsxs)(`li`,{children:[(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:Xw(e.trait)}),` rank `,e.rank??1,` `,(0,Q.jsxs)(`span`,{className:`muted`,children:[`· `,e.pick,` pick`]}),!Mw.has(e.trait)&&(0,Q.jsx)(lT,{tone:`bad`,children:`unknown`})]}),(0,Q.jsx)(`button`,{className:`link`,onClick:()=>w(t),"aria-label":`Remove ${Xw(e.trait)} rank ${e.rank??1}`,children:`Remove`})]},t))})]})]})}export{Ul as $,$w as A,Nw as B,hT as C,iT as D,mT as E,Ww as F,Xl as G,ql as H,Aw as I,Hl as J,Sl as K,jw as L,$ as M,Xw as N,nT as O,qw as P,Vl as Q,Fw as R,sT as S,n as St,ST as T,Gl as U,Mw as V,Ql as W,Pl as X,Fl as Y,Bl as Z,wT as _,Dc as _t,WE as a,gl as at,cT as b,c as bt,LE as c,dl as ct,ZT as d,Uc as dt,El as et,NT as f,Vc as ft,gT as g,el as gt,lT as h,Gc as ht,YE as i,hl as it,Zw as j,rT as k,IE as l,sl as lt,aT as m,Jc as mt,$E as n,pl as nt,RE as o,ul as ot,bT as p,Kc as pt,yl as q,lD as r,_l as rt,FE as s,ll as st,mD as t,Il as tt,KT as u,cl as ut,TT as v,V as vt,tT as w,vT as x,i as xt,_T as y,wc as yt,Pw as z};