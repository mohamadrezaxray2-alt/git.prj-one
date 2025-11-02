document.addEventListener('DOMContentLoaded', () => {
    // Check which page is currently loaded
    if (document.getElementById('login-form')) {
        setupLoginPage();
    } else if (document.getElementById('register-form')) {
        setupRegisterPage();
    } else if (document.querySelector('.profile-page')) {
        setupProfilePage();
    }
    updateProfileLink();
});

function updateProfileLink() {
    const profileLink = document.querySelector('.profile-icon');
    if (profileLink) {
        const user = localStorage.getItem('currentUser');
        profileLink.href = user ? 'profile.html' : 'login.html';
    }
}

function setupLoginPage() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === email && user.password === password) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'profile.html';
        } else {
            alert('Invalid credentials.');
        }
    });
}

function setupRegisterPage() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = { username, email, password, profilePic: null };

        // Store user in localStorage (in a real app, this would be a database)
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
    });
}

function setupProfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Display user info
    document.getElementById('username-display').textContent = currentUser.username;
    document.getElementById('email-display').textContent = currentUser.email;
    const profileImg = document.getElementById('profile-img');
    if (currentUser.profilePic) {
        profileImg.src = currentUser.profilePic;
    }

    // Handle profile picture upload
    document.getElementById('profile-pic-upload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgData = event.target.result;
                profileImg.src = imgData;
                currentUser.profilePic = imgData;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                localStorage.setItem('user', JSON.stringify(currentUser)); // Update main user record
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle password change
    document.getElementById('change-password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;

        if (currentPassword === currentUser.password) {
            currentUser.password = newPassword;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('user', JSON.stringify(currentUser));
            alert('Password changed successfully.');
        } else {
            alert('Incorrect current password.');
        }
    });

    // Handle logout
    document.getElementById('logout-button').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
}
