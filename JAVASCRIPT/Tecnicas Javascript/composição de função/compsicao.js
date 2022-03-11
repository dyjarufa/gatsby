// return fn2(fn1(valor)) //o resultado de fn1 paso para fn2
// function composicao(fn1, fn2, fn3, valor){ //dessa forma o valor está muito amarrado ao valor

//técnica curry:
  function composicao(fn1, fn2, fn3){
    return function(valor){// chama uma função que retorna um valor, e somente quando essa função for chamada...
      return fn3(fn2(fn1(valor))); //...Irei chamar essas função

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

//dessa forma eu armazeno todo um fluxo de processamento e passo para uma variável e chamo apenas uma vez!
console.log(exagerado('Cuidado com o buraco'));
console.log(exagerado('para'));