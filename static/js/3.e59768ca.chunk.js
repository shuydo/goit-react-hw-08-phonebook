(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{82:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(31);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},86:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(0),c=n(12),a=n(43),i=n(6),o=n(19),u=n(82),b=n(32),s=n(2),j={name:"",number:""};function l(){var t=Object(r.useState)(j),e=Object(u.a)(t,2),n=e[0],a=e[1],l=Object(c.b)(),d=function(t){return a(Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t.target.name,t.target.value)))};return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(b.a.addContact(n)),a(j)},children:[Object(s.jsx)("h3",{children:"Name"}),Object(s.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n.name,onChange:d}),Object(s.jsx)("h3",{children:"Number"}),Object(s.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n.number,onChange:d}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Add contact"})]})}var d=n(33);function h(){var t=Object(c.b)(),e=Object(c.c)(d.c.getVisibleContacts);return Object(s.jsx)(s.Fragment,{children:e.length>0&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"ContactList"}),Object(s.jsx)("ol",{children:e.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("span",{children:[e.name,": ",e.number+"\xa0\xa0"]}),Object(s.jsx)("button",{onClick:function(){return n=e.id,t(d.a.deleteContact(n));var n},children:"Delete"})]})},e.id)}))})]})})}function O(){var t=Object(c.b)();return Object(r.useEffect)((function(){return t(d.a.fetchContacts())}),[t]),Object(s.jsx)(a.a,{children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(h,{})]})})}}}]);
//# sourceMappingURL=3.e59768ca.chunk.js.map