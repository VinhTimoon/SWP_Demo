// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // School Types Slider
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.slide');
    
    if (prevBtn && nextBtn) {
        let currentSlide = 0;
        
        // Function to change slide
        const changeSlide = (direction) => {
            slides[currentSlide].classList.remove('active');
            
            if (direction === 'next') {
                currentSlide = (currentSlide + 1) % slides.length;
            } else {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            }
            
            slides[currentSlide].classList.add('active');
        };
        
        // Event listeners for slider buttons
        nextBtn.addEventListener('click', () => changeSlide('next'));
        prevBtn.addEventListener('click', () => changeSlide('prev'));
    }
    
    // Chatbot Toggle
    const chatbotIcon = document.querySelector('.bot-icon');
    
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', function() {
            alert('Chat support is currently unavailable. Please contact us during business hours.');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // This is a placeholder - in a real implementation, you would add smooth scrolling to sections
            console.log('Navigation link clicked: ' + this.textContent);
        });
    });
    
    // Demo Button Click
    const demoButtons = document.querySelectorAll('.demo-btn');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! A member of our team will contact you shortly to schedule a demo.');
        });
    });
    
    // Mobile Menu Toggle (for responsive design)
    // This is a placeholder for mobile menu functionality
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        
        if (nav) {
            // Create mobile menu toggle button
            const mobileMenuToggle = document.createElement('div');
            mobileMenuToggle.className = 'mobile-menu-toggle';
            mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
            
            // Add it to the DOM only on small screens
            if (window.innerWidth <= 768) {
                nav.querySelector('.container').appendChild(mobileMenuToggle);
                
                // Event listener for toggle
                mobileMenuToggle.addEventListener('click', function() {
                    document.querySelector('.nav-links').classList.toggle('active');
                    this.classList.toggle('active');
                });
            }
        }
    };
    
    // Call mobile menu function
    createMobileMenu();
    
    // Resize event for mobile menu
    window.addEventListener('resize', function() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768) {
            if (!mobileMenuToggle) {
                createMobileMenu();
            }
        } else {
            if (mobileMenuToggle) {
                mobileMenuToggle.remove();
            }
        }
    });
    
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Login Popup Logic
    const loginBtns = document.querySelectorAll('.login-btn');
    const loginPopup = document.getElementById('login-popup');
    const closeLoginPopup = document.getElementById('close-login-popup');
    const roleTabs = document.querySelectorAll('.role-tab');
    const forms = {
        manager: document.getElementById('login-form-manager'),
        parent: document.getElementById('login-form-parent'),
        student: document.getElementById('login-form-student')
    };

    loginBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            loginPopup.classList.remove('hidden');
        });
    });
    if (closeLoginPopup) {
        closeLoginPopup.addEventListener('click', function() {
            loginPopup.classList.add('hidden');
        });
    }
    // Đóng popup khi click ngoài nội dung
    loginPopup && loginPopup.addEventListener('click', function(e) {
        if (e.target === loginPopup) loginPopup.classList.add('hidden');
    });
    // Chuyển tab vai trò
    roleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            roleTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            Object.values(forms).forEach(f => f.classList.add('hidden'));
            const role = tab.getAttribute('data-role');
            forms[role].classList.remove('hidden');
        });
    });
    // Ngăn reload khi submit form
    Object.values(forms).forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Redirect to dashboard after successful login
            window.location.href = 'dashboard.html';
        });
    });
});