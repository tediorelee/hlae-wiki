这条指可以让你快速，简单的创建镜头轨迹

# 各类DEMO类型所需要的调整

## GOTV

无, 但建议使用自由视角进行录制。

## POV (第一人称视角) demos

对于POV视角的demo，你应该切换到第三人称模式 然后使用 <tt>mirv_input camera</tt>这条命令，作用如下：
[mirv_input - 第三人称摄像机|Source:mirv_input#third-person-camera]
*（译者注:这里应该是跳转到mirv_input的wiki下吧）*

# 为摄像机添加移动轨迹

<tt>mirv_campath add</tt>

以目前的时间和视角作为来源，添加为一个移动轨迹点. 如果你在一个已经设置过轨迹的时间节点上使用此命令添加，那么将会覆盖上一个的轨迹。

目前你需要至少四个轨迹点才可以正常的调用整个摄像机轨迹。

# 调用目前的摄像机轨迹

<tt>mirv_campath enabled _0|1_</tt>

在这里 1 代表启动摄像机轨迹 0 代表关闭。

目前你需要至少四个轨迹点才可以正常的调用整个摄像机轨迹。

# 在屏幕上显示目前的摄像机轨迹路线图

<tt>mirv_campath draw enabled _**0**|1_</tt>

如果你输入<tt>mirv_campath draw enabled 1</tt> 你的摄像机轨迹图将会被显示出来，前提是你所做的设置没有问题。

## 更改轨迹点显示的图形样式
<tt>mirv_campath draw keyAxis 0|1</tt> (默认 0)

<tt>mirv_campath draw keyCam 0|1</tt> (默认 1)

## mirv_campath draw所支持的Mods

* Counter-Strike: Global Offensice
* 类似于 Source SDK 2013的Mods, 例. Counter-Strike: Source

## 系统需求

* PixelShader version 2.0 可被支持
* VertexShader version 2.0 可被支持

# 清除所有的摄像机轨迹

<zz>mirv_campath clear</tt>

# 查看摄像机轨迹里的摄像机点位信息

<tt>mirv_campath print</tt>

将会显示所有轨迹里的摄像机点位 (点位是否已经经过, 序号, 时间, 位置和转向)和目前时间位置。

# 删除一个点位

<tt>mirv_campath remove _&lt;id&gt;_</tt>

使用 _&lt;id&gt;_,来删除点位，删除需要的点位(序号)id你可以在 <tt>mirv_campath print</tt> 里找到(详情 [[ 查看摄像机轨迹里的摄像机点位信息|Source:mirv_campath#Printing points in the path]] below).

# 载入一个轨迹

<tt>mirv_campath load _&lt;文件名&gt;_</tt>

从文件里载入一个轨迹 _&lt;文件名&gt;_ 文件必须是XML文件，比如通过<tt>mirv_campath save</tt>保存的文件 (详见 [[保存轨迹|Source:mirv_campath#Saving a path]] above.). 格式的相关要求，请查看保存文件里的注释。

如果你没有定义路径，那么HLAE将会默认在(game).exe所在的文件夹下寻找并加载。

目前 载入后的轨迹需要再次手动启动一下:

<tt>mirv_campath enabled 1</tt>

# 保存轨迹

<tt>mirv_campath save _&lt;文件名&gt;_</tt>

将轨迹保存成一个 _&lt;filename&gt;_. XML格式的文件。

如果你没有定义路径，那么HLAE将会默认在(game).exe所在的文件夹下保存。

# 轨迹编辑工具

## 修改轨迹点的起始时间位置

<tt>mirv_campath edit start</tt>

偏移整个目前使用的轨迹 到现在的时间位置。

## 调整一个轨迹的时间长度

<tt>mirv_campath edit duration _&lt;dValue&gt;_</tt>

要调整一个轨迹的时长，你要在_&lt;dValue&gt;_. 里使用浮点数值调整 例:1.000，以秒作为单位， 少数情况下，有可能会因为调整，一些点位会叠加到一个时间点上，会有可能使用最后一个点位的数值(无差值).


## 其他的轨迹编辑工具

还有其他的许多工具可用 (比如. 编辑 位置 / 视野 / 角度，选择一个点位或是修改整个轨迹).

你可以在控制台输入<tt>mirv_campath edit</tt>来获取这些工具的帮助信息 。

# 关键帧选择工具

关键帧可以使用<tt>mirv_campath select</tt>来选择

你可以在不加入任何附加属性的时候输入这条指令，这样它将会显示一些可用的子命令，和一些实例来作为参考。

当关键帧被选择后，  <tt>mirv_campath clear</tt> 和 <tt>mirv_campath edit</tt> 功能将只会在你选择的关键帧上起作用。 如果没有选择任何关键帧，那么它们将依旧会对所有点位起效 
(所以当你删除被选择的关键帧后，届时将无关键帧被选择，所以你最好不要再去执行mirv_campath clear 因为它将会删除你轨迹里所有的点位).

选择的关键帧 / 路径点 将会以反色显示， 前提是 <tt>mirv_campath draw</tt> 已经打开.

_本篇译者Tuc_

# See also

* [[Source:Commands]]
* [[Source:Order of camera overrides]]
