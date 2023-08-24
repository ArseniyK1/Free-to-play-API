import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="/game_image.jpg"
            className="img-fluid rounded"
            alt="Постер игры"
          />
        </div>
        <div className="col-lg-6">
          <h2>Название игры</h2>
          <p>Дата релиза: 01.01.2023</p>
          <p>Издатель: Издательство</p>
          <p>Разработчик: Разработчик</p>
          <p>Жанр: Шутер</p>
        </div>
      </div>

      <div className="mt-4">
        <h3>Системные требования</h3>
        <p>Минимальные требования: ...</p>
        <p>Рекомендуемые требования: ...</p>
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
              <img
                src="/game_image.jpg"
                className="d-block w-100"
                alt="Скриншот 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/game_image2.jpg"
                className="d-block w-100"
                alt="Скриншот 2"
              />
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

      <div className="mt-4">
        <Link to="/" className="btn btn-primary">
          Вернуться к списку игр
        </Link>
      </div>
    </div>
  );
};

export default GamePage;
