import Button from "../common/Button";
import Image from "next/image";

export default function ResourceSection() {
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

      <div className="border-b border-dark20 ">
        <div className="container mx-auto px-6 md:px-0 md:flex">
          <div className="w-full md:w-1/3 py-14 border-b md:border-b-0 md:border-r md:pr-16 border-dark20">
            <Image
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-8"
              src="/images/icon6.svg"
              alt="icon 6"
              width={50}
              height={50}
              quality={100}
            />
            <h3 className=" font-kumbh text-2xl md:text-3xl mb-2 font-semibold ">
              Ebooks
            </h3>
            <p className="text-sm text-grey60 mb-4 md:mb-8 md:text-base">
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </p>
            <Button
              text="Download Ebooks Now"
              classes="bg-secondary md:w-full"
            />

            <div className="mt-4 md:mt-8">
              <div className="bg-secondary flex p-8 md:p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-grey60">Downloaded By</span>
                  <span className="font-semibold text-lg">10k + Users</span>
                </div>

                <div className="flex bg-dark8 items-center w-[144px] h-[56px] md:w-[149px] md:h-[56px] rounded-xl justify-center">
                  <div className="relative ml-0">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar1.avif"
                      alt="Avatar 1"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar2.avif"
                      alt="Avatar 2"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar3.avif"
                      alt="Avatar 3"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar4.avif"
                      alt="Avatar 4"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-14 w-full md:w-2/3 md:pl-16">
            <div className="block md:flex justify-between gap-2">
              <h3 className="text-lg font-semibold md:text-xl mb-4 md:w-80">
                Variety of Topics
              </h3>
              <p className="text-sm text-grey60 mb-6 md:text-base">
                Topics include AI in education (25%), renewable energy (20%),
                healthcare (15%), space exploration (25%), and biotechnology
                (15%).
              </p>
            </div>
            <Image
              className="w-full h-[169px] md:h-[275px] rounded-xl"
              src="/images/avatar5.jpg"
              alt="Avatar 5"
              width={500}
              height={500}
              quality={100}
            />

            <div className="mt-6 flex flex-col md:grid md:grid-cols-4 gap-4">
              <div className="bg-secondary md:col-span-1 flex p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Total Ebooks
                  </span>
                  <span className="font-semibold text-lg">Over 100 ebooks</span>
                </div>
              </div>

              <div className="bg-secondary md:col-span-3 flex p-6 rounded-md border border-dark20 justify-between items-center">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Download Formats
                  </span>
                  <span className="font-semibold text-lg">
                    PDF format for access.
                  </span>
                </div>

                <div>
                  <button
                    className={`flex items-center gap-1 text-grey60 border border-dark20 w-full md:w-[114px] justify-center md:px-5 py-3 rounded-xl text-sm md:text-base px-4`}
                  >
                    Preview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 md:text-lg text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-secondary md:col-span-4 flex p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Average Author Expertise
                  </span>
                  <span className="font-semibold text-lg">
                    Ebooks are authored by renowned experts with an average of
                    15 years of experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-dark20  mb-52 ">
        <div className="container mx-auto px-6 md:px-0 md:flex">
          <div className="w-full md:w-1/3 py-14 border-b md:border-b-0 md:border-r md:pr-16 border-dark20">
            <Image
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-8"
              src="/images/icon7.svg"
              alt="icon 6"
              width={50}
              height={50}
              quality={100}
            />
            <h3 className=" font-kumbh text-2xl md:text-3xl mb-2 font-semibold ">
              Whitepapers
            </h3>
            <p className="text-sm text-grey60 mb-4 md:mb-8 md:text-base">
              Dive into comprehensive reports and analyses with our collection
              of whitepapers.
            </p>
            <Button
              text="Download Whitepapers Now"
              classes="bg-secondary md:w-full"
            />

            <div className="mt-4 md:mt-8">
              <div className="bg-secondary flex p-8 md:p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-grey60">Downloaded By</span>
                  <span className="font-semibold text-lg">10k + Users</span>
                </div>

                <div className="flex bg-dark8 items-center w-[144px] h-[56px] md:w-[149px] md:h-[56px] rounded-xl justify-center">
                  <div className="relative ml-0">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar1.avif"
                      alt="Avatar 1"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar2.avif"
                      alt="Avatar 2"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar3.avif"
                      alt="Avatar 3"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                  <div className="relative ml-[-10px] box-border">
                    <Image
                      className="rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] border-2 border-dark40"
                      src="/images/avatar4.avif"
                      alt="Avatar 4"
                      width={60}
                      height={60}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-14 w-full md:w-2/3 md:pl-16">
            <div className="block md:flex justify-between gap-2">
              <h3 className="text-lg font-semibold md:text-xl mb-4 md:w-80">
                Topics Coverage
              </h3>
              <p className="text-sm text-grey60 mb-6 md:text-base">
                Whitepapers cover quantum computing (20%), AI ethics (15%),
                space mining prospects (20%), AI in healthcare (15%), and
                renewable energy strategies (30%).
              </p>
            </div>
            <Image
              className="w-full h-[169px] md:h-[275px] rounded-xl"
              src="/images/avatar6.jpg"
              alt="Avatar 5"
              width={500}
              height={500}
              quality={100}
            />

            <div className="mt-6 flex flex-col md:grid md:grid-cols-4 gap-4">
              <div className="bg-secondary md:col-span-1 flex p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Total Whitepapers
                  </span>
                  <span className="font-semibold text-lg">
                    Over 50 whitepapers
                  </span>
                </div>
              </div>

              <div className="bg-secondary md:col-span-3 flex p-6 rounded-md border border-dark20 justify-between items-center">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Download Formats
                  </span>
                  <span className="font-semibold text-lg">
                    PDF format for access.
                  </span>
                </div>

                <div>
                  <button
                    className={`flex items-center gap-1 text-grey60 border border-dark20 w-full md:w-[114px] justify-center md:px-5 py-3 rounded-xl text-sm md:text-base px-4`}
                  >
                    Preview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 md:text-lg text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-secondary md:col-span-4 flex p-6 rounded-md border border-dark20 justify-between">
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-base text-grey60">
                    Average Author Expertise
                  </span>
                  <span className="font-semibold text-lg">
                    Whitepapers are authored by subject matter experts with an
                    average of 20 years of experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
