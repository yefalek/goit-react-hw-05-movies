import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "";
import PageHeading from "";
import * as movieApi from "";
import useStyles from "";
import ViewItem from "./ViewItem"
import './HomeView.scss';

export default function HomeView() {
    
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [trendings, setTrending] = useState(null);
    const [totalPage, setTotalPage] = useState(null);

    const page = new URLSearchParams(location.search).get('page') ?? 1;

    useEffect(() => {
        movieApi.fetchTrending(page).then(({ results, total_pages }) => {
            setTrending(results);
            setTotalPage(total_pages);
        });
    }, [page]);
    const handleChange = (e, page) => {
        history.push({ ...location, search: `page=${page}` });
    };

    return (
        <>
            <PageHeading text="Popular today" />
            
            {trendings && (
                <ul className="movies">
                    {trendings.map(trending => (
                        <ViewItem
                            key={trending.id}
                            images={trending.poster_path}
                            id={trending.id}
                            title={trending.title}
                            rating={trending.vote_avarage}
                        />
                    ))}
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