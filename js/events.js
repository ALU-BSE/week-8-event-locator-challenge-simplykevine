const events = [
    { id: 1, name: "Music Fest", date: "2025-05-20", location: "New York", category: "music", description: "A grand music festival" },
    { id: 2, name: "Tech Summit", date: "2025-06-15", location: "San Francisco", category: "tech", description: "The biggest tech meetup" },
];

function displayEvents() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search")?.toLowerCase() || "";
    const date = params.get("date") || "";
    const category = params.get("category") || "";

    const filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(search) &&
        (date === "" || event.date === date) &&
        (category === "" || event.category === category)
    );

    const eventList = document.getElementById("eventList");
    eventList.innerHTML = filteredEvents.map(event => `
        <div class="col-md-4">
            <div class="card p-3 m-2">
                <h5>${event.name}</h5>
                <p>${event.date} - ${event.location}</p>
                <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `).join('');
}

window.onload = displayEvents;
