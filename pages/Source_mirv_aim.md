该指令允许摄像机对准目标对象 (即人物模型或地图上的任意点).

# 支持游戏

仅在Counter-Strike: Global Offensive上允许.

# 内置指令的帮助 / 指引

该指导未包含所有mirv_aim相关指令上的帮助. 控制台中输入 mirv_aim 指令即可获得相关帮助. 如果帮助中的子命令后缀有 <tt>[...]</tt> , 则可输入该子命令获得更多帮助.

# 重点

见[[Source:Order of camera overrides]].

# 小技巧

## 对准一个物体或人物模型

### 用简单的方法找到玩家

只需控制台输入 <tt>voice_show_mute</tt> 得到玩家列表:

```
] voice_show_mute 
Player#     Player Name
-------     ----------------
  2         fnatic - Virtus.Pro 1:1
  3         Snax g2a.com
  4         TaZ g2a.com
  6         Observer: @YNkCSGO
  7         flushamad * Kinguin
  8         KRIMZ * Kinguin
  11         byali g2a.com
  14         JW$hA * Kinguin
  15         OLOFMEISTER 4-1 * Kinguin
  18         pronax * Kinguin
  21         paszaBiceps g2a.com
  22         NEO g2a.com
-------     ----------------
```

记下左端数字,其为玩家所对应的编号.

### 用硬核的方法找到玩家

首先将相机移动到玩家或物体附近. 暂停Demo (<tt>demo_pause</tt>) 用以下指令移动摄像机 <tt>[[mirv_input|Source:mirv_input]] camera</tt>.

然后使用[[mirv_listentities|Source:mirv_listentities]] 得到物体编号:

```
] mirv_listentities 
index (distance): className::enitityName playerName
0 (1271.841004): class C_World:: [n/a]
1 (1855.715709): class C_CSPlayer:: [n/a]
2 (938.843565): class C_CSPlayer:: [n/a]
3 (698.568618): class C_CSPlayer:: [n/a]
4 (98.432032): class C_CSPlayer:: [n/a]
6 (164.536135): class C_CSPlayer:: [n/a]
7 (1425.445170): class C_CSPlayer:: [n/a]
8 (938.843565): class C_CSPlayer:: [n/a]
11 (1176.453922): class C_CSPlayer:: [n/a]
14 (1485.047984): class C_CSPlayer:: [n/a]
15 (1603.215012): class C_CSPlayer:: [n/a]
18 (1993.133238): class C_CSPlayer:: [n/a]
21 (936.725146): class C_CSPlayer:: [n/a]
22 (164.891836): class C_CSPlayer:: [n/a]
...
392 (1176.453922): weapon_hkp2000:: [n/a]
395 (3119.647663): class C_DynamicProp:: [n/a]
486 (1271.841004): predicted_viewmodel:: [n/a]
497 (2038.314745): weapon_glock:: [n/a]
```

这样做的目的是查看物体中心点与相机间的距离,即在圆括号中的数字.

你会发现这样子找到的玩家会比用另一方法多. 这是因为我们使用的是 GOTV demo. 通过以上所得信息 <tt>voice_show_mute</tt>  , 我们可以推断多出的玩家:

* #1 也许是GOTV摄像机 (也就是您),至于他离你这么远的原因也许是摄像机中心点未更新(只有视图中心点), 试图的中心点其实非常接近您的摄像机.
* #2 是GOTV 的ob / 相机 / 自动视图
* #3 是一位观众

同样地记下物体对应的号码, 这是他们的编号 (最左侧的数字).

### 对准与环绕运动

现在我们得到了想要对准物体的编号, 例如我选的4, 恰好是 _TaZ g2a.com_.

我下达 mirv_aim 对应编号的指令:

```
] mirv_aim entityIndex 4
```

然后使对准系统处于活跃状态:

```
] mirv_aim active 1
```

现在相机应该对准着对应的物体.

如果你想使用键盘来移动摄像机, 你需要启动 <tt>[[mirv_input|Source:mirv_input]] camera</tt> 模式:

```
] mirv_input camera
```

现在你可以用键盘使摄像机 (请参考 [[mirv_input|Source:mirv_input]] 文章) 前进, 后退, 向左, 向右, 向上, 向下.

**如果你想倾斜摄像机**, 你需要输入 mirv_aim使用先前摄像机状态的上向量 (例子中使用的是 mirv_input, 但也可以使用 mirv_campath 或游戏自带的相机):

```
] mirv_aim up input
```

如果你想让摄像机平滑地重新对准, 只需禁用 snapTo:

```
] mirv_aim snapTo 0
```

请不要忘了关闭mirv_input camera模式 ;)

**笔记:** 您可以改变或控制基于(游戏)时间的摄像机对准系统 [[mirv_cmd|Source:mirv_cmd]] / [Valve's demoui PlayCommands](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools#Demo_editor).

# 参考

* [Source:Commands](https://github.com/advancedfx/advancedfx/wiki/Source%3ACommands)
* [mirv_listentities|Source:mirv_listentities](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_listentities)
* [Source:Order of camera overrides](https://github.com/advancedfx/advancedfx/wiki/Source%3AOrder-of-camera-overrides)