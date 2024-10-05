document.addEventListener('DOMContentLoaded', function () {
    let offsetX = 0;
    let offsetY = 0;
    let directionX = 0.707; // Initial direction towards bottom right (normalized)
    let directionY = 0.707; // Initial direction towards bottom right (normalized)
    const speed = 2; // Constant speed for the movement

    function updateBackgroundPosition() {
        // Adjust the movement direction for a smooth background transition
        offsetX += directionX * speed;
        offsetY += directionY * speed;

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

        // Calculate the direction vector away from the mouse
        const length = Math.sqrt(mouseOffsetX * mouseOffsetX + mouseOffsetY * mouseOffsetY);
        if (length !== 0) {
            directionX = -mouseOffsetX / length;
            directionY = -mouseOffsetY / length;
        }
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

        // Calculate the direction vector away from the touch point
        const length = Math.sqrt(touchOffsetX * touchOffsetX + touchOffsetY * touchOffsetY);
        if (length !== 0) {
            directionX = -touchOffsetX / length;
            directionY = -touchOffsetY / length;
        }
    });

    // Start the continuous background movement
    updateBackgroundPosition();
});
