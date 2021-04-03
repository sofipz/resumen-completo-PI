//VARIABLES var let y const
    var tuVieja = 'aca ponemos el valor que queremos asignar a la variable'
    //let solo será accesible en el bloque de codigo en el que fue declarada
    let nuevaVariable = 'lo mismo que en var'
    // const es como let, pero a const no se le puede reasignar el valor
    const terceraVariable = 'blabla'
    // terceraVariable = 'bleble' (esto no se puede en const)



//TIPOS DE DATOS
    35 //numerico
    'hola' //string
    true //booleano
    35 / '2' // esta division me va a dar como resultado NaN (not a number) porque no se puede dividir dato numerico con strings
    null //valor nulo
    let saludo // el dato en esta variable es el valor undefined. Porque no le asignamos ningún valor a la variable.



//OPERADORES
    + //suma
    - //resta
    * //multiplicación
    / //división
    ++ //operador de incremento. Por ej: ++15 va a ser igual a 16. Se escribe primero el operador y luego el número.
    -- //operador de decremento.
    % //modulo. Nos da el resto de una division. Por ej: 7%2 será igual a 1.
    = //operador de asignacion.

    //Los siguientes operadores devuelven siempre como resultado un dato booleano (true o flase)
        == //operador de comparacion simple. Me va a decir si lo que esta a la izquierda es igual a lo que esta a la derecha. No distingue dato numerico de string. 4 sera igual a '4'.
        === //operador de comparacion simple. Me va a decir si lo que esta a la izquierda es exactamente igual a lo que esta a la derecha. Si distingue numerico de string. Es decir, 4 no sera exactamente igual a '4'.
        != //desigualdad simple.
        !== //desigualdad estricta
        < //menor a
        > //mayor a
        <= //menor o igual a
        >= //mayor o igual a.
        && //Es como un 'and'. Para preguntar por dos cosas. Si ambas son verdaderas el resultado sera true. Si al menos una es falsa, el resultado de la oracion entera sera false.
        || //Es como un 'or'. Para preguntar por dos cosas. Con que una sea verdadera, el resultado sera true.
        ! //operador de negacion. Nos permite cambiar el valor a falso o verdadero dependiendo cual era el valor que existia anteriormente.
        '' + '' // concatenacion. Para unir uno o mas strings. Si unimos con un numero, se volvera un string.



//FUNCIONES
    function nideah (a, b){         //nideah es el nombre de la funcion
        return a + b;               //a y b son los parametros que luego usaremos dentro de la funcion
    }                               //el return es lo que devolvera mi funcion luego de llevar a cabo las instrucciones que le di. Luego del return la funcion no continua leyendo.

    //Funciones declaradas
        function restar (a, b){
            return a - b;
        }
        //Funciones expresadas
        let multiplicar = function (a, b){
            return a * b;
        }
    //Para invocar a la función:
        multiplicar(2, 5);

    //Para guardar lo que retorna una funcion, lo debemos guardar en una variable:
        let guardar = multiplicar(2, 5);

// ACLARACIÓN: Si creamos una variable dentro de una funcion, su scope será LOCAL, es decir que solo existira dentro de esa funcion.



//CONDICIONALES
//IF
    if(condicion){
        //codigo a ejecutar si la condicion es verdadera
    }else{
        //codigo a ejecutar si la condicion es falsa
    }
    //se puede agregar un else if (condicion), entre el if y el else. Como segunda condicion a cumplirse. Si no se cumple la del if leerá la del else if, y si no se cumple esa leera la del else. Puedo agregar tantos else if como quiera.


//IF TERNARIO (es una linea de codigo resumida para hacer evaluaciones)
    condicion ? 'aca escribo el codig que quiero ejecutar si la condicion es TRUE' : 'aca escrino el codigo que quiero ejecutar si la condicion es FALSE'
    ej:
    5 < 2 ? 'Estas en lo cierto' : 'No gil';
    10 + 5 = 15 ? true : false; //Si no quiero que suceda nada en caso de ser falso, escribo un string vacio.
    //Se suele asignar a una variable, el resultado de un if ternario:
    let elMenor = 4 < 10 ? 'El 4 es menor' : 'El 10 es menor'



//SWITCH (se puede usar siempre y cuando quieras evaluar si una expresion es exactamente igual a un valor esperado)
    switch ('expresion que queres evaluar'){
        case 'aca va la expresion que queremos comparar con lo que pusimos dentro de los parentesis':
            //escribimos el bloque de codigo a ejecutar si este caso se cumple.
        break //si este primer caso se cumple, el break sirve para cortar ahi y no seguir evaluando los demas casos, y salir del switch.
        case 'otra expresion a comparar':
            //el codigo a ejecutar.
        break
        default:
            //bloque de codigo a evaluar si ninguno de los casos anteriores coincide con al expresion que estamos evaluando.
        break
    }

