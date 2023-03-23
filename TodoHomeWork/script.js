let cont = document.querySelector('.container')
let inp = document.querySelector('input')
let inp_age = document.querySelector('.number')
let btnAdd = document.querySelector('.add')
let StudentNamer = document.querySelector('.StudentName')
let StudentAger = document.querySelector('.StudentAge')
let edit = document.querySelector('.Activities')


let UserList = [
    {
        id: Math.random(),
        year: '2023',
        name: 'Alex'
    }
]

let counter = 1

btnAdd.onclick = () => {
    let counted = counter++
    if (inp.value === '' || inp_age.value === '') {
        alert('Заполните все поля')
    }
    else {
        let date = new Date().getFullYear();
        for (item of UserList) {
            let date = new Date().getFullYear();
            let Nomer = document.querySelector('.№')
            let count = document.createElement('p')
            count.innerHTML = counted

            Nomer.append(count)

            let StudentName = document.createElement('p')
            let StudentAge = document.createElement('p')
            let img_cont = document.createElement('p')
            let editimg = document.createElement('img')
            let deleteimg = document.createElement('img')
            editimg.classList.add('img_size')
            deleteimg.classList.add('img_size')

            editimg.src = './img/edit_icon.svg'
            deleteimg.src = './img/delete_icon.svg'
            StudentName.innerHTML = inp.value
            StudentAge.innerHTML = date - inp_age.value
            StudentAger.append(StudentAge)
            StudentNamer.append(StudentName)
            img_cont.append(editimg, deleteimg)
            edit.append(img_cont)

            deleteimg.onclick = () => {
                count.remove()
                StudentName.remove()
                StudentAge.remove()
                img_cont.remove()
                editimg.remove()
                deleteimg.remove()
            }
            editimg.onclick = () => {
                let modal = document.querySelector('.modal')
                let modalBg = document.querySelector('.modalBg')
                modal.classList.add('show')
                modalBg.classList.add('show')
                let h2 = document.querySelector('.modal h2')
                h2.innerHTML = StudentName.innerHTML
                let input = document.querySelector('.input')
                let inq = document.querySelector('.INN')
                let age_input = document.querySelector('.Age_input')
                let h2_age = document.querySelector('.h2_age')
                h2_age.innerHTML = StudentAge.innerHTML
                inq.onclick = () => {
                    StudentName.innerHTML = input.value
                    StudentAge.innerHTML = date - age_input.value
                    modal.classList.remove('show')
                    modalBg.classList.remove('show')
                }
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        modal.classList.remove('show')
                        modalBg.classList.remove('show')
                    }
                })
            }

        }
    }
}



