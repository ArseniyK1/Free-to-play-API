import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink to="/games" className="nav-link">
            Список игр
          </NavLink>
          <a
            className="navbar-link me-4"
            href="https://github.com/ArseniyK1/Free-to-play-API"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
