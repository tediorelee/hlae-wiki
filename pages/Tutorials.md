> 教程主页待改进，一些标题划掉待以后补充，某些链接无效待修改。

## [HLAE搭配FFMPEG录制和使用预设CFG的教程](https://github.com/advancedfx/advancedfx/wiki/How-to-use-FFMPEG-HLAE-to-record-with-ready-to-use-config-preseted)

教程基于`Purple-CSGO`测试写得的`ffmpeg.cfg`预设config。

视频教程： <https://b23.tv/av56424646> [英文字幕可用]

博客： <https://purp1e.site/hlae-ffmpeg/>

预设CFG下载： [ffmpeg.cfg](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/master/ffmpeg.cfg)

## [如何完全卸载HLAE]()

## 修复128tick的demo下包时视角延迟旋转的问题

见[blockObserverTarget]()指令。

## [Smoother Demos|Source:Smoother Demos]()

## [如何修改Panorama UI]()

## 镜头路径导入导出教程

注意这些功能是为高级用户使用，一般用户可使用[mirv_campath]()指令。

### 英语

http://www.youtube.com/view_play_list?p=6A6D7C24BCDA5A6F by msthavoc

### 德语

http://www.youtube.com/view_play_list?p=A9DD1543240A0C5D by msthavoc

## 简单透视通道设置（CSGO）

在控制台中使用`exec afx/wh`加载简单透视通道设置，根据控制台指令提示操作，GOTV的Demo中效果最好。

## ~~[CS:GO Calculate real FOV from engine FOV / mirv_fov]()~~

## 使用mirv_streams移除涂鸦

```
mirv_streams edit <streamNameHere> actionFilter add "decals/playerlogo\*" noDraw
```

## 修复旧Demo的下蹲高度问题

见[oldDuckFix]()

## ~~[CSGO分离HUD教程]()~~

## ~~[CSGO更换天空教程]()~~

## 解决CSGO炸弹安放时的亮度问题

1) Load the demo.
2) Use mat_force_tonemap_scale and try values between 1.0 to 2.0 (i.e. 1.0 or 1.1 or whatever you like).

(This also fixed the brightness change / overbright when skipping through the demo.)

## CSGO移除闪光效果

```
mirv_cvar_unhide_all
sv_cheats 1
mat_suppress "effects/flashbang.vmt"
mat_suppress "effects/flashbang_white.vmt"
```

再次开启闪光效果，再次输入如下指令即可：

```
mat_suppress "effects/flashbang.vmt"
mat_suppress "effects/flashbang_white.vmt"
```

绑定按键的指令示例：

```
bind keyNameHere "mirv_cvar_unhide_all; sv_cheats 1; mat_suppress effects/flashbang.vmt; mat_suppress effects/flashbang_white.vmt"
```

## CSGO移除X光和解说镜头/X光

```
mirv_cvar_unhide_all
spec_autodirector 0
spec_autodirector_cameraman 0
spec_cameraman_ui 0
spec_cameraman_xray 0
spec_show_xray 0
```

## fuze的教程

1. 使用景深地图

  <https://www.youtube.com/watch?v=WeWXWMgp-CA>

2. 在AAE中录制通道和景深效果
  <https://www.youtube.com/watch?v=4LVBlvzurcc>

## 移除改名卡

```
mirv_streams edit green actionFilter addEx "name=models/weapons/uid/\*" "action=noDraw"
```

## ~~[SFM: How to import models, cameras, maps, and attach custom models to players]()~~

## ~~[How to change demos from day to night as of early 2017]()~~

## HLAE使用ReShade启动CSGO

[CS:GO Editing Tutorials #44 - ReShade Setup with HLAE (2018)  
https://youtu.be/phRX0uZmdu4](https://youtu.be/phRX0uZmdu4)  
Tutorial by https://twitter.com/AlanGamingHD

## 解决CSGO远处物体不加载问题

```
sv_cheats 1
r_disable_distance_fade_on_big_props 1
r_disable_distance_fade_on_big_props_thresh 0
```

## ~~[本地服务器录制GOTV DEMO教程]()~~

## 移除血迹Config

- https://twitter.com/MolenTV/status/1134400694335791105

