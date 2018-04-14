// Extracts and inline the critical path CSS in HTML pages

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import critical from 'critical';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */
import config from '../config/critical.config';

const { log } = console; // eslint-disable-line no-console

log('\nStarted extracting inline critical path css');
critical.generate(config);
log('Ended extracting inline critical path css\n');
