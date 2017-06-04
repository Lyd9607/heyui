webpackJsonp([46],{563:function(t,e,_){var v=_(0)(null,_(983),null,null);v.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/component/plugin/tree.vue",v.esModule&&Object.keys(v.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),v.options.functional&&console.error("[vue-loader] tree.vue: functional components are not supported with templates, they should use render functions."),t.exports=v.exports},983:function(t,e,_){t.exports={render:function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"doc"},[_("h2",[t._v("Tree 树")]),t._v(" "),_("h3",[t._v("基本调用")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),_("example",{attrs:{demo:"plugins/tree1"}}),t._v(" "),_("h3",[t._v("多选，选择模式为ALL")]),t._v(" "),t._m(2),t._v(" "),_("example",{attrs:{demo:"plugins/tree2"}}),t._v(" "),_("h3",[t._v("多选，选择模式为SOME")]),t._v(" "),t._m(3),t._v(" "),_("example",{attrs:{demo:"plugins/tree3"}}),t._v(" "),_("h3",[t._v("搜索")]),t._v(" "),_("example",{attrs:{demo:"plugins/tree4"}}),t._v(" "),_("h3",[t._v("全部数据异步加载")]),t._v(" "),t._m(4),t._v(" "),_("example",{attrs:{demo:"plugins/tree5"}}),t._v(" "),_("h3",[t._v("分步异步加载")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),_("example",{attrs:{demo:"plugins/tree6"}}),t._v(" "),_("h3",[t._v("全局配置调用")]),t._v(" "),_("example",{attrs:{demo:"plugins/tree7"}}),t._v(" "),_("h3",[t._v("Tree 参数")]),t._v(" "),t._m(7),t._v(" "),_("h3",[t._v("option 配置")]),t._v(" "),t._m(8)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("在传递的param参数中，定义基本的数据字段："),_("code",[t._v("keyName")]),t._v(", "),_("code",[t._v("parentName")]),t._v(", "),_("code",[t._v("titleName")]),t._v("。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("设定数据模式："),_("code",[t._v("dataMode")]),t._v(", 当传递的数据为有key,parent字段的list，则传递"),_("code",[t._v("list")]),t._v("，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递"),_("code",[t._v("tree")]),t._v("。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("chooseMode")]),t._v(": all, 只有子集全选的时候，才会选中父级，如果父级选择，返回数据则只返回父级，子集不返回。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("chooseMode")]),t._v(": some, 只要子集选中，父级即选中，返回数据为所有选中数据。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("在传递的param参数中，定义字段："),_("code",[t._v("getTotalDatas")]),t._v("获取异步返回的数据，这里的数据属于一次性返回。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("在传递的param参数中，定义字段："),_("code",[t._v("getDatas")]),t._v("获取异步返回的数据，这里的数据属于每个层级返回。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("分步异步加载不推荐有"),_("code",[t._v("multiple")]),t._v("模式，分步异步加载请尽量使用在单个选择模式下。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("chooseMode")]),t._v(" "),_("td",[t._v("checkbox选择模式")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("all,some")]),t._v(" "),_("td",[t._v("all")])]),t._v(" "),_("tr",[_("td",[t._v("option")]),t._v(" "),_("td",[t._v("配置项，详细参见下面的option说明")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("multiple")]),t._v(" "),_("td",[t._v("多选")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("filterable")]),t._v(" "),_("td",[t._v("是否可以搜索")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("config")]),t._v(" "),_("td",[t._v("使用全局配置的方法")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("keyName")]),t._v(" "),_("td",[t._v("数据的key对应字段")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("全局配置"),_("code",[t._v("tree.default.keyName")])])]),t._v(" "),_("tr",[_("td",[t._v("titleName")]),t._v(" "),_("td",[t._v("数据的title对应字段")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("全局配置"),_("code",[t._v("tree.default.titleName")])])]),t._v(" "),_("tr",[_("td",[t._v("parentName")]),t._v(" "),_("td",[t._v("数据的parent对应字段")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("全局配置"),_("code",[t._v("tree.default.parentName")])])]),t._v(" "),_("tr",[_("td",[t._v("dataMode")]),t._v(" "),_("td",[t._v("提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("list, tree")]),t._v(" "),_("td",[t._v("list")])]),t._v(" "),_("tr",[_("td",[t._v("datas")]),t._v(" "),_("td",[t._v("用于tree展示的数据")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("[]")])]),t._v(" "),_("tr",[_("td",[t._v("getTotalDatas")]),t._v(" "),_("td",[t._v("异步获取用于tree展示的数据，一次性全部加载")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("getDatas")]),t._v(" "),_("td",[t._v("异步获取用于tree展示的数据，每一次单击获取子集")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0}});