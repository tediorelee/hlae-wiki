## [How to use FFMPEG+HLAE to record with ready-to-use config preseted](https://github.com/advancedfx/advancedfx/wiki/How-to-use-FFMPEG-HLAE-to-record-with-ready-to-use-config-preseted)

This tutorial is based on a ffmpeg.cfg along with some tested presets written by Purple-CSGO.

Video tutorial: https://b23.tv/av56424646 [English subtitle available]

Blog: https://purp1e.site/hlae/hlaeffmpeg-en.html [[zh-CN](https://purp1e.site/hlae/hlaeffmpeg.html)]

Download [ffmpeg.cfg](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/v1.2/en/ffmpeg.cfg) [[zh-CN](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/v1.2/ffmpeg.cfg)] or [ffmpeg420.cfg ](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/v1.2/en/ffmpeg420.cfg)[[zh-CN](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/v1.2/ffmpeg420.cfg)] (Added"-pix_fmt yuv420p" to avoid some errors)

## [[How to completely uninstall HLAE]]

## Fix CS:GO bomb plant spec lag/spin in 128 tick GOTV demos

See <tt>[[mirv_fix blockObserverTarget|Source:mirv_fix#mirv_fix-blockobservertarget]]</tt> command.

## [[Smoother Demos|Source:Smoother Demos]]

## [[How to change Panorama UI]]

## Camexport / Camimport Video Tutorials

Please note that these features are for advanced users, normal users might want to use [[mirv_campath|Source:mirv_campath]] instead!

### English

http://www.youtube.com/view_play_list?p=6A6D7C24BCDA5A6F by msthavoc

### German

http://www.youtube.com/view_play_list?p=A9DD1543240A0C5D by msthavoc

## Easy wallhack (CS:GO)

For CS:GO you can enable an easy wallhack by using `exec afx/wh` in console and following the instructions printed in the console. Works best with GOTV demos.

## [[CS:GO Calculate real FOV from engine FOV / mirv_fov]]

## Remove graffiti with mirv_streams

```
mirv_streams edit <streamNameHere> actionFilter add "decals/playerlogo\*" noDraw
```

## Fix crouch height in old CS:GO demos

See <tt>[[mirv_fix oldDuckFix|Source:mirv_fix#mirv_fix-oldduckfix]]</tt>

## mirv_streams - picker - Hiding materials / entites and special effects

### New tutorial

[Removing Volumetric Lights from Depth Passes in HLAE (Picker Method)  
![thumbnail](http://img.youtube.com/vi/7Mnbr-3RvPs/default.jpg) https://youtu.be/7Mnbr-3RvPs](https://youtu.be/7Mnbr-3RvPs)

### Original tutorial (longer, more details)

[![thumbnail](http://img.youtube.com/vi/aLxHUIOpGcU/default.jpg) 
https://youtu.be/aLxHUIOpGcU](https://youtu.be/aLxHUIOpGcU)

1) In the first 6 minutes you will learn how to quickly find and hide unwanted objects / materials from a depth stream.

2) In the remaining 13 minutes I will show how to solve the advanced exercise of hiding a players shadow and additionally also how to add custom actions and giving specific players a solid colour using those.

## [[Tutorial: CS:GO Separate HUD Stream]]

## [[Tutorial: CS:GO: Replace sky with mirv_streams on nuke / inferno / train]]

## How to fix CS:GO bomb plant brightness

1) Load the demo.
2) Use mat_force_tonemap_scale and try values between 1.0 to 2.0 (i.e. 1.0 or 1.1 or whatever you like).

(This also fixed the brightness change / overbright when skipping through the demo.)

## CS:GO Flash Removal

```
mirv_cvar_unhide_all
sv_cheats 1
mat_suppress "effects/flashbang.vmt"
mat_suppress "effects/flashbang_white.vmt"
```

To enable flash overlay again, enter both lines with mat_suppress again (meaning it works like a toggle).

If you want to bind them to a key use this: 

```
bind keyNameHere "mirv_cvar_unhide_all; sv_cheats 1; mat_suppress effects/flashbang.vmt; mat_suppress effects/flashbang_white.vmt"
```

Pressing the key will toggle flashes off/on.

## CS:GO remove xray and caster camera / xray control:

```
mirv_cvar_unhide_all
spec_autodirector 0
spec_autodirector_cameraman 0
spec_cameraman_ui 0
spec_cameraman_xray 0
spec_show_xray 0
```

## Tutorials by fuze

1. Using depth maps  
https://www.youtube.com/watch?v=WeWXWMgp-CA
2. Recording streams and depth effects in AAE
https://www.youtube.com/watch?v=4LVBlvzurcc

## Remove nametags

```
mirv_streams edit green actionFilter addEx "name=models/weapons/uid/\*" "action=noDraw"
```

## [[SFM: How to import models, cameras, maps, and attach custom models to players]]

## [[How to change demos from day to night as of early 2017]]

## [[CS:GO POV weapon only stream]]

## CS:GO ReShade with HLAE

[CS:GO Editing Tutorials #44 - ReShade Setup with HLAE (2018)  
https://youtu.be/phRX0uZmdu4](https://youtu.be/phRX0uZmdu4)  
Tutorial by https://twitter.com/AlanGamingHD

## CS:GO disable distance fading of props

```
sv_cheats 1
r_disable_distance_fade_on_big_props 1
r_disable_distance_fade_on_big_props_thresh 0
```

## [[How to record a GOTV demo on a local server]]

## Blood removal config

- https://twitter.com/MolenTV/status/1134400694335791105