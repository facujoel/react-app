import { Navbar,Container,Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
      <Navbar bg="danger" expand="lg">
        <Container>
    <Link className=' h3 m-3 btn btn-outline-light' to ="/">Empresa S.A.</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className='m-3 width-25 btn-danger' to = "/">Incio</Link>
        <Link className='m-3 width-25 btn-danger' to = "productos">Productos</Link>
        <Link className='m-3 width-25 btn-danger' to = "nosotros">Nosotros</Link>
        <Link className='m-3 width-25 btn-danger' to = "contacto">Contacto</Link>
        </Nav>
        <Nav.Link href="#carrito">
        <CartWidget href="#" className="me-auto"/>
        </Nav.Link>
    </Navbar.Collapse>
  </Container>
      </Navbar>
  );
}
