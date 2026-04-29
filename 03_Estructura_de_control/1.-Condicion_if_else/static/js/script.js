console.log("Conexión exitosa con js...");

/*
=============================
¿ Qué es una condición en JS?
=============================
Una condición que nos permite tomar decisiones en el 
código. Separando dos caminos el si (if) y no (else).

Estructura básica: (sintáxis --> Reglas del lenguaje de programación).

if (condición) {
    //código que se ejecuta si la condición es verdadera.
} else{
    // código que se ejecuta si la condición es falsa
    }
*/

//Ejemplo 1: (numerico) -- IF
let edad= 18;

if(edad >= 18) { //Condición Si
    console.log("Eres mayor de edad")
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if(temperatura >= 10) { //Condición sí
    console.log("Hace calor")
} else {
    console.log("Hace frio") // Condición no
}

// Ejemplo 3: IF - ELSE IF (Multiples condiciones)

let nota = 6.5;

if (nota >= 6.0){
    console.log("Excelente!");
} else if (nota >= 4.0){
    console.log("Aprobado, puedes mejorar!");
} else {
    console.log("Reprobado, Estudia más!")
}

// Ejemplo 3: Condiciones con STRING
let nombre = "Gabriel";
// Comparación Exactaz
if (nombre === "Gabriel"){
    console.log("Hola, " + nombre)
} else {
    console.log("Tu no eres " + nombre)

}

/*
OPERADORES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num= 10;
let num2= 5;
if (num !== 5){
    console.log(`El número: ${num} es distinto que ${num2}`)
} else {
    console.log("SOn iguales!")
}