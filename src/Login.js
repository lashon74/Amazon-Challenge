import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>
            <label htmlFor="email">E-mail</label>
          </h5>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>
            <label htmlFor="password">Password</label>
          </h5>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="**********"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign-in
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and out
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
