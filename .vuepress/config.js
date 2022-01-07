module.exports = {
  lang: 'zh-CN',
  title: 'Vdrias World! 玩家手册',
  description: '',
  theme: '@vuepress/theme-default',
  themeConfig: {
    docsRepo: 'vdriasworld/manual',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善这个页面',
    sidebar: [
      { text: "欢迎", link: "/" },
      { text: "新手上路", link: '/get-started', },
      { text: "基本法", link: "/basic-law" },
      { text: "指令及插件", link: "/command" },
      { text: "常见问题", link: "/faq" },
      { text: "捐助", link: "/donate" }
    ],
    navbar: [
      { text: '捐助支持', link: '/donate' }
    ],
    smoothScroll: true,
    lastUpdated: '上次更新于',
  },
}