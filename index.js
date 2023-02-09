let black = document.querySelector('.color1')
let purple = document.querySelector('.color4')
let gold = document.querySelector('.color2')
let silver = document.querySelector('.color3')
let stickypanel = document.querySelector('.stickypanel')
let btnfirst = document.querySelector('.btnfirst')
let btnsecond = document.querySelector('.btnsecond')

black.onclick = () => {
    stickypanel.classList.remove('goldfirst')
    stickypanel.classList.remove('silverfirst')
    stickypanel.classList.remove('deeppurple')
    stickypanel.classList.toggle('spaceblackfirst')
    btnsecond.classList.add('btnsecondobject')
}
gold.onclick = () => {
    stickypanel.classList.remove('spaceblackfirst')
    stickypanel.classList.remove('silverfirst')
    stickypanel.classList.remove('deeppurple')
    stickypanel.classList.toggle('goldfirst')
    btnsecond.classList.add('btnsecondobject')
}
silver.onclick = () => {
    stickypanel.classList.remove('spaceblackfirst')
    stickypanel.classList.remove('deeppurple')
    stickypanel.classList.remove('goldfirst')
    stickypanel.classList.toggle('silverfirst')
    btnsecond.classList.add('btnsecondobject')
}
purple.onclick = () => {
    stickypanel.classList.remove('goldfirst')
    stickypanel.classList.remove('spaceblackfirst')
    stickypanel.classList.remove('silverfirst')
    stickypanel.classList.toggle('deeppurple')
    btnsecond.classList.add('btnsecondobject')
}
btnsecond.onclick = () => {
    if(stickypanel.classList.contains('spaceblackfirst')){
        stickypanel.classList.remove('goldsecond')
        stickypanel.classList.remove('silversecond')
        stickypanel.classList.remove('deeppurplesecond')
        stickypanel.classList.toggle('spaceblacksecond') 
}
if(stickypanel.classList.contains('goldfirst')){
    stickypanel.classList.remove('spaceblacksecond')
    stickypanel.classList.remove('silversecond')
    stickypanel.classList.remove('deeppurplesecond')
    stickypanel.classList.toggle('goldsecond') 
}
if(stickypanel.classList.contains('silverfirst')){
    stickypanel.classList.remove('spaceblacksecond')
    stickypanel.classList.remove('deeppurplesecond')
    stickypanel.classList.remove('goldsecond')
    stickypanel.classList.toggle('silversecond') 
}
if(stickypanel.classList.contains('deeppurple')){
    stickypanel.classList.remove('silversecond')
    stickypanel.classList.remove('spaceblacksecond')
    stickypanel.classList.remove('goldsecond')
    stickypanel.classList.toggle('deeppurplesecond') 
}
}
let modal = document.querySelector('.modal')
let silka = document.querySelector('.silka')

silka.onclick = () => {
    modal.classList.toggle('modalokno')
}
console.log(silka);

