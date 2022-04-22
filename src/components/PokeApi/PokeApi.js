import { useEffect, useState } from "react";





export const PokeApi = ()=> {


    const [pokemon,setPokemon] = useState(null)
    const [id, setId] = useState(1)
    
    console.log(id);

    const handleSiguiente = () => {
        setId( id+1)
    }
    const handleAnterior = () => {
       id > 1 && setId( id-1)
    }

    useEffect(()=>{
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp)=> resp.json() )
            .then((data)=> {
                 setPokemon(data)
            })
           
    },[id])




    return(
        <div className="container my-5">
            <h2> Poke api </h2>
            <hr/>

            {

            pokemon ?
                <div>
                <h3> {pokemon.name} </h3>
                <img src={pokemon.sprites.front_default} alt= { pokemon.names }/>
            </div>
                : <p> Cargando </p>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary mx-3">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>

        </div>
    );
}