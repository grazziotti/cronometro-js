let intervalo
let horas = 0
let minutos = 0
let segundos = 0
let ms = 0

const cronometro = document.querySelector('.cronometro')
const botaoIniciar = document.querySelector('.botoes .iniciar')
const botaoReiniciar = document.querySelector('.botoes .reiniciar')

botaoIniciar.addEventListener('click', e => {
    let textoAtual = e.target.textContent
    switch(textoAtual) {
        case 'iniciar':
            e.target.textContent = 'pausar'
            iniciar()
            break
        case 'pausar':
            e.target.textContent = 'retomar'
            ativaBotaoReiniciar()
            pausar()
            break
        case 'retomar':
            e.target.textContent = 'pausar'
            desativaBotaoReiniciar()
            iniciar()
            break
    }
})
botaoReiniciar.addEventListener('click', reiniciar)

function iniciar() {
    intervalo = setInterval(atualizaTempo, 10)
}
function pausar() {
    clearInterval(intervalo)
}
function reiniciar() {
    if (botaoReiniciar.classList.contains('ativo')) {
        horas = 0
        minutos = 0
        segundos = 0
        ms = -1
        clearInterval(intervalo)
        atualizaTempo()
        botaoIniciar.innerText = 'iniciar'
        desativaBotaoReiniciar()
    }
}

function ativaBotaoReiniciar() {
    botaoReiniciar.classList.remove('inativo')
    botaoReiniciar.classList.add('ativo')
}
function desativaBotaoReiniciar() {
    botaoReiniciar.classList.remove('ativo')
    botaoReiniciar.classList.add('inativo')
}

function atualizaCronometro(classe, valor) {
    let novoValor = valor < 10 ? `0${valor}` : valor
    cronometro.querySelector(`.${classe}`).innerHTML = novoValor
}

function atualizaTempo() {
    ms++
    if (ms === 100) {
        segundos++
        ms = 0
    } if (segundos === 60) {
        minutos += 1
        segundos = 0
    } if (minutos === 60) {
        horas += 1
        minutos = 0
    }

    atualizaCronometro('horas', horas)
    atualizaCronometro('minutos', minutos)
    atualizaCronometro('segundos', segundos)
    atualizaCronometro('ms', ms)

}