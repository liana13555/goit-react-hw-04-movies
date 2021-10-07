import { useEffect, useState } from 'react';
import * as movieAPI from '../../services/movie-api';
import defaultImg from '../../image/img_smile.png';

export default function Cast({ movieId }) {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        movieAPI.fetchMovieCast(movieId).then(data =>
            setCast(data.cast));
    }, [movieId]);

    return (
        <>
            <h3>Cast</h3>            
            {cast && (
                <ul>
                    {cast.map(item => (
                        <li key={item.id}>
                            <img
                                src={
                                    item.profile_path
                                        ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                                        : defaultImg
                                }
                                alt={item.name}
                                width="100px"
                            />
                            <h3>{item.name}</h3>
                            <p>Character: {item.character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};