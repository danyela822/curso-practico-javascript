const lista = [100,200,500,400,95];

function calcularMediana(lista){
 
    lista.sort(function (a,b) {
        return a - b;
    });
    
    const mitadLista = lista.length / 2 ;
    let mediana = 0;

    console.log(lista)
    if(mitadLista % 2 === 0){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        console.log(`Elemento 1: ${elemento1}, Elemento 2: ${elemento2}`);
        mediana = calcularMediaAritmetica([elemento1,elemento2]);
        console.log(`La Mediana es: ${mediana}`);
    }else{
        mediana = lista[parseInt(mitadLista)];
        console.log(`La Mediana es: ${mediana}`);
    }   
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