import Image from "next/image";
import Button from "../common/Button";
import { ResourceData } from "@/types/resourceTypes";
import ResourceTopic from "./ResourceTopic";

export default function ResourceCard({
  resourceCard,
  resourceTopics,
}: ResourceData) {
  return (
    <div className="border-b border-dark20 ">
      <div className="container mx-auto px-6 md:px-0 md:flex">
        <div className="w-full md:w-1/3 py-14 border-b md:border-b-0 md:border-r md:pr-16 border-dark20">
          <Image
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] mb-4 md:mb-8"
            src={resourceCard.icon}
            alt={resourceCard.icon}
            width={50}
            height={50}
            quality={100}
          />
          <h3 className=" font-kumbh text-2xl md:text-3xl lg:text-[40px] mb-2 font-semibold ">
            {resourceCard.title}
          </h3>
          <p className="text-sm text-grey60 mb-4 md:mb-8 md:text-base lg:text-xl">
            {resourceCard.description}
          </p>
          <Button
            text={resourceCard.buttonText}
            classes="bg-secondary md:w-full"
          />

          <div className="mt-4 md:mt-8">
            <div className="bg-secondary flex p-8 md:p-6 rounded-md border border-dark20 justify-between">
              <div className="flex flex-col justify-center">
                <span className="text-sm lg:text-lg text-grey60">
                  {resourceCard.downloadInfo.downloadedBy.label}
                </span>
                <span className="font-semibold text-lg lg:text-2xl">
                  {resourceCard.downloadInfo.downloadedBy.count}
                </span>
              </div>

              <div className="flex bg-dark8 items-center w-[144px] h-[56px] md:w-[149px] md:h-[56px] rounded-xl justify-center">
                {resourceCard.downloadInfo.avatars.map((avatar, index) => (
                  <div key={index} className={`relative ml-[${index !== 0 ? "-10px" : "0px"}]`}>
                    <Image
                      className="rounded-full w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] border-2 border-dark40"
                      src={avatar.src}
                      alt={avatar.alt}
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ResourceTopic {...resourceTopics} />
      </div>
    </div>
  );
}
