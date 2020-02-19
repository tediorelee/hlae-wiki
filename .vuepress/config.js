module.exports = {
  title: 'HLAE', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'HLAE中文WiKi', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/HLAE.png'
      }
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],

  markdown: {
    lineNumbers: true,
  },

  serviceWorker: true,

  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {

    smoothScroll: true,

    // sidebar: 'auto',

    logo: '/HLAE.png', //网页顶端导航栏左上角的图标

    lastUpdated: '上次更新',

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      {
        text: '首页',
        link: '/'
      },

      {
        text: '论坛',
        link: 'http://175.24.0.251:4567/'
      },

      {
        text: 'Github',
        link: 'https://github.com/tediorelee/hlae-wiki'
      },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/':[
          {
              title: '简介',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  ['home.md', 'Home(已翻译)'],
                  ['AfxHookSource.md', 'AfxHookSource'],
                  ['AfxHookGoldSrc.md', 'AfxHookGoldSrc']
              ]
          },
          {
              title: '指令',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['Source_afx_interop.md', 'Source_afx_interop'],
                  ['Source_mirv_aim.md', 'Source_mirv_aim(已翻译)'],
                  ['Source_mirv_agr.md', 'Source_mirv_agr(已翻译)'],
                  ['Source_mirv_calcs.md', 'Source_mirv_calcs(已翻译)'],
                  ['Source_mirv_cam.md', 'Source_mirv_cam(已翻译)'],
                  ['Source_mirv_camexport.md', 'Source_mirv_camexport(已翻译)'],
                  ['Source_mirv_camimport.md', 'Source_mirv_camimport(已翻译)'],
                  ['Source_mirv_campath.md', 'Source_mirv_campath(已翻译)'],
                  ['Source_mirv_cmd.md', 'Source_mirv_cmd'],
                  ['Source_mirv_cvar_hack.md', 'Source_mirv_cvar_hack'],
                  ['Source_mirv_cvar_unhide_all.md', 'Source_mirv_cvar_unhide_all(已翻译)'],
                  ['Source_mirv_deathmsg.md', 'Source_mirv_deathmsg(已翻译)'],
                  ['Source_mirv_exec.md', 'Source_mirv_exec(已翻译)'],
                  ['Source_mirv_fix.md', 'Source_mirv_fix(已翻译)'],
                  ['Source_mirv_fov.md', 'Source_mirv_fov(已翻译)'],
                  ['Source_mirv_gameoverlay.md', 'Source_mirv_gameoverlay'],
                  ['Source_mirv_input.md', 'Source_mirv_input(已翻译)'],
                  ['Source_mirv_listentities.md', 'Source_mirv_listentities(已翻译)'],
                  ['Source_mirv_loadlibrary.md', 'Source_mirv_loadlibrary(已翻译)'],
                  ['Source_mirv_replace_name.md', 'Source_mirv_replace_name(已翻译)'],
                  ['Source_mirv_skip.md', 'Source_mirv_skip(已翻译)'],
                  ['Source_mirv_snd_filter.md', 'Source_mirv_snd_filter'],
                  ['Source_mirv_snd_timescale.md', 'Source_mirv_snd_timescale'],
                  ['Source_mirv_streams.md', 'Source_mirv_streams(已翻译)'],
                  ['Source_mirv_time.md', 'Source_mirv_time'],
                  ['Source_mirv_traceentity.md', 'Source_mirv_traceentity'],
                  ['Source_mirv_voice.md', 'Source_mirv_voice(已翻译)'],
                  ['Source_mirv_vpanel.md', 'Source_mirv_vpanel'],
              ]
          },
          {
              title: '教程',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['Tutorials.md','教程']
              ]
          },
          {
              title: 'Purple CFG用法教程',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['purple_cfg.md', 'Purple CFG用法教程']
              ]
          },
          {
              title: 'EDW HLAE视频教程',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['edw_hlae.md', 'EDW HLAE视频教程']
              ]
          },
          {
              title: 'Purple CSGO工具箱教程',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['purple_csgo_toolbox.md', 'Purple CSGO工具箱教程']
              ]
          },
          {
              title: '翻译人员',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['contributer.md', '翻译人员名单']
              ]
          }
      ],
  }
  }
}