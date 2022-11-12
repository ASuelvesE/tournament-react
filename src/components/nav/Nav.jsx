import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdmins } from "../../services/admin.service";
import "./nav.css";

export default function Nav() {
  const [auth, setAuth] = useState([]);
  const clientId = '919119784400-adh3he7uujj7nu2brqf2oikjinc0psga.apps.googleusercontent.com';


  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const fetchAdmins = async (mail) => {
    try {
      const response = await getAdmins(mail);
      if(response[0].email === mail){
        setAuth(true)
        console.log(response);
      }
      console.log(auth)
    } catch (e) {
      setAuth(false)
      //console.log(e);
    }
  };

  const onSuccess = async (res) => {
    localStorage.setItem("user", JSON.stringify(res.profileObj))
    fetchAdmins(res.profileObj.email);
    console.log(auth)
    setAuth(true)
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
        {auth && <Link to="/admin">Admin</Link>}
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
