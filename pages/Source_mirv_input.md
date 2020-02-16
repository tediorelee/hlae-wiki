# 子命令

## <tt>mirv_input camera</tt>

启动外挂摄像机模式。

* 它将会覆盖游戏原有的摄像机。
* 控制台窗口打开时 外挂摄像机 操作将会被停用，你需要关闭控制台才可以正常使用。
* 外挂摄像机以外的其他代替选择 <tt>[[mirv_campath|Source:mirv_campath]]</tt> .
* 灵敏度控制在 <tt>mirv_input cfg</tt> 里可以找到。

目前的键位 / 鼠标移动操作方法如下 :

* **退出外挂摄像机**: [ESC]
* **无效键位 将会直接传递**: [CTRL]
* **重置速度和视角**: [HOME],[NUMPAD 5]
* **向前移动**: [W],[NUMPAD 8]
* **向后移动**: [S], [NUMPAD 2]
* **向左移动**: [A], [NUMPAD 4]
* **向右移动**: [D], [NUMPAD 6]
* **向上移动**: [R], [NUMPAD 9]
* **向下移动**: [F], [NUMPAD 3]
* **视野拉近** (增加FOV值值): [PAGE UP], [NUMPAD 7]
* **视野拉远** (减少FOV值): [PAGE DOWN], [NUMPAD 1]
* **向左横滚**: [Z], [NUMPAD 0]
* **向右横滚**: [X], [NUMPAD . (decimal)]
* **向下看**: [DOWN ARROW], 或鼠标往下拉
* **向上看**: [UP ARROW], 或鼠标向前推
* **向左看**: [LEFT ARROW], 或鼠标向左移动
* **向右看**: [RIGHT ARROW], 或鼠标向右移动
* **增加全局速度** (double): <tt>+</tt>
* **减少全局速度** (half): <tt>-</tt>

* 其他未列出的按键将会直接无损传递。

### 第三人称摄像机:

对于GOTV的demo，你应该切换至自由视角 然后再去执行:<br/>
<tt>mirv_input camera</tt>

对于POV的demo，我们建议你执行以下命令:<br />
<tt>sv_cheats 1</tt><br />
<tt>thirdperson</tt><br />
<tt>mirv_input camera</tt>

## <tt>mirv_input cfg</tt>

调整、设置input模式配置文件

* **<tt>mirv_input cfg msens</tt>** : 查询目前的鼠标速度
* **<tt>mirv_input cfg msens _&lt;dValue&gt;_</tt>** : 以浮点值的形式来设置新的鼠标灵敏度 _&lt;dValue&gt;_.
* **<tt>mirv_input cfg ksens</tt>** : 查询目前的键盘灵敏度
* **<tt>mirv_input cfg ksens _&lt;dValue&gt;_</tt>** : 以浮点值的形式来设置新的键盘灵敏度 _&lt;dValue&gt;_.

其实还有许多好用的命令,要查看他们，你只需要在控制台输入 <tt>mirv_input cfg</tt> 就可以查看它们。

## <tt>mirv_input end</tt>

终止目前的input模式

*本篇译者Tuc*

# See also

* [Source:Commands](https://github.com/advancedfx/advancedfx/wiki/Source%3ACommands)
* [mirv_campath|Source:mirv_campath](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_campath)
* [Source:Order of camera overrides](https://github.com/advancedfx/advancedfx/wiki/Source%3AOrder-of-camera-overrides)

