(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(3),c=s.n(r),n=s(16),i=s.n(n),l=(s(25),s.p+"static/media/mathi.013d76aa.jpg"),j=(s(26),s(2)),o=s(8);var h=function(){return Object(a.jsxs)("section",{id:"intro",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{id:"card",children:[Object(a.jsx)("img",{src:l}),Object(a.jsx)("p",{children:"zoomer | full stack developper | future ninja"}),Object(a.jsxs)("ul",{className:"icons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://twitter.com/kitsutsukix",target:"_blank",rel:"noreferrer",className:"twitter",children:Object(a.jsx)(j.g,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/maathi",target:"_blank",rel:"noreferrer",className:"github",children:Object(a.jsx)(j.b,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"mailto:mahdi221b@gmail.com",target:"_blank",rel:"noreferrer",className:"mail",children:Object(a.jsx)(o.a,{})})})]})]})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Hey ",Object(a.jsx)("span",{id:"wave",children:"\ud83d\udc4b"}),", I'm mathi, a software developer."]}),Object(a.jsx)("p",{children:"I have a tremendous passion for solving real world problems through technology. I find great joy in creating software that has the potential to make people's lives somehow easier."})]})]})},d=s(7),b=s.n(d),u=s(14),O=s(9),x=s(17),m=s(12),p=s(11),f=(s(28),s(10)),g=s(6),v=s(15),w=s(5),k=s.n(w),y=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(O.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",subject:"",message:""},errors:{email:null,subject:null,message:null},sending:!1,status:null},e.schema={email:k.a.string().email().required(),subject:k.a.string().required(),message:k.a.string().min(24).required()},e.handleSubmit=function(t){t.preventDefault(),e.validateAll()||e.send()},e}return Object(x.a)(s,[{key:"componentDidMount",value:function(){this.visit()}},{key:"visit",value:function(){var e=Object(u.a)(b.a.mark((function e(){var t,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cloudflare.com/cdn-cgi/trace");case 2:return t=e.sent,e.next=5,t.text();case 5:return s=e.sent,e.next=8,fetch("https://facteur.herokuapp.com/visit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s})});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({sending:!0,status:null}),e.next=3,fetch("https://facteur.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.data)});case 3:t=e.sent,this.setState({sending:!1,status:t.status});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("section",{className:"contact",children:[Object(a.jsx)("h2",{children:"Contact"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:this.state.errors.email?"error":"",name:"email",placeholder:"Your email",value:this.state.data.email,onChange:this.handleChange,onBlur:this.validate}),Object(a.jsx)("input",{className:this.state.errors.subject?"error":"",name:"subject",placeholder:"subject",value:this.state.data.subject,onChange:this.handleChange,onBlur:this.validate}),Object(a.jsx)("textarea",{className:this.state.errors.message?"error":"",name:"message",placeholder:"What's on your mind ?",value:this.state.data.message,onChange:this.handleChange,onBlur:this.validate}),Object(a.jsx)("button",{className:this.state.sending||this.validateAll()?"disabled":"enabled",onClick:this.handleSubmit,disabled:this.validateAll(),children:this.state.sending?Object(a.jsx)(f.b,{}):Object(a.jsx)(j.d,{})})]}),Object(a.jsxs)("div",{className:"message",children:[Object(a.jsx)("p",{className:200===this.state.status?"sent":"hidden",children:"message sent successfully!"}),Object(a.jsx)("p",{className:this.state.status&&200!==this.state.status?"not-sent":"hidden",children:"couldn't send message!"})]})]})}}]),s}(function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(O.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(t){var s=t.target.name,a=Object(v.a)({},e.state.errors),r=k.a.validate(Object(g.a)({},s,e.state.data[s]),Object(g.a)({},s,e.schema[s])).error;a[s]=r?r.details[0].message:null,e.setState({errors:a})},e.validateAll=function(){return k.a.validate(e.state.data,e.schema).error},e.handleChange=function(t){var s=t.target.name,a=Object(v.a)({},e.state.data);a[s]=t.target.value,e.setState({data:a})},e}return s}(r.Component));s(29);var N=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsxs)("p",{className:"rights",children:["\xa9 All rights reserved. | Designed & developed with",Object(a.jsx)(f.a,{id:"heart"}),"by \xa0",Object(a.jsx)("span",{children:"mathi"})]}),Object(a.jsxs)("ul",{className:"icons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://twitter.com/kitsutsukix",target:"_blank",rel:"noreferrer",className:"twitter",children:Object(a.jsx)(j.g,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/maathi",target:"_blank",rel:"noreferrer",className:"github",children:Object(a.jsx)(j.b,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"mailto:mahdi221b@gmail.com",target:"_blank",rel:"noreferrer",className:"mail",children:Object(a.jsx)(o.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noreferrer",className:"youtube",children:Object(a.jsx)(j.h,{})})})]})]})},S=(s(30),s.p,s.p+"static/media/screenshot.48309ef1.png"),C=s.p+"static/media/screenshot2.29d333d0.png",A=s(19),_=s(4),B=s(18);function J(){return Object(a.jsx)(_.e,{style:{color:"#0064a5"},title:"Postgresql"})}function T(){return Object(a.jsx)(j.c,{style:{color:"#3c873a"},title:"Node Js"})}function q(){return Object(a.jsx)(_.b,{style:{color:"#e535ab"},title:"GraphQl"})}function I(){return Object(a.jsx)(j.f,{style:{color:"#61dbfb"},title:"React"})}function P(){return Object(a.jsx)(B.a,{style:{color:"#1aff00"},title:"api"})}function Q(){return Object(a.jsx)(_.d,{style:{color:"#dddddd"},title:"jwt"})}var D=function(){var e=[{title:"Artist",img:S,website:"https://a-r-t-i-s-t.herokuapp.com/",github:"artist",desc:"Artist allows users to create nice paintings and share them with the world. the app is fully responsive and the design is built using pure CSS.",tools:[Object(a.jsx)(J,{}),Object(a.jsx)(T,{}),Object(a.jsx)(q,{}),Object(a.jsx)(Q,{}),Object(a.jsx)(I,{})]},{title:"Br Ba cast",img:C,website:"https://heisenberg-and-friends.herokuapp.com",github:"brba",desc:"A very simple React app with hooks for displaying cast members from the Breaking Bad Tv show, the app consumes api from breakingbadapi.com and displays the results.",tools:[Object(a.jsx)(I,{}),Object(a.jsx)(P,{})]}];return Object(a.jsxs)("section",{id:"projects",children:[Object(a.jsx)("h2",{children:"Small projects i've been working on lately"}),Object(a.jsx)("div",{className:"prjs",children:e.map((function(e){var t;return Object(a.jsxs)("div",{className:"prj",children:[Object(a.jsx)("div",{id:"wrapper",children:Object(a.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:e.img,alt:"Avatar"})})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("p",{children:e.desc}),Object(a.jsx)("ul",{className:"tools",children:null===(t=e.tools)||void 0===t?void 0:t.map((function(e){return e}))}),Object(a.jsxs)("ul",{className:"links",children:[Object(a.jsx)("a",{href:"https://github.com/maathi/"+e.github,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(A.a,{})}),Object(a.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(j.a,{})})]})]})]},e.title)}))})]})};s(31);var H=function(){return Object(a.jsxs)("section",{id:"techs",children:[Object(a.jsx)("h2",{children:"Skills & Tools"}),Object(a.jsxs)("div",{className:"logos",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(_.e,{}),Object(a.jsx)("p",{children:"Postgresql"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.c,{}),Object(a.jsx)("p",{children:"Node Js"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(_.b,{}),Object(a.jsx)("p",{children:"GraphQl"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.f,{}),Object(a.jsx)("p",{children:"React Js"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(_.c,{}),Object(a.jsx)("p",{children:"HTML 5"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(_.a,{}),Object(a.jsx)("p",{children:"CSS 3"})]})]})]})};s(32);var M=function(){return Object(a.jsxs)("div",{id:"quote",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:Object(a.jsx)(j.e,{})}),"\xa0 Education never ends, Watson. It is a series of lessons, with the greatest for the last."]}),Object(a.jsx)("span",{id:"author",children:"Sherlock Holmes"})]})};var R=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{}),Object(a.jsxs)("div",{className:"main-content",children:[Object(a.jsx)(h,{}),Object(a.jsx)(H,{}),Object(a.jsx)(D,{}),Object(a.jsx)(y,{})]}),Object(a.jsx)(N,{})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a199b5bf.chunk.js.map