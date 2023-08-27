import { Link } from "react-router-dom";
import getRusDate from "../utils/getRusDate";

const GameCard = ({ game }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card game-card align-items-stretch h-100">
        <img
          src={game.thumbnail}
          className="card-img-top"
          alt="Изображение игры"
        />
        <div className="card-body">
          <h5 className="card-title">Название игры: {game.title}</h5>
          <p className="card-text">
            Дата релиза: {getRusDate(game.release_date)}
          </p>
          <p className="card-text">Издатель: {game.developer}</p>
          <p className="card-text">Жанр: {game.genre}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">
            <Link to={`games/${game.id}`}>Подробнее</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
