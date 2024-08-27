document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.querySelector('.language-selector');
    const selectedLanguage = document.getElementById('selected-language');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    const navItem = document.querySelector('.nav_item');

    // Toggle the dropdown on click
    languageSelector.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        navItem.classList.toggle('show');
    });

    // Change language on dropdown click
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const language = this.getAttribute('data-language');
            selectedLanguage.textContent = language;
            navItem.classList.remove('show'); // Hide the dropdown
        });
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', function(e) {
        if (!navItem.contains(e.target)) {
            navItem.classList.remove('show');
        }
    });
});
