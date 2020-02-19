这个指令用于列出一些物体的相关信息。

# 支持的游戏

仅支持CSGO。

# 用法

输入指令

```
mirv_listentities
```

每个已知物体的信息都会打印在控制台的单独一行中。第一行包含了打印信息的说明（类似表头），当前大部分的格式为：

<tt>index (distance): className::enitityName</tt>

----

其中

* <tt>index</tt> 是游戏中物体的序号（比如玩家），可用于如[mirv_aim]()等指令。
* <tt>distance</tt> 是和最后一次游戏内位置的距离。
* `className`（类名）和`entityName`（物体名）用于区分物体。

想要找到一个物体，移动视角到它的旁边，并查看`distance`值。