import Button from "../common/Button";
import AuthorInfo from "./AuthorInfo";

type BlogPost = {
  avatarSrc: string;
  avatarAlt: string;
  authorName: string;
  category: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

export default function BlogCard({
  avatarSrc,
  avatarAlt,
  authorName,
  category,
  date,
  title,
  description,
  likes,
  comments,
  shares,
}: BlogPost) {
  return (
    <div className="border-t border-dark20">
      <div className="container mx-auto px-6 md:px-0 py-14 lg:py-20 grid grid-cols-3 md:grid-cols-5 gap-y-4">
        {/* Author Section */}
        <AuthorInfo
          avatarAlt={avatarAlt}
          avatarSrc={avatarSrc}
          authorName={authorName}
          category={category}
        />

        {/* this button is for mobile device  */}
        <div className="block md:hidden col-span-1 md:col-start-3 md:row-start-1">
          <Button text="View All Blogs" />
        </div>

        {/* Content Section */}
        <div className="col-span-3">
          <span className="text-grey60 mb-6 block md:text-lg lg:text-xl">
            {date}
          </span>
          <h3 className="text-lg font-semibold mb-2 md:text-[22px] lg:text-[26px]">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-grey60 mb-5">
            {description}
          </p>

          <div className="flex gap-2">
            {/* Icons and Stats */}
            <div className="bg-secondary border border-dark20 py-1 px-3 flex items-center justify-center text-sm gap-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FF5500"
                className="w-5 h-5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <span>{likes}K</span>
            </div>

            <div className="bg-secondary border border-dark20 py-1 px-3 flex items-center justify-center text-sm gap-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              <span>{comments}</span>
            </div>

            <div className="bg-secondary border border-dark20 py-1 px-3 flex items-center justify-center text-sm gap-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              <span>{shares}</span>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="hidden md:block md:col-span-2 lg:col-span-1">
          <Button text="View All Blogs" />
        </div>
      </div>
    </div>
  );
}
