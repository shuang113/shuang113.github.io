webpackJsonp([6],{"5ApT":function(t,e,n){"use strict";var o={name:"notifycation",props:{delay:{type:Number,default:2e3},content:{type:String,default:""}},data:function(){return{notifyVisible:!1}},methods:{show:function(){var t=this;this.notifyVisible=!0,clearTimeout(this.timer),this.timer=setTimeout(function(){t.hide(),t.$emit("closed")},this.delay)},hide:function(){this.notifyVisible=!1}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"drop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.notifyVisible,expression:"notifyVisible"}],staticClass:"m-notify",on:{click:function(e){return e.stopPropagation(),t.hide(e)}}},[n("div",{staticClass:"desc"},[t._v(t._s(t.content))])])])},staticRenderFns:[]};var r=n("C7Lr")(o,i,!1,function(t){n("lWek")},"data-v-46d7a6a7",null);e.a=r.exports},I86k:function(t,e){},KvKp:function(t,e,n){"use strict";e.d=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},n.d(e,"g",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"e",function(){return a}),n.d(e,"b",function(){return u}),e.f=function(t){if("[object String]"===toString.call(t)){var e=t.replace(/(\r\n)|(\n)|\\n/g,"<br>");return e=e.replace(/\s/g," ")}return t},e.a=function(t,e){var n=null;return function(){var o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(o,i)},e)}};var o=n("3cXf"),i=n.n(o);var r=function(t,e){t&&("string"!=typeof e&&(e=i()(e)),window.localStorage.setItem(t,e))},s=function(t){if(t)return window.localStorage.getItem(t)},a=function(t){t&&window.localStorage.removeItem(t)},u=function(t){var e=t>3600||3600==t?Math.floor(t/3600):"00",n=t>3600||3600==t?Math.floor((t-3600*e)/60):Math.floor(t/60),o=t>3600||3600==t?(t-3600*e)%60:t%60,i=c(e,2),r=c(n,2)+"分"+c(o,2)+"秒";return t>3600||3600==t?i+"时"+r:r},c=function(t,e){for(var n=t.toString().length;n<e;)t="0"+t,n++;return t}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("EqYI"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-main"},[e("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e("router-view",{key:this.key})],1)],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App",computed:{key:function(){return this.$route.path}}},i,!1,function(t){n("I86k")},null,null).exports,s=n("7LQH");o.a.use(s.a);var a=new s.a({mode:"history",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"FP3a"))}},{path:"/subject",name:"subject",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"41kQ"))}},{path:"/share",name:"share",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"XB3j"))}},{path:"/result",name:"result",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"eqLv"))}}]}),u=(n("D0oh"),n("5ApT")),c=n("qQ3U"),l={name:"messagebox",props:{show:{type:Boolean,default:!0},title:{type:String,default:"提示"},text:{type:String,default:"程序小哥哥提醒你"},onClose:{type:Function,default:function(){return null}}},methods:{hideMessageBox:function(){this.$emit("hide")},showMessageBox:function(){this.$emit("show")},submitMessageBox:function(){this.$emit("submit",this.onClose)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"m-messagebox"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"submit"},[n("div",{staticClass:"items",on:{click:t.hideMessageBox}},[t._v("取消")]),t._v(" "),n("div",{staticClass:"items highlight",on:{click:t.submitMessageBox}},[t._v("确定")])])])])},staticRenderFns:[]};var m=n("C7Lr")(l,f,!1,function(t){n("SEzp")},"data-v-448fda60",null).exports,d={extends:m},v=o.a.extend(d),h=function(t){if(!o.a.prototype.$isServer){var e=new v({propsData:t});return e.vm=e.$mount(),document.body.appendChild(e.vm.$el),e.vm.$on("hide",function(){document.body.removeChild(e.vm.$el),e.vm.$destroy()}),e.vm.$on("show",function(){e.vm.show=!0}),e.vm.$on("submit",function(){e.vm.onClose&&e.vm.onClose(),document.body.removeChild(e.vm.$el),e.vm.$destroy()}),e.vm}},p=n("KvKp");o.a.use(function(t){t.component(u.a.name,u.a),t.prototype.$notify=c.a}),o.a.use(function(t){t.component(m.name,m),t.prototype.$messagebox=h}),o.a.config.productionTip=!1,a.beforeEach(function(t,e,n){var o=t.query.userId;if(o?Object(p.g)("LEIDA_USERID",o):o=Object(p.c)("LEIDA_USERID"),o)n();else try{window.location.href="gkld://gongkaoleida/appLogin"}catch(t){console.warn(t)}}),new o.a({el:"#app",router:a,render:function(t){return t(r)}})},SEzp:function(t,e){},lWek:function(t,e){},qQ3U:function(t,e,n){"use strict";var o=n("EqYI"),i={extends:n("5ApT").a,mounted:function(){this.show()}},r=o.a.extend(i),s=[],a=1;e.a=function(t){if(!o.a.prototype.$isServer){var e=new r({propsData:t}),n="notify_"+a++;e.id=n,e.vm=e.$mount(),document.body.appendChild(e.vm.$el),e.vm.visible=!0;var i=0;return s.forEach(function(t){i+=t.$el.offsetHeight+16}),i+=16,e.verticalOffset=i,s.push(e),e.vm.$on("closed",function(){document.body.removeChild(e.vm.$el),e.vm.$destroy()}),e.vm}}}},["NHnr"]);
//# sourceMappingURL=app.929e35372d72396369d8.js.map