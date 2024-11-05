import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className=" bg-dark8 text-lg flex items-center justify-center gap-3 h-[67px] ">
        <p className="text-grey60">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
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
      </div>

      <nav className="bg-secondary border-y border-dark20">
        <div className="container mx-auto h-[103px] flex items-center justify-between ">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              quality={100}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>

          <ul className="flex gap-8 text-grey50 text-lg ">
            <li>
              <Link
                href="/"
                className=" bg-dark8 py-4 px-6 text-foreground rounded-lg border border-dark20"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/">News</Link>
            </li>
            <li>
              <Link href="/">Podcasts</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
          </ul>

          <button className="bg-primary w-[137px] h-[55px] rounded-lg text-dark8 font-medium">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
