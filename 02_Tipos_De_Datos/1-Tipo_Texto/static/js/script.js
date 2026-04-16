console.log("conexión con js correcta...");
/* 
Dato: Tipo Texto(string)
1.- Concatenación de texto con el signo +
Podemos unir texto y variables
*/
//Concatenación unir texto y/o variables.
const nombre =  "Gabriel";
const apellido = "Naranjo";
//Unimos ambas constantes con un texto extra. 
console.log("Hola, mi nombre es:" + nombre + " " + apellido); 

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La Variable nombre es un tipo de dato:" + typeof nombre);

// Template literals (forma moderna para concatenar) ``
console.log(`Hola, mi nombre es ${nombre} ${apellido}...`);

// Mostrar el largo de un string (texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

// Crear una frase y contar sus caracteres.
// .length --> Para contar caracteres y espacios.
let frase = "Angry Birds el juego más conocido";
console.log(`La palabra ${frase} tiene ${palabra.length} letras.`);
// Métodos comunes en JS para formatear texto
// Transformar texto en Mayúsculas
let texto1 = "JAVasCriPT eS LO mejor"
console.log(texto1.toUpperCase());
// Trasnformar texto a minisculas . toLowe Case()
console.log(texto1. toLocaleLowerCase());

// Buscar un texto dentro de un string .includes()
let texto2 = "Leche, azucar, peras, huevos, harina";
console.log(texto2. includes("peras")) //true

// Convertir una variable a texto
let telefono = 89182920;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono ${telefono_texto}
es de tipo: ${typeof telefono_texto}` );