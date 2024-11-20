window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("sms").addEventListener("keyup", contador, false);
}
function contador(e){
    const contadorx=145;

    let caracteresRestantes = contadorx - e.currentTarget.value.length;
    document.getElementById("caracteresRestantes").innerHTML="Caracteres restantes: " + caracteresRestantes;
    console.log(e.currentTarget.validationMessage);
}