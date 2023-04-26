module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/chain-puzzle/' : '/',
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Chain Puzzle';
            return args;
        });
  }
}