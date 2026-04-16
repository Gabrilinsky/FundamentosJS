console.log("Conexión con js correcta")
// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "Camila";
let edad = "25";
//Unimos ambas constantes con un texto extra.
console.log(`Hola, Mi nombre es ${nombre} y tengo ${edad} años
\nTipo de dato (edad) es: ${typeof edad}`);
// n salto de línea en consola o textos
// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipú";
let región = "Metropolitana";
console.log(`La persona vive en la comuna  ${comuna.toUpperCase()} 
en la región de ${región.toLocaleLowerCase()} de chile`);
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`la palabra ${lenguaje.toLocaleUpperCase()} es uno de los lenguajes
de programación más populares del mundo para programación.
\nTipo de dato (lenguaje) es: ${typeof lenguaje}`)

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`La palabra ${mensaje.toLowerCase()} tiene ${mensaje.length} letras`);
console.log (mensaje. includes ("JavaSript")) // true/false

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
//  compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras= "arroz, fideos, aceite, sal";
console.log(compras. includes ("aceite"));
console.log(`La lista de compras: ${compras.toUpperCase()} tiene
${compras.length} letras`)

// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa);
console.log(`Mi numero de casa ${numeroCasaTexto}
es de tipo: ${typeof numeroCasaTexto} 
tiene ${numeroCasaTexto.length} letras`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
// Usamos el método toUpperCase para convertirlo
let nombre1 = "Diego"
let apellido = "Rojas"
console.log(`Hola, Mi nombre es  ${nombre1} 
${apellido} tiene ${nombre1.length} ${apellido.length} letras.`);
console.log(`${nombre1.toUpperCase()} ${apellido.toUpperCase()} `);

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings"
console.log(`La frase dice: ${frase.toUpperCase()} tiene ${frase.length}
letras`);
// 9️⃣ Comparación de formatos
//Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`El texto dice: ${texto} tiene ${texto.length} letras`);
console.log(`El texto dice:${texto.toUpperCase()}`);
console.log(`El texto dice: ${texto.toLowerCase()}`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 3C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "3C";
let anio = "2026";
let aniotexto = String(anio)
console.log(`Curso: ${curso}, año:${String(anio)}, tipo: ${typeof String(anio)}`.toUpperCase())


//⭐ Desafío extra (nivel alto)
// Crea la variable:
// textoFinal: Estoy listo para el desafío
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "desafío"
// Muestre el texto en MAYÚSCULAS
// Indique el tipo de dato 



