document.addEventListener("DOMContentLoaded", () => {
    const locations = ["Main Building", "Library", "Laboratories", "Classrooms", "Auditorium", "Sports Complex", "Cafeteria", "Hostel", "Administration", "Parking Area"];
    const facilities = [
        { name: "Library", info: "Thousands of books and journals." },
        { name: "Laboratories", info: "Modern labs for research." },
        { name: "Sports Complex", info: "Indoor & outdoor sports facilities." }
    ];

    document.getElementById('nav-list').innerHTML = locations.map(loc => `<li onclick="highlightLocation('${loc}')">${loc}</li>`).join('');
    document.getElementById('facilities').innerHTML = facilities.map(f => `<div class='facility-card'><h4>${f.name}</h4><p>${f.info}</p></div>`).join('');
});

function highlightLocation(name) {
    alert(`Highlighting ${name} in 3D view (Functionality Coming Soon!)`);
}
