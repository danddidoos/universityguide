console.log("Javascript connected");
const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#rankings-body tr");
searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();

    tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(query)) {
            row.style.display = "";
        } else {
            row.computedStyleMap.display = "none";
        }
    })
})