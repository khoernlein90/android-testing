(this["webpackJsonpandroid-testing"]=this["webpackJsonpandroid-testing"]||[]).push([[0],{32:function(e,t,n){e.exports=n(46)},35:function(e,t,n){e.exports=n(47)},46:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(33);t.default=function(e){var t=a.d;return Object(a.e)(e,t(Object(a.a)(r.a)))}},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=n(5),s=n(6),u=n(9),l=n(8),d=n(7),p=function(e,t,n){return function(a){var r={screenReaderMessage:e};t&&(r.title=t),n&&(r.metaDescription=n),a({type:"SET_A11Y_CONTENT",payload:r})}},h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.setA11yContent("route one")}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",null,"route one")}}]),n}(a.Component),m=Object(d.b)(null,{setA11yContent:p})(h),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route two")}},{key:"render",value:function(){return r.a.createElement("div",null,"route two")}}]),n}(a.Component),v=Object(d.b)(null,{setA11yContent:p})(y),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setA11yContent("route three")}},{key:"render",value:function(){return r.a.createElement("div",null,"route three")}}]),n}(a.Component),f=Object(d.b)(null,{setA11yContent:p})(b),g=n(13),O=n(17),j=n(26),E=n(27);function w(){var e=Object(j.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"]);return w=function(){return e},e}var A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentA11yMessage:""},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;e.currentA11yMessage!==this.props.currentA11yMessage&&setTimeout((function(){t.setState({currentA11yMessage:t.props.currentA11yMessage})}),50)}},{key:"render",value:function(){var e=this.state.currentA11yMessage;return e&&console.log("called it"),r.a.createElement(k,{role:"status","aria-live":"polite","aria-atomic":"true"},e?r.a.createElement("span",null,"Navigated to ",e):"")}}]),n}(a.Component),M=Object(d.b)((function(e){return{currentA11yMessage:e.currentA11yMessage.screenReaderMessage}}))(A),k=E.a.div(w()),x=n(3),C=function(){return r.a.createElement(g.b,{history:Object(x.a)()},r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/one"},"one"),r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/two"},"two"),r.a.createElement(O.a,{style:{margin:"0 15px"},to:"/android-testing/three"},"three"),r.a.createElement(M,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/android-testing/one",component:m}),r.a.createElement(g.a,{exact:!0,path:"/android-testing/two",component:v}),r.a.createElement(g.a,{exact:!0,path:"/android-testing/three",component:f})))},D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{height:"100px",width:"100px",background:"blue"}}),r.a.createElement(C,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(12),N=n(34),S=Object(T.c)({currentA11yMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{screenReaderMessage:"",title:"Verizon Privacy Dashboard",metaDescription:"Know what you share with us. Download your information, delete what's not necessary for service, and access privacy controls all from your dashboard."},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_A11Y_CONTENT":return Object(N.a)({},e,{},a);default:return e}}}),_=n(32),R=n.n(_)()(S);c.a.render(r.a.createElement(d.a,{store:R},r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.720d5cb8.chunk.js.map