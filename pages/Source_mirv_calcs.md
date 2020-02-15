This command provides expressions, that can be combined with mirv_cam and mirv_aim to be able to create some unique camera tricks. This system is quite complex and is targetted at advanced users.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# Basic Guide

These commands are only a handful of combinations you can use.  

`mirv_calcs handle add key <name1> <spectator slot number>`  
This will determine which entity or player you want to follow. The slot number of the player can be found on the spectator HUD, on top their avatars. You can also use `mirv_calcs handle add index <name> <index number>` where the index number can be found with `mirv_listentities`.

`mirv_calcs vecAng add handleAttachment <name2> <name1> <attachment name>`  
This will allow you to choose which object you want the camera to attach to. The attachment names can be found in .qc files which need to be decompiled from .mdl files that can be found in the game files. If you are too lazy to do that, we have compiled a list of a few useful attachment names, [listed below](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_calcs#list-of-attachment-names).  

`mirv_calcs vecAng add value <name3> <fX> <fY> <fZ> <rX> <rY> <rZ>`  
This will determine the positioning and rotation of the camera.  

`mirv_calcs vecAng add offset <name4> <name1> <name3> 1`  
This command will move the camera relative to the position and rotation of the object you are attached to. 

`mirv_cam source calcVecAng <name4>`  
 This tells the mirv_cam command to use the `<name4>` as camera position and rotation.  

`spec_mode 5`  
Use this if the model is invisible.  

`mirv_cam source calcVecAngClear`  
This will disable the camera, for when you want to reset the camera back to default.  

**Tip:** You can use `mirv_cam offset <fX> <fY> <fZ> <rX> <rY> <rZ>` to adjust the position and rotation all at once rather than editing the vecAng values one by one.  

# Example #1: Static Face Camera

`mirv_calcs handle add key key0 0`  

`mirv_calcs vecAng add handleAttachment key0 key0 facemask`  

`mirv_calcs vecAng add value ofsFaceMask 67 0 0 0 0 179.9`  

`mirv_calcs vecAng add offset ofsKey0 key0 ofsFaceMask 1`  

`mirv_cam source calcVecAng ofsKey0`

# Example #2: Static Active Weapon Camera ([Video](https://www.youtube.com/watch?v=WtKC8uz57o8) by Z8)

`mirv_calcs handle add index name1 3`  

`mirv_calcs handle add activeWeapon name2 name1 1`  

`mirv_calcs vecAng add handleAttachment name3 name2 muzzle_flash`  

`mirv_calcs vecAng add handleAttachment name4 name2 weapon_hand_R`  

`mirv_calcs vecAng add or name5 name3 name4`  

`mirv_calcs vecAng add value name6 20 0 0 0 0 179.9`  

`mirv_calcs vecAng add offset name7 name5 name6 1`  

`mirv_cam source calcVecAng name7`

# List of Attachment Names

You can use these for handleAttachment to let the camera focus on that specific attachment of a model / entity object.

## Player model attachments

### Body
* facemask 
### Equipment
* c4
* grenade0
* grenade1
* grenade2
* grenade3
* grenade4
* defusekit
### Weapons
* knife
* pistol
* weapon_hand_L
* weapon_hand_R 

## Weapon model attachments

* muzzle_flash

# Example config

- priusfx_20190125T1132Z.zip: https://drive.google.com/open?id=14frey2ImG5TxnK5q1Ct2mAnH7B_pO7Yh
