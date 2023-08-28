import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-auto mt-5">
      <h2>Ого! Мы не ожидали, что вы окажитесь тут</h2>
      <Link className="btn text-light" to="/">
        Вернуться на главную!
      </Link>
    </div>
  );
};

export default ErrorPage;
