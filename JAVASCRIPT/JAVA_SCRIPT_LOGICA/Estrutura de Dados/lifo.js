// LIFO: LAST IN - FIRST OUT

const Stack = () => {
  const data = [] //pilha aqui
  let top = -1 // quem está no topo da pilha

  const push = (value) => {
    top++
    data[top] = value //valor recebido armazenado na posição "top" que é o topo da pilha
    console.log(data)
  }

  const remove = () => {
    if(top < 0){
      return false

    }else{
      const lastItemInserted = data[top] //aqui eu recupero o ultimo item inserido na pilha 
      data.splice(top, 1) //aqui eu excluo o item da pilha na posição do "top"
      top-- 
      return lastItemInserted
    }
  }

  const print = () =>  console.log('Quem está na pilha: ' + data + ' / Posição do Topo: ' + top)

  return { 
    push, remove, print
  }

}


const stack = Stack()

stack.push(1)
stack.push(2)
console.log(stack.remove())
console.log(stack.remove()) 
stack.print()
stack.push(3)
stack.push(4)
console.log(stack.remove()) 
stack.print()