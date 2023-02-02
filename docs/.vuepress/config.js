/*
 * @Descripttion: vuepress的入口文件配置
 * @Author: likeorange
 * @Date: 2022-11-12 09:25:14
 * @LastEditors: likeorange
 * @LastEditTime: 2022-11-12 10:45:19
 */
module.exports = {
  title: '青山小站',
  description: 'Record about my studies',
  base:'/record/',
  head: [
    ['link',
      { rel: 'icon', href: '/avatar.jpg' }
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  themeConfig: {
    logo: '/avatar.jpg',  //网页顶端导航栏左上角的图标
    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      //添加下拉菜单
      {
        text: '前端',  //默认显示        
        ariaLabel: '前端',  //用于识别的label
        items: [
          { text: 'JavaScript', link: '/pages/frontend/javascript.md' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: 'CSS', link: '/pages/frontend/css.md' },
          { text: 'Vue2', link: '/pages/frontend/vue2.md' },
          { text: '浏览器', link: '/pages/frontend/browser.md' },
        ]
      },
      {
        text: '计算机基础',
        ariaLabel: '计算机基础',
        items: [
          { text: '计算机网络', link: '/pages/cs/network.md' },
          { text: '数据结构', link: '/pages/cs/dataStructure.md' },
          { text: 'CPP', link: '/pages/cs/cpp.md' },
          { text: 'CSAPP', link: '/pages/cs/csapp.md' },
        ]
      },
      {
        text: '项目开发',
        ariaLabel: '项目开发',
        items: [
          { text: 'git', link: '/pages/develop/git.md' },
        ]
      },
      {
        text: '岁月冗长',
        ariaLabel: '岁月冗长',
        items: [
          { text: 'English Studies', link: '/pages/life/english.md' },
          { text: 'Life Record', link: '/pages/life/record.md' },
        ]
      }
    ],
    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/cs/': [
        {
          title: '数据结构与算法',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['dataStructure.md', '数据结构与算法'], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ]
        },
        {
          title: '计算机网络',
          collapsable: true,
          children: [
            ['network.md', '网络']
          ]
        },
        {
          title: 'cpp',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['cpp.md', 'C++'],
          ]
        },
        {
          title: 'csapp读书笔记',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['csapp.md', 'csapp'],
          ]
        },
      ],
      '/pages/frontend/': [
        {
          title: 'JavaScript',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['javascript.md', 'JavaScript'],
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['css.md', 'CSS'],
          ]
        },
        {
          title: 'Vue2',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['vue2.md', 'Vue2'],
          ]
        },
        {
          title: '浏览器',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['browser.md', '浏览器'],
          ]
        },

      ],
      '/pages/life/': [
        {
          title: '英语学习',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['english.md', '学英语！'],
            ['grammar.md', '语法基础'],
          ]
        },
        {
          title: '日常记录',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['record.md', '橙子生长记录'],
          ]
        }
      ],
      '/pages/develop/': [
        {
          title: '开发工具',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['git.md', 'git'],
          ]
        }
      ],
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}