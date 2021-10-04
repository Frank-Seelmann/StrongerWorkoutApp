//Will be replaced in Vue later...

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            }
            else {
                box.classList.add('is-hidden');
            }
            
        })
    })
})

//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});