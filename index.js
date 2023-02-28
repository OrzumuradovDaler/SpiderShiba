/* <div class="item_grid">
<div class="item">
    <img src="./img/city.jpg" alt="" style="size: cover; " width="230px" 
    height="340px">
    <p>Рис лазер Chempion высший сорт, 900 гр</p>
    <span  class="spaan">2560 сум/мес</span>
    <span class="spaaan"><b>21.000 сум</b><img src="./img/shopping.svg" alt="">   </span>
</div>
</div>*/
let body = document.body
let section = document.querySelector('section')
let item_grid = document.createElement('div')
let  item = document.createElement('div')
let img = document.createElement('img')
let p = document.createElement('p')
let span = document.createElement('span')
let spaan = document.createElement('span')
let b = document.createElement('b')
let img1 = document.createElement('img')

for (let i = 0; i < 50; i++) {


let  item = document.createElement('div')
let img = document.createElement('img')
let p = document.createElement('p')
let span = document.createElement('span')
let spaan = document.createElement('span')
let b = document.createElement('b')
let img1 = document.createElement('img')

    section.append(item_grid)
    item_grid.classList.add('item_grid')
    item.classList.add('item')
    img.classList.add('image')
    p.classList.add('itemp')
    span.classList.add('spaan')
    spaan.classList.add('spaaan')
    item_grid.append(item)
    item.append(img)
    item.append(p)
    item.append(span)
    item.append(spaan)
    spaan.append(b)
    spaan.append(img1)
    p.innerHTML = 'Рис лазер Chempion высший сорт, 900 гр'
    span.innerHTML = "2560 сум/мес"
    img.src = "./img/city.jpg"
    b.innerHTML ="21.000 сум"
    img1.src ="./img/shopping.svg"
    console.log(i);
  }

