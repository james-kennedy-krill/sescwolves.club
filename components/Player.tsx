import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { Player as PlayerType } from "../pages/api/utils/Airtable";
import { hasRole } from "./utils";

const Player = ({
  player,
  expand,
}: {
  player: PlayerType;
  expand: boolean;
}): JSX.Element => {
  const [cardOpen, setCardOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  const expandContractAll = (_expand: boolean) => {
    setCardOpen(_expand);
  };

  useEffect(() => {
    expandContractAll(expand);
  }, [expand]);

  const stats = [
    "dribbling",
    "passing",
    "shooting",
    "aggressiveness",
    "attention",
    "intelligence",
  ];

  const statColors = [
    "red", // 0
    "red", // 1
    "red", // 2
    "red", // 3
    "red", // 4
    "yellow", // 5
    "yellow", // 6
    "yellow", // 7
    "green", // 8
    "green", // 9
    "green", // 10
  ];

  return (
    <li className="bg-white shadow-lg rounded-lg my-4 py-2 px-4">
      <div className="grid grid-cols-8 gap-4 items-center">
        {player.fields.number && (
          <div className="col-start-1 col-span-1 text-center">
            <span className="bg-blue-700 text-white text-md font-bold rounded-full w-10 h-10 flex items-center justify-center">
              #{player.fields.number}
            </span>
          </div>
        )}
        <h2 className="text-xl font-bold col-start-2 col-span-3">
          {player.fields.firstName} {player.fields.lastName}
        </h2>
        {!!player.fields.position?.length && (
          <div className="col-start-5 col-span-2">
            <span className="italic">{player.fields.position.join(", ")}</span>
          </div>
        )}
        {user &&
          hasRole(
            user["https://www.sescwolves.club/roles"] as string[],
            "Coach"
          ) && (
            <div
              className="bg-indigo-700 hover:bg-indigo-900 text-white w-10 h-10 rounded-full col-start-8 col-span-1 justify-self-end flex items-center justify-center cursor-pointer"
              onClick={() => setCardOpen(!cardOpen)}
            >
              <span className="material-icons">
                {cardOpen ? `remove` : `add`}
              </span>
            </div>
          )}
      </div>
      {cardOpen && (
        <div className="border-t-2 border-gray pt-5 my-4">
          <div className="grid grid-cols-8 gap-4">
            <div className="bg-indigo-100 p-2 rounded col-start-1 col-span-8 flex items-center">
              <span className="material-icons text-4xl mr-2">analytics</span>{" "}
              <strong className="text-xl"> Player Stats 2021-2022</strong>
            </div>
            {/* ------ ROW ------ */}
            <div className="bg-indigo-100 p-2 rounded col-start-1 col-span-3">
              <strong>Assists</strong> {player.stats?.fields?.assists}
            </div>
            <div className="bg-indigo-100 p-2 rounded col-start-4 col-span-2 row-span-2">
              <strong>Goals</strong> {player.stats?.fields?.goals}
            </div>
            <div className="flex flex-col col-start-6 col-span-3 row-span-2 p-2 border-2 border-indigo-100">
              <div className="flex items-center justify-between">
                <strong>Rating</strong>
                <span
                  className={`flex-1 h-0.5 bg-${
                    statColors[Math.round((player.fields.rating || 0) / 6)]
                  }-300 ml-2 rounded-full`}
                ></span>
                <span
                  className={`rounded-full w-7 h-7 bg-${
                    statColors[Math.round((player.fields.rating || 0) / 6)]
                  }-300 flex items-center justify-center text-xs font-bold`}
                >
                  {player.fields.rating}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2 h-full">
                {/* Stats */}
                {stats.map((stat: string, index: number) => (
                  <a
                    title={`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${
                      player.fields[stat]
                    }`}
                    className={`col-start-${
                      index + 1
                    } col-span-1 flex flex-col-reverse items-end`}
                    key={stat}
                  >
                    <div className="w-full text-center text-xs font-bold">
                      {stat.substr(0, 1).toUpperCase()}
                    </div>
                    {[...Array(player.fields[stat])].map(
                      (
                        value: string | string[] | number | undefined,
                        index: number
                      ) => (
                        <div
                          className={`bg-${
                            statColors[(player.fields[stat] as number) || 0]
                          }-500 w-full h-1 mt-1`}
                          key={index}
                        ></div>
                      )
                    )}
                  </a>
                ))}
              </div>
            </div>
            {/* ------ ROW ------ */}
            <div className="bg-green-100 p-2 rounded col-start-1 col-span-3">
              <span className="material-icons text-4xl">sports_soccer</span>
              <br />
              <strong>Goals</strong> {player.stats?.fields?.goals}
            </div>
          </div>
          {user &&
            hasRole(
              user["https://www.sescwolves.club/roles"] as string[],
              "Coach"
            ) && (
              <div className="mt-4">
                <p className="flex items-center justify-around">
                  <Link href={`/players/edit/${player.id}`}>
                    <a className="w-full rounded bg-blue-800 text-white py-2 px-10 flex items-center justify-center">
                      Edit
                    </a>
                  </Link>
                </p>
              </div>
            )}
        </div>
      )}
    </li>
  );
};

export default Player;
