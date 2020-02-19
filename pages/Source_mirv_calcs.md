此命令提供的表达式可与与mirv_cam与mirv_aim交互使用,用以创造特定的镜头路径.由于该命令系统复杂,仅面向进阶用户.

# 支持游戏

仅在Counter-Strike: Global Offensive运行.

# 基础指导

该指令仅有可与少数指令交互.  

`mirv_calcs handle add key <name1> <spectator slot number>`  
该命令将选中实体或玩家. 其编号可在界面中的头像上找到. 或使用 `mirv_calcs handle add index <name> <index number>` 指令中的index number可通过以下命令检索 `mirv_listentities`.

`mirv_calcs vecAng add handleAttachment <name2> <name1> <attachment name>`  
该命令允许你将摄像机锁定在选中对象所包含的物品中. 物品对应名称代号可在通过游戏目录中  .mdl文件转译后的 .qc文件中找到.如果您懒得这么做, 我们已经编译了部分常用物品名称代号, [见下表](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_calcs#list-of-attachment-names)  

`mirv_calcs vecAng add value <name3> <fX> <fY> <fZ> <rX> <rY> <rZ>`  
调整摄像机的位置与旋转属性.

`mirv_calcs vecAng add offset <name4> <name1> <name3> 1`  
此命令将相对于选中的对象调整摄像机的位置和旋转属性. 

`mirv_cam source calcVecAng <name4>`  
将`<name4>` 的位置与旋转属性导入摄像机中.  

`spec_mode 5`  
若模型消失,请使用该命令.  

`mirv_cam source calcVecAngClear`  
将取消摄像机,当你想重置摄像机的属性时.  

小提示:** 您可使用 `mirv_cam offset <fX> <fY> <fZ> <rX> <rY> <rZ>` 一次性调整摄像机的位置与旋转属性以免在vecAng指令中一一调整数值.  

# 演示 #1: 面部固定摄像机

`mirv_calcs handle add key key0 0`  

`mirv_calcs vecAng add handleAttachment key0 key0 facemask`  

`mirv_calcs vecAng add value ofsFaceMask 67 0 0 0 0 179.9`  

`mirv_calcs vecAng add offset ofsKey0 key0 ofsFaceMask 1`  

`mirv_cam source calcVecAng ofsKey0`

# 演示 #2: 武器固定摄像机 ([Video](https://www.youtube.com/watch?v=WtKC8uz57o8) by Z8)

`mirv_calcs handle add index name1 3`  

`mirv_calcs handle add activeWeapon name2 name1 1`  

`mirv_calcs vecAng add handleAttachment name3 name2 muzzle_flash`  

`mirv_calcs vecAng add handleAttachment name4 name2 weapon_hand_R`  

`mirv_calcs vecAng add or name5 name3 name4`  

`mirv_calcs vecAng add value name6 20 0 0 0 0 179.9`  

`mirv_calcs vecAng add offset name7 name5 name6 1`  

`mirv_cam source calcVecAng name7`

# 物品名称代号

这些物品名称代号可用于将摄像机固定在选中对象包含的物品上.

## 人物物品

### 身体
* facemask 
### 装备
* c4
* grenade0
* grenade1
* grenade2
* grenade3
* grenade4
* defusekit
### 武器
* knife
* pistol
* weapon_hand_L
* weapon_hand_R 

## 武器模型

* muzzle_flash

# 脚本演示

- priusfx_20190125T1132Z.zip: https://drive.google.com/open?id=14frey2ImG5TxnK5q1Ct2mAnH7B_pO7Yh
