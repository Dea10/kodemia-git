// 0 => 1
// 1 => 0
// no conditionals allowed


//------opcion 1 -------
// const flip = (n1) =>{
//     while(n1 ==0){
//         console.log("1");
//         break;
//     }

//     while(n1 == 1){
//         console.log('0');
//         break;
//     }
// }

// flip(1);

//------opcion 2 

// const flip = (n1) =>{
//     const array = [1,0];
//     return array[n1];
// }

// console.log(flip(1));

//-------opcion 3 
//matematicamente hablando cualquier numero multiplicado por cero, es cero, pero la consola me imprime -0 que no existe jaja
const flip = (n1) =>{
    const resultado= ((n1-1)*-1)
    console.log(resultado);
}

flip(1);