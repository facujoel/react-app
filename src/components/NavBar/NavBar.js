import './navBar.css';
import { Navbar,Container,Nav,Dropdown } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div id="nab">
      <Navbar bg="success" expand="lg">
        <Container>
    <Link className=' h2 m-3 btn btn-outline-light' to ="/">Empresa S.A.</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link size="lg" className='m-1 btn-success' to = "/">Incio</Link>
                    <Dropdown>
              <Dropdown.Toggle className='mt' variant="success " size="sm" id="dropdown-basic">
                Productos
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as= {Link} to ="/productos/importados">Importados</Dropdown.Item>
                <Dropdown.Item as= {Link} to ="/productos/nacionales">Nacionales</Dropdown.Item>
                <Dropdown.Item as= {Link} to ="/productos/bicicleta-scooters">Bicis y Scooters</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
        
         </Nav>
        
        <CartWidget className="me-auto"/>
        
    </Navbar.Collapse>
  </Container>
      </Navbar>
      </div>
  );
}
