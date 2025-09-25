let numeroSecreto; // O número que o jogador precisa adivinhar
let contadorDeChances = 1; // Começa na primeira chance
const MAX_CHANCES = 10; // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('#mensagem');
const palpitesAnterioresElement = document.querySelector('#palpites-anteriores');
const dicaElement = document.querySelector('#dica');
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = [];

function iniciarJogo() {
   numeroSecreto = Math.floor(Math.randow() * 100 ) + 1;
   console.log('Numero Secreto (apenas para teste):', numeroSecreto);
}