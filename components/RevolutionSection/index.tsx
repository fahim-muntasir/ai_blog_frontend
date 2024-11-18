import Image from "next/image";

export default function RevolutionSection() {
  return (
    <section>
      <div className="bg-secondary border-b border-dark20 py-10 md:py-16 lg:20">
        <div className="container mx-auto px-6 md:px-0 font-medium flex  items-center mb-10 md:mb-16 lg:mb-20 gap-16">
          <Image
            src="/images/logo.svg"
            quality={100}
            width={60}
            height={60}
            alt="logo"
            className=" hidden md:block w-[60px] h-[60px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
          />
          <div>
            <div className="flex items-center gap-5 mb-5 md:mb-0">
              <Image
                src="/images/logo.svg"
                quality={100}
                width={60}
                height={60}
                alt="logo"
                className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]  md:hidden"
              />
              <p className="bg-dark20 flex items-center px-3 rounded-md text-sm md:text-base h-[32px] w-[225px] md:w-[250px] text-center">
                Learn, Connect, and Innovate
              </p>
            </div>
            <h3 className="font-kumbh text-[28px] md:text-[44px] lg:text-[58px]">
              Be Part of the Future Tech Revolution
            </h3>
            <p className="text-sm text-grey50">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-0">
          <div className="bg-dark8 border border-dark20 rounded-2xl p-3 md:flex md:gap-3">
            <div className="bg-secondary rounded-lg border border-dark20 p-6 mb-3 md:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className=" font-semibold ">Resource Access</h2>
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
              <p className="text-grey60">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>

            <div className="bg-secondary rounded-lg border border-dark20 p-6 mb-3 md:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className=" font-semibold ">Resource Access</h2>
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
              <p className="text-grey60">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>

            <div className="bg-secondary rounded-lg border border-dark20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className=" font-semibold ">Resource Access</h2>
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
              <p className="text-grey60">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
