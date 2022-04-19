import { Navbar,Container,Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
      <Navbar bg="danger" expand="lg">
        <Container>
    <Navbar.Brand href="#home">Empresa S.A.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Incio</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        </Nav>
        <Nav.Link href="#carrito">
        <CartWidget href="#" className="me-auto"/>
        </Nav.Link>
    </Navbar.Collapse>
  </Container>
      </Navbar>
  );
}
