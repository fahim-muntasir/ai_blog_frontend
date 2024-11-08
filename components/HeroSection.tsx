import Image from "next/image";
import Button from "./common/Button";

export default function HeroSection() {
  return (
    <section className="text-white">
      <div className="text-center mx-auto grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7">
          <div className="px-6 md:px-10 lg:px-0 lg:flex lg:justify-end border-b border-dark20 py-16 md:py-20 lg:py-20 lg:pr-20">
            <div className="max-w-[842px] text-left">
              <p className="text-dark40 text-[18px] md:text-[22px] lg:text-3xl font-kumbh font-medium">
                Your Journey to Tomorrow Begins Here
              </p>
              <h1 className=" text-[30px] md:text-[55px] lg:text-[70px] mt-4 mb-6 font-kumbh font-medium leading-tight">
                Explore the Frontiers of <br /> Artificial Intelligence
              </h1>
              <p className="text-grey50 text-sm md:text-base lg:text-base">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>
          <div className="px-6 md:px-10 lg:px-10 w-full flex justify-end border-b border-dark20 md:pr-20 lg:pr-20">
            <div className="grid grid-cols-12 max-w-[842px] w-full">
              <div className=" col-span-4 py-6 pr-6 text-left md:pr-8 lg:pr-12 md:py-8 lg:py-12 border-r border-dark20 flex-1">
                <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">
                  300<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-sm lg:text-lg">
                  Resources available
                </p>
              </div>
              <div className=" col-span-4 py-6 px-6 text-left md:p-8 lg:p-12 border-r border-dark20 flex-1">
                <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">
                  12k<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-sm lg:text-lg">
                  Total Downloads
                </p>
              </div>
              <div className=" col-span-4 py-6 px-6 text-left md:p-8 lg:p-12 flex-1">
                <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">
                  10k<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-sm lg:text-lg">
                  Active Users
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:border-l border-b border-dark20 flex flex-col justify-center space-y-8 py-20 lg:py-0 px-6 md:px-10 lg:px-10 lg:pl-20">
          <div className="flex bg-secondary items-center w-[144px] h-[56px] md:w-[218px] md:h-[80px] rounded-full border border-dark20 justify-center">
            <div className="relative ml-0">
              <Image
                className="rounded-full w-[40px] h-[40px] md:w-[58px] md:h-[58px] border-2 border-dark40"
                src="/images/avatar1.avif"
                alt="Avatar 1"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[40px] h-[40px] md:w-[58px] md:h-[58px] border-2 border-dark40 box-border"
                src="/images/avatar2.avif"
                alt="Avatar 2"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[40px] h-[40px] md:w-[58px] md:h-[58px] border-2 border-dark40"
                src="/images/avatar3.avif"
                alt="Avatar 3"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[40px] h-[40px] md:w-[58px] md:h-[58px] border-2 border-dark40"
                src="/images/avatar4.avif"
                alt="Avatar 4"
                width={60}
                height={60}
                quality={100}
              />
            </div>
          </div>
          <div className="text-left">
            <p className="text-lg md:text-2xl font-medium mb-3">Explore 1000+ resources</p>
            <p className="text-grey60 mb-8 text-sm md:text-base">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <Button text="Explore Resources" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end border-b border-dark20">
        <div className="block md:flex md:justify-center container mx-auto w-full">
          <div className="text-left px-6 py-10 md:pl-0 md:pr-6 md:py-10 lg:pr-12 lg:py-12 border-b md:border-b-0 md:border-r border-dark20 flex-1">
            <Image
              className="mb-5 md:mb-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
              src="/images/icon1.svg"
              alt="icon 1"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-5 md:mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-base md:text-lg lg:text-xl font-medium">Latest New Update</h3>
                <span className="text-grey50 text-sm">Stay Current</span>
              </div>
              <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] lg:h-[52px] lg:w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 md:size-5 lg:size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-sm md:text-base lg:text-xl text-grey60">
              Over 1,000 articles published monthly
            </p>
          </div>
          <div className="text-left px-6 py-10 lg:p-12 border-b md:border-b-0 md:border-r border-dark20 flex-1">
            <Image
              className="mb-5 md:mb-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
              src="/images/icon2.svg"
              alt="icon 2"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-base md:text-lg lg:text-xl font-medium">Expert Contributors</h3>
                <span className="text-grey50 text-sm">Trusted Insights</span>
              </div>
              <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] lg:h-[52px] lg:w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 md:size-5 lg:size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-sm md:text-base lg:text-xl text-grey60">
              50+ renowned AI experts on our team
            </p>
          </div>
          <div className="text-left px-6 py-10 md:pr-0 lg:p-12 flex-1">
            <Image
              className="mb-5 md:mb-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
              src="/images/icon3.svg"
              alt="icon 3"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-base md:text-lg lg:text-xl font-medium">Global Readership</h3>
                <span className="text-grey50 text-sm">Worldwide Impact</span>
              </div>
              <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] lg:h-[52px] lg:w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 md:size-5 lg:size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-sm md:text-base lg:text-xl text-grey60">
              2 million monthly readers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
