_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4lbY":function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("WR1G")),c=n.n(a);t.a=function(e){e.id;var t=e.type,n=e.placeholder,a=e.iconPath,i=e.name,s=e.onChange,o=(e.onClickIcon,e.value);return Object(r.jsxs)("div",{style:{position:"relative",width:"100%"},children:[Object(r.jsx)("input",{type:t,name:i,value:o,onChange:s,className:c.a.inputText,required:!0,style:{paddingTop:7,backgroundColor:"white"}}),Object(r.jsx)("span",{className:c.a.floating__label,children:n}),a&&Object(r.jsx)("img",{className:c.a.icon,src:a,alt:""})]})}},"9rbA":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n("E353"),a=function(e){var t=e.celular,n=e.fechaNacimiento;e.dni;return r.a.find((function(e){return e.celular==t&&e.fecNacimiento==n&&e.numDocumento==e.numDocumento}))},c=function(e){if(!e)return"";var t=e.split("/");return t[2]+"-"+t[1]+"-"+t[0]},i=function(e){return 9==e.length},s=function(e){return 8==e.length}},Bl6k:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datos",function(){return n("xRae")}])},KL26:function(e,t,n){e.exports={container:"drop-down-input_container__3GLCd",container__dropdown:"drop-down-input_container__dropdown__3BQNq"}},WR1G:function(e,t,n){e.exports={floating__label:"input_floating__label__1sqoz",inputText:"input_inputText__36lEV",icon:"input_icon__3j4nj"}},YvxR:function(e,t,n){e.exports={stepper:"stepper_stepper__NR5G3",stepper__stepText:"stepper_stepper__stepText__2Ldbi",stepper__currentStep:"stepper_stepper__currentStep__2Ik1r",stepper__steps:"stepper_stepper__steps__1MPJt"}},ZYT6:function(e,t,n){e.exports={wrapper:"general-style_wrapper__gmB-d",mobile:"general-style_mobile__2ILFK",not__mobile:"general-style_not__mobile__1V41Z",wrapper__form:"general-style_wrapper__form__XnsJP",plan__item__separator:"general-style_plan__item__separator__Ky4Na",carrousel:"general-style_carrousel__3yEei",plan__summary:"general-style_plan__summary__6g1dA",illustration__info:"general-style_illustration__info__2QbI4"}},aCAn:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("KL26")),c=n.n(a);t.a=function(e){var t=e.children,n=e.text;return Object(r.jsxs)("div",{className:c.a.container,children:[Object(r.jsxs)("div",{className:c.a.container__dropdown,children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)("img",{src:"/assets/icons/chevrot.png",alt:""})]}),t]})}},kbwH:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("YvxR")),c=n.n(a);t.a=function(e){var t=e.currentStep,n=e.steps;return Object(r.jsxs)("div",{className:c.a.stepper,children:[Object(r.jsx)("img",{src:"/assets/icons/ic_round_back.png",alt:""}),Object(r.jsx)("span",{className:c.a.stepper__stepText,children:"PASO"}),Object(r.jsx)("span",{className:c.a.stepper__currentStep,children:t}),Object(r.jsxs)("div",{className:c.a.stepper__steps,children:[Object(r.jsx)("span",{children:"DE"}),Object(r.jsx)("span",{children:n})]})]})}},xRae:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("rePB"),c=n("20a2"),i=n("g4pe"),s=n.n(i),o=n("q1tI"),l=n("rSSI"),p=n("VjZ9"),u=n("aCAn"),j=n("7qka"),d=n("4lbY"),b=n("kbwH"),m=n("cdJ9"),_=n("zoGj"),O=n("tR74"),h=n("ZYT6"),f=n.n(h),x=n("9rbA"),g=n("mZOT");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=Object(g.a)((function(){var e=Object(c.useRouter)(),t=Object(o.useReducer)((function(e,t){return v(v({},e),t)}),{dni:"",nombres:"",apPaterno:"",apMaterno:"",fecNacimiento:"",fecNacimientoFamilia:""}),n=t[0],i=t[1],h=function(e){var t=e.target,r=t.name,c=t.value;i(v(v({},n),{},Object(a.a)({},r,c)))},g=Object(o.useState)(""),y=g[0],N=g[1],w=Object(o.useState)(""),C=w[0],P=w[1],k=Object(O.b)(),T=Object(O.d)(),I=Object(O.a)(),F=Object(O.c)();return Object(o.useEffect)((function(){var e;k&&i(v(v({},n),{},(e={},Object(a.a)(e,"dni",k.numDocumento),Object(a.a)(e,"nombres",k.nombres),Object(a.a)(e,"fecNacimiento",Object(x.b)(k.fecNacimiento)),Object(a.a)(e,"apPaterno",k.apellidoPaterno),Object(a.a)(e,"apMaterno",k.apellidoMaterno),e)))}),[k]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("title",{children:"Datos del cliente"})}),Object(r.jsxs)("div",{className:f.a.wrapper,children:[Object(r.jsx)("div",{className:f.a.mobile,children:Object(r.jsx)(j.a,{})}),Object(r.jsx)("div",{className:f.a.not__mobile,children:Object(r.jsx)(l.a,{illustration1:"/assets/images/illustration.png",illustration2:"/assets/images/illustration2.png",hasContent:!1})}),Object(r.jsxs)("div",{className:f.a.wrapper__form,children:[Object(r.jsx)(b.a,{currentStep:1,steps:7}),Object(r.jsxs)(_.a,{children:["Hola"," ",Object(r.jsx)("span",{children:k.nombres?k.nombres:"\xa1empecemos!"})]}),Object(r.jsxs)(m.a,{children:[" ",k.nombres?"Valida que los datos sean correctos":"Cu\xe9ntanos un poco mas de ti"," "]}),Object(r.jsx)("div",{style:{marginTop:30},children:Object(r.jsx)(m.a,{children:k.nombres?"Datos personales del titular":"Ingresa tu nombre"})}),k.nombres&&Object(r.jsx)(u.a,{text:"DNI",children:Object(r.jsx)(d.a,{value:v({},n).dni,id:"dni",name:"dni",onChange:function(e){return h(e)},iconPath:"",onClickIcon:function(){return null},type:"text",placeholder:"Nro de Documento"})}),Object(r.jsx)(d.a,{value:v({},n).nombres,id:"nombres",name:"nombres",iconPath:"",onChange:function(e){return h(e)},onClickIcon:function(){return null},type:"text",placeholder:k.nombres?"Nombres":"Nombre y Apellido"}),k.nombres&&Object(r.jsx)(d.a,{id:"apPaterno",value:v({},n).apPaterno,name:"apPaterno",iconPath:"",onChange:function(e){return h(e)},onClickIcon:function(){return null},type:"text",placeholder:"Apellido Paterno"}),k.nombres&&Object(r.jsx)(d.a,{id:"apMaterno",value:v({},n).apMaterno,name:"apMaterno",iconPath:"",onChange:function(e){return h(e)},onClickIcon:function(){return null},type:"text",placeholder:"Apellido Materno"}),k.nombres&&Object(r.jsx)(d.a,{id:"1",value:v({},n).fecNacimiento,name:"fecNacimiento",iconPath:"",onChange:function(e){return h(e)},onClickIcon:function(){return null},type:"date",placeholder:"Fecha de Nacimiento"}),k.nombres&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:{marginTop:10},children:Object(r.jsx)(m.a,{children:"Genero"})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{marginTop:8},children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"male"}),Object(r.jsx)("label",{style:{marginLeft:10},htmlFor:"",children:"Masculino"})]}),Object(r.jsxs)("div",{style:{marginTop:8},children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"female"}),Object(r.jsx)("label",{style:{marginLeft:10},htmlFor:"",children:"Femenino"})]})]})]}),Object(r.jsx)("div",{style:{marginTop:20,marginBottom:20},children:Object(r.jsx)(_.a,{style:{fontSize:16,color:"#494F66"},children:"\xbf A quien vamos a asegurar ?"})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{marginTop:8},children:[Object(r.jsx)("input",{onChange:function(e){N(e.target.value)},name:"who",type:"radio",value:"solo"}),Object(r.jsx)("label",{style:{marginLeft:10},htmlFor:"",children:"Solo Ami"})]}),Object(r.jsxs)("div",{style:{marginTop:8},children:[Object(r.jsx)("input",{onChange:function(e){N(e.target.value)},name:"who",type:"radio",value:"familia"}),Object(r.jsx)("label",{style:{marginLeft:10},htmlFor:"",children:"A mi y ami familia"})]})]}),"familia"==y&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:{marginTop:20},children:Object(r.jsx)(m.a,{children:"Datos de tus familiares"})}),Object(r.jsx)("p",{style:{color:"red",fontSize:12,marginBottom:12},children:C}),Object(r.jsxs)(u.a,{text:"Conyuge",children:[Object(r.jsx)(d.a,{value:v({},n).fecNacimientoFamilia,id:"fecNacimientoFamilia",name:"fecNacimientoFamilia",iconPath:"",onChange:function(e){return h(e)},onClickIcon:function(){return null},type:"date",placeholder:"F. Nacimiento"}),Object(r.jsx)("div",{style:{width:100,height:"100%",backgroundColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)("img",{src:"/assets/icons/ic_plus.png",alt:"",onClick:function(){var e=v({},n).fecNacimientoFamilia;e?I({conyuge:"Conyuge",fecNacimient:e}):P("Fecha Invalida")}})})]}),null===T||void 0===T?void 0:T.map((function(e,t){return Object(r.jsxs)("div",{style:{padding:"10px 8px",display:"flex",justifyContent:"space-between"},children:[Object(r.jsx)("span",{children:e.conyuge}),Object(r.jsx)("span",{children:e.fecNacimient}),Object(r.jsx)("img",{onClick:function(){F(t)},src:"/assets/icons/ic_delete.png",alt:""})]},t)}))]}),Object(r.jsx)(p.a,{disabled:!1,text:"Continuar",onClick:function(){e.push("/elige-tu-plan")}}),Object(r.jsx)("div",{style:{height:50,backgroundColor:"transparent"}})]})]})]})}))}},[["Bl6k",0,2,1,3]]]);