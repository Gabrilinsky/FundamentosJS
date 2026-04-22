console.log("Conexión exitosa con js...");

// Tipos de datos numéricos

//1.- Declaración de números (creación de variables numéricas)
let edad = 31;
let temperatura = -5;
let precio = 19990;
let pi = 3.1416;
let descuento = 0.25;

//2.- Operaciones básicas
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicación = 10 * 5; //50
let división =  10 / 2; //5
let modulo = 10 % 3; //1 --> Resto de la división %
let potencia = 2 ** 3 //8

console.log("El resultado de 2 elevado a 3 en potencia es $(2**3");

// 3.- Incredemento y Decremento
let numero = 6.5;
numero++; //11 --> Incrementa 1 a la variable ++
numero--; //9

//4.-Números con decimales
let promedio = "6.5";
let altura = "1.67";
let peso  = 90.3;

//5.- Números grandes y notación cientifica
let población = 1e6; //1000000
console.log("numero grande 1e6:" + población);
let numeroPequeno = 5e-3; //0.005
console.log("número pequeño 5e-3:" + numeroPequeno)

//6.- Operaciones combinadas
// calcula de precios
let precioProducto = "10000";
let iva = 0.19;
let total = precioProducto + (precioProducto + iva)//11000
// Calculo de valor de hora trabajada
let horas = 40;
let valorhora = 12000;
let sueldo = horas + valorhora;
console.log("El sueldo base es:"+ sueldo)
// 7.-  Redondeando de numeros
console.log("Redondeando 4.0") + Math.round(4.0);
console.log("Redodeando  4.0") + Math.floor(4.0);

// 8.- Numeros Aleatorios
let aleatorio = Math.random(); //entre 0 y 1
let dado = Math.floor(Math.random()*6); // 1 al 6

// 9 Comparación Numericas
let a = 10;
let b = 5;
console.log(a + b);;
console.log(a < b);
console.log(a --- 10); // true (--- estricta igualdad)
console.log(b --- 3);