document.addEventListener('DOMContentLoaded', function () {
    let offsetX = 0;
    let offsetY = 0;
    let directionX = 0.5; // Set a constant speed for X direction
    let directionY = 0.5; // Set a constant speed for Y direction

    function updateBackgroundPosition() {
        // Adjust the movement direction for a smooth background transition
        offsetX += directionX;
        offsetY += directionY;

        document.body.style.backgroundPosition = `${-50 + offsetX}px ${-50 + offsetY}px`;

        // Continue animating
        requestAnimationFrame(updateBackgroundPosition);
    }

    // Event listener for mouse movement (Desktop)
    document.addEventListener('mousemove', function(e) {
        // Get the dimensions of the window
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate the center of the screen
        const centerX = windowWidth / 2;
        const centerY = windowHeight / 2;

        // Determine direction based on mouse position relative to the center
        directionX = e.clientX > centerX ? 0.5 : -0.5; // Move right if mouse is right of center, otherwise move left
        directionY = e.clientY > centerY ? 0.5 : -0.5; // Move down if mouse is below center, otherwise move up
    });

    // Event listener for touch movement (Mobile)
    document.addEventListener('touchmove', function(e) {
        const touch = e.touches[0]; // Get the first touch point

        // Get the dimensions of the window
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate the center of the screen
        const centerX = windowWidth / 2;
        const centerY = windowHeight / 2;

        // Determine direction based on touch position relative to the center
        directionX = touch.clientX > centerX ? 0.5 : -0.5; // Move right if touch is right of center, otherwise move left
        directionY = touch.clientY > centerY ? 0.5 : -0.5; // Move down if touch is below center, otherwise move up
    });

    // Start the continuous background movement
    updateBackgroundPosition();
});
