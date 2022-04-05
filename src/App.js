import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartWidget } from "./components/CartWidget/CartWidget";
import { ItemCount } from "./components/ItemCount/ItemCount";




function App() {
  return (
    < >
      <NavBar/>
      <ItemListContainer greeting= "Hola perro"/>
      <ItemCount/>
      
    </>
  );
}

export default App;
