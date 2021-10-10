const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '03656638042d26ef49e35d414cb358f5';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);

  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchMovies(`${BASE_URL}//trending/all/day?api_key=${API_KEY}`);
}

export function fetchSearchMovie(query, page) {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`,
  );
}

export function fetchMovieById(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCast(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
}

export function fetchMovieReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
