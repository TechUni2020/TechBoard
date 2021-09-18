(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{579:function(n,t,e){"use strict";e(99);var o=e(13),r=e(23),c=new(function(){function n(){Object(o.a)(this,n),this._commands=[],this._cursor=0}return Object(r.a)(n,[{key:"addCommand",value:function(n){this._commands=this._commands.slice(0,this._cursor),this._commands.push(n),this._cursor++,n.execute()}},{key:"redo",value:function(){this._commands.length>this._cursor&&(this._commands[this._cursor].execute(),this._cursor++)}},{key:"undo",value:function(){this._cursor>0&&(this._cursor--,this._commands[this._cursor].undo())}}]),n}());t.a={components:{},model:{},props:{},data:function(){return{}},methods:{addCommand:function(n){c.addCommand(n)},undo:function(){c.undo()},redo:function(){c.redo()}}}},738:function(n,t,e){"use strict";e.r(t);e(27),e(99),e(22),e(39),e(47);var o=e(8),r=(e(196),e(157),e(13)),c=e(23),l=function(){function n(t,text){Object(r.a)(this,n),this._text=text,this._target=t}return Object(c.a)(n,[{key:"execute",value:function(){this._target.push(this._text)}},{key:"undo",value:function(){var n=this,t=this._target.findIndex((function(text){return n._text===text}));t>=0&&this._target.splice(t,1)}}]),n}(),m=e(579),d=e(203),v={components:{},mixins:[m.a],data:function(){return{forCommandData:[],userToken:""}},mounted:function(){var n=this,t=d.a.auth().currentUser;t&&Object(o.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:o=e.sent,n.userToken=o;case 4:case"end":return e.stop()}}),e)})))()},methods:{addData:function(){var n=new Date;this.addCommand(new l(this.forCommandData,"".concat(n.toLocaleTimeString(),":").concat(("0000"+n.getMilliseconds()).slice(-3))))},onCopyToken:function(){this.$nuxt.$emit("openSnackbar",{color:"success",text:"User Tokenをコピーしました。"})},sleep:function(n){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,n)}));case 2:case"end":return t.stop()}}),t)})))()},click:function(n){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="startLoading"===e.t0?3:"openSnackBar(SUCCESS)"===e.t0?8:"openSnackBar(ERROR)"===e.t0?10:"openConfirmationDialog()"===e.t0?12:14;break;case 3:return t.$nuxt.$loading.start(),e.next=6,t.sleep(3e3);case 6:return t.$nuxt.$loading.finish(),e.abrupt("break",14);case 8:return t.$nuxt.$emit("openSnackbar",{color:"success",text:"SUCCESS"}),e.abrupt("break",14);case 10:return t.$nuxt.$emit("openSnackbar",{color:"error",text:"ERROR"}),e.abrupt("break",14);case 12:return t.$nuxt.$emit("openConfirmationDialog",{title:"確認ダイアログ",text:"よろしいですか？",onOk:function(){t.$nuxt.$emit("openSnackbar",{text:"「はい」が押下されました"})},onCancel:function(){t.$nuxt.$emit("openSnackbar",{text:"「いいえ」が押下されました"})}}),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)})))()}}},k=e(32),f=e(26),h=e.n(f),x=e(539),_=e(553),C=e(734),w=e(586),S=e(555),T=e(657),component=Object(k.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-container",[e("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("h2",[n._v("Firebase User Token")])]),e("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[e("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"Bearer "+n.userToken,expression:"'Bearer ' + userToken",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:n.onCopyToken,expression:"onCopyToken",arg:"success"}],attrs:{color:"primary"}},[n._v("User Token コピー")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",{model:{value:n.userToken,callback:function(t){n.userToken=t},expression:"userToken"}})],1)],1),e("v-row",[e("v-col",[e("v-btn",{on:{click:function(t){return n.click("startLoading")}}},[n._v("Loading")])],1),e("v-col",[e("v-btn",{on:{click:function(t){n.click("openSnackBar(SUCCESS)")}}},[n._v("Snackbar(Success)")])],1),e("v-col",[e("v-btn",{on:{click:function(t){n.click("openSnackBar(ERROR)")}}},[n._v("Snackbar(Error)")])],1),e("v-col",[e("v-btn",{on:{click:function(t){n.click("openConfirmationDialog()")}}},[n._v("ConfirmationDialog()")])],1)],1),e("v-row",[e("v-col",[e("v-btn",{on:{click:n.addData}},[n._v("ADD DATA")])],1),e("v-col",[e("v-btn",{on:{click:n.undo}},[n._v("UNDO")])],1),e("v-col",[e("v-btn",{on:{click:n.redo}},[n._v("REDO")])],1)],1),e("v-row",n._l(n.forCommandData,(function(data,i){return e("v-col",{key:i,staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[n._v(n._s(data))])})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:x.a,VCol:_.a,VContainer:C.a,VLayout:w.a,VRow:S.a,VTextarea:T.a})}}]);