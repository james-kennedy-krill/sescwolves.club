import { withPageAuthRequired, UserProfile } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Player from "../../../components/Player";
import { PlayersContext } from "../../../contexts/PlayersContext";
import { useEffect, useContext, useState } from "react";
import { hasRole } from "../../../components/utils";
import {
  table,
  getMinifiedRecord,
  Player as PlayerType,
} from "../../api/utils/Airtable";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

const EditPlayer = ({
  initialPlayer,
  pid,
  user,
  error,
  isLoading,
}: {
  initialPlayer: PlayerType;
  pid?: string;
  user: UserProfile | undefined;
  error: Error | undefined;
  isLoading: boolean;
}) => {
  const [player, setPlayer] = useState(initialPlayer);
  const { updatePlayer } = useContext(PlayersContext);
  console.log(pid);
  console.log("player", player);

  if (error) return <div>There was an error.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      Player {pid}: {player.fields.firstName} {player.fields.lastName}
    </div>
  );
};

export default EditPlayer;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const { pid }: any = ctx.params;
    if (pid && typeof pid == "string") {
      const record = await table.find(pid);
      const player = getMinifiedRecord(record);
      console.log(player);
      return {
        props: {
          pid,
          initialPlayer: player,
        },
      };
    }
  } catch (err) {
    console.error(err);
    return { props: { error: "There was an error." } };
  }
};
