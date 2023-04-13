import axios from "axios"
import { getData } from "/modules/http.request"
import headerCreater from "/modules/header.js"
import { reloadWallets } from "/modules/ui"

headerCreater()

let wList = document.querySelector('.walletsList')
let table = document.querySelector('.transactions table')
let userNameView = document.querySelector('.welcome .userName')
let userEmail = document.querySelector('.greeding .email')

let user = JSON.parse(localStorage.getItem('user'))

userNameView.innerHTML = `${user.name} ${user.surname}`
userEmail.innerHTML = `${user.email}`

getData("/cards?user_id=" + user.id)
    .then(res => reloadWallets(res.data, wList))

getData("/transactions?user_id=" + user.id)
    .then(res => reloadTransactions(res.data, table))


export function reloadTransactions(arr, place) {
    place.innerHTML = ''
    reloadTableHead(place)
    if (arr.length === 0) {
        place.innerHTML = "У вас не было трансакций."
        return
    }
    for (let item of arr) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        td1.innerHTML = item.id
        td2.innerHTML = item.card.name
        td3.innerHTML = item.category
        td4.innerHTML = item.total
        td5.innerHTML = item.date

        tr.append(td1, td2, td3, td4, td5)
        place.append(tr)
    }
}

function reloadTableHead(place) {
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let th5 = document.createElement('th')
    th1.align = 'start'
    th2.align = 'start'
    th3.align = 'start'
    th4.align = 'start'
    th5.align = 'start'
    th1.innerHTML = 'ID'
    th2.innerHTML = 'Отправлено с кошелька'
    th3.innerHTML = 'Категория'
    th4.innerHTML = 'Сумма транзации'
    th5.innerHTML = 'Когда'

    tr.append(th1, th2, th3, th4, th5)
    place.append(tr)
}