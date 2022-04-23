
import { Button } from 'react-bootstrap';


export const ItemCount = ({max,min = 0, counter, setCounter}) => {
    
  

  const handleSumar = ()=> {
    counter < max && setCounter(counter +1)
  }

  const handleRestar = ()=>{
    counter > min && setCounter (counter -1)
  }

  return (
    <>
      <Button className='btn btn-outline' onClick={handleRestar}>-</Button>
      <span className='mx-3' > {counter} </span>
      <Button className='btn btn-primary' onClick={handleSumar} >+</Button>
      
    </>
  );
}





