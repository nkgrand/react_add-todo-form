(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(3),s=a(6),i=a(7),c=a(9),l=a(8),d=a(4),u=a(1),m=a.n(u),h=(a(14),a(15),a(0)),p=function(e){var t=e.user;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsxs)("li",{className:"list__item",children:["Name:"," ",Object(h.jsx)("span",{children:"".concat(t.name)})]}),Object(h.jsxs)("li",{className:"list__item",children:["Email:"," ",Object(h.jsx)("span",{children:"".concat(t.email)})]})]})})},b=(a(17),{color:"red",fontSize:"22px",fontWeight:900}),j={color:"green",fontSize:"22px",fontWeight:900},f=function(e){var t=e.todo,a=e.deleteTodo;return console.log(t),Object(h.jsxs)("div",{className:"todoBlock",children:[Object(h.jsx)("h3",{className:"todoBlock__title",children:t.title}),Object(h.jsxs)("p",{className:"todoBlock__status",children:["Status of todo:\xa0",Object(h.jsx)("span",{style:t.completed?j:b,children:t.completed?"Completed":"Still in progress"})]}),Object(h.jsx)("p",{className:"todoBlock__respPerson",children:"Mentor:"}),t.user&&Object(h.jsx)(p,{user:t.user}),Object(h.jsx)("button",{type:"button",className:"todoBlock__closeBtn",onClick:function(){return a(t.id)},children:"X"})]})},g=(a(18),function(e){var t=e.preparedTodos,a=e.deleteTodo;return Object(h.jsx)("div",{className:"todoContainer",children:t.map((function(e){return Object(h.jsx)("div",{className:"todoItem",children:Object(h.jsx)(f,{todo:e,deleteTodo:a})},e.id)}))})}),y=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],x=[{userId:1,id:1,title:"Learn HTML",completed:!0},{userId:2,id:2,title:"Learn CSS",completed:!0},{userId:3,id:3,title:"Learn JavaScript",completed:!0},{userId:4,id:4,title:"Learn React",completed:!1},{userId:5,id:5,title:"Learn TypeScript",completed:!1},{userId:6,id:6,title:"Learn Redux",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:y.find((function(t){return e.userId===t.id}))||null})})),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={user:"",title:"",todos:x,userError:!1,titleError:!1},e.addTodo=function(){if(e.state.user.length)if(e.state.title.length){var t=y.find((function(t){return t.name===e.state.user})),a={userId:null===t||void 0===t?void 0:t.id,id:function(){for(var t=0,a=0;a<e.state.todos.length;a+=1)t=Math.max(e.state.todos[a].id);return Number(t+1)}(),title:e.state.title,completed:!1,user:t||null};e.setState((function(e){return{todos:[].concat(Object(o.a)(e.todos),[a]),title:"",user:""}}))}else e.setState((function(e){return{titleError:!e.titleError}}));else e.setState((function(e){return{userError:!e.userError}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:Object(o.a)(e.todos).filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.userError,n=t.titleError;return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{className:"app__title",children:"List of Todos"}),Object(h.jsx)(g,{preparedTodos:this.state.todos,deleteTodo:this.deleteTodo}),Object(h.jsxs)("form",{className:"form",children:[Object(h.jsx)("h1",{className:"form__title",children:"Add todo form"}),Object(h.jsxs)("div",{className:"form__row",children:[Object(h.jsxs)("select",{className:"form__input form__input--textarea",value:this.state.user,onChange:function(t){e.setState((function(){return{user:t.target.value,userError:!1}}))},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Choose mentor"}),y.map((function(e){return Object(h.jsx)("option",{children:e.name},e.id)}))]}),a&&Object(h.jsx)("p",{className:"form__error",children:"Need to select mentor from list"})]}),Object(h.jsxs)("div",{className:"form__row",children:[Object(h.jsx)("input",{placeholder:"Title - max 50 chars",className:"form__input",maxLength:50,value:this.state.title,onChange:function(t){e.setState((function(){return{title:t.target.value,titleError:!1}}))}}),n&&Object(h.jsx)("p",{className:"form__error",children:"Need to type title"})]}),Object(h.jsx)("button",{className:"form__btn",type:"button",onClick:this.addTodo,children:"Add todo"})]})]})}}]),a}(m.a.Component),v=O;r.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f719e5ea.chunk.js.map