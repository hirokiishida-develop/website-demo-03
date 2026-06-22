import Image from "next/image";
import { getMovieDetail } from "@/lib/tmdb";
import { div } from "motion/react-client";

type MovieDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  return (
    <div className="flex flex-col gap-y-4 pb-12">
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={375}
          height={415}
        />
      </figure>
      <div className="flex flex-col gap-y-2 px-2.5">
        <h1 className="text-base font-bold">{movie.title}</h1>
        <div className="">
          <p className="text-sm">公開日: {movie.release_date}</p>
          <p className="text-sm">評価: {movie.vote_average}</p>
        </div>
        <article>
          <p className="text-sm">{movie.overview}</p>
        </article>
      </div>
    </div>
  );
}