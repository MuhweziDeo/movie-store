import { Router } from 'express';
import { searchMovies } from '../controllers/movies';

/**
 * Movies router handles all requests to /movies endpoint
 */
const moviesRouter = Router();

moviesRouter.get('/search', searchMovies);

export default moviesRouter;
