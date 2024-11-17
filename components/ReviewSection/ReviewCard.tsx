import Image from "next/image";
import StarIcon from "./StarIcon";
import { ReviewType } from "@/types/reviewTypes";

export default function ReviewCard({
  data,
  classes,
}: {
  data: ReviewType;
  classes: string;
}) {
  return (
    <div className={`py-16 ${classes}`}>
      <div className="flex gap-5 justify-center mb-10">
        <Image
          className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] mb-4 md:mb-8 rounded-full"
          src={data.avatar}
          alt="review avatar"
          width={50}
          height={50}
          quality={100}
        />

        <div>
          <h2 className="text-lg lg:text-xl font-medium">{data.name}</h2>
          <span className="text-dark40 lg:text-lg">{data.location}</span>
        </div>
      </div>

      <div className="bg-dark10 w-full md:w-[373px] lg:w-[465px] border border-dark20 rounded-2xl relative text-center p-10">
        <div className=" absolute top-0 left-1/2 transform -translate-x-1/2  flex justify-center items-center text-primary bg-dark8 w-[140px] h-[36px] mt-[-18px] border border-dark20 rounded-full">
          {Array.from({ length: data.rating }).map((_, startIndex) => (
            <StarIcon key={startIndex} />
          ))}
        </div>
        <p className="text-sm md:text-base lg:text-lg">{data.review}</p>
      </div>
    </div>
  );
}
