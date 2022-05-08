import React from 'react';
import { IMovie } from '../interfaces/movie';

interface Props {
    movie: IMovie,
    index: number
}
/**
 * @description displays a movie
 * @param props {movie: IMovie}
 * @returns JSX
 */
export const MovieCard: React.FunctionComponent<Props> = ({ movie, index }) => {
    const { _source: { Title, Poster, Year } } = movie;
    return (<div data-testid="movie-card" key={index} className="card"
        style={{ width: '18rem' }}>
        <img data-testid="movie-card-image" src={!Poster.includes('http') ? 'https://via.placeholder.com/150' : Poster} className="card-img-top" alt={Title} />
        <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">
                {Year}
            </p>
        </div>
    </div>)
}
