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
     

    ]
  }