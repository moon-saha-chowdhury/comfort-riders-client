import React, { useContext } from 'react';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import { faFlag, faCheckCircle, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

function Login() {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);

      })
  }


  const handleBlur = (event) => {
    console.log(event.target.name, event.target.value);
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      // console.log(isFormValid);
    }

    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasValue = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasValue

    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      console.log(newUserInfo);
      setUser(newUserInfo);

    }
  }

  const handleSubmit = (event) => {
      console.log(user.email,user.password);
    if (newUser && user.email && user.password) {
      console.log("submitting");
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(response => {
          // Signed in
          const newSuccessText = { ...user }
          newSuccessText.error = '';
          newSuccessText.success = true;
          setUser(newSuccessText);
          updateUsers(user.name);

          // ...
        })
        .catch(error => {
          const newUserError = { ...user };
          newUserError.error = error.message;
          newUserError.success = false;
          setUser(newUserError);
          // ..
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          // Signed in
          const newSuccessText = { ...user }
          newSuccessText.error = '';
          newSuccessText.success = true;
          setUser(newSuccessText);
          setLoggedInUser(newSuccessText);
          history.replace(from);
          console.log('sign in userinfo', res.user);
          // ...
        })
        .catch((error) => {
          const newUserError = { ...user };
          newUserError.error = error.message;
          newUserError.success = false;
          setUser(newUserError);
        });
    }
    event.preventDefault();
    //submit button a click kore page reload hoy aita off korar jonno preventDefault method

  }

  const updateUsers = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName:name
    }).then(function () {
      console.log('user name updated successfully');
      // Update successful.
    }).catch(function (error) {
      console.log(error);
      // An error happened.
    });

  }

  return (
    <div className="text-center">
        <Header></Header>
        <form onSubmit={handleSubmit}>
        <h3 className="text-primary">{newUser?"Create An Account":"Login"} </h3> 
        {newUser && <input className=" w-25 mb-3" name="name" onBlur={handleBlur} type="text" placeholder="Your Name" />
        }        
        <br />
        <input className=" w-25 mb-3" onBlur={handleBlur} type="text" name="email" placeholder="Your Email Address" required />
        <br />
        <input className=" w-25 mb-3" onBlur={handleBlur} type="password" name="password" placeholder="Your Password" required />
        <br />
        <input className=" w-25" type="submit" value={newUser? "Sign Up" :"Sign In"} />
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {
        user.success && <p style={{ color: "green" }}>User {newUser ? "Created" : "Log In"} Successfully</p>

      }
       <button className="btn btn-primary w-25 rounded" onClick={handleSignIn}>    
       <FontAwesomeIcon icon= {faGoogle}/> Sign In With Google </button>
      <br/>
      <br/>
      
      {
        user.isSignedIn && <div>
          <h2>Welcome {user.name}</h2>
          <p>Your Email: {user.email}</p>
          <img src={user.photo} alt="user"></img>
        </div>
      }
      <input className="bg-warning w-5 mb-3 text-center data-bs-touch"  onClick={() => setNewUser(!newUser)} name="newUser" placeholder={!newUser? "New User Sign UP" :"User Login"}/>

    </div>
  );
}

export default Login;