import React, { useEffect, useState } from "react";
import {getAdminByToken} from "../../../services/admin.service";
import "./formmatch.css"

export default function FormMatch() {
    const [datetime, setDatetime] = useState([]);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [pointsA, setPointsA] = useState([]);
    const [pointsB, setPointsB] = useState([]);
    const [message, setMessage] = useState([]);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("user"));
        const token = JSON.parse(localStorage.getItem("accessToken"));
        const data = {
            profile: profile,
            token: token
          }
        fetchAdmins(data)
    }, []);
    const fetchAdmins = async (data) => {
        try {
            let response = await getAdminByToken(data);
            if (response[0].email === data.profile.email) {
                setAuth(true)
            }
        } catch (e) {
            setAuth(false)
            //console.log(e);
        }
    };

    const pathMatches = `${process.env.REACT_APP_API}/matches`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (auth) {
            try {
                let res = await fetch(`${pathMatches}`, {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        datetime: datetime,
                        teamA: teamA,
                        teamB: teamB,
                        pointsA: pointsA,
                        pointsB: pointsB,
                    }),
                });
                if (res.status === 200) {
                    window.location = '/'
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="form_match_container">

            <form action={pathMatches} className="form_match" onSubmit={handleSubmit} >
                <div className="form_match_row">
                    <label>Fecha:</label><br />
                    <input type="datetime-local" name={datetime} placeholder="nombre" onChange={(e) => setDatetime(e.target.value)} />
                </div>
                <div className="form_match_row">
                    <label>Equipo A:</label><br />
                    <input type="text" name={teamA} placeholder="Equipo A" onChange={(e) => setTeamA(e.target.value)} />
                </div>
                <div className="form_match_row">
                    <label>Equipo B:</label><br />
                    <input type="text" name={teamB} placeholder="Equipo B" onChange={(e) => setTeamB(e.target.value)} />
                </div>
                <div className="form_match_row">
                    <label>Puntos del equipo A:</label><br />
                    <input type="number" name={pointsA} placeholder="Puntos del equipo A:" onChange={(e) => setPointsA(e.target.value)} />
                </div>
                <div className="form_match_row">
                    <label>Puntos del equipo B:</label><br />
                    <input type="number" name={pointsB} placeholder="Puntos del equipo B:" onChange={(e) => setPointsB(e.target.value)} />
                </div>

                <button type="submit" className="btn_submit">Aceptar</button>

            </form>
        </div>

    );
}
