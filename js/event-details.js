const events = [
    { id: 1, name: "Music Fest", date: "2025-05-20", location: "New York", category: "music", description: "A grand music festival" },
    { id: 2, name: "Tech Summit", date: "2025-06-15", location: "San Francisco", category: "tech", description: "The biggest tech meetup" },
];

function displayEventDetails() {
    const params = new URLSearchParams(window.location.search);
    const eventId = parseInt(params.get("id"));

    const event = events.find(e => e.id === eventId);
    if (event) {
        document.getElementById("eventTitle").innerText = event.name;
        document.getElementById("eventDate").innerText = `Date: ${event.date}`;
        document.getElementById("eventLocation").innerText = `Location: ${event.location}`;
        document.getElementById("eventDescription").innerText = event.description;
    } else {
        document.body.innerHTML = "<h1>Event Not Found</h1>";
    }
}

window.onload = displayEventDetails;
