import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Link} from "react-router-dom";
import { render } from "react-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getLoggedIn  = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/login", loginData);
      await axios.post(
        "http://localhost:5000/users/login",
        loginData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }
 
  return (
    <section>
    <div className="login1" style={{height:500}}>
       <div className="container">
        <span style={{color: '#FF0000'}}>L</span>
        <span style={{color: '#66CC66'}}>O</span>
        <span style={{color: '#FF9966'}}>G</span>
        <span style={{color: '#eff0f7'}}>I</span>
        <span style={{color: '#FF0066'}}>N</span>
      
      <form onSubmit={login}>
        <div class="form-group">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>

        <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div>

        <button className="button1" type="submit">Log in</button>
      </form>
      <p>Dont have an account? <Link to="/users/register">Register</Link></p>
    </div>
  </div>
  </section>
  );
  
}

export default Login;