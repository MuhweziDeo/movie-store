import express, { Express } from 'express';
import cors from 'cors'
import router from './routes';

const app: Express = express();

app.use(cors())
app.use(router);

export default app;
