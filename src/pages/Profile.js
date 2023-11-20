
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserContext from './Data';


import { useContext } from 'react';

function Shop(){

    let {user, setUser} = useContext(UserContext);
    return(
        <div>
            <Navbar/>
            <h1>Hi, {user}!</h1>
            <h1 className='text-center my-5'>PROFILE PAGE</h1>
            
            
            
            <Footer/>
        </div>
    )
}

export default Shop;