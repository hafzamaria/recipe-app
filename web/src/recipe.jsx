import React from "react";
import './recipe.css'

const Recepi=({title,calories,image,ingredients})=>{
    return(
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
            {
            ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))
            }
            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt="" />

        </div>
    )
}
export default Recepi;