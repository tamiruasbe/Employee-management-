import { useContext, useState } from "react";
import "./forgetpassword.scss";
import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Forgetpassword = () => {
    //const [ setError] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate()
  
    const {dispatch} = useContext(AuthContext)
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({type:"RESET", payload:user})
          Navigate("/login")
        })
        .catch((error) => {
          //setError(true);
        });
    };
    return (
      <div className="forgetpassword">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset</button>
         
        </form>
        
      </div>
    );
  };
  
export default Forgetpassword
