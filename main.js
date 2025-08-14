document.querySelectorAll(".tech-option").forEach((button) => {
    button.addEventListener("click", function() {
        const selectedOption = this.getAttribute("data-option");
        alert(`Has seleccionado: ${selectedOption}`);
    });
});
