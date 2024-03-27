"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user } = useClerk();
  const ref = useRef();

  const toggleNav = () => {
    setShow((nav) => !nav);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, {
      capture: true,
    });
  }, []);

  const handleClickOutside = (e) => {
    if (!ref?.current?.contains(e.target)) {
      setShow(false);
    }
  };
  return (
    <>
      <nav
        ref={ref}
        className="relative top-0 flex justify-between items-center w-full mx-auto py-4 px-4 max-w-6xl"
      >
        <Link
          className="cursor-pointer"
          href="/"
          onClick={() => setShow(false)}
        >
          <Image
            src="/logo.png"
            priority
            className="h-auto w-auto"
            alt="Logo"
            width="130"
            height="48"
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <Link className="cursor-pointer" href="/chat">
            Chat
          </Link>
          <Link className="cursor-pointer" href="/tours">
            Tours
          </Link>
          <Link className="cursor-pointer" href="/profile">
            Profile
          </Link>
          {user ? (
            <Link
              className="cursor-pointer font-medium text-sm capitalize px-8 py-3 bg-gray-700 text-white rounded-3xl"
              href="/tour"
            >
              New Tour
            </Link>
          ) : (
            <Link
              className="cursor-pointer font-medium text-sm capitalize px-8 py-3 bg-gray-700 text-white rounded-3xl"
              href="/chat"
            >
              Let's Get Started
            </Link>
          )}
        </ul>
        <div className="md:hidden">
          {show ? (
            <CgClose onClick={toggleNav} size={30} />
          ) : (
            <HiOutlineMenuAlt3 onClick={toggleNav} size={30} />
          )}
        </div>
      </nav>
      {show && (
        <ul
          ref={ref}
          className="absolute md:hidden p-10 z-50 flex flex-col bg-[#2B59FF] w-full gap-6 font-medium top-[60px]"
        >
          <Link
            className="cursor-pointer text-lg"
            href="/chat"
            onClick={toggleNav}
          >
            Chat
          </Link>
          <Link
            className="cursor-pointer text-lg"
            href="/tours"
            onClick={toggleNav}
          >
            Tours
          </Link>
          <Link
            className="cursor-pointer text-lg"
            href="/profile"
            onClick={toggleNav}
          >
            Profile
          </Link>
          <div className="mx-auto mt-4">
            {user ? (
              <div className="flex flex-col gap-4 items-center">
                <Link
                  className="cursor-pointer font-semibold text-sm capitalize px-8 py-3 bg-white text-gray-700 rounded-3xl"
                  href="/tour"
                  onClick={toggleNav}
                >
                  New Tour
                </Link>
              </div>
            ) : (
              <Link
                className="cursor-pointer font-semibold text-sm capitalize px-8 py-3 bg-white text-gray-700 rounded-3xl"
                href="/chat"
                onClick={toggleNav}
              >
                Let's Get Started
              </Link>
            )}
          </div>
        </ul>
      )}
    </>
  );
};

export default Navbar;
