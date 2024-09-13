// scripts.js

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Optionally, show the default section (e.g., Location) on page load
window.onload = () => {
    showSection('location');
};
