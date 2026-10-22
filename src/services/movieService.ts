import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MoviesHttpResponse>(BASE_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
}
