import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import LoginBtn from "./LoginBtn";
import Account from "./Account";

const Navbar = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex justify-between items-center py-4 px-2 bg-gray-200 shadow">
      <p className="font-merriweather text-2xl font-bold text-gray-800">
        SESC Wolves - U10 Girls
      </p>
      <div className="flex items-center">
        <a
          href="/players"
          className="rounded bg-gray-100 hover:bg-gray-300 py-2 px-4 mr-5"
        >
          Players
        </a>
        <LoginBtn />
        {user && <Account />}
      </div>
    </nav>
  );
};

export default Navbar;
