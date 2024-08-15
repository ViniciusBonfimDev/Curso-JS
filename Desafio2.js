let media = 0;

function calculaMedia(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3
}

function verificarAprovacao(media) {
    return media >= 5 ? 'Aprovado' : 'Reprovado'
}

//#################################################

function calculaIMC(altura, peso) {
    let IMC = peso / altura
}