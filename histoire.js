let inicio = document.getElementById('inicio')
let olhaAoRedor = document.getElementById('olha-ao-redor')
let armario = document.getElementById('armario')
let inicioarmario = document.getElementById('inicioarmario')
let camisas = document.getElementById('camisas')
let calcas = document.getElementById('calcas')
let portaTrancada = document.getElementById('porta-trancada')
let horario = document.getElementById('horario')
horario.innerText = new Date()
let gifporta = document.getElementById('gifporta')
let gifArmario = document.getElementById('gif-armario')

function primeiraAcao(acao) {

    if (acao === "abrirPorta") {
        portaTrancada.style.display = "block"

    }
    if (acao === "vasculharQuarto") {

    }

    inicio.style.display = "none"
    olhaAoRedor.style.display = "block"
}

function abrirPorta() {
    inicio.style.display = "none"

    gifporta.style.display = "block"
    setTimeout(() => {
        gifporta.style.display = "none"

        primeiraAcao("abrirPorta")
    }, 3000)


}

function segundaAcao(acao) {

    if (acao === 'armario') {
        olhaAoRedor.style.display = "none"

        gifArmario.style.display = "block"
        setTimeout(() => {
            gifArmario.style.display = "none"
            armario.style.display = "block"

        }, 3000)



    }

    if (acao === 'criado-mudo') {

        olhaAoRedor.style.display = "none"
        console.log("Você chegou em criado mudo")
    }

    if (acao === 'cama') {

        olhaAoRedor.style.display = "none"
        console.log("Você chegou em cama")
    }

}

function procurarnoArmario(acao) {

    if (acao === 'camisas') {

        inicioarmario.style.display = "none"
        camisas.style.display = "block"

    }

    if (acao === 'calcas') {

        inicioarmario.style.display = "none"
        calcas.style.display = "block"

    }

    if (acao === 'voltar') {

        armario.style.display = "none"
        portaTrancada.style.display = "none"
        olhaAoRedor.style.display = "block"

    }
}

function voltar(acao) {

    camisas.style.display = "none"
    inicioarmario.style.display = "block"

}