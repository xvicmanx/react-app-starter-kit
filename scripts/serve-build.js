/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import fs from 'fs';
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import open from 'open';
import compression from 'compression';
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
    log(`${chalk.yellow('\nServing production app on')} ${chalk.green(port)}!\n`);
    open(`http://localhost:${port}`);
  }
});
