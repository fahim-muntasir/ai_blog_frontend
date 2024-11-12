import Button from "../common/Button";
import ResourceCard from "./ResourceCard";
import { ResourceData } from "@/types/resourceTypes";

export default function ResourceSection() {
  const resourceData: ResourceData[] = [
    {
      resourceCard: {
        title: "Ebooks",
        description:
          "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
        buttonText: "Download Ebooks Now",
        icon: "/images/icon6.svg",
        downloadInfo: {
          downloadedBy: {
            label: "Downloaded By",
            count: "10k + Users",
          },
          avatars: [
            { alt: "Avatar 1", src: "/images/avatar1.avif" },
            { alt: "Avatar 2", src: "/images/avatar2.avif" },
            { alt: "Avatar 3", src: "/images/avatar3.avif" },
            { alt: "Avatar 4", src: "/images/avatar4.avif" },
          ],
        },
      },
      resourceTopics: {
        title: "Variety of Topics",
        topicsDescription:
          "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
        avatar: {
          src: "/images/avatar5.jpg",
          alt: "Avatar 5",
        },
        statCards: {
          card1: {
            label: "Total Ebooks",
            value: "Over 100 ebooks",
          },
          card2: {
            label: "Download Formats",
            value: "PDF format for access.",
            buttonText: "Preview",
          },
          card3: {
            label: "Average Author Expertise",
            value:
              "Ebooks are authored by renowned experts with an average of 15 years of experience",
          },
        },
      },
    },
    {
      resourceCard: {
        title: "Whitepapers",
        description:
          "Dive into comprehensive reports and analyses with our collection of whitepapers.",
        buttonText: "Download Whitepapers Now",
        icon: "/images/icon7.svg",
        downloadInfo: {
          downloadedBy: {
            label: "Downloaded By",
            count: "5k + Users",
          },
          avatars: [
            { alt: "Avatar 1", src: "/images/avatar1.avif" },
            { alt: "Avatar 2", src: "/images/avatar2.avif" },
            { alt: "Avatar 3", src: "/images/avatar3.avif" },
            { alt: "Avatar 4", src: "/images/avatar4.avif" },
          ],
        },
      },
      resourceTopics: {
        title: "Whitepaper Topics",
        topicsDescription:
          "Topics include quantum computing, AI ethics, space mining prospects, AI in healthcare, and renewable energy strategies.",
        avatar: {
          src: "/images/avatar6.jpg",
          alt: "Avatar 6",
        },
        statCards: {
          card1: {
            label: "Total Whitepapers",
            value: "Over 50 whitepapers",
          },
          card2: {
            label: "Download Formats",
            value: "PDF and DOCX formats available.",
            buttonText: "Preview",
          },
          card3: {
            label: "Average Author Expertise",
            value:
              "Whitepapers authored by experts with an average of 20 years of experience",
          },
        },
      },
    },
  ];

  return (
    <section>
      <div className="bg-secondary border-b border-dark20 py-10 md:py-16 lg:20">
        <div className="container mx-auto px-6 md:px-0 font-medium md:flex md:justify-between md:gap-20 items-center">
          <div>
            <p className="bg-dark20 inline-block py-2 px-3 mb-4 rounded-md text-sm md:text-base">
              Your Gateway to In-Depth Information
            </p>
            <h3 className="font-kumbh text-[28px] md:text-[44px] lg:text-[58px] mb-8">
              Unlock Valuable Knowledge with FutureTech&apos;s Resourcests
            </h3>
          </div>
          <Button text="View All Resources" />
        </div>
      </div>

      {resourceData.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </section>
  );
}
