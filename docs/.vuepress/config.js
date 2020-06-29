module.exports = {
  title: 'vuepress 示例',
  description: 'vuepress 示例',
  sidebar: 'auto',
  base: '/vuepress-demo/',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '菜单1', link: '/test/test1/' },
      { text: '菜单2', link: '/test/test2/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/test/test1',
      ['/test/test2', 'Explicit link text']
    ]
  }
  
}
