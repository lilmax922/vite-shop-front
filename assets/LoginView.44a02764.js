import{ac as f,r as d,a as g,o as _,c as v,b as e,w as s,V as w,d as i,e as x,f as h,h as m,i as b,j as y}from"./index.6c150aa8.js";import{V as B,a as c}from"./VTextField.4852f7d6.js";const U={id:"login"},q=m("h1",{class:"text-center"},"\u767B\u5165",-1),N={class:"text-center my-5"},F={__name:"LoginView",setup(S){const V=f(),u=d(!1),n=d(!1),l=g({account:"",password:""}),r={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},length(a){return a.length>=4&&a.length<=20||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 20 \u500B\u5B57"}},p=async()=>{n.value=!0,await V.login(l),n.value=!1};return(a,t)=>(_(),v("div",U,[e(w,null,{default:s(()=>[e(i,{cols:"12"},{default:s(()=>[q]),_:1}),e(x),e(i,{cols:"12"},{default:s(()=>[e(B,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=o=>u.value=o),onSubmit:h(p,["prevent"])},{default:s(()=>[e(c,{modelValue:l.account,"onUpdate:modelValue":t[0]||(t[0]=o=>l.account=o),type:"text",rules:[r.required,r.length],label:"\u5E33\u865F",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),e(c,{modelValue:l.password,"onUpdate:modelValue":t[1]||(t[1]=o=>l.password=o),type:"password",rules:[r.required,r.length],label:"\u5BC6\u78BC",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),m("div",N,[e(b,{color:"success",type:"submit",size:"large",loading:n.value},{default:s(()=>[y("\u767B\u5165")]),_:1},8,["loading"])])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]))}};export{F as default};
