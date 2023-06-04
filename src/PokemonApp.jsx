import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, pokemonSlice } from './store';
import { PokemonLoaderList } from './components/PokemonLoaderList';

export const PokemonApp = () => {
   const dispatch = useDispatch();

   const {
      isLoading,
      pokemons = [],
      page,
   } = useSelector((state) => state.pokemons);

   useEffect(() => {
      dispatch(getPokemons());
   }, []);

   return (
      <>
         <h1>PokemonApp</h1>
         <hr />

         {isLoading 
            ?<div style={{ marginBottom: 10}}>
               <PokemonLoaderList />
            </div>
            : 
            <ul>
               {pokemons.map(({ name }) => (
                  <li key={name}>{name}</li>
               ))}
            </ul>
         }

         <button
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
         >
                Next
         </button>
      </>
   );
};
