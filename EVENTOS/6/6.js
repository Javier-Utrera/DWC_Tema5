// Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   
// pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.   El   botón  
//  de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío  
//   y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas.
//    Envíe el formulario a un programa de servidor si es correcto.
window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("enviar").addEventListener("click", comprobar, false);
}
function comprobar(){
    let campo = document.getElementById("nombre");
    let expresion = /^[A-Z]+$/;
    if (expresion.test(campo.value)) {
        alert("Correcto")        
    } else { 
        alert("Incorrecto contiene minusculas")
    }
}