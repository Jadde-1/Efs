document.addEventListener("DOMContentLoaded", function() {
    const lavkageBtn = document.querySelector(".lavkage-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    lavkageBtn.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "none" || dropdownContent.style.display === "") ? "block" : "none";
    });
});
