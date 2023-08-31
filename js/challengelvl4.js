const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");



function ejercicioUno(){
    const fruta = ["Manzana", "Banana", "Cereza", "Datil"];
    for(i = 0; i < fruta.length; i++){
        console.log(fruta[i]);
    }
}

function ejercicioDos(){
    const fruta = ["Manzana", "Banana", "Cereza", "Datil"];
    fruta.forEach(e => {
        console.log(` ${e}`);
    });
}

function ejercicioTres(){
    let operation = parseInt(prompt("OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."));
    while (operation != 5) {
        //alert("Ingreso")
        const num1 = parseFloat(prompt("Ingrese numero 1"));
        const num2 = parseFloat(prompt("Ingrese numero 2"));
        let result = 0;

        // Validamos que los numeros no sean errados
        if (isNaN(num1) || isNaN(num2)) {
        return alert("Favor ingresar solo numeros");
        }
        // Si todo lo anterior esta OK, hacemos las operationes matematicas
        switch (operation) {
            case 1:
                result = num1 + num2;
                alert("El resultado de la suma es: " + result);
                break;
            case 2:
                result = num1 - num2;
                alert(result);
                break;
            case 3:
                result = num1 * num2;
                alert("El resultado de la multiplicación es: " + result);
                break;
            case 4:
                if (num2 === 0) {
                    alert("No es posible dividir por cero");
                } else {
                    result = num1 / num2;
                    alert("El resultado de la división es: " + result);
                }
                break;
        }
        operation = parseInt(prompt("OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."));         
    }
}

function ejercicioCuatro(){
    const numeros = [45, 23, 67, 89, 12, 56];
    let num1 = numeros[0];
    let num2 = 0;
    for (let i = 1; i < numeros.length; i++){
        if(numeros[i] > num1){
            num1 = numeros[i];
        }
        //console.log(num1);
    }
    console.log(num1);
}

function ejercicioCinco(){
    const numeros = [2,4, 6, 8, 10];
    let num1 = 0;
    let num2 = 0;
    let res = 0;
    numeros.forEach(e => {
        num2 = num1 + e;
        num1 = num2;
    });
    res = num2;
    console.log(res);
}

function ejercicioSeis(){
    const numeros = [3, 7, 2, 8];
    const res = [];
    mul = 0;
    for (let i = 0; i < numeros.length; i++) {
        mul = numeros[i] * 2;
        res.push(mul);
        //console.log(res);
    }
    console.log(res);
}

function ejercicioSiete(){
    const numeros = [1, 4, 7, 3, 10, 12];
    let num1 = 0;
    let num2 = 0;
    numeros.forEach(e => {
        if(e % 2 === 0){
            num2 = num1 + e;
            num1 = num2;
            //console.log(e);
        }
    });
    console.log(num2);
}

function ejercicioOcho(){
    const numeros = [30, 45, 15, 72, 48, 10]
    let num = 0;
    let res = 0;
    while(res < numeros.length){
       if(numeros[res] > 50){
        return console.log(numeros[res]);
       }
       res++
    }
    return null
}


/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
btnExerciseOne.onclick = function () {
    ejercicioUno();
  };
  btnExerciseTwo.onclick = function () {
    ejercicioDos();
  };
  btnExerciseThree.onclick = function () {
    ejercicioTres();
  };
  btnExerciseFour.onclick = function () {
    ejercicioCuatro();
  };
  btnExerciseFive.onclick = function () {
    ejercicioCinco();
  };
  btnExerciseSix.onclick = function () {
    ejercicioSeis();
  };
  btnExerciseSeven.onclick = function () {
    ejercicioSiete();
  };
  btnExerciseEight.onclick = function () {
    ejercicioOcho();
  };
