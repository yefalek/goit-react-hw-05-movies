const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8620b0972e59ad7d1bfd77d28c680ffe'; //API (v3 auth)

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok ? await response.json() : Promise.reject(new Error('Sory, not found your search'));
}
//popular list of films today, main page
export function  fetchTrending(page) {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
}

//search some films
export function featchSearchMovie(query, page) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=ru-RU&page=${page}&query=${query}&include_adult=true`,);
}

//personal film information
export function fetchDetailsMovieVideo(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=ru-RU`,);
}

//this film's actors
export function fetchActorsMovie(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=ru-RU`,);
}

//this film's review
export function fetchReviewsMovie(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=ru-RU&page=1`,);
}