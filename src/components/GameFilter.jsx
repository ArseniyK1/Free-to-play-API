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
  };

  const changeSortGenreHandler = (event) => {
    const genre = event.target.value;
    setSort({ ...sort, genre });
  };

  const changeSortEtcHandler = (event) => {
    const etc = event.target.value;

    setSort({ ...sort, etc });
  };

  const sumbitSortHandler = () => {
    if (sort.etc === "По популярности") {
      dispatch(fetchGamesByPopularity());
    } else {
      dispatch(sortGames(sort));
    }
  };

  return (
    <>
      <div className="col-md-5 d-flex  mb-3 w-30 justify-content-between">
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
      </div>
      <button
        className="btn btn-primary ms-3 mb-3 w-auto h-25 my-auto"
        style={{ width: "100%", height: "100%" }}
        onClick={sumbitSortHandler}
      >
        Сортировать
      </button>
    </>
  );
};

export default GameFilter;
