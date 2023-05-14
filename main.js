import axios from 'axios';
import { getData, patchData, deleteData, postData } from './modules/http'; 
import { headerCreate } from './modules/header';
import { footerCreate } from './modules/footer';

let header = document.querySelector('header');
let footer = document.querySelector('footer');
let main = document.querySelector('ul');

headerCreate(header);
footerCreate(footer);



function reload(arr , place) {
  for(let item of arr){
    place.innerHTML += `
    <li class="main_ul_li">
      <span id='${item.id}' class="main_ul_li_span ">${item.name}</span>
     <input type="text" id=${item.id} class="main_ul_li_input" value="${item.salary}$" data=${item.increase}>
     <div class="li_btn_group">
        <button id=${item.id} class="btn_cookie" data=${item.increase}></button>
        <button class="btn_delete" id="${item.id}"></button>
        <i id=${item.id} data=${item.rise} class='rise '></i>
     </div>
   </li>
  `;   
  }
}



getData('')
.then(res=>{
  let arr = res.data
  let workersCount = document.querySelector('.workers_count');
  workersCount.innerHTML = arr.length;
  reload(res.data , main)
  let all_workers = document.querySelector('#all_workers')
let to_increase = document.querySelector('#to_increase')
let get_a_lot_money = document.querySelector('#get_a_lot_money')
all_workers.classList.add('good')
to_increase.classList.remove('good')
get_a_lot_money.classList.remove('good')
all_workers.onclick = () =>{
  main.innerHTML = ''
  reload(res.data , main)
  reloadAll(workersCount)
}
reloadAll(workersCount)
})


getData('')
.then(res =>{
  let workersCount = document.querySelector('.workers_count');
  let all_workers = document.querySelector('#all_workers')
let to_increase = document.querySelector('#to_increase')
let get_a_lot_money = document.querySelector('#get_a_lot_money')
all_workers.classList.remove('good')
to_increase.classList.add('good')
get_a_lot_money.classList.remove('good')
  let arr = res.data
  let temp1 = []
to_increase.onclick = () =>{
  main.innerHTML= ''
  for(let item of arr){
    if(item.rise === true){
      temp1.push(item)
    }
  }
  reload(temp1 , main)
  reloadAll(workersCount)
}
reloadAll(workersCount)
})

getData(``)
.then(res =>{
  let workersCount = document.querySelector('.workers_count');
  let all_workers = document.querySelector('#all_workers')
let to_increase = document.querySelector('#to_increase')
let get_a_lot_money = document.querySelector('#get_a_lot_money')
all_workers.classList.remove('good')
to_increase.classList.remove('good')
get_a_lot_money.classList.add('good')
  let arr = res.data
  let temp1 = []
  get_a_lot_money.onclick = () =>{
  main.innerHTML= ''
  for(let item of arr){
    if(item.salary >= 1000){
      temp1.push(item)
    }
  }
  reload(temp1 , main)
  reloadAll(workersCount)
}
reloadAll(workersCount)
})



function reloadAll(workersCount) {
  let input = document.querySelectorAll('.main_ul_li_input')

  

  input.forEach(el=>{
    if(el.getAttribute('data') === 'true'){
      el.classList.add('increase')

      
    }
    el.onchange = () =>{
      patchData(`/${el.id}` , {salary: el.value})
    }
  })
  let s = document.querySelectorAll('.rise')

  s.forEach(el=>{
    if(el.getAttribute('data') === 'true'){
      el.classList.add('star')
    }
  })



  let btnCookie = document.querySelectorAll('.btn_cookie');


  let temp = []
  let premium_gainer = document.querySelector('.premium_gainer')
  premium_gainer.innerHTML = ''

  btnCookie.forEach(el =>{
    

       if(el.getAttribute('data') === 'true'){
        temp.push(el)
        premium_gainer.innerHTML = temp.length
      }
  

    el.onclick  = () => {
      if(el.getAttribute('data') === 'true'){
        el.setAttribute('data' , 'false') 
        patchData(`/${el.id}` ,  {increase : false})
        let input = el.parentElement.parentElement.querySelector('input')
        input.classList.remove('increase')
        premium_gainer.innerHTML--
      }else{
        el.setAttribute('data' , 'true') 
        patchData(`/${el.id}` ,  {increase : true})
       let input = el.parentElement.parentElement.querySelector('input')
       input.classList.add('increase')
       premium_gainer.innerHTML++
      }

    }
  })

  let btnDelete = document.querySelectorAll('.btn_delete');
      btnDelete.forEach(el => {
        el.onclick = async function() {
          let key = this.id;
          await deleteData(`/${key}`);
          this.parentElement.parentElement.remove();
          workersCount.innerHTML--
        };
      });

      let starSpan = document.querySelectorAll('.main_ul_li_span ')
      let star = document.querySelectorAll('i')


      starSpan.forEach(el =>{

        el.onclick = () =>{


        star.forEach(st =>{
          if(st.id === el.id){
            if(st.getAttribute('data') === 'true'){
              st.classList.remove('star')
              patchData(`/${el.id}` ,  {rise : false})
            }
            else{
              st.classList.add('star')
              patchData(`/${el.id}` ,  {rise : true})
            }  
          }
        })
        }
      })
      let form = document.querySelector('.form')
      

    

      form.onsubmit = (e) => {


        let name = document.querySelector('#name')
        let salary = document.querySelector('#salary')
        let obj = {
          name : name.value,
          salary : salary.value,
          rise: false,
          increase : false,
          id : Math.random()
        }
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            obj[key] = value.trim()
        })

        postData('' , obj)


    }

    

}