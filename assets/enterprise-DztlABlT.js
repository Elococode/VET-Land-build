import{j as s}from"./download-J1WLnEsy.js";import{r as d,a as ue}from"./vendor-DVpMmIQw.js";import{B as de,a as V,C as Q,E as he,b as fe,c as pe,A as me,d as xe,U as ge,e as ve}from"./icons-Cv85kTJB.js";/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}var E;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(E||(E={}));const D="popstate";function be(e){e===void 0&&(e={});function t(n,a){let{pathname:l,search:i,hash:c}=n.location;return M("",{pathname:l,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:F(a)}return je(t,r,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Z(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ye(){return Math.random().toString(36).substr(2,8)}function J(e,t){return{usr:e.state,key:e.key,idx:t}}function M(e,t,r,n){return r===void 0&&(r=null),B({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:r,key:t&&t.key||n||ye()})}function F(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function U(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function je(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:l=!1}=n,i=a.history,c=E.Pop,o=null,h=f();h==null&&(h=0,i.replaceState(B({},i.state,{idx:h}),""));function f(){return(i.state||{idx:null}).idx}function u(){c=E.Pop;let p=f(),y=p==null?null:p-h;h=p,o&&o({action:c,location:x.location,delta:y})}function m(p,y){c=E.Push;let w=M(x.location,p,y);h=f()+1;let j=J(w,h),N=x.createHref(w);try{i.pushState(j,"",N)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(N)}l&&o&&o({action:c,location:x.location,delta:1})}function b(p,y){c=E.Replace;let w=M(x.location,p,y);h=f();let j=J(w,h),N=x.createHref(w);i.replaceState(j,"",N),l&&o&&o({action:c,location:x.location,delta:0})}function g(p){let y=a.location.origin!=="null"?a.location.origin:a.location.href,w=typeof p=="string"?p:F(p);return w=w.replace(/ $/,"%20"),v(y,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,y)}let x={get action(){return c},get location(){return e(a,i)},listen(p){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(D,u),o=p,()=>{a.removeEventListener(D,u),o=null}},createHref(p){return t(a,p)},createURL:g,encodeLocation(p){let y=g(p);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:m,replace:b,go(p){return i.go(p)}};return x}var q;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(q||(q={}));function we(e,t,r){return r===void 0&&(r="/"),Ne(e,t,r,!1)}function Ne(e,t,r,n){let a=typeof t=="string"?U(t):t,l=A(a.pathname||"/",r);if(l==null)return null;let i=ee(e);Ee(i);let c=null;for(let o=0;c==null&&o<i.length;++o){let h=Ie(l);c=Fe(i[o],h,n)}return c}function ee(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(l,i,c)=>{let o={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let h=C([n,o.relativePath]),f=r.concat(o);l.children&&l.children.length>0&&(v(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ee(l.children,t,f,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:Le(h,l.index),routesMeta:f})};return e.forEach((l,i)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))a(l,i);else for(let o of te(l.path))a(l,i,o)}),t}function te(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return a?[l,""]:[l];let i=te(n.join("/")),c=[];return c.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&c.push(...i),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function Ee(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Oe(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ce=/^:[\w-]+$/,Re=3,Pe=2,Se=1,Ue=10,Be=-2,K=e=>e==="*";function Le(e,t){let r=e.split("/"),n=r.length;return r.some(K)&&(n+=Be),t&&(n+=Pe),r.filter(a=>!K(a)).reduce((a,l)=>a+(Ce.test(l)?Re:l===""?Se:Ue),n)}function Oe(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Fe(e,t,r){let{routesMeta:n}=e,a={},l="/",i=[];for(let c=0;c<n.length;++c){let o=n[c],h=c===n.length-1,f=l==="/"?t:t.slice(l.length)||"/",u=G({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},f),m=o.route;if(!u&&h&&r&&!n[n.length-1].route.index&&(u=G({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},f)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:C([l,u.pathname]),pathnameBase:We(C([l,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(l=C([l,u.pathnameBase]))}return i}function G(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=ke(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((h,f,u)=>{let{paramName:m,isOptional:b}=f;if(m==="*"){let x=c[u]||"";i=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const g=c[u];return b&&!g?h[m]=void 0:h[m]=(g||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:i,pattern:e}}function ke(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Z(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Ie(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Z(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Te(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:r?r.startsWith("/")?r:$e(r,t):t,search:_e(n),hash:Ve(a)}}function $e(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function $(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Me(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function re(e,t){let r=Me(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ne(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=U(e):(a=B({},e),v(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,c;if(i==null)c=r;else{let u=t.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),u-=1;a.pathname=m.join("/")}c=u>=0?t[u]:"/"}let o=Te(a,c),h=i&&i!=="/"&&i.endsWith("/"),f=(l||i===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(h||f)&&(o.pathname+="/"),o}const C=e=>e.join("/").replace(/\/\/+/g,"/"),We=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_e=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ve=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ae(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ae=["post","put","patch","delete"];new Set(ae);const ze=["get",...ae];new Set(ze);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}const z=d.createContext(null),De=d.createContext(null),R=d.createContext(null),I=d.createContext(null),P=d.createContext({outlet:null,matches:[],isDataRoute:!1}),le=d.createContext(null);function Je(e,t){let{relative:r}=t===void 0?{}:t;O()||v(!1);let{basename:n,navigator:a}=d.useContext(R),{hash:l,pathname:i,search:c}=ie(e,{relative:r}),o=i;return n!=="/"&&(o=i==="/"?n:C([n,i])),a.createHref({pathname:o,search:c,hash:l})}function O(){return d.useContext(I)!=null}function T(){return O()||v(!1),d.useContext(I).location}function se(e){d.useContext(R).static||d.useLayoutEffect(e)}function qe(){let{isDataRoute:e}=d.useContext(P);return e?lt():Ke()}function Ke(){O()||v(!1);let e=d.useContext(z),{basename:t,future:r,navigator:n}=d.useContext(R),{matches:a}=d.useContext(P),{pathname:l}=T(),i=JSON.stringify(re(a,r.v7_relativeSplatPath)),c=d.useRef(!1);return se(()=>{c.current=!0}),d.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){n.go(h);return}let u=ne(h,JSON.parse(i),l,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:C([t,u.pathname])),(f.replace?n.replace:n.push)(u,f.state,f)},[t,n,i,l,e])}function ie(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=d.useContext(R),{matches:a}=d.useContext(P),{pathname:l}=T(),i=JSON.stringify(re(a,n.v7_relativeSplatPath));return d.useMemo(()=>ne(e,JSON.parse(i),l,r==="path"),[e,i,l,r])}function Ge(e,t){return Xe(e,t)}function Xe(e,t,r,n){O()||v(!1);let{navigator:a}=d.useContext(R),{matches:l}=d.useContext(P),i=l[l.length-1],c=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let h=T(),f;if(t){var u;let p=typeof t=="string"?U(t):t;o==="/"||(u=p.pathname)!=null&&u.startsWith(o)||v(!1),f=p}else f=h;let m=f.pathname||"/",b=m;if(o!=="/"){let p=o.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=we(e,{pathname:b}),x=et(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},c,p.params),pathname:C([o,a.encodeLocation?a.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?o:C([o,a.encodeLocation?a.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,r,n);return t&&x?d.createElement(I.Provider,{value:{location:L({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:E.Pop}},x):x}function Ye(){let e=at(),t=Ae(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,null)}const He=d.createElement(Ye,null);class Qe extends d.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?d.createElement(P.Provider,{value:this.props.routeContext},d.createElement(le.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ze(e){let{routeContext:t,match:r,children:n}=e,a=d.useContext(z);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),d.createElement(P.Provider,{value:t},n)}function et(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let f=i.findIndex(u=>u.route.id&&(c==null?void 0:c[u.route.id])!==void 0);f>=0||v(!1),i=i.slice(0,Math.min(i.length,f+1))}let o=!1,h=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<i.length;f++){let u=i[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(h=f),u.route.id){let{loaderData:m,errors:b}=r,g=u.route.loader&&m[u.route.id]===void 0&&(!b||b[u.route.id]===void 0);if(u.route.lazy||g){o=!0,h>=0?i=i.slice(0,h+1):i=[i[0]];break}}}return i.reduceRight((f,u,m)=>{let b,g=!1,x=null,p=null;r&&(b=c&&u.route.id?c[u.route.id]:void 0,x=u.route.errorElement||He,o&&(h<0&&m===0?(g=!0,p=null):h===m&&(g=!0,p=u.route.hydrateFallbackElement||null)));let y=t.concat(i.slice(0,m+1)),w=()=>{let j;return b?j=x:g?j=p:u.route.Component?j=d.createElement(u.route.Component,null):u.route.element?j=u.route.element:j=f,d.createElement(Ze,{match:u,routeContext:{outlet:f,matches:y,isDataRoute:r!=null},children:j})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Qe,{location:r.location,revalidation:r.revalidation,component:x,error:b,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):w()},null)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),k=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(k||{});function tt(e){let t=d.useContext(z);return t||v(!1),t}function rt(e){let t=d.useContext(De);return t||v(!1),t}function nt(e){let t=d.useContext(P);return t||v(!1),t}function ce(e){let t=nt(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function at(){var e;let t=d.useContext(le),r=rt(k.UseRouteError),n=ce(k.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function lt(){let{router:e}=tt(oe.UseNavigateStable),t=ce(k.UseNavigateStable),r=d.useRef(!1);return se(()=>{r.current=!0}),d.useCallback(function(a,l){l===void 0&&(l={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,L({fromRouteId:t},l)))},[e,t])}function st(e){v(!1)}function it(e){let{basename:t="/",children:r=null,location:n,navigationType:a=E.Pop,navigator:l,static:i=!1,future:c}=e;O()&&v(!1);let o=t.replace(/^\/*/,"/"),h=d.useMemo(()=>({basename:o,navigator:l,static:i,future:L({v7_relativeSplatPath:!1},c)}),[o,c,l,i]);typeof n=="string"&&(n=U(n));let{pathname:f="/",search:u="",hash:m="",state:b=null,key:g="default"}=n,x=d.useMemo(()=>{let p=A(f,o);return p==null?null:{location:{pathname:p,search:u,hash:m,state:b,key:g},navigationType:a}},[o,f,u,m,b,g,a]);return x==null?null:d.createElement(R.Provider,{value:h},d.createElement(I.Provider,{children:r,value:x}))}function Pt(e){let{children:t,location:r}=e;return Ge(W(t),r)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let r=[];return d.Children.forEach(e,(n,a)=>{if(!d.isValidElement(n))return;let l=[...t,a];if(n.type===d.Fragment){r.push.apply(r,W(n.props.children,l));return}n.type!==st&&v(!1),!n.props.index||!n.props.children||v(!1);let i={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=W(n.props.children,l)),r.push(i)}),r}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function ot(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,l;for(l=0;l<n.length;l++)a=n[l],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ct(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ut(e,t){return e.button===0&&(!t||t==="_self")&&!ct(e)}const dt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ht="6";try{window.__reactRouterVersion=ht}catch{}const ft="startTransition",X=ue[ft];function St(e){let{basename:t,children:r,future:n,window:a}=e,l=d.useRef();l.current==null&&(l.current=be({window:a,v5Compat:!0}));let i=l.current,[c,o]=d.useState({action:i.action,location:i.location}),{v7_startTransition:h}=n||{},f=d.useCallback(u=>{h&&X?X(()=>o(u)):o(u)},[o,h]);return d.useLayoutEffect(()=>i.listen(f),[i,f]),d.createElement(it,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:i,future:n})}const pt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xt=d.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:l,replace:i,state:c,target:o,to:h,preventScrollReset:f,viewTransition:u}=t,m=ot(t,dt),{basename:b}=d.useContext(R),g,x=!1;if(typeof h=="string"&&mt.test(h)&&(g=h,pt))try{let j=new URL(window.location.href),N=h.startsWith("//")?new URL(j.protocol+h):new URL(h),S=A(N.pathname,b);N.origin===j.origin&&S!=null?h=S+N.search+N.hash:x=!0}catch{}let p=Je(h,{relative:a}),y=gt(h,{replace:i,state:c,target:o,preventScrollReset:f,relative:a,viewTransition:u});function w(j){n&&n(j),j.defaultPrevented||y(j)}return d.createElement("a",_({},m,{href:g||p,onClick:x||l?n:w,ref:r,target:o}))});var Y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Y||(Y={}));var H;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(H||(H={}));function gt(e,t){let{target:r,replace:n,state:a,preventScrollReset:l,relative:i,viewTransition:c}=t===void 0?{}:t,o=qe(),h=T(),f=ie(e,{relative:i});return d.useCallback(u=>{if(ut(u,r)){u.preventDefault();let m=n!==void 0?n:F(h)===F(f);o(e,{replace:m,state:a,preventScrollReset:l,relative:i,viewTransition:c})}},[h,o,f,n,a,r,e,l,i,c])}function vt(){const e=t=>{const r=document.getElementById(t);if(r){const l=r.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:l,behavior:"smooth"})}};return s.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-[#1A237E]/80 backdrop-blur-lg z-50 border-b border-white/10",children:s.jsx("div",{className:"container mx-auto px-4 py-4",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{className:"flex items-center gap-8",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(de,{className:"w-8 h-8 text-[#2196F3]"}),s.jsx("span",{className:"text-xl font-bold",children:"VET·Enterprise"})]}),s.jsxs("div",{className:"hidden md:flex gap-8",children:[s.jsx("button",{onClick:()=>e("solutions"),className:"text-gray-300 hover:text-white transition-colors",children:"解决方案"}),s.jsx("button",{onClick:()=>e("cases"),className:"text-gray-300 hover:text-white transition-colors",children:"客户案例"})]})]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsxs(xt,{to:"/",className:"text-gray-300 hover:text-white transition-colors flex items-center gap-1",children:["个人版 ",s.jsx(V,{className:"w-4 h-4"})]}),s.jsx("a",{href:"mailto:vetpass@outlook.com",className:"bg-[#2196F3] hover:bg-[#1E88E5] px-6 py-2 rounded-lg transition-colors font-medium inline-flex items-center",children:"联系销售"})]})]})})})}const bt=[{icon:s.jsx(he,{className:"w-6 h-6"}),title:"跨国企业",description:"为跨国企业提供安全、稳定的全球网络访问解决方案，支持多地办公协同",benefits:["全球加速网络","多区域接入点","智能路由优化","统一管理平台"]},{icon:s.jsx(fe,{className:"w-6 h-6"}),title:"金融机构",description:"为金融机构提供符合监管要求的安全网络解决方案，保护敏感数据传输",benefits:["端到端加密","访问控制策略","审计日志记录","合规性保证"]},{icon:s.jsx(pe,{className:"w-6 h-6"}),title:"科技公司",description:"为科技公司提供灵活、高效的网络接入方案，支持远程办公和开发协作",benefits:["快速部署配置","开发环境支持","API集成能力","自动化管理"]}];function yt(){return s.jsx("section",{id:"solutions",className:"py-24",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[s.jsx("h2",{className:"text-3xl font-bold text-center mb-4",children:"行业解决方案"}),s.jsx("p",{className:"text-gray-300 text-center mb-16 text-lg",children:"针对不同行业特点，提供定制化的企业网络解决方案"}),s.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:bt.map((e,t)=>s.jsx("div",{className:"group",children:s.jsxs("div",{className:"bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 h-full hover:border-[#2196F3]/30 transition-all duration-300",children:[s.jsx("div",{className:"h-12 w-12 bg-[#2196F3] rounded-lg flex items-center justify-center mb-6",children:e.icon}),s.jsx("h3",{className:"text-xl font-bold mb-3",children:e.title}),s.jsx("p",{className:"text-gray-300 mb-6",children:e.description}),s.jsx("ul",{className:"space-y-3",children:e.benefits.map((r,n)=>s.jsxs("li",{className:"flex items-center gap-2 text-gray-300",children:[s.jsx(Q,{className:"w-5 h-5 text-[#2196F3]"}),r]},n))}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsxs("button",{className:"flex items-center gap-2 text-[#2196F3] hover:gap-3 transition-all",children:["了解更多 ",s.jsx(V,{className:"w-4 h-4"})]})})]})},t))})]})})}const jt=[{logo:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=300",company:"全球科技集团",description:"通过VET·Enterprise实现全球20+办公地点的安全连接，显著提升团队协作效率",results:["网络延迟降低50%","运维成本减少30%","协作效率提升40%"]},{logo:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300&h=300",company:"领先金融服务商",description:"部署VET·Enterprise后，成功构建符合监管要求的安全网络环境，保障数据传输安全",results:["达到金融级安全标准","故障响应时间缩短60%","系统可用性达99.99%"]},{logo:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=300&h=300",company:"新兴科技企业",description:"借助VET·Enterprise灵活的部署方案，快速支持全员远程办公转型",results:["1天完成全员部署","IT支持工单减少45%","员工满意度提升35%"]}];function wt(){return s.jsx("section",{id:"cases",className:"py-24 bg-white/5",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[s.jsx("h2",{className:"text-3xl font-bold text-center mb-4",children:"客户案例"}),s.jsx("p",{className:"text-gray-300 text-center mb-16 text-lg",children:"了解其他企业如何借助VET·Enterprise提升业务效率"}),s.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:jt.map((e,t)=>s.jsx("div",{className:"group",children:s.jsxs("div",{className:"bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 h-full hover:border-[#2196F3]/30 transition-all duration-300",children:[s.jsx("div",{className:"mb-6",children:s.jsx("img",{src:e.logo,alt:e.company,className:"w-16 h-16 rounded-lg object-cover"})}),s.jsx("h3",{className:"text-xl font-bold mb-3",children:e.company}),s.jsx("p",{className:"text-gray-300 mb-6",children:e.description}),s.jsx("div",{className:"space-y-3",children:e.results.map((r,n)=>s.jsxs("div",{className:"flex items-center gap-2 text-[#2196F3]",children:[s.jsx(Q,{className:"w-5 h-5"}),r]},n))}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsxs("button",{className:"flex items-center gap-2 text-[#2196F3] hover:gap-3 transition-all",children:["查看详情 ",s.jsx(V,{className:"w-4 h-4"})]})})]})},t))})]})})}function Nt(){const e=[{icon:s.jsx(xe,{className:"w-6 h-6"}),title:"企业级安全保障",description:"采用军事级加密技术，确保企业数据传输安全"},{icon:s.jsx(ge,{className:"w-6 h-6"}),title:"团队管理",description:"集中化的用户管理和权限控制"},{icon:s.jsx(ve,{className:"w-6 h-6"}),title:"专属服务器",description:"独立部署的高性能服务器集群"}];return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-[#1A237E] to-[#0D47A1]",children:[s.jsx(vt,{}),s.jsx("section",{className:"pt-32 pb-24",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4",children:s.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-5xl font-bold mb-6 leading-tight",children:["企业级VPN解决方案",s.jsx("span",{className:"block text-[#2196F3]",children:"为您的业务保驾护航"})]}),s.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"提供安全、稳定、高速的企业专用网络服务，助力企业数字化转型"}),s.jsxs("div",{className:"flex gap-6",children:[s.jsxs("a",{href:"mailto:vetpass@outlook.com",className:"bg-[#2196F3] hover:bg-[#1E88E5] px-8 py-4 rounded-lg font-medium text-lg transition-colors flex items-center gap-2",children:["预约演示 ",s.jsx(me,{className:"w-5 h-5"})]}),s.jsx("button",{className:"bg-white/10 hover:bg-white/15 px-8 py-4 rounded-lg font-medium text-lg transition-colors",children:"了解更多"})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",alt:"Enterprise",className:"rounded-2xl shadow-2xl"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1A237E]/50 to-transparent rounded-2xl"})]})]})})}),s.jsx("section",{className:"py-24 bg-white/5",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[s.jsx("h2",{className:"text-3xl font-bold text-center mb-4",children:"企业级功能特性"}),s.jsx("p",{className:"text-gray-300 text-center mb-16 text-lg",children:"为企业提供全方位的网络安全解决方案"}),s.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((t,r)=>s.jsxs("div",{className:"bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10",children:[s.jsx("div",{className:"h-12 w-12 bg-[#2196F3] rounded-lg flex items-center justify-center mb-4",children:t.icon}),s.jsx("h3",{className:"text-lg font-bold mb-2",children:t.title}),s.jsx("p",{className:"text-gray-300",children:t.description})]},r))})]})}),s.jsx(yt,{}),s.jsx(wt,{}),s.jsx("section",{className:"py-24 bg-[#2196F3]",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[s.jsx("h2",{className:"text-3xl font-bold mb-6",children:"准备开始使用企业级VPN服务了吗？"}),s.jsx("p",{className:"text-xl mb-8",children:"联系我们的销售团队，获取专属解决方案"}),s.jsxs("div",{className:"flex gap-6 justify-center",children:[s.jsx("a",{href:"mailto:vetpass@outlook.com",className:"bg-white text-[#2196F3] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-colors",children:"联系销售"}),s.jsx("a",{href:"mailto:vetpass@outlook.com",className:"bg-[#2196F3] border-2 border-white hover:bg-[#1E88E5] px-8 py-4 rounded-lg font-medium text-lg transition-colors",children:"预约演示"})]})]})})]})}const Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"}));export{St as B,Ut as E,xt as L,Pt as R,T as a,st as b,qe as u};
