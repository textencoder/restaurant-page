const section = document.createElement("section");

//starters
// const entrees = document.createElement('div');
// const desserts = document.createElement('div');
// const drinks = document.createElement('div');

const menuItems = {
  "Avocado Crab Toast": 12,
  "Korean BBQ Cauliflower Bites": 9,
  "Maple-Braised Short Ribs": 22,
  "Herb-Crusted Rocky Mountain Trout": 19,
  "Matcha Cheesecake Tart": 10,
  "Honey Lavender Panna Cotta": 9,
  "Cranberry Sage Mule": 8,
  "Smoky Old Fashioned": 7,
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

  console.log(section);
  section.id = "menu-section";

  document.querySelector("#content").appendChild(section);

  idAssign();
  classAssign();
  addPrices();
}

const divId = ["Starters", "Entrees", "Desserts", "Drinks"];

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
}

function addPrices() {
  const paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 != 0) {
      paragraphs[i].textContent = "price";
    }
  }
  console.log(menuItems);
}
