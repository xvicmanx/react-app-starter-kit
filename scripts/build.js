/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import webpack from 'webpack';
import chalk from 'chalk';
import config from '../config/webpack.config';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */

const { log } = console; // eslint-disable-line no-console
const logItems = (items, color = 'white') => {
  items.forEach(item => log(chalk[color](item)));
};

log('Building assets for production');

webpack(config, (err, stats) => {
  if (err) {
    log(err);
    return 1;
  }

  const result = stats.toJson();
  if (result.hasErrors) {
    log('The build contains some errors\n');
    logItems(result.errors, 'red');
  }

  if (result.hasWarnings) {
    log('The build contains some warnings\n');
    logItems(result.warnings, 'yellow');
  }

  log('Your app has been built for production!');

  return 0;
});
