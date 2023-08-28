import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchGamesById } from "../store/gamesSlice";
import { Button, Spinner } from "react-bootstrap";

const initialSlideIndex = 0;

const GamePage = () => {
  const { id } = useParams();
  const { oneGame, status, error } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlideIndex);
  console.log(oneGame);

  useEffect(() => {
    dispatch(fetchGamesById(id));
  }, [id]);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="container mt-5">
      {status === "loading" ? (
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
                <h2>Название игры: {oneGame.title}</h2>
                <p>Дата релиза: {oneGame.release_date}</p>
                <p>Издатель: {oneGame.publisher}</p>
                <p>Разработчик: {oneGame.developer}</p>
                <p>Жанр: {oneGame.genre}</p>
              </div>
            </div>

            <div className="mt-4">
              {oneGame.minimum_system_requirements ? (
                <>
                  <h3>Системные требования</h3>
                  Минимальные требования:
                  <p>{oneGame.minimum_system_requirements.graphics}</p>
                  <p>{oneGame.minimum_system_requirements.memory}</p>
                  <p>{oneGame.minimum_system_requirements.os}</p>
                  <p>{oneGame.minimum_system_requirements.processor}</p>
                  <p>{oneGame.minimum_system_requirements.storage}</p>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="mt-4">
              <h3>Скриншоты</h3>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {oneGame.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === activeSlideIndex ? "active" : ""
                      }`}
                    >
                      <img
                        src={screenshot.image}
                        className="d-block w-100"
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
                      activeSlideIndex === 0
                        ? oneGame.screenshots.length - 1
                        : activeSlideIndex - 1
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
          </>
        )
      )}

      <div className="mt-4">
        {/* <Link to="/games" className="btn btn-primary"> */}
        <button onClick={() => navigate(-1)} className="btn text-light">
          Вернуться к списку игр
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default GamePage;
