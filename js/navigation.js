const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown ul')

const toggleMenu = () => {
  dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle("shown");
  })

  return
}
toggleMenu();
