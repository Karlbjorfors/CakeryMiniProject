document.addEventListener('DOMContentLoaded', () => {
    // Load header index.html
    fetch('assets/html/header.html') // Corrected path
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    // Load footer index.html
    fetch('assets/html/footer.html') // Corrected path
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });

    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'A') {
            // Allow the link to work as expected
            return;
        }
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });
});

