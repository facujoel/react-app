import { Card, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"




export const Item = ({nombre, precio, img, desc,id}) => {
  return (
      
    <Card className="m-3" style={{ width: '18rem' }}>
  <Card.Img className="" variant="top" src={img} />
  <Card.Body className="">
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        {desc}   
    </Card.Text>
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
