var valores = []
function adicionar(){
    res.innerHTML = ""
    var form = window.document.getElementById('formulario')
    var list = window.document.getElementById('lista')
    if (form.value.length == 0){
        alert('[ERRO] Coloqur algum valor')
    }else{
        var numform = Number(form.value)
        if(numform < 1 || numform > 100){
            alert('Esse numero é invalido')
        }else{
        if(valores.indexOf(numform) == -1){
            valores.push(numform)
            var ops = document.createElement('option')
            ops.text = `Valor ${numform} adicionado`
            list.appendChild(ops)
        }else{
            alert('ja existi esse valor')
        }
        }
    }
}
function finalizar(){

        if(valores.length == 0){
            alert('Coloque algum valor antes de finalizar')
        }else{
            if(valores.length == 1){
                
                res.innerHTML += `<p>ao todo temos ${valores.length}</p>`
                res.innerHTML += `<p>maior valor: ${valores[0]}</p>`
                res.innerHTML += `<p>menor valor: ${valores[0]}</p>`
                res.innerHTML += `<p>somando tudo: ${valores[0]}</p>`
                res.innerHTML += `<p>A media dos valores é ${valores[0]/valores.length}</p>`

            }else{
        res.innerHTML = ""
        function somar(n1, n2){                //s = n1 + n2
            return n1 + n2                     //s = s + n3 
        }
        if(valores.length == 2){
        var n1 = valores[0]
        var n2 = valores[1]
        var s = somar(n1, n2)

        res.innerHTML += `<p>ao todo temos ${valores.length}</p>`
        res.innerHTML += `<p>maior valor: ${n2}</p>`
        res.innerHTML += `<p>menor valor: ${n1}</p>`
        res.innerHTML += `<p>somando tudo: ${s}</p>`
        res.innerHTML += `<p>A media dos valores é ${s/valores.length}</p>`

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
        
        res.innerHTML += `<p>ao todo temos ${valores.length}</p>`
        res.innerHTML += `<p>maior valor: ${fim}</p>`
        res.innerHTML += `<p>menor valor: ${valores[0]}</p>`
        res.innerHTML += `<p>somando tudo: ${s}</p>`
        res.innerHTML += `<p>A media dos valores é ${s/valores.length}</p>`
    }
}
        }
}