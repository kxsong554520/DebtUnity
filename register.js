document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Registered successfully!");
        // You can add code here to submit the form to a server if needed
    }
});
