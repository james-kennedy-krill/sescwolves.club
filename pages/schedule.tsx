import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { hasRole } from "../components/utils";

const Schedule = withPageAuthRequired(() => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
          <h1 className="text-4xl font-bold text-center mb-2">
            2021-2022 Schedule
          </h1>
          <p>Coming soon!</p>
        </div>
      </main>
    </div>
  );
});

export default Schedule;
