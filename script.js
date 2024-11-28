function downloadResume() {
    var resumePath = "./resume/Jimenez_IT24.pdf";
    var a = document.createElement("a");
    a.href = resumePath;
    a.download = "ChristianJimenez_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


document.getElementById("downloadResume").addEventListener("click", downloadResume);

// Code to navigate through sections
// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the section with the given ID
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Event listeners for navigation links
document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor link behavior
    showSection('about-me');
    window.location.hash = '#about-me'; // Update URL hash
});

document.getElementById('certifications-link').addEventListener('click', function (e) {
    e.preventDefault();
    showSection('certifications');
    window.location.hash = '#certifications';
});

document.getElementById('projects-link').addEventListener('click', function (e) {
    e.preventDefault();
    showSection('projects');
    window.location.hash = '#projects';
});

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault();
    showSection('contact');
    window.location.hash = '#contact';
});

// Show "About Me" section by default on page load
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash) {
        showSection(window.location.hash.slice(1)); // Show section based on the URL hash
    } else {
        showSection('about-me'); // Default section if no hash is present
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Code to display PDF files
// Get modal elements
const modal = document.getElementById('pdf-modal');
const pdfViewer = document.getElementById('pdf-viewer');
const closeBtn = document.querySelector('.close-btn');

// Add event listeners to certification cards
document.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
        const pdfUrl = card.getAttribute('data-pdf');
        pdfViewer.setAttribute('src', pdfUrl); // Set the iframe src to the PDF URL
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    pdfViewer.setAttribute('src', ''); // Clear the iframe src
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        pdfViewer.setAttribute('src', '');
    }
});
