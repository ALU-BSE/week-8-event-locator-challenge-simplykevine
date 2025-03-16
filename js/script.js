function searchEvents() {
    const search = document.getElementById("search").value;
    const date = document.getElementById("dateFilter").value;
    const category = document.getElementById("categoryFilter").value;

    const params = new URLSearchParams({ search, date, category });
    window.location.href = `events.html?${params.toString()}`;
}
