webpackJsonp([5],{111:function(e,t,s){var c=s(0)(s(39),null,null,null,null);c.options.__file="E:\\work\\MyWork\\gitTwo\\frontend\\common\\components\\yunnex-select\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),e.exports=c.exports},112:function(e,t,s){function c(e){n||s(93)}var n=!1,a=s(0)(s(40),s(138),c,null,null);a.options.__file="E:\\work\\MyWork\\gitTwo\\frontend\\common\\components\\yunnex-select\\search-select.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),a.options.functional,e.exports=a.exports},119:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-select"},[s("p",{staticClass:"explain-text"},[e._v("下拉框:")]),e._v(" "),s("yunnex-select",{attrs:{"source-data":e.selectData,"select-title":e.selectTitle},on:{"select-change":e.handleSelectChange},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}}),e._v(" "),s("p",{staticClass:"explain-text"},[e._v("带搜索功能的下拉框:")]),e._v(" "),s("yunnex-select",{attrs:{"source-data":e.selectData,"is-show-search":!0,"select-title":e.selectTitle,"search-placeholder":"请输入搜索关键词"},model:{value:e.searchSelectValue,callback:function(t){e.searchSelectValue=t},expression:"searchSelectValue"}}),e._v(" "),s("p",{staticClass:"explain-text"},[e._v("禁用的下拉框:")]),e._v(" "),s("yunnex-select",{attrs:{"source-data":e.selectData,"select-title":e.selectTitle,disabled:!0}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},138:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"yunnex-select-component"},[s("div",{staticClass:"selected-text",class:{disabled:e.disabled,"selected-text-active":e.isActive},on:{click:e.clickSelector}},[e._v("\r\n        "+e._s(e.selectedItem?e.selectedItem[e.selectTitle.text]:"")+"\r\n        "),s("i",{staticClass:"icon-select-arrow select-icon"})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"select-item-wrap"},[e.isShowSearch?s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:e.searchPlaceholder},domProps:{value:e.searchText},on:{input:[function(t){t.target.composing||(e.searchText=t.target.value)},e.search]}}):e._e(),e._v(" "),s("ul",{staticClass:"option-container",on:{click:e.selectItem}},e._l(e.selectData,function(t){return s("li",{staticClass:"option-item",class:{"option-item-selected":e.selectedItem&&e.selectedItem[e.selectTitle.name]===t[e.selectTitle.name]},attrs:{"option-id":t.id}},[e._v(e._s(t[e.selectTitle.text]))])}))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},15:function(e,t,s){function c(e){n||s(75)}var n=!1,a=s(0)(s(50),s(119),c,null,null);a.options.__file="E:\\work\\MyWork\\gitTwo\\frontend\\demo\\src\\page-vues\\demo-select.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),a.options.functional,e.exports=a.exports},39:function(e,t,s){var c=s(112);e.exports=c},40:function(e,t){e.exports={data:function(){return{searchText:"",selectedItem:null,selectData:[],isActive:!1}},props:{selectTitle:{type:Object,required:!0},sourceData:{type:Array,required:!0},isShowSearch:{type:Boolean,default:!1},searchPlaceholder:{type:String},disabled:{type:Boolean,default:!1}},methods:{search:function(){var e,t=this,s=this.searchText.trim();t.selectData=[],s?(e=new RegExp(s,"i"),t.sourceData.forEach(function(s,c){e.test(s[t.selectTitle.text])&&t.selectData.push(s)})):this.selectData=this.sourceData.concat([])},selectItem:function(e){var t=e.target,s=t.getAttribute("option-id"),c=this;c.disabled||(s&&(c.selectData.some(function(e,t){if(e[c.selectTitle.name]==s)return c.selectedItem=e,c.$emit("input",e[c.selectTitle.name]),c.$emit("select-change",e),!0}),c.searchText=""),c.isActive=!1)},clickSelector:function(){this.disabled||(this.isActive=!this.isActive,this.isActive&&(this.selectData=this.sourceData.concat([])))},closeSelect:function(e){var t=e.target;this.$el.contains(t)||(this.isActive=!1)}},watch:{sourceData:function(e,t){var s=this;e.some(function(e){if(e.selected)return s.selectedItem=e,!0})}},mounted:function(){document.body.addEventListener("click",this.closeSelect,!1)},beforeDestroy:function(){document.body.removeEventListener("click",this.closeSelect,!1)}}},50:function(e,t,s){var c=s(111),n=[{id:"01",text:"vue"},{id:"02",text:"react",selected:!0},{id:"03",text:"angular"},{id:"04",text:"java"},{id:"05",text:"nodejs"},{id:"06",text:"koa"}];e.exports={data:function(){return{selectData:[],selectTitle:{name:"id",text:"text"},selectValue:"",searchSelectValue:""}},methods:{handleSelectChange:function(e){}},created:function(){var e=this;setTimeout(function(){e.selectData=n},2e3)},components:{"yunnex-select":c}}},61:function(e,t,s){"use strict";var c=s(1),n=s(2),a=s(15),l=s(3);c.use(n);new c({el:"#app",components:{app:a,frameWork:l}})},75:function(e,t){},93:function(e,t){}},[61]);