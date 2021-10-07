import { useState, useEffect } from 'react';
import { Route, useParams, useRouteMatch, useLocation, useHistory, NavLink } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const location = useLocation();

    const history = useHistory();
    const locationFrom = location?.state?.from?.location;

    const [movieDetails, setMovieDetails] = useState(null);


    useEffect(() => {
        movieAPI.fetchMovieById(movieId)
            .then(data => {
                setMovieDetails(data);
            })
            .catch((error) => {
                console.log(error);
                history.push(locationFrom ?? "/movies");
            });
    }, [movieId, history, locationFrom]);

    const goBack = () => {
        history.push(locationFrom ?? '/');
    };
         
    return (
        <>
            <button type="button" onClick={goBack}>Back</button>
            
            {movieDetails && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        width="150"
                    />
                    <h2>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h2>
                    <p>Score:
                        <span> {movieDetails.vote_average}</span>
                    </p>
                    <h3>Overview:</h3>
                    <p>{movieDetails.overview}</p>
                    <h3>Genres</h3>
                    <p>{movieDetails.genres.map(genre => genre.name + ' ')}</p>

                    <h3>Additional information:</h3>
                    <NavLink
                        to={{
                            pathname: `${url}/cast`,
                            state: { from: location?.state?.from ?? "/" },
                        }}
                    // className="" activeClassName=""
                    >
                        Cast
                    </NavLink>

                    <NavLink
                        to={{
                            pathname: `${url}/reviews`,
                            state: { from: location?.state?.from ?? '/' },
                        }}
                    // className="" activeClassName=""
                    >
                        Reviews
                    </NavLink>
                </>
            )
                }    

                    <Route path={`${path}/cast`}>
                        <Cast movieId={movieId} />
                    </Route>

                    <Route path={`${path}/reviews`}>
                        <Reviews movieId={movieId} />
                    </Route>
                </>        
    );
}