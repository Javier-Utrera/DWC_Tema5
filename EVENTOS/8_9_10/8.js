// Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. 
// Modifica el script para mandar los datos a una nueva ventana.

window.addEventListener("load", inicializar, false);

function inicializar() {
    
    let correos = [...document.getElementsByTagName("input")];  
    correos.forEach(a=>a.addEventListener("keyup",validar,false));
    document.getElementById("año").addEventListener("keyup", edad, false);
}

function validar(e) {
    if (e.currentTarget.validity.typeMismatch) {
        e.currentTarget.setCustomValidity("No es un formato valido");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}
function edad() {
    let fechaactual = new Date(Date.now());
    let anionacimiento = document.getElementById("año").value;
    document.getElementById("fechanacimiento").value = fechaactual.getFullYear() - anionacimiento;
}