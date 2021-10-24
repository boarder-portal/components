import path from 'path';
import express from 'express';

import render from './middlewares/render';

const app = express();

app
  .use('/build', express.static(path.resolve(__dirname, '../client')))
  .get('*', render);

app.listen(3131, () =>
  console.log(
    '\nListening on port http://localhost:3131',
  ),
);
