(this["webpackJsonpandroid-testing"]=this["webpackJsonpandroid-testing"]||[]).push([[0],{35:function(e,t,n){e.exports=n(49)},38:function(e,t,n){e.exports=n(50)},49:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(36);t.default=function(e){var t=a.d;return Object(a.e)(e,t(Object(a.a)(r.a)))}},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(6),u=n(7),l=n(10),s=n(9),p=n(8),d=function(e,t,n){return function(a){var r={screenReaderMessage:e};t&&(r.title=t),n&&(r.metaDescription=n),a({type:"SET_A11Y_CONTENT",payload:r})}},m=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route one")}},{key:"render",value:function(){return r.a.createElement("div",null,"route one")}}]),n}(a.Component),h=Object(p.b)(null,{setA11yContent:d})(m),v=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route two")}},{key:"render",value:function(){return r.a.createElement("div",null,"route two")}}]),n}(a.Component),b=Object(p.b)(null,{setA11yContent:d})(v),y=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route three")}},{key:"render",value:function(){return r.a.createElement("div",null,"route three")}}]),n}(a.Component),f=Object(p.b)(null,{setA11yContent:d})(y),O=n(14),j=n(18),E=n(26),g=n(30),w=n(27);function A(){var e=Object(E.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"]);return A=function(){return e},e}var k=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentA11yMessage:""},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.metaDescription,a=e.currentA11yMessage;return console.log("nav helper currentA11yMessage:",a),r.a.createElement(M,{role:"status","aria-live":"polite","aria-atomic":"true"},a?r.a.createElement("span",null,"Navigated to ",a):"",r.a.createElement(w.a,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:n})))}}]),n}(a.Component),C=Object(p.b)((function(e){var t=e.currentA11yMessage;return{currentA11yMessage:t.screenReaderMessage,title:t.title,metaDescription:t.metaDescription}}))(k),M=g.a.div(A()),D=n(4),x=function(){return r.a.createElement(O.b,{history:Object(D.a)()},r.a.createElement(j.a,{to:"/one"},"one"),r.a.createElement(j.a,{to:"/two"},"two"),r.a.createElement(j.a,{to:"/three"},"three"),r.a.createElement(C,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/one",component:h}),r.a.createElement(O.a,{exact:!0,path:"/two",component:b}),r.a.createElement(O.a,{exact:!0,path:"/three",component:f})))},N=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{height:"100px",width:"100px",background:"green"}}),r.a.createElement(x,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(13),_=n(37),R=Object(T.c)({currentA11yMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{screenReaderMessage:"",title:"Verizon Privacy Dashboard",metaDescription:"Know what you share with us. Download your information, delete what's not necessary for service, and access privacy controls all from your dashboard."},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_A11Y_CONTENT":return Object(_.a)({},e,{},a);default:return e}}}),S=n(35),B=n.n(S)()(R);c.a.render(r.a.createElement(p.a,{store:B},r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.0c21932a.chunk.js.map