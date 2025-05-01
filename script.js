    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const closeBtn = document.querySelector('.close-menu');

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });