import{c as _,b as N,au as P,n as W,u as H,H as k,B as v,_ as V,w as $}from"./request-a912fd0b.js";import{d as B,c as I,o as d,E as M,F as m,r as y,n as i,u as l,a as h,w as g,m as b,L as C,O as w,b as T,T as F}from"./index-31a75a9f.js";let f;const D=s=>{var a;if(!_)return 0;if(f!==void 0)return f;const o=document.createElement("div");o.className=`${s}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const e=document.createElement("div");e.style.width="100%",o.appendChild(e);const c=e.offsetWidth;return(a=o.parentNode)==null||a.removeChild(o),f=n-c,f};function G(s,a){if(!_)return;if(!a){s.scrollTop=0;return}const o=[];let n=a.offsetParent;for(;n!==null&&s!==n&&s.contains(n);)o.push(n),n=n.offsetParent;const e=a.offsetTop+o.reduce((t,p)=>t+p.offsetTop,0),c=e+a.offsetHeight,r=s.scrollTop,u=r+s.clientHeight;e<r?s.scrollTop=e:c>u&&(s.scrollTop=c-s.clientHeight)}const R=N({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:P,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),K={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},L=B({name:"ElTag"}),O=B({...L,props:R,emits:K,setup(s,{emit:a}){const o=s,n=W(),e=H("tag"),c=I(()=>{const{type:t,hit:p,effect:S,closable:E,round:z}=o;return[e.b(),e.is("closable",E),e.m(t),e.m(n.value),e.m(S),e.is("hit",p),e.is("round",z)]}),r=t=>{a("close",t)},u=t=>{a("click",t)};return(t,p)=>t.disableTransitions?(d(),M("span",{key:0,class:i(l(c)),style:T({backgroundColor:t.color}),onClick:u},[m("span",{class:i(l(e).e("content"))},[y(t.$slots,"default")],2),t.closable?(d(),h(l(v),{key:0,class:i(l(e).e("close")),onClick:C(r,["stop"])},{default:g(()=>[b(l(k))]),_:1},8,["class","onClick"])):w("v-if",!0)],6)):(d(),h(F,{key:1,name:`${l(e).namespace.value}-zoom-in-center`,appear:""},{default:g(()=>[m("span",{class:i(l(c)),style:T({backgroundColor:t.color}),onClick:u},[m("span",{class:i(l(e).e("content"))},[y(t.$slots,"default")],2),t.closable?(d(),h(l(v),{key:0,class:i(l(e).e("close")),onClick:C(r,["stop"])},{default:g(()=>[b(l(k))]),_:1},8,["class","onClick"])):w("v-if",!0)],6)]),_:3},8,["name"]))}});var j=V(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const J=$(j);export{J as E,D as g,G as s,R as t};