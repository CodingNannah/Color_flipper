const body = document.getElementsByTagName("body")[0];

function setColor(colorValue) {
    body.style.backgroundColor = colorValue;
}

// Tim's rgb method:
// function randomColor() {
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);

//     const color = `rgb(${red}, ${green}, ${blue})`;

//     body.style.backgroundColor = color;
// }

// Hex Method
function randomColor() {
    const hexChars = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexColor += hexChars[randomIndex];
    }
    body.style.backgroundColor = hexColor;
}