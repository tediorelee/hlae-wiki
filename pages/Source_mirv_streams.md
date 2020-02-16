# 支持的游戏

仅支持CSGO。

# 当前的问题

* 有特定阴影的特定材料显示不精准。
* 因为2016年CSGO的更新，HLAE的阴影替换出现了问题，通道比之前不精准得多（意味着物体matte和景深depth通道和HLAE大更新之前一样不会渲染烟雾，线和绳不会被渲染等）


# 须知

仅可预览一个通道，多通道预览有BUG。

通道创建时默认使用`drawViewModel -1`和`drawHud 0`，你可能想要设置`drawHud -1`（游戏默认设置），见下例。

注意到`mirv_streams edit`的子命令针对于你正在编辑的通道，这意味着不同的通道有不同的选项，有时选项很少。

见[smoother demos guide]()的说明来减少录制时的卡顿延迟。

# 内置指令帮助

使用`mirv_streams`指令弹出的提示并不能覆盖所有可用指令选项。

通常用`mirv_streams xxx` 可以获得当前指令或子指令的帮助。如果帮助在一个子命令后显示`[...]`，把`[...]`替换成任何字符即可获得该子命令的帮助。

如果你输入的指令在`mirv_streams`后的部分有误，它会打印出最接近的子指令的帮助提示。

# 示例

## 1. 添加景深depth通道，预览并简单编辑

添加一个景深通道并命名为`mydepth`：

```
mirv_streams add depth mydepth
```

预览该通道：

```
mirv_streams preview mydepth
```

现在应该可以看到景深通道的预览效果。

接下来为刚才添加的通道设置最大深度值，默认的1024有一些低：

```
mirv_streams edit mydepth depthValMax 4096.0
```

检查深度值是否设置正确，使用如下指令，应该可以显示当前的值：

```
mirv_streams edit mydepth depthValMax
```

## 2. 添加Normal通道

normal通道并没有很多设置的参数，可以用它录制没有任何特殊效果的view。

添加一个Normal通道并命名为`mynormal`：

```
mirv_streams add normal mynormal
```

使用如下指令确保在游戏显示HUD的时候`mynormal`通道也能显示HUD。

```
mirv_streams edit mynormal drawHud -1
```

预览该通道：

```
mirv_streams preview mynormal
```

normal通道专为单独录制额外的常规视角，它比其它通道的选项少很多。

## 3. 添加人物通道并预览

添加一个matteEntity通道并命名为`mymatte`：

```
mirv_streams add matteEntity mymatte
```

预览该通道：

```
mirv_streams preview mymatte
```

## 4. 设置通道录制与否

不妨以`mymatte`通道为例，使用如下指令开启或关闭该通道的录制，1开启，0关闭：

```
mirv_streams edit mymatte record 0
```

检查通道当前录制的状态：

```
mirv_streams edit mymatte record
```

## 5. 停止预览

停止预览有两种方式：

```
mirv_streams preview ""
```

```
mirv_streams previewend
```

## 6. 更完整的示例

## 5. 停止预览通道

停止预览有两种方式：

```
<tt>mirv_streams preview &quot;&quot;</tt> 
```

```
mirv_streams previewend
```

## 6. 一个更完整的例子

## 6. 更完整的例子

如果按照刚才的说明添加了三个通道，请先移除这三个通道。

```
mirv_streams remove mydepth
mirv_streams remove mymatte
mirv_streams remove mynormal
```

下面添加人物通道命名为`ent`，世界通道命名为`wrld`，人物景深通道命名为`dent`，世界景深通道命名为`dwrld`。

```
mirv_streams add matteEntity ent
mirv_streams add matteWorld wrld
mirv_streams add depthEntity dent
mirv_streams edit dent depthValMax 4096
mirv_streams add depthWorld dwrld
mirv_streams edit dwrld depthValMax 4096
```

设置预览无贴纸通道和预览，暂不开启录制：

```
mirv_streams add baseFx nostickers
mirv_streams edit nostickers stickerAction invisible
mirv_streams edit nostickers record 0
mirv_streams preview nostickers
```

### 录制案例：

不妨设置录制文件夹名为`test_rec`（默认为`untitled`），注意此处是相对路径，得到的图片序列和音频在`Counter-Strike Global Offensive\test_rec`文件夹下。

```
mirv_streams record name test_rec
```

也可以可以设置绝对路径：

```
mirv_streams record name "d:\myFolderPath"
```

开始录制：

```
host_framerate 60;
host_timescale 0;
mirv_snd_timescale 1;
mirv_streams record start;
```

录制一段时间，停止录制：

```
mirv_streams record end; host_framerate 0
```

