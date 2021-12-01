function numero() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let numero3 = parseInt(document.getElementById('numero3').value);

    let resultado1 = document.getElementById('resultado1');
    let resultado2 = document.getElementById('resultado2');

    if( numero1 >= numero2 && numero1 >= numero3 ){
        resultado1.innerHTML = (`O ${numero1} é maior`)
    } else if (  numero2 >= numero1 && numero2 >= numero3 ){
        resultado1.innerHTML = (`O ${numero2} é maior`)
    } else if (  numero3 >= numero1 && numero3 >= numero2 ){
        resultado1.innerHTML = (`O ${numero3} é maior`)
    }

    if( numero1 <= numero2 && numero1 <= numero3 ){
        resultado2.innerHTML = (`O ${numero1} é menor`)
    } else if (  numero2 <= numero1 && numero2 <= numero3 ){
        resultado2.innerHTML = (`O ${numero2} é menor`)
    } else if (  numero3 <= numero1 && numero3 <= numero2 ){
        resultado2.innerHTML = (`O ${numero3} é menor`)
    }
}
