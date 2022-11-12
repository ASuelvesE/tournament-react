import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const [userId, setUserId] = useState([]);
  const [isAdmin, setIsAdmin] = useState([]);
  const clientId = '919119784400-adh3he7uujj7nu2brqf2oikjinc0psga.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
    auth();
  });
  const auth = () => {
    if (userId === "111619516153194658479")
    setIsAdmin(true)
    else {
      setIsAdmin(false)
    }
  }
  const onSuccess = (res) => {
    setUserId(res.profileObj.googleId);
    auth();
    localStorage.setItem("user", JSON.stringify(res.profileObj))
    //console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };

  return (
    <nav>
      <h1>Torneo </h1>
      
      <div className="nav-details">

        <Link to="/">Equipos</Link>
        <Link to="/matches">Resultados</Link>
        {isAdmin && <Link to="/admin">Admin</Link>}
        <GoogleLogin
          className='google'
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </nav>
  );
}