## 添加精度高达23bit的景深通道（OpenEXR）

实际上精度最大大约到23bit，取决于你的显卡和驱动，一般都可达到。

OpenEXR文件的深度值会在通道的`depthVal`和`depthValMax`之间 ，如果深度值不在二者之间，应该在离镜头0.75英尺的位置。小于`depthVal`距离的位置，其深度值均为`depthVal`，大于`depthValMax`距离的位置，其深度值均为`depthValMax`。

有两种方式可以得到高精度景深/OpenEXR

### 最新OpenEXR景深通道设置方式

```
mirv_streams add depth depth
mirv_streams edit depth depthVal 1
mirv_streams edit depth depthValMax 8192 // or higher
mirv_streams edit depth drawZ rgb
mirv_streams edit depth drawZMode linear
mirv_streams edit depth captureType depth24
```

### OpenEXR景深通道 [当前不可用]

```
mirv_streams add depth myDepthF
mirv_streams edit myDepthF depthValMax 8192.0
mirv_streams edit myDepthF captureType depthF
```

如果想要用ZIP压缩OpenEXR文件，则用`depthFZIP`代替`depthF`。

First we tell HLAE to add a depth stream:

```
mirv_streams add depth mydepth24</tt>
```

Next we tell it to raise the maximal distance to 8192.0 (we can do this, since we will have a lot more precision now):

```
mirv_streams edit mydepth24 depthValMax 8192.0
```

Next we tell it to manipulate the stream by making a stream suitable for the depth24 capturing:

```
mirv_streams edit mydepth24 man toDepth24
```

If you want to have the OpenEXR files with ZIP compression (probably slower) use <tt>toDepth24ZIP</tt> instead of <tt>toDepth24</tt>.

## 持枪视角蒙版

> 待修改，已有更好的单独录制持枪视角的方案

如下可得到简易黑白持枪视角蒙版，结合其他通道可以扣出仅含持枪视角的图层：

```
mirv_streams add depth vmm
mirv_streams edit vmm detphVal 15 // 想要灰阶则用7
mirv_streams edit vmm depthValMax 15 
```

# FFMPEG编码录制视频：

根据`.../hlae/ffmpeg/readme.advancedfx.txt`的提示为HLAE安装FFMPEG。

下面是录制120fps，包含normal和景深depth通道的例子。

```
host_framerate 120
mirv_streams add normal norm
mirv_streams edit norm settings afxFfmpegYuv420p
mirv_streams add depth depth
mirv_streams edit depth settings afxFfmpegLosslessBest
mirv_streams record start
```

录制一段时间后，结束录制：

```
mirv_streams record end
```

此外，可以使用`mirv_streams settings`指令自定义录制设置。

注意：许多播放器、剪辑软件和浏览器并不能解码此处的景深通道，所以推荐使用`afxFfmpegYuv420p`而不是`afxFfmpeg`，前者有损但是兼容性更强。

> Purp1e注：官方自带的设置录制速度很慢，想要在速度、画质和文件大小取得平衡，可以参考[ffmpeg.cfg](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/master/ffmpeg.cfg)，中的自定义录制设置和快捷指令。


# 采样系统
HLAE自带一个默认的30fps下采样录制设置，名为`afxSampler30`，如果想要改变设置如修改FPS，请用`mirv_streams settings add [...]`添加一个新的采样，并编辑。

用法示例：

// if you have FFMPEG installed for HLAE, you can use one of those settings (e.g. afxFfmpegYuv420p) instead of afxClassic

如果你已为HLAE安装好FFMPEG，则可使用`afxFfmpegYuv420p`等录制设置代替`afxClassic`（无损tga图片序列）

```
mirv_streams settings edit afxDefault settings afxSampler30
mirv_streams add normal myNorm
mirv_streams settings edit afxSampler30 settings afxClassic
```

开始录制：

```
host_framerate 1200; mirv_streams record start
```

结束录制：

```
mirv_streams record end; host_framerate 0
```

目前请勿使用cascading（H264编码器参数之一），可能会导致问题，因为HLAE在缓冲区放满3张图片后无法继续读入，必须等到缓冲区buffer清空后才可用。

# 相关教学

* [Source:Smoother-Demos]()
* [Removing Volumetric Lights from Depth Passes in HLAE (Picker Method)](https://youtu.be/7Mnbr-3RvPs) by xNWP
* [HLAE Picker Tool (Removing Players)](https://youtu.be/7gIPtqg-Gsg) by Alan Gaming
* [Tutorial: CS:GO Separate HUD Stream]()

- [可参考的CFG](https://github.com/Purple-CSGO/Cfg-Preset-By-Purp1e/blob/master/stream.cfg) by Purp1e