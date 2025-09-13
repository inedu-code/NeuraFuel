// Mobile Navigation Toggle
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Process step animation
        const processSteps = document.querySelectorAll('.process-step');
        
        function checkVisibility() {
            processSteps.forEach(step => {
                const position = step.getBoundingClientRect();
                
                // Checking if the element is in viewport
                if(position.top < window.innerHeight - 100 && position.bottom >= 0) {
                    step.classList.add('visible');
                }
            });
        }
        
        // Check on load and scroll
        window.addEventListener('load', checkVisibility);
        window.addEventListener('scroll', checkVisibility);
        
        // Initial check
        checkVisibility();