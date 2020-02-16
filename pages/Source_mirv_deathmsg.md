此命令允许筛选击杀信息并控制击杀信息的显示时间.

# 支持游戏

仅在Counter-Strike: Global Offensive上运行


# Chet Jong 编写

切换开关此命令或将击杀信息限制在当前视角的玩家

```
alias "localplayer" "localplayer_on"
alias "localplayer_on" "mirv_deathmsg filter add attackerMatch=!xTrace block=1 lastRule=1;alias localplayer localplayer_off;echo KILLFEED: ONLY LOCAL PLAYER"
alias "localplayer_off" "mirv_deathmsg filter clear;alias localplayer localplayer_on;echo KILLFEED: DEFAULT"

unbind h
bind "h" "localplayer" 
```

# 例如

## 如何控制击杀信息显示参数：

`mirv_deathmsg lifetime` 允许控制击杀信息的显示时间(秒). 清除击杀信息: `mirv_deathmsg lifeTime default` (或0) 然后跳转到当前Demo tick.

`mirv_deathmsg lifetimeMod` 将当前高光玩家(红色方框)的击杀信息秒数倍增,即将击杀信息时间调整为当前击杀信息秒数*该指令系数 

## 如何独显击杀信息:

1) `mirv_listentities isPlayer=1` // 记下XUID (将下方命令中<XUID> 替换)
2) `mirv_deathmsg filter clear`
3) `mirv_deathmsg filter add attackerMatch=!x<XUID> victimMatch=!x<XUID> block=1 lastRule=1`

## 如何使特定玩家的击杀信息高光（红色方框）:

1) `mirv_listentities isPlayer=1` // 记下XUID (将下方命令中<XUID> 替换)
2) `mirv_deathmsg localPlayer x<XUID>`

## 更多例子：

更多信息请检索 [HLAE 2.51.0 (2018-07-07T12:44Z) changelog here](https://github.com/advancedfx/advancedfx/releases/tag/v2.51.0).

1) `mirv_deathmsg fake attackerId=4 victimId=5 weapon=ak47 headshot=1` // 此命令会显示UID为4的玩家使用ak47爆头的击杀信息, 仅在第一条击杀信息生成后生效.
2) `mirv_deathmsg localPlayer xTrace` // 将视角切换到对应UID玩家的第一视角.
3) `mirv_deathmsg lifeTime 100.5` //将后续击杀信息显示时间调整为100.5s,清除击杀信息`mirv_deathmsg lifeTime default` (或0)  然后跳转到当前Demo tick.
4) `mirv_deathmsg lifeTimeMod 1.0` // 将当前玩家的后续击杀信息显示时间*1.
5) `mirv_deathmsg lifeTimeMod defaul`t // 重置击杀信息时间倍数调整.
6) `mirv_deathmsg filter add attackerMatch=!xTrace victimMatch=!xTrace block=1 lastRule=1` // 清除除了当前第一视角UID的玩家以外的击杀信息.

## 仅显示多个特定玩家的击杀信息:
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// 对于想显示的击杀信息重复此两个步骤:
mirv_deathmsg filter add attackerMatch=x<XUID> block=0
mirv_deathmsg filter add victimMatch=x<XUID> block=0
```

## 仅显示多个特定玩家的击杀信息与高光 (红色方框):
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// 对于想显示的击杀信息重复此两个步骤:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1 block=0 
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1 block=0
```

## 仅使特定玩家的击杀信息高光（红色方框）
```
mirv_deathmsg localPlayer default
mirv_deathmsg filter clear
mirv_deathmsg filter add attackerIsLocal=0 victimIsLocal=0
// 对于想高光的击杀信息重复此两个步骤:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1
```

# 更多功能

mirv_deatmsg命令及其子命令有更多功能，只需输入不带参数的命令/子命令，即可在控制台中显示帮助。

# 参考

* [Source:Commands](https://github.com/advancedfx/advancedfx/wiki/Source%3ACommands)
