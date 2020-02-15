# Supported Games

* Counter-Strike: Global Offensive
* Counter-Strike: Source v34
* Team Fortress 2

# What does it do?

* AdvancedFX Game Recording (AGR) is a recording method which allows you to import recorded motion data into the 3D software [Blender](https://www.blender.org/).


# Things you should know
* 30 fps is a must have! Higher framerates can work, but will mostly end up in stuttering PoV animations.
* To get smoother recordings in CS:GO make sure to follow the [[Smoother Demos guide|https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos]]
* The size of your AGR depends on length, recorded [features](#commands) and animations.


# Commands

## Counter-Strike: Global Offensive ONLY with [[mirv_streams|Source:mirv_streams]]
```
host_timescale 0; 
host_framerate 30; 
mirv_streams record agr enabled [...]; 
mirv_streams record agr recordPlayers [...]; 
mirv_streams record agr recordCamera [...]; 
mirv_streams record agr recordWeapons [...];
mirv_streams record agr recordProjectiles [...];
mirv_streams record agr recordViewmodel [...]; (Not Recommended)
mirv_streams record agr recordInvisible [...]; (Not Recommended) 
```

## CS:GO, CS:S v34 and TF2 without [[mirv_streams|Source:mirv_streams]]
```
host_timescale 0 
host_framerate 30
mirv_agr enabled [...] - Enable / disable recording (Has to be enabled before loading the demo if you want to use AGR!).
mirv_agr recordCamera [...]
mirv_agr recordPlayers [...]
mirv_agr recordWeapons [...]
mirv_agr recordProjectiles [...]
mirv_agr recordViewmodel [...]
mirv_agr recordInvisible [...]
mirv_agr debug 0|1|2 - Debug level
mirv_agr start <FilePath\Name.agr>
mirv_agr stop - Stop recording.
```

# Import 


In order to import an AGR file to [Blender](https://www.blender.org), you have to download and install the [AFX-Blender-Scripts](https://github.com/advancedfx/afx-blender-scripts) and [Blender Source Tools](http://steamreview.org/BlenderSourceTools). 
Please choose the right script versions here:

Blender 2.8 or later:
[AFX-Blender-Scripts](https://github.com/advancedfx/afx-blender-scripts/releases/)
[Blender Source Tools](http://steamreview.org/BlenderSourceTools)

# Example (CSGO)

## 1. Choose your commands

```
host_timescale 0; 
host_framerate 30; 
mirv_streams record agr enabled 1; 
mirv_streams record agr recordPlayers 1;
mirv_streams record agr recordCamera 1; 
mirv_streams record agr recordWeapons 0;
mirv_streams record agr recordProjectiles 0;
mirv_streams record agr recordViewmodel 0; 
mirv_streams record agr recordInvisible 1; 
```

With these commands you will only record the Character Models and **splits up** the Running- and Death animation. **"record agr recordInvisible 0" won't record the spectated Player, but Running- and Death animation will be merged together.** Weapons, viewmodel and grenades(Projectiles) are disabled in this example for better performance, but can be enabled for sure! Weapons and viewmodel can be easily added afterwards.

Pro and cons:
+ Smaller file size
+ Decreasing import time
+ More flexibility in terms of Animations (e.g. custom death animations)
+ Changing Weapon (e.g. using a M4A4 instead of AK-47)
- You have to do the PoV and PoV-bobbing manually (How the weapon bounces while running)
- Weapon drop animations (dropping and dying) have to be done manually


## 2. Recording

* The default save path is <tt>Counter-Strike Global Offensive\untitled_rec\takexxxx</tt>.
* Follow the [[Source:Smoother-Demos]] before recording. Which prevets your Demo from lags.
* Commands for the [CS:GO mirv_stream](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_agr#counter-strike-global-offensive-only-with-mirv_streams) method:
```
mirv_streams record start
mirv_streams record end
```

## 3. Decompiling Models

Method 1:
* 1: Download [GCFScape](http://nemesis.thewavelength.net/?p=26) and [Crowbar](https://steamcommunity.com/groups/CrowbarTool)
* 2: Open the <tt>pak01_dir.vpk</tt> with GCFScape inside your <tt>Counter-Strike Global Offensive\csgo</tt> folder
* 3: Go to <tt>Root > Models > Players / Weapons</tt> and extract the folders.
* 4: Open Crowbar, enable the option <tt>Folder for each model</tt> and decompile the Player / Weapons folder.
* 5: Create a new folder called e.g.  <tt>CSGO</tt>, create another folder inside called <tt>models</tt> and move the decompiled Players and Weapons folders inside there.

Method 2:
Download [Devostated's Decompiled Models](http://thatnwp.com/3D/CSGO%20Models%20Decompiled%20with%200.56.rar) with fixed .SMDs for less errors and extra models and animations.


## 4. Setting up Blender and importing AGR

* 1: After installing and enabling both Blender scripts, delete the *Default Scene* (Cube, Light and Camera) change the frame rate to 30 fps and go to <tt>File > Save Startup File </tt>.
* 2: Enable the console <tt>(Window > Toggle System Console)</tt> to see any errors and progress.
* 3: Go to <tt>File > Import HLAE afxGameRecord (.agr) </tt>
* 4: Open the folder of your AGR <tt>(Default: Counter-Strike Global Offensive\untitled_rec\takexxxx)</tt>. 
* 5: Add the path of your Decompiled Models folder (e.g. <tt>C:\Users\%USERNAME%\Desktop\CSGO)</tt>. and get your import settings. 

![](https://user-images.githubusercontent.com/30211694/71773957-a3d47180-2f66-11ea-8cd9-1bc68c52447e.png)
* 5.1: You can change different options such as:
  * `Add interpolated key frames`
  * `Scale`
  * `Scale invisible to zero` (*recordInvisible 1* will be hidden if it's not supposed to be e.g. Running Players after death)
  * `Skip Physic Meshes` (Skips collision boxes, so you don't have to remove them manually and leads to faster import time)
  * `Bones (skeleton) only` (This will decrease the time to import. I recommend to you use it, if you plan to export your AGR to another program like UE4, Maya or C4D)
  * `Model instancing` (Instances Models instead of reimporting the same models again)
* 6: Double click the AGR file or hit `Import` to import the AGR file.
* 7: Enjoy your AGR.

## 4.1 Export
* For the export of your AGR to other 3D programs you need following settings:
![](https://user-images.githubusercontent.com/30211694/71773950-8bfced80-2f66-11ea-9ab2-717e866e9df5.png)

## 4.2 Import and Export w/ [Darkhandrob's CSGO-AGR-Import-Export-FBX script](https://github.com/Darkhandrob/CSGO-AGR-Import-Export-FBX)

### What is it and what does it do?
* It's made for Unreal Engine 4 users and automatically exports your AGR as FBX
* Also can export the current loaded AGR (<tt>File > Export > AGR Export FBX</tt>)
* [List of all features](https://github.com/Darkhandrob/CSGO-AGR-Import-Export-FBX#features)

* Direct Export
  * 1: After installing and enabling both Blender scripts, delete the *Default Scene* (Cube, Light and Camera) change the frame rate to 30 fps and go to <tt>File > Save Startup File </tt>.
  * 2: Enable the console <tt>(Window > Toggle System Console)</tt> to see any errors and progress.
  * 3: Go to <tt>File > Import > AGR Import and Export FBX</tt>
  * 4: Open the folder of your AGR <tt>(Default: Counter-Strike Global Offensive\untitled_rec\takexxxx)</tt>. 
  * 5: Add the path of your Decompiled Models folder, get your import settings and **set your Export Path**.
  * 6: Double click the AGR file or hit `CSGO AGR Import-Export FBX` to import the AGR file.
  * 7: Enjoy your FBX files.


# Related tutorials
* [How to Import AGR v4 to Unreal Engine, C4D, Maya etc.](https://www.youtube.com/watch?v=HAy_Tuckp8o) by Devostated

# See also

* [[Source:Commands]]
* [[Source:mirv_streams]]
* [[Source:Smoother-Demos]]