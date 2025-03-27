document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const signUpModal = document.getElementById('signUpModal');
    const loginModal = document.getElementById('loginModal');
    const closeButtons = document.querySelectorAll('.auth-modal .close-modal');
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const signUpButton = document.querySelector('.sign-up');
    const signInButton = document.querySelector('.sign-in');
    const alreadyText = document.querySelector('.already-text');
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';
    document.body.appendChild(modalBackdrop);

    // Handle sign out
    const signOutButton = document.querySelector('a[href="index.html"] i.fa-sign-out-alt');
    if (signOutButton) {
        const signOutLink = signOutButton.closest('a');
        signOutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }

    // Show Sign Up Modal
    signUpButton && signUpButton.addEventListener('click', () => {
        signUpModal.classList.add('show');
        modalBackdrop.classList.add('show');
    });

    // Show Sign In Modal
    signInButton && signInButton.addEventListener('click', () => {
        loginModal.classList.add('show');
        modalBackdrop.classList.add('show');
    });

    // Close modals when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            signUpModal.classList.remove('show');
            loginModal.classList.remove('show');
            modalBackdrop.classList.remove('show');
        });
    });

    // Close modals when clicking outside
    modalBackdrop.addEventListener('click', () => {
        signUpModal.classList.remove('show');
        loginModal.classList.remove('show');
        modalBackdrop.classList.remove('show');
    });

    // Handle Sign Up Form Submission
    signUpForm && signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(signUpForm);
        const email = formData.get('email');
        
        // Store user data in localStorage
        const userData = {
            email,
            isAuthenticated: true
        };
        localStorage.setItem('user', JSON.stringify(userData));

        // Redirect to breed encyclopedia
        window.location.href = 'breedEncyclopedia.html';
    });

    // Handle Login Form Submission
    loginForm && loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const email = formData.get('email');
        
        // For frontend demo, just store the email and authenticate
        const userData = {
            email,
            isAuthenticated: true
        };
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = 'breedEncyclopedia.html';
    });

    // Switch between modals when clicking "Already have an account?"
    alreadyText && alreadyText.addEventListener('click', () => {
        signUpModal.classList.remove('show');
        loginModal.classList.add('show');
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            signUpModal.classList.remove('show');
            loginModal.classList.remove('show');
            modalBackdrop.classList.remove('show');
        }
    });

    // Check authentication status on page load
    const currentUser = localStorage.getItem('user');
    const currentPath = window.location.pathname;
    const publicPages = ['index.html', 'about.html', 'contact.html'];
    const isPublicPage = publicPages.some(page => currentPath.includes(page));

    if (currentUser) {
        const userData = JSON.parse(currentUser);
        if (userData.isAuthenticated && currentPath.includes('index.html')) {
            // If user is authenticated and on index.html, redirect to breed encyclopedia
            window.location.href = 'breedEncyclopedia.html';
        }
    } else if (!isPublicPage) {
        // Only redirect to index.html if trying to access a protected page while not authenticated
        window.location.href = 'index.html';
    }
});
