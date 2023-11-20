function Card(props){
    return(
        <div className="card d-inline-block" style={{width: "18rem", height: "400px", overflow: "hidden"}}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Card;