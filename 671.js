"use strict";(self.webpackChunkpreferences=self.webpackChunkpreferences||[]).push([[671,40],{4671:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(2950);const c="undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?n.useEffect:n.useLayoutEffect;function u(e){const t="function"==typeof e?function(e){let t;const r=new Set,n=(e,n)=>{const c="function"==typeof e?e(t):e;if(c!==t){const e=t;t=n?c:Object.assign({},t,c),r.forEach((r=>r(t,e)))}},c=()=>t,u={setState:n,getState:c,subscribe:(e,n,u)=>n||u?((e,n=c,u=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let s=n(t);function o(){const r=n(t);if(!u(s,r)){const t=s;e(s=r,t)}}return r.add(o),()=>r.delete(o)})(e,n,u):(r.add(e),()=>r.delete(e)),destroy:()=>r.clear()};return t=e(n,c,u),u}(e):e,r=(e=t.getState,r=Object.is)=>{const[,u]=(0,n.useReducer)((e=>e+1),0),s=t.getState(),o=(0,n.useRef)(s),a=(0,n.useRef)(e),i=(0,n.useRef)(r),f=(0,n.useRef)(!1),d=(0,n.useRef)();let l;void 0===d.current&&(d.current=e(s));let b=!1;(o.current!==s||a.current!==e||i.current!==r||f.current)&&(l=e(s),b=!r(d.current,l)),c((()=>{b&&(d.current=l),o.current=s,a.current=e,i.current=r,f.current=!1}));const g=(0,n.useRef)(s);c((()=>{const e=()=>{try{const e=t.getState(),r=a.current(e);i.current(d.current,r)||(o.current=e,d.current=r,u())}catch(e){f.current=!0,u()}},r=t.subscribe(e);return t.getState()!==g.current&&e(),r}),[]);const w=b?l:d.current;return(0,n.useDebugValue)(w),w};return Object.assign(r,t),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[r,t];return{next(){const t=e.length<=0;return{value:e.shift(),done:t}}}},r}}}]);