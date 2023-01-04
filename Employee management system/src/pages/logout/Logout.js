import { useContext } from "react";
import "./logout.scss";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Logout = () => {
    
    const Navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const handleLogout = (e) => {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          dispatch({type:"LOGOUT", payload:null})
          Navigate("/login")
        })
        .catch((error) => {
        });
    };
  return (
    <div>
          <button type="submit"onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}
export default Logout
