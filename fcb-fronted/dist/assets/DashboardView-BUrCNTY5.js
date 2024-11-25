import{c as g,B as v,I as w,o as _,p,b as u,d as t,n as a,e,t as i,f as y,F as k,x as U,z as F,A as M,K as z,L as C}from"./index-BTJMh68G.js";import{F as m}from"./file-K__YxWAi.js";import{H as D,T as S}from"./trash-D-kesX_3.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=g("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=g("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=g("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=g("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),j={class:"p-6 h-screen overflow-y-auto custom-scrollbar"},A={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"},L={class:"flex items-center justify-between"},T={class:"flex items-center justify-between"},V={class:"flex items-center justify-between"},K={class:"flex items-center justify-between"},N={class:"p-6"},q={class:"space-y-4"},E={class:"flex-shrink-0"},G={class:"flex-1"},R=v({__name:"DashboardView",setup(J){const s=F("isDarkMode"),o=w({totalFiles:0,storageUsed:0,yesterdayCount:0,todayCount:0,yesterdaySize:0,todaySize:0,sysUptime:0}),h=[{icon:I,description:'张三上传了文件 "项目计划.pdf"',time:"10分钟前"},{icon:$,description:"新用户李四加入了系统",time:"30分钟前"},{icon:S,description:'王五删除了文件 "旧文档.doc"',time:"1小时前"},{icon:m,description:"系统自动备份完成",time:"2小时前"}],b=l=>{const r=new Date().getTime()-l,d=Math.floor(r/(24*60*60*1e3)),c=Math.floor(r%(24*60*60*1e3)/(60*60*1e3));return`${d}天${c}小时`},x=l=>{const n=parseInt(l)/1024,r=n/1024,d=r/1024,c=d/1024;return c>1?`${c.toFixed(2)}TB`:d>1?`${d.toFixed(2)}GB`:r>1?`${r.toFixed(2)}MB`:n>1?`${n.toFixed(2)}KB`:`${l}B`},f=async()=>{const l=await M.get("/admin/dashboard");o.totalFiles=l.detail.totalFiles,o.storageUsed=x(l.detail.storageUsed),o.yesterdaySize=x(l.detail.yesterdaySize),o.todaySize=x(l.detail.todaySize),o.yesterdayCount=l.detail.yesterdayCount,o.todayCount=l.detail.todayCount,o.sysUptime=b(l.detail.sysUptime)};return _(()=>{f()}),(l,n)=>(p(),u("div",j,[t("h2",{class:a(["text-2xl font-bold mb-6",[e(s)?"text-white":"text-gray-800"]])}," 仪表盘 ",2),t("div",A,[t("div",{class:a(["p-6 rounded-lg shadow-md transition-colors duration-300",[e(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",L,[t("div",null,[t("p",{class:a(["text-sm",[e(s)?"text-gray-400":"text-gray-600"]])}," 总文件数 ",2),t("h3",{class:a(["text-2xl font-bold mt-1",[e(s)?"text-white":"text-gray-800"]])},i(o.totalFiles),3)]),t("div",{class:a(["p-3 rounded-full",[e(s)?"bg-indigo-900":"bg-indigo-100"]])},[y(e(m),{class:a(["w-6 h-6",[e(s)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])],2)]),t("p",{class:a(["text-sm mt-2",[e(s)?"text-green-400":"text-green-600"]])},[t("span",{class:a([e(s)?"text-gray-400":"text-gray-600"])},"昨天：",2),t("span",null,i(o.yesterdayCount),1),t("span",{class:a(["ml-2",[e(s)?"text-gray-400":"text-gray-600"]])},"今天：",2),t("span",null,i(o.todayCount),1)],2)],2),t("div",{class:a(["p-6 rounded-lg shadow-md transition-colors duration-300",[e(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",T,[t("div",null,[t("p",{class:a(["text-sm",[e(s)?"text-gray-400":"text-gray-600"]])}," 存储空间 ",2),t("h3",{class:a(["text-2xl font-bold mt-1",[e(s)?"text-white":"text-gray-800"]])},i(o.storageUsed),3)]),t("div",{class:a(["p-3 rounded-full",[e(s)?"bg-purple-900":"bg-purple-100"]])},[y(e(D),{class:a(["w-6 h-6",[e(s)?"text-purple-400":"text-purple-600"]])},null,8,["class"])],2)]),t("p",{class:a(["text-sm mt-2",[e(s)?"text-green-400":"text-green-600"]])},[t("span",{class:a([e(s)?"text-gray-400":"text-gray-600"])},"昨天：",2),t("span",null,i(o.yesterdaySize),1),t("span",{class:a(["ml-2",[e(s)?"text-gray-400":"text-gray-600"]])},"今天：",2),t("span",null,i(o.todaySize),1)],2)],2),t("div",{class:a(["p-6 rounded-lg shadow-md transition-colors duration-300",[e(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",V,[t("div",null,[t("p",{class:a(["text-sm",[e(s)?"text-gray-400":"text-gray-600"]])}," 活跃用户 ",2),t("h3",{class:a(["text-2xl font-bold mt-1",[e(s)?"text-white":"text-gray-800"]])}," 25 ",2)]),t("div",{class:a(["p-3 rounded-full",[e(s)?"bg-green-900":"bg-green-100"]])},[y(e(H),{class:a(["w-6 h-6",[e(s)?"text-green-400":"text-green-600"]])},null,8,["class"])],2)]),t("p",{class:a(["text-sm mt-2",[e(s)?"text-red-400":"text-red-600"]])},[n[0]||(n[0]=t("span",null,"↓ 5% ",-1)),t("span",{class:a([e(s)?"text-gray-400":"text-gray-600"])},"较上周",2)],2)],2),t("div",{class:a(["p-6 rounded-lg shadow-md transition-colors duration-300",[e(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",K,[t("div",null,[t("p",{class:a(["text-sm",[e(s)?"text-gray-400":"text-gray-600"]])}," 系统状态 ",2),t("h3",{class:a(["text-2xl font-bold mt-1",[e(s)?"text-white":"text-gray-800"]])}," 正常 ",2)]),t("div",{class:a(["p-3 rounded-full",[e(s)?"bg-blue-900":"bg-blue-100"]])},[y(e(B),{class:a(["w-6 h-6",[e(s)?"text-blue-400":"text-blue-600"]])},null,8,["class"])],2)]),t("p",{class:a(["text-sm mt-2",[e(s)?"text-gray-400":"text-gray-600"]])}," 服务器运行时间: "+i(o.sysUptime),3)],2)]),t("div",{class:a(["rounded-lg shadow-md overflow-hidden transition-colors duration-300",[e(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",{class:a(["px-6 py-4 border-b",[e(s)?"border-gray-700":"border-gray-200"]])},[t("h3",{class:a(["text-lg font-medium",[e(s)?"text-white":"text-gray-800"]])}," 最近活动 ",2)],2),t("div",N,[t("div",q,[(p(),u(k,null,U(h,(r,d)=>t("div",{key:d,class:"flex items-center space-x-4"},[t("div",E,[(p(),z(C(r.icon),{class:a(["w-5 h-5",[e(s)?"text-gray-400":"text-gray-600"]])},null,8,["class"]))]),t("div",G,[t("p",{class:a([e(s)?"text-gray-300":"text-gray-700"])},i(r.description),3),t("p",{class:a(["text-sm",[e(s)?"text-gray-400":"text-gray-500"]])},i(r.time),3)])])),64))])])],2)]))}});export{R as default};