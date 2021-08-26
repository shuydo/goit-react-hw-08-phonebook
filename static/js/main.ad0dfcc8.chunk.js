(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{13:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return g}));var c=n(10),r=n.n(c),a=n(21),o=n(16),u=n.n(o),i=n(1);u.a.defaults.baseURL="https://connections-api.herokuapp.com/";var s,l=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){u.a.defaults.headers.common.Authorization=""},d=Object(i.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(i.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f={register:d,logOut:Object(i.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/logout");case 3:b(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:j,fetchCurrentUser:Object(i.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),t.abrupt("return",n.rejectWithValue());case 5:return l(a),t.prev=6,t.next=9,u.a.get("/users/current");case 9:return o=t.sent,i=o.data,t.abrupt("return",i);case 14:t.prev=14,t.t0=t.catch(6);case 16:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}())},O={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getUsermail:function(t){return t.auth.user.email},getIsFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},h=n(6),g=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(s={},Object(h.a)(s,f.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(h.a)(s,f.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(h.a)(s,f.logOut.fulfilled,(function(t){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(h.a)(s,f.fetchCurrentUser.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(h.a)(s,f.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(h.a)(s,f.fetchCurrentUser.rejected,(function(t){t.isFetchingCurrentUser=!1})),s)}).reducer},32:function(t,e,n){"use strict";var c=n(10),r=n.n(c),a=n(21),o=n(16),u=n.n(o),i=n(5),s={fetchContacts:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.i)()),t.prev=1,t.next=4,u.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(i.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(i.h)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.b)()),e.next=3,u.a.post("/contacts",t).then((function(t){var e=t.data;return n(Object(i.c)(e))})).catch((function(t){return n(Object(i.a)(t.message))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(t){return function(e){e(Object(i.f)()),u.a.delete("/contacts/".concat(t)).then((function(){return e(Object(i.g)(t))})).catch((function(t){return e(Object(i.e)(t.message))}))}}};e.a=s},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return a.a})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return x}));var c,r,a=n(32),o=n(20),u=function(t){return t.contacts.filter},i=function(t){return t.contacts.items},s=Object(o.a)([i],(function(t){return t.reduce((function(t,e){return e.completed?t+1:t}),0)})),l={getLoading:function(t){return t.contacts.loading},getFilter:u,getVisibleContacts:Object(o.a)([u,i],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){var e=t.name,c=t.number;return e.toLowerCase().includes(n)||c.includes(n)})).sort((function(t,e){return t.name.localeCompare(e.name)}))})),getTotalContactCount:function(t){return i(t).length},getCompletedContactCount:s},b=n(5),d=n(6),j=n(47),f=n(9),O=n(1),h=Object(O.d)([],(c={},Object(d.a)(c,b.j,(function(t,e){return e.payload})),Object(d.a)(c,b.c,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(d.a)(c,b.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(O.d)(!1,(r={},Object(d.a)(r,b.i,(function(){return!0})),Object(d.a)(r,b.j,(function(){return!1})),Object(d.a)(r,b.h,(function(){return!1})),Object(d.a)(r,b.b,(function(){return!0})),Object(d.a)(r,b.c,(function(){return!1})),Object(d.a)(r,b.a,(function(){return!1})),Object(d.a)(r,b.f,(function(){return!0})),Object(d.a)(r,b.g,(function(){return!1})),Object(d.a)(r,b.e,(function(){return!1})),r)),p=Object(O.d)("",Object(d.a)({},b.d,(function(t,e){return e.payload}))),v=Object(O.d)(null,{}),x=Object(f.b)({items:h,filter:p,loading:g,error:v})},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(46),r=n.n(c),a=n(2);function o(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},46:function(t,e,n){t.exports={container:"Container_container__1Pg4c"}},5:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j}));var c=n(1),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),u=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),b=Object(c.b)("contacts/deleteContactSuccess"),d=Object(c.b)("contacts/deleteContactError"),j=Object(c.b)("contacts/changeFilter")},75:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var c=n(25),r=n.n(c),a=n(0),o=n.n(a),u=n(12),i=n(18),s=n(1),l=n(45),b=n(13),d=n(33),j={auth:b.b,contacts:d.b},f=Object(s.a)({reducer:j,devTools:!1});Object(l.a)(f.dispatch);var O=f,h=(n(75),n(7)),g=n(43),p=n(2),v={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},x=function(){var t=Object(u.c)(b.c.getIsLoggedIn);return Object(p.jsxs)("nav",{children:[Object(p.jsx)(i.b,{to:"/",exact:!0,style:v.link,activeStyle:v.activeLink,children:"Intro"}),t&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(i.b,{to:"/contacts",exact:!0,style:v.link,activeStyle:v.activeLink,children:"Contacts"})})]})},m=n.p+"static/media/default-avatar.f8b384b5.svg",k={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},mail:{fontWeight:700,marginRight:12}};function y(){var t=Object(u.b)(),e=Object(u.c)(b.c.getUsermail),n=m;return Object(p.jsxs)("div",{style:k.container,children:[Object(p.jsx)("img",{src:n,alt:"",width:"32",style:k.avatar}),Object(p.jsx)("span",{style:k.mail,children:e}),Object(p.jsx)("button",{type:"button",onClick:function(){return t(b.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var C={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function I(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/register",exact:!0,style:C.link,activeStyle:C.activeLink,children:"SignUp"}),Object(p.jsx)(i.b,{to:"/login",exact:!0,style:C.link,activeStyle:C.activeLink,children:"LogIn"})]})}var L={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function w(){var t=Object(u.c)(b.c.getIsLoggedIn);return Object(p.jsxs)("header",{style:L.header,children:[Object(p.jsx)(x,{}),t?Object(p.jsx)(y,{}):Object(p.jsx)(I,{})]})}var U=n(19),S=n(26),F=["children","redirectTo"];function T(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,r=Object(S.a)(t,F),a=Object(u.c)(b.c.getIsLoggedIn);return Object(p.jsx)(h.b,Object(U.a)(Object(U.a)({},r),{},{children:a?e:Object(p.jsx)(h.a,{to:c})}))}var A=["children","restricted","redirectTo"];function R(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,o=Object(S.a)(t,A),i=Object(u.c)(b.c.getIsLoggedIn)&&c;return Object(p.jsx)(h.b,Object(U.a)(Object(U.a)({},o),{},{children:i?Object(p.jsx)(h.a,{to:a}):e}))}var z=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,83))})),B=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,84))})),E=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,85))})),W=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,86))}));function q(){return Object(p.jsxs)(g.a,{children:[Object(p.jsx)(w,{}),Object(p.jsx)(h.d,{children:Object(p.jsxs)(a.Suspense,{fallback:Object(p.jsx)("p",{children:"Loading..."}),children:[Object(p.jsx)(R,{exact:!0,path:"/",children:Object(p.jsx)(z,{})}),Object(p.jsx)(R,{path:"/register",restricted:!0,children:Object(p.jsx)(B,{})}),Object(p.jsx)(R,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(p.jsx)(E,{})}),Object(p.jsx)(T,{path:"/contacts",redirectTo:"/login",children:Object(p.jsx)(W,{})}),Object(p.jsx)(h.a,{to:"/"})]})})]})}r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(u.a,{store:O,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(q,{})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.ad0dfcc8.chunk.js.map