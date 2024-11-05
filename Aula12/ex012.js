var hora = new Date()
var h = hora.getHours()
var min = new Date()
var m = min.getMinutes()
var sec = new Date()
var s = sec.getSeconds()
console.log(`Agora são extamente ${h}:${m}:${s}.`)
if (h < 12){
    console.log('bom dia!')
}else if(h <= 18){
    console.log('boa tarde!')
}else{
    console.log('boa noite!')
}