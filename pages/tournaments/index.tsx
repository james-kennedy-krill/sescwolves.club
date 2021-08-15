import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Tournaments = withPageAuthRequired(() => {
  return (
    <div>
      <Head>
        <title>Tournament Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white rounded p-4 shadow-xl mt-5">
          <h1 className="text-4xl font-bold text-center mb-2">Tournaments</h1>
          <div className="grid grid-cols-2 items-center">
            <Link href="/tournaments/summerslam">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Summer Slam
              </a>
            </Link>
            <Link href="/tournaments/mthoodchallenge2021">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Mt. Hood Challenge
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
});

export default Tournaments;
