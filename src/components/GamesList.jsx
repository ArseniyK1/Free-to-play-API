import GameCard from "./GameCard";
import { useEffect } from "react";
import GameFilter from "./GameFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gamesSlice";

const GamesList = () => {
  const games = useSelector((state) => state.games.array);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
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
