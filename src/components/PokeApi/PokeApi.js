import { useEffect, useState } from "react";





export const PokeApi = ()=> {


    const [pokemon,setPokemon] = useState(null)
    
    console.log(pokemon);


    useEffect(()=>{
        
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then((resp)=> resp.json() )
            .then((data)=> {
                 setPokemon(data)
            })
           
    },[])




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

        </div>
    );
}