/*
//Código del cuadrado

//Agrupar mensajes
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado+" cm^2");
console.groupEnd();

//Código para el triángulo

//Agrupar mensajes
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areatriangulo = (baseTriangulo*alturaTriangulo) / 2;

console.log("Lados del Triangulo miden: "+ladoTriangulo1 + " cm, "+ladoTriangulo2+" cm, "+baseTriangulo+" cm");

console.log("La altura del triángulo es: "+alturaTriangulo+" cm");

console.log("El perímetro del triángulo es: "+perimetroTriangulo+" cm");

console.log("El área del triángulo es: "+areatriangulo+" cm^2");
console.groupEnd();

//Código para el círculo

//Agrupar mensajes
console.group("Círculo");

//Radio
const radioCirculo = 4;

//Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del circulo es: "+radioCirculo+" cm");
console.log("El diametro del circulo es: "+diametroCirculo+" cm");
console.log("PI es: "+PI);
console.log("El perimetro del circulo es: "+perimetroCirculo+" cm");
console.log("El área del circulo es: "+areaCirculo+" cm^2");

console.groupEnd();
*/
/*-------------------------------------------------------------Usando funciones-------------------------------------------*/

//Cuadrados
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Triangulos
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areatriangulo(base, altura){
    return (base * altura ) / 2;
}

//Circulos
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}


/*-------------------------------------------------------Interacion con HTML------------------------------------------------ */

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const area = areaCuadrado(value);
    alert(area);
}