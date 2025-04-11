document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('../assets/html/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    // Load footer
    fetch('../assets/html/footer.html')
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

