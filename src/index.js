console.log('server initialized')

import './styles.css';
import Home from './home.js';
import appendTest from './menu.js';
import aboutSection from './about.js';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const content = document.getElementById('content');

set_home: for (let value of Object.values(Home)) {
    document.querySelector('#content').append(value);
}

homeButton.style.fontWeight = '700';

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    for (let value of Object.values(Home)) {
        document.querySelector('#content').append(value);
    }
    document.querySelectorAll('button').forEach(b => {
        b.style.fontWeight = '500';
    })
    homeButton.style.fontWeight = '700';
})

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    appendTest();
    document.querySelectorAll('button').forEach(b => {
        b.style.fontWeight = '500';
    })
    menuButton.style.fontWeight = '700';
})

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    aboutSection();
    document.querySelectorAll('button').forEach(b => {
        b.style.fontWeight = '500';
    })
    aboutButton.style.fontWeight = '700';
})