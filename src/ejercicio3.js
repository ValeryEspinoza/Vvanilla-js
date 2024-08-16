// Inserte el código aquí

clonarArreglo([1, 2, 3])

function clonarArreglo(arreglo) {
     let   copia = [...arreglo]
     return copia
}



function clonarObjeto(objeto) {
    let  copiaObjeto ={...objeto}
    return copiaObjeto
}

clonarObjeto({nombre: "Maria", edad: 20})

function sumar(rest, operator) {
    
}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar/*, saludar*/};




/*
3. Escribir una función llamada sumar.
   * Debe recibir N parametros (rest operator)
   * Retorna la suma de todos los parametros
<br />
<br /> 
4. Escribir una función llamada saludar.
   * Debe recibir un parametro llamado nombre
   * El valor por defecto para el parametro nombre es "Desconocido"
   * La función retorna el mensaje "Hola <nombre>"*/