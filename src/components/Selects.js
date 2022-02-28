import { useState, useEffect } from "react"
import React from 'react'
import getBreeds from "../helpers/getBreeds"
import Error from "./Error"


const inicialBreed = [
    {
        id: 1,
        name: 'Boxer'
    },
    {
        id: 2,
        name: 'Labrador'
    }
]
const Selects = ({ updateDog }) => {
    const [breeds, setBreeds] = useState(inicialBreed);
    const [error, setError] = useState(null);
    
    useEffect( () =>{
        updateBreeds();    
    },[]);

    const updateBreeds = () =>{
        getBreeds().then((breedApi) =>{ setBreeds(breedApi) })
        //este error se muestra solo para el programador.
        .catch((error) => {
            console.log(error);
            setError("Error al cargar las raza"); 
        })
        

    }



    return (
        <div>

            <select onChange={ (e) => updateDog(e.target.value)}>

                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id} >{breed.name}</option>
                ))
                }






            </select>
            {
                error &&  <Error error={error}/>

            }
           



        </div>
    )
}

export default Selects;