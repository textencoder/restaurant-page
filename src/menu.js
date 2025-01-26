const section = document.createElement("section");

//starters
// const entrees = document.createElement('div');
// const desserts = document.createElement('div');
// const drinks = document.createElement('div');

const menuObject = {
  "Korean BBQ Cauliflower Bites": 9,
  "Avocado Crab Toast": 12,

  "Herb-Crusted Rocky Mountain Trout": 19,
  "Maple-Braised Short Ribs": 22,

  "Honey Lavender Panna Cotta": 9,
  "Matcha Cheesecake Tart": 10,

  "Smoky Old Fashioned": 7,
  "Cranberry Sage Mule": 8,
};

export default function appendTest() {
  for (let i = 0; i < 4; i++) {
    const subSection = document.createElement("div");
    const header = document.createElement("h2");

    section.appendChild(subSection);
    subSection.appendChild(header);

    for (let j = 0; j < 4; j++) {
      const scopedItem = document.createElement("p");
      subSection.appendChild(scopedItem);
    }
  }
  section.id = "menu-section";

  idAssign();

  document.querySelector("#content").appendChild(section);

  classAssign();
  setHeadings();
  addPrices();
}

const divId = ["Starters", "Entrees", "Desserts", "Drinks"];

function setHeadings() {
  const headings = document.querySelectorAll("h2");

  for (let i = 0; i < divId.length; i++) {
    headings[i].innerText = divId[i];
  }
}

function idAssign() {
  const divs = document.querySelectorAll("div");

  for (let i = 0; i < divs.length; i++) {
    divs[i].id = divId[i].toLowerCase();
  }
}

function classAssign() {
  const paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 == 0) {
      paragraphs[i].classList.add("menu-item");
    }
  }

  const menuItems = document.querySelectorAll(".menu-item");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].textContent = Object.keys(menuObject)[i];
  }
}

function addPrices() {
  const paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 != 0) {
      paragraphs[i].classList.add("price-item");
    }
  }

  const priceItems = document.querySelectorAll(".price-item");

  for (let i = 0; i < priceItems.length; i++) {
    priceItems[i].textContent = Object.values(menuObject)[i];
  }
}
