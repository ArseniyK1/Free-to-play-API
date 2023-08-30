import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gamesSlice";
import GameCard from "./GameCard";
import GameFilter from "./GameFilter";
import { Button, Spinner } from "react-bootstrap";

const GamesList = () => {
  const [retryCount, setRetryCount] = useState(0);
  const [visibleRepeatReqBtn, setVisibleRepeatReqBtn] = useState(true);
  const { array, status, error, sortArray } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();

  let displayedGames = sortArray.length > 0 ? sortArray : array; // Выводим отсортированный массив, если он есть

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const repeatedRequestHandler = () => {
    if (retryCount < 3) {
      // Проверяем, что повторных запросов еще не было 3
      setRetryCount(retryCount + 1); // Увеличиваем счетчик повторных запросов
      dispatch(fetchGames()); // Выполняем запрос заново
      if (retryCount === 2) {
        setVisibleRepeatReqBtn(false);
      }
    }
  };

  const cachedDisplayedGames = useMemo(() => {
    return sortArray.length > 0 ? sortArray : array;
  }, [sortArray, array]);

  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <GameFilter />
          <div className="row">
            {status === "loading" && sortArray.length === 0 ? (
              <Button
                variant="primary"
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
                <div>
                  {error === "Request failed with status code 403" && (
                    <a
                      href="https://cors-anywhere.herokuapp.com/corsdemo"
                      target="_blank"
                      className=" w-50 fs-5 fw-bold text-decoration-underline"
                    >
                      Подтвердите, пожалуйста, демо сервер CORS
                    </a>
                  )}
                </div>
                {visibleRepeatReqBtn && (
                  <button
                    className="btn w-auto text-light mt-3 ms-2"
                    onClick={repeatedRequestHandler}
                  >
                    Попробовать снова
                  </button>
                )}
              </>
            )}
            {cachedDisplayedGames.length > 0 &&
              cachedDisplayedGames.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
