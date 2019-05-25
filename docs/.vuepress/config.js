module.exports = {
  base: '/lb-element-table/',
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: 'lb-element-table',
      description: '基于element ui table二次封装，几乎支持原table所有的功能。'
    }
  },
  themeConfig: {
    repo: 'liub1934/lb-element-table',
    docsDir: 'docs',
    locales: {
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: [{
            text: '主页',
            link: '/zh/'
          },
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '个人小站',
            link: 'https://liubing.me'
          }
        ]
      }
    }
  }
}
