// Get the input element from the HTML using its ID 'myInput'
const input = document.getElementById('yesNoInput');
// Add an array of colors to cycle through
const colors = ['#143601', '#1A4301', '#245501', '#538D22', '#73A942'];
let currentColorIndex = 0;

// Change from 'input' to 'keyup' event and check for Enter key
input.addEventListener('keyup', function(event) {
    // Check if the pressed key was Enter
    if (event.key === 'Enter') {
        // Convert input to lowercase and check value only when Enter is pressed
        if (this.value.toLowerCase() === 'yes') {
            this.classList.add('correct-answer');
            // Cycle to next color
            document.body.style.backgroundColor = colors[currentColorIndex];
            // Move to next color in array, loop back to start if at end
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        } else {
            this.classList.remove('correct-answer');
        }
    }
});