let tabheader = document.querySelectorAll('.tabheader__item')
let tabcontent = document.querySelectorAll('.tabcontent__descr')
let images = document.querySelectorAll('.imagees')
let tabcon = document.querySelectorAll('.tabcontent')

tabheader.forEach(item =>{
    tabcontent.forEach(el => el.classList.add('hide'))
tabheader[0].onclick = () =>{
    images.forEach(el => el.classList.add('hide'))
    images[0].classList.remove('hide')
    images[0].classList.add('show')
    tabheader.forEach(el => el.classList.remove('tabheader__item_active'))
    tabheader[0].classList.add('tabheader__item_active')
    tabcontent.forEach(el => el.classList.add('hide'))
    tabcontent[0].classList.remove('hide')
}
tabheader[1].onclick = () =>{
    images.forEach(el => el.classList.add('hide'))
    images[1].classList.remove('hide')
    images[1].classList.add('show')
    tabheader.forEach(el => el.classList.remove('tabheader__item_active'))
    tabheader[1].classList.add('tabheader__item_active')
    tabcontent.forEach(el => el.classList.add('hide'))
    tabcontent[1].classList.remove('hide')
}
tabheader[2].onclick = () =>{
    images.forEach(el => el.classList.add('hide'))
    images[2].classList.remove('hide')
    images[2].classList.add('show')
    tabheader.forEach(el => el.classList.remove('tabheader__item_active'))
    tabheader[2].classList.add('tabheader__item_active')
    tabcontent.forEach(el => el.classList.add('hide'))
    tabcontent[2].classList.remove('hide')
}
tabheader[3].onclick = () =>{
    images.forEach(el => el.classList.add('hide'))
    images[3].classList.remove('hide')
    images[3].classList.add('show')
    tabheader.forEach(el => el.classList.remove('tabheader__item_active'))
    tabheader[3].classList.add('tabheader__item_active')
    tabcontent.forEach(el => el.classList.add('hide'))
    tabcontent[3].classList.remove('hide')
}
})

