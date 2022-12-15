setQuote = () => {
    document.getElementById("quote").textContent = localStorage.getItem("fname");
}

window.addEventListener("DOMContentLoaded", () => {
    setQuote();
    document.getElementById("nameForm").addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("fname", document.getElementById("fname").value);
        window.alert("Set local storage!");
        window.location.reload();
    })
})