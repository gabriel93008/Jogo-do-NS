//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero segreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
     {rate:1.2})
};

function exibirMensagemInicial() {
     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
     let chute = document.querySelector('input').value
     
     if (chute == numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!');
          let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
          let mensagemTentativas = `Você descobriu o número secreto com 
          ${tentativas} ${palavraTentativas}`
          exibirTextoNaTela('p', mensagemTentativas );
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          if (chute > numeroSecreto) {
               exibirTextoNaTela('p', 'O número secreto é menor')
          } else {
               exibirTextoNaTela('p', 'O número secreto é maior')
          }
          tentativas++;
          limparCampo();
     }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
     
     if (quantidadeDeElementosNaLista == numeroLimite) {
          listaNumerosSorteados = [];
     }
     if (listaNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio();
     } else {
          listaNumerosSorteados.push(numeroEscolhido)
          return numeroEscolhido;
     }
}


function limparCampo () { 
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled',true)
}



// let nota1 = 7;
// let nota2 = 6;
// let nota3 = 3;
// let nota4 = 5;
// function calcularMedia(nota1, nota2, nota3, nota4) {
//      let media = (nota1 + nota2 + nota3 + nota4) / 5
//      return media;
// }
// function verificarAprovacao(media) {
//      return media >= 5 ? 'Aprovado' : 'Reprovado'
// }

// let reusultado = calcularMedia();
// console.log(verificarAprovacao(reusultado))




// function imc (altura, peso) {
//       let meuImc = peso / (altura*altura);
//       return meuImc

// }
// let resultado = imc(1.72, 120)
// console.log(`Seu imc é ${resultado}`)


