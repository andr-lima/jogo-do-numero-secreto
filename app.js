let lista = [];
let numerolimite = 10;
let numeroSecreto = gerarNurmeroAleatorio();
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
let tentativas = 1;
function exibirMensagemInicial() {
  exibirTextoNaTela("p", `escolha um número entre 0 e ${numerolimite}`);
  exibirTextoNaTela("h1", "bem vindo ao jogo do número secreto");
}
exibirMensagemInicial();
//botão de Chutar
function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Você Descobriu O Número Secreto com ${tentativas} ${palavratentativa}`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns");
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("h1", "Errou");
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("h1", "Errou");
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    limparcampo();
  }
  tentativas++;
}
//limpa o campo ao errar o número secreto
function limparcampo() {
  document.querySelector("input").value = "";
}
//gera um número aleatório
function gerarNurmeroAleatorio() {
  let numeroGerado = parseInt(Math.random() * numerolimite + 1);
  let quantidadeDeElementosNaLista = lista.length;
  if (quantidadeDeElementosNaLista == numerolimite) {
    lista = [];
  }
  if (lista.includes(numeroGerado)) {
    return gerarNurmeroAleatorio();
  } else {
    lista.push(numeroGerado);
    console.log(lista);
    return numeroGerado;
  }
}
//reinicia o jogo
function reset() {
  numeroSecreto = gerarNurmeroAleatorio();
  tentativas = 1;
  limparcampo();
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
