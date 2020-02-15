This command accesses the HLAE / AfxHookSource streams system.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# Current Limitations

* Special materials with special shaders can be problematic (inaccurate)
* Due to breakage in HLAE replacement shaders with the February 17th 2016 CS:GO update, the streams are much less accurate than they used to be before (meaning on the matte / depths streams as before the big HLAE update smoke won't draw, transparent stuff will be problematic, cables/ropes won't draw and so on).


# Things you should know

You should only use the default preview slot (meaning only 1 stream in preview), since the multi-stream preview is bugged.

Streams are created with drawViewModel -1 and drawHud 0 as default for backwards compatiblity. You might want to set the drawHud property to -1 (-1 means use the game default for those two). For examples see below.

You will notice that available sub-commands for <tt>mirv_streams edit</tt> are specific to the stream type you are editing. Meaning some streams have different options than others, some have only a few options.

You should also follow the advice in the [[smoother demos guide|Source:Smoother-Demos]] to reduce jitter/lag in recordings.

# Built in command help / navigation

The manual doesn't cover all the options available through the mirv_streams command. Basically enter the mirv_streams command or it's sub commands to get help for the current (sub-)command. If the help displays a subcommand with <tt>[...]</tt> behind it, then you can enter everything in-front to get more help for that sub-command.

If you mistype anything after mirv_streams, then it will print the most specific (sub-)command help it can find.

# Examples

## 1. Adding a depth stream and previewing it and editing it a bit

To add a depth stream named _mydepth_ enter this:<br />
<tt>mirv_streams add depth mydepth</tt>

Now put the stream into preview:<br />
<tt>mirv_streams preview mydepth</tt>

You should be able to see the depth stream preview now. 

Now lets edit the maximum depth value of the stream we added, since the default of 1024 is a bit low:<br />
<tt>mirv_streams edit mydepth depthValMax 4096.0</tt>

To check if the value has been set properly enter:<br />
<tt>mirv_streams edit mydepth depthValMax</tt><br />
It should display the _current value_.

## 2. Adding a normal stream

A normal stream is simply a stream that doesn't have much possible settings, you can use it to record the view without special effects.

Enter this in console to add a normal stream named _mynormal_:<br />
<tt>mirv_streams add normal mynormal</tt>

Enter this in console to make the stream you just added draw the HUD when the game draws it:<br />
<tt>mirv_streams edit mynormal drawHud -1</tt>

Preview that stream using:<br />
<tt>mirv_streams preview mynormal</tt>

## 3. Adding a matte entity stream and previewing it

Enter this in console to add a matteEntity stream named _mymatte_:<br />
<tt>mirv_streams add matteEntity mymatte</tt>

Preview that stream using:<br />
<tt>mirv_streams preview mymatte</tt>

The normal stream is if you need to record an additional normal view, it has much less options than other streams.

## 4. Marking streams as do not record or record

Enter this in console to mark a stream named _mymatte_ as do not record:<br />
<tt>mirv_streams edit _mymatte_ record 0</tt><br />
This will cause the stream to not be recorded when using <tt>mirv_streams record</tt>.

If you want to check that the setting has been applied enter:
<tt>mirv_streams edit _mymatte_ record</tt><br />
It should display the _current value_.

## 5. Stop previewing a stream

To stop previewing a stream there are two ways:<br />
<tt>mirv_streams preview &quot;&quot;</tt> or <tt>mirv_streams previewend</tt>

## 6. A more complete example

