import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import { table, minifyRecords, Player } from "./api/utils/Airtable";

export default function Home({ initialPlayers }: { initialPlayers: Player[] }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>SESC - U10 Girls - Wolves - Silver/Gold - Bronze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rounded bg-white p-5 h-full my-10 shadow-xl">
        <h1 className="text-4xl font-bold font-merriweather mb-2">
          Welcome Wolves!
        </h1>
        <p className="mb-4">
          The Wolves is a Southeast Portland Soccer Competivie/Development team
          made up of girls born on or after 2012.
        </p>
        {user && (
          <div className="grid grid-cols-2 gap-4 items-center">
            <Link href="/team">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Team Roster
              </a>
            </Link>
            <Link href="/schedule">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Schedule
              </a>
            </Link>
            <Link href="/tournaments">
              <a className="col-span-2 text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Tournaments
              </a>
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link href="/api/auth/login">
              <a className="flex flex-col justify-center items-center border-2 border-blue-800 bg-blue-300 hover:bg-blue-700 hover:text-white py-3 px-6 rounded-full text-center">
                <span className="text-2xl italic">Are you a wolf?</span>
                <span className="text-xs uppercase">Click to login</span>
              </a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
