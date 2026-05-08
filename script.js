const API_URL = "http://localhost:5000/items";

const form = document.getElementById("itemForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const item = {
        title: document.getElementById("title").value,
        category: document.getElementById("category").value,
        color: document.getElementById("color").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });

    alert("Item Submitted Successfully");
    form.reset();
});

async function searchItems() {
    const keyword = document.getElementById("searchInput").value;

    const response = await fetch(${API_URL}/search/${keyword});
    const data = await response.json();

    const results = document.getElementById("results");
    results.innerHTML = "";

    data.forEach(item => {
        results.innerHTML += `
            <div class="item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p><b>Status:</b> ${item.status}</p>
                <p><b>Location:</b> ${item.location}</p>
            </div>
        `;
    });
}
