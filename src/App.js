import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar/NavBar";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Inicio} from './components/Inicio/Inicio';
import { Nosotros } from './components/Nosotros/Nosotros';


import {Footer} from './components/Footer/Footer';



function App() {
  return (
    
    <BrowserRouter>


      <NavBar/>



      <Routes>
        <Route path='/' element= {<Inicio/>}/>
        <Route path='/nosotros' element= {<Nosotros/>}/>
        <Route path='/productos' element= {<ItemListContainer/>}/>
        
        <Route path='*' element= {<Navigate to= '/' />}/>

      </Routes>

      
      <Footer/>
      

    </BrowserRouter>
      
    
  );
}

export default App;
