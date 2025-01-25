console.log('server initialized')

import './styles.css';
import Home from './home.js';
import appendTest from './menu.js';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const content = document.getElementById('content');

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    for (let value of Object.values(Home)) {
        document.querySelector('#content').append(value);
    }
})

appendTest();