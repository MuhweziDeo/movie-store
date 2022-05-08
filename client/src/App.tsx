import React, { ChangeEvent } from 'react';
import client from './client';
import { Error } from './componets/Error';
import { MovieList } from './componets/MovieList';
import useDebounce from './hooks/useDounce';
import { IMovie } from './interfaces/movie';
import { IResponse } from './interfaces/response';


function App() {
  const [searchText, setSearchText] = React.useState('');
  const debouncedSearchText = useDebounce(searchText, 400);
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    (async () => {
      if (debouncedSearchText.trim().length) {
        try {
          setLoading(true);
          const { data } = await client.get<IResponse>(
              `/movies/search?q=${debouncedSearchText.toLocaleLowerCase()}`);
          setMovies(data.hits.hits);
          
        } catch (e: any) {
          setError(e.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      } else {
        setMovies([]);
      }
    })()
  }, [debouncedSearchText])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  return (
    <div className="container">
      <h3 className="center">Movies Store</h3>
      <div className="mb-3 center">
        <input type="text" data-testid="search-input"
          value={searchText}
          onChange={handleChange}
          className="form-control" 
          id="searchInput"
          placeholder="Search" />
      </div>

      {(!loading && error) ? <Error message={error} /> : null}

      {loading && <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}

      {!loading && <MovieList
        movies={movies}
      />}
    </div>
  );
}

export default App;
