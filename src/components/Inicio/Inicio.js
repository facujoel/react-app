
import { Button, Container,Row,Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inicio.css';
import logo from "../img/logo.png";


export const Inicio = () => {
  return (
    <section className='inicio' id='inicio'>

    <div className='content'>
   <h3>Concesionaria Multimarca</h3>
<p>Lorem Ipsum is simply dummy text of the printing and 
typesetting industry.
Lorem Ipsum has been the industry's
 standard dummy text ever since the 1500s </p>
 <Button variant="outline-primary" as= {Link} to ="/productos/"> Ver motos</Button>
  
</div>

<div className='img' >
<img src={logo}/>
</div>

</section>
  )
}
