import "./matchlistheader.css";



export default function TeamListHeader({ team, position }) {
    return (

        <div className="match_list_header">
            <div className="match_list_header_colum">
                <h4>Fecha</h4>
            </div>

            <div className="match_list_header_colum match_list_header_center">
                <h4>Equipo</h4>
                <h4>Puntuación</h4>
            </div>
            <div className="match_list_header_colum match_list_header_center">
                <h4>Equipo</h4>
                <h4>Puntuación</h4>
            </div>
        </div>

    );
}
