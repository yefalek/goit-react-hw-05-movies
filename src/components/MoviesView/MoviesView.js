import { useState, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieAPI from '../../services/movie-api';
import Loader from "components/Loader";
import SearchBar from "components/SearchBar";
import ImageErrorView from "views/ImgesErrorView";
import useStyles from "services/stylePagination";
import ViewItem from "views/ViewItem";
import Status from "services/Status";
import Pagination from '@material-ui/lab/Pagination';

export default function MoviesView() {
    const classes = useStyles();
    const [status, setStatus] = useState(Status.IDLE);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState(null);
    const location = useLocation();
    const history = useHistory();
    const { url } = useRouteMatch();
    const [totalPage, setTotalPage] = useState(null);
    const [query, setQuery] = useState('');
    const page = new URLSearchParams(location.search).get('page') ?? 1;

    useEffect(() => {
        if (location.search === '') {
            return;
        }
    
        const newSearch = new URLSearchParams(location.search).get('query');
        setQuery(newSearch, page);
    }, [location.search, page]);

    useEffect(() => {
        if (!query) {
            return;
        }
        setStatus(Status.PENDING);
        movieAPI.fetchSearchMovie(query, page).then(({ results, total_pages }) => {
            if (results.length === 0) {
                toast.error('Not found');
            }
            setMovies(results);
            setTotalPage(total_pages);
            setStatus(Status.RESOLVED);
        }).catch(error => {
            setError(error);
            setStatus(Status.REJECTED);
        });
        console.log(page);
    }, [query, page]);

    const handleFormSubmit = newSearch => {
        if (query === newSearch) return;
        setQuery(newSearch);
        setMovies(null);
        history.push({ ...location, search: `query=${newSearch}&page=1`, });
    };
    const handleChange = (e, page) => {
        history.push({ ...location, search: `query=${query}&page=${page}` });
      };

    return (
        <>
            <SearchBar onSubmit={handleFormSubmit} />
            {status === Status.PENDING && <Loader />}
            {status === Status.REJECTED && (<ImageErrorView message={error.message} />)}
            {movies && status === Status.RESOLVED && (
                <ul>
                    {movies.map(movie => (
                        <ViewItem key={movie.id}
                            images={movie.poster_path}
                            id={movie.id}
                            title={movie.title}
                            from={`${url}/${location.search}`}
                        />))}
                </ul>
            )}
            {totalPage > 1 && (
                <Pagination
                    className={classes.root}
                    count={totalPage}
                    size="large"
                    page={Number(page)}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    onChange={handleChange}
                />
            )}
        </>
    );
}