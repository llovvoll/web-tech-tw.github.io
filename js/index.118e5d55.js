(function(t){function e(e){for(var a,r,l=e[0],o=e[1],c=e[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);m&&m(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={index:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"01671072"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,s[1](c)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var m=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative bg-white"},[s("app-header"),s("router-view"),s("app-footer")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[t._m(0),s("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,a){return s("div",{key:a},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,a){return s("div",{key:a,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),s("div",{staticClass:"-mr-2 -my-2 md:hidden"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.mobile_menu.status=!0}}},[s("span",{staticClass:"sr-only"},[t._v("Open menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobile_menu.status,expression:"mobile_menu.status"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[s("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[s("div",{staticClass:"pt-5 pb-6 px-5"},[s("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.mobile_menu.status=!1}}},[t._m(1),s("div",{staticClass:"-mr-2"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[s("span",{staticClass:"sr-only"},[t._v("Close menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),s("div",{staticClass:"mt-6"},[s("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,a){return s("div",{key:a},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 ml-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,a){return s("div",{key:a,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[s("a",{attrs:{href:"/"}},[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 hidden sm:block"},[t._v(" Taiwan Web Technology Promotion Organization ")]),s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Web Tech TW ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Web Tech TW ")])])}],o={name:"AppHeader",data:function(){return{menu:[{name:"Social Media",type:"dropdown",status:!1,items:[{name:"Discord",description:"歡迎加入",icon:"/assets/images/brands/discord.svg",action:function(){return location.assign("https://discord.gg/xpyuq342nX")}},{name:"LINE OpenChat",description:"歡迎加入",icon:"/assets/images/brands/line.svg",action:function(){return location.assign("https://web-tech-tw.github.io/openchat")}}]},{name:"GitHub",type:"function",icon:"/assets/images/brands/github.svg",action:function(){return location.assign("https://github.com/web-tech-tw")}}],mobile_menu:{status:!1}}}},c=o,d=s("2877"),m=Object(d["a"])(c,r,l,!1,null,null,null),u=m.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[s("div",{staticClass:"max-w-7xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("組織資訊")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("學習資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])]),s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("就業資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("社交媒體")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])])])]),s("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2021 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],p={name:"AppFooter"},f=p,v=Object(d["a"])(f,g,x,!1,null,null,null),h=v.exports,b={name:"App",components:{AppHeader:u,AppFooter:h},data:function(){return{menu:[{name:"Social Media",type:"dropdown",status:!1,items:[{name:"Discord",description:"歡迎加入",icon:"/assets/images/brands/discord.svg",action:function(){return location.assign("https://discord.gg/xpyuq342nX")}},{name:"LINE OpenChat",description:"歡迎加入",icon:"/assets/images/brands/line.svg",action:function(){return location.assign("https://web-tech-tw.github.io/openchat")}}]},{name:"GitHub",type:"function",icon:"/assets/images/brands/github.svg",action:function(){return location.assign("https://github.com/web-tech-tw")}}],mobile_menu:{status:!1}}}},y=b,w=Object(d["a"])(y,i,n,!1,null,null,null),C=w.exports,_=(s("ba8c"),s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"py-12 bg-white"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[t._m(1),s("div",{staticClass:"mt-10"},[s("dl",{staticClass:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"},[s("div",{staticClass:"relative"},[s("dt",[s("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})])]),s("p",{staticClass:"ml-16 text-lg leading-6 font-medium text-gray-900"},[t._v("推廣JavaScript")])]),s("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v(" Unavailable ")])]),s("div",{staticClass:"relative"},[s("dt",[s("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}})])]),s("p",{staticClass:"ml-16 text-lg leading-6 font-medium text-gray-900"},[t._v("豐富的學習資源")])]),s("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v(" Unavailable ")])]),s("div",{staticClass:"relative"},[s("dt",[s("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}})])]),s("p",{staticClass:"ml-16 text-lg leading-6 font-medium text-gray-900"},[t._v("提供社交媒體交流平台")])]),s("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v(" Unavailable ")])]),s("div",{staticClass:"relative"},[s("dt",[s("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),s("p",{staticClass:"ml-16 text-lg leading-6 font-medium text-gray-900"},[t._v("一切資源全部免費")])]),s("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v(" Unavailable ")])])])])])]),t._m(2),t._m(3),t._m(4)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[s("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[s("span",{staticClass:"block mb-3"},[t._v("Taiwan Web Technology Promotion Organization")]),s("span",{staticClass:"block text-indigo-600"},[t._v("臺灣網際網路技術推廣組織")])])]),s("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 一個致力於網際網路發展的組織。 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lg:text-center"},[s("h2",{staticClass:"text-base text-indigo-600 font-semibold tracking-wide uppercase"},[t._v("我們的使命")]),s("p",{staticClass:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v(" 讓世界看見台灣的資訊力 ")]),s("p",{staticClass:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"},[t._v(" 提供多樣化資訊產業資源，普及大眾資訊素養及資訊能力 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[s("div",{staticClass:"sm:text-center lg:text-left"},[s("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},[s("span",{staticClass:"block xl:inline"},[t._v("我們的動力由")]),s("span",{staticClass:"block text-indigo-600 xl:inline"},[t._v("開放原始碼社群")]),s("span",{staticClass:"block xl:inline"},[t._v("所驅動")])]),s("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 臺灣網際網路技術推廣組織起源於開放原始碼社群，運用開放原始碼社群的技術，致力於提升資訊素養及網路技術推廣。 ")]),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[s("div",{staticClass:"rounded-md shadow"},[s("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[t._v(" GitHub ")])]),s("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[s("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[t._v(" Discord ")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[s("div",{staticClass:"sm:text-center lg:text-right"},[s("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[s("span",{staticClass:"block xl:inline"},[t._v("我們被這些")]),s("span",{staticClass:"block text-indigo-600 xl:inline"},[t._v("贊助方")]),s("span",{staticClass:"block xl:inline"},[t._v("所支持")])]),s("p",{staticClass:"mt-3 text-base text-gray-500"},[t._v(" 謝謝你們，因為有你們，我們才能更好 ")]),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end"},[s("div",{staticClass:"rounded-md shadow"},[s("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[t._v(" 贊助我們 ")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[s("div",{staticClass:"sm:text-center lg:text-left"},[s("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[s("span",{staticClass:"block xl:inline"},[t._v("想加入我們嗎？")]),s("span",{staticClass:"block text-indigo-600 xl:inline"},[t._v("我們需要你")])]),s("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 我們正在為大眾提供一個免費且開放的網際網路技術推廣平台，讓大眾可以透過網路，了解網際網路技術，嘗試提升大眾資訊素養，並參與網路技術推廣的討論與分享。 ")]),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[s("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[s("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[t._v(" 加入我們 ")])])])])])}],O={name:"Home"},M=O,E=Object(d["a"])(M,k,j,!1,null,null,null),T=E.exports;a["a"].use(_["a"]);var $=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],P=new _["a"]({routes:$}),z=P;a["a"].config.productionTip=!1,new a["a"]({router:z,render:function(t){return t(C)}}).$mount("#app")},ba8c:function(t,e,s){}});
//# sourceMappingURL=index.118e5d55.js.map