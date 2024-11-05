import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-white min-h-screen">
      <div className="text-center mx-auto grid grid-cols-12">
        <div className="col-span-7">
          <div className=" flex justify-end border-b border-dark20 py-20 pr-20">
            <div className="max-w-[842px] text-left">
              <p className="text-dark40 text-3xl font-kumbh font-medium">
                Your Journey to Tomorrow Begins Here
              </p>
              <h1 className="text-[70px] mt-4 mb-6 font-kumbh font-medium leading-tight">
                Explore the Frontiers of <br /> Artificial Intelligence
              </h1>
              <p className="text-grey50 text-base">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end border-b border-dark20 pr-20">
            <div className="flex max-w-[842px] justify-between w-full">
              <div className="text-left pr-12 py-12 border-r border-dark20 flex-1">
                <p className="text-4xl mb-4 font-bold">
                  300<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-lg">Resources available</p>
              </div>
              <div className="text-left p-12 border-r border-dark20 flex-1">
                <p className="text-4xl mb-4 font-bold">
                  12k<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-lg">Total Downloads</p>
              </div>
              <div className="text-left p-12 flex-1">
                <p className="text-4xl mb-4 font-bold">
                  10k<span className="text-primary">+</span>
                </p>
                <p className="text-grey60 text-lg">Active Users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-l border-b border-dark20 flex flex-col justify-center space-y-8 pl-20">
          <div className="flex bg-secondary items-center w-[218px] h-[80px] rounded-full border border-dark20 justify-center">
            <div className="relative ml-0">
              <Image
                className="rounded-full w-[58px] h-[58px] border-2 border-dark40"
                src="/images/avatar1.avif"
                alt="Avatar 1"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[58px] h-[58px] border-2 border-dark40 box-border"
                src="/images/avatar2.avif"
                alt="Avatar 2"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[58px] h-[58px] border-2 border-dark40"
                src="/images/avatar3.avif"
                alt="Avatar 3"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="relative ml-[-10px] box-border">
              <Image
                className="rounded-full w-[58px] h-[58px] border-2 border-dark40"
                src="/images/avatar4.avif"
                alt="Avatar 4"
                width={60}
                height={60}
                quality={100}
              />
            </div>
          </div>
          <div className="text-left">
            <p className="text-2xl font-medium mb-3">Explore 1000+ resources</p>
            <p className="text-grey60 mb-8">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <button className="flex items-center text-grey60 border border-dark20 px-5 py-3 rounded-xl">
              Explore Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end border-b border-dark20">
        <div className="flex justify-center container mx-auto w-full">
          <div className="text-left pr-12 py-12 border-r border-dark20 flex-1">
            <Image
              className="mb-8"
              src="/images/icon1.svg"
              alt="icon 1"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-medium">Latest New Update</h3>
                <span className="text-grey50 text-sm">Stay Current</span>
              </div>
              <div className="h-[52px] w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-xl text-grey60">
              Over 1,000 articles published monthly
            </p>
          </div>
          <div className="text-left p-12 border-r border-dark20 flex-1">
            <Image
              className="mb-8"
              src="/images/icon2.svg"
              alt="icon 1"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-medium">Expert Contributors</h3>
                <span className="text-grey50 text-sm">Trusted Insights</span>
              </div>
              <div className="h-[52px] w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-xl text-grey60">
              50+ renowned AI experts on our team
            </p>
          </div>
          <div className="text-left p-12 flex-1">
            <Image
              className="mb-8"
              src="/images/icon3.svg"
              alt="icon 1"
              width={50}
              height={50}
              quality={100}
            />
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-medium">Global Readership</h3>
                <span className="text-grey50 text-sm">Worldwide Impact</span>
              </div>
              <div className="h-[52px] w-[52px] bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-dark8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <p className="font-kumbh text-xl text-grey60">
              2 million monthly readers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
