(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{198:function(e,a,t){e.exports=t.p+"static/media/profile.08c573a2.jpg"},203:function(e,a,t){e.exports=t.p+"static/media/homepage.2e8aa159.svg"},204:function(e,a,t){e.exports=t.p+"static/media/sign-in-page.a5c281ca.svg"},205:function(e,a,t){e.exports=t.p+"static/media/room-list-page.cabb5026.svg"},206:function(e,a,t){e.exports=t.p+"static/media/create-a-room.423c60bb.svg"},207:function(e,a,t){e.exports=t.p+"static/media/game-page.1d249e11.svg"},208:function(e,a,t){e.exports=t.p+"static/media/before-the-game.b3077889.svg"},209:function(e,a,t){e.exports=t.p+"static/media/during-the-game.ab531cbf.svg"},213:function(e,a,t){e.exports=t(429)},422:function(e,a,t){},425:function(e,a,t){},426:function(e,a,t){},427:function(e,a,t){},428:function(e,a,t){},429:function(e,a,t){"use strict";t.r(a);t(214),t(223);var n=t(0),o=t.n(n),c=t(192),i=t.n(c),s=t(72),r=t(49),m=t(431),l=t(193),h=t(194),u=t(212),g=t(196),d=t(211),p=t(430),f=t(197),b=t(198),v=t.n(b),E=t(124),k=[{name:"Home",to:"/",active:"active"},{name:"Project"},{name:"\u3000\xb7 Tic-Tac-Toe",to:"/tictactoe",active:"inactive"}],w=[{icon:E.a,href:"https://github.com/jjyyoon"},{icon:E.b,href:"https://www.linkedin.com/in/jjyyoon/"}],y=(t(422),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).handleClick=function(e){var a=e.target.text;t.setState({active:a})},t.state={active:"Home"},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this,a=this.state.active;return o.a.createElement(p.a,{className:"menu"},o.a.createElement("img",{width:"120",height:"120",src:v.a,alt:"profile"}),o.a.createElement("ul",{className:"links"},k.map((function(t,n){return o.a.createElement("li",{key:n},t.to?o.a.createElement(s.b,{to:t.to,onClick:e.handleClick,className:t.name===a?"active":"inactive"},t.name):t.name)}))),o.a.createElement("div",{className:"icon-container"},w.map((function(e,a){return o.a.createElement("a",{key:a,href:e.href,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(f.a,{icon:e.icon}))}))))}}]),a}(o.a.Component)),N=t(432),j=(t(425),function(e){var a=e.slides,t=Object.keys(a);return o.a.createElement(N.a,{indicators:!1,interval:null,className:"main-item"},t.map((function(e,t){var n=a[e],c=n.img,i=n.heading,s=n.captions;return o.a.createElement(N.a.Item,{key:t},c,o.a.createElement(N.a.Caption,null,o.a.createElement("h5",null,i),s.map((function(e,a){return o.a.createElement("li",{key:a},e)}))))})))}),x=(t(426),function(){return o.a.createElement("div",{className:"main-item intro"},o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",null,"Check my projects!")))}),P=t(203),T=t.n(P),A=t(204),C=t.n(A),G=t(205),O=t.n(G),I=t(206),S=t.n(I),R=t(207),L=t.n(R),U=t(208),F=t.n(U),H=t(209),B=t.n(H),J={homepage:{img:o.a.createElement("img",{src:T.a,className:"d-block",alt:"Homepage"}),heading:"Homepage",captions:["React and Python are used for front-end and back-end development respectively."]},signInPage:{img:o.a.createElement("img",{src:C.a,className:"d-block",alt:"Sign In Page"}),heading:"Sign In Page",captions:["User authentication is implemented with Flask-JWT-Extended.","The database that manages data related to users, rooms and games is set up by using Flask-SQLAlchemy and PostgreSQL."]},roomListPage:{img:o.a.createElement("img",{src:O.a,className:"d-block",alt:"Room List Page"}),heading:"Room List Page",captions:["Users can join any room as long as the room is not full or it doesn\u2019t have a password that users don\u2019t know.","Users can have a chat with other users."]},createARoom:{img:o.a.createElement("img",{src:S.a,className:"d-block",alt:"Create A Room"}),heading:"Create A Room",captions:["Users can choose the grid size (the number of rows and columns) and also set a password.","A room can be deleted only by a person who created the room."]},gamePage:{img:o.a.createElement("img",{src:L.a,className:"d-block",alt:"Game Page"}),heading:"Game Page",captions:["A user should wait for the other user to join."]},beforeTheGame:{img:o.a.createElement("img",{src:F.a,className:"d-block",alt:"Before The Game"}),heading:"Before The Game",captions:["As soon as the room has the second user, \u2018start the game\u2019 button is activated.","Users can have a chat with the other user who is in the same room, but not with other users who are in other rooms, and it is supported by Flask-SocketIO."]},duringTheGame:{img:o.a.createElement("img",{src:B.a,className:"d-block",alt:"During The Game"}),heading:"During The Game",captions:["Flask-SocketIO also allows users to receive real-time information about the game."]}};t(427);var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null,o.a.createElement(y,null),o.a.createElement(p.a,{className:"main"},o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",component:x}),o.a.createElement(r.a,{exact:!0,path:"/tictactoe"},o.a.createElement(j,{slides:J}))))))};t(428);i.a.render(o.a.createElement(s.a,null,o.a.createElement(D,null)),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.c630b086.chunk.js.map