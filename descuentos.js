const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioDescuento = 100 - descuento;
const precioDescuento = (precioOriginal * porcentajePrecioDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioDescuento,
});