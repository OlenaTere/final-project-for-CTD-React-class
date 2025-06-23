import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="site-title">TeamChart</h1>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/board"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Board
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
