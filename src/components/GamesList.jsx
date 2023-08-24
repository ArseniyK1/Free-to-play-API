import GameCard from "./GameCard";
import { useContext, useEffect } from "react";
import GameFilter from "./GameFilter";
import { FreeToPlayContext } from "../context/FreeToPlayProvider";

const GamesList = () => {
  const { games, fetchGames } = useContext(FreeToPlayContext);

  useEffect(() => {
    try {
      fetchGames();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Список игр</h2>
        <div className="row">
          <GameFilter />
          <div className="row">
            {games &&
              games.map((game) => <GameCard game={game} key={game.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
