
import React, { useEffect, useState } from "react";
import LoadingIndicator from "../../utils/LoadingIndicator";
import { trackPromise } from 'react-promise-tracker';
import "./formteam.css"

export default function FormTeam() {
    const [name, setName] = useState([]);
    const [details, setDetails] = useState([]);
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState([]);
    const [token, setToken] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem("user")));
        setToken(JSON.parse(localStorage.getItem("token")));
    }, []);


    const pathTeams = `${process.env.REACT_APP_API_AWS}/teams`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");
            let res = await trackPromise(fetch(`${pathTeams}`, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    team: {
                        name: name,
                        details: details,
                        image: image
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
        <div className="form_team_container">
      <LoadingIndicator/>
            <form action={pathTeams} className="form_team" onSubmit={handleSubmit} >
                <div className="form_team_row">
                    <label>Nombre:</label><br />
                    <input type="text" name={name} placeholder="nombre" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form_team_row">
                    <label>Detalles:</label><br />
                    <input type="text" name={details} placeholder="detalles" onChange={(e) => setDetails(e.target.value)} />
                </div>
                <div className="form_team_row">
                    <label>Logo:</label><br />
                    <input type="text" name={image} placeholder="url" onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit" className="btn_submit">Aceptar</button>

            </form>
        </div>

    );
}
