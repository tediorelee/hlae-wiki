# 导入摄像机运动数据

## 说明

请务必确保运动数据`.bvh`的采样帧率fps高于最高可能用到的录制FPS。

## 指令

路径导入(从当前时间开始)：

```
mirv_camimport start test.bvh
```

停止导入：

```
mirv_camimport stop
```

查看当前时间：

```
mirv_camexport timeinfo
```

查看和改变已经导入的路径的开始时间：

```
mirv_camimport basetime
```

## 文件位置

注意，`.bvh`文件固定保存在`csgo.exe`同目录下。

## 注意

暂停demo的同时路径也会暂停

# 参考文章

* [mirv_camexport]()
* [Camera Motion Data]()
* [Source:Commands]()
* [AfxHookSource]()
* [Source:Order of camera overrides](https://github.com/advancedfx/advancedfx/wiki/Source%3AOrder-of-camera-overrides)