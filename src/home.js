const section = document.createElement('section');
const headline = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('img');
const addressContainer = document.createElement('div');
const addressOne = document.createElement('p');
const addressTwo = document.createElement('p');

section.id = 'home-section';
image.id = 'img';
image.src = 'https://cdn.5280.com/2023/03/Boulder-New-Pearl_pearl-street-hero-1536x1152.jpg'
headline.innerText = "Bold Flavors. Thoughtful Dining.";
description.innerText = "Crimson Fork is a modern American cafe with a twist of global influences, featuring a farm-to-table menu emphasizing seasonal and locally-sourced ingredients.";
addressOne.innerText = "548 Aspen Grove Lane";
addressTwo.innerText = "Boulder, Colorado 80301";

section.append(headline, description, image, addressContainer);
addressContainer.append(addressOne, addressTwo);

export default {
    section
};