import{G as y,r as u,B as b,u as v,d as w,e,n as l,g as o,i as x,f as h,h as k,j as S,v as A,m as V,t as B,y as D,z as j,A as P,_}from"./index-BXFy05WO.js";import{B as z}from"./box-Cg0hrykV.js";const M=y("adminData",()=>{const d=u(localStorage.getItem("adminPassword")||"");function n(a){d.value=a,localStorage.setItem("token",a)}return{adminPassword:d,updateAdminPwd:n}}),I={class:"mx-auto h-16 w-16 relative"},L={class:"rounded-md shadow-sm -space-y-px"},N=["disabled"],T=b({__name:"LoginView",setup(d){const n=v(),a=u(""),i=u(!1),s=x("isDarkMode"),c=M(),p=()=>{let r=!0;return a.value?a.value.length<6&&(n.showAlert("密码长度至少为6位","error"),r=!1):(n.showAlert("无效的密码","error"),r=!1),r},m=D(),f=async()=>{if(p()){P.post("/admin/login",{password:a.value}).then(r=>{c.updateAdminPwd(r.detail.token),m.push("/admin")}).catch(r=>{n.showAlert(r.response.data.detail,"error")}),i.value=!0;try{await new Promise(r=>setTimeout(r,2e3))}catch{}finally{i.value=!1}}};return(r,t)=>(j(),w("div",{class:l(["min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 relative overflow-hidden",o(s)?"bg-gray-900":"bg-gray-50"])},[t[6]||(t[6]=e("div",{class:"absolute inset-0 z-0"},[e("div",{class:"cyber-grid"}),e("div",{class:"floating-particles"})],-1)),e("div",{class:l(["max-w-md w-full space-y-8 backdrop-blur-lg bg-opacity-20 p-8 rounded-xl border border-opacity-20",[o(s)?"bg-gray-800 border-gray-600":"bg-white/70 border-gray-200"]])},[e("div",null,[e("div",I,[t[1]||(t[1]=e("div",{class:"absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"},null,-1)),t[2]||(t[2]=e("div",{class:"absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-50 blur-md animate-pulse"},null,-1)),e("div",{class:l(["absolute inset-1 rounded-full flex items-center justify-center",o(s)?"bg-gray-800":"bg-white"])},[h(o(z),{class:l(["h-8 w-8",o(s)?"text-cyan-400":"text-cyan-600"])},null,8,["class"])],2)]),e("h2",{class:l(["mt-6 text-center text-3xl font-extrabold",o(s)?"text-white":"text-gray-900"])}," 登录 ",2)]),e("form",{class:"mt-8 space-y-6",onSubmit:k(f,["prevent"])},[t[5]||(t[5]=e("input",{type:"hidden",name:"remember",value:"true"},null,-1)),e("div",L,[e("div",null,[t[3]||(t[3]=e("label",{for:"password",class:"sr-only"},"密码",-1)),S(e("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":t[0]||(t[0]=g=>a.value=g),class:l(["appearance-none rounded-t-md relative block w-full px-4 py-3 border transition-all duration-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm backdrop-blur-sm",o(s)?"bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"bg-white/50 border-gray-300 text-gray-900 hover:border-gray-400"]),placeholder:"密码"},null,2),[[A,a.value]])])]),e("div",null,[e("button",{type:"submit",class:l(["group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/50",o(s)?"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600":"bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700",i.value?"opacity-75 cursor-not-allowed":""]),disabled:i.value},[t[4]||(t[4]=e("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},null,-1)),V(" "+B(i.value?"登录中...":"登录"),1)],10,N)])],32)],2)],2))}}),E=_(T,[["__scopeId","data-v-3d6e2ab2"]]);export{E as default};
