//1. Hacer un if con operadores logicos que revise la siguiente condicion:
// Si mi edad es menor que 20 años o mayor a 60, *en mi cumpleaños compran helados de chocochips *esto es el console.log
var edad = 28;
if ((edad<=20)||(edad>=60)){
    console.log('Compraron helado de chocochips')
}else{
    console.log('No compraron helado')
}
//-------------------------------------------------------------------------------------------------------------

//1.5 if con operadores logicos que revise la siguiente condicion
// si mi perro esta en la casa y mi gato tambien, *entonces estoy feliz! var perro = true; 

var perro = true;
var gato = true;

if ((perro==true)&&(gato==true)){
    console.log('Estoy feliz!!')
}else{
    console.log('No estoy feliz')
}
//-------------------------------------------------------------------------------------------------------------

//2. Hacer un counter que imprima un numero del 1 al 100 pero por cada iteracion no se le suma 1, sino 3 unidades 
//ejemplo:
//1
//4
//7
var numero = 1;
while (numero < 100){
    console.log ('Soy un:' + numero);
    console.log ('No es suficiente, quiero ser más grande, sumarle 3')
    numero+=3; //edad=edad+1
}

if (numero=100) {
    console.log ('Soy un 100, wiii')
}