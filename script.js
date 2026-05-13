document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded!");

    const button = document.getElementById("welcomeBtn");

    if (button) {
        button.addEventListener("click", function () {
            alert("Welcome to my portfolio!");
        });
    }
});
