function numero() {
    let Numero1 = document.getElementById('Numero1').value;
    let Numero2 = document.getElementById('Numero2').value;
    let resultado = document.getElementById('resultado');

    if( Numero1 > Numero2 ){
        resultado.innerHTML = (`O número maior é ${Numero1}`)

    } else if ( Numero2 > Numero1 ){
        resultado.innerHTML = (`O número maior é ${Numero2}`)
    }
}