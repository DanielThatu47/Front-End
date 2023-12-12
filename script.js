// Get the navbar element
const navbarContent = document.querySelector('#navbarContent');

// Add event listener for resize
window.addEventListener('resize', function() {
    // Check if navbar collapses
    if (window.innerWidth < 768) { // You may adjust the breakpoint as needed
        // Hide non-essential elements and show icons
        navbarContent.classList.add('navbar-collapse');
    } else {
        // Show non-essential elements and hide icons
        navbarContent.classList.remove('navbar-collapse');
    }
});
