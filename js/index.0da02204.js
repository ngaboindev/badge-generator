(function(e){function t(t){for(var a,l,s=t[0],i=t[1],c=t[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={index:0},n=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/badge-generator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},4352:function(e,t,r){"use strict";var a=r("7c91"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"struct-form"},[r("h1",{staticClass:"title"},[e._v("Badge Generator")]),r("b-field",{attrs:{label:"Type"}},[r("b-select",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("option",{attrs:{value:"framework"}},[e._v("Framework")]),r("option",{attrs:{value:"language"}},[e._v("Language")])])],1),r("b-field",{attrs:{label:"Framework/Language Name"}},[r("b-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("b-field",{attrs:{label:"Icon Name",message:"Get this from simpleicons.org"}},[r("b-input",{model:{value:e.icon,callback:function(t){e.icon=t},expression:"icon"}})],1),r("b-field",{attrs:{label:"Badge Color",message:"Hex string. Get this from simpleicons.org, too"}},[r("b-input",{model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1),r("b-button",{attrs:{type:"is-primary"},on:{click:e.generate}},[e._v("Generate")])],1)])},n=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e._m(0),r("section",{staticClass:"modal-card-body badge-modal-content"},[r("div",{staticClass:"badge"},[r("a",{attrs:{href:e.badgeUrl}},[r("img",{attrs:{src:e.badgeUrl}})])]),r("pre",[e._v(e._s(e.badgeMarkdown))]),r("div",{staticClass:"badge"},[r("a",{attrs:{href:e.simpleBadgeUrl}},[r("img",{attrs:{src:e.simpleBadgeUrl}})])]),r("pre",[e._v(e._s(e.simpleBadgeMarkdown))])]),r("footer",{staticClass:"modal-card-foot"},[r("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$parent.close()}}},[e._v(" Close ")])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[e._v("Your Badge")])])}],i={props:["badgeUrl","simpleBadgeUrl","name"],computed:{badgeMarkdown(){return`![${this.name}](${this.badgeUrl})`},simpleBadgeMarkdown(){return`![${this.name}](${this.simpleBadgeUrl})`}}},c=i,u=(r("4352"),r("2877")),d=Object(u["a"])(c,l,s,!1,null,"931ddb84",null),p=d.exports,m={name:"App",data(){return{name:"Vue",icon:"vue.js",type:"framework",color:"4FC08D"}},computed:{badgeUrl(){return`https://img.shields.io/static/v1?label=${"framework"==this.type?"Framework":"Language"}&message=${encodeURIComponent(this.name||"React")}&color=${encodeURIComponent(this.color.replace(/\#/g,"")||"blue")}&logo=${encodeURIComponent(this.icon.toLowerCase().replace(/ /g,"-")||"react")}&logoColor=white&style=for-the-badge`},simpleBadgeUrl(){return`https://img.shields.io/static/v1?label=&message=${encodeURIComponent(this.name||"React")}&color=${encodeURIComponent(this.color.replace(/\#/g,"")||"blue")}&logo=${encodeURIComponent(this.icon.toLowerCase().replace(/ /g,"-")||"react")}&logoColor=white&style=for-the-badge`}},methods:{generate(){this.$buefy.modal.open({component:p,props:{badgeUrl:this.badgeUrl,simpleBadgeUrl:this.simpleBadgeUrl,name:this.name}})}}},f=m,g=(r("034f"),Object(u["a"])(f,o,n,!1,null,null,null)),b=g.exports,h=r("289d");r("7046");a["a"].use(h["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(b)}}).$mount("#app")},7046:function(e,t,r){},"7c91":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=index.0da02204.js.map