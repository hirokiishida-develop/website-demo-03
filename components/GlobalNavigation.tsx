'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import MotionButton from "./MotionButton";

type GlobalNavigationButtonProps = {
  img: string
  label: string
  page: string
}

const NavigationButton = ({ img, label, page }: GlobalNavigationButtonProps) => {
  const router = useRouter()

  return (
    <MotionButton
      className="flex flex-col items-center gap-y-px cursor-pointer"
      onClick={()=> router.push(`/${page}`)}
    >
      <Image
        src={`/images/common/icon_navigation_${img}.svg`}
        alt={label}
        width={24}
        height={24}
      />
      <span className="text-inactive text-[8px] font-medium leading-2">{label}</span>
    </MotionButton>
  );
}

export default function GlobalNavigation(){
  return (
    <nav className="flex items-center justify-between fixed bottom-0 left-0 right-0 h-12.5 px-7 bg-black z-50">
      <NavigationButton img="home" label="Home" page="home" />
      <NavigationButton img="search" label="Search" page="search" />
      <NavigationButton img="coming" label="Coming Soon" page="notifications" />
      <NavigationButton img="downloads" label="Downloads" page="downloads" />
      <NavigationButton img="more" label="More" page="more" />
    </nav>
  );
}