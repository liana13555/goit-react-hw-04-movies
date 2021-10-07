import { useEffect, useState } from 'react';
import * as movieAPI from '../../services/movie-api';

export default function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        movieAPI.fetchMovieReviews(movieId).then(data => {
            setReviews(data.results);
                });
    }, [movieId]);
    
    return (
        <>
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie.</p>
            ) : (
                reviews &&
                reviews.map(review => (
                    <div key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </div>
                ))           
            )}
        </>
    );    
}