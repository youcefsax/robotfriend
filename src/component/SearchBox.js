import React from "react";


const SearchBox=({onserachchange})=>{
    return(
        
            <input className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="entre robot name"
            onChange={onserachchange}
            ></input>

        
    )
}
export default SearchBox 