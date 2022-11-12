import "./match.css";
import React, { useEffect, useState } from "react";

export default function TeamItem({ result, position }) {
  const [winnerA, setWinnerA] = useState([]);

  let fecha = new Date(result.datetime).toLocaleString();

  useEffect(() => {
    checkWinner();
  }, []);

  const checkWinner = () => {
    if(result.pointsA > result.pointsB){
      setWinnerA(true);
    }else setWinnerA(false);
  }

  return (
    <div className="match_item">
      <p className="match_fecha"><b>{fecha}</b></p>

      <div className="match_container">
        <div className="match_container_logo">
          <img className="match_img_logo" src={result.teamAImage} alt={result.name} />
          <h3>{result.teamA}</h3>
        </div>
        <p className="match_puntuacion" style={{color: winnerA ? '#0AE800' : '#E81C00'}}><b>{result.pointsA}</b></p>
      </div>


      <div className="match_container">
        <div className="match_container_logo">
          <img className="match_img_logo" src={result.teamBImage} alt={result.name} />
          <h3>{result.teamB}</h3>
        </div>
        <p className="match_puntuacion" style={{color: !winnerA ? '#0AE800' : '#E81C00'}}><b>{result.pointsB}</b></p>
      </div>

    </div>
  );
}
