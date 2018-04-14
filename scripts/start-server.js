/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import fs from 'fs';
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import open from 'open';
import webpackConfig from '../config/webpack.config';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */

require('dotenv').config();

const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.PORT || 3000;

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get('/', (req, res) => {
  const index = fs.readFileSync(path.join(__dirname, '/../public/index.html'));
  res.send(index.toString());
});

const { log } = console; // eslint-disable-line no-console

app.listen(port, (err) => {
  if (err) {
    log(err);
  } else {
    log(`${chalk.yellow('\nListening on')} ${chalk.green(port)}!\n`);
    open(`http://localhost:${port}`);
  }
});
