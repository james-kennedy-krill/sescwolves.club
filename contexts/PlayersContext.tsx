import { createContext, useState } from "react";
import { Player } from "../pages/api/utils/Airtable";

type Props = {
  children?: React.ReactNode;
};

export type PlayersContextType = {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  refreshPlayers: () => void;
  sortPlayers: (sortBy: string, direction: "asc" | "desc") => void;
  updatePlayer: (updatedPlayer: Player) => void;
  deletePlayer: (id: string) => void;
  addPlayer: (player: Player) => void;
};

const PlayersContext = createContext<PlayersContextType>({
  players: [],
  setPlayers: (players) => console.warn("no players"),
  refreshPlayers: () => console.warn("no players"),
  sortPlayers: () => console.warn("no players"),
  updatePlayer: (updatedPlayer) => console.warn("no players"),
  deletePlayer: (id) => console.warn("no players"),
  addPlayer: (player) => console.warn("no player"),
});

const PlayersProvider = ({ children }: Props): JSX.Element => {
  const [players, setPlayers] = useState<Player[]>([]);

  const refreshPlayers = async () => {
    try {
      const res = await fetch("/api/getPlayers");
      const latestPlayers = await res.json();
      setPlayers(latestPlayers);
    } catch (err) {
      console.error(err);
    }
  };

  const sortPlayers = async (sortBy: string, direction: "asc" | "desc") => {
    try {
      const res = await fetch(
        `/api/getPlayers?sortBy=${sortBy}&direction=${direction}`
      );
      const latestPlayers = await res.json();
      setPlayers(latestPlayers);
    } catch (err) {
      console.error(err);
    }
  };

  const addPlayer = async (player: Player) => {
    try {
      const res = await fetch("/api/createPlayer", {
        method: "POST",
        body: JSON.stringify(player),
        headers: { "Content-Type": "application/json" },
      });
      const newPlayer: Player = await res.json();
      setPlayers((prevPlayers) => {
        return [newPlayer, ...prevPlayers];
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updatePlayer = async (updatedPlayer: Player) => {
    try {
      const res = await fetch("/api/updatePlayer", {
        method: "PUT",
        body: JSON.stringify(updatedPlayer),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      setPlayers((prevPlayers) => {
        const existingPlayers = [...prevPlayers];
        const existingPlayer: Player | undefined = existingPlayers.find(
          (player) => player.id === updatedPlayer.id
        );
        if (existingPlayer) {
          existingPlayer.fields = updatedPlayer.fields;
        }
        return existingPlayers;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlayer = async (id: string) => {
    try {
      await fetch("/api/deletePlayer", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      setPlayers((prevPlayers) => {
        return prevPlayers.filter((player) => player.id !== id);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        refreshPlayers,
        sortPlayers,
        updatePlayer,
        deletePlayer,
        addPlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersProvider, PlayersContext };
