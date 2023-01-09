/* Same code in a short way 

document.querySelector(".hamburguer").addEventListener('click', () =>
  document.querySelector('.container').classList.toggle('show-menu')
)


*/

var hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', function () {
  document.querySelector('.container').classList.toggle('show-menu')
})
