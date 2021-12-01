function Letra1() {
    let Letra = document.getElementById('Letra').value;

    let resultado = document.getElementById('resultado');

    if( Letra === "A" || Letra === "E" || Letra === "I" || Letra === "O" || Letra === "U" || Letra === "a" || Letra === "e" || Letra === "i" || Letra === "o" || Letra === "u" ){
        resultado.innerHTML = (`Vogal`)
    } else if ( Letra === "B" || Letra === "C" || Letra === "D" || Letra === "F" || Letra === "G" || Letra === "J" || Letra === "K" || Letra === "L" || Letra === "M" || Letra === "N" || Letra === "P" || Letra === "Q" || Letra === "R" || Letra === "S" || Letra === "T" || Letra === "V" || Letra === "W" || Letra === "X" || Letra === "Z" || Letra === "b" || Letra === "c" || Letra === "d" || Letra === "f" || Letra === "d" || Letra === "f" || Letra === "g" || Letra === "j" || Letra === "k" || Letra === "l" || Letra === "m" || Letra === "n" || Letra === "p" || Letra === "q" || Letra === "r" || Letra === "s" || Letra === "t" || Letra === "v" || Letra === "w" || Letra === "x" || Letra === "z"  ){
        resultado.innerHTML = (`consoante`)
    } else {
        resultado.innerHTML = (`Inválido`)
    }
}