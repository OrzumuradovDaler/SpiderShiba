const BASE_URL = "http://localhost:2207/users"
const getData = () => {
    fetch(BASE_URL)
        .then(msg => msg.json())
        .then(data => reload(data))
}
getData()
let deleteBtn = ''
const form = document.querySelector("form")
const items = document.querySelectorAll(".items")


form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        image: "https://i.mycdn.me/i?r=AzGzPdfds0hBZVRwtGnPWxIb2zQQRSIb9h6cOX5-5eSL-e7WXg7vj3KBwuQgdnkaHBY"
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

   fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" } 
   })
    .then(res => res.json())
    .then(() => getData())
}

function reload (arr) {
    items.forEach(el => el.innerHTML = "")
    for(let item of arr) {
        let box = document.createElement("div"),
            top = document.createElement("div"),
            bottom = document.createElement("div"),
            fullName = document.createElement("h1"),
            img = document.createElement("img"),
            age = document.createElement("span"),
            ageNum = document.createElement("span");
            let editBtn = document.createElement('img')
             deleteBtn = document.createElement('img')

            editBtn.classList.add('editBtn')
            deleteBtn.classList.add('deleteBtn')
            
            editBtn.src = './img/edit_icon.svg'
            deleteBtn.src = './img/delete_icon.svg'

            deleteBtn.setAttribute('data-', item.id);
            editBtn.setAttribute('data-id', item.id);


        fullName.innerHTML = `${item.firstName} ${item.lastName}`
        img.src = item.image
        age.innerHTML = "Age"
        ageNum.innerHTML = item.age

        box.classList.add("item")
        top.classList.add("top")
        bottom.classList.add("bottom")
        fullName.classList.add("top__full-name")
        age.classList.add("bottom__age")
        ageNum.classList.add("bottom__ageNum")



        box.append(top, bottom)
        top.append(fullName, img, editBtn,deleteBtn)
        bottom.append(age, ageNum)

        if(item.age < 30) {
            items[0].append(box)
        } else if(+ageNum.innerHTML >= 30 && +ageNum.innerHTML < 40){
            items[1].append(box)
        } else {
            items[2].append(box)
        }

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        box.style.background = generateRandomColor()
    }
}


function generateRandomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

reload([])

function deleteItem() {
    let id = this.getAttribute('data-');
    fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
      .then(() => getData());
  }

  deleteItem()

  function editItem() {
    let id = this.getAttribute('data-id');
    let fullName = prompt('Enter new full name:');
    let [firstName, lastName] = fullName.split(' ');
    fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ firstName, lastName })
    }).then(() => getData());
  }

  editItem()