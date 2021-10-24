if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

const rootEl = document.getElementById('root');

if (rootEl) {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl,
  );
}
