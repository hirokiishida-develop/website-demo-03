export type MovieCategory = "now_playing" | "popular" | "top_rated" | "upcoming";

export async function getMoviesByCategory(category: MovieCategory) {
  // const API_KEY = process.env.TMDB_API_KEY;
  // const BASE_URL = process.env.TMDB_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.TMDB_API_KEY;
  const baseUrl = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

  // const res = await fetch(
  //   `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=ja-JP&page=1`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${category}`);
  }

  return res.json();
}

export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
  vote_average: number;
};

export async function getMovieDetail(movieId: string): Promise<MovieDetail> {
  const API_KEY = process.env.TMDB_API_KEY;
  const BASE_URL = process.env.TMDB_BASE_URL;

  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ja-JP`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch movie detail: ${movieId}`);
  }

  return res.json();
}
