import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { PokeApi } from './components/PokeApi/PokeApi';




function App() {
  return (
    < >
      <NavBar/>
      {/* <ItemListContainer/> */}
      <PokeApi/>
      
    </>
  );
}

export default App;
