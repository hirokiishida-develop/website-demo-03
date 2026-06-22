import Link from "next/link";
import Image from "next/image";
import GlobalNavigation from "@/components/GlobalNavigation";
import HeroSlider from "@/components/HeroSlider";
import Preview from "@/components/Preview";
import MovieRow from "@/components/MovieRow";

const Header = () => {
  return (
    <header className="flex items-center gap-x-6 fixed top-12 left-0 right-0 z-50">
      <Link href="/home">
        <Image
          src="/images/common/icon_netflix.svg"
          alt="NETFLIX"
          width={53}
          height={57}
        />
      </Link>
      <nav className="overflow-x-auto hidden-scrollbar">
        <ul className="flex items-center gap-x-10">
          <li><Link className="text-4.5 tracking-[0.01em] whitespace-nowrap" href="#">TV Shows</Link></li>
          <li><Link className="text-4.5 tracking-[0.01em] whitespace-nowrap" href="#">Movies</Link></li>
          <li><Link className="text-4.5 tracking-[0.01em] whitespace-nowrap" href="#">My List</Link></li>
        </ul>
      </nav>
    </header>
  );
}



export default function HomePage(){
  return (
    <div className="pb-8">
      <Header />
      {/* <HeroSlider /> */}
      {/* <Preview />
      <MovieRow heading="Popular on Netflix" category="popular" />
      <MovieRow heading="Top Rated" category="top_rated" />
      <MovieRow heading="Now Playing" category="now_playing" />
      <MovieRow heading="Up coming" category="upcoming" /> */}
      <GlobalNavigation />
    </div>
  );
}