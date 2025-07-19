// Get the input element from the HTML using its ID 'myInput'
const input = document.getElementById('yesNoInput');
// Add an array of colors to cycle through
const images = [
    '37.767502, -122.474141.png', //change these to fr images 
    '37.769414, -122.474025.png', 
    '37.769660, -122.477462.png',
    '37.769579, -122.471638.png',
]; 
let currentImageIndex = 0;

// Change from 'input' to 'keyup' event and check for Enter key
input.addEventListener('keyup', function(event) {
    // Check if the pressed key was Enter
    if (event.key === 'Enter') {
        // Convert input to lowercase and check value only when Enter is pressed
        if (this.value.toLowerCase() === 'yes') {
            this.classList.add('correct-answer');
            // Cycle to next color
            document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            // Move to next color in array, loop back to start if at end
            currentColorIndex = (currentImageIndex + 1) % colors.length;
        } else {
            this.classList.remove('correct-answer');
        }
    }
});