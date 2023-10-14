import express from 'express';
import { createDataSource } from './src/db';

async function createApp() {
  const app = express();

  await createDataSource();

  app.get('/components', (_, res) => {
    res.jsons({});
  });

  return app;
}

createApp()
  .then((app) => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
