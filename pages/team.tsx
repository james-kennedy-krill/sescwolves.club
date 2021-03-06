import { withPageAuthRequired, UserProfile } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import tw, { styled, TwStyle } from "twin.macro";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import LoginBtn from "../components/LoginBtn";
import { PlayersContext } from "../contexts/PlayersContext";
import { useEffect, useContext, useState } from "react";
import {
  table,
  minifyRecords,
  Player as PlayerType,
} from "./api/utils/Airtable";
import { hasRole } from "../components/utils";

type ButtonVariant = "all" | "Blue" | "White";
interface ButtonProps {
  variant?: ButtonVariant;
  selected?: boolean;
}

const buttonVariant: Record<ButtonVariant, TwStyle> = {
  // Named class sets
  all: tw`bg-white text-black`,
  White: tw`bg-white text-black border border-black`,
  Blue: tw`bg-blue-500 text-white`,
};

const TeamButton = styled.button<ButtonProps>(({ selected }) => [
  // Return a function here
  tw`flex w-full items-center justify-center p-2 m-2 rounded shadow-lg text-sm uppercase font-bold`,
  ({ variant = "all" }) => buttonVariant[variant], // Grab the variant style via a prop
  tw`border-4 border-transparent`,
  selected && tw`border-4 border-blue-500`,
]);

const Team = ({
  user,
  error,
  isLoading,
}: {
  user: UserProfile | undefined;
  error: Error | undefined;
  isLoading: boolean;
}) => {
  const [sortBy, setSortBy] = useState<string>("number");
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  const [team, setTeam] = useState<"all" | "Blue" | "White">("Blue");
  const [expand, setExpand] = useState<boolean>(false);
  const { players, setPlayers, sortPlayers, refreshPlayers } =
    useContext(PlayersContext);

  useEffect(() => {
    if (!players) {
      try {
        refreshPlayers();
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    sortPlayers(sortBy, direction);
  }, [sortBy, direction]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {user && (
          <>
            <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
              <h1 className="text-4xl font-bold text-center mb-2">
                SESC 2012 (U11) Girls
              </h1>
              <p className="flex items-center justify-around">
                <span>
                  <strong>Coach:</strong> Robin Krill
                </span>
                <span>
                  <strong>Coach:</strong> James Krill
                </span>
                <span>
                  <strong>Assistant Coach:</strong> Andy Garber
                </span>
              </p>
            </div>
            <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
              <div className="flex items-center justify-between mt-5 pb-2">
                <div>
                  <strong className="font-bold text-sm mr-5">Sort by: </strong>
                  <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded p-1 border-2 border-gray-200 mr-5"
                  >
                    <option value="number">Number</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    {user &&
                      hasRole(
                        user["https://www.sescwolves.club/roles"] as string[],
                        "Coach"
                      ) && <option value="rating">Player Rating</option>}
                  </select>
                  <select
                    onChange={(e) => {
                      if (
                        e.target.value === "asc" ||
                        e.target.value === "desc"
                      ) {
                        setDirection(e.target.value);
                      }
                    }}
                    className="rounded p-1 border-2 border-gray-200"
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                {user &&
                  hasRole(
                    user["https://www.sescwolves.club/roles"] as string[],
                    "Coach"
                  ) && (
                    <div>
                      <span
                        className="cursor-pointer underline text-sm"
                        onClick={() => setExpand(true)}
                      >
                        Expand All
                      </span>{" "}
                      /{" "}
                      <span
                        className="cursor-pointer underline text-sm"
                        onClick={() => setExpand(false)}
                      >
                        Collapse All
                      </span>
                    </div>
                  )}
              </div>
            </div>
            {/* <div className="py-2 px-4 mt-3">
              <div className="flex items-center justify-between mt-3 pb-2">
                <TeamButton
                  variant="all"
                  selected={team === "all"}
                  onClick={() => setTeam("all")}
                >
                  All
                </TeamButton>
                <TeamButton
                  variant="Blue"
                  selected={team === "Blue"}
                  onClick={() => setTeam("Blue")}
                >
                  Blue
                </TeamButton>
                <TeamButton
                  variant="White"
                  selected={team === "White"}
                  onClick={() => setTeam("White")}
                >
                  White
                </TeamButton>
              </div>
            </div> */}
            {players && (
              <ul>
                {players.map((player) => {
                  if (team !== "all" && team !== player?.fields?.team) {
                    return null;
                  }
                  return (
                    <Player key={player.id} player={player} expand={expand} />
                  );
                })}
              </ul>
            )}
          </>
        )}
        {!user && <LoginBtn redirect="/players" />}
      </main>
    </div>
  );
};

export default Team;

export const getServerSideProps = withPageAuthRequired();
