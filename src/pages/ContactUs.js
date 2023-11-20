import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserContext from "./Data";

import { useContext } from "react";

function ContactUs(){

    let {user, setUser} = useContext(UserContext);
    return(
        <div>
            <Navbar/>
            <h1 className="text-center mt-5">Contact Us Page</h1>
            <h1>Tell us your thoughts {user}</h1>
            <Footer/>
        </div>
    )
}

export default ContactUs;