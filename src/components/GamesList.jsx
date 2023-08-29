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
  const { array, status, error, sortArray } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();

  let displayedGames = sortArray.length > 0 ? sortArray : array; // Выводим отсортированный массив, если он есть

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <GameFilter />
          <div className="row">
            {status === "loading" && sortArray.length === 0 ? (
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
                  className=" w-50 fs-5 fw-bold text-decoration-underline"
                >
                  Подтвердите, пожалуйста, демо сервер CORS
                </a>
              </>
            )}
            {displayedGames.length
              ? displayedGames.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))
              : status !== "loading" && (
                  <div>
                    Сортировка не дала результата! Поменяйте фильтры и
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
