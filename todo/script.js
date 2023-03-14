let cont = document.querySelector('.container')
let form = document.forms.creater
let todos = [
    {
        id: 1,
        completed: true,
        time: "11:22",
        task: 'Полететь в Дубай'
    },
    {
        id: 2,
        completed: false,
        time: "11:46",
        task: 'Полететь на работу'
    }
]


form.onsubmit = (e) => {
    e.preventDefault()

    let time = new Date().getHours() + ":" + new Date().getMinutes()
    let todo = {
        id: Math.random(),
        completed: false,
        time: time
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo);
    reload(todos)
}


function reload(arr) {
    cont.innerHTML = ""

    for (let item of arr) {
        let todoBox = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let h2 = document.createElement('h2')
        let spanTime = document.createElement('span')
        let cancelBtn = document.createElement('button')
        let cancelImg = document.createElement('img')

        todoBox.classList.add('box')
        left.classList.add('left')
        cancelImg.classList.add('cancelImg')
        right.classList.add('right')

        h2.innerHTML = item.task
        spanTime.innerHTML = item.time

        todoBox.append(left, right)
        left.append(h2, spanTime)
        right.append(cancelBtn)
        cancelBtn.append(cancelImg)
        cont.append(todoBox)

        cancelBtn.onclick = () => {
            let key = item.id
            arr.splice(arr.findIndex(el => el.id === key), 1)
            todoBox.remove()
        }
        h2.onclick = () => {
            h2.classList.add('cancel')
        }

    }
}
reload(todos) 


