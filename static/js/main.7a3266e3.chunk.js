(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(6),s=n.n(r),i=n(4),l=n(3),u=n(10),m=n(5);function C(e,t){return void 0===t?{type:e}:{type:e,payload:t}}!function(e){e.ADD_PRO="procon/reasons/ADD_PRO",e.ADD_CON="procon/reasons/ADD_CON"}(a||(a={}));var p=function(e){return C(a.ADD_PRO,e)},d=function(e){return C(a.ADD_CON,e)},f={pros:[],cons:[]},b={reasons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ADD_PRO:return Object(m.a)({},e,{pros:[].concat(Object(u.a)(e.pros),[t.payload])});case a.ADD_CON:return Object(m.a)({},e,{cons:[].concat(Object(u.a)(e.cons),[t.payload])});default:return e}}},v=Object(l.b)(b),E=(n(24),n(14)),O=function(e){var t=e.onSubmit,n=e.className,a=e.submitButtonIcon,r=function(e){var t=Object(o.useState)(e),n=Object(E.a)(t,2),a=n[0],c=n[1];return{value:a,setValue:c,reset:function(){return c("")},bind:{value:a,onChange:function(e){c(e.target.value)}}}}(""),s=r.value,i=r.bind,l=r.reset,u=function(e){e.preventDefault(),s&&(t({id:0,text:s}),l())};return c.a.createElement("form",{className:"ReasonForm ".concat(n),onSubmit:u},c.a.createElement("input",Object.assign({className:"ReasonForm__text",placeholder:"Reason",type:"text"},i)),c.a.createElement("button",{className:"ReasonForm__submit",onClick:u},a))},_=(n(25),function(e){var t=e.className,n=e.title,a=e.reasons,o=e.formOnSubmit,r=e.formButtonIcon;return c.a.createElement("div",{className:"column ".concat(t)},c.a.createElement("div",{className:"column__title"},n),a.map(function(e){return c.a.createElement("p",{key:e.id},e.text)}),c.a.createElement(O,{onSubmit:o,submitButtonIcon:r,className:t}))}),h=function(e){return c.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 24 24"}),c.a.createElement("path",{d:"M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z"}))},N=(n(26),function(){return c.a.createElement("header",{className:"Header"},c.a.createElement(h,{className:"Header__icon"}),c.a.createElement("h1",{className:"Header__title"},"Procon"))}),g=function(e){return c.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 24 24"}),c.a.createElement("path",{d:"M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"}))},A=function(e){return c.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 24 24"}),c.a.createElement("path",{d:"M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z"}))},j=(n(27),function(){var e=Object(i.c)(function(e){return e.reasons.pros}),t=Object(i.c)(function(e){return e.reasons.cons}),n=Object(i.b)();return c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement("div",{className:"App__content"},c.a.createElement("div",{className:"App__content__decision"},c.a.createElement("input",{type:"text",placeholder:"Should I order a pizza tonight?"})),c.a.createElement("div",{className:"App__content__pros-cons-container"},c.a.createElement(_,{className:"pros",title:"Pros",reasons:e,formOnSubmit:function(t){n(p(Object(m.a)({},t,{id:e.length+1})))},formButtonIcon:c.a.createElement(g,null)}),c.a.createElement(_,{className:"cons",title:"Cons",reasons:t,formOnSubmit:function(e){n(d(Object(m.a)({},e,{id:t.length+1})))},formButtonIcon:c.a.createElement(A,null)}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=Object(l.c)(v);s.a.render(c.a.createElement(i.a,{store:D},c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.7a3266e3.chunk.js.map