function Letra1() {
    let Letra = document.getElementById('Letra').value;

    let resultado = document.getElementById('resultado');

    if( Letra === "F" || Letra === "f" ){
        resultado.innerHTML = (`A letra é cosoante`)

    } else if ( Letra === "M" || Letra === "m"  ){
        resultado.innerHTML = (`A letra é vogal`)
    } else {
        resultado.innerHTML = (`Sexo Inválido`)
    }
}