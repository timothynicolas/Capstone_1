import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';

// PAGES DIRECTORY
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';
import UserContext from './pages/Data';
import Login from './pages/Login';
import LoginDecision from './pages/LoginDecision';
import S_Login from './student/S_Login';


function App(){

    let [user, setUser] = useState("Guest");
    return(
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="/" element={<LoginDecision/>}/>

                        {/* ADMIN */}

                        <Route path="/login" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/contact" element={<ContactUs/>}/>

                        {/* STUDENTS */}

                        <Route path="/student/login" element={<S_Login/>}/>

                         
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter> 
        </div>
    )
}

export default App;