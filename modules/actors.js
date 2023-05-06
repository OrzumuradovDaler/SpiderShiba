import { headerCreate, reload } from "./ui";
import { getData } from "./http";

let header = document.querySelector('header')
headerCreate(header)

let person = location.href.split(`id=`)
let person_id = person[1]

let career_of_a = document.querySelector('.career_of_a')
let height_of_a = document.querySelector('.height_of_a')
let birthday_of_a = document.querySelector('.birthday_of_a')
let place_brith_of_a = document.querySelector('.place_brith_of_a')
let genre_of_a = document.querySelector('.genre_of_a')
let movie_count_of_a = document.querySelector('.movie_count_of_a')
let title_of_actor = document.querySelector('.title_of_actor')
let actor_name = document.querySelector('.actor_name')
let or_name_of_actor = document.querySelector('.or_name_of_actor')
let actor_img_title = document.querySelector('.actor_img_title')



getData(`/person/${person_id}`)
    .then(res => {
        let item = res.data
        console.log(res.data);
        let date = new Date().getFullYear()
        birthday_of_a.innerHTML =  item.birthday
        actor_name.innerHTML = item.name
        or_name_of_actor.innerHTML = item.name
        title_of_actor.innerHTML = item.name
        place_brith_of_a.innerHTML = item.place_of_birth
        actor_img_title.src = import.meta.env.VITE_BASE_IMG + item.profile_path
        career_of_a.innerHTML =  item.known_for_department
    })


