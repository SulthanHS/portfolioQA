// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Project Modal Logic
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const details = JSON.parse(button.getAttribute('data-details'));
        const link = button.getAttribute('data-link');

        const modalTitle = projectModal.querySelector('.modal-title');
        const modalDescription = projectModal.querySelector('#modal-description');
        const modalDetailsList = projectModal.querySelector('#modal-details');
        const modalLink = projectModal.querySelector('#modal-link');

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modalDetailsList.innerHTML = '';
        details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            modalDetailsList.appendChild(li);
        });

        if (link && link !== '#') {
            modalLink.href = link;
            modalLink.classList.remove('d-none');
        } else {
            modalLink.classList.add('d-none');
        }
    });
}

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

