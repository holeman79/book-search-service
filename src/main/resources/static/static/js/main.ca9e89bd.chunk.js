(this["webpackJsonpbook-search-front"]=this["webpackJsonpbook-search-front"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){e.exports=n(95)},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"initializeLogin",(function(){return U})),n.d(a,"default",(function(){return z}));var r={};n.r(r),n.d(r,"getBookList",(function(){return se})),n.d(r,"changeInput",(function(){return ue})),n.d(r,"default",(function(){return de}));var o={};n.r(o),n.d(o,"user",(function(){return z})),n.d(o,"bookList",(function(){return de})),n.d(o,"pender",(function(){return P.penderReducer}));var c=n(0),i=n.n(c),l=n(17),s=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(5),m=n(10),d=n(43),g=n.n(d),p=n(1),b=n.n(p),f=n(21),v=n(22),h=n(24),E=n(23),k=n(25),y=n(44),O=n.n(y),j=n(56),I=n(45),L=n.n(I),N=b.a.bind(L.a),S=function(e){var t=e.children,n=Object(j.a)(e,["children"]);return i.a.createElement("div",n,t)},C=function(e){var t=e.children,n=e.to,a=e.onClick,r=e.disabled,o=e.theme,c=void 0===o?"default":o,l=n&&!r?u.b:S;return i.a.createElement(l,{to:n,className:N("button",c,{disabled:r}),onClick:r?function(){return null}:a},t)},T=b.a.bind(O.a),w=function(e){var t=e.logged,n=e.onLoginClick;return i.a.createElement("header",{className:T("header")},i.a.createElement("div",{className:T("header-content")},i.a.createElement("div",{className:T("left")},i.a.createElement(C,{theme:"outline",to:"/product/registration"},"History"),i.a.createElement(C,{theme:"outline",to:"/product/registration"},"Keyword Rank")),i.a.createElement("div",{className:T("brand")},i.a.createElement(u.b,{to:"/"},"Book Search Service")),i.a.createElement("div",{className:T("right")},i.a.createElement(C,{theme:"outline",onClick:n},t?"\ub85c\uadf8\uc544\uc6c3":"\ub85c\uadf8\uc778"),!t&&i.a.createElement(C,{theme:"outline",to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))},B=n(13),q=n(97),A=n(96),_=n(9),P=n(11),G=n.n(P),U=Object(q.a)("user/INITIALIZE_LOGIN"),x=Object(_.b)({login:Object(_.b)({userId:"",password:""}),signup:Object(_.b)({userId:"",name:"",password:""})}),z=Object(A.a)(Object(B.a)({},"user/INITIALIZE_LOGIN",(function(e,t){return e.set("login",x.get("login"))})),x),D=n(14),K=n(8),H=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleLoginClick=function(){var e=sessionStorage.logged,t=n.props,a=t.UserActions,r=t.history;if(e)try{sessionStorage.removeItem("id"),sessionStorage.removeItem("name"),sessionStorage.removeItem("imageUrl"),sessionStorage.removeItem("role"),sessionStorage.removeItem("accessToken"),sessionStorage.removeItem("tokenType"),sessionStorage.logged="",window.location.reload()}catch(o){console.log(o)}else r.push("/login"),a.initializeLogin()},n}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.handleLoginClick,t=sessionStorage.logged;return i.a.createElement(w,{logged:t,onLoginClick:e})}}]),t}(c.Component),J=Object(D.b)((function(e){return{}}),(function(e){return{UserActions:Object(K.b)(a,e)}}))(Object(m.f)(H)),R=n(48),W=n.n(R),Z=b.a.bind(W.a),F=function(){return i.a.createElement("footer",{className:Z("footer")},i.a.createElement(u.b,{to:"/",className:Z("brand")},"Book Search Service"))},Q=b.a.bind(g.a),$=function(e){var t=e.children;return i.a.createElement("div",{className:Q("page-template")},i.a.createElement(J,null),i.a.createElement("main",null,t),i.a.createElement(F,null))},M=n(49),V=n.n(M),X=b.a.bind(V.a),Y=function(e){var t=e.children,n=e.title;return i.a.createElement("div",{className:X("list-wrapper")},n&&i.a.createElement("div",{className:X("title")},n),t)},ee=n(50),te=n.n(ee),ne=b.a.bind(te.a),ae=function(e){var t=e.page,n=e.lastPage;return i.a.createElement("div",{className:ne("pagination")},i.a.createElement(C,{disabled:1===t,to:"/page/".concat(t-1)},"\uc774\uc804 \ud398\uc774\uc9c0"),i.a.createElement("div",{className:ne("number")},"\ud398\uc774\uc9c0 ",t),i.a.createElement(C,{disabled:t===n,to:"/page/".concat(t+1)},"\ub2e4\uc74c \ud398\uc774\uc9c0"))},re=n(51),oe=n(52),ce=n.n(oe),ie=n(53),le=n.n(ie),se=Object(q.a)("bookList/GET_BOOK_LIST",(function(e){var t=e.query,n=e.page;return ce.a.get("/api/books?".concat(le.a.stringify({query:t,page:n})))}),(function(e){return e})),ue=Object(q.a)("bookList/CHANGE_INPUT"),me=Object(_.b)({targetTypes:Object(_.a)(),books:Object(_.a)(),lastPage:null,query:"",target:null}),de=Object(A.a)(Object(re.a)({},Object(P.pender)({type:"bookList/GET_BOOK_LIST",onSuccess:function(e,t){var n=t.payload.data.content;return e.set("books",Object(_.c)(n)).set("lastPage",parseInt(null,10))}}),Object(B.a)({},"bookList/CHANGE_INPUT",(function(e,t){var n=t.payload,a=n.name,r=n.value;return e.set(a,r)}))),me),ge=n(54),pe=n.n(ge),be=n(29),fe=n.n(be),ve=b.a.bind(pe.a),he=function(e){var t=e.title,n=(e.body,e.publishedDate),a=e.id;return i.a.createElement("div",{className:ve("post-item")},i.a.createElement("h2",null,i.a.createElement(u.b,{to:"/post/".concat(a)},t)),i.a.createElement("div",{className:ve("date")},fe()(n).format("ll")))},Ee=function(e){var t=e.books,n="";return t.size>0&&(n=t.map((function(e){var t=e.toJS(),n=t.id,a=t.title,r=t.body,o=t.publishedDate,c=t.tags;return i.a.createElement(he,{title:a,body:r,publishedDate:o,tags:c,key:n,id:n})}))),i.a.createElement("div",{className:ve("post-list")},n)},ke=n(55),ye=n.n(ke),Oe=b.a.bind(ye.a),je=function(e){e.targetTypes;var t=e.query,n=e.onChangeInput,a=e.onSearchClick;return i.a.createElement("div",{className:Oe("search-bar")},i.a.createElement("select",{name:"target",className:Oe("target")},i.a.createElement("option",{value:"",selected:!0},"\uac80\uc0c9\uc870\uac74"),i.a.createElement("option",{value:""},"\uc81c\ubaa9"),i.a.createElement("option",{value:""},"ISBN"),i.a.createElement("option",{value:""},"\ucd9c\ud310\uc0ac"),i.a.createElement("option",{value:""},"\uc778\uba85")),i.a.createElement("input",{type:"text",name:"query",value:t,onChange:n}),i.a.createElement(C,{className:Oe("button"),onClick:a},"\uac80\uc0c9"))},Ie=n(33),Le=n.n(Ie),Ne={background:"#505050",text:"#fff"},Se=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).toast=Ie.notify.createShowQueue(),n.handleSearchClick=function(){var e=n.props,t=e.query,a=e.page,r=e.BookListActions;""!==t?r.getBookList({query:t,page:a}):n.toast("\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.","custom",2e3,Ne)},n.handleChangeInput=function(e){var t=n.props.BookListActions,a=e.target,r=a.value,o=a.name;t.changeInput({name:o,value:r})},n}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.page!==this.props.page&&(this.getBookList(),document.documentElement.scrollTop=0)}},{key:"render",value:function(){var e=this.handleChangeInput,t=this.handleSearchClick,n=this.props,a=n.loading,r=n.targetTypes,o=n.books,c=n.query,l=n.page,s=n.lastPage;return a?null:i.a.createElement("div",null,i.a.createElement(Le.a,null),i.a.createElement(je,{targetTypes:r,query:c,onChangeInput:e,onSearchClick:t}),i.a.createElement(Ee,{books:o}),o.size>0&&i.a.createElement(ae,{page:l,lastPage:s}))}}]),t}(c.Component),Ce=Object(D.b)((function(e){return{lastPage:e.bookList.get("lastPage"),books:e.bookList.get("books"),targetTypes:e.bookList.get("targetTypes"),query:e.bookList.get("query"),target:e.bookList.get("target"),loading:e.pender.pending["list/GET_BOOK_LIST"]}}),(function(e){return{BookListActions:Object(K.b)(r,e)}}))(Se),Te=function(e){var t=e.match.params.page,n=void 0===t?1:t;return i.a.createElement($,null,i.a.createElement(Y,null,i.a.createElement(Ce,{page:parseInt(n,10)})))},we=function(){return i.a.createElement("div",null,"NotFound")},Be=function(){return i.a.createElement("div",null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:Te}),i.a.createElement(m.a,{path:"/page/:page",component:Te}),i.a.createElement(m.a,{component:we})))},qe=Object(K.c)(o),Ae=[G()()],_e=K.d,Pe=function(e){return Object(K.e)(qe,e,_e(K.a.apply(void 0,Ae)))}(),Ge=function(){return i.a.createElement(D.a,{store:Pe},i.a.createElement(u.a,null,i.a.createElement(Be,null)))};n(94);s.a.render(i.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.ca9e89bd.chunk.js.map