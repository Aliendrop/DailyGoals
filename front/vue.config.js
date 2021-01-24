module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "DailyGoals";
        return args;
      })
  }
}
