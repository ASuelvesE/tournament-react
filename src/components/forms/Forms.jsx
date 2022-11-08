import { Link } from "react-router-dom";
import { useState } from "react";
import "./forms.css"

export default function Forms() {
    const [name, setName] = useState([]);
    const [details, setDetails] = useState([]);
    const [image, setImage] = useState([]);
    const [message, setMessage] = useState([]);


    const pathTeams = `${process.env.REACT_APP_API}/teams`;

    const handleSubmit = async (e) => {
        e.preventDefault();
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
    };

    return (
        <div className="form">
            <div className="form_buttons">
                <button>Team</button>
                <button>Match</button>
            </div>
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
