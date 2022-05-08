import { SearchResponse } from '@elastic/elasticsearch/lib/api/types';
import { Response } from 'express';
import { elasticClient } from '../../elastic';
import { MovieRequest, searchMovies } from '../movies';

const mockResponse: SearchResponse = {
  took: 0,
  timed_out: false,
  _shards: {
    total: 1,
    successful: 1,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 2,
      relation: 'eq',
    },
    max_score: 1.4965367,
    hits: [
      {
        _index: 'movies-store',
        _id: 'wW3lnYAB75W8xH3SQ-Lq',
        _score: 1.4965367,
        _source: {
          Title: 'Gore from Outer Space',
          Year: '2001',
          imdbID: 'tt0321649',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNTk2Nzg3NDEtMjQ4NC00Nzk4LWE0YmYtZTdmODYzYjIxOTljXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg',
        },
      },
      {
        _index: 'movies-store',
        _id: '7ZLlnYABfLmT27ozQ6Tq',
        _score: 1.2454867,
        _source: {
          Title: 'Kung Fu Werewolf from Outer Space',
          Year: '2001',
          imdbID: 'tt5767610',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYjFkMTgyNWMtOGQwMC00N2Y5LTk3NDItZWY3ZjNhYjUxNjhmXkEyXkFqcGdeQXVyMjYzNDgwNzk@._V1_SX300.jpg',
        },
      },
    ],
  },
};
describe('Movies Controller', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should return list of hits', async () => {
    const spy = jest.spyOn(elasticClient, 'search');
    spy.mockResolvedValueOnce(mockResponse);
    const req = {
      query: { q: 'helo' },
    };
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    await searchMovies(req as MovieRequest, res);
    expect(spy).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockResponse);
  });

  it('should return status code 400 if query text is not provided', async () => {
    const spy = jest.spyOn(elasticClient, 'search');
    spy.mockResolvedValueOnce(mockResponse);
    const req = {
      query: { q: '    ' },
    };
    const res = {
      send: jest.fn(),
      status: jest.fn(() => ({ send: jest.fn() })),
    } as unknown as Response;
    await searchMovies(req as MovieRequest, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should return status code 500 on error', async () => {
    const spy = jest.spyOn(elasticClient, 'search');
    spy.mockRejectedValueOnce(Error('something went wrong'));
    const req = {
      query: { q: 'helo' },
    };
    const res = {
      send: jest.fn(),
      status: jest.fn(() => ({ send: jest.fn() })),
    } as unknown as Response;
    await searchMovies(req as MovieRequest, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
