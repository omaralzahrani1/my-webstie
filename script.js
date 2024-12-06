document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';

    body.classList.add(savedTheme);

    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;

        body.classList.remove('light', 'dark', 'blue');

        body.classList.add(selectedTheme);

        localStorage.setItem('theme', selectedTheme);
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
            alert("Please fill out all the fields before submitting.");
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }
});



