/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import UglifyJS from 'uglify-js';
import fs from 'fs';
import path from 'path';

const serviceworkerPath = path.join(__dirname, '/../build/sw.js');
const content = fs.readFileSync(serviceworkerPath).toString();

fs.writeFileSync(
  serviceworkerPath,
  UglifyJS.minify(content).code,
);
