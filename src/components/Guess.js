import { useState } from 'react';
import unknown from '../media/unknown.webp'
import bobby from '../media/bobby.jpg'
import garry from '../media/garry.jpeg'
import tal from '../media/tal.jpg'


function Guess(){
    let [Name1, setName1] = useState("Unknown");
    let [Name2, setName2] = useState("Unknown");
    let [Name3, setName3] = useState("Unknown");

    let [Desc1, setDesc1] = useState("An American grandmaster, He became the World Chess Champion in 1972 after defeating Boris Spassky, and is renowned for his brilliant tactical play.")
    let [Desc2, setDesc2] = useState("A Russian grandmaster and former World Chess Champion, he held the title from 1985 to 2000 and is known for his fierce rivalry with IBM\'s Deep Blue computer.")
    let [Desc3, setDesc3] = useState("Known as the \"Magician from Riga,\" he was a Latvian grandmaster and the eighth World Chess Champion, celebrated for his imaginative and aggressive playing style.")

    let [Img1, setImg1] = useState(unknown)
    let [Img2, setImg2] = useState(unknown)
    let [Img3, setImg3] = useState(unknown)


    return(
        <div className='container d-flex justify-content-between'>
            {/* FIRST CARD */}

            <div className="card d-inline-block" style={{width: "18rem", height: "550px", overflow: "hidden"}}>
                <img src={Img1} className="card-img-top" alt="..." style={{objectFit: 'cover', width: '300px', height: '300px'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{Name1}</h5>
                    <p className="card-text">{Desc1}</p>
                    <a 
                    className="btn btn-primary w-100"
                    onClick={() => {
                        setName1("Bobby Fischer");
                        setImg1(bobby);
                    }}
                    >Reveal</a>
                </div>
            </div>

            {/* SECOND CARD */}

            <div className="card d-inline-block" style={{width: "18rem", height: "550px", overflow: "hidden"}}>
                <img src={Img2} className="card-img-top" alt="..."style={{objectFit: 'cover', width: '300px', height: '300px'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{Name2}</h5>
                    <p className="card-text">{Desc2}</p>
                    <a  
                    className="btn btn-primary w-100"
                    onClick={() => {
                        setName2("Garry Kasparov");
                        setImg2(garry);
                    }}
                    >Reveal</a>
                </div>
            </div>

            {/* THIRD CARD */}

            <div className="card d-inline-block" style={{width: "18rem", height: "550px", overflow: "hidden"}}>
                <img src={Img3} className="card-img-top" alt="..." style={{objectFit: 'cover', width: '300px', height: '300px'}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{Name3}</h5>
                    <p className="card-text">{Desc3}</p>
                    <a 
                    className="btn btn-primary w-100"
                    onClick={() => {
                        setName3("Mikhail Tal");
                        setImg3(tal);
                    }}
                    >Reveal</a>
                </div>
            </div>
        </div>

        
    )
}

export default Guess;