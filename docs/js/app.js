(function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/relax-sounds/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"498f":function(e,t,n){e.exports=n.p+"media/fireplace.mp3"},"4c0d":function(e,t,n){e.exports=n.p+"media/forest.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",{style:e.bgi},[n("div",{staticClass:"content"},[n("h1",[e._v("Relax Sounds")]),1==e.saisyo?n("h2",[e._v("PCスペックによっては読み込み遅いかも?..")]):e._e(),n("ul",[n("li",{on:{click:function(t){return e.mode(0)}}},[e._v("Forest")]),n("li",{on:{click:function(t){return e.mode(1)}}},[e._v("Fire Place")]),n("li",{on:{click:function(t){return e.mode(2)}}},[e._v("Rainy")])]),n("div",{staticClass:"play"},[!1===e.audio?n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"play-circle"},on:{click:e.play}}):n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pause-circle"},on:{click:e.pause}})],1),1==e.audio?n("audio",{attrs:{src:e.bgm,loop:"",autoplay:""}}):e._e()])])])},i=[],a={name:"app",data:function(){return{images:["./assets/forest.jpg","./assets/fireplace.jpg","./assets/rainy.jpg"],audio:!0,bgi:"",forest:{backgroundImage:"URL("+n("8fdc")+")"},fireplace:{backgroundImage:"URL("+n("e199")+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"left bottom -200pt"},rainy:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"URL("+n("969a")+")"},bgm:"",bgms:[n("4c0d"),n("498f"),n("7a46")],saisyo:!0}},methods:{play:function(){this.audio=!0,console.log(this.audio)},pause:function(){this.audio=!1},mode:function(e){switch(this.saisyo=!1,e){case 0:this.bgi=this.forest,this.bgm=this.bgms[0];break;case 1:this.bgi=this.fireplace,this.bgm=this.bgms[1];break;case 2:this.bgi=this.rainy,this.bgm=this.bgms[2];break}}}},c=a,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,r,i,!1,null,null,null),p=u.exports,l=n("ecee"),f=n("c074"),d=n("ad3d");l["c"].add(f["b"],f["a"]),o["a"].component("font-awesome-icon",d["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"7a46":function(e,t,n){e.exports=n.p+"media/rainy.mp3"},"8fdc":function(e,t,n){e.exports=n.p+"img/forest.jpg"},"969a":function(e,t,n){e.exports=n.p+"img/rainy.jpg"},"9c0c":function(e,t,n){},e199:function(e,t,n){e.exports=n.p+"img/fireplace.jpg"}});