import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import LoginBtn from "./LoginBtn";
import Account from "./Account";
import { hasRole } from "./utils";
import logo from "../public/sesc-trans.png";

interface NavProps extends React.RefAttributes<HTMLDivElement> {
  current?: any;
}

type Ref = NavProps;

const Navbar = (): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { user, error, isLoading } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  function useOutsideAlerter(ref: Ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref?.current && !ref.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      id="header"
      className="flex relative justify-between items-center py-4 px-2 bg-gray-200 shadow"
    >
      <Link href="/">
        <a className="font-lato text-2xl font-bold text-gray-800 lg:absolute lg:top-2 lg:left-3">
          <Image src={logo} width={80} height={100} />
        </a>
      </Link>
      <Link href="/">
        <a className="pl-24 font-lato text-2xl font-bold text-gray-800 hidden lg:block">
          <span>SESC Wolves</span>
          <span className="hidden xl:inline">
            {" "}
            - SouthEast Soccer Club 2012 Girls
          </span>
        </a>
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-block md:hidden w-10 h-10 bg-gray-300 text-gray-600 p-1 mr-2"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute md:relative top-32 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 items-center justify-self-end ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {/* <Link href="/tryouts">
          <a
            onClick={() => setMenuOpen(false)}
            className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
          >
            Tryouts
          </a>
        </Link> */}
        {user &&
          hasRole(user["https://www.sescwolves.club/roles"] as string[], [
            "Coach",
            "Parent",
            "Family",
          ]) && (
            <>
              {/* <Link href="/schedule">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Games
                </a>
              </Link> */}
              <Link href="/philosophy">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Philosophy
                </a>
              </Link>
              <Link href="/team">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Team
                </a>
              </Link>

              <Link href="/practices">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Practices
                </a>
              </Link>
              {/* <Link href="/tournaments">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Tournaments
                </a>
              </Link> */}
              {/* <Link href="/futsal">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="w-full md:w-auto rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 my-2 md:my-0"
                >
                  Futsal
                </a>
              </Link> */}
            </>
          )}
        <LoginBtn className="my-2 md:my-0 w-full md:w-auto" />
        {user && <Account />}
      </div>
    </div>
  );
};

export default Navbar;
