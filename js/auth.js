document.addEventListener('DOMContentLoaded', () => {
    // Check which page is currently loaded
    if (document.getElementById('login-form')) {
        setupAuthPage();
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

function setupAuthPage() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginContainer = document.getElementById('login-form-container');
    const registerContainer = document.getElementById('register-form-container');
    const tabButtons = document.querySelectorAll('.auth-tab-button');
    const switchers = document.querySelectorAll('[data-tab-switcher]');

    const switchTab = (tabName) => {
        if (tabName === 'login') {
            loginContainer.classList.add('active');
            registerContainer.classList.remove('active');
            tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === 'login'));
        } else {
            loginContainer.classList.remove('active');
            registerContainer.classList.add('active');
            tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === 'register'));
        }
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    switchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(switcher.dataset.tabSwitcher);
        });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'profile.html';
        } else {
            alert('Invalid credentials.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(u => u.email === email)) {
            alert('User with this email already exists.');
            return;
        }

        const newUser = { username, email, password, profilePic: null };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        switchTab('login');
    });
}

function setupProfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const usernameDisplay = document.getElementById('username-display');
    const emailDisplay = document.getElementById('email-display');
    const profileImg = document.getElementById('profile-img');
    const usernameEdit = document.getElementById('username-edit');

    usernameDisplay.textContent = currentUser.username;
    emailDisplay.textContent = currentUser.email;
    usernameEdit.value = currentUser.username;
    if (currentUser.profilePic) {
        profileImg.src = currentUser.profilePic;
    }

    document.getElementById('profile-pic-upload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgData = event.target.result;
                profileImg.src = imgData;
                currentUser.profilePic = imgData;
                updateUserRecord(currentUser);
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = usernameEdit.value;
        if (newUsername) {
            currentUser.username = newUsername;
            updateUserRecord(currentUser);
            usernameDisplay.textContent = newUsername;
            alert('Username updated successfully.');
        }
    });

    document.getElementById('change-password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;

        if (currentPassword === currentUser.password) {
            currentUser.password = newPassword;
            updateUserRecord(currentUser);
            alert('Password changed successfully.');
        } else {
            alert('Incorrect current password.');
        }
    });

    document.getElementById('logout-button').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
}

function updateUserRecord(updatedUser) {
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === updatedUser.email);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}
