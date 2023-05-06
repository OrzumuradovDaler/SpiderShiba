import { headerCreate, reload } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
headerCreate(header)

let movies = document.querySelector('.movies')
let located_data = JSON.parse(localStorage.getItem('favorites'))
console.log(located_data);




located_data.forEach(el => {
    getData(`/movie/${el}`)
        .then(res => {
            let item = res.data
                movies.innerHTML += `
            <div class="movie-card" >
                <div class="image">
                    <img src="${import.meta.env.VITE_BASE_IMG + item.poster_path}" alt="image">
                    <span>${item.vote_average}</span>
					<a href="/pages/movieid.html?id=${item.id}">
                    	<button>Карточка фильма</button>
					</a>
                </div>
                <div class="name__genre">
                    <p>${item.title}</p>
                    <p>${item.genre_ids}</p>
                </div>
            </div>
            `
            })
        })


