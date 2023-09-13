$(function () {

})

window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('.mobile-menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active')
    menu.classList.toggle('nav--active');
})

})