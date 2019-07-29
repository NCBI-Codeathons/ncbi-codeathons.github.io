const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown ul')
const mobileDropdown = document.querySelector('.usa-sidenav-sub_list .dropdown')
const mobileDropdownMenu = document.querySelector('.usa-sidenav-sub_list .dropdown ul');

const toggleMenu = () => {
  dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.classList.toggle("active");
    dropdownMenu.classList.toggle("shown");
  })

  mobileDropdown.addEventListener('click', (event) => {
    event.preventDefault();
    mobileDropdown.classList.toggle("active");
    mobileDropdownMenu.classList.toggle("shown");
  })

  document.addEventListener('click', (event) => {
    if(dropdown !== event.target) {
      dropdown.classList.toggle("active");
      dropdownMenu.classList.toggle("shown");
    }
  })

  return
}
toggleMenu();
