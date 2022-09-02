// 1) Transformar todas las funciones declarativas en funciones flecha.
// 2) Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.
// 3) Simplificar el código de las funciones.
// 4) Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.

    // Promesa almacenada en una constante
const promesa = new Promise((resolve, reject)=>{

  if( 10 === 11){
      resolve('Los valores son iguales');
  } else {
      reject('Los valores son distintos')
  }

});

promesa.then((respuesta)=>{
    console.log(respuesta);
}).catch((err)=>{
    console.log(err)
})

//-------------------------------------

// Promesa dentro en una función.
function promesaDos(provincia){

  const promesa = new Promise( (resolve, reject)=> {
  
    if('Formosa' === provincia){
        resolve('Usted está ubicado en Formosa');
    } else {
        reject('Error al realizar la consulta')
    }

  });

  return promesa;
}

promesaDos("Formosa")
.then(res=>console.log(res))
.catch(err=>console.log(err))

// --------------------------------------------------------

const promesaTres=(valorBooleano)=>{

    const promesas= new Promise( (resolve,reject)=> {             //tiene que estar declarada una constante que adentro tenga ( new promise(resolve,reject)  )  y siempre debe retornar esta variable en este caso promesas
      ( true === valorBooleano )
      ? resolve('Los valores son iguales')
      : reject('Los valores son distintos')
    })
    return promesas
 }

 promesaTres(true)
 .then(respuesta=>console.log(respuesta))
 .catch(error=>console.log(error))    

// --------------------------------------------------------

const promesaCuatro=(arguments)=>{

    const valores=  new Promise( (resolve,reject)=> {
      ( true === arguments )
      ? resolve('Los valores son iguales')
      : reject('Los valores son distintos')
  })

  return valores
}

promesaAsync=async()=>{
try{
   const respuesta=await promesaCuatro(true)                   
   console.log(respuesta)
}catch(Error){

  console.log(Error)
}
}
promesaAsync()

