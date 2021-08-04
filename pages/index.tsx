import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import { table, minifyRecords, Player } from "./api/utils/Airtable";

export default function Home({ initialPlayers }: { initialPlayers: Player[] }) {
  console.log(initialPlayers);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Head>
          <title>SESC - U10 Girls - Wolves - Silver/Gold - Bronze</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Welcome Wolves!</h1>
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
        </main>

        <footer>Made by Coach James.</footer>
      </div>
    );
  }

  return (
    <div className="wolf-bg flex flex-col items-center justify-center min-h-screen h-full w-full">
      <h1 className="font-merriweather text-4xl text-center text-white mb-4 bg-black bg-opacity-50 w-full p-4 rounded">
        SouthEast Soccer Club
        <br />
        U9/U10 Girls
        <br />
        Wolves
      </h1>
      <Link href="/api/auth/login">
        <a className="border-2 border-blue-800 bg-blue-300 hover:bg-blue-700 hover:text-white py-3 px-6 rounded-full text-center">
          <span className="text-2xl italic">Are you a wolf?</span>
          <br />
          <span className="text-xs uppercase">Click to login</span>
        </a>
      </Link>
    </div>
  );
}
