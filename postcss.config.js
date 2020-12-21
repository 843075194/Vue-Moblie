/*
    PostCss是基于Node.js运行的一个处理CSS的工具
    所以他的配置文件也是运行在node.js中的
*/

module.exports = {
  // 配置相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // autoprefixer: {
    //   // browsers 用来配置要兼容到的系统(浏览器)环境
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 因为vue-cli默认已经在内部默认配置了autoprefixer，所以我们这里需要把
    // 文件直接写到.browserslistrc文件里去
    // 把 px 转为 rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下按照设计稿来
      // Vant 组件库是基于375宽写的
      // 375是逻辑像素,750是物理像素
      // 所以我们在测量设计稿的时候，测量出来要除以2
      // 和一阶段那时候一样
      rootValue: 37.5,
      // 需要转换的CSS属性,*就是所有属性都转换
      propList: ['*']
    }
  }
}
