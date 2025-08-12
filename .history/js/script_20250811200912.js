        // Gestión del modo claro/oscuro
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Comprobar preferencia almacenada
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        function updateLogo() {
    const logoImg = document.getElementById('logoImg');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Añadir clase para fundido
    logoImg.classList.add('fade-out');
    
    setTimeout(() => {
        if (isDarkMode) {
            logoImg.src = 'https://i.imgur.com/OcqHPX8.png'; // Logo para modo oscuro
        } else {
            logoImg.src = 'https://i.imgur.com/SGKpW2X.png'; // Logo para modo claro
        }
        
        // Quitar clase de fundido después de cambiar la imagen
        setTimeout(() => {
            logoImg.classList.remove('fade-out');
        }, 10);
    }, 300); // Tiempo igual a la duración de la transición CSS
}
        
        // Menú móvil
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Efecto sticky header al hacer scroll
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Animaciones al hacer scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const appearOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        
        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });
        
        // Cambiar clase activa en navegación
        const navLinks = document.querySelectorAll('nav a');
        const currentPage = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
            
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Cerrar menú móvil si está abierto
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
        
        // Animación de carga inicial
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 200);
        });

        