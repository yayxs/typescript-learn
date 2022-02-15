module.exports = {
    title: 'TypeScript',
    description: '从0学习TypeScript',
  
    themeConfig: {
      nav: [
        { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
  
        {
          text: 'Repo',
          link: 'https://github.com/yayxs/typescript-learn.git',
        },
      ],
  
      sidebar: {
        '/guide/': getGuideSidebar(),
        '/': getGuideSidebar(),
      },
    },
  }
  
  function getGuideSidebar() {
    return [
      {
        text: '写在前面',
        link: '/guide/background'
      },
      {
        text: '关于TypeScript',
        link: '/guide/is'
      },
      {
        text: '开始使用',
        link: '/guide/use'
      },
    ]
  }