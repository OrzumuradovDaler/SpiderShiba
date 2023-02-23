let form = document.forms.reg
let needInps = document.querySelectorAll('.required')
let allInputs = form.querySelectorAll('input')
let error_view = document.querySelector('.error')
let success_view = document.querySelector('.success')
let need_view = document.querySelector('.need')
let all_view = document.querySelector('.all')
let animation = document.querySelector('.lds-dual-ring')

all_view.innerHTML = `All: ${allInputs.length}`
need_view.innerHTML = `Need: ${needInps.length}`


form.onsubmit = (event) => {
    event.preventDefault()
    let error = 0 

    needInps.forEach(lbl => {
        let inp = lbl.querySelector('input')
        lbl.classList.remove('invalid')

        if(inp.value.length === 0) {
            lbl.classList.add('invalid')
            error++
        }
    })

    error_view.innerHTML = `Error: ${error}`
    success_view.innerHTML = `Success: ${needInps.length - error}`


    if(error > 0) {
                animation.classList.add('lds-dual-ringA') 
         setTimeout(item =>{ 
  
                 animation.classList.remove('lds-dual-ringA') 
               
             setTimeout(item=>{ 
                 submit() 
                 alert('error') 
             },10) 
  
         },2000)
    } else { 
        animation.classList.add('lds-dual-ringA')
        setTimeout(item =>{

                animation.classList.remove('lds-dual-ringA')
             
            setTimeout(item=>{
                submit()
                alert('Все в норме')
            },10)

        },2000)
        
    }
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}
