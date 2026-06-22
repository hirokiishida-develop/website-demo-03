import Link from "next/link";
import { getMoviesByCategory } from "@/lib/tmdb";

type MovieItemProps = {
  category: Parameters<typeof getMoviesByCategory>[0];
}

export default async function MovieItem({ category }: MovieItemProps){
  const data = await getMoviesByCategory(category);

  return (
    <>
      {data.results.map((movie: any) => (
        <div key={movie.id}>
          <Link className="block w-25 h-40" href={`/movies/${movie.id}`}>
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          </Link>
        </div>
      ))}
    </>
  );
}