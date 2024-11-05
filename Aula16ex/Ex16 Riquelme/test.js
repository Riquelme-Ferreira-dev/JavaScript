var valores = [1]
            // 0, 1, 2, 3, 4, 5, 6
if(valores.length == 0){
    console.log('coloque algum valor')
}else{
function somar(n1, n2){                //s = n1 + n2
    return n1 + n2                     //s = s + n3 
}
valores.sort((a, b) => a-b)
if(valores.length == 1){
    console.log(`ao todo temos ${valores.length}`)
    console.log(`maior valor: ${valores[0]}`)
    console.log(`menor valor: ${valores[0]}`)
    console.log(`somando tudo: ${valores[0]}`)
    console.log(`A media dos valores é ${valores[0]/valores.length}`)
}else{
if(valores.length == 2){
    var n1 = valores[0]
    var n2 = valores[1]
    var s = somar(n1, n2)

    console.log(`ao todo temos ${valores.length}`)
    console.log(`maior valor: ${n2}`)
    console.log(`menor valor: ${n1}`)
    console.log(`somando tudo: ${s}`)
    console.log(`A media dos valores é ${s/valores.length}`)
}else{
    var n1 = valores[0]
    var n2 = valores[1]
    var s = somar(n1, n2)
for(var pos = 2;pos <= valores.length;pos++){
    if(valores.length - 1 == pos){
        var n3 = valores[pos]
        s += n3
        break
    }
    else{
    var n3 = valores[pos]
    s += n3
    }
}

valores.sort((a, b) => a-b)
var fim = valores[valores.length - 1]

console.log(`ao todo temos ${valores.length}`)
console.log(`maior valor: ${fim}`)
console.log(`menor valor: ${n1}`)
console.log(`somando tudo: ${s}`)
console.log(`A media dos valores é ${s/valores.length}`)
}
}
}