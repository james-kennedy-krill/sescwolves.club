import React, { useEffect } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import LoginBtn from "./LoginBtn";
import Account from "./Account";
import { hasRole } from "./utils";

const Navbar = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex justify-between items-center py-4 px-2 bg-gray-200 shadow">
      <p className="font-merriweather text-2xl font-bold text-gray-800">
        SESC Wolves - U10 Girls
      </p>
      <div className="flex items-center">
        {user &&
          hasRole(user["https://www.sescwolves.club/roles"], [
            "Coach",
            "Parent",
            "Family",
          ]) && (
            <Link href="/players">
              <a className="rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 mr-5">
                Players
              </a>
            </Link>
          )}
        <LoginBtn />
        {user && <Account />}
      </div>
    </nav>
  );
};

export default Navbar;
