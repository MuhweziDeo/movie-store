import { Request, Response } from 'express';

import app from "./src/app";
import { PORT } from './src/config';
import { dbConnection } from './src/db';

const port = PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Movies API V1');
});

dbConnection().then(() => {
  console.log('Connected to database');
}).catch(err => {
  console.log('Error connecting to database', err.message);
  process.exit();
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});