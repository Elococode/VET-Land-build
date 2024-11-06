import{j as e}from"./download-cb6QtlI_.js";import{R as n}from"./vendor-DVpMmIQw.js";import{C as o}from"./icons-Cu_YH9jY.js";function h(){const[s,r]=n.useState(!0),a=[{name:"基础版",monthlyPrice:"32",yearlyPrice:"27",description:"适合个人用户的入门方案",features:["5台设备同时在线","30个国家服务器","标准带宽"]},{name:"高级版",monthlyPrice:"58",yearlyPrice:"51",description:"完整的安全保护方案",features:["无限设备连接","60+国家服务器","超高速带宽"],popular:!0},{name:"旗舰版",monthlyPrice:"88",yearlyPrice:"74",description:"为企业定制的VPN方案",features:["团队管理面板","专属技术支持","定制化部署方案"]}];return e.jsx("div",{className:"min-h-screen py-32",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold mb-6",children:"选择最适合您的方案"}),e.jsx("p",{className:"text-xl text-gray-400 mb-12",children:"所有方案均提供30天无理由退款保证"}),e.jsxs("div",{className:"inline-flex items-center gap-4 bg-white/5 p-1 rounded-xl backdrop-blur-sm",children:[e.jsx("button",{onClick:()=>r(!1),className:`px-6 py-2 rounded-lg font-medium transition-all ${s?"text-gray-400 hover:text-white":"bg-white text-[#4687FF]"}`,children:"月付方案"}),e.jsxs("button",{onClick:()=>r(!0),className:`px-6 py-2 rounded-lg font-medium transition-all ${s?"bg-white text-[#4687FF]":"text-gray-400 hover:text-white"}`,children:["年付方案",e.jsx("span",{className:"ml-2 text-sm bg-[#4687FF] text-white px-2 py-0.5 rounded-full",children:"省17%"})]})]})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:a.map((t,i)=>e.jsxs("div",{className:`${t.popular?"nord-gradient relative transform scale-105":"card-gradient border border-white/10"} p-8 rounded-2xl backdrop-blur-sm`,children:[t.popular&&e.jsx("div",{className:"absolute -top-4 right-8 bg-white text-[#4687FF] px-4 py-1 rounded-full text-sm font-medium",children:"最受欢迎"}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:t.name}),e.jsxs("div",{className:"text-3xl font-bold mb-2",children:["¥",s?t.yearlyPrice:t.monthlyPrice,e.jsx("span",{className:`text-lg ${t.popular?"text-white/70":"text-gray-400"}`,children:"/月"})]}),e.jsx("p",{className:`${t.popular?"text-white/70":"text-gray-400"} mb-8`,children:t.description}),e.jsx("ul",{className:"space-y-4 mb-8",children:t.features.map((l,c)=>e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx(o,{className:`w-5 h-5 ${t.popular?"":"text-[#4687FF]"}`}),e.jsx("span",{children:l})]},c))}),e.jsx("button",{className:`w-full ${t.popular?"bg-white hover:bg-gray-100 text-[#4687FF]":"bg-white/10 hover:bg-white/15"} py-3 rounded-lg transition-colors font-medium`,children:t.name==="旗舰版"?"联系销售":"选择方案"})]},i))})]})})}export{h as default};
