import { Button } from 'react-bootstrap';


export const ItemCount = ({children,click}) => {
  return (
    <>
      <Button variant="primary" onClick={click}> {children} </Button>
      
    </>
  );
}
