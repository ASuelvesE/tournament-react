import "./teamlistheader.css";



export default function TeamListHeader({ team, position }) {
  return (

      <div className="team_list_header">
        <h4>Posición</h4>
        <h4>Equipo</h4>
        <h4>Puntuación</h4>
      </div>

  );
}
