"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Header(): JSX.Element {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-black px-3
            before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
            before:border before:border-transparent
            after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs"
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image
                src={LogoImg}
                alt="Site logo"
                width={40}
                height={13}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative text-white py-[5px] hover:text-gray-300 transition"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm relative text-white py-[5px] hover:text-gray-300 transition"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
