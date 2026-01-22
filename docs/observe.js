// Get the input element from the HTML using its ID 'yesNoInput'
const input = document.getElementById('yesNoInput');
// Add an array of images to cycle through
const images = [
    '37.767502, -122.474141.jpg', //change these to fr images 
    '37.769414, -122.474025.jpg', 
    '37.769660, -122.477462.jpg',
    '37.769579, -122.471638.jpg',
]; 
let currentImageIndex = 0; //this is a function, but what does it do?

if (input="Yes")





// Change from 'input' to 'keyup' event and check for Enter key (what's keyup?)

    // Check if the pressed key was Enter
    if (event.key === 'Enter') {
        // Convert input to lowercase and check value only when Enter is pressed
        if (this.value.toLowerCase() === 'yes') {
            this.classList.add('correct-answer');
            // Get the image element and change its src
            const imageElement = document.getElementById('changing-image');
            if (imageElement) {
                imageElement.src = images[currentImageIndex];
                // Move to next image in array, loop back to start if at end
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }
        } else {
            this.classList.remove('correct-answer');
        }
    }
);