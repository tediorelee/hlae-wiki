# 说明

CSGO的控制台不支持引号`"`的嵌套，如想在指令里输出中文等非字母数字下划线非常困难，使用`mirv_exec`指令可以支持引号嵌套，精简Config中的指令。

# 使用方法

`mirv_exec ...`  用 `{QUOTE}` 代替 `"`

### 示例

```
mirv_exec bind x "echo {QUOTE}你好{QUOTE}"
```

```
mirv_exec alias mute "volume 0;echo {QUOTE}已静音{QUOTE}"
```

