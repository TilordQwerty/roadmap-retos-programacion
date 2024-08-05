// Operadores aritmeticos 

 //  Suma
 sum = 10 + 5;
 console.log(sum); // 15

 // Resta
 rest = 10 - 5;
 console.log(rest); // 5

 // Multiplicacion
 multiplication = 10 * 5;
 console.log(multiplication); // 50

 //  Division
 division = 10 / 5;
 console.log(division); // 2

 // Potencia
 potencia = 2 ** 3;
 console.log(potencia); // 8

 // Modulo
 modulo = 10 % 3;
 console.log(modulo); // 1

// Operadores de comparación

  // Igualdad (==)

  isEqual = 10 == 10;
  console.log(isEqual); // true

  // No igualdad (!==)

  isNotEqual = "5" != 5;
  console.log(isNotEqual); // false

  //  Estrictamente igual (===) y Desigualdad estricta (!==)

  var var1 = 5

  isEstrictEqual = 5 === var1;
  console.log(isEstrictEqual); // true

  isNotEstrictEqual = 5 !== var1;
  console.log(isNotEstrictEqual); // false

  // Mayor que (>)

  isGreater = 10 > 5;
  console.log(isGreater); // true

  // Menor que (<)

  isLess = 5 < 10;
  console.log(isLess); // true

  // Menor o igual (<=)

  isLessOrEqual = var1 <= 10;
  console.log(isLessOrEqual); // true

  // Mayor o igual (>=)
  isGreaterOrEqual = var1 >= 10;
  console.log(isGreaterOrEqual); // false

// Operadores lógicos

  // AND (&&) OR(||) NOT (!)
  and = 10 + 3 == 13 && 5 - 1 == 4; 
  console.log(and); // true

  or = 10 + 3 == 14 || 5 - 1 == 4
  console.log(or); // true

  not = ! 10 + 3 == 14
  console.log(not); //false

// Operadores de asignacion

  myNumber = 11 //asignacion
  console.log(myNumber)

  myNumber += 1 //suma y asignacion
  console.log(myNumber)

  myNumber -= 1 //resta y asignacion
  console.log(myNumber)

  myNumber *= 2 //multiplicacion y asignacion
  console.log(myNumber)

  myNumber /= 2 //division y asignacion
  console.log(myNumber)

  myNumber %= 2 //modulo y asignacion
  console.log(myNumber)

  myNumber **=  //potencia y asignacion
  console.log(myNumber)

// Operadores relacionales

var inventory = [
    'sword', 
    'shield',
    'potion',
    'key',
    'diamond armour',
    'enchanted bow'
];

console.log(0 in inventory);
console.log(6 in inventory);

// Operadores de bit

  // AND (&), OR(|), XOR(^), NOT(~)

  a = 10; // 1010
  b = 3; // 0011 

  console.log(10 & 3); // 0010
  console.log(10 | 3); // 1011
  console.log(10 ^ 3); // 1001
  console.log(~10); // 1001

  // Desplazamiento a la derecha: 10 >> 2

  console.log(10 >> 2); // 0010

  // Desplazamiento a la izquierda: 10 << 2

  console.log(10 << 2); // 101000

// Estructuras de control

      // Condicilonales

      myString = "Gabriel"

      if(myString == "tilordqwerty"){
        console.log('its ' +  myString)
      } else if(myString == 'Gabriel'){
        console.log('myString is Gabriel')
      } else {
        console.log('is not Gabriel')
      }

    //  Iterativas

       for (var i = 0; i < 11; i++) {
        console.log(i);
       }

       i = 0;

       while (i <= 10){
            console.log(i)
            i += 1
       }

    //  Manejo de excepciones

    myException = 10 / 0

    try{
        throw myException
     }  catch (e){
            console.log('se ha encontrado un error')
    } finally{
        console.log("ha finalizado el manejo de la excepcion")
    }

     //  Crea un programa que imprima por consola 
    //   todos los números comprendido entre 10 y 55 (incluidos), 
   //    pares, y que no son ni el 16 ni múltiplos de 3.

    for (var i = 10; i < 55; i++) {
        if(i % 2 == 0 && i != 16 && i % 3 != 0){
            console.log(i);
        }
       }
