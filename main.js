function imgSlider(imagePath) {
    // Select the main Pepsi bottle image and update its source
    document.querySelector('.pepsi').src = imagePath;
}

// Function to change the background color
function changeBgColor(color) {
    // Select the main section and update its background color
    const section = document.querySelector('.sec');
    section.style.background = color;
}