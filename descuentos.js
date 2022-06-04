// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioDescuento = 100 - descuento;
// const precioDescuento = (precioOriginal * porcentajePrecioDescuento)/100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioDescuento,
// });

function calcularPrecioDescuento(precio,descuento){
     const porcentajePrecioDescuento = 100 - descuento;
     const precioDescuento = (precio * porcentajePrecioDescuento)/100;

     return precioDescuento;
}

// function onClickButtonPriceDiscount(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioDescuento = calcularPrecioDescuento(priceValue,discountValue);
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "Tu precio con descuento son: $"+precioDescuento;
// }

//----------------------------------------------------------CUPONES------------------------------------------------------------//
 function onClickButtonPriceDiscount(){
     const inputPrice = document.getElementById("InputPrice");
     const priceValue = inputPrice.value;

     const inputDiscount = document.getElementById("SelectCupones");
     const discountValue = Number(inputDiscount.value);

     console.log("CUPON: "+discountValue);
     const precioDescuento = calcularPrecioDescuento(priceValue,discountValue);
     const resultP = document.getElementById("ResultP");
     resultP.innerText = "Tu precio con descuento son: $"+precioDescuento;
}

const cupones = [
    {nombre: "basico", descuento: 50},
    {nombre: "premium", descuento: 60},
    {nombre: "platinum", descuento: 70}];

function calcularPrecioCupon(precio,nombreCupon){

    const cuponUsuario = cupones.find(function(cupon){return cupon.nombre === nombreCupon});

    if(!cuponUsuario){
        console.log("El cupon no es valido");
    }
    else{
        const porcentajePrecioDescuento = 100 - cuponUsuario.descuento;
        const precioDescuento = (precio * porcentajePrecioDescuento)/100;
        console.log(`Tipo del cupon: ${cuponUsuario.nombre}, \n descuento: ${cuponUsuario.descuento} , ${precioDescuento}`)
    }

    //return precioDescuento;
}

calcularPrecioCupon(100,"premium");