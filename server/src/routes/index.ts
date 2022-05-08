import { Router } from 'express';
import { API_VERSION } from '../config';
import moviesRouter from './movies';

// Main router for all the routes import into app.ts

const router = Router();

router.use(`/api/v${API_VERSION}/movies`, moviesRouter);

export default router;
