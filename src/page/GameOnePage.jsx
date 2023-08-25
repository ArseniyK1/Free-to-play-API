import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGamesById } from "../store/gamesSlice";

const GamePage = () => {
  const { id } = useParams();
  console.log("Полученный id = ", id);
  const { oneGame } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesById(id));
  }, [id]);

  return (
    <div className="container mt-5">
      {oneGame && (
        <>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={oneGame.thumbnail}
                className="img-fluid rounded"
                alt="Постер игры"
              />
            </div>
            <div className="col-lg-6">
              <h2>Название игры: {oneGame.title}</h2>
              <p>Дата релиза: {oneGame.release_date}</p>
              <p>Издатель: {oneGame.publisher}</p>
              <p>Разработчик: {oneGame.developer}</p>
              <p>Жанр: {oneGame.genre}</p>
            </div>
          </div>

          <div className="mt-4">
            <h3>Системные требования</h3>
            <p>
              Минимальные требования:{" "}
              {oneGame.minimum_system_requirements.graphics}
            </p>
          </div>

          <div className="mt-4">
            <h3>Скриншоты</h3>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="#" className="d-block w-100" alt="Скриншот 1" />
                </div>
                <div className="carousel-item">
                  <img src="#" className="d-block w-100" alt="Скриншот 2" />
                </div>
                {/* Добавь скриншоты по аналогии */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </>
      )}

      <div className="mt-4">
        <Link to="/" className="btn btn-primary">
          Вернуться к списку игр
        </Link>
      </div>
    </div>
  );
};

export default GamePage;
