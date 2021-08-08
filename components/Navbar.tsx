import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import LoginBtn from "./LoginBtn";
import Account from "./Account";
import { hasRole } from "./utils";
import logo from "../public/sesc-trans.png";

const Navbar = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex relative justify-between items-center py-4 px-2 bg-gray-200 shadow">
      <Link href="/">
        <a className="font-merriweather text-2xl font-bold text-gray-800 absolute top-2 left-3">
          <Image src={logo} width={80} height={100} />
        </a>
      </Link>
      <Link href="/">
        <a className="pl-24 font-merriweather text-2xl font-bold text-gray-800">
          SESC U10 Girls - Wolves
        </a>
      </Link>
      <div className="flex items-center justify-self-end">
        {user &&
          hasRole(user["https://www.sescwolves.club/roles"] as string[], [
            "Coach",
            "Parent",
            "Family",
          ]) && (
            <>
              <Link href="/team">
                <a className="rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 mr-5">
                  Team
                </a>
              </Link>
              <Link href="/schedule">
                <a className="rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 mr-5">
                  Schedule
                </a>
              </Link>
              <Link href="/tournaments">
                <a className="rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 mr-5">
                  Tournaments
                </a>
              </Link>
            </>
          )}
        <LoginBtn />
        {user && <Account />}
      </div>
    </nav>
  );
};

export default Navbar;
