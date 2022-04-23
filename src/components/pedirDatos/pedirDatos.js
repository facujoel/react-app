import Stock from "../Stock/Stock"

const pedirDatos = () =>{
    return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(Stock)
      },1000)
    })
  }


  export default pedirDatos