(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{220:function(a,t,v){"use strict";v.r(t);var _=v(0),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[a._v("这条指可以让你快速，简单的创建镜头轨迹")]),a._v(" "),v("h1",{attrs:{id:"各类demo类型所需要的调整"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各类demo类型所需要的调整"}},[a._v("#")]),a._v(" 各类DEMO类型所需要的调整")]),a._v(" "),v("h2",{attrs:{id:"gotv"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gotv"}},[a._v("#")]),a._v(" GOTV")]),a._v(" "),v("p",[a._v("无, 但建议使用自由视角进行录制。")]),a._v(" "),v("h2",{attrs:{id:"pov-第一人称视角-demos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pov-第一人称视角-demos"}},[a._v("#")]),a._v(" POV (第一人称视角) demos")]),a._v(" "),v("p",[a._v("对于POV视角的demo，你应该切换到第三人称模式 然后使用 "),v("tt",[a._v("mirv_input camera")]),a._v("这条命令，作用如下：\n[[mirv_input - 第三人称摄像机|Source:mirv_input#third-person-camera]]\n"),v("em",[a._v("（译者注:这里应该是跳转到mirv_input的wiki下吧）")])],1),a._v(" "),v("h1",{attrs:{id:"为摄像机添加移动轨迹"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为摄像机添加移动轨迹"}},[a._v("#")]),a._v(" 为摄像机添加移动轨迹")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath add")])],1),a._v(" "),v("p",[a._v("以目前的时间和视角作为来源，添加为一个移动轨迹点. 如果你在一个已经设置过轨迹的时间节点上使用此命令添加，那么将会覆盖上一个的轨迹。")]),a._v(" "),v("p",[a._v("目前你需要至少四个轨迹点才可以正常的调用整个摄像机轨迹。")]),a._v(" "),v("h1",{attrs:{id:"调用目前的摄像机轨迹"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调用目前的摄像机轨迹"}},[a._v("#")]),a._v(" 调用目前的摄像机轨迹")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath enabled "),v("em",[a._v("0|1")])])],1),a._v(" "),v("p",[a._v("在这里 1 代表启动摄像机轨迹 0 代表关闭。")]),a._v(" "),v("p",[a._v("目前你需要至少四个轨迹点才可以正常的调用整个摄像机轨迹。")]),a._v(" "),v("h1",{attrs:{id:"在屏幕上显示目前的摄像机轨迹路线图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在屏幕上显示目前的摄像机轨迹路线图"}},[a._v("#")]),a._v(" 在屏幕上显示目前的摄像机轨迹路线图")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath draw enabled "),v("em",[v("strong",[a._v("0")]),a._v("|1")])])],1),a._v(" "),v("p",[a._v("如果你输入"),v("tt",[a._v("mirv_campath draw enabled 1")]),a._v(" 你的摄像机轨迹图将会被显示出来，前提是你所做的设置没有问题。")],1),a._v(" "),v("h2",{attrs:{id:"更改轨迹点显示的图形样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更改轨迹点显示的图形样式"}},[a._v("#")]),a._v(" 更改轨迹点显示的图形样式")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath draw keyAxis 0|1")]),a._v(" (默认 0)")],1),a._v(" "),v("p",[v("tt",[a._v("mirv_campath draw keyCam 0|1")]),a._v(" (默认 1)")],1),a._v(" "),v("h2",{attrs:{id:"mirv-campath-draw所支持的mods"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mirv-campath-draw所支持的mods"}},[a._v("#")]),a._v(" mirv_campath draw所支持的Mods")]),a._v(" "),v("ul",[v("li",[a._v("Counter-Strike: Global Offensice")]),a._v(" "),v("li",[a._v("类似于 Source SDK 2013的Mods, 例. Counter-Strike: Source")])]),a._v(" "),v("h2",{attrs:{id:"系统需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统需求"}},[a._v("#")]),a._v(" 系统需求")]),a._v(" "),v("ul",[v("li",[a._v("PixelShader version 2.0 可被支持")]),a._v(" "),v("li",[a._v("VertexShader version 2.0 可被支持")])]),a._v(" "),v("h1",{attrs:{id:"清除所有的摄像机轨迹"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清除所有的摄像机轨迹"}},[a._v("#")]),a._v(" 清除所有的摄像机轨迹")]),a._v(" "),v("p",[v("zz",[a._v("mirv_campath clear")])],1),a._v(" "),v("h1",{attrs:{id:"查看摄像机轨迹里的摄像机点位信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看摄像机轨迹里的摄像机点位信息"}},[a._v("#")]),a._v(" 查看摄像机轨迹里的摄像机点位信息")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath print")])],1),a._v(" "),v("p",[a._v("将会显示所有轨迹里的摄像机点位 (点位是否已经经过, 序号, 时间, 位置和转向)和目前时间位置。")]),a._v(" "),v("h1",{attrs:{id:"删除一个点位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除一个点位"}},[a._v("#")]),a._v(" 删除一个点位")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath remove "),v("em",[a._v("<id>")])])],1),a._v(" "),v("p",[a._v("使用 "),v("em",[a._v("<id>")]),a._v(",来删除点位，删除需要的点位id你可以在 "),v("tt",[a._v("mirv_campath print")]),a._v(" 里找到(详情 [[ 查看摄像机轨迹里的摄像机点位信息|Source:mirv_campath#Printing points in the path]] below).")],1),a._v(" "),v("h1",{attrs:{id:"载入一个轨迹"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#载入一个轨迹"}},[a._v("#")]),a._v(" 载入一个轨迹")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath load "),v("em",[a._v("<文件名>")])])],1),a._v(" "),v("p",[a._v("从文件里载入一个轨迹 "),v("em",[a._v("<filename>")]),a._v(" 文件必须是XML文件，比如通过"),v("tt",[a._v("mirv_campath save")]),a._v("保存的文件 (详见 [[保存轨迹|Source:mirv_campath#Saving a path]] above.). 格式的相关要求，请在查看保存文件里的注释。")],1),a._v(" "),v("p",[a._v("如果你没有定义路径，那么将会默认在(game).exe所在的文件夹下寻找并加载。")]),a._v(" "),v("p",[a._v("目前 载入后的轨迹需要再次手动启动一下:")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath enabled 1")])],1),a._v(" "),v("h1",{attrs:{id:"保存轨迹"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保存轨迹"}},[a._v("#")]),a._v(" 保存轨迹")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath save "),v("em",[a._v("<文件名>")])])],1),a._v(" "),v("p",[a._v("将轨迹保存成一个 "),v("em",[a._v("<filename>")]),a._v(". XML格式的文件。")]),a._v(" "),v("p",[a._v("如果你没有定义路径，那么将会默认在(game).exe所在的文件夹下保存。")]),a._v(" "),v("h1",{attrs:{id:"轨迹编辑工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#轨迹编辑工具"}},[a._v("#")]),a._v(" 轨迹编辑工具")]),a._v(" "),v("h2",{attrs:{id:"修改轨迹点的起始时间位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改轨迹点的起始时间位置"}},[a._v("#")]),a._v(" 修改轨迹点的起始时间位置")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath edit start")])],1),a._v(" "),v("p",[a._v("偏移整个目前使用的轨迹 到现在的时间位置。")]),a._v(" "),v("h2",{attrs:{id:"调整一个轨迹的时间长度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调整一个轨迹的时间长度"}},[a._v("#")]),a._v(" 调整一个轨迹的时间长度")]),a._v(" "),v("p",[v("tt",[a._v("mirv_campath edit duration "),v("em",[a._v("<dValue>")])])],1),a._v(" "),v("p",[a._v("要调整一个轨迹的时常，你要在_<dValue>_. 使用浮点数值调整，以秒作为单位， 少数情况下，有可能会因为调整，一些点位会叠加到一个时间点上，会有可能使用最后一个点位的数值(无差值).")]),a._v(" "),v("h2",{attrs:{id:"其他的轨迹编辑工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他的轨迹编辑工具"}},[a._v("#")]),a._v(" 其他的轨迹编辑工具")]),a._v(" "),v("p",[a._v("还有其他的许多工具可用 (比如. 编辑 位置 / 视野 / 角度，选择一个点位或是修改整个轨迹).")]),a._v(" "),v("p",[a._v("你可以在控制台输入"),v("tt",[a._v("mirv_campath edit")]),a._v("来获取这些工具的帮助信息 。")],1),a._v(" "),v("h1",{attrs:{id:"关键帧选择工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键帧选择工具"}},[a._v("#")]),a._v(" 关键帧选择工具")]),a._v(" "),v("p",[a._v("关键帧可以使用"),v("tt",[a._v("mirv_campath select")]),a._v("来选择")],1),a._v(" "),v("p",[a._v("你可以在不加入任何附加属性的时候输入这条指令，这样它将会显示一些可用的子命令，和一些实例来作为参考。")]),a._v(" "),v("p",[a._v("当关键帧被选择后，  "),v("tt",[a._v("mirv_campath clear")]),a._v(" 和 "),v("tt",[a._v("mirv_campath edit")]),a._v(" 功能将只会在你选择的关键帧上起作用。 如果没有选择任何关键帧，那么它们将依旧会对所有点位起效\n(所以当你删除被选择的关键帧后，届时将无关键帧被选择，所以你最好不要再去执行mirv_campath clear 因为它将会删除你轨迹里所有的点位).")],1),a._v(" "),v("p",[a._v("选择的关键帧 / 路径点 将会以反色显示， 前提是 "),v("tt",[a._v("mirv_campath draw")]),a._v(" 已经打开.")],1),a._v(" "),v("h1",{attrs:{id:"see-also"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[a._v("#")]),a._v(" See also")]),a._v(" "),v("ul",[v("li",[a._v("[[Source:Commands]]")]),a._v(" "),v("li",[a._v("[[Source:Order of camera overrides]]")])])])}),[],!1,null,null,null);t.default=r.exports}}]);