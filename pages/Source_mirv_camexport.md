# 导出摄像机运动数据

## 说明

使用`host_framerate fps`（fps改为数字）指令设置录制帧率，和往常一样录制。不妨设置300fps为例：`host_framerate 300`。

导出路径时也要设置和上述指令的fps值一致，如也设为300。

**fps务必高于最高可能用到的录制FPS**！

## 指令

开始导出`test.bvh`文件，fps为采样帧率，如设置为300：

```
mirv_camexport start test.bvh fps
```

停止导出：

```
mirv_camexport stop
```

## 文件位置

注意，`.bvh`文件固定保存在`csgo.exe`同目录下。

# 参考文章

* [mirv_camimport]()
* [Camera Motion Data]()
* [AfxHookSource](https://github.com/advancedfx/advancedfx/wiki/AfxHookSource)
