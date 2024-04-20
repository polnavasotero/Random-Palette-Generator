const palleteContainer = document.getElementById('palleteContainer'); // selects the DOM element
const PALLETE_SIZE = 5; // number of colors generated

const createPallete = () => {
    palleteContainer.innerHTML = '';
    for (let i = 0; i < PALLETE_SIZE; i++) { // executes the function 5 times
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        palleteContainer.appendChild(palleteElement); // added to container
    }
    updatePallete();
}

const colorize = (element) => {
    let color = '#';
    for (let i = 0; i < 6; i++) { // executes the function 6 times because the colors are hex
        const randomElement = Math.floor(Math.random() * 16).toString(16); // obtaining a random element of the colorValues array
        color += randomElement; // adds the color to the element
    };
    element.style.backgroundColor = color; // change the bg to the color previously generated randomly
    element.innerHTML = `<span class='colorHex'>${color}</span>`; // added a span with the new color name
}

const updatePallete = () => {
    const palleteItems = document.querySelectorAll('.palleteItem'); // selects all palette items
    palleteItems.forEach(item => colorize(item)); // colorize each palette item
};

createPallete();
