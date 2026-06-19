"use client";

import Image from "next/image";
import MotionButton from "./MotionButton";

export default function HeroLocalNavigation() {
  return (
    <div className="flex justify-between w-65 mt-3 mx-auto">
      <MotionButton
        className="flex flex-col items-center gap-y-px cursor-pointer"
        onClick={() => alert("My List")}
      >
        <Image
          src="/images/common/icon_plus.svg"
          alt="My List"
          width={24}
          height={24}
        />
        <span className="text-4.5">My List</span>
      </MotionButton>
      <MotionButton className="cursor-pointer" onClick={() => alert("Play")}>
        <Image
          src="/images/common/button_play.svg"
          alt="play"
          width={111}
          height={45}
        />
      </MotionButton>
      <MotionButton
        className="flex flex-col items-center gap-y-px cursor-pointer"
        onClick={() => alert("Info")}
      >
        <Image
          src="/images/common/icon_info.svg"
          alt="Info"
          width={24}
          height={24}
        />
        <span className="text-4.5">Info</span>
      </MotionButton>
    </div>
  );
}
