let lista = [1,3,8,2,7,2,9];

function calcularPromedioArmonico(lista){

    let promedioArmonico;

    //Verificar si hay ceros en la lista
    if(lista.some(x => x===0)){
        promedioArmonico = "No es posible calcular el promedio Aritmetico.";
    }else{
        //Hallar el inverso de cada elemento de la lista
        const inversos = lista.map(function (x){
            return 1/x;
        });
        
        //Sumar los inversos
        const sumaInversos = inversos.reduce(function(valorAcumulado,valorNuevo){
            return valorAcumulado + valorNuevo;
        });
        
        //Calcular el promedio
        promedioArmonico = (lista.length/sumaInversos);
    }
    return promedioArmonico;
}
console.log(`El Promedio Armonico es: ${calcularPromedioArmonico(lista)}`);