let num = [5,8,2,100,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
console.log(`o valor 5 da posição ${pos}`)
}