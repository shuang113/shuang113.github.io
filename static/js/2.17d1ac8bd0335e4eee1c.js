webpackJsonp([2],{"41kQ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3cXf"),i=s.n(a),c=s("cqUA"),n=s("KvKp"),r=s("vgQg"),u={name:"cards",components:{HeaderBack:c.a},props:{cardVisible:{type:Boolean,default:!1},isSubmit:{type:Boolean,default:!1},cardDatas:{type:Array,default:function(){return[]}}},computed:{correctNum:function(){var t=0;return this.cardDatas.forEach(function(e){e.uanswer==e.answer&&t++}),t}},methods:{checkIndex:function(t){this.$emit("handleCheck",t)},subjectTo:function(t){this.$emit("handleSubject",t)},closedCard:function(){this.$emit("update:cardVisible",!1)},handleSubmit:function(){this.$emit("handleSubmit")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"outin-transform"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.cardVisible,expression:"cardVisible"}],staticClass:"page-container"},[s("header-back",{attrs:{isEmit:!0},on:{handleClick:t.closedCard}}),t._v(" "),t.isSubmit?s("div",{staticClass:"card-hd"},[s("p",[t._v("答对")]),t._v(" "),s("p",{staticClass:"desc"},[s("em",[t._v(t._s(t.correctNum))]),t._v("题/"+t._s(t.cardDatas&&t.cardDatas.length)+"题")])]):t._e(),t._v(" "),t.cardDatas?s("div",{staticClass:"card-bd"},t._l(t.cardDatas,function(e,a){return s("span",{key:a,class:{active:!t.isSubmit&&e.uanswer,correct:t.isSubmit&&e.uanswer===e.answer,error:t.isSubmit&&e.uanswer!=e.answer},on:{click:function(e){return t.checkIndex(a+1)}}},[t._v("\n        "+t._s(a+1)+"\n      ")])}),0):t._e(),t._v(" "),t.isSubmit?s("div",{staticClass:"card-fd"},[s("div",{staticClass:"items prev",on:{click:function(e){return t.subjectTo(0)}}},[t._v("错题解析")]),t._v(" "),s("div",{staticClass:"items next",on:{click:function(e){return t.subjectTo(1)}}},[t._v("全部解析")])]):s("div",{staticClass:"card-fd"},[s("div",{staticClass:"items next",on:{click:t.handleSubmit}},[t._v("提交测评并查看结果")])])],1)])},staticRenderFns:[]};var l=s("C7Lr")(u,d,!1,function(t){s("XyYS")},"data-v-7251a63f",null).exports,o=s("B8jy"),h={name:"subject",components:{HeaderBack:c.a,HCard:l},data:function(){return{uid:Object(n.c)(r.a.USERID),isSubmit:1==Object(n.c)(r.a.STATUS),cardVisible:!1,subjectDatas:[],answerList:[],currentIndex:1,timer:null,usertime:0}},created:function(){var t=this;this.$nextTick(function(){t._getSubject()})},methods:{_getSubject:function(){var t=this;o.a.getSubject({userId:this.uid}).then(function(e){1==e.code&&(t.subjectDatas=e.data,t.tempStorage=t.subjectDatas,t.isSubmit||(t._updateLocalAnswer(!0),t._initLocalDatas(),t._startTimer()))})},replaceText:function(t){return Object(n.f)(t)},formatUserTime:function(t){return Object(n.b)(t)},checkIn:function(t,e){this.isSubmit||(Object(n.g)(r.a.STATUS,2),this.$set(t,"uanswer",e),this._updateLocalAnswer(),this._submitAnswer(!0),this.currentIndex<this.subjectDatas.length&&this.currentIndex++)},_startTimer:function(){var t=this;this.timer=setInterval(function(){t.usertime++,Object(n.g)(r.a.TIMER,t.usertime)},1e3)},_pauseTimer:function(){clearInterval(this.timer)},checkTo:function(t){this.cardVisible=!1,this.currentIndex=t},subjectTo:function(t){if(this.isSubmit){this.cardVisible=!1;var e=[];0==t?(this.tempStorage.forEach(function(t,s){t.uanswer!=t.answer&&e.push(t)}),this.subjectDatas=e):this.subjectDatas=this.tempStorage,this.currentIndex=1}},_updateLocalAnswer:function(t){var e=this;this.onload=t,this.answerList=[],this.subjectDatas.forEach(function(t,s){t.uanswer?e.answerList.push({id:t.id,uanswer:t.uanswer}):e.answerList.length>0&&e.onload&&(e.onload=!1,e.currentIndex=s+1)}),Object(n.g)(r.a.ANSWER,i()(this.answerList))},_initLocalDatas:function(){var t=Object(n.c)(r.a.TIMER);this.isSubmit||(this.usertime=t?JSON.parse(t):0)},_submitAnswer:function(t){var e=this;Object(n.c)(r.a.ANSWER)&&o.a.submitSubject({userId:this.uid,result:Object(n.c)(r.a.ANSWER),type:t?0:1}).then(function(s){1!=s.code||t||(e._pauseTimer(),Object(n.e)(r.a.ANSWER),Object(n.e)(r.a.TIMER),Object(n.g)(r.a.STATUS,1),e.$router.replace({name:"share"}))})},shareTo:function(){this.answerList.length<this.subjectDatas.length?this.$notify({content:"请完成所有的题目再交卷哦~"}):Object(n.a)(this._submitAnswer(),1e3)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("header-back"),t._v(" "),a("div",{staticClass:"article-bd"},[a("div",{staticClass:"header"},[t.isSubmit?a("div",{staticClass:"time-box"}):a("div",{staticClass:"time-box"},[a("img",{staticClass:"time-img",attrs:{src:s("eW57"),alt:"time"}}),t._v("时间："+t._s(t.formatUserTime(t.usertime))+"\n      ")]),t._v(" "),a("div",{staticClass:"card-box",on:{click:function(e){t.cardVisible=!t.cardVisible}}},[t._v("答题卡 "),a("span",{staticClass:"t-light"},[t._v(t._s(t.currentIndex)+"/"+t._s(t.subjectDatas.length))])])]),t._v(" "),t._l(t.subjectDatas,function(e,s){return a("div",{key:s,staticClass:"section",class:{"sub-section":t.isSubmit}},[t.currentIndex==e.order?a("h3",{staticClass:"t-light category"},[t._v(t._s(e.typeName))]):t._e(),t._v(" "),t.currentIndex==e.order?a("div",{staticClass:"wrap-scroll",class:{"sub-scroll":!t.isSubmit}},[a("h4",{staticClass:"title",domProps:{innerHTML:t._s(t.replaceText(e.title))}}),t._v(" "),t._l(e.option,function(s,i,c){return a("div",{key:c,staticClass:"items",on:{click:function(s){return t.checkIn(e,i)}}},[a("em",{class:{active:!t.isSubmit&&e.uanswer==i,error:t.isSubmit&&e.uanswer==i,correct:t.isSubmit&&e.answer==i}},[t._v(t._s(i))]),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.replaceText(s))}})])}),t._v(" "),a("div",{staticClass:"bd-section"},[a("div",{staticClass:"answer"},[t._v("正确答案是"),a("span",{staticClass:"t-correct"},[t._v(t._s(e.answer))]),t._v("，你的答案是"),a("span",{staticClass:"t-user"},[t._v(t._s(e.uanswer))])]),t._v(" "),a("div",{staticClass:"message"},[a("h4",{staticClass:"hd-message"},[t._v("答案解析")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.replaceText(e.analysis))}})])])],2):t._e()])})],2),t._v(" "),a("div",{staticClass:"article-fd"},[a("div",{staticClass:"items",class:{none:1==t.currentIndex},on:{click:function(e){t.currentIndex>1&&t.currentIndex--}}},[t._v("上一题")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex<t.subjectDatas.length,expression:"currentIndex < subjectDatas.length"}],staticClass:"items",on:{click:function(e){t.currentIndex<t.subjectDatas.length&&t.currentIndex++}}},[t._v("下一题")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSubmit&&t.currentIndex==t.subjectDatas.length,expression:"!isSubmit && currentIndex == subjectDatas.length"}],staticClass:"items last",on:{click:t.shareTo}},[t._v("提交评测")])]),t._v(" "),a("h-card",{staticClass:"m-aside",attrs:{isSubmit:t.isSubmit,cardDatas:t.subjectDatas,cardVisible:t.cardVisible},on:{"update:cardVisible":function(e){t.cardVisible=e},"update:card-visible":function(e){t.cardVisible=e},handleCheck:t.checkTo,handleSubject:t.subjectTo,handleSubmit:t.shareTo}})],1)},staticRenderFns:[]};var v=s("C7Lr")(h,m,!1,function(t){s("L8du"),s("F02/")},"data-v-6006904a",null);e.default=v.exports},"F02/":function(t,e){},Kdpx:function(t,e){},L8du:function(t,e){},QMHG:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAABDElEQVQ4jY3UPytGURwH8J+/6TEo5SV4Dd6AzchklEVJSVlIFhYlo00ZJCVlIIvJpAwWqzfAoiSRj+Fxc+7puX++derec+/nntP5nXsC0bLt4gN7bcGO/7y1AVvK2W8Caxk4Ql8dWMZPAk4xgKgCCxm4wFDxvBeYx3cCrjGcvpOD2QzcopN/OL2ZwWcC7jDaa/rFxbRu4YrcY6xqkQJTeE/AI8ZrVjUCDwl4wkQdKFCRL0w2AUR/RDxHN4MRcRgRnWgK5pQLeYORpukFFjN4JStoLxRYyuBlFcw7VjJ4LtlzVSiwqpwzf7u7DgXWM3iSwrp6bGbwWMP/VLTtDB60QaF8qLy0RcWIr9hA/AJxd9Y4EIovTQAAAABJRU5ErkJggg=="},XyYS:function(t,e){},cqUA:function(t,e,s){"use strict";var a=s("KvKp"),i=s("vgQg"),c={props:{isEmit:{type:Boolean,default:!1}},data:function(){return{uid:Object(a.c)(i.a.USERID),isSubmit:1==Object(a.c)(i.a.STATUS)}},methods:{handleClick:function(){this.$emit("handleClick")},exitClick:function(){var t=this;if(this.isSubmit)this.$router.replace({name:"home"});else{Object(a.g)(i.a.STATUS,2);this.$messagebox({text:"确定要退出测评？退出后未完成测评将会为你保存",onClose:function(){t.$router.replace({name:"home"})}})}}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-back",on:{click:function(e){t.isEmit?t.handleClick():t.exitClick()}}},[a("img",{staticClass:"back-img",attrs:{src:s("QMHG")}}),t._v(" 返回\n")])},staticRenderFns:[]};var r=s("C7Lr")(c,n,!1,function(t){s("Kdpx")},"data-v-7997c0ca",null);e.a=r.exports},eW57:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=2.17d1ac8bd0335e4eee1c.js.map