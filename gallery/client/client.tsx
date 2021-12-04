import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';

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
