import { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movie-api';

export default function Cast({ movieId }) {
    const [casts, setCasts] = useState(null);

    useEffect(() => {
        movieAPI.fetchMovieCast(movieId).then(data =>
            setCasts(data.cast));
    }, [movieId]);

    return (
        <>
            <ul>
                {casts &&
                    casts.map(cast => (
                        <li key={cast.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                                alt={cast.name}
                                width="100px"
                            />
                            <h3>{cast.name}</h3>
                            <p>Character: {cast.character}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
};