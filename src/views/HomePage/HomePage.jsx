import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import { PageHeading } from './HomePage.styled';

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
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: { params: location },
                                }}
                            >
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}