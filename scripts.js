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

    // Handle forgot password links
    const forgotPasswordManager = document.getElementById('forgot-password-manager');
    const forgotPasswordStudent = document.getElementById('forgot-password-student');

    if (forgotPasswordManager) {
        forgotPasswordManager.addEventListener('click', function(e) {
            e.preventDefault();
            const username = document.getElementById('manager-username').value;
            if (!username) {
                alert('Vui lòng nhập tên tài khoản để khôi phục mật khẩu');
                return;
            }
            // TODO: Implement password reset logic for manager
            alert('Yêu cầu khôi phục mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.');
        });
    }

    if (forgotPasswordStudent) {
        forgotPasswordStudent.addEventListener('click', function(e) {
            e.preventDefault();
            const username = document.getElementById('student-username').value;
            if (!username) {
                alert('Vui lòng nhập tên tài khoản để khôi phục mật khẩu');
                return;
            }
            // TODO: Implement password reset logic for student
            alert('Yêu cầu khôi phục mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.');
        });
    }

    // Forgot Password Popup Functionality
    const forgotPasswordLinks = document.querySelectorAll('.forgot-password-link');
    const forgotPasswordPopup = document.getElementById('forgot-password-popup');
    const closeForgotPassword = document.getElementById('close-forgot-password');
    const backToLoginLink = document.getElementById('back-to-login-link');
    const backToLoginBtn = document.getElementById('back-to-login');
    const resendCodeBtn = document.getElementById('resend-code');

    // Steps
    const step1 = document.getElementById('forgot-password-step1');
    const step2 = document.getElementById('forgot-password-step2');
    const step3 = document.getElementById('forgot-password-step3');
    const step4 = document.getElementById('forgot-password-step4');

    // Forms
    const formStep1 = document.getElementById('forgot-password-form-step1');
    const formStep2 = document.getElementById('forgot-password-form-step2');
    const formStep3 = document.getElementById('forgot-password-form-step3');

    // Timer variables
    let verificationTimer;
    let timeLeft = 300; // 5 minutes in seconds

    // Show forgot password popup and hide login popup
    forgotPasswordLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loginPopup.classList.add('hidden'); // Hide login popup
            forgotPasswordPopup.classList.remove('hidden'); // Show forgot password popup
        });
    });

    // Close forgot password popup
    if (closeForgotPassword) {
        closeForgotPassword.addEventListener('click', () => {
            forgotPasswordPopup.classList.add('hidden');
        });
    }

    // Back to login
    if (backToLogin) {
        backToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            forgotPasswordPopup.classList.add('hidden');
            loginPopup.classList.remove('hidden'); // Show login popup again
        });
    }

    // Handle forgot password form submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('forgot-username').value;
            
            // Here you would typically make an API call to your backend
            // For now, we'll just show a success message
            alert(`Yêu cầu khôi phục mật khẩu đã được gửi cho tài khoản: ${username}\nVui lòng kiểm tra email của bạn.`);
            
            // Reset form and close popup
            forgotPasswordForm.reset();
            forgotPasswordPopup.classList.add('hidden');
        });
    }

    // Close popup when clicking outside
    if (forgotPasswordPopup) {
        window.addEventListener('click', (e) => {
            if (e.target === forgotPasswordPopup) {
                forgotPasswordPopup.classList.add('hidden');
            }
        });
    }
});