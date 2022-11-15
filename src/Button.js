import React from "react";

/* way 1: 
const Button=(props) =>{
    return <button className="button">{props.name}</button>
    */

    /* or */
    const Button=({name, link}) =>{
        return <a href={link} rel="noreferrer" target="_blank"><button className="button">{name}</button></a>
    
    
}
export default Button;