'use client'

import Image from "next/image";

const SearchByVoice = () => {
  alert('音声を入力してください')
}

export default function SearchForm(){

  return (
    <form>
      <div className="relative">
        <Image
          className="absolute top-0 bottom-0 left-5 m-auto"
          src="/images/common/icon_search.svg"
          alt="search"
          width={20}
          height={20}
        />
        <input
          className="text-white w-full h-13 px-11 background-gray"
          type="text"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <button
          className="absolute top-0 bottom-0 right-5 m-auto cursor-pointer"
          onClick={() => SearchByVoice}
        >
          <Image
            src="/images/common/icon_microphone.svg"
            alt="search"
            width={24}
            height={24}
          />
        </button>
      </div>
    </form>
  );
}