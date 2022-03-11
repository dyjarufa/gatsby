//Arvore Binária
  

let arvore = {

  left: { //subarvore esquerda

    left: undefined,
    right: {
      value: 3
    },
    
    value: 2
  }, 

  right: undefined, //subarvore direita
  value: 10 //valor do nó
}

function preOrder(tree){
  console.log(tree.value) //perOrder eu escrevo o valor primeiro
  tree.left && preOrder(tree.left)
  tree.right && preOrder(tree.right)
}

function inOrder(tree){
  tree.left && inOrder(tree.left)
  console.log(tree.value)
  tree.right && inOrder(tree.right)
}

function posOrder(tree){
  tree.left && posOrder(tree.left)
  tree.right && posOrder(tree.right)
  console.log(tree.value)
}

console.log('PreOrder')
preOrder(arvore)

console.log('=========')

console.log('InOrder')
inOrder(arvore)

console.log('=========')

console.log('posOrder')
posOrder(arvore)