First lets remove the streams from the previous examples (you can skip that if you didn't add them):<br >
<tt>mirv_streams remove mydepth</tt><br />
<tt>mirv_streams remove mymatte</tt><br />
<tt>mirv_streams remove mynormal</tt>

Now let's add a few streams named _ent_ (contains the entities and the world is masked), _wrld_ (contains everything masked or missing in _ent_), _dent_ (depth for _ent_) and _dwrld_ (depth for _wrld_):<br />
<tt>mirv_streams add matteEntity ent</tt><br />
<tt>mirv_streams add matteWorld wrld</tt><br />
<tt>mirv_streams add depthEntity dent</tt><br />
<tt>mirv_streams edit dent depthValMax 4096</tt><br />
<tt>mirv_streams add depthWorld dwrld</tt><br />
<tt>mirv_streams edit dwrld depthValMax 4096</tt>

Now for extra fun (let's pretend we hate weapon stickers), let's add a stream without weapon stickers, that we put into preview but don't record:<br />
<tt>mirv_streams add baseFx nostickers</tt><br />
<tt>mirv_streams edit nostickers stickerAction invisible</tt><br />
<tt>mirv_streams edit nostickers record 0</tt><br />
<tt>mirv_streams preview nostickers</tt>

### Recording example:

Here is a complete example how to record the streams set up above:

First let's set the record name to _test_rec_ (default is _untitled_):<br />
<tt>mirv_streams record name test_rec</tt>

**Hint:** Alternatively you can set a full folderpath i.e. <tt>mirv_streams record name &quot;d:\myFolderPath&quot;</tt>!

Now let's record:<br />
<tt>host_framerate 60; host_timescale 0; [[mirv_snd_timescale|Source:mirv_snd_timescale]] 1; mirv_streams record start</tt>

... record a bit ...

Now stop the recording:<br />
<tt>mirv_streams record end; host_framerate 0</tt>

If everything went well, you should now have the recorded image files and audio file in the <tt>Counter-Strike Global Offensive\test_rec</tt> folder (except if you set another folder path in the steps above, then they will be there).

## Adding a depth stream with up to 23bit precision (OpenEXR):

_The actual accuracy is about 23 bits maximum. Depending on your graphics card and drivers the accuracy can be much lower, however with modern cards and drivers you should be close to the 23 bit maximum accuracy._

Then depth value of the OpenEXR files will be between the stream's depthVal and depthValMax. If it's not exactly one of these values, then the depth value can be assumed to be the actual distance in 12/16 = 0.75 inch from the camera. If the value is the minimum value (depthVal), then the distance is depthVal or less. If the value is the maximum value (depthValMax), the the distance is depthValMax or above.

There are two methods to get high precision depth / OpenEXR support:

### OpenEXR depth stream - The latest way

```
mirv_streams add depth depth
mirv_streams edit depth depthVal 1
mirv_streams edit depth depthValMax 8192 // or higher
mirv_streams edit depth drawZ rgb
mirv_streams edit depth drawZMode linear
mirv_streams edit depth captureType depth24
```

### OpenEXR depthF stream [currently broken]

Enter the following lines into console:<br />
<tt>mirv_streams add depth myDepthF</tt><br />
<tt>mirv_streams edit myDepthF depthValMax 8192.0</tt><br />
<tt>mirv_streams edit myDepthF captureType depthF </tt>

If you want to have the OpenEXR files with ZIP compression (probably slower), then use <tt>depthFZIP</tt> instead of <tt>depthF</tt>.

### OpenEXR depth stream - The oldschool way

**This option is not available at the moment, due to the February 17th CS:GO update!**

**Please note:**
* When using this method *you need to disable any anti aliasing*, because that would cause unwanted artefacts with the colour coded depth information!
* This oldschool method doesn't support alpha blending of depth values, it instead does a binary alpha test and either renders or discards the incoming pixels based on that.

First we tell HLAE to add a depth stream:<br />
<tt>mirv_streams add depth mydepth24</tt><br />

Next we tell it to raise the maximal distance to 8192.0 (we can do this, since we will have a lot more precision now):<br />
<tt>mirv_streams edit mydepth24 depthValMax 8192.0</tt><br />

Next we tell it to manipulate the stream by making a stream suitable for the depth24 capturing:<br />
<tt>mirv_streams edit mydepth24 man toDepth24</tt><br />

If you want to have the OpenEXR files with ZIP compression (probably slower) use <tt>toDepth24ZIP</tt> instead of <tt>toDepth24</tt>.

## Quick view model matte

```
// Quick black and white viewmodel mask:
mirv_streams add depth vmm
mirv_streams edit vmm detphVal 15 // use 7 if you want gray scale
mirv_streams edit vmm depthValMax 15 // note shells ejected are further away, because the game munges the depth of the viewmodel to have it on-top
```

# FFMPEG image stream encoding (to video):

First follow the instructions in `ffmpeg/readme.advancedfx.txt` (in HLAE folder) to install FFMPEG for HLAE.

```
// Example usage:
host_framerate 120
mirv_streams add normal norm
mirv_streams edit norm settings afxFfmpegYuv420p
mirv_streams add depth depth
mirv_streams edit depth settings afxFfmpegLosslessBest
mirv_streams record start
// ...
mirv_streams record end
```

Hint: You can add custom profiles / see the other default profiles by using the mirv_streams settings command.

Notice: Many video programs and browsers can not decode the depth streams, because they are "monochromatic rgb". Also **we recommend afxFfmpeg over afxFfmpegYuv420p, both are lossy**, but the former has better color quality, while many programs and browsers can only handle the latter.


# Sampling System
There is a default 30 down-sampler setting named afxSampler30 in afxSettings. If you want to change settings (e.g. output fps, please add a new sampler using `mirv_streams settings add [...]` and edit that one.

Example usage:
```
mirv_streams settings edit afxSampler30 settings afxClassic // if you have FFMPEG installed for HLAE, you can use one of those settings (e.g. afxFfmpegYuv420p) instead of afxClassic
mirv_streams settings edit afxDefault settings afxSampler30
mirv_streams add normal myNorm

// Start recording:
host_framerate 1200; mirv_streams record start

// End recording:
mirv_streams record end; host_framerate 0
```
Please avoid cascading samplers for now, since that will probably cause problems, since HLAE will refuse to allocate more than 3 image buffers at the same time and just lock up waiting for a buffer to get available.

# Related tutorials

* [[Source:Smoother-Demos]]
* [Removing Volumetric Lights from Depth Passes in HLAE (Picker Method)](https://youtu.be/7Mnbr-3RvPs) by xNWP
* [HLAE Picker Tool (Removing Players)](https://youtu.be/7gIPtqg-Gsg) by Alan Gaming
* [[Tutorial: CS:GO Separate HUD Stream]]

# See also

* [[Source:Commands]]