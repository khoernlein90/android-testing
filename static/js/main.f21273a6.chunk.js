(this["webpackJsonpandroid-testing"]=this["webpackJsonpandroid-testing"]||[]).push([[0],{46:function(e,t,n){e.exports=n(82)},51:function(e,t,n){e.exports=n(84)},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(20),i=n(47);t.default=function(e){var t=a.c;return Object(a.d)(e,t(Object(a.a)(i.a)))}},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(28),r=n.n(o),l=n(35),c=n(36),s=n(49),d=n(41),p=n.n(d),m=n(42);n(74);var b=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),o=n[0],r=n[1];Object(a.useEffect)((function(){var t=document.querySelector("#".concat(e.id," .slick-track"));if(t){var n=t.querySelectorAll(".slick-slide");n&&(console.log(n),Object(c.a)(n).forEach((function(e){e.removeAttribute("tabindex"),e.removeAttribute("aria-hidden")})))}t&&t.children&&Object(c.a)(t.children).forEach((function(e,t){var n=e.querySelectorAll("div button, div a");n&&n.length&&n.forEach((function(t){e.classList.contains("slick-active")||e.classList.contains("slick-current")?(t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","false")):(t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"))}))}))}),[o]);var l={dots:!0,customPaging:function(e){return i.a.createElement("button",{style:{outline:0},"data-track":"slide item ".concat(e+1),"aria-label":"slide item ".concat(e+1," ").concat(o===e?"selected":"")})},afterChange:function(t){r(t),function(t){var n=document.querySelector("#".concat(e.id," .slick-track"));if(n&&n.children&&n.children[t]){var a=n.children[t];a&&a.focus()}}(t)},infinite:!1,speed:500,slidesToShow:2,slidesToScroll:1,accessibility:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:696,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]};return i.a.createElement("div",{id:e.id},i.a.createElement(p.a,Object.assign({},l,e.settings),e.children))};b=Object(m.withOrientationChange)(b);var u,g,y,h,v,C,x,f,w,A,k,O,E,T,I,j=n(7),D=n(3),z=function(){return Object(D.a)(u||(u=Object(j.a)(["\n    @media only screen and (max-width: ","px) {\n      ",";\n    }\n  "])),767.5,D.a.apply(void 0,arguments))},L=function(){return Object(D.a)(g||(g=Object(j.a)(["\n    @media only screen and (min-width: ","px) and (max-width: ","px) {\n      ",";\n    }\n  "])),768,1019.5,D.a.apply(void 0,arguments))},S=function(){return Object(D.a)(y||(y=Object(j.a)(["\n    @media only screen and (max-width: ","px) {\n      ",";\n    }\n  "])),1019.5,D.a.apply(void 0,arguments))},W=function(){return Object(D.a)(h||(h=Object(j.a)(["\n    @media only screen and (min-width: ","px) and (max-width: ","px) {\n      ",";\n    }\n  "])),1020,1271.5,D.a.apply(void 0,arguments))},N=(Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientWidth,window.innerWidth||0)>766&&Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientWidth,window.innerWidth||0),n(18)),U=n(16),q=n(50),P=["primitive","children"];function R(e){var t=e.primitive,n=e.children,a=Object(q.a)(e,P);return"span"===t?i.a.createElement("span",a,n):i.a.createElement("div",a,n)}function _(e){var t=e.primitive,n=e.size,a=e.color,o=e.id,r=e.tabIndex,l=e.children,c=e.style,s=e.className;return i.a.createElement(R,{primitive:t,className:s,style:Object(N.a)({display:"block"},c)},i.a.createElement(U.c,{primitive:t,size:n,color:a,id:o,tabIndex:r},l))}function B(e){var t=e.children,n=e.style,a=e.color,o=e.ariaLabelledBy,r=e.bold,l=e.id,c=e.primitive,s=e.size,d=e.tabIndex,p=e.className;return i.a.createElement(R,{primitive:c,className:p,style:Object(N.a)({display:"block"},n)},i.a.createElement(U.a,{color:a,ariaLabelledBy:o,bold:r,id:l,primitive:c,size:s,tabIndex:d},t))}function V(e){var t=e.children,n=e.style,a=e.color,o=e.ariaLabelledBy,r=e.bold,l=e.id,c=e.primitive,s=e.tabIndex;return i.a.createElement("span",{style:Object(N.a)({display:"block"},n)},i.a.createElement(U.b,{color:a,ariaLabelledBy:o,bold:r,id:l,primitive:c,tabIndex:s},t))}var F,M,J,H,G,$,Q,X,Y,Z,K,ee,te,ne,ae,ie,oe,re,le,ce=D.b.button(v||(v=Object(j.a)(["\n  margin: 1px 0 0 0;\n  padding: 0px;\n  position: relative;\n  text-align: left;\n  background: 0;\n  font-size: 0;\n  width: 100%;\n  cursor: pointer;\n  padding-bottom: 100%;\n  height: 0;\n\n  /* margin: 1px auto;\n  padding: 0px;\n  position: relative;\n  text-align: left;\n  background: 0;\n  font-size: 0;\n  display: block;\n  cursor: pointer;\n  padding-bottom: 100%;\n  height: 0;\n  width: 100%; */\n\n  ","\n"])),z(C||(C=Object(j.a)(["\n    padding: 0 8px;\n    height: auto;\n    /* width: auto; */\n\n    :focus {\n      z-index: 99999;\n      outline-offset: -1px;\n    }\n  "])))),se=D.b.div(x||(x=Object(j.a)(["\n  position: absolute;\n  bottom: 24px;\n  left: 24px;\n  right: 24px;\n  max-width: 85%;\n\n  ","\n\n  ","\n"])),L(f||(f=Object(j.a)(["\n    bottom: 20px;\n    left: 20px;\n    right: 20px;\n  "]))),z(w||(w=Object(j.a)(["\n    bottom: 16px;\n    left: 16px;\n    right: 16px;\n  "])))),de=(Object(D.b)(B)(A||(A=Object(j.a)(["\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  padding: 4px 14px;\n  border-radius: 20px;\n  border: 1px solid #000;\n\n  ","\n"])),z(k||(k=Object(j.a)(["\n    position: static;\n    padding: 4px 8px;\n    display: block;\n    margin: auto;\n    transform: initial;\n  "])))),D.b.span(O||(O=Object(j.a)(["\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  right: 24px;\n\n  ","\n"])),z(E||(E=Object(j.a)(["\n    top: 16px;\n    left: 16px;\n    right: 16px;\n  "]))))),pe=D.b.img(T||(T=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n\n  ","\n"])),z(I||(I=Object(j.a)(["\n    position: static;\n  "]))));function me(e){var t=e.tileContent,n=t.backgroundImageURLWeb,a=(t.backgroundImageURLAndroid,t.backgroundImageURLiOS,t.backgroundColor,t.borderColor),o=t.eyebrowCopy,r=t.eyebrowCopyColor,l=t.headlineCopy,c=t.headlineCopyColor,s=t.legalCopy,d=t.legalCopyColor,p=(t.primaryCTAType,t.primaryCTAColor,t.primaryCTALabelCopy,t.primaryCTAWebDestination),m=(t.pegaCards,t.retailPrice),b=t.adjustedPrice,u=t.dataTrack,g=e.isMobile;return i.a.createElement(ce,{onClick:function(){return window.location.href=p},"data-track":u,style:{border:"1px solid ".concat(a||"#d8dada")}},i.a.createElement(pe,{src:n,alt:""}),o&&i.a.createElement(de,null,g?i.a.createElement(V,{primitive:"span",color:r,bold:!0},o):i.a.createElement(B,{color:r,size:"large",bold:!0},o)),i.a.createElement(se,null,l&&i.a.createElement(_,{primitive:"p",size:g?"small":"medium",color:c,style:{marginBottom:s||b||m?"4px":"0"}},l),s&&i.a.createElement(V,{primitive:"span",color:d},s),b&&i.a.createElement(B,{primitive:"span",size:g?"small":"large",style:{display:"inline-block"}},b),m&&i.a.createElement(B,{primitive:"span",size:g?"small":"large",color:"#333333",style:{textDecoration:"line-through",display:"inline-block",marginLeft:"4px"}},m)))}var be=Object(D.a)(F||(F=Object(j.a)(["\n  /* border: 1px solid #d8dada; */\n  /* display: flex; */\n  /* flex-direction: column; */\n  text-decoration: none;\n  height: 334px;\n  position: relative;\n\n  ","\n"])),z(M||(M=Object(j.a)(["\n    height: 209px;\n  "])))),ue=D.b.button(J||(J=Object(j.a)(["\n  ",";\n  padding: 0;\n  border-radius: 0;\n  background: 0;\n  text-align: left;\n  width: 100%;\n  cursor: pointer;\n\n  ","\n"])),be,z(H||(H=Object(j.a)(["\n    /* padding: 16px; */\n\n  "])))),ge=D.b.div(G||(G=Object(j.a)(["\n  ",";\n"])),be),ye=Object(D.a)($||($=Object(j.a)(["\n  flex-direction: column;\n\n  button:first-of-type {\n    margin-bottom: 10px;\n  }\n"]))),he=D.b.div(Q||(Q=Object(j.a)(["\n  position: absolute;\n  bottom: 24px;\n  left: 24px;\n\n  ","\n"])),z(X||(X=Object(j.a)(["\n    bottom: 16px;\n    left: 16px;\n  "])))),ve=D.b.div(Y||(Y=Object(j.a)(["\n  position: absolute;\n  bottom: 24px;\n  left: 24px;\n  right: 24px;\n  \n  display: flex;\n  justify-content: space-between;\n\n  .iHaveADeviceButton span span {\n    border-bottom: 1px solid #000000;\n  }\n\n  .iHaveADeviceButton {\n    text-decoration: none;\n    background: 0;\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  ","\n\n  ","\n\n  ","\n"])),W(Z||(Z=Object(j.a)(["",""])),ye),S(K||(K=Object(j.a)(["",""])),ye),z(ee||(ee=Object(j.a)(["\n    position: static;\n\n    .iHaveADeviceButton {\n      position: absolute;\n      bottom: 16px;\n      left: 16px;\n    }\n\n    .shopNowButton {\n      position: absolute;\n      top: 50%;  \n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  "])))),Ce=D.b.div(te||(te=Object(j.a)(["\n  padding: 24px;\n  height: 100%;\n\n  ","\n"])),z(ne||(ne=Object(j.a)(["\n    padding: 16px;\n "])))),xe=D.b.div(ae||(ae=Object(j.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),fe=D.b.div(ie||(ie=Object(j.a)(["\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  right: 24px;\n\n  ","\n"])),z(oe||(oe=Object(j.a)(["\n    top: 16px;\n    left: 16px;\n    right: 16px;\n  "])))),we=D.b.img(re||(re=Object(j.a)(["\n  max-width: 146px;\n  max-height: 138px;\n  display: block;\n  margin: 24px auto;\n\n  ","\n"])),z(le||(le=Object(j.a)(["\n    max-height: 73px;\n    margin: 12px auto;\n  "])))),Ae=function(e){var t=[];return e&&(t=e.split("#")),t[1]?t[1]:""},ke=function(e){var t,n=e.borderColor,a=e.backgroundColor,o=e.viewport,r=(e.primaryCTAWebDestination,e.eyebrowCopy),l=e.eyebrowCopyColor,c=e.imageURL,s=e.headlineCopy,d=e.headlineCopyColor,p=e.subheadCopy,m=e.subheadCopyColor,b=e.primaryCTALabelCopy,u=(e.pegaCards,e.accessibilityText),g=e.defaultTile,y=e.dataTrack,h=r&&r.toLowerCase().includes("suspended");return i.a.createElement(ue,{onClick:function(){return null},"data-track":y,role:"link",style:{border:"1px solid ".concat(n||"#d8dada"),backgroundColor:a||"#ffffff"}},i.a.createElement(fe,null,"mobile"===o?i.a.createElement(U.b,{primitive:"span",color:l,bold:!0},r):i.a.createElement(B,{primitive:"span",color:l,size:"tablet"===o?"small":"large",bold:!0},r),c&&i.a.createElement("span",{style:{display:"block",margin:"0 auto"}},i.a.createElement(we,{src:"".concat(c,"?bgc=").concat(Ae(a)),style:{opacity:h?".5":"1"},alt:u}))),i.a.createElement(he,null,i.a.createElement(_,{color:h?"#747676":d,primitive:"span",size:function(e){return"tablet"===e?"XSmall":"mobile"===e?"small":"medium"}(o)},g?s:(t=s)&&t.length>12?"".concat(t.substring(0,12),"..."):t),!g&&i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{color:h?"#747676":m,primitive:"span",size:"desktop"===o?"large":"small",style:{marginTop:"4px"}},p),i.a.createElement("span",{style:{marginTop:"8px",display:"inline-block"}},i.a.createElement(B,{primitive:"span",size:"desktop"===o?"large":"small",style:{borderBottom:"1px solid #000"}},b)))))},Oe=n(48);function Ee(e){return i.a.createElement(Oe.a,e,e.buttonText||e.children)}var Te=function(e){var t=e.eyebrowCopy,n=(e.eyebrowCopyColor,e.backgroundColor),a=e.borderColor,o=(e.primaryCTAType,e.primaryCTALabelCopy),r=(e.primaryCTAColor,e.secondaryCTALabel),l=(e.secondaryCTAColor,e.primaryCTAWebDestination,e.secondaryCTAWebDestination,e.backgroundImageURLWeb),c=(e.pegaCards,e.viewport),s=e.dataTrack;return i.a.createElement(ge,{style:{background:"mobile"===c?n:"url(".concat(l,")"),backgroundPosition:"center",backgroundColor:n,border:"1px solid ".concat(a||"#d8dada")}},i.a.createElement(Ce,null,i.a.createElement(xe,{className:"container"},i.a.createElement("p",null,t),i.a.createElement(ve,null,i.a.createElement(Ee,{onClick:function(){return null},"data-track":JSON.stringify({type:"link",name:"".concat(s,"|").concat(o),format:"pega_card"}),size:"small",className:"shopNowButton",ariaLabel:"".concat(o," to ").concat(t),role:"link"},o),i.a.createElement("button",{onClick:function(){return null},"data-track":JSON.stringify({type:"link",name:"".concat(s,"|").concat(r),format:"pega_card"}),role:"link","aria-label":"".concat(r," to ").concat(t),className:"iHaveADeviceButton"},i.a.createElement(B,{primitive:"span",size:"desktop"===c?"large":"small",style:{display:"inline-block"}},r))))))};var Ie=function(){return i.a.createElement("div",{style:{background:"red"}},i.a.createElement("h1",{style:{marginBottom:"50px"}},"TESTING ACCESSIBILTY"),i.a.createElement(b,{id:"shopSectionList"},i.a.createElement(me,{tileContent:{pegaCards:{tileName:"",rank:"6",cardId:"PID122",propositionId:"LUO_29",soiEngagementId:"500004179",tacticLocation:"Account_Overview_Support",category:"AccountOverview",pegaSessionId:"5689597054098421117",cardWeight:"550",subStrategyId:"Verizon Visa Card Recruit $100 New Cardholder Offer",propositionName:"Verizon Visa Card Recruit $100 New Cardholder Offer",strategyId:"Verizon Visa Credit Card Recruit",templateId:"",dispositionListId:"10"},templateID:"ct_pod4",uniqueID:"PID122",language:"en",uniqueIDAndLocale:"PID122_LUO_29",headlineCopy:"Open a Verizon Visa\xae Card. Get more savings.",headlineCopyColor:"#FFFFFF",primaryCTAType:"button",primaryCTAWebDestination:"https://vzwqa1.verizonwireless.com/solutions-and-services/verizon-visa-card",primaryCTAAndroidAppDestination:"issacMarketLandingPage",primaryCTAiOSAppDestination:"issacMarketLandingPage",additionalParameters:['"requestFrom" : "UAD"'],backgroundColor:"#000000",borderColor:"#FFFFFF",accessibilityText:"Verizon Visa card offer.",primaryCTALabelCopy:"Learn more",primaryCTAColor:"inverted (black text on white)",backgroundImageURLAndroid:"https://ss7.vzw.com/is/image/VerizonWireless/vzw-uad-project-pid122-p3-verizon-card-recruit-m?&scl=2",backgroundImageURLiOS:"https://ss7.vzw.com/is/image/VerizonWireless/vzw-uad-project-pid122-p3-verizon-card-recruit-m?&scl=2",backgroundImageURLWeb:"https://ss7.vzw.com/is/image/VerizonWireless/vzw-uad-project-pid122-p3-verizon-card-recruit-d?&scl=2"},isMobile:!0}),i.a.createElement(ke,{pegaCards:{tileName:"Device Tile",rank:"8",cardId:"PID29",propositionId:"LUO_03",soiEngagementId:"",tacticLocation:"Account_Overview",category:"AccountOverview",pegaSessionId:"5689597054098421113",cardWeight:"900",subStrategyId:"",propositionName:"Manage account device",strategyId:"",templateId:"",dispositionListId:"10"},templateID:"ct_pod4",uniqueID:"PID29",language:"en",uniqueIDAndLocale:"PID29_LUO_03",headlineCopy:"900",headlineCopyColor:"#000000",primaryCTAType:"link",primaryCTAWebDestination:"https://vzwqa1.verizonwireless.com/ui/hub/secure/mydevices?flow=1D#/ManageDevice/CE1SxI4Rv3Pal16UOZfJrQ%3D%3D",primaryCTAAndroidAppDestination:"lineDetails",primaryCTAiOSAppDestination:"lineDetails",additionalParameters:['"requestFrom" : "UAD"'],backgroundColor:"#ffffff",borderColor:"#D8DADA",accessibilityText:"",eyebrowCopy:"Ready for upgrade",eyebrowCopyColor:"#000000",primaryCTALabelCopy:"Manage device",primaryCTAColor:"inverted- transparent (black text no color)",subheadCopy:"7859910295",subheadCopyColor:"#000000",imageURL:"https://ss7.vzw.com/is/image/VerizonWireless/apple-ipadmini-2019-spacegray"}),i.a.createElement(Te,{clickable:!1,pegaCards:{tileName:"AAL Tile",rank:"10",cardId:"PID141",propositionId:"LUO_02",soiEngagementId:"500004209",tacticLocation:"Account_Overview",category:"AccountOverview",pegaSessionId:"5689597054098421113",cardWeight:"1500000",subStrategyId:"Smartphone",propositionName:"Device Generic - AAL - Smartphone",strategyId:"AAL Card",templateId:"",dispositionListId:"10"},templateID:"ct_pod8",uniqueID:"PID141",language:"en",uniqueIDAndLocale:"PID141_LUO_02",headlineCopy:"Add a device - 1500000",headlineCopyColor:"#000000",primaryCTAType:"button",primaryCTAWebDestination:"https://vzwqa1.verizonwireless.com/sales/digital/gridwall.html?type=device&category=smartphones&flow=AAL",primaryCTAAndroidAppDestination:"https://vzwqa1.verizonwireless.com/sales/digital/gridwall.html?type=device&category=smartphones&flow=AAL",primaryCTAiOSAppDestination:"https://vzwqa1.verizonwireless.com/sales/digital/gridwall.html?type=device&category=smartphones&flow=AAL",additionalParameters:['"requestFrom" : "UAD"'],backgroundColor:"#D8DADA",borderColor:"#D8DADA",accessibilityText:"Add a device.",eyebrowCopy:"Add a device",eyebrowCopyColor:"#000000",primaryCTALabelCopy:"Shop now",primaryCTAColor:"primary (white text on black)",backgroundImageURLAndroid:"https://ss7.vzw.com/is/image/VerizonWireless/background-image-mobile?&scl=2",backgroundImageURLiOS:"https://ss7.vzw.com/is/image/VerizonWireless/background-image-mobile?&scl=2",backgroundImageURLWeb:"https://ss7.vzw.com/is/image/VerizonWireless/background-image-desktop?&scl=2",secondaryCTAType:"link",secondaryCTALabel:"Bring my own device",secondaryCTAColor:"inverted (black text on white)",secondaryCTAWebDestination:"https://vzwqa1.verizonwireless.com/sales/digital/byod.html",secondaryCTAAndroidAppDestination:"https://vzwqa1.verizonwireless.com/sales/digital/byod.html",secondaryCTAiOSAppDestination:"https://vzwqa1.verizonwireless.com/sales/digital/byod.html"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(20),De=Object(je.b)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}}),ze=n(46),Le=n.n(ze),Se=(n(83),Le()(De));r.a.render(i.a.createElement(l.a,{store:Se},i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.f21273a6.chunk.js.map