function gen_table(){
    let B2=Number(document.getElementById("capital").value); //capital
    // maximos y minimos
    
    let B3=Number(document.getElementById("couta").value); //cuota
    let B4= 0.02; //interés
    if(B2>0 && B3>0){   
        let resultado=((B4*B2)/(1-(Math.pow((1+B4), -B3))));
        console.log(resultado)
        document.querySelector(".primer").classList.add("hidden");
        document.querySelector(".primer").classList.remove("visible");
        document.querySelector(".respuesta").classList.add("visible");
        document.querySelector(".respuesta").classList.remove("hidden");
        document.querySelector(".respuesta").classList.add("flexbox");
        document.querySelector("#capitalrespuesta").placeholder = Intl.NumberFormat().format(B2.toFixed(0));
        document.querySelector("#plazorespuesta").placeholder = Intl.NumberFormat().format(B3.toFixed(0));
        document.querySelector("#valorcuota").textContent = Intl.NumberFormat().format(resultado.toFixed(0));
    }else{
        alert("Falta ingresar un Número");
    }
}
let B2=document.getElementById("capital"); //capital
B2.addEventListener('input', leertexto)
function leertexto(e) {
    console.log(Intl.NumberFormat().format(e.target.value.toFixed(0)));
    
}

// function clearform() {
//     document.getElementById("form").reset();
// }}
