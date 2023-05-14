


export const headerCreate = (place) => {
 place.innerHTML += ` <div class="header__top">
 <h1>Учет сотрудников в компании Wepro</h1>
 <h2>Общее число сотрудников: <span class="workers_count">1</span></h2>
 <h3>Премию получат: <span class="premium_gainer">1</span></h3>
</div>
<div class="header__bottom">
 <input type="search" name="" id="search" placeholder="Найти сотрудника">
 <div class="header__bottom__buttons" >
   <button id="all_workers">Все сотрудники</button>
   <button id="to_increase">На повышение</button>
   <button id="get_a_lot_money">З/П больше 1000$</button>
 </div>
</div>`   
}
