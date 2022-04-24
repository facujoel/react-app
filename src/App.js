import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from './components/Inicio/Inicio';

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {CartContext} from './components/CartContext/CartContext';
import { useState } from 'react';
// import {Footer} from './components/Footer/Footer';






function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item)=>{
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id )
  }

  const cantidadCart = ()=>{
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const totalCart = () =>{
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }

  return (

    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      isInCart,
      cantidadCart,
      totalCart,
    }} >
    
    <BrowserRouter>

 
      <NavBar/>



      <Routes>
        
        <Route path='/' element= {<Inicio/>}/>
        <Route path='/detail/:itemId' element= {<ItemDetailContainer/>}/>
        <Route path='/productos/' element= {<ItemListContainer/>}/>
        <Route path='/productos/:catId' element= {<ItemListContainer/>}/>
        <Route path='/Nacionales/:catId' element= {<ItemListContainer/>}/>
        <Route path='/roductos/:catId' element= {<ItemListContainer/>}/>
        
        
       
        
        
        <Route path='*' element= {<Navigate to= '/' />}/>

      </Routes>

      
      {/* <Footer/> */}
      

    </BrowserRouter>
      

    </CartContext.Provider>
    
  );
}

export default App;
