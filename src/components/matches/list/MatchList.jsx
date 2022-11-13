import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";

import { getMatches, getMatchesByName } from "../../../services/match.service";
import MatchItem from "../item/MatchItem";
import MatchListHeader from "./MatchListHeader";
import "./matchlist.css";

export default function TeamList() {
  const [results, setResults] = useState([]);
  let { name } = useParams();
  const [userId, setUserId] = useState([]);

  useEffect(() => {
      const profile = JSON.parse(localStorage.getItem("user"));
      if(profile != null){
        setUserId(profile.googleId);
        fetchResults();
      }else {
        alert("Inicia sesión!");
      }
  }, []);

  const fetchResults = async () => {
    try {
      const response = name ? await getMatchesByName(name): await getMatches()
      setResults(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="teams">
      <MatchListHeader/>
      {results.map((result, i) => {
        return <MatchItem key={i} position={i + 1} result={result} />;
      })}
    </section>
  );
}
