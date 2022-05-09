import dotenv from 'dotenv';
dotenv.config();
import { elasticClient } from '../elastic';

/**
 * Made a request on http://omdbapi.com/?apikey=a7abe54&y=2001&s=space to get this json
 * data manually
 *
 * Other options would be to use node-fetch to make an API request and populate this data
 * to the database
 *
 * Also a solution that scales is having cron job that can predically update the local database
 * with new records
 */
const data = [
  {
    Title: 'Lloyd in Space',
    Year: '2001–2004',
    imdbID: 'tt0275848',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTg0ZWQxNjctOGI3Ny00NmUxLWI1OGUtNzU1ZmFlMTlmMDA1XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_SX300.jpg',
  },
  {
    Title: 'Race to Space',
    Year: '2001',
    imdbID: 'tt0167360',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNDUwMDA1NV5BMl5BanBnXkFtZTcwNTA5MTAwMQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Gore from Outer Space',
    Year: '2001',
    imdbID: 'tt0321649',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNTk2Nzg3NDEtMjQ4NC00Nzk4LWE0YmYtZTdmODYzYjIxOTljXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg',
  },
  {
    Title: 'ONE: A Space Odyssey',
    Year: '2001',
    imdbID: 'tt0353835',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2E1MGY1ZjEtNzVhYS00MTcyLThmNWUtZDM0MGY1Y2Y4YzEwXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg',
  },
  {
    Title: 'Star Trek: Deep Space Nine - Dominion Wars',
    Year: '2001',
    imdbID: 'tt0454957',
    Type: 'game',
    Poster: 'N/A',
  },
  {
    Title: 'Space Banda',
    Year: '2001',
    imdbID: 'tt0307881',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc1NTE1NTEyMF5BMl5BanBnXkFtZTcwNzgzOTEzMQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Kung Fu Werewolf from Outer Space',
    Year: '2001',
    imdbID: 'tt5767610',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjFkMTgyNWMtOGQwMC00N2Y5LTk3NDItZWY3ZjNhYjUxNjhmXkEyXkFqcGdeQXVyMjYzNDgwNzk@._V1_SX300.jpg',
  },
  {
    Title: 'Sexy Space Sirens from Siberon',
    Year: '2001',
    imdbID: 'tt0445706',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Space Zoo',
    Year: '2001',
    imdbID: 'tt0293615',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: '2001: A Space Road Odyssey',
    Year: '2001–',
    imdbID: 'tt0288910',
    Type: 'series',
    Poster: 'N/A',
  },
];

data.forEach(async (movie, index) => {
  elasticClient
    .index({
      index: 'movies-store',
      document: movie,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  if (index === data.length - 1) {
    await elasticClient.indices.refresh({ index: 'movies-store' });
    process.exit();
  }
});
