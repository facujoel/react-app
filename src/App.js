import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import {Inicio} from './components/Inicio/Inicio';
import { Nosotros } from './components/Nosotros/Nosotros';


import {Footer} from './components/Footer/Footer';




function App() {
  return (
    
    <BrowserRouter>


      <NavBar/>



      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/productos/:catId' element= {<ItemListContainer/>}/>
        <Route path='/Nacionales/:catId' element= {<ItemListContainer/>}/>
        <Route path='/roductos/:catId' element= {<ItemListContainer/>}/>
        
        
       
        
        
        <Route path='*' element= {<Navigate to= '/' />}/>

      </Routes>

      
      <Footer/>
      

    </BrowserRouter>
      
    
  );
}

export default App;
