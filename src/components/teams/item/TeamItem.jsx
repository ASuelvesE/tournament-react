import "./team.css";
import { Link } from "react-router-dom";


export default function TeamItem({ team, position }) {
  return (

    <Link to={`/matches/${team.name}`}>
      <div className="team_item">
        <h1>{position}º</h1>
        <div>
          <img src={team.image} alt={team.name} />
          <div>
            <h3>{team.name}</h3>
            <p>{team.details}</p>
          </div>
        </div>
        <div className="points">
          <h3><b>{team.points}</b></h3>
        </div>

      </div>
    </Link>
  );
}

