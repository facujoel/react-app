import Stock from "../Stock/Stock"

const pedirDatos = () =>{
    return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(Stock)
      },2000)
    })
  }


  export default pedirDatos