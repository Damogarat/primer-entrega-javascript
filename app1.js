function saludar() {
    alert ('Bienvenido/a a la tienda online de la gintonería HIDDEN del barrio de Belgrano!!' + '\u{1f378}' + '\u{1f378}' +  '\u{1f378}');
}
saludar();

let nombre = prompt('Ingresá tu nombre');
alert('Bienvenido/a ' + nombre + '!' + '\u{1F600}' + ' Te vamos a hacer un par de preguntas para verificar que podemos entregarte nuestros productos!' + ' Responde con (si/no)'+ '\u{1F46E}');


let respuesta;
const SI = 'si';
const NO = 'no';

respuesta = prompt ('Vivís en Belgrano?');
if(respuesta == SI){
    respuesta = prompt('Sos mayor de edad?');
    if(respuesta == SI) {
        alert('Genial!! Podés ingresar a la Tienda' + '\u{1f37E}' + '\u{1f37E}' + '\u{1f37E}');
    }else{
        alert('\u{1F6D1}' + 'Solo vendemos bebidas alcoholicas a mayores de edad' + '\u{1F6D1}');
    }
}else {
    alert('Lo sentimos. Sólo hacemos delivery por la zona.' + '\u{1F622}' );  
 }

let precio = 3000;
let cantidad;
let total = 0; 
let continuar = 'si'; 

while (continuar == 'si') {
    cantidad = +prompt('ingrese cantidad de botellas de gin HIDDEN');
    total = total + precio * cantidad; 
    continuar = prompt('desea ingresar otro item en el carrito? si/no'); 

}
alert('El total del carrito es de $' + total); 