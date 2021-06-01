//Función prevent Default para cancelar los eventos por defecto
function functionSubmit(e){
   e.preventDefault();
}

//Declaración de variables
let inputName,inputLastName, inputPhone, inputPeriod1,inputPeriod2,inputPeriod3,prom
//Inicialización de variables
prom = 0;

document.getElementById('inputFinal').style.display = "none";
document.getElementById('aprobo').style.display = "none";

function getFinal(){
    inputName = document.getElementById('inputName').value;
    inputLastName = document.getElementById('inputLastName').value;
    inputPhone  = document.querySelector('#inputPhone').value;
    inputPeriod1 = Number(document.getElementById('inputPeriod1').value);
    inputPeriod2 = Number(document.getElementById('inputPeriod2').value);
    inputPeriod3 = Number(document.getElementById('inputPeriod3').value);
    //typeof permite saber el tipo de dato de las variables
    //console.log(typeof(inputPeriod3));
    functionProm();   
}

function functionProm(){
    prom = (inputPeriod1+inputPeriod2+inputPeriod3)/3;
    document.getElementById('inputFinal').value = prom.toFixed(1);
    document.getElementById('inputFinal').style.display = "block";

    if(prom>=3){
        document.getElementById('aprobo').value = "Aprobó";
    }else{
        document.getElementById('aprobo').value = "No Aprobó";
    }

    document.getElementById('aprobo').style.display = "block";
}



