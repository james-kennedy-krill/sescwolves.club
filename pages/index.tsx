import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { table, minifyRecords, Player } from "./api/utils/Airtable";
import { Container, NavButton } from "../styles/common-styles";

import summerslam_image from "../public/summer-slam2021.jpg";
import beavertoncup_image from "../public/2022-team-tournament-champs.jpg";

const LoginButton = tw.a`flex flex-col justify-center items-center bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded text-center cursor-pointer`;

export default function Home({ initialPlayers }: { initialPlayers: Player[] }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>SESC - 2012 Girls - Wolves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="text-4xl font-bold font-merriweather mb-2">
          Welcome Wolves!
        </h1>
        <p className="mb-4">
          The Wolves is a Southeast Portland Soccer Competive/Development team
          made up of girls born on or after 2012.
        </p>
        {user && (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col space-y-4">
              <Link href="/philosophy">
                <NavButton>
                  Philosophy <span>How we approach soccer</span>
                </NavButton>
              </Link>
              {/* <Link href="/schedule">
                <NavButton>
                  Games
                  <span>Game schedules for both teams</span>
                </NavButton>
              </Link> */}
              <Link href="/team">
                <NavButton>
                  Team Roster <span>Who is on the team</span>
                </NavButton>
              </Link>
              {/* <Link href="/futsal">
                <NavButton>
                  Futsal <span>Winter 2021/2022 Futsal Information</span>
                </NavButton>
              </Link> */}

              <Link href="/practices">
                <NavButton>
                  Practices
                  <span>Practice schedules and rules</span>
                </NavButton>
              </Link>

              {/* <Link href="/tournaments">
                <NavButton>
                  Tournaments<span>Schedule, Results, Photos and more</span>
                </NavButton>
              </Link> */}
            </div>
            <div className="mt-5 md:mt-0 md:ml-5 md:w-1/2 flex-grow">
              <Image
                src={beavertoncup_image}
                alt="Photo of team at tournament"
              />
            </div>
          </div>
        )}
        {!user && (
          <div>
            <Link href="/api/auth/login">
              <LoginButton>
                <span className="text-2xl italic">Are you a wolf?</span>
                <span className="text-xs uppercase">Click here to login</span>
              </LoginButton>
            </Link>
            <p tw="mt-2 text-gray-500 italic">
              You must be a member of the team to view this website.
            </p>
          </div>
          // <div className="text-center py-6 text-xl">
          //   <p>We are rebuilding. Be back soon.</p>
          // </div>
        )}
      </Container>
    </div>
  );
}
