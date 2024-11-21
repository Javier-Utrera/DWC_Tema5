// Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. 
// Modifica el script para mandar los datos a una nueva ventana.
window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("mayuscula").addEventListener("click",mayuscula,false);
    document.getElementById("año").addEventListener("keyup",edad,false);
}

function mayuscula(){
    let ventana = window.open("", "", "width=200,height=100"); 
    let lista = [...document.getElementsByTagName("input")];
    for (const element of lista) {
        if(element.value.length>0){
            ventana.document.write(element.id+" : "+element.value.toUpperCase()+"<br>")
        } else { 
            ventana.document.writeln(element.value + "<br>");       
        }
    }
}
function edad(){
    let fechaactual = new Date(Date.now());
    let anionacimiento = document.getElementById("año").value;
    document.getElementById("fechanacimiento").value=fechaactual.getFullYear()-anionacimiento;   
}