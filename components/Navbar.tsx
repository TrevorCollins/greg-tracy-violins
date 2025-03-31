"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavItemStyle =
  "cursor-pointer transition duration-200 ease-in-out hover:underline hover:scale-x-105 underline-offset-4 decoration-yellow ";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const activeNavItemStyle =
    " text-red font-bold underline underline-offset-4 decoration-yellow cursor-default pointer-events-none";

  return (
    <nav className="w-full h-40 min-h-40 my-5 sticky top-0 flex justify-between items-end z-50 backdrop-blur-lg">
      <a
        href="/"
        className="flex gap-5 text-sm tracking-normal uppercase items-center lg:items-end lg:text-lg lg:tracking-widest"
      >
        <Image
          src={"/Color-Logo.png"}
          alt="Logo"
          width={200}
          height={200}
          className="max-h-[80%] w-auto"
        />
        <p className="hidden md:block">Pittsburgh, PA</p>
      </a>
      <div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isNavOpen ? "flex" : "hidden"} w-full md:flex`}>
          <div className="w-[80dvw] font-medium text-orange text-center flex flex-col gap-4 bg-light absolute top-41 left-0 p-5 navBox z-40 md:flex-row md:relative md:w-auto md:text-base md:top-0 md:gap-4 md:mt-0 md:p-0 lg:text-lg lg:gap-10">
            <Link
              href="/"
              className={
                NavItemStyle + (pathname === "/" && activeNavItemStyle)
              }
            >
              <p>Home</p>
            </Link>
            <Link
              href="/bio"
              className={
                NavItemStyle + (pathname === "/bio" && activeNavItemStyle)
              }
            >
              <p>Bio</p>
            </Link>
            <Link
              href="/services"
              className={
                NavItemStyle + (pathname === "/services" && activeNavItemStyle)
              }
            >
              <p>Services</p>
            </Link>
            <Link
              href="/portfolio"
              className={
                NavItemStyle + (pathname === "/portfolio" && activeNavItemStyle)
              }
            >
              <p>Portfolio</p>
            </Link>
            <Link
              href="/contact"
              className={
                NavItemStyle + (pathname === "/contact" && activeNavItemStyle)
              }
            >
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
