This command is for aiming the camera at a target (i.e. player or any other entity or a point on the map).

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# Built in command help / navigation

The manual doesn't cover all the options available through the mirv_aim command. Basically enter the mirv_aim command or to get help for the command. If the help displays a subcommand with <tt>[...]</tt> behind it, then you can enter everything in-front to get more help for that sub-command.

# Priority

See [[Source:Order of camera overrides]].

# Mini tutorials

## Aiming at an entity or player

### Finding a player - The easy way

Just enter <tt>voice_show_mute</tt> into console to get a current player list:

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

Note down the number to the left, which is the current entity index of the player.

### Finding an player or other entity - The hard way

First we move the camera near the entity / player we want to aim at. For that we pause the demo (<tt>demo_pause</tt>) and move the camera using <tt>[[mirv_input|Source:mirv_input]] camera</tt>.

Then we use [[mirv_listentities|Source:mirv_listentities]] in order to get the entity index:

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

The idea is to look at the distance from the camera to the entity origin, which is the second number in the round brackets.

You will notice that there are more players in the game than we saw with the other method. This is because we are using a GOTV demo. With the info form <tt>voice_show_mute</tt> above , we can conclude what is what:

* #1 is probalby the entity for the GOTV viewer (you), the reason it's so far away is because the net origin is not updated (only the view origin is), the view origin is actually pretty close to your camera.
* #2 is the GOTV observer / camera man / autodirector
* #3 is an real observer

Again write down the number of the entity you found this way, it's the index (left-most number).

### Aiming and moving around

Now we got the number of the entity we want to aim at, in my case I picked 4, which happens to be _TaZ g2a.com_.

I tell mirv_aim to aim at that entity index:

```
] mirv_aim entityIndex 4
```

Next I enable the aiming system:

```
] mirv_aim active 1
```

By now the camera should already point at the player.

If you want to move around with the keyboard, then you need to enable <tt>[[mirv_input|Source:mirv_input]] camera</tt> mode:

```
] mirv_input camera
```

Now you can move around using the keys (please look them up in the [[mirv_input|Source:mirv_input]] article) for forward, back, left, right, up, down.

**If you want to tilt the camera**, you need to tell mirv_aim to use the up vector from the previous camera states (in our case mirv_input, but could be also from mirv_campath or the game itself):

```
] mirv_aim up input
```

If you want the camera re-aiming to be smoother, just disable snapTo:

```
] mirv_aim snapTo 0
```

Don't forget to end mirv_input camera mode ;)

**Note:** You can change / control the aiming system based on current (game) time through it's commands using [[mirv_cmd|Source:mirv_cmd]] / [Valve's demoui PlayCommands](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools#Demo_editor).

# See also

* [[Source:Commands]]
* [[mirv_listentities|Source:mirv_listentities]]
* [[Source:Order of camera overrides]]