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

        function setLogoLink() {
        const logo = document.getElementById('logoLink');
        const isDark = document.body.classList.contains('dark-theme'); // asumiendo que manejás tema con esta clase

        if (isDark) {
            logo.href = 'https://i.imgur.com/OcqHPX8.png';
        } else {
            logo.href = 'https://i.imgur.com/SGKpW2X.png';
        }
        }

        // Llamar cuando cambie el tema o al cargar la página:
        setLogoLink();

        // Si usás un botón para cambiar tema, llamá setLogoLink() después de cambiarlo.
