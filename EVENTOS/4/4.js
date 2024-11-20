window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementsByName("question1").forEach(a => { a.addEventListener("click", validar, false)});
    document.getElementsByName("question2").forEach(a => { a.addEventListener("click", validar, false)});
}
function validar(e){
    if(e.currentTarget.value=="c" && e.currentTarget.name=="question1"){ 
        alert("Correcto");   
    }
    if(e.currentTarget.value=="a" && e.currentTarget.name=="question2"){ 
        alert("Correcto");  
    }
    // if(document.getElementsByName("question1").values())
}