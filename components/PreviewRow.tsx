import { getMoviesByCategory } from "@/lib/tmdb";
import Link from "next/link";

type PreviewRowProps = {
  category: Parameters<typeof getMoviesByCategory>[0];
}

export default async function PreviewRow({ category }: PreviewRowProps){
  const data = await getMoviesByCategory(category);

  return (
    <>
      {/* {data.results.map((movie: any) => (
        <div key={movie.id}>
          <Link className="block w-25.5 h-25.5 rounded-[50%] overflow-hidden" href={`/movies/${movie.id}`}>
            <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          </Link>
        </div>
      ))} */}
    </>
  );
}

