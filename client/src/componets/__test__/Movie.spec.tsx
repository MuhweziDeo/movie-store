import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MovieCard } from '../Movie';

const mockMovie = {
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
}
describe('MovieCard', () => {
    it('should render movie content', async () => {
        render(<MovieCard movie={mockMovie} index={1} />)
        await waitFor(async () => {
            expect(await screen.findAllByText(mockMovie._source.Title)).not.toBeNull();
        })
    });

    it('should render placeholder image is Poster is N/A', async () => {
        const mockMovieWithoutPoster = {
            "_index": "movies-store",
            "_id": "7JLlnYABfLmT27ozQ6Tq",
            "_score": 1,
            "_source": {
                "Title": "ONE: A Space Odyssey",
                "Year": "2001",
                "imdbID": "tt0353835",
                "Type": "movie",
                "Poster": "N/A"
            }
        }
        render(<MovieCard movie={mockMovieWithoutPoster} index={1} />)
        const img: HTMLImageElement = await screen.findByTestId('movie-card-image')
        expect(img).toBeInTheDocument();
        expect(img.src).toBe('https://via.placeholder.com/150');
    });
})