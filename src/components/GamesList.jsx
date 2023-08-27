import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import GameFilter from "./GameFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, fetchGamesByPopularity } from "../store/gamesSlice";
import { Button, Spinner } from "react-bootstrap";

const GamesList = () => {
  const { array, status, error, sortGame } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();
  let displayedGames = sortGame.length > 0 ? sortGame : array; // Используем отсортированный массив, если он есть

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const fetchGamesWithSort = (sortType) => {
    dispatch(fetchGames()); // Загружаем игры без сортировки перед запросом с сортировкой

    if (sortType === "По популярности") {
      dispatch(fetchGamesByPopularity());
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Список игр</h2>

        <div className="row">
          <GameFilter fetchGamesWithSort={fetchGamesWithSort} />
          <div className="row">
            {status === "loading" && displayedGames.length === 0 && (
              <Button
                variant="primary"
                disabled
                className="w-auto mx-auto"
                style={{ background: "var(--purple-primary)" }}
              >
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>
            )}
            {error && (
              <>
                <h2>Ошибка: {error} </h2>
                <a
                  href="https://cors-anywhere.herokuapp.com/corsdemo"
                  target="_blank"
                >
                  Подтвердите, пожалуйста, демо сервер CORS
                </a>
              </>
            )}
            {displayedGames.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
