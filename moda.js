const lista = [1,1,2,2,2,2,8,8,9,9,9,9,6,5];

const listaCount = {};

//Array para guardar los elementos que se repiten
let moda = [];

//Variable para guardar el numero de veces que se repiten los elementos
let repeticiones = 0;

function calcularModa(lista){

    //Sumar las veces que se repite un elemento
    lista.map(
        function(element){
            if(listaCount[element]){
                listaCount[element] += 1;
            }else{
                listaCount[element] = 1;
            }
        }
    );

    //Ordenar los elementos de la lista de menor a mayor
    const listaArray = Object.entries(listaCount).sort(
        function(elemento1,elemento2){
            return elemento1[1] - elemento2[1];
        }
    );

    const modaArray = listaArray.filter(
        function(elemento){
            //Buscar que otros elementos de la lista se repiten el mismo numero de veces
            return elemento[1] === listaArray[listaArray.length-1][1];
        }
    );

    repeticiones = modaArray[0][1];

    //Guardar los elementos que se repiten
    modaArray.forEach(x => moda.push(x[0]));

    console.log(`Moda: ${moda} \nRepeticiones: ${repeticiones}`);
}