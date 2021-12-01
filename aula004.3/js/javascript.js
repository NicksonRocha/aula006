function nota() {
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let calculo = (nota1 + nota2 + nota3) /3 ;

    let resultado = document.getElementById('resultado');

    if( calculo == 10 ){
        resultado.innerHTML = (`Sua nota é ${calculo},Aprovado com distinção`)
    } else if ( calculo > 7  ){
        resultado.innerHTML = (`Sua nota é ${calculo},Aprovado`)
    } else if ( calculo < 7  ){
        resultado.innerHTML = (`Sua nota é ${calculo},Reprovado`)
    } else if ( calculo = 7  ){
        resultado.innerHTML = (`Sua nota é ${calculo},Aprovado`)
    } 
}