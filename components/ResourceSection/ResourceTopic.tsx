import Image from "next/image";
import { ResourceTopicTypes } from "@/types/resourceTypes";
import StatCard from "./StatCard";

export default function ResourceTopic({
  title,
  topicsDescription,
  avatar,
  statCards
}: ResourceTopicTypes) {
  return (
    <div className="py-14 w-full md:w-2/3 md:pl-16">
      <div className="block md:flex justify-between gap-2">
        <h3 className="text-lg font-semibold md:text-xl mb-4 md:w-80">
          {title}
        </h3>
        <p className="text-sm text-grey60 mb-6 md:text-base">
          {topicsDescription}
        </p>
      </div>
      <Image
        className="w-full h-[169px] md:h-[275px] rounded-xl"
        src={avatar.src}
        alt={avatar.alt}
        width={500}
        height={500}
        quality={100}
      />

      <StatCard {...statCards} />
    </div>
  );
}
