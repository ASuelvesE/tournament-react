import "./matchlistheader.css";



export default function TeamListHeader({ team, position }) {
    return (

        <div className="match_list_header">
            <div className="match_list_header_colum">
                <h2>Fecha</h2>
            </div>

            <div className="match_list_header_colum match_list_header_center">
                <h2>Equipo</h2>
                <h2>Puntuación</h2>
            </div>
            <div className="match_list_header_colum match_list_header_center">
                <h2>Equipo</h2>
                <h2>Puntuación</h2>
            </div>
        </div>

    );
}
