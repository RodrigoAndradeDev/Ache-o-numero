const container = document.getElementById('container') // criando a variavel do container conectado pelo id "container"
const mensagem = document.getElementById('mensagem'); // criando a variavel numero conectado pelo id "numero"
let numeroSorteado = Math.floor(Math.random()*100) +1; // escolhendo um numero de forma aleatoria entre 1 e 100

console.log(numeroSorteado)

let jogoAtivo = true;
let maiorValorMenor = 0;
let menorValorMaior = 101;
let valorMaior = false;
let valorMenor = false;
let contador = 0;

mensagem.textContent = 'Escolha um número e tente a SORTE!'

// for para criar os cards la no html por forma de repetiçao minimizando o codigo no html

for(let i = 1; i <=100; i++){
    const card = document.createElement('div') // cria mais uma tag para o html
    card.textContent = i; // Forma de escrever o "1" para o usuario
    card.dataset.valor = i; //forma de dar o valor para o proprio js 
    container.appendChild(card); // Forma de colocar o card dentro do container
}

container.addEventListener('click', (e) => { // identifica o evento de clique e leva o valor para o 
    const alvo = e.target;                     // alvo



if(!alvo.dataset.valor || !jogoAtivo) return; // ele identifica se a pessoa clicou em uma area que sem valor e retorna caso isso aconteça

let valor = parseInt(alvo.dataset.valor); // ele cria a variavel do valor que o usuario escolheu

if (valor < numeroSorteado && valor > maiorValorMenor) {
  maiorValorMenor = valor;
  valorMenor = true;
}

if (valor > numeroSorteado && valor < menorValorMaior) {
  menorValorMaior = valor;
  valorMaior = true;
}

contador++;

console.log(valorMaior);
console.log(valorMenor);
console.log(maiorValorMenor);
console.log(menorValorMaior);
console.log(valor);
console.log(contador);



if(valor == numeroSorteado) {
    alvo.classList.add('certo');
    mensagem.innerText = `Parabéns você acertou o número em (${contador}) tentativas`;
    jogoAtivo = false;
  }else if(numeroSorteado > maiorValorMenor && numeroSorteado < menorValorMaior && valorMaior && valorMenor)  {
    alvo.classList.add('errado');
    mensagem.textContent = `Seu número está entre (${maiorValorMenor}) e (${menorValorMaior})`;
    
  } else if(valor > numeroSorteado) {
    alvo.classList.add('errado');
    mensagem.innerText = `O número secreto é MENOR que ${valor}.`;

  } else if(valor < numeroSorteado) {
    alvo.classList.add('errado');
    mensagem.innerText = `O número secreto é MAIOR que ${valor}`;
  }
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});



