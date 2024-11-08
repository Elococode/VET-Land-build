import{r as m}from"./vendor-DVpMmIQw.js";import{D as x,S as p}from"./icons-Cv85kTJB.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=m,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,v=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(s,r,t){var o,a={},i=null,l=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)w.call(r,o)&&!g.hasOwnProperty(o)&&(a[o]=r[o]);if(s&&s.defaultProps)for(o in r=s.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:f,type:s,key:i,ref:l,props:a,_owner:v.current}}n.Fragment=u;n.jsx=c;n.jsxs=c;d.exports=n;var e=d.exports;function j({platform:s,icon:r,description:t,version:o,downloadUrl:a,downloadText:i="下载"}){return e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-hover/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"}),e.jsxs("div",{className:"relative bg-white/[0.05] rounded-2xl backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-300 flex flex-col overflow-hidden min-h-[280px]",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"}),e.jsx("div",{className:"p-8 pb-4 relative",children:e.jsxs("div",{className:"flex items-center gap-6 mb-3",children:[e.jsx("div",{className:"h-16 w-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300",children:r}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold mb-1",children:s}),e.jsxs("p",{className:"text-primary text-sm font-medium",children:["版本 ",o]})]})]})}),e.jsx("div",{className:"px-8 flex-grow relative",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:t})}),e.jsx("div",{className:"p-8 pt-4 relative",children:e.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full bg-white/[0.08] hover:bg-primary px-6 py-3 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20",children:[e.jsx(x,{className:"w-5 h-5"}),e.jsx("span",{children:i})]})})]})]})}function b(){const s=[{platform:"Windows",icon:e.jsx("img",{src:"/logo.svg",alt:"Windows",className:"w-14 h-14"}),description:"适用于 Windows 10/11 系统，提供完整的桌面体验，支持自动更新和智能分流",version:"4.1.9",size:"45.8 MB",downloadUrl:"https://wwfa.lanzouy.com/iEGty0g31y8d",downloadText:"下载"},{platform:"macOS",icon:e.jsx("img",{src:"/logo.svg",alt:"macOS",className:"w-14 h-14"}),description:"支持 Intel 和 Apple Silicon，适用于 macOS 10.15 及以上版本，原生优化体验",version:"4.1.9",size:"48.2 MB",downloadUrl:"https://wwfa.lanzouy.com/iusiJ0g31w2f",downloadText:"下载"},{platform:"iOS",icon:e.jsx(p,{className:"w-14 h-14"}),description:"适用于 iPhone 和 iPad，需要 iOS 14.0 或更高版本，支持小组件和快捷指令",version:"2.1.9",size:"78.5 MB",downloadUrl:"https://10-02-00-10-02-003alalalal.mvet.info/",downloadText:"查看教程"},{platform:"Android",icon:e.jsx("img",{src:"/logo.svg",alt:"Android",className:"w-14 h-14"}),description:"适用于 Android 8.0 及以上版本的手机和平板设备，支持分应用代理",version:"4.1.7",size:"32.6 MB",downloadUrl:"https://wwfa.lanzouo.com/i0zhO0g31une",downloadText:"下载"}];return e.jsxs("div",{className:"min-h-screen container mx-auto px-4 py-32",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"下载 VET·Network"}),e.jsx("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"为您的所有设备提供全方位的网络安全保护。支持 Windows、macOS、iOS 和 Android 平台，根据您套餐，一个账号即可在多台设备上同时使用。"})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:s.map((r,t)=>e.jsx(j,{...r},t))})]})}const _=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as D,e as j};