import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let iframe = document.querySelector('iframe')

headerCreate(header)

let movie_id = location.search.split('=').at(-1)

getData(`/movie/${movie_id}`)
    .then(res => {console.log(res)})

getData(`/movie/${movie_id}/videos`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
    })

getData(`/movie/${movie_id}/credits`)
    .then(res =>
    {
        console.log(res.data.cast);
        let actors = document.querySelector('.actors')

        for(let item of res.data.cast){
            let ppimg = document.createElement('img')

            ppimg.classList.add('ppimg')

            actors.append(ppimg)

            ppimg.src = import.meta.env.VITE_BASE_IMG + item.profile_path
        }
    })







    getData(`/movie/${movie_id}`)
    .then(res => {
        console.log(res.data) 

            let mbpimg = document.querySelector('.movie_backdrop_path')
            mbpimg.src = import.meta.env.VITE_BASE_IMG + res.data.poster_path

            let mrstitle = document.querySelector('.mrs_title')
            mrstitle.innerHTML = res.data.original_title

            let mrsname = document.querySelector(".mrs_name")
            mrsname.innerHTML = `Language: ${res.data.original_language}`

            let mrsabout = document.querySelector('.mrs_about')
            mrsabout.innerHTML = res.data.overview
            
            let year = document.querySelector('.year')
            let country = document.querySelector('.country')
            let slogan = document.querySelector('.slogan')
            let rejisser = document.querySelector('.rejisser')
            let scenariy = document.querySelector('.scenariy')
            let prodyusser = document.querySelector('.prodyusser')
            let operator = document.querySelector('.operator')
            let kompozitor = document.querySelector('.kompozitor')
            let xudojnik = document.querySelector('.xudojnik')
            let montaj = document.querySelector('.montaj')
            let genre = document.querySelector('.genre')
            let sbori = document.querySelector('.sbori')
            let premyera = document.querySelector('.premyera')
            let vozrast = document.querySelector('.vozrast')
            let time = document.querySelector('.time')


            year.innerHTML = res.data.release_date
            country.innerHTML = res.data.spoken_languages[0].name
            slogan.innerHTML = "Не задано"
            rejisser.innerHTML = "Не задано"
            scenariy.innerHTML = "Не задано"
            prodyusser.innerHTML = "Не задано"
            operator.innerHTML = "Не задано"
            kompozitor.innerHTML = "Не задано"
            xudojnik.innerHTML = "Не задано"
            montaj.innerHTML ="Не задано"
            genre.innerHTML = res.data.genres[0].name
            sbori.innerHTML = res.data.budget
            premyera.innerHTML = res.data.release_date
            vozrast.innerHTML = "+3"
            time.innerHTML = res.data.runtime
            
        })

