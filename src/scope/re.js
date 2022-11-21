var firstName; //undefined
firstName = 'Oscar';
console.log(firstName);


var lastName = "David"; // declarar / asignar
lastName = 'Ana'; //reasignar
 console.log(lastName);


 var secondName = 'David'; // declarando / asignando
 var secondName = 'Ana'; // reasignado
 console.log(secondName);


 //Let

 let fruit = 'Apple' //declarar y asignar
 fruit = 'kiwi'; //reasignar
 console.log(fruit);

// let fruit = 'Banana'; Las variables Let no se pueden reasignar
//  console.log(fruit); Nos genera error al imprimir una variable reasignada

 
// const

const animal = 'dog'; // declara y asigna
animal = 'cat'; // reasignar
console.log(animal);// sale error ya que no permite reasignar constantes  



const vehicles = [];
vehicles.push("Hello");
console.log(vehicles);

vehicles.pop();
// Elimina la Variable que se entrodujo, nos demuestran que las variables const no son totalmente block
console.log(vehicles);// 