# 说明

这条指令用于设置`Field Of View`，即FOV，`视场角`。FOV值在1~179°之间，`defalut`为游戏默认的值。

# 用法

## 一般用法

不妨把fov设置为100

```
mirv_fov 100
```

恢复默认的fov（大约95）

```
mirv_fov default
```

## 解决开镜缩放问题

某次CSGO更新后，`fov_cs_debug`指令更改导出出现了开镜缩放问题（开镜时视角FOV没有变化），首先确保关闭它：

```
fov_cs_debug 0
```

然后使用该指令解决缩放问题：

```
mirv_fov handleZoom enabled 1
```

更改FOV应使用`mirv_fov`指令，见上文，例如：

```
mirv_fov 105
```

>  对CSGO以外的游戏，可能要输入指令`mirv_fov handleZoom`，获得更多帮助。

# 其他

FOV值会被摄像机路径记录（摄像机位置和FOV值都可随路径改变），见[mirv_campath]()。然而因为技术原因在导入导出摄像机路径时会被忽略，见[mirv_camimport]()和[mirv_camexport]()

回放摄像机路径之前（见[mirv_campath]）, 除非想要FOV值被覆盖，请设置`mirv_fov default`。因为摄像机设置会按照如下顺序加载和覆盖：

1. mirv_campath
2. mirv_camimport
3. mirv_fov
4. mirv_input camera


