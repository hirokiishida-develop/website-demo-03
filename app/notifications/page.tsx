import Image from "next/image";

export default function NotificationsPage(){
  return (
    <div className="pt-10">
      <h1 className="flex items-center gap-x-2 text-base tracking-[-0.01em] font-bold p-4">
        <Image
          src="/images/common/icon_bell.svg"
          alt="notifications"
          width={19}
          height={19}
        />
        Notifications
      </h1>
      
    </div>
  );
}