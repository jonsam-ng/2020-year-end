import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as Sentry from '@sentry/browser';
import './i18n/index';
import './index.scss';
import * as serviceWorker from './serviceWorker';

// Sentry.init({ dsn: '这里放申请sentry的时候给你的地址，如http://hash@sentry.io/123' });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
