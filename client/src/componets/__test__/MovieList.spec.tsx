import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MovieList } from '../MovieList';

const mockMovies = [{
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
    "_id": "7JLlnYABfLmT27ozQ6Tq",
    "_score": 1,
    "_source": {
        "Title": "ONE: A Space Odyssey",
        "Year": "2001",
        "imdbID": "tt0353835",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2E1MGY1ZjEtNzVhYS00MTcyLThmNWUtZDM0MGY1Y2Y4YzEwXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg"
    }
}]
describe('MovieList', () => {
    it('should render movies', async () => {
        render(<MovieList movies={mockMovies}  />)
        await waitFor(async() => {
            expect((screen.queryAllByTestId('movie-card')).length).toBe(2);
        }, {timeout: 2000});
    });
})