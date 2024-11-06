// components/FeatureIntro.js
import Image from "next/image";

type FeatureIntoProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureIntro({
  icon,
  title,
  description,
}: FeatureIntoProps) {
  return (
    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-dark20 py-16 mb-8 md:mb-0 md:pr-16 md:flex md:items-center">
      <div>
        <Image
          className="mb-5 md:mb-8 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
          quality={100}
        />
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold font-kumbh mb-3">{title}</h3>
        <p className="text-sm md:text-base lg:text-lg text-grey60">{description}</p>
      </div>
    </div>
  );
}
