(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{82:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(31);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(82),a=n(0),o=n(12),i=n(13),l=n(2),s={form:{},label:{display:"flex",flexDirection:"column",marginBottom:15}};function c(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],u=n[1],b=Object(a.useState)(""),j=Object(r.a)(b,2),f=j[0],m=j[1],p=Object(a.useState)(""),d=Object(r.a)(p,2),h=d[0],y=d[1],O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return u(r);case"email":return m(r);case"password":return y(r);default:return}};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"SignUp"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.register({name:c,email:f,password:h})),u(""),m(""),y("")},style:s.form,autoComplete:"off",children:[Object(l.jsxs)("label",{style:s.label,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:c,onChange:O})]}),Object(l.jsxs)("label",{style:s.label,children:["e-mail",Object(l.jsx)("input",{type:"email",name:"email",value:f,onChange:O})]}),Object(l.jsxs)("label",{style:s.label,children:["password",Object(l.jsx)("input",{type:"password",name:"password",value:h,onChange:O})]}),Object(l.jsx)("button",{type:"submit",children:"Register now"})]})]})}}}]);
//# sourceMappingURL=5.0504e250.chunk.js.map