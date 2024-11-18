import Button from "../common/Button";
import ReviewCard from "./ReviewCard";
import { ReviewType } from "@/types/reviewTypes";

export default function ReviewSection() {
  const reviewData: ReviewType[] = [
    {
      avatar: "/images/avatar1.avif",
      name: "Emily Carter",
      location: "New York, USA",
      rating: 5,
      review:
        "The resources on AI have opened up new perspectives for my work. The detailed explanations and real-world examples make complex topics easy to understand.",
    },
    {
      avatar: "/images/avatar2.avif",
      name: "Michael Brown",
      location: "London, UK",
      rating: 4,
      review:
        "I appreciate the effort put into these ebooks. The case studies are particularly helpful, though I'd love to see more advanced content in future editions.",
    },
    {
      avatar: "/images/avatar3.avif",
      name: "Sophia Lee",
      location: "Sydney, Australia",
      rating: 5,
      review:
        "An incredible collection of insights! These ebooks have been instrumental in helping me shape new ideas and approaches in my projects.",
    },
  ];

  return (
    <section>
      <div className="bg-secondary border-b border-dark20 py-10 md:py-16 lg:20">
        <div className="container mx-auto px-6 md:px-0 font-medium md:flex md:justify-between md:gap-20 items-center">
          <div>
            <p className="bg-dark20 inline-block py-2 px-3 mb-4 rounded-md text-sm md:text-base">
              What Our Readers Say
            </p>
            <h3 className="font-kumbh text-[28px] md:text-[44px] lg:text-[58px] mb-8">
              Real Words from Real Readers
            </h3>
          </div>
          <Button text="View All Resources" />
        </div>
      </div>

      <div className="border-b border-dark20 ">
        <div className="container mx-auto px-6 md:px-0 md:flex md:gap-8">
          {reviewData.map((review, index) => (
            <ReviewCard
              key={index}
              data={review}
              classes={
                reviewData.length !== ++index
                  ? " border-b md:border-b-0 md:border-r md:pr-8 border-dark20"
                  : ""
              }
            />
          ))}
        </div>
      </div>

      <div className="border-b border-dark20 ">
        <div className="container mx-auto px-6 md:px-0 md:flex md:gap-8">
          {[...reviewData].reverse().map((review, index) => (
            <ReviewCard
              key={index}
              data={review}
              classes={
                reviewData.length !== ++index
                  ? " border-b md:border-b-0 md:border-r md:pr-8 border-dark20"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
