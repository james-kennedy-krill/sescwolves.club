import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

type LoginBtnProps = {
  redirect?: string;
};

const LoginBtn = ({ redirect }: LoginBtnProps): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {user ? (
        <Link href="/api/auth/logout">
          <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Logout
          </a>
        </Link>
      ) : (
        <Link
          href={`/api/auth/login${redirect ? "?redirect=" + redirect : ""}`}
        >
          <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Login
          </a>
        </Link>
      )}
    </>
  );
};

export default LoginBtn;
