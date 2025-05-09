document.addEventListener('DOMContentLoaded', () => {
    // Determine the base path dynamically
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

    // Load header
    fetch(`${basePath}assets/html/header.html`)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Dynamically set paths for header links
            document.getElementById('home-link').href = `${basePath}index.html`;
            document.getElementById('about-link').href = `${basePath}pages/about.html`;
            document.getElementById('products-link').href = `${basePath}pages/products.html`;
            document.getElementById('cupcakes-link').href = `${basePath}pages/products.html#cupcakes`;
            document.getElementById('weddingcakes-link').href = `${basePath}pages/products.html#weddingcakes`;
            document.getElementById('contact-link').href = `${basePath}pages/contact.html`;

            // Dynamically set the logo path
            document.getElementById('logo').src = `${basePath}assets/images/Logoclean.png`;
        });

    // Load footer
    fetch(`${basePath}assets/html/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });

    const dropdown = document.querySelector('.dropdown');

    if (dropdown) {
        dropdown.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'A') {
                // Allow the link to work as expected
                return;
            }
            const dropdownContent = document.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    }

    const backToTopButton = document.getElementById('back-to-top');

    // Show the button when the user scrolls down 100px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

