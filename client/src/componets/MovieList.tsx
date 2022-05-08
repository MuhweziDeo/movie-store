import React from 'react';
import { IMovie } from '../interfaces/movie';
import { MovieCard } from './Movie';

interface Props {
    movies: IMovie[]
}
/**
 * @description displays list of movies
 * @param props {movies: IMovie}
 * @returns JSX
 */
export const MovieList: React.FunctionComponent<Props> = (props) => {
    console.log(props.movies.length)
    return <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
        {props.movies.map((movie, index) => <div>
            <MovieCard
                movie={movie}
                index={index}
            />
        </div>)}
    </ div>
}