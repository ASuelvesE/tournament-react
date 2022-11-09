import { Link } from "react-router-dom";
import { useState } from "react";
import "./forms.css"
import FormTeam from "./items/FormTeam";
import FormMatch from "./items/FormMatch";

export default function Forms() {

    const [showTeam, setShowTeam] = useState(true);

    function activateTeam(e) {
        setShowTeam(true)
    }

    function activateMatch(e) {
        setShowTeam(false)
    }

    return (
        <div className="form">
            <div className="form_buttons">
                <button onClick={activateTeam}>Team</button>
                <button onClick={activateMatch}>Match</button>
            </div>
            {showTeam && <FormTeam />}
            {!showTeam && <FormMatch />}
        </div>

    );
}
