"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-dark8 text-xs md:text-sm lg:text-lg flex items-center justify-center gap-3 h-[40px] md:h-[45px] lg:h-[67px]">
        <p className="text-grey60">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

      <nav className="bg-secondary border-y border-dark20">
        <div className="container px-6 md:px-4 lg:px-4 mx-auto h-[75px] md:h-[81px] lg:h-[103px] flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              quality={100}
              width={50}
              height={50}
              alt="logo"
              className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
            />
          </Link>

          {/* Full menu for medium and larger screens */}
          <ul className="hidden md:flex gap-8 text-grey50 md:text-sm lg:text-lg">
            <li>
              <Link
                href="/"
                className="bg-dark8 md:py-3 md:px-5 lg:py-4 lg:px-6 text-foreground rounded-lg border border-dark20"
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

          {/* Contact Us button for medium and larger screens */}
          <button className="hidden md:block bg-primary md:text-sm md:w-[103px] md:h-[41px] lg:w-[137px] lg:h-[55px] rounded-lg text-dark8 font-medium">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay with Shutter Animation */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-secondary ${
            isMobileMenuOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-sm text-grey50">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                News
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Podcasts
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
            </li>
            <li>
              <button
                className="bg-primary w-[95px] h-[35px] rounded-lg text-dark8 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
