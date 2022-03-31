"use strict";(self.webpackChunkpreferences=self.webpackChunkpreferences||[]).push([[804],{7866:(e,r,n)=>{n.d(r,{Z:()=>t});const t=function(e){var r=Object.create(null);return function(n){return void 0===r[n]&&(r[n]=e(n)),r[n]}}},6729:(e,r,n)=>{n.r(r),n.d(r,{CacheProvider:()=>v,ClassNames:()=>P,Global:()=>N,ThemeContext:()=>y,ThemeProvider:()=>C,__unsafe_useEmotionCache:()=>m,createElement:()=>O,css:()=>M,jsx:()=>O,keyframes:()=>I,useTheme:()=>g,withEmotionCache:()=>h,withTheme:()=>x});var t=n(2950),a=n(5840),o=n(2122);const i=function(e){var r=new WeakMap;return function(n){if(r.has(n))return r.get(n);var t=e(n);return r.set(n,t),t}};var s=n(8679),u=n.n(s);var l=n(444),c=n(4199),f={}.hasOwnProperty,d=(0,t.createContext)("undefined"!=typeof HTMLElement?(0,a.Z)({key:"css"}):null),v=d.Provider,m=function(){return(0,t.useContext)(d)},h=function(e){return(0,t.forwardRef)((function(r,n){var a=(0,t.useContext)(d);return e(r,a,n)}))},y=(0,t.createContext)({}),g=function(){return(0,t.useContext)(y)},p=i((function(e){return i((function(r){return function(e,r){return"function"==typeof r?r(e):(0,o.Z)({},e,r)}(e,r)}))})),C=function(e){var r=(0,t.useContext)(y);return e.theme!==r&&(r=p(r)(e.theme)),(0,t.createElement)(y.Provider,{value:r},e.children)};function x(e){var r,n,a=e.displayName||e.name||"Component",i=function(r,n){var a=(0,t.useContext)(y);return(0,t.createElement)(e,(0,o.Z)({theme:a,ref:n},r))},s=(0,t.forwardRef)(i);return s.displayName="WithTheme("+a+")",r=s,n=e,u()(r,n)}var E=t.useInsertionEffect?t.useInsertionEffect:function(e){e()};function w(e){E(e)}var b="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_=function(e,r){var n={};for(var t in r)f.call(r,t)&&(n[t]=r[t]);return n[b]=e,n},k=function(e){var r=e.cache,n=e.serialized,t=e.isStringTag;return(0,l.hC)(r,n,t),w((function(){return(0,l.My)(r,n,t)})),null},A=h((function(e,r,n){var a=e.css;"string"==typeof a&&void 0!==r.registered[a]&&(a=r.registered[a]);var o=e[b],i=[a],s="";"string"==typeof e.className?s=(0,l.fp)(r.registered,i,e.className):null!=e.className&&(s=e.className+" ");var u=(0,c.O)(i,void 0,(0,t.useContext)(y));s+=r.key+"-"+u.name;var d={};for(var v in e)f.call(e,v)&&"css"!==v&&v!==b&&(d[v]=e[v]);return d.ref=n,d.className=s,(0,t.createElement)(t.Fragment,null,(0,t.createElement)(k,{cache:r,serialized:u,isStringTag:"string"==typeof o}),(0,t.createElement)(o,d))})),O=function(e,r){var n=arguments;if(null==r||!f.call(r,"css"))return t.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=A,o[1]=_(e,r);for(var i=2;i<a;i++)o[i]=n[i];return t.createElement.apply(null,o)},S=t.useInsertionEffect?t.useInsertionEffect:t.useLayoutEffect,N=h((function(e,r){var n=e.styles,a=(0,c.O)([n],void 0,(0,t.useContext)(y)),o=(0,t.useRef)();return S((function(){var e=r.key+"-global",n=new r.sheet.constructor({key:e,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),t=!1,i=document.querySelector('style[data-emotion="'+e+" "+a.name+'"]');return r.sheet.tags.length&&(n.before=r.sheet.tags[0]),null!==i&&(t=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),o.current=[n,t],function(){n.flush()}}),[r]),S((function(){var e=o.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==a.next&&(0,l.My)(r,a.next,!0),n.tags.length){var t=n.tags[n.tags.length-1].nextElementSibling;n.before=t,n.flush()}r.insert("",a,n,!1)}}),[r,a.name]),null}));function M(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,c.O)(r)}var I=function(){var e=M.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},T=function e(r){for(var n=r.length,t=0,a="";t<n;t++){var o=r[t];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function R(e,r,n){var t=[],a=(0,l.fp)(e,t,n);return t.length<2?n:a+r(t)}var G=function(e){var r=e.cache,n=e.serializedArr;return w((function(){for(var e=0;e<n.length;e++)(0,l.My)(r,n[e],!1)})),null},P=h((function(e,r){var n=[],a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o=(0,c.O)(t,r.registered);return n.push(o),(0,l.hC)(r,o,!1),r.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return R(r.registered,a,T(n))},theme:(0,t.useContext)(y)},i=e.children(o);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(G,{cache:r,serializedArr:n}),i)}))},4199:(e,r,n)=>{n.d(r,{O:()=>h});const t=function(e){for(var r,n=0,t=0,a=e.length;a>=4;++t,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(r>>>16)<<16),n=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(t+2))<<16;case 2:n^=(255&e.charCodeAt(t+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(t)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var o=n(7866),i=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},c=(0,o.Z)((function(e){return u(e)?e:e.replace(i,"-$&").toLowerCase()})),f=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(s,(function(e,r,n){return v={name:r,styles:n,next:v},r}))}return 1===a[e]||u(e)||"number"!=typeof r||0===r?r:r+"px"};function d(e,r,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return v={name:n.name,styles:n.styles,next:v},n.name;if(void 0!==n.styles){var t=n.next;if(void 0!==t)for(;void 0!==t;)v={name:t.name,styles:t.styles,next:v},t=t.next;return n.styles+";"}return function(e,r,n){var t="";if(Array.isArray(n))for(var a=0;a<n.length;a++)t+=d(e,r,n[a])+";";else for(var o in n){var i=n[o];if("object"!=typeof i)null!=r&&void 0!==r[i]?t+=o+"{"+r[i]+"}":l(i)&&(t+=c(o)+":"+f(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=r&&void 0!==r[i[0]]){var s=d(e,r,i);switch(o){case"animation":case"animationName":t+=c(o)+":"+s+";";break;default:t+=o+"{"+s+"}"}}else for(var u=0;u<i.length;u++)l(i[u])&&(t+=c(o)+":"+f(o,i[u])+";")}return t}(e,r,n);case"function":if(void 0!==e){var a=v,o=n(e);return v=a,d(e,r,o)}}if(null==r)return n;var i=r[n];return void 0!==i?i:n}var v,m=/label:\s*([^\s;\n{]+)\s*(;|$)/g,h=function(e,r,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,o="";v=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,o+=d(n,r,i)):o+=i[0];for(var s=1;s<e.length;s++)o+=d(n,r,e[s]),a&&(o+=i[s]);m.lastIndex=0;for(var u,l="";null!==(u=m.exec(o));)l+="-"+u[1];return{name:t(o)+l,styles:o,next:v}}},444:(e,r,n)=>{function t(e,r,n){var t="";return n.split(" ").forEach((function(n){void 0!==e[n]?r.push(e[n]+";"):t+=n+" "})),t}n.d(r,{My:()=>o,fp:()=>t,hC:()=>a});var a=function(e,r,n){var t=e.key+"-"+r.name;!1===n&&void 0===e.registered[t]&&(e.registered[t]=r.styles)},o=function(e,r,n){a(e,r,n);var t=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var o=r;do{e.insert(r===o?"."+t:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}}}]);