import { getMovieDetail } from "@/lib/tmdb";

type MovieDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailPage(
  { params }: MovieDetailPageProps
) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  return (
    <main>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>公開日: {movie.release_date}</p>
      <p>評価: {movie.vote_average}</p>
    </main>
  );
}