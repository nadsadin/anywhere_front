import '../scss/style.scss';
import './bootstrap';
import 'popper.js'
$(function() {
    console.log('Hello world');

});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// document.documentElement.style.setProperty('--mdc-top-app-bar-width', `${bar_width}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    let bar_width = document.querySelector('.top-app-bar__scroll-target').clientWidth;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // document.documentElement.style.setProperty('--mdc-top-app-bar-width', `${bar_width}px`);
});
