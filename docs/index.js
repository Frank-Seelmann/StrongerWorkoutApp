//Will be replaced in Vue later... I think

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