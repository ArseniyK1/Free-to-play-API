import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByPopularity, sortGames } from "../store/gamesSlice";

const GameFilter = () => {
  const [sort, setSort] = useState({
    platform: "",
    genre: "",
    etc: "",
  });

  const dispatch = useDispatch();

  const changeSortPlatformHandler = (event) => {
    const platform = event.target.value;
    setSort({ ...sort, platform });
    dispatch(sortGames({ ...sort, platform }));
  };

  const changeSortGenreHandler = (event) => {
    const genre = event.target.value;
    setSort({ ...sort, genre });
    dispatch(sortGames({ ...sort, genre }));
  };

  const changeSortEtcHandler = (event) => {
    const etc = event.target.value;
    dispatch(sortGames({ ...sort, etc }));
    setSort({ ...sort, etc });
    if (etc === "По популярности") {
      dispatch(fetchGamesByPopularity());
    }
  };

  const resetSortHandler = () => {
    setSort({ platform: "", genre: "", etc: "" });
    dispatch(sortGames({ ...sort, platform: "", genre: "", etc: "" }));
  };

  return (
    <div>
      <div className="col-md-5 d-flex mb-3 justify-content-between w-50">
        <div>
          <label htmlFor="platformSelect" className="form-label">
            Платформа
          </label>
          <select
            className="form-select text-light"
            style={{
              background: "var(--gray-middle)",
              border: "1px solid var(--purple-primary)",
            }}
            id="platformSelect"
            onChange={changeSortPlatformHandler}
            value={sort.platform}
          >
            <option>Все</option>
            <option>PC</option>
            <option>Web Browser</option>
          </select>
        </div>
        <div>
          <label htmlFor="genreSelect" className="form-label">
            Жанр
          </label>
          <select
            className="form-select text-light"
            style={{
              background: "var(--gray-middle)",
              border: "1px solid var(--purple-primary)",
            }}
            id="genreSelect"
            onChange={changeSortGenreHandler}
            value={sort.genre}
          >
            <option>Все</option>
            <option>Shooter</option>
            <option>MMOARPG</option>
            <option>ARPG</option>
            <option>Fighting</option>
            <option>Action RPG</option>
            <option>Battle Royale</option>
            <option>MOBA</option>
            <option>MMORPG</option>
            <option>Strategy</option>
            <option>Sports</option>
            <option>Racing</option>
            <option>Card Game</option>
            <option>MMO</option>
            <option>Social</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortSelect" className="form-label">
            Сортировка
          </label>
          <select
            className="form-select text-light"
            style={{
              background: "var(--gray-middle)",
              border: "1px solid var(--purple-primary)",
            }}
            id="sortSelect"
            onChange={changeSortEtcHandler}
            value={sort.etc}
          >
            <option>Все</option>
            <option>По популярности</option>
            <option>По дате релиза</option>
            <option>По названию</option>
          </select>
        </div>
        <button
          className="btn text-light w-auto ms-3 mb-0 my-auto"
          onClick={resetSortHandler}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default GameFilter;