//ejemplo de switch:
let semaforo = 'verde'
switch(semaforo){
    case 'rojo':
        console.log('no cruces')
        break
    case 'amarillo':
        console.log('ya casi podes cruzar')
        break
    case 'verde':
        console.log('cruzá')
        break
    default:
        console.log('el semaforo no anda, precaucion.')
        break
}


//ARRAYS
    let miPrimerArray = ['rojo', 25, 32, 'azul']
    //javascript comienza a contar el ÍNDICE desde el 0, por lo tanto, el elemento 'rojo' esta en el índice 0, y el elemento 'azul' en el índice 3.
    miPrimerArray[2]    //para acceder al elemento 2 del array, en este caso 32.
    //Para saber la longitud del array
    miPrimerArray.length;   //en este caso la longitud es 4 (la longitud es la cantidad de elementos) Longitud no es lo mismo que índice.

        // .push
        miPrimerArray.push('15', 'verde'); // .push sirve para agregar AL FINAL de mi Array, la cantidad de elementos que yo quiera
        //mi array quedará así: ['rojo', 25, 32, 'azul', 15, 'verde']

        // .pop()
        mi PrimerArray.pop();   // .pop sirve para quitar el último elemento de mi array.
        // mi array ahora está así: ['rojo', 25, 32, 'azul', 15]

            //Para guardar el elemento que quitamos del array con el método .pop nos conviene realizar esto, guardando el resultado en una función, y de esa manera no perder dicho elemento:
            let comidas = ['milanesa', 'ravioles', 'pollo', 'canelones']
            let elUltimo = comidas.pop()     
            console.log(comidas);      // 'canelones'

        // .shift()
        let nombres = ['Sofi', 'Agus', 'Ale'];
        let primerNombre = nombres.shift();
        console.log(nombres)    // La consola me mostrará --> ['Agus', 'Ale']
        console.log(primerNombre)    // La consola me mostrará --> 'Sofi'

        // .unshift
        let nombres = ['Sofi', 'Agus', 'Ale'];
        nombres.unshift('Mel');
        console.log(nombres)    // La consola me mostrará --> ['Mel', 'Sofi', 'Agus', 'Ale']

        //indexOf
            //Sirve para preguntar al array el INDICE en el que se encuentra uno de mis objetos
        let juguetes = ['pelota', 'soga', 'cartas', 'auto', 'lapices']
        juguetes.indexOf('auto')  // El resultado será 3.
            //Si el objeto que buscamos no se encuentra dentro del array, el resultado será -1. Ej:
                juguetes.indexOf('muñeco')  // -1

        //lastIndexOf()
            //Sirve para preguntar al array el ÚLTIMO INDICE en el que se encuentra uno de mis objetos, en cqaso de que se repitiera dentro del array por ejemplo.
                let numeros = [2, 5, 8, 3, 1, 5, 9, 5]
                numeros.lastIndexOf(5)    // El resultado será 7. En cambio si yo usara indexOf(5) el resultado sería 1.

        //join
            //Sirve para unir todos los elementos de mi array separados por una coma (el resultado del join será un string)
                let numeros = [2, 5, 8, 3]
            //Usualmente este valor queremos guardarlo en una variable:
                let stringNumeros = numeros.join()
                console.log(stringNumeros)      // La consola me mostrará --> 2,5,8,3
            //Si quiero separar mis elementos por algo que no sea una coma, se lo debo pasar como parámetro dentro de los paréntesis, y entre comillas:
                let stringNumeros = numeros.join('*')   //Puedo usar como separador cualquier caracter que yo quiera
                console.log(stringNumeros)      //La consola me mostrará --> 2*5*3*8


//BUCLES

    //for
    for (let i=1; i<=10; i++){
                        //Si la condición dentro del paréntesis (i<=10) se cumple, se ejecutará lo q hay dentro de estas llaves
    }
        //let i = 1 es la VARIABLE INICIALIZADORA, q define en que número vamos a comenzar a iterar.
        //i<=10 es la CONDICIÓN A EVALUAR, que define CUÁNTAS ITERACIONES hará ese mismo ciclo.
        //i++ es el MODIFICADOR de la variable inicializadora. Permite incrementar o decrementar dicha variable (i=1) según lo que necesitemos.

    //ejemplo de un for:
        for (let i=3; i<=6; i++){
            console.log(i * 10);
        }
        //La consola hará, según lo que indica el for:
            // 3*10
            // 4*10
            // 5*10
            // 6*10
        // En la consola se mostrará:
            // 30
            // 40
            // 50
            // 60
        //Cuando el for llega al 6 y da la siguiente vuelta, i pasa a valer 7, y esto ya no cumple con la condición dada (i<=6). Por lo tanto, el for se frena y no se ejecuta nada más.

        //ACLARACIÓN IMPORTANTE: Cuando realizamos un for, tenemos que asegurarnos que la condición en algún momento se volverá FALSE, de lo contrario el for seguirá haciendo una vuelta tras otra y al no llegar nunca al momento en que la condición se vuelva falsa, habremos creado un bucle INFINITO. Y esto no está copado ja.

 
