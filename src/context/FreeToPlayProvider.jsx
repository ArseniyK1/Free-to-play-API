import { createContext, useState } from "react";
import GamesService from "../API/GamesService";

export const FreeToPlayContext = createContext({
  games: [],
  fetchGames: () => {},
});

export const FreeToPlayProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const gamesArray = await GamesService.getGameList();
    setGames(gamesArray);
  };

  const value = { games, fetchGames };

  return (
    <FreeToPlayContext.Provider value={value}>
      {children}
    </FreeToPlayContext.Provider>
  );
};
