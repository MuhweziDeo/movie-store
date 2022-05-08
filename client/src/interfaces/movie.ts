
export interface Source {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovie {
    _index: string;
    _id: string;
    _score: number;
    _source: Source;
}