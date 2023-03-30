let under25 = document.querySelector('#under25')
let under50 = document.querySelector('#under50')
let another = document.querySelector('#another')

let base_users = 'https://dummyjson.com/users'

fetch(base_users)
.then(res => res.json())
.then(res => reload(res.users))

function reload(arr){

    for(let item of arr){
        let age = new Date().getFullYear() - new Date(item.birthDate).getFullYear()
        let div = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let name = document.createElement('span')
        let profilephoto = document.createElement('img')
        let cont = document.createElement('div')
        cont.classList.add('cont')
        div.classList.add('block')
        name.classList.add('name')
        span.classList.add('age')
        p.classList.add('ipName')
        profilephoto.classList.add('profilephoto')
        profilephoto.src = item.image
        name.innerHTML = 'Ф.И.: ' + item.firstName + ' ' + item.lastName
        span.innerHTML = 'Возраст: ' + ' '+ age
        p.innerHTML = 'Ip:' + ' ' + item.ip
        cont.append(name, span, p)
        div.append(profilephoto, cont)

        if(age <= 25){
            under25.append(div)
        } else if (age <= 50) {
            under50.append(div)
        } else {
            another.append(div)
        }
    }
}

