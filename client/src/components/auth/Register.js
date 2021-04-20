import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [role, setRole] = useState("");

  const  getLoggedIn  = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
        role
      };

      // await axios.post("http://localhost:3000/auth/", registerData);
      await axios.post(
        "http://localhost:5000/users/register",
        registerData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
    <div className="login1">
      <div className="container reg-text">
        <span style={{color: '#FF0000'}}>R</span>
        <span style={{color: '#66CC66'}}>E</span>
        <span style={{color: '#FF9966'}}>G</span>
        <span style={{color: '#eff0f7'}}>I</span>
        <span style={{color: '#FF0066'}}>S</span>
        <span style={{color: '#FF0000'}}>T</span>
        <span style={{color: '#66CC66'}}>E</span>
        <span style={{color: '#FF9966'}}>R</span>
        </div> 
      <form onSubmit={register}>
        <div className="form-group col-sm-2 col-md-4 text-left">
          
				<label htmlFor="">What is Your Email ?</label>
        <div className = "text">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>
        </div>

        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor="">Enter Your PassWord</label>
        <div className = "text">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div>
        </div>

        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor=""> Confirm Your Password</label>
        <div className = "text">
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        </div>
        </div>


        <div className="form-group col-sm-2 col-md-4 text-left">
				<label htmlFor="">Choose Your Role</label>
        <div className = "text">
        <select
          style={{width: 100}}
          type="role"
          placeholder="Choose Your Role:"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          
        >
        <option selected="selected" value='1' >User</option>
        <option value='2' >NailTech</option>
        </select>
        </div>
        </div>


        <button className = "button1" type="submit">Register</button>
        

      </form>
      
    </div>
    </section>
  );
}

export default Register;