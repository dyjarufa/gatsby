//busca binária exige que os dasos esteja ordenados
//busca binária inicilamente precisa acerta aonde é o meio! 
//o nome binário, tento acerto o meio vou dividir o problema na metade em cada interação 

const vetor = [1,2,3,4,5]

//       meu vetor, aonde estou começando à esquerda, marco aonde estou à direta, qual valor que estou buscando
const binSearche = (vetor, left, right, valor) => {

  if(right >= left){ //aqui verifico quando o meu array terminou
    console.log(right , left )
    const midIndex = parseInt(left + (right - left)/ 2)
    console.log(midIndex)
    const atual = vetor[midIndex]
    console.log('valor atual: ', atual)
    console.log('passou: ', valor)

    if(atual === valor){ //acertei o meio = 3
      return valor;
    }
    if(atual > valor){
      return binSearche(vetor, left, midIndex-1, valor) //ando para esquerda
    }
    return binSearche(vetor, midIndex+1, right, valor) // ando para direita
  }
  return -1
}

// console.log(binSearche(vetor, 0, vetor.length-1, 20))
console.log(binSearche(vetor, 0, vetor.length-1, 2))


