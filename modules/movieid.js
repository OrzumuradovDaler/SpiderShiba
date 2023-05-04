import { headerCreate } from "./ui";
import { getData } from "./http";
import { reload } from "./ui";
let header = document.querySelector('header')
let body = document.body
let movie_id = location.search.split('=').at(-1)

headerCreate(header)

getData('/movie/popular')
    .then(res => {
        // console.log(res);
    })


getData(`/movie/${movie_id}`)
    .then(({ data }) => {
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + data.backdrop_path})`
        let title_movie = document.querySelector('.title_movie')
        let poster = document.querySelector('.first-section__poster')
        let loc = document.querySelector('.first-section__location-item_active')
        let title = document.querySelector('.first-section__title')
        let sub_title = document.querySelector('.first-section__sub-title')
        let desrc = document.querySelector('.first-section__txt')
        let rating = document.querySelector('.first-section__header-bottom-rating')
        let fav = document.querySelector('.first-section__header-bottom-txt')
        let rating_view = data.vote_average.toString().replaceAll('.', '').slice(0, 2)
        let year = document.querySelector('#year')
        let country = document.querySelector('#country')
        let tagline = document.querySelector('#tagline')
        let director = document.querySelector('#director')
        let scenario = document.querySelector('#scenario')
        let producer = document.querySelector('#producer')
        let operator = document.querySelector('#operator')
        let composer = document.querySelector('#composer')
        let art = document.querySelector('#art')
        let visual_effect = document.querySelector('#visual_effect')
        let genre = document.querySelector('#ganre')
        let profit = document.querySelector('#profit')
        let premiere_world = document.querySelector('#premiere_world')
        let premiere_RF = document.querySelector('#premiere_RF')
        let age_limit = document.querySelector('#age_limit')
        let duration = document.querySelector('#duration')
        title_movie.innerHTML = data.title
        loc.innerHTML = data.title
        title.innerHTML = data.original_title
        sub_title.innerHTML = data.original_title
        desrc.innerHTML = data.overview
        rating.firstElementChild.innerHTML = `Рейтинг ожиданий ${rating_view}%`
        fav.innerHTML = `В избранном у ${Math.round(data.popularity)} человек`
        year.innerHTML = data.release_date.split('-').at(0)
        country.innerHTML = ''
        tagline.innerHTML = data.title.split('.').at(0)
        reloadMovieCrews(data.production_countries, country)
        reloadMovieCrews(data.genres, genre)
        profit.innerHTML = data.revenue + '$'
        premiere_world.innerHTML = data.release_date
        premiere_RF.innerHTML = data.release_date
        if (data.adult === false) {
            age_limit.innerHTML = '16+'
        } else {
            age_limit.innerHTML = '18+'
        }
        duration.innerHTML = `${data.runtime} мин.`

        getData(`/movie/${movie_id}/credits`)
            .then(({ data }) => {
                let directors = data.crew.filter(el => el.known_for_department === 'Directing')
                let scenarios = data.crew.filter(el => el.known_for_department === 'Writing')
                let producers = data.crew.filter(el => el.known_for_department === 'Production')
                let operators = data.crew.filter(el => el.known_for_department === 'Visual Effects')
                let composers = data.crew.filter(el => el.known_for_department === 'Sound')
                let arts = data.crew.filter(el => el.known_for_department === 'Art')
                let visual_effects = data.crew.filter(el => el.known_for_department === 'Visual Effects')
                reloadMovieCrews(directors, director)
                reloadMovieCrews(scenarios, scenario)
                reloadMovieCrews(producers, producer)
                reloadMovieCrews(operators, operator)
                reloadMovieCrews(composers, composer)
                reloadMovieCrews(arts, art)
                reloadMovieCrews(visual_effects, visual_effect)
            })

        rating.lastElementChild.style.width = `${rating_view}%`
        poster.src = import.meta.env.VITE_BASE_IMG + data.poster_path
    })


function reloadMovieCrews(arr, place) {
    place.innerHTML = ''
    arr.forEach((el, idx) => {
        if (idx !== arr.length - 1) {
            if (el.name !== '' || false) {
                place.innerHTML += `${el.name}, `
            } else {
                place.innerHTML += 'Никого не найдено!'
            }
        } else {
            if (el.name !== '' || false) {
                place.innerHTML += `${el.name}`
            } else {
                place.innerHTML += 'Никого не найдено!'
            }
        }
    })
}


getData(`/movie/${movie_id}/credits`)
    .then(res =>{
        let s_actors_movie = document.querySelector('.s_actors_movie')
        let arr = res.data.cast.slice(0,10)
        for(let item of arr){
            let act_cont = document.createElement('div')
            let img = document.createElement('img')
            let name = document.createElement('h4')
            let or_name = document.createElement('span')
            let character = document.createElement('p')

            img.src = import.meta.env.VITE_BASE_IMG + item.profile_path
            name.innerHTML = item.name
            or_name.innerHTML = item.original_name
            character.innerHTML = item.character
            act_cont.classList.add('act_cont')

            act_cont.append(img, name, or_name,character)
            s_actors_movie.append(act_cont)
        }
    })

   

    getData(`/movie/${movie_id}/videos`)
    .then(res =>{

        let iframe = document.querySelector('iframe')
        iframe.src = `https://www.youtube.com/embed/${res.data.results[0].key}`
    })


    getData(`/movie/${movie_id}/images`)
    .then(res=>{
        let posters = document.querySelector('.posters')
        let arr_posters = res.data.posters.slice(0,4)
        for(let item of arr_posters){
            let poster = document.createElement('img')
            poster.src = import.meta.env.VITE_BASE_IMG + item.file_path
            posters.append(poster)
        }
        let screens_posters = res.data.backdrops.slice(0,8)
        let screens = document.querySelector('.screens')
        for(let item of screens_posters){
            let screen = document.createElement('img')
            screen.src = import.meta.env.VITE_BASE_IMG + item.file_path
            screens.append(screen)
        }
    })
    getData(`/movie/${movie_id}/similar`)
    .then(res =>{
        console.log(res.data.results);
    })

    getData(`/movie/${movie_id}/similar`)
    .then(res => {
        let similar_movies = document.querySelector(".similar_movies")
        let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        reload(res.data.results.slice(0, 4), similar_movies)
    })