import { Card, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"




export const Item = ({nombre, precio, img, desc,id,oferta}) => {
  return (
      
    <Card className="m-3" style={{ width: '18rem' }}>
  <Card.Img className="" variant="top" src={img} />
  <Card.Body className="">
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        {desc}   
    </Card.Text>
    {oferta &&
      <Card.Title>EN OFERTA</Card.Title>
    }
    <Card.Text>
        Precio: ${precio}
    </Card.Text>
    <Link to= {`/detail/${id}` }>
      <Button variant="primary">Ver más</Button>
    </Link>
    
  </Card.Body>
</Card>

  )
}
