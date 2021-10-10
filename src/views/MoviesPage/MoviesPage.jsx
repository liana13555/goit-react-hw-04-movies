import { useState, useEffect } from 'react';
import { useHistory, useLocation, NavLink, useRouteMatch } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import { List, ItemList, Title, Button, Img } from './MoviesPage.styled';

export default function MoviesPage() {
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
    const [movieName, setMovieName] = useState('');
    const [page, setPage] = useState(1);

    const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

    useEffect(() => {
        if (!searchQuery) return;

      movieAPI.fetchSearchMovie(searchQuery, page).then(data => {
        if (data.results.length === 0) {
          return;
        } if (data.results) {
          return setMovies(prevMovies => [...prevMovies, ...data.results]);
        }
      });
    }, [searchQuery, page]);

  const handleSubmit = movieName => {
    setMovieName(movieName);
    setPage(1);
    setMovies([]);
    history.push({ ...location, search: `query=${movieName}` });
  };

    const handleLoadMoreBtn = () => {
        setPage(prevPage => prevPage + 1);
    };

    const showButton = movies.length >= 20;
  
    return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      {movies && (
        <List>
          {movies.map(movie => (
            <ItemList key={movie.id}>
              <NavLink
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title ?? movie.name}
                  width = "300px"
                />
              </NavLink>
              <Title>
                {movie.name && movie.name}
                {movie.original_title}
              </Title>
            </ItemList>
          ))}
        </List>
      )}
      {showButton && (<Button onClick={handleLoadMoreBtn}>Load more</Button>)}
    </div>
  );
}
