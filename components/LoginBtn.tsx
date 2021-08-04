import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

type LoginBtnProps = {
  redirect?: string;
};

const LoginBtn = ({ redirect }: LoginBtnProps): JSX.Element => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {user ? (
        <a
          href="/api/auth/logout"
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >
          Logout
        </a>
      ) : (
        <a
          href={`/api/auth/login${redirect ? "?redirect=" + redirect : ""}`}
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >
          Login
        </a>
      )}
    </>
  );
};

export default LoginBtn;
