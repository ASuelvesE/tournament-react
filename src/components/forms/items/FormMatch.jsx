import React, { useEffect, useState } from "react";
import LoadingIndicator from "../../utils/LoadingIndicator";
import { trackPromise } from 'react-promise-tracker';
import "./formmatch.css"

export default function FormMatch() {
    const [datetime, setDatetime] = useState([]);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [pointsA, setPointsA] = useState([]);
    const [pointsB, setPointsB] = useState([]);
    const [message, setMessage] = useState([]);
    const [token, setToken] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem("user")));
        setToken(JSON.parse(localStorage.getItem("token")));
    }, []);


    const pathMatches = `${process.env.REACT_APP_API_AWS}/matches`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");
            let res = await trackPromise(fetch(`${pathMatches}`, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    match:{
                        datetime: datetime,
                        teamA: teamA,
                        teamB: teamB,
                        pointsA: pointsA,
                        pointsB: pointsB
                    },
                    profile: profile
                }),
            }));
            if (res.status === 200) {
                window.location = '/'
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="form_match_container">
      <LoadingIndicator/>
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
