const PI = 3.14;
const array = ["dos", "cuatro", "ocho", "diez"]
function sumar(x, y) {
    let resultado
    resultado = x+y
    return resultado

}
const multiplicar = (a, b) => {
    let resultado
    resultado = a*b
    return resultado

};
function restar (x, y) {
    let resultado
    resultado = a-b
    return resultado

}
const dividir = (a, b) => {
    let resultado
    resultado = a/b
    return resultado

};
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar, array};