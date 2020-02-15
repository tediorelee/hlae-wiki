[<img alt="AfxHookGoldSrc features image" src="https://user-images.githubusercontent.com/3610128/63039368-6ee65600-bec3-11e9-9fa0-ada88a9643e0.jpg" width="400" height="225">](https://user-images.githubusercontent.com/3610128/63039368-6ee65600-bec3-11e9-9fa0-ada88a9643e0.jpg)

# About

AfxHookSource is a small hook for the Source engine for movie makers. It only has very few Commands. The supported Source engine games are listed at _Installation_ (below), however you can try for your game too and tell us the results.

# Installation

Download from the official website ( http://advancedfx.org/ ) and extract the latest HLAE.

## Loading Counter-Strike Global Offensive

This is also available as YouTube tutorial by proutounz:<br />
[![thumbnail](https://img.youtube.com/vi/NvOxxii8J88/default.jpg)https://youtu.be/NvOxxii8J88](https://youtu.be/NvOxxii8J88)

Start HLAE.exe.

Open the CS:GO launcher: <tt>HLAE -&gt; Menu -&gt; File -&gt; Launch CS:GO</tt>

* Game: select the csgo.exe in the <tt>..\Steam\steamapps\common\Counter-Strike Global Offensive</tt> folder here.
* Movie making config parent folder: allows to select the parent folder where your <tt>cfg</tt> folder will be created / located. Click the <tt>What's this?</tt> button for more help.
* Graphic Resolution: allows to set resolution easily (this will just be added as command-line arguments to the game, so the actual results depend on the game).
* Custom command line options: allows to set custom command line options to be passed to the game
 * also add these: ...: You should leave this option checked in order to avoid risking VAC bans.

Click Launch.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Loading Counter-Strike Source

**For the old CSSV34 version see [Loading CSSV34 (old Counter-Strike Source)](#loading-cssv34-old-counter-strike-source) below.**

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Counter-Strike Source</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game cstrike</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Loading Day Of Defeat Source

Start HLAE.exe.

Open the custom loader: <tt>HLAE -&gt; Menu -&gt; Tools -&gt; Developer -&gt; Customloader </tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Day of Defeat Source</tt> folder.
* CommandLine: <code><nowiki>-steam -insecure +sv_lan 1 -window -console -game dod</nowiki></code>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Loading CSSV34 (old Counter-Strike Source)

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe of CSSV34.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game cstrike -afxV34</tt>

Attention: the -afxV34 parameter is case sensitive!

Click okay.
If launching was successful you should see a console message by advancedfx.org.

## Loading Alien Swarm

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the swarm.exe in the <tt>..\Steam\steamapps\common\Alien Swarm</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -game swarm -w 1280 -h 720</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Loading Insurgency (stand-alone game) 32bit version

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the insurgency.exe in the <tt>..\Steam\steamapps\common\insurgency2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -w 1280 -h 720</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

**It is not known if -insecure is enough, SO DO NOT JOIN ANY SERVERS, also might be a good idea to turn off the Battle Eye client or even un-install it first.**

## Loading Left 4 Dead 2

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the left4dead2.exe in the <tt>..\Steam\steamapps\common\Left 4 Dead 2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -game left4dead2 -w 1280 -h 720</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Loading Garry's Mod

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\GarrysMod</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game garrysmod</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

# Features

* [[easy smooth camera paths|Source:mirv_campath]]
* [[And a few more ...|Source:Commands]]

# [[Commands|Source:Commands]]

The command reference / list for AfxHookSource.

# [[Tutorials]]