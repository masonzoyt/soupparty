// Get the input element from the HTML using its ID 'myInput'
const input = document.getElementById('yesNoInput');
// Add an array of colors to cycle through
const images = [
    'image1.jpg', //change these to fr images 
    'image 2.jpg', 
    'image 3.jpg',
    'image 4.jpg',
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

