import { useState, useEffect } from 'react';
import { useHistory, useLocation, NavLink, useRouteMatch } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadMoreBtnClick from '../../components/LoadMoreBtn/LoadMoreBtn';

export default function MoviesPage() {
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [page, setPage] = useState(1);

    const searchQuery = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (!searchQuery) return;

        movieAPI.fetchSearchMovie(searchQuery, page).then(data => {
            if (data.results) {
                return setMovies(data.results);
            }
            if (data.results.length === 0) {
                return;
            }

            setMovies(prevMovies => [...prevMovies, ...data.results]);
            page > 1 &&
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
        });
    }, [page, searchQuery]);

    const handleSubmit = searchName => {
        setSearchName(searchName);
        history.push({ ...location, search: `query=${searchName}` });
    };

    const loadMoreBtnClick = () => {
        setPage(prevPage => prevPage + 1);
    };

    const showButton = movies.length > 20;
  
    return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title ?? movie.name}
                />
              </NavLink>
              <h2>
                {movie.name && movie.name}
                {movie.original_title}
              </h2>
            </li>
          ))}
        </ul>
      )}
      {showButton && <LoadMoreBtnClick onClick={loadMoreBtnClick} />}
    </div>
  );
}
