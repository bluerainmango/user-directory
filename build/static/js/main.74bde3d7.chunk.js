(this.webpackJsonpcenter=this.webpackJsonpcenter||[]).push([[0],{59:function(e,t,n){e.exports=n(74)},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),o=n(14),c=n(34),s=n(19),m=(n(68),n(25)),u={filteredEmployees:[{id:1,name:"Emily Yu",email:"emily@gmail.com",dept:"Development",ext:123,position:"Full stack developer"},{id:70,name:"Emily Yu",email:"emily4@gmail.com",dept:"HR",ext:129,position:"HR assistant"},{id:100,name:"Emily Yu",email:"emily2@gmail.com",dept:"Marketing",ext:121,position:"Ecommerce marketer"},{id:50,name:"Emily Yu",email:"emily3@gmail.com",dept:"HR",ext:125,position:"HR assistant"},{id:2,name:"Henry Diaz",email:"Henry@gmail.com",dept:"HR",ext:425,position:"HR manager"},{id:3,name:"Jessica Clark",email:"Jessica@gmail.com",dept:"Marketing",ext:232,position:"Online Marketer"},{id:4,name:"Julie James",email:"Julie@gmail.com",dept:"Accounting",ext:533,position:"Accountant"},{id:5,name:"Wanda Wood",email:"Wanda@gmail.com",dept:"Development",ext:125,position:"Backend developer"},{id:6,name:"George Robinson",email:"George@gmail.com",dept:"Marketing",ext:184,position:"Marketing manager"},{id:7,name:"Virginia Cooper",email:"Virginia@gmail.com",dept:"Sales",ext:449,position:"Local sales person"},{id:8,name:"Earl Howard",email:"Earl@gmail.com",dept:"Sales",ext:148,position:"Sales director"}],filterBy:"all",sortBy:[null,null,null],search:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_EMPLOYEES":return Object(m.a)({},e,{filteredEmployees:t.payload});case"SET_FILTER_BY":return Object(m.a)({},e,{filterBy:t.payload});case"SET_SORT_BY":var n=Object(c.a)(e.sortBy);return n.splice(t.payloadFirst,1,t.payloadSecond),Object(m.a)({},e,{sortBy:n});case"SET_SEARCH":return Object(m.a)({},e,{search:t.payload});case"SORT_EMPLOYEES":return Object(m.a)({},e,{filteredEmployees:t.payload});default:return e}},p=Object(s.c)({employees:d});var E=Object(s.d)(p,s.a.apply(void 0,Object(c.a)([]))),y=(n(69),n(112)),f=n(111),g=n(48),v=Object(o.b)(null,(function(e){return{setFilterBy:function(t){return e({type:"SET_FILTER_BY",payload:t.target.value})},setSortBy:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return{type:"SET_SORT_BY",payloadFirst:e,payloadSecond:t}}(t.target.id,t.target.value))}}}))((function(e){var t=e.className,n=e.filterOrder,a=e.values,l=e.setFilterBy,i=e.setSortBy;return r.a.createElement(f.a,null,r.a.createElement(y.a,{htmlFor:"age-native-helper"},n?"Criteria ".concat(Number(n)+1):"Filter By"),r.a.createElement(g.a,{id:n,onChange:"filterBy"===t?l:i},a.map((function(e){return r.a.createElement("option",{key:e,value:e,className:n},e)}))))})),h=n(109),B=n(49),S=n.n(B),b=n(50),O=n.n(b),x=(n(70),Object(o.b)(null,(function(e){return{setSearch:function(t){return e(function(e){return{type:"SET_SEARCH",payload:e}}(t.target.value))}}}))((function(e){var t=e.setSearch;e.setSortBy;return r.a.createElement("div",{className:"searchBox"},r.a.createElement("div",{className:"search"},r.a.createElement("p",{className:"title withIcon"},r.a.createElement(S.a,null),"Filter"),r.a.createElement(v,{className:"filterBy",values:["all","name","ext","email","dept","position"]}),r.a.createElement(h.a,{id:"standard-basic",label:"Type search keyword",className:"search",onChange:t})),r.a.createElement("p",{className:"title withIcon"},r.a.createElement(O.a,null),"Sort"),["0","1","2"].map((function(e){return r.a.createElement(v,{key:e,filterOrder:e,className:"sortBy",values:["none","name-ascending","name-descending","ext-ascending","ext-descending","email-ascending","email-descending","dept-ascending","dept-descending","position-ascending","position-descending"]})})))}))),j=(n(72),n(51)),T=n(106),R=n(110),k=function(e){var t=e.name,n=e.dept,a=e.position,l=e.ext,i=e.email;return r.a.createElement(T.a,null,r.a.createElement(R.a,null,t),r.a.createElement(R.a,null,n),r.a.createElement(R.a,null,a),r.a.createElement(R.a,null,l),r.a.createElement(R.a,null,i))},N=n(107),L=n(108),_=(n(73),Object(o.b)((function(e){var t=e.employees;return{filteredEmployees:t.filteredEmployees,search:t.search,filterBy:t.filterBy,sortBy:t.sortBy}}))((function(e){var t=e.filteredEmployees;return t=function(e,t,n,a){e="all"===n?e.filter((function(e){return Object.values(e).join("").toString().toLowerCase().includes(t.toLowerCase().toString())})):e.filter((function(e){return"number"===typeof e[n]?"".concat(e[n]).includes(t):e[n].toLowerCase().includes(t.toLowerCase())}));var r=function(){function e(e){return e.thenBy=t,e}function t(t){var n=this;return e((function(e,a){return n(e,a)||t(e,a)}))}return e}();function l(e){var t=e.split("-")[0],n=e.split("-")[1];return"ext"===t&&"ascending"===n?function(e,n){return e[t]-n[t]}:"ext"===t&&"descending"===n?function(e,n){return n[t]-e[t]}:"ext"!==t&&"ascending"===n?function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}:function(e,n){return n[t]<e[t]?-1:n[t]>e[t]?1:0}}if(a.some((function(e){return e&&"none"!==e}))){for(var i,o=0;o<a.length;o++)a[o]&&"none"!==a[o]&&(i=i?i.thenBy(l(a[o])):r(l(a[o])));return e.sort(i)}return e}(t,e.search,e.filterBy,e.sortBy),r.a.createElement("table",null,r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(R.a,{id:"name"},"NAME"),r.a.createElement(R.a,{id:"dept"},"DEPT"),r.a.createElement(R.a,{id:"position"},"POSITION"),r.a.createElement(R.a,{id:"ext"},"EXT"),r.a.createElement(R.a,{id:"email"},"EMAIL"))),r.a.createElement(L.a,null,t.map((function(e){var t=e.id,n=Object(j.a)(e,["id"]);return r.a.createElement(k,Object.assign({key:t},n))}))))}))),F=Object(o.b)((function(e){return{filteredEmployees:e.employees.filteredEmployees}}),(function(e){return{filterEmployees:function(t){return e(function(e){return{type:"FILTER_EMPLOYEES",payload:e}}(t))}}}))((function(e){e.filterEmployees,e.filteredEmployees;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"title"},"Employee Directory"),r.a.createElement("main",null,r.a.createElement(x,null),r.a.createElement(_,null)))}));i.a.render(r.a.createElement(o.a,{store:E},r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.74bde3d7.chunk.js.map