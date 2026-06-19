import Link from "next/link";
import Image from "next/image";
import { getMoviesByCategory } from "@/lib/tmdb";
import HeroLocalNavigation from "./HeroLocalNavigation";

export default async function HeroSlider(){
  const data = await getMoviesByCategory('popular');
  const selectableCount = Math.min(data.results.length, 10);
  const randomIndex = selectableCount > 0 ? Math.floor(Math.random() * selectableCount) : -1;
  const randomMovie = randomIndex >= 0 ? data.results[randomIndex] : null;

  return (
    <>
      <div className="relative w-full h-[415] overflow-hidden">
        {randomMovie && (
          <div key={randomMovie.id}>
            <Link className="absolute top-0 left-0 right-0 m-auto w-full h-full" href={`/movies/${randomMovie.id}`}>
              <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt={randomMovie.title}/>
              <div className="flex items-center justify-center gap-x-1 absolute bottom-0 left-0 right-0 m-auto z-10">
                <Image
                  src="/images/common/icon_chart.svg"
                  alt="TOP10"
                  width={15}
                  height={15}
                />
                <p className="text-4.5 font-bold overflow-hidden whitespace-nowrap text-ellipsis">#{randomIndex + 1}&nbsp;{randomMovie.title}</p>
              </div>
            </Link>
          </div>
        )}
      </div>
      <HeroLocalNavigation />
    </>
  );
}