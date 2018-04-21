/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import localtunnel from 'localtunnel';
import chalk from 'chalk';
import open from 'open';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */
require('dotenv').config();

const port = process.env.SERVE_BUILD_PORT || 3001;

const { log } = console; // eslint-disable-line no-console

const tunnel = localtunnel(port, (err, tnl) => {
  if (err) {
    log(chalk.red(err));
  } else {
    log(chalk.green(`Tunnel created at ${tnl.url}`));
    open(tnl.url);
  }
});

tunnel.on('close', () => {
  log(chalk.green('Tunnel closed'));
});
