function updateBackgroundPosition(x, y) {
    // Get the dimensions of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the center of the screen
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Calculate the offset from the center
    const offsetX = x - centerX;
    const offsetY = y - centerY;

    // Calculate the background movement in the opposite direction
    // Dividing by a factor to make movement smoother
    const moveX = -offsetX / 50;
    const moveY = -offsetY / 50;

    // Set the background position
    document.body.style.backgroundPosition = `${moveX - 50}px ${moveY - 50}px`;
}

// Event listener for mouse movement (Desktop)
document.addEventListener('mousemove', function(e) {
    updateBackgroundPosition(e.clientX, e.clientY);
});

// Event listener for touch movement (Mobile)
document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0]; // Get the first touch point
    updateBackgroundPosition(touch.clientX, touch.clientY);
});
