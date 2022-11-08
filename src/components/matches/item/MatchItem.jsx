import "./match.css";

export default function TeamItem({ result, position }) {
  let fecha = new Date(result.datetime).toLocaleString();

  return (
    <div className="match_item">
      <p className="match_fecha"><b>{fecha}</b></p>

      <div className="match_container">
        <div className="match_container_logo">
          <img className="match_img_logo" src={result.teamAImage} alt={result.name} />
          <h3>{result.teamA}</h3>
        </div>
        <p className="match_puntuacion"><b>{result.pointsA}</b></p>
      </div>


      <div className="match_container">
        <div className="match_container_logo">
          <img className="match_img_logo" src={result.teamBImage} alt={result.name} />
          <h3>{result.teamB}</h3>
        </div>
        <p className="match_puntuacion"><b>{result.pointsB}</b></p>
      </div>

    </div>
  );
}
