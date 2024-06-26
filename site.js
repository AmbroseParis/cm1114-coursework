document.addEventListener("DOMContentLoaded", function() {
    highlightNavigation();
    setupSmoothScroll();
    makeNavbarSticky();
   
});

function highlightNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = window.location.href;
    
    navLinks.forEach(link => {
        if (currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function setupSmoothScroll() {
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}



