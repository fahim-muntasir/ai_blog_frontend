export default function Button({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <button
      className={`flex items-center gap-1 text-grey60 border border-dark20 justify-center px-4 py-3 rounded-xl text-sm md:text-base w-auto ${classes}`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 md:w-6 md:h-6 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </button>
  );
}
