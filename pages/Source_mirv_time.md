添加了暂停时间的功能 / mirv_time, HLAE大多数的功能（比如 campaths）都尽可能的支持:

mirv_time mode: 目前支持 curTime（旧行为，当demo暂停时暂停）和 resumePaused（当暂停时恢复时间）

黄鱼注：curTime：切换至暂停状态，暂停resumePaused中的时间；resumePaused：当demo暂停时开始播放resumePaused中的时间

mirv_time pausedTime: 打印 / 设置当前 resumePaused 的值（添加到 curTime）。

请注意，时间切换有副作用：例如像mirv_aim和mirv_cals的有状态特性的指令。

专业提示：你可以使用mirv_cmd添加安排暂停来取消暂停（然后mirv_cmd save / load 去保存到一个XML文件 / 从一个XML文件加载），还应该和mirv_time pausedTime（值例如为0）相结合。

# 参考

* [Source:Commands](https://github.com/advancedfx/advancedfx/wiki/Source%3ACommands)