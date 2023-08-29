import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink to="/" className="nav-link">
            Список игр
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
