import { Link } from "react-router-dom";

import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <h1>Torneo</h1>
      <div className="nav-details">
        <Link to="/">Equipos</Link>
        <Link to="/matches">Resultados</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
