function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }
    if(formulario.nombre.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    if(formulario.appat.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo paterno");
        formulario.appat.focus();
    return false;
    }
    if(formulario.appat.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo paterno");
        formulario.appat.focus();
        return false;
    }
    if(formulario.appmat.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo apellido materno");
        formulario.appmat.focus();
    return false;
    }
    if(formulario.appmat.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo apellido materno");
        formulario.appmat.focus();
        return false;
    }
    if(formulario.email.value.length > 30){
        alert("Escribe  menos de 30 caracteres en el campo email");
        formulario.email.focus();
        return false;
    }
    if(formulario.email.value.length< 2){
        alert("Escribe  mas caracteres en el campo email");
        formulario.email.focus();
        return false;
    }
    if(formulario.edad.value.length < 1){
        alert("No dejes el campo de edad vacío");
        formulario.edad.focus();
        return false;
    }
    if(formulario.contraseña.value.length < 1){
        alert("No dejes el campo de contraseña vacío");
        formulario.edad.focus();
        return false;
    }
    if(formulario.contraseña.value.length > 20){
        alert("No escribas más de 20 caracteres en el campo coontraseña");
        formulario.edad.focus();
        return false;
    }
    



//Crear opción para solo ingresar letras


var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
+ "qwertyuiopasdfghjklñzxcvbnm"+" ";

var checkStr = formulario.nombre.value;

var allvalid = true;

for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr2=formulario.appat.value;
for(var i = 0; i < checkStr2.length; i++){
    var ch = checkStr2.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr3=formulario.appmat.value;
for(var i = 0; i < checkStr3.length; i++){
    var ch = checkStr3.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}



if(!allvalid){
    alert("Escribe solo letras en el campo nombre/apellido paterno/apellido materno");
    formulario.nombre.focus();
    return false;
}
    //"2"//

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }



    
   var txt = formulario.email.value;

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+(b.text(txt)?"":" no ")+" valido");
   
   return b.test(txt);
}

function validardatos(formulario){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(.csv)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('El archivo debe de tener la extensión: .csv');
        fileInput.value = '';
        return false;
    }
}