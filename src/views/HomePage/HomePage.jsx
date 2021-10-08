import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { PageHeading, List, ItemList, Img, Title } from './HomePage.styled';

export default function HomePage() {
    // const { url } = useRouteMatch();
    const location = useLocation();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        movieAPI.fetchTrendingMovies().then(data => {
        setMovies(data.results);
      });
    }, []);

    return (
        <>
            <PageHeading>Trending today</PageHeading>
            {movies && (
                <List>
                    {movies.map(movie => (
                        <ItemList key={movie.id}>
                            <Link
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: { params: location },
                                }}
                            >
                                <Img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.original_title ?? movie.name}
                                    width = "240px"
                                />                                
                            </Link>
                            <Title>{movie.original_title ?? movie.name}</Title>
                        </ItemList>
                    ))}
                </List>
            )}
        </>
    );
}