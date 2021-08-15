import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { hasRole } from "../components/utils";
import lentspark from "../public/lentspark.png";
import brentwoodpark from "../public/brentwoodpark.png";

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
          <hr />
          <div className="my-5 py-5">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Fall Practices
            </h2>
            <p className="text-center italic">August 16th - November 4th</p>

            <div className="mb-6">
              <h3 className="text-2xl font-bold">Mondays</h3>
              <p className="mb-1 flex items-start justify-between">
                <span>
                  <Link href="https://goo.gl/maps/iDULNdYBPjiDPJv16">
                    <a className="text-blue-600 underline" target="_blank">
                      <strong>Brentwood Field #3</strong>
                    </a>
                  </Link>
                </span>
                <span className="text-gray-900 italic font-bold">
                  6:00pm - 7:30pm
                </span>
              </p>
              <p className="grid grid-cols-6 items-center justify-between mb-3">
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 16
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 23
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 30
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 6
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 13
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 20
                </span>
                <span className="col-start-1 py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 27
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 4
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 11
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 18
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 25
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Nov. 1
                </span>
              </p>
              <Link href="https://goo.gl/maps/iDULNdYBPjiDPJv16">
                <a target="_blank">
                  <Image
                    src={brentwoodpark}
                    alt="satallite of Brentwood Park"
                  />
                </a>
              </Link>
              <p className="text-gray-500 text-sm italic">
                Click image for directions
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold">Wednesdays</h3>
              <p className="mb-1 flex items-start justify-between">
                <span>
                  <Link href="https://goo.gl/maps/gH9oAzht54sdowdm6">
                    <a className="text-blue-600 underline" target="_blank">
                      <strong>Lent&apos;s Park (turf)</strong>
                    </a>
                  </Link>
                </span>
                <span className="text-gray-900 font-bold">6:00pm - 7:30pm</span>
              </p>
              <p className="grid grid-cols-6 items-center justify-between mb-3">
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 18
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 25
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 1
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 8
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 15
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 22
                </span>
                <span className="col-start-1 py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 29
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 6
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 13
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 20
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Oct. 27
                </span>
                <span className="py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Nov. 3
                </span>
              </p>
              <Link href="https://goo.gl/maps/gH9oAzht54sdowdm6">
                <a target="_blank">
                  <Image src={lentspark} />
                </a>
              </Link>
              <p className="text-gray-500 text-sm italic">
                Click image for directions
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
});

export default Schedule;
