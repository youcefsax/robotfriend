import React from "react";

const Card=({name,email,id})=>{
    
    return(
        
        <div className="tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${name}?100x100`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
} 
export default Card; 