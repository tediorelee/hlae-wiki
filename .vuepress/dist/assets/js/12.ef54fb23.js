(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{215:function(e,a,v){"use strict";v.r(a);var _=v(28),c=Object(_.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("此命令提供的表达式可与与mirv_cam与mirv_aim交互使用,用以创造特定的镜头路径.由于该命令系统复杂,仅面向进阶用户.")]),e._v(" "),v("h1",{attrs:{id:"支持游戏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持游戏"}},[e._v("#")]),e._v(" 支持游戏")]),e._v(" "),v("p",[e._v("仅在Counter-Strike: Global Offensive运行.")]),e._v(" "),v("h1",{attrs:{id:"基础指导"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础指导"}},[e._v("#")]),e._v(" 基础指导")]),e._v(" "),v("p",[e._v("该指令仅有可与少数指令交互.")]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs handle add key <name1> <spectator slot number>")]),v("br"),e._v("\n该命令将选中实体或玩家. 其编号可在界面中的头像上找到. 或使用 "),v("code",[e._v("mirv_calcs handle add index <name> <index number>")]),e._v(" 指令中的index number可通过以下命令检索 "),v("code",[e._v("mirv_listentities")]),e._v(".")]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add handleAttachment <name2> <name1> <attachment name>")]),v("br"),e._v("\n该命令允许你将摄像机锁定在选中对象所包含的物品中. 物品对应名称代号可在通过游戏目录中  .mdl文件转译后的 .qc文件中找到.如果您懒得这么做, 我们已经编译了部分常用物品名称代号, "),v("a",{attrs:{href:"https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_calcs#list-of-attachment-names",target:"_blank",rel:"noopener noreferrer"}},[e._v("见下表"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add value <name3> <fX> <fY> <fZ> <rX> <rY> <rZ>")]),v("br"),e._v("\n调整摄像机的位置与旋转属性.")]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add offset <name4> <name1> <name3> 1")]),v("br"),e._v("\n此命令将相对于选中的对象调整摄像机的位置和旋转属性.")]),e._v(" "),v("p",[v("code",[e._v("mirv_cam source calcVecAng <name4>")]),v("br"),e._v("\n将"),v("code",[e._v("<name4>")]),e._v(" 的位置与旋转属性导入摄像机中.")]),e._v(" "),v("p",[v("code",[e._v("spec_mode 5")]),v("br"),e._v("\n若模型消失,请使用该命令.")]),e._v(" "),v("p",[v("code",[e._v("mirv_cam source calcVecAngClear")]),v("br"),e._v("\n将取消摄像机,当你想重置摄像机的属性时.")]),e._v(" "),v("p",[e._v("小提示:** 您可使用 "),v("code",[e._v("mirv_cam offset <fX> <fY> <fZ> <rX> <rY> <rZ>")]),e._v(" 一次性调整摄像机的位置与旋转属性以免在vecAng指令中一一调整数值.")]),e._v(" "),v("h1",{attrs:{id:"演示-1-面部固定摄像机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#演示-1-面部固定摄像机"}},[e._v("#")]),e._v(" 演示 #1: 面部固定摄像机")]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs handle add key key0 0")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add handleAttachment key0 key0 facemask")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add value ofsFaceMask 67 0 0 0 0 179.9")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add offset ofsKey0 key0 ofsFaceMask 1")])]),e._v(" "),v("p",[v("code",[e._v("mirv_cam source calcVecAng ofsKey0")])]),e._v(" "),v("h1",{attrs:{id:"演示-2-武器固定摄像机-video-by-z8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#演示-2-武器固定摄像机-video-by-z8"}},[e._v("#")]),e._v(" 演示 #2: 武器固定摄像机 ("),v("a",{attrs:{href:"https://www.youtube.com/watch?v=WtKC8uz57o8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video"),v("OutboundLink")],1),e._v(" by Z8)")]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs handle add index name1 3")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs handle add activeWeapon name2 name1 1")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add handleAttachment name3 name2 muzzle_flash")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add handleAttachment name4 name2 weapon_hand_R")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add or name5 name3 name4")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add value name6 20 0 0 0 0 179.9")])]),e._v(" "),v("p",[v("code",[e._v("mirv_calcs vecAng add offset name7 name5 name6 1")])]),e._v(" "),v("p",[v("code",[e._v("mirv_cam source calcVecAng name7")])]),e._v(" "),v("h1",{attrs:{id:"物品名称代号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#物品名称代号"}},[e._v("#")]),e._v(" 物品名称代号")]),e._v(" "),v("p",[e._v("这些物品名称代号可用于将摄像机固定在选中对象包含的物品上.")]),e._v(" "),v("h2",{attrs:{id:"人物物品"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#人物物品"}},[e._v("#")]),e._v(" 人物物品")]),e._v(" "),v("h3",{attrs:{id:"身体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#身体"}},[e._v("#")]),e._v(" 身体")]),e._v(" "),v("ul",[v("li",[e._v("facemask")])]),e._v(" "),v("h3",{attrs:{id:"装备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#装备"}},[e._v("#")]),e._v(" 装备")]),e._v(" "),v("ul",[v("li",[e._v("c4")]),e._v(" "),v("li",[e._v("grenade0")]),e._v(" "),v("li",[e._v("grenade1")]),e._v(" "),v("li",[e._v("grenade2")]),e._v(" "),v("li",[e._v("grenade3")]),e._v(" "),v("li",[e._v("grenade4")]),e._v(" "),v("li",[e._v("defusekit")])]),e._v(" "),v("h3",{attrs:{id:"武器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#武器"}},[e._v("#")]),e._v(" 武器")]),e._v(" "),v("ul",[v("li",[e._v("knife")]),e._v(" "),v("li",[e._v("pistol")]),e._v(" "),v("li",[e._v("weapon_hand_L")]),e._v(" "),v("li",[e._v("weapon_hand_R")])]),e._v(" "),v("h2",{attrs:{id:"武器模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#武器模型"}},[e._v("#")]),e._v(" 武器模型")]),e._v(" "),v("ul",[v("li",[e._v("muzzle_flash")])]),e._v(" "),v("h1",{attrs:{id:"脚本演示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脚本演示"}},[e._v("#")]),e._v(" 脚本演示")]),e._v(" "),v("ul",[v("li",[e._v("priusfx_20190125T1132Z.zip: https://drive.google.com/open?id=14frey2ImG5TxnK5q1Ct2mAnH7B_pO7Yh")])])])}),[],!1,null,null,null);a.default=c.exports}}]);