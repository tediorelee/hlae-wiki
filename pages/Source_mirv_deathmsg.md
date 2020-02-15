This command allows to filter death notifications and to control the death notification display time.

# Supported games

Only Counter-Strike: Global Offensive is supported!


# Script by Chet Jong

This script toggles on/off to limit the death notices to the currently spectated player.

```
alias "localplayer" "localplayer_on"
alias "localplayer_on" "mirv_deathmsg filter add attackerMatch=!xTrace block=1 lastRule=1;alias localplayer localplayer_off;echo KILLFEED: ONLY LOCAL PLAYER"
alias "localplayer_off" "mirv_deathmsg filter clear;alias localplayer localplayer_on;echo KILLFEED: DEFAULT"

unbind h
bind "h" "localplayer" 
```

# Examples

## Display time of death notifications

`mirv_deathmsg lifetime` Allows to set the display time of normal death notices in seconds. To clear notices set `mirv_deathmsg lifeTime default` (or even 0) and jump back to i.e. round start.

`mirv_deathmsg lifetimeMod` Is a multiplier in seconds for the localPlayer (red border), so the display time of those notices is lifetime * lifetimeMod

## How to block everything but a specific player:

1) `mirv_listentities isPlayer=1` // note down the XUID (replace <XUID> below with it)
2) `mirv_deathmsg filter clear`
3) `mirv_deathmsg filter add attackerMatch=!x<XUID> victimMatch=!x<XUID> block=1 lastRule=1`

## How to highlight (red border) a specific player:

1) `mirv_listentities isPlayer=1` // note down the XUID (replace <XUID> below with it)
2) `mirv_deathmsg localPlayer x<XUID>`

## More examples

Some info can be found in the [HLAE 2.51.0 (2018-07-07T12:44Z) changelog here](https://github.com/advancedfx/advancedfx/releases/tag/v2.51.0).

1) `mirv_deathmsg fake attackerId=4 victimId=5 weapon=ak47 headshot=1` // will make a death notice for the player with userID 4 killing the player with userId 5 with an headshot from ak47, will only work if one death message has been shown already.
2) `mirv_deathmsg localPlayer xTrace` // sets the current POV player as localPlayer by their XUID.
3) `mirv_deathmsg lifeTime 100.5` // sets the next default death notice life time to 100.5 seconds, to clear notices set `mirv_deathmsg lifeTime default` (or even 0) and jump back to i.e. round start.
4) `mirv_deathmsg lifeTimeMod 1.0` // sets the next default death notice life time multiplier for local player time 1.
5) `mirv_deathmsg lifeTimeMod defaul`t // Restores default life time multiplier.
6) `mirv_deathmsg filter add attackerMatch=!xTrace victimMatch=!xTrace block=1 lastRule=1` // block all death messages except of the player by XUID in the current POV.

## Block everything except specific multiple players:
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// Repeat these two for every player <XUID> you want to see:
mirv_deathmsg filter add attackerMatch=x<XUID> block=0
mirv_deathmsg filter add victimMatch=x<XUID> block=0
```

## Block everything except specific multiple players + highlight (red-border):
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// Repeat these two for every player <XUID> you want to see:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1 block=0 
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1 block=0
```

## Highlight (red-border) only specific multiple players, without blocking
```
mirv_deathmsg localPlayer default
mirv_deathmsg filter clear
mirv_deathmsg filter add attackerIsLocal=0 victimIsLocal=0
// Repeat these two for every player <XUID> you want to highlight:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1
```

# More options

There are more options for the mirv_deathmsg command and it's subcommands, just enter the command / subcommand without parameters to get a help printed in console.

# See also

* [[Source:Commands]]
