const input = document.getElementById("answerInput");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value.trim().toLowerCase();

        if (value === "1693") {
            document.getElementById("correctPopup").style.display = "block";
        } else {
            document.getElementById("wrongPopup").style.display = "block";
        }
    }
});

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    input.value = "";
}
