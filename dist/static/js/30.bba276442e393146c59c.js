webpackJsonp([30],{YZkR:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("eqfM");var a=e("/QYm"),A=e("sUvw");e("7+uW").a.use(a.a);var l={props:{album:{type:Object,default:()=>null}},data:()=>({albumDetail:null}),mounted(){this.getAlbumDetail(this.album._id)},methods:{async getAlbumDetail(i){const t=await Object(A.c)(i);if("fail"===t.type)return Object(a.a)("服务器错误，请联系客服");this.albumDetail=t.data}}},c={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return i.album?a("div",{staticClass:"base-news-layout-container"},[a("div",{staticClass:"album-title one-ellipsis"},[i._v("\n    "+i._s(i.album.name)+"\n  ")]),i._v(" "),a("div",{staticClass:"content f-col-between"},[i.albumDetail&&i.albumDetail.items.length>0?a("div",{staticClass:"items f-col-between"},i._l(i.albumDetail.items.slice(0,3),function(t,A){return a("div",{key:t._id},[a("div",{staticClass:"f-i-c"},[a("img",{attrs:{src:e("tC/7"),alt:""}}),i._v(" "),a("span",{staticClass:"one-ellipsis"},[i._v("\n            "+i._s(t.title)+"\n          ")])])])}),0):i._e(),i._v(" "),i._m(0)]),i._v(" "),a("div",{staticClass:"cover",style:{"background-image":"url( "+i.album.cover+" )"}},[a("p",{class:["update",""]},[i._v("\n      "+i._s(i._f("fltTemplateName")(i.album.contentType))+"\n    ")]),i._v(" "),i.album.lastPlayTime?a("p",{staticClass:"recent"},[i._v("\n      "+i._s(i._f("fltTimeInterval")(i.album.lastPlayTime))+"听过\n    ")]):i._e()])]):i._e()},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"play-all f-c"},[t("img",{attrs:{src:e("tNqj"),alt:""}}),this._v(" "),t("span",[this._v("播放全部")])])}]};var s=e("VU/8")(l,c,!1,function(i){e("ZeOP")},"data-v-0a82302a",null);t.default=s.exports},ZeOP:function(i,t){},"tC/7":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODkxNDhGRjk0QjA0MTFFQThCNTU5NzBEQjgyODQ2MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODkxNDhGRkE0QjA0MTFFQThCNTU5NzBEQjgyODQ2MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTE0OEZGNzRCMDQxMUVBOEI1NTk3MERCODI4NDYxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OTE0OEZGODRCMDQxMUVBOEI1NTk3MERCODI4NDYxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYhVmQAAAGiSURBVHjazJYxS8NAGIYvZzaRgpOTQ3DoIqhLKa2T0kEXLQ7+ggqK/gFxEmcHQbC/IFNxsYPgVnFToUuHJoNTJ6UUNyW+B28gpeR6adLiCy/fkVzuyV3uvi9WEAQiTr7vWwhFuAqX4Tyc4+0+3IFbcAN+cRwndjArDgTIDsIVvCbM9A6fA9Y0AgGwgFCHD8VkcuEagINYECBLCI/wqkinNlwBrDcC4kyeM4BEYaVwZjJyo54hRHCs+tCM+OEfxHS0qzaI5Xme2sKvY3bXG1/kgFs8idRu3JA8JzrIF7yJt7rgcpzxmqnU2EXJw6jTByDfqoH4A9+guQLfwr+GsKrkiU8kwD7hEzTX4SeDR8pygjWPAtvwNpr7cE/TNS8juUukAN4jHGm65KSYkSSzcCrhHO4h3Gm69G2m+sKEALXdr+GtMV07NutJISFgEeGS32XO4JGWZNHSaRkDzxNgw6doduFjQ4hSY2YpaGZJVfIcNFkZs5YblvboOaqxWGWlNscUQyBWwkpGsLCUD0ZAhKl8VUq5jC5LeO9//G5N6wfyT4ABAERvoksRXROcAAAAAElFTkSuQmCC"},tNqj:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODkxNDhGRkQ0QjA0MTFFQThCNTU5NzBEQjgyODQ2MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODkxNDhGRkU0QjA0MTFFQThCNTU5NzBEQjgyODQ2MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTE0OEZGQjRCMDQxMUVBOEI1NTk3MERCODI4NDYxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OTE0OEZGQzRCMDQxMUVBOEI1NTk3MERCODI4NDYxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpKiRFwAAABwSURBVHjaYvj//78ZEN8G4r9AvBaIlYGYgRAGETf+o4IfQNwExJyENOIC94HYjxyNMLANiFXJ0QgCP4G4FYi5SNUIAw+BOBCkkfE/WDvJoJ5cjV+ZGMgE5GrsIjtwaBodJCcAgknuJrmJnKxsBRBgAIAVXdAcmqhaAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=30.bba276442e393146c59c.js.map