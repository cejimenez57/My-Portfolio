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
document.getElementById('about-link').addEventListener('click', function () {
    showSection('about-me');
});

document.getElementById('certifications-link').addEventListener('click', function () {
    showSection('certifications');
});

document.getElementById('projects-link').addEventListener('click', function () {
    showSection('projects');
});

document.getElementById('contact-link').addEventListener('click', function () {
    showSection('contact');
});

// Show "About Me" section by default on page load
document.addEventListener('DOMContentLoaded', function () {
    showSection('about-me');
});
