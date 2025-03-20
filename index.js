//RESUELVE LOS EJERCICIOS AQUÍ
//- [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados.find((nombre) => nombre.name === "Ana");
console.log(ana);

//- [ ] 2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com

const emailLuis = empleados.find(
  (mail) => mail.email === "Luis@gmail.com"
)?.email;
console.log(emailLuis);

//- [ ] 3.- Usa destructuración para cambiar los valores de a y b;
const { a = 5, b = 3 } = { a: 3, b: 5 };
console.log(a);

//- [ ] 4.- Dado el objeto **HIGH_TEMPERATURES**

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

/*Cambiar las siguientes líneas para guardar mediante destructuración
los valores de temperaturas en las variables maximaHoy y maximaManana*/

/*- [ ] 5.- Escribe una función llamada **sumEveryOther** que pueda
 recibir cualquier cantidad de números y devuelva la suma de todos 
 los demás argumentos.*/

function sumEveryOther(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

/*- [ ] 6.- Escribe una función llamada **addOnlyNums** que
 pueda recibir cualquier número de argumentos (incluyendo 
    números y strings y retorne la suma solo de los números).*/
const addOnlyNums=(...argumentos)=> argumentos
    .filter((arg) => typeof arg === "number")
    .reduce((a, b) => a + b, 0);
    console.log(addOnlyNums(1, "perro", 2, 4)); 
      

/*- [ ] 7.- Escribe una función llamada **countTheArgs** 
que pueda recibir cualquier número de argumentos y 
devuelva un número que indique cuántos argumentos ha recibido.*/

const countTheArgs =(...argumentos) => argumentos.length

console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso")) 


/*- [ ] 8.- Escribe una función llamada **combineTwoArrays** que reciba 
dos array cómo argumentos y devuelva solo un array que combine los dos 
(usando spread operator).*/



const combineTwoArrays= (arr1, arr2) => [...arr1,...arr2];
console.log(combineTwoArrays([1,2,3,4],[5,6,7,8]));

/*- [ ] 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
 ```
 onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
```*/

const onlyUniques= (...arg)=> [...new Set(arg)]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));


/*- [ ] 10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

```
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
```*/

const combineAllArrays=(...arrs)=> arrs.concat()
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));
 

/*- [ ] 11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de 
argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.*/

const sumAndSquare= (...args)=> args.reduce((acc, num) => acc + num ** 2, 0);
console.log(sumAndSquare(2,2,2,2,2));


