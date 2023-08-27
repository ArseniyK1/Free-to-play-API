import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortGames } from "../store/gamesSlice";

const GameFilter = () => {
  const [sort, setSort] = useState({ platform: "", genre: "", etc: "" });
  const dispatch = useDispatch();

  const changeSortPlatformHandler = (event) => {
    const platform = event.target.value;
    const typeSort = "Платформа";
    setSort({ ...sort, platform: platform });
    dispatch(sortGames({ platform, typeSort }));
  };

  const changeSortGenreHandler = (event) => {
    const genre = event.target.value;
    const typeSort = "Жанр";
    setSort({ ...sort, genre: genre });
    dispatch(sortGames({ genre, typeSort }));
  };

  const changeSortEtcHandler = (event) => {
    setSort({ ...sort, etc: event.target.value });
  };

  return (
    <div className="col-md-5 d-flex  mb-3 w-30 justify-content-between">
      <div className="">
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
          <option selected>Все</option>
          <option>PC</option>
          <option>Web Browser</option>
        </select>
      </div>
      <div className="">
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
          <option selected>Все</option>
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
      <div className="">
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
          <option selected>По дате релиза</option>
          <option>По популярности</option>
          <option>По названию</option>
        </select>
      </div>
    </div>
  );
};

export default GameFilter;
