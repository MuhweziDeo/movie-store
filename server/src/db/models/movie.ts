import { Schema, model } from 'mongoose';

export interface Rating {
    Source: string;
    Value: string;
}

export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
  
const movieSchema = new Schema<IMovie>({
    Title: { type: String, required: true },
    Year: { type: String, required: true },
    imdbID: { type: String, required: false},
    Type: { type: String, required: false},
    Poster: { type: String, required: true},
});
  
export const Movie = model<IMovie>('Movie', movieSchema);

export default Movie;