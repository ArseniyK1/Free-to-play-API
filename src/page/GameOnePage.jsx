import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGamesById } from "../store/gamesSlice";
import { Button, Spinner } from "react-bootstrap";
import getRusDate from "../utils/getRusDate";

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { oneGame, status, error } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const initialSlideIndex = 0;
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlideIndex);

  useEffect(() => {
    dispatch(fetchGamesById(id));
  }, [dispatch, id]);

  return (
    <div className="container mt-5">
      {status === "loading" ? (
        <div className="text-center">
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
        </div>
      ) : (
        oneGame && (
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
                <div className="d-flex flex-column justify-content-center p-4  text-light">
                  <h2>Название игры: {oneGame.title}</h2>
                  <p>Дата релиза: {getRusDate(oneGame.release_date)}</p>
                  <p>Издатель: {oneGame.publisher}</p>
                  <p>Разработчик: {oneGame.developer}</p>
                  <p>Жанр: {oneGame.genre}</p>
                </div>
              </div>
            </div>

            {oneGame.minimum_system_requirements && (
              <div className="mt-4 p-4 bg-dark rounded">
                <h3>Системные требования</h3>
                <p>Минимальные требования:</p>
                <p>{oneGame.minimum_system_requirements.graphics}</p>
                <p>{oneGame.minimum_system_requirements.memory}</p>
                <p>{oneGame.minimum_system_requirements.os}</p>
                <p>{oneGame.minimum_system_requirements.processor}</p>
              </div>
            )}

            {oneGame.screenshots && (
              <div className="mt-4">
                <h3>Скриншоты</h3>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide rounded"
                >
                  <div className="carousel-inner">
                    {oneGame.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === activeSlideIndex ? "active" : ""
                        }`}
                        style={{ borderRadius: "1rem" }}
                      >
                        <img
                          src={screenshot.image}
                          className="d-block w-100 rounded"
                          alt={`Скриншот ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                    onClick={() =>
                      setActiveSlideIndex(
                        (activeSlideIndex - 1 + oneGame.screenshots.length) %
                          oneGame.screenshots.length
                      )
                    }
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
                    onClick={() =>
                      setActiveSlideIndex(
                        (activeSlideIndex + 1) % oneGame.screenshots.length
                      )
                    }
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4">
              <button onClick={() => navigate(-1)} className="btn btn-primary">
                Вернуться к списку игр
              </button>
            </div>
          </>
        )
      )}
      {error && !oneGame && (
        <div className="mt-4">
          <h2>Ошибка: {error}</h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
