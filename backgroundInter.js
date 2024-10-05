document.addEventListener('DOMContentLoaded', function () {
    let offsetX = 0;
    let offsetY = 0;
    let directionX = 0;
    let directionY = 0;
    const speedFactor = 0.0001; // Control speed of movement, smaller value for slower movement

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

        // Calculate the offset of the mouse from the center
        const mouseOffsetX = e.clientX - centerX;
        const mouseOffsetY = e.clientY - centerY;

        // Set the direction in the opposite way (adjusting by a factor to control speed)
        directionX = -mouseOffsetX;
        directionY = -mouseOffsetY;
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

        // Calculate the offset of the touch from the center
        const touchOffsetX = touch.clientX - centerX;
        const touchOffsetY = touch.clientY - centerY;

        // Set the direction in the opposite way (adjusting by a factor to control speed)
        directionX = -touchOffsetX * speedFactor;
        directionY = -touchOffsetY * speedFactor;
    });

    // Start the continuous background movement
    updateBackgroundPosition();
});
