// Select all template images
const templateImages = document.querySelectorAll('.template');
let selectedTemplate = '';

// Add click event listeners to template images
templateImages.forEach(image => {
    image.addEventListener('click', () => {
        // Remove 'selected' class from all images
        templateImages.forEach(img => img.classList.remove('selected'));
        // Add 'selected' class to the clicked image
        image.classList.add('selected');
        // Store the selected template
        selectedTemplate = image.getAttribute('data-template');
    });
});

// Start writing button click event
document.getElementById('startButton').addEventListener('click', () => {
    if (selectedTemplate) {
        // Redirect to writing.html with selected template
        window.location.href = `writing.html?template=${selectedTemplate}`;
    } else {
        alert('Please select a template before proceeding.');
    }
});
