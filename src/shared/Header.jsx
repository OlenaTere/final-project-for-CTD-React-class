import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="app-header">
      <h1>TeamChart</h1>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/board" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Board</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
      </nav>
    </header>
  );
}