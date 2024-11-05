function contar(){
    let ini = window.document.getElementById('ini')
    let fim = window.document.getElementById('F')
    let passo = window.document.getElementById('P')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] faltam dados!')
        res.innerHTML= 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        //contagem crescente
        if(i < f) {
            for(let c = i;c <= f;c += p){
                res.innerHTML += `${c} &#x1f449`
            } 
        //contagem regressiva
        }else{
            for(let c = i;c >= f;c -= p){
            res.innerHTML += `${c} &#x1f449`
            } 
        } res.innerHTML +=`&#x1F3C1`
    }
}

    