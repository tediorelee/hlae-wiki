该指令可修复其他指令未覆盖到的游戏问题。

# 修复下包后玩家视角切换问题

仅针对CSGO，即使锁定下包的T，下包成功的一瞬间会有玩家视角自动切换的问题，该指令修复此问题，1开启，0默认。

```
mirv_fix blockObserverTarget 1
```

# 修复旧demo下蹲卡住的问题

仅针对CSGO，修复远古demo中玩家下蹲卡住的问题，1开启，0默认。

```
mirv_fix oldDuckFix 1
```

# 修复最大FPS问题

仅针对CSGO突破CSGO物理引擎的FPS限制，可以给`host_framerate`设置超高的fps值。

```
mirv_fix physicsMaxFps <fValue>
```

* fValue：整数或浮点数，CSGO默认为9999。

# 修复玩家模型动画卡顿

见[Smoother Demos](https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos)

