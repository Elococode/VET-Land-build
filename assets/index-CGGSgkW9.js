const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BHIMthkr.js","assets/download-cb6QtlI_.js","assets/vendor-DVpMmIQw.js","assets/icons-Cu_YH9jY.js","assets/enterprise-C1ZhZwuF.js","assets/terms-DEG4EvUi.js","assets/pricing-BW1DshfA.js"])))=>i.map(i=>d[i]);
import{j as e}from"./download-cb6QtlI_.js";import{b as P,r as m,R as j}from"./vendor-DVpMmIQw.js";import{u as T,L as f,a as L,R as C,b as N,B as I}from"./enterprise-C1ZhZwuF.js";import{c as b,E as O,e as S,X as _,f as F,B as M,G as k,g as D,P as G,h as B,L as H}from"./icons-Cu_YH9jY.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function x(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=x(t);fetch(t.href,o)}})();var A,y=P;A=y.createRoot,y.hydrateRoot;const V="modulepreload",W=function(n){return"/"+n},R={},g=function(i,x,u){let t=Promise.resolve();if(x&&x.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));t=Promise.allSettled(x.map(d=>{if(d=W(d),d in R)return;R[d]=!0;const p=d.endsWith(".css"),E=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${E}`))return;const l=document.createElement("link");if(l.rel=p?"stylesheet":V,p||(l.as="script"),l.crossOrigin="",l.href=d,a&&l.setAttribute("nonce",a),document.head.appendChild(l),p)return new Promise((h,v)=>{l.addEventListener("load",h),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return t.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return i().catch(o)})},s={HOME:"/",DOWNLOAD:"/download",TERMS:"/terms",PRICING:"/pricing",ENTERPRISE:"/enterprise",ENTERPRISE_SOLUTIONS:"/enterprise/solutions",ENTERPRISE_PRICING:"/enterprise/pricing",ENTERPRISE_CASES:"/enterprise/cases"},c={NAV_HEIGHT:96,COMPANY_NAME:"VET·Network",CONTACT:{EMAIL:"vetpass@outlook.com",TELEGRAM:"t.me/vetcrosspa",WHATSAPP:"+1 (408) 909-7354"},SOCIAL_LINKS:{BLOG:"https://ivexnet.com/"}};function $({onPageChange:n}){const[i,x]=m.useState(!1),[u,t]=m.useState(!1),o=m.useRef(null),r=m.useRef(),a=T(),d=[{name:"VET·Network",description:"在线安全和隐私",icon:e.jsx(b,{className:"w-5 h-5"}),onClick:()=>a(s.HOME)},{name:"VET·Enterprise",description:"企业用VPN",icon:e.jsx(M,{className:"w-5 h-5"}),onClick:()=>a(s.ENTERPRISE)},{name:"VexNet",description:"全球网络服务",icon:e.jsx(k,{className:"w-5 h-5"}),onClick:()=>window.open(c.SOCIAL_LINKS.BLOG,"_blank")}],p=()=>{r.current&&clearTimeout(r.current),x(!0)},E=()=>{r.current=setTimeout(()=>{x(!1)},100)},l=h=>{t(!1),n(h)};return m.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),e.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-[#151B26]/80 backdrop-blur-lg z-50 border-b border-white/10",children:e.jsxs("div",{className:"container mx-auto px-4 py-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs(f,{to:s.HOME,className:"flex items-center gap-2",onClick:()=>l(s.HOME),children:[e.jsx(b,{className:"w-8 h-8 text-[#4687FF]"}),e.jsx("span",{className:"text-xl font-bold",children:c.COMPANY_NAME})]}),e.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[e.jsx(f,{to:s.PRICING,className:"hover:text-[#4687FF] transition-colors",onClick:()=>l(s.PRICING),children:"定价"}),e.jsx(f,{to:s.ENTERPRISE,className:"hover:text-[#4687FF] transition-colors",onClick:()=>l(s.ENTERPRISE),children:"企业版"}),e.jsxs("a",{href:c.SOCIAL_LINKS.BLOG,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#4687FF] transition-colors flex items-center gap-1",children:["博客",e.jsx(O,{className:"w-4 h-4"})]})]})]}),e.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[e.jsxs("div",{className:"relative",ref:o,onMouseEnter:p,onMouseLeave:E,children:[e.jsxs("button",{className:"flex items-center gap-1 hover:text-[#4687FF] transition-colors",children:["产品",e.jsx(S,{className:`w-4 h-4 transition-transform ${i?"rotate-180":""}`})]}),i&&e.jsx("div",{className:"absolute top-full right-0 mt-1 w-64 bg-[#1A1F2E]/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl",onMouseEnter:p,onMouseLeave:E,children:e.jsx("div",{className:"p-2",children:d.map((h,v)=>e.jsxs("button",{onClick:h.onClick,className:"w-full flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors text-left",children:[e.jsx("div",{className:"mt-1",children:e.jsx("div",{className:"h-8 w-8 nord-gradient rounded-lg flex items-center justify-center",children:h.icon})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:h.name}),e.jsx("div",{className:"text-sm text-gray-400",children:h.description})]})]},v))})})]}),e.jsx(f,{to:s.DOWNLOAD,className:"hover:text-[#4687FF] transition-colors",onClick:()=>l(s.DOWNLOAD),children:"下载"}),e.jsx("button",{className:"nord-gradient hover:opacity-90 px-6 py-2 rounded-lg transition-opacity font-medium",children:"立即开始"})]}),e.jsx("button",{className:"lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors",onClick:()=>t(!u),children:u?e.jsx(_,{className:"w-6 h-6"}):e.jsx(F,{className:"w-6 h-6"})})]}),u&&e.jsx("div",{className:"lg:hidden mt-4 pb-4",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(f,{to:s.PRICING,className:"px-4 py-2 hover:bg-white/10 rounded-lg transition-colors",onClick:()=>l(s.PRICING),children:"定价"}),e.jsx(f,{to:s.ENTERPRISE,className:"px-4 py-2 hover:bg-white/10 rounded-lg transition-colors",onClick:()=>l(s.ENTERPRISE),children:"企业版"}),e.jsxs("a",{href:c.SOCIAL_LINKS.BLOG,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between",children:["博客",e.jsx(O,{className:"w-4 h-4"})]}),e.jsx(f,{to:s.DOWNLOAD,className:"px-4 py-2 hover:bg-white/10 rounded-lg transition-colors",onClick:()=>l(s.DOWNLOAD),children:"下载"}),e.jsx("button",{className:"mx-4 nord-gradient hover:opacity-90 px-6 py-2 rounded-lg transition-opacity font-medium",children:"立即开始"})]})})]})})}function z(){const n=T();return e.jsx("footer",{className:"w-full border-t border-white/10",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-16",children:[e.jsxs("div",{className:"grid md:grid-cols-12 gap-16",children:[e.jsxs("div",{className:"md:col-span-5 flex flex-col",children:[e.jsxs("button",{className:"flex items-center gap-2 mb-6",onClick:()=>n(s.HOME),children:[e.jsx(b,{className:"w-6 h-6 text-[#4687FF]"}),e.jsx("span",{className:"font-bold text-lg",children:c.COMPANY_NAME})]}),e.jsx("p",{className:"text-gray-400 leading-relaxed",children:"为您提供安全、快速、稳定的网络服务。我们致力于保护您的在线隐私和数据安全。"})]}),e.jsxs("div",{className:"md:col-span-4 flex flex-col md:items-end",children:[e.jsx("h3",{className:"font-bold text-lg mb-6 md:text-right w-full",children:"联系我们"}),e.jsxs("ul",{className:"space-y-4 md:text-right",children:[e.jsx("li",{children:e.jsxs("a",{href:`https://${c.CONTACT.TELEGRAM}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 text-gray-400 hover:text-[#4687FF] transition-colors group md:justify-end",children:[e.jsxs("span",{children:["Telegram: ",c.CONTACT.TELEGRAM]}),e.jsx(D,{className:"w-5 h-5 group-hover:text-[#4687FF] transition-colors"})]})}),e.jsx("li",{children:e.jsxs("a",{href:`https://wa.me/${c.CONTACT.WHATSAPP.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 text-gray-400 hover:text-[#4687FF] transition-colors group md:justify-end",children:[e.jsxs("span",{children:["WhatsApp: ",c.CONTACT.WHATSAPP]}),e.jsx(G,{className:"w-5 h-5 group-hover:text-[#4687FF] transition-colors"})]})}),e.jsx("li",{children:e.jsxs("a",{href:`mailto:${c.CONTACT.EMAIL}`,className:"flex items-center gap-3 text-gray-400 hover:text-[#4687FF] transition-colors group md:justify-end",children:[e.jsxs("span",{children:["Email: ",c.CONTACT.EMAIL]}),e.jsx(B,{className:"w-5 h-5 group-hover:text-[#4687FF] transition-colors"})]})})]})]}),e.jsxs("div",{className:"md:col-span-3 flex flex-col md:items-end",children:[e.jsx("h3",{className:"font-bold text-lg mb-6 md:text-right w-full",children:"服务支持"}),e.jsxs("ul",{className:"space-y-4 md:text-right",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>n(s.DOWNLOAD),className:"text-gray-400 hover:text-[#4687FF] transition-colors",children:"使用指南"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>{n(s.HOME),setTimeout(()=>{var i;(i=document.getElementById("faq"))==null||i.scrollIntoView({behavior:"smooth"})},100)},className:"text-gray-400 hover:text-[#4687FF] transition-colors",children:"常见问题"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>n(s.TERMS),className:"text-gray-400 hover:text-[#4687FF] transition-colors",children:"服务条款"})})]})]})]}),e.jsxs("div",{className:"border-t border-white/10 mt-16 pt-8 text-center text-gray-400",children:["© ",new Date().getFullYear()," ",c.COMPANY_NAME,". 保留所有权利"]})]})})}function K(){const{pathname:n}=L();return m.useEffect(()=>{window.scrollTo(0,0)},[n]),null}function w(){return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-[#151B26]/80 backdrop-blur-sm",children:e.jsx(H,{className:"w-8 h-8 text-[#4687FF] animate-spin"})})}const U=j.lazy(()=>g(()=>import("./Home-BHIMthkr.js"),__vite__mapDeps([0,1,2,3,4]))),Y=j.lazy(()=>g(()=>import("./download-cb6QtlI_.js").then(n=>n.D),__vite__mapDeps([1,2,3]))),q=j.lazy(()=>g(()=>import("./terms-DEG4EvUi.js"),__vite__mapDeps([5,1,2,3]))),X=j.lazy(()=>g(()=>import("./pricing-BW1DshfA.js"),__vite__mapDeps([6,1,2,3]))),J=j.lazy(()=>g(()=>import("./enterprise-C1ZhZwuF.js").then(n=>n.E),__vite__mapDeps([4,1,2,3])));function Q(){const n=i=>{window.scrollTo(0,0)};return e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsxs(C,{children:[e.jsx(N,{path:s.ENTERPRISE,element:e.jsx(m.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(J,{})})}),e.jsx(N,{path:"*",element:e.jsxs(e.Fragment,{children:[e.jsx($,{onPageChange:n}),e.jsx("main",{className:"pt-24",children:e.jsx(m.Suspense,{fallback:e.jsx(w,{}),children:e.jsxs(C,{children:[e.jsx(N,{path:s.HOME,element:e.jsx(U,{})}),e.jsx(N,{path:s.DOWNLOAD,element:e.jsx(Y,{})}),e.jsx(N,{path:s.TERMS,element:e.jsx(q,{})}),e.jsx(N,{path:s.PRICING,element:e.jsx(X,{})})]})})}),e.jsx(z,{onPageChange:n})]})})]})]})}function Z(){return e.jsx(I,{children:e.jsx(m.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(Q,{})})})}A(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(Z,{})}));
