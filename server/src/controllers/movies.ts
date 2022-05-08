import { Request, Response } from 'express';
import { elasticClient } from '../elastic';

export interface MovieRequest extends Request {
  query: {
    q: string;
  };
}
export const searchMovies = async (req: MovieRequest, res: Response) => {
  try {
    const q = req.query.q as string;
    const results = await elasticClient.search({
      index: 'movies-store',
      query: {
        fuzzy: { Title: q },
      },
    });

    return res.send(results);
  } catch (error: any) {
    return res.status(500).send({
      message: error.message || 'Something went wrong there',
      success: false,
    });
  }
};
