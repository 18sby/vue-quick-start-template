webpackJsonp([25],{Mret:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("MY4N");var r=t("0zAV"),a=(t("3Lne"),t("SSsa")),n=(t("eqfM"),t("/QYm")),i=t("7+uW"),c=t("KtQ0");i.a.use(r.a).use(a.a).use(n.a);var d={data:()=>({message:"",placeholder:"",userNick:null,msgId:null,msgUserId:null,srcCommentId:""}),created(){document.title="发表评论"},mounted(){this.receiveQuery()},methods:{receiveQuery(){this.placeholder="回复 "+this.$route.query.userNick,this.userNick=this.$route.query.userNick,this.msgId=this.$route.query.msgId,this.msgUserId=this.$route.query.msgUserId,this.srcCommentId=this.$route.query.srcCommentId},async replyMessage(){const e=await Object(c.e)({msgId:this.msgId,msgUserId:this.msgUserId,content:this.message,srcCommentId:this.srcCommentId});if(!e&&"fail"===e.type)return Object(n.a)("服务器错误，请联系客服");Object(n.a)("发送成功"),this.message="",this.$router.back()}}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"send-message-container"},[t("van-field",{attrs:{rows:"12",clearable:"",type:"textarea",maxlength:"1000",placeholder:e.placeholder,"show-word-limit":"",border:!1},model:{value:e.message,callback:function(s){e.message=s},expression:"message"}}),e._v(" "),t("van-button",{staticClass:"send-btn",attrs:{color:"linear-gradient(90deg,rgba(246,197,67,1),rgba(239,140,56,1))",text:"发送",round:""},on:{click:e.replyMessage}})],1)},staticRenderFns:[]};var o=t("VU/8")(d,l,!1,function(e){t("l1aq")},"data-v-6add23a4",null);s.default=o.exports},l1aq:function(e,s){}});
//# sourceMappingURL=25.66cdd1ce2d6164bfa90d.js.map