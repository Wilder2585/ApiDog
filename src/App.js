import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const inicialQuote = {

  text: "",
  author: ""

}

function App() {


  const [quote, setQuote] = useState(inicialQuote);
  const [loading, setLoading] = useState(false);  

  const updateQuote = async()=>{
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json(); //destructuramo con llaves, para que no aparesca en corchetes que es mas dificil manejar.
    // hacer esto hace que la variable newQuote no imprima como array si no como un objeto.
    
      setQuote({
        text: newQuote.quote,
        author: newQuote.author
      })
      setLoading(false);
  
  }


  useEffect (()=>{
      updateQuote();  

  },[])

    return(
      <div className="app">
        
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
            alt="logo"
          />
          <button onClick={updateQuote}>Get another</button>
         {
          //esto es un operador terneario: El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
            loading ? <Spinner /> : <Quote quote={quote}/>

         }


      </div>
    
  );
}

export default App;
