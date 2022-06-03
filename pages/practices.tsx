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
import lasalle from "../public/lasalle.png";

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
          <div className="italic mt-4 text-center text-lg">
            <p className="text-xl mb-4">
              Summer practices are here: June - August 2022
            </p>
            <div className="border p-4 mb-4 bg-blue-100 rounded">
              @{" "}
              <Link href="https://www.google.com/maps/place/Brentwood+Field+%233/@45.4728703,-122.6017136,17z/data=!4m12!1m6!3m5!1s0x5495a006c45d2a65:0xa74ee1e9634ff5e2!2sBrentwood+City+Park!8m2!3d45.4734048!4d-122.6010537!3m4!1s0x0:0x92abbfc57665c874!8m2!3d45.472749!4d-122.6001602">
                <a className="underline" target="_blank">
                  Brentwood Park
                </a>
              </Link>{" "}
              on Mondays from 6:00pm - 7:30pm,
            </div>
            <div className="border p-4 my-2 mb-6 bg-blue-200 rounded">
              @{" "}
              <Link href="https://www.google.com/maps/place/Eastside+Timbers+%26+Thorns+Sports+Complex/@45.4885788,-122.4928889,15z/data=!3m1!4b1!4m5!3m4!1s0x54959f4b135bf7db:0x5fa367ac6cc0e5d7!8m2!3d45.4885791!4d-122.4841556">
                <a className="underline" target="_blank">
                  Eastside Timbers/Thorns complex
                </a>
              </Link>{" "}
              on Wednesdays from 5:00 - 6:30pm!
            </div>
          </div>
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
                  We will not throw balls around or kick other people&apos;s
                  balls
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
                  We will play with the soccer ball the way it&apos;s supposed
                  to be used.
                </li>
                <li>We will stay positive. No negative comments.</li>
                <li>
                  We will use words to communicate instead of being physical.
                  When we have a problem we will find a coach to help.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Practices;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
