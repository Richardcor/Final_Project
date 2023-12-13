   // JavaScript function to toggle hamburger
   function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}



// Man changing section

function transformImage() {
    var manImage = document.getElementById('manImage');
    var transformedImage = document.getElementById('transformedImage');

    // Toggle visibility of the images
    manImage.style.display = 'none';
    transformedImage.style.display = 'block';

    // Apply a transformation (scaling) to the transformed image
    // transformedImage.style.transform = 'scale(1.09)';
}