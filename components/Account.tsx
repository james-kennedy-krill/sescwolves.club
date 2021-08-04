import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Account = (): JSX.Element => {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <div>
      {user && !!user.picture && (
        <span className="rounded-full h-10 w-10 ml-5 flex items-center justify-center overflow-hidden">
          <img src={user.picture} alt="Profile Picture" />
        </span>
      )}
    </div>
  );
};

export default Account;
