import Stock from "../Stock/Stock"

const pedirDatos = () =>{
    return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(Stock)
      },3000)
    })
  }


  export default pedirDatos