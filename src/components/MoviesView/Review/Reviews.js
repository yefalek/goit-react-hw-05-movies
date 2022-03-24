import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';
import Loader from 'components/Loader';
import ImageErrorView from 'views/ImgesErrorView';
import Status from 'services/Status';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    setTimeout(() => {movieAPI.fetcthReviewsMovie(movieId).then(({ results }) => {
          setReviews(results);
          setStatus(Status.RESOLVED);
        }).catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });}, 500);}, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (<ImageErrorView message={error.message} />)}
      {reviews &&status === Status.RESOLVED &&(reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>) : (<p>We don't have any reviews for this movie</p>
        ))}
    </>
  );
}