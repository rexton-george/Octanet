document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.card-container');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.card-container2');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.icon');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.s1');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.s2');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.s3');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const slideInElement = document.querySelector('.s4');

    function handleScroll() {
        const elementTop = slideInElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            slideInElement.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});