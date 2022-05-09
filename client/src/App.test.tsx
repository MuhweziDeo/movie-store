import React from 'react';
import  MockAdapter from 'axios-mock-adapter';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import client from './client';

const mockMovies = {
  "took": 2,
  "timed_out": false,
  "_shards": {
      "total": 1,
      "successful": 1,
      "skipped": 0,
      "failed": 0
  },
  "hits": {
      "total": {
          "value": 3,
          "relation": "eq"
      },
      "max_score": 1,
      "hits": [
          {
              "_index": "movies-store",
              "_id": "wm3lnYAB75W8xH3SQ-Lr",
              "_score": 1,
              "_source": {
                  "Title": "Sexy Space Sirens from Siberon",
                  "Year": "2001",
                  "imdbID": "tt0445706",
                  "Type": "movie",
                  "Poster": "N/A"
              }
          },
          {
              "_index": "movies-store",
              "_id": "7JLlnYABfLmT27ozQ6Tq",
              "_score": 1,
              "_source": {
                  "Title": "ONE: A Space Odyssey",
                  "Year": "2001",
                  "imdbID": "tt0353835",
                  "Type": "movie",
                  "Poster": "https://m.media-amazon.com/images/M/MV5BN2E1MGY1ZjEtNzVhYS00MTcyLThmNWUtZDM0MGY1Y2Y4YzEwXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg"
              }
          },
          {
              "_index": "movies-store",
              "_id": "v23lnYAB75W8xH3SQ-Ky",
              "_score": 1,
              "_source": {
                  "Title": "Star Trek: Deep Space Nine - Dominion Wars",
                  "Year": "2001",
                  "imdbID": "tt0454957",
                  "Type": "game",
                  "Poster": "N/A"
              }
          }
      ]
  }
}
const mock = new MockAdapter(client);
describe('App', () => {
  it('should render movies', async() => {
    render(<App/>)
    const input = screen.queryByTestId('search-input') as Element;
    expect(input).toBeInTheDocument();
    mock.onGet('/movies/search?q=on').reply(200, mockMovies);
    fireEvent.change(input, {target: {value: 'on'}})
    await waitFor(() => {
      expect((screen.queryAllByTestId('movie-card')).length).toBe(3);
    })
  });

  it('should render error', async() => {
    render(<App/>)
    const input = screen.queryByTestId('search-input') as Element;
    expect(input).toBeInTheDocument();
    mock.onGet('/movies/search?q=on').reply(500, Error('Something went wrong'));
    fireEvent.change(input, {target: {value: 'on'}})
    await waitFor(() => {
      expect(screen.getByTestId('error-wrapper')).toBeInTheDocument();
    })
  });

  it('should render No items found', async() => {
    const emptyMovies = {
      "took": 2,
      "timed_out": false,
      "_shards": {
          "total": 1,
          "successful": 1,
          "skipped": 0,
          "failed": 0
      },
      "hits": {
          "total": {
              "value": 0,
              "relation": "eq"
          },
          "max_score": 1,
          "hits": []
      }
    }
    render(<App/>)
    const input = screen.queryByTestId('search-input') as Element;
    expect(input).toBeInTheDocument();
    mock.onGet('/movies/search?q=on').reply(200, emptyMovies);
    fireEvent.change(input, {target: {value: 'on'}})
    await waitFor(() => {
      expect((screen.queryAllByTestId('movie-card')).length).toBe(0);

    })
    await waitFor(() => {
      expect(screen.getByTestId('error-wrapper').innerHTML).toBe('No items found');
    })
  });
})