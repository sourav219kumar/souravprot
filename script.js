// Sticky Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Close Menu on Scroll
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring AI Engineer', 'Web Developer', 'ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Form Submission with SweetAlert2
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/sawsourav219@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting me. I will get back to you soon.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
        form.reset();
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Retry'
        });
        console.error(error);
    });
});
