//Helpers
function esPar(numero){
    return numero % 2 === 0
}

function calcularMediaAritmetica(listaPromedio){

    const sumaLista = listaPromedio.reduce(
        function (valorAcumulado = 0,nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    console.log("Suma: "+sumaLista);
    const promedioLista = sumaLista / listaPromedio.length;
    return promedioLista;
}

//Mediana General

const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Calculadora de mediana

function medianaSalarios(lista) {

    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana Top

const inicioSplice = (salariosColSorted.length * 90) / 100;
const tamanioSplice = salariosColSorted.length - inicioSplice;

const salariosColTop10 = salariosColSorted.splice(inicioSplice,tamanioSplice);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

const medianaTopColo = medianaSalarios(salariosColTop10);

console.log(
   medianaGeneralCol,
   medianaTopColo,
);