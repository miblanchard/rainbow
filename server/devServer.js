import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

const DEVPORT = 9090;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
}).listen(DEVPORT, 'localhost', err => {
  if (err) console.error(err);
  console.log(`Webpack Dev Server started at ${DEVPORT}`);
});
