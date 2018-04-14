/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import wcag from 'wcag';
import chalk from 'chalk';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */


require('dotenv').config();

const port = process.env.PORT || 3000;

const options = {
  id: process.env.AC_CHECKER_API_ID,
  uri: `http://localhost:${port}/`,
  guide: process.env.WEB_ACCESSIBILITY_GUIDE,
};

const { log } = console; // eslint-disable-line no-console

wcag(options, (error, data) => {
  if (error) {
    log(chalk.red(error));
  } else {
    log(chalk.green(data));
  }
});
