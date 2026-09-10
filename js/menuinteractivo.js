const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    btn.addEventListener('click', () => {
        nav.classList.toggle('activo');
    });