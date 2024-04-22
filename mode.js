document.addEventListener("DOMContentLoaded", function() {
    const toggleTheme = document.getElementById("toggle-theme");

    const isDarkMode = localStorage.getItem("theme") === "dark";

    setTheme(isDarkMode);

    toggleTheme.addEventListener("change", function() {
        const isDarkMode = this.checked;
        setTheme(isDarkMode);
        // Menyimpan tema ke localstorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    function setTheme(isDarkMode) {
        const elementsToToggle = document.querySelectorAll("body, main, footer");
        const formCheckLabel = document.querySelector(".check-label");

        elementsToToggle.forEach(function(element) {
            if (isDarkMode) {
                element.classList.add("dark-mode");
            } else {
                element.classList.remove("dark-mode");
            }
        });

        if (isDarkMode) {
            formCheckLabel.textContent = " Dark";
            formCheckLabel.innerHTML = '<i class="fa-solid fa-moon"></i>' + formCheckLabel.innerHTML;
            if (formCheckLabel.querySelector(".fa-sun")) {
                formCheckLabel.querySelector(".fa-sun").remove();
            }
        } else {
            formCheckLabel.textContent = " Light";
            formCheckLabel.innerHTML = '<i class="fa-solid fa-sun"></i>' + formCheckLabel.innerHTML;
            if (formCheckLabel.querySelector(".fa-moon")) {
                formCheckLabel.querySelector(".fa-moon").remove();
            }
        }

    }
});