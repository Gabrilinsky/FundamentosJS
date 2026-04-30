console.log("Conexión exitosa js...")







// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let nota = 6.5;
if (nota >= 6.0) {
    alert(` El estudiante Juan tiene nota ${nota} y su resultado es: 
    Excelente rendimiento`);
} else if (nota >= 4.0) {
alert(` El estudiante Juan tiene nota ${nota} y su resultado es: 
aprobado`);
} else if (nota >= 2.0) {
alert (` El estudiante Juan tiene nota ${nota} y su resultado es: 
desaprobado`);
}
}






// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "Daniel";
let apellido = "Pérez"
let nombrecom = nombre + " " + apellido;
alert(`El nombre convertido es: ${nombre.toLocaleUpperCase()} ${apellido.toLocaleUpperCase()} y tiene ${nombrecom.length}
caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "ejemplo@gmail.com";
if (correo.includes("@") && correo.includes(".")) {
alert(`El correo ${correo} es valido.`);
}else{
    alert("El correo no es válido; le falta el @ o el punto.");
    }
}
// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase= "Estoy aprendiendo JavaScript";
if(frase.length >= 20) {
alert(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase larga`);
}else if (frase.length >= 11) {
(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase mediana`);
}else if(frase.length >= 5) {
(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase pequeña`);
}

}




// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let precio= 45000;
let producto= "teclado";
alert(` El producto: ${producto.toUpperCase()} su precio final es: ${precio}
    el descuento del 20% es: $${precio * 0.2}
    pero con el descuento es de: ${precio - (precio * 0.20)}`);
}

//Ejercicio 16: Boleta de compra con clasificación de cliente
//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)
let precio = "100000";
let nombre = "Jake";
let precio2 = "50000";
let nombre2= "Mike";
let precio3 = "50000";
let nombre3 = "Ramiro"
function ejercicio16() {
alert(`El precio del cliente premium de ${nombre.toUpperCase()} y su precio es: 
${precio} el descuento del 20% es: $${precio * 0.2}
pero con el descuento es de: ${precio - (precio * 0.20)}`);
alert(`El precio del cliente frecuente de ${nombre2.toUpperCase()} y su precio es:
${precio2} el descuento del 10% es: $${precio2 * 0.1} 
pero con el descuento es de: ${precio - (precio * 0.10)}`);
alert(`El precio del cliente normal de ${nombre3.toUpperCase()} y su precio es:
${precio3} sin el descuento`)
}