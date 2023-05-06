import { getData } from './http';
import { headerCreate, reload, reloadTrailerCart } from "./ui";
let body = document.body
let header = document.querySelector('header')
let movies_cont = document.querySelector('.movies')
let first_section_moreBtn = document.querySelector('.first-section .more')
let trailers__footer = document.querySelector('.trailers__footer')

headerCreate(header)






getData('/movie/popular')
    .then(res => {
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(0, 8), movies_cont)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`

        first_section_moreBtn.onclick = () => {
            let item = first_section_moreBtn
            if (item.dataset.count === 'not-all') {
                reload(res.data.results, movies_cont)
                item.dataset.count = 'all'
                item.innerHTML = 'Скрыть'
            } else {
                reload(res.data.results.slice(0, 8), movies_cont)
                item.dataset.count = 'not-all'
                item.innerHTML = 'Все новинки'
            }
        }
        reloadTrailerCart(res.data.results, trailers__footer)

        let trailers__footer_items = document.querySelectorAll('.trailers__footer-item')
        let trailers__iframe_big = document.querySelector('.trailers__iframe_big')
        trailers__footer_items.forEach((el, idx) => {
            if (idx === 0) {
                getData(`/movie/${el.dataset.id}/videos`)
                    .then(({ data }) => {
                        trailers__iframe_big.src = `https://www.youtube.com/embed/${data.results[0].key}`
                    })
            }
            el.onclick = () => {
                getData(`/movie/${el.dataset.id}/videos`)
                    .then(({ data }) => {
                        trailers__iframe_big.src = `https://www.youtube.com/embed/${data.results[0].key}`
                    })
            }
        })

    })


getData(`/person/popular`)
    .then(res => {
        let f_place = document.querySelector('.firstplace_actor')
        let s_place = document.querySelector('.secondplace_actor')
        let img_first = document.createElement('img')
        let img_second = document.createElement('img')
        img_first.src = import.meta.env.VITE_BASE_IMG + res.data.results[0].profile_path
        img_second.src = import.meta.env.VITE_BASE_IMG + res.data.results[1].profile_path
        f_place.append(img_first)
        s_place.append(img_second)
        let arr = res.data.results.slice(3, 20)
        for (let el of arr) {
            getData(`/person/${el.id}`)
                .then(res => {

                    let time_data = new Date().getFullYear()
                    let another_actors = document.querySelector('.another_actors')
                    another_actors.innerHTML += `<div class="aap_box"><div class="ab_actors_left"><h3>${el.name}</h3><p>${el.name}</p><span>${time_data - res.data.birthday.slice(0, 4)} лет</span></div><div class="ab_actors_right"><span class="aar_place">${arr.indexOf(el) + 3}-место</span></div></div><hr> `
                })

        }
        let f_arr = res.data.results.slice(0, 1)
        for (let item of f_arr) {
            let div = document.createElement('div')
            let age = document.createElement('span')
            let name = document.createElement('p')
            let or_name = document.createElement('h4')
            div.classList.add('about_the_actors')
            name.innerHTML = item.name
            or_name.innerHTML = item.name
            div.append(name, or_name, age)
            f_place.append(div)
            age.classList.add('actor_age')
            getData(`/person/${item.id}`)
                .then(res => {
                    let time_data = new Date().getFullYear()
                    let age = document.querySelector('.actor_age')
                    age.innerHTML = `${time_data - res.data.birthday.slice(0, 4)} лет`
                })

        }
        let s_arr = res.data.results.slice(1, 2)
        for (let item of s_arr) {
            let div = document.createElement('div')
            let age = document.createElement('span')
            let name = document.createElement('p')
            let or_name = document.createElement('h4')
            div.classList.add('about_the_actors')
            name.innerHTML = item.name
            or_name.innerHTML = item.name
            div.append(name, or_name, age)
            s_place.append(div)
            age.classList.add('actor_age1')
            getData(`/person/${item.id}`)
                .then(res => {
                    let time_data = new Date().getFullYear()
                    let age = document.querySelector('.actor_age1')
                    age.innerHTML = `${time_data - res.data.birthday.slice(0, 4)} лет`
                })
        }

    })

let first = 0
let second = 4
getData(`/movie/upcoming`)
    .then(res => {
        first = 0
        second = 4
        let novinki = document.querySelector(".upcoming_movie")
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(first, second), novinki)
    })
let next = document.querySelector('.next')
let back = document.querySelector('.back')

next.onclick = () => {
    if (second === 20) {
        return
    } else {
        getData(`/movie/upcoming`)
            .then(res => {
                first += 4
                second += 4
                let novinki = document.querySelector(".upcoming_movie")
                let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
                reload(res.data.results.slice(first, second), novinki)
            })
    }
}

back.onclick = () => {
    if (second === 4) {
 
        return
    } else {
        getData(`/movie/upcoming`)
            .then(res => {
                first -= 4
                second -= 4
                let novinki = document.querySelector(".upcoming_movie")
                let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
                reload(res.data.results.slice(first, second), novinki)
            })
    }
}