function saludar(){
    alert("prueba");

}


function validarEmail(){
    const email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //[a-zA-Z0-9._-] validar masyuculas, minusculas , numeros y carecteres
    // + @ validar que tenga el arroba
    //[a-zA-Z0-9.-]el dominio debe tener letras punto o guiones
    //+\.[a-zA-Z]{2,6}$/; el dominio (com) que tenga de 2- caracteres 
    if (regex.test(email)) {
        alert("Su email es totalmete valido")
        return true;  
    } else {
        alert("su email no es valido")
        return false;  
    }
    function validarNombre(){
        const nombre = document.getElementById("nombre").value;
        if (nombre === ""){
            alert("nombre esta vacioooo")
            return false;
        } 
        else{
            return true;
        }
            

    }
    function validarEdad(){
        const edad = document.getElementById("edad").value;
        if(edad === "" || isNaN(edad)){
             alert("edad invalida")
            return false
        }else{
            return true
        }
           

    }
} 


   
