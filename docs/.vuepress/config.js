module.exports = {
  dest: 'jypblue',
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JypBlue',
      description: '个人博客，前端笔记'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'jypblue/blog',
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '笔记',
            link: '/note/',
          },
          // {
          //   text: '配置参考',
          //   link: '/config/'
          // },
          // {
          //   text: '默认主题配置',
          //   link: '/default-theme-config/'
          // }
        ],
        sidebar: {
          '/note/': genSidebarConfig('笔记')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '', // real1px
        'gauss-fuzzy',
        'h5-layout',
        'h5-pits',
        'algorithm',
        'gulp-res-zip',
        'gulp-sass',
        'node-mongodb',
        'node-mysql',
        'webpack-config',
      ]
    }
  ]
}
