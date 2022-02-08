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
          <p className="italic mb-2 text-center">
            Spring practices are here @ La Salle High School on Mondays and
            Wednesdays, 6:30 - 8:00pm!
          </p>
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

            <h2 className="text-3xl font-bold mb-2 text-center">
              Spring 2022 Practices
            </h2>

            <p className="text-center italic">January 31 - February 23rd</p>

            <div className="mb-6">
              <h3 className="text-2xl font-bold">Mondays &amp; Wednesdays</h3>
              <p className="mb-1 flex items-start justify-between">
                <span>
                  <Link href="https://www.google.com/maps/dir//La+Salle+Catholic+College+Preparatory,+11999+SE+Fuller+Rd,+Milwaukie,+OR+97222/@45.4359654,-122.589035,640m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x54957573ec110af5:0x4697b8d2aab1b85f!2m2!1d-122.5869643!2d45.4365526!3e0">
                    <a className="text-blue-600 underline" target="_blank">
                      <strong>La Salle</strong>
                    </a>
                  </Link>
                </span>
                <span className="text-gray-900 italic font-bold">
                  6:30pm - 8:00pm
                </span>
              </p>

              <Link href="https://www.google.com/maps/dir//La+Salle+Catholic+College+Preparatory,+11999+SE+Fuller+Rd,+Milwaukie,+OR+97222/@45.4359654,-122.589035,640m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x54957573ec110af5:0x4697b8d2aab1b85f!2m2!1d-122.5869643!2d45.4365526!3e0">
                <a target="_blank">
                  <Image src={lasalle} alt="satallite of La Salle" />
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
