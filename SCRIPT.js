function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden'); // Hide all pages
    });
    document.getElementById(pageId).classList.remove('hidden'); // Show the selected page
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials for demonstration purposes
    if (username === "user" && password === "pass") {
        document.getElementById('loginMessage').innerText = "Login successful!";
        document.getElementById('loginMessage').style.color = "green";
        setTimeout(() => {
            showPage('homePage'); // Redirect to home page
        }, 1500);
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
        document.getElementById('loginMessage').style.color = "red";
    }
});
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden'); // Hide all pages
    });
    document.getElementById(pageId).classList.remove('hidden'); // Show the selected page
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials for demonstration purposes
    if (username === "user" && password === "pass") {
        document.getElementById('loginMessage').innerText = "Login successful!";
        document.getElementById('loginMessage').style.color = "green";
        setTimeout(() => {
            showPage('homePage'); // Redirect to home page
        }, 1500);
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
        document.getElementById('loginMessage').style.color = "red";
    }
});
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden'); // Hide all pages
    });
    document.getElementById(pageId).classList.remove('hidden'); // Show the selected page
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials for demonstration purposes
    if (username === "user" && password === "pass") {
        document.getElementById('loginMessage').innerText = "Login successful!";
        document.getElementById('loginMessage').style.color = "green";
        setTimeout(() => {
            showPage('homePage'); // Redirect to home page
        }, 1500);
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
        document.getElementById('loginMessage').style.color = "red";
    }
});
