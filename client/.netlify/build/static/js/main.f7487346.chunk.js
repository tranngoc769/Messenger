(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,a){},109:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(54),l=t.n(r),s=t(5),m=t(15);t(67);function o(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),u=o[0],i=o[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"body"}),c.a.createElement("div",{className:"grad"}),c.a.createElement("div",{className:"header"},c.a.createElement("div",null,"Chat",c.a.createElement("span",null,"Room"))),c.a.createElement("br",null),c.a.createElement("div",{className:"login"},c.a.createElement("input",{placeholder:"Name",type:"text",onChange:function(e){return r(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("input",{placeholder:"Room",type:"text",onChange:function(e){return i(e.target.value)}}),c.a.createElement("br",null),c.a.createElement(m.b,{onClick:function(e){return t&&u?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(u)},c.a.createElement("input",{type:"button",value:"Join Room"}))))}var u,i=t(61),E=t(57),A=t.n(E),f=t(58),g=t.n(f),v=t(16),d=t.n(v),p=(t(109),function(e){var a=e.users,t=e.name;return c.a.createElement("div",{className:"textContainer"},a?c.a.createElement("div",null,c.a.createElement("h3",null,"Hi ,",t),c.a.createElement("h1",null,"\u0110ang Online"),c.a.createElement("div",{className:"activeContainer"},c.a.createElement("h2",null,a.map((function(e){var a=e.name;return c.a.createElement("div",{key:a,className:"activeItem"},c.a.createElement("img",{alt:"Online Icon",src:d.a}),a)}))))):null)}),b=t(59),h=t.n(b),N=(t(143),t(30)),O=t.n(N),j=function(e){var a=e.message,t=a.text,n=a.user,r=!1;return n===e.name&&(r=!0),r?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(t)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("p",{className:"sentText pr-10 "},n),c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(t))))},C=(t(144),function(e){var a=e.messages,t=e.name;return c.a.createElement(h.a,{className:"messages"},a.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(j,{message:e,name:t}))})))}),S=t(60),y=t.n(S),x=(t(145),function(e){var a=e.room;return c.a.createElement("div",{className:"infoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online icon"}),c.a.createElement("h1",null,a)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:y.a,alt:"close icon"}))))}),I=(t(146),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),M=(t(147),function(e){var a=e.location,t=Object(n.useState)(""),r=Object(s.a)(t,2),l=r[0],m=r[1],o=Object(n.useState)(""),E=Object(s.a)(o,2),f=E[0],v=E[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),h=b[0],N=b[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),S=j[0],y=j[1],M=Object(n.useState)([]),k=Object(s.a)(M,2),w=k[0],B=k[1],R="https://chatroomvn.herokuapp.com/";Object(n.useEffect)((function(){var e=A.a.parse(a.search),t=e.name,n=e.room;u=g()(R),v(n),m(t),u.emit("join",{name:t,room:n},(function(e){e&&alert(e)}))}),[R,a.search]),Object(n.useEffect)((function(){return u.on("message",(function(e){B([].concat(Object(i.a)(w),[e]))})),u.on("roomData",(function(e){var a=e.users;N(a)})),function(){u.emit("disconnect"),u.off()}}),[w]);return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"container"},c.a.createElement(x,{room:f}),c.a.createElement(C,{messages:w,name:l}),c.a.createElement(I,{message:S,setMessage:y,sendMessage:function(e){e.preventDefault(),S&&u.emit("sendMessage",S,(function(){return y("")}))}})),c.a.createElement(p,{users:h,name:l}))}),k=t(7),w=function(){return c.a.createElement(m.a,null,c.a.createElement(k.a,{path:"/",exact:!0,component:o}),c.a.createElement(k.a,{path:"/chat",exact:!0,component:M}))};l.a.render(c.a.createElement(w,null),document.querySelector("#root"))},16:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAPElEQVQYV2Ns+H+V7eXHm003j9eUMzAwMKhbtnSK86vXMWZ+WNcBEwRJwCQZnbZr/YcJINO4JXAahctyAMqZJh1AgqwTAAAAAElFTkSuQmCC"},60:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,a,t){e.exports=t(148)},67:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.f7487346.chunk.js.map