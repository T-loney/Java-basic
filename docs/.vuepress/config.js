module.exports = {
  title: 'Java 基础文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/java-basic/',
  theme: 'reco',
  locales:{
    '/':{
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/'},
      {
        text: 'Java 基础博客',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, //不折叠
        children: [
          { title: "学前必读",path: "/"}
        ]
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false, //不折叠
        children: [
          { title: "条件类型",path: "/handbook/ConditionalTypes"},
          { title: "泛型", path: "/handbook/Generics"}
        ]
      }
    ]
  }
};