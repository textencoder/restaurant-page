export default function aboutSection() {
    const section = document.createElement('section');
    const heading = document.createElement('h1');
    const location = document.createElement('p');
    const moreInfo = document.createElement('p');
    const events = document.createElement('p');

    section.id = 'about-section';

    heading.textContent = 'Celebrating a decade of home-grown deliciousness!';
    location.textContent = 'Located at the corner of Aspen Grove Lane and Canyon Boulevard, Crimson Fork Bistro was founded in 2015 by husband-and-wife duo Marcus and Clara Reynolds, who share a passion for innovative cuisine and sustainability.';
    moreInfo.textContent = "We've partnered with local farmers and fisheries to ensure the freshest, eco-friendly ingredients. We've also eliminated single-use plastics and maintain a robust composting and recycling program.";
    events.textContent = "Join us for our weekend brunch, cooking classes, or wine pairing dinners!";

    section.append(heading, location, moreInfo, events);
    document.querySelector("#content").appendChild(section);
}