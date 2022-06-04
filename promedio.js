const lista1 = [100,200,300,500];

let sumaLista1 = 0;

for (let index = 0; index < lista1.length; index++) {
    sumaLista1 = sumaLista1 + lista1[index];
}
console.log(sumaLista1);

const promedioLista1 = sumaLista1 / lista1.length;
console.log(promedioLista1);


function calcularMediaAritmetica(lista){

    //--------------------------------------------------------- Forma 1 ---------------------------------------------------------//
    // let sumaLista = 0;
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
    // }
    // const promedioLista = sumaLista / lista.length;
    // console.log("Suma: "+sumaLista);
    // console.log("Promedio: "+promedioLista);

    //--------------------------------------------------------- Forma 2 ---------------------------------------------------------//
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    console.log("Suma: "+sumaLista);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}