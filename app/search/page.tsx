import Link from "next/link";
import Image from "next/image";
import { getMoviesByCategory } from "@/lib/tmdb";
import SearchForm from "@/components/SearchForm";
import GlobalNavigation from "@/components/GlobalNavigation";

export default async function SearchPage(){
  const data = await getMoviesByCategory('popular');

  return (
    <div className="pt-10 pb-20">
      <SearchForm />
      <div className="py-5 px-2.5">
        <h1 className="text-2xl tracking-[-0.01em] font-bold">Top Searches</h1>
      </div>
      <div className="flex flex-col gap-y-[4px]">
        {data.results.slice(0, 5).map((movie: any) => (
          <div key={movie.id}>
            <Link className="flex w-full h-20 background-gray" href={`/movies/${movie.id}`}>
              <figure className="w-36 h-full">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              </figure>
              <div className="flex items-center relative w-[calc(100%-144px)] px-2">
                <p className="text-sm font-bold">{movie.title}</p>
                <Image
                  className="absolute top-0 bottom-0 right-1 m-auto w-7 h-7"
                  src="/images/common/icon_play.svg"
                  alt="play"
                  width={28}
                  height={28}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <GlobalNavigation />
    </div>
  );
}