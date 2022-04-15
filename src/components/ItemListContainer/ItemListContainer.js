import React from 'react'
import { Counter } from '../Counter/Counter';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemListContainer = ( {greeting} ) => {
  return (
  <> 
    <h2> {greeting}</h2>
    <ItemCount >ir a algun lugar</ItemCount> 
    <Counter></Counter>
  </> 
  );
}
