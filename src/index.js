import React from 'react';
import { render } from 'react-snapshot';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './App';
import './style.css';

render(
  <App />,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}
