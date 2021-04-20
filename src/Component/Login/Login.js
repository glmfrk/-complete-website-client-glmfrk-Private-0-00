import React, { useContext, useState } from 'react';
import './Login.css'
import Nephron from '../../images/nephron.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Login = () => {
  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory()
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleLoginBtn = () =>{   
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // const credential = result.credential;
    // const token = credential.accessToken;
    // const user = result.user;
    setLoggedInUser(result.user);
    history.replace(from)
    console.log(result.user)

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)
  });
    }
    return (
        <div className="container-fluid text-center my-3">
            <div className="container  mx-auto">
                <div className="btnStyle pt-4 mb-5">
                    <img className="logo  mb-5" src={Nephron} alt="nephron" />
                    <h1 className="text-center mb-3">Login With</h1>
                    <div >
                    <button type='button'  onClick={handleLoginBtn}>
                    <FontAwesomeIcon className=" btnIcon" icon={faGoogle} />   
                     Continue With Google</button>
                    </div>
                    <small className="text-center mb-5">Don't have an account? <Link to="#">create account</Link> </small>                   
                </div>
                <h1 >{loggedInUser.displayName}</h1>
                <img className="logo  mb-5" src={loggedInUser.photoURL} alt="nephron" />
            </div>
        </div>
    );
};

export default Login;