import Card from "./components/Card";
import Selects from "./components/Selects";
import {useState, useEffect} from "react";
import getDog from "./helpers/getDog";
import Error from "./components/Error";

const initialDog = 
  {
    image:"",
    breed:{
      id:0,
      name: '',
    },
  }
function App() {

  const [dog, setDog]= useState(initialDog);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect( () =>{
    updateDog();    
},[]);

    const updateDog = (breedId) => {
    setLoading(true)
    getDog(breedId).then((dogApi) =>{setDog(dogApi);
      setLoading(false)})
      .catch((error) => {
        console.log(error);
        setError("Error al cargar un perro")
        setLoading(false)
      })
    
  }


    return(
      <div className="app">
        
        <Selects updateDog={updateDog}/>

        { error && <Error error={error}/>}
        

        <Card  dog={dog} updateDog={updateDog} loading={loading}/>
        

       

        
        

      </div>
    
  );
}

export default App;
