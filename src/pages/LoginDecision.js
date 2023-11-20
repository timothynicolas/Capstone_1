
import { Link } from "react-router-dom";


function LoginDecision(){

    

    return(
        <div className="container">
            <h1>I am a:</h1>

            <Link className="btn btn-primary" to="/login">Student</Link>
            <Link className="btn btn-primary" to="/contact">Admin</Link>
        </div>
    )
}

export default LoginDecision;