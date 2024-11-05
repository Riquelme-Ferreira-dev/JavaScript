function clicar() {
    var nu1 = window.document.getElementById('number')

    if(String(nu1.value) == ""){
        window.alert('Coloque algum valor')
    }

    var n = Number(nu1.value)



    var n1 = 1 * n
    var n2 = 2 * n
    var n3 = 3 * n
    var n4 = 4 * n
    var n5 = 5 * n
    var n6 = 6 * n
    var n7 = 7 * n
    var n8 = 8 * n
    var n9 = 9 * n
    var n10 = 10 * n

    res.innerHTML=`1 x ${n} = ${n1}<br>
                2 x ${n} = ${n2}<br>
                3 x ${n} = ${n3}<br>
                4 x ${n} = ${n4}<br>
                5 x ${n} = ${n5}<br>
                6 x ${n} = ${n6}<br>
                7 x ${n} = ${n7}<br>
                8 x ${n} = ${n8}<br>
                9 x ${n} = ${n9}<br>
                10 x ${n} = ${n10}`
}