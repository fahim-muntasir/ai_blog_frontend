import { StatType } from "@/types/resourceTypes";

export default function StatCard({ card1, card2, card3 }: StatType) {
  return (
    <div className="mt-6 flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="bg-secondary md:col-span-1 flex p-6 rounded-md border border-dark20 justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-sm md:text-base lg:text-lg text-grey60">
            {card1.label}
          </span>
          <span className="font-semibold text-lg lg:text-xl">
            {card1.value}
          </span>
        </div>
      </div>

      <div className="bg-secondary md:col-span-3 flex p-6 rounded-md border border-dark20 justify-between items-center">
        <div className="flex flex-col justify-center">
          <span className="text-sm md:text-base lg:text-lg text-grey60">
            {card2.label}
          </span>
          <span className="font-semibold text-lg lg:text-xl">
            {card2.value}
          </span>
        </div>

        <div>
          <button
            className={`flex items-center gap-1 text-grey60 border border-dark20 w-full md:w-[114px] justify-center px-4 md:px-5 lg:px-8 py-3 rounded-xl text-sm md:text-base lg:text-lg`}
          >
            {card2.buttonText}
            <div>
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
            </div>
          </button>
        </div>
      </div>

      <div className="bg-secondary md:col-span-4 flex p-6 rounded-md border border-dark20 justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-sm md:text-base lg:text-lg text-grey60">
            {card3.value}
          </span>
          <span className="font-semibold text-lg lg:text-xl">
            {card3.value}
          </span>
        </div>
      </div>
    </div>
  );
}
