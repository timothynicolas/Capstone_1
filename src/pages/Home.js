import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';



import UserContext from './Data';
import { useContext } from 'react';


function Home(){

    let {user, setUser} = useContext(UserContext);

   
    return(
        <>
            <Navbar/>
            <Carousel/>

            
            
            
            

           
            
           

            <Footer/>

        </>
    )
}

export default Home;