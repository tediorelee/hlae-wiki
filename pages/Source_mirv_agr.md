* # 支持的游戏

  - 反恐精英：全球攻势
  - 反恐精英：起源 v34
  - 军团要塞2

  # 简介

  AdvancedFX Game Recording (AGR) 是一种特殊的录制方式。其录制所得运动信息等可以导入3D软件[Blender](https://www.blender.org/)。

  # 使用须知

  - 请使用至少30fps的帧率录制！在更高的帧率下录制同样可以进行，但效果很可能受到动作本身帧率限制。
  - 为了在反恐精英：全球攻势中录制更流畅，请查阅[Demo平滑处理指导](https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos)。
  - 录制所得文件体积取决于时长、录制设置和动作复杂度等。

  # 指令

  ## 仅使用[mirv_streams](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_streams)(反恐精英：全球攻势)

  ```
  host_timescale 0; 
  host_framerate 30; 
  mirv_streams record agr enabled [...]; 
  mirv_streams record agr recordPlayers [...]; 
  mirv_streams record agr recordCamera [...]; 
  mirv_streams record agr recordWeapons [...];
  mirv_streams record agr recordProjectiles [...];
  mirv_streams record agr recordViewmodel [...]; (不建议使用)
  mirv_streams record agr recordInvisible [...]; (不建议使用) 
  
  ```

  ## 不使用[mirv_streams](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_streams)(反恐精英：全球攻势、反恐精英：起源 v3、军团要塞2)

  ```
  host_timescale 0 
  host_framerate 30
  mirv_agr enabled [...] - 启用/禁用录制 (如果确实需要使用AGR功能，务必在载入Demo之前设置此项为1)
  mirv_agr recordCamera [...]
  mirv_agr recordPlayers [...]
  mirv_agr recordWeapons [...]
  mirv_agr recordProjectiles [...]
  mirv_agr recordViewmodel [...]
  mirv_agr recordInvisible [...]
  mirv_agr debug 0|1|2 - 调试功能选项
  mirv_agr start <FilePath\Name.agr> - 设置录制文件路径及文件名
  mirv_agr stop - 停止录制
  
  ```

  # 导入

  为了将AGR文件导入[Blender](https://www.blender.org/)，你需要安装 AFX-Blender-Scripts 和 Blender Source Tools。下载地址如下：

  用于Blender 2.8或更高版本: [AFX-Blender-Scripts](https://github.com/advancedfx/afx-blender-scripts/releases/) [Blender Source Tools](http://steamreview.org/BlenderSourceTools)

  # 使用例（反恐精英：全球攻势）

  ## 1. 选择需要的指令

  ```
  host_timescale 0; 
  host_framerate 30; 
  mirv_streams record agr enabled 1; 
  mirv_streams record agr recordPlayers 1;
  mirv_streams record agr recordCamera 1; 
  mirv_streams record agr recordWeapons 0;
  mirv_streams record agr recordProjectiles 0;
  mirv_streams record agr recordViewmodel 0; 
  mirv_streams record agr recordInvisible 1; 
  
  ```

  使用以上指令只会录制人物模型，并且跑步等动作与死亡动画是分开的。使用"record agr recordInvisible 0"则不会录制被监视的人物，但跑步等动作与死亡动画将被合并。在这个例子中，为了优化性能，武器、视图模型和投掷物（飞行道具）均未被录制。如果需要的话，可以选择录制它们。

  优点：

  - 文件体积较小
  - 导入用时较短
  - 动作改变较灵活（例如可以使用自定义死亡动画）
  - 武器可替换（例如使用M4A4替换AK-47）

  缺点：

  - 第一人称视角需自行制作（跑步时手臂晃动，枪械模型晃动等）
  - 武器掉落动画需自行制作

  ## 2. 录制

  - 默认保存路径为`Counter-Strike Global Offensive\untitled_rec\takexxxx`.
  - 录制前请查阅 [Source:Smoother-Demos](https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos)。
  - [CS:GO mirv_stream](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_agr#counter-strike-global-offensive-only-with-mirv_streams) 所需指令：

  ```
  mirv_streams record start
  mirv_streams record end
  
  ```

  ## 3. 模型反编译

  方法一：

  - 1. 下载[GCFScape](http://nemesis.thewavelength.net/?p=26)和[Crowbar](https://steamcommunity.com/groups/CrowbarTool)。
  - 2. 在GCFScape中打开`Counter-Strike Global Offensive\csgo`目录下的 `pak01_dir.vpk` 文件。
  - 3. 在`Root > Models`目录下找到`Players`和`Weapons`文件夹并将其提取出来。
  - 4. 打开Crowbar，启用`Folder for each model`选项，然后将提取的文件夹反编译。
  - 5. 新建一文件夹（例如CSGO）并在其中再新建一`models`文件夹，将反编译所得模型移动至此。

  方法二：下载[Devostated氏反编译模型](http://thatnwp.com/3D/CSGO%20Models%20Decompiled%20with%200.56.rar)。

  ## 4. 配置Blender及AGR的导入

  - 1. 确保正确安装及启用AFX-Blender-Scripts 和 Blender Source Tools。删除默认场景（小方块，灯光及摄像机），设置帧率为30fps。执行`File > Save Startup File`命令。
  - 2. 启用控制台`(Window > Toggle System Console)`以监视进程及错误。
  - 3. 执行`File > Import HLAE afxGameRecord (.agr)`命令。
  - 4. 打开存放AGR文件的目录`(默认为Counter-Strike Global Offensive\untitled_rec\takexxxx)`。
  - 5. 添加存放模型文件的目录（例如`C:\Users%USERNAME%\Desktop\CSGO`），设置所需导入选项。
       ![](https://user-images.githubusercontent.com/30211694/71773957-a3d47180-2f66-11ea-8cd9-1bc68c52447e.png)

  - 5.1 你可以自行变更设置，例如：

  `Add interpolated key frames`
  `Scale`
  `Scale invisible to zero (无论录制时如何设置recordInvisible，启用此选项即更改为0)`
  `Skip Physic Meshes (导入时跳过碰撞体积信息，这样你将不用手动删除它们，导入用时将缩短)`
  `Bones (skeleton) only (启用此项可缩短导入用时；如果你需要将AGR导出至其他软件，如UE4、Maya或C4D，建议启用此选项)`
  `Model instancing (启用此项以避免今后导入相同的模型)`

  - 6. 双击AGR文件或单击`import`按钮以导入AGR。
  - 7. 尽情创作吧！

  ## 4.1 导出

  - 为了将AGR文件导出至其他3D软件中，请使用如下设置：

  ![](https://user-images.githubusercontent.com/30211694/71773950-8bfced80-2f66-11ea-9ab2-717e866e9df5.png)

  ## 4.2 使用[Darkhandrob氏CSGO-AGR-Import-Export-FBX脚本](https://github.com/Darkhandrob/CSGO-AGR-Import-Export-FBX)实现导入/导出

  ### 简介

  - 该脚本为虚幻4引擎用户制作，可实现AGR自动导出为FBX
  - 支持导出当前打开的AGR文件（`File > Export > AGR Export FBX`）
  - [特性一览表](https://github.com/Darkhandrob/CSGO-AGR-Import-Export-FBX#features)

  ### 直接导出

  - 1. 确保正确安装及启用AFX-Blender-Scripts 和 Blender Source Tools。删除默认场景（小方块，灯光及摄像机），设置帧率为30fps。执行`File > Save Startup File`命令。
  - 2. 启用控制台`(Window > Toggle System Console)`以监视进程及错误。
  - 3. 执行`File > Import > AGR Import and Export FBX`命令。
  - 4. 打开存放AGR文件的目录`(默认为Counter-Strike Global Offensive\untitled_rec\takexxxx)`。
  - 5. 添加存放模型文件的目录（例如`C:\Users%USERNAME%\Desktop\CSGO`），设置所需导入选项，以及存放导出文件的路径。
  - 6. 双击AGR文件或单击`CSGO AGR Import-Export FBX`按钮以导入AGR。
  - 7. 查看导出的FBX文件。

  # 相关教程

  [如何将AGR文件导入Unreal Engine、C4D或Maya等软件](https://www.youtube.com/watch?v=HAy_Tuckp8o)  （Devostated 制作）

  # 另请查阅

  - [Source:Commands](https://github.com/advancedfx/advancedfx/wiki/Source%3ACommands)
  - [Source:mirv_streams](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_streams)
  - [Source:Smoother-Demos](https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos)