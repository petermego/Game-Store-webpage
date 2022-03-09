'use strict';

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const section = document.querySelector('.games-list');
const title = document.querySelector('.title');

toggle.onclick = function () {
    toggle.classList.toggle('toggle--isActive');
}
toggle.addEventListener('click' ,function () {
    section.classList.toggle('dark-mode');
    section.classList.toggle('switch-color');
    title.classList.toggle('dark-mode');
    title.classList.toggle('switch-color');
});