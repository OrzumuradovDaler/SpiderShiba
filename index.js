let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let counter = document.querySelector('.counter')
let rnd = document.querySelector('.rnd')
let reset = document.querySelector('.reset')
counter.innerHTML = 0 

plus.onclick = () => {
    counter.innerHTML++ 
}
minus.onclick = () => {
    counter.innerHTML--
}
rnd.onclick = () => {
    counter.innerHTML =  Math.floor(Math.random() * 100 )
}
reset.onclick = () => {
    counter.innerHTML =  0
}