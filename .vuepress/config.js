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
                  ['home.md', 'Home']
              ]
          },
          {
              title: 'Command',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['page2.md', '子菜单1']
              ]
          },
          {
              title: 'Tutorial',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                  ['Tutorials.md', '简介']
              ]
          }
      ],
  }
  }
}