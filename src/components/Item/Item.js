import { Card, Button } from "react-bootstrap"




export const Item = ({nombre, precio, img, desc}) => {
  return (
      <>
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
    <Button variant="primary">Ver más</Button>
  </Card.Body>
</Card>
</>
  )
}
