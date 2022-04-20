import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {
  return (
 <>
    <h2>Productos</h2>
    <hr/>
    <div className="d-inline-flex p-2 "> 
        
          {productos.map( (el)=> <Item key={el.id} {...el} /> )}
        
    </div> 
</>
  )
}
