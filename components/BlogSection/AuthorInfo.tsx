import Image from "next/image";

type AuthorInfoProps = {
  avatarSrc: string;
  avatarAlt: string;
  authorName: string;
  category: string;
};

export default function AuthorInfo({
  avatarSrc,
  avatarAlt,
  authorName,
  category,
}: AuthorInfoProps) {
  return (
    <div className="flex items-center gap-3 col-span-2 md:col-span-2 lg:col-span-1">
      <Image
        className="rounded-full w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
        src={avatarSrc}
        alt={avatarAlt}
        width={60}
        height={60}
        quality={100}
      />
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">{authorName}</h3>
        <span className="text-sm md:text-base lg:text-lg text-grey60">
          {category}
        </span>
      </div>
    </div>
  );
}
