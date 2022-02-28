import React from 'react'

const Card = ({dog , updateDog, loading}) => {
 
 if(loading) return  <h1>loading...</h1>
 
 
 
 
  return (
    
    <div className='card' onClick={() => updateDog(dog.breed.id)}>
            <img src={dog.image} alt='dog'>
                
            </img>
            <p>

              {dog.breed.name}
            </p>


        
    </div>
  )
}

export default Card;