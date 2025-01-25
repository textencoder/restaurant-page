const section = document.createElement('section');
const headline = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('div');
const addressContainer = document.createElement('div');
const addressOne = document.createElement('p');
const addressTwo = document.createElement('p');

section.id = 'home-section';
image.id = 'img';
headline.innerText = "Bold Flavors. Thoughtful Dining.";
description.innerText = "Modern American with a twist of global influences, featuring a farm-to-table menu emphasizing seasonal and locally-sourced ingredients.";
addressOne.innerText = "548 Aspen Grove Lane";
addressTwo.innerText = "Boulder, Colorado 80301";

section.append(headline, description, image, addressContainer);
addressContainer.append(addressOne, addressTwo);

export default {
    section
};