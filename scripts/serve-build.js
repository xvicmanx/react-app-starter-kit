/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fs from 'fs';
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import open from 'open';
import compression from 'compression';
import ip from 'ip';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */

require('dotenv').config();

const app = express();
const port = process.env.SERVE_BUILD_PORT || 3001;

// To GZIP the files
app.use(compression());
app.use(express.static('build'));

app.get('/', (req, res) => {
  const index = fs.readFileSync(path.join(__dirname, '/../build/index.html'));
  res.send(index.toString());
});

const { log } = console; // eslint-disable-line no-console

app.listen(port, (err) => {
  if (err) {
    log(err);
  } else {
    log(`${chalk.white('\nServing production app at ')}${chalk.green('http://localhost:')}${chalk.green(port)}\n`);
    log(`${chalk.white('Serving production app at ')}${chalk.green('http://')}${chalk.green(ip.address())}:${chalk.green(port)}\n`);
    open(`http://localhost:${port}`);
  }
});
