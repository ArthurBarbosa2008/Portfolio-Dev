const mobile = document.getElementById('mobile-menu')
const menu = document.querySelector('nav')

mobile.addEventListener('click', function(event){
    if (menu.classList.contains('off')){
        menu.classList.replace('off', 'active')
    } else if (menu.classList.contains('active')){
        menu.classList.replace('active', 'off')
    } else {
        menu.classList.add('active')
    }
})