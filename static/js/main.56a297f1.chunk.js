(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(3),s=a(9),c=a(6),o=a(1),l=(a(14),a(8)),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsx)("a",{className:"UserInfo",href:"mailto: ".concat(t.email),children:t.name})})},j=function(e){var t=e.todo;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.prepared;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],p=f.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),O=Object(s.a)(f).sort((function(e,t){return t.id-e.id}))[0].id,x=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),c=s[0],l=s[1],d=Object(o.useState)(!1),m=Object(r.a)(d,2),j=m[0],f=m[1],x=Object(o.useState)(!1),v=Object(r.a)(x,2),y=v[0],N=v[1],S=function(e){var t=e.target,a=t.name,i=t.value;"title"===a?n(i):l(i)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!a||!c)return a||N(!0),void(c||f(!0));!function(e,t){var a={id:O+=1,title:e,completed:!1,userId:1,user:h.find((function(e){return e.name===t}))};p.push(a)}(a,c),n(""),l("")},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",value:a,placeholder:"Enter the title",onChange:S}),y&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{name:"user","data-cy":"userSelect",onChange:S,value:c,children:[Object(u.jsx)("option",{value:"",children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),j&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]}),Object(u.jsx)(b,{prepared:p})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.56a297f1.chunk.js.map