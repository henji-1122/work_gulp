module.exports = {
  // 可在此配置文件中，配置项目路径
  build: {
    src: 'src',
    dist: 'release', // 
    temp: '.tmp', // 一般临时文件以.开头，因为这类文件默认是隐藏文件，不必管理
    public: 'public',
    paths: {
      styles: 'assets/styles/*.scss',
      scripts: 'assets/scripts/*.js',
      pages: '*.html',
      images: 'assets/images/**',
      fonts: 'assets/fonts/**'
     }  
  },

  // 项目数据
  data: {
    menus: [
      {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
      },
      {
        name: 'Features',
        link: 'features.html'
      },
      {
        name: 'About',
        link: 'about.html'
      },
      {
        name: 'Contact',
        link: '#',
        children: [
          {
            name: 'Twitter',
            link: 'https://github.com/henji-1122'
          },
          {
            name: 'About',
            link: 'https://github.com/henji-1122'
          },
          {
            name: 'divider'
          },
          {
            name: 'About',
            link: 'https://github.com/henji-1122'
          }
        ]
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
  }
}