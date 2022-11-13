
import React, { useEffect, useState } from "react";
import {getAdminByToken} from "../../../services/admin.service";
import "./formteam.css"

export default function FormTeam() {
    const [name, setName] = useState([]);
    const [details, setDetails] = useState([]);
    const [image, setImage] = useState([]);
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
            console.log(response)
            if (response[0].email === data.profile.email) {
                setAuth(true)
            }
        } catch (e) {
            setAuth(false)
            //console.log(e);
        }
    };

    const pathTeams = `${process.env.REACT_APP_API}/teams`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (auth) {
            try {
                let res = await fetch(`${pathTeams}`, {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        details: details,
                        image: image,
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
        <div className="form_team_container">

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
