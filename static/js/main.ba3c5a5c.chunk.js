(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/profile.08c573a2.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/homepage.2e8aa159.svg"},37:function(e,a,t){e.exports=t.p+"static/media/sign-in-page.a5c281ca.svg"},38:function(e,a,t){e.exports=t.p+"static/media/room-list-page.cabb5026.svg"},39:function(e,a,t){e.exports=t.p+"static/media/create-a-room.423c60bb.svg"},40:function(e,a,t){e.exports=t.p+"static/media/game-page.1d249e11.svg"},41:function(e,a,t){e.exports=t.p+"static/media/before-the-game.b3077889.svg"},42:function(e,a,t){e.exports=t.p+"static/media/during-the-game.ab531cbf.svg"},43:function(e,a,t){e.exports=t.p+"static/media/after-the-game.61645b73.svg"},47:function(e,a,t){e.exports=t(64)},57:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(25),s=t.n(c),i=t(10),r=t(9),m=t(66),l=t(26),h=t(27),u=t(46),g=t(29),d=t(45),p=t(65),f=t(17),b=t(34),E=t(30),v=t.n(E),k=t(19),y=[{name:"Home",to:"/"},{name:"Project"},{name:"\u3000\xb7 Tic-Tac-Toe",to:"/tictactoe",href:"https://github.com/jjyyoon/tic-tac-toe-online"}],w=[{icon:k.a,href:"https://github.com/jjyyoon"},{icon:k.b,href:"https://www.linkedin.com/in/jjyyoon/"}],j=(t(57),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).handleClick=function(e){var a=e.target.text;t.setState({active:a})},t.state={active:null},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname,a=y.find((function(a){return a.to===e}));this.setState({active:a.name})}},{key:"render",value:function(){var e=this,a=this.state.active,t={target:"_blank",rel:"noopener noreferrer"};return o.a.createElement(p.a,{className:"menu"},o.a.createElement("img",{width:"120",height:"120",src:v.a,alt:"profile"}),o.a.createElement("ul",{className:"links"},y.map((function(n,c){return o.a.createElement("li",{key:c},n.to?o.a.createElement(i.b,{to:n.to,onClick:e.handleClick,className:n.name===a?"active":null},n.name):n.name,n.href?o.a.createElement("a",Object.assign({href:n.href,className:"link-to-code"},t)," ","(See code ",o.a.createElement(f.a,{icon:b.a})," )"):null)}))),o.a.createElement("div",{className:"icon-container"},w.map((function(e,a){return o.a.createElement("a",Object.assign({key:a,href:e.href},t),o.a.createElement(f.a,{icon:e.icon}))}))))}}]),a}(o.a.Component)),N=Object(r.f)(j),x=t(67),T=(t(60),function(e){var a=e.slides,t=Object.keys(a);return o.a.createElement(x.a,{indicators:!1,interval:null,className:"main-item"},t.map((function(e,t){var n=a[e],c=n.img,s=n.heading,i=n.captions;return o.a.createElement(x.a.Item,{key:t},c,o.a.createElement(x.a.Caption,null,o.a.createElement("h5",null,s),i.map((function(e,a){return o.a.createElement("li",{key:a},e)}))))})))}),P=(t(61),function(){return o.a.createElement("div",{className:"main-item intro"},o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",null,"Check my projects!")))}),G=t(36),O=t.n(G),A=t(37),S=t.n(A),C=t(38),I=t.n(C),R=t(39),L=t.n(R),U=t(40),B=t.n(U),F=t(41),D=t.n(F),H=t(42),J=t.n(H),Q=t(43),W=t.n(Q),z={homepage:{img:o.a.createElement("img",{src:O.a,className:"d-block",alt:"Homepage"}),heading:"Homepage",captions:["React and Python are used for front-end and back-end development respectively."]},signInPage:{img:o.a.createElement("img",{src:S.a,className:"d-block",alt:"Sign In Page"}),heading:"Sign In Page",captions:["User authentication is implemented with Flask-JWT-Extended.","The database that manages data related to users, rooms and games is set up by using Flask-SQLAlchemy and PostgreSQL."]},roomListPage:{img:o.a.createElement("img",{src:I.a,className:"d-block",alt:"Room List Page"}),heading:"Room List Page",captions:["Users can join any room as long as the room is not full or it doesn\u2019t have a password that users don\u2019t know.","Users can have a chat with other users."]},createARoom:{img:o.a.createElement("img",{src:L.a,className:"d-block",alt:"Create A Room"}),heading:"Create A Room",captions:["Users can choose the grid size (the number of rows and columns) and also set a password.","A room can be deleted only by a person who created the room."]},gamePage:{img:o.a.createElement("img",{src:B.a,className:"d-block",alt:"Game Page"}),heading:"Game Page",captions:["A user should wait for the other user to join."]},beforeTheGame:{img:o.a.createElement("img",{src:D.a,className:"d-block",alt:"Before The Game"}),heading:"Before The Game",captions:["As soon as the room has the second user, \u2018start the game\u2019 button is activated.","Users can have a chat with the other user who is in the same room, but not with other users who are in other rooms, and it is supported by Flask-SocketIO."]},duringTheGame:{img:o.a.createElement("img",{src:J.a,className:"d-block",alt:"During The Game"}),heading:"During The Game",captions:["Flask-SocketIO also allows users to receive real-time information about the game."]},afterTheGame:{img:o.a.createElement("img",{src:W.a,className:"d-block",alt:"Before The Game"}),heading:"After The Gmae",captions:["When two users close the alert box that shows the result, they can start the game again."]}};t(62);var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null,o.a.createElement(N,null),o.a.createElement(p.a,{className:"main"},o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",component:P}),o.a.createElement(r.a,{exact:!0,path:"/tictactoe"},o.a.createElement(T,{slides:z}))))))};t(63);s.a.render(o.a.createElement(i.a,null,o.a.createElement(M,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ba3c5a5c.chunk.js.map