let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')

function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})

// kkal
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g') 

        userData.gender = g

    }
})

inputs.forEach(inp => {

    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
})



let deadline = "2023-02-16 18:51"

function remainingDate(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor(((t / 1000) / 60 / 60) % 24), 
        minutes = Math.floor(((t / 1000) / 60) % 60), 
        seconds = Math.floor((t / 1000) % 60); 

    return {
        t,
        days, 
        hours, 
        minutes, 
        seconds 
    }
}


function setTime(endTime, selector) {
    let t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        updateTime = setInterval(showTime, 1000); 
    
    function showTime() {
        let t = remainingDate(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        
        if(t.t <= 0) {
            clearInterval(updateTime)
        }
    }
}

setTime(deadline, '.timer')







let body = document.querySelector('body')
let modalokno = document.querySelector('.modalOkno')
let modalbg = document.querySelector('.modalbg')
let btnModal = document.querySelector('.modalOkno button')
body.onscroll = () =>{
  let scr = scrollY
  console.log(scr);
  if(scr > 4980){

    modalokno.setAttribute('style', 'display:flex;')
    modalbg.setAttribute('style', 'display: block;')
    btnModal.onclick = () =>{
      modalokno.setAttribute('style', 'display:none;')
      modalbg.setAttribute('style', 'display: none;')
    }
  }
}

let secondpunct = document.querySelector('#second_punkt')
secondpunct.onclick = () =>{
    scrollTo(screenY, 1250)
}
let dostavka = document.querySelector('#dsotavka')

dostavka.onclick = () =>{
    modalokno.setAttribute('style', 'display:flex;')
    modalbg.setAttribute('style', 'display: block;')
    if(modalokno.setAttribute('style', 'display:flex;')){
        modalokno.setAttribute('style', 'display:none;')
        modalbg.setAttribute('style', 'display: none;')  
    }

} 

actBtns.forEach(btn => {
    btn.onclick = () => {
        inputs.forEach(inp =>{
            if(inp.value === ('')){
                confirm('Заполните все поля')
                return
            }else{
                actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))    
                btn.classList.add('calculating__choose-item_active')
                let activeCount = btn.getAttribute('data-act') 
        
                let {active, gender, weight, height, age} = userData
        
                active = activeCount
        
                if(gender === 'woman') {
                    let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
        
                    resultView.innerHTML = Math.round(res * active)
                } else {
                    let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age
        
                    resultView.innerHTML = Math.round(res * active)
                }
            }
        })


    }
})

