import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import Navbar from "../components/Navbar";
import { hasRole } from "../components/utils";
import { Container } from "../styles/common-styles";
import lentspark from "../public/lentspark.png";
import brentwoodpark from "../public/brentwoodpark.png";

const Table = tw.table`w-full border-collapse`;
const TableHeader = tw.th`font-bold text-xs md:text-lg text-left p-1 md:p-2`;
const TableDateRow = tw.tr`text-sm md:text-base border-b-2 border-gray-300 bg-gray-100`;
const TableData = tw.td`text-xs md:text-base pt-1 pb-2 px-1 md:px-2 text-left`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Practices = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Practices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
            Practices
          </h1>
          <hr />
          <div id="fall-practices" className="my-5 py-5">
            <div className="p-10 pt-0">
              <h2 className="text-2xl font-bold mb-2">Practice Rules</h2>
              <p className="mb-2">
                These are the rules that the team came up with to keep practices
                fun, safe and productive.
              </p>
              <ol className="list-decimal ml-5">
                <li>
                  When someone is talking we will respectfully listen by
                  remaining quiet, looking at them, and keeping our hands and
                  feet still.
                </li>
                <li>
                  We will not throw balls around or kick other people's balls
                </li>
                <li>
                  No being mean when teammates make mistakes. We will be
                  encouraging and uplifting.
                </li>
                <li>
                  No fighting over the balls. No pushing, shoving or tripping.
                </li>
                <li>
                  No cutting in line. We will get in the back of lines and
                  respect when someone is before us.
                </li>
                <li>
                  We will not purposefully exclude anyone. We will include
                  everyone and play as a team.
                </li>
                <li>
                  We will play with the soccer ball the way it's supposed to be
                  used.
                </li>
                <li>We will stay positive. No negative comments.</li>
                <li>
                  We will use words to communicate instead of being physical.
                  When we have a problem we will find a coach to help.
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mb-2 text-center">
              Fall 2021 Practices
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
                  <span className="line-through">6:00pm - 7:30pm</span> 5:30pm -
                  7:00pm
                </span>
              </p>
              <p className="grid grid-cols-6 items-center justify-between mb-3">
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 16
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 23
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 30
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 6
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 13
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 20
                </span>
                <span className="line-through col-start-1 py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 27
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
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
                <span className="text-gray-900 font-bold">
                  <span className="line-through">6:00pm - 7:30pm</span> 5:30pm -
                  7:00pm
                </span>
              </p>
              <p className="grid grid-cols-6 items-center justify-between mb-3">
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 18
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Aug. 25
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 1
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 8
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 15
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 22
                </span>
                <span className="line-through col-start-1 py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
                  Sept. 29
                </span>
                <span className="line-through py-1 px-2 text-center bg-gray-200 border-2 border-gray-500 w-full">
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
      </Container>
    </div>
  );
};

export default Practices;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
