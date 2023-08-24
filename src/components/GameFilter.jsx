const GameFilter = () => {
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
        >
          <option selected>Все</option>
          <option>PC</option>
          <option>PlayStation</option>
          <option>Xbox</option>
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
        >
          <option selected>Все</option>
          <option>Шутер</option>
          <option>Ролевая</option>
          <option>Головоломка</option>
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
