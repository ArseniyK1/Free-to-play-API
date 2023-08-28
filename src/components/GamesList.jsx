import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGames,
  fetchGamesByPopularity,
  sortGames,
} from "../store/gamesSlice";
import GameCard from "./GameCard";
import GameFilter from "./GameFilter";
import { Button, Spinner } from "react-bootstrap";

const GamesList = () => {
  const { array, status, error, currentFilters } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();

  let displayedGames = array.length > 0 ? array : []; // Используем отсортированный массив, если он есть
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const fetchGamesWithSort = (sortType) => {
    const currentFiltersWithSort = {
      ...currentFilters,
      typeSort: sortType,
    };

    dispatch(sortGames(currentFiltersWithSort));
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Список игр</h2>

        <div className="row">
          <GameFilter fetchGamesWithSort={fetchGamesWithSort} />
          <div className="row">
            {status === "loading" && array.length === 0 ? (
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
            ) : null}
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
            {displayedGames.length > 0
              ? displayedGames.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))
              : status !== "loading" && (
                  <div>
                    Сортировка не дала результата! Обновите страницу и
                    попробуйте снова!
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
