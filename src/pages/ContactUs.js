import UserContext from "./Data";

import { useContext } from "react";
import React, { useState } from 'react';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //form submission logic here (sending data to server)
        console.log('Form submitted:', formData);
    }

    let {user, setUser} = useContext(UserContext);
    return(
        <div style={{ backgroundImage: 'url("/")'}}>

            <h1 class="text-center" style={{paddingTop: '10vh',}}>Need help or <br/> wants to stay connected {user}?</h1>

            <form className="formContainer" style={{paddingTop: '7vh',}}>
                <div class="mb-3 row text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}> 
                    <div class="col-sm-4">
                        <input type="text" className="form-control" id="inputName" placeholder="Name" value={formData.name} onChange={handleChange}/>
                        <br/>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={formData.email} onChange={handleChange}/>
                        <br/>
                        <textarea type="text" className="form-control" id="inputEmail" placeholder="Your message here..."/>
                        <br/>
                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ContactUs;
