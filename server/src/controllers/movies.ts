import { Request, Response } from 'express';
import { elasticClient } from '../elastic';

export interface MovieRequest extends Request {
  query: {
    q: string;
  };
}

/**
 * 
 @suggestion add caching to improve on speed and prevent hitting
 elastic cloud often
 */
export const searchMovies = async (req: MovieRequest, res: Response) => {
  try {
    const q = req.query.q || '';
    if(q.trim().length) {
      const results = await elasticClient.search({
        index: 'movies-store',
        "query": { 
          "regexp": {
            Title: `.*${q.toLowerCase()}.*`
          }
        }
      });
      return res.send(results);
    }
   
    return res.status(400).send({message: 'missing query text'})
  } catch (error: any) {
    return res.status(500).send({
      message: error.message || 'Something went wrong there',
      success: false,
    });
  }
};
