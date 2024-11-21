// Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. 
// Utilice   el   atributo   id   para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado.
window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementsByName("color").forEach(a => { a.addEventListener("click", cambiarcolor, false)});
}
function cambiarcolor(e){
    let color = e.currentTarget.value;
    switch (color) {
        case "rojo":
            e.rangeParent.style.backgroundColor = "red";        
            break;
        case "amarillo":
            e.rangeParent.style.backgroundColor = "yellow";        
            break;
        case "verde":
            e.rangeParent.style.backgroundColor = "green";        
            break;        
        default:
            break;
    }
}
