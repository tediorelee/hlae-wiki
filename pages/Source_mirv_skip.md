使用这条指令可在demo的不同时间点来回跳跃，它是指令`demo_gototick`的前端应用。

# 支持的游戏

* CSGO

可能支持一些其他起源游戏，但是并不清楚。

# 内置指令提示

输入`mirv_skip`获取内置提示，如果有一行包含`[...]`，说明可以得到该行子命令的进一步的帮助和提示。

# 示例

向后跳跃大约100tick：

```
mirv_skip tick 100
```

向前跳跃大约200tick：

```
mirv_skip tick -200
```

大致跳跃到10000tick处：

```
mirv_skip tick to 10000
```

向后跳跃大约10s：

```
mirv_skip time 10
```

向前跳跃大约2.5s：

```
mirv_skip time -2.5
```

大致跳跃到Demo时间173.5s处：

```
mirv_skip time to 173.5
```