import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from './components/Inicio/Inicio';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './components/CartContext/CartContext';

// import {Footer} from './components/Footer/Footer';


function App() {

 

  return (

    <CartProvider>
    
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
      

    </CartProvider>
  
  );
}

export default App;
