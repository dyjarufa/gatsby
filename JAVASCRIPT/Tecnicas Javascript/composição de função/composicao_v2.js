//CONCEITO FINAL: Através de um função simples é possivel receber várias funções como parâmetro e de forma tardia,
// quando receber o valor será realizada o processamento;

// Tornando fexível
function composicao(...funcoes){
  //conceitos de programação funcional
  //currying 
  //Lazy evaluation só sera processada uma vez que receber todos os paâmetros necessários (no caso as 3 funcções)
  return function(valor){
    return funcoes.reduce((acc, fn) => {
      return fn(acc); //o return é a chamada da função (fn) em relação ao acumulador (acc)
    }, valor) //valor INICIAL é exatamente o valor passado na função a cima (valor)
  }

}

function gritar(texto){
return texto.toUpperCase();
}


function enfatizar(texto){
return `${texto}!!!`;
}

function tornarLento(texto){
return texto.split('').join(' ');
}


const exagerado = composicao( // agora passo as funções como parâmetro da funcção composição, e o resultado eu passo o meu valor (texto)
  gritar,
  enfatizar,
  tornarLento,
  
)

const quaseExagerado = composicao(
  gritar,
  enfatizar,
  
)

//dessa forma eu armazeno todo um fluxo de processamento e passo para uma variável e chamo apenas uma vez!
console.log(exagerado('Cuidado com o buraco'));
console.log(quaseExagerado('para'));

console.log(composicao(
    gritar,
    enfatizar
  )('eita') //posso passar dessa forma com a técnica de currying
)