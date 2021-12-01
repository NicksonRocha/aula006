function numero() {
    let Numero = document.getElementById('Numero').value;

    let resultado = document.getElementById('resultado');

    if( Numero > 0 ){
        resultado.innerHTML = (`O número ${Numero} é positivo`)

    } else if ( Numero == 0 ){
        resultado.innerHTML = (`O número ${Numero} é neutro`)
    } else if ( Numero < 0 ){
        resultado.innerHTML = (`O número ${Numero} é negativo`)
    }
}