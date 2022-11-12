import "./team.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export default function TeamItem({ team, position }) {
  const [color, setColor] = useState([]);

  useEffect(() => {
    colorPosition();
  }, []);

  const colorPosition = () => {
    if(position === 1){
      setColor("#0AE800");
    }else if(position === 2){
      setColor("#0074E8");
    }else if(position === 3){
      setColor("#E81C00");
    }else {
      setColor("black");
    }
  }

  return (

    <Link to={`/matches/${team.name}`}>
      <div className="team_item">
        <h1 style={{color: color}}>{position}º</h1>
        <div>
          <img src={team.image} alt={team.name} />
          <div>
            <h3>{team.name}</h3>
            <p>{team.details}</p>
          </div>
        </div>
        <div className="points">
          <h3 style={{color: color}}><b>{team.points}</b></h3>
        </div>

      </div>
    </Link>
  );
}

