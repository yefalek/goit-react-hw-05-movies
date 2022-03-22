import { useState, useEffect } from "react";
import * as movieAPI from '../../../services/movie-api';
import noPoster from './No_image_poster.png'
import Loader from "components/Loader";
import ImageErrorView from "views/ImgesErrorView";
import Status from "services/Status";

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    useEffect(() => {
        setStatus(Status.PENDING);
        setTimeout(() => {movieAPI.fetcthActorsMovie(movieId).then(({ cast }) => {
              setCasts(cast);
              setStatus(Status.RESOLVED);}).catch(error => {
              setError(error);
              setStatus(Status.REJECTED);
            });}, 500);}, [movieId]);
    return (
        <>
          {status === Status.PENDING && <Loader />}
          {status === Status.REJECTED && (<ImageErrorView message={error.message} />)}
          {casts && status === Status.RESOLVED && (
            <ul >
              {casts.map((cast, i) => (
                <li key={i}>{cast.profile_path ? (<img src={`${IMG_URL}${cast.profile_path}`} width="100" height="150" alt={cast.name}/>) : (<img src={noPoster} width="100" height="150" alt={cast.name}/>)}
                <p>{cast.name}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      );
}