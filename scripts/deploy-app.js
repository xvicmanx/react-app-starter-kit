/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import client from 'scp2';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */
require('dotenv').config();

const DEPLOYMENT_METHODS = {
  USER: 'user',
};

const { log } = console; // eslint-disable-line no-console

const deployToUserServer = () => {
  const user = process.env.DEST_USER;
  const pass = process.env.DEST_PASS;
  const host = process.env.DEST_HOST;
  const path = process.env.DEST_PATH;

  log(' Deploying app to user server ...');

  client.scp(
    'build/',
    `${user}:${pass}@${host}:${path}`,
    (err) => {
      if (err) {
        log('  There was an error uploading your files');
      } else {
        log('  The files were uploaded successfully');
      }
    },
  );
};

log('--- Deploying application... ---');

switch (process.env.DEPLOY_METHOD) {
  case DEPLOYMENT_METHODS.USER:
    deployToUserServer();
    break;
  default:
    deployToUserServer();
    break;
}
