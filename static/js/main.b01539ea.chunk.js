(this["webpackJsonpandroid-testing"]=this["webpackJsonpandroid-testing"]||[]).push([[0],{35:function(e,t,n){e.exports=n(49)},38:function(e,t,n){e.exports=n(50)},49:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(36);t.default=function(e){var t=a.d;return Object(a.e)(e,t(Object(a.a)(r.a)))}},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(6),s=n(7),u=n(10),l=n(9),p=n(8),d=function(e,t,n){return function(a){var r={screenReaderMessage:e};t&&(r.title=t),n&&(r.metaDescription=n),a({type:"SET_A11Y_CONTENT",payload:r})}},m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.setA11yContent("route one")}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",null,"route one")}}]),n}(a.Component),h=Object(p.b)(null,{setA11yContent:d})(m),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route two")}},{key:"render",value:function(){return r.a.createElement("div",null,"route two")}}]),n}(a.Component),v=Object(p.b)(null,{setA11yContent:d})(y),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route three")}},{key:"render",value:function(){return r.a.createElement("div",null,"route three")}}]),n}(a.Component),b=Object(p.b)(null,{setA11yContent:d})(f),g=n(14),O=n(18),j=n(26),E=n(30),w=n(27);function A(){var e=Object(j.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"]);return A=function(){return e},e}var M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentA11yMessage:""},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.currentA11yMessage!==this.props.currentA11yMessage&&(setTimeout((function(){n.setState({currentA11yMessage:n.props.currentA11yMessage})}),50),setTimeout((function(){n.setState({currentA11yMessage:""})}),100))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.metaDescription,a=this.state.currentA11yMessage;return r.a.createElement(x,{role:"status","aria-live":"polite","aria-atomic":"true"},a?r.a.createElement("span",null,"Navigated to ",a):"",r.a.createElement(w.a,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:n})))}}]),n}(a.Component),k=Object(p.b)((function(e){var t=e.currentA11yMessage;return{currentA11yMessage:t.screenReaderMessage,title:t.title,metaDescription:t.metaDescription}}))(M),x=E.a.div(A()),C=n(4),D=function(){return r.a.createElement(g.b,{history:Object(C.a)()},r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/one"},"one"),r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/two"},"two"),r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/three"},"three"),r.a.createElement(k,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/android-testing/one",component:h}),r.a.createElement(g.a,{exact:!0,path:"/android-testing/two",component:v}),r.a.createElement(g.a,{exact:!0,path:"/android-testing/three",component:b})))},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{height:"100px",width:"100px",background:"red"}}),r.a.createElement(D,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(13),S=n(37),_=Object(N.c)({currentA11yMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{screenReaderMessage:"",title:"Verizon Privacy Dashboard",metaDescription:"Know what you share with us. Download your information, delete what's not necessary for service, and access privacy controls all from your dashboard."},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_A11Y_CONTENT":return Object(S.a)({},e,{},a);default:return e}}}),R=n(35),B=n.n(R)()(_);c.a.render(r.a.createElement(p.a,{store:B},r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b01539ea.chunk.js.map