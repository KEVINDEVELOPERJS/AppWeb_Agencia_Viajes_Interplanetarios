 const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

   
    const temaGuardado = localStorage.getItem('tema');

    if (temaGuardado === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

   
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        const esClaro = document.body.classList.contains('light-mode');

    
        if (esClaro) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        
        localStorage.setItem('tema', esClaro ? 'light' : 'dark');
    });