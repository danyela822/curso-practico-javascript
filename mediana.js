const lista1 = [100,200,500,400,95];

lista1.sort(function (a,b) {
    return a - b;
});

const mitadLista1 = lista1.length / 2 ;

let mediana = 0;

function calcularMediana(lista1){
 
    console.log(lista1)
    if(mitadLista1 % 2 === 0){
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        console.log(`Elemento 1: ${elemento1}, Elemento 2: ${elemento2}`);
        mediana = calcularMediaAritmetica([elemento1,elemento2]);
        console.log(`Mediana: ${mediana}`);
    }else{
        mediana = lista1[parseInt(mitadLista1)];
    }   
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    console.log("Suma: "+sumaLista);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}