这条指令支持从普通游戏音频中分离各种声音、录制音频，同样可以屏蔽特定的声音。

# 支持的游戏

仅支持CSGO。

# mirv_voice block

这条指令可以屏蔽特定物体或玩家的声音

请在控制台中输入`mirv_voice block`来获得进一步的指令帮助说明。

# mirv_voice record

这条指令可将玩家语音分离开来，并可录制得到独立的音频文件（每个玩家或物体占用一个音频）。

## mirv_streams

当使用（见）`mirv_streams`指令录制时并不需要这条指令，可以简单设置`mirv_streams record voices 1`使得通道录制的时候同时录制语音

## 单独录制玩家语音音频

在控制台中输入以下指令，可在减小游戏音频中的玩家语音的音量，同时能单独录制玩家语音：

`sv_cheats 1; snd_setmixer voip vol 0` （默认值 0.7 ）

## 音频文件名

音频文件 `entity_xxx.wav` 中 `xxx` 是物体序号。 这个序号和 `voice_show_mute` 指令显示出的序号一致。

## 更多选项

请在控制台中输入`mirv_voice record`来获得进一步的指令帮助说明。