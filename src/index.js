import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import TeamList from "./components/teams/list/TeamList";
import MatchList from "./components/matches/list/MatchList";
import Forms from "./components/forms/Forms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<TeamList />}></Route>
          <Route path="matches/" element={<MatchList />}></Route>
          <Route path="matches/:name" element={<MatchList />}></Route>
          <Route path="admin" element={<Forms />}></Route>
        </Route>

        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
