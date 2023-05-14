
export const  footerCreate = (place) => {
    place.innerHTML +=`        <h3>Добавьте нового сотрудника</h3>
    <form class="form">
      <input type="text" name="name" placeholder="Как его зовут" id="name">
      <input type="number" name="salary" placeholder="З/П в $" id="salary">
      <button  id="submit">Добавить</button>
    </form>`
}