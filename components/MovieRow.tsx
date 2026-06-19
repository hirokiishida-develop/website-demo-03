import MovieItem from "./MovieItem";
import type { MovieCategory } from "@/lib/tmdb";

type MoviewRowProps = {
  heading: string
  category: MovieCategory
}

export default function MovieRow({ heading, category }: MoviewRowProps){
  return (
    <div className="flex flex-col gap-y-3 py-2.5 pl-3">
      <h2 className="text-5 tracking-[-0.01em] font-bold">{heading}</h2>
      <div className="flex gap-x-2 overflow-x-auto hidden-scrollbar">
        <MovieItem category={category} />
      </div>
    </div>
  );
}