import { Request, Response } from 'express';

import app from './src/app';
import { PORT } from './src/config';

const port = PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Movies API V1');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
