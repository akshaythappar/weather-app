(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(5),s=n.n(c),r=(n(11),n(3)),i=n.n(r),o=n(6),j=n(4),u=(n(13),n(0)),l=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("Delhi"),r=Object(j.a)(s,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&units=metric&appid=a42f0cc249bc3f9edd8e9d29b28da74a"),e.next=3,fetch(t);case 3:return n=e.sent,console.log(n),e.next=7,n.json();case 7:a=e.sent,console.log(a),c(a.main);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"inputData ",children:Object(u.jsx)("input",{type:"search",value:l,className:"inputFeild",onChange:function(e){d(e.target.value)}})}),n?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h2",{className:"location",children:[Object(u.jsx)("i",{className:"fas fa-street-view"}),l]}),Object(u.jsxs)("h1",{className:"temp",children:[n.temp,"\xb0C"]}),Object(u.jsxs)("h3",{className:"temp_max",children:["Min :  ",n.temp_min,"\xb0C  | Max :  ",n.temp_max,"\xb0C "]})]}),Object(u.jsx)("div",{className:"wave -one"}),Object(u.jsx)("div",{className:"wave -two"}),Object(u.jsx)("div",{className:"wave -three"})]}):Object(u.jsx)("p",{className:"errorMsg",children:"No Data Found"})]})})};var d=function(){return Object(u.jsx)(l,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.b33ed972.chunk.js.map