import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
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

export default function Home({
  initialPlayers,
}: {
  initialPlayers: PlayerType[];
}) {
  const [sortBy, setSortBy] = useState<string>("firstName");
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  const [expand, setExpand] = useState<boolean>(false);
  const { user, error, isLoading } = useUser();
  const { players, setPlayers, sortPlayers } = useContext(PlayersContext);

  useEffect(() => {
    setPlayers(initialPlayers);
  }, []);

  useEffect(() => {
    sortPlayers(sortBy, direction);
  }, [sortBy, direction]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Players</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {user && (
          <>
            <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
              <h1 className="text-4xl font-bold text-center mb-2">
                SESC U10 Girls
              </h1>
              <p className="flex items-center justify-around">
                <span>
                  <strong>Coach:</strong> Robin Krill
                </span>
                <span>
                  <strong>Assistant Coach:</strong> James Krill
                </span>
              </p>
            </div>
            <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
              <div className="flex items-center justify-between mt-5 pb-2">
                <div>
                  <strong className="font-bold text-sm mr-5">Sort by: </strong>
                  <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="mr-5"
                  >
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    {user &&
                      hasRole(
                        user["https://www.sescwolves.club/roles"],
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
            {players && (
              <ul>
                {players.map((player) => (
                  <Player key={player.id} player={player} expand={expand} />
                ))}
              </ul>
            )}
          </>
        )}
        {!user && <LoginBtn redirect="/players" />}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const players = await table
      .select({ sort: [{ field: "rating", direction: "desc" }] })
      .firstPage();
    const minifiedPlayers = minifyRecords(players);
    for (const player of minifiedPlayers) {
      if (player?.fields?.player_stats?.[0]) {
        const player_stats_id: string = player.fields.player_stats[0];
        const stats_record = await table.find(player_stats_id);
        player.stats = {
          id: stats_record.id,
          fields: stats_record.fields,
        };
      }
    }
    console.log(minifiedPlayers);
    return {
      props: {
        initialPlayers: minifyRecords(minifiedPlayers),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}
