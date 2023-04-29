import { getData } from './http';
import { headerCreate, reload } from "./ui";
let body = document.body
let header = document.querySelector('header')
let movies_cont = document.querySelector('.movies')
let popular_movies = document.querySelector('.popular_movies')

headerCreate(header)

getData('/movie/popular')
    .then(res => {
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results, movies_cont)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`
    })

getData('/movie/now_playing')
    .then(res => {
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(6, 10), popular_movies)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`
        console.log(res.data.results.slice(0, 4));
    })

let trailer = document.querySelector('.trailer_box')
let movie_treyler = document.querySelectorAll('.movie_treyler')
getData(`/movie/popular`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        trailer.src = `https://www.youtube.com/embed/${video.video}`;
        movie_treyler.forEach(el => {
            el.src = `https://www.youtube.com/embed/${video.video}`;

        })
        console.log(res);
    })



getData(`/person/popular`)
    .then(res => {
        console.log(res);
        let popular_actors = document.querySelector('.popular_actors')
        let popular = res.data.results.slice(13, 16)
        console.log(popular);
        for (let item of popular) {
            let ppimg = document.createElement('img')

            ppimg.classList.add('ppimg')

            popular_actors.append(ppimg)

            ppimg.src = import.meta.env.VITE_BASE_IMG + item.profile_path
        }
    })

getData(`/movie/upcoming`)
    .then(res => {
        console.log(res.data);
        let novinki = document.querySelector(".ojidaemienovibki")
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(4, 8), novinki)
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + item.backdrop_path})`
    })

let search = document.querySelector("#search_i")
let sign_up = document.querySelector('#sign_up')
let search_modal = document.querySelector("#searchModal")
let bg_modal = document.querySelector('#bg')

search.onclick = (e) => {

    open_search_Modal()
    bg_modal.classList.add('bg_modal')
}

function open_search_Modal(item) {
    search_modal.innerHTML = `
    <div class="main_sm">
    <input type="search" placeholder="Search...">
    <div>
        <img src="" alt="">
        <p></p>
    </div>
    <div>
        <img src="" alt="">
        <p></p>
    </div>
</div>
    `
}
bg_modal.onclick = () =>{
    search_modal.innerHTML = ''
    bg_modal.classList.remove('bg_modal')
}
