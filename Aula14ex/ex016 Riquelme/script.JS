function clicar(){
    var nu1 = window.document.getElementById('ini')
    var nu2 = window.document.getElementById('F')
    var nu3 = window.document.getElementById('P')


    if(String(nu2.value) == ""){
        res.innerHTML=`Impossível contar!`
    }else{

    if(String(nu1.value) == ""){
        res.innerHTML=`Impossível contar!`
    }else{
      
        var n1 = Number(nu1.value)
        var n2 = Number(nu2.value)
        var n3 = Number(nu3.value)

    if(n3 == 0){
        window.confirm('Passo inválido! Considerando PASSO 1')
        n3 = 1
    }
    

    if(n2 >= n1){
        res.innerHTML=`Contando:<br>`
        for(n1 = n1;n1 <= n2;n1 += n3){
            res.innerHTML += `${n1} &#x1F449`
        }res.innerHTML += `&#x1F6A9`
    }else{
        if(n2 <= n1){
            res.innerHTML=`Contando:<br>`               
            while (n1 >= n2) {                       
                res.innerHTML += `${n1} &#x1F449`     
                n1 -= n3                           
            }   res.innerHTML += `&#x1F6A9`

    }

    }

    /*res.innerHTML=`Contando:<br>`               PODE SER
    while (n1 <= n2) {                       POR ESSAS DUAS
        res.innerHTML += `${n1} &#x1F449`     MANEIRAS EM
        n1 += n3                             WHILE and FOR   
    }   res.innerHTML += `&#x1F6A9`
    */
    }
}
}