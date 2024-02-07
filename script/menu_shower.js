
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header')
    const menuToggle = document.getElementById('menu_toggle')
    const list_menu = document.querySelector('.list_menu')

    menuToggle.addEventListener("click", function() { 
        header.classList.toggle("big_header")
        list_menu.classList.toggle("list_menu__active")
    })
})