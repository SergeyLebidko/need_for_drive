(this.webpackJsonpneed_for_drive=this.webpackJsonpneed_for_drive||[]).push([[0],{29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,i,a=n(0),l=n(12),c=n.n(l),o=n(23),s=n(4),u=n(15),d=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t){var n=e.title,l=e.titleId,c=b(e,d);return a.createElement("svg",f({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},c),n?a.createElement("title",{id:l},n):null,r||(r=a.createElement("path",{d:"M4 8 H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=a.createElement("path",{d:"M4 24 H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var h,j=a.forwardRef(p),v=(n.p,["title","titleId"]);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function m(e,t){var n=e.title,r=e.titleId,i=g(e,v);return a.createElement("svg",O({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,h||(h=a.createElement("path",{d:"M4 16 H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var C=a.forwardRef(m),y=(n.p,n(29),n(1));var w=function(e){var t=e.hasOpened,n=e.handleClick,r="menu_button"+(t?" menu_button_opened":"");return Object(y.jsxs)("div",{className:r,onClick:n,children:[Object(y.jsx)(j,{}),Object(y.jsx)(C,{}),Object(y.jsx)(C,{})]})},x=n(3);var _,k=function(e){switch(e){case"Title":return function(e){return{lang:e.lang,city:e.city}};case"App":case"MainPage":case"LangSelector":case"MenuItemsBlock":return function(e){return{lang:e.lang}};case"Slider":return function(e){return{sliderData:e.sliderData}};default:return null}},E=n(19),I=n.n(E),N=n(22),S="set_lang",P="define_city",M="set_slide_data",L="lang_key",R="ru",B="en",T=(_={},Object(x.a)(_,R,B),Object(x.a)(_,B,R),_);function D(e){return{type:S,lang:e}}var Z=function(e){switch(e){case"App":return function(e){return{setLang:function(t){return e(D(t))},defineCity:function(t){return e(function(e){return function(){var t=Object(N.a)(I.a.mark((function t(n){var r,i,a,l,c,o;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},Object(x.a)(r,R,"ru"),Object(x.a)(r,B,"en"),i=r,a="".concat("https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address","?").concat(new URLSearchParams({language:i[e]}).toString()),l={method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token b322506c01afde93ab2d13340a578f4e55814d53"}},t.prev=3,t.next=6,fetch(a,l);case 6:return c=t.sent,t.next=9,c.json();case 9:if(!(o=t.sent).location){t.next=13;break}return n((s=o.location.data.city,{type:P,city:s})),t.abrupt("return");case 13:console.error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434. \u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u0440\u043d\u0443\u043b \u043f\u0443\u0441\u0442\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u043b\u0438\u0431\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0433\u043e\u0440\u043e\u0434\u0430: ",t.t0.message);case 19:case"end":return t.stop()}var s}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}};case"MainPage":return function(e){return{setSliderData:function(t){return e(function(e){return{type:M,sliderData:e}}(t))}}};case"LangSelector":return function(e){return{setLang:function(t){return e(D(t))}}};default:return null}},H=n(14);function W(e){var t=k(e),n=Z(e);return Object(H.b)(t,n)}n(35);var V,A=W("LangSelector")((function(e){var t=e.lang,n=e.setLang;return Object(y.jsx)("button",{className:"lang_selector",onClick:function(){var e=T[t];n(T[t]),localStorage.setItem(L,e)},children:function(e){var t;return(t={},Object(x.a)(t,R,"\u0420\u0443\u0441"),Object(x.a)(t,B,"Eng"),t)[T[e]]}(t)})})),F=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function X(e,t){var n=e.title,r=e.titleId,i=J(e,F);return a.createElement("svg",G({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,V||(V=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})))}var z,U=a.forwardRef(X),Y=(n.p,["title","titleId"]);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Q(e,t){var n=e.title,r=e.titleId,i=K(e,Y);return a.createElement("svg",q({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,z||(z=a.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})))}var $,ee,te,ne=a.forwardRef(Q),re=(n.p,["title","titleId"]);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function le(e,t){var n=e.title,r=e.titleId,i=ae(e,re);return a.createElement("svg",ie({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,$||($=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"})),ee||(ee=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2352 9.00445C15.3839 9.00422 15.5438 9.00429 15.7163 9.00437L16.0008 9.00445C18.2792 9.00445 18.5492 9.01263 19.449 9.05352C20.281 9.09156 20.7325 9.23059 21.0333 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3126 10.2843 22.4975 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9464 12.551C22.9873 13.4505 22.9962 13.7208 22.9962 15.9981C22.9962 18.2755 22.9873 18.5457 22.9464 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3126 21.7111 22.014 22.0096C21.7153 22.3082 21.4317 22.4931 21.0333 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4521 22.9827 12.5525 22.9418C11.7205 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2853 22.3081 9.98665 22.0094C9.68798 21.7107 9.50309 21.427 9.34806 21.0286C9.23126 20.7281 9.09206 20.2766 9.05419 19.4446C9.0133 18.545 9.00513 18.2748 9.00513 15.996C9.00513 13.7172 9.0133 13.4484 9.05419 12.5488C9.09224 11.7168 9.23126 11.2653 9.34806 10.9645C9.50273 10.5662 9.68798 10.2818 9.98665 9.98313C10.2853 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7205 9.08854 12.5525 9.05032C13.3397 9.01476 13.6448 9.0041 15.2352 9.00232V9.00445ZM20.5558 10.4213C19.9905 10.4213 19.5318 10.8795 19.5318 11.445C19.5318 12.0103 19.9905 12.469 20.5558 12.469C21.1212 12.469 21.5798 12.0103 21.5798 11.445C21.5798 10.8797 21.1212 10.421 20.5558 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5805 11.6179 16.0006 11.6178C18.4207 11.6178 20.3823 13.58 20.3823 16.0001C20.3823 18.4202 18.4209 20.3815 16.0008 20.3815C13.5806 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"})),te||(te=a.createElement("path",{d:"M16.0007 13.1556C17.5716 13.1556 18.8452 14.4291 18.8452 16.0001C18.8452 17.571 17.5716 18.8446 16.0007 18.8446C14.4297 18.8446 13.1562 17.571 13.1562 16.0001C13.1562 14.4291 14.4297 13.1556 16.0007 13.1556Z",fill:"white"})))}var ce,oe,se,ue=a.forwardRef(le),de=(n.p,{MenuItemsBlock:(ce={},Object(x.a)(ce,R,{menuItems:["\u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0430","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430","\u0411\u0435\u043d\u0437\u0438\u043d","\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"]}),Object(x.a)(ce,B,{menuItems:["Parking","Insurance","Petrol","Service"]}),ce),Title:(oe={},Object(x.a)(oe,R,{serviceName:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433",slogan:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430",reservationButton:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(x.a)(oe,B,{serviceName:"Carsharing",slogan:"Per-minute car rental in your city",reservationButton:"Reservation"}),oe),Slider:(se={},Object(x.a)(se,R,{slidersText:[{title:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",description:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445, \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414."},{title:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",description:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"},{title:"\u0411\u0435\u043d\u0437\u0438\u043d",description:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0435\u0442"},{title:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",description:"\u041d\u0430\u0448\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e"}],slideButtonText:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(x.a)(se,B,{slidersText:[{title:"Free parking",description:"Leave your car in paid city parking lots, airports and permitted places without breaking traffic rules"},{title:"Insurance",description:"Full car insurance"},{title:"Gasoline",description:"A full tank at any gas station in the city at our expense"},{title:"Service",description:"Our vehicles are serviced weekly"}],slideButtonText:"More details"}),se)});n(36);var fe=W("MenuItemsBlock")((function(e){var t=e.hasOpened,n=e.lang,r=de.MenuItemsBlock[n].menuItems,i="menu_items_block"+(t?" menu_items_block_visible":"");return Object(y.jsxs)("div",{className:i,children:[Object(y.jsxs)("nav",{className:"menu_items_block__navigation",children:[r.map((function(e){return Object(y.jsx)("span",{className:"menu_items_block__item",children:e},e)})),Object(y.jsxs)("span",{className:"menu_items_block__icons_item",children:[Object(y.jsx)(U,{}),Object(y.jsx)(ne,{}),Object(y.jsx)(ue,{})]},"icons")]}),Object(y.jsx)(A,{})]})}));n(37);var be,pe,he=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=document.body;e.style.overflow=n?"hidden":"auto"}),[n]),Object(y.jsxs)("section",{className:"menu",children:[Object(y.jsx)(w,{hasOpened:n,handleClick:function(){return r((function(e){return!e}))}}),Object(y.jsx)("h1",{className:"menu__title",children:"Need for drive"}),Object(y.jsx)(fe,{hasOpened:n}),Object(y.jsx)(A,{})]})},je=["title","titleId"];function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ge(e,t){var n=e.title,r=e.titleId,i=Oe(e,je);return a.createElement("svg",ve({width:17,height:21,viewBox:"0 0 17 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,be||(be=a.createElement("path",{d:"M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z",stroke:"#999999",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),pe||(pe=a.createElement("path",{d:"M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z",stroke:"#999999",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var me=a.forwardRef(ge);n.p,n(38);var Ce=W("Title")((function(e){var t=e.lang,n=e.city,r=de.Title[t],i=r.serviceName,a=r.slogan,l=r.reservationButton,c=(new Date).getFullYear();return Object(y.jsxs)("section",{className:"title",children:[Object(y.jsxs)("header",{className:"title__header",children:[Object(y.jsx)("span",{className:"title__small_service_title",children:"Need for drive"}),n&&Object(y.jsxs)("span",{className:"title__city",children:[Object(y.jsx)(me,{}),n]})]}),Object(y.jsxs)("main",{className:"title__main",children:[Object(y.jsx)("h1",{className:"title__service_name",children:i}),Object(y.jsx)("h1",{className:"title__big_service_title",children:"Need for drive"}),Object(y.jsx)("h3",{className:"title__slogan",children:a}),Object(y.jsx)("button",{className:"button button_main_accent title__reservation_button",children:l})]}),Object(y.jsxs)("footer",{className:"title__footer",children:[Object(y.jsxs)("span",{className:"title__copyright",children:["\xa9 2016-",c,' "Need for drive"']}),Object(y.jsx)("a",{href:"tel:84952342244",className:"title__phone",children:"8(495)234-22-44"})]})]})})),ye=n(9);n(39);var we=function(e){var t,n=e.slideData,r=n.title,i=n.description,a=n.image,l=n.buttonColor,c=n.buttonText,o=n.position,s=(t={},Object(x.a)(t,"ps","slide prev_slide"),Object(x.a)(t,"cs","slide"),Object(x.a)(t,"ns","slide next_slide"),t)[o],u="button slide__button button_".concat(l," button_small_round_border"),d={backgroundImage:'linear-gradient(to bottom, transparent 50%, black 100%), url("'.concat(a,'")')};return Object(y.jsx)("div",{className:s,style:d,children:Object(y.jsxs)("div",{className:"slide__text_block",children:[Object(y.jsx)("h1",{className:"slide__title",children:r}),Object(y.jsx)("h3",{className:"slide__description",children:i}),Object(y.jsx)("button",{className:u,children:c})]})})};n(40);var xe,_e,ke,Ee=function(e){for(var t,n=e.dotsCount,r=e.currentIndex,i=e.handleClick,a=[],l=function(e){t=e===r?"dots_block__dot full_dot":"dots_block__dot empty_dot",a.push(Object(y.jsx)("div",{className:t,onClick:function(){return i(e)}},e))},c=0;c<n;c++)l(c);return Object(y.jsx)("div",{className:"dots_block",children:a})},Ie=["title","titleId"];function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Pe(e,t){var n=e.title,r=e.titleId,i=Se(e,Ie);return a.createElement("svg",Ne({width:"14px",height:"22px",viewBox:"0 0 14 22",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?a.createElement("title",{id:r},"video-slider-right-arrow"):n?a.createElement("title",{id:r},n):null,xe||(xe=a.createElement("desc",null,"Created with Sketch.")),_e||(_e=a.createElement("defs",null)),ke||(ke=a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"video-slider-right-arrow",transform:"translate(12.000000, 11.000000) scale(-1, 1) translate(-12.000000, -11.000000) translate(2.000000, 1.000000)",strokeWidth:3,stroke:"white"},a.createElement("polyline",{id:"Rectangle-6",transform:"translate(9.936292, 9.936291) rotate(45.000000) translate(-9.936292, -9.936291) ",points:"3.3918746 3.39187389 16.4807094 3.39187389 16.4807094 16.4807087"})))))}var Me,Le,Re,Be=a.forwardRef(Pe),Te=(n.p,["title","titleId"]);function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function He(e,t){var n=e.title,r=e.titleId,i=Ze(e,Te);return a.createElement("svg",De({width:"14px",height:"22px",viewBox:"0 0 14 22",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?a.createElement("title",{id:r},"video-slider-right-arrow"):n?a.createElement("title",{id:r},n):null,Me||(Me=a.createElement("desc",null,"Created with Sketch.")),Le||(Le=a.createElement("defs",null)),Re||(Re=a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"video-slider-right-arrow",transform:"translate(-8.000000, 1.000000)",strokeWidth:3,stroke:"white"},a.createElement("polyline",{id:"Rectangle-6",transform:"translate(9.936292, 9.936291) rotate(45.000000) translate(-9.936292, -9.936291) ",points:"3.3918746 3.39187389 16.4807094 3.39187389 16.4807094 16.4807087"})))))}var We=a.forwardRef(He);n.p,n(41);var Ve=function(e){var t,n=e.direction,r=e.handleClick,i="arrow";return"tl"===n&&(t=Object(y.jsx)(Be,{}),i+=" arrow_left"),"tr"===n&&(t=Object(y.jsx)(We,{}),i+=" arrow_right"),Object(y.jsx)("div",{className:i,onClick:r,children:t})};n(42);var Ae=W("Slider")((function(e){var t=e.sliderData,n=Object(a.useState)(0),r=Object(u.a)(n,2),i=r[0],l=r[1],c=function(e){return e===t.length-1?0:e+1},o=function(e){return e?e-1:t.length-1};Object(a.useEffect)((function(){if(t.length){var e=setInterval((function(){l((function(e){return c(e)}))}),1e4);return function(){return clearInterval(e)}}}),[t]);var s=o(i),d=c(i),f=[Object(ye.a)(Object(ye.a)({},t[s]),{},{position:"ps"}),Object(ye.a)(Object(ye.a)({},t[i]),{},{position:"cs"}),Object(ye.a)(Object(ye.a)({},t[d]),{},{position:"ns"})];return Object(y.jsxs)("section",{className:"slider",children:[t.length>0?f.map((function(e){return Object(y.jsx)(we,{slideData:e},e.image)})):"",Object(y.jsx)(Ve,{direction:"tl",handleClick:function(){return l((function(e){return o(e)}))}}),Object(y.jsx)(Ve,{direction:"tr",handleClick:function(){return l((function(e){return c(e)}))}}),Object(y.jsx)(Ee,{dotsCount:t.length,currentIndex:i,handleClick:function(e){if(e!==i){var n=Math.abs(e-i);1!==n&&n!==t.length-1||l(e);var r=setInterval((function(){l((function(t){return t<e?t+1:t>e?t-1:(clearInterval(r),t)}))}),300)}}})]})})),Fe=n.p+"static/media/slide-0.ee308286.png",Ge=n.p+"static/media/slide-1.8b06eb75.png",Je=n.p+"static/media/slide-2.16e2ad1e.png",Xe=n.p+"static/media/slide-3.ed09fb10.png";n(43);var ze=W("MainPage")((function(e){var t=e.lang,n=e.setSliderData;return Object(a.useEffect)((function(){return n(function(e){for(var t=[Fe,Ge,Je,Xe],n=["dark_green","teal","brown","purple"],r=de.Slider[e],i=r.slidersText,a=r.slideButtonText,l=[],c=0;c<4;c++)l.push(Object(ye.a)(Object(ye.a)({},i[c]),{},{image:t[c],buttonText:a,buttonColor:n[c]}));return l}(t))}),[t]),Object(y.jsxs)("div",{className:"main_page",children:[Object(y.jsx)(he,{}),Object(y.jsx)(Ce,{}),Object(y.jsx)(Ae,{})]})}));var Ue=W("App")((function(e){var t=e.lang,n=e.setLang,r=e.defineCity;return Object(a.useEffect)((function(){var e=localStorage.getItem(L);e!==R&&e!==B||n(e)}),[]),Object(a.useEffect)((function(){return r(t)}),[t]),Object(y.jsx)(o.a,{children:Object(y.jsx)(s.c,{children:Object(y.jsx)(s.a,{exact:!0,path:"/",component:ze})})})})),Ye=(n(46),n(16)),qe=n(24);var Ke=Object(Ye.b)({lang:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.lang;default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.city;default:return e}},sliderData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.sliderData;default:return e}}}),Qe=Object(Ye.c)(Ke,{},Object(Ye.a)(qe.a));c.a.render(Object(y.jsx)(H.a,{store:Qe,children:Object(y.jsx)(Ue,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6da49b1e.chunk.js.map