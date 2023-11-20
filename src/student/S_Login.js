import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../pages/Data";

function S_Login(){

    let {user, setUser} = useContext(UserContext);

    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");

    let navigate = useNavigate();

    let submitForm = () => {
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");

        if (((fname.value == "") || (fname.value == null)) || ((lname.value == "") || (lname.value == null))){
            alert("Please enter your first and last name");

            fname.style.border = "2px solid red";
            lname.style.border = "2px solid red";
        }else{
            let fullname = fname.value + " " + lname.value;
            setUser(fullname);

            navigate('/home');
        }
    }

    return(
        <div>
            <form>
                <h1>Login Form</h1>
                <label>First Name:</label><br/>
                <input type="text" id="fname" autoComplete="off" value={fname} onChange={(e) => {setFname(e.target.value)}}/><br/>
                <label>Last Name:</label><br/>
                <input type="text" id="lname" value={lname} onChange={(e) => {setLname(e.target.value)}}/><br/>
                <button type="button" onClick={submitForm}>Submit</button>
            </form>

            <br/>

            <Link className="btn btn-primary" to="/home">Student</Link>
            <Link className="btn btn-primary" to="/contact">Admin</Link>
        </div>
    )
}

export default S_Login;