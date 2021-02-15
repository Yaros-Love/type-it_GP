(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},3891:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Board")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getScore>0?n("h1",[t._v(" Your last scorre: "),n("span",[t._v(t._s((1*t.getScore).toFixed(0)))]),t._v(". Let's try again? ")]):n("h1",[t._v(" Let's check your typing speed. Get ready and press Start button! ")])},i=[],c=n("5530"),u=n("2f62"),l={name:"Header",computed:Object(c["a"])({},Object(u["c"])(["getScore"]))},d=l,f=(n("c93d"),n("2877")),h=Object(f["a"])(d,a,i,!1,null,"7c684733",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"w-50 mx-auto d-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userValue,expression:"userValue"}],ref:"user-input",staticClass:"sr-only",attrs:{type:"text",name:""},domProps:{value:t.userValue},on:{blur:t.focusedInput,input:[function(e){e.target.composing||(t.userValue=e.target.value)},t.inputChangeHandler]}}),n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"mb-5"},[n("b-col",{staticClass:"p-3 text",attrs:{cols:"9"}},t._l(t.getText,(function(e,r){return n("span",{key:r+e,ref:"symbol",refInFor:!0,staticClass:"cell"},[t._v(t._s(e))])})),0),n("b-col",{},[n("div",[n("p",[t._v(" Speed: "),n("span",{staticClass:"total"},[t._v(t._s(t.lettersInMinute&&t.lettersInMinute!==1/0?t.lettersInMinute.toFixed(0):"0")+" LPM")])])]),n("div",[n("p",[t._v(" Accuracy: "),n("span",{staticClass:"total"},[t._v(t._s(t.getAccuracy)+" %")])])])])],1),n("b-row",{staticClass:"mb-5"},[n("b-col",{staticClass:"col-9"},[n("p",[t._v("Progress...")]),n("b-progress",{staticClass:"mb-2",attrs:{value:t.getProgress.toFixed(0)}})],1),n("b-col",{staticClass:"d-flex flex-column justify-content-between button-container"},[t.isStarted?n("button",{ref:"startButton",on:{click:t.onButtonClickEnd}},[t._v(" STOP ")]):n("button",{ref:"endButton",on:{click:t.onButtonClickStart}},[t._v(" START ")]),n("button",{ref:"resetButton",on:{click:t.resetScore}},[t._v(" Reset last score ")])])],1),n("b-row",[n("div",{staticClass:"w-100"},[n("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)])],1)],1)},b=[],v=(n("4160"),n("b680"),n("ac1f"),n("466d"),n("159b"),n("ade3")),S={name:"Board",data:function(){return{userValue:"",textSpans:[],lastIndexSymbol:0,oldTime:0,totalTime:0,lettersInMinute:0,totalScore:0,isStarted:!1,idSetInterval:null,match:0,items:[]}},mounted:function(){var t=this;this.fetchText().then((function(){return t.textSpans=t.$refs.symbol}))},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["updateScore","fetchText"])),{},{focusedInput:function(t){t.target.focus()},onButtonClickStart:function(){this.startTest(),this.startInterval(),this.isStarted=!this.isStarted},onButtonClickEnd:function(){this.saveScore(),this.endTest(!0),this.$refs.startButton.blur()},setColorSpan:function(t){"number"==typeof t?this.textSpans[t].style.background="#4fd06b":this.textSpans[this.lastIndexSymbol].style.background="#ff9c9cd4"},inputChangeHandler:function(){this.compareTexts(this.isTextComlited)},compareTexts:function(t){this.userValue[this.userValue.length-1]===this.getText[this.lastIndexSymbol]?(this.setColorSpan(this.lastIndexSymbol),this.lastIndexSymbol++,this.match=this.lastIndexSymbol,this.endTest(t)):this.setColorSpan()},startTest:function(){this.match=0,this.lastIndexSymbol=0,this.userValue="",this.$refs["user-input"].removeAttribute("disabled"),this.$refs["user-input"].focus(),this.textSpans.forEach((function(t){t.style.background=""}))},endTest:function(t){var e;t&&(localStorage.setItem("score",this.lettersInMinute),clearInterval(this.idSetInterval),this.items.push((e={Try:this.items.length+1},Object(v["a"])(e,"Print Speed, LPM",this.lettersInMinute>0&&this.lettersInMinute!==1/0?this.lettersInMinute.toFixed(0):0),Object(v["a"])(e,"Accuracy, %",this.getAccuracy),e)),this.isStarted=!1,this.oldTime=0,this.totalTime=0,this.$refs["user-input"].setAttribute("disabled",!0))},updateTime:function(){var t=Date.now();if(this.oldTime){var e=(t-this.oldTime)/1e3;this.totalTime+=e,this.oldTime=t}else this.oldTime=t},startInterval:function(){var t=this;this.idSetInterval=setInterval((function(){t.updateTime(),t.lettersInMinute=60/t.totalTime*t.lastIndexSymbol}),100)},saveScore:function(){this.totalScore=this.lettersInMinute,localStorage.setItem("score",this.totalScore),this.updateScore(this.totalScore)},resetScore:function(){localStorage.setItem("score",0),this.updateScore(0)}}),computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["getText"])),{},{isTextComlited:function(){return this.lastIndexSymbol===this.getText.length-1},getProgress:function(){return this.match/this.getText.length*100},getAccuracy:function(){var t=this.match/this.userValue.length*100;return"number"===typeof t&&t===t?t.toFixed(0):0}})},g=S,x=(n("ea1b"),Object(f["a"])(g,m,b,!1,null,"25fa0603",null)),y=x.exports,T={name:"App",components:{Header:p,Board:y}},I=T,_=(n("034f"),Object(f["a"])(I,s,o,!1,null,null,null)),j=_.exports,O=(n("d3b7"),n("96cf"),n("1da1"));r["default"].use(u["a"]);var w=new u["a"].Store({state:{text:"",score:localStorage.getItem("score")?localStorage.getItem("score"):0},mutations:{updateScore:function(t,e){t.score=1*e},setText:function(t,e){t.text=e}},actions:{updateScore:function(t,e){var n=t.commit;n("updateScore",e)},fetchText:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://fish-text.ru/get?format=json").then((function(t){return t.json()}));case 3:r=e.sent,n("setText",r.text);case 5:case"end":return e.stop()}}),e)})))()}},modules:{},getters:{getText:function(t){return t.text},getScore:function(t){return t.score}}}),C=n("5f5b");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(C["a"]),new r["default"]({store:w,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){},c93d:function(t,e,n){"use strict";n("d03f")},d03f:function(t,e,n){},ea1b:function(t,e,n){"use strict";n("3891")}});
//# sourceMappingURL=app.df870959.js.map