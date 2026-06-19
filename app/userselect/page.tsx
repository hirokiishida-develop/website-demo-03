'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import MotionButton from "@/components/MotionButton";

const Header = () => {
  return (
    <header className="flex justify-center relative mt-15 left-0 right-0">
      <Image
        src="/images/common/logo_netflix.svg"
        alt="NETFLIX"
        width={138}
        height={37}
      />
      <MotionButton
        className="absolute top-0 bottom-0 right-6 m-auto cursor-pointer"
        onClick={()=> alert('setting')}
      >
        <Image
          src="/images/common/icon_pencil.svg"
          alt="edit"
          width={24}
          height={24}
        />
      </MotionButton>
    </header>
  );
}

type UserCardProps = {
  id: string
  img: string
  name: string
}

const UserCard = ({ id, img, name }: UserCardProps) => {
  const router = useRouter()

  return (
    <MotionButton
      className="flex flex-col items-center gap-y-0.5 w-25 cursor-pointer"
      onClick={() => router.push(`/home?user_${id}`)}
    >
      <Image
        src={`/images/userselect/${img}.png`}
        alt={name}
        width={200}
        height={184}
      />
      <p className="text-sm tracking-[0.01em] leading-7">{name}</p>
    </MotionButton>
  );
}

const AddUser = () => {
  return (
    <MotionButton
      className="flex flex-col gap-y-0.5 w-25 cursor-pointer"
      onClick={()=> alert('add user')}
    >
      <figure className="flex items-center justify-center w-25 h-23">
        <Image
          src="/images/common/icon_plus_circle.svg"
          alt="Add Profile"
          width={50}
          height={50}
        />
      </figure>
      <p className="text-sm tracking-[0.01em] leading-7 text-center">Add Profile</p>
    </MotionButton>
  );
}

export default function UserSelectPage(){
  return(
    <div className="pb-40">
      <Header />
      <div className="w-56.25 mt-32 mx-auto">
        <div className="flex flex-wrap gap-y-5.5 gap-x-6.25">
          <UserCard id="0001" img="user_blue" name="Emenalo" />
          <UserCard id="0002" img="user_yellow" name="Onyeka" />
          <UserCard id="0003" img="user_red" name="Thelma" />
          <UserCard id="0004" img="user_kids" name="Kids" />
          <AddUser />
        </div>
      </div>
    </div>
  );
}