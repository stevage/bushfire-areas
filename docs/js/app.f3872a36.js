(function(e){function t(t){for(var n,s,o=t[0],u=t[1],l=t[2],f=0,d=[];f<o.length;f++)s=o[f],a[s]&&d.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),r("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[r("div",{staticClass:"br b--light-gray overflow-auto w3 w5-ns pa2",attrs:{id:"sidebar"}},[r("div",{staticClass:"b i"},[e._v("This is just a demonstration of EMSINA's public fire areas ")]),r("a",{attrs:{href:"https://services9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/rest/services/Bushfire_Boundaries/FeatureServer/0"}},[e._v("spatial endpoints")]),e._v("."),r("p",[e._v("It is not intended for any other purpose, including decision making.")]),r("FeatureInfo")],1),r("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[r("Map"),r("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)]),r("div",{staticClass:"bt b--light-gray flex-none h2",attrs:{id:"bottom"}},[r("p",{domProps:{innerHTML:e._s('Made by <a href="https://hire.stevebennett.me">Steve Bennett.')}})])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bb b--gray bg-washed-yellow h3",attrs:{id:"top"}},[r("h1",[e._v("Bushfire areas")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},o=[],u=(r("96cf"),r("3b8d")),l=r("e192"),c=r.n(l),f=r("8936"),d=r.n(f),p=(r("ac6d"),r("f915"),r("078d")),v={mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w",t=new c.a.Map({container:"map",center:[145.96,-32.33],zoom:4,style:"mapbox://styles/mapbox/light-v9",hash:!0}),d.a.init(t,c.a),window.map=t,window.Map=this,t.U.onLoad(function(){t.U.addGeoJSON("bushfire-areas"),t.U.addFill("bushfire-fills",{source:"bushfire-areas",fillColor:["match",["get","Agency"],"NSW Rural Fire Service","hsla(0,80%,60%,0.5)","VIC Dept of Environment, Land, Water and Planning","hsla(40,80%,60%,0.5)","SA Country Fire Service","hsla(80, 80%, 60%, 0.5)","TAS Tasmanina Fire Service","hsla(300, 80%, 60%, 0.5)","blue"]}),t.U.addLine("bushfire-lines",{source:"bushfire-areas",lineColor:"red",lineWidth:2}),t.U.addSymbol("bushfire-labels",{source:"bushfire-areas",textColor:"black",textField:"{Title}",textHaloWidth:1,textHaloColor:"hsla(0,0%,100%,0.5)",minZoom:8}),t.U.hoverPointer("bushfire-fills"),t.on("click","bushfire-fills",function(e){console.log(e),window.FeatureInfo.feature=e.features[0]});var e=function(){n.get({where:"1=1"},function(e,r){console.log("Updated data"),t.U.setData("bushfire-areas",r)})};e(),window.setInterval(e,3e4)}),r="https://services9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/rest/services/Bushfire_Boundaries/FeatureServer/0",n=new p({url:r});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},h=v,b=r("2877"),m=Object(b["a"])(h,s,o,!1,null,"91d1d9b6",null);m.options.__file="Map.vue";var g=m.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.imageUrl?r("img",{staticClass:"image",attrs:{src:e.imageUrl}}):e._e(),e.feature?r("table",{staticClass:"bg-white b--gray ba helvetica ma1",attrs:{id:"FeatureInfo"}},e._l(e.feature.properties,function(t,n){return r("tr",[-1===e.ignoreProps.indexOf(n)?[r("th",{staticClass:"f6"},[e._v(e._s(n))]),r("td",{staticClass:"f6"},[e._v(e._s(t))])]:e._e()],2)}),0):e._e()])},w=[],y={name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},computed:{imageUrl:function(){return this.feature&&this.feature.properties.image_url}},created:function(){window.FeatureInfo=this}},x=y,F=(r("fdd4"),Object(b["a"])(x,_,w,!1,null,"6a150749",null));F.options.__file="FeatureInfo.vue";var j=F.exports,C={name:"app",components:{Map:g,FeatureInfo:j}};r("948e");var I=C,S=(r("034f"),Object(b["a"])(I,a,i,!1,null,null,null));S.options.__file="App.vue";var M=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,t,r){},a6c3:function(e,t,r){},fdd4:function(e,t,r){"use strict";var n=r("a6c3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.f3872a36.js.map