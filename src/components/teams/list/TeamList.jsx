import React, { useEffect, useState } from "react";

import { getTeams } from "../../../services/team.service";

import TeamItem from "../item/TeamItem";

import "./teamlist.css";
import TeamListHeader from "./TeamListHeader";

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await getTeams();
      //console.log(response);
      setTeams(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (

    <section className="teams">
        <TeamListHeader/>
      {teams.map((team, i) => {
        return <TeamItem key={i} position={i + 1} team={team} />;
      })}
    </section>
  );
}
