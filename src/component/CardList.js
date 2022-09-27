import React from "react";
import Card from "./Card";
const CardList=({robots})=>{
    return(
    <div className="fl w-100 pa2 tc">
       {robots.map((user,i)=>{
        return <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} />

    })
    }
    </div>
 
    )
}
export default CardList